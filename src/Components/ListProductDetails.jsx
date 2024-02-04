import { useState } from 'react'
import { formatter } from '../Utilities/CurrencyFormatter'
import ProductFetcher from '../Utilities/ProductFetcher'
import { useParams } from "react-router-dom"
import { useCart } from '../Contexts/cartContext'

const ListProductsDetails = () => {
    const { id } = useParams()
    const { addToCart } = useCart()
    const [activeImg, setActiveImg] = useState(0)

    return (
        <ProductFetcher
        render={({ data, loading, error }) => {
            if (loading) {
            return <div>Loading...</div>
            }

            if (error) {
            return <div>Error: {error}</div>
            }
            
            const handleClick = () => {
                addToCart(data)
              }

            return (
                data && (
                <div className="details-container">
                    <div className="details-images-container">
                        <img src={data.images[activeImg]} alt="product image" className="details-images-large" />
                        <div className="details-images-list">
                            {data.images.map((image, index) => (
                                <div key={index} onClick={() => setActiveImg(index)} className="details-images-click">
                                    <img src={image} className="details-images"/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="details-text">
                        <div>
                            <h2>{ data.name }</h2>
                            <p>{ data.category.charAt(0).toUpperCase() + data.category.slice(1) }</p>
                            <p className="details-description">{ data.description }</p>
                        </div>
                        <div className="details-price-btn">
                            <p className="details-price">{ formatter.format(data.price) }</p>
                            <button onClick={handleClick} className="btn details-btn">Add to cart</button>
                        </div>
                    </div>
                </div>
                )
            )
    }} apiAddress={`https://js2-ecommerce-api.vercel.app/api/products/${id}`}
    />
  )
}

export default ListProductsDetails