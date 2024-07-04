
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    visitHistory:[
      {
        gameName:{
          type:String
        },
        gameUrl:{
          type:String
        },
        timestamps:{
          type: String  
        }
      }
    ]
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
