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
exports.deleteProduct = exports.putProduct = exports.postProduct = exports.getProductById = exports.getAllProduct = void 0;
const productService = __importStar(require("../../services/product.services"));
const getAllProduct = async (req, res) => {
    try {
        const productsData = await productService.allProductData();
        res.status(200).json(productsData);
    }
    catch (error) {
        res.status(400).json(error);
    }
};
exports.getAllProduct = getAllProduct;
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const productData = await productService.ProductDataById(id);
        if (!productData) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(productData);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.getProductById = getProductById;
const postProduct = async (req, res) => {
    try {
        const product = req.body;
        const createProduct = await productService.createProduct(product);
        res.status(201).json(createProduct);
    }
    catch (error) {
        res.status(400).json(error);
    }
};
exports.postProduct = postProduct;
const putProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const productData = req.body;
        const updateProduct = await productService.updateProduct(id, productData);
        if (!updateProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(updateProduct);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.putProduct = putProduct;
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await productService.deleteProduct(id);
        if (!deleteProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.controller.js.map