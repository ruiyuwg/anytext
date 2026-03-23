# Automated & Agent Access

AI agents, CI/CD pipelines, MCP servers, and end-to-end testing tools can't complete browser-based authentication challenges. If your project has [Deployment Protection](/docs/deployment-protection) enabled, these automated systems receive a login page or a `403` response instead of your deployment content.

You have two options for granting programmatic access. Protection Bypass for Automation lets you pass a **bypass secret** with each request. Deployment Protection Exceptions make specific preview domains **publicly accessible** without any authentication.

## Prerequisites

- A Vercel project with [Deployment Protection](/docs/deployment-protection) enabled
- The **Member** role or above on the team, or the **Project Administrator** role on the project
- Access to your CI/CD, agent, or testing tool's configuration to set headers or environment variables

## Why automated systems get blocked

Deployment Protection methods are designed for browser-based visitors:

- **Vercel Authentication:** Redirects to a login page that requires an interactive browser session
- **Password Protection:** Renders an HTML form that expects user input
- **Trusted IPs:** Only allows requests from specific IP addresses, which doesn't work for agents running on serverless or cloud infrastructure with rotating IPs

Automated systems making HTTP requests (with `fetch`, `curl`, or headless browsers) can't complete these interactive flows. Protection Bypass for Automation solves this by letting you attach a secret to requests, skipping the challenge entirely.

## Choose the right bypass method

| Method                                                                                                                                   | Best for                                                                            | Plan availability                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [Protection Bypass for Automation](/docs/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation)     | CI/CD pipelines, testing tools, AI agents calling API routes, MCP servers, webhooks | All plans                                                     |
| [Deployment Protection Exceptions](/docs/deployment-protection/methods-to-bypass-deployment-protection/deployment-protection-exceptions) | Making a specific preview domain permanently public for external integrations       | Enterprise, or Pro with Advanced Deployment Protection add-on |

Use Protection Bypass for Automation for most automated access scenarios. It authenticates individual requests with a secret token without making any domain publicly accessible.

Deployment Protection Exceptions make an entire preview domain publicly accessible. Use this only when the domain genuinely needs to be public, not as a workaround for automation access.

## Set up Protection Bypass for Automation

