const mongoose = require("mongoose");

const navbarmodelsSchema = new mongoose.Schema({
  logo_white: {type: String, required: true},
  logo_black: {type: String, required: true},
  navlinks: [
    {
      link: {type: String, required: true},
    },
  ],
});

module.exports = new mongoose.model("navbarmodels", navbarmodelsSchema);
