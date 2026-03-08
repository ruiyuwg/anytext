### publicPath

A prefix to be appended to any import paths in bundled code.

In many cases, generated bundles will contain no import statements. After all, the goal of bundling is to combine all of the code into a single file. However there are a number of cases with the generated bundles will contain import statements.

- **Asset imports** — When importing an unrecognized file type like `*.svg`, the bundler defers to the file loader, which copies the file into `outdir` as is. The import is converted into a variable
- **External modules** — Files and modules can be marked as external, in which case they will not be included in the bundle. Instead, the import statement will be left in the final bundle.
- **Chunking.** When `splitting` is enabled, the bundler may generate separate "chunk" files that represent code that is shared among multiple entrypoints.

In any of these cases, the final bundles may contain paths to other files. By default these imports are relative. Here is an example of a simple asset import:

```ts Input icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import logo from "./logo.svg";
console.log(logo);
```

```ts Output icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/javascript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=dd7b5268d2e9410910a69804de702737" theme={"theme":{"light":"github-light","dark":"dracula"}}
var logo = "./logo-a7305bdef.svg";
console.log(logo);
```

Setting `publicPath` will prefix all file paths with the specified value.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  publicPath: 'https://cdn.example.com/', // default is undefined
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --public-path 'https://cdn.example.com/'
```
````

The output file would now look something like this.

```js title="out/index.js" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/javascript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=dd7b5268d2e9410910a69804de702737" theme={"theme":{"light":"github-light","dark":"dracula"}}
var logo = "https://cdn.example.com/logo-a7305bdef.svg";
```

### define

A map of global identifiers to be replaced at build time. Keys of this object are identifier names, and values are JSON strings that will be inlined.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  define: {
    STRING: JSON.stringify("value"),
    "nested.boolean": "true",
  },
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --define STRING='"value"' --define nested.boolean=true
```
````

### loader

A map of file extensions to built-in loader names. This can be used to quickly customize how certain files are loaded.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  loader: {
    ".png": "dataurl",
    ".txt": "file",
  },
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --loader .png:dataurl --loader .txt:file
```
````

### banner

A banner to be added to the final bundle, this can be a directive like `"use client"` for react or a comment block such as a license for the code.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  banner: '"use client";'
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --banner '"use client";'
```
````

### footer

A footer to be added to the final bundle, this can be something like a comment block for a license or just a fun easter egg.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  footer: '// built with love in SF'
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --footer '// built with love in SF'
```
````

### drop

Remove function calls from a bundle. For example, `--drop=console` will remove all calls to `console.log`. Arguments to calls will also be removed, regardless of if those arguments may have side effects. Dropping `debugger` will remove all `debugger` statements.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  drop: ["console", "debugger", "anyIdentifier.or.propertyAccess"],
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --drop console --drop debugger
```
````
