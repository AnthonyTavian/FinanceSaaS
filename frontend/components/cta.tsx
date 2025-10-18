import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-accent p-12 md:p-20">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold text-primary-foreground md:text-5xl">
              Pronto para organizar suas finanças?
            </h2>
            <p className="mb-8 text-pretty text-lg text-primary-foreground/90 md:text-xl">
              Junte-se a milhares de MEIs e autônomos que já transformaram sua gestão financeira com nossa plataforma.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Começar Gratuitamente
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
              >
                Agendar Demonstração
              </Button>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
