const mongoose = require("mongoose");

const blogmodelsSchema = new mongoose.Schema({
    toptext:{type:String, required:true},
    mainheading:{type:String, required:true},

    card1img:{type:String, required:true},
    card1heading:{type:String, required:true},
    card1button1:{type:String, required:true},
    card1button2:{type:String, required:true},
    card1date:{type:String, required:true},

    card2img:{type:String, required:true},
    card2heading:{type:String, required:true},
    card2button:{type:String, required:true},
    card2date:{type:String, required:true},

    card3img:{type:String, required:true},
    card3heading:{type:String, required:true},
    card3button:{type:String, required:true},
    card3date:{type:String, required:true},


    card4img:{type:String, required:true},
    card4heading:{type:String, required:true},
    card4button1:{type:String, required:true},
    card4button2:{type:String, required:true},
    card4date:{type:String, required:true},
})

module.exports = new mongoose.model("blogmodels", blogmodelsSchema);