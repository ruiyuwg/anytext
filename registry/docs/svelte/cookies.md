## Cookies

```dts
interface Cookies {/*…*/}
```

```dts
get: (name: string, opts?: import('cookie').CookieParseOptions) => string | undefined;
```

- `name` the name of the cookie
- `opts` the options, passed directly to `cookie.parse`. See documentation [here](https://github.com/jshttp/cookie#cookieparsestr-options)

Gets a cookie that was previously set with `cookies.set`, or from the request headers.

```dts
getAll: (opts?: import('cookie').CookieParseOptions) => Array<{ name: string; value: string }>;
```

- `opts` the options, passed directly to `cookie.parse`. See documentation [here](https://github.com/jshttp/cookie#cookieparsestr-options)

Gets all cookies that were previously set with `cookies.set`, or from the request headers.

```dts
set: (
	name: string,
	value: string,
	opts: import('cookie').CookieSerializeOptions & { path: string }
) => void;
```

- `name` the name of the cookie
- `value` the cookie value
- `opts` the options, passed directly to `cookie.serialize`. See documentation [here](https://github.com/jshttp/cookie#cookieserializename-value-options)

Sets a cookie. This will add a `set-cookie` header to the response, but also make the cookie available via `cookies.get` or `cookies.getAll` during the current request.

The `httpOnly` and `secure` options are `true` by default (except on http://localhost, where `secure` is `false`), and must be explicitly disabled if you want cookies to be readable by client-side JavaScript and/or transmitted over HTTP. The `sameSite` option defaults to `lax`.

You must specify a `path` for the cookie. In most cases you should explicitly set `path: '/'` to make the cookie available throughout your app. You can use relative paths, or set `path: ''` to make the cookie only available on the current path and its children

```dts
delete: (name: string, opts: import('cookie').CookieSerializeOptions & { path: string }) => void;
```

- `name` the name of the cookie
- `opts` the options, passed directly to `cookie.serialize`. The `path` must match the path of the cookie you want to delete. See documentation [here](https://github.com/jshttp/cookie#cookieserializename-value-options)

Deletes a cookie by setting its value to an empty string and setting the expiry date in the past.

You must specify a `path` for the cookie. In most cases you should explicitly set `path: '/'` to make the cookie available throughout your app. You can use relative paths, or set `path: ''` to make the cookie only available on the current path and its children

```dts
serialize: (
	name: string,
	value: string,
	opts: import('cookie').CookieSerializeOptions & { path: string }
) => string;
```

- `name` the name of the cookie
- `value` the cookie value
- `opts` the options, passed directly to `cookie.serialize`. See documentation [here](https://github.com/jshttp/cookie#cookieserializename-value-options)

Serialize a cookie name-value pair into a `Set-Cookie` header string, but don't apply it to the response.

The `httpOnly` and `secure` options are `true` by default (except on http://localhost, where `secure` is `false`), and must be explicitly disabled if you want cookies to be readable by client-side JavaScript and/or transmitted over HTTP. The `sameSite` option defaults to `lax`.

You must specify a `path` for the cookie. In most cases you should explicitly set `path: '/'` to make the cookie available throughout your app. You can use relative paths, or set `path: ''` to make the cookie only available on the current path and its children

## Emulator

A collection of functions that influence the environment during dev, build and prerendering

```dts
interface Emulator {/*…*/}
```

```dts
platform?(details: { config: any; prerender: PrerenderOption }): MaybePromise<App.Platform>;
```

A function that is called with the current route `config` and `prerender` option
and returns an `App.Platform` object

## Handle

The [`handle`](/docs/kit/hooks#Server-hooks-handle) hook runs every time the SvelteKit server receives a [request](/docs/kit/web-standards#Fetch-APIs-Request) and
determines the [response](/docs/kit/web-standards#Fetch-APIs-Response).
It receives an `event` object representing the request and a function called `resolve`, which renders the route and generates a `Response`.
This allows you to modify response headers or bodies, or bypass SvelteKit entirely (for implementing routes programmatically, for example).

```dts
type Handle = (input: {
	event: RequestEvent;
	resolve: (
		event: RequestEvent,
		opts?: ResolveOptions
	) => MaybePromise<Response>;
}) => MaybePromise<Response>;
```

## HandleClientError

The client-side [`handleError`](/docs/kit/hooks#Shared-hooks-handleError) hook runs when an unexpected error is thrown while navigating.

If an unexpected error is thrown during loading or the following render, this function will be called with the error and the event.
Make sure that this function *never* throws an error.

```dts
type HandleClientError = (input: {
	error: unknown;
	event: NavigationEvent;
	status: number;
	message: string;
}) => MaybePromise<void | App.Error>;
```

## HandleFetch

The [`handleFetch`](/docs/kit/hooks#Server-hooks-handleFetch) hook allows you to modify (or replace) the result of an [`event.fetch`](/docs/kit/load#Making-fetch-requests) call that runs on the server (or during prerendering) inside an endpoint, `load`, `action`, `handle`, `handleError` or `reroute`.

```dts
type HandleFetch = (input: {
	event: RequestEvent;
	request: Request;
	fetch: typeof fetch;
}) => MaybePromise<Response>;
```

## HandleServerError

The server-side [`handleError`](/docs/kit/hooks#Shared-hooks-handleError) hook runs when an unexpected error is thrown while responding to a request.

If an unexpected error is thrown during loading or rendering, this function will be called with the error and the event.
Make sure that this function *never* throws an error.

```dts
type HandleServerError = (input: {
	error: unknown;
	event: RequestEvent;
	status: number;
	message: string;
}) => MaybePromise<void | App.Error>;
```

## HandleValidationError

The [`handleValidationError`](/docs/kit/hooks#Server-hooks-handleValidationError) hook runs when the argument to a remote function fails validation.

It will be called with the validation issues and the event, and must return an object shape that matches `App.Error`.

```dts
type HandleValidationError<
	Issue extends StandardSchemaV1.Issue =
		StandardSchemaV1.Issue
> = (input: {
	issues: Issue[];
	event: RequestEvent;
}) => MaybePromise<App.Error>;
```

## HttpError

The object returned by the [`error`](/docs/kit/@sveltejs-kit#error) function.

```dts
interface HttpError {/*…*/}
```

```dts
status: number;
```

The [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses), in the range 400-599.

```dts
body: App.Error;
```

The content of the error.

## InvalidField

A function and proxy object used to imperatively create validation errors in form handlers.

Access properties to create field-specific issues: `issue.fieldName('message')`.
The type structure mirrors the input data structure for type-safe field access.
Call `invalid(issue.foo(...), issue.nested.bar(...))` to throw a validation error.

```dts
type InvalidField<T> =
	WillRecurseIndefinitely<T> extends true
		? Record<string | number, any>
		: NonNullable<T> extends
					| string
					| number
					| boolean
					| File
			? (message: string) => StandardSchemaV1.Issue
			: NonNullable<T> extends Array<infer U>
				? {
						[K in number]: InvalidField<U>;
					} & ((message: string) => StandardSchemaV1.Issue)
				: NonNullable<T> extends RemoteFormInput
					? {
							[K in keyof T]-?: InvalidField<T[K]>;
						} & ((
							message: string
						) => StandardSchemaV1.Issue)
					: Record<string, never>;
```

## KitConfig

See the [configuration reference](/docs/kit/configuration) for details.

## LessThan

```dts
type LessThan<
	TNumber extends number,
	TArray extends any[] = []
> = TNumber extends TArray['length']
	? TArray[number]
	: LessThan<TNumber, [...TArray, TArray['length']]>;
```

## Load

The generic form of `PageLoad` and `LayoutLoad`. You should import those from `./$types` (see [generated types](/docs/kit/types#Generated-types))
rather than using `Load` directly.

```dts
type Load<
	Params extends AppLayoutParams<'/'> =
		AppLayoutParams<'/'>,
	InputData extends Record<string, unknown> | null = Record<
		string,
		any
	> | null,
	ParentData extends Record<string, unknown> = Record<
		string,
		any
	>,
	OutputData extends Record<string, unknown> | void =
		Record<string, any> | void,
	RouteId extends AppRouteId | null = AppRouteId | null
> = (
	event: LoadEvent<Params, InputData, ParentData, RouteId>
) => MaybePromise<OutputData>;
```
