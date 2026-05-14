import { BookOpen, CheckCircle2, Play, Star } from "lucide-react";
import { motion } from "framer-motion";

export function MangaCard({ manga, index = 0, onRead, compact = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.34, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}
      className={`magnetic-card group relative min-w-[170px] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm transition-colors duration-300 hover:border-[var(--accent)] hover:shadow-[var(--shadow)] ${
        compact ? "sm:min-w-[190px]" : "sm:min-w-[220px]"
      }`}
    >
      <button
        type="button"
        onClick={() => onRead(manga)}
        data-testid={`manga-card-${manga.id}`}
        className="premium-ring block w-full text-left"
        aria-label={`Ler ${manga.title}`}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-[var(--surface-strong)]">
          <img
            src={manga.cover}
            alt={`Arte de capa de ${manga.title}`}
            className="h-full w-full object-cover transition duration-500 ease-luxury group-hover:scale-105"
            loading="lazy"
            width="720"
            height="960"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-lg bg-black/58 px-2 py-1 text-xs font-semibold text-white backdrop-blur">
            <Star size={13} fill="currentColor" />
            {manga.rating}
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <div className="mb-2 h-1 overflow-hidden rounded-lg bg-white/24" aria-hidden="true">
              <span
                className="block h-full rounded-lg bg-[var(--accent)]"
                style={{ width: `${manga.progress}%` }}
              />
            </div>
            <p className="text-xs font-medium text-white/88">{manga.progress}% lido</p>
          </div>
        </div>
        <div className="space-y-3 p-3">
          <div>
            <h3 className="line-clamp-1 text-base font-semibold text-[var(--text)]">
              {manga.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm leading-5 text-[var(--muted)]">
              {manga.subtitle}
            </p>
          </div>
          <div className="flex items-center justify-between gap-2 text-xs text-[var(--muted)]">
            <span className="flex items-center gap-1">
              <BookOpen size={14} />
              {manga.chapters} caps.
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={14} />
              {manga.status}
            </span>
          </div>
          <span className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[var(--accent)] px-3 text-sm font-semibold text-black transition duration-200 group-hover:bg-[var(--accent-strong)] group-hover:text-white">
            <Play size={15} fill="currentColor" />
            Continuar
          </span>
        </div>
      </button>
    </motion.article>
  );
}
