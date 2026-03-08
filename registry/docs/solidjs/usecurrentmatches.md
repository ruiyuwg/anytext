Primitives

# useCurrentMatches

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-current-matches.mdx)

`useCurrentMatches` returns all the matches for the current matched route. Useful for getting all the route information.

For example if you stored breadcrumbs on your route definition you could retrieve them like so:

```
const matches = useCurrentMatches();const breadcrumbs = createMemo(() =>  matches().map((m) => m.route.info.breadcrumb));
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/primitives/use-current-matches.mdx\&page=https://docs.solidjs.com/solid-router/reference/primitives/use-current-matches)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-current-matches.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/primitives/use-current-matches.mdx\&page=https://docs.solidjs.com/solid-router/reference/primitives/use-current-matches)
