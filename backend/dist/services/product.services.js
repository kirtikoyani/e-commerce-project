"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.ProductDataById = exports.allProductData = void 0;
const Product = require("../Models/productSchema");
const allProductData = async () => await Product.find();
exports.allProductData = allProductData;
const ProductDataById = async (id) => await Product.findById(id);
exports.ProductDataById = ProductDataById;
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