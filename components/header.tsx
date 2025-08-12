"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, ShoppingCart, User, Heart, Menu, Diamond, LogOut, Settings, Package } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { items } = useCart()
  const { user, logout } = useAuth()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Diamond className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">GemStone Palace</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-purple-600 transition-colors">
              Products
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-purple-600 transition-colors">
                Collections
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/products?category=diamond">Diamonds</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/products?category=ruby">Rubies</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/products?category=sapphire">Sapphires</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/products?category=emerald">Emeralds</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input type="search" placeholder="Search gemstones..." className="pl-10 pr-4" />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" asChild>
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
              </Link>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-purple-600">
                    {totalItems}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* User Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <Settings className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/orders">
                      <Package className="mr-2 h-4 w-4" />
                      Orders
                    </Link>
                  </DropdownMenuItem>
                  {user.role === "admin" && (
                    <DropdownMenuItem asChild>
                      <Link href="/admin">
                        <Settings className="mr-2 h-4 w-4" />
                        Admin Panel
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button size="sm" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/products" className="text-lg font-medium">
                    Products
                  </Link>
                  <Link href="/products?category=diamond" className="text-lg font-medium">
                    Diamonds
                  </Link>
                  <Link href="/products?category=ruby" className="text-lg font-medium">
                    Rubies
                  </Link>
                  <Link href="/products?category=sapphire" className="text-lg font-medium">
                    Sapphires
                  </Link>
                  <Link href="/products?category=emerald" className="text-lg font-medium">
                    Emeralds
                  </Link>
                  <Link href="/about" className="text-lg font-medium">
                    About
                  </Link>
                  <Link href="/contact" className="text-lg font-medium">
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input type="search" placeholder="Search gemstones..." className="pl-10 pr-4" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
