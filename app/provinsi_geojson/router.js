const express = require("express");
const router = express.Router();

const {
  uploadGeojson,
  index,
  getAllProvinsi,
  getProvinsi,
} = require("./controller");

router.get("/", index);
router.get("/get_provinsi", getAllProvinsi);
router.get("/find_provinsi", getProvinsi);
router.post("/upload", uploadGeojson);

module.exports = router;
