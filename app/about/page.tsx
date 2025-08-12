// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">About Us</h1>
        <p className="text-gray-600 mb-4">
          Welcome to <span className="font-semibold">GemStone Palace</span>, your trusted source for the world's finest gemstones and jewelry.
          Our mission is to provide our customers with authentic, certified gemstones while delivering exceptional service.
        </p>
        <p className="text-gray-600 mb-4">
          We work closely with trusted suppliers to ensure every piece meets the highest quality standards.
          From rare diamonds to vibrant emeralds, we bring you treasures from across the globe.
        </p>
        <p className="text-gray-600">
          Whether you're looking for a timeless engagement ring or a unique custom design, our team is here to make your vision a reality.
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Certified & Authentic Gemstones</li>
            <li>Custom Jewelry Design</li>
            <li>Worldwide Shipping</li>
            <li>Exceptional Customer Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
