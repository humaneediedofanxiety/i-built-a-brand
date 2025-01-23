import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-200 mb-4">I say we but it&#39;s just me, myself and I</p>
        <h1 className="text-5xl sm:text-6xl font-bold mb-8">
          <span className="text-gray-200">We </span>
          <span className="bg-white text-black px-2">build apps and websites</span>
          <br />
          <span className="text-gray-200">that no one cares about.</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-lg">
          Have an innovative idea for an app but no money? BINGO!     </p>


        <div className="relative mx-auto max-w-6xl py-4">
          <Image
            src="/assets/original-7715acd6dd902acc09f57875ec3d58ba.png"
            alt="BUROGU interface preview"
            width={1200}
            height={675}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}

