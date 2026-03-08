## Components are no longer classes

In Svelte 3 and 4, components are classes. In Svelte 5 they are functions and should be instantiated differently. If you need to manually instantiate components, you should use `mount` or `hydrate` (imported from `svelte`) instead. If you see this error using SvelteKit, try updating to the latest version of SvelteKit first, which adds support for Svelte 5. If you're using Svelte without SvelteKit, you'll likely have a `main.js` file (or similar) which you need to adjust:

```js
+++import { mount } from 'svelte';+++
import App from './App.svelte'

---const app = new App({ target: document.getElementById("app") });---
+++const app = mount(App, { target: document.getElementById("app") });+++

export default app;
```

`mount` and `hydrate` have the exact same API. The difference is that `hydrate` will pick up the Svelte's server-rendered HTML inside its target and hydrate it. Both return an object with the exports of the component and potentially property accessors (if compiled with `accessors: true`). They do not come with the `$on`, `$set` and `$destroy` methods you may know from the class component API. These are its replacements:

For `$on`, instead of listening to events, pass them via the `events` property on the options argument.

```js
+++import { mount } from 'svelte';+++
import App from './App.svelte'

---const app = new App({ target: document.getElementById("app") });
app.$on('event', callback);---
+++const app = mount(App, { target: document.getElementById("app"), events: { event: callback } });+++
```

