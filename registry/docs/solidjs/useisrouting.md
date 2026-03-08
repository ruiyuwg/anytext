Primitives

# useIsRouting

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-is-routing.mdx)

The `useIsRouting` function is a utility for detecting when the router is processing a route transition.

***

## [Import](/solid-router/reference/primitives/use-is-routing#import)

```
import { useIsRouting } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/primitives/use-is-routing#type)

```
const useIsRouting: () => () => boolean;
```

***

## [Parameters](/solid-router/reference/primitives/use-is-routing#parameters)

None.

***

## [Return value](/solid-router/reference/primitives/use-is-routing#return-value)

**Type:** `() => boolean`

An accessor function that returns `true` during route transitions and `false` otherwise.

***

## [Examples](/solid-router/reference/primitives/use-is-routing#examples)

### [Route transition indicator](/solid-router/reference/primitives/use-is-routing#route-transition-indicator)

```
import { useIsRouting } from "@solidjs/router";
function App() {  const isRouting = useIsRouting();
  return (    <>      {isRouting() && <div class="loading-bar" />}      <MyContent />    </>  );}
```

***

## [Related](/solid-router/reference/primitives/use-is-routing#related)

- [`<Router>`](/solid-router/reference/components/router)
- [`useNavigate`](/solid-router/reference/primitives/use-navigate)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/primitives/use-is-routing.mdx\&page=https://docs.solidjs.com/solid-router/reference/primitives/use-is-routing)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
5. [Return value](#return-value)
6. [Examples](#examples)
   1. [Route transition indicator](#route-transition-indicator)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-is-routing.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/primitives/use-is-routing.mdx\&page=https://docs.solidjs.com/solid-router/reference/primitives/use-is-routing)
