# OpenClaw Guide

Source: https://resend.com/docs/openclaw-guide

Learn how to give your AI agent an inbox to send and receive emails.

## Why should I give my agent an inbox?

Giving your agent an inbox enables it to:

- **Sign up for its own accounts** to GitHub, hosting platforms, and more, so you don't need to share your own credentials.
- **Process attachments** (like receipts, invoices, etc.) and act accordingly
- **Receive newsletters**, parse them, and send the most important information to you
- **Send you daily reports and digests**
- **Send and receive emails**

## How to set up an inbox for OpenClaw

### Step 1: Install the skill

We've prepared an Agent Skill to help your bot understand how to walk through the setup process. Ask your agent to install the skill:

```
Let's get you set up with an email inbox! Install the resend-skills from https://github.com/resend/resend-skills and review them before continuing.
```

Giving your agent the GitHub link helps it to install the latest version of
the skill since OpenClaw skills operate differently than traditional agent
skills.

Your agent may also benefit from installing the [Resend CLI](/resend-cli).

### Step 2: Get an API key

Your agent will ask you to create an API key.

Your API key will be scoped to the team that's currently selected. If you'd
like to sandbox your agent, create a new team just for your agent.

```
Navigate to the [API Keys](https://resend.com/api-keys) page in Resend and
click **Create API Key**.



Choose a name for your API key and ensure **Full access** is selected as the
permission scope.



Click **Add** to create the API key, and copy it to your clipboard.
```

We recommend not pasting API keys into the chat. Instead, use one of these two methods:

