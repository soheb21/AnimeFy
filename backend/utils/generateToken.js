exports.generateToken = (user, message, statusCode, res) => {
    const token = user.generatingJWT();

    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 1000)
    }).json({
        success: true,
        message,
        token,
        user
    })

}