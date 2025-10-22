const NavbarModel = require("../models/navbarmodels");

const getnavbarmodels = async (req, res) => {
  try {
    const navbar = await NavbarModel.findOne();
    res.status(200).json(navbar || { logo: "", links: [{ name: "" }] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create or replace navbar
const createnavbarmodels = async (req, res) => {
  try {
    // Delete all existing navbars first
    await NavbarModel.deleteMany({});
    const newNavbar = await NavbarModel.create(req.body);
    res.status(201).json(newNavbar);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update existing navbar by ID
const updatenavbarmodels = async (req, res) => {
  try {
    const { logo, navlinks } = req.body; // use navlinks, not links
    const updatedNavbar = await NavbarModel.findByIdAndUpdate(
      req.params.id,
      { logo, navlinks },
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedNavbar);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete navbar (all)
// navbarmodelsController.js
const deletenavbarmodels = async (req, res) => {
  try {
    const deletedNavbar = await NavbarModel.findByIdAndDelete(req.params.id);
    if (!deletedNavbar) {
      return res.status(404).json({ error: "Navbar not found" });
    }
    res.status(200).json({ message: "Navbar deleted successfully", _id: deletedNavbar._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getnavbarmodels,
  createnavbarmodels,
  updatenavbarmodels,
  deletenavbarmodels,
};
