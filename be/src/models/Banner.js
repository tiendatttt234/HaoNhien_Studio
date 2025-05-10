const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
  banner_img: { type: String, required: true },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model("Banner", BannerSchema);
