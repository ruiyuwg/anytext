## Rate of Channel Joins

The Rate of Channel Joins report helps you monitor how quickly clients are joining Realtime channels over time. This metric is essential for understanding your application's channel subscription patterns and identifying when you're approaching your plan's channel join rate limits.

The report displays the rate of channel joins per second, showing how frequently clients subscribe to channels throughout the selected time period. A channel join occurs whenever a client subscribes to a channel topic to receive real-time updates. Each client connection can join multiple channels (up to 100 per connection for most plans), and the join rate measures how many of these subscriptions happen per second across your entire project.

\<Image
alt="Rate of Channel Joins chart"
src={{
dark: '/docs/img/guides/platform/realtime/reports/rate-of-channel-joins-chart-dark.png',
light: '/docs/img/guides/platform/realtime/reports/rate-of-channel-joins-chart-light.png',
}}
width={2343}
height={625}
/>

### Actions you can take

| Action               | Description                                                                                                                                                       | More information                                                                                |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Review quotas        | Understand channel joins per second limits (Free: 100, Pro: 500, Pro no spend cap/Team/Enterprise: 2,500) and channels per connection limits (100 for most plans) | [Realtime Quotas Reference](/docs/guides/realtime/quotas)                                       |
| Check logs           | Investigate `too_many_joins` errors or channel join failures in your project dashboard                                                                            | [Realtime Logs Dashboard](/dashboard/project/_/database/realtime-logs)                          |
| Fix channel errors   | Learn how to properly manage channel lifecycle and prevent channel leaks in your application                                                                      | [TooManyChannels Error Troubleshooting](/docs/troubleshooting/realtime-too-many-channels-error) |
| Learn channel basics | Understand how Realtime channels work and best practices for channel management                                                                                   | [Realtime Channels Concepts](/docs/guides/realtime/concepts#channels)                           |
| Contact support      | Request custom quota increases for Enterprise plans or discuss high-volume channel join requirements                                                              | [Support Portal](/dashboard/support/new)                                                        |
