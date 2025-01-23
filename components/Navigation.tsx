import Link from "next/link"
import { Zap } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">


          <div className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-white font-bold" />
            <span className="text-white font-medium text-lg">Labovate</span>
          </div>

          <div className="flex items-center space-x-8">
            <Link href="#" className="text-white hover:text-gray-300">
              How it Works
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              Pricing
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              Work
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              FAQ
            </Link>
          </div>


          <div className="flex items-center">
            <button className="bg-black text-white border border-gray-700 rounded-full px-4 py-2 text-sm">
              Press <span className="bg-white text-black px-1 rounded">B</span> to book a call
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

