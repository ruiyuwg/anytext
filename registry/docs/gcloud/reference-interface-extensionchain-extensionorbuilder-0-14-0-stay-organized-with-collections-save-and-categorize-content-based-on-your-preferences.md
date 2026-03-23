-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ExtensionChain.ExtensionOrBuilder (0.14.0) Stay organized with collections Save and categorize content based on your preferences.

0.43.0 (latest) 0.41.0 0.39.0 0.38.0 0.36.0 0.34.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.26.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static interface ExtensionChain.ExtensionOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAuthority()

```
public abstract String getAuthority()
```

Optional. The `:authority` header in the gRPC request sent from Envoy to the extension service. Required for Callout extensions.

`string authority = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The authority.

### getAuthorityBytes()

```
public abstract ByteString getAuthorityBytes()
```

Optional. The `:authority` header in the gRPC request sent from Envoy to the extension service. Required for Callout extensions.

`string authority = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for authority.

### getFailOpen()

```
public abstract boolean getFailOpen()
```

Optional. Determines how the proxy behaves if the call to the extension fails or times out.

When set to `TRUE`, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to `FALSE` or the default setting of `FALSE` is used, one of the following happens:

-   If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer.
    
-   If response headers have been delivered, then the HTTP stream to the downstream client is reset.
    

`bool fail_open = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The failOpen.

### getForwardHeaders(int index)

```
public abstract String getForwardHeaders(int index)
```

Optional. List of the HTTP headers to forward to the extension (from the client or backend). If omitted, all headers are sent. Each element is a string indicating the header name.

`repeated string forward_headers = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The forwardHeaders at the given index.

### getForwardHeadersBytes(int index)

```
public abstract ByteString getForwardHeadersBytes(int index)
```

Optional. List of the HTTP headers to forward to the extension (from the client or backend). If omitted, all headers are sent. Each element is a string indicating the header name.

`repeated string forward_headers = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the forwardHeaders at the given index.

### getForwardHeadersCount()

```
public abstract int getForwardHeadersCount()
```

Optional. List of the HTTP headers to forward to the extension (from the client or backend). If omitted, all headers are sent. Each element is a string indicating the header name.

`repeated string forward_headers = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of forwardHeaders.

### getForwardHeadersList()

```
public abstract List<String> getForwardHeadersList()
```

Optional. List of the HTTP headers to forward to the extension (from the client or backend). If omitted, all headers are sent. Each element is a string indicating the header name.

`repeated string forward_headers = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the forwardHeaders.

### getName()

```
public abstract String getName()
```

Required. The name for this extension. The name is logged as part of the HTTP request logs. The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens, and can have a maximum length of 63 characters. Additionally, the first character must be a letter and the last a letter or a number.

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Required. The name for this extension. The name is logged as part of the HTTP request logs. The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens, and can have a maximum length of 63 characters. Additionally, the first character must be a letter and the last a letter or a number.

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getService()

```
public abstract String getService()
```

Required. The reference to the service that runs the extension.

Currently only callout extensions are supported here.

To configure a callout extension, `service` must be a fully-qualified reference to a [backend service](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) in the format: `https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/backendServices/{backendService}` or `https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}`.

`string service = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The service.

### getServiceBytes()

```
public abstract ByteString getServiceBytes()
```

Required. The reference to the service that runs the extension.

Currently only callout extensions are supported here.

To configure a callout extension, `service` must be a fully-qualified reference to a [backend service](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) in the format: `https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/backendServices/{backendService}` or `https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}`.

`string service = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for service.

### getSupportedEvents(int index)

```
public abstract EventType getSupportedEvents(int index)
```

Optional. A set of events during request or response processing for which this extension is called. This field is required for the `LbTrafficExtension` resource. It must not be set for the `LbRouteExtension` resource.

`repeated .google.cloud.networkservices.v1.EventType supported_events = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[EventType](/java/docs/reference/google-cloud-networkservices/0.14.0/com.google.cloud.networkservices.v1.EventType)`

The supportedEvents at the given index.

### getSupportedEventsCount()

```
public abstract int getSupportedEventsCount()
```

Optional. A set of events during request or response processing for which this extension is called. This field is required for the `LbTrafficExtension` resource. It must not be set for the `LbRouteExtension` resource.

`repeated .google.cloud.networkservices.v1.EventType supported_events = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of supportedEvents.

### getSupportedEventsList()

```
public abstract List<EventType> getSupportedEventsList()
```

Optional. A set of events during request or response processing for which this extension is called. This field is required for the `LbTrafficExtension` resource. It must not be set for the `LbRouteExtension` resource.

`repeated .google.cloud.networkservices.v1.EventType supported_events = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[EventType](/java/docs/reference/google-cloud-networkservices/0.14.0/com.google.cloud.networkservices.v1.EventType)>`

A list containing the supportedEvents.

### getSupportedEventsValue(int index)

```
public abstract int getSupportedEventsValue(int index)
```

Optional. A set of events during request or response processing for which this extension is called. This field is required for the `LbTrafficExtension` resource. It must not be set for the `LbRouteExtension` resource.

`repeated .google.cloud.networkservices.v1.EventType supported_events = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire of supportedEvents at the given index.

### getSupportedEventsValueList()

```
public abstract List<Integer> getSupportedEventsValueList()
```

Optional. A set of events during request or response processing for which this extension is called. This field is required for the `LbTrafficExtension` resource. It must not be set for the `LbRouteExtension` resource.

`repeated .google.cloud.networkservices.v1.EventType supported_events = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)>`

A list containing the enum numeric values on the wire for supportedEvents.

### getTimeout()

```
public abstract Duration getTimeout()
```

Optional. Specifies the timeout for each individual message on the stream. The timeout must be between 10-1000 milliseconds. Required for Callout extensions.

`.google.protobuf.Duration timeout = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The timeout.

### getTimeoutOrBuilder()

```
public abstract DurationOrBuilder getTimeoutOrBuilder()
```

Optional. Specifies the timeout for each individual message on the stream. The timeout must be between 10-1000 milliseconds. Required for Callout extensions.

`.google.protobuf.Duration timeout = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### hasTimeout()

```
public abstract boolean hasTimeout()
```

Optional. Specifies the timeout for each individual message on the stream. The timeout must be between 10-1000 milliseconds. Required for Callout extensions.

`.google.protobuf.Duration timeout = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timeout field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
