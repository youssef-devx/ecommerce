"use client"
import { CartContext } from "@/CartContext"
import { UserContext } from "@/UserContext"
import CartProduct from "@/components/CartProduct"
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { useCallback, useContext } from "react"

export default function Cart() {
  const [cart, setCart] = useContext(CartContext)
  const [user] = useContext(UserContext)

  const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_CLIENT_ID,
    currency: "USD",
    intent: "capture",
  }

  const removeFromCart = useCallback(
    (idx) => setCart((currCart) => currCart.filter((_, pIdx) => pIdx !== idx)),
    [setCart]
  )

  return (
    <main className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Cart</h2>
        <p className="bg-[#eee] p-4 rounded-lg">
          Total Price: ${cart.reduce((a, b) => a + b.price, 0).toFixed(2)}
        </p>
      </div>
      <div className="products">
        {cart.map((productInfo, idx) => (
          <CartProduct
            key={idx}
            productInfo={productInfo}
            removeFromCart={() => removeFromCart(idx)}
          />
        ))}
      </div>
      {cart.length < 1 ? <div>No product was added, try add some.</div> : null}
      <div className="flex justify-center items-center p-6 bg-[#eee] rounded-lg">
        {user && cart.length > 0 ? (
          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: cart.reduce((a, b) => a + b.price, 0).toFixed(2),
                      },
                    },
                  ],
                })
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name
                  alert(`Transaction completed by ${name}`)
                  setCart([])
                })
              }}
            />
          </PayPalScriptProvider>
        ) : null}
      </div>
    </main>
  )
}
