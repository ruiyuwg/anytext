# MIDDLEWARE\_INVOCATION\_TIMEOUT

The `MIDDLEWARE_INVOCATION_TIMEOUT` error occurs when an Routing Middleware takes [longer than the allowed execution time](/docs/functions/runtimes/edge#maximum-execution-duration) to complete or doesn't send a response chunk for a certain amount of time. This can be caused by long-running processes within the function or external dependencies that fail to respond in a timely manner.

If your backend API takes time to respond, we recommend [streaming the response](/docs/functions/streaming-functions) to avoid the idle timeout.

**Error Code:** `504`

**Name:** Gateway Timeout

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check application logs**: Review the application logs to identify any specific errors related to the Routing Middleware being invoked. They can be found at the host URL under [the `/_logs` path](/docs/deployments/build-features#logs-view)
2. **Review function code:** Inspect the Routing Middleware code for any long-running operations or infinite loops that could cause a timeout
3. **Verify return value:** Ensure the function returns a response within the specified time limit of [25 seconds](/docs/functions/limitations#max-duration)
4. **Optimize external calls:** If the function makes calls to external services or APIs, ensure they are optimized and responding quickly. Consider specifying a fetch timeout for external calls using [`AbortSignal.timeout`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static).
5. **Consider streaming data**: If the function is processing large amounts of data, consider using a [streaming approach](/docs/functions/streaming-functions) to avoid timeouts
6. **Implement error handling:** Add error handling in the function to manage timeouts and other exceptions effectively

title: "MIDDLEWARE\_RUNTIME\_DEPRECATED"
description: "A middleware is using a deprecated runtime."
last\_updated: "2026-03-08T05:03:14.235Z"
source: "https://vercel.com/docs/errors/MIDDLEWARE\_RUNTIME\_DEPRECATED"

# MIDDLEWARE\_RUNTIME\_DEPRECATED

The `MIDDLEWARE_RUNTIME_DEPRECATED` error occurs when a middleware is using a deprecated runtime. This error can occur when a middleware is using a runtime that is no longer supported by the platform.

**Error Code:** `503`

**Name:** Middleware Runtime Deprecated

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Identify the affected project:** Use [Vercel Logs](/docs/observability/runtime-logs) to identify if your project is experiencing this error. Look for the `MIDDLEWARE_RUNTIME_DEPRECATED` error in your project's runtime logs.
2. **Locate the middleware:** Once you've identified the project, check if it has a `middleware.js` or `middleware.ts` file in the root directory or uses Routing Middleware in any way.
3. **Redeploy the project:** Redeploy the project to automatically upgrade to the latest supported runtime version. However, if the redeploy fails, you may need to:
   - **Update your Node.js version:** Check your project's Node.js version setting in the Vercel dashboard or `package.json` and update it to a [supported version](/docs/functions/runtimes/node-js#node.js-version)
   - **Update dependencies:** Outdated dependencies may not be compatible with newer Node.js versions. Update your `package.json` dependencies to their latest compatible versions before redeploying

title: "NOT\_FOUND"
description: "The requested resource was not found. This is a deployment error."
last\_updated: "2026-03-08T05:03:14.245Z"
source: "https://vercel.com/docs/errors/NOT\_FOUND"

# NOT\_FOUND

The `NOT_FOUND` error occurs when a requested resource could not be found. This might happen if the resource has been moved, deleted, or if there is a typo in the URL.

**Error Code:** `404`

**Name:** Not Found

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check the deployment URL**: Ensure that the deployment URL you are using is correct and does not contain any typos or incorrect paths
2. **Check deployment existence:** Verify that the [deployment exists](/docs/deployments/managing-deployments) and has not been deleted
3. **Review deployment logs:** If the deployment exists, review the [deployment logs](/docs/deployments/logs) to identify any issues that might have caused the deployment to be unavailable
4. **Verify permissions:** Ensure you have the necessary [permissions](/docs/accounts/team-members-and-roles) to access the deployment
5. **Contact support:** If you've checked the above and are still unable to resolve the issue, [contact support](/help#issues) for further assistance

title: "NO\_RESPONSE\_FROM\_FUNCTION"
description: "The application did not respond correctly, this is likely due to an exception being thrown from the function handler."
last\_updated: "2026-03-08T05:03:14.249Z"
source: "https://vercel.com/docs/errors/NO\_RESPONSE\_FROM\_FUNCTION"

# NO\_RESPONSE\_FROM\_FUNCTION

The `NO_RESPONSE_FROM_FUNCTION` error occurs when a function invocation completes without returning a response. This might happen if the function encounters an error that prevents it from responding, or if it fails to generate a response within the allowed execution time.

Potential causes include:

- A global uncaught exception
- A global unhandled rejection
- A deployment that introduced incorrect syntax

**Error Code:** `502`

**Name:** Bad Gateway

#### Troubleshoot

To troubleshoot this error, follow these steps:

1. **Verify return statements:** Ensure that the function has the necessary return statements to generate a response
2. **Check the function logs**: Open the [realtime request logs](/docs/logs#function-logs) for the application in a separate tab - this tab **must be kept open** while reproducing the error
3. **Review realtime logs**: Repeat the application behavior that led to the error being thrown and review the realtime request logs where it will now show
   - Use the information contained within the error logs to understand where the function is failing
4. **Use Log Drains**: Create a [Log Drain](/docs/drains) if you do not have one yet, to persist errors from Vercel functions
5. **Check external dependencies:** If the function relies on external services or APIs, ensure they are responding in a timely manner

title: "OPTIMIZED\_EXTERNAL\_IMAGE\_REQUEST\_FAILED"
description: "The request for an optimized external image failed. This is a server error."
last\_updated: "2026-03-08T05:03:14.264Z"
source: "https://vercel.com/docs/errors/OPTIMIZED\_EXTERNAL\_IMAGE\_REQUEST\_FAILED"

# OPTIMIZED\_EXTERNAL\_IMAGE\_REQUEST\_FAILED

The `OPTIMIZED_EXTERNAL_IMAGE_REQUEST_FAILED` error occurs when the request for an optimized external image fails.

**Error Code:** `502`

**Name:** Bad Gateway

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Verify external URL:** Ensure that the external image URL is correct and accessible
2. **Check query parameters:** Ensure that any query parameters are valid

title: "OPTIMIZED\_EXTERNAL\_IMAGE\_REQUEST\_INVALID"
description: "The external image request is invalid. This is a request error."
last\_updated: "2026-03-08T05:03:14.258Z"
source: "https://vercel.com/docs/errors/OPTIMIZED\_EXTERNAL\_IMAGE\_REQUEST\_INVALID"

# OPTIMIZED\_EXTERNAL\_IMAGE\_REQUEST\_INVALID

The `OPTIMIZED_EXTERNAL_IMAGE_REQUEST_INVALID` error occurs when the external image request is invalid.

**Error Code:** `502`

**Name:** Bad Gateway

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Verify external URL:** Ensure that the external image URL is absolute and correctly formatted
2. **Check query parameters:** Ensure that any query parameters are valid
3. **Validate source configuration:** Verify that the external source is configured correctly and accessible

title: "OPTIMIZED\_EXTERNAL\_IMAGE\_REQUEST\_UNAUTHORIZED"
description: "The external image request is unauthorized. This is a request error."
last\_updated: "2026-03-08T05:03:14.261Z"
source: "https://vercel.com/docs/errors/OPTIMIZED\_EXTERNAL\_IMAGE\_REQUEST\_UNAUTHORIZED"

# OPTIMIZED\_EXTERNAL\_IMAGE\_REQUEST\_UNAUTHORIZED

The `OPTIMIZED_EXTERNAL_IMAGE_REQUEST_UNAUTHORIZED` error occurs when the external image request is unauthorized.

**Error Code:** `502`

**Name:** Bad Gateway

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check permissions:** Ensure that you have the necessary permissions to access the external image
2. **Verify authentication:** Check for any authentication or authorization issues with the external source
3. **Update credentials:** Ensure that any required credentials or tokens are correctly set and not expired
4. **Remove filters**: Remove any filters that may be blocking the request, such as headers or IP restrictions

title: "OPTIMIZED\_EXTERNAL\_IMAGE\_TOO\_MANY\_REDIRECTS"
description: "The external image request encountered too many redirects. This is a request error."
last\_updated: "2026-03-08T05:03:14.267Z"
source: "https://vercel.com/docs/errors/OPTIMIZED\_EXTERNAL\_IMAGE\_TOO\_MANY\_REDIRECTS"

# OPTIMIZED\_EXTERNAL\_IMAGE\_TOO\_MANY\_REDIRECTS

The `OPTIMIZED_EXTERNAL_IMAGE_TOO_MANY_REDIRECTS` error occurs when the external image request encounters too many redirects.

**Error Code:** `502`

**Name:** Bad Gateway

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check URL for redirects:** Verify the external image URL to ensure it does not cause an infinite redirect loop

title: "RANGE\_END\_NOT\_VALID"
description: "The end value of the Range header in the request is invalid. This is a request error."
last\_updated: "2026-03-08T05:03:14.270Z"
source: "https://vercel.com/docs/errors/RANGE\_END\_NOT\_VALID"

# RANGE\_END\_NOT\_VALID

The `RANGE_END_NOT_VALID` error occurs when the end value of the `Range` header in a request is invalid. This header is used to request a specific portion of a resource from the server, which is useful for operations like resuming downloads or streaming media.

**Error Code:** `416`

**Name:** Requested Range Not Satisfiable

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Validate Range header values:** Ensure that the end value in the `Range` header is a valid integer. It should not be a letter, a decimal, or a scientific notation value
2. **Correct ordering:** Ensure the start value is less than the end value in the `Range` header
3. **Omit end value if necessary:** If you want to request all bytes from a certain start point to the end of the resource, you can omit the end value
4. **Check configuration:** If the `Range` header values are being set automatically by some part of your system, check the configuration to ensure it's being set correctly
5. **Debugging:** If the error persists, log the `Range` header values in your server logs to debug and understand what values are being sent in requests

title: "RANGE\_GROUP\_NOT\_VALID"
description: "The group value of the Range header in the request is invalid. This is a request error."
last\_updated: "2026-03-08T05:03:14.274Z"
source: "https://vercel.com/docs/errors/RANGE\_GROUP\_NOT\_VALID"

# RANGE\_GROUP\_NOT\_VALID

The `RANGE_GROUP_NOT_VALID` error occurs when the group value of the `Range` header in a request is invalid. This header is used to request a specific portion of a resource from the server, and the group value can be used to specify multiple ranges or a set of subranges.

**Error Code:** `416`

**Name:** Requested Range Not Satisfiable

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Validate Range header values:** Ensure that the group value in the `Range` header is a valid format. It should correctly specify the range or subranges you wish to retrieve
2. **Correct grouping:** Ensure that the group value is correctly formatted and contains valid range specifications
3. **Check configuration:** If the `Range` header values are being set automatically by some part of your system, check the configuration to ensure it's being set correctly
4. **Debugging:** If the error persists, log the `Range` header values in your server logs to debug and understand what values are being sent in requests

title: "RANGE\_MISSING\_UNIT"
description: "The unit identifier of the Range header in the request is missing. This is a request error."
last\_updated: "2026-03-08T05:03:14.277Z"
source: "https://vercel.com/docs/errors/RANGE\_MISSING\_UNIT"

# RANGE\_MISSING\_UNIT

The `RANGE_MISSING_UNIT` error occurs when the unit identifier of the `Range` header in a request is missing. The `Range` header is used to request a specific portion of a resource from the server, and the unit identifier indicates the unit in which the range is specified, such as bytes.

**Error Code:** `416`

**Name:** Requested Range Not Satisfiable

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Specify unit identifier:** Ensure that the `Range` header in your request specifies a unit identifier like `bytes`
2. **Check configuration:** If the `Range` header values are being set automatically by some part of your system, check the configuration to ensure the unit identifier is being included
3. **Verify syntax:** Verify that the syntax of the `Range` header is correct and follows the format `unit=range-start-range-end`, for example, `bytes=0-999`
4. **Debugging:** If the error persists, log the `Range` header values in your server logs to debug and understand what values are being sent in requests

title: "RANGE\_START\_NOT\_VALID"
description: "The start value of the Range header in the request is invalid. This is a request error."
last\_updated: "2026-03-08T05:03:14.281Z"
source: "https://vercel.com/docs/errors/RANGE\_START\_NOT\_VALID"

# RANGE\_START\_NOT\_VALID

The `RANGE_START_NOT_VALID` error occurs when the start value of the `Range` header in a request is invalid. The `Range` header is used to request a specific portion of a resource from the server, and the start value should be a valid integer indicating the beginning of the requested range.

**Error Code:** `416`

**Name:** Requested Range Not Satisfiable

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Validate Range header values:** Ensure that the start value in the `Range` header is a valid integer. It should not be a letter, a decimal, or a scientific notation value
2. **Correct ordering:** Ensure the start value is less than the end value in the `Range` header, if an end value is specified
3. **Check configuration:** If the `Range` header values are being set automatically by some part of your system, check the configuration to ensure it's being set correctly
4. **Debugging:** If the error persists, log the `Range` header values in your server logs to debug and understand what values are being sent in requests

title: "RANGE\_UNIT\_NOT\_SUPPORTED"
description: "The unit identifier of the Range header in the request is not supported. This is a request error."
last\_updated: "2026-03-08T05:03:14.284Z"
source: "https://vercel.com/docs/errors/RANGE\_UNIT\_NOT\_SUPPORTED"

# RANGE\_UNIT\_NOT\_SUPPORTED

The `RANGE_UNIT_NOT_SUPPORTED` error occurs when the unit identifier of the `Range` header in a request is not supported by the server. The `Range` header is used to request a specific portion of a resource from the server, and the unit identifier indicates the unit in which the range is specified, such as bytes.

**Error Code:** `416`

**Name:** Requested Range Not Satisfiable

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Verify supported Range units:** Check the documentation for the server or service you are interacting with to determine the supported range units
2. **Correct Range unit:** If the `Range` header in your request specifies an unsupported unit, correct it to use a supported unit
3. **Check configuration:** If the `Range` header values are being set automatically by some part of your system, check the configuration to ensure a supported unit identifier is being used
4. **Debugging:** If the error persists, log the `Range` header values in your server logs to debug and understand what values are being sent in requests

title: "REQUEST\_HEADER\_TOO\_LARGE"
description: "Request header size exceeds the permissible limit."
last\_updated: "2026-03-08T05:03:14.288Z"
source: "https://vercel.com/docs/errors/REQUEST\_HEADER\_TOO\_LARGE"

# REQUEST\_HEADER\_TOO\_LARGE

The `REQUEST_HEADER_TOO_LARGE` error occurs when the size of the request headers in your function and [Routing Middleware](/docs/routing-middleware) exceeds the allowed limits. Specifically, individual request headers must not exceed 16 KB, and the combined size of all headers, including the header names, must not exceed 32 KB.

This issue often arises from excessively large headers in a request. On Vercel, applications may have custom headers, which, if overly large, can trigger this error during server request processing.

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Limit header size:** Ensure that the size of each request header does not exceed 16 KB
2. **Manage total header size:** Monitor and control the combined size of all headers, keeping it under 32 KB
3. **Review cookies:** Since cookies are included in the header, it's crucial to limit their size as part of the overall header size

title: "RESOURCE\_NOT\_FOUND"
description: "This error signifies that a specified resource could not be located."
last\_updated: "2026-03-08T05:03:14.293Z"
source: "https://vercel.com/docs/errors/RESOURCE\_NOT\_FOUND"

# RESOURCE\_NOT\_FOUND

The `RESOURCE_NOT_FOUND` error indicates that a requested resource is not available or cannot be found. This error typically arises when a request is made for a resource that either does not exist or is currently inaccessible.

**Error Code:** `404`

**Name:** Not Found

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Verify resource existence:** Confirm that the resource you're attempting to access exists. Check for any typos or errors in the resource name or path
2. **Review access permissions:** Ensure that your application or function has the necessary permissions to access the resource
3. **Inspect resource path:** Double-check the path or URL to the resource. Ensure it is correctly formatted and corresponds to the intended resource
4. **Check application configuration:** Review your application's configuration settings to ensure they are correctly set up to locate and access the resource
5. **Review logs:** Consult your [application logs](/docs/runtime-logs) for more details or clues as to why the resource could not be found. This can provide insights into whether the issue is due to an incorrect path, permissions, or other reasons

Additionally, the error can also occur in the context of the [Vercel REST API](/docs/rest-api), where it is similar to the [HTTP 500 Internal Server Error](/docs/rest-api/reference/errors#resource-not-found). In this case, the error message will contain the details of the resource that could not be found.

title: "ROUTER\_CANNOT\_MATCH"
description: "The router cannot match the route to any of the known patterns. This is a routing error."
last\_updated: "2026-03-08T05:03:14.296Z"
source: "https://vercel.com/docs/errors/ROUTER\_CANNOT\_MATCH"

# ROUTER\_CANNOT\_MATCH

The `ROUTER_CANNOT_MATCH` error occurs when the router is unable to match the requested route to any of the known patterns. This could happen due to a misconfiguration in the routing setup or an erroneous request path.

**Error Code:** `502`

**Name:** Bad Gateway

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Review routing configuration:** Check the [routing configuration](/docs/redirects#configuration-redirects) to ensure that it is correctly set up to handle the requested route
2. **Verify request path:** Ensure that the request path is correct and adheres to the expected patterns defined in the routing configuration
3. **Check for typos:** Look for any typos or misconfigurations in the routing setup that might be causing the mismatch
4. **Review application logs:** Inspect the [application logs](/docs/deployments/logs) for any warnings or errors related to routing

title: "ROUTER\_EXTERNAL\_TARGET\_CONNECTION\_ERROR"
description: "Connection error occurred while routing to an external target. This is a routing error."
last\_updated: "2026-03-08T05:03:14.300Z"
source: "https://vercel.com/docs/errors/ROUTER\_EXTERNAL\_TARGET\_CONNECTION\_ERROR"

# ROUTER\_EXTERNAL\_TARGET\_CONNECTION\_ERROR

The `ROUTER_EXTERNAL_TARGET_CONNECTION_ERROR` error occurs when there is a connection error while routing to an external target. This could happen due to network issues, incorrect routing configuration, or the external target being unreachable.

**Error Code:** `502`

**Name:** Bad Gateway

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check network connectivity:** Ensure that the network connectivity between your deployment and the external target is stable
2. **Verify external target availability:** Make sure the external target is online and reachable
3. **Review routing configuration:** Check the [routing configuration](/docs/redirects#configuration-redirects) to ensure that it is correctly set up to route to the external target
4. **Inspect firewall settings:** Verify that there are no firewall settings blocking the connection to the external target
5. **Review application logs:** Inspect the [application logs](/docs/deployments/logs) for any warnings or errors related to routing or network connectivity

title: "ROUTER\_EXTERNAL\_TARGET\_ERROR"
description: "Error occurred while routing to an external target. This is a routing error."
last\_updated: "2026-03-08T05:03:14.304Z"
source: "https://vercel.com/docs/errors/ROUTER\_EXTERNAL\_TARGET\_ERROR"

# ROUTER\_EXTERNAL\_TARGET\_ERROR

The `ROUTER_EXTERNAL_TARGET_ERROR` error occurs when there is an error while routing to an external target. This could happen due to incorrect routing configuration, an erroneous response from the external target, or other issues affecting the routing process. If the external server does not respond within the maximum timeout of **120 seconds** (2 minutes), you will see this error.

**Error Code:** `502`

**Name:** Bad Gateway

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Review routing configuration:** Check the [routing configuration](/docs/redirects#configuration-redirects) to ensure that it is correctly set up to route to the external target
2. **Verify external target availability:** Make sure the external target is online and reachable
3. **Check for errors in external target:** Investigate the external target for any errors that might be causing the routing issue
4. **Inspect firewall settings:** Verify that there are no firewall settings blocking the connection to the external target
5. **Review application logs:** Inspect the [application logs](/docs/deployments/logs) for any warnings or errors related to routing or the external target

title: "ROUTER\_EXTERNAL\_TARGET\_HANDSHAKE\_ERROR"
description: "Error in establishing a connection with an external target."
last\_updated: "2026-03-08T05:03:14.308Z"
source: "https://vercel.com/docs/errors/ROUTER\_EXTERNAL\_TARGET\_HANDSHAKE\_ERROR"

# ROUTER\_EXTERNAL\_TARGET\_HANDSHAKE\_ERROR

The `ROUTER_EXTERNAL_TARGET_HANDSHAKE_ERROR` error occurs when a connection cannot be successfully established with an external target. This error may result from issues during the SSL handshake process or due to a timeout, and is often attributed to one of the following causes:

- **SSL handshake failure:** The SSL handshake may fail if the target has an invalid certificate or uses an unsupported Cipher Suite
- **Timeout:** The error could also be due to a timeout, which might be caused by issues connecting to the target. Note that proxied requests to external targets have a maximum timeout of **120 seconds** (2 minutes).

**Error Code:** `502`

**Name:** Unable to establish connection with external target

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check SSL configuration:** Ensure that the target's [SSL certificate](/docs/domains/custom-SSL-certificate) is valid and that it is not using an [unsupported Cipher Suite](/docs/security/encryption#supported-ciphers)
2. **Investigate connectivity issues:** Look into potential connectivity problems between your application and the external target
3. **Monitor response times:** Check if your application or the external target is experiencing unusual delays that might be contributing to the timeout

title: "ROUTER\_TOO\_MANY\_HAS\_SELECTIONS"
description: "The router has too many selections. This is a routing error."
last\_updated: "2026-03-08T05:03:14.311Z"
source: "https://vercel.com/docs/errors/ROUTER\_TOO\_MANY\_HAS\_SELECTIONS"

# ROUTER\_TOO\_MANY\_HAS\_SELECTIONS

The `ROUTER_TOO_MANY_HAS_SELECTIONS` error occurs when the router encounters too many selections while processing the request. This could happen due to misconfiguration or a complex routing setup that exceeds the router's capabilities.

**Error Code:** `502`

**Name:** Bad Gateway

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Review routing configuration:** Check the [routing configuration](/docs/redirects#configuration-redirects) to ensure it's correctly set up and doesn't contain excessive selections
2. **Simplify routing setup:** If possible, simplify the routing setup to reduce the number of selections the router has to process
3. **Check for recursive or looping logic:** Ensure there isn't any recursive or looping logic in the routing configuration that could lead to excessive selections
4. **Review application logs:** Inspect the [application logs](/docs/deployments/logs) for any warnings or errors related to routing or selections

title: "SANBDOX\_NOT\_FOUND"
description: "The Sandbox could not be found on Vercel. This is a platform error."
last\_updated: "2026-03-08T05:03:14.314Z"
source: "https://vercel.com/docs/errors/SANDBOX\_NOT\_FOUND"

# SANBDOX\_NOT\_FOUND

The `SANDBOX_NOT_FOUND` error occurs when you are trying to access a Sandbox that does not exist. This could happen if there is a typo in the URL.

**Error Code:** `404`

**Name:** Not Found

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Verify the Sandbox URL:** Navigate to the [Sandboxes dashboard](/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fobservability%2Fsandboxes\&title=Go+to+Sandboxes), select the one you want to access, and copy the displayed URL
2. **Check for typos:** Ensure that there are no typos in the Sandbox URL you are trying to access

title: "SANBDOX\_NOT\_LISTENING"
description: "The Sandbox is not listening on the requested port. This is an application error."
last\_updated: "2026-03-08T05:03:14.317Z"
source: "https://vercel.com/docs/errors/SANDBOX\_NOT\_LISTENING"

# SANBDOX\_NOT\_LISTENING

The `SANDBOX_NOT_LISTENING` error occurs when you are trying to access a Sandbox that is not listening on the requested port. This could happen if the port is malconfigured, or the process running on that port has exited.

**Error Code:** `502`

**Name:** Bad Gateway

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Verify the configured port:** Make sure that the `ports` field used in `Sandbox.create` matches the port your application is listening on. Follow the [documentation](/docs/vercel-sandbox) to learn more
2. **Check the Sandbox history:** Navigate to the [Sandboxes dashboard](/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fobservability%2Fsandboxes\&title=Go+to+Sandboxes), select the one you are accessing, and check the history section to see which commands were run and if any errors occurred

title: "SANBDOX\_STOPPED"
description: "The Sandbox was stopped and is no longer reachable. This is a platform error."
last\_updated: "2026-03-08T05:03:14.321Z"
source: "https://vercel.com/docs/errors/SANDBOX\_STOPPED"

# SANBDOX\_STOPPED

The `SANDBOX_STOPPED` error occurs when you are trying to access a Sandbox that has been stopped. This could happen if the Sandbox was manually stopped by the owner, or if the Sandbox reached its configured timeout.

**Error Code:** `410`

**Name:** Gone

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Verify the Sandbox status:** Navigate to the [Sandboxes dashboard](/d?to=%2F%5Bteam%5D%2F%5Bproject%5D%2Fobservability%2Fsandboxes\&title=Go+to+Sandboxes), select the one you are accessing, and check the history section to know why it was stopped
2. **Increase the timeout:** By default, Sandboxes have a timeout of 10 minutes. You can increase the timeout by passing the `timeout` property to the `Sandbox.create()` method (http://localhost:3024/docs/vercel-sandbox/sdk-reference#sandbox.create).

title: "TOO\_MANY\_FILESYSTEM\_CHECKS"
description: "Too many filesystem checks occurred while processing the request. This is a routing error."
last\_updated: "2026-03-08T05:03:14.324Z"
source: "https://vercel.com/docs/errors/TOO\_MANY\_FILESYSTEM\_CHECKS"

# TOO\_MANY\_FILESYSTEM\_CHECKS

The `TOO_MANY_FILESYSTEM_CHECKS` error occurs when there are excessive filesystem checks while processing a request. This could happen during the routing process, especially when using rewrites, redirects, or any other configuration that requires checking the filesystem repeatedly.

**Error Code:** `502`

**Name:** Bad Gateway

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Review routing configuration**: Check the routing configuration to ensure that it is not causing excessive filesystem checks, especially in the case of [rewrites](/docs/rewrites) or [redirects](/docs/redirects#configuration-redirects).
2. **Optimize routing configuration**: Reduce the number of has routes matched on a single path. You cannot have more than 5 has routes matched on a single path
3. **Check for Loops**: Ensure there isn't any looping logic in the routing or filesystem access code that could lead to excessive filesystem checks
4. **Review application logs**: Inspect the [application logs](/docs/deployments/logs) for any warnings or errors related to filesystem access or routing

title: "TOO\_MANY\_FORKS"
description: "An error occurred in the application when matching too many conditional routes. You cannot have more than 5 "
last\_updated: "2026-03-08T05:03:14.329Z"
source: "https://vercel.com/docs/errors/TOO\_MANY\_FORKS"

# TOO\_MANY\_FORKS

The `TOO_MANY_FORKS` error occurs when too many forks are generated while processing the request. This usually happens when matching too many conditional routes, which could lead to a loop or excessive resource usage.

You cannot have more than 5 `has` routes matched on a single path.

**Error Code:** `502`

**Name:** Bad Gateway

#### Troubleshoot

To troubleshoot this error, follow these steps:

1. **Review routing configuration**: Reduce the number of [rewrites](/docs/rewrites), [redirects](/docs/redirects#configuration-redirects), or [headers](/docs/headers) with a `has` key (conditional route) that match the erroring request path
2. **Check for recursive logic**: Ensure there isn't any recursive logic in the routing configuration that could lead to excessive forking
3. **Handle unhandled exceptions**: Check the [application logs](/docs/deployments/logs) for any unhandled exceptions that may be causing the error

title: "TOO\_MANY\_RANGES"
description: "Too many ranges have been specified in the Range header of the request. This is a request error."
last\_updated: "2026-03-08T05:03:14.333Z"
source: "https://vercel.com/docs/errors/TOO\_MANY\_RANGES"

# TOO\_MANY\_RANGES

The `TOO_MANY_RANGES` error occurs when too many ranges have been specified in the `Range` header of a request. The `Range` header is used to request specific portions of a resource from the server, and specifying too many ranges can lead to an excessive load on the server.

**Error Code:** `416`

**Name:** Requested Range Not Satisfiable

## Troubleshoot

To troubleshoot this error, follow these steps:

To troubleshoot this error, follow these steps:

1. **Reduce number of Ranges:** Reduce the number of ranges specified in the `Range` header to a reasonable amount
2. **Check configuration:** If the `Range` header values are being set automatically by some part of your system, check the configuration to ensure a reasonable number of ranges are being specified
3. **Verify server capabilities:** Check the documentation for the server or service you are interacting with to determine the maximum number of supported ranges
4. **Debugging:** If the error persists, log the `Range` header values in your server logs to debug and understand what values are being sent in requests

title: "URL\_TOO\_LONG"
description: "The URL of the request is too long. This is a request error."
last\_updated: "2026-03-08T05:03:14.336Z"
source: "https://vercel.com/docs/errors/URL\_TOO\_LONG"

# URL\_TOO\_LONG

The `URL_TOO_LONG` error occurs when the URL of the request exceeds the maximum length allowed by the CDN (**14 KB**). Long URLs can be a result of long query strings, lengthy path segments, or an excessive number of path segments.

**Error Code:** `414`

**Name:** Request-URI Too Long

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Shorten the URL:** Simplify the URL by reducing the length of the path segments and the query string
2. **Reduce query parameters:** If the URL has many query parameters, consider reducing the number of parameters or use `POST` method instead where the parameters can be sent in the body of the request
3. **Use POST method:** If the long URL is a result of a form submission, consider changing the form method from `GET` to `POST`
4. **Check for unintended redirection:** Ensure there isn't a redirection loop or logic that is appending to the URL causing it to grow in length with each redirect

title: "Error List"
description: "You may encounter a variety of errors when you interact with the Vercel platform. This section focuses on errors that can happen when you interact with the Vercel Dashboard."
last\_updated: "2026-03-08T05:03:14.374Z"
source: "https://vercel.com/docs/errors/error-list"
