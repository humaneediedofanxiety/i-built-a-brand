export default function ThreeGridSection() {
  const features = [
    { title: "Startups", description: "Perfect for new businesses looking to scale quickly." },
    { title: "Enterprises", description: "Robust solutions for large-scale operations." },
    { title: "Developers", description: "Powerful tools for building and integrating applications." },
  ]

  return (
    <div className="py-24 px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">Who We're For</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="border border-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

