## Postgres Changes Events

The Postgres Changes Events report helps you monitor the volume of database change events (INSERT, UPDATE, DELETE) sent to your Realtime clients over time. This metric is essential for understanding how your application processes database changes and identifying potential performance bottlenecks or scaling issues.

The report displays the total number of Postgres change events received by clients, showing database change activity throughout the selected time period. Postgres Changes use logical replication to stream database changes from the Write-Ahead Log (WAL) to subscribed clients. Each event represents a database change that has been broadcast to clients subscribed to the relevant schema and table. Note that Postgres Changes process changes on a single thread to maintain order, which can create bottlenecks at scale compared to Broadcast.

\<Image
alt="Postgres Changes Events chart"
src={{
dark: '/docs/img/guides/platform/realtime/reports/postgres-changes-events-chart-dark.png',
light: '/docs/img/guides/platform/realtime/reports/postgres-changes-events-chart-light.png',
}}
width={2343}
height={625}
/>

### Actions you can take

| Action                   | Description                                                                                           | More information                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Review quotas            | Understand Postgres change payload size limits (1,024 KB for all plans) and message throughput limits | [Realtime Quotas Reference](/docs/guides/realtime/quotas)                                |
| Check logs               | Investigate Postgres Changes errors or performance issues in your project dashboard                   | [Realtime Logs Dashboard](/dashboard/project/_/database/realtime-logs)                   |
| Learn Postgres Changes   | Understand limitations and best practices for using Postgres Changes                                  | [Postgres Changes Guide](/docs/guides/realtime/postgres-changes)                         |
| Migrate to Broadcast     | For better scalability, consider using Broadcast with database triggers instead of Postgres Changes   | [Broadcast Guide](/docs/guides/realtime/broadcast)                                       |
| Create database triggers | Understand how to create triggers that can send Broadcast messages on database events                 | [Database Triggers Guide](/docs/guides/database/postgres/triggers)                       |
| Monitor replication      | Monitor logical replication health and lag since Postgres Changes reads from the WAL                  | [Replication Monitoring Guide](/docs/guides/database/replication/replication-monitoring) |
| Contact support          | Discuss scaling strategies or custom solutions for high-volume database change subscriptions          | [Support Portal](/dashboard/support/new)                                                 |
