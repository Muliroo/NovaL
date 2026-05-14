import { LockKeyhole, UserRound, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function AuthModal({ open, onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (event) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || password.length < 4) {
      setError("Preencha e-mail e senha para entrar.");
      return;
    }

    onLogin({
      name: email.split("@")[0] || "Leitor NovaL",
      email: email.trim().toLowerCase(),
      role: "reader",
      plan: "NovaL Black"
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-end bg-black/58 p-3 backdrop-blur-sm sm:place-items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="auth-title"
        >
          <motion.form
            onSubmit={login}
            className="w-full max-w-lg overflow-hidden rounded-lg border border-white/14 bg-[var(--surface)] shadow-[var(--shadow)]"
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] p-5">
              <div>
                <p className="text-sm font-semibold text-[var(--accent)]">Acesso NovaL</p>
                <h2 id="auth-title" className="mt-1 font-display text-3xl font-semibold">
                  Entre no ecossistema
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="premium-ring grid min-h-11 min-w-11 place-items-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                aria-label="Fechar login"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 p-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[var(--muted)]">E-mail</span>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="premium-ring min-h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-3 text-base outline-none transition duration-200 focus:border-[var(--accent)]"
                  type="email"
                  autoComplete="email"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[var(--muted)]">Senha</span>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="premium-ring min-h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-3 text-base outline-none transition duration-200 focus:border-[var(--accent)]"
                  type="password"
                  autoComplete="current-password"
                />
              </label>

              {error ? (
                <p className="rounded-lg border border-[var(--accent)]/40 bg-[var(--accent-soft)] p-3 text-sm text-[var(--text)]">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                className="premium-ring flex min-h-14 w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-4 text-sm font-bold text-black transition duration-200 hover:bg-[var(--accent-strong)] hover:text-white"
              >
                <UserRound size={18} />
                Entrar na NovaL
              </button>

              <div className="rounded-lg border border-[var(--border)] bg-[var(--accent-soft)] p-4 text-sm leading-6 text-[var(--muted)]">
                <LockKeyhole className="mb-2 text-[var(--accent)]" size={18} />
                Protótipo com sessão simulada: o login altera navegação, biblioteca e histórico local.
              </div>
            </div>
          </motion.form>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
