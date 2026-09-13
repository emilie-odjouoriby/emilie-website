# CLAUDE.md — Site Émilie Odjouoriby

> **AGENTS : Ce fichier est la constitution technique du projet. Chaque règle est obligatoire et non-négociable. Ne pas interpréter, ne pas improviser. En cas de doute, DEMANDER.**
>
> Ce fichier est une copie versionnée (dans ce repo) de la constitution maîtresse tenue à la racine du workspace parent, dans `.CLAUDE/CLAUDE.md` (non versionnée, contient aussi le tooling `commands/`/`scripts/` hérité). En cas de divergence entre les deux, la version parente `.CLAUDE/CLAUDE.md` fait foi tant que le développeur n'a pas synchronisé les deux — signaler toute divergence constatée.
> Voir aussi `AGENTS.md` pour les règles spécifiques à cette version de Next.js (fichier auto-généré/maintenu par `next dev`, ne pas le supprimer).

---

## 1. Contexte Projet

**Émilie Odjouoriby** est juriste depuis 2007 et coach professionnelle certifiée ICF (praticienne PNL). Elle accompagne des dirigeants de TPE-PME (0 à 250 salariés) sur trois volets :

1. **Transmission / cession d'entreprise**
2. **Reprise d'entreprise**
3. **Coaching d'associés et codirigeants** (programme "CoOpérer")

Elle intervient en présentiel en Pays de la Loire et Bretagne sud (basée au Bignon, Loire-Atlantique), et en visio partout ailleurs, y compris pour des clients au Bénin (elle est franco-béninoise). Elle travaille **en complément** des conseils habituels du dirigeant (avocat, expert-comptable, notaire, conseil en cession) — jamais en remplacement.

**Ce que le site doit communiquer :**

- Expertise technique (juridique) **et** écoute humaine (coaching) — c'est la double compétence qui la différencie
- Sérieux et légitimité professionnelle (500+ créations de sociétés, 50+ transmissions accompagnées)
- Chaleur et accessibilité — le profil IA donné par la cliente est "simple, dynamique, naturel et humain"
- Un premier geste simple et gratuit : le **diagnostic de transmissibilité** (20 min, gratuit, sans engagement)

**Audience cible :** dirigeants de TPE-PME en réflexion sur la transmission, la reprise, ou en tension avec un associé. Peu technophiles pour certains — le site doit rester lisible, rassurant, jamais gadget.

**Ton demandé par la cliente :** rester simple, pas trop coloré. La richesse visuelle doit venir de la mise en page et de la typographie, pas d'une débauche de couleurs.

**Priorités absolues, dans l'ordre :**

1. Clarté du message et du parcours (le visiteur doit vite comprendre "est-ce que c'est pour moi ?")
2. Crédibilité visuelle — sobre, soigné, humain (pas corporate froid, pas non plus "coach Instagram")
3. Conversion vers les deux CTA principaux : faire le diagnostic gratuit / prendre rendez-vous
4. Performance (Core Web Vitals) et accessibilité
5. SEO local + thématique (transmission d'entreprise, reprise, coaching d'associés, Pays de la Loire, Bretagne sud)
6. Maintenabilité — code propre, conventions strictes, composants réutilisables

---

## 1bis. Note d'outillage — Copilot vs Claude Code

Ce fichier est lu et appliqué par **GitHub Copilot** (agent), qui supporte nativement `CLAUDE.md` comme fichier d'instructions. En revanche, si ce repo contient aussi une structure `.claude/commands/`, `.claude/scripts/` (hooks) ou `.claude/settings.json` héritée d'un précédent projet Claude Code : ces éléments-là ne sont **pas exécutés** par Copilot (pas de commandes slash, pas de hooks `PreToolUse`). Traite-les comme de la documentation de référence uniquement, jamais comme des mécanismes actifs, sauf si le développeur passe explicitement par Claude Code pour une tâche donnée.

Un fichier `.github/copilot-instructions.md` minimal doit aussi exister à la racine, pointant vers ce `CLAUDE.md`, en filet de sécurité pour les modes Copilot où la lecture automatique de `CLAUDE.md` ne serait pas garantie.

