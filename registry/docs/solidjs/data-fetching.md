Guides

# Data fetching

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/guides/data-fetching.mdx)

This guide provides practical examples of common data-fetching tasks in SolidStart.

Here's an example showing how to create a [`query`](/solid-router/reference/data-apis/query) and access its data with the [`createAsync` primitive](/solid-router/reference/data-apis/create-async):

TypeScriptJavaScript

```
// src/routes/index.tsximport { For } from "solid-js";import { query, createAsync } from "@solidjs/router";
const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <For each={posts()}>{(post) => <li>{post.title}</li>}</For>    </ul>  );}
```

```
// src/routes/index.jsximport { For } from "solid-js";import { query, createAsync } from "@solidjs/router";
const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <For each={posts()}>{(post) => <li>{post.title}</li>}</For>    </ul>  );}
```

***

## [Showing loading UI](/solid-start/guides/data-fetching#showing-loading-ui)

To show a loading UI during data fetching:

1. Import [`Suspense`](/reference/components/suspense) from `solid-js`.
2. Wrap your data rendering in `<Suspense>`, and use the `fallback` prop to show a component during data fetching.

TypeScriptJavaScript

```
// src/routes/index.tsximport { Suspense, For } from "solid-js";import { query, createAsync } from "@solidjs/router";
const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <Suspense fallback={<div>Loading...</div>}>        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>      </Suspense>    </ul>  );}
```

```
// src/routes/index.jsximport { Suspense, For } from "solid-js";import { query, createAsync } from "@solidjs/router";
const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <Suspense fallback={<div>Loading...</div>}>        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>      </Suspense>    </ul>  );}
```

***

## [Handling errors](/solid-start/guides/data-fetching#handling-errors)

To show a fallback UI if the data fetching fails:

1. Import [`ErrorBoundary`](/reference/components/error-boundary) from `solid-js`.
2. Wrap the data rendering in `<ErrorBoundary>`, and use the `fallback` prop to show a component if an error occurs.

TypeScriptJavaScript

```
// src/routes/index.tsximport { ErrorBoundary, Suspense, For } from "solid-js";import { query, createAsync } from "@solidjs/router";
const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <Suspense fallback={<div>Loading...</div>}>          <For each={posts()}>{(post) => <li>{post.title}</li>}</For>        </Suspense>      </ErrorBoundary>    </ul>  );}
```

```
// src/routes/index.jsximport { ErrorBoundary, Suspense, For } from "solid-js";import { query, createAsync } from "@solidjs/router";
const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <Suspense fallback={<div>Loading...</div>}>          <For each={posts()}>{(post) => <li>{post.title}</li>}</For>        </Suspense>      </ErrorBoundary>    </ul>  );}
```

***

## [Preloading data](/solid-start/guides/data-fetching#preloading-data)

To preload data before a route renders:

1. Export a `route` object with a [`preload`](/solid-router/reference/preload-functions/preload) function.
2. Run your query inside the `preload` function.
3. Use the query as usual in your component.

TypeScriptJavaScript

```
// src/routes/index.tsximport { ErrorBoundary } from "solid-js";import { query, createAsync, type RouteDefinition } from "@solidjs/router";
const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
export const route = {  preload: () => getPosts(),} satisfies RouteDefinition;
export default function Page() {  const post = createAsync(() => getPosts());  return (    <div>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <h1>{post().title}</h1>      </ErrorBoundary>    </div>  );}
```

```
// src/routes/index.jsximport { ErrorBoundary } from "solid-js";import { query, createAsync } from "@solidjs/router";
const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
export const route = {  preload: () => getPosts(),};
export default function Page() {  const post = createAsync(() => getPosts());  return (    <div>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <h1>{post().title}</h1>      </ErrorBoundary>    </div>  );}
```

***

## [Passing parameters to queries](/solid-start/guides/data-fetching#passing-parameters-to-queries)

When creating a query that accepts parameters, define your query function to take any number of parameters:

TypeScriptJavaScript

