"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type Device = {
  id: string
  status: "online" | "offline" | "warning"
  location: string
  voltage: number
  temperature: number
  vibrations: number
  current: number
  powerFactor: number
}

export const columns: ColumnDef<Device>[] = [
  {
    accessorKey: "id",
    header: "Device ID",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          className={cn(
            "capitalize",
            status === "online" && "bg-green-500/80 text-white",
            status === "warning" && "bg-yellow-500/80 text-white",
            status === "offline" && "bg-red-500/80 text-white"
          )}
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "voltage",
    header: "Voltage (V)",
    cell: ({ row }) => <span>{row.getValue("voltage")} V</span>,
  },
  {
    accessorKey: "current",
    header: "Current (A)",
    cell: ({ row }) => <span>{row.getValue("current")} A</span>,
  },
  {
    accessorKey: "temperature",
    header: "Temp (°C)",
    cell: ({ row }) => (
      <span
        className={cn(
          "font-medium",
          (row.getValue("temperature") as number) > 30 && "text-red-500"
        )}
      >
        {row.getValue("temperature")}°C
      </span>
    ),
  },
  {
    accessorKey: "vibrations",
    header: "Vibrations (Hz)",
  },
  {
    accessorKey: "powerFactor",
    header: "Power Factor",
  },
]
