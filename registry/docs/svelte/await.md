# await

As of Svelte 5.36, you can use the `await` keyword inside your components in three places where it was previously unavailable:

- at the top level of your component's `<script>`
- inside `$derived(...)` declarations
- inside your markup

This feature is currently experimental, and you must opt in by adding the `experimental.async` option wherever you [configure](/docs/kit/configuration) Svelte, usually `svelte.config.js`:

```js
/// file: svelte.config.js
export default {
	compilerOptions: {
		experimental: {
			async: true
		}
	}
};
```

The experimental flag will be removed in Svelte 6.

## Synchronized updates

When an `await` expression depends on a particular piece of state, changes to that state will not be reflected in the UI until the asynchronous work has completed, so that the UI is not left in an inconsistent state. In other words, in an example like this...

```svelte
<script>
	let a = $state(1);
	let b = $state(2);

	async function add(a, b) {
		await new Promise((f) => setTimeout(f, 500)); // artificial delay
		return a + b;
	}
</script>

<input type="number" bind:value={a}>
<input type="number" bind:value={b}>

<p>{a} + {b} = {await add(a, b)}</p>
```

...if you increment `a`, the contents of the `<p>` will *not* immediately update to read this —

```html
<p>2 + 2 = 3</p>
```

— instead, the text will update to `2 + 2 = 4` when `add(a, b)` resolves.

Updates can overlap — a fast update will be reflected in the UI while an earlier slow update is still ongoing.

## Concurrency

Svelte will do as much asynchronous work as it can in parallel. For example if you have two `await` expressions in your markup...

```svelte
<p>{await one()}</p>
<p>{await two()}</p>
```

...both functions will run at the same time, as they are independent expressions, even though they are *visually* sequential.

This does not apply to sequential `await` expressions inside your `<script>` or inside async functions — these run like any other asynchronous JavaScript. An exception is that independent `$derived` expressions will update independently, even though they will run sequentially when they are first created:

```js
async function one() { return 1; }
async function two() { return 2; }
// ---cut---
// these will run sequentially the first time,
// but will update independently
let a = $derived(await one());
let b = $derived(await two());
```

