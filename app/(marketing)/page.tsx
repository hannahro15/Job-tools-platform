import Link from "next/link";
import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Show when="signed-out">
        <SignInButton>
          <Button variant="outline">Sign in</Button>
        </SignInButton>
        <SignUpButton>
          <Button>Sign up</Button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <Button nativeButton={false} render={<Link href="/dashboard" />}>Go to dashboard</Button>
      </Show>
    </div>
  );
}
