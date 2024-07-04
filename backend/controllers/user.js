const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");
const { setUser } = require("../service/auth");
const { getUser } = require("../service/auth");
const bcrypt=require('bcrypt');

async function hashPassword(password) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Password hashing failed', error);
  }
} 

async function handleUserSignup(req, res) {
  const email = req.body.email;
  const userName = req.body.userName;
  const nonHashedPassword = req.body.password;
  if (!email || !userName || !nonHashedPassword) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const password=await hashPassword(nonHashedPassword);
  await User.create({
    email,
    userName,
    password,
  });
  return res.status(201).json({ message: 'User created successfully' });
}

async function comparePasswords(plainPassword, hashedPassword) {
  try {
    const match = await bcrypt.compare(plainPassword, hashedPassword);
    return match;
  } catch (error) {
    throw new Error('Password comparison failed', error);
  }
}

async function handleUserLogin(req, res) {
  const userName = req.query.userName;
  console.log(userName);
  const nonHashedPassword = req.query.password;
    try {
        const user = await User.findOne({ userName });
        if (!user) {
          return res.status(401).json({ error: "Invalid Username" });
      }
        const passwordMatch = await bcrypt.compare(nonHashedPassword, user.password);
        if(!passwordMatch){
          return res.status(401).json({ error: "Invalid Password" });
      }
        

        const sessionId = uuidv4();
        setUser(sessionId, user); // You need to define `setUser` function for session management

        res.cookie("uid", sessionId);
        return res.status(200).json({ user });
    } catch (error) {
        console.error('Error during login:', error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

async function handleUrlClick(req, res) {
  const gameName = req.body.gameName;
  const userName = req.body.userName;
  const gameUrl = req.body.gameUrl;
  const today = new Date();
  const month = today.getMonth()+1;
const year = today.getFullYear();
const date = today. getDate();
const currentDate = month + "/" + date + "/" + year;
  if (!gameName || !userName || !gameUrl) {
    return res.status(400).json({ error: "All fields are required" });
  }
  await User.findOneAndUpdate(
    {
      userName,
    },
    {
    $push:{
      visitHistory:{
        gameName: gameName,
        gameUrl: gameUrl,
        timestamps:currentDate
      }
    }
    }
  );
  return res.status(201).json({ message: 'Data sent' });
}

async function sendsomething(req, res){
  some={
    name: "piu",
    email: "k"
  };
  res.json(some);
}

async function sendUrlData(req, res) {
  const userName = req.query.userName;
  console.log(userName);
  const user = await User.findOne({ userName });

  if (!user)
    return res.status(401).json({ message: 'No match' })
  
  return res.status(201).json({user});
}


async function restrictToLoggedin(req, res, next) {
  const userUid = req.cookies?.uid;

  if (!userUid) return res.json({message: false});
  const user = getUser(userUid);

  if (!user) return res.json({message: false});

  return res.json({message: true});
}
module.exports = {
  handleUserSignup,
    sendsomething,
    handleUserLogin,
  handleUrlClick,
  sendUrlData, restrictToLoggedin
};