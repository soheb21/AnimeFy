const cloudinary = require("../helper/cloudinaryConfig");
const animeFormModel = require("../model/animeFormModel");

exports.getAllAnime = async (req, res) => {
    try {
        const doc = await animeFormModel.find({});
        res.status(201).json({ success: true, doc })
    } catch (error) {
        console.log("getAllAnimebyUser error", error)
        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
}
exports.getAnimeDetails = async (req, res) => {
    try {
        const { id } = req.params
        const doc = await animeFormModel.findById(id);
        res.status(201).json({ success: true, doc })
    } catch (error) {
        console.log("getAllAnimebyUser error", error)
        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
}
exports.craeteAnime = async (req, res) => {
    try {
        const { title, des, genre, release_date, type, seasons, yt_trailer, poster_path } = req.body;
        if (!title || !des || !genre || !release_date || !type || !seasons || !yt_trailer) {
            return res.status(400).json({
                success: false,
                message: "Please provide All Fields"
            });
        }
        const upload = await cloudinary.uploader.upload(req.file.path, { folder: "ANIMEFY" })
        const doc = await animeFormModel.create({ title, des, genre, release_date, type, seasons, yt_trailer, poster_path: upload.secure_url })
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
        res.status(201).json({ success: true, message: "Anime is deletd Successfully", id })
    } catch (error) {
        console.log("delete Anime error", error)

        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
}

