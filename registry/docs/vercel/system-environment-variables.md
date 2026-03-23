# System environment variables

Vercel provides a set of environment variables that are automatically populated by the system, such as the URL of the deployment or the name of the Git branch deployed.

## Automatically expose system environment variables

To expose these environment variables to your deployments:

1. Navigate to your project on your [dashboard](/dashboard).
2. Open **Settings** in the sidebar and click on [**Environment Variables**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fenvironment-variables\&title=Go+to+Environment+Variables).
3. Select the **Automatically expose System Environment Variables** checkbox.

> **⚠️ Warning:** If you disable this setting, no deployment ID will be made available for supported frameworks (like Next.js) to use, which means [Skew Protection](/docs/skew-protection) will also be disabled.

## System environment variables

If you are using a framework for your project, Vercel provides the following prefixed environment variables:

> **💡 Note:** When you choose to automatically expose system environment variables, some
> React warnings, such as those in a `create-react-app` will display as build
> errors. For more information on this error, see [How do I resolve a
> `process.env.CI = true`
> error?](/kb/guide/how-do-i-resolve-a-process-env-ci-true-error)

### `VERCEL`

**Available at:&#x20;**&#x42;oth build and runtime

An indicator to show that system environment variables have been exposed to your project's Deployments.

```bash
VERCEL=1
```

### `CI`

**Available at:&#x20;**&#x42;uild time

An indicator that the code is running in a Continuous Integration environment.

```bash
CI=1
```

### `VERCEL_ENV`

**Available at:&#x20;**&#x42;oth build and runtime

The environment that the app is deployed and running on. The value can be either production, preview, or development.

```bash
VERCEL_ENV=production
```

### `VERCEL_TARGET_ENV`

**Available at:&#x20;**&#x42;oth build and runtime

The system or custom environment that the app is deployed and running on. The value can be either production, preview, development, or the name of a custom environment.

```bash
VERCEL_TARGET_ENV=production
```

### `VERCEL_URL`

**Available at:&#x20;**&#x42;oth build and runtime

The domain name of the generated deployment URL. Example: \*.vercel.app. The value does not include the protocol scheme https://.

```bash
VERCEL_URL=my-site.vercel.app
```

### `VERCEL_BRANCH_URL`

**Available at:&#x20;**&#x42;oth build and runtime

The domain name of the generated Git branch URL. Example: \*-git-\*.vercel.app. The value does not include the protocol scheme https://.

```bash
VERCEL_BRANCH_URL=my-site-git-improve-about-page.vercel.app
```

### `VERCEL_PROJECT_PRODUCTION_URL`

**Available at:&#x20;**&#x42;oth build and runtime

A production domain name of the project. We select the shortest production custom domain, or vercel.app domain if no custom domain is available. Note, that this is always set, even in preview deployments. This is useful to reliably generate links that point to production such as OG-image URLs. The value does not include the protocol scheme https://.

```bash
VERCEL_PROJECT_PRODUCTION_URL=my-site.com
```

### `VERCEL_REGION`

**Available at:&#x20;**&#x52;untime

The ID of the Region where the app is running.

```bash
VERCEL_REGION=cdg1
```

### `VERCEL_DEPLOYMENT_ID`

**Available at:&#x20;**&#x42;oth build and runtime

The unique identifier for the deployment, which can be used to implement Skew Protection.

```bash
VERCEL_DEPLOYMENT_ID=dpl_7Gw5ZMBpQA8h9GF832KGp7nwbuh3
```

### `VERCEL_PROJECT_ID`

**Available at:&#x20;**&#x42;oth build and runtime

The unique identifier for the project.

```bash
VERCEL_PROJECT_ID=prj_Rej9WaMNRbffVm34MfDqa4daCEvZzzE
```

### `VERCEL_SKEW_PROTECTION_ENABLED`

**Available at:&#x20;**&#x42;oth build and runtime

When Skew Protection is enabled in Project Settings, this value is set to 1.

```bash
VERCEL_SKEW_PROTECTION_ENABLED=1
```

### `VERCEL_AUTOMATION_BYPASS_SECRET`

**Available at:&#x20;**&#x42;oth build and runtime

The Protection Bypass for Automation value, if the secret has been generated in the project's Deployment Protection settings.

```bash
VERCEL_AUTOMATION_BYPASS_SECRET=secret
```

### `VERCEL_OIDC_TOKEN`

**Available at:&#x20;**&#x42;uild time

When Secure Backend Access with OpenID Connect (OIDC) Federation is enabled in Project Settings, this value is set to a Vercel-issued OIDC token. At runtime, the token is set to thex-vercel-oidc-tokenheader on your functions' Request object. In local development, you can download the token using the CLI commandvercel env pull.

```bash
VERCEL_OIDC_TOKEN=secret
```

### `VERCEL_GIT_PROVIDER`

**Available at:&#x20;**&#x42;oth build and runtime

The Git Provider the deployment is triggered from.

```bash
VERCEL_GIT_PROVIDER=github
```

### `VERCEL_GIT_REPO_SLUG`

