import countriesRaw from './countries.json';
import dims from './dims.json';

export const SITE = {
  name: 'Jean-Yves Caillot',
  tagline: 'Photographe, voyages en noir et blanc',
  // adresse e-mail découpée : elle n'apparaît jamais en clair dans le code de la page (anti-collecte par robots)
  mailUser: 'caillotjeanyves',
  mailDomain: 'gmail.com',
  year: new Date().getFullYear(),
  // Les adresses *.vercel.app restent masquées de Google via vercel.json ; le vrai domaine est référencé.
  live: true,
};

// Corrections de coquilles repérées dans les textes de l'ancien site
const FIXES = [
  ['Budha', 'Bouddha'], ['Pronemade', 'Promenade'], ['Tianamen', 'Tian’anmen'],
  ['Malcom X', 'Malcolm X'], ['Swedagon', 'Shwedagon'], ['Ventiane', 'Vientiane'],
  ['parcours 1898Km', 'parcourt 1 898 km'], ['4200 Km', '4 200 km'], ['en Egypte', 'en Égypte'],
  ['Beurre Oeuf Fromage les Halles Paris', 'Beurre, œuf, fromage, Les Halles, Paris'],
  ['octobre  2023', 'octobre 2023'], ['( de 1982 à 2018)', '(de 1982 à 2018)'],
  ['tropicales ,', 'tropicales,'], ['démesuré ,', 'démesuré,'], ['routes ,', 'routes,'],
  ['l’Atlas.J’ai', 'l’Atlas. J’ai'], ['permît', 'permit'], ['Les photos ont été prises dans les années 80', 'Les photos ont été prises dans les années 80.'],
  ['Egypte', 'Égypte'],
];
const fix = (s) => FIXES.reduce((t, [a, b]) => t.split(a).join(b), s);

const META = {
  cambodge: { name: 'Cambodge', slug: 'cambodge', continent: 'Asie', cover: 5 },
  inde: { name: 'Inde', slug: 'inde', continent: 'Asie', cover: 3 },
  birmanie: { name: 'Birmanie', slug: 'birmanie', continent: 'Asie', cover: 4 },
  indonesie: { name: 'Indonésie', slug: 'indonesie', continent: 'Asie', cover: 3 },
  'chine-2': { name: 'Chine', slug: 'chine', continent: 'Asie', cover: 6 },
  laos: { name: 'Laos', slug: 'laos', continent: 'Asie', cover: 6 },
  maroc: { name: 'Maroc', slug: 'maroc', continent: 'Afrique', cover: 5 },
  egypte: { name: 'Égypte', slug: 'egypte', continent: 'Afrique', cover: 4 },
  kenya: { name: 'Kenya', slug: 'kenya', continent: 'Afrique', cover: 5, pos: '50% 40%' },
  'etats-unis': { name: 'États-Unis', slug: 'etats-unis', continent: 'Amériques', cover: 2 },
  colombie: { name: 'Colombie', slug: 'colombie', continent: 'Amériques', cover: 3 },
  france: { name: 'France', slug: 'france', continent: 'Europe', cover: 3 },
  italie: { name: 'Italie', slug: 'italie', continent: 'Europe', cover: 1 },
};

export const CONTINENTS = [
  { name: 'Asie', keys: ['cambodge', 'inde', 'birmanie', 'indonesie', 'chine-2', 'laos'] },
  { name: 'Afrique', keys: ['maroc', 'egypte', 'kenya'] },
  { name: 'Amériques', label: 'Amérique du Nord & du Sud', keys: ['etats-unis', 'colombie'] },
  { name: 'Europe', keys: ['france', 'italie'] },
];

const pad = (n) => String(n).padStart(2, '0');

export const COUNTRIES = Object.entries(META).map(([dir, m]) => {
  const raw = countriesRaw[dir];
  const photos = raw.images.map((im, i) => {
    const file = `${dir}/${pad(i + 1)}`;
    const [w, h] = dims[`${file}.jpg`] || [im.w, im.h];
    return { src: `/img/${file}.webp`, thumb: `/img/${file}-t.webp`, tiny: `/img/${file}-s.webp`, w, h, title: fix(im.title) };
  });
  return {
    ...m, dir, photos,
    paras: raw.paras.map(fix),
    cover: photos[(m.cover || 1) - 1],
    pos: m.pos || '50% 50%',
  };
});

