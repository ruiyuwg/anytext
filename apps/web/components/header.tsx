import { Button } from "@/components/ui/button";
import { Terminal, Github, Package } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-2 font-semibold tracking-tight">
          <Terminal className="h-5 w-5" />
          anytext
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href="/registry">Registry</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://github.com/ruiyuwg/anytext"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-1.5 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://www.npmjs.com/package/anytext-cli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Package className="mr-1.5 h-4 w-4" />
              npm
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
