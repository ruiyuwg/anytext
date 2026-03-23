# DMARC Analyzer

Source: https://resend.com/docs/dmarc-analyzer

Analyze DMARC XML reports with a free, open-source tool built by Resend.

[DMARC Analyzer](https://github.com/resend/resend-dmarc-analyzer) is an open-source tool built by Resend that parses DMARC XML reports and turns them into human-readable dashboards. You can use it directly in your browser or deploy your own instance to receive automated email digests.

## What is DMARC?

DMARC (Domain-based Message Authentication, Reporting, and Conformance) is an email authentication protocol that builds on [SPF and DKIM](/dashboard/domains/introduction). It lets domain owners specify how unauthenticated emails should be handled and receive reports about authentication results.

When you [set up a DMARC policy](/dashboard/domains/dmarc), mailbox providers send XML reports to the address you specify. These reports contain valuable data about who is sending email on behalf of your domain and whether those emails pass authentication — but the raw XML is difficult to read. The DMARC Analyzer helps you visualize these reports in a human-readable format.

## Features

- Parse and visualize DMARC XML reports instantly
- View SPF and DKIM alignment results per source
- Identify unauthorized senders using your domain
- Self-host with automated report ingestion via [Resend Receiving](/dashboard/receiving/introduction)
- Receive email digests summarizing your DMARC reports

  For more details on understanding DMARC reports, see our [guide on how to read
  a DMARC report](https://resend.com/blog/how-to-read-a-dmarc-report).

## How to use

### Web interface

The quickest way to get started — no setup required.

1. Go to [checkdmarc.email](https://checkdmarc.email/)
2. Paste your DMARC XML report (or upload the XML file)
3. View the parsed results instantly

### Self-hosted with automated reports

For ongoing monitoring, deploy your own instance. This connects to Resend Receiving webhooks so DMARC reports sent to your domain are automatically ingested and analyzed, with email digests delivered via Resend.

## Getting started (self-hosted)

````
```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
git clone https://github.com/resend/resend-dmarc-analyzer.git
cd resend-dmarc-analyzer
```




  `bash pnpm install `
  `bash npm install `
  `bash yarn install `
  `bash bun install `




Copy the example environment file and fill in the required values:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
cp .env.example .env.local
```

| Variable                | Description                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| `RESEND_API_KEY`        | Your [Resend API key](https://resend.com/api-keys)                                              |
| `RESEND_WEBHOOK_SECRET` | Signing secret from your [Resend webhook](https://resend.com/webhooks) endpoint set up below    |
| `EMAIL_FROM`            | Sender address for digest emails (must be from a [verified domain](https://resend.com/domains)) |
| `EMAIL_TO`              | Recipient address for digest emails                                                             |



Start the development server:


  `bash pnpm run dev `
  `bash npm run dev `
  `bash yarn run dev `
  `bash bun run dev `


Register your publicly accessible HTTPS URL in the Resend dashboard and enable the `email.received` event.

* For `rua` reports: `https://example123.ngrok.io/api/webhooks/dmarc/rua`
* For `ruf` report: `https://example123.ngrok.io/api/webhooks/dmarc/ruf`

Copy the signing secret from the webhook details page to the `RESEND_WEBHOOK_SECRET` environment variable.


  For development, you can create a tunnel to your localhost server using a tool like
  [ngrok](https://ngrok.com/download) or [VS Code Port Forwarding](https://code.visualstudio.com/docs/debugtest/port-forwarding). These tools serve your local dev environment at a public URL you can use to test your local webhook endpoint.

  Example: `https://example123.ngrok.io/api/webhook`




Deploy the application to your preferred hosting platform and update the webhook endpoint(s) in the Resend dashboard.

* For `rua` reports: `https://your-domain.com/api/webhooks/dmarc/rua`
* For `ruf` reports: `https://your-domain.com/api/webhooks/dmarc/ruf`

The project is built with [Next.js](https://nextjs.org) so it works with any platform that supports it (e.g., [Vercel](https://vercel.com)).
````

## Tech stack

DMARC Analyzer is built with [Next.js](https://nextjs.org), [React Email](https://react.email), and [Resend](https://resend.com). The full source code is available on [GitHub](https://github.com/resend/resend-dmarc-analyzer).

# Email Best Practices Skill

Source: https://resend.com/docs/email-best-practices-skill

Comprehensive guide for building production-ready email systems with AI agents.

The Email Best Practices skill provides AI agents with comprehensive knowledge for building production-ready email integrations in your applications. It covers authentication, compliance, deliverability, and operational best practices.

## Installation

Install the skill using the following command:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npx skills add resend/email-best-practices
```

## Advantages

- **DNS authentication guidance**: Step-by-step instructions for setting up SPF, DKIM, and DMARC records.
- **Transactional and marketing email design**: Best practices for designing effective transactional and marketing emails.
- **Regional compliance**: Guidelines for CAN-SPAM, GDPR, CASL, and other regional email regulations.
- **Webhook event processing**: Patterns for handling delivery notifications, bounces, and complaints.
- **Suppression list management**: Strategies for maintaining healthy suppression lists and improving deliverability.

## Learn More

See the full source code and documentation.
