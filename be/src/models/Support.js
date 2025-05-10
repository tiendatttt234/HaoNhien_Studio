const mongoose = require("mongoose");

const SupportSchema = new mongoose.Schema({
  customername: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String },
  request: { type: String, required: true },
  status: { type: String, enum: ["pending", "complete"], default: "pending" },
});

module.exports = mongoose.model("Support", SupportSchema);
