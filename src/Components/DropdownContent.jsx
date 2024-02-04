import { useContext } from "react"
import { DropdownContext } from "../Contexts/DropdownContext"
import { ShoppingCart } from "./ShoppingCart"


export const DropdownContent = () => {
    const { open } = useContext(DropdownContext)
    
    return (
      <div className={`dropdownContent ${ open ? "dropdownOpen" : "dropdownClosed"}`}>
        <ShoppingCart />
      </div>
    )
  }
  
