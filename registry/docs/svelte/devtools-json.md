# devtools-json

The `devtools-json` add-on installs [`vite-plugin-devtools-json`](https://github.com/ChromeDevTools/vite-plugin-devtools-json/), which is a Vite plugin for generating a Chromium DevTools project settings file on-the-fly in the development server. This file is served from `/.well-known/appspecific/com.chrome.devtools.json` and tells Chromium browsers where your project's source code lives so that you can use [the workspaces feature](https://developer.chrome.com/docs/devtools/workspaces) to edit source files in the browser.

> \[!NOTE]
> Installing the plugin enables the feature for all users connecting to the dev server with a Chromium browser, and allows the browser to read and write all files within the directory. If you are using Chrome's AI Assistance feature, this may also result in data being sent to Google.

## Alternatives

If you'd prefer not to install the plugin, but still want to avoid seeing a message about the missing file, you have a couple of options.

Firstly, you can prevent the request from being issued on your machine by disabling the feature in your browser. You can do this in Chrome by visiting `chrome://flags` and disabling the "DevTools Project Settings". You may also be interested in disabling "DevTools Automatic Workspace Folders" since it’s closely related.

You can also prevent the web server from issuing a notice regarding the incoming request for all developers of your application by handling the request yourself. For example, you can create a file named `.well-known/appspecific/com.chrome.devtools.json` with the contents `"Go away, Chrome DevTools!"` or you can add logic to respond to the request in your [`handle`](https://svelte.dev/docs/kit/hooks#Server-hooks-handle) hook:

```js
/// file: src/hooks.server.js
import { dev } from '$app/environment';

export function handle({ event, resolve }) {
	if (dev && event.url.pathname === '/.well-known/appspecific/com.chrome.devtools.json') {
		return new Response(undefined, { status: 404 });
	}

	return resolve(event);
}
```

## Usage

```sh
npx sv add devtools-json
```

## What you get

- `vite-plugin-devtools-json` added to your Vite plugin options

# drizzle

[Drizzle ORM](https://orm.drizzle.team/) is a TypeScript ORM offering both relational and SQL-like query APIs, and which is serverless-ready by design.

## Usage

```sh
npx sv add drizzle
```

## What you get

- a setup that keeps your database access in SvelteKit's server files
- an `.env` file to store your credentials
- compatibility with the Better Auth add-on
- an optional Docker configuration to help with running a local database

## Options

### database

Which database variant to use:

- `postgresql` — the most popular open source database
- `mysql` — another popular open source database
- `sqlite` — file-based database not requiring a database server

```sh
npx sv add drizzle="database:postgresql"
```

### client

The SQL client to use, depends on `database`:

- For `postgresql`: `postgres.js`, `neon`,
- For `mysql`: `mysql2`, `planetscale`
- For `sqlite`: `better-sqlite3`, `libsql`, `turso`

```sh
npx sv add drizzle="database:postgresql+client:postgres.js"
```

Drizzle is compatible with well over a dozen database drivers. We just offer a few of the most common ones here for simplicity, but if you'd like to use another one you can choose one as a placeholder and swap it out for another after setup by choosing from [Drizzle's full list of compatible drivers](https://orm.drizzle.team/docs/connect-overview#next-steps).

### docker

Whether to add Docker Compose configuration. Only available for [`database`](#Options-database) `postgresql` or `mysql`

```sh
npx sv add drizzle="database:postgresql+client:postgres.js+docker:yes"
```

# eslint

[ESLint](https://eslint.org/) finds and fixes problems in your code.

## Usage

```sh
npx sv add eslint
```

## What you get

- the relevant packages installed including `eslint-plugin-svelte`
- an `eslint.config.js` file
- updated `.vscode/settings.json`
- configured to work with TypeScript and `prettier` if you're using those packages

# better-auth

[Better Auth](https://www.better-auth.com/) is a framework-agnostic authentication library for TypeScript.

## Usage

```sh
npx sv add better-auth
```

## What you get

- a complete auth setup for SvelteKit with Drizzle as the database adapter
- email/password authentication enabled by default
- optional demo registration and login pages

## Options

### demo

Which demo pages to include. Available values: `password` (Email & Password), `github` (GitHub OAuth).

```sh
# Email & Password only (default)
npx sv add better-auth="demo:password"

# GitHub OAuth only
npx sv add better-auth="demo:github"

# Both Email & Password and GitHub OAuth
npx sv add better-auth="demo:password,github"
```

# mcp

[Svelte MCP](/docs/ai/overview) can help your LLM write better Svelte code.

## Usage

```sh
npx sv add mcp
```

## What you get

- An MCP configuration for [local](https://svelte.dev/docs/ai/local-setup) or [remote](https://svelte.dev/docs/ai/remote-setup) setup
- A [README for agents](https://agents.md/) to help you use the MCP server effectively

## Options

### ide

The IDE you want to use like `'claude-code'`, `'cursor'`, `'gemini'`, `'opencode'`, `'vscode'`, `'other'`.

```sh
npx sv add mcp="ide:cursor,vscode"
```

### setup

The setup you want to use.

```sh
npx sv add mcp="setup:local"
```

# mdsvex

[mdsvex](https://mdsvex.pngwn.io) is a markdown preprocessor for Svelte components - basically MDX for Svelte. It allows you to use Svelte components in your markdown, or markdown in your Svelte components.

## Usage

```sh
npx sv add mdsvex
```

## What you get

- mdsvex installed and configured in your `svelte.config.js`

# paraglide

[Paraglide from Inlang](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) is a compiler-based i18n library that emits tree-shakable message functions with small bundle sizes, no async waterfalls, full type-safety, and more.

## Usage

```sh
npx sv add paraglide
```

## What you get

- Inlang project settings
- paraglide Vite plugin
- SvelteKit `reroute` and `handle` hooks
- `text-direction` and `lang` attributes in `app.html`
- updated `.gitignore`
- an optional demo page showing how to use paraglide

## Options

### languageTags

The languages you'd like to support specified as IETF BCP 47 language tags.

```sh
npx sv add paraglide="languageTags:en,es"
```

### demo

Whether to generate an optional demo page showing how to use paraglide.

```sh
npx sv add paraglide="demo:yes"
```

# playwright

[Playwright](https://playwright.dev) browser testing.

## Usage

```sh
npx sv add playwright
```

## What you get

- scripts added in your `package.json`
- a Playwright config file
- an updated `.gitignore`
- a demo test

# prettier

[Prettier](https://prettier.io) is an opinionated code formatter.

## Usage

```sh
npx sv add prettier
```

## What you get

- scripts in your `package.json`
- `.prettierignore` and `.prettierrc` files
- updates to your eslint config if you're using that package

# storybook

[Storybook](https://storybook.js.org/) is a frontend component workshop.

## Usage

```sh
npx sv add storybook
```

## What you get

- `npx storybook init` run for you from the same convenient `sv` CLI used for all other add-ons
- [Storybook for SvelteKit](https://storybook.js.org/docs/get-started/frameworks/sveltekit) or [Storybook for Svelte & Vite](https://storybook.js.org/docs/get-started/frameworks/svelte-vite) with default config provided, easy mocking of many SvelteKit modules, automatic link handling, and more.

# sveltekit-adapter

[SvelteKit adapters](/docs/kit/adapters) allow you to deploy your site to numerous platforms. This add-on allows you to configure officially provided SvelteKit adapters, but a number of [community-provided adapters](https://www.sveltesociety.dev/packages?category=sveltekit-adapters) are also available.

## Usage

```sh
npx sv add sveltekit-adapter
```

## What you get

- the chosen SvelteKit adapter installed and configured in your `svelte.config.js`

## Options

### adapter

Which SvelteKit adapter to use:

- `auto` — [`@sveltejs/adapter-auto`](/docs/kit/adapter-auto) automatically chooses the proper adapter to use, but is less configurable
- `node` — [`@sveltejs/adapter-node`](/docs/kit/adapter-node) generates a standalone Node server
- `static` — [`@sveltejs/adapter-static`](/docs/kit/adapter-static) allows you to use SvelteKit as a static site generator (SSG)
- `vercel` — [`@sveltejs/adapter-vercel`](/docs/kit/adapter-vercel) allows you to deploy to Vercel
- `cloudflare` — [`@sveltejs/adapter-cloudflare`](/docs/kit/adapter-cloudflare) allows you to deploy to Cloudflare
- `netlify` — [`@sveltejs/adapter-netlify`](/docs/kit/adapter-netlify) allows you to deploy to Netlify

```sh
npx sv add sveltekit-adapter="adapter:node"
```

### cloudflare target

Whether to deploy to Cloudflare Workers or Pages. Only available for `cloudflare` adapter.

```sh
npx sv add sveltekit-adapter="adapter:cloudflare+cfTarget:workers"
```

# tailwindcss

[Tailwind CSS](https://tailwindcss.com/) allows you to rapidly build modern websites without ever leaving your HTML.

## Usage

```sh
npx sv add tailwindcss
```

## What you get

- Tailwind setup following the [Tailwind for SvelteKit guide](https://tailwindcss.com/docs/installation/framework-guides/sveltekit)
- Tailwind Vite plugin
- updated `layout.css` and `+layout.svelte` (for SvelteKit) or `app.css` and `App.svelte` (for non-SvelteKit Vite apps)
- integration with `prettier` if using that package

## Options

### plugins

Which plugin to use:

- `typography` — [`@tailwindcss/typography`](https://github.com/tailwindlabs/tailwindcss-typography)
- `forms` — [`@tailwindcss/forms`](https://github.com/tailwindlabs/tailwindcss-forms)

```sh
npx sv add tailwindcss="plugins:typography"
```

# vitest

[Vitest](https://vitest.dev/) is a Vite-native testing framework.

## Usage

```sh
npx sv add vitest
```

## What you get

- the relevant packages installed and scripts added to your `package.json`
- client/server-aware testing setup for Svelte in your Vite config file
- demo tests

## Options

### usages

Which test types to use:

- `unit` — unit testing
- `component` — component testing

```sh
npx sv add vitest="usages:unit,component"
```
