"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const validator = require("validator");
const userDetails = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "minimum length 3"],
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is already present"],
        validate(values) {
            if (!validator.isEmail(values)) {
                throw new Error("email is not correct");
            }
        },
    },
    password: {
        type: String,
        required: true,
        validate(values) {
            if (!validator.isStrongPassword(values)) {
                throw new Error("password is not correct");
            }
        },
    },
    phone: {
        type: Number,
        required: true,
        validate(val) {
            if (val.toString().length < 10 || val.toString.length > 10) {
                throw new Error("Mobile no. is incorrect");
            }
        },
    },
    address: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    businessCategory: {
        type: String,
    },
    role: {
        type: String,
        required: true,
    },
});
const User = new mongoose.model("User", userDetails);
module.exports = User;
//# sourceMappingURL=usersSchema.js.map