## (Read) Private Channel Subscription RLS Execution Time

The (Read) Private Channel Subscription RLS Execution Time report helps you monitor the median time it takes to execute Row Level Security (RLS) policies when users subscribe to private channels. This metric is essential for understanding how RLS policy complexity impacts channel join latency and overall connection performance.

The report displays the median RLS execution time in milliseconds, showing how long it takes to validate user permissions when subscribing to private channels throughout the selected time period. When a user joins a private channel, Realtime checks RLS policies on the `realtime.messages` table to determine if the user has read access. This authorization check happens once per channel subscription and the result is cached for the duration of the connection. However, complex RLS policies with joins, function calls, or missing indexes can significantly increase this initial connection time.

\<Image
alt="(Read) Private Channel Subscription RLS Execution Time chart"
src={{
dark: '/docs/img/guides/platform/realtime/reports/read-private-channel-subscription-rls-execution-time-chart-dark.png',
light:
'/docs/img/guides/platform/realtime/reports/read-private-channel-subscription-rls-execution-time-chart-light.png',
}}
width={2343}
height={625}
/>

### Actions you can take

| Action                     | Description                                                                                                                                                                                          | More information                                                                                  |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Configure connection pool  | Adjust the "Database connection pool size" setting to increase the number of connections available for RLS authorization checks, which can improve performance for high-volume channel subscriptions | [Realtime Settings Guide](/docs/guides/realtime/settings)                                         |
| Optimize RLS policies      | Learn how to optimize RLS policies with indexes, function wrapping, and query optimization techniques                                                                                                | [RLS Performance Best Practices](/docs/troubleshooting/rls-performance-and-best-practices-Z5Jjwv) |
| Check logs                 | Investigate RLS authorization errors or timeout issues in your project dashboard                                                                                                                     | [Realtime Logs Dashboard](/dashboard/project/_/database/realtime-logs)                            |
| Learn authorization basics | Understand how RLS policies work with private channels and best practices for implementation                                                                                                         | [Realtime Authorization Guide](/docs/guides/realtime/authorization)                               |
| Create indexes             | Add indexes on columns frequently used in RLS policy conditions to speed up authorization checks                                                                                                     | [Database Indexes Guide](/docs/guides/database/postgres/indexes)                                  |
| Use index advisor          | Automatically detect missing indexes that could improve RLS policy performance                                                                                                                       | [Index Advisor Extension Guide](/docs/guides/database/extensions/index_advisor)                   |
| Optimize queries           | Learn techniques for optimizing queries including partial indexes and composite indexes for RLS conditions                                                                                           | [Query Optimization Guide](/docs/guides/database/query-optimization)                              |
| Monitor database           | Review database query performance and identify slow queries that may be affecting RLS execution                                                                                                      | [Database Observability Dashboard](/dashboard/project/_/observability/database)                   |
| Contact support            | Discuss RLS optimization strategies or get assistance with complex authorization requirements                                                                                                        | [Support Portal](/dashboard/support/new)                                                          |
