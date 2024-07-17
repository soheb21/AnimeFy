const express = require("express");
const { getAllAnime, craeteAnime, updateAnime, deleteAnime, getAnimeDetails } = require("../controller/animeFormCtrl");
const upload = require("../helper/multerConfig");
const isAuthenticate = require("../middleware/isAuth")
const router = express.Router();

router.get("/get", getAllAnime)
    .get("/get-detail/:id", getAnimeDetails)
    .post("/add-anime", upload.single("poster_path"), craeteAnime)
    .put("/update/:id", isAuthenticate, updateAnime)
    .delete("/delete/:id", isAuthenticate, deleteAnime)


module.exports = router;