---

## 2. Base créative : le mockup Claude Design

Le point de départ visuel est un mockup généré sur Claude Design (fourni en référence : `/reference/mockup.html`), validé esthétiquement par la cliente. **Structure, mise en page, rythme des sections, micro-interactions (reveal au scroll, grain de texture léger, style des boutons/pills) sont à conserver comme base.**

Points d'attention spécifiques à ce mockup :

- Il est exporté en React/JSX exécuté via Babel-in-browser (CDN), avec assets encodés en base64. **Ce n'est pas du code de production.** Il faut le reconvertir proprement en composants Next.js (voir §4), pas le copier-coller tel quel.
- Il contient un curseur personnalisé (`cursor-dot` / `cursor-ring`). À conserver uniquement en version desktop, désactivé sur mobile/tactile et si `prefers-reduced-motion: reduce`, et **doit rester discret** — ce n'est pas l'élément prioritaire de l'identité de marque, ne pas complexifier au-delà du mockup.
- Le mockup était un **one-pager**. Le site final compte **6 pages** (voir §5) : il faut donc adapter la logique de sections du mockup en composants réutilisables entre pages (Hero, section "pourquoi moi", grille de services, FAQ, CTA final, footer), pas en sections figées d'une seule page.

---

## 3. Charte graphique officielle — PRIORITAIRE sur le mockup

**Décision actée avec la cliente : la charte graphique officielle prévaut sur les couleurs et polices du mockup.** Le mockup sert de gabarit de structure/interaction ; ses teintes terracotta/ocre/olive doivent être remplacées par celles ci-dessous.

### 3.1 Palette de couleurs (source : `Charte_graphique_Emilie.pdf`)

