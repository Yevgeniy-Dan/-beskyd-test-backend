const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recordSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  address: {
    type: String,
    required: [true, "Please add an address"],
  },
  amount: {
    type: Number,
    required: [true, "Please add an amount"],
  },
  status: {
    type: String,
    required: [true, "Please select a status"],
    enum: ["Open", "Close", "Pending"],
  },
  role: {
    type: String,
    required: [true, "Please select a role"],
    enum: ["Customer", "Business", "Admin"],
  },
});

module.exports = mongoose.model("Record", recordSchema);
