"use strict";
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const Product = mongoose.model("product");

const productController = {};

productController.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

productController.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findOne({ _id: new ObjectId(req.params.id) });
    res.json(product ?? { message: "product does not exist" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

productController.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body.product);
    res.json(product);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

productController.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findOneAndUpdate(
      {
        _id: new ObjectId(req.params.id),
      },
      { $set: req.body.product },
      { new: true }
    );
    res.json(product ?? { message: "product does not exist" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

productController.deleteProduct = async (req, res, next) => {
  try {
    const result = await Product.deleteOne({
      _id: new ObjectId(req.params.id),
    });

    if (result.deletedCount) {
      res.json({
        message: "product has been deleted",
      });
    } else {
      res.json({
        message: "product does not exist",
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { productController };
