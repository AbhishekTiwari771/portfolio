import Link from "next/link";
import LogRow from "@/components/LogRow";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <div>
      <h1 className="font-mono text-2xl font-medium tracking-tight text-ink">
        Abhishek
      </h1>
      <p className="mt-4 max-w-md text-ink">
        I turn data into meaningful insights.

I’m a Computer Science student who enjoys building data analytics tools, interactive dashboards, and digital experiences. </p>

     
      <p className="mt-4 max-w-md text-muted">
        You can see my{" "}
        <Link href="/projects" className="text-ink">
          projects
        </Link>
        , read my{" "}
        <Link href="/writing" className="text-ink">
          writing
        </Link>
        , or find me on{" "}
        <a href="https://github.com/AbhishekTiwari771" target="_blank" rel="noreferrer" className="text-ink">
          GitHub
        </a>
        .
      </p>

      <section className="mt-16">
        <div className="mb-2 flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
            Featured projects
          </h2>
          <Link href="/projects" className="font-mono text-xs text-muted no-underline hover:text-ink">
            all →
          </Link>
        </div>
        <div className="divide-y divide-line">
          {featuredProjects.map((p) => (
            <LogRow
              key={p.slug}
              href={`/projects#${p.slug}`}
              eyebrow={p.year}
              title={p.title}
              summary={p.stack}
            />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-2 flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
            Recent writing
          </h2>
          <Link href="/writing" className="font-mono text-xs text-muted no-underline hover:text-ink">
            all →
          </Link>
        </div>
        <div className="divide-y divide-line">
          {latestPosts.map((post) => (
            <LogRow
              key={post.slug}
              href={`/writing/${post.slug}`}
              eyebrow={post.date.slice(0, 7)}
              title={post.title}
              summary={post.summary}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
