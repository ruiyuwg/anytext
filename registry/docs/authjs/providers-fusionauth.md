[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")fusionauth

# providers/fusionauth

Built-in **FusionAuth** integration.[![](https://authjs.dev/img/providers/fushionauth.svg)](https://fusionauth.com)

## FusionAuthProfile[](#fusionauthprofile)

This is the default openid signature returned from FusionAuth it can be customized using [lambda functions](https://fusionauth.io/docs/v1/tech/lambdas)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### at\_hash[](#at_hash)

```
at_hash: string;
```

#### aud[](#aud)

```
aud: string;
```

#### authenticationType[](#authenticationtype)

```
authenticationType: string;
```

#### c\_hash[](#c_hash)

```
c_hash: string;
```

#### email[](#email)

```
email: string;
```

#### email\_verified[](#email_verified)

```
email_verified: boolean;
```

#### exp[](#exp)

```
exp: number;
```

#### family\_name?[](#family_name)

```
optional family_name: string;
```

#### given\_name?[](#given_name)

```
optional given_name: string;
```

#### iat[](#iat)

```
iat: number;
```

#### iss[](#iss)

```
iss: string;
```

#### jti[](#jti)

```
jti: string;
```

#### middle\_name?[](#middle_name)

```
optional middle_name: string;
```

#### name?[](#name)

```
optional name: string;
```

#### picture?[](#picture)

```
optional picture: string;
```

#### preferred\_username?[](#preferred_username)

```
optional preferred_username: string;
```

#### scope[](#scope)

```
scope: string;
```

#### sid[](#sid)

```
sid: string;
```

#### sub[](#sub)

```
sub: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add FusionAuth login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/fusionauth
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import FusionAuth from "@auth/core/providers/fusionauth"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    FusionAuth({
      clientId: FUSIONAUTH_CLIENT_ID,
      clientSecret: FUSIONAUTH_CLIENT_SECRET,
      tenantId: FUSIONAUTH_TENANT_ID,
      issuer: FUSIONAUTH_ISSUER,
    }),
  ],
})
```

⚠️

If you’re using multi-tenancy, you need to pass in the tenantId option to apply the proper theme.

### Resources[](#resources)

-   [FusionAuth OAuth documentation](https://fusionauth.io/docs/lifecycle/authenticate-users/oauth/)

### Notes[](#notes)

By default, Auth.js assumes that the FusionAuth provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

## Configuration[](#configuration-1)

💡

An application can be created at [https://your-fusionauth-server-url/admin/application](https://your-fusionauth-server-url/admin/application).

For more information, follow the [FusionAuth 5-minute setup guide](https://fusionauth.io/docs/v1/tech/5-minute-setup-guide).

In the OAuth settings for your application, configure the following.

-   Redirect URL
    -   [https://localhost:3000/api/auth/callback/fusionauth](https://localhost:3000/api/auth/callback/fusionauth)
-   Enabled grants
    -   Make sure _Authorization Code_ is enabled.

If using JSON Web Tokens, you need to make sure the signing algorithm is RS256, you can create an RS256 key pair by going to Settings, Key Master, generate RSA and choosing SHA-256 as algorithm. After that, go to the JWT settings of your application and select this key as Access Token signing key and Id Token signing key.

💡

The FusionAuth provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/fusionauth.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

It is highly recommended to follow this example call when using the provider in Next.js so that you can access both the access\_token and id\_token on the server.

```
/// <reference types="next-auth" />
import NextAuth from 'next-auth';
export const { handlers, auth, signIn, signOut } = NextAuth({
 providers: [
   {
     id: 'fusionauth',
     name: 'FusionAuth',
     type: 'oidc',
     issuer: process.env.AUTH_FUSIONAUTH_ISSUER!,
     clientId: process.env.AUTH_FUSIONAUTH_CLIENT_ID!,
     clientSecret: process.env.AUTH_FUSIONAUTH_CLIENT_SECRET!,
     authorization: {
       params: {
         scope: 'offline_access email openid profile',
         tenantId: process.env.AUTH_FUSIONAUTH_TENANT_ID!,
       },
     },
     userinfo: `${process.env.AUTH_FUSIONAUTH_ISSUER}/oauth2/userinfo`,
     // This is due to a known processing issue
     // TODO: https://github.com/nextauthjs/next-auth/issues/8745#issuecomment-1907799026
     token: {
       url: `${process.env.AUTH_FUSIONAUTH_ISSUER}/oauth2/token`,
       conform: async (response: Response) => {
         if (response.status === 401) return response;
 
         const newHeaders = Array.from(response.headers.entries())
           .filter(([key]) => key.toLowerCase() !== 'www-authenticate')
           .reduce(
             (headers, [key, value]) => (headers.append(key, value), headers),
             new Headers()
           );
 
         return new Response(response.body, {
           status: response.status,
           statusText: response.statusText,
           headers: newHeaders,
         });
       },
     },
   },
 ],
 session: {
   strategy: 'jwt',
 },
 // Required to get the account object in the session and enable
 // the ability to call API's externally that rely on JWT tokens.
 callbacks: {
   async jwt(params) {
     const { token, user, account } = params;
     if (account) {
       // First-time login, save the `access_token`, its expiry and the `refresh_token`
       return {
         ...token,
         ...account,
       };
     } else if (
       token.expires_at &&
       Date.now() < (token.expires_at as number) * 1000
     ) {
       // Subsequent logins, but the `access_token` is still valid
       return token;
     } else {
       // Subsequent logins, but the `access_token` has expired, try to refresh it
       if (!token.refresh_token) throw new TypeError('Missing refresh_token');
 
       try {
         const refreshResponse = await fetch(
           `${process.env.AUTH_FUSIONAUTH_ISSUER}/oauth2/token`,
           {
             method: 'POST',
             headers: {
               'Content-Type': 'application/x-www-form-urlencoded',
             },
             body: new URLSearchParams({
               client_id: process.env.AUTH_FUSIONAUTH_CLIENT_ID!,
               client_secret: process.env.AUTH_FUSIONAUTH_CLIENT_SECRET!,
               grant_type: 'refresh_token',
               refresh_token: token.refresh_token as string,
             }),
           }
         );
 
         if (!refreshResponse.ok) {
           throw new Error('Failed to refresh token');
         }
 
         const tokensOrError = await refreshResponse.json();
 
         if (!refreshResponse.ok) throw tokensOrError;
 
         const newTokens = tokensOrError as {
           access_token: string;
           expires_in: number;
           refresh_token?: string;
         };
 
         return {
           ...token,
           access_token: newTokens.access_token,
           expires_at: Math.floor(Date.now() / 1000 + newTokens.expires_in),
           // Some providers only issue refresh tokens once, so preserve if we did not get a new one
           refresh_token: newTokens.refresh_token
             ? newTokens.refresh_token
             : token.refresh_token,
         };
       } catch (error) {
         console.error('Error refreshing access_token', error);
         // If we fail to refresh the token, return an error so we can handle it on the page
         token.error = 'RefreshTokenError';
         return token;
       }
     }
   },
   async session(params) {
     const { session, token } = params;
     return { ...session, ...token };
   },
 },
});
 
declare module 'next-auth' {
 interface Session {
   access_token: string;
   expires_in: number;
   id_token?: string;
   expires_at: number;
   refresh_token?: string;
   refresh_token_id?: string;
   error?: 'RefreshTokenError';
   scope: string;
   token_type: string;
   userId: string;
   provider: string;
   type: string;
   providerAccountId: string;
 }
}
 
declare module 'next-auth' {
 interface JWT {
   access_token: string;
   expires_in: number;
   id_token?: string;
   expires_at: number;
   refresh_token?: string;
   refresh_token_id?: string;
   error?: 'RefreshTokenError';
   scope: string;
   token_type: string;
   userId: string;
   provider: string;
   type: string;
   providerAccountId: string;
 }
}
```

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`FusionAuthProfile`](fusionauth#fusionauthprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\> & { `tenantId`: `string`; }

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[frontegg](/reference/core/providers/frontegg "frontegg")[github](/reference/core/providers/github "github")
