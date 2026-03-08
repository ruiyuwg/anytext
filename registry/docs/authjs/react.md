[API reference](/reference/overview "API reference")[next-auth](/reference/nextjs "next-auth")react

# react

NextAuth.js is the official integration of Auth.js for Next.js applications. It supports both [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components) and the [Pages Router](https://nextjs.org/docs/pages). It includes methods for signing in, signing out, hooks, and a React Context provider to wrap your application and make session data available anywhere.

For use in [Server Actions](https://nextjs.org/docs/app/api-reference/functions/server-actions), check out [these methods](https://authjs.dev/guides/upgrade-to-v5#methods)

## GetSessionParams[](#getsessionparams)

### Properties[](#properties)

#### broadcast?[](#broadcast)

```
optional broadcast: boolean;
```

#### event?[](#event)

```
optional event: string;
```

#### triggerEvent?[](#triggerevent)

```
optional triggerEvent: boolean;
```

* * *

## SessionProviderProps[](#sessionproviderprops)

If you have session expiry times of 30 days (the default) or more, then you probably don’t need to change any of the default options.

However, if you need to customize the session behavior and/or are using short session expiry times, you can pass options to the provider to customize the behavior of the [useSession](react#usesession) hook.

### Properties[](#properties-1)

#### basePath?[](#basepath)

```
optional basePath: string;
```

#### baseUrl?[](#baseurl)

```
optional baseUrl: string;
```

#### children[](#children)

```
children: ReactNode;
```

#### refetchInterval?[](#refetchinterval)

```
optional refetchInterval: number;
```

A time interval (in seconds) after which the session will be re-fetched. If set to `0` (default), the session is not polled.

#### refetchOnWindowFocus?[](#refetchonwindowfocus)

```
optional refetchOnWindowFocus: boolean;
```

`SessionProvider` automatically refetches the session when the user switches between windows. This option activates this behaviour if set to `true` (default).

#### refetchWhenOffline?[](#refetchwhenoffline)

```
optional refetchWhenOffline: false;
```

Set to `false` to stop polling when the device has no internet access offline (determined by `navigator.onLine`)

[`navigator.onLine` documentation](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine)

#### session?[](#session)

```
optional session: null | Session;
```

* * *

## SignInOptions<Redirect>[](#signinoptionsredirect)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`\>

### Type Parameters[](#type-parameters)

Type Parameter

Default type

`Redirect` _extends_ `boolean`

`true`

### Indexable[](#indexable)

\[`key`: `string`\]: `unknown`

### Properties[](#properties-2)

#### callbackUrl?[](#callbackurl)

```
optional callbackUrl: string;
```

##### Deprecated[](#deprecated)

Use `redirectTo` instead.

#### redirect?[](#redirect)

```
optional redirect: Redirect;
```

You might want to deal with the signin response on the same page, instead of redirecting to another page. For example, if an error occurs (like wrong credentials given by the user), you might want to show an inline error message on the input field.

For this purpose, you can set this to option `redirect: false`.

#### redirectTo?[](#redirectto)

```
optional redirectTo: string;
```

Specify where the user should be redirected to after a successful signin.

By default, it is the page the sign-in was initiated from.

* * *

## SignInResponse[](#signinresponse)

### Properties[](#properties-3)

#### code[](#code)

```
code: undefined | string;
```

#### error[](#error)

```
error: undefined | string;
```

#### ok[](#ok)

```
ok: boolean;
```

#### status[](#status)

```
status: number;
```

#### url[](#url)

```
url: null | string;
```

* * *

## SignOutParams<Redirect>[](#signoutparamsredirect)

### Type Parameters[](#type-parameters-1)

Type Parameter

Default type

`Redirect` _extends_ `boolean`

`true`

### Properties[](#properties-4)

#### callbackUrl?[](#callbackurl-1)

```
optional callbackUrl: string;
```

##### Deprecated[](#deprecated-1)

Use `redirectTo` instead.

#### redirect?[](#redirect-1)

```
optional redirect: Redirect;
```

\[Documentation\]([https://next-auth.js.org/getting-started/client#using-the-redirect-false-option-1](https://next-auth.js.org/getting-started/client#using-the-redirect-false-option-1)

#### redirectTo?[](#redirectto-1)

```
optional redirectTo: string;
```

If you pass `redirect: false`, the page will not reload. The session will be deleted, and `useSession` is notified, so any indication about the user will be shown as logged out automatically. It can give a very nice experience for the user.

* * *

## SessionContextValue<R>[](#sessioncontextvaluer)

```
type SessionContextValue<R> = R extends true ? 
  | {
  data: Session;
  status: "authenticated";
  update: UpdateSession;
 }
  | {
  data: null;
  status: "loading";
  update: UpdateSession;
 } : 
  | {
  data: Session;
  status: "authenticated";
  update: UpdateSession;
 }
  | {
  data: null;
  status: "unauthenticated" | "loading";
  update: UpdateSession;
};
```

useSession() returns an object containing three things: a method called [update](react#updatesession), `data` and `status`.

### Type Parameters[](#type-parameters-2)

Type Parameter

Default type

`R` _extends_ `boolean`

`false`

* * *

## UpdateSession()[](#updatesession)

```
type UpdateSession = (data?) => Promise<Session | null>;
```

### Parameters[](#parameters)

Parameter

Type

`data`?

`any`

### Returns[](#returns)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`Session`](../nextjs#session-2) | `null`\>

### Todo[](#todo)

Document

* * *

## \_\_NEXTAUTH[](#__nextauth)

```
const __NEXTAUTH: AuthClientConfig;
```

* * *

## SessionContext[](#sessioncontext)

```
const SessionContext: Context<
  | undefined
  | {
  data: Session;
  status: "authenticated";
  update: UpdateSession;
 }
  | {
  data: null;
  status: "loading" | "unauthenticated";
  update: UpdateSession;
}>;
```

* * *

## getCsrfToken()[](#getcsrftoken)

```
function getCsrfToken(): Promise<string>
```

Returns the current Cross-Site Request Forgery Token (CSRF Token) required to make requests that changes state. (e.g. signing in or out, or updating the session).

[CSRF Prevention: Double Submit Cookie](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#double-submit-cookie)

### Returns[](#returns-1)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`string`\>

* * *

## getProviders()[](#getproviders)

```
function getProviders(): Promise<
  | null
| Record<ProviderId, ClientSafeProvider>>
```

### Returns[](#returns-2)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< | `null` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<[`ProviderId`](../core/providers#providerid), `ClientSafeProvider`\>>

* * *

## getSession()[](#getsession)

```
function getSession(params?): Promise<null | Session>
```

### Parameters[](#parameters-1)

Parameter

Type

`params`?

[`GetSessionParams`](react#getsessionparams)

### Returns[](#returns-3)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`null` | [`Session`](../nextjs#session-2)\>

* * *

## SessionProvider()[](#sessionprovider)

```
function SessionProvider(props): Element
```

[React Context](https://react.dev/learn/passing-data-deeply-with-context) provider to wrap the app (`pages/`) to make session data available anywhere.

When used, the session state is automatically synchronized across all open tabs/windows and they are all updated whenever they gain or lose focus or the state changes (e.g. a user signs in or out) when [SessionProviderProps.refetchOnWindowFocus](react#refetchonwindowfocus) is `true`.

`SessionProvider` is for client-side use only and when using [Next.js App Router (`app/`)](https://nextjs.org/blog/next-13-4#nextjs-app-router) you should prefer the `auth()` export.

### Parameters[](#parameters-2)

Parameter

Type

`props`

[`SessionProviderProps`](react#sessionproviderprops)

### Returns[](#returns-4)

`Element`

* * *

## signIn()[](#signin)

### Call Signature[](#call-signature)

```
function signIn(
   provider?, 
   options?, 
authorizationParams?): Promise<void>
```

Initiates a signin flow or sends the user to the signin page listing all possible providers. Handles CSRF protection.

#### Parameters[](#parameters-3)

Parameter

Type

`provider`?

[`ProviderId`](../core/providers#providerid)

`options`?

[`SignInOptions`](react#signinoptionsredirect)<`true`\>

`authorizationParams`?

`SignInAuthorizationParams`

#### Returns[](#returns-5)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\>

#### Note[](#note)

This method can only be used from Client Components (“use client” or Pages Router). For Server Actions, use the `signIn` method imported from the `auth` config.

### Call Signature[](#call-signature-1)

```
function signIn(
   provider?, 
   options?, 
authorizationParams?): Promise<SignInResponse>
```

Initiates a signin flow or sends the user to the signin page listing all possible providers. Handles CSRF protection.

#### Parameters[](#parameters-4)

Parameter

Type

`provider`?

[`ProviderId`](../core/providers#providerid)

`options`?

[`SignInOptions`](react#signinoptionsredirect)<`false`\>

`authorizationParams`?

`SignInAuthorizationParams`

#### Returns[](#returns-6)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`SignInResponse`](react#signinresponse)\>

#### Note[](#note-1)

This method can only be used from Client Components (“use client” or Pages Router). For Server Actions, use the `signIn` method imported from the `auth` config.

* * *

## signOut()[](#signout)

### Call Signature[](#call-signature-2)

```
function signOut(options?): Promise<void>
```

Initiate a signout, by destroying the current session. Handles CSRF protection.

#### Parameters[](#parameters-5)

Parameter

Type

`options`?

[`SignOutParams`](react#signoutparamsredirect)<`true`\>

#### Returns[](#returns-7)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\>

#### Note[](#note-2)

This method can only be used from Client Components (“use client” or Pages Router). For Server Actions, use the `signOut` method imported from the `auth` config.

### Call Signature[](#call-signature-3)

```
function signOut(options?): Promise<SignOutResponse>
```

Initiate a signout, by destroying the current session. Handles CSRF protection.

#### Parameters[](#parameters-6)

Parameter

Type

`options`?

[`SignOutParams`](react#signoutparamsredirect)<`false`\>

#### Returns[](#returns-8)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`SignOutResponse`\>

#### Note[](#note-3)

This method can only be used from Client Components (“use client” or Pages Router). For Server Actions, use the `signOut` method imported from the `auth` config.

* * *

## useSession()[](#usesession)

```
function useSession<R>(options?): SessionContextValue<R>
```

React Hook that gives you access to the logged in user’s session data and lets you modify it.

`useSession` is for client-side use only and when using [Next.js App Router (`app/`)](https://nextjs.org/blog/next-13-4#nextjs-app-router) you should prefer the `auth()` export.

### Type Parameters[](#type-parameters-3)

Type Parameter

`R` _extends_ `boolean`

### Parameters[](#parameters-7)

Parameter

Type

`options`?

`UseSessionOptions`<`R`\>

### Returns[](#returns-9)

[`SessionContextValue`](react#sessioncontextvaluer)<`R`\>

[next](/reference/nextjs/next "next")[webauthn](/reference/nextjs/webauthn "webauthn")
