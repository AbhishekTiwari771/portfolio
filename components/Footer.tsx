export default function Footer() {
  return (
    <footer className="mt-24 flex items-center justify-between border-t border-line pt-6 font-mono text-xs text-muted">
      <span>© {new Date().getFullYear()} Abhishek</span>
      <div className="flex gap-4">
        <a href="mailto:abhishek" className="no-underline hover:text-ink">
          email
        </a>
        <a
          href="https://github.com/AbhishekTiwari771"
          className="no-underline hover:text-ink"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <a
          href="https://linkedin.com/in/abhishek771"
          className="no-underline hover:text-ink"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
      </div>
    </footer>
  );
}
