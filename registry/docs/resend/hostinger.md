# Hostinger

Source: https://resend.com/docs/knowledge-base/hostinger

Verify your domain on Hostinger with Resend.

## Add Domain to Resend

First, log in to your [Resend Account](https://resend.com/login) and [add a domain](https://resend.com/domains).

It is [best practice to use a
subdomain](/knowledge-base/is-it-better-to-send-emails-from-a-subdomain-or-the-root-domain)
(updates.example.com) instead of the root domain (example.com). Using a
subdomain allows for proper reputation segmentation based on topics or purpose
(e.g. marketing) and is especially important if receiving emails with Resend.

## Log in to Hostinger

Log in to your [Hostinger account](https://auth.hostinger.com/login):

1. Select the `Domains` tab
2. Choose your Domain from the `Domain portfolio` list.
3. Select the `DNS / Nameservers` to get to the page to manage DNS records.

## Add MX SPF Record

Copy and paste the values MX in Resend to Hostinger.

1. Set the Type to `MX`.
2. Type `send` for the `Name` of the record.
3. Copy the MX Value from Resend into the `Mail Server` field.
4. Add `10` for the `Priority`.
5. Set the TTL to `3600`.
6. Select `Add Record`.

Omit your domain from the record values in Resend when you paste. Instead of
`send.example.com`, paste only `send` (or `send.subdomain` if you're using a
subdomain).

Below is a mapping of the record fields from Resend to Hostinger:

| Hostinger   | Resend   | Example Value                           |
| ----------- | -------- | --------------------------------------- |
| Type        | Type     | `MX Record`                             |
| Name        | Name     | `send`                                  |
| Mail Server | Value    | `feedback-smtp.us-east-1.amazonses.com` |
| TTL         | -        | `Set to 3660`                           |
| Priority    | Priority | `10`                                    |

Do not use the same priority for multiple records. If Priority `10` is already
in use on another record, try a higher value `20` or `30`.

## Add TXT SPF Record

In the same section, add another record in Hostinger.

1. Set the Type to `TXT`.
2. Type `send` for the `Name` of the record.
3. Copy the TXT Value Resend into the `TXT value` field.
4. Set the TTL to `3600`.
5. Select `Add Record`.

Omit your domain from the record values in Resend when you paste. Instead of
`send.example.com`, paste only `send` (or `send.subdomain` if you're using a
subdomain).

Below is a mapping of the record fields from Resend to Hostinger:

| Hostinger | Resend | Example Value                         |
| --------- | ------ | ------------------------------------- |
| Type      | Type   | `TXT Record`                          |
| Name      | Name   | `send`                                |
| TXT value | Value  | `"v=spf1 include:amazonses.com ~all"` |
| TTL       | -      | `Set to 3600`                         |

## Add TXT DKIM Records

In the same section, add another record in Hostinger.

1. Set the Type to `TXT`.
2. Type `resend._domainkey` for the `Name` of the record.
3. Copy the record value from Resend into the `TXT value` field.
4. Set the TTL to `3600`.
5. Select `Add Record`.

Omit your domain from the record values in Resend when you paste. Instead of
`resend._domainkey.example.com`, paste only `resend._domainkey` (or
`resend._domainkey.subdomain` if you're using a subdomain).

Below is a mapping of the record fields from Resend to Hostinger:

| Hostinger | Resend | Example Value                |
| --------- | ------ | ---------------------------- |
| Type      | Type   | `TXT Record`                 |
| Name      | Name   | `send`                       |
| TXT value | Value  | `p=example_demain_key_value` |
| TTL       | -      | `Set to 3600`                |

## Receiving Emails

If you want to receive emails at your domain, toggle the "Receiving" switch on the domain details page.

When you enable Inbound on a domain, Resend receives *all emails* sent to that
specific domain depending on the priority of the MX record. For this reason,
we strongly recommend verifying a subdomain (`subdomain.example.com`) instead
of the root domain (`example.com`). Learn more about [avoiding conflicts with
your existing MX
records](/knowledge-base/how-do-i-avoid-conflicting-with-my-mx-records).

Copy and paste the values MX in Resend to Hostinger:

1. Set the Type to `MX`.
2. Type `inbound` (or whatever your subdomain is) for the `Name` of the record.
3. Copy the MX Value from Resend into the `Mail Server` field.
4. Add `10` for the `Priority`.
5. Set the TTL to `3600`.
6. Select `Add Record`.

Below is a mapping of the record fields from Resend to Hostinger:

| Hostinger   | Resend   | Example Value                          |
| ----------- | -------- | -------------------------------------- |
| Type        | Type     | `MX Record`                            |
| Name        | Name     | `inbound`                              |
| Mail Server | Content  | `inbound-smtp.us-east-1.amazonaws.com` |
| TTL         | -        | `Set to 3660`                          |
| Priority    | Priority | `10`                                   |

After verifying your domain, create a webhook to process incoming emails. For help setting up a webhook, how to access email data and attachments, forward emails, and more, see [our guide on receiving emails with Resend](/dashboard/receiving/introduction).

## Complete Verification

Now click [Verify DNS Records](https://resend.com/domains) on your Domain in Resend. It may take a few hours to complete the verification process (often much faster).

## Troubleshooting

If your domain is not successfully verified, these are some common troubleshooting methods.

```
Review the records you added to Hostinger to rule out copy and paste errors.



[Review our guide on a domain not verifying](/knowledge-base/what-if-my-domain-is-not-verifying).
```

# How can I change my Resend email address?

Source: https://resend.com/docs/knowledge-base/how-can-i-change-my-email-address

How to change the email address associated with your Resend account.

To change the email address associated with your Resend account:

1. Navigate to your [**Profile**](https://resend.com/profile) page.
2. Under **Your email**, enter your new email address in the **Email address** field.
3. Click the **Update email** button.

After clicking **Update email**, you will be signed out and two confirmation emails will be sent:

- **To your new email address**: An email with the subject "Confirm email change for Resend" asking you to confirm the update.
- **To your current email address**: An email with the subject "Request to change your email" asking you to confirm the request.

Click the confirmation link in **both** emails to complete the email change. Once both confirmations are complete, you can log in with your new email address.

# How can I delete my Resend account?

Source: https://resend.com/docs/knowledge-base/how-can-i-delete-my-resend-account

How to request your Resend account and data to be deleted.

To delete your Resend account:

1. [Leave the team](/dashboard/settings/team#leave-your-resend-team) associated with your Resend account.
2. Select the **Delete account** button.

Upon confirmation, Resend will delete your account and all account data.

Please note that this action is not reversible, so please proceed with
caution.

# How can I delete my Resend team?

Source: https://resend.com/docs/knowledge-base/how-can-i-delete-my-team

How to request your Resend team and team data to be deleted.

To request your Resend team and team data to be deleted:

1. Navigate to your [**Team Settings**](https://resend.com/settings/team).
2. Select the **Delete Team** button.

Upon confirmation, Resend will delete your team and all your team data.

If you are the last member of a team, you can also delete it by selecting
**Leave Team** instead. The system will automatically delete the team when the
last member leaves.

Please note that this action is not reversible, so please proceed with
caution.

# Can I receive emails with Resend?

Source: https://resend.com/docs/knowledge-base/how-can-i-receive-emails-with-resend

Receive emails with webhooks and process content, attachments, forwarding, and replies.

Yes. Resend supports receiving emails (inbound) via webhooks.

With Receiving, you can:

- Receive incoming emails and get notified with the `email.received` webhook event.
- Retrieve full email content (HTML, text, headers) using the Receiving API.
- Process attachments using attachment metadata and temporary download URLs.

You can receive emails at:

- A Resend-managed `*.resend.app` receiving domain, or
- Your own custom domain by adding the required `MX` record.

See the full guide: [Receiving Emails](/dashboard/receiving/introduction).

# How do I create an email address or sender in Resend?

Source: https://resend.com/docs/knowledge-base/how-do-I-create-an-email-address-or-sender-in-resend

Learn how sending from an email address works on Resend.

Resend does **not** require you to “create an email address”, “set up a sender identity”, or “add a from-address” before sending.

Once a domain is verified in your Resend account, you can send from **any** email address at that domain.

The email address you send from does **not** need to exist in another system.
However, we recommend using addresses that can receive replies.

## Common misconceptions

Some platforms require you to create, register, or pre-approve a sending address.\
Resend does **not**. After verifying your domain, you’re free to send from any address **@yourdomain**, with no extra setup, creation, or configuration of that address.

## Getting started

To start sending emails with Resend:

1. [Sign up for a Resend account](https://resend.com/signup)
2. [Add and verify your domain](https://resend.com/domains)
3. [Create an API key](https://resend.com/api-keys)
4. Start sending emails immediately from any address at the domain you verified

If you're having trouble with domain verification or DNS records, see our [domain verification troubleshooting guide](/knowledge-base/what-if-my-domain-is-not-verifying) or check our [DNS setup guides](/knowledge-base/introduction) for your specific DNS provider.
