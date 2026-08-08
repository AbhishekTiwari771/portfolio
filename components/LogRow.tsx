import Link from "next/link";

export default function LogRow({
  href,
  eyebrow,
  title,
  summary,
  external,
}: {
  href: string;
  eyebrow: string;
  title: string;
  summary: string;
  external?: boolean;
}) {
  const className =
    "group grid grid-cols-[5.5rem_1fr] items-baseline gap-4 border-l border-transparent py-3 no-underline transition-colors hover:border-signal sm:pl-3";

  const inner = (
    <>
      <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
        {eyebrow}
      </span>
      <span>
        <span className="block font-medium text-ink underline decoration-line decoration-1 underline-offset-4 group-hover:decoration-ink">
          {title}
        </span>
        <span className="mt-1 block text-sm text-muted no-underline">
          {summary}
        </span>
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
