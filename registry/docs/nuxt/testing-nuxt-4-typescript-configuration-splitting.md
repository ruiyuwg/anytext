### TypeScript Configuration Splitting

🚦 **Impact Level**: Minimal

#### What Changed

Nuxt now generates separate TypeScript configurations for different contexts to provide better type-checking experiences:

1. **New TypeScript configuration files**: Nuxt now generates additional TypeScript configurations:
   - `.nuxt/tsconfig.app.json` - For your app code (Vue components, composables, etc.)
   - `.nuxt/tsconfig.server.json` - For your server-side code (Nitro/server directory)
   - `.nuxt/tsconfig.node.json` - For your build-time code (modules, `nuxt.config.ts`, etc.)
   - `.nuxt/tsconfig.shared.json` - For code shared between app and server contexts (like types and non-environment specific utilities)
   - `.nuxt/tsconfig.json` - Legacy configuration for backward compatibility
2. **Backward compatibility**: Existing projects that extend `.nuxt/tsconfig.json` will continue to work as before.
3. **Opt-in project references**: New projects or those wanting better type checking can adopt TypeScript's project references feature.
4. **Context-specific type checking**: Each context now has appropriate compiler options and includes/excludes for its specific environment.
5. **New `typescript.nodeTsConfig` option**: You can now customize the TypeScript configuration for Node.js build-time code.

#### Reasons for Change

This change provides several benefits:

1. **Better type safety**: Each context (app, server, build-time) gets appropriate type checking with context-specific globals and APIs.
2. **Improved IDE experience**: Better IntelliSense and error reporting for different parts of your codebase.
3. **Cleaner separation**: Server code won't incorrectly suggest client-side APIs and vice versa.
4. **Performance**: TypeScript can more efficiently check code with properly scoped configurations.

For example, auto-imports are not available in your `nuxt.config.ts` (but previously this was not flagged by TypeScript). And while IDEs recognized the separate context hinted by `tsconfig.json` in your `server/` directory, this was not reflected in type-checking (requiring a separate step).

#### Migration Steps

**No migration is required** - existing projects will continue to work as before.

However, to take advantage of improved type checking, you can opt in to the new project references approach:

1. **Update your root `tsconfig.json`** to use project references: :note\[If your `tsconfig.json` currently has an `"extends": "./.nuxt/tsconfig.json"` line, **remove it** before adding the references. Project references and extends are mutually exclusive.]
   ```json
   {
     // Remove "extends": "./.nuxt/tsconfig.json" if present
     "files": [],
     "references": [
       { "path": "./.nuxt/tsconfig.app.json" },
       { "path": "./.nuxt/tsconfig.server.json" },
       { "path": "./.nuxt/tsconfig.shared.json" },
       { "path": "./.nuxt/tsconfig.node.json" }
     ]
   }
   ```
2. **Remove any manual server `tsconfig.json`** files (like `server/tsconfig.json`) that extended `.nuxt/tsconfig.server.json`.
3. **Update your type checking scripts** to use the build flag for project references:
   ```diff
   - "typecheck": "nuxt prepare && vue-tsc --noEmit"
   + "typecheck": "nuxt prepare && vue-tsc -b --noEmit"
   ```
4. **Move all type augmentations into their appropriate context**:
   - If you are augmenting types for the app context, move the files to the `app/` directory.
   - If you are augmenting types for the server context, move the files to the `server/` directory.
   - If you are augmenting types that are **shared between the app and server**, move the files to the `shared/` directory.
     :warning\[Augmenting types from outside the `app/`, `server/`, or `shared/` directories will not work with the new project references setup.]
5. **Configure TypeScript options** if needed:
   ```ts
   export default defineNuxtConfig({
     typescript: {
       // customize tsconfig.app.json
       tsConfig: {
         // ...
       },
       // customize tsconfig.shared.json
       sharedTsConfig: {
         // ...
       },
       // customize tsconfig.node.json
       nodeTsConfig: {
         // ...
       },
     },
     nitro: {
       typescript: {
         // customize tsconfig.server.json
         tsConfig: {
           // ...
         },
       },
     },
   })
   ```
6. **Update any CI/build scripts** that run TypeScript checking to ensure they use the new project references approach.

The new configuration provides better type safety and IntelliSense for projects that opt in, while maintaining full backward compatibility for existing setups.

### Removal of Experimental Features

🚦 **Impact Level**: Minimal

#### What Changed

Four experimental features are no longer configurable in Nuxt 4:

- `experimental.treeshakeClientOnly` will be `true` (default since v3.0)
- `experimental.configSchema` will be `true` (default since v3.3)
- `experimental.polyfillVueUseHead` will be `false` (default since v3.4)
- `experimental.respectNoSSRHeader` will be `false` (default since v3.4)
- `vite.devBundler` is no longer configurable - it will use `vite-node` by default

#### Reasons for Change

These options have been set to their current values for some time and we do not have a reason to believe that they need to remain configurable.

#### Migration Steps

