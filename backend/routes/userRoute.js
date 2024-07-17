const express = require("express");
const router = express.Router();
const { register, login, checkUser, getAllUser, deleteUser } = require("../controller/userCtrl");
const upload = require("../helper/multerConfig");
const isAuthenticate = require("../middleware/isAuth");

router.post("/register", upload.single("user_img"), register)
    .post("/login", login)
    .get("/getuser", isAuthenticate, checkUser)
    .get("/get-users", isAuthenticate, getAllUser)
    .delete("/delete/:id", isAuthenticate, deleteUser)

module.exports = router;