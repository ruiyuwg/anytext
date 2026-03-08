# Webhook Ingester

Source: https://resend.com/docs/webhooks/ingester

A self-hosted solution to store all your Resend webhook events in your own database.

The Resend Webhook Ingester is an open-source Next.js application that receives, verifies, and stores all your webhook events in your own database. Deploy it to your infrastructure and gain full control over your email event data.

For more details on why you should store your webhook data, see the [data
storage guide](/dashboard/webhooks/how-to-store-webhooks-data).

## Why use the Webhook Ingester?

While you can build your own webhook handler, the Webhook Ingester provides a production-ready solution with:

- **Signature verification** using Svix to ensure webhook authenticity
- **Idempotent storage** that safely handles duplicate webhook deliveries
- **Multiple database support** including PostgreSQL, MySQL, MongoDB, and data warehouses
- **One-click deployment** to Vercel, Railway, or Render

  View the source code and contribute

  Pull the official Docker image

## Deploy

Get started in minutes with one-click deployment:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/resend/resend-webhooks-ingester\&env=RESEND_WEBHOOK_SECRET\&envDescription=Your%20Resend%20webhook%20signing%20secret\&envLink=https://resend.com/webhooks)
[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/cd2lvJ?referralCode=w2CHHM\&utm_medium=integration\&utm_source=template\&utm_campaign=generic)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/resend/resend-webhooks-ingester)

Or use Docker:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
docker pull ghcr.io/resend/resend-webhooks-ingester
```

## Supported Databases

| Database    | Endpoint       | Best For                               |
| ----------- | -------------- | -------------------------------------- |
| Supabase    | `/supabase`    | Quick setup with managed Postgres      |
| Neon        | `/neon`        | Serverless Postgres with branching     |
| PostgreSQL  | `/postgresql`  | Self-hosted or managed Postgres        |
| MySQL       | `/mysql`       | Self-hosted or managed MySQL           |
| PlanetScale | `/planetscale` | Serverless MySQL                       |
| MongoDB     | `/mongodb`     | Document database (Atlas, self-hosted) |
| Snowflake   | `/snowflake`   | Data warehousing and analytics         |
| BigQuery    | `/bigquery`    | Google Cloud analytics                 |
| ClickHouse  | `/clickhouse`  | High-performance analytics             |

## Quick Start

````
```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
git clone https://github.com/resend/resend-webhooks-ingester.git
cd resend-webhooks-ingester
pnpm install
```



Copy the example environment file and add your credentials:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
cp .env.example .env.local
```

At minimum, you need:

