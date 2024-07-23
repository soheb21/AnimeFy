const animeFormModel = require("../model/animeFormModel");
const userModel = require("../model/userModel");

exports.AddtoFav = async (req, res) => {
    try {
        let { docID } = req.body;
        const userID = req.user;
        const user = await userModel.findById(userID)
        const anime = await animeFormModel.findById(docID);
        if (!anime) {
            return res.status(404).json({ message: 'anime not found' });
        }
        // Check if the product is already in the cart
        const cartItemIndex = user.favs.findIndex(item => item.toString() === docID);

        if (cartItemIndex > -1) {
            return res.status(404).json({ message: 'Already Present' });
        } else {
            // Add the Anime to the Favourite
            user.favs.push(docID);
        }

        const result = await user.save()
        await result.populate("favs")
        res.status(201).json({ success: true, message: "Add to Favourite", result })

    } catch (error) {
        console.log("Favourite Anime error", error)
        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
}
exports.getAllFavByUSer = async (req, res) => {
    try {
        const id = req.user;
        const docs = await userModel.findById(id).populate('favs')

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
        const userID = req.user;
        const user = await userModel.findById(userID)
        const cartItemIndex = user.favs.findIndex((item) => item.toString() === id)
        if (cartItemIndex > -1) {
            //remove the item from the  cart
            user.favs.splice(cartItemIndex, 1);
            await user.save();
        }
        res.status(201).json(({
            success: false,
            message: "Its removed",
            id
        }))
    } catch (error) {
        console.log("Get All Favourite Anime error", error)
        res.status(500).json({ success: false, message: 'Internal Server Error' })
    }
}