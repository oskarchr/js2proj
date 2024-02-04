import { IoLogoHtml5 } from "react-icons/io"
import { Link, NavLink } from "react-router-dom"
import { DropdownButton } from "./DropdownButton"
import { Dropdown } from "./Dropdown"
import { DropdownContent } from "./DropdownContent"


export const Navbar = () => {
  

  return (
    <nav className="navbar">
      <Link to="/" className="navLink">
        <IoLogoHtml5 className="navIcon"/>
      </Link>
      <ul className="navList">
        <li><NavLink to="/" className="navLink">Home</NavLink></li>
        <li><NavLink to="/contact" className="navLink">Contact</NavLink></li>
        <li className="navDropdown">
          <Dropdown>
            <DropdownButton /> 
            <DropdownContent />
          </Dropdown>  
        </li>  
      </ul>
    </nav>
  )
}
