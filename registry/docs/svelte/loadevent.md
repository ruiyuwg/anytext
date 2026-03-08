## LoadEvent

The generic form of `PageLoadEvent` and `LayoutLoadEvent`. You should import those from `./$types` (see [generated types](/docs/kit/types#Generated-types))
rather than using `LoadEvent` directly.

```dts
interface LoadEvent<
	Params extends AppLayoutParams<'/'> =
		AppLayoutParams<'/'>,
	Data extends Record<string, unknown> | null = Record<
		string,
		any
	> | null,
	ParentData extends Record<string, unknown> = Record<
		string,
		any
	>,
	RouteId extends AppRouteId | null = AppRouteId | null
> extends NavigationEvent<Params, RouteId> {/*…*/}
```

```dts
fetch: typeof fetch;
```

`fetch` is equivalent to the [native `fetch` web API](https://developer.mozilla.org/en-US/docs/Web/API/fetch), with a few additional features:

- It can be used to make credentialed requests on the server, as it inherits the `cookie` and `authorization` headers for the page request.
- It can make relative requests on the server (ordinarily, `fetch` requires a URL with an origin when used in a server context).
- Internal requests (e.g. for `+server.js` routes) go directly to the handler function when running on the server, without the overhead of an HTTP call.
- During server-side rendering, the response will be captured and inlined into the rendered HTML by hooking into the `text` and `json` methods of the `Response` object. Note that headers will *not* be serialized, unless explicitly included via [`filterSerializedResponseHeaders`](/docs/kit/hooks#Server-hooks-handle)
- During hydration, the response will be read from the HTML, guaranteeing consistency and preventing an additional network request.

You can learn more about making credentialed requests with cookies [here](/docs/kit/load#Cookies)

```dts
data: Data;
```

Contains the data returned by the route's server `load` function (in `+layout.server.js` or `+page.server.js`), if any.

```dts
setHeaders: (headers: Record<string, string>) => void;
```

If you need to set headers for the response, you can do so using the this method. This is useful if you want the page to be cached, for example:

```js
// @errors: 7031
/// file: src/routes/blog/+page.js
export async function load({ fetch, setHeaders }) {
	const url = `https://cms.example.com/articles.json`;
	const response = await fetch(url);

	setHeaders({
		age: response.headers.get('age'),
		'cache-control': response.headers.get('cache-control')
	});

	return response.json();
}
```

Setting the same header multiple times (even in separate `load` functions) is an error — you can only set a given header once.

You cannot add a `set-cookie` header with `setHeaders` — use the [`cookies`](/docs/kit/@sveltejs-kit#Cookies) API in a server-only `load` function instead.

`setHeaders` has no effect when a `load` function runs in the browser.

```dts
parent: () => Promise<ParentData>;
```

`await parent()` returns data from parent `+layout.js` `load` functions.
Implicitly, a missing `+layout.js` is treated as a `({ data }) => data` function, meaning that it will return and forward data from parent `+layout.server.js` files.

Be careful not to introduce accidental waterfalls when using `await parent()`. If for example you only want to merge parent data into the returned output, call it *after* fetching your other data.

```dts
depends: (...deps: Array<`${string}:${string}`>) => void;
```

This function declares that the `load` function has a *dependency* on one or more URLs or custom identifiers, which can subsequently be used with [`invalidate()`](/docs/kit/$app-navigation#invalidate) to cause `load` to rerun.

Most of the time you won't need this, as `fetch` calls `depends` on your behalf — it's only necessary if you're using a custom API client that bypasses `fetch`.

URLs can be absolute or relative to the page being loaded, and must be [encoded](https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding).

Custom identifiers have to be prefixed with one or more lowercase letters followed by a colon to conform to the [URI specification](https://www.rfc-editor.org/rfc/rfc3986.html).

The following example shows how to use `depends` to register a dependency on a custom identifier, which is `invalidate`d after a button click, making the `load` function rerun.

```js
// @errors: 7031
/// file: src/routes/+page.js
let count = 0;
export async function load({ depends }) {
	depends('increase:count');

	return { count: count++ };
}
```

```html
/// file: src/routes/+page.svelte
<script>
	import { invalidate } from '$app/navigation';

	let { data } = $props();

	const increase = async () => {
		await invalidate('increase:count');
	}
</script>

<p>{data.count}<p>
<button on:click={increase}>Increase Count</button>
```

```dts
untrack: <T>(fn: () => T) => T;
```

Use this function to opt out of dependency tracking for everything that is synchronously called within the callback. Example:

```js
// @errors: 7031
/// file: src/routes/+page.server.js
export async function load({ untrack, url }) {
	// Untrack url.pathname so that path changes don't trigger a rerun
	if (untrack(() => url.pathname === '/')) {
		return { message: 'Welcome!' };
	}
}
```

```dts
tracing: {/*…*/}
```

- available since v2.31.0

Access to spans for tracing. If tracing is not enabled or the function is being run in the browser, these spans will do nothing.

```dts
enabled: boolean;
```

Whether tracing is enabled.

```dts
root: Span;
```

The root span for the request. This span is named `sveltekit.handle.root`.

```dts
current: Span;
```

The span associated with the current `load` function.

## LoadProperties

```dts
type LoadProperties<
	input extends Record<string, any> | void
> = input extends void
	? undefined // needs to be undefined, because void will break intellisense
	: input extends Record<string, any>
		? input
		: unknown;
```

## Navigation

```dts
type Navigation =
	| NavigationExternal
	| NavigationFormSubmit
	| NavigationPopState
	| NavigationLink;
```

## NavigationBase

```dts
interface NavigationBase {/*…*/}
```

```dts
from: NavigationTarget | null;
```

Where navigation was triggered from

```dts
to: NavigationTarget | null;
```

Where navigation is going to/has gone to

```dts
willUnload: boolean;
```

Whether or not the navigation will result in the page being unloaded (i.e. not a client-side navigation).

```dts
complete: Promise<void>;
```

A promise that resolves once the navigation is complete, and rejects if the navigation
fails or is aborted. In the case of a `willUnload` navigation, the promise will never resolve

## NavigationEnter

```dts
interface NavigationEnter extends NavigationBase {/*…*/}
```

```dts
type: 'enter';
```

The type of navigation:

- `enter`: The app has hydrated/started

```dts
delta?: undefined;
```

In case of a history back/forward navigation, the number of steps to go back/forward

```dts
event?: undefined;
```

Dispatched `Event` object when navigation occurred by `popstate` or `link`.

## NavigationEvent

```dts
interface NavigationEvent<
	Params extends AppLayoutParams<'/'> =
		AppLayoutParams<'/'>,
	RouteId extends AppRouteId | null = AppRouteId | null
> {/*…*/}
```

```dts
params: Params;
```

The parameters of the current page - e.g. for a route like `/blog/[slug]`, a `{ slug: string }` object

```dts
route: {/*…*/}
```

Info about the current route

```dts
id: RouteId;
```

The ID of the current route - e.g. for `src/routes/blog/[slug]`, it would be `/blog/[slug]`. It is `null` when no route is matched.

```dts
url: URL;
```

The URL of the current page

## NavigationExternal

```dts
type NavigationExternal = NavigationGoto | NavigationLeave;
```

## NavigationFormSubmit

```dts
interface NavigationFormSubmit extends NavigationBase {/*…*/}
```

```dts
type: 'form';
```

The type of navigation:

- `form`: The user submitted a `<form method="GET">`

```dts
event: SubmitEvent;
```

The `SubmitEvent` that caused the navigation

```dts
delta?: undefined;
```

In case of a history back/forward navigation, the number of steps to go back/forward

## NavigationGoto

```dts
interface NavigationGoto extends NavigationBase {/*…*/}
```

```dts
type: 'goto';
```

The type of navigation:

- `goto`: Navigation was triggered by a `goto(...)` call or a redirect

```dts
delta?: undefined;
```

In case of a history back/forward navigation, the number of steps to go back/forward

## NavigationLeave

```dts
interface NavigationLeave extends NavigationBase {/*…*/}
```

```dts
type: 'leave';
```

The type of navigation:

- `leave`: The app is being left either because the tab is being closed or a navigation to a different document is occurring

```dts
delta?: undefined;
```

In case of a history back/forward navigation, the number of steps to go back/forward

## NavigationLink

```dts
interface NavigationLink extends NavigationBase {/*…*/}
```

```dts
type: 'link';
```

The type of navigation:

- `link`: Navigation was triggered by a link click

```dts
event: PointerEvent;
```

The `PointerEvent` that caused the navigation

```dts
delta?: undefined;
```

In case of a history back/forward navigation, the number of steps to go back/forward

## NavigationPopState

```dts
interface NavigationPopState extends NavigationBase {/*…*/}
```

```dts
type: 'popstate';
```

The type of navigation:

- `popstate`: Navigation was triggered by back/forward navigation

```dts
delta: number;
```

In case of a history back/forward navigation, the number of steps to go back/forward

```dts
event: PopStateEvent;
```

The `PopStateEvent` that caused the navigation

## NavigationTarget

Information about the target of a specific navigation.

```dts
interface NavigationTarget<
	Params extends AppLayoutParams<'/'> =
		AppLayoutParams<'/'>,
	RouteId extends AppRouteId | null = AppRouteId | null
> {/*…*/}
```

```dts
params: Params | null;
```

Parameters of the target page - e.g. for a route like `/blog/[slug]`, a `{ slug: string }` object.
Is `null` if the target is not part of the SvelteKit app (could not be resolved to a route).

```dts
route: {/*…*/}
```

Info about the target route

```dts
id: RouteId | null;
```

The ID of the current route - e.g. for `src/routes/blog/[slug]`, it would be `/blog/[slug]`. It is `null` when no route is matched.

```dts
url: URL;
```

The URL that is navigated to

```dts
scroll: { x: number; y: number } | null;
```

The scroll position associated with this navigation.

For the `from` target, this is the scroll position at the moment of navigation.

For the `to` target, this represents the scroll position that will be or was restored:

- In `beforeNavigate` and `onNavigate`, this is only available for `popstate` navigations (back/forward button)
  and will be `null` for other navigation types, since the final scroll position isn't known
  ahead of time.
- In `afterNavigate`, this is always the scroll position that was applied after the navigation
  completed.

## NavigationType

- `enter`: The app has hydrated/started
- `form`: The user submitted a `<form method="GET">`
- `leave`: The app is being left either because the tab is being closed or a navigation to a different document is occurring
- `link`: Navigation was triggered by a link click
- `goto`: Navigation was triggered by a `goto(...)` call or a redirect
- `popstate`: Navigation was triggered by back/forward navigation

```dts
type NavigationType =
	| 'enter'
	| 'form'
	| 'leave'
	| 'link'
	| 'goto'
	| 'popstate';
```

## NumericRange

```dts
type NumericRange<
	TStart extends number,
	TEnd extends number
> = Exclude<TEnd | LessThan<TEnd>, LessThan<TStart>>;
```

## OnNavigate

The argument passed to [`onNavigate`](/docs/kit/$app-navigation#onNavigate) callbacks.

```dts
type OnNavigate = Navigation & {
	type: Exclude<NavigationType, 'enter' | 'leave'>;
	/**
	 * Since `onNavigate` callbacks are called immediately before a client-side navigation, they will never be called with a navigation that unloads the page.
	 */
	willUnload: false;
};
```

## Page

The shape of the [`page`](/docs/kit/$app-state#page) reactive object and the [`$page`](/docs/kit/$app-stores) store.

```dts
interface Page<
	Params extends AppLayoutParams<'/'> =
		AppLayoutParams<'/'>,
	RouteId extends AppRouteId | null = AppRouteId | null
> {/*…*/}
```

```dts
url: URL & { pathname: ResolvedPathname };
```

The URL of the current page.

```dts
params: Params;
```

The parameters of the current page - e.g. for a route like `/blog/[slug]`, a `{ slug: string }` object.

```dts
route: {/*…*/}
```

Info about the current route.

```dts
id: RouteId;
```

The ID of the current route - e.g. for `src/routes/blog/[slug]`, it would be `/blog/[slug]`. It is `null` when no route is matched.

```dts
status: number;
```

HTTP status code of the current page.

```dts
error: App.Error | null;
```

The error object of the current page, if any. Filled from the `handleError` hooks.

```dts
data: App.PageData & Record<string, any>;
```

The merged result of all data from all `load` functions on the current page. You can type a common denominator through `App.PageData`.

```dts
state: App.PageState;
```

The page state, which can be manipulated using the [`pushState`](/docs/kit/$app-navigation#pushState) and [`replaceState`](/docs/kit/$app-navigation#replaceState) functions from `$app/navigation`.

```dts
form: any;
```

Filled only after a form submission. See [form actions](/docs/kit/form-actions) for more info.

## ParamMatcher

The shape of a param matcher. See [matching](/docs/kit/advanced-routing#Matching) for more info.

```dts
type ParamMatcher = (param: string) => boolean;
```

## PrerenderOption

```dts
type PrerenderOption = boolean | 'auto';
```

## Redirect

The object returned by the [`redirect`](/docs/kit/@sveltejs-kit#redirect) function.

```dts
interface Redirect {/*…*/}
```

```dts
status: 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308;
```

The [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages), in the range 300-308.

```dts
location: string;
```

The location to redirect to.

## RemoteCommand

The return value of a remote `command` function. See [Remote functions](/docs/kit/remote-functions#command) for full documentation.

```dts
type RemoteCommand<Input, Output> = {
	(
		arg: undefined extends Input ? Input | void : Input
	): Promise<Awaited<Output>> & {
		updates(
			...queries: Array<
				RemoteQuery<any> | RemoteQueryOverride
			>
		): Promise<Awaited<Output>>;
	};
	/** The number of pending command executions */
	get pending(): number;
};
```
