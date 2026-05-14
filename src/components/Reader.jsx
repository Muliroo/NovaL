import {
  ArrowLeft,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Rows3,
  Star
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export function Reader({ manga, onBack }) {
  const [mode, setMode] = useState("vertical");
  const [pageIndex, setPageIndex] = useState(0);
  const [immersive, setImmersive] = useState(false);
  const pages = useMemo(() => manga?.pages ?? [], [manga]);

  useEffect(() => {
    setPageIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [manga?.id]);

  useEffect(() => {
    pages.slice(0, 3).forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, [pages]);

  useEffect(() => {
    if (mode !== "book") return;
    [pages[pageIndex - 1], pages[pageIndex + 1]].filter(Boolean).forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, [mode, pageIndex, pages]);

  if (!manga) return null;

  const nextPage = () => setPageIndex((index) => Math.min(index + 1, pages.length - 1));
  const previousPage = () => setPageIndex((index) => Math.max(index - 1, 0));

  return (
    <main id="main-content" className={immersive ? "lg:pl-0" : "lg:pl-72"}>
      <section className="min-h-dvh px-4 pb-24 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="sticky top-20 z-30 mb-5 rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-3 backdrop-blur-2xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onBack}
                  className="premium-ring flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[var(--border)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label="Voltar para a página inicial"
                >
                  <ArrowLeft size={19} />
                </button>
                <div>
                  <p className="text-sm font-semibold text-[var(--accent)]">Leitor Premium</p>
                  <h1 className="font-display text-2xl font-semibold">{manga.title}</h1>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <SegmentedButton
                  active={mode === "vertical"}
                  onClick={() => setMode("vertical")}
                  icon={Rows3}
                  label="Vertical"
                />
                <SegmentedButton
                  active={mode === "book"}
                  onClick={() => setMode("book")}
                  icon={BookOpen}
                  label="Livro"
                />
                <button
                  type="button"
                  onClick={() => setImmersive((value) => !value)}
                  className="premium-ring flex min-h-11 items-center gap-2 rounded-lg border border-[var(--border)] px-3 text-sm font-semibold transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {immersive ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                  {immersive ? "Sair" : "Imersivo"}
                </button>
              </div>
            </div>
          </div>

          <article className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            <header className="grid gap-5 border-b border-[var(--border)] p-5 md:grid-cols-[140px_1fr]">
              <img
                src={manga.cover}
                alt={`Capa de ${manga.title}`}
                className="aspect-[3/4] w-28 rounded-lg object-cover md:w-full"
                width="280"
                height="370"
              />
              <div className="self-center">
                <div className="mb-3 flex flex-wrap gap-2">
                  {manga.genres.map((genre) => (
                    <span key={genre} className="rounded-lg bg-[var(--accent-soft)] px-3 py-1 text-sm font-medium text-[var(--text)]">
                      {genre}
                    </span>
                  ))}
                </div>
                <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">{manga.subtitle}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
                  <span className="flex items-center gap-1">
                    <Star size={15} fill="currentColor" className="text-[var(--accent)]" />
                    {manga.rating}
                  </span>
                  <span>{manga.author}</span>
                  <span>{manga.newChapter}</span>
                </div>
              </div>
            </header>

            {mode === "vertical" ? (
              <div className="mx-auto max-w-4xl space-y-4 bg-black p-2 sm:p-4">
                {pages.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${manga.title}, página ${index + 1}`}
                    className="reader-image mx-auto w-full rounded-lg"
                    width="900"
                    height="1320"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-black p-3 sm:p-6">
                <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={previousPage}
                    disabled={pageIndex === 0}
                    className="premium-ring hidden min-h-12 min-w-12 items-center justify-center rounded-lg bg-white/10 text-white transition duration-200 hover:bg-white/18 disabled:cursor-not-allowed disabled:opacity-40 sm:flex"
                    aria-label="Página anterior"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <AnimatePresence mode="wait">
                    <motion.img
                      key={pages[pageIndex]}
                      src={pages[pageIndex]}
                      alt={`${manga.title}, página ${pageIndex + 1}`}
                      className="reader-image max-h-[78dvh] w-full max-w-[820px] rounded-lg object-contain"
                      width="900"
                      height="1320"
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -18 }}
                      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={nextPage}
                    disabled={pageIndex === pages.length - 1}
                    className="premium-ring hidden min-h-12 min-w-12 items-center justify-center rounded-lg bg-white/10 text-white transition duration-200 hover:bg-white/18 disabled:cursor-not-allowed disabled:opacity-40 sm:flex"
                    aria-label="Próxima página"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                <div className="mx-auto mt-4 flex max-w-[820px] items-center justify-between gap-2 text-white">
                  <button
                    type="button"
                    onClick={previousPage}
                    disabled={pageIndex === 0}
                    className="premium-ring flex min-h-11 items-center gap-2 rounded-lg bg-white/10 px-3 text-sm font-semibold transition duration-200 hover:bg-white/18 disabled:cursor-not-allowed disabled:opacity-40 sm:hidden"
                  >
                    <ChevronLeft size={16} />
                    Anterior
                  </button>
                  <p className="text-sm font-medium">
                    Página {pageIndex + 1} de {pages.length}
                  </p>
                  <button
                    type="button"
                    onClick={nextPage}
                    disabled={pageIndex === pages.length - 1}
                    className="premium-ring flex min-h-11 items-center gap-2 rounded-lg bg-white/10 px-3 text-sm font-semibold transition duration-200 hover:bg-white/18 disabled:cursor-not-allowed disabled:opacity-40 sm:hidden"
                  >
                    Próxima
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </article>
        </div>
      </section>
    </main>
  );
}

function SegmentedButton({ active, icon: Icon, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`premium-ring flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold transition duration-200 ${
        active
          ? "bg-[var(--accent)] text-black"
          : "border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--text)]"
      }`}
      aria-pressed={active}
    >
      <Icon size={16} />
      {label}
    </button>
  );
}
