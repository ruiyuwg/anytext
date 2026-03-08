Getting started

# Install and configure

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/getting-started/installation-and-setup.mdx)

Prerequisites

If using Solid `v1.0`, use version `0.27.x` or greater. For earlier versions (eg. `v0.x`), you must use `v0.26.x`.

***

## [Installation](/solid-meta/getting-started/installation-and-setup#installation)

To get started, install using your preferred package manager.

npmpnpmyarnbundeno

```
npm i @solidjs/meta
```

```
pnpm i @solidjs/meta
```

```
yarn add @solidjs/meta
```

```
bun i @solidjs/meta
```

```
deno add npm:@solidjs/meta
```

***

## [Setup](/solid-meta/getting-started/installation-and-setup#setup)

1. Wrap your application with [`<MetaProvider />`](/solid-meta/reference/meta/metaprovider)
2. To include head tags within your application, render any of the following:
   1. [`<Title />`](/solid-meta/reference/meta/title): Adds the `title` of the page.
   2. [`<Meta />`](/solid-meta/reference/meta/meta): Adds extra metadata to the page.
   3. [`<Style />`](/solid-meta/reference/meta/style): Adds a `style` element to the page.
   4. [`<Link />`](/solid-meta/reference/meta/link): Specifies a relationship between the page and an external resource.
   5. [`<Base />`](/solid-meta/reference/meta/base): Specifies the base URL for all relative URLs in the document.
   6. [`useHead`](/solid-meta/reference/meta/use-head): Inserts arbitrary head tags when a dedicated component does not exist.

- These components can be used multiple times within the application.

3. If using Solid on the server with JSX, no additional configuration is required.

Here is an example of how your code might look after this setup.

```
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
const App = () => (  <MetaProvider>    <div class="Home">      <Title>Title of page</Title>      <Link rel="canonical" href="http://solidjs.com/" />      <Meta name="example" content="whatever" />    </div>  </MetaProvider>);
```

On the server, tags are collected, and then on the client, server-generated tags are replaced with those rendered on the client side. This process is important for maintaining the expected behavior, such as Single Page Applications (SPAs) when pages load that require changes to the head tags.

However, you can manage asset insertion using `getAssets` from `solid-js/web`.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-meta/getting-started/installation-and-setup.mdx\&page=https://docs.solidjs.com/solid-meta/getting-started/installation-and-setup)

On this page

1. [Overview](#_top)
2. [Installation](#installation)
3. [Setup](#setup)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/getting-started/installation-and-setup.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-meta/getting-started/installation-and-setup.mdx\&page=https://docs.solidjs.com/solid-meta/getting-started/installation-and-setup)
