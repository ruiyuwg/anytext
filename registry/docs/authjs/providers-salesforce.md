[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")salesforce

# providers/salesforce

Built-in **Salesforce** integration.[![](https://authjs.dev/img/providers/salesforce.svg)](https://www.salesforce.com/ap/?ir=1)

## SalesforceProfile[](#salesforceprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### email[](#email)

```
email: string;
```

#### nickname[](#nickname)

```
nickname: string;
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
function default(options): OIDCConfig<SalesforceProfile>
```

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/salesforce
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Salesforce from "@auth/core/providers/salesforce"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Salesforce({
      clientId: AUTH_SALESFORCE_ID,
      clientSecret: AUTH_SALESFORCE_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Auth0 docs](https://auth0.com/docs/authenticate)

### Notes[](#notes)

The Salesforce provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/salesforce.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

## Help[](#help)

If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`SalesforceProfile`](salesforce#salesforceprofile)\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`SalesforceProfile`](salesforce#salesforceprofile)\>

[roblox](/reference/core/providers/roblox "roblox")[sendgrid](/reference/core/providers/sendgrid "sendgrid")
