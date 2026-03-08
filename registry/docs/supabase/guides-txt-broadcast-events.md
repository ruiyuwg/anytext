## Broadcast Events

The Broadcast Events report helps you monitor the volume of broadcast messages sent through your Realtime channels over time. This metric is essential for understanding your application's real-time messaging patterns and identifying when you're approaching your plan's message throughput limits.

The report displays the total number of broadcast events sent by clients, showing message volume throughout the selected time period. Broadcast events are low-latency messages sent between users using Realtime's pub/sub pattern, which can be sent from client libraries, REST APIs, or directly from your database. Each event represents a message broadcast to subscribers of a specific channel topic.

\<Image
alt="Broadcast Events chart"
src={{
dark: '/docs/img/guides/platform/realtime/reports/broadcast-events-chart-dark.png',
light: '/docs/img/guides/platform/realtime/reports/broadcast-events-chart-light.png',
}}
width={2343}
height={625}
/>

### Actions you can take

| Action                 | Description                                                                                                                                                          | More information                                                                       |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Configure event limits | Adjust "Max events per second" and "Max payload size in KB" settings to optimize broadcast throughput and message size limits                                        | [Realtime Settings Guide](/docs/guides/realtime/settings)                              |
| Review quotas          | Understand message per second limits (Free: 100, Pro: 500, Pro no spend cap/Team/Enterprise: 2,500) and broadcast payload size limits (Free: 256 KB, Pro+: 3,000 KB) | [Realtime Quotas Reference](/docs/guides/realtime/quotas)                              |
| Check logs             | Investigate broadcast errors or quota limit issues in your project dashboard                                                                                         | [Realtime Logs Dashboard](/dashboard/project/_/database/realtime-logs)                 |
| Debug with logger      | Enable logging to track messages sent and received, and diagnose broadcast delivery issues                                                                           | [Debugging Realtime with Logger](/docs/troubleshooting/realtime-debugging-with-logger) |
| Learn broadcast basics | Understand how to implement and optimize broadcast messaging in your application                                                                                     | [Broadcast Guide](/docs/guides/realtime/broadcast)                                     |
| Contact support        | Request custom quota increases for Enterprise plans or discuss messaging requirements                                                                                | [Support Portal](/dashboard/support/new)                                               |
