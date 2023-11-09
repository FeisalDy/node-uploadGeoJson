module.exports = app => {
  const geojson = require('../controllers/geojson.controllers.js')

  var router = require('express').Router()

  router.post('/upload', geojson.uploadGeoJSON)

  router.get('/', geojson.findAll)

  router.get('/find', geojson.findByNames)

  router.delete('/', geojson.deleteAll)

  router.post('/kota', geojson.uploadKota)

  router.get('/kota', geojson.findKota)

  app.use('/api/geojson', router)
}
