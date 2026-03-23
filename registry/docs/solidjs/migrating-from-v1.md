# Migrating from v1

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/migrating-from-v1.mdx)

This is a migration guide of how to upgrade your v1 SolidStart app to our new v2 version.

Please note that some third-party packages may not be compatible with v2 yet.

***

## [Migration steps](/solid-start/migrating-from-v1#migration-steps)

### [Update dependencies](/solid-start/migrating-from-v1#update-dependencies)

npmpnpmyarnbundeno

```
npm i @solidjs/start@2.0.0-alpha.2 @solidjs/vite-plugin-nitro-2 vite@7
```

```
pnpm i @solidjs/start@2.0.0-alpha.2 @solidjs/vite-plugin-nitro-2 vite@7
```

```
yarn add @solidjs/start@2.0.0-alpha.2 @solidjs/vite-plugin-nitro-2 vite@7
```

```
bun i @solidjs/start@2.0.0-alpha.2 @solidjs/vite-plugin-nitro-2 vite@7
```

```
deno add npm:@solidjs/start@2.0.0-alpha.2 @solidjs/vite-plugin-nitro-2 vite@7
```

npmpnpmyarnbundeno

```
npm remove vinxi
```

```
pnpm remove vinxi
```

```
yarn remove vinxi
```

```
bun remove vinxi
```

```
deno remove npm:vinxi
```

### [Configuration files](/solid-start/migrating-from-v1#configuration-files)

- Remove `app.config.ts`
- Create `vite.config.ts`

```
import { solidStart } from "@solidjs/start/config";import { defineConfig } from "vite";import { nitroV2Plugin } from "@solidjs/vite-plugin-nitro-2";
export default defineConfig(() => {  return {    plugins: [      solidStart({        middleware: "./src/middleware/index.ts",      }),      nitroV2Plugin(),    ],  };});
```

Compile-time environment variables are now handled by Vite's environment API.

```
// ...export default defineConfig(({ mode }) => {  const env = loadEnv(mode, process.cwd(), "");
  return {    // ...    environments: {      ssr: {        define: {          "process.env.DATABASE_URL": JSON.stringify(env.DATABASE_URL),        },      },    },  };});
```

Update the build/dev commands to use native Vite instead of vinxi.

```
"scripts": {  "dev": "vite dev",  "build": "vite build",  "start": "vite preview"}
```

### [Environment types](/solid-start/migrating-from-v1#environment-types)

Only the `types` entry is new in v2. Everything else can remain unchanged.

```
"compilerOptions": {  "types": ["@solidjs/start/env"]}
```

***

## [Server runtime helpers](/solid-start/migrating-from-v1#server-runtime-helpers)

- Replace all imports from `vinxi/http` with `@solidjs/start/http`
- Optional: update the middleware syntax to the newer [H3 syntax](https://h3.dev/guide/basics/middleware)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/migrating-from-v1.mdx\&page=https://docs.solidjs.com/solid-start/migrating-from-v1)

On this page

1. [Overview](#_top)
2. [Migration steps](#migration-steps)
   1. [Update dependencies](#update-dependencies)
   2. [Configuration files](#configuration-files)
   3. [Environment types](#environment-types)
3. [Server runtime helpers](#server-runtime-helpers)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/migrating-from-v1.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/migrating-from-v1.mdx\&page=https://docs.solidjs.com/solid-start/migrating-from-v1)
