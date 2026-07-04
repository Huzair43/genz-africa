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

---
title: "Recherche de stage académique et post-académique"
description: "Guide pratique pour aider les étudiants à mieux organiser leur recherche de stage."
category: "Carrière"
tags: ["stage", "emploi", "étudiants", "carrière"]
author: "GenZ Africa"
date: "2026-07-03"
readingTime: "8 min"
published: true
---

Une ressource avec `published: false` n’est pas affichée sur le site.

## Déploiement GitHub Pages

1. Pousser le projet sur GitHub.
2. Dans les paramètres du dépôt, activer GitHub Pages avec GitHub Actions.
3. Ajouter un workflow qui installe les dépendances et lance `npm run build`.
4. Publier le dossier `dist/`.

Si le site est publié sous une URL de type `https://utilisateur.github.io/nom-du-repo/`, ajouter `base: "/nom-du-repo"` dans `astro.config.mjs`.

## Déploiement Cloudflare Pages

1. Connecter le dépôt GitHub à Cloudflare Pages.
2. Framework preset: `Astro`.
3. Build command: `npm run build`.
4. Output directory: `dist`.

## Export Notion

L’export Notion n’est pas encore présent dans ce dossier. Les six ressources demandées ont donc été créées directement en Markdown propre. Quand l’export sera disponible, il suffira de remplacer ou enrichir les fichiers existants sans changer la structure du site.
```

