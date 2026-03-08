# Get Started with Resend and Supabase

Source: https://resend.com/docs/knowledge-base/getting-started-with-resend-and-supabase

A quick jumpstart to using Resend with Supabase.

In this guide, we'll help you get started with Resend by:

- [Setting up Resend](#set-up-resend)
- [Send Auth Emails with Resend](#send-auth-emails-with-resend)
- [Send Emails with Supabase Edge Functions](#send-emails-with-supabase-edge-functions)

## Set up Resend

In order to send emails with your Supabase project, you'll need to first verify it in Resend.

Go to [the Domains page](https://resend.com/domains) and click on **Add Domain**.

1. Add your domain name (we recommend [using a subdomain](/knowledge-base/is-it-better-to-send-emails-from-a-subdomain-or-the-root-domain) like `updates.yourdomain.com`).

2. Add the DNS records to your DNS provider ([learn more about these records](/dashboard/domains/introduction)).

3. Click on **I've added the records** to begin the verification process.

4. Wait for the verification to complete (usually takes 5–10 minutes)

Resend requires you own your domain (i.e., not a shared or public domain).
Adding DNS records gives Resend the authority to send emails on your behalf
and signals to the inbox providers that you're a legitimate sender.

## Send Auth Emails with Resend

If you want to use Resend to send your Supabase Auth Emails, you have three options:

1. [Using the Resend Integration](#1-using-the-resend-integration): simplest, but less customizable email templates.
2. [Custom Auth Functions](#2-custom-auth-functions): more customizable email templates, but requires more setup.
3. [Self-hosted with Custom SMTP](#3-self-hosted-with-custom-smtp): only for those self-hosting Supabase.

### 1. Using the Resend Integration

Resend includes a pre-built integration with Supabase. Connecting Resend as your email provider will allow you to send your Supabase emails (i.e., password resets, email confirmations, etc.) through Resend.

1. Open the [Resend Integrations settings](https://resend.com/settings/integrations).

2. Click **Connect to Supabase** and login to your Supabase account if prompted.

3. Select a project and click **Select Project**, then select your domain and click **Add API Key**. Resend will create an API key for you. Add a sender name and click **Configure SMTP Integration**.

Click on **Supabase Dashboard** to confirm the integration.

Supabase has a rate limit on the number of emails you can send per hour and
requires you to [connect a custom email provider for more than 2
emails/hour](https://supabase.com/docs/guides/auth/rate-limits). Once you set
Resend as your email provider, you can send additional emails (by default, 25
emails/hour, although you can change the rate limit in your project's
[authentication
settings](https://supabase.com/docs/guides/deployment/going-into-prod#rate-limiting-resource-allocation--abuse-prevention)).

### 2. Custom Auth Functions

Benefit of using custom auth functions:

- More control over the email sending process since you control the sending function.
- More control over the email template using React Email or Resend Templates.

Note that this requires enabling [Supabase Auth Hooks](https://supabase.com/docs/guides/auth/auth-hooks).

See the full source code.

### 3. Self-hosted with Custom SMTP

If you're self-hosting Supabase, you can use a custom SMTP server to send your emails. [Learn more here](/send-with-smtp).

## Send Emails with Supabase Edge Functions

If you're using Supabase Edge Functions, you can add email sending to your function by using the Resend Node.js SDK. You can use these functions for Auth Emails ([as shown above](#2-custom-auth-functions)) or for other emails (e.g., app notifications, account activity, etc.).

First, make sure you have the latest version of the [Supabase CLI](https://supabase.com/docs/guides/cli#installation) installed.

### 1. Create Supabase function

Create a new function locally:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
supabase functions new resend
```

### 2. Edit the handler function

Paste the following code into the `index.ts` file:

```js index.ts theme={"theme":{"light":"github-light","dark":"vesper"}}
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = 're_xxxxxxxxx';

const handler = async (_request: Request): Promise<Response> => {
    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
            from: 'Acme <onboarding@resend.dev>',
            to: ['delivered@resend.dev'],
            subject: 'hello world',
            html: '<strong>it works!</strong>',
        })
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

serve(handler);
```

### 3. Deploy and send email

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

### 4. Try it yourself

See the full source code.

## Happy sending!

If you have any questions, please let us know at <support@resend.com>.
