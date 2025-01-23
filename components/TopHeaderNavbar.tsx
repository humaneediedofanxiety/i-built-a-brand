import Link from "next/link"

export default function TopHeaderNavbar() {
  return (
    <nav className="sticky top-0 bg-black border-b border-gray-800 py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold">Logo</div>
      <div className="space-x-6">
        <Link href="#" className="hover:text-gray-300">
          Features
        </Link>
        <Link href="#" className="hover:text-gray-300">
          Pricing
        </Link>
        <Link href="#" className="hover:text-gray-300">
          About
        </Link>
      </div>
      <div>
        <button className="bg-white text-black px-4 py-2 rounded">Sign Up</button>
      </div>
    </nav>
  )
}

