const express = require("express");
const Listing = require("../model/Listings");
const auth = require("../middleware/auth");
const router = new express.Router();
const {product_images, s3} = require("../middleware/upload");

const resHandler = (filename) => {
    const data = {
        url : filename
    }
    return data;
}

// Adding Listing
router.post("/add", [auth, product_images.array("images")], async (req,res) => {
    try{
        if(req.files === undefined ){
            res.send("undefined");
        }else{
            let fullPath = [];
            req.files.map((item) => {
                const data = resHandler(item.location);
                fullPath.push(data);
            })
            const listing = new Listing({
                ...req.body,
                images:fullPath,
                owner: req.user._id
            });
            await listing.save();
            res.status(201).send(listing);
        }
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
        listing.images.map((item) => {
            const str = item.url;
            const res = str.split("/");
            s3.deleteObject({
                Bucket: process.env.BUCKET_NAME,
                Key: res[res.length - 2]+"/"+res[res.length - 1]
            },function (err,data){});
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
