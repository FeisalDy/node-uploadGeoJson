const mongoose = require("mongoose");

const kotaGeojson = mongoose.Schema({
  type: String,
  properties: {
    No: Number,
    Provinsi: String,
    Kode_Kab: String,
    Kab_Kota: String,
    Kode_Prov: Number,
  },
  geometry: {},
});

const Kota = mongoose.model("Kota", kotaGeojson);

module.exports = Kota;

// module.exports = (mongoose) => {
//   var schema = mongoose.Schema(
//     {
//       type: String,
//       properties: {
//         No: Number,
//         Provinsi: String,
//         Kode_Kab: String,
//         Kab_Kota: String,
//         Kode_Prov: Number,
//       },
//       geometry: {
//         // type: String
//         // coordinates: mongoose.Schema.Types.Mixed
//       },
//     },
//     { timestamps: true }
//   );

//   const GeoJsonKota = mongoose.model("GeoJsonKota", schema);

//   return GeoJsonKota;
// };
