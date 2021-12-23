const mongoose = require("mongoose");

const connectDB = mongoose
  .connect("mongodb://localhost:27017/weblog")
  .then((res) => {
    console.log(`database connected to ${res.connection.host}`);
  })
  .catch((err) => console.log(err));

module.exports = connectDB;
