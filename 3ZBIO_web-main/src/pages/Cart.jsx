import React, { useContext, useEffect, useState } from 'react'
import SummaryApi from '../common'
import Context from '../context'
import displayINRCurrency from '../helpers/displayCurrency'
import { MdDelete } from "react-icons/md";
import {loadStripe} from '@stripe/stripe-js';
import { Link } from 'react-router-dom';
import HorizontalCardsProducts from '../Components/AllProducts/HorizontalCardsProducts';
import VerticalCardProduct from '../Components/Categories/VerticalCardsProducts';
import Footer from '../Components/Footer';
import VerticalCard from '../Components/AllProducts/VerticalCard';

const Cart = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const context = useContext(Context)
    const loadingCart = new Array(4).fill(null)


    const fetchData = async() =>{
        
        const response = await fetch(SummaryApi.addToCartProductView.url,{
            method : SummaryApi.addToCartProductView.method,
            credentials : 'include',
            headers : {
                "content-type" : 'application/json'
            },
        })
       

        const responseData = await response.json()

        if(responseData.success){
            setData(responseData.data)
        }


    }

    const handleLoading = async() =>{
        await fetchData()
    }

    useEffect(()=>{
        setLoading(true)
        handleLoading()
         setLoading(false)
    },[])


    const increaseQty = async(id,qty) =>{
        const response = await fetch(SummaryApi.updateCartProduct.url,{
            method : SummaryApi.updateCartProduct.method,
            credentials : 'include',
            headers : {
                "content-type" : 'application/json'
            },
            body : JSON.stringify(
                {   
                    _id : id,
                    quantity : qty + 1
                }
            )
        })

        const responseData = await response.json()


        if(responseData.success){
            fetchData()
        }
    }


    const decreaseQty = async(id,qty) =>{
       if(qty >= 2){
            const response = await fetch(SummaryApi.updateCartProduct.url,{
                method : SummaryApi.updateCartProduct.method,
                credentials : 'include',
                headers : {
                    "content-type" : 'application/json'
                },
                body : JSON.stringify(
                    {   
                        _id : id,
                        quantity : qty - 1
                    }
                )
            })

            const responseData = await response.json()


            if(responseData.success){
                fetchData()
            }
        }
    }

    const deleteCartProduct = async(id)=>{
        const response = await fetch(SummaryApi.deleteCartProduct.url,{
            method : SummaryApi.deleteCartProduct.method,
            credentials : 'include',
            headers : {
                "content-type" : 'application/json'
            },
            body : JSON.stringify(
                {   
                    _id : id,
                }
            )
        })

        const responseData = await response.json()

        if(responseData.success){
            fetchData()
            context.fetchUserAddToCart()
        }
    }
    const stripePublicKey = `pk_test_51Q0H4yBsawcQ7AZ8VkMC6uyWgU0Fli7SOSeDbIOJODpYJK2rYze7qgcp22VsxlsqxTvuWHOiGlMPePwOZyBlmWMy00uywsCHHK`;
    const handlePayment = async () => {
        const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY || stripePublicKey);
    
        const response = await fetch(SummaryApi.payment.url, {
            method: SummaryApi.payment.method,
            credentials: 'include',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ cartItems: data })
        });
    
        const responseData = await response.json();
        console.log("payment response", responseData);
    
        if (responseData?.id) {
            const { id: sessionId } = responseData;
            const { error } = await stripe.redirectToCheckout({ sessionId });
    
            if (error) {
                console.error('Error redirecting to checkout:', error);
            }
        }
    };
    
    const totalQty = data.reduce((previousValue,currentValue)=> previousValue + currentValue.quantity,0)
    const totalPrice = data.reduce((preve,curr)=> preve + (curr.quantity * curr?.productId?.sellingPrice) ,0)
  return (
    <>
     <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">Cart</h1>
                <div className="flow-root">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <ul className="-my-6 divide-y divide-gray-200">
                            {data.map((item) => (
                                <li key={item._id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={item.productId.productImage[0]}
                                            alt={item.productId.productName}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>{item.productId.productName}</h3>
                                            <p className="ml-4">{displayINRCurrency(item.productId.sellingPrice)}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">{item.productId.category}</p>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <div className="flex items-center">
                                                <label className="inline mr-5 text-sm font-medium leading-6 text-gray-900">Qty</label>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        className="border border-gray-400 rounded px-2"
                                                        onClick={() => decreaseQty(item._id, item.quantity)}
                                                    >
                                                        -
                                                    </button>
                                                    <span>{item.quantity}</span>
                                                    <button
                                                        className="border border-gray-400 rounded px-2"
                                                        onClick={() => increaseQty(item._id, item.quantity)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <button
                                                    onClick={() => deleteCartProduct(item._id)}
                                                    type="button"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{displayINRCurrency(totalPrice)}</p>
                </div>
                <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                    <p>Total Items in Cart</p>
                    <p>{totalQty} items</p>
                </div>
                <div className="mt-6">
                    <button
                        onClick={handlePayment}
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                        Checkout
                    </button>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        or
                        <Link to="/">
                            <button className="font-medium text-indigo-600 hover:text-indigo-500">
                                Continue Shopping &rarr;
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>

         {/* Divider */}
            <hr className="border-t border-gray-200 my-8" />

        <VerticalCardProduct category={"acuteck"} heading={"Acuteck"} />
        <VerticalCard category={"ecotest"} heading={"Ecotest"}/>
        <Footer/>
        </>
  )
}

export default Cart