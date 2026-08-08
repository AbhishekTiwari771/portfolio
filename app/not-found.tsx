import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-muted">
        404
      </p>
      <h1 className="mt-2 font-mono text-xl font-medium text-ink">
        Not found
      </h1>
      <p className="mt-3 text-muted">
        <Link href="/" className="text-ink">
          Go back home
        </Link>
      </p>
    </div>
  );
}
