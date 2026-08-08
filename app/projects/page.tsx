import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Abhishek",
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="font-mono text-xl font-medium tracking-tight text-ink">
        Projects
      </h1>
      <p className="mt-3 max-w-md text-muted">
        A running log of things I've built
      </p>

      <div className="mt-10 space-y-10">
        {projects.map((p) => (
          <article key={p.slug} id={p.slug} className="scroll-mt-24 border-t border-line pt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-base font-medium text-ink">{p.title}</h2>
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                {p.year} · {p.status}
              </span>
            </div>
            <p className="mt-2 font-mono text-xs text-signal">{p.stack}</p>
            <p className="mt-2 max-w-md text-sm text-ink">{p.summary}</p>
            {p.href && (
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block font-mono text-xs text-computed"
              >
                view →
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
