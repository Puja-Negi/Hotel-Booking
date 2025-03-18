const mongoose = require("mongoose");

//mongo db
var mongoURL = "mongodb+srv://pujaknegi:mango1@cluster0.eltik.mongodb.net/mern-rooms";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

//create connection variable
var connection = mongoose.connection;

//call back functions
    connection.on("error", () => {
    console.log("Mongo DB Connection Failed");
});

connection.on("connected", () => {
  console.log("Mongo DB Connection Successful");
});

module.exports = mongoose;
