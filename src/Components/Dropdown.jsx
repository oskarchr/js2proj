import { useEffect, useRef, useState } from 'react'
import { DropdownContext } from '../Contexts/DropdownContext'

export const Dropdown = ({ children }) => {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
      function close(e) {
        if (!dropdownRef.current.contains(e.target)) {
          setOpen(false)
        }
      }
      if (open) {
        window.addEventListener("click", close)
      }
      return function removeListener() {
        window.removeEventListener("click", close)
      }
    }, [open])
    
    return (
       <DropdownContext.Provider value={{ open, setOpen }}>
         <div ref={dropdownRef} className="dropdown">{children}</div>
       </DropdownContext.Provider>
    )
}
