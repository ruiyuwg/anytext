import { CodeBlock } from "@/components/code-block";

export function GetStarted() {
  return (
    <section id="install" className="grid border-b sm:grid-cols-2 sm:divide-x">
      <CodeBlock label="Install">npm install -g anytext-cli</CodeBlock>
      <CodeBlock label="Add skill to your agent">
        npx skills add ruiyuwg/anytext
      </CodeBlock>
    </section>
  );
}
