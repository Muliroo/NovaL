import { Bookmark, Cloud, History, LockKeyhole, Play, Rows3 } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { MangaCard } from "./MangaCard.jsx";
import { profile } from "../data/mangas.js";

const tabs = [
  { id: "continue", label: "Continuar", icon: Play },
  { id: "favorites", label: "Favoritos", icon: Bookmark },
  { id: "history", label: "Histórico", icon: History },
  { id: "offline", label: "Offline", icon: Cloud }
];

export function LibraryPage({ user, mangas, onRead, onLoginRequest }) {
  const [tab, setTab] = useState("continue");
  const content = useMemo(() => {
    if (tab === "favorites") return mangas.filter((manga) => profile.favorites.includes(manga.title));
    if (tab === "history") return mangas.filter((manga) => profile.history.some((item) => item.includes(manga.title)));
    if (tab === "offline") return mangas.filter((manga) => manga.progress > 50);
    return mangas.filter((manga) => manga.progress > 0).sort((a, b) => b.progress - a.progress);
  }, [mangas, tab]);

  if (!user) {
    return (
      <section className="grid min-h-[68dvh] place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 text-center">
        <div className="max-w-md">
          <LockKeyhole className="mx-auto text-[var(--accent)]" size={34} />
          <h1 className="mt-5 font-display text-4xl font-semibold">Sua biblioteca está protegida</h1>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            Entre para sincronizar histórico, favoritos, downloads e notificações de capítulos novos.
          </p>
          <button
            type="button"
            onClick={onLoginRequest}
            className="premium-ring mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 text-sm font-bold text-black transition duration-200 hover:bg-[var(--accent-strong)] hover:text-white"
          >
            Entrar na NovaL
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6" aria-labelledby="library-title">
      <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
        <p className="flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
          <Rows3 size={17} />
          Biblioteca pessoal
        </p>
        <h1 id="library-title" className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-none sm:text-6xl">
          Onde sua leitura vira ritual
        </h1>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <LibraryMetric label="Progresso médio" value="58%" />
          <LibraryMetric label="Favoritos" value={profile.favorites.length} />
          <LibraryMetric label="Offline pronto" value="3 títulos" />
        </div>
      </div>

      <div className="scrollbar-luxury flex gap-2 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-2 backdrop-blur">
        {tabs.map((item) => {
          const Icon = item.icon;
          const active = item.id === tab;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`premium-ring flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-4 text-sm font-semibold transition duration-200 ${
                active
                  ? "bg-[var(--accent)] text-black"
                  : "text-[var(--muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
              }`}
              aria-pressed={active}
            >
              <Icon size={16} />
              {item.label}
            </button>
          );
        })}
      </div>

      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {content.map((manga, index) => (
          <MangaCard key={manga.id} manga={manga} index={index} onRead={onRead} compact />
        ))}
      </motion.div>
    </section>
  );
}

function LibraryMetric({ label, value }) {
  return (
    <article className="rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] p-4">
      <p className="text-sm text-[var(--muted)]">{label}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </article>
  );
}
