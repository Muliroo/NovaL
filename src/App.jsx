import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Crown,
  Eye,
  Facebook,
  Gamepad2,
  Heart,
  Instagram,
  LogOut,
  Menu,
  MonitorSmartphone,
  Search,
  Shield,
  ShieldCheck,
  Star,
  Twitter,
  UserPlus,
  X
} from "lucide-react";
import { useMemo, useState } from "react";

const MASTER_ADMIN = {
  id: "master-admin",
  name: "Master NovaL",
  email: "master@noval.com",
  passwordHash: "74911394",
  role: "master"
};

const initialUsers = [
  MASTER_ADMIN,
  {
    id: "reader-demo",
    name: "Leitor Demo",
    email: "leitor@noval.com",
    passwordHash: "aecddfc9",
    role: "leitor"
  },
  {
    id: "admin-demo",
    name: "Curadoria NovaL",
    email: "admin@noval.com",
    passwordHash: "34c83614",
    role: "admin"
  }
];

const heroSlides = [
  {
    id: "solo-leveling",
    title: "SOLO LEVELING",
    label: "CAÇADOR. SOMBRA. ASCENSÃO.",
    copy: "Sung Jin-Woo vai do caçador mais fraco a uma força capaz de dobrar o mundo ao redor dele.",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/105398-4UrEhdqZukrg.jpg"
  },
  {
    id: "jujutsu-kaisen",
    title: "JUJUTSU KAISEN",
    label: "MALDIÇÕES. CAOS. IMPACTO.",
    copy: "Uma batalha sobrenatural brutal, com ritmo afiado, personagens icônicos e energia constante.",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/101517-FrJtb3Th3HtF.jpg"
  },
  {
    id: "berserk",
    title: "BERSERK",
    label: "SOMBRIO. ÉPICO. IMPLACÁVEL.",
    copy: "Uma jornada lendária de fantasia sombria marcada por tragédia, fúria, sobrevivência e arte inesquecível.",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/30002-3TuoSMl20fUX.jpg"
  }
];

const popularMangas = [
  {
    title: "Solo Leveling",
    chapter: "Cap. 201",
    rating: "8.4",
    rank: "01",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105398-b673Vt5ZSuz3.jpg"
  },
  {
    title: "Jujutsu Kaisen",
    chapter: "Cap. 272",
    rating: "8.0",
    rank: "02",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx101517-H3TdM3g5ZUe9.jpg"
  },
  {
    title: "One Piece",
    chapter: "Em andamento",
    rating: "9.1",
    rank: "03",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-BeslEMqiPhlk.jpg"
  },
  {
    title: "Chainsaw Man",
    chapter: "Cap. 232",
    rating: "8.5",
    rank: "04",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105778-euxXZEIfDY2u.png"
  },
  {
    title: "Tokyo Ghoul",
    chapter: "Cap. 144",
    rating: "8.4",
    rank: "05",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx63327-glC9cDxYBja9.png"
  },
  {
    title: "Berserk",
    chapter: "Em andamento",
    rating: "9.2",
    rank: "06",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30002-Cul4OeN7bYtn.jpg"
  }
];

const releases = [
  {
    title: "Kaiju No. 8",
    chapter: "Cap. 129",
    rating: "7.5",
    badge: "NOVO",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx120760-MtXvMgujLBpe.jpg"
  },
  {
    title: "Wind Breaker",
    chapter: "Em andamento",
    rating: "8.0",
    badge: "NOVO",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx135083-TQbNFWKGJJHW.jpg"
  },
  {
    title: "Blue Lock",
    chapter: "Em andamento",
    rating: "8.2",
    badge: "NOVO",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx106130-yPNeuSu75ey1.jpg"
  },
  {
    title: "Dandadan",
    chapter: "Em andamento",
    rating: "8.2",
    badge: "NOVO",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx132029-prGF4gePdSKv.jpg"
  },
  {
    title: "Tokyo Revengers",
    chapter: "Cap. 279",
    rating: "7.4",
    badge: "NOVO",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx102988-OoVJxQCH6fbR.jpg"
  }
];

