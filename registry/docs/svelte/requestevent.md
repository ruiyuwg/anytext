## RequestEvent

```dts
interface RequestEvent<
	Params extends AppLayoutParams<'/'> =
		AppLayoutParams<'/'>,
	RouteId extends AppRouteId | null = AppRouteId | null
> {/*…*/}
```

```dts
cookies: Cookies;
```

Get or set cookies related to the current request

```dts
fetch: typeof fetch;
```

`fetch` is equivalent to the [native `fetch` web API](https://developer.mozilla.org/en-US/docs/Web/API/fetch), with a few additional features:

- It can be used to make credentialed requests on the server, as it inherits the `cookie` and `authorization` headers for the page request.
- It can make relative requests on the server (ordinarily, `fetch` requires a URL with an origin when used in a server context).
- Internal requests (e.g. for `+server.js` routes) go directly to the handler function when running on the server, without the overhead of an HTTP call.
- During server-side rendering, the response will be captured and inlined into the rendered HTML by hooking into the `text` and `json` methods of the `Response` object. Note that headers will *not* be serialized, unless explicitly included via [`filterSerializedResponseHeaders`](/docs/kit/hooks#Server-hooks-handle)
- During hydration, the response will be read from the HTML, guaranteeing consistency and preventing an additional network request.

You can learn more about making credentialed requests with cookies [here](/docs/kit/load#Cookies).

```dts
getClientAddress: () => string;
```

The client's IP address, set by the adapter.

```dts
locals: App.Locals;
```

Contains custom data that was added to the request within the [`server handle hook`](/docs/kit/hooks#Server-hooks-handle).

```dts
params: Params;
```

The parameters of the current route - e.g. for a route like `/blog/[slug]`, a `{ slug: string }` object.

```dts
platform: Readonly<App.Platform> | undefined;
```

Additional data made available through the adapter.

```dts
request: Request;
```

The original request object.

```dts
route: {/*…*/}
```

Info about the current route.

```dts
id: RouteId;
```

The ID of the current route - e.g. for `src/routes/blog/[slug]`, it would be `/blog/[slug]`. It is `null` when no route is matched.

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

You cannot add a `set-cookie` header with `setHeaders` — use the [`cookies`](/docs/kit/@sveltejs-kit#Cookies) API instead.

```dts
url: URL;
```

The requested URL.

```dts
isDataRequest: boolean;
```

`true` if the request comes from the client asking for `+page/layout.server.js` data. The `url` property will be stripped of the internal information
related to the data request in this case. Use this property instead if the distinction is important to you.

```dts
isSubRequest: boolean;
```

`true` for `+server.js` calls coming from SvelteKit without the overhead of actually making an HTTP request. This happens when you make same-origin `fetch` requests on the server.

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

The span associated with the current `handle` hook, `load` function, or form action.

```dts
isRemoteRequest: boolean;
```

`true` if the request comes from the client via a remote function. The `url` property will be stripped of the internal information
related to the data request in this case. Use this property instead if the distinction is important to you.

## RequestHandler

A `(event: RequestEvent) => Response` function exported from a `+server.js` file that corresponds to an HTTP verb (`GET`, `PUT`, `PATCH`, etc) and handles requests with that method.

It receives `Params` as the first generic argument, which you can skip by using [generated types](/docs/kit/types#Generated-types) instead.

```dts
type RequestHandler<
	Params extends AppLayoutParams<'/'> =
		AppLayoutParams<'/'>,
	RouteId extends AppRouteId | null = AppRouteId | null
> = (
	event: RequestEvent<Params, RouteId>
) => MaybePromise<Response>;
```

## Reroute

Available since 2.3.0

The [`reroute`](/docs/kit/hooks#Universal-hooks-reroute) hook allows you to modify the URL before it is used to determine which route to render.

```dts
type Reroute = (event: {
	url: URL;
	fetch: typeof fetch;
}) => MaybePromise<void | string>;
```

## ResolveOptions

```dts
interface ResolveOptions {/*…*/}
```

```dts
transformPageChunk?: (input: { html: string; done: boolean }) => MaybePromise<string | undefined>;
```

- `input` the html chunk and the info if this is the last chunk

Applies custom transforms to HTML. If `done` is true, it's the final chunk. Chunks are not guaranteed to be well-formed HTML
(they could include an element's opening tag but not its closing tag, for example)
but they will always be split at sensible boundaries such as `%sveltekit.head%` or layout/page components.

```dts
filterSerializedResponseHeaders?: (name: string, value: string) => boolean;
```

- `name` header name
- `value` header value

Determines which headers should be included in serialized responses when a `load` function loads a resource with `fetch`.
By default, none will be included.

```dts
preload?: (input: { type: 'font' | 'css' | 'js' | 'asset'; path: string }) => boolean;
```

- `input` the type of the file and its path

Determines what should be added to the `<head>` tag to preload it.
By default, `js` and `css` files will be preloaded.

## RouteDefinition

```dts
interface RouteDefinition<Config = any> {/*…*/}
```

```dts
id: string;
```

```dts
api: {
	methods: Array<HttpMethod | '*'>;
};
```

```dts
page: {
	methods: Array<Extract<HttpMethod, 'GET' | 'POST'>>;
};
```

```dts
pattern: RegExp;
```

```dts
prerender: PrerenderOption;
```

```dts
segments: RouteSegment[];
```

```dts
methods: Array<HttpMethod | '*'>;
```

```dts
config: Config;
```

## SSRManifest

```dts
interface SSRManifest {/*…*/}
```

```dts
appDir: string;
```

```dts
appPath: string;
```

```dts
assets: Set<string>;
```

Static files from `kit.config.files.assets` and the service worker (if any).

```dts
mimeTypes: Record<string, string>;
```

```dts
_: {/*…*/}
```

private fields

```dts
client: NonNullable<BuildData['client']>;
```

```dts
nodes: SSRNodeLoader[];
```

```dts
remotes: Record<string, () => Promise<any>>;
```

hashed filename -> import to that file

```dts
routes: SSRRoute[];
```

```dts
prerendered_routes: Set<string>;
```

```dts
matchers: () => Promise<Record<string, ParamMatcher>>;
```

```dts
server_assets: Record<string, number>;
```

A `[file]: size` map of all assets imported by server code.

## ServerInit

Available since 2.10.0

The [`init`](/docs/kit/hooks#Shared-hooks-init) will be invoked before the server responds to its first request

```dts
type ServerInit = () => MaybePromise<void>;
```

## ServerInitOptions

```dts
interface ServerInitOptions {/*…*/}
```

```dts
env: Record<string, string>;
```

A map of environment variables.

```dts
read?: (file: string) => MaybePromise<ReadableStream | null>;
```

A function that turns an asset filename into a `ReadableStream`. Required for the `read` export from `$app/server` to work.

## ServerLoad

The generic form of `PageServerLoad` and `LayoutServerLoad`. You should import those from `./$types` (see [generated types](/docs/kit/types#Generated-types))
rather than using `ServerLoad` directly.

```dts
type ServerLoad<
	Params extends AppLayoutParams<'/'> =
		AppLayoutParams<'/'>,
	ParentData extends Record<string, any> = Record<
		string,
		any
	>,
	OutputData extends Record<string, any> | void = Record<
		string,
		any
	> | void,
	RouteId extends AppRouteId | null = AppRouteId | null
> = (
	event: ServerLoadEvent<Params, ParentData, RouteId>
) => MaybePromise<OutputData>;
```
