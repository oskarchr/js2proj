import { CartItem } from "./CartItem"
import { Link } from "react-router-dom"
import { useCart } from "../Contexts/cartContext"
import { DropdownContext } from "../Contexts/DropdownContext"
import { useContext } from "react"
import { formatter } from "../Utilities/CurrencyFormatter"



export const ShoppingCart = ({ isCheckoutPage }) => {

  const { cart, totalPrice, clearCart } = useCart()
  const { setOpen } = useContext(DropdownContext)

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
                <button className="btn">Place order</button>
              </>
            )
            : <Link onClick={() => setOpen(false)} to="/checkout" className="btn cart-checkout-btn">Checkout</Link>
          }
          
        </div>
      </div>
    </div>
  )
}