- ### Enable Protection Bypass and create a secret
  1. From your [dashboard](/dashboard), select the project
  2. Go to **Settings** and select [**Deployment Protection**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fsettings%2Fdeployment-protection\&title=Go+to+Deployment+Protection+settings)
  3. Under **Protection Bypass for Automation**, select **Create** to generate a new secret
  4. Give the secret a descriptive label, such as "CI pipeline" or "Playwright tests"
     You can create multiple secrets per project and revoke them independently. Vercel automatically sets one secret as the `VERCEL_AUTOMATION_BYPASS_SECRET` [system environment variable](/docs/environment-variables/system-environment-variables#VERCEL_AUTOMATION_BYPASS_SECRET) in your deployments.

- ### Pass the secret with each request

  Include the secret as an HTTP header (recommended) or as a query parameter named `x-vercel-protection-bypass`.

  **HTTP header (recommended)**

  ```bash
  curl -H "x-vercel-protection-bypass: $VERCEL_AUTOMATION_BYPASS_SECRET" \
    https://your-deployment.vercel.app/api/endpoint
  ```

  **Query parameter (for tools that can't set headers)**

  ```text
  https://your-deployment.vercel.app/api/webhook?x-vercel-protection-bypass=your_bypass_secret_here
  ```

  Use the query parameter approach for services like Slack, Stripe, or GitHub that send webhook requests to your endpoints but don't support custom headers.

  > **⚠️ Warning:** When using the query parameter method, the secret appears in the URL. URLs are
  > often logged by proxies, CDNs, and server access logs. Prefer the header
  > method when your tool supports custom headers.

- ### Store the secret securely
  Add the bypass secret as an environment variable or secret in your CI/CD platform, testing runner, or agent configuration. Don't hardcode it in source files or commit it to version control.
  ```bash
  # Example: set as a CI environment variable
  VERCEL_AUTOMATION_BYPASS_SECRET=your_bypass_secret_here
  ```
  If the secret is compromised, revoke it in the Deployment Protection settings and create a new one. Revoking a secret invalidates it for all existing deployments. Redeploy your project so deployments receive the updated `VERCEL_AUTOMATION_BYPASS_SECRET` value.

For full details on how the bypass works, what it skips, and what it can't override, see [Protection Bypass for Automation](/docs/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation).

## Set up Deployment Protection Exceptions

If your automated system needs to access a specific preview domain without any authentication, you can add that domain to Deployment Protection Exceptions. The domain becomes publicly accessible, bypassing all Deployment Protection methods.

> **⚠️ Warning:** Deployment Protection Exceptions make the specified domain accessible to
> anyone, not only your automated systems. Use this option only when public
> access to that preview domain is acceptable.

Deployment Protection Exceptions are available on Enterprise plans, or with the [Advanced Deployment Protection](/docs/deployment-protection#advanced-deployment-protection) add-on for Pro plans.

To add an exception, follow the steps in [Deployment Protection Exceptions](/docs/deployment-protection/methods-to-bypass-deployment-protection/deployment-protection-exceptions).

## Why Trusted IPs may not work for automation

[Trusted IPs](/docs/deployment-protection/methods-to-protect-deployments/trusted-ips) restricts access to requests from specific IPv4 addresses or CIDR ranges. This works well for teams behind a corporate VPN with stable IP addresses.

However, automated systems running on cloud infrastructure, such as serverless functions, CI runners, or hosted AI agents, typically have rotating or unpredictable IP addresses. Maintaining an IP allowlist for these systems is impractical and error-prone. Use Protection Bypass for Automation instead of (or alongside) Trusted IPs for these scenarios.

## Common automation patterns

### End-to-end tests with Playwright

Configure Playwright to include the bypass header on every request:

```typescript filename="playwright.config.ts"
import { defineConfig } from '@playwright/test';

if (!process.env.VERCEL_AUTOMATION_BYPASS_SECRET) {
  throw new Error(
    'VERCEL_AUTOMATION_BYPASS_SECRET is required to run tests against protected deployments',
  );
}

export default defineConfig({
  use: {
    baseURL: process.env.VERCEL_PREVIEW_URL,
    extraHTTPHeaders: {
      'x-vercel-protection-bypass':
        process.env.VERCEL_AUTOMATION_BYPASS_SECRET,
      'x-vercel-set-bypass-cookie': 'true',
    },
  },
});
```

The `x-vercel-set-bypass-cookie: true` header tells Vercel to set a cookie so that subsequent in-browser navigation during tests doesn't trigger additional protection challenges.

### End-to-end tests with Cypress

```typescript filename="cypress.config.ts"
import { defineConfig } from 'cypress';

if (!process.env.VERCEL_AUTOMATION_BYPASS_SECRET) {
  throw new Error(
    'VERCEL_AUTOMATION_BYPASS_SECRET is required to run tests against protected deployments',
  );
}

export default defineConfig({
  e2e: {
    baseUrl: process.env.VERCEL_PREVIEW_URL,
  },
  env: {
    BYPASS_SECRET: process.env.VERCEL_AUTOMATION_BYPASS_SECRET,
  },
});
```

Then in your test files, include the header on the first request:

```typescript filename="cypress/e2e/example.cy.ts"
describe('Protected deployment', () => {
  it('loads the home page', () => {
    cy.visit('/', {
      headers: {
        'x-vercel-protection-bypass': Cypress.env('BYPASS_SECRET'),
        'x-vercel-set-bypass-cookie': 'true',
      },
    });
    cy.contains('Welcome');
  });
});
```

### AI agent calling a preview API route

When an AI agent needs to call an API route on a protected preview deployment, include the bypass header in the fetch request:

```typescript filename="agent.ts"
if (!process.env.VERCEL_AUTOMATION_BYPASS_SECRET) {
  throw new Error(
    'VERCEL_AUTOMATION_BYPASS_SECRET is required to access protected deployments',
  );
}

const response = await fetch(
  `${process.env.VERCEL_PREVIEW_URL}/api/chat`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-vercel-protection-bypass':
        process.env.VERCEL_AUTOMATION_BYPASS_SECRET,
    },
    body: JSON.stringify({
      prompt: 'Summarize the latest changes',
    }),
  },
);

const data = await response.json();
```

This pattern applies to any programmatic HTTP client, whether it's an AI agent, a background job, or a microservice calling your Vercel deployment.

### MCP server accessing a protected deployment

If you run an MCP (Model Context Protocol) server that fetches data from protected Vercel preview deployments, include the bypass header in outgoing requests. This applies to any MCP tool implementation that reads from or writes to your preview URLs.

```typescript filename="mcp-fetch-tool.ts"
if (!process.env.VERCEL_AUTOMATION_BYPASS_SECRET) {
  throw new Error(
    'VERCEL_AUTOMATION_BYPASS_SECRET is required to access protected deployments',
  );
}

async function fetchFromPreview(path: string) {
  const baseUrl = process.env.VERCEL_PREVIEW_URL;
  const response = await fetch(`${baseUrl}${path}`, {
    headers: {
      'x-vercel-protection-bypass':
        process.env.VERCEL_AUTOMATION_BYPASS_SECRET,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Request failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}
```

### Webhook receivers on protected deployments

Third-party services like Slack, Stripe, and GitHub send webhook requests to your endpoints but can't set custom HTTP headers. Use the query parameter method to let these requests through:

```text
https://your-app.vercel.app/api/webhooks/stripe?x-vercel-protection-bypass=your_bypass_secret_here
```

> **⚠️ Warning:** The bypass secret is visible in the URL when using the query parameter method.
> If this is a concern, consider using [Deployment Protection
> Exceptions](/docs/deployment-protection/methods-to-bypass-deployment-protection/deployment-protection-exceptions)
> for the specific domain instead, or host the webhook endpoint on a production
> domain without protection enabled.

For more webhook examples, see [Protection Bypass for Automation](/docs/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation#method-2-query-parameter).

### CI/CD pipeline with GitHub Actions

Pass the bypass secret as a repository secret and use it in your workflow:

```yaml filename=".github/workflows/preview-tests.yml"
name: Preview deployment tests

on:
  deployment_status:

jobs:
  test:
    if: github.event.deployment_status.state == 'success'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run tests against preview
        env:
          VERCEL_AUTOMATION_BYPASS_SECRET: ${{ secrets.VERCEL_AUTOMATION_BYPASS_SECRET }}
          DEPLOYMENT_URL: ${{ github.event.deployment_status.target_url }}
        run: npx playwright test
```

### Testing with the Vercel CLI

The [`vercel curl`](/docs/cli/curl) command handles bypass tokens automatically, so you can test protected endpoints without manual secret management:

```bash
vercel curl /api/hello
```

## Manage bypass secrets safely

- **Create one secret per system:** Give each CI pipeline, testing suite, and agent its own secret. If one is compromised, revoke it without disrupting the others.
- **Never commit secrets to source control:** Store them in your CI/CD platform's secret management, your cloud provider's secrets manager, or encrypted environment variables.
- **Rotate secrets periodically:** Delete the old secret in your project settings and create a new one. Redeploy your project so the `VERCEL_AUTOMATION_BYPASS_SECRET` environment variable reflects the new value.
- **Prefer headers over query parameters:** Headers keep the secret out of URL logs, browser history, and referrer headers.
- **Scope access narrowly:** If only a specific preview domain needs to be accessible, consider Deployment Protection Exceptions for that domain rather than a project-wide bypass secret.

## Troubleshooting

### Automated requests still receive a login page or 403 response

Verify the bypass secret value matches what your project expects. The most common cause is a mismatch between the secret in your CI/CD environment and the one configured in Deployment Protection settings.

Check the following:

1. Confirm the `x-vercel-protection-bypass` header (or query parameter) is present on the outgoing request
2. Confirm the secret value matches one of the active secrets listed in **Settings** > **Deployment Protection** > **Protection Bypass for Automation**
3. If you recently regenerated the secret, redeploy your project so deployments receive the updated `VERCEL_AUTOMATION_BYPASS_SECRET` environment variable

### Secret mismatch after regeneration

When you regenerate a bypass secret in project settings, existing deployments still reference the old value through the `VERCEL_AUTOMATION_BYPASS_SECRET` environment variable. Redeploy your project after regenerating the secret. Then update the secret value in your CI/CD platform, agent configuration, or testing tool to match the new secret.

### In-browser tests fail on navigation after the initial page load

Headless browser tools like Playwright and Cypress send the bypass header on the initial page load, but subsequent in-browser navigations (clicking links, form submissions) don't include custom HTTP headers. Include the `x-vercel-set-bypass-cookie: true` header on the first request to set a cookie that authenticates subsequent browser navigation within the same session.

If the deployment renders inside an `iframe`, set the value to `samesitenone` instead of `true` to ensure the cookie is sent on cross-origin iframe requests.

### Dynamic IP addresses prevent Trusted IPs from working

Automated systems on serverless platforms, cloud infrastructure, or shared CI/CD runners have IP addresses that change between requests. Use [Protection Bypass for Automation](/docs/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation) instead of [Trusted IPs](/docs/deployment-protection/methods-to-protect-deployments/trusted-ips) for these systems.

## Agents that need browser interaction

Protection Bypass for Automation works for API-level agent access, where the agent makes HTTP requests directly. However, some agents need to interact with protected deployments through a full browser. Visual testing tools, accessibility auditing agents, and web scrapers need to render pages, execute JavaScript, and navigate between routes.

For these browser-based workflows, [Vercel's agent-browser](https://agent-browser.dev) can handle authentication flows like Vercel Authentication and Password Protection on behalf of the agent. This lets browser-driven agents access protected deployments without configuring bypass secrets or making domains public.

## More resources

- [Protection Bypass for Automation](/docs/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation): Full reference for bypass secrets, including what gets bypassed and what doesn't
- [Deployment Protection Exceptions](/docs/deployment-protection/methods-to-bypass-deployment-protection/deployment-protection-exceptions): Make a specific preview domain publicly accessible
- [Deployment Protection overview](/docs/deployment-protection): Configure protection methods and scope
- [Trusted IPs](/docs/deployment-protection/methods-to-protect-deployments/trusted-ips): Restrict access by IP address
- [Methods to bypass Deployment Protection](/docs/deployment-protection/methods-to-bypass-deployment-protection): All available bypass methods
- [`vercel curl` CLI command](/docs/cli/curl): Test protected endpoints from the command line

title: "Deployment Protection Exceptions"
description: "Disable Deployment Protection for a list of preview domains."
last\_updated: "2026-03-23T09:40:08.177Z"
source: "https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protection/deployment-protection-exceptions"
