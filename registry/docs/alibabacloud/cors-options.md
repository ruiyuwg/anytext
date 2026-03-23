Use the `cors-options` command to send an HTTP OPTIONS preflight request to Object Storage Service (OSS) and verify whether a specific cross-origin request is allowed by your bucket's CORS rules.

> For ossutil 1.6.16 and later, use `ossutil` directly as the binary name. For earlier versions, update the binary name based on your operating system. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).

## How it works

When OSS receives a preflight request, it evaluates the bucket's CORS configuration and uses the first matching rule to decide whether to allow the cross-origin request. A rule matches only when all three conditions are met:

-   The `--origin` value matches an allowed origin in the CORS rule.
    
-   The `--acr-method` value matches an allowed method in the CORS rule.
    
-   All headers in `--acr-headers` match the allowed headers in the CORS rule.
    

If no rule matches, OSS returns a `403 AccessForbidden` error.

## Command syntax

```
ossutil cors-options oss://bucketname/[objectname]
[--acr-method <value>]
[--origin <value>]
[--acr-headers <value>]
```

**Parameter**

**Description**

`bucketname`

The name of the bucket to check.

`objectname`

The name of the object to check. Optional.

`--acr-method`

The HTTP method to test. Corresponds to the `Access-Control-Request-Method` header. Valid values: `GET`, `PUT`, `POST`, `DELETE`, `HEAD`.

`--origin`

The origin to test. Corresponds to the `Origin` request header. Must be in `scheme://host` or `scheme://host:port` format with no trailing slash or path. Example: `http://www.aliyun.com`.

`--acr-headers`

The non-simple request headers to test. Corresponds to the `Access-Control-Request-Headers` header. Separate multiple headers with commas. Optional. Example: `--acr-headers "header1,header2,header3"`.

## Examples

**Check whether a bucket allows a cross-origin PUT request**

The following command checks whether `examplebucket` allows `PUT` requests from `http://www.aliyun.com`:

```
ossutil cors-options --acr-method put --origin "http://www.aliyun.com" oss://examplebucket
```

If the bucket's CORS rules allow the request, OSS returns the CORS response headers:

```
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Origin: *
Access-Control-Max-Age: 0

0.079520(s) elapsed
```

If no CORS rule matches, OSS returns a 403 error:

```
Error: oss: service returned error: StatusCode=403, ErrorCode=AccessForbidden, ErrorMessage="CORSResponse: This CORS request is not allowed. This is usually
 because the evalution of Origin, request method / Access-Control-Request-Method or Access-Control-Requet-Headers are not whitelisted by the resource's CORS
 spec.", RequestId=60F7F55F553DA2363138****
```

## Common options

To access a bucket owned by a different Alibaba Cloud account or located in a specific region, pass the endpoint and credentials using common options.

The following command checks whether `testbucket` in the China (Hangzhou) region allows `PUT` requests from `http://www.alibabacloud.com`:

```
ossutil cors-options --acr-method put --origin "http://www.alibabacloud.com" oss:/testbucket -e oss-cn-hangzhou.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For the full list of common options, see [Common options](/help/en/oss/developer-reference/view-options).

## Troubleshooting

**The request returns 403 even though the origin looks correct**

Check the format of the `--origin` value. A valid origin is `scheme://host` or `scheme://host:port` with no trailing slash and no path component.

-   Valid: `http://www.aliyun.com`
    
-   Invalid: `http://www.aliyun.com/` or `http://www.aliyun.com/api`
    

**Not sure which CORS rule is blocking the request**

Open your browser's DevTools, go to the **Network** tab, and find the blocked preflight request. Compare its `Origin`, `Access-Control-Request-Method`, and `Access-Control-Request-Headers` values against your bucket's CORS rules. All three must match the same rule for the request to be allowed.

**The command returns no CORS headers**

CORS response headers are only returned for cross-origin requests. Include the `--origin` option in your command. Without it, OSS does not evaluate CORS rules and returns no CORS response headers.

## What's next

-   To configure CORS rules on a bucket, see [cors](/help/en/oss/developer-reference/cors-11#concept-303816).
