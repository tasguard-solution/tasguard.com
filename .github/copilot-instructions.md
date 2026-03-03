# Copilot agent instructions — Tasguard.com web front-end

Purpose: help an AI coding agent become productive quickly in this repository (Vite + React frontend).

- **Big picture**: a client-side single-page app built with Vite + React. Entry is `src/main.tsx` → `src/app/App.tsx` (RouterProvider). Routes are declared in `src/app/routes.ts` and render pages from `src/app/pages/*`. Reusable UI primitives live under `src/app/components/ui/` and page-level components under `src/app/components/`.

- **Build & run**: install deps (`npm i` or `pnpm install`), run dev server with `npm run dev` (runs `vite`), build with `npm run build` (runs `vite build`). Vite plugins `react()` and `tailwindcss()` are required in `vite.config.ts` — do not remove them.

- **Important files**:
  - `src/main.tsx` — app bootstrap
  - `src/app/App.tsx` — top-level RouterProvider
  - `src/app/routes.ts` — central routing (React Router v7 style; uses `Component` props and nested `Outlet`)
  - `src/app/pages/*` — page components (Home, Services, Team, Root)
  - `src/app/components/ui/*` — small Radix/Tailwind wrappers and UI primitives
  - `src/app/components/figma/ImageWithFallback.tsx` — image helper used across pages
  - `src/styles/*` — `tailwind.css`, `index.css`, `theme.css`, `fonts.css`
  - `vite.config.ts` — alias `@` → `src`, `assetsInclude` rules (only `svg` and `csv` allowed)

- **Conventions & patterns**:
  - Use TypeScript `.ts`/`.tsx` for all new files.
  - Components are mostly presentational and styled with Tailwind utility classes. Prefer small, focused components in `components/ui` for reuse.
  - Routing: add new routes in `src/app/routes.ts` and import page components from `src/app/pages`. Use the `Component` key and nested routes via `Outlet` (example: add `{ path: "about", Component: About }`).
  - Alias imports: `@/` maps to `src/` (defined in `vite.config.ts`). Use it for cross-file imports when appropriate.
  - Assets: `vite.config.ts` explicitly limits `assetsInclude` to `**/*.svg` and `**/*.csv` — avoid adding other file types to this setting. Put images in `public/` or reference external URLs as the project currently does.

- **Style / Tailwind**: Tailwind is used globally. The project requires the Tailwind Vite plugin. Edit utility classes directly in JSX; global tokens live in `src/styles/theme.css` and `src/styles/tailwind.css`.

- **Local editable data**: some pages embed editable arrays/objects (example: `teamMembers` in `src/app/pages/Team.tsx`). For quick content updates prefer editing these arrays rather than creating new data sources.

- **Dependencies & environment notes**:
  - Many UI primitives depend on Radix packages and utility libs (see `package.json`). `react` and `react-dom` are declared as peerDependencies — ensure local environment provides compatible React (React 18+ recommended).
  - Package manager: repo README suggests `npm`, but `package.json` contains a `pnpm` override. Agents should not change package-manager-specific configs without human review.

- **What NOT to change**:
  - Do not remove `react()` and `tailwindcss()` from `vite.config.ts` — the comment explicitly warns they are required for Make.
  - Do not add `.css`, `.tsx`, or `.ts` to `assetsInclude` in `vite.config.ts`.

- **Editing examples** (follow patterns already in repo):
  - Add a route: import the new page in `src/app/routes.ts`, then add a child entry under the `Root` route: `{ path: "new", Component: NewPage }`.
  - Reusable UI: add small primitives under `src/app/components/ui/` and import them into pages; prefer composition over large page-specific components.

- **Testing & CI**: there are no test files or CI configs in the repo. Prefer manual verification via `npm run dev` and browser inspection when making UI changes.

If any part of this is unclear or you'd like me to expand examples (route addition, component template, or a quick PR with a starter component), say which area and I'll iterate.
