# Setting up a Default Relay State for IdP Initiated - SAML Logins

> \[!NOTE]
> This developer guide was contributed by Tim Naughton (Sanity Support Engineer).

Expands upon our general [SAML setup guide](https://www.sanity.io/docs/developer-guides/sso-saml) to configure a default relay state.

During the setup and configuration process, it's a good idea to keep two windows side by side:

- One with [Sanity Manage](https://www.sanity.io/docs/developer-guides/sso-saml).
- The other with the configuration settings of the IdP. For this example we will show screenshots from Okta.

## Setup

### Go to the service configuration (Sanity)

Go to [Sanity Manage](https://www.sanity.io/manage) and select the organization you want to enable SSO for your organization.

To navigate to the service provider configuration inside Sanity Manage:

1. In the organization you intend to add a relay state to, go to **Settings → SAML SSO**.
2. Find the relevant project, click the vertical “…” and select **Copy Login URL (screenshot)**.

### Customizing the URL

This login url will take you to the Sanity Manage page once logged in. **If you'd instead prefer to, you can edit the URL for Studio Access rather than Manage.** In this URL, replace the origin parameter value with your encoded Sanity Studio URL, which will route users directly to the Studio instead of the management page.**Ex**: If the copied login URL is:

`https://api.sanity.io/v2021-10-01/auth/saml/login/{UNIQUE_ID_AVAILABLE_IN_MANAGE}?origin=https%3A%2F%2Fwww.sanity.io%2Fmanage&projectId={MYPROJECT_ID}`

update it to:

`https://api.sanity.io/v2021-10-01/auth/saml/login/{UNIQUE_ID_AVAILABLE_IN_MANAGE}?origin={MY_ENCODED_STUDIO_URL}&projectId={MYPROJECT_ID}`

> \[!WARNING]
> This url will need to be encoded and you can use an online encoder like [urlencoder.org](https://www.urlencoder.org/)

### Updating the IdP

You can now update your IdP's default relay state.

> \[!WARNING]
> Ensure that the URL you are encoding is added to your [CORS origin list](https://www.sanity.io/docs/content-lake/cors) in Sanity.

### Common errors

- When I access Sanity from my IdP dashboard, I receive:
  `{ "id": "3431pXO", "displayName": "Sanity Support", "email": "sanity@sanity.io", "familyName": "Sanity Support", "givenName": "Sanity", "middleName": null, "imageUrl": null, "provider": "saml-f6a94", "tosAcceptedAt": "2024-11-20T18:51:57.264Z", "createdAt": "2024-11-20T18:51:57.264Z", "updatedAt": "2024-11-20T18:51:57.535Z", "isCurrentUser": true, "providerId": "49jc94jf949930304jkojfciojlj934003490943" }`- It does not appear you have set up your default relay state within your IdP, you will need to also configure within your Idp settings.

- Receiving a blocked or permissions error- Ensure that you have the newly encoded url added to your [CORS origin list](https://www.sanity.io/docs/content-lake/cors) in Sanity
