import { CartItem } from "./CartItem"
import { Link } from "react-router-dom"
import { useCart } from "../Contexts/cartContext"
import { DropdownContext } from "../Contexts/DropdownContext"
import { useContext } from "react"
import { formatter } from "../Utilities/CurrencyFormatter"



export const ShoppingCart = ({ isCheckoutPage }) => {

  const { cart, totalPrice, clearCart } = useCart()
  const { setOpen } = useContext(DropdownContext)

  const handlePlaceOrder = async () => {
    const requestBody = {
      products: cart.map(item => ({
          productId: item.product._id,
          quantity: item.quantity
      }))
    }
    
    try {
      const response = await fetch('https://js2-ecommerce-api.vercel.app/api/orders', {
        method: 'POST',
        body: JSON.stringify(requestBody)
      })

      if (response.ok) {
        console.log('Request successful. Status:', response.status)
        const responseData = await response.json()
        console.log('Response data:', responseData)
      } else {
        console.log('Request failed with status:', response.status)
      }
    } catch (error) {
      console.error('An error occurred during the request:', error)
    }
  }

  return (
    <div className="shoppingCart">
      <div className="cart-top">
        { cart.length < 1 && (
            <p>Your cart is empty</p> 
        )}
        { cart.map(item => (
          <CartItem key={`cart_${item.product._id}`} item={item} />
        ))}
      </div>
      <hr className="cart-hr" />
      <div className="cart-bottom">
        <div>
          <p>Total Price: {formatter.format(totalPrice)} </p>
          <small>Inkl. vat</small>
        </div>
        <div>
          { isCheckoutPage
            ? (
              <>
                <button onClick={clearCart} className="cart-clear-btn btn">Clear Cart</button>
                <button onClick={handlePlaceOrder} className="btn">Place order</button>
              </>
            )
            : <Link onClick={() => setOpen(false)} to="/checkout" className="btn cart-checkout-btn">Checkout</Link>
          }
          
        </div>
      </div>
    </div>
  )
}