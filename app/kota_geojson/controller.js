const Kota = require("./model");
const fs = require("fs");
const path = require("path");

// Read Geojson
// const geojsonDataKota = JSON.parse(
//   fs.readFileSync("batas_kota_fix.geojson", "utf8")
// );

module.exports = {
  uploadKota: (req, res) => {
    try {
      if (Array.isArray(geojsonDataKota)) {
        Kota.insertMany(geojsonDataKota)
          .then((data) => {
            console.log(data);
            res.send(data);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send({ message: "Error saving GeoJSON data" });
          });
      } else {
        res.status(400).send({ message: "Invalid GeoJSON format" });
      }
    } catch (error) {
      console.error(error);
      res.status(400).send({ message: "Invalid GeoJSON format" });
    }
  },

  findKota: (req, res) => {
    const { provinsi, kota, page, limit } = req.query;

    const query = {};
    if (provinsi) {
      query["properties.Provinsi"] = { $regex: provinsi, $options: "i" };
    }

    if (kota) {
      query["properties.Kab_Kota"] = { $regex: kota, $options: "i" };
    }

    const skip = (page - 1) * limit;

    Kota.find(query)
      .skip(skip)
      .limit(limit)
      .then((data) => {
        if (data && data.length > 0) {
          res.send(data);
          // res.send(query)
        } else {
          res.status(404).send({ message: "No GeoJSON data found" });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({ message: "Error retrieving GeoJSON data" });
      });
  },

  deleteAll: (req, res) => {
    Kota.deleteMany({})
      .then((data) => {
        res.send({ message: `${data.deletedCount} data berhasil dihapus` });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "error ",
        });
      });
  },
};
