const Cart = require("../Models/cartSchema");
const Product = require("../Models/productSchema");
import { Cart } from "../Interface/cart";
import { Product } from "../Interface/product";

export const getCartAllProducts = async (): Promise<Product> =>
  await Cart.find();

export const getCartProductById = async (id: string): Promise<Product> =>
  await Cart.findById(id);

// export const createCartProduct = async (data: Cart): Promise<Product> => {
//   const {userId, productId, quantity} = data;
//   let cart = await Cart.findOne({ owner: userId });

//   const item = await Item.findOne({ _id: productId });

//   if (!item) {
//     throw new Error("Item not found");
//   }

//   const price = item.price;
//   const name = item.name;
//   if (cart) {
//     const itemIndex = cart.items.findIndex((item:Cart) => item.productId == productId);

//     if (itemIndex > -1) {
//       // Item already in the cart, update quantity
//       let product = cart.items[itemIndex];
//       product.quantity += quantity;

//       // Calculate the new bill
//       cart.bill = cart.items.reduce((acc:number, curr:Product) => {
//         return acc + curr.quantity * curr.price;
//       }, 0);

//       cart.items[itemIndex] = product;
//       await cart.save();
//     } else {
//       cart.items.push({ productId, name, quantity, price });
//       cart.bill = cart.items.reduce((acc:number, curr:Product) => {
//         return acc + curr.quantity * curr.price;
//       }, 0);

//       await cart.save();
//     }
//   } else {
//     // Cart does not exist, create one
//     cart = await Cart.create({
//       owner: userId,
//       items: [{ productId, name, quantity, price }],
//       bill: quantity * price,
//     });
//   }

//   return cart;
//   // const cartProduct = new Cart(data);
//   // return await cartProduct.save();
// };
export const createCartProduct = async (data: Cart): Promise<Cart> => {
  const { userId, productId, quantity } = data;

  try {
    // Find the user's cart or create a new one if it doesn't exist
    let cart = await Cart.findOne({ productId: productId });

    // Find the product by ID
    const product = await Product.findById(productId);

    if (!product) {
      throw new Error("Product not found");
    }

    const price = product.price;
    const name = product.name;

    if (cart) {
      console.log(cart);
      // Cart exists, check if the product is already in the cart
      const itemIndex = cart.product.findIndex(
        (item: Cart) => item.productId == productId
      );
      console.log(itemIndex,productId);
      if (itemIndex > -1) {
        // Product already in the cart, update quantity
        let cartItem = cart.items[itemIndex];
        cartItem.quantity += quantity;

        // Calculate the new bill
        // cart.bill = cart.items.reduce((acc: number, curr: Product) => {
        //   return acc + curr.quantity * curr.price;
        // }, 0);

        cart.items[itemIndex] = cartItem;
      } else {

        cart.items.push({ productId, name, quantity, price });

        // Calculate the new bill
        // cart.bill = cart.items.reduce((acc: number, curr: Product) => {
        //   return acc + curr.quantity * curr.price;
        // }, 0);
      }
      return await cart.save();
    } else {
      const newData = {
        userId: userId,
        productId: productId,
        quantity: 1,
        product: [
          {
            productId: product._id,
            name: product.title,
            quantity: product.quantity,
            price: product.price,
          },
        ],
        bill: quantity * price,
      };
      // Cart does not exist, create one
      cart = new Cart(newData);
      console.log(cart, "save");
      return await cart.save();
    }
  } catch (error) {
    throw error;
  }
};
export const updateCartProduct = async (
  id: string,
  data: Product
): Promise<Product> =>
  await Cart.findByIdAndUpdate(id, data, {
    new: true,
  });

export const deleteCartProduct = async (id: string): Promise<Product> =>
  await Cart.findByIdAndDelete(id);

// const Item = require("../Models/productSchema");

// Service function to get the user's cart
// const getCartByOwner = async (userId: string) => {
//   return await Cart.findOne({ owner: userId });
// };

// // Service function to create or update a cart
// const createOrUpdateCart = async (userId:string, productId:string, quantity:number) => {
//   try {
//     // Find the cart by owner
//     let cart = await Cart.findOne({ owner: userId });

//     const item = await Item.findOne({ _id: productId });

//     if (!item) {
//       throw new Error("Item not found");
//     }

//     const price = item.price;
//     const name = item.name;

//     if (cart) {
//       const itemIndex = cart.items.findIndex((item) => item.productId == productId);

//       if (itemIndex > -1) {
//         // Item already in the cart, update quantity
//         let product = cart.items[itemIndex];
//         product.quantity += quantity;

//         // Calculate the new bill
//         cart.bill = cart.items.reduce((acc:number, curr:Product) => {
//           return acc + curr.quantity * curr.price;
//         }, 0);

//         cart.items[itemIndex] = product;
//         await cart.save();
//       } else {
//         // Item not in the cart, add it
//         cart.items.push({ productId, name, quantity, price });

//         // Calculate the new bill
//         cart.bill = cart.items.reduce((acc:number, curr:Product) => {
//           return acc + curr.quantity * curr.price;
//         }, 0);

//         await cart.save();
//       }
//     } else {
//       // Cart does not exist, create one
//       cart = await Cart.create({
//         owner: userId,
//         items: [{ productId, name, quantity, price }],
//         bill: quantity * price,
//       });
//     }

//     return cart;
//   } catch (error) {
//     throw error;
//   }
// };

// // Service function to delete an item from the cart
// const deleteCartItem = async (cart, productId: string) => {
//   try {
//     const itemIndex = cart.items.findIndex((item:Product) => item.productId == productId);

//     if (itemIndex > -1) {
//       let item = cart.items[itemIndex];
//       cart.bill -= item.quantity * item.price;

//       if (cart.bill < 0) {
//         cart.bill = 0;
//       }

//       cart.items.splice(itemIndex, 1);

//       // Recalculate the bill
//       cart.bill = cart.items.reduce((acc:number, curr:Product) => {
//         return acc + curr.quantity * curr.price;
//       }, 0);

//       await cart.save();
//     } else {
//       throw new Error("Item not found in the cart");
//     }
//   } catch (error) {
//     throw error;
//   }
// };

// module.exports = {
//   getCartByOwner,
//   createOrUpdateCart,
//   deleteCartItem,
// };
