import type { Metadata } from "next";
import LogRow from "@/components/LogRow";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing — Abhishek",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="font-mono text-xl font-medium tracking-tight text-ink">
        Writing
      </h1>
      <p className="mt-3 max-w-md text-muted">
        things I learn along the way.
      </p>

      <div className="mt-10 divide-y divide-line">
        {posts.map((post) => (
          <LogRow
            key={post.slug}
            href={`/writing/${post.slug}`}
            eyebrow={post.date}
            title={post.title}
            summary={post.summary}
          />
        ))}
        {posts.length === 0 && (
          <p className="py-6 text-sm text-muted">
            Nothing published yet — add an .mdx file to content/posts.
          </p>
        )}
      </div>
    </div>
  );
}
