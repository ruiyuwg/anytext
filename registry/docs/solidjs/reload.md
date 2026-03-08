Response helpers

# reload

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/response-helpers/reload.mdx)

The `reload` function returns a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object that instructs the router to revalidate specific queries when returned or thrown from a [query](/solid-router/reference/data-apis/query) or [action](/solid-router/concepts/actions).

***

## [Import](/solid-router/reference/response-helpers/reload#import)

```
import { reload } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/response-helpers/reload#type)

```
function reload(init?: {  revalidate?: string | string[];  headers?: HeadersInit;  status?: number;  statusText?: string;}): CustomResponse<never>;
```

***

## [Parameters](/solid-router/reference/response-helpers/reload#parameters)

### [`init`](/solid-router/reference/response-helpers/reload#init)

- **Type:** `{ revalidate?: string | string[]; headers?: HeadersInit; status?: number; statusText?: string; }`
- **Required:** No

An optional configuration object with the following properties:

#### [`revalidate`](/solid-router/reference/response-helpers/reload#revalidate)

- **Type:** `string | string[]`
- **Required:** No

A query key or an array of query keys to revalidate.

#### [`headers`](/solid-router/reference/response-helpers/reload#headers)

- **Type:** `HeadersInit`
- **Required:** No

An object containing any headers to be sent with the response.

#### [`status`](/solid-router/reference/response-helpers/reload#status)

- **Type:** `number`
- **Required:** No

The HTTP status code of the response. Defaults to [`200 OK`](http://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/200).

#### [`statusText`](/solid-router/reference/response-helpers/reload#statustext)

- **Type:** `string`
- **Required:** No

The status text associated with the status code.

***

## [Examples](/solid-router/reference/response-helpers/reload#examples)

### [Basic Usage](/solid-router/reference/response-helpers/reload#basic-usage)

```
import { action, reload } from "@solidjs/router";
const savePreferencesAction = action(async () => {  // ... Saves the user preferences.
  // Only revalidate the "userPreferences" query.  return reload({ revalidate: ["userPreferences"] });}, "savePreferences");
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/response-helpers/reload.mdx\&page=https://docs.solidjs.com/solid-router/reference/response-helpers/reload)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   1. [init](#init)
5. [Examples](#examples)
   1. [Basic Usage](#basic-usage)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/response-helpers/reload.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/response-helpers/reload.mdx\&page=https://docs.solidjs.com/solid-router/reference/response-helpers/reload)
