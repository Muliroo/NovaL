import { Search, SlidersHorizontal, X } from "lucide-react";

const demographics = ["Todos", "Shonen", "Seinen", "Shojo", "Josei"];
const statusOptions = ["Todos", "Em publicação", "Completo", "Hiato"];

export function FiltersPanel({ filters, onChange, genres, authors, resultCount }) {
  const setField = (field, value) => onChange({ ...filters, [field]: value });
  const clearFilters = () =>
    onChange({ query: "", genre: "Todos", demographic: "Todos", author: "Todos", status: "Todos" });

  return (
    <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm sm:p-5" aria-labelledby="filters-heading">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
            <SlidersHorizontal size={17} />
            Filtro avançado
          </p>
          <h2 id="filters-heading" className="mt-1 font-display text-2xl font-semibold">
            Encontre a próxima obsessão
          </h2>
        </div>
        <button
          type="button"
          onClick={clearFilters}
          className="premium-ring inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-[var(--muted)] transition duration-200 hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
        >
          <X size={16} />
          Limpar
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-[1.25fr_repeat(4,1fr)]">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[var(--muted)]">Busca</span>
          <span className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" size={18} />
            <input
              value={filters.query}
              onChange={(event) => setField("query", event.target.value)}
              className="premium-ring min-h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] py-3 pl-10 pr-3 text-base text-[var(--text)] outline-none transition duration-200 focus:border-[var(--accent)]"
              placeholder="Título, autor ou atmosfera"
              type="search"
            />
          </span>
        </label>

        <Select label="Gênero" value={filters.genre} onChange={(value) => setField("genre", value)} options={["Todos", ...genres]} />
        <Select label="Demografia" value={filters.demographic} onChange={(value) => setField("demographic", value)} options={demographics} />
        <Select label="Autor" value={filters.author} onChange={(value) => setField("author", value)} options={["Todos", ...authors]} />
        <Select label="Status" value={filters.status} onChange={(value) => setField("status", value)} options={statusOptions} />
      </div>

      <p className="mt-4 text-sm text-[var(--muted)]" aria-live="polite">
        {resultCount} títulos encontrados com estes critérios.
      </p>
    </section>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[var(--muted)]">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="premium-ring min-h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-3 text-base text-[var(--text)] outline-none transition duration-200 focus:border-[var(--accent)]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
