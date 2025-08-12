import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredGems = [
  {
    id: 1,
    name: "Royal Blue Sapphire",
    price: 2500,
    originalPrice: 3000,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    carat: 2.5,
    type: "Sapphire",
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
  },
]

const collections = [
  {
    name: "Diamonds",
    count: 45,
    image: "/placeholder.svg?height=200&width=300",
    href: "/products?category=diamond",
  },
  {
    name: "Rubies",
    count: 32,
    image: "/placeholder.svg?height=200&width=300",
    href: "/products?category=ruby",
  },
  {
    name: "Sapphires",
    count: 28,
    image: "/placeholder.svg?height=200&width=300",
    href: "/products?category=sapphire",
  },
  {
    name: "Emeralds",
    count: 21,
    image: "/placeholder.svg?height=200&width=300",
    href: "/products?category=emerald",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Exquisite Gemstones
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Discover the world's finest collection of certified precious stones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                <Link href="/products">Shop Collection</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Collections</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our curated selection of the world's most beautiful gemstones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <Link key={collection.name} href={collection.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={collection.image || "/placeholder.svg"}
                        alt={collection.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-semibold">{collection.name}</h3>
                        <p className="text-sm opacity-90">{collection.count} items</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Gemstones</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Handpicked selection of our most exquisite pieces</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGems.map((gem) => (
              <Card key={gem.id} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={gem.image || "/placeholder.svg"}
                      alt={gem.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="p-2 bg-white/90 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    {gem.originalPrice > gem.price && (
                      <Badge className="absolute top-4 left-4 bg-red-500 text-white">Sale</Badge>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {gem.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {gem.carat} ct
                      </Badge>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{gem.name}</h3>

                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(gem.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({gem.rating})</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-purple-600">${gem.price.toLocaleString()}</span>
                      {gem.originalPrice > gem.price && (
                        <span className="text-lg text-gray-500 line-through">
                          ${gem.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="sm" className="px-3 bg-transparent">
                        <Link href={`/products/${gem.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 bg-transparent">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers and the latest gemstone arrivals
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900" />
            <Button className="bg-white text-purple-900 hover:bg-gray-100 px-6">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
