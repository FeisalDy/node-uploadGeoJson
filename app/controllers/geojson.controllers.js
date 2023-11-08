const db = require('../models')
const multer = require('multer')
const GeoJson = db.geojson
const fs = require('fs')

//upload data
exports.uploadGeoJSON = (req, res) => {
  try {
    const geojsonData = JSON.parse(fs.readFileSync('kota.geojson', 'utf8'))

    if (Array.isArray(geojsonData)) {
      GeoJson.insertMany(geojsonData)
        .then(data => {
          console.log(data)
          res.send(data)
        })
        .catch(err => {
          console.error(err)
          res.status(500).send({ message: 'Error saving GeoJSON data' })
        })
    } else {
      res.status(400).send({ message: 'Invalid GeoJSON format' })
    }
  } catch (error) {
    console.error(error)
    res.status(400).send({ message: 'Invalid GeoJSON format' })
  }
}

// get all data
exports.findAll = (req, res) => {
  GeoJson.find()
    .then(data => {
      if (data && data.length > 0) {
        res.send(data)
      } else {
        res.status(404).send({ message: 'No GeoJSON data found' })
      }
    })
    .catch(err => {
      console.error(err)
      res.status(500).send({ message: 'Error retrieving GeoJSON data' })
    })
}

exports.findByNames = (req, res) => {
  const { provinsi, kota } = req.query

  const query = {}
  if (provinsi) {
    query['properties.NAME_1'] = { $regex: provinsi, $options: 'i' }
  }

  if (kota) {
    query['properties.NAME_2'] = { $regex: kota, $options: 'i' }
  }

  GeoJson.find(query)
    .then(data => {
      if (data && data.length > 0) {
        res.send(data)
        // res.send(query)
      } else {
        res.status(404).send({ message: 'No GeoJSON data found' })
      }
    })
    .catch(err => {
      console.error(err)
      res.status(500).send({ message: 'Error retrieving GeoJSON data' })
    })
}

//delete all data
exports.deleteAll = (req, res) => {
  GeoJson.deleteMany({})
    .then(data => {
      res.send({ message: `${data.deletedCount} data berhasil dihapus` })
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'error '
      })
    })
}
