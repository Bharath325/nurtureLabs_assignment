const mongoose = require("mongoose");

const advisorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter advisor name!"],
  },
  photo: {
    type: String,
    required: [true, "Please set a url for picture"],
    //default: "default.jpg",
  },
});

const Advisor = mongoose.model("advisors", advisorSchema);

module.exports = Advisor;
