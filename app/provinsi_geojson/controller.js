const Provinsi = require("./model");
const fs = require("fs");
const path = require("path");

// const data = JSON.parse(
//   fs.readFileSync(
//     path.resolve(__dirname, "../geojson_data/Provinsi.geojsonl.json"),
//     "utf-8"
//   )
// );

// const provItem = data.features.map((item, index) => item);

// console.log(provItem);

const dir = "../geojson_data/json";

const init = () => {
  return fs
    .readdirSync(path.resolve(__dirname, dir))
    .filter((name) => path.extname(name) === ".json")
    .map((name) => require(path.join(dir, name)));
};

// console.log(init());

module.exports = {
  index: async (req, res) => {
    try {
      res.send("Coba Upload");
    } catch (error) {
      console.log(error);
    }
  },

  uploadGeojson: async (req, res) => {
    try {
      await Provinsi.create(init());
      console.log("data successfully imported");
      // to exit the process
      res.send({ message: "Import Sukses" });
      // process.exit();
    } catch (error) {
      res.send({ message: "Import gagal" });
      console.log("error", error);
    }
  },

  getAllProvinsi: async (req, res) => {
    try {
      const provinsi = await Provinsi.find();
      if (provinsi.length !== 0) {
        res.send({
          message: "Data Ditemukan",
          data: {
            type: "FeatureCollection",
            name: "Provinsi",
            features: provinsi,
          },
        });
      } else {
        res.send({
          message: "Data kosong",
          data: provinsi,
        });
      }
    } catch (error) {
      res.send({ message: "Data Kosong" });
      console.log("error", error);
    }
  },

  getProvinsi: async (req, res) => {
    try {
      const { provinsi } = req.query;

      let query = {};
      if (provinsi) {
        query["features.properties.provinsi"] = provinsi;
      }

      const areaProvinsi = await Provinsi.find(query);
      // const json = res.json(areaProvinsi);

      res.send({ message: "Data ditemukan", data: areaProvinsi });
      // console.log(areaProvinsi);
    } catch (error) {
      res.send({ message: "Data tidak ditemukan" });
      console.log("error", error);
    }
  },
};
