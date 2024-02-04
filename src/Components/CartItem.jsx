import { FaMinus, FaPlus, FaTrash } from "react-icons/fa"
import { useCart } from "../Contexts/cartContext"
import { formatter } from "../Utilities/CurrencyFormatter"


export const CartItem = ({ item }) => {

  const { addToCart, removeOne, removeItem } = useCart()

  const removeOneFromCart = () => {
    removeOne(item.product._id)
  }

  const addOneToCart = () => {
    addToCart(item.product)
  }

  const deleteProduct = () => {
    removeItem(item.product._id)
  }

  return (
    <div className="cartContainer">
      <div className="cartImageTxtContainer">
        <img src={item.product.images[0]} alt="product-image" className="product-list-image" />
        <div>
          <p className="cartProductName">{item.product.name}</p>
          <p className="text-sm">{item.quantity} x {formatter.format(item.product.price)}</p>
        </div>
      </div>
      <div className="cartButtonsContainer">
        <div className="cartChangeAmountContainer">
          <button onClick={addOneToCart} className="cartChangeAmountBtn"><FaPlus className="cartChangeAmountIcon" /></button>
          <button onClick={removeOneFromCart} className="cartChangeAmountBtn"><FaMinus className="cartChangeAmountIcon" /></button>
        </div>
        <button onClick={deleteProduct} className="deleteProduct"><FaTrash className="deleteProductIcon"/></button>
      </div>
    </div>
  )
}