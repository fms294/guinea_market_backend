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

const filterOptions = (category) => {
    let resultRes = [];
    const array = category.category.map((item) => {
        console.log("item", item);
        Listing.find({category: item}).then((res) => {
            console.log("aaa........", res);
            resultRes.push(res);
        })
        console.log("aaa...", resultRes);
        return resultRes;
    });
    console.log("array");
};

router.post("/listing/filter", auth, async (req,res) =>{
    try{
        const body = req.body;
        console.log("first...");
        const temp = await filterOptions(body);
        console.log("temp...", temp);
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
        // if(!listing) {
        //     return res.status(404).send();
        // }
        res.status(200).send();
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;
