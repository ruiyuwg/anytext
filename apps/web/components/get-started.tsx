import { CodeBlock } from "@/components/code-block";

export function GetStarted() {
  return (
    <section id="install" className="grid border-b divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0">
      <CodeBlock
        label="Install"
        highlighted={
          <>
            <span className="text-[#FF0080]">npm</span>{" "}
            <span className="text-[#0070F3]">install</span>{" "}
            <span className="text-[#79FFE1]">-g</span>{" "}
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
            <span className="text-[#FF0080]">npx</span>{" "}
            <span className="text-[#0070F3]">skills</span>{" "}
            <span className="text-[#0070F3]">add</span>{" "}
            <span className="text-foreground">ruiyuwg/anytext</span>
          </>
        }
      >
        npx skills add ruiyuwg/anytext
      </CodeBlock>
    </section>
  );
}
