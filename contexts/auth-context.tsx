"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: number
  email: string
  name: string
  role: "user" | "admin"
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (email: string, password: string, name: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored auth token on mount
    const token = localStorage.getItem("auth-token")
    if (token) {
      // In a real app, verify token with backend
      const userData = localStorage.getItem("user-data")
      if (userData) {
        setUser(JSON.parse(userData))
      }
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Mock login - in real app, call your API
      if (email === "admin@gemstone.com" && password === "admin123") {
        const adminUser = {
          id: 1,
          email: "admin@gemstone.com",
          name: "Admin User",
          role: "admin" as const,
        }
        setUser(adminUser)
        localStorage.setItem("auth-token", "mock-admin-token")
        localStorage.setItem("user-data", JSON.stringify(adminUser))
        return true
      } else if (email && password) {
        const regularUser = {
          id: 2,
          email,
          name: "John Doe",
          role: "user" as const,
        }
        setUser(regularUser)
        localStorage.setItem("auth-token", "mock-user-token")
        localStorage.setItem("user-data", JSON.stringify(regularUser))
        return true
      }
      return false
    } catch (error) {
      console.error("Login error:", error)
      return false
    }
  }

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      // Mock registration - in real app, call your API
      const newUser = {
        id: Date.now(),
        email,
        name,
        role: "user" as const,
      }
      setUser(newUser)
      localStorage.setItem("auth-token", "mock-user-token")
      localStorage.setItem("user-data", JSON.stringify(newUser))
      return true
    } catch (error) {
      console.error("Registration error:", error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("auth-token")
    localStorage.removeItem("user-data")
  }

  return <AuthContext.Provider value={{ user, login, register, logout, loading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
