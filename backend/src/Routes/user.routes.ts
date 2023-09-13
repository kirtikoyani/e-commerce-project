import express from "express";
import {
    deleteUser,
    getAllUsers,
    getUserById,
    loginUser,
    postUser,
    putUser,
} from "../Controller/user/user.controller";
import { authenticateUser } from "../Middlerware/authHelper";

const userRouter = express.Router();

userRouter.get("/user", authenticateUser, getAllUsers);
userRouter.get("/user/:id", authenticateUser, getUserById);
userRouter.post("/user", postUser);
userRouter.put("/user/:id", authenticateUser, putUser);
userRouter.delete("/user/:id", authenticateUser, deleteUser);
userRouter.post("/user/login", loginUser);

export { userRouter };

