import React, { useContext, useEffect, useRef, useState } from 'react';
import fetchCategoryWiseProduct from '../../helpers/fetchCtaegoryWiseProduct'
import displayINRCurrency from '../../helpers/displayCurrency'
import { TbShoppingCartUp } from "react-icons/tb";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import addToCart from '../../helpers/addToCart';
import Context from '../../context';




const HorizontalCardsProducts = ({ category, heading }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const loadingList = new Array(13).fill(null)
    const [scroll,setScroll] = useState(0)
    const scrollElement = useRef()

    const fetchData = async () => {
        setLoading(true)
        const categoryProduct = await fetchCategoryWiseProduct(category)
        setLoading(false)

        // console.log("horizontal data",categoryProduct.data)
        setData(categoryProduct?.data)
    }
    const { fetchUserAddToCart } = useContext(Context)

    const handleAddToCart = async(e,id)=>{
    //    await addToCart(e,id)
       fetchUserAddToCart()
    }

    useEffect(() => {
        fetchData();
    }, [])
    const scrollRight = () =>{
                scrollElement.current.scrollLeft += 300
            }
            const scrollLeft = () =>{
                scrollElement.current.scrollLeft -= 300
            }
    return (
        <div className='container mx-auto px-4 md:px-[5px] lg:px-[80px] my-6 relative'>
            <h2 className='text-3xl font-bold items-center text-center py-4'>{heading}</h2>
            <div className='flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all' ref={scrollElement}>
            <button  className='bg-white shadow-md rounded-full p-1 absolute left-16 md:left-0 lg:left-16 text-lg hidden md:block' onClick={scrollLeft}><FaAngleLeft/></button>
            <button  className='bg-white shadow-md rounded-full p-1 absolute right-16 md:right-0 lg:right-16 text-lg hidden md:block' onClick={scrollRight}><FaAngleRight/></button> 

                {
                    loading ? (
                                        loadingList.map((product,index)=>{
                                            return(
                                                <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                                                    <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse'>
                        
                                                    </div>
                                                    <div className='p-4 grid w-full gap-2'>
                                                        <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black bg-slate-200 animate-pulse p-1 rounded-full'></h2>
                                                        <p className='capitalize text-slate-500 p-1 bg-slate-200 animate-pulse rounded-full'></p>
                                                        <div className='flex gap-3 w-full'>
                                                            <p className='text-red-600 font-medium p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                                                            <p className='text-slate-500 line-through p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                                                        </div>
                                                        <button className='text-sm  text-white px-3 py-0.5 rounded-full w-full bg-slate-200 animate-pulse'></button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                   ):(
                        data.map((product, index) => {
                            return (
                                <Link to={"product/"+product?._id} className='w-full min-w-[280px] md:min-w-[370px] max-w-[280px] md:max-w-[320px] h-60 bg-slate-200 rounded-sm shadow flex'>
                                    <div className='bg-white h-[100%] p-4 min-w-[130px] md:min-w-[200px] animate-pulse'>
                                        <img src={product.productImage[0]} className='object-scale-down h-full hover:scale-110 transition-all' />
                                    </div>
                                    <div className='p-4 grid'>
                                    <h2 className='font-medium text-base md:text-lg line-clamp-1 text-ellipsis items-center text-center text-black'>{product?.productName}</h2>
                                    <p className='capitalize text-slate-500'>{product?.category}</p>
                                    <div className='flex gap-3 mt-4'>
                                    <p className='text-black font-medium'>{ displayINRCurrency(product?.sellingPrice) }</p>
                                    <p className='text-slate-500 line-through'>{ displayINRCurrency(product?.price)  }</p>
                                </div>
                                    <button className='text-sm md:text-sm  bg-[#022636] hover:bg-[#30C3C0] flex justify-between items-center text-center text-white px-3 rounded-full' onClick={(e)=>handleAddToCart(e,product?._id)}>Add to Cart
                                    <TbShoppingCartUp className='text-md md:text-lg' />
                                    </button>
                                    </div>
    
                                </Link>
                            )
                        })
                    )
                    
                }
            </div>


        </div>
    );
}

export default HorizontalCardsProducts;
