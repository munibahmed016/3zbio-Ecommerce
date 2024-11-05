const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName: String,
    brandName: String,
    category: String,
    productImage: [],
    benefits: String,
    description: String,
    price: Number,
    sellingPrice: Number,
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 }
}, {
    timestamps: true
})

const productModel = mongoose.model("product", productSchema)

module.exports = productModel