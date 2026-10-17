import React, { useEffect, useMemo, useState } from 'react';
import {
  Activity, ArrowDownLeft, ArrowLeftRight, ArrowRight, ArrowUpRight, Bell, BookOpen,
  Check, ChevronDown, ChevronRight, CircleHelp, Compass, Copy, ExternalLink, Eye,
  EyeOff, Filter, Globe2, LayoutDashboard, Leaf, Menu, Plus, PlusCircle, Search,
  Settings2, ShieldCheck, Sparkles, TrendingDown, TrendingUp, Trophy, UserRound,
  Wallet, X, Zap
} from 'lucide-react';

const NAV = [
  ['Overview', LayoutDashboard], ['Explore', Compass], ['Create Token', PlusCircle],
  ['Portfolio', Wallet], ['Trade', ArrowLeftRight], ['Activity', Activity],
  ['Leaderboard', Trophy], ['Learn', BookOpen], ['Profile', UserRound]
];

const INITIAL_TOKENS = [
  { id: 'BAM', name: 'Bamboo', symbol: 'BAM', price: 0.0842, change: 12.84, cap: 8420000, volume: 642000, holders: 12840, emoji: '🎋', category: 'Community', description: 'A community-led token concept rooted in creativity and shared growth.' },
  { id: 'PEPE', name: 'Pepe', symbol: 'PEPE', price: 0.0000128, change: 8.21, cap: 5820000000, volume: 28400000, holders: 148000, emoji: '🐸', category: 'Meme', description: 'An illustrative meme-token market entry for the demo.' },
  { id: 'BONK', name: 'Bonk', symbol: 'BONK', price: 0.0000241, change: 5.67, cap: 1740000000, volume: 19100000, holders: 92700, emoji: '🐕', category: 'Meme', description: 'An illustrative community token market entry for the demo.' },
  { id: 'WIF', name: 'dogwifhat', symbol: 'WIF', price: 1.84, change: -2.43, cap: 1830000000, volume: 53200000, holders: 67100, emoji: '🐶', category: 'Meme', description: 'An illustrative token entry with a simulated negative daily change.' },
  { id: 'MOG', name: 'Mog Coin', symbol: 'MOG', price: 0.0000017, change: 18.42, cap: 672000000, volume: 8600000, holders: 42900, emoji: '😼', category: 'Meme', description: 'An illustrative market entry with simulated market statistics.' },
  { id: 'BIRB', name: 'Birb House', symbol: 'BIRB', price: 0.00281, change: 22.31, cap: 2810000, volume: 284000, holders: 1250, emoji: '🐦', category: 'Creator', description: 'A creator-focused token concept with illustrative market data.' }
];

