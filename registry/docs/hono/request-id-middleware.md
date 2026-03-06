# Request ID Middleware

Request ID Middleware generates a unique ID for each request, which you can use in your handlers.

::: info
**Node.js**: This middleware uses `crypto.randomUUID()` to generate IDs. The global `crypto` was introduced in Node.js version 20 or later. Therefore, errors may occur in versions earlier than that. In that case, please specify `generator`. However, if you are using [the Node.js adapter](https://github.com/honojs/node-server), it automatically sets `crypto` globally, so this is not necessary.
:::

## Import

```ts
import { Hono } from "hono";
import { requestId } from "hono/request-id";
```

## Usage

You can access the Request ID through the `requestId` variable in the handlers and middleware to which the Request ID Middleware is applied.

```ts
const app = new Hono();

app.use("*", requestId());

app.get("/", (c) => {
  return c.text(`Your request id is ${c.get("requestId")}`);
});
```

If you want to explicitly specify the type, import `RequestIdVariables` and pass it in the generics of `new Hono()`.

```ts
import type { RequestIdVariables } from "hono/request-id";

const app = new Hono<{
  Variables: RequestIdVariables;
}>();
```

### Set Request ID

You set a custom request ID in the header (default: `X-Request-Id`), the middleware will use that value instead of generating a new one:

```ts
const app = new Hono();

app.use("*", requestId());

app.get("/", (c) => {
  return c.text(`${c.get("requestId")}`);
});

const res = await app.request("/", {
  headers: {
    "X-Request-Id": "your-custom-id",
  },
});
console.log(await res.text()); // your-custom-id
```

If you want to disable this feature, set [`headerName` option](#headername-string) to an empty string.

## Options

### <Badge type="info" text="optional" /> limitLength: `number`

The maximum length of the request ID. The default is `255`.

### <Badge type="info" text="optional" /> headerName: `string`

The header name used for the request ID. The default is `X-Request-Id`.

### <Badge type="info" text="optional" /> generator: `(c: Context) => string`

The request ID generation function. By default, it uses `crypto.randomUUID()`.

## Platform specific Request IDs

Some platform (such as AWS Lambda) already generate their own Request IDs per request.
Without any additional configuration, this middleware is unaware of these specific Request IDs
and generates a new Request ID. This can lead to confusion when looking at your application logs.

To unify these IDs, use the `generator` function to capture the platform specific Request ID and to use it in this middleware.

### Platform specific links

- AWS Lambda
  - [AWS documentation: Context object](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html)
  - [Hono: Access AWS Lambda Object](/docs/getting-started/aws-lambda#access-aws-lambda-object)
- Cloudflare
  - [Cloudflare Ray ID
    ](https://developers.cloudflare.com/fundamentals/reference/cloudflare-ray-id/)
- Deno
  - [Request ID on the Deno Blog](https://deno.com/blog/zero-config-debugging-deno-opentelemetry#:~:text=s%20automatically%20have-,unique%20request%20IDs,-associated%20with%20them)
- Fastly
  - [Fastly documentation: req.xid](https://www.fastly.com/documentation/reference/vcl/variables/client-request/req-xid/)

# Pretty JSON Middleware

Pretty JSON middleware enables "_JSON pretty print_" for JSON response body.
Adding `?pretty` to url query param, the JSON strings are prettified.

```js
// GET /
{"project":{"name":"Hono","repository":"https://github.com/honojs/hono"}}
```

will be:

```js
// GET /?pretty
{
  "project": {
    "name": "Hono",
    "repository": "https://github.com/honojs/hono"
  }
}
```

## Import

```ts
import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
```

## Usage

```ts
const app = new Hono();

app.use(prettyJSON()); // With options: prettyJSON({ space: 4 })
app.get("/", (c) => {
  return c.json({ message: "Hono!" });
});
```

## Options

### <Badge type="info" text="optional" /> space: `number`

Number of spaces for indentation. The default is `2`.

### <Badge type="info" text="optional" /> query: `string`

The name of the query string for applying. The default is `pretty`.

### <Badge type="info" text="optional" /> force: `boolean`

When set to `true`, JSON responses are always prettified regardless of the query parameter. The default is `false`.
