[API reference](/reference/overview "API reference")[next-auth](/reference/nextjs "next-auth")webauthn

# webauthn

## signIn()[](#signin)

### Call Signature[](#call-signature)

```
function signIn(
   provider?, 
   options?, 
authorizationParams?): Promise<void>
```

Initiate a WebAuthn signin flow.

#### Parameters[](#parameters)

Parameter

Type

`provider`?

[`ProviderId`](../core/providers#providerid)

`options`?

[`SignInOptions`](react#signinoptionsredirect)<`true`\>

`authorizationParams`?

`SignInAuthorizationParams`

#### Returns[](#returns)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\>

#### See[](#see)

[https://authjs.dev/getting-started/authentication/webauthn](https://authjs.dev/getting-started/authentication/webauthn)

### Call Signature[](#call-signature-1)

```
function signIn(
   provider?, 
   options?, 
authorizationParams?): Promise<SignInResponse>
```

Initiate a WebAuthn signin flow.

#### Parameters[](#parameters-1)

Parameter

Type

`provider`?

[`ProviderId`](../core/providers#providerid)

`options`?

[`SignInOptions`](react#signinoptionsredirect)<`false`\>

`authorizationParams`?

`SignInAuthorizationParams`

#### Returns[](#returns-1)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`SignInResponse`](react#signinresponse)\>

#### See[](#see-1)

[https://authjs.dev/getting-started/authentication/webauthn](https://authjs.dev/getting-started/authentication/webauthn)

[react](/reference/nextjs/react "react")[@auth/sveltekit](/reference/sveltekit "@auth/sveltekit")