const COPY = {
  en: {
    tagline: 'CREATE. TRADE. GROW.', overview: 'Overview', explore: 'Explore', create: 'Create Token', portfolio: 'Portfolio', trade: 'Trade', activity: 'Activity', leaderboard: 'Leaderboard', learn: 'Learn', profile: 'Profile',
    greeting: 'Good ideas grow here.', overviewSub: 'Your home for discovering, learning, and building with the BAMBOO community.',
    demo: 'DEMO ENVIRONMENT', demoText: 'Prices, balances, charts, and order history are simulated. No real financial operation is performed.',
    createCta: 'Create a token', exploreCta: 'Explore tokens', how: 'How it works', statsPortfolio: 'Demo portfolio value', volume: '24h market volume', discovered: 'Tokens discovered', members: 'Community members',
    performance: 'Portfolio performance', simulatedAssets: 'Your simulated asset overview', viewPortfolio: 'View portfolio', topMovers: 'Top movers', today: 'Illustrative market data', viewAll: 'View all', market: 'Token market', marketSub: 'Simulated prices and market caps',
    search: 'Search by token name or ticker', all: 'All tokens', gainers: 'Gainers', losers: 'Losers', token: 'Token', price: 'Price', change24: '24h change', marketCap: 'Market cap', volume24: '24h volume', holders: 'Holders',
    empty: 'No tokens match your search.', emptyHint: 'Try another name or clear the filter.', details: 'Token details', simulated: 'Simulated market', tradeToken: 'Trade token', description: 'About this token', backExplore: 'Back to Explore',
    idea: 'Bring your idea to life.', createSub: 'Create a token concept preview. This does not deploy a token or connect a wallet.', tokenName: 'Token name', symbol: 'Token symbol', descriptionPlaceholder: 'What makes your token special?', category: 'Category', community: 'Community', meme: 'Meme', environment: 'Environment', creator: 'Creator', preview: 'Preview token', livePreview: 'LIVE PREVIEW · DEMO', yourToken: 'Your token name', previewCreated: 'Token preview saved in this demo.', safeMode: 'Demo only — wallet, fees, and deployment are disabled.',
    totalValue: 'Total demo value', profitLoss: 'Demo profit / loss', assetsHeld: 'Assets held', buyingPower: 'Buying power', demoHistory: 'Portfolio value · demo history', demoTrade: 'Demo trade preview', noExchange: 'Orders cannot be sent to an exchange.', buy: 'Buy', sell: 'Sell', amount: 'Amount in USD', reviewOrder: 'Review demo order', review: 'Review order', orderSummary: 'Order summary', estimatedPrice: 'Illustrative price', estimatedTotal: 'Estimated total', confirmDemo: 'Confirm demo order', cancel: 'Cancel', orderSuccess: 'Demo order added to activity. No funds moved.', orderError: 'Enter an amount greater than zero.', noWallet: 'No wallet connected. No real order or financial transaction will occur.',
    recent: 'Recent activity', demoHistoryLabel: 'SIMULATED', noActivity: 'No activity yet', leaderboardTitle: 'Good things grow together.', leaderboardSub: 'Illustrative community points, not financial performance.', points: 'pts',
    learnTitle: 'Learn before you leap.', learnSub: 'Short guides to help you explore digital assets more safely.', basics: 'BAMBOO basics', basicsText: 'Understand the demo and how token markets work.', research: 'Research tokens', researchText: 'Review token information and understand uncertainty.', safety: 'Stay safe', safetyText: 'Learn about wallet safety, scams, and volatility.', creation: 'Token creation', creationText: 'Explore the concepts behind community tokens.', readGuide: 'Open guide', educationNote: 'Educational prototype only. Nothing here is financial advice.',
    account: 'Demo profile', accountSub: 'Your local BAMBOO preferences', preferences: 'Preferences', language: 'Language', english: 'English', french: 'Français', creole: 'Kreyòl ayisyen', notifications: 'Demo notifications', notificationsSub: 'Show product updates in this prototype', saved: 'Preferences saved on this device.', privacy: 'Privacy & security', help: 'Help & support', editProfile: 'Edit profile', watchlist: 'Watchlist', addWatch: 'Watch token', removeWatch: 'Remove from watchlist', watched: 'Watching', copy: 'Copy token symbol', copied: 'Symbol copied (if clipboard access is available).',
    notConnected: 'Not connected to a blockchain', footer: 'Prototype only · No wallet, payments, KYC, token deployment, or live trading', loading: 'Loading demo data…', retry: 'Try again', orderHistory: 'Order history', date: 'Time', side: 'Side', status: 'Status', viewDetails: 'View details', close: 'Close'
  },
  fr: {
    tagline: 'CRÉER. ÉCHANGER. GRANDIR.', overview: 'Accueil', explore: 'Découvrir', create: 'Créer un jeton', portfolio: 'Portefeuille', trade: 'Échanger', activity: 'Activité', leaderboard: 'Classement', learn: 'Apprendre', profile: 'Profil',
    greeting: 'Les bonnes idées grandissent ici.', overviewSub: 'Découvrez, apprenez et créez avec la communauté BAMBOO.',
    demo: 'ENVIRONNEMENT DE DÉMO', demoText: 'Les prix, soldes, graphiques et ordres sont simulés. Aucune opération financière réelle.',
    createCta: 'Créer un jeton', exploreCta: 'Découvrir les jetons', how: 'Comment ça marche', statsPortfolio: 'Valeur du portefeuille démo', volume: 'Volume du marché sur 24 h', discovered: 'Jetons découverts', members: 'Membres de la communauté',
    performance: 'Performance du portefeuille', simulatedAssets: 'Vue simulée de vos actifs', viewPortfolio: 'Voir le portefeuille', topMovers: 'Plus fortes variations', today: 'Données de marché illustratives', viewAll: 'Tout voir', market: 'Marché des jetons', marketSub: 'Prix et capitalisations simulés',
    search: 'Rechercher par nom ou symbole', all: 'Tous', gainers: 'En hausse', losers: 'En baisse', token: 'Jeton', price: 'Prix', change24: 'Variation 24 h', marketCap: 'Capitalisation', volume24: 'Volume 24 h', holders: 'Détenteurs',
    empty: 'Aucun jeton ne correspond.', emptyHint: 'Essayez un autre nom ou retirez le filtre.', details: 'Détails du jeton', simulated: 'Marché simulé', tradeToken: 'Échanger ce jeton', description: 'À propos de ce jeton', backExplore: 'Retour à Découvrir',
    idea: 'Donnez vie à votre idée.', createSub: 'Créez un aperçu de jeton. Aucun jeton ne sera déployé et aucun portefeuille ne sera connecté.', tokenName: 'Nom du jeton', symbol: 'Symbole', descriptionPlaceholder: 'Qu’est-ce qui rend ce jeton spécial ?', category: 'Catégorie', community: 'Communauté', meme: 'Mème', environment: 'Environnement', creator: 'Créateur', preview: 'Prévisualiser', livePreview: 'APERÇU · DÉMO', yourToken: 'Nom de votre jeton', previewCreated: 'Aperçu enregistré dans cette démo.', safeMode: 'Démo uniquement — portefeuille, frais et déploiement désactivés.',
    totalValue: 'Valeur totale simulée', profitLoss: 'Gain / perte simulé', assetsHeld: 'Actifs détenus', buyingPower: 'Pouvoir d’achat simulé', demoHistory: 'Valeur du portefeuille · historique démo', demoTrade: 'Aperçu d’ordre démo', noExchange: 'Les ordres ne peuvent pas être envoyés à une plateforme.', buy: 'Acheter', sell: 'Vendre', amount: 'Montant en USD', reviewOrder: 'Vérifier l’ordre démo', review: 'Vérifier l’ordre', orderSummary: 'Résumé de l’ordre', estimatedPrice: 'Prix indicatif', estimatedTotal: 'Total estimé', confirmDemo: 'Confirmer l’ordre démo', cancel: 'Annuler', orderSuccess: 'Ordre démo ajouté à l’activité. Aucun fonds déplacé.', orderError: 'Saisissez un montant supérieur à zéro.', noWallet: 'Aucun portefeuille connecté. Aucune transaction réelle ne sera effectuée.',
    recent: 'Activité récente', demoHistoryLabel: 'SIMULÉ', noActivity: 'Aucune activité', leaderboardTitle: 'Grandissons ensemble.', leaderboardSub: 'Points communautaires illustratifs, pas une performance financière.', points: 'pts',
    learnTitle: 'Apprenez avant de vous lancer.', learnSub: 'Des guides pour explorer les actifs numériques avec plus de prudence.', basics: 'Les bases de BAMBOO', basicsText: 'Comprendre la démo et les marchés de jetons.', research: 'Étudier les jetons', researchText: 'Examiner les informations et l’incertitude.', safety: 'Rester en sécurité', safetyText: 'Portefeuilles, arnaques et volatilité.', creation: 'Création de jeton', creationText: 'Découvrir les concepts des jetons communautaires.', readGuide: 'Ouvrir le guide', educationNote: 'Prototype éducatif uniquement. Ceci ne constitue pas un conseil financier.',
    account: 'Profil démo', accountSub: 'Vos préférences BAMBOO locales', preferences: 'Préférences', language: 'Langue', english: 'English', french: 'Français', creole: 'Kreyòl ayisyen', notifications: 'Notifications démo', notificationsSub: 'Afficher les mises à jour dans ce prototype', saved: 'Préférences enregistrées sur cet appareil.', privacy: 'Confidentialité et sécurité', help: 'Aide et assistance', editProfile: 'Modifier le profil', watchlist: 'Liste de suivi', addWatch: 'Suivre le jeton', removeWatch: 'Retirer de la liste', watched: 'Suivi', copy: 'Copier le symbole', copied: 'Symbole copié si le navigateur l’autorise.',
    notConnected: 'Non connecté à une blockchain', footer: 'Prototype uniquement · Aucun portefeuille, paiement, KYC, déploiement ou échange réel', loading: 'Chargement des données démo…', retry: 'Réessayer', orderHistory: 'Historique des ordres', date: 'Heure', side: 'Type', status: 'Statut', viewDetails: 'Voir les détails', close: 'Fermer'
  },
  ht: {
    tagline: 'KREYE. ECHANJE. GRANDI.', overview: 'Akèy', explore: 'Dekouvri', create: 'Kreye token', portfolio: 'Pòtfolyo', trade: 'Echanje', activity: 'Aktivite', leaderboard: 'Klasman', learn: 'Aprann', profile: 'Pwofil',
    greeting: 'Bon lide grandi isit la.', overviewSub: 'Dekouvri, aprann epi kreye ak kominote BAMBOO a.',
    demo: 'ANVIWÒNMAN DEMO', demoText: 'Pri, balans, grafik ak lòd yo se done ki fo pou demonstrasyon. Pa gen operasyon finansye reyèl.',
    createCta: 'Kreye yon token', exploreCta: 'Dekouvri token yo', how: 'Kijan sa mache', statsPortfolio: 'Valè pòtfolyo demo', volume: 'Volim mache 24 èdtan', discovered: 'Token dekouvri', members: 'Manm kominote a',
    performance: 'Pèfòmans pòtfolyo', simulatedAssets: 'Apèsi sou byen demo ou yo', viewPortfolio: 'Gade pòtfolyo', topMovers: 'Token ki bouje plis', today: 'Done mache pou demonstrasyon', viewAll: 'Gade tout', market: 'Mache token yo', marketSub: 'Pri ak kapitalizasyon ki simile',
    search: 'Chèche pa non token oswa senbòl', all: 'Tout', gainers: 'Sa k ap monte', losers: 'Sa k ap desann', token: 'Token', price: 'Pri', change24: 'Chanjman 24 èdtan', marketCap: 'Kapitalizasyon', volume24: 'Volim 24 èdtan', holders: 'Moun ki kenbe',
    empty: 'Pa gen token ki koresponn.', emptyHint: 'Eseye yon lòt non oswa retire filtè a.', details: 'Detay token', simulated: 'Mache ki simile', tradeToken: 'Echanje token', description: 'Konsènan token sa a', backExplore: 'Retounen Dekouvri',
    idea: 'Bay lide ou lavi.', createSub: 'Kreye yon apèsi token. Sa pap lanse token epi li pap konekte bous.', tokenName: 'Non token', symbol: 'Senbòl token', descriptionPlaceholder: 'Kisa ki fè token sa a espesyal?', category: 'Kategori', community: 'Kominote', meme: 'Mèm', environment: 'Anviwònman', creator: 'Kreyatè', preview: 'Gade apèsi', livePreview: 'APÈSI · DEMO', yourToken: 'Non token ou', previewCreated: 'Apèsi token an sove nan demo sa a.', safeMode: 'Demo sèlman — bous, frè ak lansman dezaktive.',
    totalValue: 'Valè total demo', profitLoss: 'Pwofi / pèt demo', assetsHeld: 'Byen ou kenbe', buyingPower: 'Kapasite acha demo', demoHistory: 'Valè pòtfolyo · istwa demo', demoTrade: 'Apèsi echanj demo', noExchange: 'Yo pa ka voye lòd bay okenn echanj.', buy: 'Achte', sell: 'Vann', amount: 'Montan an USD', reviewOrder: 'Verifye lòd demo', review: 'Verifye lòd', orderSummary: 'Rezime lòd', estimatedPrice: 'Pri indicatif', estimatedTotal: 'Total estime', confirmDemo: 'Konfime lòd demo', cancel: 'Anile', orderSuccess: 'Lòd demo ajoute nan aktivite. Pa gen lajan ki deplase.', orderError: 'Antre yon montan ki pi gran pase zewo.', noWallet: 'Pa gen bous ki konekte. Pa gen tranzaksyon reyèl k ap fèt.',
    recent: 'Aktivite resan', demoHistoryLabel: 'SIMILE', noActivity: 'Pa gen aktivite ankò', leaderboardTitle: 'Ann grandi ansanm.', leaderboardSub: 'Pwen kominote pou demonstrasyon, se pa pèfòmans finansye.', points: 'pwen',
    learnTitle: 'Aprann anvan ou aji.', learnSub: 'Ti gid pou ede w dekouvri byen dijital yo pi an sekirite.', basics: 'Baz BAMBOO', basicsText: 'Konprann demo a ak mache token yo.', research: 'Fè rechèch sou token', researchText: 'Revize enfòmasyon token epi konprann ensètitid.', safety: 'Rete an sekirite', safetyText: 'Aprann sou sekirite bous, magouy ak volatilite.', creation: 'Kreye token', creationText: 'Dekouvri prensip token kominotè yo.', readGuide: 'Louvri gid la', educationNote: 'Pwototip edikatif sèlman. Sa pa konsèy finansye.',
    account: 'Pwofil demo', accountSub: 'Preferans BAMBOO ki sou aparèy sa a', preferences: 'Preferans', language: 'Lang', english: 'English', french: 'Français', creole: 'Kreyòl ayisyen', notifications: 'Notifikasyon demo', notificationsSub: 'Montre nouvèl nan pwototip sa a', saved: 'Preferans yo sove sou aparèy sa a.', privacy: 'Konfidansyalite ak sekirite', help: 'Èd ak sipò', editProfile: 'Modifye pwofil', watchlist: 'Lis siveyans', addWatch: 'Swiv token', removeWatch: 'Retire nan lis la', watched: 'Ap swiv', copy: 'Kopye senbòl token', copied: 'Senbòl la kopye si navigatè a pèmèt sa.',
    notConnected: 'Pa konekte ak okenn blockchain', footer: 'Pwototip sèlman · Pa gen bous, peman, KYC, lansman token oswa echanj reyèl', loading: 'Ap chaje done demo…', retry: 'Eseye ankò', orderHistory: 'Istwa lòd', date: 'Lè', side: 'Kalite', status: 'Estati', viewDetails: 'Gade detay', close: 'Fèmen'
  }
};

