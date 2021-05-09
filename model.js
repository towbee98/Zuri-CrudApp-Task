const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email cannot be empty"],
  },
  country: {
    type: String,
    reuqired: [true, "Country cannot be empty "],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Users = mongoose.model("User", UserSchema);

module.exports = Users;
