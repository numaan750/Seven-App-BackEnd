const ComponeiesModel = require("../models/compeniesmodels");

const getcompeniesmodels = async(req, res) =>{
    try {
        const compeniesData = await ComponeiesModel.find();
        res.status(200).json(compeniesData);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const createcompeniesmodels = async (req, res) =>{
    try {
        const newCompenies = await ComponeiesModel.create(req.body);
        res.status(201).json(newCompenies);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


const updatecompeniesmodels = async (req, res) =>{
    try {
        const updatedCompenies = await ComponeiesModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
        res.status(200).json(updatedCompenies);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const deletecompeniesmodels = async (req, res) =>{
    try {
        const deletedCompenies = await ComponeiesModel.findOneAndDelete({ _id: req.params.id });
        res.status(200).json(deletedCompenies);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


module.exports = {
    getcompeniesmodels,
    createcompeniesmodels,
    updatecompeniesmodels,
    deletecompeniesmodels
}