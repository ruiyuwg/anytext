# Creating Analytics Buckets

Set up your first analytics bucket using the SDK or dashboard.

This feature is in **Private Alpha**. API stability and backward compatibility are not guaranteed at this stage. Request access through this [form](https://forms.supabase.com/analytics-buckets).

Analytics buckets use [Apache Iceberg](https://iceberg.apache.org/), an open-table format for efficient management of large analytical datasets. You can interact with analytics buckets using tools such as [PyIceberg](https://py.iceberg.apache.org/), [Apache Spark](https://spark.apache.org/), or any client supporting the [Iceberg REST Catalog API](https://editor-next.swagger.io/?url=https://raw.githubusercontent.com/apache/iceberg/main/open-api/rest-catalog-open-api.yaml).

## Creating an Analytics bucket

You can create an analytics bucket using either the Supabase SDK or the Supabase Dashboard.

### Using the Supabase SDK

````
```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://your-project.supabase.co', 'your-service-key')

const { data, error } = await supabase.storage.analytics.createBucket('analytics-data')

if (error) {
  console.error('Failed to create analytics bucket:', error)
} else {
  console.log('Analytics bucket created:', data)
}
```



```python
from supabase import create_client

supabase = create_client('https://your-project.supabase.co', 'your-service-key')

response = supabase.storage.analytics().create('analytics-data')

print('Analytics bucket created:', response)
```
````

### Using the Supabase Dashboard

1. Navigate to the **Storage** section in the Supabase Dashboard.
2. Click **Create Bucket**.
3. Enter a name for your bucket (e.g., `my-analytics-bucket`).
4. Select **Analytics Bucket** as the bucket type.
5. Click **Create**.

## Next steps

Once you've created your analytics bucket, you can:

- [Connect with Iceberg clients](/docs/guides/storage/analytics/connecting-to-analytics-bucket) like PyIceberg or Apache Spark
- [Set up real-time replication](/docs/guides/storage/analytics/replication) from your Postgres database
- [Query data with Postgres](/docs/guides/storage/analytics/query-with-postgres) using the Iceberg Foreign Data Wrapper

# Analytics Buckets

Store large datasets for analytics and reporting.

Expect rapid changes, limited features, and possible breaking updates. [share feedback](https://github.com/orgs/supabase/discussions/40116) as we refine the experience and expand access.

Analytics buckets enable analytical workflows on large-scale datasets while keeping your primary database optimized for transactional operations.

## Why Analytics buckets?

Postgres tables are purpose-built for transactional workloads with frequent inserts, updates, deletes, and low-latency queries. Analytical workloads have fundamentally different requirements:

- Processing large volumes of historical data
- Running complex queries and aggregations
- Minimizing storage costs
- Preventing analytical queries from impacting production traffic

Analytics buckets address these requirements using [Apache Iceberg](https://iceberg.apache.org/), an open-table format specifically designed for efficient management of large analytical datasets.

## Ideal use cases

Analytics buckets are perfect for:

- **Data warehousing and business intelligence** - Build scalable data warehouses for BI tools
- **Historical data archiving** - Retain large volumes of historical data cost-effectively
- **Periodically refreshed analytics** - Maintain near real-time analytical views
- **Complex analytical queries** - Execute sophisticated aggregations and joins over large datasets

By separating transactional and analytical workloads, Supabase lets you build scalable analytics pipelines without compromising your primary Postgres performance.

# Analytics Buckets Limits

Expect rapid changes, limited features, and possible breaking updates. [share feedback](https://github.com/orgs/supabase/discussions/40116) as we refine the experience and expand access.

The following default limits are applied when this feature is in the alpha stage, they can be adjusted on a case-by-case basis:

| **Category**                            | **Limit** |
| --------------------------------------- | --------- |
| Number of analytics buckets per project | 2         |
| Number of namespaces per bucket         | 10        |
| Number of tables per namespace          | 10        |

# Analytics Buckets Pricing

Expect rapid changes, limited features, and possible breaking updates. [share feedback](https://github.com/orgs/supabase/discussions/40116) as we refine the experience and expand access.

Analytics buckets are **free** to use during the alpha phase. You will still be charged for the underlying egress.

# Query with PostgreSQL

Query analytics bucket data directly from PostgreSQL using SQL.

Once your data flows into an analytics bucket—either via the [Replication Pipeline](/docs/guides/storage/analytics/replication) or custom pipelines—you can query it directly from Postgres using standard SQL.

This is made possible by the [Iceberg Foreign Data Wrapper](/docs/guides/database/extensions/wrappers/iceberg), which creates a bridge between your Postgres database and Iceberg tables.

## Setup overview

You have two options to enable querying:

1. **Dashboard UI** (recommended) - Streamlined setup through the Supabase Dashboard
2. **Manual installation** - Install the wrapper using SQL and configuration

## Installing via Dashboard UI

The dashboard provides the easiest setup experience:

1. Navigate to your **Analytics Bucket** page in the Supabase Dashboard.

2. Locate the namespace you want to query and click **Query with Postgres**.

3. Enter the **Postgres schema** where you want to create the foreign tables.

4. Click **Connect**. The wrapper is now configured.

## Querying your data

Once the foreign data wrapper is installed, you can query your Iceberg tables using standard SQL:

```sql
select *
from schema_name.table_name
limit 100;
```

### Common query examples

Get the latest events:

```sql
select event_id, event_name, event_timestamp
from analytics.events
order by event_timestamp desc
limit 1000;
```

Join with transactional data:

```sql
SELECT
  e.event_id,
  e.event_name,
  u.user_email
FROM analytics.events e
JOIN public.users u ON e.user_id = u.id
WHERE e.event_timestamp > NOW() - INTERVAL '7 days'
LIMIT 100;
```

## Manual installation

For advanced use cases, you can manually install and configure the Iceberg Foreign Data Wrapper. See the [Iceberg Foreign Data Wrapper documentation](/docs/guides/database/extensions/wrappers/iceberg) for detailed instructions.
