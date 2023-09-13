"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.signInUser = exports.signUpUser = exports.UserDataById = exports.AllUsersData = void 0;
const User = require("../Models/usersSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const AllUsersData = async () => await User.find();
exports.AllUsersData = AllUsersData;
const UserDataById = async (id) => await User.findById(id);
exports.UserDataById = UserDataById;
const signUpUser = async (data) => {
    const { name, email, password, phone, address, country, businessCategory, role, } = data;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
        name,
        email,
        password: hashedPassword,
        phone,
        address,
        country,
        businessCategory,
        role,
    });
    return await user.save();
};
exports.signUpUser = signUpUser;
const signInUser = async (email, password) => {
    const user = await User.findOne({ email });
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
        expiresIn: "1h",
    });
    return token;
};
exports.signInUser = signInUser;
const updateUser = async (id, data) => await User.findByIdAndUpdate(id, data, { new: true });
exports.updateUser = updateUser;
const deleteUser = async (id) => await User.findByIdAndDelete(id);
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.services.js.map