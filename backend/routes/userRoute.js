const express = require("express");
const { register, login, checkUser, logout } = require("../controller/userCtrl");
const { isAuthenticate } = require("../middleware/isAuth");
const upload = require("../helper/multerConfig");
const router = express.Router();


router.post("/register", upload.single("user_img"), register)
    .post("/login", login)
    .get("/logout", isAuthenticate, logout)
    .get("/getuser", isAuthenticate, checkUser);

module.exports = router;