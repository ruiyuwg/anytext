-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface TraceSpanOrBuilder (2.17.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.7 2.2.0 2.1.13

```
public interface TraceSpanOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

Collection of labels associated with the span. Label keys must be less than 128 bytes. Label values must be less than 16 kilobytes (10MB for `/stacktrace` values). Some predefined label keys exist, or you may create your own. When creating your own, we recommend the following formats:

-   `/category/product/key` for agents of well-known products (e.g. `/db/mongodb/read_size`).
-   `short_host/path/key` for domain-specific keys (e.g. `foo.com/myproduct/bar`) Predefined labels include:
-   `/agent`
-   `/component`
-   `/error/message`
-   `/error/name`
-   `/http/client_city`
-   `/http/client_country`
-   `/http/client_protocol`
-   `/http/client_region`
-   `/http/host`
-   `/http/method`
-   `/http/path`
-   `/http/redirected_url`
-   `/http/request/size`
-   `/http/response/size`
-   `/http/route`
-   `/http/status_code`
-   `/http/url`
-   `/http/user_agent`
-   `/pid`
-   `/stacktrace`
-   `/tid`

`map<string, string> labels = 7;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getEndTime()

```
public abstract Timestamp getEndTime()
```

End time of the span in nanoseconds from the UNIX epoch.

`.google.protobuf.Timestamp end_time = 5;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The endTime.

### getEndTimeOrBuilder()

```
public abstract TimestampOrBuilder getEndTimeOrBuilder()
```

End time of the span in nanoseconds from the UNIX epoch.

`.google.protobuf.Timestamp end_time = 5;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getKind()

```
public abstract TraceSpan.SpanKind getKind()
```

Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `RPC_CLIENT` and `RPC_SERVER` to identify queueing latency associated with the span.

`.google.devtools.cloudtrace.v1.TraceSpan.SpanKind kind = 2;`

**Returns**

**Type**

**Description**

`[TraceSpan.SpanKind](/java/docs/reference/google-cloud-trace/2.17.0/com.google.devtools.cloudtrace.v1.TraceSpan.SpanKind)`

The kind.

### getKindValue()

```
public abstract int getKindValue()
```

Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `RPC_CLIENT` and `RPC_SERVER` to identify queueing latency associated with the span.

`.google.devtools.cloudtrace.v1.TraceSpan.SpanKind kind = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for kind.

### getLabels()

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-trace/2.17.0/com.google.devtools.cloudtrace.v1.TraceSpanOrBuilder#com_google_devtools_cloudtrace_v1_TraceSpanOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

Collection of labels associated with the span. Label keys must be less than 128 bytes. Label values must be less than 16 kilobytes (10MB for `/stacktrace` values). Some predefined label keys exist, or you may create your own. When creating your own, we recommend the following formats:

-   `/category/product/key` for agents of well-known products (e.g. `/db/mongodb/read_size`).
-   `short_host/path/key` for domain-specific keys (e.g. `foo.com/myproduct/bar`) Predefined labels include:
-   `/agent`
-   `/component`
-   `/error/message`
-   `/error/name`
-   `/http/client_city`
-   `/http/client_country`
-   `/http/client_protocol`
-   `/http/client_region`
-   `/http/host`
-   `/http/method`
-   `/http/path`
-   `/http/redirected_url`
-   `/http/request/size`
-   `/http/response/size`
-   `/http/route`
-   `/http/status_code`
-   `/http/url`
-   `/http/user_agent`
-   `/pid`
-   `/stacktrace`
-   `/tid`

`map<string, string> labels = 7;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

Collection of labels associated with the span. Label keys must be less than 128 bytes. Label values must be less than 16 kilobytes (10MB for `/stacktrace` values). Some predefined label keys exist, or you may create your own. When creating your own, we recommend the following formats:

-   `/category/product/key` for agents of well-known products (e.g. `/db/mongodb/read_size`).
-   `short_host/path/key` for domain-specific keys (e.g. `foo.com/myproduct/bar`) Predefined labels include:
-   `/agent`
-   `/component`
-   `/error/message`
-   `/error/name`
-   `/http/client_city`
-   `/http/client_country`
-   `/http/client_protocol`
-   `/http/client_region`
-   `/http/host`
-   `/http/method`
-   `/http/path`
-   `/http/redirected_url`
-   `/http/request/size`
-   `/http/response/size`
-   `/http/route`
-   `/http/status_code`
-   `/http/url`
-   `/http/user_agent`
-   `/pid`
-   `/stacktrace`
-   `/tid`

`map<string, string> labels = 7;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

Collection of labels associated with the span. Label keys must be less than 128 bytes. Label values must be less than 16 kilobytes (10MB for `/stacktrace` values). Some predefined label keys exist, or you may create your own. When creating your own, we recommend the following formats:

-   `/category/product/key` for agents of well-known products (e.g. `/db/mongodb/read_size`).
-   `short_host/path/key` for domain-specific keys (e.g. `foo.com/myproduct/bar`) Predefined labels include:
-   `/agent`
-   `/component`
-   `/error/message`
-   `/error/name`
-   `/http/client_city`
-   `/http/client_country`
-   `/http/client_protocol`
-   `/http/client_region`
-   `/http/host`
-   `/http/method`
-   `/http/path`
-   `/http/redirected_url`
-   `/http/request/size`
-   `/http/response/size`
-   `/http/route`
-   `/http/status_code`
-   `/http/url`
-   `/http/user_agent`
-   `/pid`
-   `/stacktrace`
-   `/tid`

`map<string, string> labels = 7;`

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

### getLabelsOrThrow(String key)

```
public abstract String getLabelsOrThrow(String key)
```

Collection of labels associated with the span. Label keys must be less than 128 bytes. Label values must be less than 16 kilobytes (10MB for `/stacktrace` values). Some predefined label keys exist, or you may create your own. When creating your own, we recommend the following formats:

-   `/category/product/key` for agents of well-known products (e.g. `/db/mongodb/read_size`).
-   `short_host/path/key` for domain-specific keys (e.g. `foo.com/myproduct/bar`) Predefined labels include:
-   `/agent`
-   `/component`
-   `/error/message`
-   `/error/name`
-   `/http/client_city`
-   `/http/client_country`
-   `/http/client_protocol`
-   `/http/client_region`
-   `/http/host`
-   `/http/method`
-   `/http/path`
-   `/http/redirected_url`
-   `/http/request/size`
-   `/http/response/size`
-   `/http/route`
-   `/http/status_code`
-   `/http/url`
-   `/http/user_agent`
-   `/pid`
-   `/stacktrace`
-   `/tid`

`map<string, string> labels = 7;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getName()

```
public abstract String getName()
```

Name of the span. Must be less than 128 bytes. The span name is sanitized and displayed in the Stackdriver Trace tool in the Google Cloud Platform Console. The name may be a method name or some other per-call site name. For the same executable and the same call point, a best practice is to use a consistent name, which makes it easier to correlate cross-trace spans.

`string name = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Name of the span. Must be less than 128 bytes. The span name is sanitized and displayed in the Stackdriver Trace tool in the Google Cloud Platform Console. The name may be a method name or some other per-call site name. For the same executable and the same call point, a best practice is to use a consistent name, which makes it easier to correlate cross-trace spans.

`string name = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getParentSpanId()

```
public abstract long getParentSpanId()
```

Optional. ID of the parent span, if any.

`fixed64 parent_span_id = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The parentSpanId.

### getSpanId()

```
public abstract long getSpanId()
```

Identifier for the span. Must be a 64-bit integer other than 0 and unique within a trace. For example, `2205310701640571284`.

`fixed64 span_id = 1;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The spanId.

### getStartTime()

```
public abstract Timestamp getStartTime()
```

Start time of the span in nanoseconds from the UNIX epoch.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The startTime.

### getStartTimeOrBuilder()

```
public abstract TimestampOrBuilder getStartTimeOrBuilder()
```

Start time of the span in nanoseconds from the UNIX epoch.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasEndTime()

```
public abstract boolean hasEndTime()
```

End time of the span in nanoseconds from the UNIX epoch.

`.google.protobuf.Timestamp end_time = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the endTime field is set.

### hasStartTime()

```
public abstract boolean hasStartTime()
```

Start time of the span in nanoseconds from the UNIX epoch.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
