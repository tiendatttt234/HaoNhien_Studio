const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  servicename: { type: String, required: true },
  description: { type: String },
  content: { type: String },
  service_img: { type: String },
  service_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceCategory",
  },
});

module.exports = mongoose.model("Service", ServiceSchema);
