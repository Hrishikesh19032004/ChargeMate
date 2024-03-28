// Model: evChargeSchema.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const evSchema = new mongoose.Schema({
    stationName: {
        type: String,
    },
    address: {
        type: String,
    },
    portNum: {
        type: Number,
    },
    distance: { // Corrected typo
        type: String,
    },
    station: {
        type: String,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

evSchema.pre("save", async function (next) {
    // Hash password or any other pre-save operations
    next();
});

evSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this.id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
};

const EvCharge = mongoose.model("EVCHARGE", evSchema); // Changed to PascalCase convention
module.exports = EvCharge;
