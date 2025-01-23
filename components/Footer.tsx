import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-14 border-t border-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Labovate</h2>
            <p className="text-sm text-gray-300">By a bunch of my persona</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-200 hover:text-grey-300">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-grey-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-grey-300">
                  Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-grey-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-200 hover:text-grey-300">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-gray-300">
                  Discord
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Any questions</h3>
            <Link href="mailto:saysayeem.pr@gmail.com" className="text-2xl font-semibold hover:text-gray-200">
              saysayeem.pr@gmail.com
            </Link>
            <p className="mt-2 text-sm text-gray-300">
              You can even annoy me it&#39;s aight, feel free.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-4 border-t border-gray-400 pb-4">
          <p className="text-sm text-gray-300">&copy; 2025. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

