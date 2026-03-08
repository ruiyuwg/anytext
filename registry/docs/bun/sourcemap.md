### sourcemap

Specifies the type of sourcemap to generate.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  sourcemap: 'linked', // default 'none'
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --sourcemap linked
```
````

| Value        | Description                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"none"`     | Default. No sourcemap is generated.                                                                                                                                                                                                                                                                                                                                                                 |
| `"linked"`   | A separate `*.js.map` file is created alongside each `*.js` bundle using a `//# sourceMappingURL` comment to link the two. Requires `--outdir` to be set. The base URL of this can be customized with `--public-path`.`js<br/>// <bundled code here><br/><br/>//# sourceMappingURL=bundle.js.map<br/>`                                                                                  |
| `"external"` | A separate `*.js.map` file is created alongside each `*.js` bundle without inserting a `//# sourceMappingURL` comment.Generated bundles contain a debug id that can be used to associate a bundle with its corresponding sourcemap. This `debugId` is added as a comment at the bottom of the file.`js<br/>// <generated bundle code><br/><br/>//# debugId=<DEBUG ID><br/>` |
| `"inline"`   | A sourcemap is generated and appended to the end of the generated bundle as a base64 payload.`js<br/>// <bundled code here><br/><br/>//# sourceMappingURL=data:application/json;base64,<encoded sourcemap here><br/>`                                                                                                                                                                   |

The associated `*.js.map` sourcemap will be a JSON file containing an equivalent `debugId` property.

### minify

Whether to enable minification. Default `false`.

When targeting `bun`, identifiers will be minified by default.

To enable all minification options:

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  minify: true, // default false
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --minify
```
````

To granularly enable certain minifications:

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  minify: {
    whitespace: true,
    identifiers: true,
    syntax: true,
  },
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --minify-whitespace --minify-identifiers --minify-syntax
```
````
