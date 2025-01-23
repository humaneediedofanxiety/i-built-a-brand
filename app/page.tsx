import TopBanner from "@/components/TopBanner"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import ProjectShowcase from "@/components/ProjectShowcase"
import ConversionChallenges from "@/components/ConversionChallenges"
import PricingSection from "@/components/PricingSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-inter">
      <TopBanner />
      <Navigation />
      <Hero />
      <ConversionChallenges />
      <ProjectShowcase />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}

