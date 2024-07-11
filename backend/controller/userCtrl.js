import userModel from "../model/userModel";
import { generateToken } from "../utils/generateToken";

export const register = async (req, res) => {
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
            res.status(402).json({
                success: false,
                message: "User Already Present"
            })
        }
        const user = await userModel.craete({ username, email, password });
        generateToken(user, "User Register Successfully", 201, res)
    } catch (e) {
        console.log("register err", e)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Provide Email and Password',
            })
        }
        const user = await userModel.findOne({ email }).select("+password")

        const isMatch = await user.compareHashPassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Password is wrong',
            })
        }
        generateToken(user, "User Login Successfully", 201, res)
    } catch (e) {
        console.log("Login err", e)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })
    }
}
export const logout = async (req, res) => {
    res.status(201).cookie("token", "", {
        expires: new Date(Date.now()),
        httpOnly: true
    }).json({
        success: true,
        message: "Log-Out Successfull"
    })
}
export const checkUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id)
        return res.status(201).json({
            success: true,
            user
        })
    } catch (e) {
        console.log("user err", e)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })
    }
}