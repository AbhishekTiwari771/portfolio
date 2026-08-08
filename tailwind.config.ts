import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        signal: "rgb(var(--color-signal) / <alpha-value>)",
        computed: "rgb(var(--color-computed) / <alpha-value>)",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      maxWidth: {
        prose: "42rem",
      },
      backgroundImage: {
        dots: "radial-gradient(circle, rgb(var(--color-dot)) 1px, transparent 1px)",
      },
      backgroundSize: {
        dots: "18px 18px",
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.ink"),
            "--tw-prose-headings": theme("colors.ink"),
            "--tw-prose-links": theme("colors.ink"),
            "--tw-prose-bold": theme("colors.ink"),
            "--tw-prose-counters": theme("colors.muted"),
            "--tw-prose-bullets": theme("colors.line"),
            "--tw-prose-hr": theme("colors.line"),
            "--tw-prose-quotes": theme("colors.ink"),
            "--tw-prose-quote-borders": theme("colors.signal"),
            "--tw-prose-captions": theme("colors.muted"),
            "--tw-prose-code": theme("colors.signal"),
            "--tw-prose-pre-code": theme("colors.ink"),
            "--tw-prose-pre-bg": "rgb(var(--color-code-bg))",
            "--tw-prose-th-borders": theme("colors.line"),
            "--tw-prose-td-borders": theme("colors.line"),
            maxWidth: "none",
            fontFamily: "var(--font-sans)",
            a: { textDecorationColor: theme("colors.line"), fontWeight: "500" },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
            code: {
              fontFamily: "var(--font-mono)",
              fontWeight: "500",
              fontSize: "0.875em",
            },
            pre: {
              border: `1px solid ${theme("colors.line")}`,
              borderRadius: "0.375rem",
            },
            "h1, h2, h3, h4": {
              fontFamily: "var(--font-mono)",
              fontWeight: "500",
              letterSpacing: "-0.01em",
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
export default config;
