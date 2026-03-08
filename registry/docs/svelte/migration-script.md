## Migration script

By now you should have a pretty good understanding of the before/after and how the old syntax relates to the new syntax. It probably also became clear that a lot of these migrations are rather technical and repetitive — something you don't want to do by hand.

We thought the same, which is why we provide a migration script to do most of the migration automatically. You can upgrade your project by using `npx sv migrate svelte-5`. This will do the following things:

- bump core dependencies in your `package.json`
- migrate to runes (`let` → `$state` etc)
- migrate to event attributes for DOM elements (`on:click` → `onclick`)
- migrate slot creations to render tags (`<slot />` → `{@render children()}`)
- migrate slot usages to snippets (`<div slot="x">...</div>` → `{#snippet x()}<div>...</div>{/snippet}`)
- migrate obvious component creations (`new Component(...)` → `mount(Component, ...)`)

You can also migrate a single component in VS Code through the `Migrate Component to Svelte 5 Syntax` command, or in our Playground through the `Migrate` button.

Not everything can be migrated automatically, and some migrations need manual cleanup afterwards. The following sections describe these in more detail.

### run

You may see that the migration script converts some of your `$:` statements to a `run` function which is imported from `svelte/legacy`. This happens if the migration script couldn't reliably migrate the statement to a `$derived` and concluded this is a side effect instead. In some cases this may be wrong and it's best to change this to use a `$derived` instead. In other cases it may be right, but since `$:` statements also ran on the server but `$effect` does not, it isn't safe to transform it as such. Instead, `run` is used as a stopgap solution. `run` mimics most of the characteristics of `$:`, in that it runs on the server once, and runs as `$effect.pre` on the client (`$effect.pre` runs *before* changes are applied to the DOM; most likely you want to use `$effect` instead).

```svelte
<script>
	---import { run } from 'svelte/legacy';---
	---run(() => {---
	+++$effect(() => {+++
		// some side effect code
	})
</script>
```

### Event modifiers

Event modifiers are not applicable to event attributes (e.g. you can't do `onclick|preventDefault={...}`). Therefore, when migrating event directives to event attributes, we need a function-replacement for these modifiers. These are imported from `svelte/legacy`, and should be migrated away from in favor of e.g. just using `event.preventDefault()`.

```svelte
<script>
	---import { preventDefault } from 'svelte/legacy';---
</script>

<button
	onclick={---preventDefault---((event) => {
		+++event.preventDefault();+++
		// ...
	})}
>
	click me
</button>
```

### Things that are not automigrated

The migration script does not convert `createEventDispatcher`. You need to adjust those parts manually. It doesn't do it because it's too risky because it could result in breakage for users of the component, which the migration script cannot find out.

The migration script does not convert `beforeUpdate/afterUpdate`. It doesn't do it because it's impossible to determine the actual intent of the code. As a rule of thumb you can often go with a combination of `$effect.pre` (runs at the same time as `beforeUpdate` did) and `tick` (imported from `svelte`, allows you to wait until changes are applied to the DOM and then do some work).
