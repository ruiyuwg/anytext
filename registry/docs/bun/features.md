### features

Enable compile-time feature flags for dead-code elimination. This provides a way to conditionally include or exclude code paths at bundle time using `import { feature } from "bun:bundle"`.

```ts title="app.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { feature } from "bun:bundle";

if (feature("PREMIUM")) {
  // Only included when PREMIUM flag is enabled
  initPremiumFeatures();
}

if (feature("DEBUG")) {
  // Only included when DEBUG flag is enabled
  console.log("Debug mode");
}
```

````
```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ['./app.ts'],
  outdir: './out',
  features: ["PREMIUM"],  // PREMIUM=true, DEBUG=false
})
```



```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build ./app.ts --outdir ./out --feature PREMIUM
```
````

The `feature()` function is replaced with `true` or `false` at bundle time. Combined with minification, unreachable code is eliminated:

```ts title="Input" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { feature } from "bun:bundle";
const mode = feature("PREMIUM") ? "premium" : "free";
```

```js title="Output (with --feature PREMIUM --minify)" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/javascript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=dd7b5268d2e9410910a69804de702737" theme={"theme":{"light":"github-light","dark":"dracula"}}
var mode = "premium";
```

```js title="Output (without --feature PREMIUM, with --minify)" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/javascript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=dd7b5268d2e9410910a69804de702737" theme={"theme":{"light":"github-light","dark":"dracula"}}
var mode = "free";
```

**Key behaviors:**

- `feature()` requires a string literal argument — dynamic values are not supported
- The `bun:bundle` import is completely removed from the output
- Works with `bun build`, `bun run`, and `bun test`
- Multiple flags can be enabled: `--feature FLAG_A --feature FLAG_B`
- For type safety, augment the `Registry` interface to restrict `feature()` to known flags (see below)

**Use cases:**

- Platform-specific code (`feature("SERVER")` vs `feature("CLIENT")`)
- Environment-based features (`feature("DEVELOPMENT")`)
- Gradual feature rollouts
- A/B testing variants
- Paid tier features

**Type safety:** By default, `feature()` accepts any string. To get autocomplete and catch typos at compile time, create an `env.d.ts` file (or add to an existing `.d.ts`) and augment the `Registry` interface:

```ts title="env.d.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
declare module "bun:bundle" {
  interface Registry {
    features: "DEBUG" | "PREMIUM" | "BETA_FEATURES";
  }
}
```

Ensure the file is included in your `tsconfig.json` (e.g., `"include": ["src", "env.d.ts"]`). Now `feature()` only accepts those flags, and invalid strings like `feature("TYPO")` become type errors.

### optimizeImports

Skip parsing unused submodules of barrel files (re-export index files). When you import only a few named exports from a large library, normally the bundler parses every file the barrel re-exports. With `optimizeImports`, only the submodules you actually use are parsed.

```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./app.ts"],
  outdir: "./out",
  optimizeImports: ["antd", "@mui/material", "lodash-es"],
});
```

For example, `import { Button } from 'antd'` normally parses all ~3000 modules that `antd/index.js` re-exports. With `optimizeImports: ['antd']`, only the `Button` submodule is parsed.

This works for **pure barrel files** — files where every named export is a re-export (`export { X } from './x'`). If a barrel file has any local exports (`export const foo = ...`), or if any importer uses `import *`, all submodules are loaded.

`export *` re-exports are always loaded (never deferred) to avoid circular resolution issues. Only named re-exports (`export { X } from './x'`) that aren't used by any importer are deferred.

**Automatic mode:** Packages with `"sideEffects": false` in their `package.json` get barrel optimization automatically — no `optimizeImports` config needed. Use `optimizeImports` for packages that don't have this field.

**Plugins:** Resolve and load plugins work correctly with barrel optimization. Deferred submodules go through the plugin pipeline when they are eventually loaded.
