import React, { useContext, useEffect, useState } from 'react'
import fetchCategoryWiseProduct from '../../helpers/fetchCtaegoryWiseProduct'
import displayINRCurrency from '../../helpers/displayCurrency'
import { Link } from 'react-router-dom'
import addToCart from '../../helpers/addToCart'
import Context from '../../context'
import { TbShoppingCartUp } from 'react-icons/tb'

const VerticalCardProduct = ({ category, heading }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const loadingList = new Array(13).fill(null)

    const { fetchUserAddToCart } = useContext(Context)

    const handleAddToCart = async (e, id) => {
        await addToCart(e, id)
        fetchUserAddToCart()
    }

    const fetchData = async () => {
        setLoading(true)
        const categoryProduct = await fetchCategoryWiseProduct(category)
        setLoading(false)

        console.log("horizontal data", categoryProduct.data)
        setData(categoryProduct?.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='container mx-auto px-4 my-6'>
            <h2 className='text-2xl font-semibold py-4 text-center'>{heading}</h2>

            {/* Center the grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mx-auto max-w-[1200px]'>
                {loading ? (
                    loadingList.map((_, index) => {
                        return (
                            <div
                                key={index}
                                className='bg-white rounded-sm shadow min-w-[280px] max-w-[320px] mx-auto'
                            >
                                <div className='bg-slate-200 h-48 flex justify-center items-center animate-pulse'></div>
                                <div className='p-4'>
                                    <h2 className='animate-pulse bg-slate-200 text-black p-1 py-2 rounded-full'></h2>
                                    <p className='animate-pulse bg-slate-200 p-1 py-2 rounded-full'></p>
                                    <div className='flex gap-3'>
                                        <p className='animate-pulse bg-slate-200 p-1 py-2 rounded-full'></p>
                                        <p className='animate-pulse bg-slate-200 p-1 py-2 rounded-full'></p>
                                    </div>
                                    <button className='animate-pulse bg-slate-200 py-2 rounded-full'></button>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    data.map((product, index) => (
                        <Link
                          to={'/product/' + product?._id}
                          key={index}
                          className='bg-white rounded-sm shadow min-w-[280px] max-w-[320px] mx-auto'
                        >
                          <div className='bg-white h-60 p-4 flex justify-center items-center'>
                            <img
                              src={product.productImage[0]}
                              alt={product?.productName}
                              className='object-scale-down h-full hover:scale-110 transition-all'
                            />
                          </div>
                          <div className='p-4'>
                            <h2 className='font-medium text-lg text-black'>
                              {product?.productName}
                            </h2>
                            <p className='text-slate-500 capitalize'>
                              {product?.category}
                            </p>
                            <div className='flex gap-3'>
                              <p className='text-red-600 font-medium'>
                                {displayINRCurrency(product?.sellingPrice)}
                              </p>
                              <p className='text-slate-500 line-through'>
                                {displayINRCurrency(product?.price)}
                              </p>
                            </div>
                      
                            <div className="text-center mt-4">
  <button
    className='text-sm md:text-base flex items-center justify-center bg-[#022636] hover:bg-[#30C3C0] text-white px-4 py-2 rounded-full gap-2'
    onClick={(e) => handleAddToCart(e, product?._id)}
  >
    Add to Cart
    <TbShoppingCartUp className='text-md md:text-lg ml-2' /> {/* Add ml-2 to create space between text and icon */}
  </button>
</div>

                      
                          </div>
                        </Link>
                      ))                      
                )}
            </div>
        </div>
    )
}

export default VerticalCardProduct
