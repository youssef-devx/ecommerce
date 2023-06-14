import ProductsContextProvider from "@/ProductsContext"
import CartContextProvider from "@/CartContext"
import UserContextProvider from "@/UserContext"
import './globals.css'
import { Inter } from 'next/font/google'
import { Container } from "@/components/Container"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Online Shop Website',
  description: 'This is an online shop Website, developed by Devx.',
}

export default function RootLayout({ children }) {
  return (
    <ProductsContextProvider>
    <CartContextProvider>
    <UserContextProvider>
      <html lang="en">
        <body className={inter.className}>
          <Container>{children}</Container>
        </body>
      </html>
    </UserContextProvider>
    </CartContextProvider>
    </ProductsContextProvider>
  )
}