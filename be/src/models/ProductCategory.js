const mongoose = require("mongoose");

const ProductCategorySchema = new mongoose.Schema({
  photo: { type: String },
  name: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model("ProductCategory", ProductCategorySchema);
