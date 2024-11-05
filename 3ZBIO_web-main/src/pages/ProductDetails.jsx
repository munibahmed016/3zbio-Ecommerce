import React, { useState, useCallback, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaStar, FaStarHalf } from "react-icons/fa"
import { ChevronLeft, ChevronRight, Minus, Plus, ChevronDown, X, Upload } from 'lucide-react'
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
    image: null
  })
  const [quantity, setQuantity] = useState(1)

  const params = useParams()
  const navigate = useNavigate()
  const { fetchUserAddToCart } = useContext(Context)

  const fetchProductDetails = async () => {
    setLoading(true)
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
      setData(dataResponse?.data)
      setActiveImage(dataResponse?.data?.productImage[0])
    } catch (error) {
      console.error('Error fetching product details:', error)
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

  const handleReviewSubmit = async (e) => {
    e.preventDefault()
    // Add your review submission logic here
    setShowReviewForm(false)
  }

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const ReviewForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Write a Review</h2>
          <button onClick={() => setShowReviewForm(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleReviewSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Review Title</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Give your review a title"
              value={reviewFormData.title}
              onChange={(e) => setReviewFormData({ ...reviewFormData, title: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Review</label>
            <textarea
              className="w-full border rounded-md p-2 min-h-[100px]"
              placeholder="Write your comments here"
              value={reviewFormData.comment}
              onChange={(e) => setReviewFormData({ ...reviewFormData, comment: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Picture/Video (Optional)</label>
            <div className="border-2 border-dashed rounded-md p-4 text-center">
              <Upload className="mx-auto w-8 h-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Name (Displayed Publicly)</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="Enter your name (public)"
              value={reviewFormData.name}
              onChange={(e) => setReviewFormData({ ...reviewFormData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-md p-2"
              placeholder="Enter your email (private)"
              value={reviewFormData.email}
              onChange={(e) => setReviewFormData({ ...reviewFormData, email: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600"
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
            <FaStar key={star} className="text-yellow-400 w-5 h-5" />
          ))}
        </div>
        <p className="text-lg mb-4">{data.rating} out of 5</p>
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
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">{review.name}</span>
                {review.verified && (
                  <span className="bg-gray-800 text-white text-xs px-2 py-0.5 rounded">
                    Verified
                  </span>
                )}
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews yet. Be the first to review this product!</p>
        )}
      </div>
    </div>
  )

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
              {loading ? (
                <div className="w-full h-full animate-pulse bg-slate-200 rounded-xl" />
              ) : (
                <img
                  src={activeImage}
                  alt={data.productName}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            <div className="flex gap-2 overflow-x-auto justify-center mt-4">
              {loading ? (
                Array(4).fill(null).map((_, i) => (
                  <div key={i} className="w-20 h-20 bg-slate-200 rounded-lg animate-pulse flex-shrink-0" />
                ))
              ) : (
                data.productImage?.map((img) => (
                  <button
                    key={img}
                    className={`w-16 h-16 rounded-lg border-2 flex-shrink-0 ${activeImage === img ? 'border-teal-500' : 'border-transparent'
                      }`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain" />
                  </button>
                ))
              )}
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
                {loading ? (
                  <div className="space-y-4">
                    <div className="h-8 bg-slate-200 rounded animate-pulse w-3/4" />
                    <div className="h-6 bg-slate-200 rounded animate-pulse w-1/2" />
                    <div className="h-10 bg-slate-200 rounded animate-pulse w-full" />
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </div>
              {/* Expandable Sections */}
              <div className="space-y-2 mt-8">
                {[
                  { id: 'details', title: 'Product Details', content: data.description },
                  { id: 'ingredients', title: 'Ingredients', content: data.ingredients },
                  { id: 'faqs', title: 'FAQs', content: data.faqs },
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
                        <ul className="px-6 py-4 border-t list-disc border-gray-200">
                          {section.id === 'faqs' ? (
                            data.faqs?.map((faq, index) => (
                              <li key={index} className="mb-4">
                                <h4 className="font-medium mb-2">{faq.question}</h4>
                                <p className="text-gray-600">{faq.answer}</p>
                              </li>
                            ))
                          ) : section.id === 'reviews' ? (
                            <li className='space-y-3 gap-2'>{section.content}</li>
                          ) : (
                            section.content?.split('\n').map((item, index) => (
                              <li key={index}>{item}</li>
                            ))
                          )}
                        </ul>
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