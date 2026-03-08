# Reactive $: statements

In runes mode, reactions to state updates are handled with the [`$derived`]($derived) and [`$effect`]($effect) runes.

In legacy mode, any top-level statement (i.e. not inside a block or a function) can be made reactive by prefixing it with a `$:` [label](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label). These statements run after other code in the `<script>` and before the component markup is rendered, then whenever the values that they depend on change.

```svelte
<script>
	let a = 1;
	let b = 2;

	// this is a 'reactive statement', and it will re-run
	// when `a`, `b` or `sum` change
	$: console.log(`${a} + ${b} = ${sum}`);

	// this is a 'reactive assignment' — `sum` will be
	// recalculated when `a` or `b` change. It is
	// not necessary to declare `sum` separately
	$: sum = a + b;
</script>
```

Statements are ordered *topologically* by their dependencies and their assignments: since the `console.log` statement depends on `sum`, `sum` is calculated first even though it appears later in the source.

Multiple statements can be combined by putting them in a block:

```js
// @noErrors
$: {
	// recalculate `total` when `items` changes
	total = 0;

	for (const item of items) {
		total += item.value;
	}
}
```

The left-hand side of a reactive assignments can be an identifier, or it can be a destructuring assignment:

```js
// @noErrors
$: ({ larry, moe, curly } = stooges);
```

## Understanding dependencies

The dependencies of a `$:` statement are determined at compile time — they are whichever variables are referenced (but not assigned to) inside the statement.

In other words, a statement like this will *not* re-run when `count` changes, because the compiler cannot 'see' the dependency:

```js
// @noErrors
let count = 0;
let double = () => count * 2;

$: doubled = double();
```

Similarly, topological ordering will fail if dependencies are referenced indirectly: `z` will never update, because `y` is not considered 'dirty' when the update occurs. Moving `$: z = y` below `$: setY(x)` will fix it:

```svelte
<script>
	let x = 0;
	let y = 0;

	$: z = y;
	$: setY(x);

	function setY(value) {
		y = value;
	}
</script>
```

## Browser-only code

Reactive statements run during server-side rendering as well as in the browser. This means that any code that should only run in the browser must be wrapped in an `if` block:

```js
// @noErrors
$: if (browser) {
	document.title = title;
}
```

# export let

In runes mode, [component props](basic-markup#Component-props) are declared with the [`$props`]($props) rune, allowing parent components to pass in data.

In legacy mode, props are marked with the `export` keyword, and can have a default value:

```svelte
<script>
	export let foo;
	export let bar = 'default value';

	// Values that are passed in as props
	// are immediately available
	console.log({ foo });
</script>
```

The default value is used if it would otherwise be `undefined` when the component is created.

> \[!NOTE] Unlike in runes mode, if the parent component changes a prop from a defined value to `undefined`, it does not revert to the initial value.

Props without default values are considered *required*, and Svelte will print a warning during development if no value is provided, which you can squelch by specifying `undefined` as the default value:

```js
export let foo +++= undefined;+++
```

## Component exports

An exported `const`, `class` or `function` declaration is *not* considered a prop — instead, it becomes part of the component's API:

```svelte
<!--- file: Greeter.svelte--->
<script>
	export function greet(name) {
		alert(`hello ${name}!`);
	}
</script>
```

```svelte
<!--- file: App.svelte --->
<script>
	import Greeter from './Greeter.svelte';

	let greeter;
</script>

<Greeter bind:this={greeter} />

<button on:click={() => greeter.greet('world')}>
	greet
</button>
```

## Renaming props

The `export` keyword can appear separately from the declaration. This is useful for renaming props, for example in the case of a reserved word:

```svelte
<!--- file: App.svelte --->
<script>
	/** @type {string} */
	let className;

	// creates a `class` property, even
	// though it is a reserved word
	export { className as class };
</script>
```

# $$props and $$restProps

In runes mode, getting an object containing all the props that were passed in is easy, using the [`$props`]($props) rune.

In legacy mode, we use `$$props` and `$$restProps`:

- `$$props` contains all the props that were passed in, including ones that are not individually declared with the `export` keyword
- `$$restProps` contains all the props that were passed in *except* the ones that were individually declared

For example, a `<Button>` component might need to pass along all its props to its own `<button>` element, except the `variant` prop:

```svelte
<script>
	export let variant;
</script>

<button {...$$restProps} class="variant-{variant} {$$props.class ?? ''}">
	click me
</button>

<style>
	.variant-danger {
		background: red;
	}
</style>
```

In Svelte 3/4 using `$$props` and `$$restProps` creates a modest performance penalty, so they should only be used when needed.
