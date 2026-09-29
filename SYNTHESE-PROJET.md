# Site de Jean-Yves Caillot : synthèse du projet

Document à déposer dans le projet Claude Cowork. Il résume tout ce qui a été fait, où en est le site, ce qui reste à décider et comment travailler dessus. Mis à jour le 25 septembre 2026.

---

## 1. Le projet en bref

**Quoi :** refonte complète du site de photographie de Jean-Yves Caillot (le père de Nico). L'ancien site WordPress était jugé « moche » ; le nouveau est un site d'artiste photographe, immersif et interactif.

**Pour qui :** Jean-Yves Caillot, photographe argentique noir et blanc, voyageur depuis 1975 (Indonésie, Inde, Kenya, Égypte, Maroc, Cambodge…). Le site est sa vitrine : expositions, tirages, demandes de contact.

**État au 25/09/2026 :** le nouveau site est en ligne en version de démonstration et prêt à être validé par Jean-Yves. Le vrai domaine `jeanyvescaillot.com` affiche encore l'ancien WordPress (la bascule n'est pas faite).

## 2. Liens et accès

| Élément | Valeur |
|---|---|
| Site de démonstration | https://jean-yves-caillot.vercel.app |
| Revoir l'introduction « objectif » | https://jean-yves-caillot.vercel.app/?intro=1 |
| Dossier du code (Mac de Nico) | `/Users/nico/jean-yves-caillot` |
| Hébergement | Vercel, projet `jean-yves-caillot`, équipe `crm-ma` |
| Ancien site | https://jeanyvescaillot.com (WordPress.com, toujours actif) |
| Nom de domaine | `jeanyvescaillot.com`, enregistré chez WordPress.com (Automattic), expire le 1er novembre 2027 |
| E-mail de contact du site | caillotjeanyves@gmail.com (masqué dans le code contre les robots) |

Le domaine a déjà été ajouté au projet Vercel (avec `www`), mais les réglages DNS chez WordPress.com n'ont pas été changés.

## 3. Ce qui a été fait

### 3.1 Récupération de l'ancien site
- Contenu lu via l'API publique de WordPress (aucun mot de passe nécessaire) : 13 galeries par pays, À propos, Expositions, Presse, Contact, CGU.
- 131 photographies téléchargées en haute définition, avec leurs titres. Les textes ont été repris et les coquilles corrigées (« Budha », « Pronemade », « Malcom X », « Ventiane »…).
- Une exposition absente du texte de l'ancien site a été trouvée sur une affiche : « Paris je t'aime », 14 au 20 septembre 2026, Atelier Gustave (Paris 14e). Elle est ajoutée au calendrier.

### 3.2 Les pages du site (23 pages)
- **Accueil** : introduction « objectif », diaporama plein écran, sélection de 6 grandes photos, portrait et texte, bande « pellicule », liste des pays, expositions récentes, appel au contact.
- **13 galeries** : Cambodge, Inde, Birmanie, Indonésie, Chine, Laos, Maroc, Égypte, Kenya, États-Unis, Colombie, France, Italie. Fond sombre, photos qui gardent leurs proportions, visionneuse plein écran avec diaporama automatique.
- **À propos**, **Expositions** (calendrier de 1977 à 2026 et 15 affiches), **Presse** (9 articles), **Contact**.
- **Tirages** : sélection de 12 photos haute définition, chacune avec « Demander ce tirage » qui ouvre le formulaire de contact déjà rempli.
- **Pages légales** : conditions d'utilisation (CGU, avec conditions de vente sur demande), politique de confidentialité, mentions légales.
- **Page 404** personnalisée.

