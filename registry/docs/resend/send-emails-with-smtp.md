# Send emails with SMTP

Source: https://resend.com/docs/send-with-smtp

Learn how to integrate Resend via SMTP.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

Prefer watching a video? Check out our video walkthrough below.

## SMTP Credentials

When configuring your SMTP integration, you'll need to use the following credentials:

- **Host**: `smtp.resend.com`
- **Port**: `25`, `465`, `587`, `2465`, or `2587`
- **Username**: `resend`
- **Password**: `YOUR_API_KEY`

Ports help to instruct the type of security you want to use in your SMTP connection.

| Type     | Port                | Security                                                                  |
| -------- | ------------------- | ------------------------------------------------------------------------- |
| SMTPS    | `465`, `2465`       | Implicit SSL/TLS (Immediately connects via SSL/TLS)                       |
| STARTTLS | `25`, `587`, `2587` | Explicit SSL/TLS (First connects via plaintext, then upgrades to SSL/TLS) |

## Idempotency Key

Idempotency keys are used to prevent duplicate emails. You can add the `Resend-Idempotency-Key` header to your emails sent with SMTP to prevent duplicate emails.

```yaml SMTP {4} theme={"theme":{"light":"github-light","dark":"vesper"}}
From: Acme <onboarding@resend.dev>
To: delivered@resend.dev
Subject: hello world
Resend-Idempotency-Key: welcome-user/123456789

<p>it works!</p>
```

Learn more about [idempotency keys](/dashboard/emails/idempotency-keys).

## Custom Headers

If your SMTP client supports it, you can add custom headers to your emails.

Here are some common use cases for custom headers:

- Prevent threading on Gmail with the `X-Entity-Ref-ID` header
- Include a shortcut for users to unsubscribe with the `List-Unsubscribe` header

## FAQ

Once configured, you should be able to start sending emails via SMTP. Below are some frequently asked questions:

```
We currently don't provide SMTP server logs for debugging. If you run into
issues, please [reach out to support](https://resend.com/help).



Emails sent with SMTP will show in your [emails
table](https://resend.com/emails).



Yes, the rate limit is the [same as the
API](https://resend.com/docs/api-reference/introduction#rate-limit).
```

# Send emails with Supabase Edge Functions

Source: https://resend.com/docs/send-with-supabase-edge-functions

Learn how to send your first email using Supabase Edge Functions.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

Make sure you have the latest version of the [Supabase CLI](https://supabase.com/docs/guides/cli#installation) installed.

## 1. Create Supabase function

Create a new function locally:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
supabase functions new resend
```

## 2. Edit the handler function

Paste the following code into the `index.ts` file:

```ts index.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

const handler = async (_request: Request): Promise<Response> => {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'hello world',
      html: '<strong>it works!</strong>',
    }),
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

Deno.serve(handler);
```

## 3. Deploy and send email

Run function locally:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
supabase functions start
supabase functions serve resend --no-verify-jwt
```

Deploy function to Supabase:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
supabase functions deploy resend
```

Open the endpoint URL to send an email:

## 4. Try it yourself

See the full source code.

# Send emails using Supabase with SMTP

Source: https://resend.com/docs/send-with-supabase-smtp

Learn how to integrate Supabase Auth with Resend SMTP.

## Prerequisites

To get the most out of this guide, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## 1. Get the Resend SMTP credentials

When configuring your SMTP integration, you'll need to use the following credentials:

- **Host**: `smtp.resend.com`
- **Port**: `465`
- **Username**: `resend`
- **Password**: `YOUR_API_KEY`

## 2. Integrate with Supabase SMTP

After logging into your Supabase account, you'll need to enable the SMTP integration.

1. Go to your Supabase project

2. Click on **Authentication** in the left sidebar

3. Click **Email** under the **Notifications** section

4. Click **SMTP Settings**

5. Add your Sender email and name (these are required fields). For example: `support@acme.com` and `ACME Support`.

6. You can copy-and-paste the [SMTP credentials](https://resend.com/settings/smtp) from Resend to Supabase.

After that, you can click the **Save** button and all of your emails will be sent through Resend.

# Send emails with SvelteKit

Source: https://resend.com/docs/send-with-sveltekit

Learn how to send your first email using SvelteKit and the Resend Node.js SDK.
