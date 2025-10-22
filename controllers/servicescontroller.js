const serviesmodels = require("../models/servicesmodels");



const getservicesmodels = async (req, res) => {
    try {
        const servicesmodels = await serviesmodels.find();
        res.status(200).json(servicesmodels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createserviesmodels = async (req, res) => {
    try {
        const newservices = await serviesmodels.create(req.body);
        res.status(201).json(newservices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateserviesmodels = async (req, res) =>{
    try {
        const updatedServices = await serviesmodels.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
        res.status(200).json(updatedServices);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const deleteserviesmodels = async (req, res) => {
    try {
        const deletedServices = await serviesmodels.findOneAndDelete({ _id: req.params.id });
        res.status(200).json(deletedServices);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getservicesmodels,
    createserviesmodels,
    updateserviesmodels,
    deleteserviesmodels
}