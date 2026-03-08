[API reference](/reference/overview "API reference")next-auth

# next-auth

_If you are looking to migrate from v4, visit the [Upgrade Guide (v5)](https://authjs.dev/getting-started/migrating-to-v5)._

## Installation[](#installation)

npmpnpmyarnbun

```
npm install next-auth@beta
```

```
pnpm add next-auth@beta
```

```
yarn add next-auth@beta
```

```
bun add next-auth@beta
```

## Environment variable inference[](#environment-variable-inference)

`NEXTAUTH_URL` and `NEXTAUTH_SECRET` have been inferred since v4.

Since NextAuth.js v5 can also automatically infer environment variables that are prefixed with `AUTH_`.

For example `AUTH_GITHUB_ID` and `AUTH_GITHUB_SECRET` will be used as the `clientId` and `clientSecret` options for the GitHub provider.

💡

The environment variable name inferring has the following format for OAuth providers: `AUTH_{PROVIDER}_{ID|SECRET}`.

`PROVIDER` is the uppercase snake case version of the provider’s id, followed by either `ID` or `SECRET` respectively.

`AUTH_SECRET` and `AUTH_URL` are also aliased for `NEXTAUTH_SECRET` and `NEXTAUTH_URL` for consistency.

To add social login to your app, the configuration becomes:

auth.ts

```
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
export const { handlers, auth } = NextAuth({ providers: [ GitHub ] })
```

And the `.env.local` file:

.env.local

```
AUTH_GITHUB_ID=...
AUTH_GITHUB_SECRET=...
AUTH_SECRET=...
```

💡

In production, `AUTH_SECRET` is a required environment variable - if not set, NextAuth.js will throw an error. See [MissingSecretError](https://authjs.dev/reference/core/errors#missingsecret) for more details.

If you need to override the default values for a provider, you can still call it as a function `GitHub({...})` as before.

## Lazy initialization[](#lazy-initialization)

You can also initialize NextAuth.js lazily (previously known as advanced intialization), which allows you to access the request context in the configuration in some cases, like Route Handlers, Middleware, API Routes or `getServerSideProps`. The above example becomes:

auth.ts

```
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
export const { handlers, auth } = NextAuth(req => {
 if (req) {
  console.log(req) // do something with the request
 }
 return { providers: [ GitHub ] }
})
```

💡

This is useful if you want to customize the configuration based on the request, for example, to add a different provider in staging/dev environments.

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

-   [`AdapterAccount`](next-auth/adapters#adapteraccount)

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

-   [`Session`](nextjs#session-2)

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

## NextAuthConfig[](#nextauthconfig)

Configure NextAuth.js.

### Extends[](#extends-3)

-   [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)<[`AuthConfig`](core#authconfig), `"raw"`\>

### Properties[](#properties-4)

#### adapter?[](#adapter)

```
optional adapter: Adapter;
```

You can use the adapter option to pass in your database adapter.

##### Inherited from[](#inherited-from-7)

`Omit.adapter`

#### basePath?[](#basepath)

```
optional basePath: string;
```

The base path of the Auth.js API endpoints.

##### Default[](#default)

```
"/api/auth" in "next-auth"; "/auth" with all other frameworks
```

##### Inherited from[](#inherited-from-8)

`Omit.basePath`

#### callbacks?[](#callbacks)

```
optional callbacks: {
  jwt: (params) => Awaitable<null | JWT>;
  redirect: (params) => Awaitable<string>;
  session: (params) => Awaitable<
     | Session
     | DefaultSession>;
  signIn: (params) => Awaitable<string | boolean>;
 } & {
  authorized: (params) => any;
};
```

Callbacks are asynchronous functions you can use to control what happens when an auth-related action is performed. Callbacks **allow you to implement access controls without a database** or to **integrate with external databases or APIs**.

##### Type declaration[](#type-declaration-1)

###### jwt()?[](#jwt)

```
optional jwt: (params) => Awaitable<null | JWT>;
```

This callback is called whenever a JSON Web Token is created (i.e. at sign in) or updated (i.e whenever a session is accessed in the client). Anything you return here will be saved in the JWT and forwarded to the session callback. There you can control what should be returned to the client. Anything else will be kept from your frontend. The JWT is encrypted by default via your AUTH\_SECRET environment variable.

[`session` callback](https://authjs.dev/reference/core/types#session)

###### Parameters[](#parameters)

Parameter

Type

Description

`params`

{ `account`: `null` | [`Account`](nextjs#account); `isNewUser`: `boolean`; `profile`: [`Profile`](nextjs#profile); `session`: `any`; `token`: [`JWT`](next-auth/jwt#jwt); `trigger`: `"signIn"` | `"update"` | `"signUp"`; `user`: | [`AdapterUser`](next-auth/adapters#adapteruser) | [`User`](nextjs#user-2); }

\-

`params.account`?

`null` | [`Account`](nextjs#account)

Contains information about the provider that was used to sign in. Also includes TokenSet **Note** available when `trigger` is `"signIn"` or `"signUp"`

`params.isNewUser`?

`boolean`

**Deprecated** use `trigger === "signUp"` instead

`params.profile`?

[`Profile`](nextjs#profile)

The OAuth profile returned from your provider. (In case of OIDC it will be the decoded ID Token or /userinfo response) **Note** available when `trigger` is `"signIn"`.

`params.session`?

`any`

When using [AuthConfig.session](core#session-2) `strategy: "jwt"`, this is the data sent from the client via the `useSession().update` method. ⚠ Note, you should validate this data before using it.

`params.token`

[`JWT`](next-auth/jwt#jwt)

When `trigger` is `"signIn"` or `"signUp"`, it will be a subset of [JWT](next-auth/jwt#jwt), `name`, `email` and `image` will be included. Otherwise, it will be the full [JWT](next-auth/jwt#jwt) for subsequent calls.

`params.trigger`?

`"signIn"` | `"update"` | `"signUp"`

Check why was the jwt callback invoked. Possible reasons are: - user sign-in: First time the callback is invoked, `user`, `profile` and `account` will be present. - user sign-up: a user is created for the first time in the database (when [AuthConfig.session](core#session-2).strategy is set to `"database"`) - update event: Triggered by the `useSession().update` method. In case of the latter, `trigger` will be `undefined`.

`params.user`

| [`AdapterUser`](next-auth/adapters#adapteruser) | [`User`](nextjs#user-2)

Either the result of the OAuthConfig.profile or the CredentialsConfig.authorize callback. **Note** available when `trigger` is `"signIn"` or `"signUp"`. Resources: - [Credentials Provider](https://authjs.dev/getting-started/authentication/credentials) - [User database model](https://authjs.dev/guides/creating-a-database-adapter#user-management)

###### Returns[](#returns)

[`Awaitable`](core/types#awaitablet)<`null` | [`JWT`](next-auth/jwt#jwt)\>

###### redirect()?[](#redirect)

```
optional redirect: (params) => Awaitable<string>;
```

This callback is called anytime the user is redirected to a callback URL (i.e. on signin or signout). By default only URLs on the same host as the origin are allowed. You can use this callback to customise that behaviour.

[Documentation](https://authjs.dev/reference/core/types#redirect)

###### Parameters[](#parameters-1)

Parameter

Type

Description

`params`

{ `baseUrl`: `string`; `url`: `string`; }

\-

`params.baseUrl`

`string`

Default base URL of site (can be used as fallback)

`params.url`

`string`

URL provided as callback URL by the client

###### Returns[](#returns-1)

[`Awaitable`](core/types#awaitablet)<`string`\>

###### Example[](#example)

```
callbacks: {
  async redirect({ url, baseUrl }) {
    // Allows relative callback URLs
    if (url.startsWith("/")) return `${baseUrl}${url}`
 
    // Allows callback URLs on the same origin
    if (new URL(url).origin === baseUrl) return url
 
    return baseUrl
  }
}
```

###### session()?[](#session)

```
optional session: (params) => Awaitable<
  | Session
| DefaultSession>;
```

This callback is called whenever a session is checked. (i.e. when invoking the `/api/session` endpoint, using `useSession` or `getSession`). The return value will be exposed to the client, so be careful what you return here! If you want to make anything available to the client which you’ve added to the token through the JWT callback, you have to explicitly return it here as well.

⚠ By default, only a subset (email, name, image) of the token is returned for increased security.

The token argument is only available when using the jwt session strategy, and the user argument is only available when using the database session strategy.

[`jwt` callback](https://authjs.dev/reference/core/types#jwt)

###### Parameters[](#parameters-2)

Parameter

Type

`params`

{ `session`: { `user`: [`AdapterUser`](next-auth/adapters#adapteruser); } & [`AdapterSession`](next-auth/adapters#adaptersession); `user`: [`AdapterUser`](next-auth/adapters#adapteruser); } & { `session`: [`Session`](nextjs#session-2); `token`: [`JWT`](next-auth/jwt#jwt); } & { `newSession`: `any`; `trigger`: `"update"`; }

###### Returns[](#returns-2)

[`Awaitable`](core/types#awaitablet)< | [`Session`](nextjs#session-2) | [`DefaultSession`](nextjs#defaultsession)\>

###### Example[](#example-1)

```
callbacks: {
  async session({ session, token, user }) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken
 
    return session
  }
}
```

###### signIn()?[](#signin)

```
optional signIn: (params) => Awaitable<string | boolean>;
```

Controls whether a user is allowed to sign in or not. Returning `true` continues the sign-in flow. Returning `false` or throwing an error will stop the sign-in flow and redirect the user to the error page. Returning a string will redirect the user to the specified URL.

Unhandled errors will throw an `AccessDenied` with the message set to the original error.

[`AccessDenied`](https://authjs.dev/reference/core/errors#accessdenied)

###### Parameters[](#parameters-3)

Parameter

Type

Description

`params`

{ `account`: `null` | [`Account`](nextjs#account); `credentials`: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`CredentialInput`](core/providers/credentials#credentialinput)\>; `email`: { `verificationRequest`: `boolean`; }; `profile`: [`Profile`](nextjs#profile); `user`: | [`AdapterUser`](next-auth/adapters#adapteruser) | [`User`](nextjs#user-2); }

\-

`params.account`?

`null` | [`Account`](nextjs#account)

\-

`params.credentials`?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`CredentialInput`](core/providers/credentials#credentialinput)\>

If Credentials provider is used, it contains the user credentials

`params.email`?

{ `verificationRequest`: `boolean`; }

If Email provider is used, on the first call, it contains a `verificationRequest: true` property to indicate it is being triggered in the verification request flow. When the callback is invoked after a user has clicked on a sign in link, this property will not be present. You can check for the `verificationRequest` property to avoid sending emails to addresses or domains on a blocklist or to only explicitly generate them for email address in an allow list.

`params.email.verificationRequest`?

`boolean`

\-

`params.profile`?

[`Profile`](nextjs#profile)

If OAuth provider is used, it contains the full OAuth profile returned by your provider.

`params.user`

| [`AdapterUser`](next-auth/adapters#adapteruser) | [`User`](nextjs#user-2)

\-

###### Returns[](#returns-3)

[`Awaitable`](core/types#awaitablet)<`string` | `boolean`\>

###### Example[](#example-2)

```
callbacks: {
 async signIn({ profile }) {
  // Only allow sign in for users with email addresses ending with "yourdomain.com"
  return profile?.email?.endsWith("@yourdomain.com")
 }
}
```

##### Type declaration[](#type-declaration-2)

###### authorized()?[](#authorized)

```
optional authorized: (params) => any;
```

Invoked when a user needs authorization, using [Middleware](https://nextjs.org/docs/advanced-features/middleware).

You can override this behavior by returning a NextResponse.

###### Parameters[](#parameters-4)

Parameter

Type

Description

`params`

{ `auth`: `null` | [`Session`](nextjs#session-2); `request`: `NextRequest`; }

\-

`params.auth`

`null` | [`Session`](nextjs#session-2)

The authenticated user or token, if any.

`params.request`

`NextRequest`

The request to be authorized.

###### Returns[](#returns-4)

`any`

###### Example[](#example-3)

app/auth.ts

```
async authorized({ request, auth }) {
  const url = request.nextUrl
 
  if(request.method === "POST") {
    const { authToken } = (await request.json()) ?? {}
    // If the request has a valid auth token, it is authorized
    const valid = await validateAuthToken(authToken)
    if(valid) return true
    return NextResponse.json("Invalid auth token", { status: 401 })
  }
 
  // Logged in users are authenticated, otherwise redirect to login page
  return !!auth.user
}
```

⚠️

If you are returning a redirect response, make sure that the page you are redirecting to is not protected by this callback, otherwise you could end up in an infinite redirect loop.

##### Overrides[](#overrides-1)

`Omit.callbacks`

#### cookies?[](#cookies)

```
optional cookies: Partial<CookiesOptions>;
```

You can override the default cookie names and options for any of the cookies used by Auth.js. You can specify one or more cookies with custom properties and missing options will use the default values defined by Auth.js. If you use this feature, you will likely want to create conditional behavior to support setting different cookies policies in development and production builds, as you will be opting out of the built-in dynamic policy.

-   ⚠ **This is an advanced option.** Advanced options are passed the same way as basic options, but **may have complex implications** or side effects. You should **try to avoid using advanced options** unless you are very comfortable using them.

##### Default[](#default-1)

```
{}
```

##### Inherited from[](#inherited-from-9)

`Omit.cookies`

#### debug?[](#debug)

```
optional debug: boolean;
```

Set debug to true to enable debug messages for authentication and database operations.

-   ⚠ If you added a custom [AuthConfig.logger](core#logger), this setting is ignored.

##### Default[](#default-2)

```
false
```

##### Inherited from[](#inherited-from-10)

`Omit.debug`

#### events?[](#events)

```
optional events: {
  createUser: (message) => Awaitable<void>;
  linkAccount: (message) => Awaitable<void>;
  session: (message) => Awaitable<void>;
  signIn: (message) => Awaitable<void>;
  signOut: (message) => Awaitable<void>;
  updateUser: (message) => Awaitable<void>;
};
```

Events are asynchronous functions that do not return a response, they are useful for audit logging. You can specify a handler for any of these events below - e.g. for debugging or to create an audit log. The content of the message object varies depending on the flow (e.g. OAuth or Email authentication flow, JWT or database sessions, etc), but typically contains a user object and/or contents of the JSON Web Token and other information relevant to the event.

##### createUser()?[](#createuser)

```
optional createUser: (message) => Awaitable<void>;
```

###### Parameters[](#parameters-5)

Parameter

Type

`message`

{ `user`: [`User`](nextjs#user-2); }

`message.user`

[`User`](nextjs#user-2)

###### Returns[](#returns-5)

[`Awaitable`](core/types#awaitablet)<`void`\>

##### linkAccount()?[](#linkaccount)

```
optional linkAccount: (message) => Awaitable<void>;
```

###### Parameters[](#parameters-6)

Parameter

Type

`message`

{ `account`: [`Account`](nextjs#account); `profile`: | [`AdapterUser`](next-auth/adapters#adapteruser) | [`User`](nextjs#user-2); `user`: | [`AdapterUser`](next-auth/adapters#adapteruser) | [`User`](nextjs#user-2); }

`message.account`

[`Account`](nextjs#account)

`message.profile`

| [`AdapterUser`](next-auth/adapters#adapteruser) | [`User`](nextjs#user-2)

`message.user`

| [`AdapterUser`](next-auth/adapters#adapteruser) | [`User`](nextjs#user-2)

###### Returns[](#returns-6)

[`Awaitable`](core/types#awaitablet)<`void`\>

##### session()?[](#session-1)

```
optional session: (message) => Awaitable<void>;
```

The message object will contain one of these depending on if you use JWT or database persisted sessions:

-   `token`: The JWT for this session.
-   `session`: The session object from your adapter.

###### Parameters[](#parameters-7)

Parameter

Type

`message`

{ `session`: [`Session`](nextjs#session-2); `token`: [`JWT`](next-auth/jwt#jwt); }

`message.session`

[`Session`](nextjs#session-2)

`message.token`

[`JWT`](next-auth/jwt#jwt)

###### Returns[](#returns-7)

[`Awaitable`](core/types#awaitablet)<`void`\>

##### signIn()?[](#signin-1)

```
optional signIn: (message) => Awaitable<void>;
```

If using a `credentials` type auth, the user is the raw response from your credential provider. For other providers, you’ll get the User object from your adapter, the account, and an indicator if the user was new to your Adapter.

###### Parameters[](#parameters-8)

Parameter

Type

`message`

{ `account`: `null` | [`Account`](nextjs#account); `isNewUser`: `boolean`; `profile`: [`Profile`](nextjs#profile); `user`: [`User`](nextjs#user-2); }

`message.account`?

`null` | [`Account`](nextjs#account)

`message.isNewUser`?

`boolean`

`message.profile`?

[`Profile`](nextjs#profile)

`message.user`

[`User`](nextjs#user-2)

###### Returns[](#returns-8)

[`Awaitable`](core/types#awaitablet)<`void`\>

##### signOut()?[](#signout)

```
optional signOut: (message) => Awaitable<void>;
```

The message object will contain one of these depending on if you use JWT or database persisted sessions:

-   `token`: The JWT for this session.
-   `session`: The session object from your adapter that is being ended.

###### Parameters[](#parameters-9)

Parameter

Type

`message`

| { `session`: | `undefined` | `null` | `void` | [`AdapterSession`](next-auth/adapters#adaptersession); } | { `token`: `null` | [`JWT`](next-auth/jwt#jwt); }

###### Returns[](#returns-9)

[`Awaitable`](core/types#awaitablet)<`void`\>

##### updateUser()?[](#updateuser)

```
optional updateUser: (message) => Awaitable<void>;
```

###### Parameters[](#parameters-10)

Parameter

Type

`message`

{ `user`: [`User`](nextjs#user-2); }

`message.user`

[`User`](nextjs#user-2)

###### Returns[](#returns-10)

[`Awaitable`](core/types#awaitablet)<`void`\>

##### Default[](#default-3)

```
{}
```

##### Inherited from[](#inherited-from-11)

`Omit.events`

#### experimental?[](#experimental)

```
optional experimental: {
  enableWebAuthn: boolean;
};
```

Use this option to enable experimental features. When enabled, it will print a warning message to the console.

##### enableWebAuthn?[](#enablewebauthn)

```
optional enableWebAuthn: boolean;
```

Enable WebAuthn support.

###### Default[](#default-4)

```
false
```

##### Note[](#note)

Experimental features are not guaranteed to be stable and may change or be removed without notice. Please use with caution.

##### Default[](#default-5)

```
{}
```

##### Inherited from[](#inherited-from-12)

`Omit.experimental`

#### jwt?[](#jwt-1)

```
optional jwt: Partial<JWTOptions>;
```

JSON Web Tokens are enabled by default if you have not specified an [AuthConfig.adapter](core#adapter). JSON Web Tokens are encrypted (JWE) by default. We recommend you keep this behaviour.

##### Inherited from[](#inherited-from-13)

`Omit.jwt`

#### logger?[](#logger)

```
optional logger: Partial<LoggerInstance>;
```

Override any of the logger levels (`undefined` levels will use the built-in logger), and intercept logs in NextAuth. You can use this option to send NextAuth logs to a third-party logging service.

##### Example[](#example-4)

```
// /auth.ts
import log from "logging-service"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  logger: {
    error(code, ...message) {
      log.error(code, message)
    },
    warn(code, ...message) {
      log.warn(code, message)
    },
    debug(code, ...message) {
      log.debug(code, message)
    }
  }
})
```

-   ⚠ When set, the [AuthConfig.debug](core#debug) option is ignored

##### Default[](#default-6)

```
console
```

##### Inherited from[](#inherited-from-14)

`Omit.logger`

#### pages?[](#pages)

```
optional pages: Partial<PagesOptions>;
```

Specify URLs to be used if you want to create custom sign in, sign out and error pages. Pages specified will override the corresponding built-in page.

##### Default[](#default-7)

```
{}
```

##### Example[](#example-5)

```
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/auth/new-user'
  }
```

##### Inherited from[](#inherited-from-15)

`Omit.pages`

#### providers[](#providers)

```
providers: Provider[];
```

List of authentication providers for signing in (e.g. Google, Facebook, Twitter, GitHub, Email, etc) in any order. This can be one of the built-in providers or an object with a custom provider.

##### Default[](#default-8)

```
[]
```

##### Inherited from[](#inherited-from-16)

`Omit.providers`

#### redirectProxyUrl?[](#redirectproxyurl)

```
optional redirectProxyUrl: string;
```

When set, during an OAuth sign-in flow, the `redirect_uri` of the authorization request will be set based on this value.

This is useful if your OAuth Provider only supports a single `redirect_uri` or you want to use OAuth on preview URLs (like Vercel), where you don’t know the final deployment URL beforehand.

The url needs to include the full path up to where Auth.js is initialized.

##### Note[](#note-1)

This will auto-enable the `state` OAuth2Config.checks on the provider.

##### Examples[](#examples)

```
"https://authjs.example.com/api/auth"
```

You can also override this individually for each provider.

```
GitHub({
  ...
  redirectProxyUrl: "https://github.example.com/api/auth"
})
```

##### Default[](#default-9)

`AUTH_REDIRECT_PROXY_URL` environment variable

See also: [Guide: Securing a Preview Deployment](https://authjs.dev/getting-started/deployment#securing-a-preview-deployment)

##### Inherited from[](#inherited-from-17)

`Omit.redirectProxyUrl`

#### secret?[](#secret)

```
optional secret: string | string[];
```

A random string used to hash tokens, sign cookies and generate cryptographic keys.

To generate a random string, you can use the Auth.js CLI: `npx auth secret`

##### Note[](#note-2)

You can also pass an array of secrets, in which case the first secret that successfully decrypts the JWT will be used. This is useful for rotating secrets without invalidating existing sessions. The newer secret should be added to the start of the array, which will be used for all new sessions.

##### Inherited from[](#inherited-from-18)

`Omit.secret`

#### session?[](#session-2)

```
optional session: {
  generateSessionToken: () => string;
  maxAge: number;
  strategy: "jwt" | "database";
  updateAge: number;
};
```

Configure your session like if you want to use JWT or a database, how long until an idle session expires, or to throttle write operations in case you are using a database.

##### generateSessionToken()?[](#generatesessiontoken)

```
optional generateSessionToken: () => string;
```

Generate a custom session token for database-based sessions. By default, a random UUID or string is generated depending on the Node.js version. However, you can specify your own custom string (such as CUID) to be used.

###### Returns[](#returns-11)

`string`

###### Default[](#default-10)

`randomUUID` or `randomBytes.toHex` depending on the Node.js version

##### maxAge?[](#maxage)

```
optional maxAge: number;
```

Relative time from now in seconds when to expire the session

###### Default[](#default-11)

```
2592000 // 30 days
```

##### strategy?[](#strategy)

```
optional strategy: "jwt" | "database";
```

Choose how you want to save the user session. The default is `"jwt"`, an encrypted JWT (JWE) in the session cookie.

If you use an `adapter` however, we default it to `"database"` instead. You can still force a JWT session by explicitly defining `"jwt"`.

When using `"database"`, the session cookie will only contain a `sessionToken` value, which is used to look up the session in the database.

[Documentation](https://authjs.dev/reference/core#authconfig#session) | [Adapter](https://authjs.dev/reference/core#authconfig#adapter) | [About JSON Web Tokens](https://authjs.dev/concepts/session-strategies#jwt-session)

##### updateAge?[](#updateage)

```
optional updateAge: number;
```

How often the session should be updated in seconds. If set to `0`, session is updated every time.

###### Default[](#default-12)

```
86400 // 1 day
```

##### Inherited from[](#inherited-from-19)

`Omit.session`

#### skipCSRFCheck?[](#skipcsrfcheck)

```
optional skipCSRFCheck: typeof skipCSRFCheck;
```

##### Inherited from[](#inherited-from-20)

`Omit.skipCSRFCheck`

#### theme?[](#theme)

```
optional theme: Theme;
```

Changes the theme of built-in [AuthConfig.pages](core#pages).

##### Inherited from[](#inherited-from-21)

`Omit.theme`

#### trustHost?[](#trusthost)

```
optional trustHost: boolean;
```

Auth.js relies on the incoming request’s `host` header to function correctly. For this reason this property needs to be set to `true`.

Make sure that your deployment platform sets the `host` header safely.

Official Auth.js-based libraries will attempt to set this value automatically for some deployment platforms (eg.: Vercel) that are known to set the `host` header safely.

##### Inherited from[](#inherited-from-22)

`Omit.trustHost`

#### useSecureCookies?[](#usesecurecookies)

```
optional useSecureCookies: boolean;
```

When set to `true` then all cookies set by NextAuth.js will only be accessible from HTTPS URLs. This option defaults to `false` on URLs that start with `http://` (e.g. [http://localhost:3000](http://localhost:3000)) for developer convenience. You can manually set this option to `false` to disable this security feature and allow cookies to be accessible from non-secured URLs (this is not recommended).

-   ⚠ **This is an advanced option.** Advanced options are passed the same way as basic options, but **may have complex implications** or side effects. You should **try to avoid using advanced options** unless you are very comfortable using them.

The default is `false` HTTP and `true` for HTTPS sites.

##### Inherited from[](#inherited-from-23)

`Omit.useSecureCookies`

* * *

## NextAuthRequest[](#nextauthrequest)

### Extends[](#extends-4)

-   `unknown`

### Properties[](#properties-5)

#### auth[](#auth)

```
auth: null | Session;
```

* * *

## NextAuthResult[](#nextauthresult)

The result of invoking [NextAuth](nextjs#default), initialized with the [NextAuthConfig](nextjs#nextauthconfig). It contains methods to set up and interact with NextAuth.js in your Next.js app.

### Properties[](#properties-6)

#### auth[](#auth-1)

```
auth: (...args) => Promise<null | Session> & (...args) => Promise<null | Session> & (...args) => Promise<null | Session> & (...args) => AppRouteHandlerFn & (...args) => NextMiddleware;
```

A universal method to interact with NextAuth.js in your Next.js app. After initializing NextAuth.js in `auth.ts`, use this method in Middleware, Server Components, Route Handlers (`app/`), and Edge or Node.js API Routes (`pages/`).

##### In Middleware[](#in-middleware)

Adding `auth` to your Middleware is optional, but recommended to keep the user session alive.

Authentication is done by the [callbacks.authorized](nextjs#callbacks) callback.

##### Examples[](#examples-1)

middleware.ts

```
export { auth as middleware } from "./auth"
```

Alternatively you can wrap your own middleware with `auth`, where `req` is extended with `auth`:

middleware.ts

```
import { auth } from "./auth"
export default auth((req) => {
  // req.auth
})
```

```
// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
```

##### In Server Components[](#in-server-components)

app/page.ts

```
import { auth } from "../auth"
 
export default async function Page() {
  const { user } = await auth()
  return <p>Hello {user?.name}</p>
}
```

##### In Route Handlers[](#in-route-handlers)

app/api/route.ts

```
import { auth } from "../../auth"
 
export const POST = auth((req) => {
  // req.auth
})
```

##### In Edge API Routes[](#in-edge-api-routes)

pages/api/protected.ts

```
import { auth } from "../../auth"
 
export default auth((req) => {
  // req.auth
})
 
export const config = { runtime: "edge" }
```

##### In API Routes[](#in-api-routes)

pages/api/protected.ts

```
import { auth } from "../auth"
import type { NextApiRequest, NextApiResponse } from "next"
 
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await auth(req, res)
  if (session) {
    // Do something with the session
    return res.json("This is protected content.")
  }
  res.status(401).json("You must be signed in.")
}
```

##### In `getServerSideProps`[](#in-getserversideprops)

pages/protected-ssr.ts

```
import { auth } from "../auth"
 
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await auth(context)
 
  if (session) {
    // Do something with the session
    return { props: { session, content: (await res.json()).content } }
  }
 
  return { props: {} }
}
```

#### handlers[](#handlers)

```
handlers: AppRouteHandlers;
```

The NextAuth.js [Route Handler](https://beta.nextjs.org/docs/routing/route-handlers) methods. These are used to expose an endpoint for OAuth/Email providers, as well as REST API endpoints (such as `/api/auth/session`) that can be contacted from the client.

After initializing NextAuth.js in `auth.ts`, re-export these methods.

In `app/api/auth/[...nextauth]/route.ts`:

app/api/auth/\[...nextauth\]/route.ts

```
export { GET, POST } from "../../../../auth"
export const runtime = "edge" // optional
```

Then `auth.ts`:

auth.ts

```
// ...
export const { handlers: { GET, POST }, auth } = NextAuth({...})
```

#### signIn()[](#signin-2)

```
signIn: <P, R>(provider?, options?, authorizationParams?) => Promise<R extends false ? any : never>;
```

Sign in with a provider. If no provider is specified, the user will be redirected to the sign in page.

By default, the user is redirected to the current page after signing in. You can override this behavior by setting the `redirectTo` option with a relative path.

##### Type Parameters[](#type-parameters)

Type Parameter

Default type

`P` _extends_ [`ProviderId`](core/providers#providerid)

\-

`R` _extends_ `boolean`

`true`

##### Parameters[](#parameters-11)

Parameter

Type

Description

`provider`?

`P`

Provider to sign in to

`options`?

| [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) | { `redirect`: `R`; `redirectTo`: `string`; } & [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

\-

`authorizationParams`?

| `string` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `string`\> | [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) | `string`\[\]\[\]

\-

##### Returns[](#returns-12)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`R` _extends_ `false` ? `any` : `never`\>

##### Example[](#example-6)

app/layout.tsx

```
import { signIn } from "../auth"
 
export default function Layout() {
 return (
  <form action={async () => {
    "use server"
    await signIn("github")
  }}>
   <button>Sign in with GitHub</button>
  </form>
)
```

If an error occurs during signin, an instance of [AuthError](nextjs#autherror) will be thrown. You can catch it like this:

app/layout.tsx

```
import { AuthError } from "next-auth"
import { signIn } from "../auth"
 
export default function Layout() {
 return (
   <form action={async (formData) => {
     "use server"
     try {
       await signIn("credentials", formData)
    } catch(error) {
      if (error instanceof AuthError) // Handle auth errors
      throw error // Rethrow all other errors
    }
   }}>
    <button>Sign in</button>
  </form>
 )
}
```

#### signOut()[](#signout-1)

```
signOut: <R>(options?) => Promise<R extends false ? any : never>;
```

Sign out the user. If the session was created using a database strategy, the session will be removed from the database and the related cookie is invalidated. If the session was created using a JWT, the cookie is invalidated.

By default the user is redirected to the current page after signing out. You can override this behavior by setting the `redirectTo` option with a relative path.

##### Type Parameters[](#type-parameters-1)

Type Parameter

Default type

`R` _extends_ `boolean`

`true`

##### Parameters[](#parameters-12)

Parameter

Type

Description

`options`?

{ `redirect`: `R`; `redirectTo`: `string`; }

\-

`options.redirect`?

`R`

If set to `false`, the `signOut` method will return the URL to redirect to instead of redirecting automatically.

`options.redirectTo`?

`string`

The relative path to redirect to after signing out. By default, the user is redirected to the current page.

##### Returns[](#returns-13)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`R` _extends_ `false` ? `any` : `never`\>

##### Example[](#example-7)

app/layout.tsx

```
import { signOut } from "../auth"
 
export default function Layout() {
 return (
  <form action={async () => {
    "use server"
    await signOut()
  }}>
   <button>Sign out</button>
  </form>
)
```

#### unstable\_update()[](#unstable_update)

```
unstable_update: (data) => Promise<null | Session>;
```

##### Parameters[](#parameters-13)

Parameter

Type

`data`

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)< | [`Session`](nextjs#session-2) | { `user`: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<`undefined` | [`User`](nextjs#user-2)\>; }>

##### Returns[](#returns-14)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`null` | [`Session`](nextjs#session-2)\>

* * *

## Profile[](#profile)

The user info returned from your OAuth provider.

### See[](#see-2)

[https://openid.net/specs/openid-connect-core-1\_0.html#StandardClaims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)

### Indexable[](#indexable-1)

\[`claim`: `string`\]: `unknown`

### Properties[](#properties-7)

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

## Session[](#session-3)

The active session of the logged in user.

### Extends[](#extends-5)

-   [`DefaultSession`](nextjs#defaultsession)

### Properties[](#properties-8)

#### expires[](#expires-1)

```
expires: string;
```

##### Inherited from[](#inherited-from-24)

[`DefaultSession`](nextjs#defaultsession).[`expires`](nextjs#expires)

#### user?[](#user-1)

```
optional user: User;
```

##### Inherited from[](#inherited-from-25)

[`DefaultSession`](nextjs#defaultsession).[`user`](nextjs#user)

* * *

## User[](#user-2)

The shape of the returned object in the OAuth providers’ `profile` callback, available in the `jwt` and `session` callbacks, or the second parameter of the `session` callback, when using a database.

### Extends[](#extends-6)

-   [`DefaultUser`](core/types#defaultuser)

### Extended by[](#extended-by-2)

-   [`AdapterUser`](next-auth/adapters#adapteruser)

### Properties[](#properties-9)

#### email?[](#email-1)

```
optional email: null | string;
```

##### Inherited from[](#inherited-from-26)

[`DefaultUser`](core/types#defaultuser).[`email`](core/types#email)

#### id?[](#id-1)

```
optional id: string;
```

##### Inherited from[](#inherited-from-27)

[`DefaultUser`](core/types#defaultuser).[`id`](core/types#id)

#### image?[](#image)

```
optional image: null | string;
```

##### Inherited from[](#inherited-from-28)

[`DefaultUser`](core/types#defaultuser).[`image`](core/types#image)

#### name?[](#name-1)

```
optional name: null | string;
```

##### Inherited from[](#inherited-from-29)

[`DefaultUser`](core/types#defaultuser).[`name`](core/types#name-1)

* * *

## customFetch[](#customfetch)

```
const customFetch: unique symbol;
```

🚫

This option allows you to override the default `fetch` function used by the provider to make requests to the provider’s OAuth endpoints directly. Used incorrectly, it can have security implications.

It can be used to support corporate proxies, custom fetch libraries, cache discovery endpoints, add mocks for testing, logging, set custom headers/params for non-spec compliant providers, etc.

### Example[](#example-8)

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

## default()[](#default-13)

```
function default(config): NextAuthResult
```

Initialize NextAuth.js.

### Parameters[](#parameters-14)

Parameter

Type

`config`

| [`NextAuthConfig`](nextjs#nextauthconfig) | (`request`) => [`Awaitable`](core/types#awaitablet)<[`NextAuthConfig`](nextjs#nextauthconfig)\>

### Returns[](#returns-15)

[`NextAuthResult`](nextjs#nextauthresult)

### Examples[](#examples-2)

auth.ts

```
import NextAuth from "next-auth"
import GitHub from "@auth/core/providers/github"
 
export const { handlers, auth } = NextAuth({ providers: [GitHub] })
```

Lazy initialization:

auth.ts

```
import NextAuth from "next-auth"
import GitHub from "@auth/core/providers/github"
 
export const { handlers, auth } = NextAuth(async (req) => {
  console.log(req) // do something with the request
  return {
    providers: [GitHub],
  },
})
```

[types](/reference/core/types "types")[adapters](/reference/nextjs/adapters "adapters")
