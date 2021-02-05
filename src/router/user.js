const express = require("express");
const User = require("../model/Users");
const Listing = require("../model/Listings");
const router = new express.Router();
const auth = require("../middleware/auth");
const { sendForgetPasswordEmail } = require("../emails/account");
const SendOtp = require("sendotp");
const sendOtp = new SendOtp("MSG91");

// Testing Get Router
// router.get('/users', async (req, res) => {
//     await sendOtp.send("917575060118", "PRIIND", function (error, data) {
//         console.log(data);
//     });
//     res.status(201).send('Hiiiiii');
// });

// Post request for Signup
router.post("/users/signup", async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (err) {
        res.status(400).send(err);
    }
});

// Post request for Login
router.post("/users/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.phone,
            req.body.password
        );
        // auth token
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (e) {
        res.status(400).send({ e: e.message });
    }
});

// Post request for Logout
router.post("/users/logout", auth, async (req, res) => {
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

//Fetch owner
router.get("/users/owner/:id", auth, async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        const feed = await Listing.find({owner: req.params.id})
        res.status(200).send({user, feed});
    }catch (e) {
        res.status(500).send(e);
    }
});

// User Forget Password otp generation
router.post("/users/forgetPass", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        // console.log(user.email);
        if (!user) {
            return res.status(404).send();
        }
        const otp = Math.floor(1000 + Math.random() * 9000);
        sendForgetPasswordEmail(user.email, user.username, otp);
        res.status(201).send({ user, otp });
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

// Update User's password
router.patch("/users/updatePassword/:id", async (req, res) => {
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

module.exports = router;
