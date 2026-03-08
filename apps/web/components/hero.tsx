export function Hero() {
  return (
    <section className="border-b">
      <div className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-xl space-y-6 text-center">
          <div className="flex justify-center gap-2">
            <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium">
              Open Source
            </span>
            <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium">
              Beta
            </span>
          </div>
          <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
            Instant docs for coding agents
          </h1>
          <p className="text-lg text-muted-foreground">
            Give your coding agent fast access to clean, LLM-ready
            documentation for any library. Zero dependencies, plain markdown,
            sub-50ms cached reads.
          </p>
        </div>
      </div>
    </section>
  );
}
