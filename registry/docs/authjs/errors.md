[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")errors

# errors

## AccessDenied[](#accessdenied)

Thrown when the execution of the [`signIn` callback](https://authjs.dev/reference/core/types#signin) fails or if it returns `false`.

### Extends[](#extends)

-   [`AuthError`](errors#autherror)

### Properties[](#properties)

#### type[](#type)

```
static type: string = "AccessDenied";
```

* * *

## AccountNotLinked[](#accountnotlinked)

Thrown when an Email address is already associated with an account but the user is trying an account that is not linked to it.

For security reasons, Auth.js does not automatically link accounts to existing accounts if the user is not signed in.

### Extends[](#extends-1)

-   [`SignInError`](errors#signinerror)

### Properties[](#properties-1)

#### type[](#type-1)

```
static type: string = "AccountNotLinked";
```

* * *

## AdapterError[](#adaptererror)

One of the database [`Adapter` methods](https://authjs.dev/reference/core/adapters#methods) failed during execution.

💡

If `debug: true` is set, you can check out `[auth][debug]` in the logs to learn more about the failed adapter method execution.

### Example[](#example)

```
[auth][debug]: adapter_getUserByEmail
{ "args": [undefined] }
```

### Extends[](#extends-2)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-2)

#### type[](#type-2)

```
static type: string = "AdapterError";
```

* * *

## AuthError[](#autherror)

Base error class for all Auth.js errors. It’s optimized to be printed in the server logs in a nicely formatted way via the [`logger.error`](https://authjs.dev/reference/core#logger) option.

### Extends[](#extends-3)

-   [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

### Extended by[](#extended-by)

-   [`SignInError`](errors#signinerror)
-   [`AdapterError`](errors#adaptererror)
-   [`AccessDenied`](errors#accessdenied)
-   [`CallbackRouteError`](errors#callbackrouteerror)
-   [`ErrorPageLoop`](errors#errorpageloop)
-   [`EventError`](errors#eventerror)
-   [`InvalidCallbackUrl`](errors#invalidcallbackurl)
-   [`InvalidEndpoints`](errors#invalidendpoints)
-   [`InvalidCheck`](errors#invalidcheck)
-   [`JWTSessionError`](errors#jwtsessionerror)
-   [`MissingAdapter`](errors#missingadapter)
-   [`MissingAdapterMethods`](errors#missingadaptermethods)
-   [`MissingAuthorize`](errors#missingauthorize)
-   [`MissingSecret`](errors#missingsecret)
-   [`OAuthProfileParseError`](errors#oauthprofileparseerror)
-   [`SessionTokenError`](errors#sessiontokenerror)
-   [`SignOutError`](errors#signouterror)
-   [`UnknownAction`](errors#unknownaction)
-   [`UnsupportedStrategy`](errors#unsupportedstrategy)
-   [`InvalidProvider`](errors#invalidprovider)
-   [`UntrustedHost`](errors#untrustedhost)
-   [`Verification`](errors#verification)
-   [`DuplicateConditionalUI`](errors#duplicateconditionalui)
-   [`MissingWebAuthnAutocomplete`](errors#missingwebauthnautocomplete)
-   [`WebAuthnVerificationError`](errors#webauthnverificationerror)
-   [`ExperimentalFeatureNotEnabled`](errors#experimentalfeaturenotenabled)

### Properties[](#properties-3)

#### cause?[](#cause)

```
optional cause: Record<string, unknown> & {
  err: Error;
};
```

##### Type declaration[](#type-declaration)

###### err?[](#err)

```
optional err: Error;
```

##### Overrides[](#overrides)

`Error.cause`

#### type[](#type-3)

```
type: ErrorType;
```

* * *

## CallbackRouteError[](#callbackrouteerror)

This error occurs when the user cannot finish login. Depending on the provider type, this could have happened for multiple reasons.

💡

Check out `[auth][details]` in the logs to know which provider failed.

### Example[](#example-1)

```
[auth][details]: { "provider": "github" }
```

For an [OAuth provider](https://authjs.dev/getting-started/authentication/oauth), possible causes are:

-   The user denied access to the application
-   There was an error parsing the OAuth Profile: Check out the provider’s `profile` or `userinfo.request` method to make sure it correctly fetches the user’s profile.
-   The `signIn` or `jwt` callback methods threw an uncaught error: Check the callback method implementations.

For an [Email provider](https://authjs.dev/getting-started/authentication/email), possible causes are:

-   The provided email/token combination was invalid/missing: Check if the provider’s `sendVerificationRequest` method correctly sends the email.
-   The provided email/token combination has expired: Ask the user to log in again.
-   There was an error with the database: Check the database logs.

For a [Credentials provider](https://authjs.dev/getting-started/authentication/credentials), possible causes are:

-   The `authorize` method threw an uncaught error: Check the provider’s `authorize` method.
-   The `signIn` or `jwt` callback methods threw an uncaught error: Check the callback method implementations.

💡

Check out `[auth][cause]` in the error message for more details. It will show the original stack trace.

### Extends[](#extends-4)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-4)

#### type[](#type-4)

```
static type: string = "CallbackRouteError";
```

* * *

## CredentialsSignin[](#credentialssignin)

Can be thrown from the `authorize` callback of the Credentials provider. When an error occurs during the `authorize` callback, two things can happen:

1.  The user is redirected to the signin page, with `error=CredentialsSignin&code=credentials` in the URL. `code` is configurable.
2.  If you throw this error in a framework that handles form actions server-side, this error is thrown, instead of redirecting the user, so you’ll need to handle.

### Extends[](#extends-5)

-   [`SignInError`](errors#signinerror)

### Properties[](#properties-5)

#### code[](#code)

```
code: string = "credentials";
```

The error code that is set in the `code` query parameter of the redirect URL.

⚠ NOTE: This property is going to be included in the URL, so make sure it does not hint at sensitive errors.

The full error is always logged on the server, if you need to debug.

Generally, we don’t recommend hinting specifically if the user had either a wrong username or password specifically, try rather something like “Invalid credentials”.

#### type[](#type-5)

```
static type: string = "CredentialsSignin";
```

* * *

## DuplicateConditionalUI[](#duplicateconditionalui)

Thrown when multiple providers have `enableConditionalUI` set to `true`. Only one provider can have this option enabled at a time.

### Extends[](#extends-6)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-6)

#### type[](#type-6)

```
static type: string = "DuplicateConditionalUI";
```

* * *

## EmailSignInError[](#emailsigninerror)

Happens when the login by an [Email provider](https://authjs.dev/getting-started/authentication/email) could not be started.

Possible causes are:

-   The email sent from the client is invalid, could not be normalized by [`EmailConfig.normalizeIdentifier`](https://authjs.dev/reference/core/providers/email#normalizeidentifier)
-   The provided email/token combination has expired: Ask the user to log in again.
-   There was an error with the database: Check the database logs.

### Extends[](#extends-7)

-   [`SignInError`](errors#signinerror)

### Properties[](#properties-7)

#### type[](#type-7)

```
static type: string = "EmailSignInError";
```

* * *

## ErrorPageLoop[](#errorpageloop)

Thrown when Auth.js is misconfigured and accidentally tried to require authentication on a custom error page. To prevent an infinite loop, Auth.js will instead render its default error page.

To fix this, make sure that the `error` page does not require authentication.

Learn more at [Guide: Error pages](https://authjs.dev/guides/pages/error)

### Extends[](#extends-8)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-8)

#### type[](#type-8)

```
static type: string = "ErrorPageLoop";
```

* * *

## EventError[](#eventerror)

One of the [`events` methods](https://authjs.dev/reference/core/types#eventcallbacks) failed during execution.

Make sure that the `events` methods are implemented correctly and uncaught errors are handled.

Learn more at [`events`](https://authjs.dev/reference/core/types#eventcallbacks)

### Extends[](#extends-9)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-9)

#### type[](#type-9)

```
static type: string = "EventError";
```

* * *

## ExperimentalFeatureNotEnabled[](#experimentalfeaturenotenabled)

Thrown when an experimental feature is used but not enabled.

### Extends[](#extends-10)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-10)

#### type[](#type-10)

```
static type: string = "ExperimentalFeatureNotEnabled";
```

* * *

## InvalidCallbackUrl[](#invalidcallbackurl)

Thrown when Auth.js is unable to verify a `callbackUrl` value. The browser either disabled cookies or the `callbackUrl` is not a valid URL.

Somebody might have tried to manipulate the callback URL that Auth.js uses to redirect the user back to the configured `callbackUrl`/page. This could be a malicious hacker trying to redirect the user to a phishing site. To prevent this, Auth.js checks if the callback URL is valid and throws this error if it is not.

There is no action required, but it might be an indicator that somebody is trying to attack your application.

### Extends[](#extends-11)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-11)

#### type[](#type-11)

```
static type: string = "InvalidCallbackUrl";
```

* * *

## InvalidCheck[](#invalidcheck)

Thrown when a PKCE, state or nonce OAuth check could not be performed. This could happen if the OAuth provider is configured incorrectly or if the browser is blocking cookies.

Learn more at [`checks`](https://authjs.dev/reference/core/providers#checks)

### Extends[](#extends-12)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-12)

#### type[](#type-12)

```
static type: string = "InvalidCheck";
```

* * *

## InvalidEndpoints[](#invalidendpoints)

One of the configured OAuth or OIDC providers is missing the `authorization`, `token` or `userinfo`, or `issuer` configuration. To perform OAuth or OIDC sign in, at least one of these endpoints is required.

Learn more at [`OAuth2Config`](https://authjs.dev/reference/core/providers#oauth2configprofile) or [Guide: OAuth Provider](https://authjs.dev/guides/configuring-oauth-providers)

### Extends[](#extends-13)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-13)

#### type[](#type-13)

```
static type: string = "InvalidEndpoints";
```

* * *

## InvalidProvider[](#invalidprovider)

Thrown when an endpoint was incorrectly called without a provider, or with an unsupported provider.

### Extends[](#extends-14)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-14)

#### type[](#type-14)

```
static type: string = "InvalidProvider";
```

* * *

## JWTSessionError[](#jwtsessionerror)

Logged on the server when Auth.js could not decode or encode a JWT-based (`strategy: "jwt"`) session.

Possible causes are either a misconfigured `secret` or a malformed JWT or `encode/decode` methods.

When this error is logged, the session cookie is destroyed.

Learn more at [`secret`](https://authjs.dev/reference/core#secret), [`jwt.encode`](https://authjs.dev/reference/core/jwt#encode-1) or [`jwt.decode`](https://authjs.dev/reference/core/jwt#decode-2) for more information.

### Extends[](#extends-15)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-15)

#### type[](#type-15)

```
static type: string = "JWTSessionError";
```

* * *

## MissingAdapter[](#missingadapter)

Thrown if Auth.js is misconfigured. This could happen if you configured an Email provider but did not set up a database adapter, or tried using a `strategy: "database"` session without a database adapter. In both cases, make sure you either remove the configuration or add the missing adapter.

Learn more at [Database Adapters](https://authjs.dev/getting-started/database), [Email provider](https://authjs.dev/getting-started/authentication/email) or [Concept: Database session strategy](https://authjs.dev/concepts/session-strategies#database-session)

### Extends[](#extends-16)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-16)

#### type[](#type-16)

```
static type: string = "MissingAdapter";
```

* * *

## MissingAdapterMethods[](#missingadaptermethods)

Thrown similarily to [`MissingAdapter`](https://authjs.dev/reference/core/errors#missingadapter), but only some required methods were missing.

Make sure you either remove the configuration or add the missing methods to the adapter.

Learn more at [Database Adapters](https://authjs.dev/getting-started/database)

### Extends[](#extends-17)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-17)

#### type[](#type-17)

```
static type: string = "MissingAdapterMethods";
```

* * *

## MissingAuthorize[](#missingauthorize)

Thrown when a Credentials provider is missing the `authorize` configuration. To perform credentials sign in, the `authorize` method is required.

Learn more at [Credentials provider](https://authjs.dev/getting-started/authentication/credentials)

### Extends[](#extends-18)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-18)

#### type[](#type-18)

```
static type: string = "MissingAuthorize";
```

* * *

## MissingCSRF[](#missingcsrf)

Error for missing CSRF tokens in client-side actions (`signIn`, `signOut`, `useSession#update`). Thrown when actions lack the double submit cookie, essential for CSRF protection.

CSRF ([Cross-Site Request Forgery](https://owasp.org/www-community/attacks/csrf)) is an attack leveraging authenticated user credentials for unauthorized actions.

Double submit cookie pattern, a CSRF defense, requires matching values in a cookie and request parameter. More on this at [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/CSRF).

### Extends[](#extends-19)

-   [`SignInError`](errors#signinerror)

### Properties[](#properties-19)

#### type[](#type-19)

```
static type: string = "MissingCSRF";
```

* * *

## MissingSecret[](#missingsecret)

Auth.js requires a secret or multiple secrets to be set, but none was not found. This is used to encrypt cookies, JWTs and other sensitive data.

If you are using a framework like Next.js, we try to automatically infer the secret from the `AUTH_SECRET`, `AUTH_SECRET_1`, etc. environment variables. Alternatively, you can also explicitly set the [`AuthConfig.secret`](https://authjs.dev/reference/core#secret) option.

💡

To generate a random string, you can use the Auth.js CLI: `npx auth secret`

### Extends[](#extends-20)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-20)

#### type[](#type-20)

```
static type: string = "MissingSecret";
```

* * *

## MissingWebAuthnAutocomplete[](#missingwebauthnautocomplete)

Thrown when a WebAuthn provider has `enableConditionalUI` set to `true` but no formField has `webauthn` in its autocomplete param.

The `webauthn` autocomplete param is required for conditional UI to work.

### Extends[](#extends-21)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-21)

#### type[](#type-21)

```
static type: string = "MissingWebAuthnAutocomplete";
```

* * *

## OAuthAccountNotLinked[](#oauthaccountnotlinked)

Thrown when an Email address is already associated with an account but the user is trying an OAuth account that is not linked to it.

For security reasons, Auth.js does not automatically link OAuth accounts to existing accounts if the user is not signed in.

💡

If you trust the OAuth provider to have verified the user’s email address, you can enable automatic account linking by setting [`allowDangerousEmailAccountLinking: true`](https://authjs.dev/reference/core/providers#allowdangerousemailaccountlinking) in the provider configuration.

### Extends[](#extends-22)

-   [`SignInError`](errors#signinerror)

### Properties[](#properties-22)

#### type[](#type-22)

```
static type: string = "OAuthAccountNotLinked";
```

* * *

## OAuthCallbackError[](#oauthcallbackerror)

Thrown when an OAuth provider returns an error during the sign in process. This could happen for example if the user denied access to the application or there was a configuration error.

For a full list of possible reasons, check out the specification [Authorization Code Grant: Error Response](https://www.rfc-editor.org/rfc/rfc6749#section-4.1.2.1)

### Extends[](#extends-23)

-   [`SignInError`](errors#signinerror)

### Properties[](#properties-23)

#### type[](#type-23)

```
static type: string = "OAuthCallbackError";
```

* * *

## OAuthProfileParseError[](#oauthprofileparseerror)

This error occurs during an OAuth sign in attempt when the provider’s response could not be parsed. This could for example happen if the provider’s API changed, or the [`OAuth2Config.profile`](https://authjs.dev/reference/core/providers#oauth2configprofile) method is not implemented correctly.

### Extends[](#extends-24)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-24)

#### type[](#type-24)

```
static type: string = "OAuthProfileParseError";
```

* * *

## OAuthSignInError[](#oauthsigninerror)

Happens when login by [OAuth](https://authjs.dev/getting-started/authentication/oauth) could not be started.

Possible causes are:

-   The Authorization Server is not compliant with the [OAuth 2.0](https://www.ietf.org/rfc/rfc6749.html) or the [OIDC](https://openid.net/specs/openid-connect-core-1_0.html) specification. Check the details in the error message.

💡

Check out `[auth][details]` in the logs to know which provider failed.

### Example[](#example-2)

```
[auth][details]: { "provider": "github" }
```

### Extends[](#extends-25)

-   [`SignInError`](errors#signinerror)

### Properties[](#properties-25)

#### type[](#type-25)

```
static type: string = "OAuthSignInError";
```

* * *

## SessionTokenError[](#sessiontokenerror)

Logged on the server when Auth.js could not retrieve a session from the database (`strategy: "database"`).

The database adapter might be misconfigured or the database is not reachable.

Learn more at [Concept: Database session strategy](https://authjs.dev/concepts/session-strategies#database)

### Extends[](#extends-26)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-26)

#### type[](#type-26)

```
static type: string = "SessionTokenError";
```

* * *

## SignInError[](#signinerror)

Thrown when the user’s sign-in attempt failed.

### Extends[](#extends-27)

-   [`AuthError`](errors#autherror)

### Extended by[](#extended-by-1)

-   [`CredentialsSignin`](errors#credentialssignin)
-   [`OAuthAccountNotLinked`](errors#oauthaccountnotlinked)
-   [`OAuthCallbackError`](errors#oauthcallbackerror)
-   [`OAuthSignInError`](errors#oauthsigninerror)
-   [`EmailSignInError`](errors#emailsigninerror)
-   [`MissingCSRF`](errors#missingcsrf)
-   [`AccountNotLinked`](errors#accountnotlinked)
-   [`CredentialsSignin`](../express#credentialssignin)
-   [`CredentialsSignin`](../qwik#credentialssignin)
-   [`CredentialsSignin`](../solid-start#credentialssignin)
-   [`CredentialsSignin`](../sveltekit#credentialssignin)
-   [`CredentialsSignin`](../nextjs#credentialssignin)

* * *

## SignOutError[](#signouterror)

Represents an error that occurs during the sign-out process. This error is logged when there are issues in terminating a user’s session, either by failing to delete the session from the database (in database session strategies) or encountering issues during other parts of the sign-out process, such as emitting sign-out events or clearing session cookies.

The session cookie(s) are emptied even if this error is logged.

### Extends[](#extends-28)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-27)

#### type[](#type-27)

```
static type: string = "SignOutError";
```

* * *

## UnknownAction[](#unknownaction)

Auth.js was requested to handle an operation that it does not support.

See [`AuthAction`](https://authjs.dev/reference/core/types#authaction) for the supported actions.

### Extends[](#extends-29)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-28)

#### type[](#type-28)

```
static type: string = "UnknownAction";
```

* * *

## UnsupportedStrategy[](#unsupportedstrategy)

Thrown when a Credentials provider is present but the JWT strategy (`strategy: "jwt"`) is not enabled.

Learn more at [`strategy`](https://authjs.dev/reference/core#strategy) or [Credentials provider](https://authjs.dev/getting-started/authentication/credentials)

### Extends[](#extends-30)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-29)

#### type[](#type-29)

```
static type: string = "UnsupportedStrategy";
```

* * *

## UntrustedHost[](#untrustedhost)

Thrown when the `trustHost` option was not set to `true`.

Auth.js requires the `trustHost` option to be set to `true` since it’s relying on the request headers’ `host` value.

Official Auth.js libraries might attempt to automatically set the `trustHost` option to `true` if the request is coming from a trusted host on a trusted platform.

Learn more at [`trustHost`](https://authjs.dev/reference/core#trusthost) or [Guide: Deployment](https://authjs.dev/getting-started/deployment)

### Extends[](#extends-31)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-30)

#### type[](#type-30)

```
static type: string = "UntrustedHost";
```

* * *

## Verification[](#verification)

The user’s email/token combination was invalid. This could be because the email/token combination was not found in the database, or because the token has expired. Ask the user to log in again.

### Extends[](#extends-32)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-31)

#### type[](#type-31)

```
static type: string = "Verification";
```

* * *

## WebAuthnVerificationError[](#webauthnverificationerror)

Thrown when a WebAuthn provider fails to verify a client response.

### Extends[](#extends-33)

-   [`AuthError`](errors#autherror)

### Properties[](#properties-32)

#### type[](#type-32)

```
static type: string = "WebAuthnVerificationError";
```

[adapters](/reference/core/adapters "adapters")[jwt](/reference/core/jwt "jwt")
