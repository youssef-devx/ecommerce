"use client"
import { useCallback, useContext } from "react"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../../firebase"
import { UserContext } from "@/UserContext"
import { CartContext } from "@/CartContext"
import Link from "next/link"

export function Container({ children }) {
  const [cart] = useContext(CartContext)
  const [user, setUser] = useContext(UserContext)

  const login = useCallback(() => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        setUser(user)
      }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }, [setUser])

  const logout = useCallback(() => {
    signOut(auth).then(() => {
      setUser(null)
    }).catch((error) => {
      // An error happened.
    })
  }, [setUser])

  //"border-b-2 border-black"

  return <div className="p-4 flex flex-col gap-12">
    <header className="flex justify-between">
      <h1 className="text-2xl font-bold">E-commerce</h1>
      <nav>
        <ul className="flex gap-4">
          <li><Link href="/" className="">Products</Link></li>
          {/* <li><Link href="#">Favourite</Link></li> */}
          <li><Link href="cart">Cart ({cart.length})</Link></li>
          <li className="cursor-pointer" onClick={() => user ? logout() : login()}>{user ? "Logout" : "Login"}</li>
        </ul>
      </nav>
    </header>
    {children}
  </div>
}