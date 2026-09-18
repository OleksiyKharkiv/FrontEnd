# Web-CV of Oleksiy Khudoshyn (Backend Developer)

Personal web CV, now a SvelteKit site (`site/`) deployed via GitHub Actions to GitHub Pages. Bilingual (German/English), dark/light theme, and — instead of screenshots — live reachability checks against my own production projects.

## Table of Contents

- [Project Overview](#project-overview)
- [Repository Structure](#repository-structure)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Demo](#demo)
- [Projects](#projects)
- [Contact](#contact)

## Project Overview

This is my personal **web CV**: backend developer background (Java/Spring Boot, Go), current projects, experience, and education, structured for both human recruiters and ATS/keyword search.

## Repository Structure

- **[`site/`](site)** — the current site. SvelteKit + `adapter-static`, prerendered, deployed automatically on every push via [`.github/workflows/deploy-site.yml`](.github/workflows/deploy-site.yml).
- **[`Resume_Khudoshyn_Oleksiy_2023.html`](Resume_Khudoshyn_Oleksiy_2023.html)** — the original single-file HTML version. Kept for history; no longer what's served at the Demo link below (GitHub Pages now serves the `site/` build).

## Technologies Used

- **SvelteKit 5** + **Vite**, deployed static (`@sveltejs/adapter-static`)
- **Tailwind CSS v4** — CSS-first `@theme` design tokens, WCAG-contrast-checked for both themes
- **`@inlang/paraglide-js`** — German/English i18n, German as the base locale
- **TypeScript**
- **GitHub Actions** — build, type-check, and deploy to GitHub Pages on every push to `site/`

## Features

- **Bilingual (DE/EN)** with a language switcher
- **Dark/light theme**, toggle persisted per visitor
- **Live status badges** on the Projects section — a real client-side reachability check against [numi.report](https://numi.report/) and [tlab29.com](https://tlab29.com/), not a static screenshot
- **Scrollspy navigation** — sticky sidebar on desktop, sticky pill nav on mobile
- **Self-hosted fonts** (no Google Fonts CDN — avoids sending visitor IPs to Google without consent)
- **Print-to-PDF** button

## Demo

Live site: **[oleksiykharkiv.github.io/FrontEnd](https://oleksiykharkiv.github.io/FrontEnd/)**

## Projects

Showcased on the CV itself, both self-hosted on my own home infrastructure (Proxmox, GitLab CI/CD):

- **[Numi](https://numi.report/)** — GoBD-compliant invoicing PWA for German Selbständige. Go backend, SvelteKit frontend, built solo end-to-end.
- **[Lebens Rhythmus / tlab29.com](https://tlab29.com/)** — booking/course-management platform for a creative-arts studio. Java/Spring Boot, PostgreSQL, Kubernetes (k3s).

Earlier project work:

- **[GutBank](https://github.com/OleksiyKharkiv/GutBank)**: A platform to improve team collaboration and synchronize information across various business units.
- **[Workout-Evo](https://gitlab.com/okh3/workout-evo)**: A workout application built with Go, following hexagonal architecture principles.
- **[MedAtlas](https://github.com/OleksiyKharkiv/MedAtlas)**: A Java Spring-based medical application with integrated authentication.

## Contact

- **Email**: [hudoshin7605@gmail.com](mailto:hudoshin7605@gmail.com)
- **LinkedIn**: [linkedin](https://www.linkedin.com/in/oleksiy-khudoshyn-5b552b65)
- **GitHub**: [github.com/okh3](https://github.com/OleksiyKharkiv)

Feel free to check out my other projects and get in touch for collaboration opportunities or questions about backend development and related technologies.
