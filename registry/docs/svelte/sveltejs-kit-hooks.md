# @sveltejs/kit/hooks

```js
// @noErrors
import { sequence } from '@sveltejs/kit/hooks';
```

## sequence

A helper function for sequencing multiple `handle` calls in a middleware-like manner.
The behavior for the `handle` options is as follows:

- `transformPageChunk` is applied in reverse order and merged
- `preload` is applied in forward order, the first option "wins" and no `preload` options after it are called
- `filterSerializedResponseHeaders` behaves the same as `preload`

```js
// @errors: 7031
/// file: src/hooks.server.js
import { sequence } from '@sveltejs/kit/hooks';

/** @type {import('@sveltejs/kit').Handle} */
async function first({ event, resolve }) {
	console.log('first pre-processing');
	const result = await resolve(event, {
		transformPageChunk: ({ html }) => {
			// transforms are applied in reverse order
			console.log('first transform');
			return html;
		},
		preload: () => {
			// this one wins as it's the first defined in the chain
			console.log('first preload');
			return true;
		}
	});
	console.log('first post-processing');
	return result;
}

/** @type {import('@sveltejs/kit').Handle} */
async function second({ event, resolve }) {
	console.log('second pre-processing');
	const result = await resolve(event, {
		transformPageChunk: ({ html }) => {
			console.log('second transform');
			return html;
		},
		preload: () => {
			console.log('second preload');
			return true;
		},
		filterSerializedResponseHeaders: () => {
			// this one wins as it's the first defined in the chain
			console.log('second filterSerializedResponseHeaders');
			return true;
		}
	});
	console.log('second post-processing');
	return result;
}

export const handle = sequence(first, second);
```

The example above would print:

```
first pre-processing
first preload
second pre-processing
second filterSerializedResponseHeaders
second transform
first transform
second post-processing
first post-processing
```

```dts
function sequence(...handlers: Handle[]): Handle;
```

# @sveltejs/kit/node/polyfills

```js
// @noErrors
import { installPolyfills } from '@sveltejs/kit/node/polyfills';
```

## installPolyfills

Make various web APIs available as globals:

- `crypto`
- `File`

```dts
function installPolyfills(): void;
```

# @sveltejs/kit/node

```js
// @noErrors
import {
	createReadableStream,
	getRequest,
	setResponse
} from '@sveltejs/kit/node';
```

## createReadableStream

Available since 2.4.0

Converts a file on disk to a readable stream

```dts
function createReadableStream(file: string): ReadableStream;
```

## getRequest

```dts
function getRequest({
	request,
	base,
	bodySizeLimit
}: {
	request: import('http').IncomingMessage;
	base: string;
	bodySizeLimit?: number;
}): Promise<Request>;
```

## setResponse

```dts
function setResponse(
	res: import('http').ServerResponse,
	response: Response
): Promise<void>;
```

# @sveltejs/kit/vite

```js
// @noErrors
import { sveltekit } from '@sveltejs/kit/vite';
```

## sveltekit

Returns the SvelteKit Vite plugins.

```dts
function sveltekit(): Promise<import('vite').Plugin[]>;
```

# $app/environment

```js
// @noErrors
import { browser, building, dev, version } from '$app/environment';
```

## browser

`true` if the app is running in the browser.

```dts
const browser: boolean;
```

## building

SvelteKit analyses your app during the `build` step by running it. During this process, `building` is `true`. This also applies during prerendering.

```dts
const building: boolean;
```

## dev

Whether the dev server is running. This is not guaranteed to correspond to `NODE_ENV` or `MODE`.

```dts
const dev: boolean;
```

## version

The value of `config.kit.version.name`.

```dts
const version: string;
```
