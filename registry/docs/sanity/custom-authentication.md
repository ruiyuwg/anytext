# Custom authentication

Custom authentication can be configured for the studio or individual workspaces. This is done by configuring the config key `auth` for the studio or workspace with a configuration object that adheres to the [AuthConfig](https://reference.sanity.io/sanity/index/AuthConfig/) signature.

**Limit providers**

```typescript
import {defineConfig} from 'sanity'

export default defineConfig({
  // ... The rest of the studio config.
  auth: {
    providers: [
      {
        name: 'sanity',
        title: 'Email / Password',
        url: 'https://api.sanity.io/v1/auth/login/sanity',
      },
    ],
  },
})
```

**Append to existing providers**

```typescript
import {defineConfig} from 'sanity'

export default defineConfig({
  // ... The rest of the studio config.
  auth: {
    providers: (prev) => [...prev,
      {
        name: 'newProvider',
        title: 'Email / Password',
        url: 'https://url.to.other.login',
      }
    ]
  },
})
```

> \[!WARNING]
> Gotcha
> In studio versions prior to v3.15.0 the recommended way to configure custom authentication included using the `createAuthConfig` helper method. This approach will still work, but is considered deprecated in favor of the more straight forward new method.

## SAML single-sign on (SSO)

*This is a paid feature, available as an addon on the Growth plan.*

When you configure SSO with SAML, you're receive a code snippet to help you configure the custom authentication section if your Sanity config.

#### SAML and SSO guides

[Setting up Single Sign-On with SAML](https://www.sanity.io/docs/developer-guides/sso-saml)

[Set up SSO authentication with SAML and JumpCloud](https://www.sanity.io/docs/developer-guides/set-up-sso-authentication-with-saml-and-jumpcloud)

[Set up SSO authentication with SAML and PingIdentity](https://www.sanity.io/docs/developer-guides/set-up-sso-authentication-with-saml-and-pingidentity)

[Set up SSO authentication with SAML and Azure/Entra ID](https://www.sanity.io/docs/developer-guides/set-up-sso-authentication-with-saml-and-azure)

## SSO and Media Library

If you use a self-hosted Studio and use SSO, you may run into issues accessing Media Library.

To work around this, use one of the following options:

- If your provider supports it, you can use a token-based login method by setting `auth.loginMethod: 'token'`.
- Log in to the dashboard prior to accessing Media Library.

We're working to support other methods in the future.
