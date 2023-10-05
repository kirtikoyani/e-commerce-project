"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../Controller/user/user.controller");
const authHelper_1 = require("../Middlerware/authHelper");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.get("/user", authHelper_1.authenticateUser, user_controller_1.getAllUsers);
userRouter.get("/user/:id", authHelper_1.authenticateUser, user_controller_1.getUserById);
userRouter.post("/user", user_controller_1.addUser);
userRouter.put("/user/:id", authHelper_1.authenticateUser, user_controller_1.updateUser);
userRouter.delete("/user/:id", authHelper_1.authenticateUser, user_controller_1.deleteUser);
userRouter.post("/user/login", user_controller_1.loginUser);
//# sourceMappingURL=user.routes.js.map