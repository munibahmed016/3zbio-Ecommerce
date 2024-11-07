import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Filter, Star, Grid, List } from 'lucide-react'
import productCategory from '../helpers/ProductCategory'
import SummaryApi from '../common'

const viewOptions = [
  { icon: Grid, value: 'compact', label: 'Compact Grid' },
  { icon: Grid, value: 'grid', label: 'Grid' },
  { icon: List, value: 'list', label: 'List' }
]

const itemsPerPageOptions = [20, 40, 60, 80]

const CategoryProduct = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [view, setView] = useState('grid')
  const [itemsPerPage, setItemsPerPage] = useState(20)
  const [currentPage, setCurrentPage] = useState(1)
  const location = useLocation()
  const navigate = useNavigate()
  
  const urlSearch = new URLSearchParams(location.search)
  const urlCategoryListinArray = urlSearch.getAll("category")

  const urlCategoryListObject = {}
  urlCategoryListinArray.forEach(el => {
    urlCategoryListObject[el] = true
  })

  const [selectCategory, setSelectCategory] = useState(urlCategoryListObject)
  const [filterCategoryList, setFilterCategoryList] = useState([])
  const [sortBy, setSortBy] = useState("")

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(SummaryApi.filterProduct.url, {
        method: SummaryApi.filterProduct.method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          category: filterCategoryList,
          page: currentPage,
          limit: itemsPerPage,
          sort: sortBy
        })
      })

      const dataResponse = await response.json()
      if (dataResponse.success) {
        setData(dataResponse.data || [])
      } else {
        console.error('Error fetching products:', dataResponse.message)
      }
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [filterCategoryList, currentPage, itemsPerPage, sortBy])

  useEffect(() => {
    const arrayOfCategory = Object.keys(selectCategory)
      .filter(categoryKeyName => selectCategory[categoryKeyName])

    setFilterCategoryList(arrayOfCategory)

    const urlFormat = arrayOfCategory
      .map(el => `category=${el}`)
      .join('&')

    navigate(`/product-category?${urlFormat}`)
  }, [selectCategory, navigate])

  const handleSelectCategory = (e) => {
    const { value, checked } = e.target
    setSelectCategory(prev => ({
      ...prev,
      [value]: checked
    }))
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  const Select = ({ value, onChange, options, placeholder }) => (
    <select
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-md p-2 bg-white"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )

  const Pagination = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage)
    return (
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span>{currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid lg:grid-cols-[240px,1fr] gap-8">
        {/* Sidebar */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="mb-6">
            <h3 className="text-base uppercase font-medium text-gray-500 border-b pb-2">
              Sort by
            </h3>
            <div className="mt-3 space-y-3">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="sortBy"
                  value="asc"
                  checked={sortBy === 'asc'}
                  onChange={handleSortChange}
                />
                <span>Price - Low to High</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="sortBy"
                  value="dsc"
                  checked={sortBy === 'dsc'}
                  onChange={handleSortChange}
                />
                <span>Price - High to Low</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-base uppercase font-medium text-gray-500 border-b pb-2">
              Category
            </h3>
            <div className="mt-3 space-y-3">
              {productCategory.map((category) => (
                <label key={category.value} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="category"
                    value={category.value}
                    checked={selectCategory[category.value] || false}
                    onChange={handleSelectCategory}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm">{category.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">VIEW AS</span>
              <div className="flex border rounded-md">
                {viewOptions.map(({ icon: Icon, value: viewValue, label }) => (
                  <button
                    key={viewValue}
                    onClick={() => setView(viewValue)}
                    className={`p-2 ${
                      view === viewValue 
                        ? 'bg-gray-100' 
                        : 'hover:bg-gray-50'
                    }`}
                    title={label}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">ITEMS PER PAGE</span>
                <Select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  options={itemsPerPageOptions.map(option => ({ value: option, label: option }))}
                  placeholder="Select"
                />
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">SORT BY</span>
                <Select
                  value={sortBy}
                  onChange={handleSortChange}
                  options={[
                    { value: 'asc', label: 'Price - Low to High' },
                    { value: 'dsc', label: 'Price - High to Low' }
                  ]}
                  placeholder="Alphabetically..."
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-medium text-gray-800 text-lg">
              Search Results: {data.length}
            </p>
          </div>

          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : (
            <div className={`grid gap-6 ${
              view === 'list' 
                ? 'grid-cols-1' 
                : view === 'compact'
                  ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {data.map((product) => (
                <Link
                  to={`/product/${product._id}`}
                  key={product._id}
                  className={`bg-white rounded-lg shadow overflow-hidden ${
                    view === 'list' ? 'flex' : 'block'
                  } hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className={`
                    ${view === 'list' ? 'w-48 h-48' : 'aspect-square'}
                    relative
                  `}>
                    {product.productImage && product.productImage.length > 0 ? (
                      <img
                        src={product.productImage[0]}
                        alt={product.productName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      {product.productName}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {renderStars(product.rating || 0)}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.reviewCount || 0} reviews
                      </span>
                    </div>
                    <div className="text-lg font-bold mb-2">
                      Rs.{product.sellingPrice.toFixed(2)}
                    </div>
                    {(view === 'list' || view === 'grid') && (
                      <p className="text-gray-600 text-sm">
                        {product.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}

          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default CategoryProduct