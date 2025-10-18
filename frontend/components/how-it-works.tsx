import { Card, CardContent } from "@/frontend/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Cadastro e Conexão",
    description: "Crie sua conta e conecte sua conta bancária via Open Finance ou Pix em poucos cliques.",
  },
  {
    number: "02",
    title: "Importação Automática",
    description: "O sistema importa suas transações bancárias e permite registro manual de entradas e saídas.",
  },
  {
    number: "03",
    title: "Organização Inteligente",
    description: "A IA classifica automaticamente suas transações e gera relatórios de fluxo de caixa.",
  },
  {
    number: "04",
    title: "Insights e Ação",
    description: "Receba sugestões de precificação, alertas de impostos e emita notas fiscais com facilidade.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Como funciona</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Em apenas 4 passos simples, você terá controle total das suas finanças.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="mb-4 text-5xl font-bold text-primary/20">{step.number}</div>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-pretty text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
