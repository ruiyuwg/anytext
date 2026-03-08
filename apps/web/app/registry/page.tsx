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
      <main className="mx-auto w-full max-w-5xl flex-1 md:border-x">
        <section className="border-b">
          <div className="px-6 py-16 md:py-24">
            <div className="mx-auto max-w-xl space-y-4 text-center">
              <h1 className="text-balance text-3xl font-semibold md:text-4xl">
                Registry
              </h1>
              <p className="text-muted-foreground">
                {totalTopics} topics across {manifest.libraries.length}{" "}
                libraries. Updated {manifest.updatedAt}.
              </p>
            </div>
          </div>
          <div className="grid divide-x divide-y border-t sm:grid-cols-2 lg:grid-cols-3">
            {manifest.libraries.map((lib) => (
              <div key={lib.id} className="flex gap-4 p-6">
                <LibraryLogo id={lib.id} size={40} />
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-sm font-medium">{lib.name}</h2>
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
      <div className="py-12" />
      <Footer />
    </div>
  );
}
