# Third-Party Login (Deprecated)

*This is a paid feature, available on the Enterprise plan.*

> \[!NOTE]
> Looking for SAML SSO?
> This article discusses the **deprecated, legacy method** of implementing third-party login. Please use our [new and improved implementation of SAML SSO](https://www.sanity.io/docs/developer-guides/sso-saml).

Users that have activated custom access control on their plan may replace a project's user database with their own custom login solution, e.g. to integrate with a single sign-on (SSO) system such as Active Directory or Kerberos.

Sanity provides APIs to register users and permissions for datasets and create Sanity sessions, but it is up to the customer to actually implement the integration with their authentication system.

Implementing third-party login involves:

- Registering Sanity groups with appropriate permissions via the API, either manually or with code.
- Writing code to generate a Sanity session when a user logs in.
- Optionally modifying the Sanity Studio to use a separate login form.

We'll go through each of these steps in detail below.

We also have a [sample Node.js application](https://github.com/sanity-io/3rd-party-auth-example) that shows how to go about this using Passport.js. It currently has support for authenticating with Google's OAuth and Okta's SAML API.

## Managing groups and users

Sanity uses groups to grant permissions to various users, as described in the access control section. You will first need to set up the groups and permissions that you need, as well as group memberships for users. Depending on your use case it may be sufficient to simply set up the groups manually, but we expect most users will require code to automatically keep groups in sync with their local database.

> \[!WARNING]
> Gotcha
> Custom user IDs must adhere to the following rules:
>
> - Must begin with a lower case `e`
> - Followed by a string of any combination of upper or lowercase characters from the English alphabet, numbers, hyphens, and underscores. E.g. `e-A3f-Lm_N6-eQrS-Xw9y`
>   This can also be expressed with the following regular expression: `/^e[a-zA-Z0-9-_]+$/`

> \[!TIP]
> Protip
> There is no need to create Sanity users corresponding to your local users, it is sufficient to simply list the user IDs as group members.

> \[!WARNING]
> Gotcha
> You cannot assign a third-party login user to a role created with the [roles API](https://www.sanity.io/docs/user-guides/roles). We recommend using [SAML integration](https://www.sanity.io/docs/developer-guides/sso-saml) instead where possible. You can create roles for third-party login users with groups, described below.

Groups are stored as regular Sanity documents of type `system.group` under the `_.groups.` path, as outlined in the access control section. Use regular [mutations](https://www.sanity.io/docs/http-reference/mutation) via the API to create and modify them.

For example, let's say we would like to give the journalists `e-henrik` and `e-emma` in our Norway office full access to all articles in the `norway` edition, but only read access to other editions - we could create the following group for this:

```json
{
  _id: '_.groups.office-norway',
  _type: 'system.group',
  grants: [
    {
      filter: "_type == 'article' && edition._ref == 'norway'",
      permissions: ["create", "update", "read"]
    },
    {
      filter: "_type == 'article'",
      permissions: ["read"]
    }
  ],
  members: ["e-henrik", "e-emma"]
}
```

> \[!TIP]
> Protip
> Sanity user IDs may be exposed in publicly available data (e.g. as the author of a document), so take care not to use any personally identifiable information when generating IDs. An arbitrary number or a hash is usually a good choice.

Once all of our groups and memberships are properly set up, we'll need to give users a Sanity token when they log in.

## Generating Sanity tokens

You will need some sort of login solution on your end, which authenticates users with your user database and then makes an API call to Sanity to generate a session claim. The details depend entirely on the specific authentication system you use, but we have a GitHub repo with a [complete example](https://github.com/sanity-io/3rd-party-auth-example).

Once you have authenticated the user you should make an HTTP `POST` request using a [robot token](https://www.sanity.io/docs/content-lake/http-auth) that has the `create-session` permission to the following endpoint:

`POST https://<projectId>.api.sanity.io/v2021-06-07/auth/thirdParty/session`

The `POST` body should be JSON- or URL-encoded and contain the following fields:

- `userId`: the user's ID as listed in the group (see above).
- `userFullName`: the user's full name.
- `userEmail`: the user's email address.
- `userImage`: optional HTTPS URL to the user's profile image.
- `userRole`: If the user should be able to log into the Sanity Studio, role must be either `administrator` or `editor`
- `sessionExpires`: ISO timestamp for when the session should expire.
- `sessionLabel`: optional label for the session.

The API call will return JSON with two fields; `token` and `endUserClaimUrl`. If the session is to be used for managing content in the Sanity Studio, the `endUserClaimUrl` contains a URL which the end user's browser can visit to obtain a Sanity session (set as a cookie). This URL is valid for a single use only. You can add a query parameter `origin` with a URL to redirect the user to after the session has been created - this URL must be listed as a valid [CORS origin](https://www.sanity.io/docs/content-lake/cors) for the project. For other use cases, such as creating native applications, you'll want to store the `token` returned in a secure location and use it to authenticate requests against the Sanity API.

#### User profiles

Every time you create a SSO session, the user info you post with it will be saved to a user profile model. It's attatched to the user id and project id. This information is only available for logged in users to your project. The model is needed to display user info even though the session is destroyed (user logging out or session expires). You are responsible for deleting these profiles when they should be deleted (according to your terms).

```text
DELETE https://api.sanity.io/v2021-06-07/projects/<project-id>/users/<e-user-id>/profile

Authorization: Bearer <your-create-session-token>

```

If you want to explicitly create or update a user profile, you can do so by sending a PUT request with the details:

```text
PUT https://api.sanity.io/v2021-06-07/projects/<project-id>/users/<e-user-id>/profile

Content-Type: application/json
Authorization: Bearer <your-create-session-token>

{
  "name": "Some username",
  "profileImage": "https://optional.user.img/url.jpg"
}

```

## Using external logins in the Sanity Studio

The Studio can be configured to use your own login solution rather than the standard ones by modifying the config file `config/@sanity/default-login.json` in the studio code.

```json
{
  "providers": {
    "mode": "replace",
    "redirectOnSingle": true,
    "entries": [
      {
        "name": "custom-login",
        "title": "Custom Login",
        "url": "https://mydomain.com/login",
        "logo": "static/custom-login.png"
      }
    ]
  }
}
```

The Studio redirects the user to the specified `url` to initiate the authentication. The `title` and `logo` are displayed to the user on the Studio login screen. You may add multiple entries if you need to support several authentication solutions.
