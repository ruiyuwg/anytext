import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CodeBlock } from "@/components/code-block";

export const metadata: Metadata = {
  title: "Docs - anytext",
  description:
    "Installation, usage, and configuration guide for the anytext CLI.",
};

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-muted px-1.5 py-0.5 text-sm">{children}</code>
  );
}

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2 id={id} className="text-xl font-semibold scroll-mt-20">
      {children}
    </h2>
  );
}

function Hl({
  color,
  children,
}: {
  color: "green" | "sky" | "amber" | "muted";
  children: React.ReactNode;
}) {
  const styles = {
    green: "text-[#FF0080]",
    sky: "text-[#0070F3]",
    amber: "text-[#79FFE1]",
    muted: "text-[#666]",
  };
  return <span className={styles[color]}>{children}</span>;
}

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 md:border-x">
        <section className="border-b">
          <div className="px-6 py-10 md:py-16">
            <div className="mx-auto max-w-xl space-y-4 text-center">
              <h1 className="text-balance text-3xl font-semibold md:text-4xl">
                Documentation
              </h1>
              <p className="text-muted-foreground">
                Installation, commands, and configuration for the anytext CLI.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-2xl space-y-12 px-6 py-12">
            {/* Installation */}
            <div className="space-y-4">
              <SectionHeading id="installation">Installation</SectionHeading>
              <p className="text-sm text-muted-foreground">
                Requires Node.js 18 or later. Install globally via npm:
              </p>
              <CodeBlock
                variant="card"
                highlighted={
                  <>
                    <Hl color="green">npm</Hl> <Hl color="sky">install</Hl>{" "}
                    <Hl color="amber">-g</Hl> anytext-cli
                  </>
                }
              >
                npm install -g anytext-cli
              </CodeBlock>
              <p className="text-sm text-muted-foreground">
                Or use npx to run without installing:
              </p>
              <CodeBlock
                variant="card"
                highlighted={
                  <>
                    <Hl color="green">npx</Hl> <Hl color="sky">anytext-cli</Hl>{" "}
                    <Hl color="amber">list</Hl>
                  </>
                }
              >
                npx anytext-cli list
              </CodeBlock>
            </div>

            {/* Agent skill */}
            <div className="space-y-4">
              <SectionHeading id="agent-skill">Agent skill</SectionHeading>
              <p className="text-sm text-muted-foreground">
                Add anytext as a skill to your coding agent (Claude Code,
                Cursor, etc.):
              </p>
              <CodeBlock
                variant="card"
                highlighted={
                  <>
                    <Hl color="green">npx</Hl> <Hl color="sky">skills</Hl>{" "}
                    <Hl color="sky">add</Hl> ruiyuwg/anytext
                  </>
                }
              >
                npx skills add ruiyuwg/anytext
              </CodeBlock>
              <p className="text-sm text-muted-foreground">
                Once added, your agent can call <Code>anytext</Code> commands
                directly from its tool loop.
              </p>
            </div>

            {/* Commands */}
            <div className="space-y-4">
              <SectionHeading id="commands">Commands</SectionHeading>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">
                    <Code>anytext list</Code>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    List all available libraries and their topic counts.
                  </p>
                  <CodeBlock
                    variant="card"
                    highlighted={
                      <>
                        <Hl color="green">anytext</Hl>{" "}
                        <Hl color="sky">list</Hl>
                        {"              "}
                        <Hl color="muted"># all libraries</Hl>
                        {"\n"}
                        <Hl color="green">anytext</Hl>{" "}
                        <Hl color="sky">list</Hl>{" "}
                        <Hl color="amber">react</Hl>
                        {"        "}
                        <Hl color="muted"># topics for a library</Hl>
                      </>
                    }
                  >
                    {`anytext list              # all libraries\nanytext list react        # topics for a library`}
                  </CodeBlock>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">
                    <Code>anytext read &lt;library&gt; &lt;topic&gt;</Code>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Read a specific topic. Outputs plain markdown to stdout.
                  </p>
                  <CodeBlock
                    variant="card"
                    highlighted={
                      <>
                        <Hl color="green">anytext</Hl>{" "}
                        <Hl color="sky">read</Hl>{" "}
                        <Hl color="amber">react</Hl>{" "}
                        <Hl color="amber">hooks</Hl>
                        {"\n"}
                        <Hl color="green">anytext</Hl>{" "}
                        <Hl color="sky">read</Hl>{" "}
                        <Hl color="amber">nextjs</Hl>{" "}
                        <Hl color="amber">routing</Hl>
                      </>
                    }
                  >
                    {`anytext read react hooks\nanytext read nextjs routing`}
                  </CodeBlock>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">
                    <Code>anytext search &lt;query&gt;</Code>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Search across all docs. Returns ranked results with library,
                    topic, and token count.
                  </p>
                  <CodeBlock
                    variant="card"
                    highlighted={
                      <>
                        <Hl color="green">anytext</Hl>{" "}
                        <Hl color="sky">search</Hl>{" "}
                        <Hl color="amber">
                          &quot;server components&quot;
                        </Hl>
                      </>
                    }
                  >
                    {`anytext search "server components"`}
                  </CodeBlock>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">
                    <Code>anytext cache</Code>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Manage the local cache at <Code>~/.anytext/</Code>. Manifest
                    is cached for 24 hours; docs are cached until the manifest
                    version changes.
                  </p>
                  <CodeBlock
                    variant="card"
                    highlighted={
                      <>
                        <Hl color="green">anytext</Hl>{" "}
                        <Hl color="sky">cache</Hl>{" "}
                        <Hl color="amber">status</Hl>
                        {"      "}
                        <Hl color="muted"># show cache info</Hl>
                        {"\n"}
                        <Hl color="green">anytext</Hl>{" "}
                        <Hl color="sky">cache</Hl>{" "}
                        <Hl color="amber">clear</Hl>
                        {"       "}
                        <Hl color="muted"># clear all cached data</Hl>
                      </>
                    }
                  >
                    {`anytext cache status      # show cache info\nanytext cache clear       # clear all cached data`}
                  </CodeBlock>
                </div>
              </div>
            </div>

            {/* Update */}
            <div className="space-y-4">
              <SectionHeading id="update">Update</SectionHeading>
              <p className="text-sm text-muted-foreground">
                Update to the latest version:
              </p>
              <CodeBlock
                variant="card"
                highlighted={
                  <>
                    <Hl color="green">npm</Hl> <Hl color="sky">update</Hl>{" "}
                    <Hl color="amber">-g</Hl> anytext-cli
                  </>
                }
              >
                npm update -g anytext-cli
              </CodeBlock>
              <p className="text-sm text-muted-foreground">
                Check your current version with{" "}
                <Code>anytext --version</Code>.
              </p>
            </div>

            {/* Uninstall */}
            <div className="space-y-4">
              <SectionHeading id="uninstall">Uninstall</SectionHeading>
              <p className="text-sm text-muted-foreground">
                Remove the CLI and clear cached data:
              </p>
              <CodeBlock
                variant="card"
                highlighted={
                  <>
                    <Hl color="green">npm</Hl>{" "}
                    <Hl color="sky">uninstall</Hl>{" "}
                    <Hl color="amber">-g</Hl> anytext-cli
                    {"\n"}
                    <Hl color="green">rm</Hl> <Hl color="amber">-rf</Hl>{" "}
                    ~/.anytext
                  </>
                }
              >
                {`npm uninstall -g anytext-cli\nrm -rf ~/.anytext`}
              </CodeBlock>
            </div>
          </div>
        </section>
      </main>
      <div className="py-12" />
      <Footer />
    </div>
  );
}
