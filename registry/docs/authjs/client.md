[API reference](/reference/overview "API reference")[@auth/sveltekit](/reference/sveltekit "@auth/sveltekit")client

# client

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

### Properties[](#properties)

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

### Properties[](#properties-1)

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

### Properties[](#properties-2)

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

## SignOutResponse[](#signoutresponse)

### Properties[](#properties-3)

#### url[](#url-1)

```
url: string;
```

* * *

## SignInAuthorizationParams[](#signinauthorizationparams)

```
type SignInAuthorizationParams = 
  | string
  | string[][]
  | Record<string, string>
  | URLSearchParams;
```

Match `inputType` of `new URLSearchParams(inputType)`

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

#### Parameters[](#parameters)

Parameter

Type

`provider`?

[`ProviderId`](../core/providers#providerid)

`options`?

[`SignInOptions`](client#signinoptionsredirect)<`true`\>

`authorizationParams`?

[`SignInAuthorizationParams`](client#signinauthorizationparams)

#### Returns[](#returns)

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

#### Parameters[](#parameters-1)

Parameter

Type

`provider`?

[`ProviderId`](../core/providers#providerid)

`options`?

[`SignInOptions`](client#signinoptionsredirect)<`false`\>

`authorizationParams`?

[`SignInAuthorizationParams`](client#signinauthorizationparams)

#### Returns[](#returns-1)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`SignInResponse`](client#signinresponse)\>

#### Note[](#note-1)

This method can only be used from Client Components (“use client” or Pages Router). For Server Actions, use the `signIn` method imported from the `auth` config.

* * *

## signOut()[](#signout)

### Call Signature[](#call-signature-2)

```
function signOut(options?): Promise<void>
```

Initiate a signout, by destroying the current session. Handles CSRF protection.

#### Parameters[](#parameters-2)

Parameter

Type

`options`?

[`SignOutParams`](client#signoutparamsredirect)<`true`\>

#### Returns[](#returns-2)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\>

#### Note[](#note-2)

This method can only be used from Client Components (“use client” or Pages Router). For Server Actions, use the `signOut` method imported from the `auth` config.

### Call Signature[](#call-signature-3)

```
function signOut(options?): Promise<SignOutResponse>
```

Initiate a signout, by destroying the current session. Handles CSRF protection.

#### Parameters[](#parameters-3)

Parameter

Type

`options`?

[`SignOutParams`](client#signoutparamsredirect)<`false`\>

#### Returns[](#returns-3)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`SignOutResponse`](client#signoutresponse)\>

#### Note[](#note-3)

This method can only be used from Client Components (“use client” or Pages Router). For Server Actions, use the `signOut` method imported from the `auth` config.

[actions](/reference/sveltekit/actions "actions")[env](/reference/sveltekit/env "env")
