export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">F</span>
              </div>
              <span className="text-xl font-bold">FinanceiroMEI</span>
            </div>
            <p className="text-pretty text-sm text-muted-foreground">
              Gestão financeira inteligente para MEIs e autônomos brasileiros.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Produto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#recursos" className="hover:text-foreground">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-foreground">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Integrações
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Atualizações
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Termos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Segurança
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 FinanceiroMEI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
