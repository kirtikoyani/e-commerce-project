import express from "express";
import {
    addUser,
    deleteUser,
    getAllUsers,
    getUserById,
    loginUser,
    updateUser,
} from "../Controller/user/user.controller";
import { authenticateUser } from "../Middlerware/authHelper";

const userRouter = express.Router();

userRouter.get("/user", authenticateUser, getAllUsers);
userRouter.get("/user/:id", authenticateUser, getUserById);
userRouter.post("/user", addUser);
userRouter.put("/user/:id", authenticateUser, updateUser);
userRouter.delete("/user/:id", authenticateUser, deleteUser);
userRouter.post("/user/login", loginUser);

export { userRouter };

