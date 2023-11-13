const express = require("express");
const router = express.Router();

router.get("/kota", geojson.findKota);
router.post("/kota", geojson.uploadKota);
router.delete("/kota", geojson.deleteAll);

module.exports = router;
