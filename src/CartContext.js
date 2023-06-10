"use client"
import { createContext, useMemo, useState } from "react"

export const CartContext = createContext([])

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([])

  const value = useMemo(() => [cart, setCart], [cart, setCart])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
