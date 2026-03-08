Components

# Route

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/components/route.mdx)

`Route` is the component used when defining the routes of an application. This component is used to define the structure of the application and the components that will be rendered for each route.

Multiple paths

Routes support defining multiple paths using an array. This is useful for when you want a route to remain mounted and not re-render when switching between two or more locations that it matches:

```
<Route path={["/login", "/register"]} component={Login} />
```

This would mean navigating from `/login` to `/register` would not cause the `Login` component to re-render.

prop

type

description

path

`string | string[]`

Path partial for defining the route segment

component

`Component`

Component that will be rendered for the matched segment

matchFilters

`MatchFilters`

Additional constraints for matching against the route

children

`JSX.Element`

Nested `<Route>` definitions

preload

`RoutePreloadFunc`

Function called during preload or when the route is navigated to.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/components/route.mdx\&page=https://docs.solidjs.com/solid-router/reference/components/route)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/components/route.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/components/route.mdx\&page=https://docs.solidjs.com/solid-router/reference/components/route)
