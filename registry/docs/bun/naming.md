### naming

Customizes the generated file names. Defaults to `./[dir]/[name].[ext]`.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  naming: "[dir]/[name].[ext]", // default
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --entry-naming "[dir]/[name].[ext]"
```
````

By default, the names of the generated bundles are based on the name of the associated entrypoint.

```text title="file system" icon="folder-tree" theme={"theme":{"light":"github-light","dark":"dracula"}}
.
├── index.tsx
└── out
    └── index.js
```

With multiple entrypoints, the generated file hierarchy will reflect the directory structure of the entrypoints.

```text title="file system" icon="folder-tree" theme={"theme":{"light":"github-light","dark":"dracula"}}
.
├── index.tsx
└── nested
    └── index.tsx
└── out
    ├── index.js
    └── nested
        └── index.js
```

The names and locations of the generated files can be customized with the `naming` field. This field accepts a template string that is used to generate the filenames for all bundles corresponding to entrypoints. where the following tokens are replaced with their corresponding values:

- `[name]` - The name of the entrypoint file, without the extension.
- `[ext]` - The extension of the generated bundle.
- `[hash]` - A hash of the bundle contents.
- `[dir]` - The relative path from the project root to the parent directory of the source file.

For example:

| Token               | `[name]` | `[ext]` | `[hash]`   | `[dir]`             |
| ------------------- | -------- | ------- | ---------- | ------------------- |
| `./index.tsx`       | `index`  | `js`    | `a1b2c3d4` | `""` (empty string) |
| `./nested/entry.ts` | `entry`  | `js`    | `c3d4e5f6` | `"nested"`          |

We can combine these tokens to create a template string. For instance, to include the hash in the generated bundle names:

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  naming: 'files/[dir]/[name]-[hash].[ext]',
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --entry-naming 'files/[dir]/[name]-[hash].[ext]'
```
````

This build would result in the following file structure:

```text title="file system" icon="folder-tree" theme={"theme":{"light":"github-light","dark":"dracula"}}
.
├── index.tsx
└── out
    └── files
        └── index-a1b2c3d4.js
```

When a string is provided for the `naming` field, it is used only for bundles that correspond to entrypoints. The names of chunks and copied assets are not affected. Using the JavaScript API, separate template strings can be specified for each type of generated file.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  naming: {
    // default values
    entry: '[dir]/[name].[ext]',
    chunk: '[name]-[hash].[ext]',
    asset: '[name]-[hash].[ext]',
  },
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out \
  --entry-naming '[dir]/[name].[ext]' \
  --chunk-naming '[name]-[hash].[ext]' \
  --asset-naming '[name]-[hash].[ext]'
```
````
