import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import moment from 'moment';
import displayINRCurrency from '../helpers/displayCurrency';

const Order = () => {
    const [data, setData] = useState([]); // Initialize data as an empty array

    const fetchOrderDetails = async () => {
        try {
            const response = await fetch(SummaryApi.getOrder.url, {
                method: SummaryApi.getOrder.method,
                credentials: 'include',
            });

            const responseData = await response.json();

            if (responseData && Array.isArray(responseData.data)) {
                setData(responseData.data); // Set the order data to state
            } else {
                setData([]); // If no valid data, set an empty array
            }
        } catch (error) {
            console.error("Error fetching order details:", error);
            setData([]); // Set an empty array if an error occurs
        }
    };

    useEffect(() => {
        fetchOrderDetails();
    }, []);

    return (
        <div className='p-4'>
            {data.length === 0 ? (
                <p>No Order Available</p>
            ) : (
                <div>
                    {data.map((item, index) => (
                        <div key={item._id || index} className='mb-5'>
                            <p className='font-semibold text-lg'>
                                {item.createdAt ? moment(item.createdAt).format('LL') : "Date not available"}
                            </p>

                            <div className='border rounded'>
                                <div className='flex justify-between'>
                                <div className='grid gap-1'>
                                    {Array.isArray(item.productDetails) && item.productDetails.length > 0 ? (
                                        item.productDetails.map((product, idx) => (
                                            <div key={product.productId + idx} className='flex flex-col md:flex-row items-start gap-3 bg-slate-100 p-2'>
                                                <img
                                                    src={product.image[0]}
                                                    className='w-24 h-24 bg-slate-200 object-cover p-2'
                                                    alt={product.name}
                                                />
                                                <div className='flex-row'>
                                                    <div className='font-medium text-lg text-ellipsis overflow-hidden'>
                                                        {product.name}
                                                    </div>
                                                    <div className='flex flex-col md:flex-row items-center gap-3 mt-2'>
                                                        <div className='text-lg text-red-400'>{displayINRCurrency(product.price)}</div>
                                                        <p>Quantity: {product.quantity}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No products available</p>
                                    )}
                                </div>

                                <div className='flex flex-col gap-5 p-4 min-w-[300px]'>
                                    <div className='mt-5'>
                                        <h3 className='text-md font-semibold lg:text-lg'>Payment Details:</h3>
                                        <p className=' ml-2'>Payment Method: {item.paymentDetails.payment_method_type[0]}</p>
                                        <p className=' ml-2'>Payment Status: {item.paymentDetails.payment_status}</p>
                                    </div>

                                    <div className='mt-5 flex-grow'>
                                        <h3 className='text-md font-semibold lg:text-lg'>Shipping Options:</h3>
                                        {Array.isArray(item.shipping_option) && item.shipping_option.length > 0 ? (
                                            item.shipping_option.map((shipping, idx) => (
                                                <div key={shipping.shipping_rate}>
                                                    <p className=' ml-2'>Shipping Amount: {displayINRCurrency(shipping.shipping_amount)}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No shipping options available</p>
                                        )}
                                    </div>

                                    <div className='mt-5 flex-row ml-auto w-fit'>
                                        <h3 className='text-md font-semibold lg:text-lg' >Total Amount:</h3>
                                        <p className='font-medium text-red-400 ml-2'>{displayINRCurrency(item.totalAmount)}</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Order;
