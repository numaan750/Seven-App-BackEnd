const mongoose = require("mongoose");

const footermodelsSchema = new mongoose.Schema({
  section1: {
    logo: { type: String, required: true },
    text1: { type: String, required: true },
    text1: { type: String, required: true },
    buttontext: { type: String, required: true },
  },

  section2: {
    title: { type: String, required: true },
    items: [
      {
        text: { type: String, required: true },
      },
    ],
  },

   section3: {
    title: { type: String, required: true },
    items: [
      {
        text: { type: String, required: true },
      },
    ],
  },

  section4: {
    title: { type: String, required: true },
    items: [
      {
        text: { type: String, required: true },
      },
    ],
  },

  copywrittext: { type: String, required: true },
});


module.exports = new mongoose.model("footermodels", footermodelsSchema)