[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")concept2

# providers/concept2

Built-in **Concept2** integration.[![](https://authjs.dev/img/providers/concept2.svg)](https://concept2.com)

## Concept2Profile[](#concept2profile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### age\_restricted[](#age_restricted)

```
age_restricted: boolean;
```

#### country[](#country)

```
country: string;
```

#### dob[](#dob)

```
dob: string;
```

#### email[](#email)

```
email: string;
```

#### email\_permission[](#email_permission)

```
email_permission: null | boolean;
```

#### first\_name[](#first_name)

```
first_name: string;
```

#### gender[](#gender)

```
gender: string;
```

#### id[](#id)

```
id: number;
```

#### last\_name[](#last_name)

```
last_name: string;
```

#### logbook\_privacy[](#logbook_privacy)

```
logbook_privacy: null | string;
```

#### max\_heart\_rate[](#max_heart_rate)

```
max_heart_rate: null | number;
```

#### profile\_image[](#profile_image)

```
profile_image: string;
```

#### username[](#username)

```
username: string;
```

#### weight[](#weight)

```
weight: null | number;
```

* * *

## default()[](#default)

```
function default(options): OAuthConfig<Concept2Profile>
```

Add Concept2 login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/concept2
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Concept2 from "@auth/core/providers/concept2"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Concept2({
      clientId: CONCEPT2_CLIENT_ID,
      clientSecret: CONCEPT2_CLIENT_SECRET
    }),
  ],
})
```

### Resources[](#resources)

-   [Concept2 OAuth documentation](https://log.concept2.com/developers/documentation/)

### Notes[](#notes)

By default, Auth.js assumes that the Concept2 provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Concept2 provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/next-auth/src/providers/concept2.ts)). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/providers/custom-provider#override-default-options).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`Concept2Profile`](concept2#concept2profile)\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`Concept2Profile`](concept2#concept2profile)\>

[coinbase](/reference/core/providers/coinbase "coinbase")[credentials](/reference/core/providers/credentials "credentials")
