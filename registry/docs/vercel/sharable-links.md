# Sharable Links

> **🔒 Permissions Required**: Shareable Links

Shareable links allow external users to securely access your deployments through a query string parameter.
Shareable links include the ability to leave [Comments](/docs/comments) on deployments which have them enabled.

## Who can create Shareable Links?

- Non-Production Domains:
  - [Team members](/docs/rbac/access-roles#team-level-roles) with at least the [Developer](/docs/rbac/access-roles#developer-role) role
  - [Project members](/docs/rbac/access-roles#project-level-roles) with at least the [Project Developer](/docs/rbac/access-roles#project-developer) role
- Production Domains:
  - [Team members](/docs/rbac/access-roles#team-level-roles) with at least the [Member](/docs/rbac/access-roles#member-role) role
  - [Project members](/docs/rbac/access-roles#project-level-roles) with the [Project Administrator](/docs/rbac/access-roles#project-administrators) role

## Creating Sharable Links

Users with the Admin, Member, and Developer roles can create or revoke sharable links for their project's deployments. Personal accounts can also manage sharable links for their Hobby deployments.

> **💡 Note:** Developers on the hobby plan can only create one shareable link in total per
> account.

To manage Sharable Links, do the following:

- ### Select your project
  From your Vercel [dashboard](/dashboard):
  1. Select the project that you wish to enable Vercel Authentication for
  2. Open **Deployments** in the sidebar

- ### Select the deployment
  From the list of **Preview Deployments**, select the deployment you wish to share.

- ### Click Share button

  From the Deployment page, click **Share** to display the **Share** popover. From the popover, select **Anyone with the link** from the dropdown.

  ![Image](`/docs-assets/static/docs/concepts/deployments/shareable-links-light.png`)

- ### Revoking a Sharable Link

  To revoke access for users, switch the dropdown option to **Only people with access**.

  If you have also [shared the deployment](/docs/deployments/sharing-deployments) with individual users, you will need to remove them from the **Share** popover.

## Managing Shareable Links

You can view and manage all the existing Shareable Links for your team in the following way

1. From your [dashboard](/dashboard), go to [**Deployment Protection**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection\&title=Go+to+Deployment+Protection+settings) in the sidebar
2. Choose the **Access** section in the sidebar
3. Click the **All Access** button and select **Shareable Links**

![Image](`/docs-assets/static/docs/concepts/deployments/preview-deployments/shareable-links-list.png`)

title: "Methods to Protect Deployments"
description: "Vercel offers three methods to protect your deployments: Vercel Authentication, Password Protection, and Trusted IPs."
last\_updated: "2026-03-23T09:40:08.253Z"
source: "https://vercel.com/docs/deployment-protection/methods-to-protect-deployments"
