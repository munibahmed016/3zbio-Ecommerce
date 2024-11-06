const express = require('express');

const router = express.Router()

const userSignUpController = require('../controller/user/userSignUp');
const userSignInController = require('../controller/user/usderSignIn');
const userDetailsController = require('../controller/user/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/user/userLogout');
const allUsers = require('../controller/user/allUser');
const updateUser = require('../controller/user/updateUser');
const UploadProductController = require('../controller/products/UploadProducts');
const getProductController = require('../controller/products/getProducts');
const updateProductController = require('../controller/products/updateProduct');
const getCategoryProduct = require('../controller/products/getCategortProductOne');
const filterProductController = require('../controller/products/filterProducts');
const getCategoryWiseProduct = require('../controller/products/getCategoryProductWise');
const getProductDetails = require('../controller/products/getProductDetails');
const addToCartController = require('../controller/user/addToCartController');
const countAddToCartProduct = require('../controller/user/countAddToCartProduct');
const addToCartViewProduct = require('../controller/user/addToCartViewProduct');
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct');
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct');
const searchProduct = require('../controller/products/searchProducts');
const paymentController = require('../controller/order/paymentController');
const webhooks = require('../controller/order/webHooks');
const orderController = require('../controller/order/orderController');
const addReview = require('../controller/products/reviewController');

router.post("/signup", userSignUpController)
router.post("/signin", userSignInController)
router.get("/user-details",authToken, userDetailsController)
router.get("/userLogout", userLogout)

//admin panel 
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

// Produts
router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product", getProductController)
router.post("/update-product", updateProductController)
router.post("/filter-product",filterProductController)
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)
router.get("/search",searchProduct)


//user add to cart
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)

//Review Api
router.post("/review",authToken,addReview)

//payment and order
router.post("/checkout", authToken, paymentController)
router.post("/webhook", webhooks) // /api/webhook
router.get("/order-list", authToken, orderController)

module.exports = router 