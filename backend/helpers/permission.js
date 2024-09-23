const userModel = require("../models/userModels");

const uploadProductPermission = async (userId) => {
    try {
        // Find the user by ID
        const user = await userModel.findById(userId);
        
        // Check if user exists
        if (!user) {
            console.error(`User with ID ${userId} not found.`);
            return false;
        }

        // Check if the user has 'ADMIN' role
        if (user.role === 'ADMIN') {
            return true;
        }

        // If not 'ADMIN', deny permission
        return false;
    } catch (error) {
        // Handle any unexpected errors
        console.error(`Error checking permissions: ${error.message}`);
        return false;
    }
};

module.exports = uploadProductPermission;