### 3.3 Le design
Deux temps. D'abord une version claire et sobre. Puis, à la demande de Nico, une version « artiste » et interactive :
- **Objectif d'appareil photo** en ouverture : une lentille avec bague striée et texte gravé qui tourne, les photos défilent dans le verre, un bouton « Découvrir les photographies » au centre. Au clic, zoom dans l'objectif jusqu'au diaporama. Affichée une fois par visite, avec « Passer l'introduction » et la touche Échap.
- **Diaporama plein écran** avec léger zoom lent et grain de pellicule.
- **Sélection de 6 photos plein écran** (léopard, bain rituel à Bénarès, éléphants, procession à Bali, retour des champs, vieil éléphant) avec effet de profondeur au défilement.
- **Bande façon pellicule 35 mm** qui défile.
- **Liste géante des pays** : au survol, les autres s'estompent et un aperçu photo suit la souris (vignettes sur téléphone).
- **Galeries et expositions en « salle sombre »**, pages de texte en clair.
- **Menu flottant en pilule** avec bouton arrondi « Me contacter » (inspiré du site du notaire de Nico).
- Typographie : Cormorant Garamond (titres) et Inter (texte), hébergées avec le site. Textes justifiés avec coupure des mots. Aucun tiret long « — » dans les textes.

### 3.4 Protection des photographies (droit d'auteur)
- Filigrane « © Jean-Yves Caillot » incrusté dans chaque image publiée.
- Images publiées en taille réduite (1600 px maximum) : les originaux haute définition ne sont jamais déployés.
- Clic droit, glisser-déposer, appui long et raccourcis d'enregistrement bloqués sur les images, avec un message d'avertissement.
- Calque invisible au-dessus des photos, impression désactivée.
- `robots.txt` et balises interdisant les robots d'IA ; interdiction d'intégrer le site dans un cadre externe.
- CGU : usages interdits, sanctions, procédure de demande d'autorisation, achat de tirage ou de licence sur devis.
- Limite honnête : aucune protection n'empêche une capture d'écran ; le filigrane et la petite taille rendent l'image peu utile.

### 3.5 Checklist qualité (les 20 points demandés)
Faits : politique de confidentialité, CGU, aucune clé API dans le front, HTTPS forcé (avec HSTS), bandeau de consentement, titres et descriptions uniques, image d'aperçu réseaux sociaux (1200×630), favicons, sitemap et `robots.txt`, textes alternatifs, images compressées en WebP, vitesse vérifiée, contrastes corrigés, responsive, 404 personnalisée, liens vérifiés (1 lien mort retiré), validation du formulaire, anti-spam, analytics, un seul appel à l'action.

Mesures Lighthouse (mobile, connexion lente simulée) : performance 97 à 100, accessibilité 100, bonnes pratiques 100. Le score SEO de 69 vient uniquement du masquage volontaire de l'adresse de démonstration.

### 3.6 Décisions prises
- **Un seul appel à l'action** : « Me contacter » (menu et bas d'accueil). Les autres liens sont des liens texte.
- **Analytics** : Vercel Web Analytics, sans cookie, chargé seulement si le visiteur accepte le bandeau (« Refuser » et « Accepter » ont le même poids). Activé sur le projet.
- **Formulaire de contact** : ouvre la messagerie du visiteur avec le message prêt (`mailto`). Validation des champs et anti-spam (champ piège, délai minimum de 3 secondes, limite de liens). Pas d'envoi direct pour l'instant.
- **E-mail masqué** dans le code pour éviter la collecte par les robots.
- **Google** : l'adresse `vercel.app` est masquée des moteurs de recherche (en-tête), le vrai domaine sera indexable.
- **Anciennes adresses** (`/inde`, `/kenya`, `/chine-2`…) redirigées vers les nouvelles, pour ne rien casser au changement de domaine.
- **Pas de vente en ligne** : les tirages sont sur demande et sur devis.

## 4. Points ouverts à valider avec Jean-Yves

