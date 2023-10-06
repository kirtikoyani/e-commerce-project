const mongoose = require("mongoose");

const productDetails = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
    minlength: [3, "minimum length 3"],
  },
  price: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: {
    type: String,
  },
  size:{
    type: [String],
  },
  color:{
    type: String,
  },
  quantity:{
    type: Number,
  }
});

const Product = new mongoose.model("Product", productDetails);
module.exports = Product;
