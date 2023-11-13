const mongoose = require("mongoose");

const provinsiSchema = mongoose.Schema(
  {
    type: String,
    properties: {
      No: Number,
      Kode_Prov: String,
      Provinsi: String,
    },
    geometry: {
      // type: String
      // coordinates: mongoose.Schema.Types.Mixed
    },
  },
  { timestamps: true }
);

const Provinsi = mongoose.model("Provinsi", provinsiSchema);

module.exports = Provinsi;
