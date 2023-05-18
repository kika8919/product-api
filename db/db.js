const mongoose = require("mongoose");
require("../model/productModel");
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("conneted to mongodb");
  })
  .catch((err) => {
    console.log(`error connecting mongodb ${err}`);
  });
