const express = require("express");
const router = express.Router();

const Room = require("../models/room");

//API endpoints to fetch data
router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.send(rooms);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});



//export router to use it in our server.js as it is our entry point
module.exports = router;
