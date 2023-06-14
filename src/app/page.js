"use client"
import { CartContext } from "@/CartContext"
import { ProductsContext } from "@/ProductsContext"
import Product from "@/components/Product"
import { useCallback, useContext } from "react"

export default function Home() {
  const [products] = useContext(ProductsContext)
  const [, setCart] = useContext(CartContext)

  const addToCart = useCallback((idx) => setCart(currCart => [...currCart, products[idx]]), [products, setCart])

  return <main className="flex flex-col gap-4">
    <h2 className="text-2xl font-bold">Products:</h2>
    <div className="products">
      {products.map((productInfo, idx) => <Product key={idx} productInfo={productInfo} btnLabel="Add to Cart" onClick={() => addToCart(idx)} />)}
    </div>
  </main>
}