const allMangas = [
  ...popularMangas,
  ...releases,
  {
    title: "Vagabond",
    chapter: "Cap. 327",
    rating: "9.1",
    rank: "12",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30656-9mW113O7rDnA.png"
  },
  {
    title: "Demon Slayer",
    chapter: "Cap. 207",
    rating: "7.9",
    rank: "13",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx87216-c9bSNVD10UuD.png"
  },
  {
    title: "Attack on Titan",
    chapter: "Cap. 141",
    rating: "8.4",
    rank: "14",
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx53390-1RsuABC34P9D.jpg"
  }
].filter((item, index, array) => array.findIndex((other) => other.title === item.title) === index);

const genres = [
  {
    name: "Ação",
    count: "1.234+",
    icon: Gamepad2,
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/101517-FrJtb3Th3HtF.jpg"
  },
  {
    name: "Aventura",
    count: "987+",
    icon: ArrowRight,
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/30013-hbbRZqC5MjYh.jpg"
  },
  {
    name: "Fantasia",
    count: "1.476+",
    icon: Shield,
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/30002-3TuoSMl20fUX.jpg"
  },
  {
    name: "Romance",
    count: "856+",
    icon: Heart,
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/132029-V1x9JAh3G8QK.jpg"
  },
  {
    name: "Terror",
    count: "689+",
    icon: X,
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/63327-uaFaG1HAJ0tK.jpg"
  },
  {
    name: "Esportes",
    count: "1.019+",
    icon: Star,
    image: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/106130-4UbnMTU80zur.jpg"
  }
];

const benefits = [
  ["Capas reais", "Catálogo visual usando metadados reais de AniList/MyAnimeList.", BookOpen],
  ["Atualizações rápidas", "Estrutura pronta para lançamentos, destaques e capítulos novos.", Clock3],
  ["Multi-dispositivo", "Experiência responsiva para desktop, tablet e celular.", MonitorSmartphone],
  ["Sem anúncios", "Protótipo local focado em leitura, descoberta e performance.", Eye]
];

