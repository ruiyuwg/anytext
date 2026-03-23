# AI Onboarding

Source: https://resend.com/docs/ai-onboarding

Everything you need to onboard your AI agent to Resend.

If you're developing with AI, Resend offers several resources to improve your experience.

- [Resend MCP Server](#resend-mcp-server)
- [Resend CLI](#resend-cli)
- [Resend Docs for Agents](#resend-docs-for-agents)
- [Email Skills for Agents](#email-skills-for-agents)
- [Quick Start Guides](#quick-start-guides)
- [OpenClaw Guide](#openclaw-guide)
- [Chat SDK](#chat-sdk)
- [AI Builder Integrations](#ai-builder-integrations)

## Prerequisite: Create an API Key

Currently, we require a human to create a Resend account. Once you have an account, you'll need to [create an API key](https://resend.com/api-keys). With an API key, your agent can perform many other tasks.

To send or receive with Resend, you'll need to [verify a domain](https://resend.com/domains). While an agent can [create a domain](/api-reference/domains/create-domain), the API returns DNS records you will need to add in your DNS provider before [verifying your DNS records](/api-reference/domains/verify-domain). You may find it easier to verify your domain in the dashboard.

## Resend MCP Server

MCP is an open protocol that standardizes how applications provide context to LLMs. Among other benefits, it provides LLMs tools to act on your behalf. Our [MCP server](https://github.com/resend/resend-mcp) is open-source and covers our full API surface area.

The Resend MCP server is available on NPM and can be added to any supported MCP client. For example:

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "mcpServers": {
    "resend": {
      "command": "npx",
      "args": ["-y", "resend-mcp"],
      "env": {
        "RESEND_API_KEY": "re_xxxxxxxxx"
      }
    }
  }
}
```

View installation instructions for Cursor, Codex, Claude Desktop, Windsurf,
and more.

## Resend CLI

The Resend CLI lets you send emails, manage your account, and develop locally — from the terminal. It's built for humans, AI agents, and CI/CD pipelines.

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
# Authenticate
resend login

# Send an email
resend emails send \
  --from "you@yourdomain.com" \
  --to recipient@example.com \
  --subject "Hello" \
  --text "Sent from my terminal."
```

The CLI also includes a full local webhook setup for developing with inbound email events without deploying anything.

Install the CLI and set up a local webhook development environment.

## Resend Docs for Agents

You can give your agent current docs in a context-aware way in three ways:

1. **Markdown docs**

   Every doc includes a markdown version (append `md` to any page)

   ```
   Docs for this page: https://resend.com/docs/ai-onboarding.md
   ```

2. **Full llms.txt**

   Give your agent all our docs in a single file.

   ```
   Here are the Resend docs: https://resend.com/docs/llms-full.txt
   ```

3. **MCP Docs server**

   For a more structured approach using MCP tools, you can install our MCP docs server in any MCP client, like Cursor, Codex, or Claude Code.

   ```
   npx add-mcp https://resend.com/docs/mcp
   ```

## Email Skills for Agents

Skills give AI agents specialized knowledge for specific tasks.

Install all three for full coverage:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npx skills add resend/resend-skills resend/react-email resend/email-best-practices
```

Or install individually:

| Skill                                               | Install                                      | What it does                                                                                                       |
| --------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [Resend](/resend-skill)                             | `npx skills add resend/resend-skills`        | Send and receive emails, handle errors, prevent duplicate sends, get code examples from various SDKs               |
| [React Email](/react-email-skill)                   | `npx skills add resend/react-email`          | Build emails in React, Tailwind, and TypeScript. Audit existing React emails for style and cross-client rendering. |
| [Email Best Practices](/email-best-practices-skill) | `npx skills add resend/email-best-practices` | Audit SPF/DKIM/DMARC setup, compliance (CAN-SPAM, GDPR), webhook handling                                          |

## Quick Start Guides

Throughout our documentation, we provide quick start guides for common tasks with Resend. They contain step-by-step instructions for sending emails, creating templates, and more. Copy the prompt for your agent or click to open in Cursor.

Resend provides two endpoints for sending emails:

| Approach   | Endpoint             | Use Case                                                                  |
| ---------- | -------------------- | ------------------------------------------------------------------------- |
| **Single** | `POST /emails`       | Individual transactional emails, emails with attachments, scheduled sends |
| **Batch**  | `POST /emails/batch` | Multiple distinct emails in one request (max 100), bulk notifications     |

**Choose batch when:**

- Sending 2+ distinct emails at once
- Reducing API calls is important (by default, rate limit is 2 requests per second)
- No attachments or scheduling needed

**Choose single when:**

- Sending one email
- Email needs attachments
- Email needs to be scheduled
- Different recipients need different timing

## Quick Start

1. **Detect project language** from config files (package.json, requirements.txt, go.mod, etc.)
2. **Install SDK** (preferred) or use cURL
3. **Choose single or batch** based on the decision matrix above
4. **Implement best practices** - Idempotency keys, error handling, retries

## Best Practices (Critical for Production)

Always implement these for production email sending.

### Idempotency Keys

Prevent duplicate emails when retrying failed requests.

| Key Facts             |                                                                  |
| --------------------- | ---------------------------------------------------------------- |
| **Format (single)**   | `<event-type>/<entity-id>` (e.g., `welcome-email/user-123`)      |
| **Format (batch)**    | `batch-<event-type>/<batch-id>` (e.g., `batch-orders/batch-456`) |
| **Expiration**        | 24 hours                                                         |
| **Max length**        | 256 characters                                                   |
| **Duplicate payload** | Returns original response without resending                      |
| **Different payload** | Returns 409 error                                                |

### Error Handling

| Code     | Action                                                                                      |
| -------- | ------------------------------------------------------------------------------------------- |
| 400, 422 | Fix request parameters, don't retry                                                         |
| 401, 403 | Check API key / verify domain, don't retry                                                  |
| 409      | Idempotency conflict - use new key or fix payload                                           |
| 429      | Rate limited - retry with exponential backoff (by default, rate limit is 2 requests/second) |
| 500      | Server error - retry with exponential backoff                                               |

### Retry Strategy

- **Backoff:** Exponential (1s, 2s, 4s...)
- **Max retries:** 3-5 for most use cases
- **Only retry:** 429 (rate limit) and 500 (server error)
- **Always use:** Idempotency keys when retrying

## Single Email

**Endpoint:** `POST /emails` (prefer SDK over cURL)

### Required Parameters

| Parameter        | Type      | Description                                         |
| ---------------- | --------- | --------------------------------------------------- |
| `from`           | string    | Sender address. Format: `"Name <email@domain.com>"` |
| `to`             | string\[] | Recipient addresses (max 50)                        |
| `subject`        | string    | Email subject line                                  |
| `html` or `text` | string    | Email body content                                  |

### Optional Parameters

| Parameter        | Type      | Description                       |
| ---------------- | --------- | --------------------------------- |
| `cc`             | string\[] | CC recipients                     |
| `bcc`            | string\[] | BCC recipients                    |
| `reply_to`\*     | string\[] | Reply-to addresses                |
| `scheduled_at`\* | string    | Schedule send time (ISO 8601)     |
| `attachments`    | array     | File attachments (max 40MB total) |
| `tags`           | array     | Key/value pairs for tracking      |
| `headers`        | object    | Custom headers                    |

\*Parameter naming varies by SDK (e.g., `replyTo` in Node.js, `reply_to` in Python).

### Minimal Example (Node.js)

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.emails.send(
  {
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello World',
    html: 'Email body here',
  },
  { idempotencyKey: `welcome-email/${userId}` },
);

if (error) {
  console.error('Failed:', error.message);
  return;
}
console.log('Sent:', data.id);
```

## Batch Email

**Endpoint:** `POST /emails/batch` (but prefer SDK over cURL)

### Limitations

- **No attachments** - Use single sends for emails with attachments
- **No scheduling** - Use single sends for scheduled emails
- **Atomic** - If one email fails validation, the entire batch fails
- **Max 100 emails** per request
- **Max 50 recipients** per individual email in the batch

### Pre-validation

Since the entire batch fails on any validation error, validate all emails before sending:

- Check required fields (from, to, subject, html/text)
- Validate email formats
- Ensure batch size is less than or equal to 100

### Minimal Example (Node.js)

```typescript theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.batch.send(
  [
    {
      from: 'Acme <notifications@acme.com>',
      to: ['delivered@resend.dev'],
      subject: 'Order Shipped',
      html: 'Your order has shipped!',
    },
    {
      from: 'Acme <notifications@acme.com>',
      to: ['delivered@resend.dev'],
      subject: 'Order Confirmed',
      html: 'Your order is confirmed!',
    },
  ],
  { idempotencyKey: `batch-orders/${batchId}` },
);

if (error) {
  console.error('Batch failed:', error.message);
  return;
}
console.log(
  'Sent:',
  data.map((e) => e.id),
);
```

## OpenClaw Guide

Equipping your agent with its own email inbox can be a powerful tool to unlock new workflows. Alternatively, give it access to your Resend account to support agentic flows for sending and receiving emails.

View the OpenClaw guide.

## Chat SDK

The `@resend/chat-sdk-adapter` package is a Vercel Chat SDK adapter that turns email into a two-way communication channel. Receive inbound emails through webhooks, reply through the Resend API, and let the adapter handle threading automatically. It also supports card emails, attachments, and proactive outreach.

Build conversational email experiences with the Chat SDK adapter.

## AI Builder Integrations

We offer integrations with popular AI builders to help you get started with AI agents.

- [Anything Integration](/anything-integration)
- [Lovable Integration](/lovable-integration)
- [v0 Integration](/v0-integration)
- [Bolt.new Integration](/bolt-new-integration)
- [Replit Integration](/replit-integration)
- [Base44 Integration](/base44-integration)
- [Leap.new Integration](/leap-new-integration)

# How to add the Resend integration to your Anything project

Source: https://resend.com/docs/anything-integration

Learn how to add the Resend integration to your Anything project.

[Anything](https://createanything.com) is a platform for building web sites, tools, apps, and projects via chat. With their [Resend integration](https://www.createanything.com/docs/integrations/resend), you can send emails from your Anything project.

If you prefer to watch a video, check out our video walkthrough below.

## 1. Call the Resend integration in Anything

Type `/Resend` in the chat and select the integration, and ask Anything to add email functionality to your project.

## 2. Add your Resend API key

Anything usually prompts you for a Resend API key, which you can add in the [Resend Dashboard](https://resend.com/api-keys). If Anything doesn't prompt you for a Resend API key, click the **More options**  button and select **Secrets**.

Click the  **Add new secret** button.

- **Name:** `RESEND_API_KEY`
- **Value:** Your Resend API key (e.g., `re_xxxxxxxxx0`)

Learn more about [Secrets in Create](https://www.createanything.com/docs/essentials#project-settings).

## 3. Add a custom domain to your Resend account

By default, you can only send emails to your own email address.

To send emails to other email addresses:

1. Add a [custom domain to your Resend account](https://resend.com/domains).
2. Add the custom domain to the `from` field in the `resend` function in Create.

Learn more about [Functions in Create](https://www.createanything.com/docs/builder/functions).
