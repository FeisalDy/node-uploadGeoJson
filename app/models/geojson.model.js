module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      type: String,
      properties: {
        ID_0: Number,
        ISO: String,
        NAME_0: String,
        ID_1: Number,
        NAME_1: String,
        ID_2: Number,
        NAME_2: String,
        VARNAME_2: String,
        NL_NAME_2: String,
        HASC_2: String,
        CC_2: String,
        TYPE_2: String,
        ENGTYPE_2: String,
        VALIDFR_2: String,
        VALIDTO_2: String,
        REMARKS_2: String,
        Shape_Leng: Number,
        Shape_Area: Number
      },
      geometry: {
        // type: String,
        // coordinates: [[[Number, Number]]]
        coordinates: mongoose.Schema.Types.Mixed
      }
    },
    { timestamps: true }
  )

  const GeoJson = mongoose.model('GeoJson', schema)

  return GeoJson
}
