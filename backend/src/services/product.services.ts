const Product = require("../Models/productSchema");
import { Product } from "../Interface/product";

export const allProductData = async (): Promise<Product> =>
  await Product.find();

export const ProductDataById = async (id: string): Promise<Product> =>
  await Product.findById(id);

export const createProduct = async (data: Product): Promise<Product> => {
  const product = new Product(data);
  return await product.save();
};

export const updateProduct = async (
  id: string,
  data: Product
): Promise<Product> =>
  await Product.findByIdAndUpdate(id, data, {
    new: true,
  });

export const deleteProduct = async (id: string): Promise<Product> =>
  await Product.findByIdAndDelete(id);
