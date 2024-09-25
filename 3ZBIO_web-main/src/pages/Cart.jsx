import React, { useContext, useEffect, useState } from 'react'
import SummaryApi from '../common'
import Context from '../context'
import displayINRCurrency from '../helpers/displayCurrency'
import { MdDelete } from "react-icons/md";
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom';
import VerticalCardProduct from '../Components/Categories/VerticalCardsProducts';
import VerticalCard from '../Components/AllProducts/VerticalCard';

// Import the image for empty cart
import emptyCartImage from '../assets/cart.png';

const Cart = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const context = useContext(Context)
    const loadingCart = new Array(4).fill(null)

    const fetchData = async () => {
        const response = await fetch(SummaryApi.addToCartProductView.url, {
            method: SummaryApi.addToCartProductView.method,
            credentials: 'include',
            headers: {
                "content-type": 'application/json'
            },
        });

        const responseData = await response.json();

        if (responseData.success) {
            setData(responseData.data);
        }
    };

    const handleLoading = async () => {
        await fetchData();
    };

    useEffect(() => {
        setLoading(true);
        handleLoading();
        setLoading(false);
    }, []);

    const increaseQty = async (id, qty) => {
        const response = await fetch(SummaryApi.updateCartProduct.url, {
            method: SummaryApi.updateCartProduct.method,
            credentials: 'include',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({
                _id: id,
                quantity: qty + 1
            })
        });

        const responseData = await response.json();

        if (responseData.success) {
            fetchData();
        }
    };

    const decreaseQty = async (id, qty) => {
        if (qty >= 2) {
            const response = await fetch(SummaryApi.updateCartProduct.url, {
                method: SummaryApi.updateCartProduct.method,
                credentials: 'include',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify({
                    _id: id,
                    quantity: qty - 1
                })
            });

            const responseData = await response.json();

            if (responseData.success) {
                fetchData();
            }
        }
    };

    const deleteCartProduct = async (id) => {
        const response = await fetch(SummaryApi.deleteCartProduct.url, {
            method: SummaryApi.deleteCartProduct.method,
            credentials: 'include',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({
                _id: id,
            })
        });

        const responseData = await response.json();

        if (responseData.success) {
            fetchData();
            context.fetchUserAddToCart();
        }
    };

    const totalQty = data.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0);
    const totalPrice = data.reduce((preve, curr) => preve + (curr.quantity * curr?.productId?.sellingPrice), 0);

    return (
        <>
            <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">Cart</h1>
                    <div className="flow-root">
                        {loading ? (
                            <div>Loading...</div>
                        ) : data.length === 0 ? (
                            <>
                            <div className="flex flex-col items-center justify-center">
                                <img src={emptyCartImage} alt="Empty Cart" className="h-48 w-48 mb-4" />
                                <h2 className="text-xl font-semibold">Your Cart is Currently Empty!</h2>
                                {/* Divider */}
                                <hr className="border-t border-gray-200 my-8" />
                                <VerticalCardProduct category={"acuteck"} heading={"Acuteck"} />
                                <VerticalCardProduct category={"ecotest"} heading={"Ecotest"} />
                            </div>
                            </>
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

                {data.length > 0 && (
                    <>
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
                            <Link to={"/checkout"}>
                                <button
                                
                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                    Checkout
                                </button>
                                </Link>
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

                        {/* Divider */}
                        <hr className="border-t border-gray-200 my-8" />

                        <VerticalCardProduct category={"acuteck"} heading={"Acuteck"} />
                        <VerticalCard category={"ecotest"} heading={"Ecotest"} />
                    </>
                )}
            </div>
        </>
    );
};

export default Cart
