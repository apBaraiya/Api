const mongoose = require("mongoose");

const connectDB = (uri) => {
    console.log("connected to successfully")
    return mongoose.connect(uri)
}

module.exports = connectDB;