### target

The intended execution environment for the bundle.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.ts'],
  outdir: './out',
  target: 'browser', // default
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.ts --outdir ./out --target browser
```
````

Depending on the target, Bun will apply different module resolution rules and optimizations.

**Default.** For generating bundles that are intended for execution by a browser. Prioritizes the `"browser"` export
condition when resolving imports. Importing any built-in modules, like `node:events` or `node:path` will work, but
calling some functions, like `fs.readFile` will not work.

For generating bundles that are intended to be run by the Bun runtime. In many cases, it isn't necessary to bundle server-side code; you can directly execute the source code without modification. However, bundling your server code can reduce startup times and improve running performance. This is the target to use for building full-stack applications with build-time HTML imports, where both server and client code are bundled together.

All bundles generated with `target: "bun"` are marked with a special `// @bun` pragma, which indicates to the Bun runtime that there's no need to re-transpile the file before execution.

If any entrypoints contains a Bun shebang (`#!/usr/bin/env bun`) the bundler will default to `target: "bun"` instead of `"browser"`.

When using `target: "bun"` and `format: "cjs"` together, the `// @bun @bun-cjs` pragma is added and the CommonJS wrapper function is not compatible with Node.js.

For generating bundles that are intended to be run by Node.js. Prioritizes the `"node"` export condition when
resolving imports, and outputs `.mjs`. In the future, this will automatically polyfill the Bun global and other
built-in `bun:*` modules, though this is not yet implemented.

### format

Specifies the module format to be used in the generated bundles.

Bun defaults to `"esm"`, and provides experimental support for `"cjs"` and `"iife"`.

#### format: "esm" - ES Module

This is the default format, which supports ES Module syntax including top-level await, `import.meta`, and more.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  format: "esm",
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --format esm
```
````

To use ES Module syntax in browsers, set `format` to `"esm"` and make sure your `<script type="module">` tag has `type="module"` set.

#### format: "cjs" - CommonJS

To build a CommonJS module, set `format` to `"cjs"`. When choosing `"cjs"`, the default target changes from `"browser"` (esm) to `"node"` (cjs). CommonJS modules transpiled with `format: "cjs"`, `target: "node"` can be executed in both Bun and Node.js (assuming the APIs in use are supported by both).

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  format: "cjs",
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --format cjs
```
````

#### format: "iife" - IIFE

TODO: document IIFE once we support globalNames.

### `jsx`

Configure JSX transform behavior. Allows fine-grained control over how JSX is compiled.

**Classic runtime example** (uses `factory` and `fragment`):

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./app.tsx"],
  outdir: "./out",
  jsx: {
    factory: "h",
    fragment: "Fragment",
    runtime: "classic",
  },
});
```

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# JSX configuration is handled via bunfig.toml or tsconfig.json
bun build ./app.tsx --outdir ./out
```

**Automatic runtime example** (uses `importSource`):

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./app.tsx"],
  outdir: "./out",
  jsx: {
    importSource: "preact",
    runtime: "automatic",
  },
});
```

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# JSX configuration is handled via bunfig.toml or tsconfig.json
bun build ./app.tsx --outdir ./out
```
