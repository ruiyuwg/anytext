[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")duende-identity-server6

# providers/duende-identity-server6

Built-in **DuendeIdentityServer6** integration.[![](https://authjs.dev/img/providers/duende-identity-server6.svg)](https://docs.duendesoftware.com/identityserver/v6)

## DuendeISUser[](#duendeisuser)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### email[](#email)

```
email: string;
```

#### id[](#id)

```
id: string;
```

#### name[](#name)

```
name: string;
```

#### verified[](#verified)

```
verified: boolean;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add DuendeIdentityServer6 login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/duende-identity-server6
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import DuendeIdentityServer6 from "@auth/core/providers/duende-identity-server6"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    DuendeIdentityServer6({
      clientId: DIS6_CLIENT_ID,
      clientSecret: DIS6_CLIENT_SECRET,
      issuer: DIS6_ISSUER,
    }),
  ],
})
```

### Resources[](#resources)

-   [DuendeIdentityServer6 documentation](https://docs.duendesoftware.com/identityserver/v6)

### Notes[](#notes)

## Demo IdentityServer[](#demo-identityserver)

The configuration below is for the demo server at [https://demo.duendesoftware.com/](https://demo.duendesoftware.com/)

If you want to try it out, you can copy and paste the configuration below.

You can sign in to the demo service with either **bob/bob** or **alice/alice**.

```
import DuendeIdentityServer6 from "@auth/core/providers/duende-identity-server6"
providers: [
  DuendeIdentityServer6({
    clientId: "interactive.confidential",
    clientSecret: "secret",
    issuer: "https://demo.duendesoftware.com",
  })
]
```

By default, Auth.js assumes that the DuendeIdentityServer6 provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

💡

The DuendeIdentityServer6 provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/duende-identity-server6.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`DuendeISUser`](duende-identity-server6#duendeisuser)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[dropbox](/reference/core/providers/dropbox "dropbox")[email](/reference/core/providers/email "email")
