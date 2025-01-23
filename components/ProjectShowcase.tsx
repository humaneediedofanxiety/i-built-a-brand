import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function ProjectShowcase() {
  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take a look at some of our most recent works, so that you might actually be convinced.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Large Feature Box */}
          <div className="lg:col-span-2 lg:row-span-2 relative group">
            <div className="rounded-3xl overflow-hidden bg-[#111] border border-gray-800 aspect-[4/3] relative hover:border-gray-700 transition-colors">
              <div className="absolute inset-x-0 top-8 flex justify-center">
                <Image
                  src="/assets/Google_Chat_Logo_512px.png"
                  alt="Project Logo"
                  width={80}
                  height={80}
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="absolute inset-x-0 top-32 text-center">
                <h3 className="text-4xl font-semibold mb-4">Messenger</h3>
                <button className="bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:bg-black/30 transition-colors">
                  Live preview <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

          {/* Small Boxes */}
          {[
            {
              title: "Upcoming",
              description: "Launching soon.",
              icon: "Abc",
              gradient: "from-blue-500 to-purple-500",
            },
            {
              title: "Upcoming",
              description: "Launching soon.",
              icon: "⚙️",
              gradient: "from-gray-500 to-gray-600",
            },

          ].map((box, index) => (
            <div key={index} className="group relative">
              <div className="rounded-3xl overflow-hidden bg-[#111] border border-gray-800 p-6 h-full hover:border-gray-700 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${box.gradient}`}
                    >
                      <span className="text-2xl">{box.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{box.title}</h3>
                  <p className="text-sm text-gray-400">{box.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

