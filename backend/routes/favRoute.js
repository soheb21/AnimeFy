const express = require("express");
const router = express.Router();
const { AddtoFav, getAllFavByUSer, deleteFavByUSer } = require("../controller/favCtrl");


router.post("/add-fav", AddtoFav)
    .get("/get-fav", getAllFavByUSer)
    .delete("/remove-fav/:id", deleteFavByUSer);

module.exports = router;