**Available at:&#x20;**&#x42;oth build and runtime

The origin repository the deployment is triggered from.

```bash
VERCEL_GIT_REPO_SLUG=my-site
```

### `VERCEL_GIT_REPO_OWNER`

**Available at:&#x20;**&#x42;oth build and runtime

The account that owns the repository the deployment is triggered from.

```bash
VERCEL_GIT_REPO_OWNER=acme
```

### `VERCEL_GIT_REPO_ID`

**Available at:&#x20;**&#x42;oth build and runtime

The ID of the repository the deployment is triggered from.

```bash
VERCEL_GIT_REPO_ID=117716146
```

### `VERCEL_GIT_COMMIT_REF`

**Available at:&#x20;**&#x42;oth build and runtime

The git branch of the commit the deployment was triggered by.

```bash
VERCEL_GIT_COMMIT_REF=improve-about-page
```

### `VERCEL_GIT_COMMIT_SHA`

**Available at:&#x20;**&#x42;oth build and runtime

The git SHA of the commit the deployment was triggered by.

```bash
VERCEL_GIT_COMMIT_SHA=fa1eade47b73733d6312d5abfad33ce9e4068081
```

### `VERCEL_GIT_COMMIT_MESSAGE`

**Available at:&#x20;**&#x42;oth build and runtime

The message attached to the commit the deployment was triggered by. The message is truncated if it exceeds 2048 bytes.

```bash
VERCEL_GIT_COMMIT_MESSAGE=Update about page
```

### `VERCEL_GIT_COMMIT_AUTHOR_LOGIN`

**Available at:&#x20;**&#x42;oth build and runtime

The username attached to the author of the commit that the project was deployed by.

```bash
VERCEL_GIT_COMMIT_AUTHOR_LOGIN=johndoe
```

### `VERCEL_GIT_COMMIT_AUTHOR_NAME`

**Available at:&#x20;**&#x42;oth build and runtime

The name attached to the author of the commit that the project was deployed by.

```bash
VERCEL_GIT_COMMIT_AUTHOR_NAME=John Doe
```

### `VERCEL_GIT_PREVIOUS_SHA`

**Available at:&#x20;**&#x42;uild time

The git SHA of the last successful deployment for the project and branch.

```bash
VERCEL_GIT_PREVIOUS_SHA=fa1eade47b73733d6312d5abfad33ce9e4068080
```

### `VERCEL_GIT_PULL_REQUEST_ID`

**Available at:&#x20;**&#x42;oth build and runtime

The pull request id the deployment was triggered by. If a deployment is created on a branch before a pull request is made, this value will be an empty string.

```bash
VERCEL_GIT_PULL_REQUEST_ID=23
```

title: "BODY\_NOT\_A\_STRING\_FROM\_FUNCTION"
description: "The function returned a non-string body. This is a function error."
last\_updated: "2026-03-23T09:40:09.532Z"
source: "https://vercel.com/docs/errors/BODY\_NOT\_A\_STRING\_FROM\_FUNCTION"

# BODY\_NOT\_A\_STRING\_FROM\_FUNCTION

The `BODY_NOT_A_STRING_FROM_FUNCTION` error occurs when a function returns a body that is not a string. It's essential that functions return a string body to ensure that they can be correctly processed and executed.

**Error Code:** `502`

