const mongoose = require("mongoose");

const navbarmodelsSchema = new mongoose.Schema({
  logo: {type: String, required: true},
  navlinks: [
    {
      link: {type: String, required: true},
    },
  ],
});

module.exports = new mongoose.model("navbarmodels", navbarmodelsSchema);
