const JoinModels = require("../models/joinusmodles");

const getjoinusmodels = async(req, res) => {
    try {
        const joinusmodels = await JoinModels.find({});
        res.status(200).json(joinusmodels);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}   

const createjoinusmodels = async (req, res) => {
    try {
        const newjoinus = await JoinModels.create(req.body);
        res.status(201).json(newjoinus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updatejoinusmodels = async (req, res) => {
    try {
        const updatedjoinus = await JoinModels.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
        res.status(200).json(updatedjoinus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deletejoinusmodels = async (req, res) => {
    try {
        const deletedjoinus = await JoinModels.findOneAndDelete({ _id: req.params.id });
        res.status(200).json(deletedjoinus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getjoinusmodels,
    createjoinusmodels,
    updatejoinusmodels,
    deletejoinusmodels
}