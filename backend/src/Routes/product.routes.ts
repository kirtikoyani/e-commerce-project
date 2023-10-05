import express from "express";
import {
    createProduct,
    deleteProduct,
    getAllProduct,
    getProductById,
    updateProduct,
} from "../Controller/product/product.controller";
import { authenticateUser } from "../Middlerware/authHelper";

const productRouter = express.Router();

productRouter.get("/product", authenticateUser, getAllProduct);
productRouter.get("/product/:id", authenticateUser, getProductById);
productRouter.post("/product", authenticateUser, createProduct);
productRouter.put("/product/:id", authenticateUser, updateProduct);
productRouter.delete("/product/:id", authenticateUser, deleteProduct);

export { productRouter };

