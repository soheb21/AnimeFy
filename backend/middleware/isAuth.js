const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1];
        if (!token) {
            return res.status(400).json({
                success: false,
                message: "User not Authenticated!"
            })
        }
        jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
            if (err) {
                return res.status(500).json({
                    success: "false",
                    message: "Auth method",
                })
            }
            req.user = decoded.id;
            next();
        });


    } catch (e) {
        console.log("token middleware", e);
        res.status(501).json({ success: false, message: "Internal Server Error" })
    }
}