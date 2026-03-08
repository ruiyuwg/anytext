import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { libraries } from "@/lib/data";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 md:pt-32">
      <div className="mb-6 flex gap-2">
        <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium">
          Open Source
        </span>
        <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium">
          Beta
        </span>
      </div>
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        Instant docs for
        <br />
        coding agents
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        Give your coding agent fast access to clean, LLM-ready documentation for
        any library. Zero dependencies, plain markdown, sub-50ms cached reads.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button size="lg" asChild>
          <a href="#install">Get Started</a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a
            href="https://github.com/ruiyuwg/anytext"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </Button>
      </div>

      {/* Terminal demo */}
      <div className="mt-16 rounded-lg border bg-card shadow-2xl">
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
          <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
          <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
          <span className="ml-2 text-xs text-muted-foreground font-mono">
            terminal
          </span>
        </div>
        <div className="space-y-4 p-6 font-mono text-sm">
          <div>
            <span className="text-muted-foreground">$</span>{" "}
            <span className="text-foreground">anytext list</span>
          </div>
          <div className="text-muted-foreground leading-relaxed">
            {libraries.map((lib) => (
              <div key={lib.name}>
                <span className="text-foreground">{lib.name}</span>
                <span className="text-muted-foreground">
                  {" "}
                  {lib.version} ({lib.topics} topics)
                </span>
              </div>
            ))}
          </div>
          <Separator />
          <div>
            <span className="text-muted-foreground">$</span>{" "}
            <span className="text-foreground">anytext read react hooks</span>
          </div>
          <div className="text-muted-foreground">
            <div className="text-foreground font-bold"># React Hooks</div>
            <div className="mt-1">
              Hooks let you use state and other React features...
            </div>
            <div className="mt-1 text-muted-foreground/60">
              (2,847 tokens, cached in 12ms)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
