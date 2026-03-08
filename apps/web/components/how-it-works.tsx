import { Separator } from "@/components/ui/separator";
import { libraries } from "@/lib/data";

const steps = [
  {
    number: "01",
    title: "Agent calls anytext",
    description: (
      <>
        Your coding agent runs{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
          anytext read react hooks
        </code>
      </>
    ),
  },
  {
    number: "02",
    title: "Cache check",
    description: (
      <>
        CLI checks{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
          ~/.anytext/
        </code>{" "}
        — cache hit returns in under 50ms
      </>
    ),
  },
  {
    number: "03",
    title: "Fetch & cache",
    description:
      "On miss, fetches clean markdown from the GitHub registry, caches locally, returns to stdout",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b">
      <div className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-xl space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">
            How it works
          </h2>
          <p className="text-muted-foreground">
            No scraping, no external APIs at runtime. Just static file fetches
            from the registry.
          </p>
        </div>
      </div>
      <div className="grid border-t md:grid-cols-2 md:divide-x">
        {/* Steps — left column */}
        <div className="grid grid-rows-3 divide-y">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4 p-6">
              <div className="text-xs text-muted-foreground font-mono pt-0.5">
                {step.number}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">{step.title}</p>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Terminal demo — right column */}
        <div className="border-t md:border-t-0">
          <div className="space-y-4 p-6 font-mono text-sm">
            <div>
              <span className="text-muted-foreground">$</span>{" "}
              <span className="text-foreground">anytext list</span>
            </div>
            <div className="text-muted-foreground leading-relaxed">
              {libraries.map((lib) => (
                <div key={lib.name}>
                  {lib.name === "..." ? (
                    <span className="text-muted-foreground">...</span>
                  ) : (
                    <>
                      <span className="text-foreground">{lib.name}</span>
                      <span className="text-muted-foreground">
                        {" "}
                        {lib.version} ({lib.topics} topics)
                      </span>
                    </>
                  )}
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
      </div>
    </section>
  );
}
