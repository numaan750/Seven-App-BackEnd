const AboutModels = require("../models/aboutmodels");


const getaboutmodels = async (req, res) =>{
    try{
        const aboutData = await AboutModels.find();
        res.status(200). json(aboutData);
    } catch (error){
        res.status(500).json({error: error.message});
    }
}


const createaboutmodels = async (req, res) => {
    try{
        const newAbout = await AboutModels.create(req.body);
        res.status(201).json (newAbout)
    } catch (error) {
        res.status(500).json ({error: error.message});
    }
}

const updateaboutmodels = async (req, res) => {
    try {
         const updateabout = await AboutModels.findOneAndUpdate({_id : req.params.id }, req.body, {new: true, runvalidators:true});
         res.status(200).json(updateabout);
    } catch (erro) {
        res.status(500).
        json({error: erro.message});
    }
}

const deleteaboutmodels = async (req, res) =>{
    try{
        const deleteabout = await AboutModels.findOneAndDelete({_id :req.params.id});
        res.status(200).json(deleteabout);
    } catch (error) {
        res.status(500).json({error: error.message});
        
    }
}


module.exports = {
    getaboutmodels,
    createaboutmodels, 
    updateaboutmodels, 
    deleteaboutmodels
}