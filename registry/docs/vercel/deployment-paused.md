# DEPLOYMENT\_PAUSED

The `DEPLOYMENT_PAUSED` error occurs when a deployment is paused due to certain conditions or configurations. This might happen if there's a manual intervention required, or a specific condition is met that triggers the pause.

**Error Code:** `503`

**Name:** Service Unavailable

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check configuration:** Ensure that your deployment configuration is correct and complies with the platform's requirements
2. **Review your spend management**: You may have configured your deployments to pause once your spend amount is reached. Review your [spend management settings](/docs/spend-management#managing-your-spend-amount) to either adjust your limit or review your usage
3. **Verify account status:** Ensure your account is in good standing and hasn't exceeded any [limits or quotas](/docs/limits)
4. **Review email notifications**: If your account or deployment has been paused, Vercel will email you to share more details about the pause and outline next steps. Review the email for additional information about the pause and any necessary actions to resolve the issue
5. **Check for terms of service violations**: If the pause is due to a breach of the [terms of service](/legal/terms) or [fair use guidelines](/docs/limits/fair-use-guidelines), review the specific usage limits and policies in the Vercel dashboard to understand the reasons for the pause
6. **Check for platform outages:** Sometimes, platform-wide outages or issues can cause deployments to be blocked. Check the [status page](https://www.vercel-status.com/) for any ongoing incidents
7. **Contact support:** If you've verified the above and are still experiencing the issue, [contact support](/help#issues) for further assistance

title: "DNS\_HOSTNAME\_EMPTY"
description: "An empty DNS record was received as part of the DNS response. This is a DNS error."
last\_updated: "2026-03-23T09:40:09.587Z"
source: "https://vercel.com/docs/errors/DNS\_HOSTNAME\_EMPTY"

# DNS\_HOSTNAME\_EMPTY

The `DNS_HOSTNAME_EMPTY` error occurs when an empty DNS record is received as part of the DNS response while attempting to connect to a private IP from an external rewrite.

**Error Code:** `502`

**Name:** Bad Gateway

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Review DNS configuration:** Check the [DNS configuration](/docs/domains/working-with-dns) to ensure that it's correctly set up and doesn't have any empty or incorrect entries
2. **Check for private IP addresses:** Ensure that the request isn't attempting to connect to a private IP address from an external source
3. **Review application logs:** Inspect the [application logs](/docs/deployments/logs) for any warnings or errors related to DNS or the attempted connections

title: "DNS\_HOSTNAME\_NOT\_FOUND"
description: "The domain does not exist, resulting in an NXDOMAIN error during DNS resolution. This is a DNS error."
last\_updated: "2026-03-23T09:40:09.591Z"
source: "https://vercel.com/docs/errors/DNS\_HOSTNAME\_NOT\_FOUND"

# DNS\_HOSTNAME\_NOT\_FOUND

The `DNS_HOSTNAME_NOT_FOUND` error occurs when there's an `NXDOMAIN` error during the DNS resolution while attempting to connect to a private IP from an external rewrite. This error indicates that the domain being requested does not exist.

**Error Code:** `502`

**Name:** Bad Gateway

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Review DNS configuration:** Check the [DNS configuration](/docs/domains/working-with-dns) to ensure that the domain being requested is correctly set up and registered
2. **Verify domain registration:** Ensure that the domain has been [registered](/docs/domains/working-with-domains/view-and-search-domains) and is currently active
3. **Check for private IP addresses:** Ensure that the request isn't attempting to connect to a private IP address from an external source
4. **Review application logs:** Inspect the [application logs](/docs/deployments/logs) for any warnings or errors related to DNS or the attempted connections

title: "DNS\_HOSTNAME\_RESOLVED\_PRIVATE"
description: "The DNS hostname resolved to a private IP address or an IPv6 address during an external rewrite. This is a DNS error."
last\_updated: "2026-03-23T09:40:09.597Z"
source: "https://vercel.com/docs/errors/DNS\_HOSTNAME\_RESOLVED\_PRIVATE"

# DNS\_HOSTNAME\_RESOLVED\_PRIVATE

The `DNS_HOSTNAME_RESOLVED_PRIVATE` error occurs when attempting to connect to a private IP from an external rewrite, or when trying to connect to an IPv6 address. The error indicates that the DNS hostname resolved to a private or inaccessible IP address.

Examples of such IPs would be:

- `192.0.0.1`
- `168.0.0.1`

**Error Code:** `404`

**Name:** Not Found

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check the IP address:** Ensure that the IP address you are trying to connect to is publicly accessible and not a private or reserved IP address
2. **Inspect network connectivity:** Ensure that there are no network issues that could be affecting the DNS resolution
3. **Review application logs:** Inspect the [application logs](/docs/deployments/logs) for any warnings or errors related to DNS or the attempted connections

title: "DNS\_HOSTNAME\_RESOLVE\_FAILED"
description: "No error with the DNS resolution but no IP was returned. This is a DNS error."
last\_updated: "2026-03-23T09:40:09.601Z"
source: "https://vercel.com/docs/errors/DNS\_HOSTNAME\_RESOLVE\_FAILED"

# DNS\_HOSTNAME\_RESOLVE\_FAILED

The `DNS_HOSTNAME_RESOLVE_FAILED` error occurs when attempting to connect to a private IP from an external rewrite. Although there's no error with the DNS resolution, no IP address is returned. This could be due to an issue with the domain name being queried, corrupted or malformed DNS responses, or network issues.

**Error Code:** `502`

**Name:** Bad Gateway

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check the domain name:** Ensure that the [domain name](/docs/domains/working-with-domains/view-and-search-domains) you are trying to resolve is spelled correctly and is a valid domain. Typos or incorrect domain names can lead to DNS lookup failures
2. **Check DNS configuration:** Verify the [configuration](/docs/domains/working-with-dns) of the DNS server and ensure it is set up correctly
3. **Firewall and security software:** Check if any firewall or security software on your system is blocking DNS requests. Ensure that the DNS queries are allowed through your firewall
4. **Inspect network connectivity:** Ensure that there are no network issues that could be affecting the DNS resolution

title: "DNS\_HOSTNAME\_SERVER\_ERROR"
description: "The DNS server was unable to fulfill the DNS request due to an internal issue or misconfiguration. This is a DNS error."
last\_updated: "2026-03-23T09:40:09.604Z"
source: "https://vercel.com/docs/errors/DNS\_HOSTNAME\_SERVER\_ERROR"

# DNS\_HOSTNAME\_SERVER\_ERROR

The `DNS_HOSTNAME_SERVER_ERROR` error occurs when attempting to connect to a private IP from an external rewrite. This error typically means that the DNS server was unable to fulfill the DNS request due to an internal issue or misconfiguration.

**Error Code:** `502`

**Name:** Bad Gateway

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Review DNS configuration:** Check the [DNS configuration](/docs/domains/working-with-dns) to ensure it's correctly set up and doesn't contain any errors or misconfigurations
2. **Inspect network connectivity:** Ensure that there are no network issues that could be affecting the DNS resolution
3. **Check DNS server logs:** Review the logs of the DNS server for any warnings or errors that might indicate what's causing the issue
4. **Verify domain registration:** Ensure that the domain has been [registered](/docs/domains/working-with-domains/view-and-search-domains) and is currently active

title: "EDGE\_FUNCTION\_INVOCATION\_FAILED"
description: "The request for a Edge Function was not completed successfully. This is an application error."
last\_updated: "2026-03-23T09:40:09.608Z"
source: "https://vercel.com/docs/errors/EDGE\_FUNCTION\_INVOCATION\_FAILED"

# EDGE\_FUNCTION\_INVOCATION\_FAILED

The `EDGE_FUNCTION_INVOCATION_FAILED` error occurs when there is an issue with the Edge Function being invoked on the CDN. This error can be caused by a variety of issues, including unhandled exceptions, timeouts, or malformed requests.

**Error Code:** `500`

**Name:** Internal Server Error

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check application logs**: Review the application logs to identify any specific errors related to the Edge Function being invoked. They can be found at the host URL under [the `/_logs` path](/docs/deployments/build-features#logs-view)
2. **Review deployment configuration**: Double-check the deployment configuration to ensure that the Edge Function is being deployed correctly
3. **Investigate build errors**: If the error occurs during the build process, troubleshoot any build errors that might be preventing the necessary resources from being deployed.
4. **Check function code**: Ensure that the code for the Edge Function is correct and does not contain any errors or infinite loops
5. **Use Vercel's status page**: If you have tried the steps above and are still experiencing the error, check Vercel's [status page](https://www.vercel-status.com/) for any reported outages in the CDN, which can sometimes cause this error

title: "EDGE\_FUNCTION\_INVOCATION\_TIMEOUT"
description: "The Edge Function invocation timed out. This is an application error."
last\_updated: "2026-03-23T09:40:09.613Z"
source: "https://vercel.com/docs/errors/EDGE\_FUNCTION\_INVOCATION\_TIMEOUT"

# EDGE\_FUNCTION\_INVOCATION\_TIMEOUT

The `EDGE_FUNCTION_INVOCATION_TIMEOUT` error occurs when an Edge Function takes longer than the allowed execution time to complete or doesn't send a response chunk for a certain amount of time. This can be caused by long-running processes within the function or external dependencies that fail to respond in a timely manner.

If your backend API takes time to respond, we recommend [streaming the response](/docs/functions/streaming-functions) to avoid the idle timeout. For longer-running workloads, consider migrating to [Fluid compute](/docs/fluid-compute) which provides significantly longer durations and optimized performance.

**Error Code:** `504`

**Name:** Gateway Timeout

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check application logs**: Review the application logs to identify any specific errors related to the Edge Function being invoked. They can be found at the host URL under [the `/_logs` path](/docs/deployments/build-features#logs-view)
2. **Review function code:** Inspect the Edge Function code for any long-running operations or infinite loops that could cause a timeout
3. **Verify return value:** Ensure the function returns a response within the specified time limit of [25 seconds](/docs/functions/limitations#max-duration)
4. **Optimize external calls:** If the function makes calls to external services or APIs, ensure they are optimized and responding quickly
5. **Consider streaming data**: If the function is processing large amounts of data, consider using a [streaming approach](/docs/functions/streaming-functions) to avoid timeouts
6. **Implement error handling:** Add error handling in the function to manage timeouts and other exceptions effectively

title: "FALLBACK\_BODY\_TOO\_LARGE"
description: "The fallback body is too large for the cache. This is a cache error."
last\_updated: "2026-03-23T09:40:09.618Z"
source: "https://vercel.com/docs/errors/FALLBACK\_BODY\_TOO\_LARGE"

# FALLBACK\_BODY\_TOO\_LARGE

The `FALLBACK_BODY_TOO_LARGE` error indicates that the size of the fallback body exceeds the maximum cache limit. This error typically occurs in prerendered pages when the response body of a fallback page is larger than the cache can accommodate. Notably, if the fallback exceeds 10MB, it cannot be cached.

**Error Code:** `502`

**Name:** Prerender fallback file is too big for cache

## Troubleshoot

To resolve this error, consider the following steps:

1. **Review response size:** Examine the size of the response body for the affected page. If it's too large, try to reduce the content size
2. **Optimize content:** Minimize HTML, CSS, and JavaScript on the fallback page Remove unnecessary assets or data to reduce the page size
3. **Implement pagination:** If the large response body is due to extensive datasets, consider using pagination. This divides the data into smaller, manageable sections
4. **Dynamic data loading:** Where possible, load data dynamically on the client-side instead of sending all data in the initial server response

To prevent this error, ensure that the size of the fallback page is less than 10 MB.

title: "FUNCTION\_INVOCATION\_FAILED"
description: "The invocation of a function failed. This is a function error."
last\_updated: "2026-03-23T09:40:09.627Z"
source: "https://vercel.com/docs/errors/FUNCTION\_INVOCATION\_FAILED"

# FUNCTION\_INVOCATION\_FAILED

The `FUNCTION_INVOCATION_FAILED` error occurs when a function invocation fails. This could be due to an error within the function itself, or an issue with the environment in which the function is running.

**Error Code:** `500`

**Name:** Internal Server Error

## Possible causes

- The runtime process (Node.js, Bun, Python, etc.) has crashed.
- Node.js or Bun threw an unhandled rejection/uncaught exception.

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check application logs:** Review the application logs to identify any specific errors related to the function invocation. They can be found under the [Logs tab](https://vercel.com/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Flogs\&title=Application+Logs)
2. **Review function code:** Ensure that the code for the function is correct and does not contain any errors or infinite loops. Use a `try/catch` block to catch any errors that might be occurring within the function code
3. **Check for unhandled exceptions:** Look for any unhandled exceptions within the function code that might be causing the invocation to fail
4. **Verify function configuration:** Double-check the function configuration to ensure that it's set up correctly, including any environment variables or other settings

title: "FUNCTION\_INVOCATION\_TIMEOUT"
description: "The request for a Vercel Function reached the timeout threshold. This is an application error."
last\_updated: "2026-03-23T09:40:09.623Z"
source: "https://vercel.com/docs/errors/FUNCTION\_INVOCATION\_TIMEOUT"
