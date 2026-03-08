Routing

# FileRoutes

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/routing/file-routes.mdx)

`FileRoutes` is a component that creates a [`Route`](/solid-router/reference/components/route) for each file in the `/src/routes` directory. This creates a `route` export to define the route configuration for the router of your choice.

For example, using [`solid-router`](/solid-router) would look like the following:

```
import { Suspense } from "solid-js";import { Router } from "@solidjs/router";import { FileRoutes } from "@solidjs/start/router";
export default function App() {  return (    <Router root={(props) => <Suspense>{props.children}</Suspense>}>      <FileRoutes />    </Router>  );}
```

See the [SolidStart routing guide](/solid-start/building-your-application/routing) for more details.

caution

If removing the `FileRoutes` component from your `app.tsx` file, you will need to manually add all of your routes.

While this is possible it does come with tradeoffs. For example, optimizations such as preloaded script tags will no longer be available.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/routing/file-routes.mdx\&page=https://docs.solidjs.com/solid-start/reference/routing/file-routes)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/routing/file-routes.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/routing/file-routes.mdx\&page=https://docs.solidjs.com/solid-start/reference/routing/file-routes)
