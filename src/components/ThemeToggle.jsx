import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="premium-ring flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition duration-200 ease-luxury hover:border-[var(--accent)] hover:text-[var(--accent)]"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -18, opacity: 0, scale: 0.9 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      >
        {isDark ? <Sun size={19} /> : <Moon size={19} />}
      </motion.span>
    </button>
  );
}
