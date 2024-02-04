import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatter } from '../Utilities/CurrencyFormatter'
import ProductFetcher from '../Utilities/ProductFetcher'
import { useCart } from '../Contexts/cartContext'

const ListProducts = () => {
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  }

  return (
    <ProductFetcher
      render={({ data, loading, error }) => {
        if (loading) {
          return <div>Loading...</div>
        }

        if (error) {
          return <div>Error: {error}</div>
        }

        const handleClick = (item) => {
          addToCart(item)
        }

        const filteredData = selectedCategory
          ? data.filter((item) => item.category === selectedCategory)
          : data

        return (
          <>
            <div className="product-list-category">
              <label>Select Category: </label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <option value="">All</option>
                {Array.from(new Set(data.map((item) => item.category))).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="product-list-container">
            {filteredData.map((item) => (
              <div className="product-list-item" key={item._id}>
                <Link to={`/details/${item._id}`}>
                  <img className="product-list-image" src={item.images[0]} alt={item.name} />
                  <div className="product-list-top">
                    <h2 className="product-list-name"> {item.name} </h2>
                    <p className="product-list-description"> {item.description} </p>
                  </div>
                </Link>
                <div className="product-list-bottom">
                  <p className="product-list-price"> {formatter.format(item.price)}</p>
                  <button className="btn product-list-button" onClick={() => handleClick(item)}>Add to cart</button>
                </div>
              </div>
            ))}
            </div>
          </>
        )
      }}
    />
  )
}

export default ListProducts