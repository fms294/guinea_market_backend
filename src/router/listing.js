const express = require("express");
const Listing = require("../model/Listings");
const auth = require("../middleware/auth");
const router = new express.Router();
const upload = require("../middleware/upload");

// const fs = require('fs');
// const AWS = require('aws-sdk');

// const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// });
//
// const uploadFile = (fileName) => {
//     fs.readFile(fileName, (err, data) => {
//         if (err) throw err;
//         const params = {
//             Bucket: 'guineamarket', // pass your bucket name
//             Key: 'contacts.csv', // file will be saved as testBucket/contacts.csv
//             Body: JSON.stringify(data, null, 2)
//         };
//         s3.upload(params, function(s3Err, data) {
//             if (s3Err) throw s3Err
//             console.log(`File uploaded successfully at ${data.Location}`)
//         });
//     });
// };

// router.post("/s3", async (req, res) => {
//     try {
//         // const body = req;
//         // console.log("body", body);
//         // res.send(body)
//         uploadFile()
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

const resHandler = (filename) => {
    const data = {
        url : filename
    }
    return data;
}

// Adding Listing
router.post("/add", auth, async (req,res) => {
    try{
        upload(req, res,(error) => {
            if(error){
                res.send(error);
            }else{
                if(req.files === undefined ){
                    res.send("undefined");
                }else{
                    let fullPath = [];
                    // let name = [];
                    req.files.map((item) => {
                        const data = resHandler(item.filename);
                        fullPath.push(data);
                        // name.push(item.path)
                    })
                    const listing = new Listing({
                        ...req.body,
                        images:fullPath,
                        owner: req.user._id
                    });
                    // uploadFile(name)
                    listing.save();
                    res.status(201).send(listing);
                }
            }
        });
    }catch (err) {
        res.status(400).send(err);
    }
});

//Update the item
router.patch("/update/:id", auth, async (req,res) => {
    const updates = Object.keys(req.body);
    console.log(Object.keys(req.body));
    const allowUpdates = [
        "title",
        "description",
        "price",
        "main_category",
        "sub_category",
        "region",
        "contact_phone"
    ];
    const isValid = updates.every((update) => allowUpdates.includes(update));
    if (!isValid) {
        return res.status(400).send({ error: "No such property to update" });
    }
    try{
        const listing = await Listing.findOne({
            _id: req.params.id,
            owner: req.user._id
        });
        if (!listing) {
            return res.status(404).send("No such listing");
        }
        updates.forEach((update) => (listing[update] = req.body[update]));
        await listing.save();
        res.status(201).send(listing);
    }catch (err) {
        res.status(400).send(err);
    }
});

//Fetch all Listings
router.get("/fetch", auth, async(req,res) => {
    try {
        const listing = await Listing.find({});
        if (!listing) {
            return res.status(404).send();
        }
        res.status(200).send(listing);
    } catch (e) {
        res.status(500).send(e);
    }
});

//Fetch user's Listings
router.get("/fetchUserListing", auth, async (req, res) => {
    try {
        const listing = await Listing.find({ owner: req.user._id });
        if (!listing) {
            return res.status(404).send();
        }
        res.status(200).send(listing);
    } catch (e) {
        res.status(500).send(e);
    }
});

//Delete user's Listings
router.delete("/delete/:id", auth, async (req, res) => {
    try {
        const listing = await Listing.findOneAndDelete({
            _id: req.params.id,
            owner: req.user._id,
        });

        if (!listing) {
            return res.status(404).send();
        }
        res.send(listing);
    } catch (e) {
        return res.status(500).send(e);
    }
});

module.exports = router;
