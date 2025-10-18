import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Pricing } from "@/components/pricing"

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Escolha o plano ideal para você</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Comece grátis e evolua conforme seu negócio cresce
            </p>
          </div>
          <Pricing />
        </div>
      </main>
      <Footer />
    </div>
  )
}
