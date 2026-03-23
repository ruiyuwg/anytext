-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface HttpTargetOrBuilder (2.28.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.13 2.2.0 2.1.23

```
public interface HttpTargetOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsHeaders(String key)

```
public abstract boolean containsHeaders(String key)
```

The user can specify HTTP request headers to send with the job's HTTP request. This map contains the header field names and values. Repeated headers are not supported, but a header value can contain commas. These headers represent a subset of the headers that will accompany the job's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is below:

-   Host: This will be computed by Cloud Scheduler and derived from uri.
-   `Content-Length`: This will be computed by Cloud Scheduler.
-   `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`.
-   `X-Google-*`: Google internal use only.
-   `X-AppEngine-*`: Google internal use only.
-   `X-CloudScheduler`: This header will be set to true.
-   `X-CloudScheduler-JobName`: This header will contain the job name.
-   `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule time in RFC3339 UTC "Zulu" format.
    
    The total size of headers must be less than 80KB.
    

`map<string, string> headers = 3;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAuthorizationHeaderCase()

```
public abstract HttpTarget.AuthorizationHeaderCase getAuthorizationHeaderCase()
```

**Returns**

**Type**

**Description**

`[HttpTarget.AuthorizationHeaderCase](/java/docs/reference/google-cloud-scheduler/2.28.0/com.google.cloud.scheduler.v1.HttpTarget.AuthorizationHeaderCase)`

### getBody()

```
public abstract ByteString getBody()
```

HTTP request body. A request body is allowed only if the HTTP method is POST, PUT, or PATCH. It is an error to set body on a job with an incompatible HttpMethod.

`bytes body = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The body.

### getHeaders()

```
public abstract Map<String,String> getHeaders()
```

Use [#getHeadersMap()](/java/docs/reference/google-cloud-scheduler/2.28.0/com.google.cloud.scheduler.v1.HttpTargetOrBuilder#com_google_cloud_scheduler_v1_HttpTargetOrBuilder_getHeadersMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getHeadersCount()

```
public abstract int getHeadersCount()
```

The user can specify HTTP request headers to send with the job's HTTP request. This map contains the header field names and values. Repeated headers are not supported, but a header value can contain commas. These headers represent a subset of the headers that will accompany the job's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is below:

-   Host: This will be computed by Cloud Scheduler and derived from uri.
-   `Content-Length`: This will be computed by Cloud Scheduler.
-   `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`.
-   `X-Google-*`: Google internal use only.
-   `X-AppEngine-*`: Google internal use only.
-   `X-CloudScheduler`: This header will be set to true.
-   `X-CloudScheduler-JobName`: This header will contain the job name.
-   `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule time in RFC3339 UTC "Zulu" format.
    
    The total size of headers must be less than 80KB.
    

`map<string, string> headers = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getHeadersMap()

```
public abstract Map<String,String> getHeadersMap()
```

The user can specify HTTP request headers to send with the job's HTTP request. This map contains the header field names and values. Repeated headers are not supported, but a header value can contain commas. These headers represent a subset of the headers that will accompany the job's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is below:

-   Host: This will be computed by Cloud Scheduler and derived from uri.
-   `Content-Length`: This will be computed by Cloud Scheduler.
-   `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`.
-   `X-Google-*`: Google internal use only.
-   `X-AppEngine-*`: Google internal use only.
-   `X-CloudScheduler`: This header will be set to true.
-   `X-CloudScheduler-JobName`: This header will contain the job name.
-   `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule time in RFC3339 UTC "Zulu" format.
    
    The total size of headers must be less than 80KB.
    

`map<string, string> headers = 3;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getHeadersOrDefault(String key, String defaultValue)

```
public abstract String getHeadersOrDefault(String key, String defaultValue)
```

The user can specify HTTP request headers to send with the job's HTTP request. This map contains the header field names and values. Repeated headers are not supported, but a header value can contain commas. These headers represent a subset of the headers that will accompany the job's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is below:

-   Host: This will be computed by Cloud Scheduler and derived from uri.
-   `Content-Length`: This will be computed by Cloud Scheduler.
-   `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`.
-   `X-Google-*`: Google internal use only.
-   `X-AppEngine-*`: Google internal use only.
-   `X-CloudScheduler`: This header will be set to true.
-   `X-CloudScheduler-JobName`: This header will contain the job name.
-   `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule time in RFC3339 UTC "Zulu" format.
    
    The total size of headers must be less than 80KB.
    

`map<string, string> headers = 3;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getHeadersOrThrow(String key)

```
public abstract String getHeadersOrThrow(String key)
```

The user can specify HTTP request headers to send with the job's HTTP request. This map contains the header field names and values. Repeated headers are not supported, but a header value can contain commas. These headers represent a subset of the headers that will accompany the job's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is below:

-   Host: This will be computed by Cloud Scheduler and derived from uri.
-   `Content-Length`: This will be computed by Cloud Scheduler.
-   `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`.
-   `X-Google-*`: Google internal use only.
-   `X-AppEngine-*`: Google internal use only.
-   `X-CloudScheduler`: This header will be set to true.
-   `X-CloudScheduler-JobName`: This header will contain the job name.
-   `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule time in RFC3339 UTC "Zulu" format.
    
    The total size of headers must be less than 80KB.
    

`map<string, string> headers = 3;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getHttpMethod()

```
public abstract HttpMethod getHttpMethod()
```

Which HTTP method to use for the request.

`.google.cloud.scheduler.v1.HttpMethod http_method = 2;`

**Returns**

**Type**

**Description**

`[HttpMethod](/java/docs/reference/google-cloud-scheduler/2.28.0/com.google.cloud.scheduler.v1.HttpMethod)`

The httpMethod.

### getHttpMethodValue()

```
public abstract int getHttpMethodValue()
```

Which HTTP method to use for the request.

`.google.cloud.scheduler.v1.HttpMethod http_method = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for httpMethod.

### getOauthToken()

```
public abstract OAuthToken getOauthToken()
```

If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization should generally only be used when calling Google APIs hosted on \*.googleapis.com.

`.google.cloud.scheduler.v1.OAuthToken oauth_token = 5;`

**Returns**

**Type**

**Description**

`[OAuthToken](/java/docs/reference/google-cloud-scheduler/2.28.0/com.google.cloud.scheduler.v1.OAuthToken)`

The oauthToken.

### getOauthTokenOrBuilder()

```
public abstract OAuthTokenOrBuilder getOauthTokenOrBuilder()
```

If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization should generally only be used when calling Google APIs hosted on \*.googleapis.com.

`.google.cloud.scheduler.v1.OAuthToken oauth_token = 5;`

**Returns**

**Type**

**Description**

`[OAuthTokenOrBuilder](/java/docs/reference/google-cloud-scheduler/2.28.0/com.google.cloud.scheduler.v1.OAuthTokenOrBuilder)`

### getOidcToken()

```
public abstract OidcToken getOidcToken()
```

If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.

`.google.cloud.scheduler.v1.OidcToken oidc_token = 6;`

**Returns**

**Type**

**Description**

`[OidcToken](/java/docs/reference/google-cloud-scheduler/2.28.0/com.google.cloud.scheduler.v1.OidcToken)`

The oidcToken.

### getOidcTokenOrBuilder()

```
public abstract OidcTokenOrBuilder getOidcTokenOrBuilder()
```

If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.

`.google.cloud.scheduler.v1.OidcToken oidc_token = 6;`

**Returns**

**Type**

**Description**

`[OidcTokenOrBuilder](/java/docs/reference/google-cloud-scheduler/2.28.0/com.google.cloud.scheduler.v1.OidcTokenOrBuilder)`

### getUri()

```
public abstract String getUri()
```

Required. The full URI path that the request will be sent to. This string must begin with either "http://" or "https://". Some examples of valid values for uri are: `[http://acme.com](http://acme.com)` and `[https://acme.com/sales:8080](https://acme.com/sales:8080)`. Cloud Scheduler will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding.

`string uri = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The uri.

### getUriBytes()

```
public abstract ByteString getUriBytes()
```

Required. The full URI path that the request will be sent to. This string must begin with either "http://" or "https://". Some examples of valid values for uri are: `[http://acme.com](http://acme.com)` and `[https://acme.com/sales:8080](https://acme.com/sales:8080)`. Cloud Scheduler will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding.

`string uri = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for uri.

### hasOauthToken()

```
public abstract boolean hasOauthToken()
```

If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization should generally only be used when calling Google APIs hosted on \*.googleapis.com.

`.google.cloud.scheduler.v1.OAuthToken oauth_token = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the oauthToken field is set.

### hasOidcToken()

```
public abstract boolean hasOidcToken()
```

If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.

`.google.cloud.scheduler.v1.OidcToken oidc_token = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the oidcToken field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
