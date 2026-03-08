[API reference](/reference/overview "API reference")[@auth/sveltekit](/reference/sveltekit "@auth/sveltekit")types

# types

## SvelteKitAuthConfig[](#sveltekitauthconfig)

Configure the SvelteKitAuth method.

### Extends[](#extends)

-   [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)<[`AuthConfig`](../core#authconfig), `"raw"`\>

### Properties[](#properties)

#### adapter?[](#adapter)

```
optional adapter: Adapter;
```

You can use the adapter option to pass in your database adapter.

##### Inherited from[](#inherited-from)

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

##### Inherited from[](#inherited-from-1)

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
};
```

Callbacks are asynchronous functions you can use to control what happens when an action is performed. Callbacks are _extremely powerful_, especially in scenarios involving JSON Web Tokens as they **allow you to implement access controls without a database** and to **integrate with external databases or APIs**.

##### jwt()?[](#jwt)

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

{ `account`: `null` | [`Account`](../sveltekit#account); `isNewUser`: `boolean`; `profile`: [`Profile`](../sveltekit#profile); `session`: `any`; `token`: [`JWT`](../core/jwt#jwt); `trigger`: `"signIn"` | `"update"` | `"signUp"`; `user`: | [`User`](../sveltekit#user-2) | [`AdapterUser`](../core/adapters#adapteruser); }

\-

`params.account`?

`null` | [`Account`](../sveltekit#account)

Contains information about the provider that was used to sign in. Also includes TokenSet **Note** available when `trigger` is `"signIn"` or `"signUp"`

`params.isNewUser`?

`boolean`

**Deprecated** use `trigger === "signUp"` instead

`params.profile`?

[`Profile`](../sveltekit#profile)

The OAuth profile returned from your provider. (In case of OIDC it will be the decoded ID Token or /userinfo response) **Note** available when `trigger` is `"signIn"`.

`params.session`?

`any`

When using [AuthConfig.session](../core#session-2) `strategy: "jwt"`, this is the data sent from the client via the `useSession().update` method. ⚠ Note, you should validate this data before using it.

`params.token`

[`JWT`](../core/jwt#jwt)

When `trigger` is `"signIn"` or `"signUp"`, it will be a subset of [JWT](../core/jwt#jwt), `name`, `email` and `image` will be included. Otherwise, it will be the full [JWT](../core/jwt#jwt) for subsequent calls.

`params.trigger`?

`"signIn"` | `"update"` | `"signUp"`

Check why was the jwt callback invoked. Possible reasons are: - user sign-in: First time the callback is invoked, `user`, `profile` and `account` will be present. - user sign-up: a user is created for the first time in the database (when [AuthConfig.session](../core#session-2).strategy is set to `"database"`) - update event: Triggered by the `useSession().update` method. In case of the latter, `trigger` will be `undefined`.

`params.user`

| [`User`](../sveltekit#user-2) | [`AdapterUser`](../core/adapters#adapteruser)

Either the result of the OAuthConfig.profile or the CredentialsConfig.authorize callback. **Note** available when `trigger` is `"signIn"` or `"signUp"`. Resources: - [Credentials Provider](https://authjs.dev/getting-started/authentication/credentials) - [User database model](https://authjs.dev/guides/creating-a-database-adapter#user-management)

###### Returns[](#returns)

[`Awaitable`](../core/types#awaitablet)<`null` | [`JWT`](../core/jwt#jwt)\>

##### redirect()?[](#redirect)

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

[`Awaitable`](../core/types#awaitablet)<`string`\>

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

##### session()?[](#session)

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

{ `session`: { `user`: [`AdapterUser`](../core/adapters#adapteruser); } & [`AdapterSession`](../core/adapters#adaptersession); `user`: [`AdapterUser`](../core/adapters#adapteruser); } & { `session`: [`Session`](../sveltekit#session); `token`: [`JWT`](../core/jwt#jwt); } & { `newSession`: `any`; `trigger`: `"update"`; }

###### Returns[](#returns-2)

[`Awaitable`](../core/types#awaitablet)< | [`Session`](../sveltekit#session) | [`DefaultSession`](../sveltekit#defaultsession)\>

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

##### signIn()?[](#signin)

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

{ `account`: `null` | [`Account`](../sveltekit#account); `credentials`: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`CredentialInput`](../core/providers/credentials#credentialinput)\>; `email`: { `verificationRequest`: `boolean`; }; `profile`: [`Profile`](../sveltekit#profile); `user`: | [`User`](../sveltekit#user-2) | [`AdapterUser`](../core/adapters#adapteruser); }

\-

`params.account`?

`null` | [`Account`](../sveltekit#account)

\-

`params.credentials`?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`CredentialInput`](../core/providers/credentials#credentialinput)\>

If Credentials provider is used, it contains the user credentials

`params.email`?

{ `verificationRequest`: `boolean`; }

If Email provider is used, on the first call, it contains a `verificationRequest: true` property to indicate it is being triggered in the verification request flow. When the callback is invoked after a user has clicked on a sign in link, this property will not be present. You can check for the `verificationRequest` property to avoid sending emails to addresses or domains on a blocklist or to only explicitly generate them for email address in an allow list.

`params.email.verificationRequest`?

`boolean`

\-

`params.profile`?

[`Profile`](../sveltekit#profile)

If OAuth provider is used, it contains the full OAuth profile returned by your provider.

`params.user`

| [`User`](../sveltekit#user-2) | [`AdapterUser`](../core/adapters#adapteruser)

\-

###### Returns[](#returns-3)

[`Awaitable`](../core/types#awaitablet)<`string` | `boolean`\>

###### Example[](#example-2)

```
callbacks: {
 async signIn({ profile }) {
  // Only allow sign in for users with email addresses ending with "yourdomain.com"
  return profile?.email?.endsWith("@yourdomain.com")
 }
}
```

##### Inherited from[](#inherited-from-2)

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

##### Inherited from[](#inherited-from-3)

`Omit.cookies`

#### debug?[](#debug)

```
optional debug: boolean;
```

Set debug to true to enable debug messages for authentication and database operations.

-   ⚠ If you added a custom [AuthConfig.logger](../core#logger), this setting is ignored.

##### Default[](#default-2)

```
false
```

##### Inherited from[](#inherited-from-4)

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

###### Parameters[](#parameters-4)

Parameter

Type

`message`

{ `user`: [`User`](../sveltekit#user-2); }

`message.user`

[`User`](../sveltekit#user-2)

###### Returns[](#returns-4)

[`Awaitable`](../core/types#awaitablet)<`void`\>

##### linkAccount()?[](#linkaccount)

```
optional linkAccount: (message) => Awaitable<void>;
```

###### Parameters[](#parameters-5)

Parameter

Type

`message`

{ `account`: [`Account`](../sveltekit#account); `profile`: | [`User`](../sveltekit#user-2) | [`AdapterUser`](../core/adapters#adapteruser); `user`: | [`User`](../sveltekit#user-2) | [`AdapterUser`](../core/adapters#adapteruser); }

`message.account`

[`Account`](../sveltekit#account)

`message.profile`

| [`User`](../sveltekit#user-2) | [`AdapterUser`](../core/adapters#adapteruser)

`message.user`

| [`User`](../sveltekit#user-2) | [`AdapterUser`](../core/adapters#adapteruser)

###### Returns[](#returns-5)

[`Awaitable`](../core/types#awaitablet)<`void`\>

##### session()?[](#session-1)

```
optional session: (message) => Awaitable<void>;
```

The message object will contain one of these depending on if you use JWT or database persisted sessions:

-   `token`: The JWT for this session.
-   `session`: The session object from your adapter.

###### Parameters[](#parameters-6)

Parameter

Type

`message`

{ `session`: [`Session`](../sveltekit#session); `token`: [`JWT`](../core/jwt#jwt); }

`message.session`

[`Session`](../sveltekit#session)

`message.token`

[`JWT`](../core/jwt#jwt)

###### Returns[](#returns-6)

[`Awaitable`](../core/types#awaitablet)<`void`\>

##### signIn()?[](#signin-1)

```
optional signIn: (message) => Awaitable<void>;
```

If using a `credentials` type auth, the user is the raw response from your credential provider. For other providers, you’ll get the User object from your adapter, the account, and an indicator if the user was new to your Adapter.

###### Parameters[](#parameters-7)

Parameter

Type

`message`

{ `account`: `null` | [`Account`](../sveltekit#account); `isNewUser`: `boolean`; `profile`: [`Profile`](../sveltekit#profile); `user`: [`User`](../sveltekit#user-2); }

`message.account`?

`null` | [`Account`](../sveltekit#account)

`message.isNewUser`?

`boolean`

`message.profile`?

[`Profile`](../sveltekit#profile)

`message.user`

[`User`](../sveltekit#user-2)

###### Returns[](#returns-7)

[`Awaitable`](../core/types#awaitablet)<`void`\>

##### signOut()?[](#signout)

```
optional signOut: (message) => Awaitable<void>;
```

The message object will contain one of these depending on if you use JWT or database persisted sessions:

-   `token`: The JWT for this session.
-   `session`: The session object from your adapter that is being ended.

###### Parameters[](#parameters-8)

Parameter

Type

`message`

| { `session`: | `undefined` | `null` | `void` | [`AdapterSession`](../core/adapters#adaptersession); } | { `token`: `null` | [`JWT`](../core/jwt#jwt); }

###### Returns[](#returns-8)

[`Awaitable`](../core/types#awaitablet)<`void`\>

##### updateUser()?[](#updateuser)

```
optional updateUser: (message) => Awaitable<void>;
```

###### Parameters[](#parameters-9)

Parameter

Type

`message`

{ `user`: [`User`](../sveltekit#user-2); }

`message.user`

[`User`](../sveltekit#user-2)

###### Returns[](#returns-9)

[`Awaitable`](../core/types#awaitablet)<`void`\>

##### Default[](#default-3)

```
{}
```

##### Inherited from[](#inherited-from-5)

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

##### Inherited from[](#inherited-from-6)

`Omit.experimental`

#### jwt?[](#jwt-1)

```
optional jwt: Partial<JWTOptions>;
```

JSON Web Tokens are enabled by default if you have not specified an [AuthConfig.adapter](../core#adapter). JSON Web Tokens are encrypted (JWE) by default. We recommend you keep this behaviour.

##### Inherited from[](#inherited-from-7)

`Omit.jwt`

#### logger?[](#logger)

```
optional logger: Partial<LoggerInstance>;
```

Override any of the logger levels (`undefined` levels will use the built-in logger), and intercept logs in NextAuth. You can use this option to send NextAuth logs to a third-party logging service.

##### Example[](#example-3)

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

-   ⚠ When set, the [AuthConfig.debug](../core#debug) option is ignored

##### Default[](#default-6)

```
console
```

##### Inherited from[](#inherited-from-8)

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

##### Example[](#example-4)

```
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/auth/new-user'
  }
