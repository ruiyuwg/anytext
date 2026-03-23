-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface HttpRoute.RouteActionOrBuilder (0.13.0) Stay organized with collections Save and categorize content based on your preferences.

0.43.0 (latest) 0.41.0 0.39.0 0.38.0 0.36.0 0.34.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.26.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static interface HttpRoute.RouteActionOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCorsPolicy()

```
public abstract HttpRoute.CorsPolicy getCorsPolicy()
```

The specification for allowing client side cross-origin requests.

`.google.cloud.networkservices.v1.HttpRoute.CorsPolicy cors_policy = 11;`

**Returns**

**Type**

**Description**

`[HttpRoute.CorsPolicy](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.CorsPolicy)`

The corsPolicy.

### getCorsPolicyOrBuilder()

```
public abstract HttpRoute.CorsPolicyOrBuilder getCorsPolicyOrBuilder()
```

The specification for allowing client side cross-origin requests.

`.google.cloud.networkservices.v1.HttpRoute.CorsPolicy cors_policy = 11;`

**Returns**

**Type**

**Description**

`[HttpRoute.CorsPolicyOrBuilder](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.CorsPolicyOrBuilder)`

### getDestinations(int index)

```
public abstract HttpRoute.Destination getDestinations(int index)
```

The destination to which traffic should be forwarded.

`repeated .google.cloud.networkservices.v1.HttpRoute.Destination destinations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.Destination](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.Destination)`

### getDestinationsCount()

```
public abstract int getDestinationsCount()
```

The destination to which traffic should be forwarded.

