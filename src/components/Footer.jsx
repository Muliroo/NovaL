import { BookOpen, Instagram, Mail, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-soft)] px-4 py-10 backdrop-blur sm:px-6 lg:pl-80 lg:pr-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--text)] text-[var(--bg)]">
              <BookOpen size={18} />
            </span>
            <span className="font-display text-2xl font-semibold">NovaL</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">
            Plataforma brasileira de leitura premium, com descoberta inteligente,
            biblioteca pessoal e leitor otimizado para celular.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-[var(--text)]">Produto</h2>
          <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            <li>Dashboard streaming</li>
            <li>Leitor vertical e modo livro</li>
            <li>Perfil e notificações</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-[var(--text)]">Contato</h2>
          <div className="mt-4 flex gap-2">
            <FooterButton label="Instagram" icon={Instagram} />
            <FooterButton label="E-mail" icon={Mail} />
            <FooterButton label="Privacidade" icon={ShieldCheck} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterButton({ label, icon: Icon }) {
  return (
    <button
      type="button"
      className="premium-ring flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
      aria-label={label}
    >
      <Icon size={18} />
    </button>
  );
}
