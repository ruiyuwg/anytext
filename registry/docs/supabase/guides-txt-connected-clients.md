## Connected Clients

The Connected Clients report helps you monitor the total number of concurrent Realtime client connections to your project over time. This metric is essential for understanding your application's connection usage patterns and identifying when you're approaching your plan's connection limits.

The report displays the total number of connected Realtime clients, showing how connection counts fluctuate throughout the selected time period. Each client connection represents an active WebSocket connection to your Realtime service, which can subscribe to multiple channels for receiving real-time updates.

\<Image
alt="Connected Clients chart"
src={{
dark: '/docs/img/guides/platform/realtime/reports/connected-clients-chart-dark.png',
light: '/docs/img/guides/platform/realtime/reports/connected-clients-chart-light.png',
}}
width={2343}
height={625}
/>

### Actions you can take

| Action                      | Description                                                                                                                                                  | More information                                                                                                                                       |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Configure connection limit  | Adjust the "Max concurrent connections" setting to increase or decrease the connection limit for your project                                                | [Realtime Settings Guide](/docs/guides/realtime/settings)                                                                                              |
| Upgrade plan                | Increase available client connections. Connection limits vary by plan: Free (200), Pro (500), Pro no spend cap (10,000), Team (10,000), Enterprise (10,000+) | [Pricing and Plans](/docs/guides/platform/pricing)                                                                                                     |
| Review quotas               | Understand connection limits and other Realtime quotas for your plan                                                                                         | [Realtime Quotas Reference](/docs/guides/realtime/quotas)                                                                                              |
| Understand connection quota | Learn how the concurrent connections quota works and how to configure it for your plan                                                                       | [Concurrent Peak Connections Quota Troubleshooting](/docs/troubleshooting/realtime-concurrent-peak-connections-quota-jdDqcp)                           |
| Fix silent disconnections   | Fix connection issues in background applications using heartbeat callbacks and Web Workers                                                                   | [Handling Silent Disconnections in Background Apps](/docs/troubleshooting/realtime-handling-silent-disconnections-in-backgrounded-applications-592794) |
| Check logs                  | Investigate connection errors and quota errors in your project dashboard                                                                                     | [Realtime Logs Dashboard](/dashboard/project/_/database/realtime-logs)                                                                                 |
| Contact support             | Request custom quota increases for Enterprise plans or discuss connection requirements                                                                       | [Support Portal](/dashboard/support/new)                                                                                                               |
