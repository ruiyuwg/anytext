# Known limitations about Prisma Optimize (/docs/v6/optimize/known-limitations)

Below are the known limitations when using Prisma Optimize. If you are aware of any limitations that are missing, please let us know on the `#help-and-questions` channel in our community [Discord](https://pris.ly/discord?utm_source=docs\&utm_medium=intro_text).

Query limit on a recording session \[#query-limit-on-a-recording-session]

Each [recording session](/v6/postgres/query-optimization/recordings) can contain a maximum of 10,000 queries. Once this limit is reached, the recording session will end.

Recording limit per workspace \[#recording-limit-per-workspace]

Each [workspace](/v6/platform/about#workspace) can contain a maximum of 100 [recordings](/v6/postgres/query-optimization/recordings).

Scope and constraints for the Prisma AI \[#scope-and-constraints-for-the-prisma-ai]

While [Prisma AI](/v6/postgres/query-optimization/prisma-ai) can provide helpful guidance to implement a [recommendation](/v6/postgres/query-optimization/recommendations), there are some important limitations to keep in mind:

- **Information and accuracy**: The AI provides advice based on a broad, general knowledge base and does not have direct access to Prisma ORM documentation. This may occasionally result in inaccuracies or outdated information.

- **Limited context and adaptation**: The AI does not persist conversations or learn from previous interactions. Its responses are generalized and may not always address the specific needs of advanced users.

- **Static knowledge and scope**: The AI's knowledge is static and may not include recent updates or best practices after a certain date. It provides advice only within the context of Prisma ORM and cannot modify or execute code, nor interact directly with user environments.

Using Prisma Accelerate client extension with the Optimize extension \[#using-prisma-accelerate-client-extension-with-the-optimize-extension]

When using the [Optimize client extension](https://www.npmjs.com/package/@prisma/extension-optimize) with the [Accelerate client extension](https://www.npmjs.com/package/@prisma/extension-accelerate), ensure the Accelerate client extension is added last to your extended `PrismaClient`. This allows cacheable operations to be received by Optimize.

```ts
const prisma = new PrismaClient()
  .$extends(
    withOptimize({
      apiKey: process.env.OPTIMIZE_API_KEY,
    }),
  )
  .$extends(withAccelerate());
```

SQL references in MongoDB recommendations \[#sql-references-in-mongodb-recommendations]

Prisma Optimize provides helpful recommendations for MongoDB users, though some explanations from [Prisma AI](/v6/postgres/query-optimization/prisma-ai) may reference SQL-specific concepts. However, the [recommendations](/v6/postgres/query-optimization/recommendations) remain useful and applicable to MongoDB environments.

Raw query visibility in MongoDB \[#raw-query-visibility-in-mongodb]

Raw queries are visible in MongoDB, though the parameters passed to them are not displayed.

Driver adapter compatibility \[#driver-adapter-compatibility]

Prisma Optimize is not yet compatible with [driver adapters](/v6/orm/overview/databases/database-drivers#driver-adapters). However, as a workaround, you can run your queries locally using the regular Prisma Client along with Prisma Optimize to inspect and improve query performance.

# Performance metrics (/docs/v6/optimize/performance-metrics)

An Optimize recording session provides detailed insights into the latencies of executed queries, capturing key metrics such as average duration, 50th percentile, 99th percentile, and maximal query execution time.

Learn more about [the performance metrics captured by Optimize here](/v6/postgres/query-optimization/performance-metrics).

# Prisma AI (/docs/v6/optimize/prisma-ai)

Prisma AI enables you to ask follow-up questions on a provided [recommendation](/v6/postgres/query-optimization/recommendations) for additional clarity. Learn more about [Prisma AI here](/v6/postgres/query-optimization/prisma-ai).

# Recommendations (/docs/v6/optimize/recommendations)

Optimize provides recommendations focused on performance improvements such as indexing issues, excessive data retrieval, and inefficient query patterns. Recommendations include:

- [Excessive number of rows returned](/v6/postgres/query-optimization/recommendations/excessive-number-of-rows-returned)
- [Full table scans caused by LIKE operations](/v6/postgres/query-optimization/recommendations/full-table-scans-caused-by-like-operations)
- [Queries on unindexed columns](/v6/postgres/query-optimization/recommendations/queries-on-unindexed-columns)
- [Repeated query](/v6/postgres/query-optimization/recommendations/repeated-query)
- [Overfetching](/v6/postgres/query-optimization/recommendations/select-returning)
- [Using `@db.Money`](/v6/postgres/query-optimization/recommendations/avoid-db-money)
- [Using `@db.Char(n)`](/v6/postgres/query-optimization/recommendations/avoid-char)
- [Using `@db.VarChar(n)`](/v6/postgres/query-optimization/recommendations/avoid-varchar)
- [Using `timestamp(0)` or `timestamptz(0)`](/v6/postgres/query-optimization/recommendations/avoid-timestamp-timestampz-0)
- [Using `CURRENT_TIME`](/v6/postgres/query-optimization/recommendations/current-time)
- [Storing large objects or BLOBs in the database](/v6/postgres/query-optimization/recommendations/storing-blob-in-database)
- [Indexing on unique columns](/v6/postgres/query-optimization/recommendations/indexing-on-unique-columns)
- [Long-running transactions](/v6/postgres/query-optimization/recommendations/long-running-transactions)
- [Unnecessary indexes](/v6/postgres/query-optimization/recommendations/unnecessary-indexes)

Learn more about the [recommendations generated by Optimize here](/v6/postgres/query-optimization/recommendations).

# Recordings in Prisma Optimize (/docs/v6/optimize/recordings)

The recordings feature helps developers debug and isolate sets of queries into distinct sessions, known as recordings. This targeted approach enables precise performance analysis and optimization by preventing the mixing of queries from different applications or test rounds, leading to clearer insights and more effective debugging.

Learn more about the [Optimize recordings here](/v6/postgres/query-optimization/recommendations).

# ORM (/docs/v6/orm)

[Prisma ORM](https://github.com/prisma/prisma) is a Node.js and TypeScript ORM with an intuitive data model, automated migrations, type-safety, and auto-completion.

Getting started \[#getting-started]

- [Getting Started](/v6/orm/getting-started) - Set up Prisma ORM in your project
- [Prisma Client](/v6/orm/prisma-client/setup-and-configuration/introduction) - Type-safe database client
- [Prisma Schema](/v6/orm/prisma-schema/overview) - Define your data model