1. **Valider le design** (l'introduction « objectif », l'ambiance sombre, la sélection d'accueil).
2. **Adresse postale et téléphone** pour les mentions légales : il a répondu « oui », les données ne sont pas encore reçues.
3. **Tirages** : en vend-il vraiment, avec quels formats, quel papier, quels prix ? Aujourd'hui la page ne donne aucun prix et promet un devis.
4. **Année de l'exposition « Au pays Samburu »** : 2011 sur l'ancien site, mais l'affiche et la presse indiquent le 21 juin au 13 juillet 2019.
5. **Article de presse « Carnaval de Venise » (2009)** : l'ancien lien pointait vers un article sur le Kenya ; l'entrée est affichée sans lien. Lien du Parisien retiré (article expiré).
6. **Scans en haute définition** : les photos de la Birmanie, de la Chine, de la France, de l'Italie (et une partie du Laos et de la Colombie) ne font qu'environ 1 150 px de large. Elles paraissent un peu molles en plein écran sur grand écran.
7. **Légendes** : ajouter année et lieu sous chaque photo (aujourd'hui seulement le titre).

## 5. Prochaines étapes proposées

1. Faire valider le site par Jean-Yves (envoyer le lien de démonstration).
2. Récupérer ses réponses (points 2 à 5 ci-dessus) et ses scans.
3. **Basculer le domaine** (à faire par Nico ou Jean-Yves, je ne peux pas saisir de mot de passe) :
   - se connecter à wordpress.com, Domaines, `jeanyvescaillot.com`, Enregistrements DNS ;
   - supprimer les deux enregistrements **A** sur `@` (`192.0.78.226` et `192.0.78.189`) ;
   - ajouter un enregistrement **A**, nom `@`, valeur `76.76.21.21` ;
   - **ne toucher ni aux lignes MX (e-mails Google) ni à la ligne `www`** ;
   - ensuite : vérifier avec `vercel domains verify jeanyvescaillot.com`.
4. **Ne pas supprimer** le compte, le site ou l'abonnement WordPress.com avant que le nouveau site s'affiche sur le vrai domaine (le domaine est rattaché à ce compte). Fermer l'ancien WordPress seulement après.
5. Brancher un **vrai envoi du formulaire** (Resend ou Formspree, gratuit) si Nico le souhaite.
6. Ajouter les légendes, les prix ou formats de tirages, l'adresse légale.

## 6. Préférences de travail de Nico (à respecter)

- Français simple, non technique, explications pas à pas.
- Aller vite, peu d'itérations, messages de statut courts.
- Retouches ciblées plutôt que refontes complètes une fois la direction validée.
- Éviter les fonds crème ou parchemin ; privilégier le blanc et les neutres froids.
- Aucun tiret long « — » dans les textes du site.
- Tous les textes courants sont justifiés.
- Toujours vérifier le rendu (ordinateur et téléphone) avant de dire que c'est fait.
- Ne rien envoyer, publier ou supprimer d'irréversible sans accord (la bascule du domaine attend la validation du père).

## 7. Pour l'équipe technique (ou un agent qui reprend le projet)

**Stack :** Astro (site statique), sharp (images), polices Fontsource, hébergement Vercel, aucun serveur.

**Fichiers clés**
- `src/data/site.js` : toutes les données (pays, photos, expositions, presse, affiches, sélection d'accueil, tirages, diaporama, réglages du site, e-mail découpé).
- `src/data/countries.json` : textes et titres des photos d'origine.
- `src/layouts/Base.astro` : squelette commun (menu, pied de page, bandeau cookies, analytics, protection des images, balises SEO).
- `src/pages/` : une page par fichier ; `galerie/[slug].astro` génère les 13 galeries.
- `src/components/Gallery.astro` (galerie et visionneuse) et `Mail.astro` (e-mail masqué).
- `src/styles/global.css` : tout le style.
- `vercel.json` : redirections des anciennes adresses, en-têtes de sécurité, masquage de l'adresse `vercel.app`.
- `_sources/photos` : images de travail de 2000 px (jamais déployées, non versionnées).

**Commandes** (depuis le dossier du projet)
- `npm run images` : régénère les images web (WebP, filigrane, vignettes) depuis `_sources`.
- `node scripts/build-assets.mjs` : régénère l'image d'aperçu réseaux sociaux et les favicons.
- `npm run build` : construit le site dans `dist`.
- `vercel deploy --prod --yes` : met en ligne (un premier échec ponctuel de déploiement a déjà eu lieu ; relancer suffit).
- Serveur de test local : entrée `jyc-site` (port 4325) dans `/Users/nico/.claude/launch.json`.

**Pièges connus**
- Dans les scripts zsh, ne jamais nommer une variable `path` (elle écrase le PATH).
- `?intro=1` force l'affichage de l'introduction (elle est masquée pour les robots et les navigateurs automatisés).
- Le réglage `SITE.live` dans `site.js` est à `true` ; le masquage de Google sur `vercel.app` se fait dans `vercel.json`.
- Analytics : pas de cookie ; le script ne se charge qu'après acceptation dans le bandeau.
