const AdminModels = require("../models/adminmodels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginadminmodels = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingAdmin = await AdminModels.findOne({ email });
    if (!existingAdmin) {
      return res.status(400).json({ message: "Admin does not exist" });
    }

    const isMatch = await bcrypt.compare(password, existingAdmin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: existingAdmin._id }, process.env.SECRETE_KEY, {
      expiresIn: "1d",
    });

    res.status(200).json({
      status: "success",
      message: "Admin logged in successfully",
      data: {
        id: existingAdmin._id,
        username: existingAdmin.username,
        email: existingAdmin.email,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { loginadminmodels };
