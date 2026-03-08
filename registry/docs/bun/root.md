### root

The root directory of the project.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./pages/a.tsx', './pages/b.tsx'],
  outdir: './out',
  root: '.',
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./pages/a.tsx ./pages/b.tsx --outdir ./out --root .
```
````

If unspecified, it is computed to be the first common ancestor of all entrypoint files. Consider the following file structure:

```text title="file system" icon="folder-tree" theme={"theme":{"light":"github-light","dark":"dracula"}}
.
└── pages
  └── index.tsx
  └── settings.tsx
```

We can build both entrypoints in the `pages` directory:

````
```js theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./pages/index.tsx', './pages/settings.tsx'],
  outdir: './out',
})
```



```bash theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./pages/index.tsx ./pages/settings.tsx --outdir ./out
```
````

This would result in a file structure like this:

```text title="file system" icon="folder-tree" theme={"theme":{"light":"github-light","dark":"dracula"}}
.
└── pages
  └── index.tsx
  └── settings.tsx
└── out
  └── index.js
  └── settings.js
```

Since the `pages` directory is the first common ancestor of the entrypoint files, it is considered the project root. This means that the generated bundles live at the top level of the `out` directory; there is no `out/pages` directory.

This behavior can be overridden by specifying the `root` option:

````
```js theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./pages/index.tsx', './pages/settings.tsx'],
  outdir: './out',
  root: '.',
})
```



```bash theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./pages/index.tsx ./pages/settings.tsx --outdir ./out --root .
```
````

By specifying `.` as `root`, the generated file structure will look like this:

```
.
└── pages
  └── index.tsx
  └── settings.tsx
└── out
  └── pages
    └── index.js
    └── settings.js
```