**Name:** Bad Gateway

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check function return type:** Ensure that the function is structured to return a string. If the function is returning a different data type, modify the function to return a string, using `JSON.stringify()` if necessary
2. **Review function code:** Inspect the function code for any logic that might cause a non-string value to be returned
3. **Check data types:** If the function is processing input data or retrieving data from external sources, ensure that the data is being correctly converted to a string before being returned
4. **Review function logs:** Check the [function logs](/docs/runtime-logs#type) for any errors or warnings that might indicate why a non-string value is being returned

title: "DEPLOYMENT\_BLOCKED"
description: "The deployment was blocked due to certain conditions. This is a deployment error."
last\_updated: "2026-03-23T09:40:09.538Z"
source: "https://vercel.com/docs/errors/DEPLOYMENT\_BLOCKED"

# DEPLOYMENT\_BLOCKED

The `DEPLOYMENT_BLOCKED` error occurs when a deployment is blocked due to certain conditions that prevent it from proceeding. This could happen due to various reasons such as configuration errors, account limitations, or policy violations.

**Error Code:** `403`

**Name:** Forbidden

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check configuration:** Ensure that your deployment configuration is correct and complies with the platform's requirements
2. **Check your account plan**: If you have recently downgraded to the [Hobby plan](/docs/plans/hobby), you may need to redeploy your projects to make them available once again
3. **Review email notifications**: If you receive an email from Vercel about the pause, it may contain more details about the issue and next steps
4. **Verify account status:** Ensure your account is in good standing and hasn't exceeded any [limits or quotas](/docs/limits)
5. **Review policies:** Ensure that your deployment complies with all platform [policies](/legal/privacy-policy) and isn't in violation of any [terms](/legal/terms)
6. **Check for platform outages:** Sometimes, platform-wide outages or issues can cause deployments to be blocked. Check the [status page](https://www.vercel-status.com/) for any ongoing incidents
7. **Contact support:** If you've verified the above and are still experiencing the issue, [contact support](/help#issues) for further assistance

title: "DEPLOYMENT\_DELETED"
description: "The deployment has been removed"
last\_updated: "2026-03-23T09:40:09.542Z"
source: "https://vercel.com/docs/errors/DEPLOYMENT\_DELETED"

# DEPLOYMENT\_DELETED

The `DEPLOYMENT_DELETED` error occurs when a request is made for a deployment that has been removed based on the projects deployment retention policy.

**Error Code:** `410`

**Name:** Deployment Deleted

## Troubleshoot

Recently deleted deployments can be restored within 30 days of deletion.

To restore a deleted deployment, open **Settings** in the sidebar of your project:

1. Select **Security** on the side panel of the project settings page
2. Scroll down to the **Recently Deleted** section
3. Find the deployment that needs to be restored, and click on the dropdown menu item **Restore**
4. Complete the modal

title: "DEPLOYMENT\_DISABLED"
description: "The deployment is disabled. This is a deployment error."
last\_updated: "2026-03-23T09:40:09.546Z"
source: "https://vercel.com/docs/errors/DEPLOYMENT\_DISABLED"

# DEPLOYMENT\_DISABLED

The `DEPLOYMENT_DISABLED` error occurs when a deployment is disabled due to certain conditions or configurations. This might happen if there's a manual intervention required, or a specific condition is met that triggers the disabling of the deployment.

**Error Code:** `402`

**Name:** Payment required

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check your usage**: Check the specific [usage limits](/dashboard/usage) you've exceeded in the [Vercel dashboard](/dashboard/usage)
2. **Check your account plan**: If you have recently downgraded to the [Hobby plan](/docs/plans/hobby), you may need to redeploy your projects to make them available once again
3. **Review email notifications**: If you receive an email from Vercel about the pause, it may contain more details about the issue and next steps
4. **Restore your site**: The fastest solution is to [upgrade to the Pro plan](/docs/plans/pro-plan). This plan offers more generous usage limits and pay-as-you-go options
5. **Contact support:** If you've checked the above and are still unable to resolve the issue, [contact support](/help#issues) for further assistance

title: "DEPLOYMENT\_NOT\_FOUND"
description: "The deployment was not found. This is a deployment error."
last\_updated: "2026-03-23T09:40:09.574Z"
source: "https://vercel.com/docs/errors/DEPLOYMENT\_NOT\_FOUND"

# DEPLOYMENT\_NOT\_FOUND

The `DEPLOYMENT_NOT_FOUND` error occurs when a request is made for a deployment that doesn't exist. This could happen if the deployment ID or URL is incorrect, or if the deployment has been deleted.

**Error Code:** `404`

**Name:** Not Found

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check the deployment URL**: Ensure that the deployment URL you are using is correct and does not contain any typos or incorrect paths
2. **Check deployment existence:** Verify that the [deployment exists](/docs/deployments/managing-deployments) and has not been deleted
3. **Review deployment logs:** If the deployment exists, review the [deployment logs](/docs/deployments/logs) to identify any issues that might have caused the deployment to be unavailable
4. **Verify permissions:** Ensure you have the necessary [permissions](/docs/accounts/team-members-and-roles) to access the deployment
5. **Consult community resources:** Visit our [community post on debugging 404 errors](https://community.vercel.com/t/debugging-404-errors/437) for additional tips and solutions shared by other developers.
6. **Contact support:** If you've checked the above and are still unable to resolve the issue, [contact support](/help#issues) for further assistance

title: "DEPLOYMENT\_NOT\_READY\_REDIRECTING"
description: "The deployment is not ready and is redirecting to another location. This is a deployment error."
last\_updated: "2026-03-23T09:40:09.578Z"
source: "https://vercel.com/docs/errors/DEPLOYMENT\_NOT\_READY\_REDIRECTING"

# DEPLOYMENT\_NOT\_READY\_REDIRECTING

The `DEPLOYMENT_NOT_READY_REDIRECTING` error occurs when the requested deployment is not yet ready, and the request is redirected to the deployment status page.

**Error Code:** `303`

**Name:** See Other

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check deployment status:** Ensure that the [deployment process](/docs/deployments/managing-deployments) has completed successfully and the deployment is ready to serve requests
2. **Inspect deployment logs:** Review the [deployment logs](/docs/deployments/logs) for any indications as to why the deployment is not ready
3. **Verify Configuration:** Check the configuration settings to ensure they are correct and that there are no misconfigurations
4. **Wait and refresh**: If you encounter this error, wait for a few seconds and then refresh the page. In some cases, the deployment may still be in progress, and refreshing the page after a short interval can resolve the issue

title: "DEPLOYMENT\_PAUSED"
description: "The deployment was paused. This is a deployment error."
last\_updated: "2026-03-23T09:40:09.583Z"
source: "https://vercel.com/docs/errors/DEPLOYMENT\_PAUSED"
