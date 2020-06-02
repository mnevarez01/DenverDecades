const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imagesSchema = new Schema({
  year: { type: String, required: true },
  imageLink: String,
  date: { type: Date, default: Date.now }
});

const Images = mongoose.model("Images", imagesSchema);

module.exports = Images;
