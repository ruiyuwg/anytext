[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")identity-server4

# providers/identity-server4

Built-in **IdentityServer4** integration.[![](https://authjs.dev/img/providers/identity-server4.svg)](https://identityserver4.readthedocs.io)

## default()[](#default)

```
function default(options): OAuthConfig<Record<string, any>>
```

Add IdentityServer4 login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/identity-server4
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import IdentityServer4 from "@auth/core/providers/identity-server4"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    IdentityServer4({
      clientId: IDENTITY_SERVER4_CLIENT_ID,
      clientSecret: IDENTITY_SERVER4_CLIENT_SECRET,
      issuer: IDENTITY_SERVER4_ISSUER,
    }),
  ],
})
```

### Resources[](#resources)

-   [IdentityServer4 OAuth documentation](https://identityserver4.readthedocs.io/en/latest/)

### Notes[](#notes)

By default, Auth.js assumes that the IdentityServer4 provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

⚠️

IdentityServer4 is discontinued and only releases security updates until November 2022. You should consider an alternative provider.

💡

The IdentityServer4 provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/identity-server4.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

[huggingface](/reference/core/providers/huggingface "huggingface")[instagram](/reference/core/providers/instagram "instagram")
