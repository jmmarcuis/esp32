"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function DevicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex w-screen h-screen">
        <AppSidebar />
        <main className="flex-1 p-6 ">
          <SidebarTrigger className="-ml-1" />

          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}