`repeated .google.cloud.networkservices.v1.HttpRoute.Destination destinations = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getDestinationsList()

```
public abstract List<HttpRoute.Destination> getDestinationsList()
```

The destination to which traffic should be forwarded.

`repeated .google.cloud.networkservices.v1.HttpRoute.Destination destinations = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Destination](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.Destination)>`

### getDestinationsOrBuilder(int index)

```
public abstract HttpRoute.DestinationOrBuilder getDestinationsOrBuilder(int index)
```

The destination to which traffic should be forwarded.

`repeated .google.cloud.networkservices.v1.HttpRoute.Destination destinations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.DestinationOrBuilder](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.DestinationOrBuilder)`

### getDestinationsOrBuilderList()

```
public abstract List<? extends HttpRoute.DestinationOrBuilder> getDestinationsOrBuilderList()
```

The destination to which traffic should be forwarded.

`repeated .google.cloud.networkservices.v1.HttpRoute.Destination destinations = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.networkservices.v1.HttpRoute.DestinationOrBuilder>`

### getFaultInjectionPolicy()

```
public abstract HttpRoute.FaultInjectionPolicy getFaultInjectionPolicy()
```

The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure. As part of fault injection, when clients send requests to a backend service, delays can be introduced on a percentage of requests before sending those requests to the backend service. Similarly requests from clients can be aborted for a percentage of requests.

timeout and retry\_policy will be ignored by clients that are configured with a fault\_injection\_policy

`.google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy fault_injection_policy = 4;`

**Returns**

**Type**

**Description**

`[HttpRoute.FaultInjectionPolicy](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy)`

The faultInjectionPolicy.

### getFaultInjectionPolicyOrBuilder()

```
public abstract HttpRoute.FaultInjectionPolicyOrBuilder getFaultInjectionPolicyOrBuilder()
```

The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure. As part of fault injection, when clients send requests to a backend service, delays can be introduced on a percentage of requests before sending those requests to the backend service. Similarly requests from clients can be aborted for a percentage of requests.

timeout and retry\_policy will be ignored by clients that are configured with a fault\_injection\_policy

`.google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy fault_injection_policy = 4;`

**Returns**

**Type**

**Description**

`[HttpRoute.FaultInjectionPolicyOrBuilder](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicyOrBuilder)`

### getRedirect()

```
public abstract HttpRoute.Redirect getRedirect()
```

If set, the request is directed as configured by this field.

`.google.cloud.networkservices.v1.HttpRoute.Redirect redirect = 2;`

**Returns**

**Type**

**Description**

`[HttpRoute.Redirect](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.Redirect)`

The redirect.

### getRedirectOrBuilder()

```
public abstract HttpRoute.RedirectOrBuilder getRedirectOrBuilder()
```

If set, the request is directed as configured by this field.

`.google.cloud.networkservices.v1.HttpRoute.Redirect redirect = 2;`

**Returns**

**Type**

**Description**

`[HttpRoute.RedirectOrBuilder](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.RedirectOrBuilder)`

### getRequestHeaderModifier()

```
public abstract HttpRoute.HeaderModifier getRequestHeaderModifier()
```

The specification for modifying the headers of a matching request prior to delivery of the request to the destination. If HeaderModifiers are set on both the Destination and the RouteAction, they will be merged. Conflicts between the two will not be resolved on the configuration.

`.google.cloud.networkservices.v1.HttpRoute.HeaderModifier request_header_modifier = 5;`

**Returns**

**Type**

**Description**

`[HttpRoute.HeaderModifier](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderModifier)`

The requestHeaderModifier.

### getRequestHeaderModifierOrBuilder()

```
public abstract HttpRoute.HeaderModifierOrBuilder getRequestHeaderModifierOrBuilder()
```

The specification for modifying the headers of a matching request prior to delivery of the request to the destination. If HeaderModifiers are set on both the Destination and the RouteAction, they will be merged. Conflicts between the two will not be resolved on the configuration.

`.google.cloud.networkservices.v1.HttpRoute.HeaderModifier request_header_modifier = 5;`

**Returns**

**Type**

**Description**

`[HttpRoute.HeaderModifierOrBuilder](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderModifierOrBuilder)`

### getRequestMirrorPolicy()

```
public abstract HttpRoute.RequestMirrorPolicy getRequestMirrorPolicy()
```

Specifies the policy on how requests intended for the routes destination are shadowed to a separate mirrored destination. Proxy will not wait for the shadow destination to respond before returning the response. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow.

`.google.cloud.networkservices.v1.HttpRoute.RequestMirrorPolicy request_mirror_policy = 10;`

**Returns**

**Type**

**Description**

`[HttpRoute.RequestMirrorPolicy](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.RequestMirrorPolicy)`

The requestMirrorPolicy.

### getRequestMirrorPolicyOrBuilder()

```
public abstract HttpRoute.RequestMirrorPolicyOrBuilder getRequestMirrorPolicyOrBuilder()
```

Specifies the policy on how requests intended for the routes destination are shadowed to a separate mirrored destination. Proxy will not wait for the shadow destination to respond before returning the response. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow.

`.google.cloud.networkservices.v1.HttpRoute.RequestMirrorPolicy request_mirror_policy = 10;`

**Returns**

**Type**

**Description**

`[HttpRoute.RequestMirrorPolicyOrBuilder](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.RequestMirrorPolicyOrBuilder)`

### getResponseHeaderModifier()

```
public abstract HttpRoute.HeaderModifier getResponseHeaderModifier()
```

The specification for modifying the headers of a response prior to sending the response back to the client. If HeaderModifiers are set on both the Destination and the RouteAction, they will be merged. Conflicts between the two will not be resolved on the configuration.

`.google.cloud.networkservices.v1.HttpRoute.HeaderModifier response_header_modifier = 6;`

**Returns**

**Type**

**Description**

`[HttpRoute.HeaderModifier](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderModifier)`

The responseHeaderModifier.

### getResponseHeaderModifierOrBuilder()

```
public abstract HttpRoute.HeaderModifierOrBuilder getResponseHeaderModifierOrBuilder()
```

The specification for modifying the headers of a response prior to sending the response back to the client. If HeaderModifiers are set on both the Destination and the RouteAction, they will be merged. Conflicts between the two will not be resolved on the configuration.

`.google.cloud.networkservices.v1.HttpRoute.HeaderModifier response_header_modifier = 6;`

**Returns**

**Type**

**Description**

`[HttpRoute.HeaderModifierOrBuilder](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderModifierOrBuilder)`

### getRetryPolicy()

```
public abstract HttpRoute.RetryPolicy getRetryPolicy()
```

Specifies the retry policy associated with this route.

`.google.cloud.networkservices.v1.HttpRoute.RetryPolicy retry_policy = 9;`

**Returns**

**Type**

**Description**

`[HttpRoute.RetryPolicy](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.RetryPolicy)`

The retryPolicy.

### getRetryPolicyOrBuilder()

```
public abstract HttpRoute.RetryPolicyOrBuilder getRetryPolicyOrBuilder()
```

Specifies the retry policy associated with this route.

`.google.cloud.networkservices.v1.HttpRoute.RetryPolicy retry_policy = 9;`

**Returns**

**Type**

**Description**

`[HttpRoute.RetryPolicyOrBuilder](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.RetryPolicyOrBuilder)`

### getTimeout()

```
public abstract Duration getTimeout()
```

Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries.

`.google.protobuf.Duration timeout = 8;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The timeout.

