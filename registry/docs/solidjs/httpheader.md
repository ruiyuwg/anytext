Server

# HttpHeader

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/http-header.mdx)

`HttpHeader` provides a way to set headers on HTTPs response sent by the server.

```
import { HttpHeader } from "@solidjs/start";
<HttpHeader name="x-robots-tag" value="noindex" />;
```

***

## [Setting a header for catch-all routes](/solid-start/reference/server/http-header#setting-a-header-for-catch-all-routes)

```
import { HttpHeader, HttpStatusCode } from "@solidjs/start";
export default function NotFound() {  return (    <div>      <HttpStatusCode code={404} />      <HttpHeader name="my-header" value="header-value" />    </div>  );}
```

As a page is rendered, you may want to add additional HTTP headers to the response and the `HttpHeader` component will do that for you. By passing it a `name` and `value`, they will get added to the `Response` headers sent back to the browser.

When streaming responses with [`renderToStream`](/reference/rendering/render-to-stream), HTTP headers can only be added before the stream is first flushed. This requires adding `deferStream` to any resources that need to be loaded before responding.

***

## [Parameters](/solid-start/reference/server/http-header#parameters)

Property

Type

Description

name

string

The name of the header to set

value

string

The value of the header to set

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/server/http-header.mdx\&page=https://docs.solidjs.com/solid-start/reference/server/http-header)

On this page

1. [Overview](#_top)
2. [Setting a header for catch-all routes](#setting-a-header-for-catch-all-routes)
3. [Parameters](#parameters)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/http-header.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/server/http-header.mdx\&page=https://docs.solidjs.com/solid-start/reference/server/http-header)
