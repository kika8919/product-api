"use strict";
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", ProductSchema);
