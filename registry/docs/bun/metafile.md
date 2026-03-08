### metafile

Generate metadata about the build in a structured format. The metafile contains information about all input files, output files, their sizes, imports, and exports. This is useful for:

- **Bundle analysis**: Understand what's contributing to bundle size
- **Visualization**: Feed into tools like [esbuild's bundle analyzer](https://esbuild.github.io/analyze/) or other visualization tools
- **Dependency tracking**: See the full import graph of your application
- **CI integration**: Track bundle size changes over time

  ```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
  const result = await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './dist',
    metafile: true,
  });

  if (result.metafile) {
    // Analyze inputs
    for (const [path, meta] of Object.entries(result.metafile.inputs)) {
      console.log(`${path}: ${meta.bytes} bytes`);
    }

    // Analyze outputs
    for (const [path, meta] of Object.entries(result.metafile.outputs)) {
      console.log(`${path}: ${meta.bytes} bytes`);
    }

    // Save for external analysis tools
    await Bun.write('./dist/meta.json', JSON.stringify(result.metafile));
  }
  ```

  ```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
  bun build ./src/index.ts --outdir ./dist --metafile ./dist/meta.json
  ```

#### Markdown metafile

Use `--metafile-md` to generate a markdown metafile, which is LLM-friendly and easy to read in the terminal:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./src/index.ts --outdir ./dist --metafile-md ./dist/meta.md
```

Both `--metafile` and `--metafile-md` can be used together:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./src/index.ts --outdir ./dist --metafile ./dist/meta.json --metafile-md ./dist/meta.md
```

#### `metafile` option formats

In the JavaScript API, `metafile` accepts several forms:

```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
// Boolean — include metafile in the result object
await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  metafile: true,
});

// String — write JSON metafile to a specific path
await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  metafile: "./dist/meta.json",
});

// Object — specify separate paths for JSON and markdown output
await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  metafile: {
    json: "./dist/meta.json",
    markdown: "./dist/meta.md",
  },
});
```

The metafile structure contains:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
interface BuildMetafile {
  inputs: {
    [path: string]: {
      bytes: number;
      imports: Array<{
        path: string;
        kind: ImportKind;
        original?: string; // Original specifier before resolution
        external?: boolean;
      }>;
      format?: "esm" | "cjs" | "json" | "css";
    };
  };
  outputs: {
    [path: string]: {
      bytes: number;
      inputs: {
        [path: string]: { bytesInOutput: number };
      };
      imports: Array<{ path: string; kind: ImportKind }>;
      exports: string[];
      entryPoint?: string;
      cssBundle?: string; // Associated CSS file for JS entry points
    };
  };
}
```
