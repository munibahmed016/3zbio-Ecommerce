const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require("../../models/userModels");

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required", error: true, success: false });
        }

        const user = await userModel.findOne({ email });
        if (!user) throw new Error("User not found");

        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) throw new Error("Incorrect password");

        const tokenData = {
            _id: user._id,
            email: user.email,
            name: user.name,
        };

        if (!process.env.TOKEN_SECRET_KEY) throw new Error("TOKEN_SECRET_KEY is not defined");

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '8h' });

        const tokenOption = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax'
        };

        res.cookie("token", token, tokenOption).status(200).json({
            message: "Login successfully",
            success: true,
            error: false
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || "An error occurred",
            error: true,
            success: false,
        });
    }
}

module.exports = userSignInController;
