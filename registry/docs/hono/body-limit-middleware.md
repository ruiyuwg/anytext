# Body Limit Middleware

The Body Limit Middleware can limit the file size of the request body.

This middleware first uses the value of the `Content-Length` header in the request, if present.
If it is not set, it reads the body in the stream and executes an error handler if it is larger than the specified file size.

## Import

```ts
import { Hono } from "hono";
import { bodyLimit } from "hono/body-limit";
```

## Usage

```ts
const app = new Hono();

app.post(
  "/upload",
  bodyLimit({
    maxSize: 50 * 1024, // 50kb
    onError: (c) => {
      return c.text("overflow :(", 413);
    },
  }),
  async (c) => {
    const body = await c.req.parseBody();
    if (body["file"] instanceof File) {
      console.log(`Got file sized: ${body["file"].size}`);
    }
    return c.text("pass :)");
  },
);
```

## Options

### <Badge type="danger" text="required" /> maxSize: `number`

The maximum file size of the file you want to limit. The default is `100 * 1024` - `100kb`.

### <Badge type="info" text="optional" /> onError: `OnError`

The error handler to be invoked if the specified file size is exceeded.

## Usage with Bun for large requests

If the Body Limit Middleware is used explicitly to allow a request body larger than the default, it might be necessary to make changes to your `Bun.serve` configuration accordingly. [At the time of writing](https://github.com/oven-sh/bun/blob/f2cfa15e4ef9d730fc6842ad8b79fb7ab4c71cb9/packages/bun-types/bun.d.ts#L2191), `Bun.serve`'s default request body limit is 128MiB. If you set Hono's Body Limit Middleware to a value bigger than that, your requests will still fail and, additionally, the `onError` handler specified in the middleware will not be called. This is because `Bun.serve()` will set the status code to `413` and terminate the connection before passing the request to Hono.

If you want to accept requests larger than 128MiB with Hono and Bun, you need to set the limit for Bun as well:

```ts
export default {
  port: process.env["PORT"] || 3000,
  fetch: app.fetch,
  maxRequestBodySize: 1024 * 1024 * 200, // your value here
};
```

or, depending on your setup:

```ts
Bun.serve({
  fetch(req, server) {
    return app.fetch(req, { ip: server.requestIP(req) });
  },
  maxRequestBodySize: 1024 * 1024 * 200, // your value here
});
```

# ETag Middleware

Using this middleware, you can add ETag headers easily.

## Import

```ts
import { Hono } from "hono";
import { etag } from "hono/etag";
```

## Usage

```ts
const app = new Hono();

app.use("/etag/*", etag());
app.get("/etag/abc", (c) => {
  return c.text("Hono is cool");
});
```

## The retained headers

The 304 Response must include the headers that would have been sent in an equivalent 200 OK response. The default headers are Cache-Control, Content-Location, Date, ETag, Expires, and Vary.

If you want to add the header that is sent, you can use `retainedHeaders` option and `RETAINED_304_HEADERS` strings array variable that includes the default headers:

```ts
import { etag, RETAINED_304_HEADERS } from "hono/etag";

// ...

app.use(
  "/etag/*",
  etag({
    retainedHeaders: ["x-message", ...RETAINED_304_HEADERS],
  }),
);
```

## Options

### <Badge type="info" text="optional" /> weak: `boolean`

Define using or not using a [weak validation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Conditional_requests#weak_validation). If `true` is set, then `w/` is added to the prefix of the value. The default is `false`.

### <Badge type="info" text="optional" /> retainedHeaders: `string[]`

The headers that you want to retain in the 304 Response.

### <Badge type="info" text="optional" /> generateDigest: `(body: Uint8Array) => ArrayBuffer | Promise<ArrayBuffer>`

A custom digest generation function. By default, it uses `SHA-1`. This function is called with the response body as a `Uint8Array` and should return a hash as an `ArrayBuffer` or a Promise of one.

# Context Storage Middleware

The Context Storage Middleware stores the Hono `Context` in the `AsyncLocalStorage`, to make it globally accessible.

::: info
**Note** This middleware uses `AsyncLocalStorage`. The runtime should support it.

**Cloudflare Workers**: To enable `AsyncLocalStorage`, add the [`nodejs_compat` or `nodejs_als` flag](https://developers.cloudflare.com/workers/configuration/compatibility-dates/#nodejs-compatibility-flag) to your `wrangler.toml` file.
:::

## Import

```ts
import { Hono } from "hono";
import {
  contextStorage,
  getContext,
  tryGetContext,
} from "hono/context-storage";
```

## Usage

The `getContext()` will return the current Context object if the `contextStorage()` is applied as a middleware.

```ts
type Env = {
  Variables: {
    message: string;
  };
};

const app = new Hono();

app.use(contextStorage());

app.use(async (c, next) => {
  c.set("message", "Hello!");
  await next();
});

// You can access the variable outside the handler.
const getMessage = () => {
  return getContext().var.message;
};

app.get("/", (c) => {
  return c.text(getMessage());
});
```

On Cloudflare Workers, you can access the bindings outside the handler.

```ts
type Env = {
  Bindings: {
    KV: KVNamespace;
  };
};

const app = new Hono();

app.use(contextStorage());

const setKV = (value: string) => {
  return getContext().env.KV.put("key", value);
};
```

## tryGetContext

`tryGetContext()` works like `getContext()`, but returns `undefined` instead of throwing an error when the context is not available:

```ts
const context = tryGetContext();
if (context) {
  // Context is available
  console.log(context.var.message);
}
```
