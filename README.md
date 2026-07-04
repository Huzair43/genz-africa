# GenZ Africa

Site statique Astro pour GenZ Africa, une communauté d’entraide entre étudiants et jeunes professionnels burkinabè.

## Fonctionnalités

- Page d’accueil responsive avec message de mission et ressources mises en avant
- Page ressources avec recherche côté client et filtres par catégorie
- Pages d’articles générées depuis des fichiers Markdown
- Pages À propos et Contact sans backend
- SEO de base, Open Graph, sitemap et favicon
- Compatible GitHub Pages et Cloudflare Pages

## Prérequis

- Node.js 18 ou plus
- npm

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Astro lance le site localement, généralement sur `http://localhost:4321`.

## Build

```bash
npm run build
```

La version statique est générée dans `dist/`.

## Prévisualisation

```bash
npm run preview
```

## Ajouter ou modifier une ressource

Les articles sont dans `src/content/ressources/`.

Chaque fichier Markdown doit contenir un frontmatter de ce type:

```md

