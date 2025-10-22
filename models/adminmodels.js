const mongoose = require("mongoose");

const adminmodelsSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = new mongoose.model("adminmodels", adminmodelsSchema);