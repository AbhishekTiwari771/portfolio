"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid a hydration mismatch: we don't know the resolved theme
  // until we're on the client.
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="w-9 font-mono text-xs text-muted">···</span>;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="font-mono text-xs uppercase tracking-wider text-muted no-underline hover:text-ink"
    >
      {isDark ? "light" : "dark"}
    </button>
  );
}
