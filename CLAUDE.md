@AGENTS.md

# Job Tools Platform

A portfolio project: job-search tools for jobseekers, with a focus on neurodivergent users. Live demo on Vercel. Work is tracked in GitHub issues on the "Job Tools Platform" project board.

## Working with me

- I'm learning and want to write the code myself. Give hints, explanations and pointers to my own existing code, not ready-made solutions, unless I explicitly ask you to make a change.
- Review my changes when I ask "how is it now?": check `git diff`, run `npx tsc --noEmit`, and point to exact lines.
- Functionality first, styling later.
- Keep the scope small. This is a portfolio project, not a product.
- Don't suggest CI. Don't add Claude co-author lines to commits or PRs.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Clerk for auth, Neon Postgres, Drizzle ORM
- Tailwind CSS v4, shadcn/ui on **Base UI** (not Radix), lucide-react icons
- Prettier for formatting (`.prettierrc` uses defaults)

## Commands

- `npm run dev`, `npm run build`, `npm run lint`
- `npx tsc --noEmit` to type check (ignore errors in `.next/`; they're stale generated files, so restart the dev server)
- `npx drizzle-kit generate` after changing `lib/db/schema.ts`, then `npx drizzle-kit migrate`
- `npx drizzle-kit studio` to browse the database
- Env vars live in `.env` (not `.env.local`, because drizzle-kit only reads `.env`)

## Structure

- `app/(app)/` – pages with the sidebar; public pages live here
- `app/(app)/(private)/` – signed-in pages; the layout shows a sign-in prompt when signed out
- `app/(app)/(private)/<feature>/` – each feature is self-contained: `page.tsx`, `actions.ts` (server actions, `"use server"`) and `_components/` (dialogs used only by that feature; `_` keeps the folder out of routing)
- `components/` – only components shared across the app (sidebar, demo banner, coming soon); `components/ui/` – shadcn components
- A new component used by one feature goes in that feature's `_components/`; move it to `components/` only once a second feature needs it
- `lib/db/schema.ts` – tables, enums and row types (`Application`, `Note` via `$inferSelect`)
- `drizzle/` – migrations (commit the SQL, snapshot and journal together with the schema change)

## Coding standards

Read `CODING_STANDARDS.md` before writing or reviewing code: ownership checks, auth, server actions, validation, Base UI, naming, comments, tests and accessibility.
