## Broadcast From Database Replication Lag

The Broadcast from Database Replication Lag report helps you monitor the median time between when a message is committed to your database and when it's broadcast to Realtime clients. This metric is essential for understanding the latency introduced by the database replication process when using broadcast from database.

The report displays the median replication lag in milliseconds, showing the delay between database commit and broadcast throughout the selected time period. When you use broadcast from database (by inserting messages into `realtime.messages`), Realtime reads changes from the Write-Ahead Log (WAL) using logical replication. The lag represents the time it takes for these changes to be processed and broadcast to subscribed clients. Higher lag values indicate delays in the replication pipeline, which can impact the real-time responsiveness of your application.

\<Image
alt="Broadcast from Database Replication Lag chart"
src={{
dark: '/docs/img/guides/platform/realtime/reports/broadcast-from-database-replication-lag-chart-dark.png',
light:
'/docs/img/guides/platform/realtime/reports/broadcast-from-database-replication-lag-chart-light.png',
}}
width={2343}
height={625}
/>

### Actions you can take

| Action                     | Description                                                                                                 | More information                                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Check logs                 | Investigate replication errors or performance issues in your project dashboard                              | [Realtime Logs Dashboard](/dashboard/project/_/database/realtime-logs)                                         |
| Monitor database           | Review database resource utilization, connection counts, and query performance that may affect replication  | [Database Observability Dashboard](/dashboard/project/_/observability/database)                                |
| Review replication metrics | Use `pg_stat_subscription`, `pg_replication_slots`, and other Postgres views to diagnose replication issues | [Manual Replication Monitoring Guide](/docs/guides/database/replication/manual-replication-monitoring)         |
| Debug database issues      | Use CLI inspection tools to identify bloat, lock contention, and long-running queries affecting replication | [Database Inspection Tools Guide](/docs/guides/database/inspect)                                               |
| Optimize performance       | Optimize query performance and connection management to reduce database load                                | [Performance Tuning Guide](/docs/guides/platform/performance)                                                  |
| Configure timeouts         | Configure statement timeouts to prevent long-running transactions from blocking replication                 | [Database Timeouts Guide](/docs/guides/database/postgres/timeouts)                                             |
| Learn broadcast from DB    | Understand how broadcast from database works and best practices for implementation                          | [Broadcast from Database Guide](/docs/guides/realtime/broadcast#trigger-broadcast-messages-from-your-database) |
| Contact support            | Discuss replication lag issues or request assistance with database performance optimization                 | [Support Portal](/dashboard/support/new)                                                                       |
