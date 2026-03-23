# INTERNAL\_FUNCTION\_INVOCATION\_TIMEOUT

The `INTERNAL_FUNCTION_INVOCATION_TIMEOUT` error occurs when a function invocation takes longer than the allowed execution time. This could be due to an error within the function itself, a slow network call, or an issue with the environment in which the function is running.

**Error Code:** `504`

**Name:** Gateway Timeout

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **The function is taking too long to process a request**: Ensure that any API or database requests you make in your function respond within the [Vercel Function maximum duration](/docs/functions/limitations#max-duration) limit applicable to your plan. **If you require a longer execution**, consider enabling [Fluid compute](/docs/fluid-compute), which provides significantly longer durations and optimized performance for extended workloads.
2. **The function isn't returning a response**: The function must return an HTTP response, even if that response is an error. If no response is returned, the function will time out
3. **You have an infinite loop within your function**: Check that your function is not making an infinite loop at any stage of execution
4. **Upstream errors**: Check that any external API or database that you are attempting to call doesn't have any errors
5. A common cause for this issue is when the application contains an unhandled exception. Check the application logs, which can be found at the host URL under [the `/_logs` path](/docs/deployments/build-features#logs-view), for example:

```javascript filename="logs-url"
https://my-deployment-my-username.vercel.app/_logs
```

For more information on Vercel Functions timeouts, see [What can I do about Vercel Functions timing out?](/kb/guide/what-can-i-do-about-vercel-serverless-functions-timing-out)

title: "INTERNAL\_FUNCTION\_NOT\_FOUND"
description: "The internal function could not be found. This is a Vercel"
last\_updated: "2026-03-23T09:40:09.689Z"
source: "https://vercel.com/docs/errors/INTERNAL\_FUNCTION\_NOT\_FOUND"

# INTERNAL\_FUNCTION\_NOT\_FOUND

The `INTERNAL_FUNCTION_NOT_FOUND` error occurs when an attempt to invoke a function fails because the function could not be found. This could happen if the function was not properly deployed, or if there is a misconfiguration in the function's settings or environment.

**Error Code:** `500`

**Name:** Internal Server Error

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Verify function deployment:** Ensure that the function has been successfully deployed and is available in the environment where it is being invoked
2. **Check function name:** Verify that the function name being used in the invocation matches the deployed function name
3. **Review configuration:** Check the function configuration in your project, including the function file name and the path where it is located
4. **Check for typos:** Ensure that there are no typos or incorrect references in the function name or in the invocation command

title: "INTERNAL\_FUNCTION\_NOT\_READY"
description: "The internal function is not ready to be invoked. This is a Vercel error."
last\_updated: "2026-03-23T09:40:09.694Z"
source: "https://vercel.com/docs/errors/INTERNAL\_FUNCTION\_NOT\_READY"

# INTERNAL\_FUNCTION\_NOT\_READY

The `INTERNAL_FUNCTION_NOT_READY` error occurs when an attempt is made to invoke a function before it is ready to accept requests. This might happen if the function is still being deployed, initialized, or if there is a misconfiguration preventing the function from becoming ready.

**Error Code:** `500`

**Name:** Internal Server Error

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Verify deployment status:** Ensure that the function has been successfully deployed and the deployment process has completed
2. **Check initialization logs:** Review the function's initialization logs to identify any errors or warnings that might indicate why the function is not ready
3. **Review configuration:** Ensure that the function and environment configurations are correct and that there are no misconfigurations preventing the function from becoming ready
4. **Check dependencies:** Verify that all dependencies required by the function are available and correctly configured

title: "INTERNAL\_MICROFRONTENDS\_BUILD\_ERROR"
description: "The microfrontend build did not include the required data as expected."
last\_updated: "2026-03-23T09:40:09.697Z"
source: "https://vercel.com/docs/errors/INTERNAL\_MICROFRONTENDS\_BUILD\_ERROR"

# INTERNAL\_MICROFRONTENDS\_BUILD\_ERROR

The `INTERNAL_MICROFRONTENDS_BUILD_ERROR` error occurs when the deployment is missing data that should have been included as part of the build.

This error should not occur because the build is designed to fail in such cases.

## Troubleshoot

To troubleshoot this error, follow these steps:

1. We have been notified of this error. For more information, check the [Vercel status page](https://www.vercel-status.com/) or [contact Vercel support](/help#issues)

title: "INTERNAL\_MICROFRONTENDS\_INVALID\_CONFIGURATION\_ERROR"
description: "The microfrontend configuration file is invalid."
last\_updated: "2026-03-23T09:40:09.700Z"
source: "https://vercel.com/docs/errors/INTERNAL\_MICROFRONTENDS\_INVALID\_CONFIGURATION\_ERROR"

# INTERNAL\_MICROFRONTENDS\_INVALID\_CONFIGURATION\_ERROR

The `INTERNAL_MICROFRONTENDS_INVALID_CONFIGURATION_ERROR` error occurs when the configuration file for the deployment is invalid.

This error indicates that an invalid configuration file has been deployed.

## Troubleshoot

To troubleshoot this error, follow these steps:

1. Ensure the config in your `microfrontends.json` file is valid, see the [documentation](/docs/microfrontends/quickstart).
2. Ensure you are on the latest version of the [`@vercel/microfrontends`](https://www.npmjs.com/package/@vercel/microfrontends) package.
3. We have been notified of this error. For more information, check the [Vercel status page](https://www.vercel-status.com/) or [contact Vercel support](/help#issues)

title: "INTERNAL\_MICROFRONTENDS\_UNEXPECTED\_ERROR"
description: "An unexpected internal error occurred in the microfrontend."
last\_updated: "2026-03-23T09:40:09.704Z"
source: "https://vercel.com/docs/errors/INTERNAL\_MICROFRONTENDS\_UNEXPECTED\_ERROR"

# INTERNAL\_MICROFRONTENDS\_UNEXPECTED\_ERROR

The `INTERNAL_MICROFRONTENDS_UNEXPECTED_ERROR` occurs due to unspecified internal issues, such as system faults or unhandled exceptions.

## Troubleshoot

To troubleshoot this error, follow these steps:

1. We have been notified of this error. For more information, check the [Vercel status page](https://www.vercel-status.com/) or [contact Vercel support](/help#issues)

title: "INTERNAL\_MISSING\_RESPONSE\_FROM\_CACHE"
description: "This error indicates a missing response from the cache during a deployment or build process."
last\_updated: "2026-03-23T09:40:09.707Z"
source: "https://vercel.com/docs/errors/INTERNAL\_MISSING\_RESPONSE\_FROM\_CACHE"

# INTERNAL\_MISSING\_RESPONSE\_FROM\_CACHE

The `INTERNAL_MISSING_RESPONSE_FROM_CACHE` error occurs when an unexpected error happened during the CDN accessing the internal cache.

**Error Code:** `500`

**Name:** Internal Server Error

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Contact support:** If the error persists, [contact support](/help#issues) for further assistance

title: "INTERNAL\_OPTIMIZED\_IMAGE\_REQUEST\_FAILED"
description: "The request for an internally optimized image failed. This is a server error."
last\_updated: "2026-03-23T09:40:09.710Z"
source: "https://vercel.com/docs/errors/INTERNAL\_OPTIMIZED\_IMAGE\_REQUEST\_FAILED"

# INTERNAL\_OPTIMIZED\_IMAGE\_REQUEST\_FAILED

The `INTERNAL_OPTIMIZED_IMAGE_REQUEST_FAILED` error occurs when the request for an internally optimized image fails.

**Error Code:** `502`

**Name:** Internal Server Error

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Verify image path:** Ensure that the image path is correct and the server can access the image
2. **Check logs:** Review [logs](/docs/runtime-logs) for more details on the error
3. **Validate configuration:** Ensure that the configuration for image optimization is correct

title: "INTERNAL\_ROUTER\_CANNOT\_PARSE\_PATH"
description: "The CDN has failed to parse application-specified URL, such as rewrite/redirection URLs."
last\_updated: "2026-03-23T09:40:09.713Z"
source: "https://vercel.com/docs/errors/INTERNAL\_ROUTER\_CANNOT\_PARSE\_PATH"

# INTERNAL\_ROUTER\_CANNOT\_PARSE\_PATH

The `INTERNAL_ROUTER_CANNOT_PARSE_PATH` error occurs when the CDN has failed to parse application-specified URL, such as rewrite/redirection URLs.

**Error Code:** `500`

**Name:** Internal Server Error

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check configuration**: Check your configuration and make sure your app doesn't generate invalid URLs

title: "INTERNAL\_STATIC\_REQUEST\_FAILED"
description: "This error occurs when a request for a static file in a project fails."
last\_updated: "2026-03-23T09:40:09.716Z"
source: "https://vercel.com/docs/errors/INTERNAL\_STATIC\_REQUEST\_FAILED"

# INTERNAL\_STATIC\_REQUEST\_FAILED

The `INTERNAL_STATIC_REQUEST_FAILED` error is encountered when a request for a static file within the project cannot be completed. This can happen due to issues with the existence, deployment, or path of the static files.

**Error Code:** `500`

**Name:** Internal Server Error

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check static files existence:** Ensure that all static files exist in your project and are correctly deployed. Confirm that they are included in the deployment package
2. **Verify file paths:** Check that the paths to your static files are correct and reachable. Path errors or misconfigurations can lead to this issue
3. **Rollback changes:** If your project was working previously, consider reverting to a known working state. [Rollback](/docs/instant-rollback) your recent changes one by one and redeploy to see if the error resolves. This can help identify if recent changes are causing the issue

title: "INTERNAL\_UNARCHIVE\_FAILED"
description: "Unarchiving of the deployment or resource failed. This is an internal error."
last\_updated: "2026-03-23T09:40:09.720Z"
source: "https://vercel.com/docs/errors/INTERNAL\_UNARCHIVE\_FAILED"

# INTERNAL\_UNARCHIVE\_FAILED

The `INTERNAL_UNARCHIVE_FAILED` error typically occurs when the platform encounters a problem trying to extract your deployment's archive. This issue often can be related to one of the following:

- The structure of your project or the contents within it
- The size of your deployment bundle for Vercel functions exceeds the limit. For Vercel functions, the [maximum uncompressed size is 250 MB](/docs/functions/runtimes#bundle-size-limits)

**Error Code:** `500`

**Name:** Internal Server Error

## Troubleshoot

To troubleshoot this error, follow these steps:

- **Check your project files**: Check for any files or directories that have been unnecessarily included in the deployment. Removing unnecessary files or directories can help reduce the size of your deployment
- **Check bundle size**: Looking into your `includeFiles` and `excludeFiles` configuration to specify items affecting the function size. See [bundle size limits](/docs/functions/runtimes#bundle-size-limits)

title: "INTERNAL\_UNEXPECTED\_ERROR"
description: "An unexpected internal error occurred. This is a general internal error."
last\_updated: "2026-03-23T09:40:09.723Z"
source: "https://vercel.com/docs/errors/INTERNAL\_UNEXPECTED\_ERROR"

# INTERNAL\_UNEXPECTED\_ERROR

The `INTERNAL_UNEXPECTED_ERROR` error occurs when an unexpected and unspecified internal error happens within the system. This type of error can be due to a variety of reasons, including system faults, unhandled exceptions, or unforeseen issues in the application.

**Error Code:** `500`

**Name:** Internal Server Error

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Contact support:** Since this error is general and could be due to a variety of reasons, [contact support](/help#issues) for further assistance, supplying your deployment ID

title: "INVALID\_IMAGE\_OPTIMIZE\_REQUEST"
description: "The query string is using an invalid value for q, w, or url parameters. This is a request error."
last\_updated: "2026-03-23T09:40:09.736Z"
source: "https://vercel.com/docs/errors/INVALID\_IMAGE\_OPTIMIZE\_REQUEST"
