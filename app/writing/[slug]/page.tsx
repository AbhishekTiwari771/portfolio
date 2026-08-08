import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  return { title: post ? `${post.title} — Abhishek` : "Not found" };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <article>
      <Link
        href="/writing"
        className="font-mono text-xs text-muted no-underline hover:text-ink"
      >
        ← writing
      </Link>
      <h1 className="mt-4 font-mono text-xl font-medium tracking-tight text-ink">
        {post.title}
      </h1>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted">
        {post.date}
      </p>
      <div className="prose prose-sm mt-8 sm:prose-base">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
