# Creating Analytics Buckets

Set up your first analytics bucket using the SDK or dashboard.

This feature is in **Private Alpha**. API stability and backward compatibility are not guaranteed at this stage. Request access through this [form](https://forms.supabase.com/analytics-buckets).

Analytics buckets use [Apache Iceberg](https://iceberg.apache.org/), an open-table format for efficient management of large analytical datasets. You can interact with analytics buckets using tools such as [PyIceberg](https://py.iceberg.apache.org/), [Apache Spark](https://spark.apache.org/), or any client supporting the [Iceberg REST Catalog API](https://editor-next.swagger.io/?url=https://raw.githubusercontent.com/apache/iceberg/main/open-api/rest-catalog-open-api.yaml).

Analytics Buckets are still available, but managed replication into Analytics Buckets through Supabase ETL is no longer supported. If you need managed replication today, use [Database Replication](/docs/guides/database/replication/replication-setup) with **BigQuery**. If you want to use Analytics Buckets, bring your own ingestion pipeline.

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
