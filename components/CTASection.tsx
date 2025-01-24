import Link from "next/link"
export default function CTASection() {
  return (
    <div className="relative overflow-hidden bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl font-bold mb-8">
          Oops seems like you reached the end
          <br />
          now you gotta click the button.
        </h2>
        <Link className="bg-white text-black px-32 py-4 rounded-full text-lg font-medium w-full max-w-md" href="/contact">
          Click the damn button
        </Link>
        <p className="mt-4 text-gray-400 text-sm">Be quick! Jack be nimble, Jack be quick. </p>
      </div>
    </div>
  )
}

