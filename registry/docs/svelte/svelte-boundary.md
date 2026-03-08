# `<svelte:boundary>`

```svelte
<svelte:boundary onerror={handler}>...</svelte:boundary>
```

> \[!NOTE]
> This feature was added in 5.3.0

Boundaries allow you to 'wall off' parts of your app, so that you can:

- provide UI that should be shown when [`await`](await-expressions) expressions are first resolving
- handle errors that occur during rendering or while running effects, and provide UI that should be rendered when an error happens

If a boundary handles an error (with a `failed` snippet or `onerror` handler, or both) its existing content will be removed.

> \[!NOTE] Errors occurring outside the rendering process (for example, in event handlers or after a `setTimeout` or async work) are *not* caught by error boundaries.

## Properties

For the boundary to do anything, one or more of the following must be provided.

### `pending`

This snippet will be shown when the boundary is first created, and will remain visible until all the [`await`](await-expressions) expressions inside the boundary have resolved (demo:

```svelte
<svelte:boundary>
	<p>{await delayed('hello!')}</p>

	{#snippet pending()}
		<p>loading...</p>
	{/snippet}
</svelte:boundary>
```

The `pending` snippet will *not* be shown for subsequent async updates — for these, you can use [`$effect.pending()`]($effect#$effect.pending).

> \[!NOTE] In the [playground](/playground), your app is rendered inside a boundary with an empty pending snippet, so that you can use `await` without having to create one.

### `failed`

If a `failed` snippet is provided, it will be rendered when an error is thrown inside the boundary, with the `error` and a `reset` function that recreates the contents (demo:

```svelte
<svelte:boundary>
	<FlakyComponent />

	{#snippet failed(error, reset)}
		<button onclick={reset}>oops! try again</button>
	{/snippet}
</svelte:boundary>
```

> \[!NOTE]
> As with [snippets passed to components](snippet#Passing-snippets-to-components), the `failed` snippet can be passed explicitly as a property...
>
> ```svelte
> <svelte:boundary {failed}>...</svelte:boundary>
> ```
>
> ...or implicitly by declaring it directly inside the boundary, as in the example above.

### `onerror`

If an `onerror` function is provided, it will be called with the same two `error` and `reset` arguments. This is useful for tracking the error with an error reporting service...

```svelte
<svelte:boundary onerror={(e) => report(e)}>
	...
</svelte:boundary>
```

...or using `error` and `reset` outside the boundary itself:

```svelte
<script>
	let error = $state(null);
	let reset = $state(() => {});

	function onerror(e, r) {
		error = e;
		reset = r;
	}
</script>

<svelte:boundary {onerror}>
	<FlakyComponent />
</svelte:boundary>

{#if error}
	<button onclick={() => {
		error = null;
		reset();
	}}>
		oops! try again
	</button>
{/if}
```

If an error occurs inside the `onerror` function (or if you rethrow the error), it will be handled by a parent boundary if such exists.

## Using `transformError`

By default, error boundaries have no effect on the server — if an error occurs during rendering, the render as a whole will fail.

Since 5.51 you can control this behaviour for boundaries with a `failed` snippet, by calling [`render(...)`](imperative-component-api#render) with a `transformError` function.

> \[!NOTE] If you're using Svelte via a framework such as SvelteKit, you most likely don't have direct access to the `render(...)` call — the framework must configure `transformError` on your behalf. SvelteKit will add support for this in the near future, via the [`handleError`](../kit/hooks#Shared-hooks-handleError) hook.

The `transformError` function must return a JSON-stringifiable object which will be used to render the `failed` snippet. This object will be serialized and used to hydrate the snippet in the browser:

```js
// @errors: 1005
import { render } from 'svelte/server';
import App from './App.svelte';

const { head, body } = await render(App, {
	transformError: (error) => {
		// log the original error, with the stack trace...
		console.error(error);

		// ...and return a sanitized user-friendly error
		// to display in the `failed` snippet
		return {
			message: 'An error occurred!'
		};
	};
});
```

If `transformError` throws (or rethrows) an error, `render(...)` as a whole will fail with that error.

> \[!NOTE] Errors that occur during server-side rendering can contain sensitive information in the `message` and `stack`. It's recommended to redact these rather than sending them unaltered to the browser.

If the boundary has an `onerror` handler, it will be called upon hydration with the deserialized error object.

The [`mount`](imperative-component-api#mount) and [`hydrate`](imperative-component-api#hydrate) functions also accept a `transformError` option, which defaults to the identity function. As with `render`, this function transforms a render-time error before it is passed to a `failed` snippet or `onerror` handler.

# `<svelte:window>`

```svelte
<svelte:window onevent={handler} />
```

```svelte
<svelte:window bind:prop={value} />
```

The `<svelte:window>` element allows you to add event listeners to the `window` object without worrying about removing them when the component is destroyed, or checking for the existence of `window` when server-side rendering.

This element may only appear at the top level of your component — it cannot be inside a block or element.

```svelte
<script>
	function handleKeydown(event) {
		alert(`pressed the ${event.key} key`);
	}
</script>

<svelte:window onkeydown={handleKeydown} />
```

You can also bind to the following properties:

- `innerWidth`
- `innerHeight`
- `outerWidth`
- `outerHeight`
- `scrollX`
- `scrollY`
- `online` — an alias for `window.navigator.onLine`
- `devicePixelRatio`

All except `scrollX` and `scrollY` are readonly.

```svelte
<svelte:window bind:scrollY={y} />
```

> \[!NOTE] Note that the page will not be scrolled to the initial value to avoid accessibility issues. Only subsequent changes to the bound variable of `scrollX` and `scrollY` will cause scrolling. If you have a legitimate reason to scroll when the component is rendered, call `scrollTo()` in an `$effect`.

# `<svelte:document>`

```svelte
<svelte:document onevent={handler} />
```

```svelte
<svelte:document bind:prop={value} />
```

Similarly to `<svelte:window>`, this element allows you to add listeners to events on `document`, such as `visibilitychange`, which don't fire on `window`. It also lets you use [attachments](@attach) on `document`.

As with `<svelte:window>`, this element may only appear the top level of your component and must never be inside a block or element.

```svelte
<svelte:document onvisibilitychange={handleVisibilityChange} {@attach someAttachment} />
```

You can also bind to the following properties:

- `activeElement`
- `fullscreenElement`
- `pointerLockElement`
- `visibilityState`

All are readonly.

# `<svelte:body>`

```svelte
<svelte:body onevent={handler} />
```

Similarly to `<svelte:window>`, this element allows you to add listeners to events on `document.body`, such as `mouseenter` and `mouseleave`, which don't fire on `window`. It also lets you use [actions](use) on the `<body>` element.

As with `<svelte:window>` and `<svelte:document>`, this element may only appear at the top level of your component and must never be inside a block or element.

```svelte
<svelte:body onmouseenter={handleMouseenter} onmouseleave={handleMouseleave} use:someAction />
```

# `<svelte:head>`

```svelte
<svelte:head>...</svelte:head>
```

This element makes it possible to insert elements into `document.head`. During server-side rendering, `head` content is exposed separately to the main `body` content.

As with `<svelte:window>`, `<svelte:document>` and `<svelte:body>`, this element may only appear at the top level of your component and must never be inside a block or element.

```svelte
<svelte:head>
	<title>Hello world!</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>
```

# `<svelte:element>`

```svelte
<svelte:element this={expression} />
```

The `<svelte:element>` element lets you render an element that is unknown at author time, for example because it comes from a CMS. Any properties and event listeners present will be applied to the element.

The only supported binding is `bind:this`, since Svelte's built-in bindings do not work with generic elements.

If `this` has a nullish value, the element and its children will not be rendered.

If `this` is the name of a [void element](https://developer.mozilla.org/en-US/docs/Glossary/Void_element) (e.g., `br`) and `<svelte:element>` has child elements, a runtime error will be thrown in development mode:

```svelte
<script>
	let tag = $state('hr');
</script>

<svelte:element this={tag}>
	This text cannot appear inside an hr element
</svelte:element>
```

Svelte tries its best to infer the correct namespace from the element's surroundings, but it's not always possible. You can make it explicit with an `xmlns` attribute:

```svelte
<svelte:element this={tag} xmlns="http://www.w3.org/2000/svg" />
```

`this` needs to be a valid DOM element tag, things like `#text` or `svelte:head` will not work.

# `<svelte:options>`

```svelte
<svelte:options option={value} />
```

The `<svelte:options>` element provides a place to specify per-component compiler options, which are detailed in the [compiler section](svelte-compiler#compile). The possible options are:

- `runes={true}` — forces a component into *runes mode* (see the [Legacy APIs](legacy-overview) section)
- `runes={false}` — forces a component into *legacy mode*
- `namespace="..."` — the namespace where this component will be used, can be "html" (the default), "svg" or "mathml"
- `customElement={...}` — the [options](custom-elements#Component-options) to use when compiling this component as a custom element. If a string is passed, it is used as the `tag` option
- `css="injected"` — the component will inject its styles inline: During server-side rendering, it's injected as a `<style>` tag in the `head`, during client side rendering, it's loaded via JavaScript

> \[!LEGACY] Deprecated options
> Svelte 4 also included the following options. They are deprecated in Svelte 5 and non-functional in runes mode.
>
> - `immutable={true}` — you never use mutable data, so the compiler can do simple referential equality checks to determine if values have changed
> - `immutable={false}` — the default. Svelte will be more conservative about whether or not mutable objects have changed
> - `accessors={true}` — adds getters and setters for the component's props
> - `accessors={false}` — the default

```svelte
<svelte:options customElement="my-custom-element" />
```
