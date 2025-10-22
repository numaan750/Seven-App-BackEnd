const HomeModels = require("../models/homemodels");


const gethomemodels = async (req, res) =>{
    try {
        const homeData = await HomeModels.find();
        res.status(200). json(homeData);
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

const craetehomemodels = async (req, res) => {
    try {
        const newHome = await HomeModels.create(req.body);
        res.status(201).json(newHome);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updatehomemodels = async (req, res) => {
    try {
      const updatedHome = await HomeModels.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
      );
      res.status(200).json(updatedHome);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deletehomemodels = async (req, res) => {
    try {
      const deletedHome = await HomeModels.findOneAndDelete({ _id: req.params.id });
      res.status(200).json(deletedHome);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {
    gethomemodels,
    craetehomemodels,
    updatehomemodels,
    deletehomemodels
  }