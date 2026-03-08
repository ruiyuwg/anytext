# Choosing a Region

Source: https://resend.com/docs/dashboard/domains/regions

Resend offers sending from multiple regions

Resend users have the option to send transactional and marketing emails from four different regions:

- North Virginia (us-east-1)
- Ireland (eu-west-1)
- São Paulo (sa-east-1)
- Tokyo (ap-northeast-1)

No matter where your users are, you can ensure that they receive your emails in a timely and efficient manner. You can visualize the different regions in the Resend dashboard:

## Data Residency

Region selection controls where your emails are **routed and sent from**. It does not control where customer data is stored.

All account data, including email metadata, logs, and API records, is stored in the United States regardless of the sending region you select. Choosing `eu-west-1` means your emails are dispatched from Ireland, but your Resend account data still resides in the US.

If your organization has strict data residency requirements, review the [Resend Subprocessors list](https://resend.com/legal/subprocessors) and [Privacy Policy](https://resend.com/legal/privacy-policy) for details on data handling.

## Why is this important?

Especially for transactional emails like magic links, password resets, and welcome messages, users expect to receive them right away. If they don't, they might not be able to access your service right away, which could be a missed opportunity for your organization.

Here are some of the other benefits of using our multi-region email sending feature:

1. **Faster delivery:** By sending emails from the region closest to your user, you can reduce latency and ensure a faster time-to-inbox. This can be the difference between people using/buying your product or not.
2. **Easier account management:** Instead of having to maintain different accounts for each region, we're providing multi-region within the same account. That way, you aren't juggling different login credentials.
3. **Increased resilience:** In case of disruption in one region, our multi-region feature enables you to send emails from a backup domain in a separate region, guaranteeing maximum uptime.

## Get Started

To start using our multi-region email sending feature, go to **[Domains](https://resend.com/domains)**, then select the option to add a new domain.

Finally, select the region you want to send your emails.

## How to set up multi-region for the same domain

For advanced needs, you can set up multiple regions for the same domain. We recommend setting a unique subdomain for each region (e.g., us.domain.com, eu.domain.com). When sending transactional emails or marketing emails, choose the right domain for your users.

## Changing Domain Region

If you'd like to switch the region your domain is currently set to:

1. Delete your current domain in the [Domain's page](https://resend.com/domains).
2. Add the same domain again, selecting the new region.
3. Update your DNS records to point to the new domain.

For more help, please reach out to [Support](https://resend.com/help), and we can help you out.
