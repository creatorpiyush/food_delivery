const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobileno: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true, 
  },
});

mongoose.model("users", userSchema);
module.exports = mongoose.model("users");
