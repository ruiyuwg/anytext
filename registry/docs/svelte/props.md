# $props

The inputs to a component are referred to as *props*, which is short for *properties*. You pass props to components just like you pass attributes to elements:

```svelte
<!--- file: App.svelte --->
<script>
	import MyComponent from './MyComponent.svelte';
</script>

<MyComponent adjective="cool" />
```

On the other side, inside `MyComponent.svelte`, we can receive props with the `$props` rune...

```svelte
<!--- file: MyComponent.svelte --->
<script>
	let props = $props();
</script>

<p>this component is {props.adjective}</p>
```

...though more commonly, you'll [*destructure*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) your props:

```svelte
<!--- file: MyComponent.svelte --->
<script>
	let +++{ adjective }+++ = $props();
</script>

<p>this component is {+++adjective+++}</p>
```

## Fallback values

Destructuring allows us to declare fallback values, which are used if the parent component does not set a given prop (or the value is `undefined`):

```js
let { adjective = 'happy' } = $props();
```

> \[!NOTE] Fallback values are not turned into reactive state proxies (see [Updating props](#Updating-props) for more info)

## Renaming props

We can also use the destructuring assignment to rename props, which is necessary if they're invalid identifiers, or a JavaScript keyword like `super`:

```js
let { super: trouper = 'lights are gonna find me' } = $props();
```

## Rest props

Finally, we can use a *rest property* to get, well, the rest of the props:

```js
let { a, b, c, ...others } = $props();
```

## Updating props

References to a prop inside a component update when the prop itself updates — when `count` changes in `App.svelte`, it will also change inside `Child.svelte`. But the child component is able to temporarily override the prop value, which can be useful for unsaved ephemeral state (demo:

```svelte
<!--- file: App.svelte --->
<script>
	import Child from './Child.svelte';

	let count = $state(0);
</script>

<button onclick={() => (count += 1)}>
	clicks (parent): {count}
</button>

<Child {count} />
```

```svelte
<!--- file: Child.svelte --->
<script>
	let { count } = $props();
</script>

<button onclick={() => (count += 1)}>
	clicks (child): {count}
</button>
```

While you can temporarily *reassign* props, you should not *mutate* props unless they are [bindable]($bindable).

If the prop is a regular object, the mutation will have no effect (demo:

```svelte
<!--- file: App.svelte --->
<script>
	import Child from './Child.svelte';
</script>

<Child object={{ count: 0 }} />
```

```svelte
<!--- file: Child.svelte --->
<script>
	let { object } = $props();
</script>

<button onclick={() => {
	// has no effect
	object.count += 1
}}>
	clicks: {object.count}
</button>
```

If the prop is a reactive state proxy, however, then mutations *will* have an effect but you will see an [`ownership_invalid_mutation`](runtime-warnings#Client-warnings-ownership_invalid_mutation) warning, because the component is mutating state that does not 'belong' to it (demo:

```svelte
<!--- file: App.svelte --->
<script>
	import Child from './Child.svelte';

	let object = $state({count: 0});
</script>

<Child {object} />
```

```svelte
<!--- file: Child.svelte --->
<script>
	let { object } = $props();
</script>

<button onclick={() => {
	// will cause the count below to update,
	// but with a warning. Don't mutate
	// objects you don't own!
	object.count += 1
}}>
	clicks: {object.count}
</button>
```

The fallback value of a prop not declared with `$bindable` is left untouched — it is not turned into a reactive state proxy — meaning mutations will not cause updates (demo

```svelte
<!--- file: Child.svelte --->
<script>
	let { object = { count: 0 } } = $props();
</script>

<button onclick={() => {
	// has no effect if the fallback value is used
	object.count += 1
}}>
	clicks: {object.count}
</button>
```

In summary: don't mutate props. Either use callback props to communicate changes, or — if parent and child should share the same object — use the [`$bindable`]($bindable) rune.

## Type safety

You can add type safety to your components by annotating your props, as you would with any other variable declaration. In TypeScript that might look like this...

```svelte
<script lang="ts">
	let { adjective }: { adjective: string } = $props();
</script>
```

...while in JSDoc you can do this:

```svelte
<script>
	/** @type {{ adjective: string }} */
	let { adjective } = $props();
</script>
```

You can, of course, separate the type declaration from the annotation:

```svelte
<script lang="ts">
	interface Props {
		adjective: string;
	}

	let { adjective }: Props = $props();
</script>
```

> \[!NOTE] Interfaces for native DOM elements are provided in the `svelte/elements` module (see [Typing wrapper components](typescript#Typing-wrapper-components))

If your component exposes [snippet](snippet) props like `children`, these should be typed using the `Snippet` interface imported from `'svelte'` — see [Typing snippets](snippet#Typing-snippets) for examples.

Adding types is recommended, as it ensures that people using your component can easily discover which props they should provide.

## `$props.id()`

This rune, added in version 5.20.0, generates an ID that is unique to the current component instance. When hydrating a server-rendered component, the value will be consistent between server and client.

This is useful for linking elements via attributes like `for` and `aria-labelledby`.

```svelte
<script>
	const uid = $props.id();
</script>

<form>
	<label for="{uid}-firstname">First Name: </label>
	<input id="{uid}-firstname" type="text" />

	<label for="{uid}-lastname">Last Name: </label>
	<input id="{uid}-lastname" type="text" />
</form>
```

# $bindable

Ordinarily, props go one way, from parent to child. This makes it easy to understand how data flows around your app.

In Svelte, component props can be *bound*, which means that data can also flow *up* from child to parent. This isn't something you should do often — overuse can make your data flow unpredictable and your components harder to maintain — but it can simplify your code if used sparingly and carefully.

It also means that a state proxy can be *mutated* in the child.

> \[!NOTE] Mutation is also possible with normal props, but is strongly discouraged — Svelte will warn you if it detects that a component is mutating state it does not 'own'.

To mark a prop as bindable, we use the `$bindable` rune:

```svelte
/// file: FancyInput.svelte
<script>
	let { value = $bindable(), ...props } = $props();
</script>

<input bind:value={value} {...props} />

<style>
	input {
		font-family: 'Comic Sans MS';
		color: deeppink;
	}
</style>
```

Now, a component that uses `<FancyInput>` can add the [`bind:`](bind) directive (demo:

```svelte
/// file: App.svelte
<script>
	import FancyInput from './FancyInput.svelte';

	let message = $state('hello');
</script>

<FancyInput bind:value={message} />
<p>{message}</p>
```

The parent component doesn't *have* to use `bind:` — it can just pass a normal prop. Some parents don't want to listen to what their children have to say.

In this case, you can specify a fallback value for when no prop is passed at all:

```js
/// file: FancyInput.svelte
let { value = $bindable('fallback'), ...props } = $props();
```

# $inspect

> \[!NOTE] `$inspect` only works during development. In a production build it becomes a noop.

The `$inspect` rune is roughly equivalent to `console.log`, with the exception that it will re-run whenever its argument changes. `$inspect` tracks reactive state deeply, meaning that updating something inside an object or array using fine-grained reactivity will cause it to re-fire (demo:

```svelte
<script>
	let count = $state(0);
	let message = $state('hello');

	$inspect(count, message); // will console.log when `count` or `message` change
</script>

<button onclick={() => count++}>Increment</button>
<input bind:value={message} />
```

On updates, a stack trace will be printed, making it easy to find the origin of a state change (unless you're in the playground, due to technical limitations).

## $inspect(...).with

`$inspect` returns a property `with`, which you can invoke with a callback, which will then be invoked instead of `console.log`. The first argument to the callback is either `"init"` or `"update"`; subsequent arguments are the values passed to `$inspect` (demo:

```svelte
<script>
	let count = $state(0);

	$inspect(count).with((type, count) => {
		if (type === 'update') {
			debugger; // or `console.trace`, or whatever you want
		}
	});
</script>

<button onclick={() => count++}>Increment</button>
```

## $inspect.trace(...)

This rune, added in 5.14, causes the surrounding function to be *traced* in development. Any time the function re-runs as part of an [effect]($effect) or a [derived]($derived), information will be printed to the console about which pieces of reactive state caused the effect to fire.

```svelte
<script>
	import { doSomeWork } from './elsewhere';

	$effect(() => {
		+++// $inspect.trace must be the first statement of a function body+++
		+++$inspect.trace();+++
		doSomeWork();
	});
</script>
```

`$inspect.trace` takes an optional first argument which will be used as the label.

# $host

When compiling a component as a [custom element](custom-elements), the `$host` rune provides access to the host element, allowing you to (for example) dispatch custom events (demo:

```svelte
/// file: Stepper.svelte
<svelte:options customElement="my-stepper" />

<script>
	function dispatch(type) {
		+++$host()+++.dispatchEvent(new CustomEvent(type));
	}
</script>

<button onclick={() => dispatch('decrement')}>decrement</button>
<button onclick={() => dispatch('increment')}>increment</button>
```

```svelte
/// file: App.svelte
<script>
	import './Stepper.svelte';

	let count = $state(0);
</script>

<my-stepper
	ondecrement={() => count -= 1}
	onincrement={() => count += 1}
></my-stepper>

<p>count: {count}</p>
```
