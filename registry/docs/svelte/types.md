# Types

## Generated types

The `RequestHandler` and `Load` types both accept a `Params` argument allowing you to type the `params` object. For example this endpoint expects `foo`, `bar` and `baz` params:

```js
/// file: src/routes/[foo]/[bar]/[baz]/+server.js
// @errors: 2355 2322 1360
/** @type {import('@sveltejs/kit').RequestHandler<{
    foo: string;
    bar: string;
    baz: string
  }>} */
export async function GET({ params }) {
	// ...
}
```

Needless to say, this is cumbersome to write out, and less portable (if you were to rename the `[foo]` directory to `[qux]`, the type would no longer reflect reality).

To solve this problem, SvelteKit generates `.d.ts` files for each of your endpoints and pages:

```ts
/// file: .svelte-kit/types/src/routes/[foo]/[bar]/[baz]/$types.d.ts
/// link: true
import type * as Kit from '@sveltejs/kit';

type RouteParams = {
	foo: string;
	bar: string;
	baz: string;
};

export type RequestHandler = Kit.RequestHandler<RouteParams>;
export type PageLoad = Kit.Load<RouteParams>;
```

These files can be imported into your endpoints and pages as siblings, thanks to the [`rootDirs`](https://www.typescriptlang.org/tsconfig#rootDirs) option in your TypeScript configuration:

```js
/// file: src/routes/[foo]/[bar]/[baz]/+server.js
// @filename: $types.d.ts
import type * as Kit from '@sveltejs/kit';

type RouteParams = {
	foo: string;
	bar: string;
	baz: string;
}

export type RequestHandler = Kit.RequestHandler<RouteParams>;

// @filename: index.js
// @errors: 2355 2322
// ---cut---
/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	// ...
}
```

```js
/// file: src/routes/[foo]/[bar]/[baz]/+page.js
// @filename: $types.d.ts
import type * as Kit from '@sveltejs/kit';

type RouteParams = {
	foo: string;
	bar: string;
	baz: string;
}

export type PageLoad = Kit.Load<RouteParams>;

// @filename: index.js
// @errors: 2355
// ---cut---
/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	// ...
}
```

The return types of the load functions are then available through the `$types` module as `PageData` and `LayoutData` respectively, while the union of the return values of all `Actions` is available as `ActionData`.

Starting with version 2.16.0, two additional helper types are provided: `PageProps` defines `data: PageData`, as well as `form: ActionData`, when there are actions defined, while `LayoutProps` defines `data: LayoutData`, as well as `children: Snippet`.

```svelte
<!--- file: src/routes/+page.svelte --->
<script>
	/** @type {import('./$types').PageProps} */
	let { data, form } = $props();
</script>
```

> \[!LEGACY]
> Before 2.16.0:
>
> ```svelte
>
>
> 	/** @type {{ data: import('./$types').PageData, form: import('./$types').ActionData }} */
> 	let { data, form } = $props();
>
> ```
>
> Using Svelte 4:
>
> ```svelte
>
>
>   /** @type {import('./$types').PageData} */
>   export let data;
>   /** @type {import('./$types').ActionData} */
>   export let form;
>
> ```

> \[!NOTE] For this to work, your own `tsconfig.json` or `jsconfig.json` should extend from the generated `.svelte-kit/tsconfig.json` (where `.svelte-kit` is your [`outDir`](configuration#outDir)):
>
> `{ "extends": "./.svelte-kit/tsconfig.json" }`

### Default tsconfig.json

The generated `.svelte-kit/tsconfig.json` file contains a mixture of options. Some are generated programmatically based on your project configuration, and should generally not be overridden without good reason:

```json
/// file: .svelte-kit/tsconfig.json
{
	"compilerOptions": {
		"paths": {
			"$lib": ["../src/lib"],
			"$lib/*": ["../src/lib/*"]
		},
		"rootDirs": ["..", "./types"]
	},
	"include": [
		"ambient.d.ts",
		"non-ambient.d.ts",
		"./types/**/$types.d.ts",
		"../vite.config.js",
		"../vite.config.ts",
		"../src/**/*.js",
		"../src/**/*.ts",
		"../src/**/*.svelte",
		"../tests/**/*.js",
		"../tests/**/*.ts",
		"../tests/**/*.svelte"
	],
	"exclude": [
		"../node_modules/**",
		"../src/service-worker.js",
		"../src/service-worker/**/*.js",
		"../src/service-worker.ts",
		"../src/service-worker/**/*.ts",
		"../src/service-worker.d.ts",
		"../src/service-worker/**/*.d.ts"
	]
}
```

Others are required for SvelteKit to work properly, and should also be left untouched unless you know what you're doing:

```json
/// file: .svelte-kit/tsconfig.json
{
	"compilerOptions": {
		// this ensures that types are explicitly
		// imported with `import type`, which is
		// necessary as Svelte/Vite cannot
		// otherwise compile components correctly
		"verbatimModuleSyntax": true,

		// Vite compiles one TypeScript module
		// at a time, rather than compiling
		// the entire module graph
		"isolatedModules": true,

		// Tell TS it's used only for type-checking
		"noEmit": true,

		// This ensures both `vite build`
		// and `svelte-package` work correctly
		"lib": ["esnext", "DOM", "DOM.Iterable"],
		"moduleResolution": "bundler",
		"module": "esnext",
		"target": "esnext"
	}
}
```

Use the [`typescript.config` setting](configuration#typescript) in `svelte.config.js` to extend or modify the generated `tsconfig.json`.

## $lib

This is a simple alias to `src/lib`. It allows you to access common components and utility modules without `../../../../` nonsense.

### $lib/server

A subdirectory of `$lib`. SvelteKit will prevent you from importing any modules in `$lib/server` into client-side code. See [server-only modules](server-only-modules).

## app.d.ts

The `app.d.ts` file is home to the ambient types of your apps, i.e. types that are available without explicitly importing them.

Always part of this file is the `App` namespace. This namespace contains several types that influence the shape of certain SvelteKit features you interact with.

## Error

Defines the common shape of expected and unexpected errors. Expected errors are thrown using the `error` function. Unexpected errors are handled by the `handleError` hooks which should return this shape.

```dts
interface Error {/*…*/}
```

```dts
message: string;
```

## Locals

The interface that defines `event.locals`, which can be accessed in server [hooks](/docs/kit/hooks) (`handle`, and `handleError`), server-only `load` functions, and `+server.js` files.

```dts
interface Locals {}
```

## PageData

Defines the common shape of the [page.data state](/docs/kit/$app-state#page) and [$page.data store](/docs/kit/$app-stores#page) - that is, the data that is shared between all pages.
The `Load` and `ServerLoad` functions in `./$types` will be narrowed accordingly.
Use optional properties for data that is only present on specific pages. Do not add an index signature (`[key: string]: any`).

```dts
interface PageData {}
```

## PageState

The shape of the `page.state` object, which can be manipulated using the [`pushState`](/docs/kit/$app-navigation#pushState) and [`replaceState`](/docs/kit/$app-navigation#replaceState) functions from `$app/navigation`.

```dts
interface PageState {}
```

## Platform

If your adapter provides [platform-specific context](/docs/kit/adapters#Platform-specific-context) via `event.platform`, you can specify it here.

```dts
interface Platform {}
```

# Start of Svelte CLI documentation

# Overview

The command line interface (CLI), `sv`, is a toolkit for creating and maintaining Svelte applications.

## Usage

The easiest way to run `sv` is with [`npx`](https://docs.npmjs.com/cli/v8/commands/npx) (or the equivalent command if you're using a different package manager — for example, `pnpm dlx` if you're using [pnpm](https://pnpm.io/)):

```sh
npx sv <command> <args>
```

If you're inside a project where `sv` is already installed, this will use the local installation, otherwise it will download the latest version and run it without installing it, which is particularly useful for [`sv create`](sv-create).

## Acknowledgements

Thank you to [Christopher Brown](https://github.com/chbrown) who originally owned the `sv` name on npm for graciously allowing it to be used for the Svelte CLI. You can find the original `sv` package at [`@chbrown/sv`](https://www.npmjs.com/package/@chbrown/sv).

# Frequently asked questions

## How do I run the `sv` CLI?

Running `sv` looks slightly different for each package manager. Here is a list of the most common commands:

- **npm** : `npx sv create`
- **pnpm** : `pnpm dlx sv create`
- **Bun** : `bunx sv create`
- **Deno** : `deno run npm:sv create`
- **Yarn** : `yarn dlx sv create`

## `npx sv` is not working

Some package managers prefer to run locally installed tools instead of downloading and executing packages from the registry. This issue mostly occurs with `npm` and `yarn`. This usually results in an error message or looks like the command you were trying to execute did not do anything.

Here is a list of issues with possible solutions that users have encountered in the past:

- [`npx sv` create does nothing](https://github.com/sveltejs/cli/issues/472)
- [`sv` command name collides with `runit`](https://github.com/sveltejs/cli/issues/259)
- [`sv` in windows powershell conflicts with `Set-Variable`](https://github.com/sveltejs/cli/issues/317)

# sv create

`sv create` sets up a new SvelteKit project, with options to [setup additional functionality](sv-add#Official-add-ons).

## Usage

```sh
npx sv create [options] [path]
```

## Options

### `--from-playground <url>`

Create a SvelteKit project from a [playground](/playground) URL. This downloads all playground files, detects external dependencies, and sets up a complete SvelteKit project structure with everything ready to go.

Example:

```sh
npx sv create --from-playground="https://svelte.dev/playground/hello-world"
```

### `--template <name>`

Which project template to use:

- `minimal` — barebones scaffolding for your new app
- `demo` — showcase app with a word guessing game that works without JavaScript
- `library` — template for a Svelte library, set up with `svelte-package`

### `--types <option>`

Whether and how to add typechecking to the project:

- `ts` — default to `.ts` files and use `lang="ts"` for `.svelte` components
- `jsdoc` — use [JSDoc syntax](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) for types

### `--no-types`

Prevent typechecking from being added. Not recommended!

### `--add [add-ons...]`

Add add-ons to the project in the `create` command. Following the same format as [sv add](sv-add#Usage).

Example:

```sh
npx sv create --add eslint prettier [path]
```

### `--no-add-ons`

Run the command without the interactive add-ons prompt

### `--install <package-manager>`

Installs dependencies with a specified package manager:

- `npm`
- `pnpm`
- `yarn`
- `bun`
- `deno`

### `--no-install`

Prevents installing dependencies.

### `--no-dir-check`

Skip checking whether the target directory is empty.
