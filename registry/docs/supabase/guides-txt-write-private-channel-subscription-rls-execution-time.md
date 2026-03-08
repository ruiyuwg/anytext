## (Write) Private Channel Subscription RLS Execution Time

The (Write)Private Channel Subscription RLS Execution Time report helps you monitor the median time it takes to execute Row Level Security (RLS) policies when users publish messages to private channels. This metric is essential for understanding how RLS policy complexity impacts message publishing latency and overall broadcast performance.

The report displays the median RLS execution time in milliseconds, showing how long it takes to validate user permissions when publishing to private channels throughout the selected time period. When a user sends a broadcast message to a private channel, Realtime checks RLS policies on the `realtime.messages` table to determine if the user has write (INSERT) access. This authorization check happens for the first message sent and then it's cached. Complex RLS policies with joins, function calls, or missing indexes can significantly increase first message publishing latency.

\<Image
alt="(Write) Private Channel Subscription RLS Execution Time chart"
src={{
dark: '/docs/img/guides/platform/realtime/reports/write-private-channel-subscription-rls-execution-time-chart-dark.png',
light:
'/docs/img/guides/platform/realtime/reports/write-private-channel-subscription-rls-execution-time-chart-light.png',
}}
width={2343}
height={625}
/>

### Actions you can take

| Action                     | Description                                                                                                                                                                                          | More information                                                                                  |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Configure connection pool  | Adjust the "Database connection pool size" setting to increase the number of connections available for RLS authorization checks, which can improve performance for high-frequency message publishing | [Realtime Settings Guide](/docs/guides/realtime/settings)                                         |
| Optimize RLS policies      | Learn how to optimize RLS policies with indexes, function wrapping, and query optimization techniques                                                                                                | [RLS Performance Best Practices](/docs/troubleshooting/rls-performance-and-best-practices-Z5Jjwv) |
| Check logs                 | Investigate RLS authorization errors or timeout issues when publishing messages in your project dashboard                                                                                            | [Realtime Logs Dashboard](/dashboard/project/_/database/realtime-logs)                            |
| Learn authorization basics | Understand how RLS policies work with private channels for write operations and best practices for implementation                                                                                    | [Realtime Authorization Guide](/docs/guides/realtime/authorization)                               |
| Create indexes             | Add indexes on columns used in INSERT policies to speed up write authorization checks                                                                                                                | [Database Indexes Guide](/docs/guides/database/postgres/indexes)                                  |
| Use index advisor          | Automatically detect missing indexes that could improve write RLS policy performance                                                                                                                 | [Index Advisor Extension Guide](/docs/guides/database/extensions/index_advisor)                   |
| Optimize queries           | Learn techniques for optimizing INSERT policy queries including partial indexes for specific conditions                                                                                              | [Query Optimization Guide](/docs/guides/database/query-optimization)                              |
| Monitor database           | Review database query performance and identify slow queries that may be affecting write RLS execution                                                                                                | [Database Observability Dashboard](/dashboard/project/_/observability/database)                   |
| Contact support            | Discuss RLS optimization strategies or get assistance with complex authorization requirements for high-frequency messaging                                                                           | [Support Portal](/dashboard/support/new)                                                          |
