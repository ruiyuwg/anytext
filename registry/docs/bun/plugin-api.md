## Plugin API

Bun's plugin API is designed to be esbuild compatible. Bun doesn't support esbuild's entire plugin API surface, but the core functionality is implemented. Many third-party esbuild plugins will work out of the box with Bun.

Long term, we aim for feature parity with esbuild's API, so if something doesn't work please file an issue to help us
prioritize.

Plugins in Bun and esbuild are defined with a builder object.

```ts title="myPlugin.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import type { BunPlugin } from "bun";

const myPlugin: BunPlugin = {
  name: "my-plugin",
  setup(builder) {
    // define plugin
  },
};
```

The builder object provides some methods for hooking into parts of the bundling process. Bun implements `onStart`, `onEnd`, `onResolve`, and `onLoad`. It does not yet implement the esbuild hooks `onDispose` and `resolve`. `initialOptions` is partially implemented, being read-only and only having a subset of esbuild's options; use `config` (same thing but with Bun's `BuildConfig` format) instead.

```ts title="myPlugin.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import type { BunPlugin } from "bun";
const myPlugin: BunPlugin = {
  name: "my-plugin",
  setup(builder) {
    builder.onStart(() => {
      /* called when the bundle starts */
    });
    builder.onResolve(
      {
        /* onResolve.options */
      },
      args => {
        return {
          /* onResolve.results */
        };
      },
    );
    builder.onLoad(
      {
        /* onLoad.options */
      },
      args => {
        return {
          /* onLoad.results */
        };
      },
    );
    builder.onEnd(result => {
      /* called when the bundle is complete */
    });
  },
};
```

### onResolve

```
* 🟢 `filter`
* 🟢 `namespace`



* 🟢 `path`
* 🟢 `importer`
* 🔴 `namespace`
* 🔴 `resolveDir`
* 🔴 `kind`
* 🔴 `pluginData`



* 🟢 `namespace`
* 🟢 `path`
* 🔴 `errors`
* 🔴 `external`
* 🔴 `pluginData`
* 🔴 `pluginName`
* 🔴 `sideEffects`
* 🔴 `suffix`
* 🔴 `warnings`
* 🔴 `watchDirs`
* 🔴 `watchFiles`
```

### onLoad

```
* 🟢 `filter`
* 🟢 `namespace`



* 🟢 `path`
* 🔴 `namespace`
* 🔴 `suffix`
* 🔴 `pluginData`



* 🟢 `contents`
* 🟢 `loader`
* 🔴 `errors`
* 🔴 `pluginData`
* 🔴 `pluginName`
* 🔴 `resolveDir`
* 🔴 `warnings`
* 🔴 `watchDirs`
* 🔴 `watchFiles`
```

# Single-file executable

Source: https://bun.com/docs/bundler/executables

Generate standalone executables from TypeScript or JavaScript files with Bun

Bun's bundler implements a `--compile` flag for generating a standalone binary from a TypeScript or JavaScript file.

````
```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./cli.ts --compile --outfile mycli
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./cli.ts"],
  compile: {
    outfile: "./mycli",
  },
});
```
````

```ts cli.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
console.log("Hello world!");
```

This bundles `cli.ts` into an executable that can be executed directly:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
./mycli
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
Hello world!
```

All imported files and packages are bundled into the executable, along with a copy of the Bun runtime. All built-in Bun and Node.js APIs are supported.

***
