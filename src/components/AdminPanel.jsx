import {
  BarChart3,
  CalendarClock,
  CheckCircle2,
  LockKeyhole,
  Plus,
  ShieldCheck,
  Sparkles,
  UploadCloud
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const queue = [
  "Revisar metadados de Cidade Lunar",
  "Aprovar capa alternativa de Neon Samurai",
  "Agendar push de Aurora Katana"
];

export function AdminPanel({ user, mangas, onCreateManga, onLoginRequest }) {
  const [draft, setDraft] = useState({
    title: "Tokyo Atlântico",
    author: "Bia Nakamura",
    demographic: "Seinen",
    status: "Em publicação"
  });

  const canViewAdmin = user?.role === "master" || user?.role === "admin";

  if (!canViewAdmin) {
    return (
      <section className="grid min-h-[68dvh] place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 text-center">
        <div className="max-w-md">
          <LockKeyhole className="mx-auto text-[var(--accent)]" size={34} />
          <h1 className="mt-5 font-display text-4xl font-semibold">Admin restrito</h1>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            O backoffice existe no protótipo, mas só aparece para contas com permissão administrativa.
          </p>
          <button
            type="button"
            onClick={onLoginRequest}
            className="premium-ring mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 text-sm font-bold text-black transition duration-200 hover:bg-[var(--accent-strong)] hover:text-white"
          >
            <ShieldCheck size={18} />
            Entrar
          </button>
        </div>
      </section>
    );
  }

  const submit = (event) => {
    event.preventDefault();
    onCreateManga({
      ...draft,
      id: draft.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      subtitle: "Novo título em validação editorial no Studio NovaL.",
      genres: ["Sci-fi", "Drama"],
      rating: 0,
      progress: 0,
      chapters: 1,
      newChapter: "Cap. 1 em revisão",
      weekRelease: true,
      recommended: false,
      trending: false,
      color: "#00BFEA",
      cover: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=90",
      hero: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=1800&q=90",
      pages: [
        "https://placehold.co/900x1320/050505/F0F8FF/png?text=Tokyo+Atlantico%0APagina+01",
        "https://placehold.co/900x1320/121212/FFFFFF/png?text=Tokyo+Atlantico%0APagina+02"
      ]
    });
  };

  return (
    <section className="space-y-6" aria-labelledby="admin-title">
      <div className="grid gap-5 lg:grid-cols-[1fr_0.74fr]">
        <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="text-sm font-semibold text-[var(--accent)]">Backoffice Studio</p>
          <h1 id="admin-title" className="mt-2 max-w-3xl font-display text-5xl font-semibold leading-none sm:text-6xl">
            Controle editorial com pulso de streaming
          </h1>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <AdminMetric icon={BarChart3} label="Leitores ativos" value="42.8k" />
            <AdminMetric icon={Sparkles} label="Curadoria IA" value="94%" />
            <AdminMetric icon={CalendarClock} label="Capítulos na fila" value="18" />
          </div>
        </div>

        <form onSubmit={submit} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Plus size={19} className="text-[var(--accent)]" />
            Novo mangá
          </h2>
          <div className="mt-4 space-y-3">
            {[
              ["title", "Título"],
              ["author", "Autor"],
              ["demographic", "Demografia"],
              ["status", "Status"]
            ].map(([field, label]) => (
              <label key={field} className="block">
                <span className="mb-2 block text-sm text-[var(--muted)]">{label}</span>
                <input
                  value={draft[field]}
                  onChange={(event) => setDraft({ ...draft, [field]: event.target.value })}
                  className="premium-ring min-h-11 w-full rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-3 outline-none focus:border-[var(--accent)]"
                />
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="premium-ring mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-4 text-sm font-bold text-black transition duration-200 hover:bg-[var(--accent-strong)] hover:text-white"
          >
            <UploadCloud size={18} />
            Publicar rascunho
          </button>
        </form>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5" aria-labelledby="catalog-admin">
          <h2 id="catalog-admin" className="font-display text-3xl font-semibold">Catálogo</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[620px] border-separate border-spacing-y-2 text-left text-sm">
              <thead className="text-[var(--muted)]">
                <tr>
                  <th className="px-3 py-2 font-medium">Título</th>
                  <th className="px-3 py-2 font-medium">Demografia</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                  <th className="px-3 py-2 font-medium">Capítulos</th>
                  <th className="px-3 py-2 font-medium">Nota</th>
                </tr>
              </thead>
              <tbody>
                {mangas.map((manga, index) => (
                  <motion.tr
                    key={manga.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.025, duration: 0.22 }}
                    className="bg-[var(--surface-strong)]"
                  >
                    <td className="rounded-l-lg px-3 py-3 font-semibold">{manga.title}</td>
                    <td className="px-3 py-3 text-[var(--muted)]">{manga.demographic}</td>
                    <td className="px-3 py-3 text-[var(--muted)]">{manga.status}</td>
                    <td className="px-3 py-3 text-[var(--muted)]">{manga.chapters}</td>
                    <td className="rounded-r-lg px-3 py-3 text-[var(--accent)]">{manga.rating || "Novo"}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5" aria-labelledby="queue-admin">
          <h2 id="queue-admin" className="font-display text-3xl font-semibold">Fila editorial</h2>
          <div className="mt-5 space-y-3">
            {queue.map((item) => (
              <article key={item} className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                <CheckCircle2 className="text-[var(--accent)]" size={19} />
                <p className="text-sm font-medium">{item}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

function AdminMetric({ icon: Icon, label, value }) {
  return (
    <article className="rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] p-4">
      <Icon className="text-[var(--accent)]" size={20} />
      <p className="mt-4 text-sm text-[var(--muted)]">{label}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </article>
  );
}
