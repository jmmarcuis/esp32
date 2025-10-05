"use client"
import * as React from "react"
import {
  Activity,
  Archive,
  Bell,
  Command,
  Github,
  LayoutDashboard,
  Microchip,
  Settings,
  Database,
  TrendingUp,
  Wifi,
} from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Admin User",
    email: "admin@esp32dashboard.local",
    avatar: "/avatars/default.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard",
        },
        {
          title: "Real-time Monitor",
          url: "/dashboard/realtime",
        },
        {
          title: "Analytics",
          url: "/dashboard/analytics",
        },
      ],
    },
    {
      title: "Devices",
      url: "/devices",
      icon: Microchip,
      items: [
        {
          title: "All Devices",
          url: "/devices",
        },
        {
          title: "Device Status",
          url: "/devices/status",
        },
        {
          title: "Add Device",
          url: "/devices/add",
        },
      ],
    },
    {
      title: "Data Logs",
      url: "/logs",
      icon: Database,
      items: [
        {
          title: "Historical Data",
          url: "/logs/history",
        },
        {
          title: "Export Data",
          url: "/logs/export",
        },
        {
          title: "Data Retention",
          url: "/logs/retention",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [
        {
          title: "General",
          url: "/settings/general",
        },
        {
          title: "Notifications",
          url: "/settings/notifications",
        },
        {
          title: "API Configuration",
          url: "/settings/api",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "GitHub",
      url: "https://github.com/jmmarcuis",
      icon: Github,
    },
    {
      title: "Documentation",
      url: "/docs",
      icon: Archive,
    },
  ],
  projects: [
    {
      name: "ESP32 - Location A",
      url: "/devices/location-a",
      icon: Wifi,
    },
    {
      name: "ESP32 - Location B",
      url: "/devices/location-b",
      icon: Wifi,
    },
    {
      name: "ESP32 - Location C",
      url: "/devices/location-c",
      icon: Wifi,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar

      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Activity className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">ESP32 Monitor</span>
                  <span className="truncate text-xs">IoT Dashboard</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}