```env .env.local theme={"theme":{"light":"github-light","dark":"vesper"}}
# Required: Your Resend webhook signing secret
RESEND_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxx

# Database credentials (example for PostgreSQL)
POSTGRESQL_URL=postgresql://user:password@host:5432/database
```


  Get your webhook signing secret from the [Resend
  Dashboard](https://resend.com/webhooks) when creating a webhook.




Set up your database and run the provided schema for your database. The ingester supports PostgreSQL, MySQL, MongoDB, and several data warehouses. Schema files can be found in the `schemas/` directory.

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
pnpm db:setup --postgresql
# or use a different flag for a different database
```



Deploy to your preferred platform, then register your webhook endpoint in the [Resend Dashboard](https://resend.com/webhooks) and select all the events you'd like to store.

Your endpoint URL will be: `https://your-domain.com/{connector}`

For example: `https://your-app.vercel.app/postgresql`
````

## Database Schemas

The ingester creates three tables to store webhook events:

| Table                | Description                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `resend_wh_emails`   | All email events (sent, delivered, bounced, opened, clicked, etc.) |
| `resend_wh_contacts` | Contact events (created, updated, deleted)                         |
| `resend_wh_domains`  | Domain events (created, updated, deleted)                          |

Each table includes:

- `svix_id` - Unique webhook event ID for idempotency
- `event_type` - The type of event (e.g., `email.delivered`)
- `event_created_at` - When the event occurred
- `webhook_received_at` - When the webhook was received
- Event-specific fields (email details, bounce info, click data, etc.)

## Idempotency

The ingester handles duplicate webhooks automatically. Each webhook includes a unique `svix-id` header, and the ingester uses this to ensure events are stored only once.

If Resend retries a webhook delivery (due to a temporary failure), the duplicate will be safely ignored without creating duplicate records in your database.

## Configuration Reference

### Required Environment Variables

| Variable                | Description                             |
| ----------------------- | --------------------------------------- |
| `RESEND_WEBHOOK_SECRET` | Your webhook signing secret from Resend |

### Database-Specific Variables

````
```env theme={"theme":{"light":"github-light","dark":"vesper"}}
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```



```env theme={"theme":{"light":"github-light","dark":"vesper"}}
NEON_DATABASE_URL=postgresql://user:password@ep-xyz.us-east-1.aws.neon.tech/database?sslmode=require
```



```env theme={"theme":{"light":"github-light","dark":"vesper"}}
POSTGRESQL_URL=postgresql://user:password@host:5432/database
```



```env theme={"theme":{"light":"github-light","dark":"vesper"}}
MYSQL_URL=mysql://user:password@host:3306/database
```



```env theme={"theme":{"light":"github-light","dark":"vesper"}}
PLANETSCALE_URL=mysql://username:password@host/database?ssl={"rejectUnauthorized":true}
```



```env theme={"theme":{"light":"github-light","dark":"vesper"}}
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
MONGODB_DATABASE=resend_webhooks
```



```env theme={"theme":{"light":"github-light","dark":"vesper"}}
SNOWFLAKE_ACCOUNT=your-account-identifier
SNOWFLAKE_USERNAME=your-username
SNOWFLAKE_PASSWORD=your-password
SNOWFLAKE_DATABASE=your-database
SNOWFLAKE_SCHEMA=your-schema
SNOWFLAKE_WAREHOUSE=your-warehouse
```



```env theme={"theme":{"light":"github-light","dark":"vesper"}}
BIGQUERY_PROJECT_ID=your-project-id
BIGQUERY_DATASET_ID=your-dataset-id
BIGQUERY_CREDENTIALS={"type":"service_account","project_id":"..."}
```



```env theme={"theme":{"light":"github-light","dark":"vesper"}}
CLICKHOUSE_URL=https://your-instance.clickhouse.cloud:8443
CLICKHOUSE_USERNAME=default
CLICKHOUSE_PASSWORD=your-password
CLICKHOUSE_DATABASE=default
```
````

## Example Queries

Once your data is stored, you can run analytics queries. Here's an example to get email status counts by day:

```sql PostgreSQL theme={"theme":{"light":"github-light","dark":"vesper"}}
SELECT
  DATE(event_created_at) AS day,
  event_type,
  COUNT(*) AS count
FROM resend_wh_emails
GROUP BY DATE(event_created_at), event_type
ORDER BY day DESC, event_type;
```

```javascript MongoDB theme={"theme":{"light":"github-light","dark":"vesper"}}
db.resend_wh_emails.aggregate([
  {
    $group: {
      _id: {
        day: {
          $dateToString: { format: '%Y-%m-%d', date: '$event_created_at' },
        },
        event_type: '$event_type',
      },
      count: { $sum: 1 },
    },
  },
  { $sort: { '_id.day': -1 } },
]);
```

```sql ClickHouse theme={"theme":{"light":"github-light","dark":"vesper"}}
SELECT
  toDate(event_created_at) AS day,
  event_type,
  count() AS count
FROM resend_wh_emails
FINAL
GROUP BY day, event_type
ORDER BY day DESC, event_type;
```

See the
[queries\_examples.md](https://github.com/resend/resend-webhooks-ingester/blob/main/queries_examples.md)
file in the repository for more analytics queries including bounce rates, open
rates, and click-through rates.

## Data Retention

By default, webhook events are stored indefinitely. To implement data retention policies, you can set up scheduled jobs to delete old events.

Example for PostgreSQL (delete events older than 90 days):

```sql theme={"theme":{"light":"github-light","dark":"vesper"}}
DELETE FROM resend_wh_emails
WHERE event_created_at < NOW() - INTERVAL '90 days';
```

For Supabase, use
[pg\_cron](https://supabase.com/docs/guides/database/extensions/pg_cron) to
schedule cleanup queries. For MongoDB, consider using [TTL
indexes](https://www.mongodb.com/docs/manual/core/index-ttl/) or [Atlas
scheduled
triggers](https://www.mongodb.com/docs/atlas/app-services/triggers/scheduled-triggers/).

## Troubleshooting

```
* Ensure `RESEND_WEBHOOK_SECRET` matches the signing secret in your Resend
  Dashboard - Make sure you're using the raw request body for verification -
  Check that the secret hasn't been rotated in Resend



* Verify your database credentials are correct - Check that the schema has
  been applied to your database - Ensure your database is accessible from your
  deployment (check firewall rules)



* Verify your endpoint URL is publicly accessible - Check the webhook status
  in your [Resend Dashboard](https://resend.com/webhooks) - Ensure your server
  responds with HTTP 200 for successful requests
```

## Learn More

```
View all available webhook event types and their payloads



Learn how webhook signature verification works



Understand webhook retry behavior



Learn why and how to store your webhook data
```
