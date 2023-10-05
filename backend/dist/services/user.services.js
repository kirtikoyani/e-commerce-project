"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.loginUser = exports.addUser = exports.getUserById = exports.getAllUsers = void 0;
const User = require("../Models/usersSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const getAllUsers = async () => await User.find();
exports.getAllUsers = getAllUsers;
const getUserById = async (id) => await User.findById(id);
exports.getUserById = getUserById;
const addUser = async (data) => {
    const { password } = data;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
        password: hashedPassword,
    });
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
    throw new Error("Invalid email or password.");
};
exports.loginUser = loginUser;
const updateUser = async (id, data) => await User.findByIdAndUpdate(id, data, { new: true });
exports.updateUser = updateUser;
const deleteUser = async (id) => await User.findByIdAndDelete(id);
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.services.js.map