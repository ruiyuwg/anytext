import { GithubDark } from "@/components/ui/svgs/githubDark";
import { Npm } from "@/components/ui/svgs/npm";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-sm text-muted-foreground">
        <span className="font-[family-name:var(--font-instrument-serif)] italic text-base">anytext</span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ruiyuwg/anytext"
            className="hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubDark className="h-4 w-4" />
          </a>
          <a
            href="https://www.npmjs.com/package/anytext-cli"
            className="hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="npm"
          >
            <Npm className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
