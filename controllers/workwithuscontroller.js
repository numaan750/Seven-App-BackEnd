const WorkWithusModels = require("../models/workwithusmodels");

const getworlwithusmodels = async (req, res) =>{
    try {
        const workwithusmodels = await WorkWithusModels.find();
        res.status(200).json(workwithusmodels); 
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const createworkwithusmodels = async (req, res) =>{
    try {
        const newWorkWithus = await WorkWithusModels.create(req.body);
        res.status(201).json(newWorkWithus);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const updateworkwithusmodels = async (req, res) =>{
    try {
        const updatedWorkWithus = await WorkWithusModels.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
        res.status(200).json(updatedWorkWithus);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
const deleteworkwithusmodels = async (req, res) =>{
    try {
        const deletedWorkWithus = await WorkWithusModels.findOneAndDelete({ _id: req.params.id });
        res.status(200).json(deletedWorkWithus);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


module.exports = {
    getworlwithusmodels,
    createworkwithusmodels,
    updateworkwithusmodels, 
    deleteworkwithusmodels
};