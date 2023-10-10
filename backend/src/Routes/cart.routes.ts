import express from "express";
import {
    createCartProduct,
    deleteCartProduct,
    getCartAllProducts,
    getCartProductById,
    updateCartProduct,
} from "../Controller/cart/cart.controller";
import { authenticateUser } from "../Middlerware/authHelper";

const cartRouter = express.Router();

cartRouter.get("/cart", authenticateUser, getCartAllProducts);
cartRouter.get("/cart/:id", authenticateUser, getCartProductById);
cartRouter.post("/cart", authenticateUser, createCartProduct);
cartRouter.put("/cart/:id", authenticateUser, updateCartProduct);
cartRouter.delete("/cart/:id", authenticateUser, deleteCartProduct);

export { cartRouter };
