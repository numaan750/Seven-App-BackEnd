const mongoose = require ("mongoose");


const homemodelsSchema = new mongoose.Schema({
    backgroundimg: {type:String, required: true},
    heading: {type:String, required:true},
    paragraph:{type:String, required:true},
    buttontext1 :{type:String, required:true},
    buttontext2: {type:String, required:true},
})

module.exports = new mongoose.model("homemodels", homemodelsSchema);