const mongoose = require("mongoose")

const animeFormSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title Required"]
    },
    genre: {
        type: [],
        required: [true, "genre Required"]
    },
    release_date: {
        type: String,
        required: [true, "Release Date Required"]
    },
    type: {
        type: String,
        required: [true, "Type Required"]
    },
    seasons: {
        type: Number,
        required: [true, "season Required"]
    },
    yt_trailer: {
        type: String,
        required: [true, "genre Required"]
    },

    des: {
        type: String,
        required: [true, "Description Required"]
    },
    poster_path: String

}, { timestamps: true })

const animeFormModel = new mongoose.model("animeForm", animeFormSchema);

module.exports = animeFormModel