- `polyfillVueUseHead` is implementable in user-land with [this plugin](https://github.com/nuxt/nuxt/blob/f209158352b09d1986aa320e29ff36353b91c358/packages/nuxt/src/head/runtime/plugins/vueuse-head-polyfill.ts#L10-L11){rel=""nofollow""}
- `respectNoSSRHeader`is implementable in user-land with [server middleware](https://github.com/nuxt/nuxt/blob/c660b39447f0d5b8790c0826092638d321cd6821/packages/nuxt/src/core/runtime/nitro/no-ssr.ts#L8-L9){rel=""nofollow""}

### Removal of Top-Level `generate` Configuration

🚦 **Impact Level**: Minimal

#### What Changed

The top-level `generate` configuration option is no longer available in Nuxt 4. This includes all of its properties:

- `generate.exclude` - for excluding routes from prerendering
- `generate.routes` - for specifying routes to prerender

#### Reasons for Change

The top level `generate` configuration was a holdover from Nuxt 2. We've supported `nitro.prerender` for a while now, and it is the preferred way to configure prerendering in Nuxt 3+.

#### Migration Steps

Replace `generate` configuration with the corresponding `nitro.prerender` options:

```diff
export default defineNuxtConfig({
- generate: {
-   exclude: ['/admin', '/private'],
-   routes: ['/sitemap.xml', '/robots.txt']
- }
+ nitro: {
+   prerender: {
+     ignore: ['/admin', '/private'],
+     routes: ['/sitemap.xml', '/robots.txt']
+   }
+ }
})
```

::read-more{to="https://nitro.build/config#prerender"}
Read more about Nitro's prerender configuration options.
::

## Nuxt 2 vs. Nuxt 3+

In the table below, there is a quick comparison between 3 versions of Nuxt:

| Feature / Version       | Nuxt 2     | Nuxt Bridge | Nuxt 3+    |
| ----------------------- | ---------- | ----------- | ---------- |
| Vue                     | 2          | 2           | 3          |
| Stability               | 😊 Stable  | 😊 Stable   | 😊 Stable  |
| Performance             | 🏎 Fast    | ✈️ Faster   | 🚀 Fastest |
| Nitro Engine            | ❌          | ✅           | ✅          |
| ESM support             | 🌙 Partial | 👍 Better   | ✅          |
| TypeScript              | ☑️ Opt-in  | 🚧 Partial  | ✅          |
| Composition API         | ❌          | 🚧 Partial  | ✅          |
| Options API             | ✅          | ✅           | ✅          |
| Components Auto Import  | ✅          | ✅           | ✅          |
| `<script setup>` syntax | ❌          | 🚧 Partial  | ✅          |
| Auto Imports            | ❌          | ✅           | ✅          |
| webpack                 | 4          | 4           | 5          |
| Vite                    | ⚠️ Partial | 🚧 Partial  | ✅          |
| Nuxt CLI                | ❌ Old      | ✅ nuxt      | ✅ nuxt     |
| Static sites            | ✅          | ✅           | ✅          |

## Nuxt 2 to Nuxt 3+

The migration guide provides a step-by-step comparison of Nuxt 2 features to Nuxt 3+ features and guidance to adapt your current application.

::read-more{to="https://nuxt.com/docs/3.x/migration/overview"}
Check out the **guide to migrating from Nuxt 2 to Nuxt 3**.
::

## Nuxt 2 to Nuxt Bridge

If you prefer to progressively migrate your Nuxt 2 application to Nuxt 3, you can use Nuxt Bridge. Nuxt Bridge is a compatibility layer that allows you to use Nuxt 3+ features in Nuxt 2 with an opt-in mechanism.

::read-more{to="https://nuxt.com/docs/3.x/bridge/overview"}
**Migrate from Nuxt 2 to Nuxt Bridge**
::

# .nuxt

::important
This directory should be added to your [`.gitignore`](https://nuxt.com/docs/3.x/directory-structure/gitignore) file to avoid pushing the dev build output to your repository.
::

This directory is interesting if you want to learn more about the files Nuxt generates based on your directory structure.

Nuxt also provides a Virtual File System (VFS) for modules to add templates to this directory without writing them to disk.

You can explore the generated files by opening the [Nuxt DevTools](https://devtools.nuxt.com){rel=""nofollow""} in development mode and navigating to the **Virtual Files** tab.

::warning
You should not touch any files inside since the whole directory will be re-created when running [`nuxt dev`](https://nuxt.com/docs/3.x/api/commands/dev).
::

# .output

::important
This directory should be added to your [`.gitignore`](https://nuxt.com/docs/3.x/directory-structure/gitignore) file to avoid pushing the build output to your repository.
::

Use this directory to deploy your Nuxt application to production.

:read-more{to="https://nuxt.com/docs/3.x/getting-started/deployment"}

::warning
You should not touch any files inside since the whole directory will be re-created when running [`nuxt build`](https://nuxt.com/docs/3.x/api/commands/build).
::

# assets

The directory usually contains the following types of files:

- Stylesheets (CSS, SASS, etc.)
- Fonts
- Images that won't be served from the [`public/`](https://nuxt.com/docs/3.x/directory-structure/public) directory.

If you want to serve assets from the server, we recommend taking a look at the [`public/`](https://nuxt.com/docs/3.x/directory-structure/public) directory.

:read-more{to="https://nuxt.com/docs/3.x/getting-started/assets"}