export default function App() {
  const [activeView, setActiveView] = useState("home");
  const [activeHero, setActiveHero] = useState(0);
  const [query, setQuery] = useState("");
  const [authOpen, setAuthOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");
  const [users, setUsers] = useState(() => readUsers());
  const [currentUser, setCurrentUser] = useState(() => readCurrentUser());
  const slide = heroSlides[activeHero];

  const filteredCatalog = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return allMangas;
    return allMangas.filter((item) => item.title.toLowerCase().includes(value));
  }, [query]);

  const openAuth = (mode = "signin") => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const navigate = (view, targetId) => {
    setActiveView(view);
    setMenuOpen(false);
    window.setTimeout(() => {
      if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  const handleAuthSuccess = (user, nextUsers = users) => {
    setUsers(nextUsers);
    persistUsers(nextUsers);
    setCurrentUser(user);
    localStorage.setItem("noval-current-user", user.id);
    setAuthOpen(false);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("noval-current-user");
    setActiveView("home");
  };

  const updateUserRole = (userId, role) => {
    const nextUsers = users.map((user) => (user.id === userId ? { ...user, role } : user));
    setUsers(nextUsers);
    persistUsers(nextUsers);
    if (currentUser?.id === userId) {
      const updatedCurrentUser = nextUsers.find((user) => user.id === userId);
      setCurrentUser(updatedCurrentUser);
    }
  };

  return (
    <div className="min-h-dvh bg-[#030607] text-white">
      <Header
        activeView={activeView}
        onNavigate={navigate}
        query={query}
        setQuery={setQuery}
        onSignIn={() => openAuth("signin")}
        onSignUp={() => openAuth("signup")}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        currentUser={currentUser}
        onLogout={logout}
      />

      <main id="main-content">
        {activeView === "home" ? (
          <HomePage
            slide={slide}
            activeHero={activeHero}
            setActiveHero={setActiveHero}
            onSignIn={() => openAuth("signin")}
          />
        ) : null}

        {activeView === "biblioteca" ? (
          <LibraryPage mangas={filteredCatalog} popular={popularMangas} query={query} />
        ) : null}

        {activeView === "admin" ? (
          <AdminPage
            currentUser={currentUser}
            users={users}
            onOpenAuth={() => openAuth("signin")}
            onUpdateRole={updateUserRole}
          />
        ) : null}
      </main>

      <SiteFooter onNavigate={navigate} />
      <AuthModal
        open={authOpen}
        mode={authMode}
        setMode={setAuthMode}
        onClose={() => setAuthOpen(false)}
        users={users}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}

function HomePage({ slide, activeHero, setActiveHero, onSignIn }) {
  return (
    <>
      <Hero slide={slide} activeHero={activeHero} setActiveHero={setActiveHero} onSignIn={onSignIn} />

      <Section title="LANÇAMENTOS" action="Na Home" id="lancamentos">
        <CardGrid>
          {releases.map((item, index) => (
            <MangaCard key={item.title} item={item} index={index} />
          ))}
        </CardGrid>
      </Section>

      <Section title="GÊNEROS" action="No Início" id="generos">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {genres.map((genre, index) => (
            <GenreCard key={genre.name} genre={genre} index={index} />
          ))}
        </div>
      </Section>

      <WhyChoose />
    </>
  );
}

function LibraryPage({ mangas, popular, query }) {
  const [activeCategory, setActiveCategory] = useState("todos");
  const searchValue = query.trim().toLowerCase();
  const filterByQuery = (items) =>
    searchValue ? items.filter((item) => item.title.toLowerCase().includes(searchValue)) : items;
  const pickTitles = (titles) => allMangas.filter((item) => titles.includes(item.title));
  const categories = [
    {
      id: "todos",
      label: "Todos os mangás",
      copy: "Catálogo completo",
      items: mangas
    },
    {
      id: "populares",
      label: "Populares",
      copy: "Mais lidos agora",
      items: filterByQuery(popular)
    },
    {
      id: "lancamentos",
      label: "Lançamentos",
      copy: "Capítulos recentes",
      items: filterByQuery(releases)
    },
    {
      id: "acao",
      label: "Ação",
      copy: "Batalha e adrenalina",
      items: filterByQuery(pickTitles(["Solo Leveling", "Jujutsu Kaisen", "Chainsaw Man", "Kaiju No. 8", "Attack on Titan"]))
    },
    {
      id: "fantasia",
      label: "Fantasia",
      copy: "Mundos intensos",
      items: filterByQuery(pickTitles(["Solo Leveling", "One Piece", "Berserk", "Demon Slayer", "Dandadan"]))
    },
    {
      id: "terror",
      label: "Terror",
      copy: "Sombrio e visceral",
      items: filterByQuery(pickTitles(["Tokyo Ghoul", "Berserk", "Chainsaw Man", "Jujutsu Kaisen"]))
    },
    {
      id: "esportes",
      label: "Esportes",
      copy: "Competição premium",
      items: filterByQuery(pickTitles(["Blue Lock", "Wind Breaker"]))
    },
    {
      id: "classicos",
      label: "Clássicos",
      copy: "Essenciais da coleção",
      items: filterByQuery(pickTitles(["Berserk", "Vagabond", "One Piece", "Tokyo Ghoul"]))
    }
  ];
  const selectedCategory = categories.find((category) => category.id === activeCategory) ?? categories[0];

  return (
    <PageShell
      eyebrow="BIBLIOTECA NOVAL"
      title="Catálogo organizado por intenção de leitura"
      copy="A Biblioteca reúne mangás, populares, lançamentos e coleções por gênero em um menu único para explorar sem repetir a Home."
    >
      <div className="grid gap-6 lg:grid-cols-[290px_1fr]">
        <aside className="h-max rounded-md border border-white/10 bg-white/[0.045] p-3 lg:sticky lg:top-24">
          <p className="px-3 pb-3 pt-2 text-xs font-black uppercase tracking-wide text-[#f01422]">Categorias</p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`premium-ring flex min-h-16 items-center justify-between gap-3 rounded-md border px-4 py-3 text-left transition duration-200 ${
                  selectedCategory.id === category.id
                    ? "border-[#f01422] bg-[#f01422] text-white shadow-[0_18px_45px_rgba(240,20,34,0.22)]"
                    : "border-white/8 bg-black/18 text-white/72 hover:border-[#f01422]/70 hover:bg-white/8 hover:text-white"
                }`}
              >
                <span>
                  <span className="block text-sm font-black">{category.label}</span>
                  <span className="mt-1 block text-xs opacity-70">{category.copy}</span>
                </span>
                <span className="rounded-full bg-black/24 px-2 py-1 text-xs font-black">{category.items.length}</span>
              </button>
            ))}
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-col justify-between gap-3 border-b border-white/8 pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#f01422]">{selectedCategory.label}</p>
              <h2 className="mt-2 text-2xl font-black uppercase md:text-4xl">{selectedCategory.copy}</h2>
            </div>
            <span className="text-sm font-bold text-white/56">{selectedCategory.items.length} títulos</span>
          </div>

          {query ? (
            <p className="mb-5 text-sm text-white/58">
              Resultado da busca por <span className="font-bold text-white">"{query}"</span>.
            </p>
          ) : null}

          {selectedCategory.items.length ? (
            <CardGrid>
              {selectedCategory.items.map((item, index) => (
                <MangaCard key={item.title} item={item} index={index} />
              ))}
            </CardGrid>
          ) : (
            <div className="rounded-md border border-white/10 bg-white/[0.045] p-8 text-sm leading-6 text-white/62">
              Nenhum mangá encontrado nesta categoria com a busca atual.
            </div>
          )}
        </div>
      </div>
    </PageShell>
  );
}

