const mongoose = require("mongoose");

const provinsiSchema = mongoose.Schema({
  type: String,
  features: mongoose.Schema.Types.Mixed,
  // properties: mongoose.Schema.Types.Mixed,
  // geometry: mongoose.Schema.Types.Mixed,
});

const Provinsi = mongoose.model("Provinsi", provinsiSchema);

module.exports = Provinsi;