```

##### Inherited from[](#inherited-from-9)

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

##### Inherited from[](#inherited-from-10)

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

##### Inherited from[](#inherited-from-11)

`Omit.redirectProxyUrl`

#### secret?[](#secret)

```
optional secret: string | string[];
```

A random string used to hash tokens, sign cookies and generate cryptographic keys.

To generate a random string, you can use the Auth.js CLI: `npx auth secret`

##### Note[](#note-2)

You can also pass an array of secrets, in which case the first secret that successfully decrypts the JWT will be used. This is useful for rotating secrets without invalidating existing sessions. The newer secret should be added to the start of the array, which will be used for all new sessions.

##### Inherited from[](#inherited-from-12)

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

###### Returns[](#returns-10)

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

##### Inherited from[](#inherited-from-13)

`Omit.session`

#### skipCSRFCheck?[](#skipcsrfcheck)

```
optional skipCSRFCheck: typeof skipCSRFCheck;
```

##### Inherited from[](#inherited-from-14)

`Omit.skipCSRFCheck`

#### theme?[](#theme)

```
optional theme: Theme;
```

Changes the theme of built-in [AuthConfig.pages](../core#pages).

##### Inherited from[](#inherited-from-15)

`Omit.theme`

#### trustHost?[](#trusthost)

```
optional trustHost: boolean;
```

Auth.js relies on the incoming request’s `host` header to function correctly. For this reason this property needs to be set to `true`.

Make sure that your deployment platform sets the `host` header safely.

Official Auth.js-based libraries will attempt to set this value automatically for some deployment platforms (eg.: Vercel) that are known to set the `host` header safely.

##### Inherited from[](#inherited-from-16)

`Omit.trustHost`

#### useSecureCookies?[](#usesecurecookies)

```
optional useSecureCookies: boolean;
```

When set to `true` then all cookies set by NextAuth.js will only be accessible from HTTPS URLs. This option defaults to `false` on URLs that start with `http://` (e.g. [http://localhost:3000](http://localhost:3000)) for developer convenience. You can manually set this option to `false` to disable this security feature and allow cookies to be accessible from non-secured URLs (this is not recommended).

-   ⚠ **This is an advanced option.** Advanced options are passed the same way as basic options, but **may have complex implications** or side effects. You should **try to avoid using advanced options** unless you are very comfortable using them.

The default is `false` HTTP and `true` for HTTPS sites.

##### Inherited from[](#inherited-from-17)

`Omit.useSecureCookies`

[env](/reference/sveltekit/env "env")[@auth/express](/reference/express "@auth/express")
