# $app/paths

```js
// @noErrors
import { asset, assets, base, match, resolve, resolveRoute } from '$app/paths';
```

## asset

Available since 2.26

Resolve the URL of an asset in your `static` directory, by prefixing it with [`config.kit.paths.assets`](/docs/kit/configuration#paths) if configured, or otherwise by prefixing it with the base path.

During server rendering, the base path is relative and depends on the page currently being rendered.

```svelte
<script>
	import { asset } from '$app/paths';
</script>

<img alt="a potato" src={asset('/potato.jpg')} />
```

```dts
function asset(file: Asset): string;
```

## assets

Use [`asset(...)`](/docs/kit/$app-paths#asset) instead

An absolute path that matches [`config.kit.paths.assets`](/docs/kit/configuration#paths).

> \[!NOTE] If a value for `config.kit.paths.assets` is specified, it will be replaced with `'/_svelte_kit_assets'` during `vite dev` or `vite preview`, since the assets don't yet live at their eventual URL.

```dts
let assets:
	| ''
	| `https://${string}`
	| `http://${string}`
	| '/_svelte_kit_assets';
```

## base

Use [`resolve(...)`](/docs/kit/$app-paths#resolve) instead

A string that matches [`config.kit.paths.base`](/docs/kit/configuration#paths).

Example usage: `<a href="{base}/your-page">Link</a>`

```dts
let base: '' | `/${string}`;
```

## match

Available since 2.52.0

Match a path or URL to a route ID and extracts any parameters.

```js
// @errors: 7031
import { match } from '$app/paths';

const route = await match('/blog/hello-world');

if (route?.id === '/blog/[slug]') {
	const slug = route.params.slug;
	const response = await fetch(`/api/posts/${slug}`);
	const post = await response.json();
}
```

```dts
function match(
	url: Pathname_1 | URL | (string & {})
): Promise<{
	id: RouteId;
	params: Record<string, string>;
} | null>;
```

## resolve

Available since 2.26

Resolve a pathname by prefixing it with the base path, if any, or resolve a route ID by populating dynamic segments with parameters.

During server rendering, the base path is relative and depends on the page currently being rendered.

```js
// @errors: 7031
import { resolve } from '$app/paths';

// using a pathname
const resolved = resolve(`/blog/hello-world`);

// using a route ID plus parameters
const resolved = resolve('/blog/[slug]', {
	slug: 'hello-world'
});
```

```dts
function resolve<
	T extends
		| RouteIdWithSearchOrHash
		| PathnameWithSearchOrHash
>(...args: ResolveArgs<T>): ResolvedPathname;
```

## resolveRoute

Use [`resolve(...)`](/docs/kit/$app-paths#resolve) instead

```dts
function resolveRoute<
	T extends
		| RouteIdWithSearchOrHash
		| PathnameWithSearchOrHash
>(...args: ResolveArgs<T>): ResolvedPathname;
```
