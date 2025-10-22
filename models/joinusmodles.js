const mongoose = require("mongoose");

const joinusmodelsSchema = new mongoose.Schema({
  img: { type: String, required: true },
  toptext: { type: String, required: true },
  heading: { type: String, required: true },
  paragraph: { type: String, required: true },
  buttontext: { type: String, required: true },
  text1: { type: String, required: true },
  text2: { type: String, required: true },
});

module.exports = new mongoose.model("joinusmodels", joinusmodelsSchema)