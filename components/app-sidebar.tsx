import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import {
  Briefcase,
  HeartHandshake,
  LayoutDashboard,
  MessagesSquare,
  NotebookPen,
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

// Each link in the sidebar: the text, where it goes, and its icon
const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Application Tracker", url: "/applications", icon: Briefcase },
  { title: "Notes", url: "/notes", icon: NotebookPen },
  { title: "Interview Prep", url: "/interview-prep", icon: MessagesSquare },
  {
    title: "Neurodivergent Support",
    url: "/neurodiverse-support",
    icon: HeartHandshake,
  },
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
        <UserButton />
      </SidebarFooter>
    </Sidebar>
  )
}
