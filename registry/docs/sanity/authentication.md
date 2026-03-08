# Authentication

> \[!TIP]
> Protip
> If you are just going to read public documents, and edit them in the studio, you don't need to worry about authentication.

By default, unauthenticated users have read access to published documents (with some exceptions like private datasets). However, if you want to access draft documents or make modifications you will need to authenticate yourself as a project member with write access.

## Personal tokens

Sanity uses tokens for authentication, which are generated when you log in and then attached to all API requests in the HTTP `Authorization` header, for example:

```text
Authorization: Bearer skE5UXUmBEy7U50jcG4In4v4xoHZTlduDxQYet8Y84tsTqAZxp2reIPJsA1JzqXJno2qcpauGwPfjHpU
```

The content studio handles this for you automatically when you log in, and the command-line tool will generate and store a personal token when you run `sanity login`.

> \[!WARNING]
> Gotcha
> Without intervention, personal tokens will last for one year (if using SAML SSO, the lifetime of the token is shorter). After logging out of the Sanity CLI, the subsequent login will generate a new personal token, and in doing so, invalidate the old one.

If you want to run authenticated API requests manually with e.g. `curl`, you can find your personal API token by running `sanity debug --secrets`, and look for the "Auth token" value under "Authentication". You then place this in an `Authorization` header:

```sh
curl -H "Authorization: Bearer <token>" https://<project>.api.sanity.io/v2021-06-07/data/query/production?query=*
```

> \[!TIP]
> Protip
> Your API token is *personal*, and gives complete access to the Sanity API as your user. Take care not to share it with anyone, and use \*robot tokens \*instead to authenticate from applications and third-party services.

## Robot tokens

If you need to authenticate with the Sanity API from an application or third-party service, you should generate a dedicated robot token for it, with appropriate [permissions](https://www.sanity.io/docs/user-guides/roles).

### Organization-wide tokens

Organization-wide robot tokens are used for scenarios where you need access to manage multiple projects, deploy or manage SDK apps, or access data in organization-wide Sanity apps like Media Library or Canvas.

To create an organization token, you must have developer or equivalent role in the organization. Navigate to your organization’s [management console](https://manage.sanity.io), then select *Settings > API > Tokens* and use the **Add new token** button to open the creation dialog.

### Project tokens

Project robot tokens can only perform actions on an individual project.

To create a robot token, you must have developer, editor, or equivalent role in the project. Navigate to your project's [management console](https://manage.sanity.io), then go to *Settings* > *API* > *Tokens* and use the **Add new token**\* \*button to open the token creation dialog.

Using a separate token for each application makes it easier to replace it or revoke access, if necessary.

Once a token is generated, it will be displayed exactly once—be sure to make a secure copy of it, since it is not possible to recover the token later. You can then use the token in API requests as outlined above.

> \[!WARNING]
> Gotcha
> Robot tokens will last until deleted (through Manage or the CLI). We suggest using descriptive names and pruning unused or old tokens over time.

> \[!NOTE]
> Not all APIs allow robot tokens
> Some APIs are only available for use with personal auth tokens. In these cases, their documentation will explicitly call out that a personal token is required.

## Securing your API token

After setting up your token, it's important to keep this secure and not in a publicly-visible space -- such as GitHub or Bitbucket. When deploying code that needs your API token, many hosting companies provide ways of creating environment variables. These variables are stored securely on your host's server and are not stored in plain text in a repository.

- [Setting up environment variables in Netlify](https://docs.netlify.com/configure-builds/environment-variables/)​
- [Setting up environment variables in Vercel](https://vercel.com/blog/environment-variables-ui)​
