const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://SST_Keshav:mDZF3fzyfHMCMcul@sst.achrghe.mongodb.net/?retryWrites=true&w=majority&appName=SST"
  )
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Failed", err);
  });

const app = express();

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

app.listen(8086, () => {
  console.log("Server sarted at port 8086");
});
