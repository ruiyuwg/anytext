## Snippets instead of slots

In Svelte 4, content can be passed to components using slots. Svelte 5 replaces them with snippets, which are more powerful and flexible, and so slots are deprecated in Svelte 5.

They continue to work, however, and you can pass snippets to a component that uses slots:

```svelte
<!--- file: Child.svelte --->
<slot />
<hr />
<slot name="foo" message="hello" />
```

```svelte
<!--- file: Parent.svelte --->
<script>
	import Child from './Child.svelte';
</script>

<Child>
	default child content

	{#snippet foo({ message })}
		message from child: {message}
	{/snippet}
</Child>
```

(The reverse is not true — you cannot pass slotted content to a component that uses [`{@render ...}`](/docs/svelte/@render) tags.)

When using custom elements, you should still use `<slot />` like before. In a future version, when Svelte removes its internal version of slots, it will leave those slots as-is, i.e. output a regular DOM tag instead of transforming it.

### Default content

In Svelte 4, the easiest way to pass a piece of UI to the child was using a `<slot />`. In Svelte 5, this is done using the `children` prop instead, which is then shown with `{@render children()}`:

```svelte
<script>
	+++let { children } = $props();+++
</script>

---<slot />---
+++{@render children?.()}+++
```

### Multiple content placeholders

If you wanted multiple UI placeholders, you had to use named slots. In Svelte 5, use props instead, name them however you like and `{@render ...}` them:

```svelte
<script>
	+++let { header, main, footer } = $props();+++
</script>

<header>
	---<slot name="header" />---
	+++{@render header()}+++
</header>

<main>
	---<slot name="main" />---
	+++{@render main()}+++
</main>

<footer>
	---<slot name="footer" />---
	+++{@render footer()}+++
</footer>
```

### Passing data back up

In Svelte 4, you would pass data to a `<slot />` and then retrieve it with `let:` in the parent component. In Svelte 5, snippets take on that responsibility:

```svelte
<!--- file: App.svelte --->
<script>
	import List from './List.svelte';
</script>

<List items={['one', 'two', 'three']} ---let:item--->
	+++{#snippet item(text)}+++
		<span>{text}</span>
	+++{/snippet}+++
	---<span slot="empty">No items yet</span>---
	+++{#snippet empty()}
		<span>No items yet</span>
	{/snippet}+++
</List>
```

```svelte
<!--- file: List.svelte --->
<script>
	let { items, +++item, empty+++ } = $props();
</script>

{#if items.length}
	<ul>
		{#each items as entry}
			<li>
				---<slot item={entry} />---
				+++{@render item(entry)}+++
			</li>
		{/each}
	</ul>
{:else}
	---<slot name="empty" />---
	+++{@render empty?.()}+++
{/if}
```

> \[!DETAILS] Why we did this
> Slots were easy to get started with, but the more advanced the use case became, the more involved and confusing the syntax became:
>
> - the `let:` syntax was confusing to many people as it *creates* a variable whereas all other `:` directives *receive* a variable
> - the scope of a variable declared with `let:` wasn't clear. In the example above, it may look like you can use the `item` slot prop in the `empty` slot, but that's not true
> - named slots had to be applied to an element using the `slot` attribute. Sometimes you didn't want to create an element, so we had to add the `<svelte:fragment>` API
> - named slots could also be applied to a component, which changed the semantics of where `let:` directives are available (even today us maintainers often don't know which way around it works)
>
> Snippets solve all of these problems by being much more readable and clear. At the same time they're more powerful as they allow you to define sections of UI that you can render *anywhere*, not just passing them as props to a component.
