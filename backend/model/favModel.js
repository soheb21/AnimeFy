const mongoose = require("mongoose")

const favSchema = new mongoose.Schema({

    fav: { type: mongoose.Schema.Types.ObjectId, ref: "animeForm" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
})

const favModel = new mongoose.model("fav", favSchema);

module.exports = favModel