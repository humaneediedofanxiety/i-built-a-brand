import { Zap } from "lucide-react"

export default function PricingSection() {
  return (
    <div className="bg-black text-white py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider mb-4">Don&#39;t like how that works?</p>
          <h2 className="text-4xl sm:text-5xl font-bold">We have paid options too.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* One-off Plan */}
          <div className="bg-[#111] rounded-2xl p-8">
            <div className="mb-8">
              <h3 className="text-xl mb-4">One-off</h3>
              <div className="text-4xl font-bold mb-2">$187</div>
              <p className="text-sm text-gray-400">Launch your dream site in 5 days!</p>
            </div>

            <p className="mb-8 text-sm text-gray-400">
              Perfect for single, high-impact, conversion-focused landing page.
            </p>

            <button className="w-full border border-white rounded-full py-3 mb-8 hover:bg-white hover:text-black transition-colors">
              Get started today
            </button>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-4">Services:</h4>
                <ul className="space-y-2">
                  {[
                    "Branding",
                    "Copywriting",
                    "Landing Page",
                  ].map((service) => (
                    <li key={service} className="flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-4">Features:</h4>
                <ul className="space-y-2">
                  {[
                    "10x revisions",
                    "24/5 Support",
                    "You get a chill guy",
                    "Communication via Discord",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Retainer Plan */}
          <div className="bg-[#111] rounded-2xl p-8 relative">
            <div className="absolute top-4 right-4 bg-white text-black text-xs px-2 py-1 rounded-full">BEST VALUE</div>

            <div className="mb-8">
              <h3 className="text-xl mb-4">Retainer</h3>
              <div className="text-4xl font-bold mb-2">$Custom/mo</div>
              <p className="text-sm text-gray-400">Pause / Cancel anytime</p>
            </div>

            <p className="mb-8 text-sm text-gray-400">Ideal for those who need an ongoing design support.</p>

            <button className="w-full bg-white text-black rounded-full py-3 mb-8 hover:bg-gray-200 transition-colors">
              Get started today
            </button>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-4">Services:</h4>
                <ul className="space-y-2">
                  {[
                    "Branding",
                    "Copywriting",
                    "Web App Development",
                    "Ecommerce Sites",
                    "Landing Pages",
                  ].map((service) => (
                    <li key={service} className="flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-4">Features:</h4>
                <ul className="space-y-2">
                  {[
                    "24/5 Support",
                    "Unlimited Revisions",
                    "Figma file & code access",
                    "Updates every 48 hours",
                    "Communication via Discord",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
          </p>
          <a href="#" className="underline">
            Get a sample of our work for free
          </a>
        </div>
      </div>
    </div>
  )
}

