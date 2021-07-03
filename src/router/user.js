const express = require("express");
const User = require("../model/Users");
const Listing = require("../model/Listings");
const router = new express.Router();
const auth = require("../middleware/auth");
const {change_password_send_sms} = require("../sms/send_sms");
const { send_sms , registration_otp } = require("../sms/send_sms");
const {profile_image, s3} = require("../middleware/upload");

// Testing Get Router
// router.get('/', async (req, res) => {
//     res.status(201).send('Hiiiiii');
// });

// Post request for Signup
router.post("/signup", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        console.log('user', user)
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (err) {
        res.status(400).send(err);
    }
});

// Post request for Login
router.post("/login", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowUpdates = ["notification_token", "phone", "password"];
    const isValid = updates.every((update) => allowUpdates.includes(update));

    if (!isValid) {
        return res.status(400).send({ error: "No such property to update" });
    }

    try {
        const user = await User.findByCredentials(
            req.body.phone,
            req.body.password
        );
        // auth token
        updates.forEach((update) => {
            if(update === "notification_token") {
                user[update] = req.body[update];
            }
        });
        await user.save();
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (e) {
        res.status(400).send({ e: e.message });
    }
});

router.post("/loginEmail", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowUpdates = ["notification_token", "email", "phone", "password"];
    const isValid = updates.every((update) => allowUpdates.includes(update));

    if (!isValid) {
        return res.status(400).send({ error: "No such property to update" });
    }

    try {
        const user = await User.findByEmail(
            req.body.phone,
            req.body.password
        );
        // auth token
        updates.forEach((update) => {
            if(update === "notification_token") {
                user[update] = req.body[update];
            }
        });
        await user.save();
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (e) {
        res.status(400).send({ e: e.message });
    }
});

//Patch User Profile Update
router.patch("/updateProfile", [auth, profile_image.single("images")], async (req,res) => {
    const updates = Object.keys(req.body);
    const allowUpdates = [ "username", "profile_img"];
    const isValid = updates.every((update) => allowUpdates.includes(update));
    if (!isValid) {
        return res.status(400).send({ error: "No such property to update" });
    }
    try{
        //console.log("req....",req.file);
        const user = await User.findById(req.user._id);
        if (user && user.profile_img !== "") {
            const str = user.profile_img;
            const res = str.split("/");
            s3.deleteObject({
                Bucket: process.env.BUCKET_NAME,
                Key: res[res.length - 2]+"/"+res[res.length - 1]
            },function (err,data){});
        }
        updates.forEach((update) => {
            if(req.body[update] === "NA"){
                user[update] = req.file.location
            } else {
                user[update] = req.body[update]
            }
        });
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user, token});
   } catch (e) {
       res.status(400).send({ e: e.message });
   }
});

// Post request for Logout
router.post("/logout", auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });
        await req.user.save();
        res.status(200).send("Logout Success");
    } catch (e) {
        res.status(500).send(e);
    }
});

//Fetch owner with token
router.get("/owner", auth, async (req, res) => {
    try{
        const user = await User.findOne({_id: req.user._id});
        res.status(200).send(user);
    }catch (e) {
        res.status(500).send(e);
    }
});

//Fetch owner by ID
router.get("/owner/:id", async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        const feed = await Listing.find({owner: req.params.id})
        res.status(200).send({user, feed});
    }catch (e) {
        res.status(500).send(e);
    }
});

// User Forget Password otp generation
router.post("/forgetPass", async (req, res) => {
    try {
        const user = await User.findOne({ phone: req.body.phone });
        //console.log(user.phone);
        if (!user) {
            return res.status(404).send();
        }
        const otp = Math.floor(1000 + Math.random() * 9000);
        //sendForgetPasswordEmail(user.email, user.username, otp);
        send_sms(user.username, user.phone, otp);
        res.status(201).send({ user, otp });
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

// Update User's password
router.patch("/updatePassword/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowUpdates = ["password"];
    const isValid = updates.every((update) => allowUpdates.includes(update));

    if (!isValid) {
        return res.status(400).send({ error: "No such property to update" });
    }

    try {
        const user = await User.findOne({
            _id: req.params.id
        });
        if (!user) {
            return res.status(404).send();
        }
        updates.forEach((update) => (user[update] = req.body[update]));
        await user.save();
        res.send(user);
    } catch (e) {
        res.status(400).send(e.toString());
    }
});

router.post("/register_OTP", async (req,res) => {
    try {
        const user = await User.findOne({phone: req.body.phone} );
        if ( user ) {
           throw new Error("User already registered")
        } else {
            const otp = Math.floor(1000 + Math.random() * 9000);
            registration_otp(req.body.username, req.body.phone, otp);
            res.status(201).send({otp});
        }
    } catch (e) {
        res.status(500).send({e: e.message});
    }
});

module.exports = router;
