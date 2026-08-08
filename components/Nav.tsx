import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "index" },
  { href: "/projects", label: "projects" },
  { href: "/writing", label: "writing" },
];

export default function Nav() {
  return (
    <header className="mb-16 flex items-center justify-between">
      <Link
        href="/"
        className="font-mono text-sm font-medium tracking-tight no-underline"
      >
        abhishek<span className="text-signal">.</span>
      </Link>
      <nav className="flex items-center gap-5 font-mono text-xs uppercase tracking-wider text-muted">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="no-underline hover:text-ink">
            {l.label}
          </Link>
        ))}
        <span className="text-line">|</span>
        <ThemeToggle />
      </nav>
    </header>
  );
}
