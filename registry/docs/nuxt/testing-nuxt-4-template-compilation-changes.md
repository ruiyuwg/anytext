### Template Compilation Changes

🚦 **Impact Level**: Minimal

#### What Changed

Previously, Nuxt used `lodash/template` to compile templates located on the file system using the `.ejs` file format/syntax.

In addition, we provided some template utilities (`serialize`, `importName`, `importSources`) which could be used for code-generation within these templates, which are now being removed.

#### Reasons for Change

In Nuxt v3 we moved to a 'virtual' syntax with a `getContents()` function which is much more flexible and performant.

In addition, `lodash/template` has had a succession of security issues. These do not really apply to Nuxt projects because it is being used at build-time, not runtime, and by trusted code. However, they still appear in security audits. Moreover, `lodash` is a hefty dependency and is unused by most projects.

Finally, providing code serialization functions directly within Nuxt is not ideal. Instead, we maintain projects like [unjs/knitwork](https://github.com/unjs/knitwork){rel=""nofollow""} which can be dependencies of your project, and where security issues can be reported/resolved directly without requiring an upgrade of Nuxt itself.

#### Migration Steps

We have raised PRs to update modules using EJS syntax, but if you need to do this yourself, you have three backwards/forwards-compatible alternatives:

- Moving your string interpolation logic directly into `getContents()`.
- Using a custom function to handle the replacement, such as in <https://github.com/nuxt-modules/color-mode/pull/240>{rel=""nofollow""}.
- Use `es-toolkit/compat` (a drop-in replacement for lodash template), as a dependency of *your* project rather than Nuxt:

```diff
+ import { readFileSync } from 'node:fs'
+ import { template } from 'es-toolkit/compat'
  // ...
  addTemplate({
    fileName: 'appinsights-vue.js'
    options: { /* some options */ },
-   src: resolver.resolve('./runtime/plugin.ejs'),
+   getContents({ options }) {
+     const contents = readFileSync(resolver.resolve('./runtime/plugin.ejs'), 'utf-8')
+     return template(contents)({ options })
+   },
  })
```

Finally, if you are using the template utilities (`serialize`, `importName`, `importSources`), you can replace them as follows with utilities from `knitwork`:

```ts
import { genDynamicImport, genImport, genSafeVariableName } from 'knitwork'

const serialize = (data: any) => JSON.stringify(data, null, 2).replace(/"\{(.+)\}"(?=,?$)/gm, r => JSON.parse(r).replace(/^\{(.*)\}$/, '$1'))

const importSources = (sources: string | string[], { lazy = false } = {}) => {
  return toArray(sources).map((src) => {
    if (lazy) {
      return `const ${genSafeVariableName(src)} = ${genDynamicImport(src, { comment: `webpackChunkName: ${JSON.stringify(src)}` })}`
    }
    return genImport(src, genSafeVariableName(src))
  }).join('\n')
}

const importName = genSafeVariableName
```

::tip
You can automate this step by running `npx codemod@latest nuxt/4/template-compilation-changes`
::

### Default TypeScript Configuration Changes

🚦 **Impact Level**: Minimal

#### What Changed

`compilerOptions.noUncheckedIndexedAccess` is now `true` instead of `false`.

#### Reasons for Change

This change is a follow up to a prior [3.12 config update](https://github.com/nuxt/nuxt/pull/27485){rel=""nofollow""} where we improved our defaults, mostly adhering to [TotalTypeScript's recommendations](https://www.totaltypescript.com/tsconfig-cheat-sheet){rel=""nofollow""}.

#### Migration Steps

There are two approaches:

1. Run a typecheck on your app and fix any new errors (recommended).
2. Override the new default in your `nuxt.config.ts`:
   ```ts
   export default defineNuxtConfig({
     typescript: {
       tsConfig: {
         compilerOptions: {
           noUncheckedIndexedAccess: false,
         },
       },
     },
   })
   ```
