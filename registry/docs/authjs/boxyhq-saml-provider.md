[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Boxyhq Saml

![](/img/providers/boxyhq-saml.svg)

# BoxyHQ SAML Provider

## Resources[](#resources)

-   [BoxyHQ OAuth documentation](https://boxyhq.com/docs/jackson/overview)

## Setup[](#setup)

Add BoxyHQ SAML login to your page.

BoxyHQ SAML is an open source service that handles the SAML SSO login flow as an OAuth 2.0 flow, abstracting away all the complexities of the SAML protocol. Enable Enterprise single-sign-on in your app with ease.

You can deploy BoxyHQ SAML as a separate service or embed it into your app using our NPM library. [Check out the documentation for more details](https://boxyhq.com/docs/jackson/deploy)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/boxyhq-saml
```

```
https://example.com/auth/callback/boxhq-saml
```

```
https://example.com/auth/callback/boxhq-saml
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/boxyhq-saml.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_BOXYHQ_SAML_ID
AUTH_BOXYHQ_SAML_SECRET
AUTH_BOXYHQ_SAML_ISSUER
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import BoxyHQ from "next-auth/providers/boxyhq-saml"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    BoxyHQ({
      authorization: { params: { scope: "" } }, // This is needed for OAuth 2.0 flow, otherwise default to openid
      clientId: AUTH_BOXYHQ_SAML_ID,
      clientSecret: AUTH_BOXYHQ_SAML_SECRET,
      issuer: AUTH_BOXYHQ_SAML_ISSUER,
    }),
  ],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import BoxyHQ from "@auth/qwik/providers/boxyhq-saml"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      BoxyHQ({
        authorization: { params: { scope: "" } }, // This is needed for OAuth 2.0 flow, otherwise default to openid
        clientId: import.meta.env.AUTH_BOXYHQ_SAML_ID,
        clientSecret: import.meta.env.AUTH_BOXYHQ_SAML_SECRET,
        issuer: import.meta.env.AUTH_BOXYHQ_SAML_ISSUER,
      }),  
    ],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import BoxyHQ from "@auth/sveltekit/providers/boxyhq-saml"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    BoxyHQ({
      authorization: { params: { scope: "" } }, // This is needed for OAuth 2.0 flow, otherwise default to openid
      clientId: AUTH_BOXYHQ_SAML_ID,
      clientSecret: AUTH_BOXYHQ_SAML_SECRET,
      issuer: AUTH_BOXYHQ_SAML_ISSUER,
    }),
  ],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import BoxyHQ from "@auth/express/providers/boxyhq-saml"
 
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [
      BoxyHQ({
        authorization: { params: { scope: "" } }, // This is needed for OAuth 2.0 flow, otherwise default to openid
        clientId: AUTH_BOXYHQ_SAML_ID,
        clientSecret: AUTH_BOXYHQ_SAML_SECRET,
        issuer: AUTH_BOXYHQ_SAML_ISSUER,
      }),
    ],
  })
)
```

### SAML[](#saml)

SAML login requires a configuration for every tenant of yours. One common method is to use the domain for an email address to figure out which tenant they belong to. You can also use a unique tenant ID (string) from your backend for this, typically some kind of account or organization ID.

Check out the [documentation](https://boxyhq.com/docs/jackson/saml-flow#2-saml-config-api) for more details.

On the client side you’ll need to pass additional parameters `tenant` and `product` to the `signIn` function. This will allow BoxyHQL SAML to figure out the right SAML configuration and take your user to the right SAML Identity Provider to sign them in.

```
import { signIn } from "next-auth/react";
 
// Map your users's email to a tenant and product
const tenant = email.split("@")[1];
const product = 'my_awesome_product';
 
<Button
  onClick={async (event) => {
    event.preventDefault();
 
    signIn("boxyhq-saml", {}, { tenant, product });
  }}
>
```

[Box](/getting-started/providers/box "Box")[Bungie](/getting-started/providers/bungie "Bungie")
