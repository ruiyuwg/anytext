# JWK Auth Middleware

The JWK Auth Middleware authenticates requests by verifying tokens using JWK (JSON Web Key). It checks for an `Authorization` header and other configured sources, such as cookies, if specified. Specifically, it validates tokens using the provided `keys`, retrieves keys from `jwks_uri` if specified, and supports token extraction from cookies if the `cookie` option is set.

:::info
The Authorization header sent from the client must have a specified scheme.

Example: `Bearer my.token.value` or `Basic my.token.value`
:::

## Import

```ts
import { Hono } from "hono";
import { jwk } from "hono/jwk";
import { verifyWithJwks } from "hono/jwt";
```

## Usage

```ts
const app = new Hono();

app.use(
  "/auth/*",
  jwk({
    jwks_uri: `https://${backendServer}/.well-known/jwks.json`,
    alg: ["RS256"],
  }),
);

app.get("/auth/page", (c) => {
  return c.text("You are authorized");
});
```

Get payload:

```ts
const app = new Hono();

app.use(
  "/auth/*",
  jwk({
    jwks_uri: `https://${backendServer}/.well-known/jwks.json`,
    alg: ["RS256"],
  }),
);

app.get("/auth/page", (c) => {
  const payload = c.get("jwtPayload");
  return c.json(payload); // eg: { "sub": "1234567890", "name": "John Doe", "iat": 1516239022 }
});
```

Anonymous access:

```ts
const app = new Hono();

app.use(
  "/auth/*",
  jwk({
    jwks_uri: (c) => `https://${c.env.authServer}/.well-known/jwks.json`,
    alg: ["RS256"],
    allow_anon: true,
  }),
);

app.get("/auth/page", (c) => {
  const payload = c.get("jwtPayload");
  return c.json(payload ?? { message: "hello anon" });
});
```

## Using `verifyWithJwks` outside of middleware

The `verifyWithJwks` utility function can be used to verify JWT tokens outside of Hono's middleware context, such as in SvelteKit SSR pages or other server-side environments:

```ts
const id_payload = await verifyWithJwks(
  id_token,
  {
    jwks_uri: "https://your-auth-server/.well-known/jwks.json",
    allowedAlgorithms: ["RS256"],
  },
  {
    cf: { cacheEverything: true, cacheTtl: 3600 },
  },
);
```

## Configuring JWKS fetch request options

To configure how JWKS is retrieved from `jwks_uri`, pass fetch request options as the second argument of `jwk()`.

This argument is `RequestInit` and is used only for the JWKS fetch request.

```ts
const app = new Hono();

app.use(
  "/auth/*",
  jwk(
    {
      jwks_uri: `https://${backendServer}/.well-known/jwks.json`,
      alg: ["RS256"],
    },
    {
      headers: {
        Authorization: "Bearer TOKEN",
      },
    },
  ),
);
```

## Options

### <Badge type="danger" text="required" /> alg: `AsymmetricAlgorithm[]`

An array of allowed asymmetric algorithms used for token verification.

Available types are `RS256` | `RS384` | `RS512` | `PS256` | `PS384` | `PS512` | `ES256` | `ES384` | `ES512` | `EdDSA`.

### <Badge type="info" text="optional" /> keys: `HonoJsonWebKey[] | (c: Context) => Promise<HonoJsonWebKey[]>`

The values of your public keys, or a function that returns them. The function receives the Context object.

### <Badge type="info" text="optional" /> jwks_uri: `string` | `(c: Context) => Promise<string>`

If this value is set, attempt to fetch JWKs from this URI, expecting a JSON response with `keys`, which are added to the provided `keys` option. You can also pass a callback function to dynamically determine the JWKS URI using the Context.

### <Badge type="info" text="optional" /> allow_anon: `boolean`

If this value is set to `true`, requests without a valid token will be allowed to pass through the middleware. Use `c.get('jwtPayload')` to check if the request is authenticated. The default is `false`.

### <Badge type="info" text="optional" /> cookie: `string`

If this value is set, then the value is retrieved from the cookie header using that value as a key, which is then validated as a token.

### <Badge type="info" text="optional" /> headerName: `string`

The name of the header to look for the JWT token. The default is `Authorization`.

### <Badge type="info" text="optional" /> verification: `VerifyOptions`

If this option is set, you can specify validation rules for claims in the JWT payload (`iss` / `aud` / `exp` / `nbf` / `iat`), in addition to signature verification.

# Trailing Slash Middleware

This middleware handles Trailing Slash in the URL on a GET request.

`appendTrailingSlash` redirects the URL to which it added the Trailing Slash if the content was not found. Also, `trimTrailingSlash` will remove the Trailing Slash.

## Import

```ts
import { Hono } from "hono";
import { appendTrailingSlash, trimTrailingSlash } from "hono/trailing-slash";
```

## Usage

Example of redirecting a GET request of `/about/me` to `/about/me/`.

```ts
import { Hono } from "hono";
import { appendTrailingSlash } from "hono/trailing-slash";