### getTimeoutOrBuilder()

```
public abstract DurationOrBuilder getTimeoutOrBuilder()
```

Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries.

`.google.protobuf.Duration timeout = 8;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getUrlRewrite()

```
public abstract HttpRoute.URLRewrite getUrlRewrite()
```

The specification for rewrite URL before forwarding requests to the destination.

`.google.cloud.networkservices.v1.HttpRoute.URLRewrite url_rewrite = 7;`

**Returns**

**Type**

**Description**

`[HttpRoute.URLRewrite](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.URLRewrite)`

The urlRewrite.

### getUrlRewriteOrBuilder()

```
public abstract HttpRoute.URLRewriteOrBuilder getUrlRewriteOrBuilder()
```

The specification for rewrite URL before forwarding requests to the destination.

`.google.cloud.networkservices.v1.HttpRoute.URLRewrite url_rewrite = 7;`

**Returns**

**Type**

**Description**

`[HttpRoute.URLRewriteOrBuilder](/java/docs/reference/google-cloud-networkservices/0.13.0/com.google.cloud.networkservices.v1.HttpRoute.URLRewriteOrBuilder)`

### hasCorsPolicy()

```
public abstract boolean hasCorsPolicy()
```

The specification for allowing client side cross-origin requests.

`.google.cloud.networkservices.v1.HttpRoute.CorsPolicy cors_policy = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the corsPolicy field is set.

### hasFaultInjectionPolicy()

```
public abstract boolean hasFaultInjectionPolicy()
```

The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure. As part of fault injection, when clients send requests to a backend service, delays can be introduced on a percentage of requests before sending those requests to the backend service. Similarly requests from clients can be aborted for a percentage of requests.

timeout and retry\_policy will be ignored by clients that are configured with a fault\_injection\_policy

`.google.cloud.networkservices.v1.HttpRoute.FaultInjectionPolicy fault_injection_policy = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the faultInjectionPolicy field is set.

### hasRedirect()

```
public abstract boolean hasRedirect()
```

If set, the request is directed as configured by this field.

`.google.cloud.networkservices.v1.HttpRoute.Redirect redirect = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the redirect field is set.

### hasRequestHeaderModifier()

```
public abstract boolean hasRequestHeaderModifier()
```

The specification for modifying the headers of a matching request prior to delivery of the request to the destination. If HeaderModifiers are set on both the Destination and the RouteAction, they will be merged. Conflicts between the two will not be resolved on the configuration.

`.google.cloud.networkservices.v1.HttpRoute.HeaderModifier request_header_modifier = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the requestHeaderModifier field is set.

### hasRequestMirrorPolicy()

```
public abstract boolean hasRequestMirrorPolicy()
```

Specifies the policy on how requests intended for the routes destination are shadowed to a separate mirrored destination. Proxy will not wait for the shadow destination to respond before returning the response. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow.

`.google.cloud.networkservices.v1.HttpRoute.RequestMirrorPolicy request_mirror_policy = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the requestMirrorPolicy field is set.

### hasResponseHeaderModifier()

```
public abstract boolean hasResponseHeaderModifier()
```

The specification for modifying the headers of a response prior to sending the response back to the client. If HeaderModifiers are set on both the Destination and the RouteAction, they will be merged. Conflicts between the two will not be resolved on the configuration.

`.google.cloud.networkservices.v1.HttpRoute.HeaderModifier response_header_modifier = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the responseHeaderModifier field is set.

### hasRetryPolicy()

```
public abstract boolean hasRetryPolicy()
```

Specifies the retry policy associated with this route.

`.google.cloud.networkservices.v1.HttpRoute.RetryPolicy retry_policy = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the retryPolicy field is set.

### hasTimeout()

```
public abstract boolean hasTimeout()
```

Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries.

`.google.protobuf.Duration timeout = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timeout field is set.

### hasUrlRewrite()

```
public abstract boolean hasUrlRewrite()
```

The specification for rewrite URL before forwarding requests to the destination.

`.google.cloud.networkservices.v1.HttpRoute.URLRewrite url_rewrite = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the urlRewrite field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
