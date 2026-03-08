# Overview on Prisma Postgres (/docs/v6/postgres/introduction/overview)

[Prisma Postgres](https://www.prisma.io/postgres?utm_source=docs) is a managed PostgreSQL database service that easily lets you create a new database, interact with it through Prisma ORM, and build applications that start small and cheap but can scale to millions of users.

It supports the following workflows:

- Schema migrations and queries (via [Prisma ORM](https://www.prisma.io/orm) or any other ORM/database library)
- Connection pooling and caching
- Local database workflows via [`prisma dev`](/v6/postgres/database/local-development)

Usage metrics \[#usage-metrics]

You can view the following usage metrics in your Console Dashboard:

- Key metrics
  - Estimated upcoming invoice
  - Total storage used
  - Total DBs
- Overall usage
  - Cumulative operations
  - Operations per day

For details into individual databases in your workspace, each database has it's own metrics report
as well. You can view the following:

- Average response size
- Average query duration
- Total egress
- Total operations
- Cache utilization

Billing \[#billing]

Usage-based pricing \[#usage-based-pricing]

Prisma Postgres charges for:

- number of operations
- storage (in GiB)

An *operation* is counted each time you perform a create, read, update, or delete, regardless of how simple or complex the underlying SQL is. Whether it's a single-row lookup or complex JOIN query, it still counts as one operation and costs the same. Read our blog post on [operations-based billing](https://www.prisma.io/blog/operations-based-billing?utm_source=docs) for more details.

By treating every operation equally, you don't have to worry about write-heavy workloads driving up your bill or high-bandwidth requests ballooning costs unexpectedly. You can [directly correlate your database costs to real product usage and user behavior](/v6/postgres/faq#is-there-a-sample-workload-to-estimate-my-expected-charges), making forecasting and budgeting simple and predictable.

Learn more on our [pricing page](https://www.prisma.io/pricing).

Spend limits \[#spend-limits]

Prisma Postgres allows you to set limits to ensure you never get a surprise bill. You'll receive alerts when you reach 75% of your set limit, and if you reach 100%, your database will be paused. This ensures you'll never have an unexpected bill, and you can always be in complete control of your spending.
Spend limits are available on the Pro plan and higher. Please note that the spend limit must be set higher than the base cost of the selected plan. For example, if you're on the Pro plan, your spend limit should exceed the base plan cost of $49.

Restarting your database when changing your subscription \[#restarting-your-database-when-changing-your-subscription]

When changing your subscription from Free to Starter/Pro/Business or from Starter/Pro/Business to Free, your database instance is being restarted. This may cause a downtime of ~1second.

<CalloutContainer type="info">
  <CalloutDescription>
    This is temporary. In the future, there won't be any downtime when up- or downgrading a plan.
  </CalloutDescription>
</CalloutContainer>

Technical details \[#technical-details]

PostgreSQL version \[#postgresql-version]

Prisma Postgres is based **PostgreSQL v17**.

Architecture \[#architecture]

Prisma Postgres uses a unique architecture to deliver unmatched efficiency, safety and ease of use. It is deployed on bare metal servers using unikernels (think: "hyper-specialized operating systems").

Learn more about the architecture in this article: [Prisma Postgres®: Building a Modern PostgreSQL Service Using Unikernels & MicroVMs](https://pris.ly/ppg-early-access?utm_source=docs).

# Query optimization for Prisma Postgres (/docs/v6/postgres/query-optimization)

Understand how Prisma Postgres helps you optimize query performance using the Prisma Optimize toolkit. This section covers setup, recommendations, recording queries, performance metrics, and using Prisma AI for guided improvements.

Getting started \[#getting-started]

- [Setup](/v6/postgres/query-optimization/setup) - Learn how to quickly set up and start optimizing Prisma Postgres queries
- [Recommendations](/v6/postgres/query-optimization/recommendations) - Learn about the recommendations provided by Optimize
- [Prisma AI](/v6/postgres/query-optimization/prisma-ai) - Learn about using Optimize's Prisma AI feature

# Performance metrics (/docs/v6/postgres/query-optimization/performance-metrics)

An Optimize recording session provides detailed insights into the latencies of executed queries, capturing key metrics such as average duration, 50th percentile, 99th percentile, and maximal query execution time.

Total query durations \[#total-query-durations]

Prisma Optimize measures total latency for query patterns, enabling you to analyze and debug slow queries effectively.

Average query duration (AVG) \[#average-query-duration-avg]

The average query duration reveals the mean execution time across all queries, helping you assess overall performance trends and identify inefficiencies that impact the user experience.

50th percentile (P50) \[#50th-percentile-p50]

The 50th percentile, or median, query duration indicates the time within which half of your queries complete. This metric offers a clear view of typical user performance, unaffected by outliers.

99th percentile (P99) \[#99th-percentile-p99]

The 99th percentile query duration highlights the execution time for the slowest 1% of queries. This metric is crucial for uncovering and addressing performance bottlenecks that, while infrequent, can significantly impact user satisfaction.

Maximal query duration (MAX) \[#maximal-query-duration-max]

The maximal query duration measures the time taken by the single slowest query. This metric helps identify extreme cases, providing insights into the worst performance scenarios your system might face, so you can diagnose and resolve outliers.

# Query optimization with Prisma AI (/docs/v6/postgres/query-optimization/prisma-ai)

Prisma AI enables you to ask follow-up questions on a provided [recommendation](/v6/postgres/query-optimization/recommendations) for additional clarity.

Using the Prisma AI \[#using-the-prisma-ai]

To interact with the Prisma AI:

1. Select a recommendation from an Optimize [recording](/v6/postgres/query-optimization/recordings).
2. Click the **Ask AI** button.

Prisma AI helps you gain deeper insights into a recommendation and learn how to apply it effectively to your Prisma model.
