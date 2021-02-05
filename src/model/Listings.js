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
        main_category: {
            type: String,
            required: true,
            trim: true
        },
        sub_category: {
            type: String,
            trim: true
        },
        region:{
            type: String,
            required: true,
            trim: true
        },
        contact_phone:{
            required: true,
            type: String,
            trim: true,
            validate (value) {
                const checkedValue = value.match(/\d/g).length===9;
                if (!checkedValue) {
                    throw new Error("Phone number is Invalid");
                }
            }
        }
    }, { timeStamp: true }
);


//location: {
//             type: [Number],
//             required: true
//         }

// listingSchema.methods.filterThings = async function (category) {
//     return category;
// }

// listingSchema.methods.filterOptions = async function (category) {
//     const listing = this;
//     return listing;
//     // const array = category.map(async (item) => {
//     //     console.log("item", item);
//     //     let result = await Listing.find({category: item});
//     //     console.log("...", result);
//     //     return result;
//     // });
//     // const resultArray = array.map((item) => {
//     //     // const listingRes = await result.map((itemData) => {
//     //     //     return itemData;
//     //     // })
//     //     console.log("result...", item);
//     //     return item;
//     // })
//     // console.log("result", resultArray);
//     // return array;
// };

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