const money = (n) => n >= 1 ? '$' + n.toLocaleString('en-US', { maximumFractionDigits: 2 }) : '$' + n.toLocaleString('en-US', { maximumFractionDigits: 8 });
const compactMoney = (n) => n >= 1e9 ? '$' + (n / 1e9).toFixed(2) + 'B' : n >= 1e6 ? '$' + (n / 1e6).toFixed(2) + 'M' : n >= 1e3 ? '$' + (n / 1e3).toFixed(1) + 'K' : money(n);
const getPref = (key, fallback) => { try { const v = localStorage.getItem('bamboo.' + key); return v === null ? fallback : JSON.parse(v); } catch { return fallback; } };
const setPref = (key, value) => { try { localStorage.setItem('bamboo.' + key, JSON.stringify(value)); } catch { /* storage may be unavailable */ } };

export default function App() {
  const [page, setPage] = useState('Overview');
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(() => getPref('language', 'en'));
  const [notifications, setNotifications] = useState(() => getPref('notifications', true));
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedId, setSelectedId] = useState('BAM');
  const [watched, setWatched] = useState(() => getPref('watchlist', ['BAM', 'PEPE']));
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [tokenDescription, setTokenDescription] = useState('');
  const [tokenCategory, setTokenCategory] = useState('Community');
  const [createdPreview, setCreatedPreview] = useState(false);
  const [tradeSide, setTradeSide] = useState('buy');
  const [tradeAmount, setTradeAmount] = useState('250');
  const [orderReview, setOrderReview] = useState(false);
  const [toast, setToast] = useState('');
  const [error, setError] = useState('');
  const [orders, setOrders] = useState([
    { id: 'DEMO-1042', side: 'buy', token: 'BAM', amount: 250, status: 'Preview only', time: 'Today · 10:42' },
    { id: 'DEMO-0918', side: 'reward', token: 'BIRB', amount: 18.42, status: 'Simulated', time: 'Today · 09:18' },
    { id: 'DEMO-1632', side: 'sell', token: 'PEPE', amount: 120, status: 'Preview only', time: 'Yesterday · 16:32' }
  ]);
  const t = COPY[language] || COPY.en;
  const tokens = useMemo(() => {
    const created = createdPreview && tokenName.trim() && tokenSymbol.trim()
      ? [{ id: tokenSymbol.toUpperCase(), name: tokenName.trim(), symbol: tokenSymbol.toUpperCase(), price: 0, change: 0, cap: 0, volume: 0, holders: 1, emoji: '🌱', category: tokenCategory, description: tokenDescription || 'Community token concept created in demo mode.' }]
      : [];
    return [...created, ...INITIAL_TOKENS];
  }, [createdPreview, tokenName, tokenSymbol, tokenCategory, tokenDescription]);
  const selectedToken = tokens.find((token) => token.id === selectedId) || tokens[0];
  const filteredTokens = tokens.filter((token) => {
    const matchesQuery = (token.name + ' ' + token.symbol + ' ' + token.category).toLowerCase().includes(query.toLowerCase().trim());
    const matchesFilter = filter === 'all' || (filter === 'gainers' && token.change > 0) || (filter === 'losers' && token.change < 0);
    return matchesQuery && matchesFilter;
  });

  useEffect(() => { setPref('language', language); }, [language]);
  useEffect(() => { setPref('notifications', notifications); }, [notifications]);
  useEffect(() => { setPref('watchlist', watched); }, [watched]);

  const go = (next) => { setPage(next); setMenuOpen(false); setError(''); setOrderReview(false); };
  const notify = (message) => { setToast(message); window.setTimeout(() => setToast(''), 3000); };
  const openToken = (token) => { setSelectedId(token.id); go('Token Details'); };
  const toggleWatch = (id) => {
    setWatched((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
    notify(watched.includes(id) ? t.removeWatch : t.watched);
  };
  const submitToken = (event) => {
    event.preventDefault();
    if (!tokenName.trim() || !/^[A-Za-z0-9]{2,8}$/.test(tokenSymbol.trim())) {
      setError('Use a token name and a symbol with 2–8 letters or numbers.');
      return;
    }
    setError('');
    setCreatedPreview(true);
    setSelectedId(tokenSymbol.toUpperCase());
    notify(t.previewCreated);
  };
  const reviewTrade = () => {
    const amount = Number(tradeAmount);
    if (!Number.isFinite(amount) || amount <= 0) { setError(t.orderError); return; }
    setError('');
    setOrderReview(true);
  };
  const confirmTrade = () => {
    const amount = Number(tradeAmount);
    const item = { id: 'DEMO-' + Date.now().toString().slice(-6), side: tradeSide, token: selectedToken.symbol, amount, status: 'Demo only', time: new Date().toLocaleString() };
    setOrders((current) => [item, ...current]);
    setOrderReview(false);
    notify(t.orderSuccess);
    setPage('Activity');
  };
  const watchlistTokens = tokens.filter((token) => watched.includes(token.id));

  return (
    <div className="app-shell">
      <aside className={'sidebar' + (menuOpen ? ' sidebar-open' : '')}>
        <div className="brand-row">
          <div className="brand-mark"><Leaf size={22} /></div>
          <div className="brand-word"><strong>BAMBOO</strong><small>{t.tagline}</small></div>
          <button className="icon-button sidebar-close" aria-label={t.close} onClick={() => setMenuOpen(false)}><X size={19} /></button>
        </div>
        <div className="workspace-chip"><span className="workspace-emoji">🌿</span><span><strong>Bamboo ecosystem</strong><small>Local demo workspace</small></span><ChevronDown size={15} /></div>
        <p className="nav-label">WORKSPACE</p>
        <nav className="primary-nav" aria-label="Main navigation">
          {NAV.map(([name, Icon]) => {
            const label = name === 'Create Token' ? t.create : t[name.toLowerCase()] || name;
            const active = page === name || (name === 'Explore' && page === 'Token Details');
            return <button key={name} className={'nav-item' + (active ? ' nav-active' : '')} onClick={() => go(name)} aria-current={active ? 'page' : undefined}>
              <Icon size={18} strokeWidth={1.8} /><span>{label}</span>{name === 'Create Token' && <em>NEW</em>}
            </button>;
          })}
        </nav>
        <div className="sidebar-bottom">
          <div className="network-pill"><span /> Demo network · SIMULATED</div>
          <div className="user-chip"><div className="avatar">BB</div><span><strong>Bamboo Builder</strong><small>Demo account</small></span><button className="icon-button" aria-label={t.profile} onClick={() => go('Profile')}><Settings2 size={17} /></button></div>
        </div>
      </aside>
      {menuOpen && <button className="scrim" aria-label={t.close} onClick={() => setMenuOpen(false)} />}
      <main className="main-area">
        <header className="topbar">
          <button className="icon-button mobile-menu" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={20} /></button>
          <div className="breadcrumbs"><span>Workspace</span><ChevronRight size={14} /><strong>{page === 'Token Details' ? t.details : page === 'Overview' ? t.overview : NAV.find(([name]) => name === page)?.[0] === 'Create Token' ? t.create : t[page.toLowerCase()] || page}</strong></div>
          <div className="topbar-actions"><span className="demo-pill"><span /> {t.demo}</span><button className="icon-button notification-button" aria-label={t.notifications} onClick={() => notify(notifications ? 'No new demo notifications.' : 'Notifications are disabled in preferences.')}><Bell size={18} /></button></div>
        </header>
        <div className="page-content">
          <div className="page-heading">
            <div><div className="eyebrow"><Sparkles size={13} /> BAMBOO ECOSYSTEM</div><h1>{page === 'Overview' ? t.greeting : page === 'Token Details' ? selectedToken.name : page === 'Create Token' ? t.create : page === 'Explore' ? t.explore : page === 'Portfolio' ? t.portfolio : page === 'Trade' ? t.trade : page === 'Activity' ? t.activity : page === 'Leaderboard' ? t.leaderboard : page === 'Learn' ? t.learn : t.profile}</h1><p>{page === 'Overview' ? t.overviewSub : page === 'Token Details' ? selectedToken.description : page === 'Explore' ? t.marketSub : page === 'Create Token' ? t.createSub : page === 'Portfolio' ? t.simulatedAssets : page === 'Trade' ? t.noExchange : page === 'Activity' ? t.demoHistoryLabel : page === 'Leaderboard' ? t.leaderboardSub : page === 'Learn' ? t.learnSub : t.accountSub}</p></div>
            {page === 'Overview' && <button className="button button-primary" onClick={() => go('Create Token')}><Plus size={17} /> {t.createCta}</button>}
          </div>

          <div className="demo-banner"><ShieldCheck size={18} /><div><strong>{t.demo}</strong><span>{t.demoText}</span></div></div>

          {page === 'Overview' && <Overview t={t} tokens={tokens} openToken={openToken} go={go} />}
          {page === 'Explore' && <section className="panel explore-panel">
            <div className="explore-toolbar"><label className="search-box"><Search size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.search} aria-label={t.search} /><kbd>⌘ K</kbd></label><div className="filter-group" aria-label="Token filters"><Filter size={16} />{[['all', t.all], ['gainers', t.gainers], ['losers', t.losers]].map(([value, label]) => <button key={value} className={filter === value ? 'filter-active' : ''} onClick={() => setFilter(value)}>{label}</button>)}</div></div>
            <TokenTable t={t} tokens={filteredTokens} onSelect={openToken} watchlist={watched} onWatch={toggleWatch} />
            {filteredTokens.length === 0 && <div className="empty-state"><Search size={28} /><strong>{t.empty}</strong><span>{t.emptyHint}</span><button className="button button-secondary" onClick={() => { setQuery(''); setFilter('all'); }}>{t.retry}</button></div>}
          </section>}
          {page === 'Create Token' && <div className="content-grid create-grid">
            <section className="panel form-panel"><div className="panel-heading"><div><span className="eyebrow">TOKEN STUDIO</span><h2>{t.idea}</h2><p>{t.createSub}</p></div><span className="icon-bubble"><PlusCircle size={20} /></span></div>
              <form onSubmit={submitToken} noValidate>
                <label>{t.tokenName}<input value={tokenName} onChange={(e) => setTokenName(e.target.value)} maxLength={32} placeholder="e.g. Bamboo Bloom" required /></label>
                <label>{t.symbol}<input value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8))} maxLength={8} placeholder="BLOOM" required /><small>2–8 letters or numbers</small></label>
                <label>{t.description}<textarea rows={4} value={tokenDescription} onChange={(e) => setTokenDescription(e.target.value)} placeholder={t.descriptionPlaceholder} maxLength={280} /></label>
                <label>{t.category}<select value={tokenCategory} onChange={(e) => setTokenCategory(e.target.value)}><option>Community</option><option>Meme</option><option>Environment</option><option>Creator</option></select></label>
                {error && <div className="inline-error" role="alert">{error}</div>}
                <div className="form-disclaimer"><ShieldCheck size={16} />{t.safeMode}</div>
                <button className="button button-primary button-wide" type="submit"><Eye size={17} /> {t.preview}</button>
              </form>
            </section>
            <section className="panel token-preview"><div className="preview-topline"><span>{t.livePreview}</span><span className="preview-dot" /></div><div className="preview-art">{tokenSymbol ? tokenSymbol.slice(0, 1) : '🌱'}</div><h2>{tokenName.trim() || t.yourToken}</h2><span className="symbol-chip">{tokenSymbol || 'SYMBOL'}</span><p>{tokenDescription || t.descriptionPlaceholder}</p><div className="preview-metrics"><div><small>{t.price}</small><strong>$0.0000</strong></div><div><small>{t.marketCap}</small><strong>—</strong></div></div><div className="preview-note">{createdPreview ? <Check size={15} /> : <ShieldCheck size={15} />}{createdPreview ? t.previewCreated : t.safeMode}</div></section>
          </div>}
          {page === 'Portfolio' && <><div className="stats-grid">{[[t.totalValue, '$12,840.56', '+8.42%', Wallet], [t.profitLoss, '+$1,284.20', '+11.1%', TrendingUp], [t.assetsHeld, '8 tokens', '5 categories', Leaf], [t.buyingPower, '$2,450.00', 'Mock cash', ArrowLeftRight]].map(([label, value, delta, Icon]) => <StatCard key={label} label={label} value={value} delta={delta} Icon={Icon} />)}</div><section className="panel chart-panel"><PanelHeading title={t.performance} subtitle={t.demoHistory} action={t.demoHistoryLabel} /><PerformanceChart /></section><section className="panel table-panel"><PanelHeading title={t.watchlist} subtitle="Saved locally in this browser" /><TokenTable t={t} tokens={watchlistTokens} onSelect={openToken} watchlist={watched} onWatch={toggleWatch} /></section></>}
          {page === 'Token Details' && <><section className="panel token-detail-card"><div className="token-coin large-coin">{selectedToken.emoji}</div><div className="token-detail-main"><div className="eyebrow">{t.details} · DEMO</div><h2>{selectedToken.name} <span className="symbol-chip">{selectedToken.symbol}</span></h2><p>{selectedToken.category} · {t.simulated}</p></div><button className={'button ' + (watched.includes(selectedToken.id) ? 'button-secondary' : 'button-primary')} onClick={() => toggleWatch(selectedToken.id)}>{watched.includes(selectedToken.id) ? <Check size={16} /> : <Plus size={16} />}{watched.includes(selectedToken.id) ? t.watched : t.addWatch}</button><button className="button button-primary" onClick={() => go('Trade')}>{t.tradeToken} <ArrowUpRight size={16} /></button></section><div className="stats-grid">{[[t.price, money(selectedToken.price), (selectedToken.change >= 0 ? '+' : '') + selectedToken.change.toFixed(2) + '%', Activity], [t.marketCap, compactMoney(selectedToken.cap), t.demoHistoryLabel, Wallet], [t.volume24, compactMoney(selectedToken.volume), t.demoHistoryLabel, ArrowLeftRight], [t.holders, selectedToken.holders.toLocaleString(), t.demoHistoryLabel, UserRound]].map(([label, value, delta, Icon]) => <StatCard key={label} label={label} value={value} delta={delta} Icon={Icon} negative={String(delta).startsWith('-')} />)}</div><section className="panel chart-panel"><PanelHeading title={t.performance} subtitle={t.simulated} /><PerformanceChart /><div className="chart-legend"><span /> {selectedToken.symbol} · simulated price history <span className="chart-legend-note">No live market feed</span></div></section><section className="panel description-panel"><h3>{t.description}</h3><p>{selectedToken.description}</p><div className="detail-actions"><button className="button button-secondary" onClick={() => go('Explore')}><ArrowLeftDownIcon />{t.backExplore}</button><button className="button button-secondary" onClick={() => { notify(t.copied); }}>{t.copy} <Copy size={15} /></button></div></section></>}
          {page === 'Trade' && <div className="trade-layout"><section className="panel trade-panel"><div className="panel-heading"><div><span className="eyebrow">ORDER TICKET · DEMO</span><h2>{t.demoTrade}</h2><p>{t.noExchange}</p></div><span className="icon-bubble"><ArrowLeftRight size={20} /></span></div><div className="side-switch"><button className={tradeSide === 'buy' ? 'side-buy active' : ''} onClick={() => { setTradeSide('buy'); setError(''); }}><ArrowDownLeft size={17} />{t.buy}</button><button className={tradeSide === 'sell' ? 'side-sell active' : ''} onClick={() => { setTradeSide('sell'); setError(''); }}><ArrowUpRight size={17} />{t.sell}</button></div><label>{t.token}<select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>{tokens.map((token) => <option key={token.id} value={token.id}>{token.symbol} — {token.name}</option>)}</select></label><label>{t.amount}<div className="amount-input"><span>$</span><input value={tradeAmount} onChange={(e) => { setTradeAmount(e.target.value); setError(''); }} inputMode="decimal" aria-label={t.amount} /><button onClick={() => setTradeAmount('250')} type="button">250</button><button onClick={() => setTradeAmount('1000')} type="button">1K</button></div></label><div className="trade-summary"><span>{t.estimatedPrice}<strong>{money(selectedToken.price)}</strong></span><span>{t.estimatedTotal}<strong>{Number(tradeAmount) > 0 ? money(Number(tradeAmount)) : '$0.00'}</strong></span></div>{error && <div className="inline-error" role="alert">{error}</div>}<button className="button button-primary button-wide" onClick={reviewTrade}>{t.reviewOrder} <ArrowRight size={17} /></button><div className="form-disclaimer"><ShieldCheck size={16} />{t.noWallet}</div></section><section className="panel order-info"><span className="order-info-icon"><Zap size={22} /></span><h3>Demo order flow</h3><p>Review the token, side, and amount before adding a simulated record to your local activity history.</p><div className="flow-step"><span>1</span><div><strong>Choose an order</strong><small>Buy or sell, then enter an amount</small></div></div><div className="flow-step"><span>2</span><div><strong>Review details</strong><small>Confirm the illustrative order summary</small></div></div><div className="flow-step"><span>3</span><div><strong>Record demo activity</strong><small>Nothing is sent to a network or exchange</small></div></div></section></div>}
          {page === 'Activity' && <section className="panel activity-panel"><PanelHeading title={t.recent} subtitle={t.footer} /><div className="activity-list">{orders.map((order) => <div className="activity-row" key={order.id}><div className={'activity-icon ' + (order.side === 'sell' ? 'activity-sell' : '')}>{order.side === 'sell' ? <TrendingDown size={18} /> : order.side === 'reward' ? <Sparkles size={18} /> : <TrendingUp size={18} />}</div><div className="activity-description"><strong>{order.side === 'reward' ? 'Simulated community reward' : order.side === 'sell' ? 'Demo sell order' : 'Demo buy order'}</strong><small>{order.token} · {order.time} · {order.id}</small></div><div className="activity-amount"><strong>{order.side === 'sell' ? '−' : '+'}{money(order.amount)}</strong><small>{order.status}</small></div><span className="status-chip">DEMO</span></div>)}</div></section>}
          {page === 'Leaderboard' && <section className="panel leaderboard-panel"><PanelHeading title={t.leaderboardTitle} subtitle={t.leaderboardSub} /><div className="leader-row leader-header"><span>#</span><span>Community member</span><span>Demo points</span></div>{[['01', 'MossMaker', '🌿', '12,840'], ['02', 'BambooBee', '🐝', '10,420'], ['03', 'PepeGardener', '🐸', '9,870'], ['04', 'GreenThumb', '🌱', '8,540'], ['05', 'CryptoFern', '🍃', '7,220']].map((person) => <div className="leader-row" key={person[0]}><span className="rank-number">{person[0]}</span><span className="leader-name"><span>{person[2]}</span><strong>{person[1]}</strong></span><strong>{person[3]} {t.points}</strong></div>)}</section>}
          {page === 'Learn' && <div className="learn-page"><div className="learn-grid">{[[Leaf, t.basics, t.basicsText, 'BASICS'], [Search, t.research, t.researchText, 'RESEARCH'], [ShieldCheck, t.safety, t.safetyText, 'SAFETY'], [PlusCircle, t.creation, t.creationText, 'CREATION']].map(([Icon, title, text, key]) => <article className="panel learn-card" key={key}><span className="learn-icon"><Icon size={22} /></span><small className="eyebrow">{key}</small><h3>{title}</h3><p>{text}</p><button className="text-action" onClick={() => notify(title + ' · ' + t.educationNote)}>{t.readGuide} <ArrowUpRight size={15} /></button></article>)}</div><div className="education-banner"><CircleHelp size={19} /><span>{t.educationNote}</span></div></div>}
          {page === 'Profile' && <div className="profile-grid"><section className="panel profile-card"><div className="profile-cover" /><div className="profile-body"><div className="profile-avatar">BB</div><h2>Bamboo Builder</h2><p>@bamboobuilder.demo</p><span className="profile-tag"><ShieldCheck size={14} /> {t.account}</span><div className="profile-stats"><div><strong>12</strong><small>{t.watchlist}</small></div><div><strong>08</strong><small>{t.assetsHeld}</small></div><div><strong>246</strong><small>{t.points}</small></div></div></div></section><section className="panel preferences-panel"><PanelHeading title={t.preferences} subtitle={t.saved} /><label className="preference-row"><span className="preference-icon"><Globe2 size={18} /></span><span className="preference-copy"><strong>{t.language}</strong><small>English · Français · Kreyòl ayisyen</small></span><select value={language} onChange={(e) => { setLanguage(e.target.value); notify(COPY[e.target.value].saved); }} aria-label={t.language}><option value="en">{t.english}</option><option value="fr">{t.french}</option><option value="ht">{t.creole}</option></select></label><div className="preference-row"><span className="preference-icon"><Bell size={18} /></span><span className="preference-copy"><strong>{t.notifications}</strong><small>{t.notificationsSub}</small></span><button className={'toggle ' + (notifications ? 'toggle-on' : '')} role="switch" aria-checked={notifications} onClick={() => { setNotifications((v) => !v); notify(t.saved); }}><span /></button></div><button className="preference-row preference-button" onClick={() => notify(t.privacy)}><span className="preference-icon"><ShieldCheck size={18} /></span><span className="preference-copy"><strong>{t.privacy}</strong><small>{t.notConnected}</small></span><ChevronRight size={17} /></button><button className="preference-row preference-button" onClick={() => notify(t.help)}><span className="preference-icon"><CircleHelp size={18} /></span><span className="preference-copy"><strong>{t.help}</strong><small>BAMBOO · {t.demo}</small></span><ChevronRight size={17} /></button></section></div>}
        </div>
        <footer className="app-footer"><span>© 2026 BAMBOO</span><span><span className="footer-dot" /> {t.footer}</span><strong>{t.tagline}</strong></footer>
      </main>
      <nav className="mobile-nav" aria-label="Mobile navigation">{[['Overview', LayoutDashboard, t.overview], ['Explore', Compass, t.explore], ['Create Token', PlusCircle, t.create], ['Portfolio', Wallet, t.portfolio], ['Profile', UserRound, t.profile]].map(([name, Icon, label]) => <button key={name} className={page === name || (name === 'Explore' && page === 'Token Details') ? 'mobile-active' : ''} onClick={() => go(name)}><Icon size={19} /><small>{label}</small></button>)}</nav>
      {orderReview && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setOrderReview(false); }}><section className="order-modal" role="dialog" aria-modal="true" aria-labelledby="order-modal-title"><button className="icon-button modal-close" onClick={() => setOrderReview(false)} aria-label={t.close}><X size={18} /></button><span className="modal-symbol">{selectedToken.emoji}</span><span className="eyebrow">{t.review}</span><h2 id="order-modal-title">{t.orderSummary}</h2><div className="modal-order-line"><span>{t.side}</span><strong className={tradeSide === 'buy' ? 'positive' : 'negative'}>{tradeSide === 'buy' ? t.buy : t.sell} {selectedToken.symbol}</strong></div><div className="modal-order-line"><span>{t.estimatedPrice}</span><strong>{money(selectedToken.price)}</strong></div><div className="modal-order-line"><span>{t.estimatedTotal}</span><strong>{money(Number(tradeAmount))}</strong></div><div className="modal-disclaimer"><ShieldCheck size={17} />{t.noWallet}</div><button className="button button-primary button-wide" onClick={confirmTrade}>{t.confirmDemo} <Check size={17} /></button><button className="button button-ghost button-wide" onClick={() => setOrderReview(false)}>{t.cancel}</button></section></div>}
      {toast && <div className="toast" role="status"><Check size={17} />{toast}<button className="icon-button" aria-label={t.close} onClick={() => setToast('')}><X size={15} /></button></div>}
    </div>
  );
}

