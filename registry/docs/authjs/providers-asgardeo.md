[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")asgardeo

# providers/asgardeo

Built-in sign in with **Asgardeo** integration.

[![](https://authjs.dev/img/providers/asgardeo.svg)](https://wso2.com/asgardeo/)

## AsgardeoProfile[](#asgardeoprofile)

The returned user profile from Asgardeo when using the profile callback.

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### email[](#email)

```
email: string;
```

The user email

#### given\_name[](#given_name)

```
given_name: string;
```

The user name

#### picture[](#picture)

```
picture: string;
```

The user profile picture

#### sub[](#sub)

```
sub: string;
```

The user Asgardeo account ID

* * *

## default()[](#default)

```
function default(config): OIDCConfig<AsgardeoProfile>
```

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/asgardeo
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Asgardeo from "@auth/core/providers/asgardeo";
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Asgardeo({
      clientId: ASGARDEO_CLIENT_ID,
      clientSecret: ASGARDEO_CLIENT_SECRET,
      issuer: ASGARDEO_ISSUER,
    }),
  ],
})
```

### Configuring Asgardeo[](#configuring-asgardeo)

Follow these steps:

1.  Log into the [Asgardeo console](https://console.asgardeo.io)
2.  Next, go to “Application” tab (more info [here](https://wso2.com/asgardeo/docs/guides/applications/register-oidc-web-app/))
3.  Register a standard based, Open ID connect, application
4.  Add the **callback URLs**: `http://localhost:3000/api/auth/callback/asgardeo` (development) and `https://{YOUR_DOMAIN}.com/api/auth/callback/asgardeo` (production)
5.  After registering the application, go to “Protocol” tab.
6.  Check `code` as the grant type.
7.  Add “Authorized redirect URLs” & “Allowed origins fields”
8.  Make Email, First Name, Photo URL user attributes mandatory from the console.

Then, create a `.env` file in the project root add the following entries:

```
ASGARDEO_CLIENT_ID="Copy client ID from protocol tab here"
ASGARDEO_CLIENT_SECRET="Copy client from protocol tab here"
ASGARDEO_ISSUER="Copy the issuer url from the info tab here"
```

### Resources[](#resources)

-   [Asgardeo - Authentication Guide](https://wso2.com/asgardeo/docs/guides/authentication)
-   [Learn more about OAuth](https://authjs.dev/concepts/oauth)

### Notes[](#notes)

The Asgardeo provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/asgardeo.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

By default, Auth.js assumes that the Asgardeo provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) spec

## Help[](#help)

If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`AsgardeoProfile`](asgardeo#asgardeoprofile)\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`AsgardeoProfile`](asgardeo#asgardeoprofile)\>

[apple](/reference/core/providers/apple "apple")[atlassian](/reference/core/providers/atlassian "atlassian")
