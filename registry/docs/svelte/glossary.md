# Glossary

The core of SvelteKit provides a highly configurable rendering engine. This section describes some of the terms used when discussing rendering. A reference for setting these options is provided in the documentation above.

## CSR

Client-side rendering (CSR) is the generation of the page contents in the web browser using JavaScript.

In SvelteKit, client-side rendering will be used by default, but you can turn off JavaScript with [the `csr = false` page option](page-options#csr).

## Edge

Rendering on the edge refers to rendering an application in a content delivery network (CDN) near the user. Edge rendering allows the request and response for a page to travel a shorter distance thus improving latency.

## Hybrid app

SvelteKit uses a hybrid rendering mode by default where it loads the initial HTML from the server (SSR), and then updates the page contents on subsequent navigations via client-side rendering (CSR).

## Hydration

Svelte components store some state and update the DOM when the state is updated. When fetching data during SSR, by default SvelteKit will store this data and transmit it to the client along with the server-rendered HTML. The components can then be initialized on the client with that data without having to call the same API endpoints again. Svelte will then check that the DOM is in the expected state and attach event listeners in a process called hydration. Once the components are fully hydrated, they can react to changes to their properties just like any newly created Svelte component.

In SvelteKit, pages will be hydrated by default, but you can turn off JavaScript with [the `csr = false` page option](page-options#csr).

## ISR

Incremental static regeneration (ISR) allows you to generate static pages on your site as visitors request those pages without redeploying. This may reduces build times compared to [SSG](#SSG) sites with a large number of pages. You can do [ISR with `adapter-vercel`](adapter-vercel#Incremental-Static-Regeneration).

## MPA

Traditional applications that render each page view on the server — such as those written in languages other than JavaScript — are often referred to as multi-page apps (MPA).

## Prerendering

Prerendering means computing the contents of a page at build time and saving the HTML for display. This approach has the same benefits as traditional server-rendered pages, but avoids recomputing the page for each visitor and so scales nearly for free as the number of visitors increases. The tradeoff is that the build process is more expensive and prerendered content can only be updated by building and deploying a new version of the application.

For content to be prerenderable, any two users hitting it directly must get the same content from the server, and the page must not contain [actions](form-actions). Note that you can still prerender content that is loaded based on the page's parameters as long as all users will be seeing the same prerendered content. Prerendering all of your pages is also known as [Static Site Generation](#SSG).

Pre-rendered pages are not limited to static content. You can build personalized pages if user-specific data is fetched and rendered client-side. This is subject to the caveat that you will experience the downsides of not doing SSR for that content as discussed above.

In SvelteKit, you can control prerendering with [the `prerender` page option](page-options#prerender) and [`prerender` config](configuration#prerender) in `svelte.config.js`.

## PWA

A progressive web app (PWA) is an app that's built using web APIs and technologies, but functions like a mobile or desktop app. Sites served as [PWAs can be installed](https://web.dev/learn/pwa/installation), allowing you to add a shortcut to the application on your launcher, home screen, or start menu. Many PWAs will utilize [service workers](service-workers) to build offline capabilities.

## Routing

By default, when you navigate to a new page (by clicking on a link or using the browser's forward or back buttons), SvelteKit will intercept the attempted navigation and handle it instead of allowing the browser to send a request to the server for the destination page. SvelteKit will then update the displayed contents on the client by rendering the component for the new page, which in turn can make calls to the necessary API endpoints. This process of updating the page on the client in response to attempted navigation is called client-side routing.

In SvelteKit, client-side routing will be used by default, but you can skip it with [`data-sveltekit-reload`](link-options#data-sveltekit-reload).

## SPA

A single-page app (SPA) is an application in which all requests to the server load a single HTML file which then does client-side rendering based on the requested URL. All navigation is handled on the client-side in a process called client-side routing with per-page contents being updated and common layout elements remaining largely unchanged. Throughout this site, when we refer to a SPA, we use this definition where a SPA simply serves an empty shell on the initial request. It should not be confused with a [hybrid app](#Hybrid-app), which serves HTML on the initial request. It has a large performance impact by forcing two network round trips before rendering can begin. Because SPA mode has large negative performance and SEO impacts, it is recommended only in very limited circumstances such as when being wrapped in a mobile app.

In SvelteKit, you can [build SPAs with `adapter-static`](single-page-apps).

## SSG

Static Site Generation (SSG) is a term that refers to a site where every page is prerendered. One benefit of fully prerendering a site is that you do not need to maintain or pay for servers to perform SSR. Once generated, the site can be served from CDNs, leading to great “time to first byte” performance. This delivery model is often referred to as JAMstack.

In SvelteKit, you can do static site generation by using [`adapter-static`](adapter-static) or by configuring every page to be [prerendered](#Prerendering) using [the `prerender` page option](page-options#prerender) or [`prerender` config](configuration#prerender) in `svelte.config.js`.

## SSR

Server-side rendering (SSR) is the generation of the page contents on the server. Returning the page contents from the server via SSR or prerendering is highly preferred for performance and SEO. It significantly improves performance by avoiding the introduction of extra round trips necessary in a SPA, and makes your app accessible to users if JavaScript fails or is disabled (which happens [more often than you probably think](https://kryogenix.org/code/browser/everyonehasjs.html)). While some search engines can index content that is dynamically generated on the client-side, it is likely to take longer even in these cases.

In SvelteKit, pages are server-side rendered by default. You can disable SSR with [the `ssr` page option](page-options#ssr).

# @sveltejs/kit

```js
// @noErrors
import {
	Server,
	VERSION,
	error,
	fail,
	invalid,
	isActionFailure,
	isHttpError,
	isRedirect,
	isValidationError,
	json,
	normalizeUrl,
	redirect,
	text
} from '@sveltejs/kit';
```

## Server

```dts
class Server {/*…*/}
```

```dts
constructor(manifest: SSRManifest);
```

```dts
init(options: ServerInitOptions): Promise<void>;
```

```dts
respond(request: Request, options: RequestOptions): Promise<Response>;
```

## VERSION

```dts
const VERSION: string;
```

## error

Throws an error with a HTTP status code and an optional message.
When called during request handling, this will cause SvelteKit to
return an error response without invoking `handleError`.
Make sure you're not catching the thrown error, which would prevent SvelteKit from handling it.

```dts
function error(status: number, body: App.Error): never;
```

```dts
function error(
	status: number,
	body?: {
		message: string;
	} extends App.Error
		? App.Error | string | undefined
		: never
): never;
```

## fail

Create an `ActionFailure` object. Call when form submission fails.

```dts
function fail(status: number): ActionFailure<undefined>;
```

```dts
function fail<T = undefined>(
	status: number,
	data: T
): ActionFailure<T>;
```

## invalid

Available since 2.47.3

Use this to throw a validation error to imperatively fail form validation.
Can be used in combination with `issue` passed to form actions to create field-specific issues.

```ts
import { invalid } from '@sveltejs/kit';
import { form } from '$app/server';
import { tryLogin } from '$lib/server/auth';
import * as v from 'valibot';

export const login = form(
	v.object({ name: v.string(), _password: v.string() }),
	async ({ name, _password }) => {
		const success = tryLogin(name, _password);
		if (!success) {
			invalid('Incorrect username or password');
		}

		// ...
	}
);
```

```dts
function invalid(
	...issues: (StandardSchemaV1.Issue | string)[]
): never;
```

## isActionFailure

Checks whether this is an action failure thrown by `fail`.

```dts
function isActionFailure(e: unknown): e is ActionFailure;
```

## isHttpError

Checks whether this is an error thrown by `error`.

```dts
function isHttpError<T extends number>(
	e: unknown,
	status?: T
): e is HttpError_1 & {
	status: T extends undefined ? never : T;
};
```

## isRedirect

Checks whether this is a redirect thrown by `redirect`.

```dts
function isRedirect(e: unknown): e is Redirect_1;
```

## isValidationError

Available since 2.47.3

Checks whether this is an validation error thrown by `invalid`.

```dts
function isValidationError(e: unknown): e is ActionFailure;
```

## json

Create a JSON `Response` object from the supplied data.

```dts
function json(data: any, init?: ResponseInit): Response;
```

## normalizeUrl

Available since 2.18.0

Strips possible SvelteKit-internal suffixes and trailing slashes from the URL pathname.
Returns the normalized URL as well as a method for adding the potential suffix back
based on a new pathname (possibly including search) or URL.

```js
// @errors: 7031
import { normalizeUrl } from '@sveltejs/kit';

const { url, denormalize } = normalizeUrl('/blog/post/__data.json');
console.log(url.pathname); // /blog/post
console.log(denormalize('/blog/post/a')); // /blog/post/a/__data.json
```

```dts
function normalizeUrl(url: URL | string): {
	url: URL;
	wasNormalized: boolean;
	denormalize: (url?: string | URL) => URL;
};
```

## redirect

Redirect a request. When called during request handling, SvelteKit will return a redirect response.
Make sure you're not catching the thrown redirect, which would prevent SvelteKit from handling it.

Most common status codes:

- `303 See Other`: redirect as a GET request (often used after a form POST request)
- `307 Temporary Redirect`: redirect will keep the request method
- `308 Permanent Redirect`: redirect will keep the request method, SEO will be transferred to the new page

[See all redirect status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages)

```dts
function redirect(
	status:
		| 300
		| 301
		| 302
		| 303
		| 304
		| 305
		| 306
		| 307
		| 308
		| ({} & number),
	location: string | URL
): never;
```

## text

Create a `Response` object from the supplied body.

```dts
function text(body: string, init?: ResponseInit): Response;
```

## Action

Shape of a form action method that is part of `export const actions = {...}` in `+page.server.js`.
See [form actions](/docs/kit/form-actions) for more information.

```dts
type Action<
	Params extends AppLayoutParams<'/'> =
		AppLayoutParams<'/'>,
	OutputData extends Record<string, any> | void = Record<
		string,
		any
	> | void,
	RouteId extends AppRouteId | null = AppRouteId | null
> = (
	event: RequestEvent<Params, RouteId>
) => MaybePromise<OutputData>;
```

## ActionFailure

```dts
interface ActionFailure<T = undefined> {/*…*/}
```

```dts
status: number;
```

```dts
data: T;
```

```dts
[uniqueSymbol]: true;
```

## ActionResult

When calling a form action via fetch, the response will be one of these shapes.

```svelte
<form method="post" use:enhance={() => {
	return ({ result }) => {
		// result is of type ActionResult
	};
}}
```

```dts
type ActionResult<
	Success extends Record<string, unknown> | undefined =
		Record<string, any>,
	Failure extends Record<string, unknown> | undefined =
		Record<string, any>
> =
	| { type: 'success'; status: number; data?: Success }
	| { type: 'failure'; status: number; data?: Failure }
	| { type: 'redirect'; status: number; location: string }
	| { type: 'error'; status?: number; error: any };
```

## Actions

Shape of the `export const actions = {...}` object in `+page.server.js`.
See [form actions](/docs/kit/form-actions) for more information.

```dts
type Actions<
	Params extends AppLayoutParams<'/'> =
		AppLayoutParams<'/'>,
	OutputData extends Record<string, any> | void = Record<
		string,
		any
	> | void,
	RouteId extends AppRouteId | null = AppRouteId | null
> = Record<string, Action<Params, OutputData, RouteId>>;
```

## Adapter

[Adapters](/docs/kit/adapters) are responsible for taking the production build and turning it into something that can be deployed to a platform of your choosing.

```dts
interface Adapter {/*…*/}
```

```dts
name: string;
```

The name of the adapter, using for logging. Will typically correspond to the package name.

```dts
adapt: (builder: Builder) => MaybePromise<void>;
```

- `builder` An object provided by SvelteKit that contains methods for adapting the app

This function is called after SvelteKit has built your app.

```dts
supports?: {/*…*/}
```

Checks called during dev and build to determine whether specific features will work in production with this adapter.

```dts
read?: (details: { config: any; route: { id: string } }) => boolean;
```

- `details.config` The merged route config

Test support for `read` from `$app/server`.

```dts
instrumentation?: () => boolean;
```

- available since v2.31.0

Test support for `instrumentation.server.js`. To pass, the adapter must support running `instrumentation.server.js` prior to the application code.

```dts
emulate?: () => MaybePromise<Emulator>;
```

Creates an `Emulator`, which allows the adapter to influence the environment
during dev, build and prerendering.

## AfterNavigate

The argument passed to [`afterNavigate`](/docs/kit/$app-navigation#afterNavigate) callbacks.

```dts
type AfterNavigate = (Navigation | NavigationEnter) & {
	type: Exclude<NavigationType, 'leave'>;
	/**
	 * Since `afterNavigate` callbacks are called after a navigation completes, they will never be called with a navigation that unloads the page.
	 */
	willUnload: false;
};
```

## AwaitedActions

```dts
type AwaitedActions<
	T extends Record<string, (...args: any) => any>
> = OptionalUnion<
	{
		[Key in keyof T]: UnpackValidationError<
			Awaited<ReturnType<T[Key]>>
		>;
	}[keyof T]
>;
```

## BeforeNavigate

The argument passed to [`beforeNavigate`](/docs/kit/$app-navigation#beforeNavigate) callbacks.

```dts
type BeforeNavigate = Navigation & {
	/**
	 * Call this to prevent the navigation from starting.
	 */
	cancel: () => void;
};
```
