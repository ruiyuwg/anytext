# Using Callbacks with the Deploy Button

## Redirect URL

| Parameter      | Type     | Value                                                                    |
| -------------- | -------- | ------------------------------------------------------------------------ |
| `redirect-url` | `string` | The URL to redirect the user to in the event of a successful deployment. |

The Redirect URL parameter allows you to define a URL, other than the newly created Vercel project, to send the user to after a successful deployment.

This parameter is helpful if you are sending a user from an application, to deploy a project with Vercel, but want the user to continue with your application with a project created and deployed.

The example below shows a Deploy Button source URL using the Redirect URL parameter:

```bash filename="redirect url"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&redirect-url=https%3A%2F%2Fmy-headless-application.com
```

Provide a custom name and logo for the redirect UI by using the [Developer ID](#developer-id) parameter.

### Callback Parameters

Vercel additionally attaches some "Callback Parameters" to the defined Redirect URL when the user is redirected. The following parameters give you access to information about the project the user has created and deployed, for you to integrate with Vercel after the user is sent back to you.

| Parameter                                                  | Description                                                                                                                                                                                  |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `project-dashboard-url`                                    | The URL to view the Project that was created through the Project creation flow on the Vercel Dashboard.                                                                                      |
| `project-name`                                             | The Name of the Project that was created through the Project creation flow.                                                                                                                  |
| `deployment-dashboard-url`                                 | The URL to view the Deployment that was created through the Project creation flow on the Vercel Dashboard.                                                                                   |
| `deployment-url`                                           | The URL of the deployment that was created through the Project creation flow. This contains the default production domain that was automatically generated for the project that was created. |
| `repository-url`                                           | The URL of the Git repository that was created through the Project creation flow, within the user's selected Git account (GitHub, GitLab, or Bitbucket).                                     |
| `production-deploy-hook-url` ([conditional](#deploy-hook)) | The URL of a Deploy Hook. Requires [the `production-deploy-hook` parameter](#deploy-hook).                                                                                                   |

## Developer ID

| Parameter      | Type     | Value                            |
| -------------- | -------- | -------------------------------- |
| `developer-id` | `string` | The Client ID of an Integration. |

The Developer ID parameter allows you to define a [Vercel Integration](/docs/integrations) Client ID which will then attach your logo and name to the UI when using the [Redirect URL](#redirect-url) parameter.

You can find the Developer ID listed as "Client ID" in your [Integrations Developer Console](/dashboard/integrations/console).

This parameter requires the [Redirect URL](#redirect-url) parameter to be set and also that the Integration website field matches the Redirect URL value.

The example below shows a Deploy Button source URL using the Redirect URL and Developer ID parameters:

```bash filename="redirect url"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&redirect-url=https%3A%2F%2Fmy-headless-application.com&developer-id=oac_7rUTiCMow23Gyfao9RQQ3Es2
```

## External ID

| Parameter     | Type     | Value                                       |
| ------------- | -------- | ------------------------------------------- |
| `external-id` | `string` | An external ID or reference of your choice. |

This parameter allows you to pass the ID or reference of your choice to the Project creation flow.

The query parameter will be relayed to the [Redirect URL](/docs/integrations/create-integration) of
each required [Integration](/docs/integrations/deploy-button/integrations) when the user adds them in the Project creation flow.

To use this parameter, you also need to specify at least one [Integration](/docs/integrations/deploy-button/integrations).

The example below shows a Deploy Button source URL using the Integration ID and External ID parameters:

```bash filename="external id"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&integration-ids=oac_1mkAfc68cuDV4suZRlgkn3Re&external-id=1284210
```

## Deploy Hook

| Parameter                | Type     | Value                                  |
| ------------------------ | -------- | -------------------------------------- |
| `production-deploy-hook` | `string` | The name of the Deploy Hook to set up. |

The Deploy Hook parameter allows you to receive [a URL](/docs/deploy-hooks) when also using the Redirect URL parameter, which you can use to redeploy user's projects for them.

This is useful if you are directing a user to deploy a project that works with your application, for example a headless CMS, and you need to redeploy the user's project in case of a content change that needs to be rebuilt.

The value of this parameter should be the name of the [Deploy Hook](/docs/deploy-hooks) you want to create for the user.

When redirected back to your application upon a successful deployment for the user, you will get the `production-deploy-hook-url` callback parameter in addition to [the default callback parameters](#callback-parameters).

This parameter requires the [Redirect URL](#redirect-url) parameter to also be set.

The example below shows a Deploy Button source URL using the Redirect URL and production Deploy Hook URL parameters:

```bash filename="deploy hook"
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&redirect-url=https%3A%2F%2Fmy-headless-application.com&production-deploy-hook=MyHeadlessProject
```

title: "Deploy Button Demo"
description: "Learn how to use the Deploy Button Demo parameters to showcase an example of a successful deployment to the user when clicking the Deploy Button and entering the Project creation flow."
last\_updated: "2026-03-23T09:40:08.080Z"
source: "https://vercel.com/docs/deploy-button/demo"
