[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")passkey

# providers/passkey

Built-in **Passkey** integration.[![](https://authjs.dev/img/providers/passkey.svg)](https://passkeys.dev)

## default()[](#default)

```
function default(config): WebAuthnConfig
```

Add Passkey login to your page.

### Setup[](#setup)

Install the required peer dependency.

npmpnpmyarnbun

```
npm install @simplewebauthn/browser@9.0.1
```

```
pnpm add @simplewebauthn/browser@9.0.1
```

```
yarn add @simplewebauthn/browser@9.0.1
```

```
bun add @simplewebauthn/browser@9.0.1
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Passkey from "@auth/core/providers/passkey"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [Passkey],
})
```

### Resources[](#resources)

-   [SimpleWebAuthn - Server side](https://simplewebauthn.dev/docs/packages/server)
-   [SimpleWebAuthn - Client side](https://simplewebauthn.dev/docs/packages/client)
-   [Passkeys.dev - Intro](https://passkeys.dev/docs/intro/what-are-passkeys/)
-   [Passkeys.dev - Specifications](https://passkeys.dev/docs/reference/specs/)
-   [Source code](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/passkey.ts)

### Notes[](#notes)

This provider is an extension of the WebAuthn provider that defines some default values associated with Passkey support. You may override these, but be aware that authenticators may not recognize your credentials as Passkey credentials if you do.

💡

The Passkey provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/passkey.ts). To override the defaults for your use case, check out [customizing a built-in WebAuthn provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`WebAuthnConfig`](webauthn#webauthnconfig)\>

### Returns[](#returns)

[`WebAuthnConfig`](webauthn#webauthnconfig)

[passage](/reference/core/providers/passage "passage")[patreon](/reference/core/providers/patreon "patreon")
