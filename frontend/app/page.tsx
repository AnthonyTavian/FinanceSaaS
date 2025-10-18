import { Header } from "@/frontend/components/header"
import { Hero } from "@/frontend/components/hero"
import { Features } from "@/frontend/components/features"
import { HowItWorks } from "@/frontend/components/how-it-works"
import { Pricing } from "@/frontend/components/pricing"
import { CTA } from "@/frontend/components/cta"
import { Footer } from "@/frontend/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
