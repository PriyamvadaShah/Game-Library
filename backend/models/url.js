
const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    gameName: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

const User = mongoose.model("url", urlSchema);

module.exports = URL;
