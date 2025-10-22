const mongoose = require("mongoose");

const workwithusmodelsSchema = new mongoose.Schema({
    toptext :{type:String, required:true},
    heading:{type:String, required:true},
    paragraph:{type:String, required:true},
    check1:{type:String, required:true},
    check2:{type:String, required:true},
    check3:{type:String, required:true},
    check4:{type:String, required:true},
    check5:{type:String, required:true},
    check6:{type:String, required:true},
    mainimg:{type:String, required:true},
})

module.exports = new mongoose.model("workwithusmodels", workwithusmodelsSchema)