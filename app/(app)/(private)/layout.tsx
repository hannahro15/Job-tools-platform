import { auth } from "@clerk/nextjs/server"
import { SignInButton } from "@clerk/nextjs"

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
    const { userId } = await auth()

    if (!userId) {
        return (
            <div>
            <h1>Sign In to continue</h1><SignInButton />
           </div>
    )
    }
  return children
}
