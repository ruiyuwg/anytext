[Guides](/guides/debugging "Guides")Configuring OAuth providers

# Configuring an OAuth provider

## Override default provider config[](#override-default-provider-config)

For built-in providers, usually you only need to specify a client id and client secret, and in case of OIDC (OpenID Connect), an issuer as well. We can [infer these from environment variables](/guides/environment-variables#oauth-variables).

If you need to override any of the defaults provider config options, you can add them in the provider’s function call and they will be deeply-merged with our [defaults](https://github.com/nextauthjs/next-auth/tree/main/packages/core/src/providers). That means you only have to override part of the options that you need to be different. For example if you want different scopes, overriding `authorization.params.scope` is enough, instead of the whole `authorization` option.

For example, to override a provider’s default `scope`s, you can do the following:

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth";
import Auth0 from "next-auth/providers/auth0";
 
export const { handlers, auth } = NextAuth({
  providers: [
    Auth0({ authorization: { params: { scope: "openid custom_scope" } } }),
  ],
});
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Auth0 from "@auth/qwik/providers/auth0";
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      Auth0({ authorization: { params: { scope: "openid custom_scope" } } }),
    ],
  })
)
```

src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit";
import Auth0 from "@auth/sveltekit/providers/auth0";
 
export const { handle, signIn } = SvelteKitAuth({
  providers: [
    Auth0({ authorization: { params: { scope: "openid custom_scope" } } }),
  ],
});
```

src/hooks.server.ts

```
export { handle } from "./auth"
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/guides/configuring-oauth-providers.mdx).

Another example, the `profile` callback will return `name`, `email` and `picture` by default, but you might want to return more information from the provider. What you return will be used to create the user object in the database.

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth";
import Auth0 from "next-auth/providers/auth0";
 
export const { handlers, auth } = NextAuth({
  providers: [
    Auth0({
      // You can also make calls to external resources if necessary.
      async profile(profile) {
        return {};
      },
    }),
  ],
});
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Auth0 from "@auth/qwik/providers/auth0";
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      Auth0({
        // You can also make calls to external resources if necessary.
        async profile(profile) {
          return {};
        },
      }),
    ],
  })
)
```

src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit";
import Auth0 from "@auth/sveltekit/providers/auth0";
 
export const { handle } = SvelteKitAuth({
  providers: [
    Auth0({
      // You can also make calls to external resources if necessary.
      async profile(profile) {
        return {};
      },
    }),
  ],
});
```

src/hooks.server.ts

```
export { handle } from "./auth"
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/guides/configuring-oauth-providers.mdx).

## Use your own provider[](#use-your-own-provider)

💡

Check our [built-in OAuth providers](/getting-started/authentication/oauth) first, before creating one from scratch.

We support any [OAuth](https://datatracker.ietf.org/doc/html/rfc6749) or [OIDC](https://openid.net/specs/openid-connect-core-1_0.html) compliant provider. Start by passing an object to the [`providers` list](/reference/core#providers):

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth";
 
export const { handlers, auth } = NextAuth({
  providers: [{
    id: "my-provider", // signIn("my-provider") and will be part of the callback URL
    name: "My Provider", // optional, used on the default login page as the button text.
    type: "oidc", // or "oauth" for OAuth 2 providers
    issuer: "https://my.oidc-provider.com", // to infer the .well-known/openid-configuration URL
    clientId: process.env.AUTH_CLIENT_ID, // from the provider's dashboard
    clientSecret: process.env.AUTH_CLIENT_SECRET, // from the provider's dashboard
  }],
});
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [{
      id: "my-provider", // signIn("my-provider") and will be part of the callback URL
      name: "My Provider", // optional, used on the default login page as the button text.
      type: "oidc", // or "oauth" for OAuth 2 providers
      issuer: "https://my.oidc-provider.com", // to infer the .well-known/openid-configuration URL
      clientId: import.meta.env.AUTH_CLIENT_ID, // from the provider's dashboard
      clientSecret: import.meta.env.AUTH_CLIENT_SECRET, // from the provider's dashboard
    }],
  })
)
```

src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit";
 
export const { handle } = SvelteKitAuth({
  providers: [{
    id: "my-provider", // signIn("my-provider") and will be part of the callback URL
    name: "My Provider", // optional, used on the default login page as the button text.
    type: "oidc", // or "oauth" for OAuth 2 providers
    issuer: "https://my.oidc-provider.com", // to infer the .well-known/openid-configuration URL
    clientId: process.env.AUTH_CLIENT_ID, // from the provider's dashboard
    clientSecret: process.env.AUTH_CLIENT_SECRET, // from the provider's dashboard
  }],
});
```

src/hooks.server.ts

```
export { handle } from "./auth"
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/guides/configuring-oauth-providers.mdx).

Then, set the [callback URL](https://www.ietf.org/archive/id/draft-ietf-oauth-v2-1-07.html#name-client-redirection-endpoint) in your provider’s dashboard to `https://app.com/{basePath}/callback/{id}`.

By default, `basePath` is `/api/auth` for Next.js, and `/auth` in all other integrations. See [`basePath`](/reference/core#basepath).

That’s it! 🎉

## Adding a new built-in provider[](#adding-a-new-built-in-provider)

If you think your custom provider might be useful to others, we encourage you to open a PR and add it to the built-in list.

### Creating the provider’s file[](#creating-the-providers-file)

Create a new `{provider}.ts` file under the [`packages/core/src/providers`](https://github.com/nextauthjs/next-auth/tree/main/packages/core/src/providers) directory.

### Adhere to our code conventions[](#adhere-to-our-code-conventions)

Use the [built-in providers](https://github.com/nextauthjs/next-auth/tree/main/packages/core/src/providers) as a guide, make sure your provider adheres to the same code conventions, .i.e:

-   Use TypeScript
-   Use a named default export: `export default function YourProvider`
-   Export the TypeScript `interface` that defines the provider’s available user info properties
-   Add the necessary JSDoc comments/documentation. For example, the [Auth0 provider](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/auth0.ts) is a good example for OIDC and the [GitHub Provider](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/github.ts) is an OAuth provider.)
-   Add links to the provider’s API reference/documentation so others can understand how to set up this provider

### Add your provider in the GitHub issues dropdown[](#add-your-provider-in-the-github-issues-dropdown)

Add the new provider name to the `Provider type` dropdown options in [`the provider issue template`](https://github.com/nextauthjs/next-auth/edit/main/.github/ISSUE_TEMPLATE/2_bug_provider.yml)

### Add a logo[](#add-a-logo)

Add a logo `{provider}.svg` to the [`docs/static/img/providers`](https://github.com/nextauthjs/next-auth/tree/main/docs/static/img/providers) directory.

Once the PR is merged, others will also be able to discover and use this provider with any of our integrations. That’s it! 🎉

[Configuring Resend for magic links](/guides/configuring-resend "Configuring Resend for magic links")[Configuring Custom HTTP Email Provider](/guides/configuring-http-email "Configuring Custom HTTP Email Provider")
