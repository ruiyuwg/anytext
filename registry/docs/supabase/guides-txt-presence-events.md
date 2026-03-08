## Presence Events

The Presence Events report helps you monitor the volume of presence state updates sent through your Realtime channels over time. This metric is essential for understanding how your application tracks and synchronizes shared state between users, such as online status, user activity, or custom state information.

The report displays the total number of presence events sent by clients, showing state synchronization activity throughout the selected time period. Presence events occur when clients `track`, `update`, or `untrack` their presence state in a channel, triggering `sync`, `join`, or `leave` events. Unlike broadcast messages, presence state is persisted in the channel so new joiners immediately receive the current state without waiting for other users to send updates.

\<Image
alt="Presence Events chart"
src={{
dark: '/docs/img/guides/platform/realtime/reports/presence-events-chart-dark.png',
light: '/docs/img/guides/platform/realtime/reports/presence-events-chart-light.png',
}}
width={2343}
height={625}
/>

### Actions you can take

| Action                    | Description                                                                                                                                                         | More information                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Configure presence limits | Adjust the "Max presence events per second" setting to optimize presence state update throughput                                                                    | [Realtime Settings Guide](/docs/guides/realtime/settings)                              |
| Review quotas             | Understand presence messages per second limits (Free: 20, Pro: 50, Pro no spend cap/Team/Enterprise: 1,000) and presence keys per object limits (10 for most plans) | [Realtime Quotas Reference](/docs/guides/realtime/quotas)                              |
| Check logs                | Investigate presence errors or quota limit issues in your project dashboard                                                                                         | [Realtime Logs Dashboard](/dashboard/project/_/database/realtime-logs)                 |
| Debug with logger         | Enable logging to track presence events and diagnose state synchronization issues                                                                                   | [Debugging Realtime with Logger](/docs/troubleshooting/realtime-debugging-with-logger) |
| Learn presence basics     | Understand how to implement and optimize presence state tracking in your application                                                                                | [Presence Guide](/docs/guides/realtime/presence)                                       |
| Contact support           | Request custom quota increases for Enterprise plans or discuss presence requirements                                                                                | [Support Portal](/dashboard/support/new)                                               |
