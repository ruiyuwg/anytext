# Cache Middleware

The Cache middleware uses the Web Standards' [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache).

The Cache middleware currently supports Cloudflare Workers projects using custom domains and Deno projects using [Deno 1.26+](https://github.com/denoland/deno/releases/tag/v1.26.0). Also available with Deno Deploy.

Cloudflare Workers respects the `Cache-Control` header and return cached responses. For details, refer to [Cache on Cloudflare Docs](https://developers.cloudflare.com/workers/runtime-apis/cache/). Deno does not respect headers, so if you need to update the cache, you will need to implement your own mechanism.

See [Usage](#usage) below for instructions on each platform.

## Import

```ts
import { Hono } from 'hono'
import { cache } from 'hono/cache'
```

## Usage

```ts [Cloudflare Workers]
app.get(
  '*',
  cache({
    cacheName: 'my-app',
    cacheControl: 'max-age=3600',
  })
)
```

```ts [Deno]
// Must use `wait: true` for the Deno runtime
app.get(
  '*',
  cache({
    cacheName: 'my-app',
    cacheControl: 'max-age=3600',
    wait: true,
  })
)
```

## Options

### cacheName: `string` | `(c: Context) => string` | `Promise<string>`

The name of the cache. Can be used to store multiple caches with different identifiers.

### wait: `boolean`

A boolean indicating if Hono should wait for the Promise of the `cache.put` function to resolve before continuing with the request. *Required to be true for the Deno environment*. The default is `false`.

### cacheControl: `string`

A string of directives for the `Cache-Control` header. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) for more information. When this option is not provided, no `Cache-Control` header is added to requests.

### vary: `string` | `string[]`

Sets the `Vary` header in the response. If the original response header already contains a `Vary` header, the values are merged, removing any duplicates. Setting this to `*` will result in an error. For more details on the Vary header and its implications for caching strategies, refer to the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary).

### keyGenerator: `(c: Context) => string | Promise<string>`

Generates keys for every request in the `cacheName` store. This can be used to cache data based on request parameters or context parameters. The default is `c.req.url`.

### cacheableStatusCodes: `number[]`

An array of status codes that should be cached. The default is `[200]`. Use this option to cache responses with specific status codes.

```ts
app.get(
  '*',
  cache({
    cacheName: 'my-app',
    cacheControl: 'max-age=3600',
    cacheableStatusCodes: [200, 404, 412],
  })
)
```

# Trailing Slash Middleware

This middleware handles Trailing Slash in the URL on a GET request.

`appendTrailingSlash` redirects the URL to which it added the Trailing Slash if the content was not found. Also, `trimTrailingSlash` will remove the Trailing Slash.

## Import

```ts
import { Hono } from 'hono'
import {
  appendTrailingSlash,
  trimTrailingSlash,
} from 'hono/trailing-slash'
```

## Usage

Example of redirecting a GET request of `/about/me` to `/about/me/`.

```ts
import { Hono } from 'hono'
import { appendTrailingSlash } from 'hono/trailing-slash'

const app = new Hono({ strict: true })

app.use(appendTrailingSlash())
app.get('/about/me/', (c) => c.text('With Trailing Slash'))
```

Example of redirecting a GET request of `/about/me/` to `/about/me`.

```ts
import { Hono } from 'hono'
import { trimTrailingSlash } from 'hono/trailing-slash'

const app = new Hono({ strict: true })

app.use(trimTrailingSlash())
app.get('/about/me', (c) => c.text('Without Trailing Slash'))
```

## Options

### alwaysRedirect: `boolean`

By default, trailing slash middleware only redirects when the response status is `404`. When `alwaysRedirect` is set to `true`, the middleware redirects before executing handlers. This is useful for wildcard routes (`*`) where the default behavior doesn't work.

```ts
const app = new Hono()

app.use(trimTrailingSlash({ alwaysRedirect: true }))
app.get('/my-path/*', (c) => c.text('Wildcard route'))
```

This option is available for both `trimTrailingSlash` and `appendTrailingSlash`.

## Note

It will be enabled when the request method is `GET` and the response status is `404`.

# ETag Middleware

Using this middleware, you can add ETag headers easily.

## Import

```ts
import { Hono } from 'hono'
import { etag } from 'hono/etag'
```

## Usage

```ts
const app = new Hono()

app.use('/etag/*', etag())
app.get('/etag/abc', (c) => {
  return c.text('Hono is cool')
})
```

## The retained headers

The 304 Response must include the headers that would have been sent in an equivalent 200 OK response. The default headers are Cache-Control, Content-Location, Date, ETag, Expires, and Vary.

If you want to add the header that is sent, you can use `retainedHeaders` option and `RETAINED_304_HEADERS` strings array variable that includes the default headers:

```ts
import { etag, RETAINED_304_HEADERS } from 'hono/etag'

// ...

app.use(
  '/etag/*',
  etag({
    retainedHeaders: ['x-message', ...RETAINED_304_HEADERS],
  })
)
```

## Options

### weak: `boolean`

Define using or not using a [weak validation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Conditional_requests#weak_validation). If `true` is set, then `w/` is added to the prefix of the value. The default is `false`.

### retainedHeaders: `string[]`

The headers that you want to retain in the 304 Response.

### generateDigest: `(body: Uint8Array) => ArrayBuffer | Promise<ArrayBuffer>`

A custom digest generation function. By default, it uses `SHA-1`. This function is called with the response body as a `Uint8Array` and should return a hash as an `ArrayBuffer` or a Promise of one.

# Compress Middleware

This middleware compresses the response body, according to `Accept-Encoding` request header.

**Note**: On Cloudflare Workers and Deno Deploy, the response body will be compressed automatically, so there is no need to use this middleware.

## Import

```ts
import { Hono } from 'hono'
import { compress } from 'hono/compress'
```

## Usage

```ts
const app = new Hono()

app.use(compress())
```

## Options

### encoding: `'gzip'` | `'deflate'`

The compression scheme to allow for response compression. Either `gzip` or `deflate`. If not defined, both are allowed and will be used based on the `Accept-Encoding` header. `gzip` is prioritized if this option is not provided and the client provides both in the `Accept-Encoding` header.

### threshold: `number`

The minimum size in bytes to compress. Defaults to 1024 bytes.

# IP Restriction Middleware

IP Restriction Middleware is middleware that limits access to resources based on the IP address of the user.

## Import

```ts
import { Hono } from 'hono'
import { ipRestriction } from 'hono/ip-restriction'
```

## Usage

For your application running on Bun, if you want to allow access only from local, you can write it as follows. Specify the rules you want to deny in the `denyList` and the rules you want to allow in the `allowList`.

```ts
import { Hono } from 'hono'
import { getConnInfo } from 'hono/bun'
import { ipRestriction } from 'hono/ip-restriction'

const app = new Hono()

app.use(
  '*',
  ipRestriction(getConnInfo, {
    denyList: [],
    allowList: ['127.0.0.1', '::1'],
  })
)

app.get('/', (c) => c.text('Hello Hono!'))
```

Pass the `getConninfo` from the [ConnInfo helper](/docs/helpers/conninfo) appropriate for your environment as the first argument of `ipRestriction`. For example, for Deno, it would look like this:

```ts
import { getConnInfo } from 'hono/deno'
import { ipRestriction } from 'hono/ip-restriction'

//...

app.use(
  '*',
  ipRestriction(getConnInfo, {
    // ...
  })
)
```

## Rules

Follow the instructions below for writing rules.

### IPv4

- `192.168.2.0` - Static IP Address
- `192.168.2.0/24` - CIDR Notation
- `*` - ALL Addresses

### IPv6

- `::1` - Static IP Address
- `::1/10` - CIDR Notation
- `*` - ALL Addresses

## Error handling

To customize the error, return a `Response` in the third argument.

```ts
app.use(
  '*',
  ipRestriction(
    getConnInfo,
    {
      denyList: ['192.168.2.0/24'],
    },
    async (remote, c) => {
      return c.text(`Blocking access from ${remote.addr}`, 403)
    }
  )
)
```
