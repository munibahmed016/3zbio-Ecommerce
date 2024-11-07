const productModel = require("../../models/productModels");
const reviewModel = require("../../models/reviewModel");

const addReview = async (req, res) => {
    try {
        const { productId, rating, title, comment } = req.body;
        
        console.log("User from request:", req.user);
        
        if (!req.user || !req.user._id) {
            return res.status(401).json({
                  message: "User not authenticated",
                error: true,
                success: false
            });
        }

        const userId = req.user._id;

        const newReview = new reviewModel({
            product: productId,
            user: userId,
            rating,
            title,
            comment
        });

        await newReview.save();

        const product = await productModel.findById(productId);
        product.reviews.push(newReview._id);
        product.reviewCount += 1;
        product.rating = (product.rating * (product.reviewCount - 1) + rating) / product.reviewCount;
        await product.save();

        res.status(200).json({
            data: newReview,
            message: "Review added successfully",
            success: true,
            error: false
        });

    } catch (err) {
        console.error("Error adding review:", err);
        res.status(500).json({
            message: err?.message || "An error occurred while adding the review",
            error: true,
            success: false
        });
    }
};

module.exports = addReview;