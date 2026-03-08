import { libraries } from "@/lib/data";

export function Libraries() {
  return (
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
  );
}
