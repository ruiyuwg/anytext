# INVALID\_IMAGE\_OPTIMIZE\_REQUEST

The `INVALID_IMAGE_OPTIMIZE_REQUEST` error occurs when the query string is using an invalid value for `q` (quality) or `w` (width), or `url` returns a non-image response.

**Error Code:** `400`

**Name:** Bad Request

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check for typos:** Verify that there are no typos in the parameter names or values
2. **Review request format:** Ensure that the request URL is correctly formatted and includes the required parameters
   - The `q` parameter controls the quality of the image and must follow these rules:
     - The `q` parameter must be an integer
     - The `q` integer must be greater than or equal to 1
     - The `q` integer must be less than or equal to 100
     - The `q` integer must be the same as one specified in [`qualities`](https://nextjs.org/docs/app/api-reference/components/image#qualities), if defined
   - The `w` parameter defines the width of the image and must follow these rules:
     - The `w` parameter must be an integer
     - The `w` integer must be the same as one specified in [`deviceSizes`](https://nextjs.org/docs/app/api-reference/components/image#devicesizes) or [`imageSizes`](https://nextjs.org/docs/app/api-reference/components/image#imagesizes) in your [`next.config.js`](https://nextjs.org/docs/app/api-reference/next-config-js).
   - The `url` parameter specifies the image location and must follow these rules:
     - The `url` parameter must start with `/`, `http://`, or `https://`
     - The `url` parameter must match one of the configured [`remotePatterns`](https://nextjs.org/docs/app/api-reference/components/image#remotepatterns) or [`localPatterns`](https://nextjs.org/docs/app/api-reference/components/image#localpatterns) in your `next.config.js`
     - The `url` parameter must have a `Content-Type` header that starts with `image/`
     - The `url` parameter must have a response body **less than 300 MB** (or **less than 100 MB for hobby**), otherwise the image won't be optimized

Run `next dev` locally to reproduce the error and get additional details.

title: "INVALID\_REQUEST\_METHOD"
description: "The request method used is invalid or not supported. This is a request error."
last\_updated: "2026-03-23T09:40:09.740Z"
source: "https://vercel.com/docs/errors/INVALID\_REQUEST\_METHOD"

# INVALID\_REQUEST\_METHOD

The `INVALID_REQUEST_METHOD` error occurs when a request is made with a method that is either invalid or not supported by the server. This error typically happens when trying to use an HTTP method that the endpoint does not accept or recognize.

**Error Code:** `405`

**Name:** Method Not Allowed

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Verify request method:** Ensure that the HTTP request method used is correct and supported by the endpoint. Common HTTP methods include `GET`, `POST`, `PUT`, `DELETE` etc
2. **Review code:** Check the code where the request is being made to ensure the correct method is being used
3. **Test with different methods:** If possible, test the endpoint with different HTTP methods to determine if the issue is with the method or another part of the request

title: "MALFORMED\_REQUEST\_HEADER"
description: "The MALFORMED\_REQUEST\_HEADER error occurs when a request contains an improperly formatted or invalid header. This is a request error."
last\_updated: "2026-03-23T09:40:09.743Z"
source: "https://vercel.com/docs/errors/MALFORMED\_REQUEST\_HEADER"

# MALFORMED\_REQUEST\_HEADER

The `MALFORMED_REQUEST_HEADER` error signifies that a request made to the server includes a header that is incorrectly formatted or contains invalid data. This could be due to syntax errors, incorrect header field names, or incompatible header values.

**Error Code:** `400`

**Name:** Bad Request

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Inspect request headers**: Review the headers in your request. Ensure that they are correctly formatted and adhere to the [HTTP standard](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)
2. **Validate UTF-8 encoding**: Confirm that all request headers, especially cookie values, are valid UTF-8 strings. Non-UTF-8 characters in headers, particularly in the cookie header, often cause this error
3. **Examine Vercel Function behavior**: Since this error is specific to Vercel functions, verify the functionality and responses of your Vercel functions. Ensure they are correctly handling request headers and not contributing to malformed responses

title: "MICROFRONTENDS\_MIDDLEWARE\_ERROR"
description: "The microfrontend middleware returned an invalid application."
last\_updated: "2026-03-23T09:40:09.747Z"
source: "https://vercel.com/docs/errors/MICROFRONTENDS\_MIDDLEWARE\_ERROR"

# MICROFRONTENDS\_MIDDLEWARE\_ERROR

The `MICROFRONTENDS_MIDDLEWARE_ERROR` error occurs when the middleware returned a header `x-vercel-mfe-zone` with an invalid value. The value must be a name of an application from `microfrontends.json`.

## Troubleshoot

To troubleshoot this error, follow these steps:

1. If you are setting the header, ensure that the value is a valid application name.
2. If you are not setting the header, this is an error caused by the [@vercel/microfrontends](https://www.npmjs.com/package/@vercel/microfrontends) package. Please [open an issue](https://github.com/vercel/microfrontends/issues) and include the error message.

title: "MICROFRONTENDS\_MISSING\_FALLBACK\_ERROR"
description: "The microfrontend request did not have a fallback for the environment."
last\_updated: "2026-03-23T09:40:09.750Z"
source: "https://vercel.com/docs/errors/MICROFRONTENDS\_MISSING\_FALLBACK\_ERROR"

# MICROFRONTENDS\_MISSING\_FALLBACK\_ERROR

The `MICROFRONTENDS_MISSING_FALLBACK_ERROR` error occurs when a microfrontends request did not match any other deployments in the same environment, and no deployment could be found for the specified fallback.

## Troubleshoot

To troubleshoot this error, follow these steps:

In the [Production](/docs/deployments/environments#production-environment) environment, this error should not occur since every request is routed to the Production environment of mcirofrontends projects. Make sure that every project in the microfrontends group has a production deployment.

In non-Production environments, the fallback is configured in the [Fallback Environment](/docs/microfrontends/managing-microfrontends#fallback-environment) setting. Based on the configured option, check that every project has a deployment for that environment.

If the issue persists after checking that every project has a deployment in the configured Fallback Environment setting, please contact Vercel support to reach out to the team.

title: "MIDDLEWARE\_INVOCATION\_FAILED"
description: "The request for an Routing Middleware was not completed successfully. This is an application error."
last\_updated: "2026-03-23T09:40:09.754Z"
source: "https://vercel.com/docs/errors/MIDDLEWARE\_INVOCATION\_FAILED"

# MIDDLEWARE\_INVOCATION\_FAILED

The `MIDDLEWARE_INVOCATION_FAILED` error occurs when there is an issue with the Routing Middleware being invoked on the CDN. This error can be caused by a variety of issues, including unhandled exceptions.

**Error Code:** `500`

**Name:** Internal Server Error

## Troubleshoot

To troubleshoot this error, follow these steps:

1. **Check application logs**: Review the application logs to identify any specific errors related to the Routing Middleware being invoked. They can be found at the host URL under [the `/_logs` path](/docs/deployments/build-features#logs-view)
2. **Use Vercel's status page**: If you have tried the steps above and are still experiencing the error, check Vercel's [status page](https://www.vercel-status.com/) for any reported outages in the CDN, which can sometimes cause this error
3. **Check function code**: Ensure that the code for the Routing Middleware is correct and does not contain any errors or infinite loops

title: "MIDDLEWARE\_INVOCATION\_TIMEOUT"
description: "The Routing Middleware invocation timed out. This is an application error."
last\_updated: "2026-03-23T09:40:09.763Z"
source: "https://vercel.com/docs/errors/MIDDLEWARE\_INVOCATION\_TIMEOUT"
