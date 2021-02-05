const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
    {
        username: {
            required: true,
            type: String,
            trim: true
        },
        phone: {
            required: true,
            type: String,
            trim: true,
            unique: true,
            validate (value) {
                const checkedValue = value.match(/\d/g).length===9;
                if (!checkedValue) {
                    throw new Error("Phone number is Invalid");
                }
            }
        },
        password: {
            type: String,
            trim: true,
            minlength: 6,
            required: true,
            validate (value) {
                if (value.toLowerCase().includes("password")) {
                    throw new Error("password must not contain \"password\"");
                }
            }
        },
        tokens: [
            {
                token: {
                    type: String,
                    required: true
                }
            }
        ]
    },
    { timestamp: true }
)

// For hiding password and tokens array
userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;
    delete userObject.tokens;

    return userObject;
};

// Generating Users token
userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign(
        { _id: user._id.toString() },
        process.env.JWT_SECRET_KEY
    );
    user.tokens = user.tokens.concat({ token });
    user.save();
    return token;
};

// Checking username and password for login for /users/login api
userSchema.statics.findByCredentials = async (phone, password) => {
    const user = await User.findOne({ phone });

    if (!user) {
        throw new Error("No Account registered with this phone number");
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Wrong Password");
    }
    return user;
};

// MIDDLEWARE : Hashing the plain text password
userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
