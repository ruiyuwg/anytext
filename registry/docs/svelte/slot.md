# `<slot>`

In Svelte 5, content can be passed to components in the form of [snippets](snippet) and rendered using [render tags](@render).

In legacy mode, content inside component tags is considered *slotted content*, which can be rendered by the component using a `<slot>` element:

```svelte
<!--- file: App.svelte --->
<script>
	import Modal from './Modal.svelte';
</script>

<Modal>This is some slotted content</Modal>
```

```svelte
<!--- file: Modal.svelte --->
<div class="modal">
	<slot></slot>
</div>
```

> \[!NOTE] If you want to render a regular `<slot>` element, you can use `<svelte:element this={'slot'} />`.

## Named slots

A component can have *named* slots in addition to the default slot. On the parent side, add a `slot="..."` attribute to an element, component or [`<svelte:fragment>`](legacy-svelte-fragment) directly inside the component tags.

```svelte
<!--- file: App.svelte --->
<script>
	import Modal from './Modal.svelte';

	let open = true;
</script>

{#if open}
	<Modal>
		This is some slotted content

		+++<div slot="buttons">+++
			<button on:click={() => open = false}>
				close
			</button>
		+++</div>+++
	</Modal>
{/if}
```

On the child side, add a corresponding `<slot name="...">` element:

```svelte
<!--- file: Modal.svelte --->
<div class="modal">
	<slot></slot>
	<hr>
	+++<slot name="buttons"></slot>+++
</div>
```

## Fallback content

If no slotted content is provided, a component can define fallback content by putting it inside the `<slot>` element:

```svelte
<slot>
	This will be rendered if no slotted content is provided
</slot>
```

## Passing data to slotted content

Slots can be rendered zero or more times and can pass values *back* to the parent using props. The parent exposes the values to the slot template using the `let:` directive.

```svelte
<!--- file: FancyList.svelte --->
<ul>
	{#each items as data}
		<li class="fancy">
			<!-- 'item' here... -->
			<slot item={process(data)} />
		</li>
	{/each}
</ul>
```

```svelte
<!--- file: App.svelte --->
<!-- ...corresponds to 'item' here: -->
<FancyList {items} let:item={processed}>
	<div>{processed.text}</div>
</FancyList>
```

The usual shorthand rules apply — `let:item` is equivalent to `let:item={item}`, and `<slot {item}>` is equivalent to `<slot item={item}>`.

Named slots can also expose values. The `let:` directive goes on the element with the `slot` attribute.

```svelte
<!--- file: FancyList.svelte --->
<ul>
	{#each items as item}
		<li class="fancy">
			<slot name="item" item={process(data)} />
		</li>
	{/each}
</ul>

<slot name="footer" />
```

```svelte
<!--- file: App.svelte --->
<FancyList {items}>
	<div slot="item" let:item>{item.text}</div>
	<p slot="footer">Copyright (c) 2019 Svelte Industries</p>
</FancyList>
```

# $$slots

In runes mode, we know which [snippets](snippet) were provided to a component, as they're just normal props.

In legacy mode, the way to know if content was provided for a given slot is with the `$$slots` object, whose keys are the names of the slots passed into the component by the parent.

```svelte
<!--- file: Card.svelte --->
<div>
	<slot name="title" />
	{#if $$slots.description}
		<!-- This <hr> and slot will render only if `slot="description"` is provided. -->
		<hr />
		<slot name="description" />
	{/if}
</div>
```

```svelte
<!--- file: App.svelte --->
<Card>
	<h1 slot="title">Blog Post Title</h1>
	<!-- No slot named "description" was provided so the optional slot will not be rendered. -->
</Card>
```

# `<svelte:fragment>`

The `<svelte:fragment>` element allows you to place content in a [named slot](legacy-slots) without wrapping it in a container DOM element. This keeps the flow layout of your document intact.

```svelte
<!--- file: Widget.svelte --->
<div>
	<slot name="header">No header was provided</slot>
	<p>Some content between header and footer</p>
	<slot name="footer" />
</div>
```

```svelte
<!--- file: App.svelte --->
<script>
	import Widget from './Widget.svelte';
</script>

<Widget>
	<h1 slot="header">Hello</h1>
	<svelte:fragment slot="footer">
		<p>All rights reserved.</p>
		<p>Copyright (c) 2019 Svelte Industries</p>
	</svelte:fragment>
</Widget>
```

> \[!NOTE]
> In Svelte 5+, this concept is obsolete, as snippets don't create a wrapping element

# `<svelte:component>`

In runes mode, `<MyComponent>` will re-render if the value of `MyComponent` changes. See the [Svelte 5 migration guide](/docs/svelte/v5-migration-guide#svelte:component-is-no-longer-necessary) for an example.

In legacy mode, it won't — we must use `<svelte:component>`, which destroys and recreates the component instance when the value of its `this` expression changes:

```svelte
<svelte:component this={MyComponent} />
```

If `this` is falsy, no component is rendered.

# `<svelte:self>`

The `<svelte:self>` element allows a component to include itself, recursively.

It cannot appear at the top level of your markup; it must be inside an if or each block or passed to a component's slot to prevent an infinite loop.

```svelte
<script>
	export let count;
</script>

{#if count > 0}
	<p>counting down... {count}</p>
	<svelte:self count={count - 1} />
{:else}
	<p>lift-off!</p>
{/if}
```

> \[!NOTE]
> This concept is obsolete, as components can import themselves:
>
> ```svelte
>
>
> 	import Self from './App.svelte'
> 	export let count;
>
>
>
> 	counting down... {count}
> 	
> {:else}
> 	lift-off!
> {/if}
> ```
