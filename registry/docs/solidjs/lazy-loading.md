Advanced concepts

# Lazy loading

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/advanced-concepts/lazy-loading.mdx)

Lazy loading allows you to load only the necessary resources when they are needed. This can be useful when you have a large application with a lot of routes and components, and you want to reduce the initial load time.

In Solid Router, you can lazy load components using the `lazy` function from Solid:

```
import { lazy } from "solid-js";import { Router, Route } from "@solidjs/router";
const Home = lazy(() => import("./Home"));
const Users = lazy(() => import("./Users"));
const App = () => (  <Router>    <Route path="/" component={Home} />    <Route path="/users" component={Users} />  </Router>);
```

In the example above, the `Users` component is lazy loaded using the `lazy` function. The `lazy` function takes a function that returns a promise, which resolves to the component you want to load. When the route is matched, the component will be loaded and rendered.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/advanced-concepts/lazy-loading.mdx\&page=https://docs.solidjs.com/solid-router/advanced-concepts/lazy-loading)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/advanced-concepts/lazy-loading.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/advanced-concepts/lazy-loading.mdx\&page=https://docs.solidjs.com/solid-router/advanced-concepts/lazy-loading)
