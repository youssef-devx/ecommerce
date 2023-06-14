"use client"
import { createContext, useEffect, useMemo, useState } from "react"

export const ProductsContext = createContext([])

export default function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState(Array(10).fill({
    title: "Product Title",
    imageUrl: "https://placehold.co/200x400.png",
    rating: 4.9,
    price: 12.9
  }))

  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
            .then(r => r.json())
            // .then(data => console.log(data))
            .then(data => setProducts(data))
  }, [])

  const value = useMemo(() => [products, setProducts], [products, setProducts])

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
