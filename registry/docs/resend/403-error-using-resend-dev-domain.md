# 403 Error Using resend.dev Domain

Source: https://resend.com/docs/knowledge-base/403-error-resend-dev-domain

Learn how to resolve a 403 error when using the resend.dev domain to send emails to recipients other than your own.

You may receive a 403 error with the following message when trying to send emails:

```
You can only send testing emails to your own email address (your-email-address@domain.com).
To send emails to other recipients, please verify a domain at resend.com/domains, and change
the `from` address to an email using this domain.
```

## The Problem

You're using the default `resend.dev` domain while sending to email addresses other than your own.

**Example scenario:**

- Your API request uses `from: 'onboarding@resend.dev'`
- You're trying to send to recipients other than your own email address

## Why This Happens

The `resend.dev` domain is only available for testing purposes and can only send emails to the email address associated with your Resend account. This restriction helps protect domain reputation and ensures proper email deliverability.

## Solution

To send emails to recipients other than your own email address, you need to add and verify your own domain in Resend:

1. Go to the [Domains page](https://resend.com/domains) in your Resend dashboard
2. Click **Add Domain**
3. Enter your domain name
4. Follow the verification steps to add the required DNS records
5. Once verified, update your API request to use your verified domain

For detailed instructions on verifying your domain, check out our [domain
verification guide](/dashboard/domains/introduction) or the DNS guide for your
specific provider.

## Still Having Issues?

If you've verified your domain and updated your API request but you're still getting a 403 error:

1. Verify that your domain is fully verified in the [Resend Domains page](https://resend.com/domains).
2. Ensure the domain in your API request's `from` field uses your verified domain (not `resend.dev`).
3. Make sure you're not trying to send to your own email address when using `resend.dev`.
4. [Contact Resend support](https://resend.com/help) with details about your error.