function Overview({ t, tokens, openToken, go }) {
  const stats = [[t.statsPortfolio, '$12,840.56', '+8.42%', Wallet], [t.volume, '$2.48M', '+12.6%', Activity], [t.discovered, '1,284', '+36 this week', Compass], [t.members, '24.8K', '+5.2%', Trophy]];
  return <><section className="hero-banner"><div className="hero-copy"><span className="hero-kicker"><Sparkles size={14} /> GROW WITH THE COMMUNITY</span><h2>Big ideas start<br />with a <em>little green.</em></h2><p>Create something meaningful. Discover what’s growing. Be part of the next wave.</p><div className="hero-actions"><button className="button button-primary" onClick={() => go('Explore')}>{t.exploreCta} <ArrowUpRight size={16} /></button><button className="button button-secondary" onClick={() => go('Learn')}>{t.how} <ArrowRight size={16} /></button></div></div><div className="hero-plant" aria-hidden="true"><div className="plant-ring ring-one" /><div className="plant-ring ring-two" /><span>🎋</span></div><div className="hero-footer"><span><span className="footer-dot" /> Community is growing</span><strong>{t.tagline}</strong></div></section><div className="stats-grid">{stats.map(([label, value, delta, Icon]) => <StatCard key={label} label={label} value={value} delta={delta} Icon={Icon} />)}</div><div className="content-grid overview-grid"><section className="panel chart-panel"><PanelHeading title={t.performance} subtitle={t.simulatedAssets} action={t.viewPortfolio} onAction={() => go('Portfolio')} /><div className="chart-balance"><div><small>{t.totalValue}</small><strong>$12,840.56</strong></div><span className="positive"><TrendingUp size={15} /> 8.42%</span></div><PerformanceChart /></section><section className="panel movers-panel"><PanelHeading title={t.topMovers} subtitle={t.today} action={t.viewAll} onAction={() => go('Explore')} />{tokens.slice(0, 4).map((token) => <button className="mover-row" key={token.id} onClick={() => openToken(token)}><TokenIcon token={token} /><span className="mover-copy"><strong>{token.name}</strong><small>{token.symbol}</small></span><span className="mover-price"><strong>{money(token.price)}</strong><small className={token.change < 0 ? 'negative' : 'positive'}>{token.change > 0 ? '+' : ''}{token.change.toFixed(2)}%</small></span><ChevronRight size={16} /></button>)}</section></div><section className="panel table-panel"><PanelHeading title={t.market} subtitle={t.marketSub} action={t.viewAll} onAction={() => go('Explore')} /><TokenTable t={t} tokens={tokens.slice(0, 5)} onSelect={openToken} watchlist={[]} onWatch={() => {}} /></section></>;
}

