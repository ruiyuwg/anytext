import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LibraryLogo } from "@/components/library-logo";

interface Library {
  id: string;
  name: string;
  description: string;
  version: string;
  topics: { id: string }[];
}

interface Manifest {
  version: number;
  updatedAt: string;
  libraries: Library[];
}

function getManifest(): Manifest {
  const manifestPath = join(process.cwd(), "../../registry/manifest.json");
  return JSON.parse(readFileSync(manifestPath, "utf-8"));
}

export default function RegistryPage() {
  const manifest = getManifest();
  const totalTopics = manifest.libraries.reduce(
    (sum, lib) => sum + lib.topics.length,
    0
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 md:pt-32">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Registry
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {totalTopics} topics across {manifest.libraries.length} libraries.
            Updated {manifest.updatedAt}.
          </p>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {manifest.libraries.map((lib) => (
              <div
                key={lib.id}
                className="flex gap-4 rounded-lg border bg-card p-5 transition-colors hover:border-foreground/20"
              >
                <LibraryLogo id={lib.id} size={48} />
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2">
                    <h2 className="font-semibold">{lib.name}</h2>
                    <span className="text-xs text-muted-foreground">
                      v{lib.version}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {lib.description}
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    {lib.topics.length} topics
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
