import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, TrendingUp, AlertCircle, DollarSign, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  const stats = [
    {
      title: "Saldo Atual",
      value: "R$ 12.450,00",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Receitas (mês)",
      value: "R$ 8.200,00",
      change: "+8.2%",
      trend: "up",
      icon: ArrowUpRight,
    },
    {
      title: "Despesas (mês)",
      value: "R$ 3.750,00",
      change: "-5.1%",
      trend: "down",
      icon: ArrowDownRight,
    },
    {
      title: "Lucro (mês)",
      value: "R$ 4.450,00",
      change: "+15.3%",
      trend: "up",
      icon: TrendingUp,
    },
  ]

  const recentTransactions = [
    { id: 1, description: "Pagamento Cliente - Projeto Web", amount: 2500, type: "income", date: "Hoje, 14:30" },
    { id: 2, description: "Hospedagem Vercel", amount: -120, type: "expense", date: "Hoje, 10:15" },
    { id: 3, description: "Freelance - Design Logo", amount: 800, type: "income", date: "Ontem, 16:45" },
    { id: 4, description: "Adobe Creative Cloud", amount: -180, type: "expense", date: "Ontem, 09:00" },
    { id: 5, description: "Consultoria - 2h", amount: 400, type: "income", date: "2 dias atrás" },
  ]

  const alerts = [
    { id: 1, message: "Você tem 3 notas fiscais pendentes de emissão", type: "warning" },
    { id: 2, message: "Seu plano gratuito está próximo do limite mensal", type: "info" },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Visão geral das suas finanças</p>
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="space-y-2">
          {alerts.map((alert) => (
            <Card key={alert.id} className="border-l-4 border-l-yellow-500">
              <CardContent className="flex items-center gap-3 p-4">
                <AlertCircle className="h-5 w-5 text-yellow-500" />
                <p className="text-sm">{alert.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                {stat.change} em relação ao mês anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Transações Recentes</CardTitle>
                <CardDescription>Suas últimas movimentações financeiras</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/transactions">Ver todas</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        transaction.type === "income"
                          ? "bg-green-100 dark:bg-green-900/20"
                          : "bg-red-100 dark:bg-red-900/20"
                      }`}
                    >
                      {transaction.type === "income" ? (
                        <ArrowUpRight className="h-5 w-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <ArrowDownRight className="h-5 w-5 text-red-600 dark:text-red-400" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{transaction.description}</p>
                      <p className="text-xs text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      transaction.type === "income"
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : ""}R$ {Math.abs(transaction.amount).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Acesse as funcionalidades mais usadas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
              <Link href="/transactions">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Nova Receita
              </Link>
            </Button>
            <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
              <Link href="/transactions">
                <ArrowDownRight className="mr-2 h-4 w-4" />
                Nova Despesa
              </Link>
            </Button>
            <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
              <Link href="/invoices">
                <CreditCard className="mr-2 h-4 w-4" />
                Emitir Nota Fiscal
              </Link>
            </Button>
            <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
              <Link href="/reports">
                <TrendingUp className="mr-2 h-4 w-4" />
                Ver Relatórios
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Cash Flow Prediction */}
      <Card>
        <CardHeader>
          <CardTitle>Previsão de Fluxo de Caixa</CardTitle>
          <CardDescription>Baseado no seu histórico dos últimos 3 meses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <p className="text-sm text-muted-foreground">Saldo previsto em 30 dias</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">R$ 16.200,00</p>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
              +30.1%
            </Badge>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Com base no seu padrão de receitas e despesas, você deve ter um crescimento positivo no próximo mês.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
