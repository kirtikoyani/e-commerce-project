"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProduct = void 0;
const Product = require("../Models/productSchema");
const getAllProduct = async () => await Product.find();
exports.getAllProduct = getAllProduct;
const getProductById = async (id) => await Product.findById(id);
exports.getProductById = getProductById;
const createProduct = async (data) => {
    const product = new Product(data);
    return await product.save();
};
exports.createProduct = createProduct;
const updateProduct = async (id, data) => await Product.findByIdAndUpdate(id, data, {
    new: true,
});
exports.updateProduct = updateProduct;
const deleteProduct = async (id) => await Product.findByIdAndDelete(id);
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.services.js.map