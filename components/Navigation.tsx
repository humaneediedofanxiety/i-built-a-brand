'use client'
import Link from "next/link"
import { Zap } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const router = usePathname();
  const dynamicHref = router === "/" ? "#home" : "/";

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link href={dynamicHref}>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-white font-bold" />
              <span className="text-white font-medium text-lg">Labovate</span>
            </div></Link>

          <div className="items-center space-x-8 hidden sm:flex">
            <Link href="#how-it-works" className="text-white hover:text-gray-300">
              How it Works
            </Link>
            <Link href="#pricing" className="text-white hover:text-gray-300">
              Pricing
            </Link>
            <Link href="#featured" className="text-white hover:text-gray-300">
              Work
            </Link>
            <Link href="#FAQ" className="text-white hover:text-gray-300">
              FAQ
            </Link>
          </div>


          <div className="flex items-center">
            <Link className="bg-black text-white border border-gray-700 rounded-full px-4 py-2 text-sm" href="/contact">
              Press <span className="bg-white text-black px-1 rounded">B</span> to book a call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

