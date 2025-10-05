
import { Device, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Device[]> {
  return [
    {
      id: "ESP32-001",
      status: "online",
      location: "Building A - Floor 1",
      voltage: 220.5,
      temperature: 28.3,
      vibrations: 1.2,
      current: 5.8,
      powerFactor: 0.95,
    },
    {
      id: "ESP32-002",
      status: "online",
      location: "Building A - Floor 2",
      voltage: 218.7,
      temperature: 31.5,
      vibrations: 2.1,
      current: 6.3,
      powerFactor: 0.92,
    },
    {
      id: "ESP32-003",
      status: "warning",
      location: "Building B - Floor 1",
      voltage: 215.2,
      temperature: 35.8,
      vibrations: 3.5,
      current: 7.1,
      powerFactor: 0.88,
    },
    {
      id: "ESP32-004",
      status: "offline",
      location: "Building B - Floor 2",
      voltage: 0,
      temperature: 0,
      vibrations: 0,
      current: 0,
      powerFactor: 0,
    },
    {
      id: "ESP32-005",
      status: "online",
      location: "Building C - Floor 1",
      voltage: 221.3,
      temperature: 29.7,
      vibrations: 1.5,
      current: 5.4,
      powerFactor: 0.96,
    },
    {
      id: "ESP32-006",
      status: "online",
      location: "Building C - Floor 2",
      voltage: 219.8,
      temperature: 27.2,
      vibrations: 1.8,
      current: 6.0,
      powerFactor: 0.94,
    },
    {
      id: "ESP32-007",
      status: "warning",
      location: "Building D - Floor 1",
      voltage: 216.5,
      temperature: 33.2,
      vibrations: 2.9,
      current: 6.8,
      powerFactor: 0.89,
    },
  ]
}

export default async function DevicesPage() {
  const data = await getData()

  return (
    <div className="px-6 py-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold tracking-tight">ESP32 Devices</h1>
        <p className="text-muted-foreground">
          Monitor and manage your ESP32 device fleet.
        </p>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  )
}
