export default function PricingPlan() {
  const plans = [
    { name: "Basic", price: "$9.99", features: ["Feature 1", "Feature 2", "Feature 3"] },
    { name: "Pro", price: "$19.99", features: ["All Basic features", "Feature 4", "Feature 5"] },
    { name: "Enterprise", price: "Custom", features: ["All Pro features", "Feature 6", "Feature 7"] },
  ]

  return (
    <div className="py-24 px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="border border-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

