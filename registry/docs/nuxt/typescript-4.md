# TypeScript

## Type-checking

By default, Nuxt doesn't check types when you run [`nuxt dev`](https://nuxt.com/docs/3.x/api/commands/dev) or [`nuxt build`](https://nuxt.com/docs/3.x/api/commands/build), for performance reasons.

To enable type-checking at build or development time, install `vue-tsc` and `typescript` as development dependency:

::code-group{sync="pm"}

```bash [npm]
npm install --save-dev vue-tsc typescript
```

```bash [yarn]
yarn add --dev vue-tsc typescript
```

```bash [pnpm]
pnpm add -D vue-tsc typescript
```

```bash [bun]
bun add -D vue-tsc typescript
```

```bash [deno]
deno add -D npm:vue-tsc npm:typescript
```

::

Then, run [`nuxt typecheck`](https://nuxt.com/docs/3.x/api/commands/typecheck) command to check your types:

```bash [Terminal]
npx nuxt typecheck
```

To enable type-checking at build or development time, you can also use the [`typescript.typeCheck`](https://nuxt.com/docs/3.x/api/nuxt-config#typecheck) option in your `nuxt.config` file:

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
})
```

## Auto-generated Types

When you run `nuxt dev` or `nuxt build`, Nuxt generates the following files for IDE type support (and type checking):

### `.nuxt/nuxt.d.ts`

This file contains the types of any modules you are using, as well as the key types that Nuxt requires. Your IDE should recognize these types automatically.

Some of the references in the file are to files that are only generated within your `buildDir` (`.nuxt`) and therefore for full typings, you will need to run `nuxt dev` or `nuxt build`.

### `.nuxt/tsconfig.json`

This file contains the recommended basic TypeScript configuration for your project, including resolved aliases injected by Nuxt or modules you are using, so you can get full type support and path auto-complete for aliases like `~/file` or `#build/file`.

::note
Consider using the `imports` section of [nuxt.config](https://nuxt.com/docs/3.x/api/nuxt-config#imports) to include directories beyond the default ones. This can be useful for auto-importing types which you're using across your app.
::

::warning
Nuxt relies on this configuration, and [Nuxt modules](https://nuxt.com/docs/3.x/guide/modules) can extend it as well. For this reason, it is not recommended to modify your `tsconfig.json` file directly, as doing so could overwrite important settings. Instead, extend it via `nuxt.config.ts`. [Learn more about extending the configuration here](https://nuxt.com/docs/3.x/directory-structure/tsconfig).
::

[Read more about how to extend this configuration](https://nuxt.com/docs/3.x/directory-structure/tsconfig).

::tip{icon="i-lucide-video" target="\_blank" to="https://youtu.be/umLI7SlPygY"}
Watch a video from Daniel Roe explaining built-in Nuxt aliases.
::

::note
Nitro also [auto-generates types](https://nuxt.com/docs/3.x/guide/concepts/server-engine#typed-api-routes) for API routes. Plus, Nuxt also generates types for globally available components and [auto-imports from your composables](https://nuxt.com/docs/3.x/directory-structure/composables), plus other core functionality.
::

::note
Keep in mind that all options extended from `./.nuxt/tsconfig.json` will be overwritten by the options defined in your `tsconfig.json`.
Overwriting options such as `"compilerOptions.paths"` with your own configuration will lead TypeScript to not factor in the module resolutions from `./.nuxt/tsconfig.json`. This can lead to module resolutions such as `#imports` not being recognized.
:br :br
In case you need to extend options provided by `./.nuxt/tsconfig.json` further, you can use the [`alias` property](https://nuxt.com/docs/3.x/api/nuxt-config#alias) within your `nuxt.config`. Nuxt will pick them up and extend `./.nuxt/tsconfig.json` accordingly.
::

## Strict Checks

TypeScript comes with certain checks to give you more safety and analysis of your program.

[Strict checks](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#getting-stricter-checks){rel=""nofollow""} are enabled by default in Nuxt when the [`typescript.typeCheck`](https://nuxt.com/docs/3.x/guide/concepts/typescript#type-checking) option is enabled to give you greater type safety.

If you are currently converting your codebase to TypeScript, you may want to temporarily disable strict checks by setting `strict` to `false` in your `nuxt.config`:

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  typescript: {
    strict: false,
  },
})
```

# Code Style

## ESLint

The recommended approach for Nuxt is to enable ESLint support using the [`@nuxt/eslint`](https://eslint.nuxt.com/packages/module){rel=""nofollow""} module, that will setup project-aware ESLint configuration for you.

::callout{icon="i-lucide-lightbulb"}
The module is designed for the [new ESLint flat config format](https://eslint.org/docs/latest/use/configure/configuration-files){rel=""nofollow""} which is the [default format since ESLint v9](https://eslint.org/blog/2024/04/eslint-v9.0.0-released/){rel=""nofollow""}. If you are using the legacy `.eslintrc` config, you will need to [configure manually with `@nuxt/eslint-config`](https://eslint.nuxt.com/packages/config#customizing-the-config){rel=""nofollow""}. We highly recommend you to migrate over the flat config to be future-proof.
::

## Quick Setup

```bash
npx nuxt module add eslint
```

Start your Nuxt app, a `eslint.config.mjs` file will be generated under your project root. You can customize it as needed.

You can learn more about the module and customizations in [Nuxt ESLint's documentation](https://eslint.nuxt.com/packages/module){rel=""nofollow""}.

# Nuxt and hydration

When developing, you may face hydration issues. Don't ignore those warnings.

# Why is it important to fix them?

Hydration mismatches are not just warnings - they are indicators of serious problems that can break your application:

## Performance Impact

- **Increased time to interactive**: Hydration errors force Vue to re-render the entire component tree, which will increase the time for your Nuxt app to become interactive
- **Poor user experience**: Users may see content flashing or unexpected layout shifts

## Functionality Issues

- **Broken interactivity**: Event listeners may not attach properly, leaving buttons and forms non-functional
- **State inconsistencies**: Application state can become out of sync between what the user sees and what the application thinks is rendered
- **SEO problems**: Search engines may index different content than what users actually see

# How to detect them

## Development Console Warnings

Vue will log hydration mismatch warnings in the browser console during development:

![Screenshot of Vue hydration mismatch warning in the browser console](https://nuxt.com/assets/docs/best-practices/vue-console-hydration.png)
