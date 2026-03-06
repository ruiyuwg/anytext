import type { Manifest, Library, Topic } from "../../types.js";

export function makeTopic(overrides?: Partial<Topic>): Topic {
  return {
    id: "hooks",
    title: "Hooks",
    description: "React hooks reference",
    tags: ["useState", "useEffect"],
    path: "react/hooks.md",
    tokens: 2000,
    ...overrides,
  };
}

export function makeLibrary(overrides?: Partial<Library>): Library {
  return {
    id: "react",
    name: "React",
    description: "A JavaScript library for building user interfaces",
    version: "19.0",
    topics: [
      makeTopic(),
      makeTopic({
        id: "components",
        title: "Components",
        description: "Component patterns",
        tags: [],
        path: "react/components.md",
        tokens: 3000,
      }),
    ],
    ...overrides,
  };
}

export function makeManifest(overrides?: Partial<Manifest>): Manifest {
  return {
    version: 1,
    updatedAt: "2025-01-01",
    libraries: [
      makeLibrary(),
      makeLibrary({
        id: "nextjs",
        name: "Next.js",
        description: "The React framework",
        version: "15.0",
        topics: [
          makeTopic({
            id: "routing",
            title: "Routing",
            description: "App router and file-based routing",
            tags: ["app-router", "pages"],
            path: "nextjs/routing.md",
            tokens: 4000,
          }),
          makeTopic({
            id: "server-components",
            title: "Server Components",
            description: "React Server Components in Next.js",
            tags: ["rsc", "server"],
            path: "nextjs/server-components.md",
            tokens: 3500,
          }),
        ],
      }),
    ],
    ...overrides,
  };
}
