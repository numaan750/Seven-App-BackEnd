const mongoose = require("mongoose");

const compeniesmodelsSchema = new mongoose.Schema({
    heading:{type:String, required:true},
    img1:{type:String, required:true},
    img2:{type:String, required:true},
    img3:{type:String, required:true},
    img4:{type:String, required:true},
    img5:{type:String, required:true},
    img6:{type:String, required:true},
})

module.exports = new mongoose.model("compeniesmodels", compeniesmodelsSchema);