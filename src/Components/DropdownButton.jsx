import { FaShoppingCart } from "react-icons/fa"
import { useContext } from "react"
import { DropdownContext } from "../Contexts/DropdownContext"
import { useCart } from "../Contexts/cartContext"

export const DropdownButton = () => {
    const { open, setOpen } = useContext(DropdownContext)
    const { totalQuantity } = useCart()

    function toggleOpen() {
      setOpen(!open)
    }
    
    return (
      <>
        <FaShoppingCart onClick={toggleOpen} className="dropdownButton" />
        { totalQuantity > 0 && <div className="cartQuantity" onClick={toggleOpen}>
                    <p className="cartQuantityNumber">{ totalQuantity }</p>
        </div>}
      </>
    )
  }
  