export const bySlug = (slug) => COUNTRIES.find((c) => c.slug === slug);
export const byDir = (dir) => COUNTRIES.find((c) => c.dir === dir);

export const HERO = { src: '/img/cambodge/06.webp', alt: 'Lever de soleil sur Angkor Vat, Cambodge' };
export const PORTRAIT = '/img/extra/portrait.webp';

export const EXPOS_RECENT = [
  ['2026', 'Paris je t’aime', 'Atelier Gustave, Paris 14e', '14 au 20 septembre'],
  ['2025', 'Reflets de la savane : Tribus et faune du Kenya', 'Atelier Gustave, Paris 14e', '15 au 21 septembre'],
  ['2025', 'Reflets du Cambodge', 'La Criée aux fleurs, Ollioules (Var)', '31 janvier au 16 février'],
  ['2024', 'Captures éphémères', 'Atelier Gustave, Paris 14e', '17 au 29 septembre'],
  ['2024', 'Reflets du Cambodge', 'Atelier Gustave, Paris 14e'],
  ['2022', 'Regards d’Inde', 'Chambre de commerce et d’industrie, Belfort', '17 novembre au 30 décembre'],
  ['2022', 'L’Égypte immortelle', 'La Criée aux fleurs, Ollioules (Var)', '22 octobre au 6 novembre'],
  ['2022', 'L’Égypte immortelle', 'Atelier Gustave, Paris 14e'],
  ['2020', 'Instants d’éternité : Inde', 'La Criée aux fleurs, Ollioules (Var)'],
  ['2019', 'Instants d’éternité : Inde', 'Atelier Gustave, Paris 14e', '15 au 27 octobre'],
  ['2011', 'Au pays Samburu : Kenya', 'Office de tourisme, Cloyes-sur-le-Loir', '21 juin au 13 juillet'],
  ['2009', 'Carnaval de Venise', 'Office de tourisme, Cloyes-sur-le-Loir', '3 au 31 octobre'],
  ['2007', '17e Festival d’arts plastiques', 'Cour Saint-Pierre, Paris'],
  ['2003', 'Festival Photobis', 'Espace Saint-Martin, Paris', '8 au 11 mai'],
];
export const EXPOS_OLD = [
  ['1997', '7e Festival d’arts plastiques', 'Cour Saint-Pierre, Paris', '21 et 22 juin'],
  ['1993', 'Publication du livre photo « A step in time »', 'United States of America Hall Directory, Inc.'],
  ['1991', 'Inde : « Instant & Eternity »', 'Kansas City Artists Coalition, États-Unis', '1er au 23 novembre'],
  ['1987', 'Sur la route du Turkana', 'Centre culturel français, Nairobi, Kenya', '8 au 13 juin'],
  ['1977', 'Contrastes américains', 'Centre culturel français, Marrakech'],
];

export const POSTERS = [
  { n: '01', title: 'Paris je t’aime (2026)', w: 1331, h: 2000 },
  { n: '02', title: 'Reflets de la savane, tribus et faune du Kenya (2025)' },
  { n: '06', title: 'Reflets du Cambodge (2025)' },
  { n: '04', title: 'Captures éphémères (2024)' },
  { n: '03', title: 'Regards d’Inde, Belfort (2022)' },
  { n: '05', title: 'L’Égypte immortelle, Ollioules (2022)' },
  { n: '09', title: 'Instants d’éternité : Inde, Paris (2019)' },
  { n: '07', title: 'Instants d’éternité : Inde' },
  { n: '10', title: 'Kenya : au pays Samburu' },
  { n: '11', title: 'Carnaval de Venise (2009)' },
  { n: '13', title: 'Festival Photobis (2003)' },
  { n: '14', title: '7e Festival d’arts plastiques (1997)' },
  { n: '15', title: '« A step in time » (1993)' },
  { n: '16', title: 'India: Instant and Eternity (1991)' },
  { n: '17', title: 'On the way to Turkana (1987)' },
].map((p) => {
  const [w, h] = dims[`extra/expo-${p.n}.jpg`];
  return { ...p, w, h, src: `/img/extra/expo-${p.n}.webp`, thumb: `/img/extra/expo-${p.n}-t.webp` };
});

