# Personal site

A minimal Next.js + Tailwind personal site: index / projects / writing.
Inspired by leerob.com's stripped-down layout, with its own look (mono
"log line" list style, warm paper background, subtle dot grid).

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit your content

- `app/page.tsx` — the homepage bio/intro text.
- `data/projects.ts` — your project list. Add a new object to the array for each project.
- `content/posts/*.mdx` — your writing. One `.mdx` file per post (see "Writing posts" below).
- `components/Footer.tsx` — swap in your real email/GitHub/LinkedIn links.
- `app/layout.tsx` — page title, meta description, and OG data.

## Writing posts

Add a new file to `content/posts/`, named `your-slug.mdx`. The filename becomes the URL:
`content/posts/my-post.mdx` → `/writing/my-post`.

Each file needs frontmatter, then Markdown/MDX content below it:

```mdx
---
title: "Your post title"
date: "2026-08-09"
summary: "One sentence shown in the writing list."
---

Write normally in Markdown: **bold**, _italic_, [links](/projects),

## Headings

- bullet lists
- work too

\`\`\`python
# fenced code blocks are syntax-styled
print("hello")
\`\`\`
```

New posts automatically show up on `/writing`, sorted newest first by `date`, and the two most recent appear on the homepage.

## Dark mode

There's a light/dark toggle in the nav (defaults to the visitor's system preference). Colors are defined once as CSS variables in `app/globals.css` under `:root` (light) and `.dark` (dark) — edit those two blocks to retheme either mode.

## Deploy

The fastest path is Vercel (free for personal sites):

1. Push this folder to a GitHub repo.
2. Go to vercel.com, import the repo, click Deploy. No config needed.
3. Optional: add a custom domain in Vercel's project settings.

## Notes

- Colors, fonts, and spacing live in `tailwind.config.ts` and `app/globals.css` if you want to restyle.
- Long-form post styling (headings, code, quotes, links) comes from `@tailwindcss/typography`, configured in `tailwind.config.ts` under `theme.extend.typography`.
# portfolio
