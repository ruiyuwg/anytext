## Event changes

Event handlers have been given a facelift in Svelte 5. Whereas in Svelte 4 we use the `on:` directive to attach an event listener to an element, in Svelte 5 they are properties like any other (in other words — remove the colon):

```svelte
<script>
	let count = $state(0);
</script>

<button on---:---click={() => count++}>
	clicks: {count}
</button>
```

Since they're just properties, you can use the normal shorthand syntax...

```svelte
<script>
	let count = $state(0);

	function onclick() {
		count++;
	}
</script>

<button {onclick}>
	clicks: {count}
</button>
```

...though when using a named event handler function it's usually better to use a more descriptive name.

### Component events

In Svelte 4, components could emit events by creating a dispatcher with `createEventDispatcher`.

This function is deprecated in Svelte 5. Instead, components should accept *callback props* — which means you then pass functions as properties to these components:

```svelte
<!--- file: App.svelte --->
<script>
	import Pump from './Pump.svelte';

	let size = $state(15);
	let burst = $state(false);

	function reset() {
		size = 15;
		burst = false;
	}
</script>

<Pump
	---on:---inflate={(power) => {
		size += power---.detail---;
		if (size > 75) burst = true;
	}}
	---on:---deflate={(power) => {
		if (size > 0) size -= power---.detail---;
	}}
/>

{#if burst}
	<button onclick={reset}>new balloon</button>
	<span class="boom">💥</span>
{:else}
	<span class="balloon" style="scale: {0.01 * size}">
		🎈
	</span>
{/if}
```

```svelte
<!--- file: Pump.svelte --->
<script>
	---import { createEventDispatcher } from 'svelte';---
	---const dispatch = createEventDispatcher();---

	+++let { inflate, deflate } = $props();+++
	let power = $state(5);
</script>

<button onclick={() => ---dispatch('inflate', power)---+++inflate(power)+++}>
	inflate
</button>
<button onclick={() => ---dispatch('deflate', power)---+++deflate(power)+++}>
	deflate
</button>
<button onclick={() => power--}>-</button>
Pump power: {power}
<button onclick={() => power++}>+</button>
```

### Bubbling events

Instead of doing `<button on:click>` to 'forward' the event from the element to the component, the component should accept an `onclick` callback prop:

```svelte
<script>
	+++let { onclick } = $props();+++
</script>

<button ---on:click--- +++{onclick}+++>
	click me
</button>
```

Note that this also means you can 'spread' event handlers onto the element along with other props instead of tediously forwarding each event separately:

```svelte
<script>
	let props = $props();
</script>

<button ---{...$$props} on:click on:keydown on:all_the_other_stuff--- +++{...props}+++>
	click me
</button>
```

### Event modifiers

In Svelte 4, you can add event modifiers to handlers:

```svelte
<button on:click|once|preventDefault={handler}>...</button>
```

Modifiers are specific to `on:` and so do not work with modern event handlers. Adding things like `event.preventDefault()` inside the handler itself is preferable, since all the logic lives in one place rather than being split between handler and modifiers.

Since event handlers are just functions, you can create your own wrappers as necessary:

```svelte
<script>
	function once(fn) {
		return function (event) {
			if (fn) fn.call(this, event);
			fn = null;
		};
	}

	function preventDefault(fn) {
		return function (event) {
			event.preventDefault();
			fn.call(this, event);
		};
	}
</script>

<button onclick={once(preventDefault(handler))}>...</button>
```

There are three modifiers — `capture`, `passive` and `nonpassive` — that can't be expressed as wrapper functions, since they need to be applied when the event handler is bound rather than when it runs.

For `capture`, we add the modifier to the event name:

```svelte
<button onclickcapture={...}>...</button>
```

Changing the [`passive`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#using_passive_listeners) option of an event handler, meanwhile, is not something to be done lightly. If you have a use case for it — and you probably don't! — then you will need to use an action to apply the event handler yourself.

### Multiple event handlers

In Svelte 4, this is possible:

```svelte
<button on:click={one} on:click={two}>...</button>
```

Duplicate attributes/properties on elements — which now includes event handlers — are not allowed. Instead, do this:

```svelte
<button
	onclick={(e) => {
		one(e);
		two(e);
	}}
>
	...
</button>
```

When spreading props, local event handlers must go *after* the spread, or they risk being overwritten:

```svelte
<button
	{...props}
	onclick={(e) => {
		doStuff(e);
		props.onclick?.(e);
	}}
>
	...
</button>
```

> \[!DETAILS] Why we did this
> `createEventDispatcher` was always a bit boilerplate-y:
>
> - import the function
> - call the function to get a dispatch function
> - call said dispatch function with a string and possibly a payload
> - retrieve said payload on the other end through a `.detail` property, because the event itself was always a `CustomEvent`
>
> It was always possible to use component callback props, but because you had to listen to DOM events using `on:`, it made sense to use `createEventDispatcher` for component events due to syntactical consistency. Now that we have event attributes (`onclick`), it's the other way around: Callback props are now the more sensible thing to do.
>
> The removal of event modifiers is arguably one of the changes that seems like a step back for those who've liked the shorthand syntax of event modifiers. Given that they are not used that frequently, we traded a smaller surface area for more explicitness. Modifiers also were inconsistent, because most of them were only useable on DOM elements.
>
> Multiple listeners for the same event are also no longer possible, but it was something of an anti-pattern anyway, since it impedes readability: if there are many attributes, it becomes harder to spot that there are two handlers unless they are right next to each other. It also implies that the two handlers are independent, when in fact something like `event.stopImmediatePropagation()` inside `one` would prevent `two` from being called.
>
> By deprecating `createEventDispatcher` and the `on:` directive in favour of callback props and normal element properties, we:
>
> - reduce Svelte's learning curve
> - remove boilerplate, particularly around `createEventDispatcher`
> - remove the overhead of creating `CustomEvent` objects for events that may not even have listeners
> - add the ability to spread event handlers
> - add the ability to know which event handlers were provided to a component
> - add the ability to express whether a given event handler is required or optional
> - increase type safety (previously, it was effectively impossible for Svelte to guarantee that a component didn't emit a particular event)
