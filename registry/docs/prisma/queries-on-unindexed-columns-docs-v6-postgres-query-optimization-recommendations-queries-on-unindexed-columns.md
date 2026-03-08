# Queries on unindexed columns (/docs/v6/postgres/query-optimization/recommendations/queries-on-unindexed-columns)

Optimize provides recommendations to help you identify and resolve performance issues caused by missing database indexes.

The following queries targeting the `User` model use a [`where` property](/v6/orm/prisma-client/queries/filtering-and-sorting) to filter on columns that do not have indexes:

```ts
await prisma.user.findFirst({
  where: {
    name: "Marc",
  },
});

await prisma.user.findFirst({
  where: {
    name: "Jon",
  },
});

await prisma.user.count({
  where: {
    name: "Nikolas",
  },
});
```

What is the problem? \[#what-is-the-problem]

An index allows the database to retrieve data more quickly, similar to how an index in a book helps you locate information without reading every page.

When using Prisma with a `where` property, if no indexes are defined for the relevant columns, the database may need to scan every row in the table (a *“full table scan”*) to find matches. This can be undesirable for several reasons:

User experience \[#user-experience]

For large datasets, if the database must scan the entire table to find matching rows, users will experience longer waiting times.

Resource utilization \[#resource-utilization]

- **High CPU usage:** Scanning large tables can significantly increase CPU usage, degrading overall system performance.
- **Memory consumption:** More memory is required to process and store data during a full table scan.
- **Disk I/O:** Full table scans increase disk input/output operations, potentially slowing down other database activities.

  While these issues might not appear in development due to smaller datasets, they can become *significant* problems in production, where datasets are typically much larger.

More on database indexes \[#more-on-database-indexes]

How indexes work \[#how-indexes-work]

Indexes create a data structure that stores the indexed column's values along with pointers to the corresponding rows in the table. When you query the database using an indexed column, the database can use this index to quickly locate the relevant rows instead of scanning the entire table.

The trade-offs of indexing \[#the-trade-offs-of-indexing]

- **Space vs. time:** Indexing requires additional storage space to save index data, but it significantly speeds up data retrieval.
- **Update overhead:** Every time data is added to, updated in, or removed from your table, there is an overhead to keep the indexes up to date, which can slow down write operations.

When to use indexes \[#when-to-use-indexes]

- **Large datasets:** Indexes are particularly beneficial for tables with a large number of rows.
- **Frequent queries with filtering or sorting:** Use indexes on columns that are frequently used for [filtering or sorting](/v6/orm/prisma-client/queries/filtering-and-sorting#filtering).
- **Looking up related data:** Use indexes on foreign key columns to speed up the retrieval of related records, such as when using [`include`](/v6/orm/prisma-client/queries/relation-queries#include-a-relation).

When not to use indexes \[#when-not-to-use-indexes]

- **Small tables:** For tables with very few rows, the overhead of maintaining indexes might not be worth the performance gain.
- **Write-heavy tables:** Indexes can slow down write operations (`create`, `update`, `delete`) because the index needs to be updated as well. Avoid excessive indexing on models with frequent write operations.
- **Infrequently accessed tables:** If a table is rarely accessed, the benefits of indexing may not justify the overhead.
- **Columns with large data:** Indexing columns with large data can lead to higher storage requirements and might not provide significant performance improvements.
- **Rarely filtered columns:** If a table is often accessed but rarely filtered by a specific column, creating an index on that column may not be beneficial.

  Even if you index a column, the database may not always use it. Many database management systems, such as PostgreSQL and MySQL, have a *query optimizer* that evaluates multiple execution plans and selects the one it estimates to be most efficient. In some cases, this may involve ignoring an existing index in favor of a different execution plan that it determines will perform better for that specific query.

# Repeated query (/docs/v6/postgres/query-optimization/recommendations/repeated-query)

Optimize provides recommendations to help you identify and resolve performance issues caused by repeated queries.

The following query targeting the `Post` model is executed repeatedly with identical parameters:

```ts
await prisma.post.findMany({
  where: {
    published: true,
  },
  take: 20,
});
```

What is the problem? \[#what-is-the-problem]

When the same query is executed multiple times with the same parameters within a short time frame, it can lead to:

- **Time waste:** A new connection may be established between the application and database, the query and its parameters are sent to the database, the database processes the query, and the results are sent back to the application.
- **Increased resource usage:** Query execution increases CPU and memory usage, as well as disk I/O, putting strain on your database's system resources.
- **Higher costs:** In serverless database pricing models, higher resource usage can result in increased costs.

# Overfetching (/docs/v6/postgres/query-optimization/recommendations/select-returning)

Optimize provides recommendations to help you identify and resolve performance issues caused by over-fetched data.

The following query might be overfetching data in queries on the `User` model:

```ts
await prisma.user.findMany({
  where: {
    email: { contains: "gmail" },
  },
  include: {
    links: true,
  },
});
```

What is the problem? \[#what-is-the-problem]

Retrieving data from all columns of a table, especially in large tables or those with complex relationships, can result in:

- **Increased load times**: Fetching more data than necessary prolongs query processing and data transfer times.
- **Greater resource consumption**: Retrieving unnecessary fields places strain on memory and CPU resources, both in the database and on the machines running your application.
- **Higher costs**: Reading and transferring excess data can lead to increased processing costs.
- **Security risks**: You might unintentionally expose sensitive data that should remain within the database.

# Storing large objects or BLOBs in the database (/docs/v6/postgres/query-optimization/recommendations/storing-blob-in-database)

Optimize provides recommendations to help identify and resolve performance issues caused by storing large objects in the database. It also suggests alternative approaches to mitigate these challenges.

The following model uses the `Bytes` type:

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String?
  // Storing raw image data directly in the database
  avatarBytes Bytes?
}
```

What is the problem? \[#what-is-the-problem]

Storing large binary objects (such as images) in the database can lead to several challenges:

- **Excessive storage usage**: Large objects occupy significant space in the database, complicating management.
- **Increased I/O load**: Handling large objects adds strain to the database's input/output operations.
- **Slower query performance**: Most traditional databases are not optimized for efficiently serving large binary content, resulting in performance degradation during queries or updates.

Moreover, storing large objects directly in the database can cause backups to become disproportionately large, increasing the time required for restoration processes. Serving these files through the database also creates a performance bottleneck, particularly under high traffic or frequent access scenarios.

# Unnecessary indexes (/docs/v6/postgres/query-optimization/recommendations/unnecessary-indexes)

Optimize detects unnecessary indexes and recommends removing them to improve database performance.

Why this is a problem \[#why-this-is-a-problem]

Indexes enhance database query performance but can harm efficiency when overused. They consume storage and add overhead to `INSERT`, `UPDATE`, and `DELETE` operations. Unnecessary indexes can result in:

- **Increased write costs:** Extra indexes slow down write operations.
- **Higher storage use:** Unused indexes waste storage space.
- **Query optimizer confusion:** Redundant indexes may cause inefficient query plans.

Removing unnecessary indexes improves performance and simplifies maintenance.
