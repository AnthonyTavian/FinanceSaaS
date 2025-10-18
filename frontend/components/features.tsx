import { Card, CardContent } from "@/components/ui/card"
import { FileText, TrendingUp, Sparkles, Receipt, PiggyBank, BarChart3 } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Emissão de Notas Fiscais",
    description: "Emita NF-e diretamente da plataforma com cálculo automático de impostos e alertas de prazos.",
  },
  {
    icon: TrendingUp,
    title: "Controle de Fluxo de Caixa",
    description: "Acompanhe entradas e saídas em tempo real com categorização automática via IA.",
  },
  {
    icon: Sparkles,
    title: "Precificação Inteligente",
    description: "IA sugere preços ideais baseados nos seus custos e margem de lucro desejada.",
  },
  {
    icon: Receipt,
    title: "Integração Bancária",
    description: "Conecte sua conta via Open Finance e importe transações automaticamente.",
  },
  {
    icon: PiggyBank,
    title: "Previsão Financeira",
    description: "Receba alertas sobre impostos futuros e possíveis problemas no fluxo de caixa.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Completos",
    description: "Gere relatórios prontos para seu contador ou para apresentar ao fisco.",
  },
]

export function Features() {
  return (
    <section id="recursos" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
            Tudo que você precisa para organizar suas finanças
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Ferramentas poderosas e simples de usar, desenvolvidas especialmente para MEIs e autônomos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-pretty text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
