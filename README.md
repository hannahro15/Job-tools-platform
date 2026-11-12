# Job-tools-platform

A job-related platform with a variety of tools to help with job hunting, starting with an application tracker. It's designed with neurodivergent jobseekers in mind: plain language, a calm layout, and support resources on disclosure and workplace adjustments.

**[Try the live demo](https://job-tools-platform.vercel.app/)**

## Features

- ✅ **Authentication** – secure sign up and log in so each user's applications, notes, and data stay private
- ✅ **Application Tracker** – add your job applications, see them in a table (newest first), edit them (the form opens with the current details), and delete them (with a confirmation step). Each user only sees their own applications
- ✅ **Notes** – write notes such as recruiter calls, interview thoughts or technical notes, each with a category. You can add, view (newest first), edit and delete them
- ✅ **404 and error pages** – friendly pages for missing URLs and unexpected errors, with a way back home

## Planned Features

- **Application Tracker improvements** – filter by status, an Assessment status for tests and assessment centres, and changing status straight from the table
- **Job Boards and Communities** – a curated list of job boards and jobseeker communities, including inclusive and neurodiversity-friendly ones
- **Cover Letter Templates** – templates to copy and adapt for each application
- **Interview Question Guide** – common interview questions by type, with tips and the STAR method
- **Neurodivergent Support** – resources on disclosure, interview adjustments and workplace accommodations, plus adjustment request templates
- **Dashboard** – simple stats on your job search: applications by status, applications per week, and response rate

## Design

Wireframes of every page, drawn before building them. They're a snapshot of the current plan: the built pages may look a little different, and the planned pages will change as they're built.

### Built pages

**Home** (signed out)

![Home page: the app name, a one-line description, Sign up and Sign in buttons, and cards for the application tracker, notes and neurodivergent support](docs/wireframes/home.png)

**Application tracker**

![Application tracker: a table of job applications with the date applied, company, role, location, a status badge, and Edit and Delete buttons](docs/wireframes/application-tracker.png)

**Application tracker on a phone**

<img src="docs/wireframes/application-tracker-phone.png" width="300" alt="Application tracker at phone width: each application is a card with the company, status badge, role, location and date, and full-width Edit and Delete buttons">

**Notes**

![Notes: one column of note cards, each with a title, a category badge, the date added, the note text, and Edit and Delete buttons](docs/wireframes/notes.png)

**Empty states**

![Empty states: "No applications yet" and "No notes yet", each with a short explanation and an Add button](docs/wireframes/empty-states.png)

<details>
<summary><strong>Planned pages</strong></summary>

**Dashboard**

![Dashboard: total applications, response rate, a count for each status, and a bar chart of applications per week for the last 8 weeks](docs/wireframes/dashboard.png)

**Neurodivergent support**

![Neurodivergent support: cards linking to guides on telling an employer, interview adjustments and support at work, plus message templates for asking for adjustments](docs/wireframes/neurodivergent-support.png)

**Job boards & communities**

![Job boards and communities: placeholder links grouped as general, tech, remote and inclusive employers, followed by communities](docs/wireframes/job-boards-and-communities.png)

**Cover letter templates**

![Cover letter templates: standard, career change and speculative templates, each with a preview and a Copy template button](docs/wireframes/cover-letter-templates.png)

**Interview prep**

![Interview prep: the STAR method in four steps, then example questions and tips for behavioural, technical and general questions](docs/wireframes/interview-prep.png)

</details>

<details>
<summary><strong>Other screens</strong></summary>

**Private page, signed out**

![A private page seen while signed out: "Sign in to continue", a short reason, and Sign in and Create a free account buttons](docs/wireframes/sign-in-prompt.png)

**Sign in**

![Sign in page: the app name, a placeholder where Clerk's sign-in form goes, and a link back to the home page](docs/wireframes/sign-in.png)

**Page not found**

![Page not found: "Page not found", a short explanation and a Go to the home page button](docs/wireframes/page-not-found.png)

**Error page**

![Error page: "Something went wrong", a short explanation, and Try again and Go to the home page buttons](docs/wireframes/error-page.png)

</details>

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Base UI](https://base-ui.com/)
- [Clerk](https://clerk.com/) – authentication
- [Neon](https://neon.tech/) – Postgres database
- [Drizzle](https://orm.drizzle.team/) – database ORM

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.9 or later
- A free [Clerk](https://clerk.com/) account
- A free [Neon](https://neon.tech/) account

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root with the following variables. Get the two Clerk keys from the Clerk dashboard under **API Keys**, and the database URL from your Neon project's **Connect** button. Never commit this file.

   ```bash
   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

   # Neon
   DATABASE_URL=your_neon_connection_string
   ```

   Use `.env`, not `.env.local`: Drizzle's migration tool only reads `.env`.

3. Create the database tables by running the migrations:

   ```bash
   npx drizzle-kit migrate
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   Then open [http://localhost:3000](http://localhost:3000).

### Scripts

- `npm run dev` – start the development server
- `npm run build` – build the app for production
- `npm run start` – run the production build
- `npm run lint` – check the code with ESLint
- `npx tsc --noEmit` – type check the code
- `npx drizzle-kit generate` – create a migration after changing `lib/db/schema.ts`
- `npx drizzle-kit migrate` – apply migrations to the database
- `npx drizzle-kit studio` – browse the database in the browser

## Project Structure

- `app/(app)/` – pages that show the sidebar (home, job boards, interview prep, etc.)
- `app/(app)/(private)/` – pages that need signing in (dashboard, applications, notes, etc.). Signed-out visitors see a sign-in message instead
- `app/(app)/(private)/applications/` – the application tracker: `page.tsx`, `actions.ts` (server actions for adding, editing and deleting applications) and `_components/` (the add/edit/delete dialogs)
- `app/(app)/(private)/notes/` – notes: `page.tsx`, `actions.ts` (server actions for adding, editing and deleting notes) and `_components/` (the add/edit/delete dialogs)
- `_components/` folders – components used by only one feature. The `_` prefix tells Next.js they aren't routes
- `app/(app)/error.tsx` and `app/not-found.tsx` – error and 404 pages
- `app/(auth)/` – sign in and sign up pages
- `components/` – components shared across the app: the sidebar, demo banner and coming soon message
- `components/ui/` – shadcn/ui components
- `hooks/` – React hooks (`use-mobile.ts` tells the sidebar when to switch to its phone layout)
- `lib/db/` – database connection and Drizzle schema
- `lib/utils.ts` – small shared helpers
- `drizzle/` – database migrations
- `proxy.ts` – runs Clerk on every request so pages and server actions know who is signed in
- `CODING_STANDARDS.md` – the rules the code follows: ownership checks, validation, naming, comments, tests and accessibility
