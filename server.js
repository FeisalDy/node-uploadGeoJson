const express = require('express')
const cors = require('cors')

const app = express()

const corsOptions = {
  origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'Done gk bang? done!' })
})

require('./app/routes/geojson.routes')(app)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Jalan di port ${PORT}`)
})

const db = require('./app/models')
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log('Konek db coy')
//   })
//   .catch(err => {
//     console.log('error cok db ne', err)
//     process.exit()
//   })
setTimeout(() => {
  db.mongoose
    .connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('Konek db coy')
    })
    .catch(err => {
      console.log('error cok db ne', err)
      process.exit()
    })
}, 10000)
