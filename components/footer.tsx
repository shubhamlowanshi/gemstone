import Link from "next/link"
import { Diamond, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Diamond className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">GemStone Palace</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted source for the world's finest gemstones and jewelry. Certified quality, exceptional service.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=diamond" className="text-gray-400 hover:text-white transition-colors">
                  Diamonds
                </Link>
              </li>
              <li>
                <Link href="/products?category=ruby" className="text-gray-400 hover:text-white transition-colors">
                  Rubies
                </Link>
              </li>
              <li>
                <Link href="/products?category=sapphire" className="text-gray-400 hover:text-white transition-colors">
                  Sapphires
                </Link>
              </li>
              <li>
                <Link href="/products?category=emerald" className="text-gray-400 hover:text-white transition-colors">
                  Emeralds
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-400 hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>📍 123 Jewelry District</p>
              <p>Indore Madhya -Pradesh</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info@gemstonepalace.com</p>
              <p>🕒 Mon-Sat: 9AM-7PM</p>
              <p>🕒 Sunday: 11AM-5PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 GemStone Palace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