| Nom | Hex | Usage recommandé |
|---|---|---|
| Jaune Soleil | `#FFF27C` | Touche ponctuelle (badge, souligné, micro-interaction) — **jamais en texte**, contraste insuffisant |
| Corail | `#F19C7C` | Couleur d'accent principale (CTA secondaires, liens actifs, icônes, dégradés) |
| Beige clair | `#FFEED1` | Fond de section alternatif, cartes |
| Doré | `#A39376` | Texte adouci, bordures, séparateurs, fond sombre alternatif |
| Bleu | `#0CC0DF` | **Touche brève uniquement**, sur demande explicite de la cliente — jamais dominant, jamais pour de grandes surfaces. À utiliser avec parcimonie (un détail d'icône, un hover, un accent graphique isolé) et seulement là où il ne casse pas l'harmonie chaude du reste de la palette. **En cas de doute sur un emplacement, demander plutôt que de l'ajouter par défaut.**
| Encre | `#1F1A15` | Texte principal — noir chaud, validé avec la cliente/le développeur (non fourni explicitement dans la charte d'origine) |

**Règle d'or : le site reste sobre.** La demande de la cliente ("pas trop coloré") signifie une utilisation **dominante de beige clair / blanc cassé + doré**, avec corail comme accent principal, jaune soleil en touche rare, et bleu en touche exceptionnelle. Ne jamais couvrir de grandes surfaces en jaune ou en bleu.

Contraste : vérifier systématiquement le ratio WCAG AA pour tout texte sur fond coloré (le jaune soleil et le beige clair, très clairs, ne doivent jamais porter de texte sans un fond ou une ombre supplémentaire).

### 3.2 Typographies (source : charte graphique)

| Rôle | Police de la charte | Usage |
|---|---|---|
| Signature / logo | **Autography** (script) | Nom "Emilie Odjouoriby" en logo/signature, très ponctuel |
| Titres d'impact | **Holla** | Grands titres d'accroche (type baseline "Oser l'harmonie, innover avec audace") |
| Texte courant | **Cocomat Pro** | Corps de texte, UI, boutons, navigation |

**Action obligatoire avant tout développement de la typographie :** vérifier la licence d'usage web (webfont license) de ces trois polices auprès de la cliente ou de leur fournisseur. Une licence "desktop" ne couvre généralement pas l'usage en `@font-face` sur un site public. Ne jamais embarquer un fichier de police sans confirmation que la licence l'autorise. Si une police n'a pas de licence web valide, en discuter avec le développeur avant de choisir une alternative (jamais une décision silencieuse de l'agent).

**Statut actuel (en attente des fichiers licenciés) :** des polices de secours temporaires sont en place via `next/font/google` dans `src/lib/fonts.ts` — **Beau Rivage** (signature), **Bricolage Grotesque** (titres d'impact), **Inter** (texte courant). Elles sont clairement commentées comme temporaires dans le code. Dès réception des fichiers woff2 licenciés d'Autography/Holla/Cocomat Pro, ne modifier QUE `src/lib/fonts.ts` pour basculer vers `next/font/local`.

Une fois les fichiers de police obtenus (woff2 de préférence) : les héberger localement dans `public/fonts/` et les charger via `next/font/local` (jamais de `@font-face` manuel, jamais de Google Fonts CDN pour ces polices de marque).

---

## 4. Stack Technique — LOCKÉE

Ces choix sont **définitifs**. Aucun agent ne doit les remettre en question ni proposer d'alternative sans demande explicite du développeur.

| Catégorie | Technologie | Notes |
|---|---|---|
| Framework | **Next.js — dernière version stable, App Router** | Jamais Pages Router. Vérifier la version stable au moment du `pnpm create next-app` (ne pas se fier à une version mémorisée) |
| Langage | **TypeScript strict** | `strict: true`, `noImplicitAny`, `noUncheckedIndexedAccess` obligatoires |
| Package manager | **pnpm** | Jamais npm ni yarn |
| Styling | **Tailwind CSS v4** | Config CSS-first via `@theme` dans `globals.css` — pas de `tailwind.config.ts`. Les couleurs de la charte (§3.1) doivent être déclarées comme design tokens ici, jamais en valeur brute dans les composants |
| Animations | **Framer Motion** uniquement | Pas de GSAP : le site n'a pas de timelines scroll complexes ni de scènes 3D, Framer Motion suffit pour le reveal-on-scroll, les micro-interactions et les transitions de page. Ne pas ajouter GSAP "au cas où" |
| Formulaires | **react-hook-form + Zod** | Schéma de validation partagé client/serveur pour le formulaire de contact et le diagnostic |
| Emails transactionnels | **Resend** (ou équivalent choisi avec le développeur) | Pour l'envoi des résultats du diagnostic et des messages de contact. Clé API en variable d'environnement, jamais commitée |
| Images | **next/image** | Obligatoire pour toutes les images (photos fournies par la cliente à optimiser en WebP/AVIF) |
| Fonts | **next/font/local** | Obligatoire pour Autography, Holla, Cocomat Pro (voir §3.2) |
| Composants 3D | **Aucun** | Ce site n'en a pas besoin — ne pas en introduire |

---

## 5. Structure du site — 6 pages

Contenu source : brief texte fourni par la cliente (`/content/brief.md`, converti depuis `/content/brief.docx`), à respecter fidèlement — ne pas réécrire le fond, seulement adapter la forme (titres, découpage visuel).

1. **Accueil (`/`)** — Accroche, 3 profils de visiteurs (cède/transmet, reprend, associés en tension) + bloc CTA diagnostic, pourquoi Émilie, zone d'intervention
2. **Transmettre ou céder mon entreprise (`/transmettre-ceder`)**
3. **Reprendre une entreprise (`/reprendre`)**
4. **Associés & codirigeants — CoOpérer (`/cooperer`)**
5. **Qui suis-je (`/qui-suis-je`)**
6. **Contact (`/contact`)** — formulaire + lien Calendly + avis Google + LinkedIn

Chaque page a ses propres mots-clés SEO intégrés dans le brief — les respecter dans les title/description/contenu (voir §7).

---

## 6. Le diagnostic — V1 native Next.js

Décision actée : dès la V1, le diagnostic est un **vrai formulaire multi-étapes natif** (pas un simple embed Google Form).

Exigences :

- Composant client (`'use client'`) multi-étapes avec barre de progression, une question à la fois ou par groupes courts
- Questions et logique de scoring définies dans un fichier de données dédié (`src/lib/diagnostic/questions.ts` ou équivalent), **jamais codées en dur dans le JSX** — le contenu exact des questions viendra d'Émilie (actuellement en version Word/Google Form, à transformer)
- Validation Zod à chaque étape
- À la soumission : calcul du score/résultat côté serveur (server action ou route API), envoi d'un email récapitulatif au lead ET à Émilie via Resend, affichage d'un écran de résultat clair
- Protection anti-spam : honeypot field obligatoire + rate limiting sur la route/action serveur
- Sauvegarde des leads : à minima l'email de contact et le score, dans un envoi email fiable ; si un stockage persistant est nécessaire plus tard (tableau de suivi), en discuter avec le développeur avant d'ajouter une base de données — ne pas l'introduire par défaut
- Accessible au clavier, annonces ARIA sur le changement d'étape, respect de `prefers-reduced-motion` pour les transitions entre étapes

---

## 7. Règles SEO

Chaque page doit avoir :

```tsx
// Obligatoire dans chaque page.tsx
export const metadata: Metadata = {
  title: '...',          // Unique, < 60 caractères, incluant les mots-clés de la page
  description: '...',    // Unique, < 160 caractères
  openGraph: { ... },    // Image OG 1200x630, title, description
}
```

Obligations globales :

- Structured data **JSON-LD** dans le Root Layout : `Person` (Émilie) et `ProfessionalService` / `LocalBusiness` (zone : Pays de la Loire, Bretagne sud)
- `sitemap.xml` généré via `app/sitemap.ts`
- `robots.txt` via `app/robots.ts`
- URLs en **kebab-case**
- Alt text descriptif sur toutes les images (jamais vide sauf décoratif avec `alt=""`)
- Un seul `h1` par page, hiérarchie de titres respectée
- Mots-clés du brief à intégrer naturellement (voir liste par page dans le brief), sans keyword stuffing

---

## 8. Règles Agent — STRICTES ET OBLIGATOIRES

### Ce qu'un agent NE DOIT JAMAIS faire :

- **Installer un package** sans approbation explicite du développeur
- **Utiliser `any`** en TypeScript — justifier avec un commentaire si absolument inévitable
- **Écrire des styles inline** (`style={}`) — Tailwind CSS uniquement
- **Deviner une couleur, une police, un espacement** non couvert par ce fichier ou la charte — toujours demander
- **Utiliser le bleu (`#0CC0DF`) sur une grande surface** ou sans certitude que ça reste cohérent avec le reste — demander si doute
- **Committer directement sur `main`** — branches et PR obligatoires
- **Ajouter `'use client'`** sans vérifier si un Server Component suffit
- **Créer une nouvelle abstraction** (hook, composant générique, helper) sans vérifier si un équivalent existe déjà
- **Utiliser `console.log`** dans le code de production
- **Utiliser `as` TypeScript** sans commentaire justificatif
- **Copier le mockup Claude Design tel quel** (Babel/CDN React) — il doit être réécrit proprement en composants Next.js
- **Embarquer un fichier de police sans licence web confirmée**
- **Ajouter une base de données ou un service tiers non listé au §4** sans validation du développeur

### Ce qu'un agent DOIT TOUJOURS faire :

- **Lire ce fichier en premier** avant tout travail sur le projet
- **Vérifier les composants existants** avant d'en créer un nouveau (`src/components/`)
- **Utiliser les Server Components par défaut** — `'use client'` uniquement si interaction ou state côté client
- **Appliquer `prefers-reduced-motion`** sur toutes les animations Framer Motion
- **Ajouter un `alt` descriptif** sur chaque image
- **Valider tout input utilisateur avec Zod**, côté client et serveur
- **Suivre les Conventional Commits** pour chaque commit
- **Demander si une règle de ce document est contradictoire** avec une instruction reçue, ou si une valeur de design/contenu manque
- **Avant de proposer un commit ou une PR, s'auto-vérifier explicitement contre chaque interdit de ce §8** et signaler ce contrôle dans le résumé de fin de phase (ex : "Vérifié : aucun `any`, aucun style inline, aucune dépendance ajoutée hors liste §4")

---

## 9. Architecture des dossiers

```
emilie-website/
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx                    # Accueil
│   │   │   ├── transmettre-ceder/page.tsx
│   │   │   ├── reprendre/page.tsx
│   │   │   ├── cooperer/page.tsx
│   │   │   ├── qui-suis-je/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   └── layout.tsx
│   │   ├── api/                            # ou server actions équivalentes
│   │   │   ├── contact/
│   │   │   └── diagnostic/
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── globals.css                     # @theme : tokens couleur/typo de la charte
│   │   └── layout.tsx                      # Root layout (fonts, metadata globale, JSON-LD)
│   ├── components/
│   │   ├── ui/                             # Button, Badge, Pill, Card...
│   │   ├── sections/                       # Hero, WhyMe, ServiceGrid, Testimonial, CtaBanner...
│   │   ├── diagnostic/                     # Composants du formulaire multi-étapes
│   │   └── layout/                         # Header, Footer, Nav, MobileMenu
│   ├── lib/
│   │   ├── diagnostic/                     # questions.ts, scoring.ts
│   │   ├── email/                          # client Resend, templates
│   │   ├── fonts.ts                        # chargement next/font (temporaire next/font/google, cible next/font/local)
│   │   └── validation/                     # schémas Zod partagés
│   ├── hooks/
│   ├── types/
│   └── constants/                          # ROUTES, SEO config, contenu des pages
└── public/
    ├── images/
    └── fonts/                              # Autography, Holla, Cocomat Pro (woff2) — pas encore fournis
```

Le projet vit dans ce sous-dossier `emilie-website/` (repo Git dédié), lui-même au sein du workspace parent qui contient aussi `.CLAUDE/` (constitution maîtresse + tooling), `content/` (brief) et `reference/` (mockup, charte graphique) — ces trois derniers dossiers ne sont **pas** versionnés dans ce repo.

---

## 10. Conventions Git

**Commits — Conventional Commits, en anglais :**

```
feat: add hero section
fix: correct mobile nav z-index
perf: optimize hero image loading
content: add page copy for transmission page
chore: configure resend client
```

**Branches :** `feature/nom-de-la-feature`, `fix/description-du-bug`, `content/nom-de-la-section`

**Règles :** jamais de commit direct sur `main`, PR obligatoire avec description claire, un commit = une unité logique de travail.

---

## 11. Workflow de construction

Le mockup Claude Design (`/reference/mockup.html`) et la charte graphique (`/reference/Charte graphique Emilie.pdf`) sont les deux références visuelles. Le contenu texte vient de `/content/brief.md`.

1. Design tokens d'abord (`globals.css` `@theme`) à partir de la charte — rien ne se code avant que les tokens couleur/typo soient posés et validés
2. Composants de layout (Header/Footer/Nav) et composants UI de base
3. Page Accueil en premier (elle contient la plupart des patterns réutilisables)
4. Pages suivantes en réutilisant les composants
5. Formulaire de contact
6. Diagnostic multi-étapes
7. SEO (metadata, sitemap, JSON-LD)
8. Audit accessibilité + performance (Lighthouse / Core Web Vitals) avant déploiement
9. Déploiement Vercel

Si une valeur de design (couleur exacte, taille, espacement) ou un texte est ambigu ou manquant, **demander** avant de coder. Ne jamais inventer un texte marketing au nom d'Émilie.

**Gestion de session :** pour limiter la dérive sur un projet multi-phases, chaque phase (§ liste ci-dessus) doit idéalement démarrer dans une **conversation neuve**, avec relecture explicite de ce `CLAUDE.md` en tout début de session, plutôt que d'enchaîner toutes les phases dans un seul fil de discussion continu.

**Dossiers `/reference` et `/content` :** ils sont hors de `src/` et `public/`, donc sans impact sur le build ou le déploiement Next.js, et hors du repo Git de ce sous-dossier. Dans tous les cas, **jamais** placés dans `public/` (le brief, la charte et le mockup ne doivent pas être accessibles publiquement).