function AdminPage({ currentUser, users, onOpenAuth, onUpdateRole }) {
  const canManage = currentUser?.role === "master";
  const canView = currentUser?.role === "master" || currentUser?.role === "admin";

  if (!canView) {
    return (
      <PageShell
        eyebrow="ÁREA SEGURA"
        title="Acesso administrativo restrito"
        copy="Entre com uma conta admin para ver o painel. Apenas o master admin pode promover outros usuários."
      >
        <div className="rounded-md border border-white/10 bg-white/[0.045] p-6">
          <p className="text-sm leading-6 text-white/64">
            Este painel fica invisível para visitantes e leitores. Entre com uma conta autorizada para continuar.
          </p>
          <button
            type="button"
            onClick={onOpenAuth}
            className="premium-ring mt-5 h-12 rounded-md bg-[#f01422] px-5 text-sm font-black text-white"
          >
            Entrar
          </button>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell
      eyebrow="PAINEL ADMIN"
      title={canManage ? "Controle master de permissões" : "Painel administrativo"}
      copy={
        canManage
          ? "O master admin pode transformar leitores em admins e remover permissões administrativas."
          : "Admins podem visualizar usuários, mas só o master pode alterar permissões."
      }
    >
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <AdminMetric icon={Crown} label="Master admin" value="1" />
        <AdminMetric icon={ShieldCheck} label="Admins" value={users.filter((user) => user.role === "admin").length} />
        <AdminMetric icon={UserPlus} label="Contas" value={users.length} />
      </div>

      <div className="overflow-x-auto rounded-md border border-white/10 bg-[#071012]">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-white/[0.045] text-white/54">
            <tr>
              <th className="px-5 py-4 font-bold">Nome</th>
              <th className="px-5 py-4 font-bold">E-mail</th>
              <th className="px-5 py-4 font-bold">Permissão</th>
              <th className="px-5 py-4 font-bold">Ação</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-white/8">
                <td className="px-5 py-4 font-bold text-white">{user.name}</td>
                <td className="px-5 py-4 text-white/62">{user.email}</td>
                <td className="px-5 py-4">
                  <RoleBadge role={user.role} />
                </td>
                <td className="px-5 py-4">
                  {user.role === "master" ? (
                    <span className="text-white/38">Conta master protegida</span>
                  ) : canManage ? (
                    <button
                      type="button"
                      onClick={() => onUpdateRole(user.id, user.role === "admin" ? "leitor" : "admin")}
                      className="premium-ring rounded-md border border-white/12 px-3 py-2 text-xs font-black text-white transition hover:border-[#f01422] hover:text-[#f01422]"
                    >
                      {user.role === "admin" ? "Remover admin" : "Tornar admin"}
                    </button>
                  ) : (
                    <span className="text-white/38">Sem permissão</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}

function Header({
  activeView,
  onNavigate,
  query,
  setQuery,
  onSignIn,
  onSignUp,
  menuOpen,
  setMenuOpen,
  currentUser,
  onLogout
}) {
  const canSeeAdmin = currentUser?.role === "master" || currentUser?.role === "admin";
  const nav = [
    ["home", "Início"],
    ["biblioteca", "Biblioteca"],
    ...(canSeeAdmin ? [["admin", "Admin"]] : [])
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/48 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center gap-6 px-5 md:px-10">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="premium-ring text-2xl font-black uppercase leading-none"
        >
          NOVA<span className="text-[#f01422]">L</span>
        </button>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/86 lg:flex" aria-label="Navegação principal">
          {nav.map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => onNavigate(id)}
              className={`premium-ring py-6 transition duration-200 hover:text-white ${
                activeView === id ? "border-b-2 border-[#f01422] text-white" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <label className="ml-auto hidden h-10 min-w-[280px] items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 text-white/70 xl:flex">
          <span className="sr-only">Buscar mangá</span>
          <input
            value={query}
            onFocus={() => onNavigate("biblioteca")}
            onChange={(event) => setQuery(event.target.value)}
            className="h-full flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/56"
            placeholder="Buscar mangá..."
            type="search"
          />
          <Search size={18} />
        </label>

        {currentUser ? (
          <button
            type="button"
            onClick={onLogout}
            className="premium-ring hidden h-10 items-center gap-2 rounded-md border border-white/10 px-4 text-sm font-bold text-white/78 transition hover:border-[#f01422] hover:text-white md:flex"
          >
            <LogOut size={16} />
            Sair
          </button>
        ) : (
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={onSignIn}
              className="premium-ring h-10 rounded-md bg-[#f01422] px-5 text-sm font-bold text-white shadow-[0_16px_42px_rgba(240,20,34,0.28)] transition duration-200 hover:bg-[#ff3340]"
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={onSignUp}
              className="premium-ring h-10 rounded-md border border-white/12 px-4 text-sm font-bold text-white/78 transition hover:border-[#f01422] hover:text-white"
            >
              Criar conta
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="premium-ring ml-auto grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/8 lg:hidden"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            className="border-t border-white/8 bg-[#080d0f] px-5 py-4 lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            aria-label="Navegação móvel"
          >
            <label className="mb-3 flex h-11 items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 text-white/70">
              <input
                value={query}
                onFocus={() => onNavigate("biblioteca")}
                onChange={(event) => setQuery(event.target.value)}
                className="h-full flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/56"
                placeholder="Buscar mangá..."
                type="search"
              />
              <Search size={18} />
            </label>
            <div className="grid gap-2">
              {nav.map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => onNavigate(id)}
                  className="rounded-md px-3 py-3 text-left text-sm font-semibold text-white/78"
                >
                  {label}
                </button>
              ))}
            </div>
            {currentUser ? (
              <button type="button" onClick={onLogout} className="mt-3 h-11 w-full rounded-md border border-white/12 text-sm font-bold">
                Sair da conta
              </button>
            ) : (
              <div className="mt-3 grid gap-2">
                <button type="button" onClick={onSignIn} className="h-11 w-full rounded-md bg-[#f01422] text-sm font-bold">
                  Entrar
                </button>
                <button type="button" onClick={onSignUp} className="h-11 w-full rounded-md border border-white/12 text-sm font-bold">
                  Criar conta
                </button>
              </div>
            )}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero({ slide, activeHero, setActiveHero, onSignIn }) {
  return (
    <section className="relative min-h-[720px] overflow-hidden border-b border-white/8 pt-16 md:min-h-[760px]">
      <AnimatePresence mode="wait">
        <motion.img
          key={slide.id}
          src={slide.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          initial={{ opacity: 0.45, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_36%,transparent_0,rgba(0,0,0,0.05)_22%,rgba(0,0,0,0.82)_67%,#030607_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/46 to-black/16" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030607] to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-8 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[0.72fr_0.28fr]">
        <motion.div
          className="max-w-2xl self-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 text-sm font-black uppercase text-[#f01422]">{slide.label}</p>
          <h1 className="max-w-2xl text-5xl font-black uppercase leading-[1.08] text-white md:text-7xl">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-white/78">{slide.copy}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.button
              type="button"
              onClick={onSignIn}
              className="premium-ring inline-flex h-14 items-center justify-center gap-4 rounded-md bg-[#f01422] px-7 text-sm font-black text-white shadow-[0_18px_50px_rgba(240,20,34,0.28)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Começar agora
              <ArrowRight size={18} />
            </motion.button>
            <motion.a
              href="#lancamentos"
              className="premium-ring inline-flex h-14 items-center justify-center gap-4 rounded-md border border-white/18 bg-black/26 px-7 text-sm font-bold text-white backdrop-blur-md"
              whileHover={{ scale: 1.03, borderColor: "rgba(240,20,34,0.75)" }}
              whileTap={{ scale: 0.97 }}
            >
              Ver lançamentos
              <Star size={17} />
            </motion.a>
          </div>
          <div className="mt-12 flex gap-3">
            {heroSlides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveHero(index)}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  activeHero === index ? "w-12 bg-[#f01422]" : "w-8 bg-white"
                }`}
                aria-label={`Mostrar destaque ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <div className="hidden items-center justify-center lg:flex">
          <div className="space-y-5">
            {heroSlides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveHero(index)}
                className="group flex items-center gap-4"
                aria-label={`Selecionar destaque ${index + 1}`}
              >
                <span
                  className={`grid h-16 w-16 place-items-center overflow-hidden rounded-full border-2 transition duration-300 ${
                    activeHero === index ? "border-[#f01422]" : "border-white/18 opacity-70"
                  }`}
                >
                  <img src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                </span>
                <span className="text-sm font-bold text-white/70">0{index + 1}</span>
              </button>
            ))}
            <div className="ml-8 h-12 w-px bg-white/34" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden items-center gap-3 text-xs text-white/42 xl:flex">
        Role para baixo
        <span className="grid h-8 w-5 place-items-center rounded-full border border-white/42">
          <ChevronDown size={14} />
        </span>
      </div>
    </section>
  );
}

function Section({ title, action, children, id }) {
  return (
    <section id={id} className="border-b border-white/8 px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-7 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-black uppercase md:text-3xl">
            {title} <span className="text-white/35">/</span>
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-white/80">{action}</span>
            <button
              type="button"
              className="premium-ring hidden h-10 w-10 place-items-center rounded-md border border-white/12 bg-white/5 text-white/70 md:grid"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="premium-ring hidden h-10 w-10 place-items-center rounded-md border border-white/12 bg-white/5 text-white/70 md:grid"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function PageShell({ eyebrow, title, copy, children }) {
  return (
    <section className="px-5 pb-16 pt-28 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-9 max-w-4xl">
          <p className="text-sm font-black uppercase text-[#f01422]">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/64">{copy}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function CardGrid({ children }) {
  return <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">{children}</div>;
}

function MangaCard({ item, index }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-md border border-white/12 bg-[#071012]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.36, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className="relative aspect-[0.74] overflow-hidden">
        <img src={item.image} alt={`Capa de ${item.title}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-108" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/12 to-transparent" />
        <span className="absolute left-3 top-3 rounded-sm bg-[#f01422] px-2 py-1 text-xs font-black">{item.badge ?? item.rank}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="line-clamp-2 text-base font-bold leading-tight text-white">{item.title}</h3>
        <div className="mt-3 flex items-center justify-between gap-3 text-sm text-white/64">
          <span>{item.chapter}</span>
          <span className="flex items-center gap-1 text-white">
            <Star size={14} fill="#ffbf00" className="text-[#ffbf00]" />
            {item.rating}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function GenreCard({ genre, index }) {
  const Icon = genre.icon;
  return (
    <motion.article
      className="group relative min-h-40 overflow-hidden rounded-md border border-white/12 bg-[#071012]"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.32, delay: index * 0.035 }}
      whileHover={{ y: -6 }}
    >
      <img src={genre.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-62 transition duration-700 group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/12" />
      <div className="relative z-10 flex h-full min-h-40 flex-col items-center justify-end p-5 text-center">
        <Icon className="mb-4 text-[#f01422]" size={30} />
        <h3 className="font-bold">{genre.name}</h3>
        <p className="mt-1 text-sm text-white/58">{genre.count}</p>
      </div>
    </motion.article>
  );
}

function WhyChoose() {
  return (
    <section className="px-5 py-12 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <h2 className="mb-7 text-2xl font-black uppercase md:text-3xl">POR QUE ESCOLHER A NOVAL?</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map(([title, copy, Icon], index) => (
            <motion.article
              key={title}
              className="flex gap-5 rounded-md border border-white/10 bg-white/[0.045] p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.32 }}
            >
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-[#f01422]/55 bg-[#f01422]/10 text-[#f01422] shadow-[0_0_32px_rgba(240,20,34,0.18)]">
                <Icon size={25} />
              </span>
              <span>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/62">{copy}</p>
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ onNavigate }) {
  return (
    <footer className="border-t border-white/8 px-5 py-10 md:px-10">
      <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[1fr_1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-4xl font-black uppercase">
            NOVA<span className="text-[#f01422]">L</span>
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/62">
            Seu destino premium para mangás. Explore, leia e mergulhe em histórias incríveis.
          </p>
          <div className="mt-5 flex gap-3 text-white/70">
            <Facebook size={20} />
            <Twitter size={20} />
            <Instagram size={20} />
          </div>
        </div>
        <div>
          <h3 className="font-black uppercase">Fique atualizado</h3>
          <p className="mt-3 max-w-md text-sm text-white/60">Receba novidades sobre lançamentos e conteúdos exclusivos.</p>
          <div className="mt-5 flex max-w-md gap-2">
            <input className="h-12 min-w-0 flex-1 rounded-md border border-white/10 bg-white/8 px-4 text-sm outline-none placeholder:text-white/35 focus:border-[#f01422]" placeholder="Digite seu e-mail..." />
            <button className="rounded-md bg-[#f01422] px-5 text-sm font-bold shadow-[0_14px_34px_rgba(240,20,34,0.25)]">Assinar</button>
          </div>
        </div>
        <FooterList title="Explorar" items={[["home", "Início"], ["biblioteca", "Biblioteca"], ["home", "Gêneros", "generos"]]} onNavigate={onNavigate} />
        <FooterList title="Suporte" items={[["home", "Central de ajuda"], ["home", "Privacidade"], ["home", "Termos"]]} onNavigate={onNavigate} />
      </div>
      <div className="mx-auto mt-10 flex max-w-[1500px] items-center justify-between border-t border-white/8 pt-6 text-sm text-white/38">
        <p>© 2026 NovaL. Todos os direitos reservados.</p>
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="grid h-9 w-9 place-items-center rounded-md bg-white/8 text-white/70"
          aria-label="Voltar ao topo"
        >
          <ArrowRight className="-rotate-90" size={16} />
        </button>
      </div>
    </footer>
  );
}

function FooterList({ title, items, onNavigate }) {
  return (
    <div>
      <h3 className="font-black">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-white/58">
        {items.map(([id, label, targetId]) => (
          <li key={label}>
            <button type="button" onClick={() => onNavigate(id, targetId)} className="transition hover:text-white">
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AdminMetric({ icon: Icon, label, value }) {
  return (
    <article className="rounded-md border border-white/10 bg-white/[0.045] p-5">
      <Icon className="text-[#f01422]" size={22} />
      <p className="mt-4 text-sm text-white/54">{label}</p>
      <p className="mt-1 text-3xl font-black">{value}</p>
    </article>
  );
}

function RoleBadge({ role }) {
  const label = role === "master" ? "Master admin" : role === "admin" ? "Admin" : "Leitor";
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-black ${role === "leitor" ? "bg-white/10 text-white/62" : "bg-[#f01422]/18 text-[#ff4b55]"}`}>
      {label}
    </span>
  );
}

function AuthModal({ open, mode, setMode, onClose, users, onSuccess }) {
  const [name, setName] = useState("Novo Leitor");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isSignup = mode === "signup";

  const submit = (event) => {
    event.preventDefault();
    setError("");

    if (isSignup) {
      if (!name.trim() || !email.trim() || password.length < 4) {
        setError("Preencha nome, e-mail e uma senha com pelo menos 4 caracteres.");
        return;
      }
      if (users.some((user) => user.email.toLowerCase() === email.toLowerCase())) {
        setError("Este e-mail já está cadastrado.");
        return;
      }
      const newUser = {
        id: crypto.randomUUID(),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        passwordHash: hashPassword(password),
        role: "leitor"
      };
      const nextUsers = [...users, newUser];
      onSuccess(newUser, nextUsers);
      return;
    }

    const user = users.find((item) => item.email.toLowerCase() === email.trim().toLowerCase());
    if (!user || user.passwordHash !== hashPassword(password)) {
      setError("E-mail ou senha inválidos.");
      return;
    }
    onSuccess(user, users);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-end bg-black/70 p-3 backdrop-blur-sm sm:place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.form
            onSubmit={submit}
            className="w-full max-w-md rounded-md border border-white/12 bg-[#080d0f] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-title"
          >
            <div className="mb-6 flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-black uppercase text-[#f01422]">Acesso seguro</p>
                <h2 id="auth-title" className="mt-2 text-3xl font-black uppercase">
                  {isSignup ? "Criar conta" : "Entrar"}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="premium-ring grid h-10 w-10 place-items-center rounded-md border border-white/10"
                aria-label="Fechar modal"
              >
                <X size={18} />
              </button>
            </div>

            {isSignup ? (
              <label className="mb-4 block">
                <span className="mb-2 block text-sm text-white/64">Nome</span>
                <input value={name} onChange={(event) => setName(event.target.value)} className="h-12 w-full rounded-md border border-white/10 bg-white/8 px-4 outline-none focus:border-[#f01422]" />
              </label>
            ) : null}

            <label className="mb-4 block">
              <span className="mb-2 block text-sm text-white/64">E-mail</span>
              <input value={email} onChange={(event) => setEmail(event.target.value)} className="h-12 w-full rounded-md border border-white/10 bg-white/8 px-4 outline-none focus:border-[#f01422]" type="email" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-white/64">Senha</span>
              <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="h-12 w-full rounded-md border border-white/10 bg-white/8 px-4 outline-none focus:border-[#f01422]" />
            </label>

            {error ? <p className="mt-4 rounded-md border border-[#f01422]/35 bg-[#f01422]/10 p-3 text-sm text-[#ff8b92]">{error}</p> : null}

            <button type="submit" className="mt-6 h-12 w-full rounded-md bg-[#f01422] text-sm font-black">
              {isSignup ? "Cadastrar" : "Entrar na NovaL"}
            </button>
            <button
              type="button"
              onClick={() => {
                setMode(isSignup ? "signin" : "signup");
                setError("");
              }}
              className="mt-4 w-full text-sm font-bold text-white/62 transition hover:text-white"
            >
              {isSignup ? "Já tenho conta" : "Criar uma nova conta"}
            </button>
          </motion.form>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function hashPassword(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return (hash >>> 0).toString(16);
}

function readUsers() {
  const stored = localStorage.getItem("noval-users");
  if (!stored) {
    persistUsers(initialUsers);
    return initialUsers;
  }
  const parsed = JSON.parse(stored);
  const hasMaster = parsed.some((user) => user.id === MASTER_ADMIN.id);
  if (hasMaster) return parsed;
  const nextUsers = [MASTER_ADMIN, ...parsed];
  persistUsers(nextUsers);
  return nextUsers;
}

function persistUsers(users) {
  localStorage.setItem("noval-users", JSON.stringify(users));
}

function readCurrentUser() {
  const storedUsers = localStorage.getItem("noval-users");
  const currentId = localStorage.getItem("noval-current-user");
  if (!storedUsers || !currentId) return null;
  return JSON.parse(storedUsers).find((user) => user.id === currentId) ?? null;
}
