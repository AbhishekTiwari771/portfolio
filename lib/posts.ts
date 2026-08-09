import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // always normalized to YYYY-MM-DD
  summary: string;
};

export type Post = PostMeta & {
  content: string; // raw MDX body
};

// YAML auto-parses an unquoted `date: 2026-08-08` into a JS Date object
// instead of a string. Normalize whatever we get into a plain
// "YYYY-MM-DD" string so the rest of the app can always call string
// methods on it safely.
function normalizeDate(value: unknown, slug: string): string {
  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim();
  }
  if (value instanceof Date && !isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  console.warn(
    `[posts] "${slug}" is missing a valid "date" in its frontmatter — ` +
      `wrap it in quotes, e.g. date: "2026-08-09". Falling back to today's date.`
  );
  return new Date().toISOString().slice(0, 10);
}

function normalizeString(value: unknown, field: string, slug: string): string {
  if (typeof value === "string" && value.trim().length > 0) {
    return value;
  }
  console.warn(`[posts] "${slug}" is missing "${field}" in its frontmatter.`);
  return "";
}

function readPostMeta(filename: string): PostMeta {
  const slug = filename.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
  const { data } = matter(raw);

  return {
    slug,
    title: normalizeString(data.title, "title", slug),
    date: normalizeDate(data.date, slug),
    summary: normalizeString(data.summary, "summary", slug),
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map(readPostMeta);

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: normalizeString(data.title, "title", slug),
    date: normalizeDate(data.date, slug),
    summary: normalizeString(data.summary, "summary", slug),
    content,
  };
}
