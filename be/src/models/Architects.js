const mongoose = require("mongoose");

const ArchitectsSchema = new mongoose.Schema({
  avatar: { type: String },
  name: { type: String, required: true },
  description: { type: String },
  position: { type: String },
});

module.exports = mongoose.model("Architects", ArchitectsSchema);
