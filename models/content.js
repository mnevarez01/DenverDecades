const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  year: { type: String, required: true },
  author: { type: String, required: true },
  title:{ type: String, required: true },
  content: String,
  date: { type: Date, default: Date.now }
});

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;

