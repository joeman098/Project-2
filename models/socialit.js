const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const socialitSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const socialit = mongoose.model("socialit", socialitSchema);

module.exports = socialit;
