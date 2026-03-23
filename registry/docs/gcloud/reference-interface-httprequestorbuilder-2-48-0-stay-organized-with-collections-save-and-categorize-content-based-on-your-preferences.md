-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface HttpRequestOrBuilder (2.48.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.12 2.2.0 2.1.11

```
public interface HttpRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsHeaders(String key)

```
public abstract boolean containsHeaders(String key)
```

HTTP request headers.

This map contains the header field names and values. Headers can be set when the task is created.

These headers represent a subset of the headers that will accompany the task's HTTP request. Some HTTP request headers will be ignored or replaced.

A partial list of headers that will be ignored or replaced is:

-   Any header that is prefixed with "X-CloudTasks-" will be treated as service header. Service headers define properties of the task and are predefined in CloudTask.
-   Host: This will be computed by Cloud Tasks and derived from HttpRequest.url.
-   Content-Length: This will be computed by Cloud Tasks.
-   User-Agent: This will be set to `"Google-Cloud-Tasks"`.
-   `X-Google-*`: Google use only.
-   `X-AppEngine-*`: Google use only.
    
    `Content-Type` won't be set by Cloud Tasks. You can explicitly set `Content-Type` to a media type when the task is created. For example, `Content-Type` can be set to `"application/octet-stream"` or `"application/json"`.
    
    Headers which can have multiple values (according to RFC2616) can be specified using comma-separated values.
    
    The size of the headers must be less than 80KB.
    

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
public abstract HttpRequest.AuthorizationHeaderCase getAuthorizationHeaderCase()
```

**Returns**

**Type**

**Description**

`[HttpRequest.AuthorizationHeaderCase](/java/docs/reference/google-cloud-tasks/2.48.0/com.google.cloud.tasks.v2beta3.HttpRequest.AuthorizationHeaderCase)`

### getBody()

```
public abstract ByteString getBody()
```

HTTP request body.

A request body is allowed only if the HTTP method is POST, PUT, or PATCH. It is an error to set body on a task with an incompatible HttpMethod.

`bytes body = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The body.

### getHeaders() (deprecated)

```
public abstract Map<String,String> getHeaders()
```

Use [#getHeadersMap()](/java/docs/reference/google-cloud-tasks/2.48.0/com.google.cloud.tasks.v2beta3.HttpRequestOrBuilder#com_google_cloud_tasks_v2beta3_HttpRequestOrBuilder_getHeadersMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getHeadersCount()

```
public abstract int getHeadersCount()
```

HTTP request headers.

This map contains the header field names and values. Headers can be set when the task is created.

These headers represent a subset of the headers that will accompany the task's HTTP request. Some HTTP request headers will be ignored or replaced.

A partial list of headers that will be ignored or replaced is:

-   Any header that is prefixed with "X-CloudTasks-" will be treated as service header. Service headers define properties of the task and are predefined in CloudTask.
-   Host: This will be computed by Cloud Tasks and derived from HttpRequest.url.
-   Content-Length: This will be computed by Cloud Tasks.
-   User-Agent: This will be set to `"Google-Cloud-Tasks"`.
-   `X-Google-*`: Google use only.
-   `X-AppEngine-*`: Google use only.
    
    `Content-Type` won't be set by Cloud Tasks. You can explicitly set `Content-Type` to a media type when the task is created. For example, `Content-Type` can be set to `"application/octet-stream"` or `"application/json"`.
    
    Headers which can have multiple values (according to RFC2616) can be specified using comma-separated values.
    
    The size of the headers must be less than 80KB.
    

`map<string, string> headers = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getHeadersMap()

```
public abstract Map<String,String> getHeadersMap()
```

HTTP request headers.

This map contains the header field names and values. Headers can be set when the task is created.

These headers represent a subset of the headers that will accompany the task's HTTP request. Some HTTP request headers will be ignored or replaced.

A partial list of headers that will be ignored or replaced is:

-   Any header that is prefixed with "X-CloudTasks-" will be treated as service header. Service headers define properties of the task and are predefined in CloudTask.
-   Host: This will be computed by Cloud Tasks and derived from HttpRequest.url.
-   Content-Length: This will be computed by Cloud Tasks.
-   User-Agent: This will be set to `"Google-Cloud-Tasks"`.
-   `X-Google-*`: Google use only.
-   `X-AppEngine-*`: Google use only.
    
    `Content-Type` won't be set by Cloud Tasks. You can explicitly set `Content-Type` to a media type when the task is created. For example, `Content-Type` can be set to `"application/octet-stream"` or `"application/json"`.
    
    Headers which can have multiple values (according to RFC2616) can be specified using comma-separated values.
    
    The size of the headers must be less than 80KB.
    

`map<string, string> headers = 3;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getHeadersOrDefault(String key, String defaultValue)

```
public abstract String getHeadersOrDefault(String key, String defaultValue)
```

HTTP request headers.

This map contains the header field names and values. Headers can be set when the task is created.

These headers represent a subset of the headers that will accompany the task's HTTP request. Some HTTP request headers will be ignored or replaced.

A partial list of headers that will be ignored or replaced is:

-   Any header that is prefixed with "X-CloudTasks-" will be treated as service header. Service headers define properties of the task and are predefined in CloudTask.
-   Host: This will be computed by Cloud Tasks and derived from HttpRequest.url.
-   Content-Length: This will be computed by Cloud Tasks.
-   User-Agent: This will be set to `"Google-Cloud-Tasks"`.
-   `X-Google-*`: Google use only.
-   `X-AppEngine-*`: Google use only.
    
    `Content-Type` won't be set by Cloud Tasks. You can explicitly set `Content-Type` to a media type when the task is created. For example, `Content-Type` can be set to `"application/octet-stream"` or `"application/json"`.
    
    Headers which can have multiple values (according to RFC2616) can be specified using comma-separated values.
    
    The size of the headers must be less than 80KB.
    

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

HTTP request headers.

This map contains the header field names and values. Headers can be set when the task is created.

These headers represent a subset of the headers that will accompany the task's HTTP request. Some HTTP request headers will be ignored or replaced.

A partial list of headers that will be ignored or replaced is:

-   Any header that is prefixed with "X-CloudTasks-" will be treated as service header. Service headers define properties of the task and are predefined in CloudTask.
-   Host: This will be computed by Cloud Tasks and derived from HttpRequest.url.
-   Content-Length: This will be computed by Cloud Tasks.
-   User-Agent: This will be set to `"Google-Cloud-Tasks"`.
-   `X-Google-*`: Google use only.
-   `X-AppEngine-*`: Google use only.
    
    `Content-Type` won't be set by Cloud Tasks. You can explicitly set `Content-Type` to a media type when the task is created. For example, `Content-Type` can be set to `"application/octet-stream"` or `"application/json"`.
    
    Headers which can have multiple values (according to RFC2616) can be specified using comma-separated values.
    
    The size of the headers must be less than 80KB.
    

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

The HTTP method to use for the request. The default is POST.

`.google.cloud.tasks.v2beta3.HttpMethod http_method = 2;`

**Returns**

**Type**

**Description**

`[HttpMethod](/java/docs/reference/google-cloud-tasks/2.48.0/com.google.cloud.tasks.v2beta3.HttpMethod)`

The httpMethod.

### getHttpMethodValue()

```
public abstract int getHttpMethodValue()
```

The HTTP method to use for the request. The default is POST.

`.google.cloud.tasks.v2beta3.HttpMethod http_method = 2;`

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

`.google.cloud.tasks.v2beta3.OAuthToken oauth_token = 5;`

**Returns**

**Type**

**Description**

`[OAuthToken](/java/docs/reference/google-cloud-tasks/2.48.0/com.google.cloud.tasks.v2beta3.OAuthToken)`

The oauthToken.

### getOauthTokenOrBuilder()

```
public abstract OAuthTokenOrBuilder getOauthTokenOrBuilder()
```

If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization should generally only be used when calling Google APIs hosted on \*.googleapis.com.

`.google.cloud.tasks.v2beta3.OAuthToken oauth_token = 5;`

**Returns**

**Type**

**Description**

`[OAuthTokenOrBuilder](/java/docs/reference/google-cloud-tasks/2.48.0/com.google.cloud.tasks.v2beta3.OAuthTokenOrBuilder)`

### getOidcToken()

```
public abstract OidcToken getOidcToken()
```

If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.

`.google.cloud.tasks.v2beta3.OidcToken oidc_token = 6;`

**Returns**

**Type**

**Description**

`[OidcToken](/java/docs/reference/google-cloud-tasks/2.48.0/com.google.cloud.tasks.v2beta3.OidcToken)`

The oidcToken.

### getOidcTokenOrBuilder()

```
public abstract OidcTokenOrBuilder getOidcTokenOrBuilder()
```

If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.

`.google.cloud.tasks.v2beta3.OidcToken oidc_token = 6;`

**Returns**

**Type**

**Description**

`[OidcTokenOrBuilder](/java/docs/reference/google-cloud-tasks/2.48.0/com.google.cloud.tasks.v2beta3.OidcTokenOrBuilder)`

### getUrl()

```
public abstract String getUrl()
```

Required. The full url path that the request will be sent to.

This string must begin with either "http://" or "https://". Some examples are: `[http://acme.com](http://acme.com)` and `[https://acme.com/sales:8080](https://acme.com/sales:8080)`. Cloud Tasks will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding.

The `Location` header response from a redirect response \[`300` - `399`\] may be followed. The redirect is not counted as a separate attempt.

`string url = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The url.

### getUrlBytes()

```
public abstract ByteString getUrlBytes()
```

Required. The full url path that the request will be sent to.

This string must begin with either "http://" or "https://". Some examples are: `[http://acme.com](http://acme.com)` and `[https://acme.com/sales:8080](https://acme.com/sales:8080)`. Cloud Tasks will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding.

The `Location` header response from a redirect response \[`300` - `399`\] may be followed. The redirect is not counted as a separate attempt.

`string url = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for url.

### hasOauthToken()

```
public abstract boolean hasOauthToken()
```

If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization should generally only be used when calling Google APIs hosted on \*.googleapis.com.

`.google.cloud.tasks.v2beta3.OAuthToken oauth_token = 5;`

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

`.google.cloud.tasks.v2beta3.OidcToken oidc_token = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the oidcToken field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
