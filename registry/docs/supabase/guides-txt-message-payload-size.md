## Message Payload Size

The Message Payload Size report helps you monitor the median size of message payloads sent through your Realtime channels over time. This metric is essential for understanding how message size impacts performance, latency, and bandwidth usage in your real-time application.

The report displays the median payload size in bytes, showing how message sizes fluctuate throughout the selected time period. Payload size directly affects message throughput and latency—larger payloads require more bandwidth and processing time, which can increase latency and reduce the number of messages your system can handle per second. Monitoring this metric helps you optimize your message structure and identify opportunities to reduce payload sizes for better performance.

\<Image
alt="Message Payload Size chart"
src={{
dark: '/docs/img/guides/platform/realtime/reports/message-payload-size-chart-dark.png',
light: '/docs/img/guides/platform/realtime/reports/message-payload-size-chart-light.png',
}}
width={2343}
height={625}
/>

### Actions you can take

| Action                   | Description                                                                                                            | More information                                                                                         |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Configure payload limits | Adjust the "Max payload size in KB" setting to increase or decrease the maximum message size allowed                   | [Realtime Settings Guide](/docs/guides/realtime/settings)                                                |
| Review quotas            | Understand payload size limits: Broadcast (Free: 256 KB, Pro+: 3,000 KB) and Postgres Changes (1,024 KB for all plans) | [Realtime Quotas Reference](/docs/guides/realtime/quotas)                                                |
| Check logs               | Investigate payload-related errors or performance issues in your project dashboard                                     | [Realtime Logs Dashboard](/dashboard/project/_/database/realtime-logs)                                   |
| Review benchmarks        | Understand how payload size affects latency and throughput (larger payloads increase latency)                          | [Payload Size Performance Benchmarks](/docs/guides/realtime/benchmarks#broadcast-impact-of-payload-size) |
| Debug query performance  | Use `explain()` to analyze queries and identify performance bottlenecks that may be causing large payloads             | [Query Performance Debugging Guide](/docs/guides/database/debugging-performance)                         |
| Learn broadcast basics   | Understand best practices for structuring broadcast messages and optimizing payload sizes                              | [Broadcast Guide](/docs/guides/realtime/broadcast)                                                       |
| Contact support          | Discuss payload optimization strategies or custom solutions for high-volume messaging                                  | [Support Portal](/dashboard/support/new)                                                                 |
