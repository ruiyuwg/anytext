import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubDark } from "@/components/ui/svgs/githubDark";
import { Npm } from "@/components/ui/svgs/npm";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-[family-name:var(--font-instrument-serif)] italic text-xl">
          anytext
        </Link>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs">Docs</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/registry">Registry</Link>
          </Button>
          <Button variant="ghost" size="icon-sm" asChild>
            <a
              href="https://github.com/ruiyuwg/anytext"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubDark className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon-sm" asChild>
            <a
              href="https://www.npmjs.com/package/anytext-cli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="npm"
            >
              <Npm className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
