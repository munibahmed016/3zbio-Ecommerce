import React, { useState, useCallback, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa"
import { ChevronLeft, ChevronRight, Minus, Plus, ChevronDown, X, Trash2 } from 'lucide-react'
import SummaryApi from '../common'
import displayINRCurrency from '../helpers/displayCurrency'
import CategroyWiseProductDisplay from '../Components/AllProducts/catrgoryWiseProductDetails'
import addToCart from '../helpers/addToCart'
import Context from '../context'

const ProductDetails = () => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    benefits: "",
    description: "",
    price: "",
    sellingPrice: "",
    ingredients: "",
    faqs: [],
    reviews: [],
    qualityPromise: "",
    rating: 0,
    reviewCount: 0
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeImage, setActiveImage] = useState("")
  const [showLightbox, setShowLightbox] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [reviewFormData, setReviewFormData] = useState({
    title: '',
    comment: '',
    rating: 5,
    name: '',
    email: '',
  })
  const [quantity, setQuantity] = useState(1)
  const [isAdmin, setIsAdmin] = useState(false) // You should set this based on user role

  const params = useParams()
  const navigate = useNavigate()
  const { fetchUserAddToCart } = useContext(Context)

  const fetchProductDetails = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(SummaryApi.productDetails.url, {
        method: SummaryApi.productDetails.method,
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          productId: params?.id
        })
      })
      const dataResponse = await response.json()
      if (dataResponse.success) {
        setData(dataResponse.data)
        setActiveImage(dataResponse.data?.productImage[0] || "")
      } else {
        throw new Error(dataResponse.message || "Failed to fetch product details")
      }
    } catch (error) {
      console.error('Error fetching product details:', error)
      setError(error.message || "An error occurred while fetching product details")
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProductDetails()
  }, [params])

  const handleImageClick = () => {
    setShowLightbox(true)
  }

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id)
    fetchUserAddToCart()
  }

  const handleBuyProduct = async (e, id) => {
    await addToCart(e, id)
    fetchUserAddToCart()
    navigate("/cart")
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setReviewFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleReviewSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(SummaryApi.addReview.url, {
        method: SummaryApi.addReview.method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', 
        body: JSON.stringify({
          productId: params?.id,
          rating: reviewFormData.rating,
          title: reviewFormData.title,
          comment: reviewFormData.comment,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to submit review')
      }

      const result = await response.json()
      if (result.success) {
        fetchProductDetails()
        setShowReviewForm(false)
        setReviewFormData({
          title: '',
          comment: '',
          rating: 5,
          name: '',
          email: '',
        })
      } else {
        throw new Error(result.message || "Failed to submit review")
      }
    } catch (error) {
      console.error('Error submitting review:', error)
      if (error.message === 'User not authenticated') {
        navigate('/login')
      } else {
        alert(error.message || "Failed to submit review. Please try again.")
      }
    }
  }

  const handleDeleteReview = async (reviewId) => {
    if (!isAdmin) return

    try {
      const response = await fetch(`${SummaryApi.deleteReview.url}/${reviewId}`, {
        method: SummaryApi.deleteReview.method,
        credentials: 'include',
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to delete review')
      }

      const result = await response.json()
      if (result.success) {
        fetchProductDetails()
      } else {
        throw new Error(result.message || "Failed to delete review")
      }
    } catch (error) {
      console.error('Error deleting review:', error)
      alert(error.message || "Failed to delete review. Please try again.")
    }
  }

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const ReviewForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Write a Review</h2>
          <button onClick={() => setShowReviewForm(false)} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleReviewSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">Review Title</label>
            <input
              id="title"
              name="title"
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Give your review a title"
              value={reviewFormData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium mb-2">Review</label>
            <textarea
              id="comment"
              name="comment"
              className="w-full border border-gray-300 rounded-md p-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Write your comments here"
              value={reviewFormData.comment}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Rating</label>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setReviewFormData(prevState => ({ ...prevState, rating: star }))}
                  className={`text-2xl ${star <= reviewFormData.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name (Displayed Publicly)</label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your name (public)"
              value={reviewFormData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email (private)"
              value={reviewFormData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  )

  const ReviewSection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Customer Reviews</h2>
        <div className="flex justify-center items-center gap-1 mb-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar key={star} className={`w-5 h-5 ${star <= Math.round(data.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
          ))}
        </div>
        <p className="text-lg mb-4">{data.rating.toFixed(1)} out of 5</p>
        <p className="text-gray-600">Based on {data.reviewCount} reviews</p>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setShowReviewForm(true)}
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          Write a review
        </button>
        <button
          className="px-6 py-2 border border-gray-800 rounded-md hover:bg-gray-50"
        >
          Ask a question
        </button>
      </div>

      <div className="space-y-6">
        {data.reviews && data.reviews.length > 0 ? (
          data.reviews.map((review, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                {isAdmin && (
                  <button
                    onClick={() => handleDeleteReview(review._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">{review.user}</span>
                {review.verified && (
                  <span className="bg-gray-800 text-white text-xs px-2 py-0.5 rounded">
                    Verified
                  </span>
                )}
                <span className="text-gray-500 text-sm">{new Date(review.createdAt).toLocaleDateString()}</span>
              </div>
              <h4 className="font-medium mb-1">{review.title}</h4>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews yet. Be the first to review this product!</p>
        )}
      </div>
    </div>
  )

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="md:grid md:grid-cols-12 md:gap-8">
          {/* Product Images */}
          <div className="md:col-span-5 md:sticky md:top-8 md:self-start">
            <div
              className="relative h-[250px] md:h-[500px] bg-white rounded-lg cursor-zoom-in"
              onClick={handleImageClick}
            >
              <img
                src={activeImage}
                alt={data.productName}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto justify-center mt-4">
              {data.productImage?.map((img) => (
                <button
                  key={img}
                  className={`w-16 h-16 rounded-lg border-2 flex-shrink-0 ${activeImage === img ? 'border-teal-500' : 'border-transparent'
                    }`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info and Expandable Sections */}
          <div className="md:col-span-7 mt-8 md:mt-0">
            <style>
              {`
                /* Hide scrollbar for WebKit-based browsers (Chrome, Safari, Edge) */
                .md\\:overflow-y-auto::-webkit-scrollbar {
                  display: none;
                }

                /* Hide scrollbar for Firefox */
                .md\\:overflow-y-auto {
                  scrollbar-width: none;
                }

                /* Hide scrollbar for other browsers */
                .md\\:overflow-y-auto {
                  -ms-overflow-style: none;
                }
              `}
            </style>
            <div className="md:h-[calc(100vh-4rem)] md:overflow-y-auto md:pr-4">
              <div className="space-y-8">
                <div>
                  <h1 className="text-2xl font-bold">{data.productName}</h1>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(data.rating) ? '' : 'text-gray-300'} />
                      ))}
                    </div>
                    <span className="text-gray-600">{data.reviews?.length} reviews</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">{displayINRCurrency(data.sellingPrice)}</span>
                  <span className="text-xl text-gray-500 line-through">{displayINRCurrency(data.price)}</span>
                </div>
                <div className="space-y-2">
                  <p className='bg-green-100 text-[#022636] px-2 rounded-full inline-block w-fit'>{data?.brandName}</p>
                  <h3 className="font-medium">Main Feature:</h3>
                  <ul className="space-y-2 text-black">
                    {data.benefits?.split('\n').map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Quantity:</label>
                  <div className="flex items-center gap-2">
                    <button
                      className="p-2 border border-gray-300 rounded-md"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center">{quantity}</span>
                    <button
                      className="p-2 border border-gray-300 rounded-md"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex gap-4">
                    <button
                      onClick={(e) => handleAddToCart(e, data._id)}
                      className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                    >
                      ADD TO CART
                    </button>
                    <button
                      onClick={(e) => handleBuyProduct(e, data._id)}
                      className="flex-1 px-6 py-3 bg-white border border-gray-900 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      BUY IT NOW
                    </button>
                  </div>
                </div>
              </div>
              {/* Expandable Sections */}
              <div className="space-y-2 mt-8">
                {[
                  { id: 'details', title: 'Product Details', content: data.description },
                  { id: 'ingredients', title: 'Ingredients', content: data.ingredients },
                  {
                    id: 'faqs',
                    title: 'FAQs',
                    content: (
                      <div>
                        {data.faqs?.map((faq, index) => (
                          <div key={index} className="mb-4">
                            <h4 className="font-medium mb-2">{faq.question}</h4>
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    )
                  },
                  { id: 'reviews', title: 'Customer Reviews', content: <ReviewSection /> },
                  { id: 'quality', title: 'Our Quality Promise', content: data.qualityPromise }
                ].map(section => (
                  <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50"
                      onClick={() => toggleSection(section.id)}
                    >
                      <span className="font-medium">{section.title}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${activeSection === section.id ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${activeSection === section.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 py-4 border-t border-gray-200">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {showLightbox && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={() => setShowLightbox(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <button
              className="absolute left-4 top-1/2 text-white"
              onClick={() => {
                const currentIndex = data.productImage.indexOf(activeImage)
                const prevIndex = (currentIndex - 1 + data.productImage.length) % data.productImage.length
                setActiveImage(data.productImage[prevIndex])
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <img
              src={activeImage}
              alt={data.productName}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <button
              className="absolute right-4 top-1/2 text-white"
              onClick={() => {
                const currentIndex = data.productImage.indexOf(activeImage)
                const nextIndex = (currentIndex + 1) % data.productImage.length
                setActiveImage(data.productImage[nextIndex])
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}

        {showReviewForm && <ReviewForm />}

        {/* Recommended Products */}
        <div className='mt-10 border-t'></div>
        {data.category && (
          <div className="mt-12">
            <CategroyWiseProductDisplay
              category={data.category}
              heading="Recommended Products"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetails