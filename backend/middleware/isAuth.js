const jwt = require("jsonwebtoken")

export const isAuthenticate = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(400), json({
            success: false,
            message: "User not Authenticated!"
        })
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await userModel.findById(decoded.id);
    next();
}