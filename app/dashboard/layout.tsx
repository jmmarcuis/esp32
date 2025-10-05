import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex w-screen h-screen">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <SidebarTrigger className="-ml-1" />

          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
