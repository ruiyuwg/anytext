# OPTIONS Allowlist

> **🔒 Permissions Required**: OPTIONS Allowlist

You can use OPTIONS Allowlist to disable Deployment Protection (including [Vercel Authentication](/docs/security/deployment-protection/methods-to-protect-deployments/vercel-authentication), [Password Protection](/docs/security/deployment-protection/methods-to-protect-deployments/password-protection), and [Trusted IPs](/docs/security/deployment-protection/methods-to-protect-deployments/trusted-ips)) on any incoming CORS preflight `OPTIONS` request for a list of paths.

When you add a path to OPTIONS Allowlist, any incoming request with the method `OPTIONS` that **starts with** the path will no longer be covered by Deployment Protection. When you remove a path from OPTIONS Allowlist, the path becomes protected again with the project's Deployment Protection settings.

For example, if you specify `/api`, all requests to paths that start with `/api` (such as `/api/v1/users` and `/api/v2/projects`) will be unprotected for any `OPTIONS` request.

![Image](https://vercel.com/front/docs/security/options-allowlist-light.png)

## Enabling OPTIONS Allowlist

- ### Go to Project Deployment Protection Settings
  From your Vercel [dashboard](/dashboard):
  1. Select the project that you wish to enable Password Protection for
  2. Go to [**Deployment Protection**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection\&title=Go+to+Deployment+Protection+settings) in the sidebar

- ### Enable OPTIONS Allowlist

  From the **OPTIONS Allowlist** section, enable the toggle labelled **Disabled**:

  ![Image](https://vercel.com/front/docs/security/options-allowlist-disabled-light.png)

- ### Specify a path

  Specify a path to add to the **OPTIONS Allowlist**:

  ![Image](https://vercel.com/front/docs/security/options-allowlist-add-path-light.png)

- ### Add more paths

  To add more paths, select **Add path**:

  ![Image](https://vercel.com/front/docs/security/options-allowlist-add-another-path-light.png)

- ### Save changes
  Once all the paths are added, select **Save**

## Disabling OPTIONS Allowlist

- ### Go to Project Deployment Protection Settings
  From your Vercel [dashboard](/dashboard):
  1. Select the project that you wish to enable Password Protection for
  2. Go to [**Deployment Protection**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection\&title=Go+to+Deployment+Protection+settings) in the sidebar

- ### Disable OPTIONS Allowlist

  From the **OPTIONS Allowlist** section, select the toggle labelled **Enabled**:

  ![Image](https://vercel.com/front/docs/security/options-allowlist-light.png)

- ### Save changes
  Once all the paths are added, select **Save**

title: "Methods to bypass Deployment Protection"
description: "Learn how to bypass Deployment Protection for specific domains, or for all deployments in a project."
last\_updated: "2026-03-08T05:03:13.145Z"
source: "https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protection"
