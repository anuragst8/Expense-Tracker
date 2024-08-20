const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://thakuranurag2025:YoFEq8LR9xmkRZsR@cluster0.pwoho8u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
