import React, { useEffect, useState } from 'react'
import UploadProduct from '../AllProducts/UploadProduct'
import SummaryApi from '../../common'
import AdminProductCard from '../../Components/AllProducts/AdminProductCards'

const AllProducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false)
  const [allProduct, setAllProduct] = useState([])

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allProduct.url)
    const dataResponse = await response.json()

    console.log("product data", dataResponse)

    setAllProduct(dataResponse?.data || [])
  }

  useEffect(() => {
    fetchAllProduct()
  }, [])

  return (
    <div>
      <div className='bg-slate-200 py-2 px-4 flex justify-between items-center'>
        <h2 className='font-bold text-lg'>All Product</h2>
        <button className='border-2 border-[#349E64] text-[#349E64] hover:bg-[#1e6554] hover:text-white transition-all py-1 px-3 rounded-full ' onClick={() => setOpenUploadProduct(true)}>Upload Product</button>
      </div>

      {/**all product */}
      <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
        {
          allProduct.map((product, index) => (
            <AdminProductCard
              data={product}
              key={`product-${index}`}
              fetchdata={fetchAllProduct}
            />
          ))
        }
      </div>


      {/**upload prouct component */}
      {
        openUploadProduct && (
          <UploadProduct onClose={() => setOpenUploadProduct(false)} fetchdata={fetchAllProduct} />
        )
      }


    </div>
  )
}

export default AllProducts


