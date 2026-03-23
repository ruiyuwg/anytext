# JWT Auth Middleware

The JWT Auth Middleware provides authentication by verifying the token with JWT.
The middleware will check for an `Authorization` header if the `cookie` option is not set. You can customize the header name using the `headerName` option.

The Authorization header sent from the client must have a specified scheme.

Example: `Bearer my.token.value` or `Basic my.token.value`

## Import

```ts
import { Hono } from 'hono'
import { jwt } from 'hono/jwt'
import type { JwtVariables } from 'hono/jwt'
```

## Usage

```ts
// Specify the variable types to infer the `c.get('jwtPayload')`:
type Variables = JwtVariables

const app = new Hono<{ Variables: Variables }>()

app.use(
  '/auth/*',
  jwt({
    secret: 'it-is-very-secret',
    alg: 'HS256',
  })
)

app.get('/auth/page', (c) => {
  return c.text('You are authorized')
})
```

Get payload:

```ts
const app = new Hono()

app.use(
  '/auth/*',
  jwt({
    secret: 'it-is-very-secret',
    alg: 'HS256',
    issuer: 'my-trusted-issuer',
  })
)

app.get('/auth/page', (c) => {
  const payload = c.get('jwtPayload')
  return c.json(payload) // eg: { "sub": "1234567890", "name": "John Doe", "iat": 1516239022, "iss": "my-trusted-issuer" }
})
```

`jwt()` is just a middleware function. If you want to use an environment variable (eg: `c.env.JWT_SECRET`), you can use it as follows:

```js
app.use('/auth/*', (c, next) => {
  const jwtMiddleware = jwt({
    secret: c.env.JWT_SECRET,
    alg: 'HS256',
  })
  return jwtMiddleware(c, next)
})
```

## Options

### secret: `string`

A value of your secret key.

### alg: `string`

An algorithm type that is used for verifying.

Available types are `HS256` | `HS384` | `HS512` | `RS256` | `RS384` | `RS512` | `PS256` | `PS384` | `PS512` | `ES256` | `ES384` | `ES512` | `EdDSA`.

### cookie: `string`

If this value is set, then the value is retrieved from the cookie header using that value as a key, which is then validated as a token.

### headerName: `string`

The name of the header to look for the JWT token. The default is `Authorization`.

```ts
app.use(
  '/auth/*',
  jwt({
    secret: 'it-is-very-secret',
    alg: 'HS256',
    headerName: 'x-custom-auth-header',
  })
)
```

### verifyOptions: `VerifyOptions`

Options controlling verification of the token.

#### verifyOptions.iss: `string | RexExp`

The expected issuer used for token verification. The `iss` claim will **not** be checked if this isn't set.

#### verifyOptions.nbf: `boolean`

The `nbf` (not before) claim will be verified if present and this is set to `true`. The default is `true`.

#### verifyOptions.iat: `boolean`

The `iat` (issued at) claim will be verified if present and this is set to `true`. The default is `true`.

#### verifyOptions.exp: `boolean`

The `exp` (expiration time) claim will be verified if present and this is set to `true`. The default is `true`.

# Context Storage Middleware

The Context Storage Middleware stores the Hono `Context` in the `AsyncLocalStorage`, to make it globally accessible.

**Note** This middleware uses `AsyncLocalStorage`. The runtime should support it.

**Cloudflare Workers**: To enable `AsyncLocalStorage`, add the [`nodejs_compat` or `nodejs_als` flag](https://developers.cloudflare.com/workers/configuration/compatibility-dates/#nodejs-compatibility-flag) to your `wrangler.toml` file.

## Import

```ts
import { Hono } from 'hono'
import {
  contextStorage,
  getContext,
  tryGetContext,
} from 'hono/context-storage'
```

## Usage

The `getContext()` will return the current Context object if the `contextStorage()` is applied as a middleware.

```ts
type Env = {
  Variables: {
    message: string
  }
}

const app = new Hono<Env>()

app.use(contextStorage())

app.use(async (c, next) => {
  c.set('message', 'Hello!')
  await next()
})

// You can access the variable outside the handler.
const getMessage = () => {
  return getContext<Env>().var.message
}

app.get('/', (c) => {
  return c.text(getMessage())
})
```

On Cloudflare Workers, you can access the bindings outside the handler.

```ts
type Env = {
  Bindings: {
    KV: KVNamespace
  }
}

const app = new Hono<Env>()

app.use(contextStorage())

const setKV = (value: string) => {
  return getContext<Env>().env.KV.put('key', value)
}
```

## tryGetContext

`tryGetContext()` works like `getContext()`, but returns `undefined` instead of throwing an error when the context is not available:

```ts
const context = tryGetContext<Env>()
if (context) {
  // Context is available
  console.log(context.var.message)
}
```
