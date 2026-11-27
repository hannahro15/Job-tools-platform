import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold py-4">
        Welcome to the Job Tools Platform!!
      </h1>
      <Show when="signed-out">
        <SignInButton>
          <Button variant="outline">Sign in</Button>
        </SignInButton>
        <SignUpButton>
          <Button>Sign up</Button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <Button nativeButton={false} render={<Link href="/applications" />}>
          Go to Applications
        </Button>
      </Show>
      <p className="italic py-2 text-center">
        A platform for neurodivergent job seekers with a range of tools and
        resources to support their job search.
      </p>
      <h2 className="text-xl font-bold text-center py-4">Current Features</h2>
      <ul className="list-disc ml-5">
        <li>Track your job applications from start to finish.</li>
        <li>Organise and manage notes related to your job search.</li>
        <li>Access interview preparation resources and tips.</li>
      </ul>
      <h2 className="text-xl font-bold text-center py-4">Coming Soon</h2>
      <ul className="list-disc ml-5">
        <li>Access support for neurodivergent job seekers.</li>
        <li>Dashboard for an overview of your job search progress.</li>
        <li>Job boards and communities for networking and opportunities.</li>
      </ul>
    </div>
  );
}
