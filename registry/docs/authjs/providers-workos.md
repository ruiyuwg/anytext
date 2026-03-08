[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")workos

# providers/workos

Built-in **WorkOS** integration.[![](https://authjs.dev/img/providers/workos.svg)](https://workos.com/)

## WorkOSProfile[](#workosprofile)

-   [The returned profile object](https://workos.com/docs/reference/sso/profile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### connection\_id[](#connection_id)

```
connection_id: string;
```

#### connection\_type[](#connection_type)

```
connection_type: string;
```

#### email[](#email)

```
email: string;
```

#### first\_name[](#first_name)

```
first_name: string;
```

#### id[](#id)

```
id: string;
```

#### idp\_id[](#idp_id)

```
idp_id: string;
```

#### last\_name[](#last_name)

```
last_name: string;
```

#### object[](#object)

```
object: string;
```

#### organization\_id[](#organization_id)

```
organization_id: string;
```

#### raw\_attributes[](#raw_attributes)

```
raw_attributes: {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  picture: string;
};
```

##### email[](#email-1)

```
email: string;
```

##### firstName[](#firstname)

```
firstName: string;
```

##### id[](#id-1)

```
id: string;
```

##### lastName[](#lastname)

```
lastName: string;
```

##### picture[](#picture)

```
picture: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add WorkOS login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/workos
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import WorkOS from "@auth/core/providers/workos"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    WorkOS({
      clientId: WORKOS_CLIENT_ID,
      clientSecret: WORKOS_CLIENT_SECRET,
      issuer: WORKOS_ISSUER,
    }),
  ],
})
```

### Resources[](#resources)

-   [WorkOS SSO OAuth documentation](https://workos.com/docs/reference/sso)

### Notes[](#notes)

By default, Auth.js assumes that the WorkOS provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

WorkOS is not an identity provider itself, but, rather, a bridge to multiple single sign-on (SSO) providers. As a result, we need to make some additional changes to authenticate users using WorkOS.

In order to sign a user in using WorkOS, we need to specify which WorkOS Connection to use. A common way to do this is to collect the user’s email address and extract the domain. This can be done using a custom login page. To add a custom login page, you can use the `pages` option:

```
pages: {
  signIn: "/auth/signin",
}
```

We can then add a custom login page that displays an input where the user can enter their email address. We then extract the domain from the user’s email address and pass it to the `authorizationParams` parameter on the `signIn` function:

pages/auth/signin.js

```
import { useState } from "react"
import { getProviders, signIn } from "next-auth/react"
 
export default function SignIn({ providers }) {
  const [email, setEmail] = useState("")
 
  return (
    <>
      {Object.values(providers).map((provider) => {
        if (provider.id === "workos") {
          return (
            <div key={provider.id}>
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                onClick={() =>
                  signIn(provider.id, undefined, {
                    domain: email.split("@")[1],
                  })
                }
              >
                Sign in with SSO
              </button>
            </div>
          )
        }
 
        return (
          <div key={provider.id}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        )
      })}
    </>
  )
}
 
export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
```

💡

The WorkOS provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/workos.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`WorkOSProfile`](workos#workosprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\> & { `connection`: `string`; }

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[wordpress](/reference/core/providers/wordpress "wordpress")[yandex](/reference/core/providers/yandex "yandex")
