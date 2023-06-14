"use client"
import { useCallback, useContext } from "react"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../../firebase"
import { UserContext } from "@/UserContext"
import { CartContext } from "@/CartContext"
import { useRouter } from "next/navigation"

export function Container({ children }) {
  const [cart] = useContext(CartContext)
  const [user, setUser] = useContext(UserContext)
  const router = useRouter()

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

  const navigateTo = (e, pathname) => {
    router.push(pathname);

    [...e.target.parentElement.children].forEach(el => {el.classList.remove("border-b-2", "border-black")})

    e.target.classList.add("border-b-2", "border-black")
  }

  return <div className="w-[1024px] m-auto p-6 pt-8 flex flex-col gap-[6rem]">
    <header className="flex justify-between">
      <h1 className="text-3xl font-bold">Devx</h1>
      <nav>
        <ul className="flex gap-4">
          <li className="cursor-pointer" onClick={(e) => navigateTo(e, "/")}>Products</li>
          {/* <li className="cursor-pointer" onClick={(e) => navigateTo(e, "/purchased")}>Purchased</li> */}
          <li className="cursor-pointer" onClick={(e) => navigateTo(e, "/cart")}>Cart ({cart.length})</li>
          <li className="cursor-pointer" onClick={() => user ? logout() : login()}>{user ? "Logout" : "Login"}</li>
        </ul>
      </nav>
    </header>
    {children}
  </div>
}