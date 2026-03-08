# Gandi

Source: https://resend.com/docs/knowledge-base/gandi

Verify your domain on Gandi with Resend.

## Add Domain to Resend

First, log in to your [Resend Account](https://resend.com/login) and [add a domain](https://resend.com/domains).

It is [best practice to use a
subdomain](/knowledge-base/is-it-better-to-send-emails-from-a-subdomain-or-the-root-domain)
(updates.example.com) instead of the root domain (example.com). Using a
subdomain allows for proper reputation segmentation based on topics or purpose
(e.g. marketing) and is especially important if receiving emails with Resend.

## Log in to Gandi

Log in to your [Gandi account](https://admin.gandi.net/domain/):

1. Choose your Domain from the `Domain` list.
2. Select the `DNS Records` tab to get to the page to manage DNS records.

## Add MX SPF Record

Select “Add record” on Gandi to copy and paste the values MX from Resend.

1. On the `Type` page, choose `MX`.
2. Use the default TTL of `10800`.
3. Type `send` for the `Name` of the record.
4. Use the default `Priority` of `10`.
5. Copy the MX Value from Resend into the `Hostname` field.
6. Select `Create`.

Gandi requires your MX record to have a trailing period when adding. Resend
will include the trailing period when copying. Removing the period will cause
the verification to fail.

Below is a mapping of the record fields from Resend to Gandi:

| Gandi    | Resend   | Example Value                            |
| -------- | -------- | ---------------------------------------- |
| Type     | Type     | `MX Record`                              |
| Name     | Name     | `send`                                   |
| Hostname | Value    | `feedback-smtp.us-east-1.amazonses.com.` |
| TTL      | -        | `10800`                                  |
| Priority | Priority | `10`                                     |

Do not use the same priority for multiple records. If Priority `10` is already
in use on another record, try a higher value `20` or `30`.

## Add TXT SPF Record

In the same section, select “Add record” again.

1. On the `Type` page, choose `TXT`.
2. Use the default TTL of `10800`.
3. Type `send` for the `Name` of the record.
4. Copy the TXT Value Resend into the `Text value` field.
5. Select `Create`.

Omit your domain from the record values in Resend when you paste. Instead of
`send.example.com`, paste only `send` (or `send.subdomain` if you're using a
subdomain).

Below is a mapping of the record fields from Resend to Gandi:

| Gandi      | Resend | Example Value                         |
| ---------- | ------ | ------------------------------------- |
| Type       | Type   | `TXT Record`                          |
| Name       | Name   | `send`                                |
| Text value | Value  | `"v=spf1 include:amazonses.com ~all"` |
| TTL        | -      | `10800`                               |

## Add TXT DKIM Records

In the same section, select “Add record” again.

1. On the `Type` page, choose `TXT`.
2. Use the default TTL of `10800`.
3. Type `resend._domainkey` for the `Host name` of the record.
4. Copy the record value from Resend into the `TXT value` field.
5. Select `Create`.

Omit your domain from the record values in Resend when you paste. Instead of
`resend._domainkey.example.com`, paste only `resend._domainkey` (or
`resend._domainkey.subdomain` if you're using a subdomain).

Below is a mapping of the record fields from Resend to Gandi:

| Gandi      | Resend | Example Value                |
| ---------- | ------ | ---------------------------- |
| Type       | Type   | `TXT Record`                 |
| Name       | Name   | `send`                       |
| Text value | Value  | `p=example_demain_key_value` |
| TTL        | -      | `1 hour`                     |

## Receiving Emails

If you want to receive emails at your domain, toggle the "Receiving" switch on the domain details page.

When you enable Inbound on a domain, Resend receives *all emails* sent to that
specific domain depending on the priority of the MX record. For this reason,
we strongly recommend verifying a subdomain (`subdomain.example.com`) instead
of the root domain (`example.com`). Learn more about [avoiding conflicts with
your existing MX
records](/knowledge-base/how-do-i-avoid-conflicting-with-my-mx-records).

Select “Add record” on Gandi:

1. On the `Type` page, choose `MX`.
2. Use the default TTL of `10800`.
3. Type `inbound` (or whatever your subdomain is) for the `Name` of the record.
4. Use the default `Priority` of `10`.
5. Copy the MX Value from Resend into the `Hostname` field.
6. Select `Create`.

Below is a mapping of the record fields from Resend to Gandi:

| Gandi    | Resend   | Example Value                           |
| -------- | -------- | --------------------------------------- |
| Type     | Type     | `MX Record`                             |
| Name     | Name     | `inbound`                               |
| Hostname | Content  | `inbound-smtp.us-east-1.amazonaws.com.` |
| TTL      | -        | `10800`                                 |
| Priority | Priority | `10`                                    |

After verifying your domain, create a webhook to process incoming emails. For help setting up a webhook, how to access email data and attachments, forward emails, and more, see [our guide on receiving emails with Resend](/dashboard/receiving/introduction).

## Complete Verification

Now click [Verify DNS Records](https://resend.com/domains) on your Domain in Resend. It may take a few hours to complete the verification process (often much faster).

## Troubleshooting

If your domain is not successfully verified, these are some common troubleshooting methods.

```
Review the records you added to Gandi to rule out copy and paste errors.



[Review our guide on a domain not verifying](/knowledge-base/what-if-my-domain-is-not-verifying).
```
