import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, FileText, Download, Eye } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function InvoicesPage() {
  const invoices = [
    {
      id: 1,
      number: "NF-2024-001",
      client: "Empresa ABC Ltda",
      date: "2024-01-15",
      amount: 2500,
      status: "issued",
    },
    {
      id: 2,
      number: "NF-2024-002",
      client: "João Freelancer",
      date: "2024-01-14",
      amount: 800,
      status: "issued",
    },
    {
      id: 3,
      number: "NF-2024-003",
      client: "Startup XYZ",
      date: "2024-01-10",
      amount: 3500,
      status: "pending",
    },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Notas Fiscais</h1>
          <p className="text-muted-foreground">Gerencie e emita suas notas fiscais</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Emitir Nota Fiscal
        </Button>
      </div>

      <Card className="border-l-4 border-l-primary">
        <CardContent className="flex items-center gap-3 p-4">
          <FileText className="h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Recurso Premium</p>
            <p className="text-sm text-muted-foreground">
              A emissão de notas fiscais está disponível no plano Profissional ou superior
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notas Fiscais Emitidas</CardTitle>
          <CardDescription>Histórico de todas as suas notas fiscais</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Número</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.number}</TableCell>
                  <TableCell>{invoice.client}</TableCell>
                  <TableCell>{new Date(invoice.date).toLocaleDateString("pt-BR")}</TableCell>
                  <TableCell>R$ {invoice.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant={invoice.status === "issued" ? "default" : "secondary"}>
                      {invoice.status === "issued" ? "Emitida" : "Pendente"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
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
