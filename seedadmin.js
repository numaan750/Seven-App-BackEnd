const bcrypt = require("bcrypt");

const mongoose = require("mongoose");
const Admin = require("./models/adminmodels.js");
require("dotenv").config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    const hash = await bcrypt.hash("admin", 10);
    const admin = await Admin.create({
      username: "linkplayer",
      email: "ali@gmail.com",
      password: hash,
    });
    console.log(admin);
  } catch (error) {
    console.log(error);
  }
};
seedAdmin();