import { ProductsContext } from "@/ProductsContext"
// import Product from "@/components/Product"
import React, { useContext } from 'react'

export default function PurchasedProducts() {
  // const [products] = useContext(ProductsContext)

  return <main className="flex flex-col gap-4">
    <h2 className="text-2xl font-bold">Purchased Products:</h2>
    <div className="products">
      {/* {products.map((productInfo, idx) => <Product key={idx} productInfo={productInfo} btnLabel="Add to Cart" onClick={() => addToCart(idx)} />)} */}
    </div>
  </main>
}
