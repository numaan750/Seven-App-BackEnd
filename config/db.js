const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("✅ MongoDB Connected Successfully");

    } catch (err) {
        console.error("mongodb connection faild", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;