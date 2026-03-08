import { CodeBlock } from "@/components/code-block";

export function GetStarted() {
  return (
    <section id="install" className="grid border-b sm:grid-cols-2 sm:divide-x">
      <CodeBlock
        label="Install"
        highlighted={
          <>
            <span className="text-green-400">npm</span>{" "}
            <span className="text-sky-400">install</span>{" "}
            <span className="text-amber-300">-g</span>{" "}
            <span className="text-foreground">anytext-cli</span>
          </>
        }
      >
        npm install -g anytext-cli
      </CodeBlock>
      <CodeBlock
        label="Add skill to your agent"
        highlighted={
          <>
            <span className="text-green-400">npx</span>{" "}
            <span className="text-sky-400">skills</span>{" "}
            <span className="text-sky-400">add</span>{" "}
            <span className="text-foreground">ruiyuwg/anytext</span>
          </>
        }
      >
        npx skills add ruiyuwg/anytext
      </CodeBlock>
    </section>
  );
}
