const productModel = require("../../models/productModels");
const reviewModel = require("../../models/reviewModel");

const deleteReview = async (req, res) => {
    try {
        const { reviewId } = req.params;

        if (!req.user || !req.user._id || !req.user.isAdmin) {
            return res.status(403).json({
                message: "User not authorized to delete this review",
                error: true,
                success: false
            });
        }

        const review = await reviewModel.findById(reviewId);
        if (!review) {
            return res.status(404).json({
                message: "Review not found",
                error: true,
                success: false
            });
        }

        const product = await productModel.findById(review.product);
        if (product) {
            product.reviews = product.reviews.filter((id) => id.toString() !== reviewId);
            product.reviewCount -= 1;
            if (product.reviewCount > 0) {
                product.rating = (product.rating * (product.reviewCount + 1) - review.rating) / product.reviewCount;
            } else {
                product.rating = 0;
            }
            await product.save();
        }

        await reviewModel.findByIdAndDelete(reviewId);

        res.status(200).json({
            message: "Review deleted successfully",
            success: true,
            error: false
        });
    } catch (err) {
        console.error("Error deleting review:", err);
        res.status(500).json({
            message: err?.message || "An error occurred while deleting the review",
            error: true,
            success: false
        });
    }
};

module.exports = deleteReview;
