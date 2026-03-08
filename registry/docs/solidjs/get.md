Server

# GET

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/get.mdx)

`GET` helps to create a server function which is accessed via an [HTTP GET request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET). When this function is called, arguments are serialized into the URL, thus allowing the use of [HTTP cache-control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) headers.

For example, `GET` can be used to make a streaming promise with a 60 second cache life:

```
import { json } from "@solidjs/router";import { GET } from "@solidjs/start";
const hello = GET(async (name: string) => {  "use server";  return json(    { hello: new Promise<string>((r) => setTimeout(() => r(name), 1000)) },    { headers: { "cache-control": "max-age=60" } }  );});
```

***

## [Parameters](/solid-start/reference/server/get#parameters)

`GET<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T>`

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/server/get.mdx\&page=https://docs.solidjs.com/solid-start/reference/server/get)

On this page

1. [Overview](#_top)
2. [Parameters](#parameters)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/get.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/server/get.mdx\&page=https://docs.solidjs.com/solid-start/reference/server/get)
