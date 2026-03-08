Response helpers

# redirect

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/response-helpers/redirect.mdx)

The `redirect` function returns a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object that instructs the router to navigate to a different route when returned or thrown from a [query](/solid-router/reference/data-apis/query) or [action](/solid-router/concepts/actions).

This works both in client and server (e.g., using a server function) environments.

***

## [Import](/solid-router/reference/response-helpers/redirect#import)

```
import { redirect } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/response-helpers/redirect#type)

```
function redirect(  url: string,  init?:    | number    | {        revalidate?: string | string[];        headers?: HeadersInit;        status?: number;        statusText?: string;      }): CustomResponse<never>;
```

***

## [Parameters](/solid-router/reference/response-helpers/redirect#parameters)

### [`url`](/solid-router/reference/response-helpers/redirect#url)

- **Type:** `string`
- **Required:** Yes

The absolute or relative URL to which the redirect should occur.

### [`init`](/solid-router/reference/response-helpers/redirect#init)

- **Type:** `number | { revalidate?: string | string[]; headers?: HeadersInit; status?: number; statusText?: string; }`
- **Required:** No

Either a number representing the status code or a configuration object with the following properties:

#### [`revalidate`](/solid-router/reference/response-helpers/redirect#revalidate)

- **Type:** `string | string[]`
- **Required:** No

A query key or an array of query keys to revalidate on the destination route.

#### [`status`](/solid-router/reference/response-helpers/redirect#status)

- **Type:** `number`
- **Required:** No

The HTTP status code for the redirect. Defaults to [`302 Found`)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/302).

***

## [Examples](/solid-router/reference/response-helpers/redirect#examples)

### [Basic Usage](/solid-router/reference/response-helpers/redirect#basic-usage)

```
import { query, redirect } from "@solidjs/router";
const getCurrentUserQuery = query(async () => {  const response = await fetch("/api/me");
  if (response.status === 401) {    return redirect("/login");  }
  return await response.json();}, "currentUser");
```

### [Configuring Query Revalidation](/solid-router/reference/response-helpers/redirect#configuring-query-revalidation)

```
import { action, redirect } from "@solidjs/router";
const loginAction = action(async (formData: FormData) => {  const username = formData.get("username")?.toString();  const password = formData.get("password")?.toString();
  await fetch("/api/login", {    method: "POST",    body: JSON.stringify({ username, password }),  }).then((response) => response.json());
  return redirect("/users", { revalidate: ["currentUser"] });}, "login");
```

***

## [Related](/solid-router/reference/response-helpers/redirect#related)

- [`query`](/solid-router/reference/data-apis/query)
- [`action`](/solid-router/reference/data-apis/action)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/response-helpers/redirect.mdx\&page=https://docs.solidjs.com/solid-router/reference/response-helpers/redirect)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   1. [url](#url)
   2. [init](#init)
5. [Examples](#examples)
   1. [Basic Usage](#basic-usage)
   2. [Configuring Query Revalidation](#configuring-query-revalidation)
6. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/response-helpers/redirect.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/response-helpers/redirect.mdx\&page=https://docs.solidjs.com/solid-router/reference/response-helpers/redirect)
