## Response Speed

The Response Speed report helps you monitor the average response time for HTTP requests to the Realtime service over time. This metric is essential for understanding API performance, identifying latency issues, and ensuring your real-time features meet performance expectations.

The report displays the average response time in milliseconds, showing how quickly the Realtime service responds to HTTP requests throughout the selected time period. This includes response times for REST API requests such as broadcast messages, WebSocket upgrade requests, and other HTTP-based interactions. Higher response times can indicate performance bottlenecks, database load issues, or network problems that may impact the real-time responsiveness of your application.

\<Image
alt="Response Speed chart"
src={{
dark: '/docs/img/guides/platform/realtime/reports/response-speed-chart-dark.png',
light: '/docs/img/guides/platform/realtime/reports/response-speed-chart-light.png',
}}
width={4721}
height={834}
/>

### Actions you can take

| Action                    | Description                                                                                                                                         | More information                                                                                  |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Configure connection pool | Adjust the "Database connection pool size" setting to optimize database connection usage, which can improve response times for authorization checks | [Realtime Settings Guide](/docs/guides/realtime/settings)                                         |
| Check logs                | Investigate slow requests and identify specific endpoints or operations causing delays                                                              | [Realtime Logs Dashboard](/dashboard/project/_/database/realtime-logs)                            |
| Review request volume     | Correlate response times with request volume to identify performance degradation under load                                                         | [Total Requests Report](#total-requests)                                                          |
| Monitor database          | Review database resource utilization, connection counts, and query performance that may affect response times                                       | [Database Observability Dashboard](/dashboard/project/_/observability/database)                   |
| Review benchmarks         | Understand expected latency and throughput for different Realtime operations                                                                        | [Realtime Performance Benchmarks](/docs/guides/realtime/benchmarks)                               |
| Understand heartbeats     | Monitor heartbeat status and customize intervals to balance detection speed with network overhead                                                   | [Realtime Heartbeats Guide](/docs/troubleshooting/realtime-heartbeat-messages)                    |
| Optimize RLS policies     | If using private channels, optimize RLS policies that may be slowing down authorization checks                                                      | [RLS Performance Best Practices](/docs/troubleshooting/rls-performance-and-best-practices-Z5Jjwv) |
| Contact support           | Discuss performance optimization strategies or investigate persistent latency issues                                                                | [Support Portal](/dashboard/support/new)                                                          |

# Settings

Realtime Settings that allow you to configure your Realtime usage.

## Settings

All changes made in this screen will disconnect all your connected clients to ensure Realtime starts with the appropriate settings and all changes are stored in Supabase middleware.

\<Image
alt="Usage page navigation bar"
src={{
light: '/docs/img/guides/platform/realtime/realtime-settings--light.png',
dark: '/docs/img/guides/platform/realtime/realtime-settings--dark.png',
}}
width={4600}
height={2600}
/>

You can set the following settings using the Realtime Settings screen in your Dashboard:

- Enable Realtime service: Determines if the Realtime service is enabled or disabled for your project.
- Channel Restrictions: You can toggle this settings to set Realtime to allow public channels or set it to use only private channels with [Realtime Authorization](/docs/guides/realtime/authorization).
- Database connection pool size: Determines the number of connections used for Realtime Authorization RLS checking
  {/\* supa-mdx-lint-disable-next-line Rule004ExcludeWords \*/}
- Max concurrent clients: Determines the maximum number of clients that can be connected
- Max events per second: Determines the maximum number of events per second that can be sent
- Max presence events per second: Determines the maximum number of presence events per second that can be sent
- Max payload size in KB: Determines the maximum number of payload size in KB that can be sent
