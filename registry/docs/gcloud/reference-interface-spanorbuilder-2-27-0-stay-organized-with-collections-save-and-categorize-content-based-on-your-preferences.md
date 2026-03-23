-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SpanOrBuilder (2.27.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.7 2.2.0 2.1.13

```
public interface SpanOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAttributes()

```
public abstract Span.Attributes getAttributes()
```

A set of attributes on the span. You can have up to 32 attributes per span.

`.google.devtools.cloudtrace.v2.Span.Attributes attributes = 7;`

**Returns**

**Type**

**Description**

`[Span.Attributes](/java/docs/reference/google-cloud-trace/2.27.0/com.google.devtools.cloudtrace.v2.Span.Attributes)`

The attributes.

### getAttributesOrBuilder()

```
public abstract Span.AttributesOrBuilder getAttributesOrBuilder()
```

A set of attributes on the span. You can have up to 32 attributes per span.

`.google.devtools.cloudtrace.v2.Span.Attributes attributes = 7;`

**Returns**

**Type**

**Description**

`[Span.AttributesOrBuilder](/java/docs/reference/google-cloud-trace/2.27.0/com.google.devtools.cloudtrace.v2.Span.AttributesOrBuilder)`

### getChildSpanCount()

```
public abstract Int32Value getChildSpanCount()
```

Optional. The number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.

`.google.protobuf.Int32Value child_span_count = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Int32Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Int32Value.html)`

The childSpanCount.

### getChildSpanCountOrBuilder()

```
public abstract Int32ValueOrBuilder getChildSpanCountOrBuilder()
```

Optional. The number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.

`.google.protobuf.Int32Value child_span_count = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Int32ValueOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Int32ValueOrBuilder.html)`

### getDisplayName()

```
public abstract TruncatableString getDisplayName()
```

Required. A description of the span's operation (up to 128 bytes). Cloud Trace displays the description in the Cloud console. For example, the display name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name within an application and at the same call point. This makes it easier to correlate spans in different traces.

`.google.devtools.cloudtrace.v2.TruncatableString display_name = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[TruncatableString](/java/docs/reference/google-cloud-trace/2.27.0/com.google.devtools.cloudtrace.v2.TruncatableString)`

The displayName.

### getDisplayNameOrBuilder()

```
public abstract TruncatableStringOrBuilder getDisplayNameOrBuilder()
```

Required. A description of the span's operation (up to 128 bytes). Cloud Trace displays the description in the Cloud console. For example, the display name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name within an application and at the same call point. This makes it easier to correlate spans in different traces.

`.google.devtools.cloudtrace.v2.TruncatableString display_name = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[TruncatableStringOrBuilder](/java/docs/reference/google-cloud-trace/2.27.0/com.google.devtools.cloudtrace.v2.TruncatableStringOrBuilder)`

### getEndTime()

```
public abstract Timestamp getEndTime()
```

Required. The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.

`.google.protobuf.Timestamp end_time = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The endTime.

### getEndTimeOrBuilder()

```
public abstract TimestampOrBuilder getEndTimeOrBuilder()
```

Required. The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.

`.google.protobuf.Timestamp end_time = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getLinks()

```
public abstract Span.Links getLinks()
```

Links associated with the span. You can have up to 128 links per Span.

`.google.devtools.cloudtrace.v2.Span.Links links = 10;`

**Returns**

**Type**

**Description**

`[Span.Links](/java/docs/reference/google-cloud-trace/2.27.0/com.google.devtools.cloudtrace.v2.Span.Links)`

The links.

### getLinksOrBuilder()

```
public abstract Span.LinksOrBuilder getLinksOrBuilder()
```

Links associated with the span. You can have up to 128 links per Span.

`.google.devtools.cloudtrace.v2.Span.Links links = 10;`

**Returns**

**Type**

**Description**

`[Span.LinksOrBuilder](/java/docs/reference/google-cloud-trace/2.27.0/com.google.devtools.cloudtrace.v2.Span.LinksOrBuilder)`

### getName()

```
public abstract String getName()
```

Required. The resource name of the span in the following format:

-   `projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/[SPAN_ID]`
    
    `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. It should not be zero.
    
    `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. It should not be zero. .
    

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

Required. The resource name of the span in the following format:

-   `projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/[SPAN_ID]`
    
    `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. It should not be zero.
    
    `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. It should not be zero. .
    

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getParentSpanId()

```
public abstract String getParentSpanId()
```

The `[SPAN_ID]` of this span's parent span. If this is a root span, then this field must be empty.

`string parent_span_id = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parentSpanId.

### getParentSpanIdBytes()

```
public abstract ByteString getParentSpanIdBytes()
```

The `[SPAN_ID]` of this span's parent span. If this is a root span, then this field must be empty.

`string parent_span_id = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parentSpanId.

### getSameProcessAsParentSpan()

```
public abstract BoolValue getSameProcessAsParentSpan()
```

Optional. Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Trace is unable to take advantage of this helpful information.

`.google.protobuf.BoolValue same_process_as_parent_span = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[BoolValue](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.BoolValue.html)`

The sameProcessAsParentSpan.

### getSameProcessAsParentSpanOrBuilder()

```
public abstract BoolValueOrBuilder getSameProcessAsParentSpanOrBuilder()
```

Optional. Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Trace is unable to take advantage of this helpful information.

`.google.protobuf.BoolValue same_process_as_parent_span = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[BoolValueOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.BoolValueOrBuilder.html)`

### getSpanId()

```
public abstract String getSpanId()
```

Required. The `[SPAN_ID]` portion of the span's resource name.

`string span_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The spanId.

