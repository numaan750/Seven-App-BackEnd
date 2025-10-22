const mongoose = require("mongoose");

const aboutmodelsSchema = new mongoose.Schema({
    mainimg:{type:String, required:true},
    toptext:{type:String, required:true},
    
    heading:{type:String, required:true},
    paragraph:{type:String, required:true},
    smaltext:{type:String, required:true},
    number1:{type:String, required:true},
    p1:{type:String, required:true},
    number2:{type:String, required:true},
    p2:{type:String, required:true}
})

module.exports = new mongoose.model("aboutmodels", aboutmodelsSchema);