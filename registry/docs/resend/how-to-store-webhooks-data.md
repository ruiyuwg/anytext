# How to Store Webhooks Data

Source: https://resend.com/docs/dashboard/webhooks/how-to-store-webhooks-data

Storing your email event data matters. Learn how to set up your own data storage.

When you send emails with Resend, you can receive real-time notifications for each message:

- Was it delivered?
- Did the recipient open it?
- Did they click a link?
- Did it bounce?

These events contain valuable data, however, by default webhooks are ephemeral. To make the data persistent, you can store the data in your own datasource.

This guide explains [why you should store your webhook data](#why-store-webhook-data) and [how to get started](#how-to-store-webhook-data).

## Why Store Webhook Data?

Storing your own data offers several benefits.

### 1. Meet Compliance Requirements

Many industries have regulations around data retention and audit trails:

- **GDPR** - You may need to demonstrate what communications were sent to users and when
- **SOC 2** - Audit requirements may include email delivery verification
- **Financial regulations** - Transaction-related emails may need to be retained for years

Storing your own webhook data gives you full control over retention periods and access controls.

### 2. Enable Long-term Retention

Resend retains email data for a limited period. If you need access to historical email data beyond that window, storing events in your own database ensures you never lose important information.

### 3. Power Automated Workflows

With webhook data in your database, you can build powerful automations:

- Automatically suppress bounced addresses from future sends
- Trigger follow-up emails based on open/click behavior
- Alert your team when delivery issues spike
- Re-engage users who haven't opened recent emails

## How to Store Webhook Data

While you can always [build your own webhook handler](/webhooks/introduction), it requires development resources.

To help our customers get started quickly, we've built the [Resend Webhook Ingester](/webhooks/ingester). It's an open-source, ready-to-deploy solution that handles all the complexity for you:

- **One-click deployment** to Vercel, Railway, or Render
- **Signature verification** built-in using Svix
- **Idempotent storage** that handles duplicate deliveries
- **8 database connectors** including PostgreSQL, MySQL, MongoDB, and data warehouses

  Deploy a production-ready webhook storage solution in minutes

## Data Storage Considerations

Whether using the Webhook Ingester or your own handler, you'll need to consider the following:

### Choosing a Database

The right database depends on your use case:

| Use Case                   | Recommended Database                                                                                     |
| -------------------------- | -------------------------------------------------------------------------------------------------------- |
| Already using Postgres     | [PostgreSQL](https://www.postgresql.org/) or [Supabase](https://supabase.com/)                           |
| Need simple setup          | [Supabase](https://supabase.com/) or [Neon](https://neon.com/)                                           |
| High-volume analytics      | [ClickHouse](https://clickhouse.com/) or [BigQuery](https://cloud.google.com/bigquery)                   |
| Data warehouse integration | [Snowflake](https://www.snowflake.com/) or [BigQuery](https://cloud.google.com/bigquery)                 |
| Serverless architecture    | [Neon](https://neon.com/), [PlanetScale](https://planetscale.com/), or [Supabase](https://supabase.com/) |

If you're unsure, start with [Supabase](https://supabase.com/) which has a
generous free tier.

### What Data Should You Store?

At minimum, store these fields for each webhook event:

- **Event ID** - The unique `svix-id` for deduplication
- **Event type** - What happened (delivered, bounced, opened, etc.)
- **Timestamp** - When the event occurred
- **Email ID** - Links the event back to the original send

For deeper analytics, also consider storing:

- **Recipient addresses** - For per-user engagement tracking
- **Subject lines** - To analyze performance by content
- **Tags** - If you use tags to categorize emails
- **Bounce details** - To understand delivery issues
- **Click URLs** - To track which links perform best

  The Webhook Ingester stores all available fields automatically, so you don't
  have to decide upfront what you might need later.

## Data Retention Considerations

Before storing webhook data, consider your retention requirements:

### How Long to Keep Data

- **Operational use** - 30-90 days is often sufficient for debugging and recent analytics
- **Compliance requirements** - Check your industry regulations (often 1-7 years)
- **Historical analysis** - Consider aggregating old data rather than keeping raw events

### Privacy Considerations

Webhook data may contain personal information (email addresses, IP addresses from opens/clicks). Ensure your storage approach complies with privacy regulations:

- Implement appropriate access controls
- Consider data anonymization for long-term retention
- Have a process for handling data deletion requests

### Storage Costs

High-volume senders can generate significant data. Plan for:

- Database storage costs
- Query performance as data grows
- Archival strategies for old data

  Most databases support partitioning by date, making it easy to drop old
  partitions when data ages out of your retention window.

## FAQ

```
Each email can generate multiple events (sent, delivered, opened, clicked).
A rough estimate: if you send 10,000 emails/month with average engagement,
expect 30,000-50,000 events/month. Each event is typically 1-2 KB, so about
50-100 MB/month of raw data.



No. Webhook processing happens asynchronously. Your email sending is not
affected by how you handle webhooks. If you use the Webhook Ingester, it
runs as a separate service.



Resend automatically retries failed webhook deliveries for up to 24 hours.
If your endpoint returns a 5xx error, we'll retry. If you need to recover
older events, check the [Resend Dashboard](https://resend.com/webhooks)
where you can manually replay recent events.



The Webhook Ingester supports one database per deployment. If you need to
store in multiple databases, you can either deploy multiple instances or
build a custom handler that writes to multiple destinations.
```

## Learn More

```
Deploy a production-ready webhook storage solution



See all available event types and their payloads



Learn about webhook signature verification



Get started with webhooks in your application
```
