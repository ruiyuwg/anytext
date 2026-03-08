Entrypoints

# app.tsx

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/entrypoints/app.mdx)

The `App` component is the isomorphic (shared on server and browser) entry point into your application. This is where the code runs on both sides. This is like the classic entry point where you can define your router, and other top level components.

***

## [Basic example (with routing)](/solid-start/reference/entrypoints/app#basic-example-with-routing)

This is where routers setup navigation between the pages discovered by the [`FileRouter`](/solid-start/reference/routing/file-routes).

```
import { A, Router } from "@solidjs/router";import { FileRoutes } from "@solidjs/start/router";import { Suspense } from "solid-js";
export default function App() {  return (    <Router      root={(props) => (          <A href="/">Index</A>          <A href="/about">About</A>          <Suspense>{props.children}</Suspense>      )}    >      <FileRoutes />    </Router>  );}
```

See a similar example in [StackBlitz](https://stackblitz.com/github/solidjs/solid-start/tree/main/examples/basic?file=src%2Fapp.tsx)

***

## [Bare example (no routing)](/solid-start/reference/entrypoints/app#bare-example-no-routing)

Since SolidStart does not come packaged with a router, you can simply return your template of choice:

```
export default function App() {  return (    <main>      <h1>Hello world!</h1>    </main>  );}
```

See this example in [StackBlitz](https://stackblitz.com/github/solidjs/solid-start/tree/main/examples/bare?file=src%2Fapp.tsx)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/entrypoints/app.mdx\&page=https://docs.solidjs.com/solid-start/reference/entrypoints/app)

On this page

1. [Overview](#_top)
2. [Basic example (with routing)](#basic-example-with-routing)
3. [Bare example (no routing)](#bare-example-no-routing)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/entrypoints/app.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/entrypoints/app.mdx\&page=https://docs.solidjs.com/solid-start/reference/entrypoints/app)
