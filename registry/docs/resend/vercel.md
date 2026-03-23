# Vercel

Source: https://resend.com/docs/knowledge-base/vercel

Verify your domain on Vercel with Resend.

This guide helps you verify your domain on Vercel with Resend. We also have
[an official integration for
Vercel](https://resend.com/blog/vercel-integration) that helps you set up your
API keys on Vercel projects so you can start sending emails with Resend. [View
the integration here](https://vercel.com/resend/~/integrations/resend).

## Add Domain to Resend

First, log in to your [Resend Account](https://resend.com/login) and [add a domain](https://resend.com/domains).

It is [best practice to use a
subdomain](/knowledge-base/is-it-better-to-send-emails-from-a-subdomain-or-the-root-domain)
(updates.example.com) instead of the root domain (example.com). Using a
subdomain allows for proper reputation segmentation based on topics or purpose
(e.g. marketing) and is especially important if receiving emails with Resend.

## Automatic Setup (Recommended)

The fastest way to verify your domain on Vercel is using the **Auto Configure** button on Resend. This uses Domain Connect to automatically configure your DNS records.

1. Go to your [Domains page](https://resend.com/domains) in Resend.
2. (Optional) If you want to receive emails, select `Manual setup` and toggle the "Receiving" switch on the domain details page. ([Learn more below](#receiving-emails))
3. Click **Auto Configure**.
4. Authorize Resend to access your Vercel DNS settings.
5. The DNS records will be added automatically.

That's it. Your domain will be verified within a few minutes.

## Manual Setup

If you prefer to add DNS records manually, follow these steps.

### Log in to Vercel

Log in to your [Vercel account](https://vercel.com/login) and select the `Domains` tab.

## Add MX SPF Record

Copy and paste the values in Resend to Vercel.

1. Type `send` for the `Name` of the record in Vercel.
2. Expand the `Type` dropdown and select `MX`.
3. Copy the record value from Resend into the `Value` field in Vercel.
4. Add `10` for the `Priority`.
5. Select `Add`.

Omit your domain from the record values in Resend when you paste. Instead of
`send.example.com`, paste only `send` (or `send.subdomain` if you're using a
subdomain).

Below is a mapping of the record fields from Resend to Vercel:

| Vercel   | Resend   | Example Value                           |
| -------- | -------- | --------------------------------------- |
| Type     | Type     | `MX Record`                             |
| Name     | Name     | `send`                                  |
| Value    | Value    | `feedback-smtp.us-east-1.amazonses.com` |
| TTL      | TTL      | `Use Vercel default (60)`               |
| Priority | Priority | `10`                                    |

Do not use the same priority for multiple records. If Priority `10` is already
in use on another record, try a higher value `20` or `30`.

## Add TXT SPF Record

In the same section, add another record in Vercel.

1. Type `send` for the `Name` of the record.
2. Expand the `Type` dropdown and select `TXT`.
3. Copy the `TXT` record value from Resend into the `Value` field in Vercel.
4. Use the default TTL of `60`.
5. Select `Add`.

Omit your domain from the record values in Resend when you paste. Instead of
`send.example.com`, paste only `send` (or `send.subdomain` if you're using a
subdomain).

Below is a mapping of the record fields from Resend to Vercel:

| Vercel | Resend | Example Value                         |
| ------ | ------ | ------------------------------------- |
| Type   | Type   | `TXT Record`                          |
| Name   | Name   | `send`                                |
| Value  | Value  | `"v=spf1 include:amazonses.com ~all"` |
| TTL    | TTL    | `Use Vercel default (60)`             |

## Add TXT DKIM Records

In the same section, add another record in Vercel.

1. Type `resend._domainkey` for the `Name` of the record.
2. Expand the `Type` dropdown and select `TXT`.
3. Copy the record value from Resend into the `Value` field in Vercel.

Omit your domain from the record values in Resend when you paste. Instead of
`resend._domainkey.example.com`, paste only `resend._domainkey` (or
`resend._domainkey.subdomain` if you're using a subdomain).

Below is a mapping of the record fields from Resend to Vercel:

| Vercel | Resend | Example Value                |
| ------ | ------ | ---------------------------- |
| Type   | Type   | `TXT Record`                 |
| Name   | Name   | `resend._domainkey`          |
| Value  | Value  | `p=example_demain_key_value` |
| TTL    | TTL    | `Use Vercel default (60)`    |

## Receiving Emails

If you want to receive emails at your domain, toggle the "Receiving" switch on the domain details page.

When you enable Inbound on a domain, Resend receives *all emails* sent to that
specific domain depending on the priority of the MX record. For this reason,
we strongly recommend verifying a subdomain (`subdomain.example.com`) instead
of the root domain (`example.com`). Learn more about [avoiding conflicts with
your existing MX
records](/knowledge-base/how-do-i-avoid-conflicting-with-my-mx-records).

Copy and paste the values in Resend to Vercel:

1. Type `inbound` (or whatever your subdomain is) for the `Name` of the record in Vercel.
2. Expand the `Type` dropdown and select `MX`.
3. Copy the MX Value from Resend into the `Value` field in Vercel.
4. Add `10` for the `Priority`.
5. Select `Add`.

Below is a mapping of the record fields from Resend to Vercel:

| Vercel   | Resend   | Example Value                          |
| -------- | -------- | -------------------------------------- |
| Type     | Type     | `MX Record`                            |
| Name     | Name     | `inbound`                              |
| Value    | Content  | `inbound-smtp.us-east-1.amazonaws.com` |
| TTL      | TTL      | `Use Vercel default (60)`              |
| Priority | Priority | `10`                                   |

After verifying your domain, create a webhook to process incoming emails. For help setting up a webhook, how to access email data and attachments, forward emails, and more, see [our guide on receiving emails with Resend](/dashboard/receiving/introduction).

## Complete Verification

Now click [Verify DNS Records](https://resend.com/domains) on your Domain in Resend. It may take a few hours to complete the verification process (often much faster).

## Troubleshooting

If your domain is not successfully verified, these are some common troubleshooting methods.

```
Review the records you added to Vercel to rule out copy and paste errors.



[Review our guide on a domain not verifying](/knowledge-base/what-if-my-domain-is-not-verifying).
```
