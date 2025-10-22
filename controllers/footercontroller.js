const FooterModel = require("../models/footermodels");

const getfootermodels = async (req, res) => {
  try {
    const footers = await FooterModel.find();
    res.status(200).json(footers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createfootermodels = async (req, res) => {
  try {
    const newFooter = await FooterModel.create(req.body);
    res.status(201).json(newFooter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatefootermodels = async (req, res) => {
  try {
    const updatedFooter = await FooterModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedFooter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletefootermodels = async (req, res) => {
  try {
    const deletedFooter = await FooterModel.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(deletedFooter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getfootermodels,
  createfootermodels,
  updatefootermodels,
  deletefootermodels,
};
