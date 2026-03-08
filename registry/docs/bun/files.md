### files

A map of file paths to their contents for in-memory bundling. This allows you to bundle virtual files that don't exist on disk, or override the contents of files that do exist. This option is only available in the JavaScript API.

File contents can be provided as a `string`, `Blob`, `TypedArray`, or `ArrayBuffer`.

#### Bundle entirely from memory

You can bundle code without any files on disk by providing all sources via `files`:

```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const result = await Bun.build({
  entrypoints: ["/app/index.ts"],
  files: {
    "/app/index.ts": `
      import { greet } from "./greet.ts";
      console.log(greet("World"));
    `,
    "/app/greet.ts": `
      export function greet(name: string) {
        return "Hello, " + name + "!";
      }
    `,
  },
});

const output = await result.outputs[0].text();
console.log(output);
```

When all entrypoints are in the `files` map, the current working directory is used as the root.

#### Override files on disk

In-memory files take priority over files on disk. This lets you override specific files while keeping the rest of your codebase unchanged:

```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
// Assume ./src/config.ts exists on disk with development settings
await Bun.build({
  entrypoints: ["./src/index.ts"],
  files: {
    // Override config.ts with production values
    "./src/config.ts": `
      export const API_URL = "https://api.production.com";
      export const DEBUG = false;
    `,
  },
  outdir: "./dist",
});
```

#### Mix disk and virtual files

Real files on disk can import virtual files, and virtual files can import real files:

```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
// ./src/index.ts exists on disk and imports "./generated.ts"
await Bun.build({
  entrypoints: ["./src/index.ts"],
  files: {
    // Provide a virtual file that index.ts imports
    "./src/generated.ts": `
      export const BUILD_ID = "${crypto.randomUUID()}";
      export const BUILD_TIME = ${Date.now()};
    `,
  },
  outdir: "./dist",
});
```

This is useful for code generation, injecting build-time constants, or testing with mock modules.

### outdir

The directory where output files will be written.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const result = await Bun.build({
  entrypoints: ['./index.ts'],
  outdir: './out'
});
// => { success: boolean, outputs: BuildArtifact[], logs: BuildMessage[] }
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.ts --outdir ./out
```
````

If `outdir` is not passed to the JavaScript API, bundled code will not be written to disk. Bundled files are returned in an array of `BuildArtifact` objects. These objects are Blobs with extra properties; see [Outputs](#outputs) for complete documentation.

```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const result = await Bun.build({
  entrypoints: ["./index.ts"],
});

for (const res of result.outputs) {
  // Can be consumed as blobs
  await res.text();

  // Bun will set Content-Type and Etag headers
  new Response(res);

  // Can be written manually, but you should use `outdir` in this case.
  Bun.write(path.join("out", res.path), res);
}
```

When `outdir` is set, the `path` property on a `BuildArtifact` will be the absolute path to where it was written to.
