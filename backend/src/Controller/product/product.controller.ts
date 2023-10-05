import { Request, Response } from "express";
import * as productService from "../../services/product.services";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const productsData = await productService.getAllProduct();
    res.status(200).json(productsData);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productData = await productService.getProductById(id);
    if (!productData) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const createProduct = await productService.createProduct(product);
    res.status(201).json(createProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    const updateProduct = await productService.updateProduct(id, productData);

    if (!updateProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteProduct = await productService.deleteProduct(id);

    if (!deleteProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json(error);
  }
};
