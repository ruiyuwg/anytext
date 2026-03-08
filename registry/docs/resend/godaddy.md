# GoDaddy

Source: https://resend.com/docs/knowledge-base/godaddy

Verify your domain on GoDaddy with Resend.

Prefer watching a video? Check out our video walkthrough below.

## Add Domain to Resend

First, log in to your [Resend Account](https://resend.com/login) and [add a domain](https://resend.com/domains).

It is [best practice to use a
subdomain](/knowledge-base/is-it-better-to-send-emails-from-a-subdomain-or-the-root-domain)
(updates.example.com) instead of the root domain (example.com). Using a
subdomain allows for proper reputation segmentation based on topics or purpose
(e.g. marketing) and is especially important if receiving emails with Resend.

## Log in to GoDaddy

Log in to your [GoDaddy account](https://sso.godaddy.com):

1. Select `DNS` from the left navigation
2. Find your domain in the list and select the domain
3. This will take you to the DNS management page for the domain

## Add MX SPF Record

Copy and paste the values MX in Resend to GoDaddy.

1. Click `Add New Record` to create a new record
2. Set the Type to `MX`.
3. Type `send` for the `Name` of the record.
4. Copy the MX Value from Resend into the `Value` field.
5. Add `10` for the `Priority`.
6. Set the TTL to `600` (or use the default).
7. Click `Save`.

Omit your domain from the record values in Resend when you paste. Instead of
`send.example.com`, paste only `send` (or `send.subdomain` if you're using a
subdomain).

Below is a mapping of the record fields from Resend to GoDaddy:

| GoDaddy  | Resend   | Example Value                           |
| -------- | -------- | --------------------------------------- |
| Type     | Type     | `MX Record`                             |
| Name     | Name     | `send`                                  |
| Value    | Value    | `feedback-smtp.us-east-1.amazonses.com` |
| TTL      | -        | `600` (or use default)                  |
| Priority | Priority | `10`                                    |

Do not use the same priority for multiple records. If Priority `10` is already
in use on another record, try a higher value `20` or `30`.

## Add TXT SPF Record

In the same section, add another record in GoDaddy.

1. Click `Add New Record` to create a new record
2. Set the Type to `TXT`.
3. Type `send` for the `Name` of the record.
4. Copy the TXT Value from Resend into the `Value` field.
5. Set the TTL to `600` (or use the default).
6. Click `Save`.

Omit your domain from the record values in Resend when you paste. Instead of
`send.example.com`, paste only `send` (or `send.subdomain` if you're using a
subdomain).

Below is a mapping of the record fields from Resend to GoDaddy:

| GoDaddy | Resend | Example Value                         |
| ------- | ------ | ------------------------------------- |
| Type    | Type   | `TXT Record`                          |
| Name    | Name   | `send`                                |
| Value   | Value  | `"v=spf1 include:amazonses.com ~all"` |
| TTL     | -      | `600` (or use default)                |

## Add TXT DKIM Records

In the same section, add another record in GoDaddy.

1. Click `Add New Record` to create a new record
2. Set the Type to `TXT`.
3. Type `resend._domainkey` for the `Name` of the record.
4. Copy the record value from Resend into the `Value` field.
5. Set the TTL to `600` (or use the default).
6. Click `Save`.

Omit your domain from the record values in Resend when you paste. Instead of
`resend._domainkey.example.com`, paste only `resend._domainkey` (or
`resend._domainkey.subdomain` if you're using a subdomain).

Below is a mapping of the record fields from Resend to GoDaddy:

| GoDaddy | Resend | Example Value                |
| ------- | ------ | ---------------------------- |
| Type    | Type   | `TXT Record`                 |
| Name    | Name   | `resend._domainkey`          |
| Value   | Value  | `p=example_demain_key_value` |
| TTL     | -      | `600` (or use default)       |

## Receiving Emails

If you want to receive emails at your domain, toggle the "Receiving" switch on the domain details page.

When you enable Inbound on a domain, Resend receives *all emails* sent to that
specific domain depending on the priority of the MX record. For this reason,
we strongly recommend verifying a subdomain (`subdomain.example.com`) instead
of the root domain (`example.com`). Learn more about [avoiding conflicts with
your existing MX
records](/knowledge-base/how-do-i-avoid-conflicting-with-my-mx-records).

Click `Add New Record` to create a new record:

1. Set the Type to `MX`.
2. Type `inbound` (or whatever your subdomain is) for the `Name` of the record.
3. Copy the MX Value from Resend into the `Value` field.
4. Add `10` for the `Priority`.
5. Set the TTL to `600` (or use the default).
6. Click `Save`.

Below is a mapping of the record fields from Resend to GoDaddy:

| GoDaddy  | Resend   | Example Value                          |
| -------- | -------- | -------------------------------------- |
| Type     | Type     | `MX Record`                            |
| Name     | Name     | `inbound`                              |
| Value    | Content  | `inbound-smtp.us-east-1.amazonaws.com` |
| TTL      | -        | `600` (or use default)                 |
| Priority | Priority | `10`                                   |

After verifying your domain, create a webhook to process incoming emails. For help setting up a webhook, how to access email data and attachments, forward emails, and more, see [our guide on receiving emails with Resend](/dashboard/receiving/introduction).

## Complete Verification

Now click [Verify DNS Records](https://resend.com/domains) on your Domain in Resend. It may take a few hours to complete the verification process (often much faster).

## Troubleshooting

If your domain is not successfully verified, these are some common troubleshooting methods.

```
Review the records you added to GoDaddy to rule out copy and paste errors.



[Review our guide on a domain not verifying](/knowledge-base/what-if-my-domain-is-not-verifying).
```
