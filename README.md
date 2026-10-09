# Job-tools-platform

A job-related platform where there will be a variety of tools such as an application tracker to help with job hunting including a chatbot which will help candidates talk through their frustrations of job hunting!

**[Try the live demo](https://job-tools-platform.vercel.app/)**

## Features

- ✅ **Authentication** – secure sign up and log in so each user's applications, notes, and data stay private

## Planned Features

- **Application Tracker** – keep track of job applications and their status
- **Notes** – jot down thoughts, recruiter call notes, or technical notes
- **Job Board** – browse and search job listings
- **Job Recommendation System** – suggests jobs based on your profile and preferences
- **ATS Scanner** – checks your resume against applicant tracking systems
- **Chatbot** – talk through job hunting frustrations and get support
- **Discussion Forum** – community space to share advice, experiences, and support
- **Resume Builder/Editor** – create and tailor resumes for specific roles
- **Interview Prep** – mock interview questions and practice, including technical/coding interviews
- **Neurodivergent Support** – tailored resources and accommodations guidance for neurodivergent jobseekers
- **Analytics Dashboard** – visualize application success rates, response times, etc.

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

2. Create a `.env.local` file in the project root with the following variables. Get the two Clerk keys from the Clerk dashboard under **API Keys**, and the database URL from your Neon project's **Connect** button. Never commit this file.

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

3. Start the development server:

   ```bash
   npm run dev
   ```

   Then open [http://localhost:3000](http://localhost:3000).

### Scripts

- `npm run dev` – start the development server
- `npm run build` – build the app for production
- `npm run start` – run the production build
- `npm run lint` – check the code with ESLint

## Project Structure

- `app/(app)/` – pages that show the sidebar (home, dashboard, applications, notes, etc.)
- `app/(auth)/` – sign in and sign up pages
- `components/` – shared components, including the sidebar
- `components/ui/` – shadcn/ui components
- `proxy.ts` – Clerk setup that decides which pages need signing in
