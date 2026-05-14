import { Activity, ArrowUpRight, Layers3, Radar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { FiltersPanel } from "./FiltersPanel.jsx";
import { MangaCard } from "./MangaCard.jsx";

const moods = ["Cinemático", "Leitura rápida", "Noir", "Brasilidade", "Mind-bending", "Romance lento"];

export function ExplorePage({
  filters,
  onFiltersChange,
  genres,
  authors,
  mangas,
  filteredMangas,
  onRead
}) {
  const demographics = ["Shonen", "Seinen", "Shojo", "Josei"];

  return (
    <section className="space-y-8" aria-labelledby="explore-title">
      <div className="grid gap-5 lg:grid-cols-[1fr_0.78fr]">
        <div className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
          <motion.div
            className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--accent),transparent,var(--accent-strong))]"
            animate={{ x: ["-45%", "45%", "-45%"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
          <p className="flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
            <Radar size={17} />
            Explorar
          </p>
          <h1 id="explore-title" className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-none sm:text-6xl">
            Radar de descobertas para achar o mangá certo no momento certo
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {moods.map((mood) => (
              <button
                key={mood}
                type="button"
                onClick={() => onFiltersChange({ ...filters, query: mood === "Noir" ? "Noir" : "" })}
                className="premium-ring min-h-11 rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-4 text-sm font-semibold text-[var(--muted)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--text)]"
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {demographics.map((demo, index) => {
            const count = mangas.filter((manga) => manga.demographic === demo).length;
            return (
              <motion.button
                key={demo}
                type="button"
                onClick={() => onFiltersChange({ ...filters, demographic: demo })}
                className="premium-ring flex min-h-24 items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-left transition duration-200 hover:border-[var(--accent)] hover:shadow-[var(--shadow)]"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04, duration: 0.24 }}
              >
                <span>
                  <span className="block text-sm text-[var(--muted)]">Demografia</span>
                  <span className="mt-1 block text-2xl font-semibold">{demo}</span>
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  {count}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <FiltersPanel
        filters={filters}
        onChange={onFiltersChange}
        genres={genres}
        authors={authors}
        resultCount={filteredMangas.length}
      />

      <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
        <aside className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
          <p className="flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
            <Sparkles size={17} />
            Curadoria viva
          </p>
          <div className="mt-5 space-y-3">
            {[
              ["Alta retenção", "Neon Samurai", "92% seguem para o próximo capítulo"],
              ["Dormindo no catálogo", "Mar de Tinta", "Final completo para maratonar"],
              ["Tendência BR", "Ceifadores do Sol", "Folclore em crescimento"]
            ].map(([label, title, body]) => (
              <article key={title} className="rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                <p className="text-xs font-semibold uppercase text-[var(--accent)]">{label}</p>
                <h2 className="mt-2 text-lg font-semibold">{title}</h2>
                <p className="mt-1 text-sm leading-5 text-[var(--muted)]">{body}</p>
              </article>
            ))}
          </div>
        </aside>

        <section className="space-y-4" aria-labelledby="results-heading">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                <Layers3 size={17} />
                Resultado filtrado
              </p>
              <h2 id="results-heading" className="font-display text-3xl font-semibold">
                {filteredMangas.length} títulos encontrados
              </h2>
            </div>
            <span className="hidden items-center gap-2 text-sm font-semibold text-[var(--muted)] sm:flex">
              <Activity size={16} />
              Atualizado agora
            </span>
          </div>

          {filteredMangas.length ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredMangas.map((manga, index) => (
                <MangaCard key={manga.id} manga={manga} index={index} onRead={onRead} compact />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
              <p className="text-lg font-semibold">Nenhum mangá encontrado</p>
              <p className="mt-2 text-sm text-[var(--muted)]">Ajuste filtros ou busque por outro autor, gênero ou demografia.</p>
            </div>
          )}

          <button
            type="button"
            className="premium-ring inline-flex min-h-12 items-center gap-2 rounded-lg border border-[var(--border)] px-4 text-sm font-bold transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Abrir mapa completo de tendências
            <ArrowUpRight size={16} />
          </button>
        </section>
      </div>
    </section>
  );
}
