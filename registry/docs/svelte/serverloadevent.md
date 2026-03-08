## ServerLoadEvent

```dts
interface ServerLoadEvent<
	Params extends AppLayoutParams<'/'> =
		AppLayoutParams<'/'>,
	ParentData extends Record<string, any> = Record<
		string,
		any
	>,
	RouteId extends AppRouteId | null = AppRouteId | null
> extends RequestEvent<Params, RouteId> {/*…*/}
```

```dts
parent: () => Promise<ParentData>;
```

`await parent()` returns data from parent `+layout.server.js` `load` functions.

Be careful not to introduce accidental waterfalls when using `await parent()`. If for example you only want to merge parent data into the returned output, call it *after* fetching your other data.

```dts
depends: (...deps: string[]) => void;
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
/// file: src/routes/+page.js
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

Access to spans for tracing. If tracing is not enabled, these spans will do nothing.

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

The span associated with the current server `load` function.

## Snapshot

The type of `export const snapshot` exported from a page or layout component.

```dts
interface Snapshot<T = any> {/*…*/}
```

```dts
capture: () => T;
```

```dts
restore: (snapshot: T) => void;
```

## SubmitFunction

```dts
type SubmitFunction<
	Success extends Record<string, unknown> | undefined =
		Record<string, any>,
	Failure extends Record<string, unknown> | undefined =
		Record<string, any>
> = (input: {
	action: URL;
	formData: FormData;
	formElement: HTMLFormElement;
	controller: AbortController;
	submitter: HTMLElement | null;
	cancel: () => void;
}) => MaybePromise<
	| void
	| ((opts: {
			formData: FormData;
			formElement: HTMLFormElement;
			action: URL;
			result: ActionResult<Success, Failure>;
			/**
			 * Call this to get the default behavior of a form submission response.
			 * @param options Set `reset: false` if you don't want the `<form>` values to be reset after a successful submission.
			 * @param invalidateAll Set `invalidateAll: false` if you don't want the action to call `invalidateAll` after submission.
			 */
			update: (options?: {
				reset?: boolean;
				invalidateAll?: boolean;
			}) => Promise<void>;
	  }) => MaybePromise<void>)
>;
```

## Transport

Available since 2.11.0

The [`transport`](/docs/kit/hooks#Universal-hooks-transport) hook allows you to transport custom types across the server/client boundary.

Each transporter has a pair of `encode` and `decode` functions. On the server, `encode` determines whether a value is an instance of the custom type and, if so, returns a non-falsy encoding of the value which can be an object or an array (or `false` otherwise).

In the browser, `decode` turns the encoding back into an instance of the custom type.

```ts
import type { Transport } from '@sveltejs/kit';

declare class MyCustomType {
	data: any
}

// hooks.js
export const transport: Transport = {
	MyCustomType: {
		encode: (value) => value instanceof MyCustomType && [value.data],
		decode: ([data]) => new MyCustomType(data)
	}
};
```

```dts
type Transport = Record<string, Transporter>;
```

## Transporter

A member of the [`transport`](/docs/kit/hooks#Universal-hooks-transport) hook.

```dts
interface Transporter<
	T = any,
	U = Exclude<
		any,
		false | 0 | '' | null | undefined | typeof NaN
	>
> {/*…*/}
```

```dts
encode: (value: T) => false | U;
```

```dts
decode: (data: U) => T;
```

## ValidationError

A validation error thrown by `invalid`.

```dts
interface ValidationError {/*…*/}
```

```dts
issues: StandardSchemaV1.Issue[];
```

The validation issues

## Private types

The following are referenced by the public types documented above, but cannot be imported directly:

## AdapterEntry

```dts
interface AdapterEntry {/*…*/}
```

```dts
id: string;
```

A string that uniquely identifies an HTTP service (e.g. serverless function) and is used for deduplication.
For example, `/foo/a-[b]` and `/foo/[c]` are different routes, but would both
be represented in a Netlify \_redirects file as `/foo/:param`, so they share an ID

```dts
filter(route: RouteDefinition): boolean;
```

A function that compares the candidate route with the current route to determine
if it should be grouped with the current route.

Use cases:

- Fallback pages: `/foo/[c]` is a fallback for `/foo/a-[b]`, and `/[...catchall]` is a fallback for all routes
- Grouping routes that share a common `config`: `/foo` should be deployed to the edge, `/bar` and `/baz` should be deployed to a serverless function

```dts
complete(entry: { generateManifest(opts: { relativePath: string }): string }): MaybePromise<void>;
```

A function that is invoked once the entry has been created. This is where you
should write the function to the filesystem and generate redirect manifests.

## Csp

```dts
namespace Csp {
	type ActionSource = 'strict-dynamic' | 'report-sample';
	type BaseSource =
		| 'self'
		| 'unsafe-eval'
		| 'unsafe-hashes'
		| 'unsafe-inline'
		| 'wasm-unsafe-eval'
		| 'none';
	type CryptoSource =
		`${'nonce' | 'sha256' | 'sha384' | 'sha512'}-${string}`;
	type FrameSource =
		| HostSource
		| SchemeSource
		| 'self'
		| 'none';
	type HostNameScheme = `${string}.${string}` | 'localhost';
	type HostSource =
		`${HostProtocolSchemes}${HostNameScheme}${PortScheme}`;
	type HostProtocolSchemes = `${string}://` | '';
	type HttpDelineator = '/' | '?' | '#' | '\\';
	type PortScheme = `:${number}` | '' | ':*';
	type SchemeSource =
		| 'http:'
		| 'https:'
		| 'data:'
		| 'mediastream:'
		| 'blob:'
		| 'filesystem:';
	type Source =
		| HostSource
		| SchemeSource
		| CryptoSource
		| BaseSource;
	type Sources = Source[];
}
```
