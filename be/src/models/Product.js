const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  photo_title: { type: String },
  product_img: [{ type: String }],
  productname: { type: String, required: true },
  product_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductCategory",
  },
});

module.exports = mongoose.model("Product", ProductSchema);
