import { Request, Response } from "express";
import * as cartService from "../../services/cart.services";

export const getCartAllProducts = async (req: Request, res: Response) => {
  try {
    const cartProducts = await cartService.getCartAllProducts();
    res.status(200).json(cartProducts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getCartProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cartProduct = await cartService.getCartProductById(id);
    
    if (!cartProduct) {
      return res.status(404).json({ error: "Cart product not found" });
    }

    res.status(200).json(cartProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createCartProduct = async (req: Request, res: Response) => {
  try {
    const cartProductData = req.body;
    const createdCartProduct = await cartService.createCartProduct(cartProductData);
    res.status(201).json(createdCartProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateCartProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cartProductData = req.body;
    const updatedCartProduct = await cartService.updateCartProduct(id, cartProductData);

    if (!updatedCartProduct) {
      return res.status(404).json({ error: "Cart product not found" });
    }

    res.status(200).json(updatedCartProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteCartProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedCartProduct = await cartService.deleteCartProduct(id);

    if (!deletedCartProduct) {
      return res.status(404).json({ error: "Cart product not found" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json(error);
  }
};
