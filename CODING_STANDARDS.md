# Coding standards

Rules for reviewing changes to this app. They apply to new and changed code; existing code that breaks a rule is tracked in an issue.

## Clear code

- **Names say what things are.** Use `applicationId`, not `id2` or `data`. Booleans read as yes/no questions (`isPending`, `hasNotes`). Functions start with a verb (`formatDate`, `validateNote`).
- **Short and flat.** Return early instead of nesting `if`s. If a function no longer fits on one screen, split it.
- **No dead code.** Delete unused imports, variables and commented-out code; git keeps the history.
- **No magic values.** Repeated strings and numbers (lengths, week counts, labels) get a named constant in one place.
- **Add comments.** Each helper in `lib/` and each server action gets a one-line comment saying when to use it or what it guards against, not a repeat of its name (`// Used by add and edit so both forms reject the same input`, not `// Validates a note`). Add a comment wherever the reason isn't obvious from the code: a gotcha (e.g. why the date uses `timeZone: "UTC"`), a rule (e.g. why withdrawn applications are left out of the response rate), or a workaround.
- **Comments explain why, not what.** `// Filter on user_id so users only see their own rows` helps; `// Set the company` doesn't. If a comment only repeats the code, rename or split the code instead.
- **Keep comments true.** Update or delete a comment when the code under it changes.
- **Formatted with Prettier** before committing.

## Separate functions

- **One job per function.** Reading the form, validating it, saving it and revalidating are separate steps. Validation lives in `lib/validation.ts`, not inline in the action.
- **Pure logic lives outside components and actions.** Anything that turns data into other data (formatting dates, counting statuses, working out the response rate, filling empty weeks) is a plain function in `lib/` that takes arguments and returns a value, with no database calls and no `FormData`. That makes it easy to read and to test.
- **Components show things; they don't calculate.** A page fetches the data, calls the `lib/` helpers, and passes the results to the JSX.
- **Write it once.** When the same logic appears a second time, move it into a shared function rather than copying it.

## Tests

These apply once Vitest is set up (#9).

- **Test the pure functions in `lib/`**: validation, date formatting, and the dashboard calculations. These are where bugs hide and where tests are cheapest.
- **One behaviour per test, named as a sentence:** `it("rejects an empty company name")`, not `it("works")`.
- **Arrange, act, assert.** Set up the input, call the function once, check the result. Keep each test short enough to read at a glance.
- **Cover the edge cases**, not only the happy path: empty strings, whitespace, invalid dates, unknown enum values, zero applications, weeks with no data.
- **Tests sit next to the code they test** (`lib/validation.test.ts` beside `lib/validation.ts`).
- **A bug fix comes with a test** that fails before the fix and passes after.

## Data and security

- **Ownership.** Every update and delete filters on both the row id **and** `user_id`: `and(eq(table.id, id), eq(table.user_id, userId))`. Every read filters on `user_id`. A user must never see or change another user's rows, including through a linked row (e.g. a note linked to an application must belong to the same user).
- **Auth.** Get the user with `const { userId } = await auth()` from `@clerk/nextjs/server`. There is no `@/lib/auth`, and `auth()` has no `.id`. Server actions check `userId` before doing anything.
- **Validate on the server.** Server actions never trust `FormData`. Check every value with the helpers in `lib/validation.ts`: required strings are trimmed and non-empty, lengths fit the column, enum values are in `enumValues`, dates are valid, and ids are positive integers. `as string` is not validation.
- **Enums are the single source of truth.** Status and category values come from `applicationStatusEnum.enumValues` and `noteCategoryEnum.enumValues`, never a hardcoded list. Display labels live in one lookup next to the enums.
- **Schema changes ship with their migration.** Commit `lib/db/schema.ts` together with the generated SQL, snapshot and journal in `drizzle/`.
- **Column names are snake_case** (`user_id`, `date_applied`).

## Server actions

- Take `formData: FormData`, run as a form `action` (not `onClick`), and call `revalidatePath` for the page they change.
- Ids travel in a hidden input and are converted with `Number(...)`, then checked to be a positive integer (`Number.isInteger(id) && id > 0`). A missing or empty id becomes `0`, which would quietly match no row.

## Components

- **Placement.** A component used by one feature lives in that feature's `_components/`. It moves to `components/` only when a second feature uses it. `components/ui/` is for shadcn components only.
- **Named exports**, except the files Next.js requires to be default exports (`page.tsx`, `layout.tsx`, `error.tsx`, `not-found.tsx`, `loading.tsx`).
- **File names** are kebab-case and singular (`edit-note.tsx`).
- **Add and edit forms are separate for now.** Each dialog has its own form, so a field change is made in both. Keep the two forms' fields in the same order, with the same `id`s, `name`s and labels. Sharing them in one fields component is a possible later refactor (#142, #143).
- **Edit forms** take the full row (`application: Application`) and use `defaultValue`, not `value`. Date inputs use `date.toISOString().slice(0, 10)`.
- **Base UI, not Radix.** Dialog triggers are written as `<DialogTrigger render={<Button />}>Label</DialogTrigger>`. There is no `asChild`.
- **`Link`** comes from `next/link`.
- **Error pages** receive `{ error, retry }` and the component is named `ErrorPage`.
- **Next.js APIs** are checked against `node_modules/next/dist/docs/` before use. This version differs from older guides.

## Display

- **Dates** go through `formatDate` in `lib/utils.ts` ("2 Nov 2026"), never `toLocaleDateString()`.
- **Enum values** are shown with their display label ("Company research", not `job`).

## Writing in the UI

- Plain language and sentence case: "Add application", "Sign in to continue".
- Short, specific button text: "Edit", "Save", "Delete". Use the same word for the same action everywhere.
- No developer words in the UI ("database", "created at").
- Delete confirmations name what is being deleted, say it can't be undone, and use the `destructive` button.

## Accessibility

- Every input has a `<label htmlFor>` that matches its `id`. Ids are unique among what's on the page at once. Fields in a row's dialog can reuse the same ids, because Base UI unmounts closed dialogs; anything shown in every row at the same time adds the row id (`company-${application.id}`).
- Required fields are marked on screen, not only with `required`.
- Buttons and icon-only controls have an accessible name.
- Colour is never the only signal: a status badge always shows its text.
- Text keeps normal contrast. Don't use `text-muted-foreground` for values the user chose or typed.
- Everything works with the keyboard, with focus visible.

## Before asking for review

- Comments are added where they're needed (see **Clear code**).
- `npx tsc --noEmit` passes (ignore `.next/`).
- `npm run lint` passes.
- Tests pass, once Vitest is set up (#9).
- The change has been tried by hand in `npm run dev`, signed in and signed out.
