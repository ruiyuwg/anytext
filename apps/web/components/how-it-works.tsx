export function HowItWorks() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
        How it works
      </h2>
      <p className="mt-2 max-w-lg text-muted-foreground">
        No scraping, no external APIs at runtime. Just static file fetches from
        the registry.
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
              On miss, fetches clean markdown from the GitHub registry, caches
              locally, returns to stdout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
