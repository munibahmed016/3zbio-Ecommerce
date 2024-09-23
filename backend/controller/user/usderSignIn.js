const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require("../../models/userModels")

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email) throw new Error("Please provide email");
        if (!password) throw new Error("Please provide password");

        const user = await userModel.findOne({ email });
        if (!user) throw new Error("User not found");

        const checkPassword = await bcrypt.compare(password, user.password);
        console.log("checkPassword", checkPassword);

        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email,
            };

            if (!process.env.TOKEN_SECRET_KEY) throw new Error("TOKEN_SECRET_KEY is not defined");

            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '8h' });

            console.log("Generated Token:", token);

            // Cookie options
            const tokenOption = {
                httpOnly: true,  // Make cookie inaccessible to client-side scripts
                secure: process.env.NODE_ENV === 'production',  // Only send cookie over HTTPS in production
                sameSite: 'Lax', // You might need this depending on your CORS setup
            };

            res.cookie("token", token, tokenOption).status(200).json({
                message: "Login successfully",
                data: token,
                success: true,
                error: false
            });
            console.log("Set-Cookie:", res.getHeaders()['set-cookie']); 

        } else {
            throw new Error("Please check Password");
        }

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignInController;
