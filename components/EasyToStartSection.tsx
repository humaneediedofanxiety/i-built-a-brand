export default function EasyToStartSection() {
  const steps = ["Sign up for an account", "Choose your plan", "Customize your dashboard", "Start using our platform"]

  return (
    <div className="py-24 px-6 bg-gray-900">
      <h2 className="text-3xl font-bold mb-12 text-center">Easy to Get Started</h2>
      <div className="max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl mr-6">
              {index + 1}
            </div>
            <p className="text-lg">{step}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