> \[!NOTE] If you write code like this, expect Svelte to give you an [`await_waterfall`](runtime-warnings#Client-warnings-await_waterfall) warning

## Indicating loading states

To render placeholder UI, you can wrap content in a `<svelte:boundary>` with a [`pending`](svelte-boundary#Properties-pending) snippet. This will be shown when the boundary is first created, but not for subsequent updates, which are globally coordinated.

After the contents of a boundary have resolved for the first time and have replaced the `pending` snippet, you can detect subsequent async work with [`$effect.pending()`]($effect#$effect.pending). This is what you would use to display a "we're asynchronously validating your input" spinner next to a form field, for example.

You can also use [`settled()`](svelte#settled) to get a promise that resolves when the current update is complete:

```js
let color = 'red';
let answer = -1;
let updating = false;
// ---cut---
import { tick, settled } from 'svelte';

async function onclick() {
	updating = true;

	// without this, the change to `updating` will be
	// grouped with the other changes, meaning it
	// won't be reflected in the UI
	await tick();

	color = 'octarine';
	answer = 42;

	await settled();

	// any updates affected by `color` or `answer`
	// have now been applied
	updating = false;
}
```

## Error handling

Errors in `await` expressions will bubble to the nearest [error boundary](svelte-boundary).

## Server-side rendering

Svelte supports asynchronous server-side rendering (SSR) with the `render(...)` API. To use it, simply await the return value:

```js
/// file: server.js
import { render } from 'svelte/server';
import App from './App.svelte';

const { head, body } = +++await+++ render(App);
```

> \[!NOTE] If you're using a framework like SvelteKit, this is done on your behalf.

If a `<svelte:boundary>` with a `pending` snippet is encountered during SSR, that snippet will be rendered while the rest of the content is ignored. All `await` expressions encountered outside boundaries with `pending` snippets will resolve and render their contents prior to `await render(...)` returning.

> \[!NOTE] In the future, we plan to add a streaming implementation that renders the content in the background.

## Forking

The [`fork(...)`](svelte#fork) API, added in 5.42, makes it possible to run `await` expressions that you *expect* to happen in the near future. This is mainly intended for frameworks like SvelteKit to implement preloading when (for example) users signal an intent to navigate.

```svelte
<script>
	import { fork } from 'svelte';
	import Menu from './Menu.svelte';

	let open = $state(false);

	/** @type {import('svelte').Fork | null} */
	let pending = null;

	function preload() {
		pending ??= fork(() => {
			open = true;
		});
	}

	function discard() {
		pending?.discard();
		pending = null;
	}
</script>

<button
	onfocusin={preload}
	onfocusout={discard}
	onpointerenter={preload}
	onpointerleave={discard}
	onclick={() => {
		pending?.commit();
		pending = null;

		// in case `pending` didn't exist
		// (if it did, this is a no-op)
		open = true;
	}}
>open menu</button>

{#if open}
	<!-- any async work inside this component will start
	     as soon as the fork is created -->
	<Menu onclose={() => open = false} />
{/if}
```

## Caveats

As an experimental feature, the details of how `await` is handled (and related APIs like `$effect.pending()`) are subject to breaking changes outside of a semver major release, though we intend to keep such changes to a bare minimum.

## Breaking changes

Effects run in a slightly different order when the `experimental.async` option is `true`. Specifically, *block* effects like `{#if ...}` and `{#each ...}` now run before an `$effect.pre` or `beforeUpdate` in the same component, which means that in very rare situations.

# Scoped styles

Svelte components can include a `<style>` element containing CSS that belongs to the component. This CSS is *scoped* by default, meaning that styles will not apply to any elements on the page outside the component in question.

This works by adding a class to affected elements, which is based on a hash of the component styles (e.g. `svelte-123xyz`).

```svelte
<style>
	p {
		/* this will only affect <p> elements in this component */
		color: burlywood;
	}
</style>
```

## Specificity

Each scoped selector receives a [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) increase of 0-1-0, as a result of the scoping class (e.g. `.svelte-123xyz`) being added to the selector. This means that (for example) a `p` selector defined in a component will take precedence over a `p` selector defined in a global stylesheet, even if the global stylesheet is loaded later.

In some cases, the scoping class must be added to a selector multiple times, but after the first occurrence it is added with `:where(.svelte-xyz123)` in order to not increase specificity further.

## Scoped keyframes

If a component defines `@keyframes`, the name is scoped to the component using the same hashing approach. Any `animation` rules in the component will be similarly adjusted:

```svelte
<style>
	.bouncy {
		animation: bounce 10s;
	}

	/* these keyframes are only accessible inside this component */
	@keyframes bounce {
		/* ... */
	}
</style>
```

# Global styles

## :global(...)

To apply styles to a single selector globally, use the `:global(...)` modifier:

```svelte
<style>
	:global(body) {
		/* applies to <body> */
		margin: 0;
	}

	div :global(strong) {
		/* applies to all <strong> elements, in any component,
		   that are inside <div> elements belonging
		   to this component */
		color: goldenrod;
	}

	p:global(.big.red) {
		/* applies to all <p> elements belonging to this component
		   with `class="big red"`, even if it is applied
		   programmatically (for example by a library) */
	}
</style>
```

If you want to make @keyframes that are accessible globally, you need to prepend your keyframe names with `-global-`.

The `-global-` part will be removed when compiled, and the keyframe will then be referenced using just `my-animation-name` elsewhere in your code.

```svelte
<style>
	@keyframes -global-my-animation-name {
		/* code goes here */
	}
</style>
```

## :global

To apply styles to a group of selectors globally, create a `:global {...}` block:

```svelte
<style>
	:global {
		/* applies to every <div> in your application */
		div { ... }

		/* applies to every <p> in your application */
		p { ... }
	}

	.a :global {
		/* applies to every `.b .c .d` element, in any component,
		   that is inside an `.a` element in this component */
		.b .c .d {...}
	}
</style>
```

> \[!NOTE] The second example above could also be written as an equivalent `.a :global .b .c .d` selector, where everything after the `:global` is unscoped, though the nested form is preferred.

# Custom properties

You can pass CSS custom properties — both static and dynamic — to components:

```svelte
<Slider
	bind:value
	min={0}
	max={100}
	--track-color="black"
	--thumb-color="rgb({r} {g} {b})"
/>
```

The above code essentially desugars to this:

```svelte
<svelte-css-wrapper style="display: contents; --track-color: black; --thumb-color: rgb({r} {g} {b})">
	<Slider
		bind:value
		min={0}
		max={100}
	/>
</svelte-css-wrapper>
```

For an SVG element, it would use `<g>` instead:

```svelte
<g style="--track-color: black; --thumb-color: rgb({r} {g} {b})">
	<Slider
		bind:value
		min={0}
		max={100}
	/>
</g>
```

Inside the component, we can read these custom properties (and provide fallback values) using [`var(...)`](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties):

```svelte
<style>
	.track {
		background: var(--track-color, #aaa);
	}

	.thumb {
		background: var(--thumb-color, blue);
	}
</style>
```

You don't *have* to specify the values directly on the component; as long as the custom properties are defined on a parent element, the component can use them. It's common to define custom properties on the `:root` element in a global stylesheet so that they apply to your entire application.

> \[!NOTE] While the extra element will not affect layout, it *will* affect any CSS selectors that (for example) use the `>` combinator to target an element directly inside the component's container.

# Nested `<style>` elements

There can only be one top-level `<style>` tag per component.

However, it is possible to have a `<style>` tag nested inside other elements or logic blocks.

In that case, the `<style>` tag will be inserted as-is into the DOM; no scoping or processing will be done on the `<style>` tag.

```svelte
<div>
	<style>
		/* this style tag will be inserted as-is */
		div {
			/* this will apply to all `<div>` elements in the DOM */
			color: red;
		}
	</style>
</div>
```
