[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")linkedin

# providers/linkedin

Built-in **LinkedIn** integration.[![](https://authjs.dev/img/providers/linkedin.svg)](https://linkedin.com)

## LinkedInProfile[](#linkedinprofile)

### See[](#see)

[https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/sign-in-with-linkedin-v2#response-body-schema](https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/sign-in-with-linkedin-v2#response-body-schema)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### email[](#email)

```
email: string;
```

#### email\_verified[](#email_verified)

```
email_verified: boolean;
```

#### family\_name[](#family_name)

```
family_name: string;
```

#### given\_name[](#given_name)

```
given_name: string;
```

#### locale[](#locale)

```
locale: string;
```

#### name[](#name)

```
name: string;
```

#### picture[](#picture)

```
picture: string;
```

#### sub[](#sub)

```
sub: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OIDCConfig<P>
```

Add LinkedIn login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/linkedin
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import LinkedIn from "@auth/core/providers/linkedin"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    LinkedIn({
      clientId: LINKEDIN_CLIENT_ID,
      clientSecret: LINKEDIN_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [LinkedIn OAuth documentation](https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow)
-   [LinkedIn app console](https://www.linkedin.com/developers/apps/)

### Notes[](#notes)

By default, Auth.js assumes that the LinkedIn provider is based on the [OIDC](https://openid.net/specs/openid-connect-core-1_0.html) specification.

💡

The LinkedIn provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/linkedin.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`LinkedInProfile`](linkedin#linkedinprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<`P`\>

[line](/reference/core/providers/line "line")[logto](/reference/core/providers/logto "logto")
