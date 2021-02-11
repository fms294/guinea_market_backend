const express = require("express");
const Listing = require("../model/Listings");
const auth = require("../middleware/auth");
const router = new express.Router();

//Testing Get Router
// router.get('/listing', (req, res) => {
//     res.status(201).send('Hello');
// });

// Adding Listing
router.post("/listing/add", auth, async (req,res) => {
    try{
        const listing = new Listing({
            ...req.body,
            owner: req.user._id
        });
        await listing.save();
        res.status(201).send(listing);
    }catch (err) {
        res.status(400).send(err);
    }
});

//Fetch all Listings
router.get("/listing/fetch", auth, async(req,res) => {
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
router.get("/listing/fetchUserListing", auth, async (req, res) => {
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
router.delete("/listing/delete/:id", auth, async (req, res) => {
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
