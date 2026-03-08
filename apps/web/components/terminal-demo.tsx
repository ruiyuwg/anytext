import { Separator } from "@/components/ui/separator";
import { libraries } from "@/lib/data";

export function TerminalDemo() {
  return (
    <section className="border-b">
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
    </section>
  );
}
