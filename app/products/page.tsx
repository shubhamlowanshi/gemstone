"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, ShoppingCart, Heart, Filter, Grid, List } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/contexts/cart-context"

const products = [
  {
    id: 1,
    name: "Royal Blue Sapphire",
    price: 2500,
    originalPrice: 3000,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    carat: 2.5,
    type: "Sapphire",
    color: "Blue",
    origin: "Ceylon",
    certification: "GIA",
    availability: "In Stock",
  },
  {
    id: 2,
    name: "Emerald Cut Diamond",
    price: 5500,
    originalPrice: 6200,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    carat: 1.8,
    type: "Diamond",
    color: "Colorless",
    origin: "South Africa",
    certification: "GIA",
    availability: "In Stock",
  },
  {
    id: 3,
    name: "Burmese Ruby",
    price: 3200,
    originalPrice: 3800,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    carat: 2.2,
    type: "Ruby",
    color: "Red",
    origin: "Myanmar",
    certification: "GRS",
    availability: "In Stock",
  },
  {
    id: 4,
    name: "Colombian Emerald",
    price: 4200,
    originalPrice: 4800,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    carat: 3.1,
    type: "Emerald",
    color: "Green",
    origin: "Colombia",
    certification: "GRS",
    availability: "In Stock",
  },
  {
    id: 5,
    name: "Pink Tourmaline",
    price: 1800,
    originalPrice: 2200,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    carat: 4.2,
    type: "Tourmaline",
    color: "Pink",
    origin: "Brazil",
    certification: "GIA",
    availability: "Limited",
  },
  {
    id: 6,
    name: "Yellow Citrine",
    price: 800,
    originalPrice: 1000,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.3,
    carat: 5.5,
    type: "Citrine",
    color: "Yellow",
    origin: "Brazil",
    certification: "GIA",
    availability: "In Stock",
  },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const { addItem } = useCart()

  const types = [...new Set(products.map((p) => p.type))]
  const colors = [...new Set(products.map((p) => p.color))]

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch =
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.type.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.type)
        const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color)
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

        return matchesSearch && matchesType && matchesColor && matchesPrice
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return a.price - b.price
          case "price-high":
            return b.price - a.price
          case "rating":
            return b.rating - a.rating
          case "carat":
            return b.carat - a.carat
          default:
            return a.name.localeCompare(b.name)
        }
      })
  }, [searchTerm, selectedTypes, selectedColors, priceRange, sortBy])

  const handleTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setSelectedTypes([...selectedTypes, type])
    } else {
      setSelectedTypes(selectedTypes.filter((t) => t !== type))
    }
  }

  const handleColorChange = (color: string, checked: boolean) => {
    if (checked) {
      setSelectedColors([...selectedColors, color])
    } else {
      setSelectedColors(selectedColors.filter((c) => c !== color))
    }
  }

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      carat: product.carat,
      type: product.type,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Filters</h2>
            </div>

            {/* Search */}
            <div className="mb-6">
              <Label htmlFor="search" className="text-sm font-medium mb-2 block">
                Search
              </Label>
              <Input
                id="search"
                placeholder="Search gemstones..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <Label className="text-sm font-medium mb-2 block">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </Label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={10000}
                min={0}
                step={100}
                className="mt-2"
              />
            </div>

            {/* Gemstone Type */}
            <div className="mb-6">
              <Label className="text-sm font-medium mb-3 block">Gemstone Type</Label>
              <div className="space-y-2">
                {types.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={type}
                      checked={selectedTypes.includes(type)}
                      onCheckedChange={(checked) => handleTypeChange(type, checked as boolean)}
                    />
                    <Label htmlFor={type} className="text-sm">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="mb-6">
              <Label className="text-sm font-medium mb-3 block">Color</Label>
              <div className="space-y-2">
                {colors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <Checkbox
                      id={color}
                      checked={selectedColors.includes(color)}
                      onCheckedChange={(checked) => handleColorChange(color, checked as boolean)}
                    />
                    <Label htmlFor={color} className="text-sm">
                      {color}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={() => {
                setSearchTerm("")
                setSelectedTypes([])
                setSelectedColors([])
                setPriceRange([0, 10000])
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Products */}
        <div className="lg:w-3/4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Gemstone Collection</h1>
              <p className="text-gray-600">{filteredProducts.length} products found</p>
            </div>

            <div className="flex items-center gap-4">
              {/* View Mode Toggle */}
              <div className="flex items-center border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="carat">Largest Carat</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid/List */}
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className={`group hover:shadow-lg transition-all duration-300 ${
                  viewMode === "list" ? "flex flex-row" : ""
                }`}
              >
                <CardContent className={`p-0 ${viewMode === "list" ? "flex w-full" : ""}`}>
                  <div
                    className={`relative overflow-hidden ${
                      viewMode === "list" ? "w-48 h-48 flex-shrink-0" : "rounded-t-lg"
                    }`}
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                        viewMode === "list" ? "w-full h-full" : "w-full h-64"
                      }`}
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="p-2 bg-white/90 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    {product.originalPrice > product.price && (
                      <Badge className="absolute top-4 left-4 bg-red-500 text-white">Sale</Badge>
                    )}
                  </div>

                  <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {product.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {product.carat} ct
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {product.origin}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>

                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-purple-600">${product.price.toLocaleString()}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-lg text-gray-500 line-through">
                          ${product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        className="flex-1 bg-purple-600 hover:bg-purple-700"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="sm" className="px-3 bg-transparent" asChild>
                        <Link href={`/products/${product.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedTypes([])
                  setSelectedColors([])
                  setPriceRange([0, 10000])
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
