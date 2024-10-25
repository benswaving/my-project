const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  images: [{
    type: String
  }],
  category: {
    type: String,
    required: true,
  },
  specifications: {
    type: Map,
    of: String
  },
  shippingTime: {
    type: String,
    required: true
  },
  profit_margin: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Product", productSchema);
