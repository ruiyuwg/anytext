# Server-only modules

Like a good friend, SvelteKit keeps your secrets. When writing your backend and frontend in the same repository, it can be easy to accidentally import sensitive data into your front-end code (environment variables containing API keys, for example). SvelteKit provides a way to prevent this entirely: server-only modules.

## Private environment variables

The [`$env/static/private`]($env-static-private) and [`$env/dynamic/private`]($env-dynamic-private) modules can only be imported into modules that only run on the server, such as [`hooks.server.js`](hooks#Server-hooks) or [`+page.server.js`](routing#page-page.server.js).

## Server-only utilities

The [`$app/server`]($app-server) module, which contains a [`read`]($app-server#read) function for reading assets from the filesystem, can likewise only be imported by code that runs on the server.

## Your modules

You can make your own modules server-only in two ways:

- adding `.server` to the filename, e.g. `secrets.server.js`
- placing them in `$lib/server`, e.g. `$lib/server/secrets.js`

## How it works

Any time you have public-facing code that imports server-only code (whether directly or indirectly)...

```js
// @errors: 7005
/// file: $lib/server/secrets.js
export const atlantisCoordinates = [/* redacted */];
```

```js
// @errors: 2307 7006 7005
/// file: src/routes/utils.js
export { atlantisCoordinates } from '$lib/server/secrets.js';

export const add = (a, b) => a + b;
```

```html
/// file: src/routes/+page.svelte
<script>
	import { add } from './utils.js';
</script>
```

...SvelteKit will error:

```
Cannot import $lib/server/secrets.ts into code that runs in the browser, as this could leak sensitive information.

 src/routes/+page.svelte imports
  src/routes/utils.js imports
   $lib/server/secrets.ts

If you're only using the import as a type, change it to `import type`.
```

Even though the public-facing code — `src/routes/+page.svelte` — only uses the `add` export and not the secret `atlantisCoordinates` export, the secret code could end up in JavaScript that the browser downloads, and so the import chain is considered unsafe.

This feature also works with dynamic imports, even interpolated ones like ``await import(`./${foo}.js`)``.

> \[!NOTE] Unit testing frameworks like Vitest do not distinguish between server-only and public-facing code. For this reason, illegal import detection is disabled when running tests, as determined by `process.env.TEST === 'true'`.

## Further reading

- [Tutorial: Environment variables](/tutorial/kit/env-static-private)

# Snapshots

Ephemeral DOM state — like scroll positions on sidebars, the content of `<input>` elements and so on — is discarded when you navigate from one page to another.

For example, if the user fills out a form but navigates away and then back before submitting, or if the user refreshes the page, the values they filled in will be lost. In cases where it's valuable to preserve that input, you can take a *snapshot* of DOM state, which can then be restored if the user navigates back.

To do this, export a `snapshot` object with `capture` and `restore` methods from a `+page.svelte` or `+layout.svelte`:

```svelte
<!--- file: +page.svelte --->
<script>
	let comment = $state('');

	/** @type {import('./$types').Snapshot<string>} */
	export const snapshot = {
		capture: () => comment,
		restore: (value) => comment = value
	};
</script>

<form method="POST">
	<label for="comment">Comment</label>
	<textarea id="comment" bind:value={comment} />
	<button>Post comment</button>
</form>
```

When you navigate away from this page, the `capture` function is called immediately before the page updates, and the returned value is associated with the current entry in the browser's history stack. If you navigate back, the `restore` function is called with the stored value as soon as the page is updated.

The data must be serializable as JSON so that it can be persisted to `sessionStorage`. This allows the state to be restored when the page is reloaded, or when the user navigates back from a different site.

> \[!NOTE] Avoid returning very large objects from `capture` — once captured, objects will be retained in memory for the duration of the session, and in extreme cases may be too large to persist to `sessionStorage`.
