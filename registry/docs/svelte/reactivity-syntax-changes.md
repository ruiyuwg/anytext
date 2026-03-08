## Reactivity syntax changes

At the heart of Svelte 5 is the new runes API. Runes are basically compiler instructions that inform Svelte about reactivity. Syntactically, runes are functions starting with a dollar-sign.

### let → $state

In Svelte 4, a `let` declaration at the top level of a component was implicitly reactive. In Svelte 5, things are more explicit: a variable is reactive when created using the `$state` rune. Let's migrate the counter to runes mode by wrapping the counter in `$state`:

```svelte
<script>
	let count = +++$state(0)+++;
</script>
```

Nothing else changes. `count` is still the number itself, and you read and write directly to it, without a wrapper like `.value` or `getCount()`.

> \[!DETAILS] Why we did this
> `let` being implicitly reactive at the top level worked great, but it meant that reactivity was constrained — a `let` declaration anywhere else was not reactive. This forced you to resort to using stores when refactoring code out of the top level of components for reuse. This meant you had to learn an entirely separate reactivity model, and the result often wasn't as nice to work with. Because reactivity is more explicit in Svelte 5, you can keep using the same API outside the top level of components. Head to [the tutorial](/tutorial) to learn more.

### $: → $derived/$effect

In Svelte 4, a `$:` statement at the top level of a component could be used to declare a derivation, i.e. state that is entirely defined through a computation of other state. In Svelte 5, this is achieved using the `$derived` rune:

```svelte
<script>
	let count = $state(0);
	---$:--- +++const+++ double = +++$derived(count * 2)+++;
</script>
```

As with `$state`, nothing else changes. `double` is still the number itself, and you read it directly, without a wrapper like `.value` or `getDouble()`.

A `$:` statement could also be used to create side effects. In Svelte 5, this is achieved using the `$effect` rune:

```svelte
<script>
	let count = $state(0);

	---$:---+++$effect(() =>+++ {
		if (count > 5) {
			alert('Count is too high!');
		}
	}+++);+++
</script>
```

Note that [when `$effect` runs is different]($effect#Understanding-dependencies) than when `$:` runs.

> \[!DETAILS] Why we did this
> `$:` was a great shorthand and easy to get started with: you could slap a `$:` in front of most code and it would somehow work. This intuitiveness was also its drawback the more complicated your code became, because it wasn't as easy to reason about. Was the intent of the code to create a derivation, or a side effect? With `$derived` and `$effect`, you have a bit more up-front decision making to do (spoiler alert: 90% of the time you want `$derived`), but future-you and other developers on your team will have an easier time.
>
> There were also gotchas that were hard to spot:
>
> - `$:` only updated directly before rendering, which meant you could read stale values in-between rerenders
> - `$:` only ran once per tick, which meant that statements may run less often than you think
> - `$:` dependencies were determined through static analysis of the dependencies. This worked in most cases, but could break in subtle ways during a refactoring where dependencies would be for example moved into a function and no longer be visible as a result
> - `$:` statements were also ordered by using static analysis of the dependencies. In some cases there could be ties and the ordering would be wrong as a result, needing manual interventions. Ordering could also break while refactoring code and some dependencies no longer being visible as a result.
>
> Lastly, it wasn't TypeScript-friendly (our editor tooling had to jump through some hoops to make it valid for TypeScript), which was a blocker for making Svelte's reactivity model truly universal.
>
> `$derived` and `$effect` fix all of these by
>
> - always returning the latest value
> - running as often as needed to be stable
> - determining the dependencies at runtime, and therefore being immune to refactorings
> - executing dependencies as needed and therefore being immune to ordering problems
> - being TypeScript-friendly

### export let → $props

In Svelte 4, properties of a component were declared using `export let`. Each property was one declaration. In Svelte 5, all properties are declared through the `$props` rune, through destructuring:

```svelte
<script>
	---export let optional = 'unset';---
	---export let required;---
	+++let { optional = 'unset', required } = $props();+++
</script>
```

There are multiple cases where declaring properties becomes less straightforward than having a few `export let` declarations:

- you want to rename the property, for example because the name is a reserved identifier (e.g. `class`)
- you don't know which other properties to expect in advance
- you want to forward every property to another component

All these cases need special syntax in Svelte 4:

- renaming: `export { klass as class}`
- other properties: `$$restProps`
- all properties `$$props`

In Svelte 5, the `$props` rune makes this straightforward without any additional Svelte-specific syntax:

- renaming: use property renaming `let { class: klass } = $props();`
- other properties: use spreading `let { foo, bar, ...rest } = $props();`
- all properties: don't destructure `let props = $props();`

```svelte
<script>
	---let klass = '';---
	---export { klass as class};---
	+++let { class: klass, ...rest } = $props();+++
</script>
<button class={klass} {...---$$restProps---+++rest+++}>click me</button>
```

> \[!DETAILS] Why we did this
> `export let` was one of the more controversial API decisions, and there was a lot of debate about whether you should think about a property being `export`ed or `import`ed. `$props` doesn't have this trait. It's also in line with the other runes, and the general thinking reduces to "everything special to reactivity in Svelte is a rune".
>
> There were also a lot of limitations around `export let`, which required additional API, as shown above. `$props` unite this in one syntactical concept that leans heavily on regular JavaScript destructuring syntax.
