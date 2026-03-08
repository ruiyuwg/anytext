[API reference](/reference/overview "API reference")@auth/express

# @auth/express

⚠️

`@auth/express` is currently experimental. The API _will_ change in the future.

Express Auth is the official Express integration for Auth.js. It provides a simple way to add authentication to your Express app in a few lines of code.

## Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/express
```

```
pnpm add @auth/express
```

```
yarn add @auth/express
```

```
bun add @auth/express
```

## Usage[](#usage)

src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import GitHub from "@auth/express/providers/github"
import express from "express"
 
const app = express()
 
// If app is served through a proxy, trust the proxy to allow HTTPS protocol to be detected
// https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', true)
app.use("/auth/*", ExpressAuth({ providers: [ GitHub ] }))
```

Don’t forget to set the `AUTH_SECRET` environment variable. This should be a minimum of 32 characters, random string. On UNIX systems you can use `openssl rand -hex 32` or check out `https://generate-secret.vercel.app/32`.

You will also need to load the environment variables into your runtime environment. For example in Node.js with a package like [`dotenv`](https://www.npmjs.com/package/dotenv) or `Deno.env` in Deno.

### Provider Configuration[](#provider-configuration)

The callback URL used by the [providers](https://authjs.dev/reference/core/providers) must be set to the following, unless you mount the `ExpressAuth` handler on a different path:

```
[origin]/auth/callback/[provider]
```

## Signing in and signing out[](#signing-in-and-signing-out)

Once your application is mounted you can sign in or out by making requests to the following [REST API endpoints](https://authjs.dev/reference/core/types#authaction) from your client-side code. NB: Make sure to include the `csrfToken` in the request body for all sign-in and sign-out requests.

## Managing the session[](#managing-the-session)

If you are using Express with a template engine (e.g EJS, Pug), you can make the session data available to all routes via middleware as follows

app.ts

```
import { getSession } from "@auth/express"
 
export function authSession(req: Request, res: Response, next: NextFunction) {
  res.locals.session = await getSession(req)
  next()
}
 
app.use(authSession)
 
// Now in your route
app.get("/", (req, res) => {
  const { session } = res.locals
  res.render("index", { user: session?.user })
})
```

## Authorization[](#authorization)

You can protect routes by checking for the presence of a session and then redirect to a login page if the session is not present. This can either be done per route, or for a group of routes using a middleware such as the following:

```
export async function authenticatedUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const session = res.locals.session ?? (await getSession(req, authConfig))
  if (!session?.user) {
    res.redirect("/login")
  } else {
    next()
  }
}
```

### Per Route[](#per-route)

To protect a single route, simply add the middleware to the route as follows:

app.ts

```
// This route is protected
app.get("/profile", authenticatedUser, (req, res) => {
  const { session } = res.locals
  res.render("profile", { user: session?.user })
})
 
// This route is not protected
app.get("/", (req, res) => {
  res.render("index")
})
 
app.use("/", root)
```

### Per Group of Routes[](#per-group-of-routes)

To protect a group of routes, define a router and add the middleware to the router as follows:

routes/protected.route.ts

```
import { Router } from "express"
 
const router = Router()
 
router.use(authenticatedUser) // All routes defined after this will be protected
 
router.get("/", (req, res) => {
  res.render("protected")
})
 
export default router
```

Then we mount the router as follows:

app.ts

```
import protected from "./routes/protected.route"
 
app.use("/protected", protected)
```

## Notes on ESM[](#notes-on-esm)

@auth/express is ESM only. This means your package.json must contain `"type": "module"` and tsconfig.json should contain `"module": "NodeNext"` or `ESNext`. File imports must use the `.js` extension, e.g. `import { MyRouter } from "./my-router.js"`.

Your dev server should either be run with [tsx](https://www.npmjs.com/package/tsx) with `tsx index.ts` (fast startup, with no type checking), or ts-node with ‘node —loader ts-node/esm index.ts’ (slower startup, but has type checking).

While it is NOT recommended, if you wish to use @auth/express within a CommonJS project without migrating and making the above changes, you can run the dev server with tsx and may be able to compile with [pkgroll](https://tsx.is/compilation). Add ‘“name”: ”./dist/index.js”’ or ‘“name”: ”./dist/index.mjs”’ to your package.json and run ‘pkgroll’ to compile with both ESM and CommonJS support. For new projects it is recommended to just use ESM.

## AuthError[](#autherror)

Base error class for all Auth.js errors. It’s optimized to be printed in the server logs in a nicely formatted way via the [`logger.error`](https://authjs.dev/reference/core#logger) option.

### Extends[](#extends)

-   [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

### Properties[](#properties)

#### cause?[](#cause)

```
optional cause: Record<string, unknown> & {
  err: Error;
};
```

##### Type declaration[](#type-declaration)

###### err?[](#err)

```
optional err: Error;
```

##### Overrides[](#overrides)

`Error.cause`

#### type[](#type)

```
type: ErrorType;
```

* * *

## CredentialsSignin[](#credentialssignin)

Can be thrown from the `authorize` callback of the Credentials provider. When an error occurs during the `authorize` callback, two things can happen:

1.  The user is redirected to the signin page, with `error=CredentialsSignin&code=credentials` in the URL. `code` is configurable.
2.  If you throw this error in a framework that handles form actions server-side, this error is thrown, instead of redirecting the user, so you’ll need to handle.

### Extends[](#extends-1)

-   [`SignInError`](core/errors#signinerror)

### Properties[](#properties-1)

#### code[](#code)

```
code: string;
```

The error code that is set in the `code` query parameter of the redirect URL.

⚠ NOTE: This property is going to be included in the URL, so make sure it does not hint at sensitive errors.

The full error is always logged on the server, if you need to debug.

Generally, we don’t recommend hinting specifically if the user had either a wrong username or password specifically, try rather something like “Invalid credentials”.

#### type[](#type-1)

```
static type: string;
```

* * *

## Account[](#account)

Usually contains information about the provider being used and also extends `TokenSet`, which is different tokens returned by OAuth Providers.

### Extends[](#extends-2)

-   [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<`TokenEndpointResponse`\>

### Extended by[](#extended-by)

-   [`AdapterAccount`](express/adapters#adapteraccount)

### Indexable[](#indexable)

\[`key`: `string`\]: `undefined` | `JsonValue`

### Properties[](#properties-2)

#### access\_token?[](#access_token)

```
readonly optional access_token: string;
```

##### Inherited from[](#inherited-from)

`Partial.access_token`

#### authorization\_details?[](#authorization_details)

```
readonly optional authorization_details: AuthorizationDetails[];
```

##### Inherited from[](#inherited-from-1)

`Partial.authorization_details`

#### expires\_at?[](#expires_at)

```
optional expires_at: number;
```

Calculated value based on TokenEndpointResponse.expires\_in.

It is the absolute timestamp (in seconds) when the TokenEndpointResponse.access\_token expires.

This value can be used for implementing token rotation together with TokenEndpointResponse.refresh\_token.

##### See[](#see)

-   [https://authjs.dev/guides/refresh-token-rotation#database-strategy](https://authjs.dev/guides/refresh-token-rotation#database-strategy)
-   [https://www.rfc-editor.org/rfc/rfc6749#section-5.1](https://www.rfc-editor.org/rfc/rfc6749#section-5.1)

#### expires\_in?[](#expires_in)

```
readonly optional expires_in: number;
```

##### Inherited from[](#inherited-from-2)

`Partial.expires_in`

#### id\_token?[](#id_token)

```
readonly optional id_token: string;
```

##### Inherited from[](#inherited-from-3)

`Partial.id_token`

#### provider[](#provider)

```
provider: string;
```

Provider’s id for this account. E.g. “google”. See the full list at [https://authjs.dev/reference/core/providers](https://authjs.dev/reference/core/providers)

#### providerAccountId[](#provideraccountid)

```
providerAccountId: string;
```

This value depends on the type of the provider being used to create the account.

-   oauth/oidc: The OAuth account’s id, returned from the `profile()` callback.
-   email: The user’s email address.
-   credentials: `id` returned from the `authorize()` callback

#### refresh\_token?[](#refresh_token)

```
readonly optional refresh_token: string;
```

##### Inherited from[](#inherited-from-4)

`Partial.refresh_token`

#### scope?[](#scope)

```
readonly optional scope: string;
```

##### Inherited from[](#inherited-from-5)

`Partial.scope`

#### token\_type?[](#token_type)

```
readonly optional token_type: Lowercase<string>;
```

NOTE: because the value is case insensitive it is always returned lowercased

##### Inherited from[](#inherited-from-6)

`Partial.token_type`

#### type[](#type-2)

```
type: ProviderType;
```

Provider’s type for this account

#### userId?[](#userid)

```
optional userId: string;
```

id of the user this account belongs to

##### See[](#see-1)

[https://authjs.dev/reference/core/adapters#adapteruser](https://authjs.dev/reference/core/adapters#adapteruser)

* * *

## DefaultSession[](#defaultsession)

### Extended by[](#extended-by-1)

-   [`Session`](express#session)

### Properties[](#properties-3)

#### expires[](#expires)

```
expires: string;
```

#### user?[](#user)

```
optional user: User;
```

* * *

## Profile[](#profile)

The user info returned from your OAuth provider.

### See[](#see-2)

[https://openid.net/specs/openid-connect-core-1\_0.html#StandardClaims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)

### Indexable[](#indexable-1)

\[`claim`: `string`\]: `unknown`

### Properties[](#properties-4)

#### address?[](#address)

```
optional address: 
  | null
  | {
  country: null | string;
  formatted: null | string;
  locality: null | string;
  postal_code: null | string;
  region: null | string;
  street_address: null | string;
};
```

#### birthdate?[](#birthdate)

```
optional birthdate: null | string;
```

#### email?[](#email)

```
optional email: null | string;
```

#### email\_verified?[](#email_verified)

```
optional email_verified: null | boolean;
```

#### family\_name?[](#family_name)

```
optional family_name: null | string;
```

#### gender?[](#gender)

```
optional gender: null | string;
```

#### given\_name?[](#given_name)

```
optional given_name: null | string;
```

#### id?[](#id)

```
optional id: null | string;
```

#### locale?[](#locale)

```
optional locale: null | string;
```

#### middle\_name?[](#middle_name)

```
optional middle_name: null | string;
```

#### name?[](#name)

```
optional name: null | string;
```

#### nickname?[](#nickname)

```
optional nickname: null | string;
```

#### phone\_number?[](#phone_number)

```
optional phone_number: null | string;
```

#### picture?[](#picture)

```
optional picture: any;
```

#### preferred\_username?[](#preferred_username)

```
optional preferred_username: null | string;
```

#### profile?[](#profile-1)

```
optional profile: null | string;
```

#### sub?[](#sub)

```
optional sub: null | string;
```

#### updated\_at?[](#updated_at)

```
optional updated_at: 
  | null
  | string
  | number
  | Date;
```

#### website?[](#website)

```
optional website: null | string;
```

#### zoneinfo?[](#zoneinfo)

```
optional zoneinfo: null | string;
```

* * *

## Session[](#session)

The active session of the logged in user.

### Extends[](#extends-3)

-   [`DefaultSession`](express#defaultsession)

### Properties[](#properties-5)

#### expires[](#expires-1)

```
expires: string;
```

##### Inherited from[](#inherited-from-7)

[`DefaultSession`](express#defaultsession).[`expires`](express#expires)

#### user?[](#user-1)

```
optional user: User;
```

##### Inherited from[](#inherited-from-8)

[`DefaultSession`](express#defaultsession).[`user`](express#user)

* * *

## User[](#user-2)

The shape of the returned object in the OAuth providers’ `profile` callback, available in the `jwt` and `session` callbacks, or the second parameter of the `session` callback, when using a database.

### Extends[](#extends-4)

-   [`DefaultUser`](core/types#defaultuser)

### Extended by[](#extended-by-2)

-   [`AdapterUser`](express/adapters#adapteruser)

### Properties[](#properties-6)

#### email?[](#email-1)

```
optional email: null | string;
```

##### Inherited from[](#inherited-from-9)

[`DefaultUser`](core/types#defaultuser).[`email`](core/types#email)

#### id?[](#id-1)

```
optional id: string;
```

##### Inherited from[](#inherited-from-10)

[`DefaultUser`](core/types#defaultuser).[`id`](core/types#id)

#### image?[](#image)

```
optional image: null | string;
```

##### Inherited from[](#inherited-from-11)

[`DefaultUser`](core/types#defaultuser).[`image`](core/types#image)

#### name?[](#name-1)

```
optional name: null | string;
```

##### Inherited from[](#inherited-from-12)

[`DefaultUser`](core/types#defaultuser).[`name`](core/types#name-1)

* * *

## ExpressAuthConfig[](#expressauthconfig)

```
type ExpressAuthConfig = Omit<AuthConfig, "raw">;
```

* * *

## GetSessionResult[](#getsessionresult)

```
type GetSessionResult = Promise<Session | null>;
```

* * *

## customFetch[](#customfetch)

```
const customFetch: unique symbol;
```

🚫

This option allows you to override the default `fetch` function used by the provider to make requests to the provider’s OAuth endpoints directly. Used incorrectly, it can have security implications.

It can be used to support corporate proxies, custom fetch libraries, cache discovery endpoints, add mocks for testing, logging, set custom headers/params for non-spec compliant providers, etc.

### Example[](#example)

```
import { Auth, customFetch } from "@auth/core"
import GitHub from "@auth/core/providers/github"
 
const dispatcher = new ProxyAgent("my.proxy.server")
function proxy(...args: Parameters<typeof fetch>): ReturnType<typeof fetch> {
  return undici(args[0], { ...(args[1] ?? {}), dispatcher })
}
 
const response = await Auth(request, {
  providers: [GitHub({ [customFetch]: proxy })]
})
```

### See[](#see-3)

-   [https://undici.nodejs.org/#/docs/api/ProxyAgent?id=example-basic-proxy-request-with-local-agent-dispatcher](https://undici.nodejs.org/#/docs/api/ProxyAgent?id=example-basic-proxy-request-with-local-agent-dispatcher)
-   [https://authjs.dev/guides/corporate-proxy](https://authjs.dev/guides/corporate-proxy)

* * *

## ExpressAuth()[](#expressauth)

```
function ExpressAuth(config): (req, res, next) => Promise<void>
```

### Parameters[](#parameters)

Parameter

Type

`config`

[`ExpressAuthConfig`](express#expressauthconfig)

### Returns[](#returns)

`Function`

#### Parameters[](#parameters-1)

Parameter

Type

`req`

`Request`

`res`

`Response`

`next`

`NextFunction`

#### Returns[](#returns-1)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\>

* * *

## getSession()[](#getsession)

```
function getSession(req, config): GetSessionResult
```

### Parameters[](#parameters-2)

Parameter

Type

`req`

`Request`

`config`

[`ExpressAuthConfig`](express#expressauthconfig)

### Returns[](#returns-2)

[`GetSessionResult`](express#getsessionresult)

[types](/reference/sveltekit/types "types")[adapters](/reference/express/adapters "adapters")