```
// src/routes/posts/[id]/index.tsximport { ErrorBoundary } from "solid-js";import { query, createAsync, type RouteDefinition } from "@solidjs/router";
const getPost = query(async (id: string) => {  const post = await fetch(`https://my-api.com/posts/${id}`);  return await post.json();}, "post");
export const route = {  preload: ({ params }) => getPost(params.id),} satisfies RouteDefinition;
export default function Page() {  const postId = 1;  const post = createAsync(() => getPost(postId));  return (    <div>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <h1>{post().title}</h1>      </ErrorBoundary>    </div>  );}
```

```
// src/routes/posts/[id]/index.jsximport { ErrorBoundary } from "solid-js";import { query, createAsync } from "@solidjs/router";
const getPost = query(async (id) => {  const post = await fetch(`https://my-api.com/posts/${id}`);  return await post.json();}, "post");
export const route = {  preload: ({ params }) => getPost(params.id),};
export default function Page() {  const postId = 1;  const post = createAsync(() => getPost(postId));  return (    <div>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <h1>{post().title}</h1>      </ErrorBoundary>    </div>  );}
```

***

## [Using a database or an ORM](/solid-start/guides/data-fetching#using-a-database-or-an-orm)

To safely interact with your database or ORM in a query, use a [server function](/solid-start/reference/server/use-server):

TypeScriptJavaScript

```
// src/routes/index.tsximport { For, ErrorBoundary } from "solid-js";import { query, createAsync, type RouteDefinition } from "@solidjs/router";import { db } from "~/lib/db";
const getPosts = query(async () => {  "use server";  return await db.from("posts").select();}, "posts");
export const route = {  preload: () => getPosts(),} satisfies RouteDefinition;
export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>      </ErrorBoundary>    </ul>  );}
```

```
// src/routes/index.jsximport { For, ErrorBoundary } from "solid-js";import { query, createAsync } from "@solidjs/router";import { db } from "~/lib/db";
const getPosts = query(async () => {  "use server";  return await db.from("posts").select();}, "posts");
export const route = {  preload: () => getPosts(),};
export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>      </ErrorBoundary>    </ul>  );}
```

***

## [Fetching data on the client](/solid-start/guides/data-fetching#fetching-data-on-the-client)

To fetch data only on the client, use the [`createResource`](/reference/basic-reactivity/create-resource) primitive:

TypeScriptJavaScript

```
// src/routes/index.tsximport { createResource, ErrorBoundary, Suspense, For } from "solid-js";
export default function Page() {  const [posts] = createResource(async () => {    const posts = await fetch("https://my-api.com/posts");    return await posts.json();  });  return (    <ul>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <Suspense fallback={<div>Loading...</div>}>          <For each={posts()}>{(post) => <li>{post.title}</li>}</For>        </Suspense>      </ErrorBoundary>    </ul>  );}
```

```
// src/routes/index.jsximport { createResource, ErrorBoundary, Suspense, For } from "solid-js";
export default function Page() {  const [posts] = createResource(async () => {    const posts = await fetch("https://my-api.com/posts");    return await posts.json();  });  return (    <ul>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <Suspense fallback={<div>Loading...</div>}>          <For each={posts()}>{(post) => <li>{post.title}</li>}</For>        </Suspense>      </ErrorBoundary>    </ul>  );}
```

See the [`createResource`](/reference/basic-reactivity/create-resource) API reference for more information.

Advanced Data Handling

For advanced features like automatic background re-fetching or infinite queries, you can use [TanStack Query](https://tanstack.com/query/latest/docs/framework/solid/overview).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/guides/data-fetching.mdx\&page=https://docs.solidjs.com/solid-start/guides/data-fetching)

On this page

1. [Overview](#_top)
2. [Showing loading UI](#showing-loading-ui)
3. [Handling errors](#handling-errors)
4. [Preloading data](#preloading-data)
5. [Passing parameters to queries](#passing-parameters-to-queries)
6. [Using a database or an ORM](#using-a-database-or-an-orm)
7. [Fetching data on the client](#fetching-data-on-the-client)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/guides/data-fetching.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/guides/data-fetching.mdx\&page=https://docs.solidjs.com/solid-start/guides/data-fetching)
