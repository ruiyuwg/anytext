import { FeatureCard } from "@/components/feature-card";
import { Zap, FileText, Clock, Eye, Wifi, HardDrive } from "lucide-react";

export function Features() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Why anytext?
        </h2>
        <p className="mt-2 max-w-lg text-muted-foreground">
          Coding agents hallucinate outdated APIs when they can&apos;t access
          docs. Existing solutions all have tradeoffs.
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
  );
}
