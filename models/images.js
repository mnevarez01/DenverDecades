const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imagesSchema = new Schema({
  year: { type: String, required: true },
  image: String,
});

const Images = mongoose.model("Images", imagesSchema);

module.exports = Images;
