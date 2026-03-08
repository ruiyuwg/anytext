# TypeScript

## Type-checking

By default, Nuxt doesn't check types when you run [`nuxt dev`](https://nuxt.com/docs/4.x/api/commands/dev) or [`nuxt build`](https://nuxt.com/docs/4.x/api/commands/build), for performance reasons.

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

Then, run [`nuxt typecheck`](https://nuxt.com/docs/4.x/api/commands/typecheck) command to check your types:

```bash [Terminal]
npx nuxt typecheck
```

To enable type-checking at build or development time, you can also use the [`typescript.typeCheck`](https://nuxt.com/docs/4.x/api/nuxt-config#typecheck) option in your `nuxt.config` file:

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
})
```

## Auto-generated Types

Nuxt projects rely on auto-generated types to work properly. These types are stored in the [`.nuxt`](https://nuxt.com/docs/4.x/directory-structure/nuxt) directory and are generated when you run the dev server or build your application. You can also generate these files manually by running `nuxt prepare`.

The generated `tsconfig.json` files inside the [`.nuxt`](https://nuxt.com/docs/4.x/directory-structure/nuxt) directory include **recommended basic TypeScript configuration** for your project, references to [auto-imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports), [API route types](https://nuxt.com/docs/4.x/guide/concepts/server-engine#typed-api-routes), path aliases like `#imports`, `~/file`, or `#build/file`, and more.

::warning
Nuxt relies on this configuration, and [Nuxt modules](https://nuxt.com/docs/4.x/guide/modules) can extend it as well. For this reason, it is not recommended to modify your `tsconfig.json` file directly, as doing so could overwrite important settings. Instead, extend it via `nuxt.config.ts`. [Learn more about extending the configuration here](https://nuxt.com/docs/4.x/directory-structure/tsconfig).
::

::tip{icon="i-lucide-video" target="\_blank" to="https://youtu.be/umLI7SlPygY"}
Watch a video from Daniel Roe explaining built-in Nuxt aliases.
::

## Project References

Nuxt uses [TypeScript project references](https://www.typescriptlang.org/docs/handbook/project-references.html){rel=""nofollow""} to improve type-checking performance and provide better IDE support. This feature allows TypeScript to break up your codebase into smaller, more manageable pieces.

### How Nuxt Uses Project References

When you run `nuxt dev`, `nuxt build` or `nuxt prepare`, Nuxt will generate multiple `tsconfig.json` files for different parts of your application.

- **`.nuxt/tsconfig.app.json`** - Configuration for your application code within the `app/` directory
- **`.nuxt/tsconfig.node.json`** - Configuration for your `nuxt.config.ts` and files outside the other contexts
- **`.nuxt/tsconfig.server.json`** - Configuration for server-side code (when applicable)
- **`.nuxt/tsconfig.shared.json`** - For code shared between app and server contexts (like types and non-environment specific utilities)

Each of these files is configured to reference the appropriate dependencies and provide optimal type-checking for their specific context.

::note
For backward compatibility, Nuxt still generates `.nuxt/tsconfig.json`. However, we recommend using [TypeScript project references](https://nuxt.com/docs/4.x/directory-structure/tsconfig) with the new configuration files (`.nuxt/tsconfig.app.json`, `.nuxt/tsconfig.server.json`, etc.) for better type safety and performance. This legacy file will be removed in a future version of Nuxt.
::

### Benefits of Project References

- **Faster builds**: TypeScript can skip rebuilding unchanged projects
- **Better IDE performance**: Your IDE can provide faster IntelliSense and error checking
- **Isolated compilation**: Errors in one part of your application don't prevent compilation of other parts
- **Clearer dependency management**: Each project explicitly declares its dependencies

### Augmenting Types with Project References

Since the project is divided into **multiple type contexts**, it's important to **augment types within the correct context** to ensure they're properly recognized. TypeScript will not recognize augmentations placed outside these directories unless they are explicitly included in the appropriate context.

For example, if you want to augment types for the `app` context, the augmentation file should be placed in the `app/` directory.

Similarly:

- For the `server` context, place the augmentation file in the `server/` directory.
- For types that are **shared between the app and server**, place the file in the `shared/` directory.

::read-more

Read more about augmenting specific type contexts from **files outside those contexts** in the Module Author Guide.
::

## Strict Checks

TypeScript comes with certain checks to give you more safety and analysis of your program.

[Strict checks](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#getting-stricter-checks){rel=""nofollow""} are enabled by default in Nuxt when the [`typescript.typeCheck`](https://nuxt.com/docs/4.x/guide/concepts/typescript#type-checking) option is enabled to give you greater type safety.

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

# Nuxt and Hydration

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
