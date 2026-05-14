import { ArrowRight, BookOpen, Clock, Play, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export function HeroCarousel({ mangas, onRead }) {
  const featured = useMemo(() => mangas.filter((manga) => manga.trending), [mangas]);
  const [active, setActive] = useState(0);
  const current = featured[active] ?? featured[0] ?? mangas[0];

  useEffect(() => {
    if (featured.length <= 1) return undefined;
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % featured.length);
    }, 6200);
    return () => window.clearInterval(timer);
  }, [featured.length]);

  if (!current) return null;

  return (
    <section className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
      <motion.div
        key={`progress-${current.id}`}
        className="absolute left-0 top-0 z-20 h-1 bg-[var(--accent)]"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 6.2, ease: "linear" }}
      />
      <motion.div
        key={`image-${current.id}`}
        initial={{ opacity: 0.3, scale: 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src={current.hero}
          alt={`Arte panorâmica de ${current.title}`}
          className="h-full w-full object-cover"
          width="1800"
          height="1000"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/66 to-black/18" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.16),transparent_32%)]" />
      </motion.div>

      <div className="relative grid min-h-[590px] content-end gap-8 p-5 sm:p-8 lg:min-h-[620px] lg:grid-cols-[1.04fr_0.96fr] lg:content-center lg:p-10 xl:p-12">
        <div className="max-w-3xl self-end lg:self-center">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-lg border border-white/22 bg-white/12 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
              Em alta no Brasil
            </span>
            <span className="flex items-center gap-1 rounded-lg border border-white/22 bg-black/32 px-3 py-1 text-sm font-medium text-white backdrop-blur">
              <Star size={14} fill="currentColor" />
              {current.rating}
            </span>
            <span className="rounded-lg border border-white/22 bg-black/32 px-3 py-1 text-sm font-medium text-white backdrop-blur">
              {current.demographic}
            </span>
          </div>

          <motion.div
            key={`copy-${current.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              {current.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/82 sm:text-lg">
              {current.subtitle}
            </p>
          </motion.div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <motion.button
              type="button"
              onClick={() => onRead(current)}
              data-testid="hero-read-now"
              className="premium-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 text-sm font-bold text-black transition duration-200 hover:bg-[var(--accent-strong)] hover:text-white"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.975 }}
            >
              <Play size={18} fill="currentColor" />
              Ler agora
            </motion.button>
            <motion.button
              type="button"
              className="premium-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/22 bg-white/12 px-5 text-sm font-bold text-white backdrop-blur transition duration-200 hover:bg-white/20"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.975 }}
            >
              <BookOpen size={18} />
              Adicionar à lista
            </motion.button>
          </div>
        </div>

        <div className="hidden self-end lg:block">
          <div className="grid grid-cols-3 gap-3">
            {featured.map((manga, index) => (
                <button
                  key={manga.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`premium-ring overflow-hidden rounded-lg border transition duration-200 ${
                    index === active
                      ? "border-[var(--accent)]"
                    : "border-white/18 opacity-75 hover:opacity-100"
                  }`}
                  aria-label={`Destacar ${manga.title}`}
                >
                <img
                  src={manga.cover}
                  alt=""
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                  width="300"
                  height="400"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/14 bg-black/38 px-5 py-4 backdrop-blur sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 text-white sm:flex-row sm:items-center sm:justify-between">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {current.newChapter}
            </span>
            <span>{current.chapters} capítulos</span>
            <span>{current.status}</span>
          </div>
          <button
            type="button"
            onClick={() => onRead(current)}
            data-testid="hero-reader-open"
            className="premium-ring inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/12"
          >
            Abrir leitor premium
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
