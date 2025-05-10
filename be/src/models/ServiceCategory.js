const mongoose = require("mongoose");

const ServiceCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  photo: { type: String },
});

module.exports = mongoose.model("ServiceCategory", ServiceCategorySchema);
