const express = require("express");
const { register, login, checkUser } = require("../controller/userCtrl");
const { isAuthenticate } = require("../middleware/isAuth");
const router = express.Router();

router.post("/register", register)
    .post("/login", login)
    .get("/getuser", isAuthenticate, checkUser);

module.exports = router;