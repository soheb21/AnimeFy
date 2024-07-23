const cloudinary = require("../helper/cloudinaryConfig");
const userModel = require("../model/userModel");
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Provide All fields',
            })
        }
        const existingUser = await userModel.findOne({ email }).select("+password")
        if (existingUser) {
            return res.status(402).json({
                success: false,
                message: "User Already Present"
            })
        }
        const upload = await cloudinary.uploader.upload(req.file.path, { folder: "ANIMEFY" })
        const user = await userModel.create({ username, email, password, user_img: upload.secure_url });
        const token = user.generatingJWT();
        return res.status(201).json({
            success: true,
            message: "Register Successfully",
            token
        })
    } catch (e) {
        console.log("register err", e)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })
    }
}
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Provide Email and Password',
            })
        }
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'user not found!',
            })
        }
        const isMatch = await user.compareHashPassword(password)
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Password is wrong',
            })
        }
        const token = user.generatingJWT();
        res.status(201).json({
            success: true,
            message: "Login Successfully",
            token
        })
    } catch (e) {
        console.log("Login err", e)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })
    }
}
exports.logout = async (req, res) => {
    res.status(201).cookie("token", "", {
        expires: new Date(Date.now()),
        httpOnly: true
    }).json({
        success: true,
        message: "Log-Out Successfull"
    })
}
exports.checkUser = async (req, res) => {
    try {
        const doc = await userModel.findById(req.user).populate("favs");
        return res.status(201).json({
            success: true,
            doc
        })
    } catch (e) {
        console.log("user err", e)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })
    }
}
exports.getAllUser = async (req, res) => {
    try {
        const doc = await userModel.find({ role: "user" });
        return res.status(201).json({
            success: true,
            doc
        })
    } catch (e) {
        console.log("getAllUser err", e)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await userModel.findByIdAndDelete(id)
        res.status(201).json({ success: true, message: "user is deleted Successfully", id })
    } catch (error) {
        console.log("delete Anime error", error)

        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
}