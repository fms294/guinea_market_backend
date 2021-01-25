const express = require("express");
const Listing = require("../model/Listings");
const auth = require("../middleware/auth");
const router = new express.Router();

// //Testing Get Router
// router.get('/listing', (req, res) => {
//     res.status(201).send('Hiiiiii');
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

router.post("/listing/filter", auth, async (req,res) =>{
    try{
        //let listing = [];
        let categoryArray = [];
        const array = req.body;
        const listing = await Listing.filterOptions(array.category);
        console.log("array...",listing);
        // if(typeof req.query.category !== "undefined" && typeof req.query.region !== "undefined") {
        //     listing = await Listing.find({
        //         category: req.query.category,
        //         region: req.query.region
        //     });
        // }else if(typeof req.query.category !== "undefined" && typeof req.query.region === "undefined") {
        //     listing = await Listing.find({
        //         category: req.query.category
        //     });
        // }else if(typeof req.query.category === "undefined" && typeof req.query.region !== "undefined") {
        //     listing = await Listing.find({
        //         region: req.query.region
        //     });
        // }else {
        //     return res.status(200).send("No such Feed available");
        // }
        if(!listing) {
            return res.status(404).send();
        }
        res.status(200).send(listing);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;
