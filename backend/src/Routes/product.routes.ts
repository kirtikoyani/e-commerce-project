import express from "express";
import {
    deleteProduct,
    getAllProduct,
    getProductById,
    postProduct,
    putProduct,
} from "../Controller/product/product.controller";
import { authenticateUser } from "../Middlerware/authHelper";

const productRouter = express.Router();

productRouter.get("/product", authenticateUser, getAllProduct);
productRouter.get("/product/:id", authenticateUser, getProductById);
productRouter.post("/product", authenticateUser, postProduct);
productRouter.put("/product/:id", authenticateUser, putProduct);
productRouter.delete("/product/:id", authenticateUser, deleteProduct);

export { productRouter };

