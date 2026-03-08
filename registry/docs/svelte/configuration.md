# Configuration

Your project's configuration lives in a `svelte.config.js` file at the root of your project. As well as SvelteKit, this config object is used by other tooling that integrates with Svelte such as editor extensions.

```js
/// file: svelte.config.js
// @filename: ambient.d.ts
declare module '@sveltejs/adapter-auto' {
	const plugin: () => import('@sveltejs/kit').Adapter;
	export default plugin;
}

// @filename: index.js
// ---cut---
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;
```

## Config

An extension of [`vite-plugin-svelte`'s options](https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md#svelte-options).

```dts
interface Config extends SvelteConfig {/*…*/}
```

```dts
kit?: KitConfig;
```

SvelteKit options.

```dts
[key: string]: any;
```

Any additional options required by tooling that integrates with Svelte.

## KitConfig

The `kit` property configures SvelteKit, and can have the following properties:

## adapter

- default `undefined`

Your [adapter](/docs/kit/adapters) is run when executing `vite build`. It determines how the output is converted for different platforms.

## alias

- default `{}`

An object containing zero or more aliases used to replace values in `import` statements. These aliases are automatically passed to Vite and TypeScript.

```js
// @errors: 7031
/// file: svelte.config.js
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		alias: {
			// this will match a file
			'my-file': 'path/to/my-file.js',

			// this will match a directory and its contents
			// (`my-directory/x` resolves to `path/to/my-directory/x`)
			'my-directory': 'path/to/my-directory',

			// an alias ending /* will only match
			// the contents of a directory, not the directory itself
			'my-directory/*': 'path/to/my-directory/*'
		}
	}
};
```

> \[!NOTE] You will need to run `npm run dev` to have SvelteKit automatically generate the required alias configuration in `jsconfig.json` or `tsconfig.json`.

## appDir

- default `"_app"`

The directory where SvelteKit keeps its stuff, including static assets (such as JS and CSS) and internally-used routes.

If `paths.assets` is specified, there will be two app directories — `${paths.assets}/${appDir}` and `${paths.base}/${appDir}`.

## csp

[Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) configuration. CSP helps to protect your users against cross-site scripting (XSS) attacks, by limiting the places resources can be loaded from. For example, a configuration like this...

```js
// @errors: 7031
/// file: svelte.config.js
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		csp: {
			directives: {
				'script-src': ['self']
			},
			// must be specified with either the `report-uri` or `report-to` directives, or both
			reportOnly: {
				'script-src': ['self'],
				'report-uri': ['/']
			}
		}
	}
};

export default config;
```

...would prevent scripts loading from external sites. SvelteKit will augment the specified directives with nonces or hashes (depending on `mode`) for any inline styles and scripts it generates.

To add a nonce for scripts and links manually included in `src/app.html`, you may use the placeholder `%sveltekit.nonce%` (for example `<script nonce="%sveltekit.nonce%">`).

When pages are prerendered, the CSP header is added via a `<meta http-equiv>` tag (note that in this case, `frame-ancestors`, `report-uri` and `sandbox` directives will be ignored).

> \[!NOTE] When `mode` is `'auto'`, SvelteKit will use nonces for dynamically rendered pages and hashes for prerendered pages. Using nonces with prerendered pages is insecure and therefore forbidden.

> \[!NOTE] Note that most [Svelte transitions](/tutorial/svelte/transition) work by creating an inline `<style>` element. If you use these in your app, you must either leave the `style-src` directive unspecified or add `unsafe-inline`.

If this level of configuration is insufficient and you have more dynamic requirements, you can use the [`handle` hook](/docs/kit/hooks#Server-hooks-handle) to roll your own CSP.

```ts
// @noErrors
mode?: 'hash' | 'nonce' | 'auto';
```

Whether to use hashes or nonces to restrict `<script>` and `<style>` elements. `'auto'` will use hashes for prerendered pages, and nonces for dynamically rendered pages.

```ts
// @noErrors
directives?: CspDirectives;
```

Directives that will be added to `Content-Security-Policy` headers.

```ts
// @noErrors
reportOnly?: CspDirectives;
```

Directives that will be added to `Content-Security-Policy-Report-Only` headers.

## csrf

Protection against [cross-site request forgery (CSRF)](https://owasp.org/www-community/attacks/csrf) attacks.

```ts
// @noErrors
checkOrigin?: boolean;
```

- default `true`
- deprecated Use `trustedOrigins: ['*']` instead

Whether to check the incoming `origin` header for `POST`, `PUT`, `PATCH`, or `DELETE` form submissions and verify that it matches the server's origin.

To allow people to make `POST`, `PUT`, `PATCH`, or `DELETE` requests with a `Content-Type` of `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain` to your app from other origins, you will need to disable this option. Be careful!

```ts
// @noErrors
trustedOrigins?: string[];
```

- default `[]`

An array of origins that are allowed to make cross-origin form submissions to your app.

Each origin should be a complete origin including protocol (e.g., `https://payment-gateway.com`).
This is useful for allowing trusted third-party services like payment gateways or authentication providers to submit forms to your app.

If the array contains `'*'`, all origins will be trusted. This is generally not recommended!

> \[!NOTE] Only add origins you completely trust, as this bypasses CSRF protection for those origins.

CSRF checks only apply in production, not in local development.

## embedded

- default `false`

Whether or not the app is embedded inside a larger app. If `true`, SvelteKit will add its event listeners related to navigation etc on the parent of `%sveltekit.body%` instead of `window`, and will pass `params` from the server rather than inferring them from `location.pathname`.
Note that it is generally not supported to embed multiple SvelteKit apps on the same page and use client-side SvelteKit features within them (things such as pushing to the history state assume a single instance).

## env

Environment variable configuration

```ts
// @noErrors
dir?: string;
```

- default `"."`

The directory to search for `.env` files.

```ts
// @noErrors
publicPrefix?: string;
```

- default `"PUBLIC_"`

A prefix that signals that an environment variable is safe to expose to client-side code. See [`$env/static/public`](/docs/kit/$env-static-public) and [`$env/dynamic/public`](/docs/kit/$env-dynamic-public). Note that Vite's [`envPrefix`](https://vitejs.dev/config/shared-options.html#envprefix) must be set separately if you are using Vite's environment variable handling - though use of that feature should generally be unnecessary.

```ts
// @noErrors
privatePrefix?: string;
```

- default `""`
- available since v1.21.0

A prefix that signals that an environment variable is unsafe to expose to client-side code. Environment variables matching neither the public nor the private prefix will be discarded completely. See [`$env/static/private`](/docs/kit/$env-static-private) and [`$env/dynamic/private`](/docs/kit/$env-dynamic-private).

## experimental

Experimental features. Here be dragons. These are not subject to semantic versioning, so breaking changes or removal can happen in any release.

```ts
// @noErrors
tracing?: {/*…*/}
```

- default `{ server: false, serverFile: false }`
- available since v2.31.0

Options for enabling server-side [OpenTelemetry](https://opentelemetry.io/) tracing for SvelteKit operations including the [`handle` hook](/docs/kit/hooks#Server-hooks-handle), [`load` functions](/docs/kit/load), [form actions](/docs/kit/form-actions), and [remote functions](/docs/kit/remote-functions).

```ts
// @noErrors
server?: boolean;
```

- default `false`
- available since v2.31.0

Enables server-side [OpenTelemetry](https://opentelemetry.io/) span emission for SvelteKit operations including the [`handle` hook](/docs/kit/hooks#Server-hooks-handle), [`load` functions](/docs/kit/load), [form actions](/docs/kit/form-actions), and [remote functions](/docs/kit/remote-functions).

```ts
// @noErrors
instrumentation?: {/*…*/}
```

- available since v2.31.0

```ts
// @noErrors
server?: boolean;
```

- default `false`
- available since v2.31.0

Enables `instrumentation.server.js` for tracing and observability instrumentation.

```ts
// @noErrors
remoteFunctions?: boolean;
```

- default `false`

Whether to enable the experimental remote functions feature. This feature is not yet stable and may be changed or removed at any time.

```ts
// @noErrors
forkPreloads?: boolean;
```

- default `false`

Whether to enable the experimental forked preloading feature using Svelte's fork API.

## files

- deprecated this feature is still supported, but it's generally recommended to use [monorepos](https://levelup.video/tutorials/monorepos-with-pnpm) instead

Where to find various files within your project.

```ts
// @noErrors
src?: string;
```

- deprecated this feature is still supported, but it's generally recommended to use [monorepos](https://levelup.video/tutorials/monorepos-with-pnpm) instead
- default `"src"`
- available since v2.28

The location of your source code.

```ts
// @noErrors
assets?: string;
```

- deprecated this feature is still supported, but it's generally recommended to use [monorepos](https://levelup.video/tutorials/monorepos-with-pnpm) instead
- default `"static"`

A place to put static files that should have stable URLs and undergo no processing, such as `favicon.ico` or `manifest.json`.

```ts
// @noErrors
hooks?: {/*…*/}
```

```ts
// @noErrors
client?: string;
```

- deprecated this feature is still supported, but it's generally recommended to use [monorepos](https://levelup.video/tutorials/monorepos-with-pnpm) instead
- default `"src/hooks.client"`

The location of your client [hooks](/docs/kit/hooks).

```ts
// @noErrors
server?: string;
```

- deprecated this feature is still supported, but it's generally recommended to use [monorepos](https://levelup.video/tutorials/monorepos-with-pnpm) instead
- default `"src/hooks.server"`

The location of your server [hooks](/docs/kit/hooks).

```ts
// @noErrors
universal?: string;
```

- deprecated this feature is still supported, but it's generally recommended to use [monorepos](https://levelup.video/tutorials/monorepos-with-pnpm) instead
- default `"src/hooks"`
- available since v2.3.0

The location of your universal [hooks](/docs/kit/hooks).

```ts
// @noErrors
lib?: string;
```

- deprecated this feature is still supported, but it's generally recommended to use [monorepos](https://levelup.video/tutorials/monorepos-with-pnpm) instead
- default `"src/lib"`

Your app's internal library, accessible throughout the codebase as `$lib`.

```ts
// @noErrors
params?: string;
```

- deprecated this feature is still supported, but it's generally recommended to use [monorepos](https://levelup.video/tutorials/monorepos-with-pnpm) instead
- default `"src/params"`

A directory containing [parameter matchers](/docs/kit/advanced-routing#Matching).

```ts
// @noErrors
routes?: string;
```

- deprecated this feature is still supported, but it's generally recommended to use [monorepos](https://levelup.video/tutorials/monorepos-with-pnpm) instead
- default `"src/routes"`

The files that define the structure of your app (see [Routing](/docs/kit/routing)).

```ts
// @noErrors
serviceWorker?: string;
```

- deprecated this feature is still supported, but it's generally recommended to use [monorepos](https://levelup.video/tutorials/monorepos-with-pnpm) instead
- default `"src/service-worker"`

The location of your service worker's entry point (see [Service workers](/docs/kit/service-workers)).

```ts
// @noErrors
appTemplate?: string;
```

- deprecated this feature is still supported, but it's generally recommended to use [monorepos](https://levelup.video/tutorials/monorepos-with-pnpm) instead
- default `"src/app.html"`

The location of the template for HTML responses.

```ts
// @noErrors
errorTemplate?: string;
```

- deprecated this feature is still supported, but it's generally recommended to use [monorepos](https://levelup.video/tutorials/monorepos-with-pnpm) instead
- default `"src/error.html"`

The location of the template for fallback error responses.

## inlineStyleThreshold

- default `0`

Inline CSS inside a `<style>` block at the head of the HTML. This option is a number that specifies the maximum length of a CSS file in UTF-16 code units, as specified by the [String.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) property, to be inlined. All CSS files needed for the page that are smaller than this value are merged and inlined in a `<style>` block.

> \[!NOTE] This results in fewer initial requests and can improve your [First Contentful Paint](https://web.dev/first-contentful-paint) score. However, it generates larger HTML output and reduces the effectiveness of browser caches. Use it advisedly.

## moduleExtensions

- default `[".js", ".ts"]`

An array of file extensions that SvelteKit will treat as modules. Files with extensions that match neither `config.extensions` nor `config.kit.moduleExtensions` will be ignored by the router.

## outDir

- default `".svelte-kit"`

The directory that SvelteKit writes files to during `dev` and `build`. You should exclude this directory from version control.

## output

Options related to the build output format

```ts
// @noErrors
preloadStrategy?: 'modulepreload' | 'preload-js' | 'preload-mjs';
```

- default `"modulepreload"`
- available since v1.8.4

SvelteKit will preload the JavaScript modules needed for the initial page to avoid import 'waterfalls', resulting in faster application startup. There
are three strategies with different trade-offs:

- `modulepreload` - uses `<link rel="modulepreload">`. This delivers the best results in Chromium-based browsers, in Firefox 115+, and Safari 17+. It is ignored in older browsers.
- `preload-js` - uses `<link rel="preload">`. Prevents waterfalls in Chromium and Safari, but Chromium will parse each module twice (once as a script, once as a module). Causes modules to be requested twice in Firefox. This is a good setting if you want to maximise performance for users on iOS devices at the cost of a very slight degradation for Chromium users.
- `preload-mjs` - uses `<link rel="preload">` but with the `.mjs` extension which prevents double-parsing in Chromium. Some static webservers will fail to serve .mjs files with a `Content-Type: application/javascript` header, which will cause your application to break. If that doesn't apply to you, this is the option that will deliver the best performance for the largest number of users, until `modulepreload` is more widely supported.

```ts
// @noErrors
bundleStrategy?: 'split' | 'single' | 'inline';
```

- default `'split'`
- available since v2.13.0

The bundle strategy option affects how your app's JavaScript and CSS files are loaded.

- If `'split'`, splits the app up into multiple .js/.css files so that they are loaded lazily as the user navigates around the app. This is the default, and is recommended for most scenarios.
- If `'single'`, creates just one .js bundle and one .css file containing code for the entire app.
- If `'inline'`, inlines all JavaScript and CSS of the entire app into the HTML. The result is usable without a server (i.e. you can just open the file in your browser).

When using `'split'`, you can also adjust the bundling behaviour by setting [`output.experimentalMinChunkSize`](https://rollupjs.org/configuration-options/#output-experimentalminchunksize) and [`output.manualChunks`](https://rollupjs.org/configuration-options/#output-manualchunks) inside your Vite config's [`build.rollupOptions`](https://vite.dev/config/build-options.html#build-rollupoptions).

If you want to inline your assets, you'll need to set Vite's [`build.assetsInlineLimit`](https://vite.dev/config/build-options.html#build-assetsinlinelimit) option to an appropriate size then import your assets through Vite.

```js
// @errors: 7031
/// file: vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		// inline all imported assets
		assetsInlineLimit: Infinity
	}
});
```

```svelte
/// file: src/routes/+layout.svelte
<script>
	// import the asset through Vite
	import favicon from './favicon.png';
</script>

<svelte:head>
	<!-- this asset will be inlined as a base64 URL -->
	<link rel="icon" href={favicon} />
</svelte:head>
```

## paths

```ts
// @noErrors
assets?: '' | `http://${string}` | `https://${string}`;
```

- default `""`

An absolute path that your app's files are served from. This is useful if your files are served from a storage bucket of some kind.

```ts
// @noErrors
base?: '' | `/${string}`;
```

- default `""`

A root-relative path that must start, but not end with `/` (e.g. `/base-path`), unless it is the empty string. This specifies where your app is served from and allows the app to live on a non-root path. Note that you need to prepend all your root-relative links with the base value or they will point to the root of your domain, not your `base` (this is how the browser works). You can use [`base` from `$app/paths`](/docs/kit/$app-paths#base) for that: `<a href="{base}/your-page">Link</a>`. If you find yourself writing this often, it may make sense to extract this into a reusable component.

```ts
// @noErrors
relative?: boolean;
```

- default `true`
- available since v1.9.0

Whether to use relative asset paths.

If `true`, `base` and `assets` imported from `$app/paths` will be replaced with relative asset paths during server-side rendering, resulting in more portable HTML.
If `false`, `%sveltekit.assets%` and references to build artifacts will always be root-relative paths, unless `paths.assets` is an external URL

[Single-page app](/docs/kit/single-page-apps) fallback pages will always use absolute paths, regardless of this setting.

If your app uses a `<base>` element, you should set this to `false`, otherwise asset URLs will incorrectly be resolved against the `<base>` URL rather than the current page.

In 1.0, `undefined` was a valid value, which was set by default. In that case, if `paths.assets` was not external, SvelteKit would replace `%sveltekit.assets%` with a relative path and use relative paths to reference build artifacts, but `base` and `assets` imported from `$app/paths` would be as specified in your config.

## prerender

See [Prerendering](/docs/kit/page-options#prerender).

```ts
// @noErrors
concurrency?: number;
```

- default `1`

How many pages can be prerendered simultaneously. JS is single-threaded, but in cases where prerendering performance is network-bound (for example loading content from a remote CMS) this can speed things up by processing other tasks while waiting on the network response.

```ts
// @noErrors
crawl?: boolean;
```

- default `true`

Whether SvelteKit should find pages to prerender by following links from `entries`.

```ts
// @noErrors
entries?: Array<'*' | `/${string}`>;
```

- default `["*"]`

An array of pages to prerender, or start crawling from (if `crawl: true`). The `*` string includes all routes containing no required `[parameters]`  with optional parameters included as being empty (since SvelteKit doesn't know what value any parameters should have).

```ts
// @noErrors
handleHttpError?: PrerenderHttpErrorHandlerValue;
```

- default `"fail"`
- available since v1.15.7

How to respond to HTTP errors encountered while prerendering the app.

- `'fail'` — fail the build
- `'ignore'` - silently ignore the failure and continue
- `'warn'` — continue, but print a warning
- `(details) => void` — a custom error handler that takes a `details` object with `status`, `path`, `referrer`, `referenceType` and `message` properties. If you `throw` from this function, the build will fail

```js
// @errors: 7031
/// file: svelte.config.js
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
					return;
				}

				// otherwise fail the build
				throw new Error(message);
			}
		}
	}
};
```

```ts
// @noErrors
handleMissingId?: PrerenderMissingIdHandlerValue;
```

- default `"fail"`
- available since v1.15.7

How to respond when hash links from one prerendered page to another don't correspond to an `id` on the destination page.

- `'fail'` — fail the build
- `'ignore'` - silently ignore the failure and continue
- `'warn'` — continue, but print a warning
- `(details) => void` — a custom error handler that takes a `details` object with `path`, `id`, `referrers` and `message` properties. If you `throw` from this function, the build will fail

```ts
// @noErrors
handleEntryGeneratorMismatch?: PrerenderEntryGeneratorMismatchHandlerValue;
```

- default `"fail"`
- available since v1.16.0

How to respond when an entry generated by the `entries` export doesn't match the route it was generated from.

- `'fail'` — fail the build
- `'ignore'` - silently ignore the failure and continue
- `'warn'` — continue, but print a warning
- `(details) => void` — a custom error handler that takes a `details` object with `generatedFromId`, `entry`, `matchedId` and `message` properties. If you `throw` from this function, the build will fail

```ts
// @noErrors
handleUnseenRoutes?: PrerenderUnseenRoutesHandlerValue;
```

- default `"fail"`
- available since v2.16.0

How to respond when a route is marked as prerenderable but has not been prerendered.

- `'fail'` — fail the build
- `'ignore'` - silently ignore the failure and continue
- `'warn'` — continue, but print a warning
- `(details) => void` — a custom error handler that takes a `details` object with a `routes` property which contains all routes that haven't been prerendered. If you `throw` from this function, the build will fail

The default behavior is to fail the build. This may be undesirable when you know that some of your routes may never be reached under certain
circumstances such as a CMS not returning data for a specific area, resulting in certain routes never being reached.

```ts
// @noErrors
origin?: string;
```

- default `"http://sveltekit-prerender"`

The value of `url.origin` during prerendering; useful if it is included in rendered content.

## router

```ts
// @noErrors
type?: 'pathname' | 'hash';
```

- default `"pathname"`
- available since v2.14.0

What type of client-side router to use.

- `'pathname'` is the default and means the current URL pathname determines the route
- `'hash'` means the route is determined by `location.hash`. In this case, SSR and prerendering are disabled. This is only recommended if `pathname` is not an option, for example because you don't control the webserver where your app is deployed.
  It comes with some caveats: you can't use server-side rendering (or indeed any server logic), and you have to make sure that the links in your app all start with #/, or they won't work. Beyond that, everything works exactly like a normal SvelteKit app.

```ts
// @noErrors
resolution?: 'client' | 'server';
```

- default `"client"`
- available since v2.17.0

How to determine which route to load when navigating to a new page.

By default, SvelteKit will serve a route manifest to the browser.
When navigating, this manifest is used (along with the `reroute` hook, if it exists) to determine which components to load and which `load` functions to run.
Because everything happens on the client, this decision can be made immediately. The drawback is that the manifest needs to be
loaded and parsed before the first navigation can happen, which may have an impact if your app contains many routes.

Alternatively, SvelteKit can determine the route on the server. This means that for every navigation to a path that has not yet been visited, the server will be asked to determine the route.
This has several advantages:

- The client does not need to load the routing manifest upfront, which can lead to faster initial page loads
- The list of routes is hidden from public view
- The server has an opportunity to intercept each navigation (for example through a middleware), enabling (for example) A/B testing opaque to SvelteKit

The drawback is that for unvisited paths, resolution will take slightly longer (though this is mitigated by [preloading](/docs/kit/link-options#data-sveltekit-preload-data)).

> \[!NOTE] When using server-side route resolution and prerendering, the resolution is prerendered along with the route itself.

## serviceWorker

## typescript

```ts
// @noErrors
config?: (config: Record<string, any>) => Record<string, any> | void;
```

- default `(config) => config`
- available since v1.3.0

A function that allows you to edit the generated `tsconfig.json`. You can mutate the config (recommended) or return a new one.
This is useful for extending a shared `tsconfig.json` in a monorepo root, for example.

Note that any paths configured here should be relative to the generated config file, which is written to `.svelte-kit/tsconfig.json`.

## version

Client-side navigation can be buggy if you deploy a new version of your app while people are using it. If the code for the new page is already loaded, it may have stale content; if it isn't, the app's route manifest may point to a JavaScript file that no longer exists.
SvelteKit helps you solve this problem through version management.
If SvelteKit encounters an error while loading the page and detects that a new version has been deployed (using the `name` specified here, which defaults to a timestamp of the build) it will fall back to traditional full-page navigation.
Not all navigations will result in an error though, for example if the JavaScript for the next page is already loaded. If you still want to force a full-page navigation in these cases, use techniques such as setting the `pollInterval` and then using `beforeNavigate`:

```html
/// file: +layout.svelte
<script>
	import { beforeNavigate } from '$app/navigation';
	import { updated } from '$app/state';

	beforeNavigate(({ willUnload, to }) => {
		if (updated.current && !willUnload && to?.url) {
			location.href = to.url.href;
		}
	});
</script>
```

If you set `pollInterval` to a non-zero value, SvelteKit will poll for new versions in the background and set the value of [`updated.current`](/docs/kit/$app-state#updated) `true` when it detects one.

```ts
// @noErrors
name?: string;
```

The current app version string. If specified, this must be deterministic (e.g. a commit ref rather than `Math.random()` or `Date.now().toString()`), otherwise defaults to a timestamp of the build.

For example, to use the current commit hash, you could do use `git rev-parse HEAD`:

```js
// @errors: 7031
/// file: svelte.config.js
import * as child_process from 'node:child_process';

export default {
	kit: {
		version: {
			name: child_process.execSync('git rev-parse HEAD').toString().trim()
		}
	}
};
```

```ts
// @noErrors
pollInterval?: number;
```

- default `0`

The interval in milliseconds to poll for version changes. If this is `0`, no polling occurs.

# Command Line Interface

SvelteKit projects use [Vite](https://vitejs.dev), meaning you'll mostly use its CLI (albeit via `npm run dev/build/preview` scripts):

- `vite dev` — start a development server
- `vite build` — build a production version of your app
- `vite preview` — run the production version locally

However SvelteKit includes its own CLI for initialising your project:

## svelte-kit sync

`svelte-kit sync` creates the `tsconfig.json` and all generated types (which you can import as `./$types` inside routing files) for your project. When you create a new project, it is listed as the `prepare` script and will be run automatically as part of the npm lifecycle, so you should not ordinarily have to run this command.
