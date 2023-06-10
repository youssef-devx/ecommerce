"use client"
import { CartContext } from "@/CartContext"
import { UserContext } from "@/UserContext"
import CartProduct from "@/components/CartProduct"
import { useCallback, useContext } from 'react'

export default function Cart() {
  const [cart, setCart] = useContext(CartContext)
  const [user] = useContext(UserContext)

  const removeFromCart = useCallback((idx) => setCart(currCart => currCart.filter((_, pIdx) => pIdx !== idx)), [setCart])

  return <main className="flex flex-col gap-4">
    <h2 className="text-xl font-bold">Cart</h2>
    <div className="products">
      {cart.map((productInfo, idx) => <CartProduct key={idx} productInfo={productInfo} removeFromCart={() => removeFromCart(idx)} />)}
    </div>
    { cart.length > 0 ? <div className="bg-slate-300 p-4 rounded-lg">
      <p>Total is: ${cart.reduce((a, b) => a + b.price, 0).toFixed(2)}</p>
      <button disabled={!user} className="mt-4 py-2 px-4 bg-green-500 hover:bg-green-700 text-white rounded-md">Proceed</button>
    </div> : <div>No product was added, try add some.</div> }
  </main>
}