> \[!NOTE] Note that using `events` is discouraged — instead, [use callbacks](#Event-changes)

For `$set`, use `$state` instead to create a reactive property object and manipulate it. If you're doing this inside a `.js` or `.ts` file, adjust the ending to include `.svelte`, i.e. `.svelte.js` or `.svelte.ts`.

```js
+++import { mount } from 'svelte';+++
import App from './App.svelte'

---const app = new App({ target: document.getElementById("app"), props: { foo: 'bar' } });
app.$set({ foo: 'baz' });---
+++const props = $state({ foo: 'bar' });
const app = mount(App, { target: document.getElementById("app"), props });
props.foo = 'baz';+++
```

For `$destroy`, use `unmount` instead.

```js
+++import { mount, unmount } from 'svelte';+++
import App from './App.svelte'

---const app = new App({ target: document.getElementById("app"), props: { foo: 'bar' } });
app.$destroy();---
+++const app = mount(App, { target: document.getElementById("app") });
unmount(app);+++
```

As a stop-gap-solution, you can also use `createClassComponent` or `asClassComponent` (imported from `svelte/legacy`) instead to keep the same API known from Svelte 4 after instantiating.

```js
+++import { createClassComponent } from 'svelte/legacy';+++
import App from './App.svelte'

---const app = new App({ target: document.getElementById("app") });---
+++const app = createClassComponent({ component: App, target: document.getElementById("app") });+++

export default app;
```

If this component is not under your control, you can use the `compatibility.componentApi` compiler option for auto-applied backwards compatibility, which means code using `new Component(...)` keeps working without adjustments (note that this adds a bit of overhead to each component). This will also add `$set` and `$on` methods for all component instances you get through `bind:this`.

```js
/// svelte.config.js
export default {
	compilerOptions: {
		compatibility: {
			componentApi: 4
		}
	}
};
```

Note that `mount` and `hydrate` are *not* synchronous, so things like `onMount` won't have been called by the time the function returns and the pending block of promises will not have been rendered yet (because `#await` waits a microtask to wait for a potentially immediately-resolved promise). If you need that guarantee, call `flushSync` (import from `'svelte'`) after calling `mount/hydrate`.

### Server API changes

Similarly, components no longer have a `render` method when compiled for server-side rendering. Instead, pass the function to `render` from `svelte/server`:

```js
+++import { render } from 'svelte/server';+++
import App from './App.svelte';

---const { html, head } = App.render({ props: { message: 'hello' }});---
+++const { html, head } = render(App, { props: { message: 'hello' }});+++
```

In Svelte 4, rendering a component to a string also returned the CSS of all components. In Svelte 5, this is no longer the case by default because most of the time you're using a tooling chain that takes care of it in other ways (like SvelteKit). If you need CSS to be returned from `render`, you can set the `css` compiler option to `'injected'` and it will add `<style>` elements to the `head`.

### Component typing changes

The change from classes towards functions is also reflected in the typings: `SvelteComponent`, the base class from Svelte 4, is deprecated in favour of the new `Component` type which defines the function shape of a Svelte component. To manually define a component shape in a `d.ts` file:

```ts
import type { Component } from 'svelte';
export declare const MyComponent: Component<{
	foo: string;
}>;
```

To declare that a component of a certain type is required:

```js
import { ComponentA, ComponentB } from 'component-library';
---import type { SvelteComponent } from 'svelte';---
+++import type { Component } from 'svelte';+++

---let C: typeof SvelteComponent<{ foo: string }> = $state(---
+++let C: Component<{ foo: string }> = $state(+++
	Math.random() ? ComponentA : ComponentB
);
```

The two utility types `ComponentEvents` and `ComponentType` are also deprecated. `ComponentEvents` is obsolete because events are defined as callback props now, and `ComponentType` is obsolete because the new `Component` type is the component type already (i.e. `ComponentType<SvelteComponent<{ prop: string }>>` is equivalent to `Component<{ prop: string }>`).

### bind:this changes

Because components are no longer classes, using `bind:this` no longer returns a class instance with `$set`, `$on` and `$destroy` methods on it. It only returns the instance exports (`export function/const`) and, if you're using the `accessors` option, a getter/setter-pair for each property.

## `<svelte:component>` is no longer necessary

In Svelte 4, components are *static* — if you render `<Thing>`, and the value of `Thing` changes, nothing happens. To make it dynamic you had to use `<svelte:component>`.

This is no longer true in Svelte 5:

```svelte
<script>
	import A from './A.svelte';
	import B from './B.svelte';

	let Thing = $state();
</script>

<select bind:value={Thing}>
	<option value={A}>A</option>
	<option value={B}>B</option>
</select>

<!-- these are equivalent -->
<Thing />
<svelte:component this={Thing} />
```

While migrating, keep in mind that your component's name should be capitalized (`Thing`) to distinguish it from elements, unless using dot notation.

### Dot notation indicates a component

In Svelte 4, `<foo.bar>` would create an element with a tag name of `"foo.bar"`. In Svelte 5, `foo.bar` is treated as a component instead. This is particularly useful inside `each` blocks:

```svelte
{#each items as item}
	<item.component {...item.props} />
{/each}
```

## Whitespace handling changed

Previously, Svelte employed a very complicated algorithm to determine if whitespace should be kept or not. Svelte 5 simplifies this which makes it easier to reason about as a developer. The rules are:

- Whitespace between nodes is collapsed to one whitespace

- Whitespace at the start and end of a tag is removed completely

  This new behavior is slightly different from native HTML rendering. For example, `<p>foo<span> - bar</span></p>` will render:

  - `foo - bar` in HTML
  - `foo- bar` in Svelte 5

  You can reintroduce the missing space by moving it outside the `<span>`...

  ```svelte
  foo - bar
  ```

  ...or, if necessary for styling reasons, including it as an expression:

  ```svelte
  foo{' '}- bar
  ```

- Certain exceptions apply such as keeping whitespace inside `pre` tags

As before, you can disable whitespace trimming by setting the `preserveWhitespace` option in your compiler settings or on a per-component basis in `<svelte:options>`.

## Modern browser required

Svelte 5 requires a modern browser (in other words, not Internet Explorer) for various reasons:

- it uses [`Proxies`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- elements with `clientWidth`/`clientHeight`/`offsetWidth`/`offsetHeight` bindings use a [`ResizeObserver`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) rather than a convoluted `<iframe>` hack
- `<input type="range" bind:value={...} />` only uses an `input` event listener, rather than also listening for `change` events as a fallback

The `legacy` compiler option, which generated bulkier but IE-friendly code, no longer exists.

## Changes to compiler options

- The `false`/`true` (already deprecated previously) and the `"none"` values were removed as valid values from the `css` option
- The `legacy` option was repurposed
- The `hydratable` option has been removed. Svelte components are always hydratable now
- The `enableSourcemap` option has been removed. Source maps are always generated now, tooling can choose to ignore it
- The `tag` option was removed. Use `<svelte:options customElement="tag-name" />` inside the component instead
- The `loopGuardTimeout`, `format`, `sveltePath`, `errorMode` and `varsReport` options were removed

## The `children` prop is reserved

Content inside component tags becomes a snippet prop called `children`. You cannot have a separate prop by that name.
