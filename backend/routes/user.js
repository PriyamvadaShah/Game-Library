const express = require("express");
const { handleUserSignup, handleUserLogin, sendsomething, handleUrlClick, sendUrlData, restrictToLoggedin} = require("../controllers/user");
const { restrictToLoggedinUserOnly } = require("../middlewares/auth");

const router = express.Router();

router.post("/signUp", handleUserSignup);
router.get("/Login", handleUserLogin);
router.post("/url", handleUrlClick);
router.get("/url", sendUrlData);
router.get("/checkAuth", restrictToLoggedin);
module.exports = router;