export const PRESS = [
  ['Journées du Patrimoine 2025', 'Exposition photographie : Reflets de la savane, tribus et faune du Kenya', 'Le Parisien Étudiant', ''],
  ['21 septembre 2025', 'Exposition photographie : Reflets de la savane, tribus et faune du Kenya', 'Ville-data', 'https://ville-data.com/que-faire/agenda/Exposition-photographie--Reflets-de-la-savane-tribus-et-faune-du-Kenya/Paris/75-597220-75056'],
  ['15 septembre 2025', 'Exposition photographie : Reflets de la savane, tribus et faune du Kenya', 'OpenAgenda', 'https://openagenda.com/fr/ile-de-france/events/exposition-photographie-reflets-de-la-savane-tribus-et-faune-du-kenya'],
  ['16 février 2025', 'Exposition « Reflets du Cambodge », La Criée aux fleurs, Ollioules', 'Facebook, Ville d’Ollioules', 'https://www.facebook.com/Ollioules/posts/jean-yves-caillot-pr%C3%A9sente-reflets-du-cambodge-%C3%A0-la-cri%C3%A9e-aux-fleurs-jusquau-16-/1032467355590765/'],
  ['31 janvier 2025', 'Exposition « Reflets du Cambodge », La Criée aux fleurs, Ollioules', 'Intramuros', 'https://www.intramuros.org/ollioules/agenda/483983'],
  ['24 février 2020', 'Exposition « Inde : Instants d’éternité », La Criée aux fleurs, Ollioules', 'Nice-Matin', 'https://www.nicematin.com/culture/la-magie-de-l-inde-a-travers-l-objectif-de-jean-yves-caillot-468949'],
  ['22 février 2020', 'Exposition « Inde : Instants d’éternité », La Criée aux fleurs, Ollioules', 'Le Petit Varois', 'https://lepetitvarois.fr/ville-dollioules-exposition-inde-instants-deternite-photographies-argentiques-de-jean-yves-caillot/'],
  ['15 octobre 2019', 'Exposition Inde, Atelier Gustave, Paris 14e', 'La Voix du 14e', 'http://lavoixdu14e.blogspirit.com/tag/jean-yves+caillot'],
  ['21 juin 2019', 'Exposition « Le Kenya », Office de tourisme, Cloyes-les-Trois-Rivières', 'L’Écho républicain', 'https://www.lechorepublicain.fr/cloyes-les-trois-rivieres-28220/actualites/le-kenya-sexpose-jusquau-13-juillet_13595703/'],
  ['3 octobre 2009', 'Exposition « Carnaval de Venise », Cloyes-les-Trois-Rivières', '', ''],
];

// Diaporama d'accueil : uniquement des images à haute définition
const slide = (dir, n, pos) => { const c = byDir(dir); return { ...c.photos[n - 1], country: c.name, slug: c.slug, pos }; };
export const HERO_SLIDES = [
  slide('cambodge', 6, '50% 55%'),
  slide('kenya', 5, '50% 35%'),
  slide('inde', 1, '40% 45%'),
  slide('egypte', 1, '50% 62%'),
  slide('indonesie', 1, '50% 50%'),
  slide('kenya', 1, '40% 30%'),
];

// Bande « pellicule »
export const STRIP = [...COUNTRIES.map((c) => ({ ...c.cover, slug: c.slug, alt: `${c.cover.title} (${c.name})` })),
  { ...byDir('kenya').photos[2], slug: 'kenya', alt: 'Kenya' }];

// Sélection « Tirages », uniquement des photos dont l'original est en haute définition
const TIRAGES_IDS = [
  ['kenya', 5], ['inde', 3], ['indonesie', 3], ['kenya', 1], ['inde', 1], ['maroc', 6],
  ['egypte', 1], ['kenya', 4], ['inde', 4], ['indonesie', 1], ['etats-unis', 10], ['colombie', 2],
];
export const TIRAGES = TIRAGES_IDS.map(([dir, n]) => {
  const c = byDir(dir);
  const p = c.photos[n - 1];
  return { ...p, title: p.title.replace(/\.$/, ''), country: c.name, slug: c.slug };
});

// Accueil : grandes photos plein écran (originaux haute définition)
const pick = (dir, n) => { const c = byDir(dir); const p = c.photos[n - 1]; return { ...p, title: p.title.replace(/\.$/, ''), country: c.name, slug: c.slug }; };
export const SHOWCASE = [pick('kenya', 8), pick('inde', 2), pick('kenya', 7), pick('indonesie', 5), pick('inde', 7), pick('kenya', 10)];
