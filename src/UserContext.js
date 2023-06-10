"use client"
import { createContext, useMemo, useState } from "react"

export const UserContext = createContext(null)

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)

  const value = useMemo(() => [user, setUser], [user, setUser])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
