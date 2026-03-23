-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# google-oauth-client overview (1.39.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.39.0 (latest)](/java/docs/reference/google-oauth-client/latest/overview)
-   [1.38.2](/java/docs/reference/google-oauth-client/1.38.2/overview)
-   [1.37.0](/java/docs/reference/google-oauth-client/1.37.0/overview)
-   [1.36.0](/java/docs/reference/google-oauth-client/1.36.0/overview)
-   [1.34.1](/java/docs/reference/google-oauth-client/1.34.1/overview)
-   [1.33.3](/java/docs/reference/google-oauth-client/1.33.3/overview)
-   [1.32.1](/java/docs/reference/google-oauth-client/1.32.1/overview)

## [com.google.api.client.auth.oauth](/java/docs/reference/google-oauth-client/latest/com.google.api.client.auth.oauth)

[com.google.api.client.util.Beta](https://cloud.google.com/java/docs/reference/google-http-client/latest/com.google.api.client.util.Beta.html)  
OAuth 1.0 authorization as specified in [RFC 5849: The OAuth 1.0 Protocol](http://tools.ietf.org/html/rfc5849) (see detailed package specification).

There are a few features not supported by this implementation:

-   `PLAINTEXT` signature algorithm
-   `"application/x-www-form-urlencoded"` HTTP request body
-   `"oauth_*"` parameters specified in the HTTP request URL (instead assumes they are specified in the `Authorization` header)

Before using this library, you may need to set up your application as follows:

1.  For web applications, you may need to first register your application with the authorization server. It may provide two pieces of information you need:
    -   OAuth Consumer Key: use this as the `consumerKey` on every OAuth request, for example in com.google.api.client.auth.oauth.AbstractOAuthGetToken#consumerKey.
    -   OAuth Consumer Secret: use this as the com.google.api.client.auth.oauth.OAuthHmacSigner#clientSharedSecret when using the `"HMAC-SHA1"` signature method.
2.  For an installed application, an unregistered web application, or a web application running on localhost, you must use the `"HMAC-SHA1"` signature method. The documentation for the authorization server will need to provide you with the `consumerKey` and `clientSharedSecret` to use.
3.  For the `"HMAC-SHA1"` signature method, use [com.google.api.client.auth.oauth.OAuthHmacSigner](/java/docs/reference/google-oauth-client/latest/com.google.api.client.auth.oauth.OAuthHmacSigner).
4.  For the `"RSA-SHA1"` signature method, use [com.google.api.client.auth.oauth.OAuthRsaSigner](/java/docs/reference/google-oauth-client/latest/com.google.api.client.auth.oauth.OAuthRsaSigner).

After the set up has been completed, the typical application flow is:

1.  Request a temporary credentials token from the Authorization server using [com.google.api.client.auth.oauth.OAuthGetTemporaryToken](/java/docs/reference/google-oauth-client/latest/com.google.api.client.auth.oauth.OAuthGetTemporaryToken). A callback URL should be specified for web applications, but does not need to be specified for installed applications.
2.  Direct the end user to an authorization web page to allow the end user to authorize the temporary token using using [com.google.api.client.auth.oauth.OAuthAuthorizeTemporaryTokenUrl](/java/docs/reference/google-oauth-client/latest/com.google.api.client.auth.oauth.OAuthAuthorizeTemporaryTokenUrl).
3.  After the user has granted the authorization:
    -   For web applications, the user's browser will be redirected to the callback URL which may be parsed using [com.google.api.client.auth.oauth.OAuthCallbackUrl](/java/docs/reference/google-oauth-client/latest/com.google.api.client.auth.oauth.OAuthCallbackUrl).
    -   For installed applications, see the authorization server's documentation for figuring out the verification code.
4.  Request to exchange the temporary token for a long-lived access token from the Authorization server using [com.google.api.client.auth.oauth.OAuthGetAccessToken](/java/docs/reference/google-oauth-client/latest/com.google.api.client.auth.oauth.OAuthGetAccessToken). This access token must be stored.
5.  Use the stored access token to authorize HTTP requests to protected resources by setting the com.google.api.client.auth.oauth.OAuthParameters#token and using [com.google.api.client.auth.oauth.OAuthParameters](/java/docs/reference/google-oauth-client/latest/com.google.api.client.auth.oauth.OAuthParameters) as the com.google.api.client.http.HttpRequestInitializer.

## [com.google.api.client.auth.oauth2](/java/docs/reference/google-oauth-client/latest/com.google.api.client.auth.oauth2)

Implementation of the [OAuth 2.0 Authorization Framework](http://tools.ietf.org/html/rfc6749).

Before using this library, you will typically need to register your application with the authorization server to receive a client ID and client secret. See [Client Registration](http://tools.ietf.org/html/rfc6749#section-2).

These are the typical steps of the web server flow based on an authorization code, as specified in [Authorization Code Grant](http://tools.ietf.org/html/rfc6749#section-4.1):

-   Redirect the end user in the browser to the authorization page using [com.google.api.client.auth.oauth2.AuthorizationCodeRequestUrl](/java/docs/reference/google-oauth-client/latest/com.google.api.client.auth.oauth2.AuthorizationCodeRequestUrl) to grant your application access to the end user's protected data.
-   Process the authorization response using [com.google.api.client.auth.oauth2.AuthorizationCodeResponseUrl](/java/docs/reference/google-oauth-client/latest/com.google.api.client.auth.oauth2.AuthorizationCodeResponseUrl) to parse the authorization code.
-   Request an access token and possibly a refresh token using [com.google.api.client.auth.oauth2.AuthorizationCodeTokenRequest](/java/docs/reference/google-oauth-client/latest/com.google.api.client.auth.oauth2.AuthorizationCodeTokenRequest).
-   Access protected resources using [com.google.api.client.auth.oauth2.Credential](/java/docs/reference/google-oauth-client/latest/com.google.api.client.auth.oauth2.Credential). Expired access tokens will automatically be refreshed using the refresh token (if applicable).

These are the typical steps of the the browser-based client flow specified in [Implicit Grant](http://tools.ietf.org/html/rfc6749#section-4.2):

-   Redirect the end user in the browser to the authorization page using [com.google.api.client.auth.oauth2.BrowserClientRequestUrl](/java/docs/reference/google-oauth-client/latest/com.google.api.client.auth.oauth2.BrowserClientRequestUrl) to grant your browser application access to the end user's protected data.
-   Use a JavaScript application to process the access token found in the URL fragment at the redirect URI registered with the authorization server.

## [com.google.api.client.auth.openidconnect](/java/docs/reference/google-oauth-client/latest/com.google.api.client.auth.openidconnect)

[com.google.api.client.util.Beta](https://cloud.google.com/java/docs/reference/google-http-client/latest/com.google.api.client.util.Beta.html)  
[OpenID Connect](http://openid.net/connect/).

## [com.google.api.client.extensions.appengine.auth](/java/docs/reference/google-oauth-client/latest/com.google.api.client.extensions.appengine.auth)

[com.google.api.client.util.Beta](https://cloud.google.com/java/docs/reference/google-http-client/latest/com.google.api.client.util.Beta.html)  
These servlets will allow an App Engine user to quickly get started with the auth object interface from the main client. They will utilize the App Engine Datastore and Credentials to manage credentials on behalf of users.

Warning: starting with version 1.7, usage of this for OAuth 2.0 is deprecated. Instead use [com.google.api.client.extensions.appengine.auth.oauth2](/java/docs/reference/google-oauth-client/latest/com.google.api.client.extensions.appengine.auth.oauth2).

## [com.google.api.client.extensions.appengine.auth.oauth2](/java/docs/reference/google-oauth-client/latest/com.google.api.client.extensions.appengine.auth.oauth2)

OAuth 2.0 utilities that help simplify the authorization flow on Google App Engine.

## [com.google.api.client.extensions.appengine.auth.oauth2.jakarta](/java/docs/reference/google-oauth-client/latest/com.google.api.client.extensions.appengine.auth.oauth2.jakarta)

OAuth 2.0 utilities that help simplify the authorization flow on Google App Engine. This package uses the `jakarta.servlet` namespace.

## [com.google.api.client.extensions.auth.helpers](/java/docs/reference/google-oauth-client/latest/com.google.api.client.extensions.auth.helpers)

[com.google.api.client.util.Beta](https://cloud.google.com/java/docs/reference/google-http-client/latest/com.google.api.client.util.Beta.html)  
Auth object framework that will provide an interface to create easy to use, object-oriented methods to obtain and manage auth credentials.

Warning: starting with version 1.7, usage of this for OAuth 2.0 is deprecated. Instead use `com.google.api.client.auth.oauth2`.

## [com.google.api.client.extensions.auth.helpers.oauth](/java/docs/reference/google-oauth-client/latest/com.google.api.client.extensions.auth.helpers.oauth)

[com.google.api.client.util.Beta](https://cloud.google.com/java/docs/reference/google-http-client/latest/com.google.api.client.util.Beta.html)  
Implementation of auth objects to obtain and manage OAuth 1 credentials using the web server flow.

## [com.google.api.client.extensions.java6.auth.oauth2](/java/docs/reference/google-oauth-client/latest/com.google.api.client.extensions.java6.auth.oauth2)

OAuth 2.0 utilities that help simplify the authorization flow on Java 6.

## [com.google.api.client.extensions.jetty.auth.oauth2](/java/docs/reference/google-oauth-client/latest/com.google.api.client.extensions.jetty.auth.oauth2)

OAuth 2.0 utilities that simplify the authorization flow using an HTTP server.

## [com.google.api.client.extensions.servlet.auth](/java/docs/reference/google-oauth-client/latest/com.google.api.client.extensions.servlet.auth)

[com.google.api.client.util.Beta](https://cloud.google.com/java/docs/reference/google-http-client/latest/com.google.api.client.util.Beta.html)  
Servlets that can be completed by users to create and complete a web server auth flow to obtain a credential.

Warning: starting with version 1.7, usage of this for OAuth 2.0 is deprecated. Instead use [com.google.api.client.extensions.servlet.auth.oauth2](/java/docs/reference/google-oauth-client/latest/com.google.api.client.extensions.servlet.auth.oauth2).

## [com.google.api.client.extensions.servlet.auth.oauth2](/java/docs/reference/google-oauth-client/latest/com.google.api.client.extensions.servlet.auth.oauth2)

OAuth 2.0 utilities that help simplify the authorization flow in HTTP servlets.

## [com.google.api.client.extensions.servlet.auth.oauth2.jakarta](/java/docs/reference/google-oauth-client/latest/com.google.api.client.extensions.servlet.auth.oauth2.jakarta)

OAuth 2.0 utilities that help simplify the authorization flow in HTTP servlets in the `jakarta.servlet` namespace.

## [com.google.api.services.samples.dailymotion.cmdline](/java/docs/reference/google-oauth-client/latest/com.google.api.services.samples.dailymotion.cmdline)

## [com.google.api.services.samples.keycloak.cmdline](/java/docs/reference/google-oauth-client/latest/com.google.api.services.samples.keycloak.cmdline)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
