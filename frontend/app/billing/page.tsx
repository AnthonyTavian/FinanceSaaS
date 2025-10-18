import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, Download } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BillingPage() {
  const paymentHistory = [
    { id: 1, date: "2024-01-01", plan: "Profissional", amount: 49.9, status: "paid" },
    { id: 2, date: "2023-12-01", plan: "Profissional", amount: 49.9, status: "paid" },
    { id: 3, date: "2023-11-01", plan: "Profissional", amount: 49.9, status: "paid" },
    { id: 4, date: "2023-10-01", plan: "Gratuito", amount: 0, status: "paid" },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Planos e Pagamentos</h1>
        <p className="text-muted-foreground">Gerencie sua assinatura e histórico de pagamentos</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Plano Atual</CardTitle>
              <CardDescription>Você está no plano Profissional</CardDescription>
            </div>
            <Badge className="bg-primary">Ativo</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <h3 className="text-lg font-semibold">Profissional</h3>
              <p className="text-sm text-muted-foreground">Renovação em 01/02/2024</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">R$ 49,90</p>
              <p className="text-sm text-muted-foreground">/mês</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Recursos incluídos:</p>
            <ul className="space-y-2">
              {[
                "Transações ilimitadas",
                "Classificação automática com IA",
                "Emissão de notas fiscais",
                "Relatórios avançados",
                "Integração bancária",
                "Suporte prioritário",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2">
            <Button variant="outline">Alterar Plano</Button>
            <Button variant="outline">Cancelar Assinatura</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Método de Pagamento</CardTitle>
          <CardDescription>Gerencie seus métodos de pagamento</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-sm text-muted-foreground">Expira em 12/2025</p>
              </div>
            </div>
            <Badge variant="secondary">Padrão</Badge>
          </div>
          <Button variant="outline">Adicionar Método de Pagamento</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Histórico de Pagamentos</CardTitle>
          <CardDescription>Seus pagamentos anteriores</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Plano</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{new Date(payment.date).toLocaleDateString("pt-BR")}</TableCell>
                  <TableCell>{payment.plan}</TableCell>
                  <TableCell>R$ {payment.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant={payment.status === "paid" ? "default" : "secondary"}>
                      {payment.status === "paid" ? "Pago" : "Pendente"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Recibo
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
