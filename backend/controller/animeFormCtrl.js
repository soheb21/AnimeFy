const animeFormModel = require("../model/animeFormModel");
const userModel = require("../model/userModel");

exports.getAllAnime = async (req, res) => {
    try {
        const doc = await animeFormModel.find({});
        res.status(201).json({ success: true, doc })
    } catch (error) {
        console.log("getAllAnimebyUser error", error)
        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
}
exports.craeteAnime = async (req, res) => {
    try {
        const { title, des, genre, release_date, type, seasons, yt_trailer, poster_path } = req.body;
        if (!title || !des || !genre || release_date || !type || !seasons || !yt_trailer) {
            return res.status(400).json({
                success: false,
                message: "Please provide All Fields"
            });
        }
        const doc = await animeFormModel.create({ title, des, genre, release_date, type, seasons, yt_trailer })
        res.status(201).json({ success: true, message: "Anime is Added Successfully", doc })
    } catch (error) {
        console.log("create Anime error", error)
        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
}
exports.updateAnime = async (req, res) => {
    try {
        const { id } = req.params;
        const doc = await animeFormModel.findByIdAndUpdate(id, req.body, { new: true })
        res.status(201).json({ success: true, message: "Anime is Updated Successfully", doc })

    } catch (error) {
        console.log("update Anime error", error)

        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
}
exports.deleteAnime = async (req, res) => {
    try {
        const { id } = req.params;
        await animeFormModel.findByIdAndDelete(id)
        res.status(201).json({ success: true, message: "Anime is deletd Successfully", deleteID: id })
    } catch (error) {
        console.log("delete Anime error", error)

        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
}

exports.AddToFav = async (req, res) => {
    try {
        const { id } = req.params;
        const doc = await animeFormModel.findById({ _id: id })
        const user = await userModel.findById(req.user.id);
        user.fav.push(doc)
        res.status(201).json({ success: true, message: "Add to Favourite", deleteID: id })
    } catch (error) {
        console.log("Favourite Anime error", error)
        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
}
exports.getAllFavByUSer = async (req, res) => {
    try {
        const { id } = req.user;
        const docs = await userModel.findById(id);
        res.status(201).json(({
            success: false,
            doc: docs.fav
        }))
    } catch (error) {
        console.log("Get All Favourite Anime error", error)
        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
}