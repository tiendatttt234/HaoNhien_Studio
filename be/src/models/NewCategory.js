const mongoose = require("mongoose");

const NewCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("NewCategory", NewCategorySchema);
