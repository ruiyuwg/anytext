When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Authentication

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

> Note
>
> This page assumes that you already have an Identity Provider (IdP), such as Google, Entra ID (formerly Azure AD) or Okta, which handles the authentication process and returns an access token.

Learn how you can let users authenticate from your extension using OAuth 2.0 via a web browser, and return to your extension.

In OAuth 2.0, the term "grant type" refers to the way an application gets an access token. Although OAuth 2.0 defines several grant types, this page only describes how to authorize users from your extension using the Authorization Code grant type.

## [Authorization code grant flow](#authorization-code-grant-flow)

The Authorization Code grant type is used by confidential and public clients to exchange an authorization code for an access token.

After the user returns to the client via the redirect URL, the application gets the authorization code from the URL and uses it to request an access token.

![Flow for OAuth 2.0](https://docs.docker.com/extensions/extensions-sdk/guides/images/oauth.png)

The image above shows that:

- The Docker extension asks the user to authorize access to their data.
- If the user grants access, the extension then requests an access token from the service provider, passing the access grant from the user and authentication details to identify the client.
- The service provider then validates these details and returns an access token.
- The extension uses the access token to request the user data with the service provider.

### [OAuth 2.0 terminology](#oauth-20-terminology)

- Auth URL: The endpoint for the API provider authorization server, to retrieve the auth code.
- Redirect URI: The client application callback URL to redirect to after auth. This must be registered with the API provider.

Once the user enters the username and password, they're successfully authenticated.

## [Open a browser page to authenticate the user](#open-a-browser-page-to-authenticate-the-user)

From the extension UI, you can provide a button that, when selected, opens a new window in a browser to authenticate the user.

Use the [ddClient.host.openExternal](https://docs.docker.com/extensions/extensions-sdk/dev/api/dashboard/#open-a-url) API to open a browser to the auth URL. For example:

```typescript
window.ddClient.openExternal("https://authorization-server.com/authorize?
  response_type=code
  &client_id=T70hJ3ls5VTYG8ylX3CZsfIu
  &redirect_uri=${REDIRECT_URI});
```

## [Get the authorization code and access token](#get-the-authorization-code-and-access-token)

You can get the authorization code from the extension UI by listing `docker-desktop://dashboard/extension-tab?extensionId=awesome/my-extension` as the `redirect_uri` in the OAuth app you're using and concatenating the authorization code as a query parameter. The extension UI code will then be able to read the corresponding code query-param.

> Important
>
> Using this feature requires the extension SDK 0.3.3 in Docker Desktop. You need to ensure that the required SDK version for your extension set with `com.docker.desktop.extension.api.version` in [image labels](https://docs.docker.com/extensions/extensions-sdk/extensions/labels/) is higher than 0.3.3.

#### [Authorization](#authorization)

This step is where the user enters their credentials in the browser. After the authorization is complete, the user is redirected back to your extension user interface, and the extension UI code can consume the authorization code that's part of the query parameters in the URL.

#### [Exchange the Authorization Code](#exchange-the-authorization-code)

Next, you exchange the authorization code for an access token.

The extension must send a `POST` request to the 0Auth authorization server with the following parameters:

```text
POST https://authorization-server.com/token
&client_id=T70hJ3ls5VTYG8ylX3CZsfIu
&client_secret=YABbyHQShPeO1T3NDQZP8q5m3Jpb_UPNmIzqhLDCScSnRyVG
&redirect_uri=${REDIRECT_URI}
&code=N949tDLuf9ai_DaOKyuFBXStCNMQzuQbtC1QbvLv-AXqPJ_f
```

> Note
>
> The client's credentials are included in the `POST` query params in this example. OAuth authorization servers may require that the credentials are sent as a HTTP Basic Authentication header or might support different formats. See your OAuth provider docs for details.

### [Store the access token](#store-the-access-token)

The Docker Extensions SDK doesn't provide a specific mechanism to store secrets.

It's highly recommended that you use an external source of storage to store the access token.

> Note
>
> The user interface Local Storage is isolated between extensions (an extension can't access another extension's local storage), and each extension's local storage gets deleted when users uninstall an extension.

## [What's next](#whats-next)

Learn how to [publish and distribute your extension](https://docs.docker.com/extensions/extensions-sdk/extensions/)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/extensions/extensions-sdk/guides/oauth2-flow.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fextensions%2fextensions-sdk%2fguides%2foauth2-flow%2f\&labels=status%2Ftriage)

Table of contents
