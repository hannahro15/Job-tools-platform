import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DemoBanner } from "@/components/demo-banner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DemoBanner />
        <SidebarTrigger />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
