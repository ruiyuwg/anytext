import { CodeBlock } from "@/components/code-block";

export function GetStarted() {
  return (
    <section id="install" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
        Get started
      </h2>
      <p className="mt-2 text-muted-foreground">
        Install globally, add the skill, and you&apos;re done.
      </p>
      <div className="mt-8 space-y-4">
        <CodeBlock label="Install">npm install -g anytext-cli</CodeBlock>
        <CodeBlock label="Add skill to your agent">
          npx skills add ruiyuwg/anytext
        </CodeBlock>
        <CodeBlock label="Use it">{`anytext list                         # List all libraries
anytext list react                   # List topics for React
anytext search "server components"   # Search across all docs
anytext read react hooks             # Read a specific topic`}</CodeBlock>
      </div>
    </section>
  );
}
