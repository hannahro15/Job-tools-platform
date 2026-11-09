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
- `app/(app)/(private)/<feature>/actions.ts` – server actions (`"use server"`)
- `components/` – feature components (dialogs, sidebar); `components/ui/` – shadcn components
- `lib/db/schema.ts` – tables, enums and row types (`Application`, `Note` via `$inferSelect`)
- `drizzle/` – migrations (commit the SQL, snapshot and journal together with the schema change)

## Conventions and gotchas

- **Auth:** `import { auth } from "@clerk/nextjs/server"` and `const { userId } = await auth()`. There is no `@/lib/auth`, and `auth()` has no `.id`.
- **Ownership:** every update and delete must filter on both the row id **and** `user_id`, using `and(eq(table.id, id), eq(table.user_id, userId))`. Every read filters on `user_id`.
- **Column names are snake_case** (`user_id`, `created_at`, `date_applied`), not camelCase.
- **Server actions** take `formData: FormData`, are used as a form `action` (not `onClick`), and call `revalidatePath` afterwards. Pass ids through a hidden input and convert them with `Number(...)`.
- **Base UI, not Radix:** use the `render` prop, e.g. `<DialogTrigger render={<Button />}>Label</DialogTrigger>`. There is no `asChild`.
- **`Link`** comes from `next/link`, not `lucide-react` (which only has a link icon).
- **Edit forms** take the full row (`application: Application`, `note: Note`) and use `defaultValue`, not `value`. Date inputs need `date.toISOString().slice(0, 10)`.
- **Error pages** (`error.tsx`) get `{ error, retry }`; this Next version uses `retry`, not `reset`. Check `node_modules/next/dist/docs/` before relying on memory.
- File names are kebab-case and singular (`add-note.tsx`, `edit-note.tsx`); components use named exports (except `AddApplication`, which is a default export).