1. SSH into your agent's machine and **store the API key in an `.env` file**.
2. **Store the API key in a password manager** like 1Password, and give your agent access to its own vault. This can be done using a [1Password Service Account](https://developer.1password.com/docs/service-accounts/) on team plans.

### Step 3: Verify a domain

Next, your agent needs to know the email address it will use to send and receive emails. We [strongly recommend](/knowledge-base/is-it-better-to-send-emails-from-a-subdomain-or-the-root-domain) using a subdomain (`agent.example.com`) instead of the root domain (`example.com`), especially if you want to receive emails.

You can also use the [Resend CLI](/resend-cli) to verify a domain, although you will need to manually add the DNS records to your DNS provider.

```
Navigate to the [Domains tab](https://resend.com/domains) and click **Add
Domain**.



Add the subdomain you want to verify, and choose the region that's closest
to your agent.

You may see one of three options:

* **Auto Configure**: This will automatically configure the DNS records for you if your provider supports it.
* **Go to (provider)**: This will take you to the provider's website to add the DNS records manually if we can detect your provider.
* **I've added the records**: If we cannot detect your provider, you can manually add the DNS records by opening your DNS provider's website.

If you want only to send emails with your agent, add the DNS records and confirm. If you want to also receive emails, continue to the next step to enable receiving (for autoconfigure, you can add receiving after you autoconfigure).



**Receiving** allows your agent to receive emails at your domain, rather
than simply sending. Scroll to the bottom of the page and toggle the switch
to **On**.



Add the DNS records to your domain's DNS provider. For
more guidance, see our [guides on adding DNS records to various
providers](knowledge-base/introduction#dns-guides).



Wait for the domain to be verified. This can take up to 72 hours, but is
typically finished within a few minutes.
```

For a more in-depth guide on domain verification, see our [guide on verifying
a domain](/dashboard/domains/introduction).

Once your domain is verified in Resend, you can use it to send (and receive) emails with your agent. Add the email address to your agent's memory and tell it to send you a test email to your own email address.

### Step 4: Use webhooks to receive emails

At this point, your agent can send emails, but **it can't receive emails yet**.

To receive, you need to set up a webhook.

````
Your agent should be equipped to do this using the Resend skill. Prompt it to get started:

```
I want you to be able to receive emails, too. Let's set up a webhook to receive emails at my domain using the agent email inbox agent skill.
```



Your agent should spin up a local server and suggest using a tunneling tool
to expose it to the internet. We recommend [Tailscale
Funnel](https://tailscale.com/kb/1223/funnel):

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
tailscale funnel 3000
```

This gives your agent a stable public URL at
`https://hostname.tailnet-name.ts.net`.



When your agent asks for webhook signing secrets, give it access securely using one of the methods described in [Step 2: Get an API key](#step-2-get-an-api-key). Don't paste them directly into the chat.



Ask your agent to register the webhook with Resend:

```
Let's add a webhook to Resend using the server you just built. Use the email.received event, as instructed by the resend-skills agent skill, and securely save the returned webhook signing secret.
```



Send your agent a test email and ask it to check its inbox.
````

Your webhook server might look something like this:

```js theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Security: strict allowlist
const ALLOWED_SENDERS = ['your@email.com'];

async function handler(req) {
  const payload = await req.text();

  const id = req.headers.get('svix-id');
  const timestamp = req.headers.get('svix-timestamp');
  const signature = req.headers.get('svix-signature');

  if (!id || !timestamp || !signature) {
    return new Response('Missing headers', { status: 400 });
  }

  const event = resend.webhooks.verify({
    payload,
    headers: { id, timestamp, signature },
    webhookSecret: process.env.RESEND_WEBHOOK_SECRET,
  });

  if (event.type === 'email.received') {
    // Security check
    if (!ALLOWED_SENDERS.includes(event.data.from.toLowerCase())) {
      return new Response('OK', { status: 200 });
    }

    // Get full email
    const { data: email } = await resend.emails.receiving.get(
      event.data.email_id,
    );

    // Notify user instantly
    await notifyUser(email);
  }

  return new Response('OK', { status: 200 });
}
```

For more help working with inbound emails, including how to see the full email
body, attachments, and more, see our [guide on receiving emails with
Resend](/dashboard/receiving/introduction).

### Step 5: Hook into OpenClaw's APIs for instant notifications

One of the benefits of using Resend over other tools is that you don't need to constantly ask your agent to check its inbox, or rely on cron jobs to check every so often. With Resend, you can use OpenClaw's Gateway API to be notified instantly when your agent receives an email.

````
```text theme={"theme":{"light":"github-light","dark":"vesper"}}
Use the OpenClaw Gateway API to notify me instantly when you receive an email webhook call from Resend. Use the resend-skills agent skill for guidance.
```



Send your agent another test email. It should notify you instantly.
````

## Security considerations

Giving your agent an inbox is incredibly powerful, but it also comes with some security concerns. The risk of prompt injection via email is a real concern.

The Resend Skill [includes security guidelines](https://github.com/resend/resend-skills/blob/main/skills/agent-email-inbox/SKILL.md#security-levels). We've developed a leveled security approach to help you decide which security level is right for your use case.

1. **Strict Allowlist**: Only allow emails from specific senders. **Recommended for most use cases**.
2. **Domain Allowlist**: Allow emails from any sender from a given domain (e.g. anyone from `example.com`).
3. **Content Filtering with Sanitization**: Accept emails from anyone, but sanitize content to remove potential injection attempts.
4. **Sandboxed Processing**: Process all emails but in a restricted context where the agent has limited capabilities.
5. **Human-in-the-Loop**: Process all emails but require human approval for each email.

In general, we recommend starting with the **Strict Allowlist** and gradually decreasing security if needed. We provide additional security best practices in the [Resend Skill](https://github.com/resend/resend-skills/blob/main/skills/agent-email-inbox/SKILL.md#security-levels) you should consider.

If you have any questions, please [contact support](https://resend.com/help).

# React Email Skill

Source: https://resend.com/docs/react-email-skill

Build HTML emails using React components with AI agents.

The React Email skill enables AI agents to build production-ready HTML emails using React components. It provides a modern development experience for creating responsive, cross-client compatible emails.

## Installation

Install the skill using the following command:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npx skills add resend/react-email
```

## Advantages

- **Component-based email development**: Build emails using reusable React components for consistent, maintainable templates.
- **Brand-consistent styling with Tailwind**: Use Tailwind CSS to style emails with your brand's design system.
- **Multi-format rendering**: Automatically generate both HTML and plain text versions of your emails.
- **Email client compatibility handling**: Built-in support for rendering emails correctly across all major email clients.
- **Built-in preview server**: Preview your emails in real-time during development with hot reloading.

## Learn More

See the full source code and documentation.

# Send emails with Replit and Resend

Source: https://resend.com/docs/replit-integration

Learn how to add the Resend integration to your Replit project.

[Replit](https://replit.com/) is a platform for building sites and apps with AI. You can add Resend in a Replit project by asking the chat to add email sending with Resend.

**Example prompt**

```
When someone fills out the contact form, send an email using Resend.
```

Prefer watching a video? Check out our video walkthrough below.

## 1. Add a custom domain to your Resend account

By default, you can only send emails to your own email address.

To send emails to other email addresses:

1. Add a [custom domain to your Resend account](https://resend.com/domains).
2. Add the custom domain to the `from` field in the `resend` function in Replit (or ask the chat to update these fields).

Get more help adding a custom domain in [Resend's documentation](/dashboard/domains/introduction).

## 2. Add your Resend API key and from address

To use Resend with Replit, you'll need to add a Resend API key, which you can create in the [Resend Dashboard](https://resend.com/api-keys). Do not share your API key with others or expose it in the browser or other client-side code.

The from address is the email address that will be used to send emails. Use your custom domain you added in step 1 here (e.g., `hello@yourdomain.com`).

Replit tracks the details of your Resend integration in the [Integrations
page](https://replit.com/integrations).
