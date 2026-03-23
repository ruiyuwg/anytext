# Bypass Deployment Protection for testing, sharing, and automation

Deployment Protection secures your deployments, but sometimes you need to grant access for testing, sharing, or automation. You can bypass protection selectively while keeping your overall security intact.

- [**Shareable Links**](#shareable-links): Enable external users to access specific branch deployments by appending a secure query parameter to the URL
- [**Protection Bypass for Automation**](#protection-bypass-for-automation): Use a secret to bypass protection features for all deployments in a project, such as for end-to-end (E2E) testing
- [**Deployment Protection Exceptions**](#deployment-protection-exceptions): Specify preview domains that should be exempt from deployment protection
- [**OPTIONS Allowlist**](#options-allowlist): Specify paths to be unprotected for CORS preflight `OPTIONS` requests

## Shareable Links

> **🔒 Permissions Required**: Shareable Links

Shareable Links allow external access to specific branch deployments through a secure query parameter. Users with this link can see the latest deployment and leave [comments](/docs/comments) (if enabled and logged in with their Vercel account).

For example, if you generate a Shareable Link for the `feature-new-ui` branch, users with this link can view the latest deployment and comment.

Learn more about [Shareable Links](/docs/security/deployment-protection/methods-to-bypass-deployment-protection/sharable-links), and how to generate and revoke them.

## Protection Bypass for Automation

> **🔒 Permissions Required**: Protection Bypass for Automation

For automated tasks like end-to-end (E2E) testing and third-party webhook integrations, you can use Protection Bypass for Automation. When enabled, it generates a secret that can be used as a System Environment Variable (`VERCEL_AUTOMATION_BYPASS_SECRET`) or as a query parameter in URLs to bypass protection features for all deployments in a project.

You can provide the bypass secret in two ways:

- **As an HTTP header** (recommended for testing tools): `x-vercel-protection-bypass: your-secret`
- **As a query parameter** (required for webhook URLs): `?x-vercel-protection-bypass=your-secret`

Common use cases for Protection Bypass for Automation include:

- E2E tests that run on protected deployments
- Slack bot webhook verification and events
- Third-party webhook services (Stripe, GitHub, etc.) that cannot set custom headers

Learn more about [Protection Bypass for Automation](/docs/security/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation), and how to enable and disable it.

## Deployment Protection Exceptions

> **🔒 Permissions Required**: Deployment Protection Exceptions

With Deployment Protection Exceptions you can specify preview domains that should be exempt from deployment protection. Adding a domain to Deployment Protection Exceptions makes it publicly accessible, bypassing features like [Vercel Authentication](/docs/security/deployment-protection/methods-to-protect-deployments/vercel-authentication), [Password Protection](/docs/security/deployment-protection/methods-to-protect-deployments/password-protection), and [Trusted IPs](/docs/security/deployment-protection/methods-to-protect-deployments/trusted-ips).

For example, if you add **`preview-branch-name.vercel.app`** to Deployment Protection Exceptions, this domain becomes publicly accessible, bypassing the project's deployment protection settings. When removed, it reverts to the default protection settings.

Learn more about [Deployment Protection Exceptions](/docs/security/deployment-protection/methods-to-bypass-deployment-protection/deployment-protection-exceptions), and how to add and remove domains.

## OPTIONS Allowlist

> **🔒 Permissions Required**: OPTIONS Allowlist

With OPTIONS Allowlist you can specify paths to be unprotected for preflight OPTIONS requests. This can be used to enable [CORS preflight](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request) requests to your project's protected deployments, as browsers do not send authentication on preflight requests.

Vercel compares incoming request paths against the paths in the allowlist. If a request path **starts with** one of the specified paths and has the method `OPTIONS`, it bypasses Deployment Protection.

For example, if you specify `/api`, all requests to paths that start with `/api` (such as `/api/v1/users` and `/api/v2/projects`) will be unprotected for any `OPTIONS` request.

Learn more about [OPTIONS Allowlist](/docs/security/deployment-protection/methods-to-bypass-deployment-protection/options-allowlist).

## Related resources for Deployment Protection

- [Understanding Deployment Protection by environment](/docs/deployment-protection#understanding-deployment-protection-by-environment)
- [Methods to protect deployments](/docs/deployment-protection/methods-to-protect-deployments)

title: "Protection Bypass for Automation"
description: "Learn how to bypass Vercel Deployment Protection for automated tooling (e.g. E2E testing)."
last\_updated: "2026-03-23T09:40:08.222Z"
source: "https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation"
