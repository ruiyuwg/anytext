[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")naver

# providers/naver

Built-in **Naver** integration.[![](https://authjs.dev/img/providers/naver.svg)](https://naver.com)

## NaverProfile[](#naverprofile)

[https://developers.naver.com/docs/login/profile/profile.md](https://developers.naver.com/docs/login/profile/profile.md)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### message[](#message)

```
message: string;
```

#### response[](#response)

```
response: {
  age: string;
  birthday: string;
  birthyear: string;
  email: string;
  gender: "F" | "M" | "U";
  id: string;
  mobile: string;
  name: string;
  nickname: string;
  profile_image: string;
};
```

##### age?[](#age)

```
optional age: string;
```

##### birthday?[](#birthday)

```
optional birthday: string;
```

##### birthyear?[](#birthyear)

```
optional birthyear: string;
```

##### email?[](#email)

```
optional email: string;
```

##### gender?[](#gender)

```
optional gender: "F" | "M" | "U";
```

##### id[](#id)

```
id: string;
```

##### mobile?[](#mobile)

```
optional mobile: string;
```

##### name?[](#name)

```
optional name: string;
```

##### nickname?[](#nickname)

```
optional nickname: string;
```

##### profile\_image?[](#profile_image)

```
optional profile_image: string;
```

#### resultcode[](#resultcode)

```
resultcode: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Naver login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/naver
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Naver from "@auth/core/providers/naver"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Naver({ clientId: NAVER_CLIENT_ID, clientSecret: NAVER_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [Naver OAuth documentation](https://developers.naver.com/docs/login/overview/overview.md)
-   [Naver OAuth documentation 2](https://developers.naver.com/docs/login/api/api.md)

### Notes[](#notes)

By default, Auth.js assumes that the Naver provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Naver provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/naver.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`NaverProfile`](naver#naverprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[microsoft-entra-id](/reference/core/providers/microsoft-entra-id "microsoft-entra-id")[netlify](/reference/core/providers/netlify "netlify")