function StatCard({ label, value, delta, Icon, negative = false }) {
  return <article className="stat-card"><div className="stat-label"><span>{label}</span><span className="stat-icon"><Icon size={17} /></span></div><strong className="stat-value">{value}</strong><span className={'stat-delta ' + (negative || String(delta).startsWith('−') ? 'negative' : 'positive')}>{delta}</span></article>;
}
function PanelHeading({ title, subtitle, action, onAction }) {
  return <div className="panel-heading"><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>{action && (onAction ? <button className="text-action" onClick={onAction}>{action} <ArrowUpRight size={15} /></button> : <span className="panel-tag">{action}</span>)}</div>;
}
function TokenIcon({ token }) { return <span className="token-coin">{token.emoji}</span>; }
function TokenTable({ t, tokens, onSelect, watchlist, onWatch }) {
  return <div className="token-table-wrap"><table className="token-table"><thead><tr><th>{t.token}</th><th>{t.price}</th><th>{t.change24}</th><th>{t.marketCap}</th><th>{t.volume24}</th><th aria-label="Actions" /></tr></thead><tbody>{tokens.map((token) => <tr key={token.id}><td><button className="token-cell" onClick={() => onSelect(token)}><TokenIcon token={token} /><span><strong>{token.name}</strong><small>{token.symbol}</small></span></button></td><td className="numeric-cell">{money(token.price)}</td><td><span className={'change-chip ' + (token.change < 0 ? 'change-down' : 'change-up')}>{token.change > 0 ? '+' : ''}{token.change.toFixed(2)}%</span></td><td className="numeric-cell">{compactMoney(token.cap)}</td><td className="numeric-cell">{compactMoney(token.volume)}</td><td><div className="row-actions"><button className="icon-button watch-button" title={watchlist.includes(token.id) ? t.removeWatch : t.addWatch} aria-label={watchlist.includes(token.id) ? t.removeWatch : t.addWatch} onClick={() => onWatch(token.id)}><span>{watchlist.includes(token.id) ? '★' : '☆'}</span></button><button className="icon-button" aria-label={t.viewDetails} onClick={() => onSelect(token)}><ChevronRight size={17} /></button></div></td></tr>)}</tbody></table>{tokens.length === 0 && <div className="table-empty"><Search size={23} /><strong>{t.empty}</strong><span>{t.emptyHint}</span></div>}</div>;
}
function PerformanceChart() {
  return <div className="performance-chart"><div className="chart-y-labels"><span>$14k</span><span>$13k</span><span>$12k</span><span>$11k</span></div><svg viewBox="0 0 700 180" role="img" aria-label="Illustrative simulated portfolio performance chart" preserveAspectRatio="none"><defs><linearGradient id="bamboo-chart-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#5ce995" stopOpacity=".28" /><stop offset="100%" stopColor="#5ce995" stopOpacity="0" /></linearGradient></defs>{[22,65,108,151].map((y) => <line key={y} x1="0" y1={y} x2="700" y2={y} stroke="#b7d5bf" strokeOpacity=".12" strokeDasharray="4 7" />)}<path d="M0 140 L30 126 L65 132 L95 95 L126 110 L155 87 L190 97 L220 63 L250 77 L285 56 L320 72 L350 39 L380 52 L420 33 L455 48 L490 25 L525 41 L560 29 L595 46 L625 19 L660 28 L700 12 L700 180 L0 180 Z" fill="url(#bamboo-chart-fill)" /><path d="M0 140 L30 126 L65 132 L95 95 L126 110 L155 87 L190 97 L220 63 L250 77 L285 56 L320 72 L350 39 L380 52 L420 33 L455 48 L490 25 L525 41 L560 29 L595 46 L625 19 L660 28 L700 12" fill="none" stroke="#66efa0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="700" cy="12" r="4" fill="#66efa0" /></svg><div className="chart-x-labels"><span>1D</span><span>1W</span><span>1M</span><span>3M</span><span>1Y</span><span>ALL</span></div></div>;
}
function ArrowLeftDownIcon() { return <ArrowRight size={15} style={{ transform: 'rotate(180deg)' }} />; }
