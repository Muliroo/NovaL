import {
  Bell,
  BookOpen,
  Compass,
  Home,
  Library,
  LogIn,
  LogOut,
  Menu,
  Search,
  ShieldCheck,
  UserRound,
  X
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle.jsx";

const navItems = [
  { id: "home", label: "Início", icon: Home },
  { id: "explore", label: "Explorar", icon: Compass },
  { id: "library", label: "Biblioteca", icon: Library },
  { id: "profile", label: "Perfil", icon: UserRound },
  { id: "admin", label: "Admin", icon: ShieldCheck }
];

export function Navbar({
  activeView,
  onNavigate,
  theme,
  onThemeToggle,
  sidebarOpen,
  onSidebarToggle,
  user,
  onAuthOpen,
  onLogout
}) {
  const canSeeAdmin = user?.role === "master" || user?.role === "admin";
  const visibleNavItems = navItems.filter((item) => item.id !== "admin" || canSeeAdmin);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--surface-soft)] backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onSidebarToggle}
            className="premium-ring flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text)] transition duration-200 hover:border-[var(--accent)] lg:hidden"
            aria-label={sidebarOpen ? "Fechar menu" : "Abrir menu"}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="premium-ring flex min-h-11 items-center gap-2 rounded-lg px-1 text-left"
            aria-label="Ir para o início"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--text)] text-[var(--bg)]">
              <BookOpen size={18} />
            </span>
            <span>
              <span className="block font-display text-xl font-semibold leading-none">
                NovaL
              </span>
              <span className="hidden text-xs text-[var(--muted)] sm:block">
                Mangás premium para o Brasil
              </span>
            </span>
          </button>

          <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {visibleNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className={`premium-ring flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-medium transition duration-200 ease-luxury ${
                    isActive
                      ? "bg-[var(--accent)] text-black"
                      : "text-[var(--muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon size={17} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => onNavigate("explore")}
            className="premium-ring ml-auto hidden min-h-11 min-w-11 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] sm:flex lg:ml-2"
            aria-label="Abrir busca"
          >
            <Search size={19} />
          </button>
          <button
            type="button"
            onClick={() => onNavigate("profile")}
            className="premium-ring hidden min-h-11 min-w-11 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] sm:flex"
            aria-label="Abrir notificações"
          >
            <Bell size={19} />
          </button>
          {user ? (
            <button
              type="button"
              onClick={onLogout}
              className="premium-ring hidden min-h-11 items-center gap-2 rounded-lg border border-[var(--border)] px-3 text-sm font-semibold text-[var(--muted)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] sm:flex"
              aria-label="Sair da conta"
            >
              <LogOut size={17} />
              {user.role === "admin" ? "Admin" : user.name}
            </button>
          ) : (
            <button
              type="button"
              onClick={onAuthOpen}
              className="premium-ring hidden min-h-11 items-center gap-2 rounded-lg bg-[var(--accent)] px-4 text-sm font-bold text-black transition duration-200 hover:bg-[var(--accent-strong)] hover:text-white sm:flex"
            >
              <LogIn size={17} />
              Entrar
            </button>
          )}
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        </div>
      </header>

      <aside
        className={`fixed bottom-0 left-0 top-16 z-40 w-72 border-r border-[var(--border)] bg-[var(--surface-soft)] p-4 backdrop-blur-2xl transition-transform duration-300 ease-luxury lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Menu lateral"
      >
        <div className="space-y-2">
          {visibleNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`premium-ring flex min-h-11 w-full items-center gap-3 rounded-lg px-4 text-left text-sm font-medium transition duration-200 ${
                  isActive
                    ? "bg-[var(--accent)] text-black"
                    : "text-[var(--muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </div>
        <div className="mt-5 border-t border-[var(--border)] pt-4">
          {user ? (
            <button
              type="button"
              onClick={onLogout}
              className="premium-ring flex min-h-11 w-full items-center gap-3 rounded-lg px-4 text-left text-sm font-medium text-[var(--muted)] transition duration-200 hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
            >
              <LogOut size={18} />
              Sair de {user.name}
            </button>
          ) : (
            <button
              type="button"
              onClick={onAuthOpen}
              className="premium-ring flex min-h-11 w-full items-center gap-3 rounded-lg bg-[var(--accent)] px-4 text-left text-sm font-bold text-black"
            >
              <LogIn size={18} />
              Entrar
            </button>
          )}
        </div>
      </aside>

      <nav
        className="fixed inset-x-3 bottom-3 z-50 grid gap-1 rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-1 shadow-luxury backdrop-blur-2xl lg:hidden"
        style={{ gridTemplateColumns: `repeat(${visibleNavItems.length}, minmax(0, 1fr))` }}
        aria-label="Navegação móvel"
      >
        {visibleNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`premium-ring flex min-h-12 flex-col items-center justify-center gap-1 rounded-lg text-[10px] font-medium transition duration-200 ${
                isActive
                  ? "bg-[var(--accent)] text-black"
                  : "text-[var(--muted)] hover:text-[var(--text)]"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon size={17} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </>
  );
}
