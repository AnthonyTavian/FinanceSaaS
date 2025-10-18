import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "/mês",
    description: "Perfeito para começar a organizar suas finanças",
    features: [
      "Controle básico de entradas e saídas",
      "Até 50 transações por mês",
      "Relatórios simples",
      "Suporte por email",
    ],
    cta: "Começar Grátis",
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "R$ 49",
    period: "/mês",
    description: "Para MEIs que querem crescer com inteligência",
    features: [
      "Tudo do plano Gratuito",
      "Transações ilimitadas",
      "Emissão de NF-e",
      "IA para precificação e previsões",
      "Integração bancária via Open Finance",
      "Relatórios avançados",
      "Suporte prioritário",
    ],
    cta: "Começar Teste Grátis",
    highlighted: true,
  },
  {
    name: "Empresarial",
    price: "R$ 99",
    period: "/mês",
    description: "Para equipes e múltiplos negócios",
    features: [
      "Tudo do plano Profissional",
      "Múltiplos usuários",
      "Múltiplos CNPJs",
      "API de integração",
      "Gerente de conta dedicado",
      "Treinamento personalizado",
    ],
    cta: "Falar com Vendas",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="precos" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Planos para todos os tamanhos</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Comece grátis e evolua conforme seu negócio cresce. Sem surpresas, sem taxas escondidas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${
                plan.highlighted ? "border-primary shadow-lg ring-2 ring-primary/20" : "border-border/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                  Mais Popular
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-pretty">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Todos os planos incluem 14 dias de teste grátis. Cancele quando quiser.
        </p>
      </div>
    </section>
  )
}