### getSpanIdBytes()

```
public abstract ByteString getSpanIdBytes()
```

Required. The `[SPAN_ID]` portion of the span's resource name.

`string span_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for spanId.

### getSpanKind()

```
public abstract Span.SpanKind getSpanKind()
```

Optional. Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify an RPC call.

`.google.devtools.cloudtrace.v2.Span.SpanKind span_kind = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Span.SpanKind](/java/docs/reference/google-cloud-trace/2.27.0/com.google.devtools.cloudtrace.v2.Span.SpanKind)`

The spanKind.

### getSpanKindValue()

```
public abstract int getSpanKindValue()
```

Optional. Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify an RPC call.

`.google.devtools.cloudtrace.v2.Span.SpanKind span_kind = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for spanKind.

### getStackTrace()

```
public abstract StackTrace getStackTrace()
```

Stack trace captured at the start of the span.

`.google.devtools.cloudtrace.v2.StackTrace stack_trace = 8;`

**Returns**

**Type**

**Description**

`[StackTrace](/java/docs/reference/google-cloud-trace/2.27.0/com.google.devtools.cloudtrace.v2.StackTrace)`

The stackTrace.

### getStackTraceOrBuilder()

```
public abstract StackTraceOrBuilder getStackTraceOrBuilder()
```

Stack trace captured at the start of the span.

`.google.devtools.cloudtrace.v2.StackTrace stack_trace = 8;`

**Returns**

**Type**

**Description**

`[StackTraceOrBuilder](/java/docs/reference/google-cloud-trace/2.27.0/com.google.devtools.cloudtrace.v2.StackTraceOrBuilder)`

### getStartTime()

```
public abstract Timestamp getStartTime()
```

Required. The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.

`.google.protobuf.Timestamp start_time = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The startTime.

### getStartTimeOrBuilder()

```
public abstract TimestampOrBuilder getStartTimeOrBuilder()
```

Required. The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.

`.google.protobuf.Timestamp start_time = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getStatus()

```
public abstract Status getStatus()
```

Optional. The final status for this span.

`.google.rpc.Status status = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`com.google.rpc.Status`

The status.

### getStatusOrBuilder()

```
public abstract StatusOrBuilder getStatusOrBuilder()
```

Optional. The final status for this span.

`.google.rpc.Status status = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`com.google.rpc.StatusOrBuilder`

### getTimeEvents()

```
public abstract Span.TimeEvents getTimeEvents()
```

A set of time events. You can have up to 32 annotations and 128 message events per span.

`.google.devtools.cloudtrace.v2.Span.TimeEvents time_events = 9;`

**Returns**

**Type**

**Description**

`[Span.TimeEvents](/java/docs/reference/google-cloud-trace/2.27.0/com.google.devtools.cloudtrace.v2.Span.TimeEvents)`

The timeEvents.

### getTimeEventsOrBuilder()

```
public abstract Span.TimeEventsOrBuilder getTimeEventsOrBuilder()
```

A set of time events. You can have up to 32 annotations and 128 message events per span.

`.google.devtools.cloudtrace.v2.Span.TimeEvents time_events = 9;`

**Returns**

**Type**

**Description**

`[Span.TimeEventsOrBuilder](/java/docs/reference/google-cloud-trace/2.27.0/com.google.devtools.cloudtrace.v2.Span.TimeEventsOrBuilder)`

### hasAttributes()

```
public abstract boolean hasAttributes()
```

A set of attributes on the span. You can have up to 32 attributes per span.

`.google.devtools.cloudtrace.v2.Span.Attributes attributes = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the attributes field is set.

### hasChildSpanCount()

```
public abstract boolean hasChildSpanCount()
```

Optional. The number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.

`.google.protobuf.Int32Value child_span_count = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the childSpanCount field is set.

### hasDisplayName()

```
public abstract boolean hasDisplayName()
```

Required. A description of the span's operation (up to 128 bytes). Cloud Trace displays the description in the Cloud console. For example, the display name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name within an application and at the same call point. This makes it easier to correlate spans in different traces.

`.google.devtools.cloudtrace.v2.TruncatableString display_name = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the displayName field is set.

### hasEndTime()

```
public abstract boolean hasEndTime()
```

Required. The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.

`.google.protobuf.Timestamp end_time = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the endTime field is set.

### hasLinks()

```
public abstract boolean hasLinks()
```

Links associated with the span. You can have up to 128 links per Span.

`.google.devtools.cloudtrace.v2.Span.Links links = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the links field is set.

### hasSameProcessAsParentSpan()

```
public abstract boolean hasSameProcessAsParentSpan()
```

Optional. Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Trace is unable to take advantage of this helpful information.

`.google.protobuf.BoolValue same_process_as_parent_span = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the sameProcessAsParentSpan field is set.

### hasStackTrace()

```
public abstract boolean hasStackTrace()
```

Stack trace captured at the start of the span.

`.google.devtools.cloudtrace.v2.StackTrace stack_trace = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the stackTrace field is set.

### hasStartTime()

```
public abstract boolean hasStartTime()
```

Required. The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.

`.google.protobuf.Timestamp start_time = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

### hasStatus()

```
public abstract boolean hasStatus()
```

Optional. The final status for this span.

`.google.rpc.Status status = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the status field is set.

### hasTimeEvents()

```
public abstract boolean hasTimeEvents()
```

A set of time events. You can have up to 32 annotations and 128 message events per span.

`.google.devtools.cloudtrace.v2.Span.TimeEvents time_events = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timeEvents field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
