import { createContext } from "react"

export const DropdownContext = createContext({
    open: false,
    setOpen: () => {},
})