import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Filter, Star, Grid, List, X, ChevronDown } from 'lucide-react'
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
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const [availability, setAvailability] = useState({ inStock: false, outOfStock: false })
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
          sort: sortBy,
          priceRange,
          availability
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
  }, [filterCategoryList, currentPage, itemsPerPage, sortBy, priceRange, availability])

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

  const handlePriceChange = (e) => {
    const { name, value } = e.target
    setPriceRange(prev => ({ ...prev, [name]: value }))
  }

  const handleAvailabilityChange = (e) => {
    const { name, checked } = e.target
    setAvailability(prev => ({ ...prev, [name]: checked }))
  }

  const applyPriceFilter = () => {
    fetchData()
  }

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-4">CATEGORIES</h3>
        <div className="space-y-3">
          {productCategory.map((category) => (
            <label key={category.value} className="flex items-center gap-2">
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

      <div>
        <h3 className="text-sm font-medium mb-4">AVAILABILITY</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input 
              type="checkbox"
              name="inStock"
              checked={availability.inStock}
              onChange={handleAvailabilityChange}
              className="rounded border-gray-300" 
            />
            <span className="text-sm">In Stock</span>
          </label>
          <label className="flex items-center gap-2">
            <input 
              type="checkbox"
              name="outOfStock"
              checked={availability.outOfStock}
              onChange={handleAvailabilityChange}
              className="rounded border-gray-300" 
            />
            <span className="text-sm">Out Of Stock</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">PRICE</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="number"
                name="min"
                value={priceRange.min}
                onChange={handlePriceChange}
                placeholder="0"
                className="w-full border rounded px-3 py-1.5 text-sm"
              />
            </div>
            <div className="flex items-center">to</div>
            <div className="flex-1">
              <input
                type="number"
                name="max"
                value={priceRange.max}
                onChange={handlePriceChange}
                placeholder="4500"
                className="w-full border rounded px-3 py-1.5 text-sm"
              />
            </div>
          </div>
          <button 
            onClick={applyPriceFilter}
            className="w-full bg-black text-white rounded py-2 text-sm"
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  )

  const Pagination = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage)
    return (
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-md disabled:opacity-50 text-sm"
        >
          Previous
        </button>
        <span className="text-sm">{currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-md disabled:opacity-50 text-sm"
        >
          Next
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b">
        <div className="flex items-center justify-between px-4 h-14">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm"
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>

          <div className="flex items-center">
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="border-none text-sm appearance-none pr-6 bg-transparent"
            >
              <option value="">Sort by</option>
              <option value="asc">Price: Low to High</option>
              <option value="dsc">Price: High to Low</option>
            </select>
            <ChevronDown className="w-4 h-4 -ml-5 pointer-events-none" />
          </div>

          <div className="flex border rounded">
            {viewOptions.map(({ icon: Icon, value: viewValue }) => (
              <button
                key={viewValue}
                onClick={() => setView(viewValue)}
                className={`p-2 ${view === viewValue ? 'bg-gray-100' : ''}`}
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="flex">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0 border-r min-h-screen">
            <div className="sticky top-0 p-6">
              <FilterContent />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Desktop Header Controls */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <span className="text-sm">VIEW AS</span>
                <div className="flex border rounded">
                  {viewOptions.map(({ icon: Icon, value: viewValue }) => (
                    <button
                      key={viewValue}
                      onClick={() => setView(viewValue)}
                      className={`p-2 ${view === viewValue ? 'bg-gray-100' : ''}`}
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <span className="text-sm">ITEMS PER PAGE</span>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="border rounded px-3 py-1.5 text-sm"
                  >
                    {itemsPerPageOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm">SORT BY</span>
                  <select
                    value={sortBy}
                    onChange={handleSortChange}
                    className="border rounded px-3 py-1.5 text-sm min-w-[160px]"
                  >
                    <option value="">Alphabetically...</option>
                    <option value="asc">Price - Low to High</option>
                    <option value="dsc">Price - High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-8">Loading...</div>
            ) : (
              <div className={`grid gap-x-6 gap-y-8 ${
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
                    className={`group ${view === 'list' ? 'flex gap-4' : ''}`}
                  >
                    <div className={`aspect-square mb-4 ${view === 'list' ? 'w-1/3' : 'w-full'}`}>
                      {product.productImage && product.productImage.length > 0 ? (
                        <img
                          src={product.productImage[0]}
                          alt={product.productName}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-400">No image</span>
                        </div>
                      )}
                    </div>
                    <div className={view === 'list' ? 'w-2/3' : 'w-full'}>
                      <h3 className="font-medium mb-2">
                        {product.productName}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {renderStars(product.rating || 0)}
                        </div>
                        <span className="text-sm text-gray-500">
                          {product.reviewCount || 0} reviews
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        {product.originalPrice > product.sellingPrice && (
                          <span className="text-sm text-gray-400">From</span>
                        )}
                        <span className="font-medium">
                          Rs.{product.sellingPrice.toFixed(2)}
                        </span>
                      </div>
                      {view === 'list' && (
                        <p className="mt-2 text-sm text-gray-600">{product.description}</p>
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

      {/* Mobile Filter Sidebar */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-full max-w-xs bg-white overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="font-medium">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4">
              <FilterContent />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CategoryProduct