const app = new Hono({ strict: true });

app.use(appendTrailingSlash());
app.get("/about/me/", (c) => c.text("With Trailing Slash"));
```

Example of redirecting a GET request of `/about/me/` to `/about/me`.

```ts
import { Hono } from "hono";
import { trimTrailingSlash } from "hono/trailing-slash";

const app = new Hono({ strict: true });

app.use(trimTrailingSlash());
app.get("/about/me", (c) => c.text("Without Trailing Slash"));
```

## Options

### <Badge type="info" text="optional" /> alwaysRedirect: `boolean`

By default, trailing slash middleware only redirects when the response status is `404`. When `alwaysRedirect` is set to `true`, the middleware redirects before executing handlers. This is useful for wildcard routes (`*`) where the default behavior doesn't work.

```ts
const app = new Hono();

app.use(trimTrailingSlash({ alwaysRedirect: true }));
app.get("/my-path/*", (c) => c.text("Wildcard route"));
```

This option is available for both `trimTrailingSlash` and `appendTrailingSlash`.

## Note

It will be enabled when the request method is `GET` and the response status is `404`.

# Method Override Middleware

This middleware executes the handler of the specified method, which is different from the actual method of the request, depending on the value of the form, header, or query, and returns its response.

## Import

```ts
import { Hono } from "hono";
import { methodOverride } from "hono/method-override";
```

## Usage

```ts
const app = new Hono();

// If no options are specified, the value of `_method` in the form,
// e.g. DELETE, is used as the method.
app.use("/posts", methodOverride({ app }));

app.delete("/posts", (c) => {
  // ....
});
```

## For example

Since HTML forms cannot send a DELETE method, you can put the value `DELETE` in the property named `_method` and send it. And the handler for `app.delete()` will be executed.

The HTML form:

```html

```

The application:

```ts
import { methodOverride } from "hono/method-override";

const app = new Hono();
app.use("/posts", methodOverride({ app }));

app.delete("/posts", () => {
  // ...
});
```

You can change the default values or use the header value and query value:

```ts
app.use("/posts", methodOverride({ app, form: "_custom_name" }));
app.use("/posts", methodOverride({ app, header: "X-METHOD-OVERRIDE" }));
app.use("/posts", methodOverride({ app, query: "_method" }));
```

## Options

### <Badge type="danger" text="required" /> app: `Hono`

The instance of `Hono` is used in your application.

### <Badge type="info" text="optional" /> form: `string`

Form key with a value containing the method name.
The default is `_method`.

### <Badge type="info" text="optional" /> header: `boolean`

Header name with a value containing the method name.

### <Badge type="info" text="optional" /> query: `boolean`

Query parameter key with a value containing the method name.

# IP Restriction Middleware

IP Restriction Middleware is middleware that limits access to resources based on the IP address of the user.

## Import

```ts
import { Hono } from "hono";
import { ipRestriction } from "hono/ip-restriction";
```

## Usage

For your application running on Bun, if you want to allow access only from local, you can write it as follows. Specify the rules you want to deny in the `denyList` and the rules you want to allow in the `allowList`.

```ts
import { Hono } from "hono";
import { getConnInfo } from "hono/bun";
import { ipRestriction } from "hono/ip-restriction";

const app = new Hono();

app.use(
  "*",
  ipRestriction(getConnInfo, {
    denyList: [],
    allowList: ["127.0.0.1", "::1"],
  }),
);

app.get("/", (c) => c.text("Hello Hono!"));
```

Pass the `getConninfo` from the [ConnInfo helper](/docs/helpers/conninfo) appropriate for your environment as the first argument of `ipRestriction`. For example, for Deno, it would look like this:

```ts
import { getConnInfo } from "hono/deno";
import { ipRestriction } from "hono/ip-restriction";

//...

app.use(
  "*",
  ipRestriction(getConnInfo, {
    // ...
  }),
);
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
  "*",
  ipRestriction(
    getConnInfo,
    {
      denyList: ["192.168.2.0/24"],
    },
    async (remote, c) => {
      return c.text(`Blocking access from ${remote.addr}`, 403);
    },
  ),
);
```
