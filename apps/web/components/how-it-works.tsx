import { libraries } from "@/lib/data";

export function HowItWorks() {
  return (
    <section className="border-b">
      <div className="grid border-t md:grid-cols-2 md:divide-x">
        {/* Heading — left column, vertically centered */}
        <div className="flex items-center px-6 py-16 md:py-24">
          <div className="space-y-4 md:text-center md:mx-auto md:max-w-xs">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              How it works
            </h2>
            <p className="text-muted-foreground">
              No scraping, no external APIs at runtime. Just static file fetches
              from the registry.
            </p>
          </div>
        </div>
        {/* Terminal — right column */}
        <div className="border-t md:border-t-0">
          <div className="space-y-4 p-6 font-mono text-sm">
            <div>
              <span className="text-muted-foreground">$</span>{" "}
              <span className="text-[#FF0080]">anytext</span>{" "}
              <span className="text-[#0070F3]">list</span>
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
            <div>
              <span className="text-muted-foreground">$</span>{" "}
              <span className="text-[#FF0080]">anytext</span>{" "}
              <span className="text-[#0070F3]">read</span>{" "}
              <span className="text-[#79FFE1]">react</span>{" "}
              <span className="text-[#79FFE1]">hooks</span>
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
