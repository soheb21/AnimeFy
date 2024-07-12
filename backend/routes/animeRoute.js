const express = require("express");
const { getAllAnime, craeteAnime, updateAnime, deleteAnime, AddToFav, getAllFavByUSer, getAnimeDetails } = require("../controller/animeFormCtrl");
const upload = require("../helper/multerConfig");
const router = express.Router();

router.get("/get", getAllAnime)
    .get("/get-detail/:id", getAnimeDetails)
    .post("/add-anime", upload.single("poster_path"), craeteAnime)
    .put("/update/:id", updateAnime)
    .delete("/delete/:id", deleteAnime)
    .post("/add-fav/:id", AddToFav)
    .get("/get-Fav", getAllFavByUSer)

module.exports = router;