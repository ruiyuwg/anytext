Concepts

# Alternative routers

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/alternative-routers.mdx)

While the default router uses the browser's `location.pathname` to determine the current route, you can use alternative routers to change this behavior. This includes:

- [**Hash mode**](/solid-router/concepts/alternative-routers#hash-mode): Uses the hash portion of the URL to determine the current route.
- [**Memory mode**](/solid-router/concepts/alternative-routers#memory-mode): Keeps the history of the router in memory, useful for testing.

***

## [Hash mode](/solid-router/concepts/alternative-routers#hash-mode)

Hash mode routing uses the hash portion of the URL to manage an application's state and navigation. Unlike the [default router](/solid-router/reference/components/router), the hash portion of the URL will not be handled by the server meaning this is a client-side only routing. To use hash mode, replace the `<Router />` component in the application with [`<HashRouter />`](/solid-router/reference/components/hash-router).

```
import { render } from "solid-js/web";import {    Router    HashRouter,    Route    } from "@solidjs/router";
const App = (props) => (    <>        <h1>Root header</h1>        {props.children}    </>);
render(    () => <Router root={App}>{/*... routes */}</Router>,    () => <HashRouter root={App}>{/*... routes */}</HashRouter>,    document.getElementById("app"));
```

***

## [Memory mode](/solid-router/concepts/alternative-routers#memory-mode)

Unlike the default router and hash, the memory router does not interact with the browser's URL. This means that while the URL in the browser's address bar will change, the router will not navigate to the new route. This gives you the ability to control the router's state and history in memory which can be useful for testing purposes.

To use memory mode, replace the `<Router />` component in the application with [`<MemoryRouter />`](/solid-router/reference/components/memory-router):

```
import { render } from "solid-js/web";import {    Router    MemoryRouter,    Route    } from "@solidjs/router";
const App = (props) => (    <>        <h1>Root header</h1>        {props.children}    </>);
render(    () => <Router root={App}>{/*... routes */}</Router>,    () => <MemoryRouter root={App}>{/*... routes */}</MemoryRouter>,    document.getElementById("app"));
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/concepts/alternative-routers.mdx\&page=https://docs.solidjs.com/solid-router/concepts/alternative-routers)

On this page

1. [Overview](#_top)
2. [Hash mode](#hash-mode)
3. [Memory mode](#memory-mode)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/alternative-routers.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/concepts/alternative-routers.mdx\&page=https://docs.solidjs.com/solid-router/concepts/alternative-routers)
