const favModel = require("../model/favModel");

exports.AddtoFav = async (req, res) => {
    try {
        let { docID } = req.body;
        const userID = req.user;
        const doc = await favModel.create({ fav: docID, user: userID })
        const result = await doc.populate("fav");
        res.status(201).json({ success: true, message: "Add to Favourite", result })

    } catch (error) {
        console.log("Favourite Anime error", error)
        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
}
exports.getAllFavByUSer = async (req, res) => {
    try {
        const id = req.user;
        const docs = await favModel.find({ user: id }).populate("fav")


        res.status(201).json(({
            success: false,
            doc: docs
        }))
    } catch (error) {
        console.log("Get All Favourite Anime error", error)
        res.status(500).json({ success: false, message: 'Internal Server Error' })
    }
}
exports.deleteFavByUSer = async (req, res) => {
    try {
        const { id } = req.params;
        await favModel.findByIdAndDelete(id)

        res.status(201).json(({
            success: false,
            id
        }))
    } catch (error) {
        console.log("Get All Favourite Anime error", error)
        res.status(500).json({ success: false, message: 'Internal Server Error' })
    }
}