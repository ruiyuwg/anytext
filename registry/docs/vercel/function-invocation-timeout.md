# FUNCTION\_INVOCATION\_TIMEOUT

The `FUNCTION_INVOCATION_TIMEOUT` error occurs when a function invocation takes longer than the [allowed execution time](/docs/functions/limitations#max-duration). This could be due to an error within the function itself, a slow network call, or an issue with the environment in which the function is running.

**Error Code:** `504`

**Name:** Gateway Timeout

#### Troubleshoot

To troubleshoot this error, follow these steps:

1. **The function is taking too long to process a request**: Ensure that any API or database requests you make in your function respond within the [Vercel Function maximum duration](/docs/functions/limitations#max-duration) limit applicable to your plan. **If you require a longer execution**, consider enabling [Fluid compute](/docs/fluid-compute) which provides significantly longer durations and optimized performance for extended workloads.
2. **The function isn't returning a response**: The function must return an HTTP response, even if that response is an error. If no response is returned, the function will time out
3. **You have an infinite loop within your function**: Check that your function is not making an infinite loop at any stage of execution
4. **Upstream errors**: Check that any external API or database that you are attempting to call doesn't have any errors
5. A common cause for this issue is when the application contains an unhandled exception. Check the application logs, which can be found at the host URL under [the `/_logs` path](/docs/deployments/build-features#logs-view), for example:

```javascript filename="logs-url"
https://my-deployment-my-username.vercel.app/_logs
```

For more information on Vercel Functions timeouts, see [What can I do about Vercel Functions timing out?](/kb/guide/what-can-i-do-about-vercel-serverless-functions-timing-out)

title: "FUNCTION\_PAYLOAD\_TOO\_LARGE"
description: "The payload sent to the function is too large. This is a function error."
last\_updated: "2026-03-23T09:40:09.632Z"
source: "https://vercel.com/docs/errors/FUNCTION\_PAYLOAD\_TOO\_LARGE"

# FUNCTION\_PAYLOAD\_TOO\_LARGE

The `FUNCTION_PAYLOAD_TOO_LARGE` error occurs when the payload sent to a function exceeds the maximum allowed size. This typically happens when the data sent in the request body to a serverless function is larger than the server can process.

**Error Code:** `413`

**Name:** Payload Too Large

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Review payload size:** Check the size of the payload being sent to the function to ensure it's within the allowed limits, and does not exceed the [limit of 4.5MB](/docs/functions/runtimes#size-limits)
2. **Reduce payload size:** If possible, reduce the size of the payload being sent to the function. This might include sending less data or compressing the data before sending it
3. **Client-side uploads**: For large file uploads, consider using client-side uploads directly to [Vercel Blob](/docs/storage/vercel-blob#server-and-client-uploads), where the file is sent securely from the client to Vercel Blob without going through the server
4. **Split into multiple requests:** If the payload data is too large to be sent in a single request, consider splitting the data into smaller chunks and sending multiple requests
5. **Use external storage:** If the data is very large, consider using external storage solutions to handle the data instead of sending it directly in the request

title: "FUNCTION\_RESPONSE\_PAYLOAD\_TOO\_LARGE"
description: "The function returned a response that is too large. This is a function error."
last\_updated: "2026-03-23T09:40:09.635Z"
source: "https://vercel.com/docs/errors/FUNCTION\_RESPONSE\_PAYLOAD\_TOO\_LARGE"

# FUNCTION\_RESPONSE\_PAYLOAD\_TOO\_LARGE

The `FUNCTION_RESPONSE_PAYLOAD_TOO_LARGE` error occurs when the function returned a response that exceeds the maximum allowed size of 4.5 MB.

**Error Code:** `500`

**Name:** Response Payload Too Large

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Review response payload size:** Check the size of the response payload being returned by the function to ensure it's within the allowed limits, and does not exceed the [limit of 4.5 MB](/docs/functions/runtimes#size-limits)
2. **Reduce response payload size:** If possible, reduce the size of the response payload being returned by the function

title: "FUNCTION\_THROTTLED"
description: "The function you are trying to call has exceeded the rate limit."
last\_updated: "2026-03-23T09:40:09.640Z"
source: "https://vercel.com/docs/errors/FUNCTION\_THROTTLED"

# FUNCTION\_THROTTLED

The `FUNCTION_THROTTLED` error occurs when your Vercel Functions exceed the concurrent execution limit, often due to a sudden request spike or backend API issues. For more information, see [What should I do if I receive a 503 error on Vercel?](/kb/guide/what-should-i-do-if-i-receive-a-503-error-on-vercel).

Although this is a rare scenario, this error can also occur when Vercel's infrastructure encounters an abnormal system load and tries to mitigate the impact autonomously.

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check application logs**: Review the application logs to identify any specific errors related to the Vercel Function being invoked. For example, your function might be waiting for a slow backend API without a reasonable timeout. These information can be found at the host URL under [the `/_logs` path](/docs/deployments/build-features#logs-view), as well as the [Observability](/docs/observability) section in the sidebar in the Vercel dashboard.
2. **Handle request spikes**: If you're experiencing a sudden spike in requests, consider using the [Vercel Firewall](/docs/vercel-firewall) to block unwanted traffic, or enabling [Rate Limiting](/docs/security/vercel-waf/rate-limiting) to limit the number of requests per second.
3. **Optimize your function**: Review your function code to ensure it's optimized for performance. For example, you can use [Vercel's CDN Cache](/docs/cdn-cache) to cache responses and reduce the number of invocations. You can also enable [fluid compute](/docs/fluid-compute) to handle more requests concurrently on a single function instance.

title: "INFINITE\_LOOP\_DETECTED"
description: "An infinite loop was detected within the application."
last\_updated: "2026-03-23T09:40:09.644Z"
source: "https://vercel.com/docs/errors/INFINITE\_LOOP\_DETECTED"

# INFINITE\_LOOP\_DETECTED

The `INFINITE_LOOP_DETECTED` error occurs when an infinite loop is detected within the application. This error can occur when the application is making an infinite number of requests to itself, or when the application is making an infinite number of requests to an external API or database.

**Error Code:** `508`

**Name:** Loop Detected

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check the application's source code:** Look for any code that might cause an infinite loop, such as a looping fetch or an unconditional redirect
2. **Check the application's configuration:** Review any [configuration](/docs/redirects#configuration-redirects) files, such as `next.config.js` or `vercel.json`, to ensure they are not causing the infinite loop
3. **Review external API or database calls:** Ensure that any external API or database calls your application is making do not have errors or infinite loops
4. **Handle unhandled exceptions:** Check the application logs for any unhandled exceptions that might be causing the infinite loop
5. **Use Vercel's status page:** If you have tried the steps above and are still experiencing the error, check Vercel's [status page](https://www.vercel-status.com/) for any reported outages in the CDN, which can sometimes cause this error

title: "INTERNAL\_CACHE\_ERROR"
description: "An unexpected error happened when CDN is fetching data from the Vercel CDN cache."
last\_updated: "2026-03-23T09:40:09.655Z"
source: "https://vercel.com/docs/errors/INTERNAL\_CACHE\_ERROR"

# INTERNAL\_CACHE\_ERROR

The `INTERNAL_CACHE_ERROR` error occurs during an unexpected issue in the CDN while retrieving data from the Vercel CDN cache.

**Error Code:** `500`

**Name:** Internal Server Error

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Contact support:** If the error persists, [contact support](/help#issues) for further assistance

title: "INTERNAL\_CACHE\_KEY\_TOO\_LONG"
description: "The CDN is failing to fetch from the internal cache due to a cache key being too long. This error can be caused by a request URL that is too long."
last\_updated: "2026-03-23T09:40:09.658Z"
source: "https://vercel.com/docs/errors/INTERNAL\_CACHE\_KEY\_TOO\_LONG"

# INTERNAL\_CACHE\_KEY\_TOO\_LONG

The `INTERNAL_CACHE_KEY_TOO_LONG` error occurs when the CDN is unable to fetch from the internal cache due to a cache key being too long. This error can be caused by a request URL that is too long.

**Error Code:** `500`

**Name:** Internal Server Error

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Contact support:** If the error persists, [contact support](/help#issues) for further assistance

title: "INTERNAL\_CACHE\_LOCK\_FULL"
description: "An unexpected error happened when CDN is accessing internal cache."
last\_updated: "2026-03-23T09:40:09.662Z"
source: "https://vercel.com/docs/errors/INTERNAL\_CACHE\_LOCK\_FULL"

# INTERNAL\_CACHE\_LOCK\_FULL

The `INTERNAL_CACHE_LOCK_FULL` error occurs when CDN is accessing internal cache. This error is usually caused by a temporary issue with the internal cache.

**Error Code:** `500`

**Name:** Internal Server Error

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Contact support:** If the error persists, [contact support](/help#issues) for further assistance

title: "INTERNAL\_CACHE\_LOCK\_TIMEOUT"
description: "An unexpected error happened when CDN is accessing internal cache."
last\_updated: "2026-03-23T09:40:09.666Z"
source: "https://vercel.com/docs/errors/INTERNAL\_CACHE\_LOCK\_TIMEOUT"

# INTERNAL\_CACHE\_LOCK\_TIMEOUT

The `INTERNAL_CACHE_LOCK_TIMEOUT` error occurs when CDN is accessing internal cache.

**Error Code:** `500`

**Name:** Internal Server Error

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Contact support:** If the error persists, [contact support](/help#issues) for further assistance

title: "INTERNAL\_DEPLOYMENT\_FETCH\_FAILED"
description: "Failed to fetch the internal deployment. This is a deployment error."
last\_updated: "2026-03-23T09:40:09.673Z"
source: "https://vercel.com/docs/errors/INTERNAL\_DEPLOYMENT\_FETCH\_FAILED"

# INTERNAL\_DEPLOYMENT\_FETCH\_FAILED

The `INTERNAL_DEPLOYMENT_FETCH_FAILED` error occurs when the system is unable to fetch the deployment. This could happen due to network issues, misconfigurations, or other internal errors that prevent the deployment data from being retrieved.

**Error Code:** `414`

**Name:** Internal Server Error

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check deployment status:** Ensure that the [deployment exists](/docs/deployments/managing-deployments) and is in a stable state
2. **Inspect deployment logs:** Review the [deployment logs](/docs/deployments/logs) to identify any specific errors or issues that might have occurred during the fetching process
3. **Review deployment history**: Check the deployment history to see if the deployment was deleted or [rolled back](/docs/instant-rollback)

title: "INTERNAL\_EDGE\_FUNCTION\_INVOCATION\_FAILED"
description: "The request for a Edge Function was not completed successfully due to an internal error."
last\_updated: "2026-03-23T09:40:09.669Z"
source: "https://vercel.com/docs/errors/INTERNAL\_EDGE\_FUNCTION\_INVOCATION\_FAILED"

# INTERNAL\_EDGE\_FUNCTION\_INVOCATION\_FAILED

The `INTERNAL_EDGE_FUNCTION_INVOCATION_FAILED` error occurs when there is an issue with the Edge Function being invoked on the CDN. This error can be caused by a variety of internal issues.

**Error Code:** `500`

**Name:** Internal Server Error

## Troubleshoot

While this error can be caused by a variety of issues, it's transient and retrying the request will succeed. If the error persists, [**contact support**](/help) along with the request ID on the error page.

title: "INTERNAL\_EDGE\_FUNCTION\_INVOCATION\_TIMEOUT"
description: "The Edge Function invocation timed out unexpectedly."
last\_updated: "2026-03-23T09:40:09.677Z"
source: "https://vercel.com/docs/errors/INTERNAL\_EDGE\_FUNCTION\_INVOCATION\_TIMEOUT"

# INTERNAL\_EDGE\_FUNCTION\_INVOCATION\_TIMEOUT

The `INTERNAL_EDGE_FUNCTION_INVOCATION_TIMEOUT` error occurs when an Edge Function takes longer than the allowed execution time to complete. This can be caused by long-running processes within the function or external dependencies that fail to respond in a timely manner.

**Error Code:** `504`

**Name:** Gateway Timeout

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check application logs**: Review the application logs to identify any specific errors related to the Edge Function being invoked. They can be found at the host URL under [the `/_logs` path](/docs/deployments/build-features#logs-view)
2. **Review function code:** Inspect the Edge Function code for any long-running operations or infinite loops that could cause a timeout
3. **Verify return value:** Ensure the function begins responding within [25 seconds](/docs/functions/limitations#max-duration)
4. **Optimize external calls:** If the function makes calls to external services or APIs, ensure they are optimized and responding quickly
5. **Consider streaming data**: If the function is processing large amounts of data, consider using a [streaming approach](/docs/functions/streaming-functions) to avoid timeouts
6. **Implement error handling:** Add error handling in the function to manage timeouts and other exceptions effectively

title: "INTERNAL\_FUNCTION\_INVOCATION\_FAILED"
description: "The internal invocation of a function failed. This is Vercel"
last\_updated: "2026-03-23T09:40:09.681Z"
source: "https://vercel.com/docs/errors/INTERNAL\_FUNCTION\_INVOCATION\_FAILED"

# INTERNAL\_FUNCTION\_INVOCATION\_FAILED

The `INTERNAL_FUNCTION_INVOCATION_FAILED` error occurs when a function invocation fails. This could be due to an error within the function itself, or an issue with the environment in which the function is running.

**Error Code:** `500`

**Name:** Internal Server Error

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check application logs:** Review the application logs to identify any specific errors related to the internal function invocation. They can be found at the host URL under [the `/_logs` path](/docs/deployments/build-features#logs-view)
2. **Review function code:** Ensure that the code for the function is correct and does not contain any errors or infinite loops
3. **Verify function configuration:** Double-check the function configuration to ensure that it's set up correctly, including any environment variables or other settings
4. **Check external dependencies:** If the function relies on external services or APIs, ensure they are responding in a timely manner

title: "INTERNAL\_FUNCTION\_INVOCATION\_TIMEOUT"
description: "The internal invocation of a function timed out. This is Vercel"
last\_updated: "2026-03-23T09:40:09.685Z"
source: "https://vercel.com/docs/errors/INTERNAL\_FUNCTION\_INVOCATION\_TIMEOUT"
