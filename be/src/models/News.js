const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  content: { type: String },
  photo: [{ type: String }],
  new_category: { type: mongoose.Schema.Types.ObjectId, ref: "NewCategory" },
  architect_id: { type: mongoose.Schema.Types.ObjectId, ref: "Architects" },
});

module.exports = mongoose.model("News", NewsSchema);
