const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
    user: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    title: { type: String, required: true },
    comment: { type: String, required: true },
    verified: { type: Boolean, default: false }
}, {
    timestamps: true
})

const reviewModel = mongoose.model("Review", reviewSchema)

module.exports = reviewModel