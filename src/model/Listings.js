const mongoose = require("mongoose");

const listingSchema = mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Users"
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        images: [{
            url: {
                type: String,
                required: true
            }
        }],
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            trim: true
        },
        region:{
            type: String,
            required: true,
            trim: true
        },
        phone:{
            type: Number,
            required: true
        },
        location: {
            type: [Number],
            required: true
        }
    }, { timeStamp: true }
);

const filterOptions = async (category) => {
    const array = category.map(async (item) => {
        console.log("item", item);
        let result = await Listing.find({category: item});
        console.log("...", result);
        return result;
    });
    const resultArray = array.map((item) => {
        // const listingRes = await result.map((itemData) => {
        //     return itemData;
        // })
        console.log("result...", item);
        return item;
    })
    console.log("result", resultArray);
    return array;
};

const Listing = mongoose.model("Listing", listingSchema);

module.exports = {
    Listing,
    filterOptions
};
