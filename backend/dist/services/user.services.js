"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.loginUser = exports.addUser = exports.getUserById = exports.getAllUsers = void 0;
const User = require("../Models/usersSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const getAllUsers = async () => await User.find().select("-password");
exports.getAllUsers = getAllUsers;
const getUserById = async (id) => await User.findById(id).select("-password");
exports.getUserById = getUserById;
const addUser = async (data) => {
    data.password = await bcrypt.hash(data.password, 12);
    const user = new User(data);
    return await user.save();
};
exports.addUser = addUser;
const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        return jwt.sign({ userId: user._id }, JWT_SECRET, {
            expiresIn: "1h",
        });
    }
    throw "Invalid email or password.";
};
exports.loginUser = loginUser;
const updateUser = async (id, data) => {
    const existUser = await User.findById(id);
    if (!existUser)
        throw "User is not exist";
    return await User.findByIdAndUpdate(id, data, { new: true });
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    const existUser = await User.findById(id);
    if (!existUser)
        throw "User is not exist";
    return await User.findByIdAndDelete(id);
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.services.js.map