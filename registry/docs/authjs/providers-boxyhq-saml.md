[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")boxyhq-saml

# providers/boxyhq-saml

Built-in **BoxyHQ SAML** integration.[![](https://authjs.dev/img/providers/boxyhq-saml.svg)](https://boxyhq.com/)

## BoxyHQSAMLProfile[](#boxyhqsamlprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### email[](#email)

```
email: string;
```

#### firstName?[](#firstname)

```
optional firstName: string;
```

#### id[](#id)

```
id: string;
```

#### lastName?[](#lastname)

```
optional lastName: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add BoxyHQ SAML login to your page.

BoxyHQ SAML is an open source service that handles the SAML SSO login flow as an OAuth 2.0 flow, abstracting away all the complexities of the SAML protocol. Enable Enterprise single-sign-on in your app with ease.

You can deploy BoxyHQ SAML as a separate service or embed it into your app using our NPM library. [Check out the documentation for more details](https://boxyhq.com/docs/jackson/deploy)

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/boxyhq-saml
```

#### Configuration[](#configuration)

For OAuth 2.0 Flow:

```
import { Auth } from "@auth/core"
import BoxyHQ from "@auth/core/providers/boxyhq-saml"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    BoxyHQ({
      authorization: { params: { scope: "" } }, // This is needed for OAuth 2.0 flow, otherwise default to openid
      clientId: BOXYHQ_SAML_CLIENT_ID,
      clientSecret: BOXYHQ_SAML_CLIENT_SECRET,
      issuer: BOXYHQ_SAML_ISSUER,
    }),
  ],
})
```

For OIDC Flow:

```
import { Auth } from "@auth/core"
import BoxyHQ from "@auth/core/providers/boxyhq-saml"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    BoxyHQ({
      clientId: BOXYHQ_SAML_CLIENT_ID,
      clientSecret: BOXYHQ_SAML_CLIENT_SECRET,
      issuer: BOXYHQ_SAML_ISSUER,
    }),
  ],
})
```

### Resources[](#resources)

-   [BoxyHQ OAuth documentation](https://example.com)

## Configuration[](#configuration-1)

SAML login requires a configuration for every tenant of yours. One common method is to use the domain for an email address to figure out which tenant they belong to. You can also use a unique tenant ID (string) from your backend for this, typically some kind of account or organization ID.

Check out the [documentation](https://boxyhq.com/docs/jackson/saml-flow#2-saml-config-api) for more details.

On the client side you’ll need to pass additional parameters `tenant` and `product` to the `signIn` function. This will allow BoxyHQL SAML to figure out the right SAML configuration and take your user to the right SAML Identity Provider to sign them in.

```
import { signIn } from "auth";
...
 
  // Map your users's email to a tenant and product
  const tenant = email.split("@")[1];
  const product = 'my_awesome_product';
...
  <Button
    onClick={async (event) => {
      event.preventDefault();
 
      signIn("boxyhq-saml", {}, { tenant, product });
    }}>
...
```

### Notes[](#notes)

By default, Auth.js assumes that the BoxyHQ provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The BoxyHQ provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/boxyhq-saml.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`BoxyHQSAMLProfile`](boxyhq-saml#boxyhqsamlprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[box](/reference/core/providers/box "box")[bungie](/reference/core/providers/bungie "bungie")
