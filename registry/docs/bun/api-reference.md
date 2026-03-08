## API reference

The `compile` option in `Bun.build()` accepts three forms:

```ts title="types" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
interface BuildConfig {
  entrypoints: string[];
  compile: boolean | Bun.Build.Target | CompileBuildOptions;
  // ... other BuildConfig options (minify, sourcemap, define, plugins, etc.)
}

interface CompileBuildOptions {
  target?: Bun.Build.Target; // Cross-compilation target
  outfile?: string; // Output executable path
  execArgv?: string[]; // Runtime arguments (process.execArgv)
  autoloadTsconfig?: boolean; // Load tsconfig.json (default: false)
  autoloadPackageJson?: boolean; // Load package.json (default: false)
  autoloadDotenv?: boolean; // Load .env files (default: true)
  autoloadBunfig?: boolean; // Load bunfig.toml (default: true)
  windows?: {
    icon?: string; // Path to .ico file
    hideConsole?: boolean; // Hide console window
    title?: string; // Application title
    publisher?: string; // Publisher name
    version?: string; // Version string
    description?: string; // Description
    copyright?: string; // Copyright notice
  };
}
```

Usage forms:

```ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
// Simple boolean - compile for current platform (uses entrypoint name as output)
compile: true

// Target string - cross-compile (uses entrypoint name as output)
compile: "bun-linux-x64"

// Full options object - specify outfile and other options
compile: {
  target: "bun-linux-x64",
  outfile: "./myapp",
}
```

### Supported targets

```ts title="Bun.Build.Target" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
type Target =
  | "bun-darwin-x64"
  | "bun-darwin-x64-baseline"
  | "bun-darwin-arm64"
  | "bun-linux-x64"
  | "bun-linux-x64-baseline"
  | "bun-linux-x64-modern"
  | "bun-linux-arm64"
  | "bun-linux-x64-musl"
  | "bun-linux-arm64-musl"
  | "bun-windows-x64"
  | "bun-windows-x64-baseline"
  | "bun-windows-x64-modern"
  | "bun-windows-arm64";
```

### Complete example

```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import type { BunPlugin } from "bun";

const myPlugin: BunPlugin = {
  name: "my-plugin",
  setup(build) {
    // Plugin implementation
  },
};

const result = await Bun.build({
  entrypoints: ["./src/cli.ts"],
  compile: {
    target: "bun-linux-x64",
    outfile: "./dist/mycli",
    execArgv: ["--smol"],
    autoloadDotenv: false,
    autoloadBunfig: false,
  },
  minify: true,
  sourcemap: "linked",
  bytecode: true,
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    VERSION: JSON.stringify("1.0.0"),
  },
  plugins: [myPlugin],
});

if (result.success) {
  console.log("Build successful:", result.outputs[0].path);
}
```
