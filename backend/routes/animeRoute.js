const express = require("express");
const { getAllAnime, craeteAnime, updateAnime, deleteAnime, AddToFav, getAllFavByUSer } = require("../controller/animeFormCtrl");
const router = express.Router();

router.get("/get", getAllAnime)
    .post("/add-anime", craeteAnime)
    .put("/update/:id", updateAnime)
    .delete("/delete/:id", deleteAnime)
    .post("/add-fav", AddToFav)
    .get("/get-Fav", getAllFavByUSer)

module.exports = router;