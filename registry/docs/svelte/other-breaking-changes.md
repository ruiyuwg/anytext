## Other breaking changes

### Stricter `@const` assignment validation

Assignments to destructured parts of a `@const` declaration are no longer allowed. It was an oversight that this was ever allowed.

### :is(...), :has(...), and :where(...) are scoped

Previously, Svelte did not analyse selectors inside `:is(...)`, `:has(...)`, and `:where(...)`, effectively treating them as global. Svelte 5 analyses them in the context of the current component. Some selectors may now therefore be treated as unused if they were relying on this treatment. To fix this, use `:global(...)` inside the `:is(...)/:has(...)/:where(...)` selectors.

When using Tailwind's `@apply` directive, add a `:global` selector to preserve rules that use Tailwind-generated `:is(...)` selectors:

```css
main +++:global+++ {
	@apply bg-blue-100 dark:bg-blue-900;
}
```

### CSS hash position no longer deterministic

Previously Svelte would always insert the CSS hash last. This is no longer guaranteed in Svelte 5. This is only breaking if you [have very weird css selectors](https://stackoverflow.com/questions/15670631/does-the-order-of-classes-listed-on-an-item-affect-the-css).

### Scoped CSS uses :where(...)

To avoid issues caused by unpredictable specificity changes, scoped CSS selectors now use `:where(.svelte-xyz123)` selector modifiers alongside `.svelte-xyz123` (where `xyz123` is, as previously, a hash of the `<style>` contents). You can read more detail [here](https://github.com/sveltejs/svelte/pull/10443).

In the event that you need to support ancient browsers that don't implement `:where`, you can manually alter the emitted CSS, at the cost of unpredictable specificity changes:

```js
// @errors: 2552
css = css.replace(/:where\((.+?)\)/, '$1');
```

### Error/warning codes have been renamed

Error and warning codes have been renamed. Previously they used dashes to separate the words, they now use underscores (e.g. foo-bar becomes foo\_bar). Additionally, a handful of codes have been reworded slightly.

### Reduced number of namespaces

The number of valid namespaces you can pass to the compiler option `namespace` has been reduced to `html` (the default), `mathml` and `svg`.

The `foreign` namespace was only useful for Svelte Native, which we're planning to support differently in a 5.x minor.

### beforeUpdate/afterUpdate changes

`beforeUpdate` no longer runs twice on initial render if it modifies a variable referenced in the template.

`afterUpdate` callbacks in a parent component will now run after `afterUpdate` callbacks in any child components.

`beforeUpdate/afterUpdate` no longer run when the component contains a `<slot>` and its content is updated.

Both functions are disallowed in runes mode — use `$effect.pre(...)` and `$effect(...)` instead.

### `contenteditable` behavior change

If you have a `contenteditable` node with a corresponding binding *and* a reactive value inside it (example: `<div contenteditable=true bind:textContent>count is {count}</div>`), then the value inside the contenteditable will not be updated by updates to `count` because the binding takes full control over the content immediately and it should only be updated through it.

### `oneventname` attributes no longer accept string values

In Svelte 4, it was possible to specify event attributes on HTML elements as a string:

```svelte
<button onclick="alert('hello')">...</button>
```

This is not recommended, and is no longer possible in Svelte 5, where properties like `onclick` replace `on:click` as the mechanism for adding event handlers.

### `null` and `undefined` become the empty string

In Svelte 4, `null` and `undefined` were printed as the corresponding string. In 99 out of 100 cases you want this to become the empty string instead, which is also what most other frameworks out there do. Therefore, in Svelte 5, `null` and `undefined` become the empty string.

### `bind:files` values can only be `null`, `undefined` or `FileList`

`bind:files` is now a two-way binding. As such, when setting a value, it needs to be either falsy (`null` or `undefined`) or of type `FileList`.

### Bindings now react to form resets

Previously, bindings did not take into account `reset` event of forms, and therefore values could get out of sync with the DOM. Svelte 5 fixes this by placing a `reset` listener on the document and invoking bindings where necessary.

### `walk` no longer exported

`svelte/compiler` reexported `walk` from `estree-walker` for convenience. This is no longer true in Svelte 5, import it directly from that package instead in case you need it.

### Content inside `svelte:options` is forbidden

In Svelte 4 you could have content inside a `<svelte:options />` tag. It was ignored, but you could write something in there. In Svelte 5, content inside that tag is a compiler error.

### `<slot>` elements in declarative shadow roots are preserved

Svelte 4 replaced the `<slot />` tag in all places with its own version of slots. Svelte 5 preserves them in the case they are a child of a `<template shadowrootmode="...">` element.

### `<svelte:element>` tag must be an expression

In Svelte 4, `<svelte:element this="div">` is valid code. This makes little sense — you should just do `<div>`. In the vanishingly rare case that you *do* need to use a literal value for some reason, you can do this:

```svelte
<svelte:element this=+++{+++"div"+++}+++>
```

Note that whereas Svelte 4 would treat `<svelte:element this="input">` (for example) identically to `<input>` for the purposes of determining which `bind:` directives could be applied, Svelte 5 does not.

### `mount` plays transitions by default

The `mount` function used to render a component tree plays transitions by default unless the `intro` option is set to `false`. This is different from legacy class components which, when manually instantiated, didn't play transitions by default.

### `<img src={...}>` and `{@html ...}` hydration mismatches are not repaired

In Svelte 4, if the value of a `src` attribute or `{@html ...}` tag differ between server and client (a.k.a. a hydration mismatch), the mismatch is repaired. This is very costly: setting a `src` attribute (even if it evaluates to the same thing) causes images and iframes to be reloaded, and reinserting a large blob of HTML is slow.

Since these mismatches are extremely rare, Svelte 5 assumes that the values are unchanged, but in development will warn you if they are not. To force an update you can do something like this:

```svelte
<script>
	let { markup, src } = $props();

	if (typeof window !== 'undefined') {
		// stash the values...
		const initial = { markup, src };

		// unset them...
		markup = src = undefined;

		$effect(() => {
			// ...and reset after we've mounted
			markup = initial.markup;
			src = initial.src;
		});
	}
</script>

{@html markup}
<img {src} />
```

### Hydration works differently

Svelte 5 makes use of comments during server-side rendering which are used for more robust and efficient hydration on the client. You therefore should not remove comments from your HTML output if you intend to hydrate it, and if you manually authored HTML to be hydrated by a Svelte component, you need to adjust that HTML to include said comments at the correct positions.

### `onevent` attributes are delegated

Event attributes replace event directives: Instead of `on:click={handler}` you write `onclick={handler}`. For backwards compatibility the `on:event` syntax is still supported and behaves the same as in Svelte 4. Some of the `onevent` attributes however are delegated, which means you need to take care to not stop event propagation on those manually, as they then might never reach the listener for this event type at the root.

### `--style-props` uses a different element

Svelte 5 uses an extra `<svelte-css-wrapper>` element instead of a `<div>` to wrap the component when using CSS custom properties.
