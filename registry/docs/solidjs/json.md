Response helpers

# json

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/response-helpers/json.mdx)

The `json` function returns a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object that contains the provided data. It is intended for sending JSON data from a [query](/solid-router/reference/data-apis/query) or [action](/solid-router/concepts/actions) while also allowing configuration of query revalidation.

This works both in client and server (e.g., using a server function) environments.

***

## [Import](/solid-router/reference/response-helpers/json#import)

```
import { json } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/response-helpers/json#type)

```
function json<T>(  data: T,  init: {    revalidate?: string | string[];    headers?: HeadersInit;    status?: number;    statusText?: string;  } = {}): CustomResponse<T>;
```

***

## [Parameters](/solid-router/reference/response-helpers/json#parameters)

### [`data`](/solid-router/reference/response-helpers/json#data)

- **Type:** `T`
- **Required:** Yes

The data to be serialized as JSON in the response body. It must be a value that can be serialized with [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

### [`init`](/solid-router/reference/response-helpers/json#init)

- **Type:** `{ revalidate?: string | string[]; headers?: HeadersInit; status?: number; statusText?: string; }`
- **Required:** No

An optional configuration object with the following properties:

#### [`revalidate`](/solid-router/reference/response-helpers/json#revalidate)

- **Type:** `string | string[]`
- **Required:** No

A query key or an array of query keys to revalidate. Passing an empty array (`[]`) disables query revalidation entirely.

#### [`headers`](/solid-router/reference/response-helpers/json#headers)

- **Type:** `HeadersInit`
- **Required:** No

An object containing any headers to be sent with the response.

#### [`status`](/solid-router/reference/response-helpers/json#status)

- **Type:** `number`
- **Required:** No

The HTTP status code of the response. Defaults to [`200 OK`](http://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/200).

#### [`statusText`](/solid-router/reference/response-helpers/json#statustext)

- **Type:** `string`
- **Required:** No

The status text associated with the status code.

***

## [Examples](/solid-router/reference/response-helpers/json#examples)

### [Invalidating Data After a Mutation](/solid-router/reference/response-helpers/json#invalidating-data-after-a-mutation)

```
import { For } from "solid-js";import { query, action, json, createAsync } from "@solidjs/router";
const getCurrentUserQuery = query(async () => {  return await fetch("/api/me").then((response) => response.json());}, "currentUser");
const getPostsQuery = query(async () => {  return await fetch("/api/posts").then((response) => response.json());}, "posts");
const createPostAction = action(async (formData: FormData) => {  const title = formData.get("title")?.toString();  const newPost = await fetch("/api/posts", {    method: "POST",    body: JSON.stringify({ title }),  }).then((response) => response.json());
  // Only revalidate the "posts" query.  return json(newPost, { revalidate: "posts" });}, "createPost");
function Posts() {  const currentUser = createAsync(() => getCurrentUserQuery());  const posts = createAsync(() => getPostsQuery());
  return (    <div>      <p>Welcome back {currentUser()?.name}</p>      <ul>        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>      </ul>      <form action={createPostAction} method="post">        <input name="title" />        <button>Create Post</button>      </form>    </div>  );}
```

***

## [Related](/solid-router/reference/response-helpers/json#related)

- [`query`](/solid-router/reference/data-apis/query)
- [`action`](/solid-router/reference/data-apis/action)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/response-helpers/json.mdx\&page=https://docs.solidjs.com/solid-router/reference/response-helpers/json)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   1. [data](#data)
   2. [init](#init)
5. [Examples](#examples)
   1. [Invalidating Data After a Mutation](#invalidating-data-after-a-mutation)
6. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/response-helpers/json.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/response-helpers/json.mdx\&page=https://docs.solidjs.com/solid-router/reference/response-helpers/json)
