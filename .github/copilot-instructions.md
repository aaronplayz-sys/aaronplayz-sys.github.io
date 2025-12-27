# al-folio AI Agent Guidelines

This document outlines essential knowledge for AI coding agents to be immediately productive in the `al-folio` codebase.

## 1. Big Picture Architecture

- **Project Type:** `al-folio` is a Jekyll theme designed for academic websites.
- **Technology Stack:** Primarily Jekyll (static site generator) with Liquid templating.
- **Content Structure:** Most content resides in Markdown (`.md`) files, styled and structured by Liquid (`.liquid`) templates.
- **Data Management:** Configuration and dynamic data are stored in YAML (`.yml`) files within the `_data/` directory.
- **Publications:** Managed using BibTeX (`.bib`) files, typically `_bibliography/papers.bib`.
- **Component Organization:** Content is categorized using Jekyll's "collections" feature (e.g., `_news`, `_projects`).

## 2. Critical Developer Workflows

- **Installation & Deployment:** Refer to `INSTALL.md` for detailed instructions.
- **Customization:** Refer to `CUSTOMIZE.md` for guidance on theme modifications.
- **Contributing:** Consult `CONTRIBUTING.md` before making significant contributions.
- **Code Quality:**
    - **Formatting:** Enforced by Prettier. Run `npm run format` or `prettier --write .`.
    - **Link Checking:** `lychee` is used for broken link detection.
    - **Accessibility:** `Axe` is available for manual accessibility testing (results require manual interpretation).

## 3. Project-Specific Conventions and Patterns

- **CV Content:** Can be generated from either `assets/json/resume.json` (JSON Resume standard) or `_data/cv.yml` (a human-readable fallback).
- **Publications Layout:** Configured in `_pages/publications.md`. BibTeX entries in `_bibliography/papers.bib` support extended fields like `pdf`, `abstract`, `code`, etc.
- **Creating Collections:** To add a new collection (e.g., "apps"), define it in `_config.yml`, create a corresponding folder (e.g., `_apps/`), and a landing page (e.g., `_pages/apps.md`).
- **Content Rendering:** Supports Distill.pub-like posts, MathJax for mathematical equations, GitHub-style code highlighting, Chart.js for charts, Mermaid for diagrams, and TikZ for figures. Includes Bootstrap's grid system for responsive media embeds.
- **GitHub Stats Integration:** Utilize `_data/repositories.yml` to configure GitHub user and repository statistics displayed on the `/repositories/` page. Liquid snippets for embedding these are available in `README.md`.
- **Theming:** The primary theme color is set via the `--global-theme-color` variable in `_sass/_themes.scss`. Additional color variables are found in `_sass/_variables.scss`.
- **Social Media Previews:** Enable by setting `serve_og_meta: true` in `_config.yml`. Customize preview images using the `og_image` variable in page front matter or site-wide in `_config.yml`.
- **Related Posts:** Automatically generated based on shared tags. Configuration is in `_config.yml` (`related_blog_posts`) or can be disabled per post (`related_posts: false` in front matter).

## 4. Integration Points & External Dependencies

- **Static Site Generation:** Jekyll
- **Mathematical Typesetting:** MathJax
- **Charting:** Chart.js
- **Diagrams:** Mermaid, TikZ
- **GitHub Data Fetching:** `github-readme-stats` and `github-profile-trophy`
- **Development Tools:** Prettier, lychee, Axe (accessibility testing tool).
