import { ChevronRight } from "lucide-react";
import { MangaCard } from "./MangaCard.jsx";

export function ContentRow({ title, eyebrow, items, onRead }) {
  if (!items.length) return null;
  const headingId = `${title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}-heading`;

  return (
    <section className="space-y-4" aria-labelledby={headingId}>
      <div className="flex items-end justify-between gap-4">
        <div>
          {eyebrow ? (
            <p className="text-sm font-semibold text-[var(--accent)]">{eyebrow}</p>
          ) : null}
          <h2 id={headingId} className="font-display text-2xl font-semibold sm:text-3xl">
            {title}
          </h2>
        </div>
        <button
          type="button"
          className="premium-ring hidden min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-[var(--muted)] transition duration-200 hover:bg-[var(--accent-soft)] hover:text-[var(--text)] sm:flex"
        >
          Ver tudo
          <ChevronRight size={16} />
        </button>
      </div>
      <div className="scrollbar-luxury flex gap-4 overflow-x-auto pb-3">
        {items.map((manga, index) => (
          <MangaCard key={manga.id} manga={manga} index={index} onRead={onRead} />
        ))}
      </div>
    </section>
  );
}
