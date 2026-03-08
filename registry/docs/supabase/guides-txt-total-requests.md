## Total Requests

The Total Requests report helps you monitor the overall volume of HTTP requests for Realtime over time. This metric is essential for understanding your application's usage patterns and identifying traffic trends or potential issues with API request handling.

The report displays the total number of HTTP requests made to the Realtime service which include the WebSocket upgrade requests and the REST API requests.

\<Image
alt="Total Requests chart"
src={{
dark: '/docs/img/guides/platform/realtime/reports/total-requests-chart-dark.png',
light: '/docs/img/guides/platform/realtime/reports/total-requests-chart-light.png',
}}
width={4721}
height={834}
/>

### Actions you can take

| Action                   | Description                                                                  | More information                                                                       |
| ------------------------ | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Check logs               | Investigate request errors or issues in your project dashboard               | [Realtime Logs Dashboard](/dashboard/project/_/database/realtime-logs)                 |
| Review error rates       | Compare total requests with error rates to identify failure patterns         | [Response Errors Report](#response-errors)                                             |
| Review response times    | Monitor API response times to identify performance bottlenecks               | [Response Speed Report](#response-speed)                                               |
| Learn REST API broadcast | Understand how to send broadcast messages using HTTP requests                | [Broadcast via REST API Guide](/docs/guides/realtime/broadcast#broadcast-via-rest-api) |
| Monitor database         | Review database resource utilization that may affect API request processing  | [Database Observability Dashboard](/dashboard/project/_/observability/database)        |
| Contact support          | Discuss high-volume request patterns or get assistance with API optimization | [Support Portal](/dashboard/support/new)                                               |
