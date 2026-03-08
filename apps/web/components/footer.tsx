export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-sm text-muted-foreground">
        <span>anytext</span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ruiyuwg/anytext"
            className="hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/anytext-cli"
            className="hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            npm
          </a>
          <span>MIT License</span>
        </div>
      </div>
    </footer>
  );
}
