"use client"

import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDarkMode = resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
    </div>
  )
}
