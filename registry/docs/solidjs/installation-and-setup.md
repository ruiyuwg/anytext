Getting started

# Installation and setup

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/getting-started/installation-and-setup.mdx)

Solid Router is the universal router for Solid which works for rendering on the client or the server. It was inspired by and combines paradigms of [React Router](https://reactrouter.com/en/main) and the [Ember Router](https://guides.emberjs.com/release/routing/).

A router provides a way to change a user's view based on the URL in the browser. This allows a "single-page" application to simulate a traditional multipage site. To use Solid Router, components called Routes that depend on the value of the URL (the "path") are specified, and the router handles the mechanism of swapping them in and out.

***

## [Setup](/solid-router/getting-started/installation-and-setup#setup)

To get started with Solid Router, install it using your preferred package manager.

npmpnpmyarnbundeno

```
npm i @solidjs/router
```

```
pnpm i @solidjs/router
```

```
yarn add @solidjs/router
```

```
bun i @solidjs/router
```

```
deno add npm:@solidjs/router
```

***

## [Configure the routes](/solid-router/getting-started/installation-and-setup#configure-the-routes)

The [`Router`](/solid-router/reference/components/router) component is the root component of the router. It is responsible for managing the URL and rendering the appropriate [`Route`](/solid-router/reference/components/route) based on the URL.

To configure your routes, import the `Router` component and then start the application by rendering the router component.

```
import { render } from "solid-js/web";import { Router } from "@solidjs/router";
const wrapper = document.getElementById("app");
if (!wrapper) {  throw new Error("Wrapper div not found");}
render(() => <Router />, wrapper);
```

This sets up the router that will match on the url and render the appropriate route.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/getting-started/installation-and-setup.mdx\&page=https://docs.solidjs.com/solid-router/getting-started/installation-and-setup)

On this page

1. [Overview](#_top)
2. [Setup](#setup)
3. [Configure the routes](#configure-the-routes)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/getting-started/installation-and-setup.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/getting-started/installation-and-setup.mdx\&page=https://docs.solidjs.com/solid-router/getting-started/installation-and-setup)
