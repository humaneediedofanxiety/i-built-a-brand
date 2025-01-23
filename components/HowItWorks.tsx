import { ArrowRight } from "lucide-react"

export default function HowItWorks() {
  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider mb-4">HOW IT WORKS</p>
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 flex items-center justify-center gap-4">
            How the actual fuck bro? <span className="text-4xl"></span>
          </h2>
          <div className="w-24 h-1 bg-gray-700 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Step 1 */}
          <div className="text-center relative">
            <div className="text-8xl font-bold text-gray-800 mb-6">1</div>
            <h3 className="text-2xl font-bold mb-4">Reach Out</h3>
            <p className="text-gray-400">
              Fill out the form with all the necessary details and patiently wait for a response.
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="hidden md:block absolute left-1/3 top-1/2 transform -translate-y-1/2">
            <ArrowRight className="w-8 h-8 text-gray-700" />
          </div>

          {/* Step 2 */}
          <div className="text-center relative">
            <div className="text-8xl font-bold text-gray-800 mb-6">2</div>
            <h3 className="text-2xl font-bold mb-4">Schedule Meeting</h3>
            <p className="text-gray-400">
              If your idea is good enough we can schedule a meeting to discuss the necessary details.
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="hidden md:block absolute left-2/3 top-1/2 transform -translate-y-1/2">
            <ArrowRight className="w-8 h-8 text-gray-700" />
          </div>

          {/* Step 3 */}
          <div className="text-center relative">
            <div className="text-8xl font-bold text-gray-800 mb-6">3</div>
            <h3 className="text-2xl font-bold mb-4">Finalize & Build</h3>
            <p className="text-gray-400">
              Once everything goes smoothly, we can start working for real and get our app live.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-gray-800">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="w-6 h-6 bg-[#635BFF] rounded-full"></span>
            Quick response time
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="w-6 h-6 bg-[#36C5F0] rounded-full"></span>
            Communication via Discord
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="w-6 h-6 bg-[#0ACF83] rounded-full"></span>
            Totally a chill guy
          </div>
        </div>
      </div>
    </div>
  )
}

