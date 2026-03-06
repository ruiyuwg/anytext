import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Terminal,
  Zap,
  FileText,
  HardDrive,
  GithubIcon,
  Package,
  ArrowRight,
  Copy,
  Clock,
  Eye,
  Wifi,
} from "lucide-react";

const libraries = [
  { name: "Next.js", version: "v15", topics: 287 },
  { name: "React", version: "v19", topics: 161 },
  { name: "Drizzle ORM", version: "v0.36", topics: 161 },
  { name: "AI SDK", version: "v4", topics: 128 },
  { name: "Hono", version: "v4", topics: 63 },
  { name: "tRPC", version: "v11", topics: 62 },
  { name: "Zod", version: "v3", topics: 28 },
  { name: "Tailwind CSS", version: "v4", topics: 6 },
];

function CodeBlock({
  children,
  label,
}: {
  children: string;
  label?: string;
}) {
  return (
    <div className="group relative rounded-lg border bg-card">
      {label && (
        <div className="border-b px-4 py-2 text-xs text-muted-foreground font-mono">
          {label}
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm font-mono text-foreground">
        <code>{children}</code>
      </pre>
      <button
        className="absolute right-3 top-3 rounded-md p-1.5 text-muted-foreground opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100"
        aria-label="Copy to clipboard"
      >
        <Copy className="h-4 w-4" />
      </button>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border bg-card p-6 transition-colors hover:border-foreground/20">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-muted">
        <Icon className="h-5 w-5 text-foreground" />
      </div>
      <h3 className="mb-1 text-sm font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <Terminal className="h-5 w-5" />
            anytext
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/ruiyuwg/anytext"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="mr-1.5 h-4 w-4" />
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

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 md:pt-32">
          <div className="mb-6 flex gap-2">
            <Badge variant="secondary">Open Source</Badge>
            <Badge variant="outline">Beta</Badge>
          </div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Instant docs for
            <br />
            coding agents
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Give your coding agent fast access to clean, LLM-ready
            documentation for any library. Zero dependencies, plain markdown,
            sub-50ms cached reads.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="#install">
                Get Started
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/ruiyuwg/anytext"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="mr-1.5 h-4 w-4" />
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
                <span className="text-foreground">
                  anytext read react hooks
                </span>
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

        {/* Why */}
        <section className="border-y bg-muted/30">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Why anytext?
            </h2>
            <p className="mt-2 max-w-lg text-muted-foreground">
              Coding agents hallucinate outdated APIs when they can&apos;t
              access docs. Existing solutions all have tradeoffs.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={Zap}
                title="Zero dependencies"
                description="Uses only Node.js built-ins. No native modules, no runtime bloat."
              />
              <FeatureCard
                icon={FileText}
                title="Plain markdown"
                description="Output goes straight to stdout. No JSON wrapping, no protocol overhead."
              />
              <FeatureCard
                icon={Clock}
                title="Sub-50ms cached reads"
                description="Local cache at ~/.anytext means repeat calls return instantly."
              />
              <FeatureCard
                icon={Eye}
                title="Transparent registry"
                description="Every doc is in the repo. Audit, fork, or contribute directly."
              />
              <FeatureCard
                icon={Wifi}
                title="Offline capable"
                description="Works without internet after the first cache population."
              />
              <FeatureCard
                icon={HardDrive}
                title="Single install"
                description="One CLI, one skill — instant access to all libraries."
              />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            How it works
          </h2>
          <p className="mt-2 max-w-lg text-muted-foreground">
            No scraping, no external APIs at runtime. Just static file fetches
            from the registry.
          </p>
          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold">
                1
              </div>
              <div>
                <p className="font-medium">Agent calls anytext</p>
                <p className="text-sm text-muted-foreground">
                  Your coding agent runs{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                    anytext read react hooks
                  </code>
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold">
                2
              </div>
              <div>
                <p className="font-medium">Cache check</p>
                <p className="text-sm text-muted-foreground">
                  CLI checks{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                    ~/.anytext/
                  </code>{" "}
                  — cache hit returns in under 50ms
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold">
                3
              </div>
              <div>
                <p className="font-medium">Fetch & cache</p>
                <p className="text-sm text-muted-foreground">
                  On miss, fetches clean markdown from the GitHub registry,
                  caches locally, returns to stdout
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Libraries */}
        <section className="border-y bg-muted/30">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Supported libraries
            </h2>
            <p className="mt-2 text-muted-foreground">
              896 topics across 8 libraries. Updated weekly via CI.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {libraries.map((lib) => (
                <div
                  key={lib.name}
                  className="rounded-lg border bg-card px-4 py-3 transition-colors hover:border-foreground/20"
                >
                  <div className="font-medium">{lib.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {lib.version} &middot; {lib.topics} topics
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Install */}
        <section id="install" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Get started
          </h2>
          <p className="mt-2 text-muted-foreground">
            Install globally, add the skill, and you&apos;re done.
          </p>
          <div className="mt-8 space-y-4">
            <CodeBlock label="Install">
              npm install -g anytext-cli
            </CodeBlock>
            <CodeBlock label="Add skill to your agent">
              npx skills add ruiyuwg/anytext
            </CodeBlock>
            <CodeBlock label="Use it">{`anytext list                         # List all libraries
anytext list react                   # List topics for React
anytext search "server components"   # Search across all docs
anytext read react hooks             # Read a specific topic`}</CodeBlock>
          </div>
        </section>
      </main>

      {/* Footer */}
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
    </div>
  );
}
