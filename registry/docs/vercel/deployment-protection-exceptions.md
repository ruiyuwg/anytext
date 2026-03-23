# Deployment Protection Exceptions

> **🔒 Permissions Required**: Deployment Protection Exceptions

Deployment Protection Exceptions let you disable Deployment Protection (including [Vercel Authentication](/docs/security/deployment-protection/methods-to-protect-deployments/vercel-authentication), [Password Protection](/docs/security/deployment-protection/methods-to-protect-deployments/password-protection), and [Trusted IPs](/docs/security/deployment-protection/methods-to-protect-deployments/trusted-ips)) for a list of preview domains.

When you add a domain to Deployment Protection Exceptions, it becomes publicly accessible and is no longer covered by Deployment Protection features. When you remove a domain from Deployment Protection Exceptions, the domain becomes protected again with the project's Deployment Protection settings.

![Image](https://vercel.com/front/docs/security/deployment-exception-light.png)

Deployment Protection Exceptions is designed for Preview Deployment domains. If you wish to make a Production Deployment domain public, see [Configuring Deployment Protection](/docs/security/deployment-protection#configuring-deployment-protection).

## Adding a Deployment Protection Exception

- ### Go to project Deployment Protection settings
  From your Vercel [dashboard](/dashboard):
  1. Select the project that you wish to add an exception for
  2. Go to [**Deployment Protection**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection\&title=Go+to+Deployment+Protection+settings) in the sidebar

- ### Select Add Domain in the Deployment Protection Exceptions section

  From the **Deployment Protection Exceptions** section, select **Add Domain**:

  ![Image](https://vercel.com/front/docs/security/deployment-exception-no-domain-light.png)

- ### Specify the domain to unprotect
  From the **Unprotect Domain** modal:
  1. Enter the domain that you wish to unprotect in the input
  2. Select **Continue**
     ![Image](https://vercel.com/front/docs/security/deployment-protection-exceptions-add-domain-light.png)

- ### Confirm the domain to unprotect

  From the **Unprotect Domain** modal:

  1. Confirm the domain by entering it again in the first input
  2. Enter `unprotect my domain` in the second input
  3. Select **Confirm**
     All your existing and future deployments for that domain will be **unprotected**.

  ![Image](https://vercel.com/front/docs/security/deployment-protection-exceptions-confirm-add-light.png)

## Removing a Deployment Protection Exception

- ### Go to project Deployment Protection settings
  From your Vercel [dashboard](/dashboard):
  1. Select the project that you wish to remove an exception for
  2. Go to [**Deployment Protection**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection\&title=Go+to+Deployment+Protection+settings) in the sidebar

- ### Select the domain to remove
  From the **Deployment Protection Exceptions** section:
  1. Find the domain row in the **Unprotected Domains** section
  2. Select the dot menu at the end of the row
  3. From the context menu, select **Remove**
     ![Image](https://vercel.com/front/docs/security/remove-deployment-exception-light.png)

- ### Confirm the domain to remove

  From the **Reprotect Domain** modal:

  1. Enter the domain in the first input
  2. Enter `reprotect my domain` in the second input
  3. Select **Confirm**
     All your existing and future deployments for that domain will be **protected**.

  ![Image](https://vercel.com/front/docs/security/deployment-protection-exceptions-remove-light.png)

## Managing Deployment Protection Exceptions

You can view and manage all the existing Deployment Protection Exceptions for your team in the following way:

1. From your [dashboard](/dashboard), go to [**Deployment Protection**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection\&title=Go+to+Deployment+Protection+settings) in the sidebar
2. Select the **Access** section in the sidebar
3. Select the **All Access** button and choose `Unprotected Previews`

![Image](`/docs-assets/static/docs/concepts/deployments/preview-deployments/deployment-protection-exceptions-list.png`)

title: "OPTIONS Allowlist"
description: "Learn how to disable Deployment Protection for CORS preflight requests for a list of paths."
last\_updated: "2026-03-23T09:40:08.196Z"
source: "https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protection/options-allowlist"
