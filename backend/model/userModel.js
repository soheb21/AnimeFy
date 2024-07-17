const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username required"]
    },
    email: {
        type: String,
        required: [true, "E-mail required"]
    },
    password: {
        type: String,
        required: [true, "Password required"]
    },
    user_img: String,
    role: {
        type: String,
        default: "user"
    }

})
//Before Save Hashed the passsword
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
})

//compare password with Hash Password
userSchema.methods.compareHashPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

//Generating Token
userSchema.methods.generatingJWT = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_Expired })
}

const userModel = new mongoose.model("user", userSchema);



module.exports = userModel