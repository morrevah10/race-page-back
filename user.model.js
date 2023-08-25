const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  firstName: String,
  surname: String,
  email: String,
  identityCard: Number,
  phoneNumber: Number,
  gender: String,
  section: String,
  healthConditions: Boolean
})

module.exports = mongoose.model("User", userSchema)
