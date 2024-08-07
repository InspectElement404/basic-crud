const mongoose = require("mongoose");

/*
To use mongoose,
1. Create the database schema i.e., define the structure of the documents i.e., specifying the field and their ttypes
2. Create the model and then export it 

*/

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please input the number of items"],
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    Timestamp: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
