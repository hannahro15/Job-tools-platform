import Link from "next/link"
import { Show, SignInButton, UserButton } from "@clerk/nextjs"
import {
  Briefcase,
  HeartHandshake,
  LayoutDashboard,
  MessagesSquare,
  NotebookPen,
  House,
  ScanSearch,
  Search,
  Users,
  Bot,
  FileText,
  MailPen,
  User
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

// Each link in the sidebar: the text, where it goes, and its icon
const items = [
  { title: "Home", url: "/", icon: House },
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Job Board", url: "/job-board", icon: Search },
  { title: "Application Tracker", url: "/applications", icon: Briefcase },
  { title: "Notes", url: "/notes", icon: NotebookPen },
  { title: "Resume Builder", url:"/resume-builder", icon: FileText },
  { title: "Cover Letter Builder", url:"/cover-letter-builder", icon: MailPen},
  { title: "ATS Scanner", url: "/ats-scanner", icon: ScanSearch },
  { title: "Interview Prep", url: "/interview-prep", icon: MessagesSquare },
  { title: 'Career Support Chatbot', url: "/chatbot", icon: Bot},
  { title: "Job Forum", url: "/forum" , icon: Users },
  {
    title: "Neurodivergent Support",
    url: "/neurodivergent-support",
    icon: HeartHandshake,
  },
  { title: "Profile", url: "/profile", icon: User}
  

]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton render={<Link href={item.url} />}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Show when="signed-out">
          <SignInButton>
            <Button className="w-full">Sign in</Button>
          </SignInButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </SidebarFooter>
    </Sidebar>
  )
}
