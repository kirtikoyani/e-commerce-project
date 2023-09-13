"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.loginUser = exports.postUser = exports.getUserById = exports.getAllUsers = void 0;
const userService = __importStar(require("../../services/user.services"));
async function getAllUsers(req, res) {
    try {
        const usersData = await userService.AllUsersData();
        res.status(200).json(usersData);
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
}
exports.getAllUsers = getAllUsers;
async function getUserById(req, res) {
    try {
        const { id } = req.params;
        const userData = await userService.UserDataById(id);
        if (!userData) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(userData);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}
exports.getUserById = getUserById;
async function postUser(req, res) {
    try {
        const userData = req.body;
        const createUser = await userService.signUpUser(userData);
        res.status(201).json(createUser);
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
}
exports.postUser = postUser;
async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        const token = await userService.signInUser(email, password);
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(401).json({ error: error });
    }
}
exports.loginUser = loginUser;
async function putUser(req, res) {
    try {
        const { id } = req.params;
        const userData = req.body;
        const updateUsers = await userService.updateUser(id, userData);
        res.status(200).json(updateUsers);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}
exports.putUser = putUser;
async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        await userService.deleteUser(id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map