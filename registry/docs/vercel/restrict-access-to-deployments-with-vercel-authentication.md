# Restrict access to deployments with Vercel Authentication

> **🔒 Permissions Required**: Vercel Authentication

Vercel Authentication lets you restrict access to your public and non-public deployments. It is the **recommended** approach to protecting your deployments, and available on all plans. When enabled, it allows only users with deployment access to view and comment on your site.

Users attempting to access the deployment will encounter a Vercel login redirect. If already logged into Vercel, Vercel will authenticate them automatically.

After login, Vercel redirects the user and sets a cookie in the browser if they have view access. If the user does not have access to view the deployment, Vercel redirects them to [request access](#access-requests).

## Who can access protected deployments?

- Logged in [team members](/docs/rbac/access-roles#team-level-roles) with at least a viewer role ([Viewer Pro](/docs/rbac/access-roles#viewer-pro-role) or [Viewer Enterprise](/docs/rbac/access-roles#viewer-enterprise-role))
- Logged in [project members](/docs/rbac/access-roles#project-level-roles) with at least the [project Viewer](/docs/rbac/access-roles#project-viewer) role
- Logged in members of an [access group](/docs/rbac/access-groups) that has access to the project the deployment belongs to
- Logged in Vercel users who have been [granted access](#access-requests)
- Anyone who has been given a [Shareable Link](/docs/security/deployment-protection/methods-to-bypass-deployment-protection/sharable-links) to the deployment
- Tools using the [protection bypass for automation](/docs/security/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation) header

## Access requests

> **🔒 Permissions Required**: Access requests

When a Vercel user visits your protected deployment, but they do not have permission to access it, they have the option to request access for their Vercel account.
This request triggers an email and Vercel notification to the branch authors.

![Image](`/docs-assets/static/docs/concepts/deployments/preview-deployments/request-access.png`)

The access request can be approved or declined. Additionally, granted access can be revoked for a user at any time.

Users granted access can view the latest deployment from a specific branch when logged in with their Vercel account.
They can also leave preview [Comments](/docs/comments) if these are enabled on your team.

Those on the Hobby plan can only have one external user per account. If you need more, you can upgrade to a [Pro plan](/docs/plans/pro-plan/trials).

You can manage access requests in the following way.

1. From your [dashboard](/dashboard), go to [**Deployment Protection**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection\&title=Go+to+Deployment+Protection+settings) in the sidebar
2. Choose the **Requests** section in the sidebar to see pending requests
3. Choose **Access** to manage existing access

![Image](`/docs-assets/static/docs/concepts/deployments/preview-deployments/manage-requests.png`)

![Image](`/docs-assets/static/docs/concepts/deployments/preview-deployments/granted-access-list.png`)

You can also manage access requests using the share modal on the deployment page.

![Image](`/docs-assets/static/docs/concepts/deployments/preview-deployments/manage-access-v2-light.png`)

## Vercel Authentication security considerations

Disabling Vercel Authentication renders all existing deployments unprotected. When you re-enable it, previously authenticated users can maintain access without a new login, provided they already authenticated to the specific deployment and have a cookie set in their browser. The authentication token sent as a cookie is restricted to one URL and isn't transferable, even between URLs pointing to the same deployment.

| Consideration                 | Description                                                                                                                                                                                                                                                                            |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Environment configuration** | Can be enabled for different environments. See [Understanding Deployment Protection by environment](/docs/security/deployment-protection#understanding-deployment-protection-by-environment)                                                                                           |
| **Compatibility**             | Works alongside [Password Protection](/docs/security/deployment-protection/methods-to-protect-deployments/password-protection) and [Trusted IPs](/docs/security/deployment-protection/methods-to-protect-deployments/trusted-ips)                                                      |
| **Bypass methods**            | Can be bypassed using [Shareable Links](/docs/security/deployment-protection/methods-to-bypass-deployment-protection/sharable-links) and [Protection bypass for Automation](/docs/security/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation) |
| **Disabling**                 | All existing deployments become unprotected when Vercel Authentication is disabled                                                                                                                                                                                                     |
| **Re-enabling**               | Users who have logged in previously will still have access without re-authenticating                                                                                                                                                                                                   |
| **Token scope**               | Tokens are valid for a single URL and are not reusable across different URLs                                                                                                                                                                                                           |

## Managing Vercel Authentication

Admins and members can enable or disable Vercel Authentication for their team. Hobby teams can also enable or disable for their own projects. Vercel Authentication is managed on a **per-project** basis.

You can manage Vercel Authentication through the dashboard, API, or Terraform:

### How to manage Vercel Authentication from the dashboard

- ### Go to project deployment protection settings
  From your Vercel [dashboard](/dashboard):
  1. **Select the project** that you wish to enable Vercel Authentication for
  2. Go to [**Deployment Protection**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection\&title=Go+to+Deployment+Protection+settings) in the sidebar

- ### Enable and configure Vercel Authentication

  From the **Vercel Authentication** section:

  1. Use the toggle to enable the feature
  2. Select the [deployment environment](/docs/deployments/environments) you want to protect
  3. Finally, Select **Save**
     Vercel Authentication now protects all your existing and future deployments for the project. Next time when you access a deployment, you will be asked to log in with Vercel if you aren't already logged in, you will be redirected to the deployment URL and a cookie will be set in your browser for that deployment URL.

  ![Image](`/docs-assets/static/docs/concepts/projects/sso-protection-light.png`)

### How to manage Vercel Authentication with the API

You can manage Vercel Authentication using the Vercel API endpoint to [update an existing project](/docs/rest-api/reference/endpoints/projects/update-an-existing-project) with the following body.

- `prod_deployment_urls_and_all_previews`: Standard Protection
- `all`: All Deployments
- `preview`: Only Preview Deployments

```typescript
// enable / update Vercel Authentication
{
  "ssoProtection": {
    "deploymentType": "prod_deployment_urls_and_all_previews" | "all" | "preview"
  }
}

// disable Vercel Authentication
{
  "ssoProtection": null
}
```

### How to manage Vercel Authentication with Terraform

You can configure Vercel Authentication using `vercel_authentication` in the `vercel_project` data source in the [Vercel Terraform Provider](https://registry.terraform.io/providers/vercel/vercel/latest/docs/data-sources/project).

title: "Deployment Protection on Vercel"
description: "Learn how to control access to your Vercel project"
last\_updated: "2026-03-23T09:40:08.322Z"
source: "https://vercel.com/docs/deployment-protection"
