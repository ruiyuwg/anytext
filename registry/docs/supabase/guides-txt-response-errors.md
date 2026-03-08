## Response Errors

The Response Errors report helps you monitor the number of failed HTTP requests to the Realtime service over time. This metric is essential for identifying issues with API requests, WebSocket upgrade failures, authentication problems, and other error conditions that may impact your application's real-time functionality.

The report displays the total number of response errors from the Realtime API, showing error frequency throughout the selected time period. These errors include HTTP error status codes (4xx client errors and 5xx server errors) from REST API requests, failed WebSocket upgrade requests, authorization failures, and other error responses. Monitoring error rates alongside total requests helps you identify patterns, correlate errors with specific events, and troubleshoot issues affecting your Realtime service availability.

\<Image
alt="Response Errors chart"
src={{
dark: '/docs/img/guides/platform/realtime/reports/response-errors-chart-dark.png',
light: '/docs/img/guides/platform/realtime/reports/response-errors-chart-light.png',
}}
width={4721}
height={645}
/>

### Actions you can take

| Action                  | Description                                                                                                                 | More information                                                                                            |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Configure limits        | Adjust "Max concurrent connections" or "Max events per second" settings if errors are related to quota limits being reached | [Realtime Settings Guide](/docs/guides/realtime/settings)                                                   |
| Check logs              | Investigate specific error messages, error codes, and request details in your project dashboard                             | [Realtime Logs Dashboard](/dashboard/project/_/database/realtime-logs)                                      |
| Review request volume   | Compare error rates with total request volume to calculate error percentages and identify trends                            | [Total Requests Report](#total-requests)                                                                    |
| Understand error codes  | Understand specific error codes and their resolutions                                                                       | [Realtime Error Codes Reference](/docs/reference/realtime/error-codes)                                      |
| Learn HTTP status codes | Learn about HTTP status codes including 4XX client errors and 5XX server errors                                             | [HTTP Status Codes Troubleshooting](/docs/troubleshooting/http-status-codes)                                |
| Fix timeout errors      | Resolve WebSocket timeout errors caused by Node.js version incompatibility                                                  | [TIMED\_OUT Connection Errors Troubleshooting](/docs/troubleshooting/realtime-connections-timed_out-status) |
| Understand heartbeats   | Monitor heartbeat status to detect connection issues and handle timeouts                                                    | [Realtime Heartbeats Guide](/docs/troubleshooting/realtime-heartbeat-messages)                              |
| Review quotas           | Check if errors are related to quota limits (e.g., `too_many_connections`, `too_many_joins`)                                | [Realtime Quotas Reference](/docs/guides/realtime/quotas)                                                   |
| Learn authorization     | Troubleshoot authorization-related errors for private channels                                                              | [Realtime Authorization Guide](/docs/guides/realtime/authorization)                                         |
| Contact support         | Get assistance with persistent errors or investigate service-level issues                                                   | [Support Portal](/dashboard/support/new)                                                                    |
