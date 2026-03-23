### external

A list of import paths to consider external. Defaults to `[]`.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/JUhaF6Mf68z_zHyy/icons/typescript.svg?fit=max&auto=format&n=JUhaF6Mf68z_zHyy&q=85&s=7ac549adaea8d5487d8fbd58cc3ea35b" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  external: ["lodash", "react"], // default: []
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --external lodash --external react
```
````

An external import is one that will not be included in the final bundle. Instead, the import statement will be left as-is, to be resolved at runtime.

For instance, consider the following entrypoint file:

```tsx index.tsx icon="https://mintcdn.com/bun-1dd33a4e/JUhaF6Mf68z_zHyy/icons/typescript.svg?fit=max&auto=format&n=JUhaF6Mf68z_zHyy&q=85&s=7ac549adaea8d5487d8fbd58cc3ea35b" theme={"theme":{"light":"github-light","dark":"dracula"}}
import _ from "lodash";
import { z } from "zod";

const value = z.string().parse("Hello world!");
console.log(_.upperCase(value));
```

Normally, bundling `index.tsx` would generate a bundle containing the entire source code of the "zod" package. If instead, we want to leave the import statement as-is, we can mark it as external:

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/JUhaF6Mf68z_zHyy/icons/typescript.svg?fit=max&auto=format&n=JUhaF6Mf68z_zHyy&q=85&s=7ac549adaea8d5487d8fbd58cc3ea35b" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  external: ['zod'],
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --external zod
```
````

The generated bundle will look something like this:

```js title="out/index.js" icon="https://mintcdn.com/bun-1dd33a4e/JUhaF6Mf68z_zHyy/icons/javascript.svg?fit=max&auto=format&n=JUhaF6Mf68z_zHyy&q=85&s=5148f41bbc784f9828f1363dab67340f" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { z } from "zod";

// ...
// the contents of the "lodash" package
// including the `_.upperCase` function

var value = z.string().parse("Hello world!");
console.log(_.upperCase(value));
```

To mark all imports as external, use the wildcard `*`:

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/JUhaF6Mf68z_zHyy/icons/typescript.svg?fit=max&auto=format&n=JUhaF6Mf68z_zHyy&q=85&s=7ac549adaea8d5487d8fbd58cc3ea35b" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './out',
  external: ['*'],
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.tsx --outdir ./out --external '*'
```
````

### packages

Control whether package dependencies are included to bundle or not. Possible values: `bundle` (default), `external`. Bun treats any import which path do not start with `.`, `..` or `/` as package.

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/JUhaF6Mf68z_zHyy/icons/typescript.svg?fit=max&auto=format&n=JUhaF6Mf68z_zHyy&q=85&s=7ac549adaea8d5487d8fbd58cc3ea35b" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./index.ts'],
  packages: 'external',
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./index.ts --packages external
```
````
