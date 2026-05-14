import { Bell, Bookmark, Clock3, Crown, LockKeyhole, ShieldCheck, UserRound } from "lucide-react";
import { profile } from "../data/mangas.js";

export function ProfilePanel({ user, onLoginRequest }) {
  if (!user) {
    return (
      <section className="grid min-h-[68dvh] place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 text-center">
        <div className="max-w-md">
          <LockKeyhole className="mx-auto text-[var(--accent)]" size={34} />
          <h1 className="mt-5 font-display text-4xl font-semibold">Perfil sob medida</h1>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            Entre para ver histórico, favoritos, notificações e preferências de leitura.
          </p>
          <button
            type="button"
            onClick={onLoginRequest}
            className="premium-ring mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--accent)] px-5 text-sm font-bold text-black transition duration-200 hover:bg-[var(--accent-strong)] hover:text-white"
          >
            Entrar na NovaL
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]" aria-labelledby="profile-heading">
      <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-lg bg-[var(--accent)] text-black">
            {user.role === "admin" ? <ShieldCheck size={28} /> : <UserRound size={28} />}
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--accent)]">Área do usuário</p>
            <h2 id="profile-heading" className="font-display text-3xl font-semibold">
              {user.name}
            </h2>
            <p className="mt-1 text-sm text-[var(--muted)]">{user.email}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Metric icon={Crown} label="Plano" value={user.plan ?? profile.plan} />
          <Metric icon={Clock3} label="Horas lidas" value={`${profile.readingHours}h`} />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <ListBlock icon={Clock3} title="Histórico" items={profile.history} />
        <ListBlock icon={Bookmark} title="Favoritos" items={profile.favorites} />
        <ListBlock icon={Bell} title="Notificações" items={profile.notifications} />
      </div>
    </section>
  );
}

function Metric({ icon: Icon, label, value }) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] p-4">
      <Icon className="mb-3 text-[var(--accent)]" size={20} />
      <p className="text-sm text-[var(--muted)]">{label}</p>
      <p className="mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}

function ListBlock({ icon: Icon, title, items }) {
  return (
    <article className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
      <h3 className="mb-4 flex items-center gap-2 text-base font-semibold">
        <Icon size={18} className="text-[var(--accent)]" />
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="rounded-lg bg-[var(--accent-soft)] p-3 text-sm leading-5 text-[var(--text)]">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
