"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What do you gain from collaborating bro?",
      answer:
        "First of all, equity. If we collaborating then that means I am one of the founders of the app too and if nothing else then simply experience.",
    },
    {
      question: "Do you plan on making this site more professional?",
      answer:
        "Maybe and maybe not. I simply made this site however I felt like it, If I feel in the future that it's necessary or if I put more priority on actually getting paid clients then maybe.",
    },
    {
      question: "Who even asking you questions?",
      answer:
        "Idk, these are just questions I made up in my mind and then answered cause it just looks cool to have a FAQ section.",
    },
  ]

  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions (FAQ)</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-800">
              <button
                className="w-full flex justify-between items-center py-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {openIndex === index && <div className="pb-4 text-gray-400">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

