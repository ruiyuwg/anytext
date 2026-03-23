-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface LogEntryOrBuilder (1.30.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.1.10

```
public interface LogEntryOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

A set of user-defined (key, value) data that provides additional information about the log entry.

`map<string, string> labels = 13;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getHttpRequest()

```
public abstract HttpRequest getHttpRequest()
```

Optional. Information about the HTTP request associated with this log entry, if applicable.

`.google.api.servicecontrol.v1.HttpRequest http_request = 14;`

**Returns**

**Type**

**Description**

`[HttpRequest](/java/docs/reference/google-cloud-service-control/1.30.0/com.google.api.servicecontrol.v1.HttpRequest)`

The httpRequest.

### getHttpRequestOrBuilder()

```
public abstract HttpRequestOrBuilder getHttpRequestOrBuilder()
```

Optional. Information about the HTTP request associated with this log entry, if applicable.

`.google.api.servicecontrol.v1.HttpRequest http_request = 14;`

**Returns**

**Type**

**Description**

`[HttpRequestOrBuilder](/java/docs/reference/google-cloud-service-control/1.30.0/com.google.api.servicecontrol.v1.HttpRequestOrBuilder)`

### getInsertId()

```
public abstract String getInsertId()
```

A unique ID for the log entry used for deduplication. If omitted, the implementation will generate one based on operation\_id.

`string insert_id = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The insertId.

### getInsertIdBytes()

```
public abstract ByteString getInsertIdBytes()
```

A unique ID for the log entry used for deduplication. If omitted, the implementation will generate one based on operation\_id.

`string insert_id = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for insertId.

### getLabels()

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-service-control/1.30.0/com.google.api.servicecontrol.v1.LogEntryOrBuilder#com_google_api_servicecontrol_v1_LogEntryOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

A set of user-defined (key, value) data that provides additional information about the log entry.

`map<string, string> labels = 13;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

A set of user-defined (key, value) data that provides additional information about the log entry.

`map<string, string> labels = 13;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

A set of user-defined (key, value) data that provides additional information about the log entry.

`map<string, string> labels = 13;`

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

A set of user-defined (key, value) data that provides additional information about the log entry.

`map<string, string> labels = 13;`

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

Required. The log to which this log entry belongs. Examples: `"syslog"`, `"book_log"`.

`string name = 10;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Required. The log to which this log entry belongs. Examples: `"syslog"`, `"book_log"`.

`string name = 10;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getOperation()

```
public abstract LogEntryOperation getOperation()
```

Optional. Information about an operation associated with the log entry, if applicable.

`.google.api.servicecontrol.v1.LogEntryOperation operation = 16;`

**Returns**

**Type**

**Description**

`[LogEntryOperation](/java/docs/reference/google-cloud-service-control/1.30.0/com.google.api.servicecontrol.v1.LogEntryOperation)`

The operation.

### getOperationOrBuilder()

```
public abstract LogEntryOperationOrBuilder getOperationOrBuilder()
```

Optional. Information about an operation associated with the log entry, if applicable.

`.google.api.servicecontrol.v1.LogEntryOperation operation = 16;`

**Returns**

**Type**

**Description**

`[LogEntryOperationOrBuilder](/java/docs/reference/google-cloud-service-control/1.30.0/com.google.api.servicecontrol.v1.LogEntryOperationOrBuilder)`

### getPayloadCase()

```
public abstract LogEntry.PayloadCase getPayloadCase()
```

**Returns**

**Type**

**Description**

`[LogEntry.PayloadCase](/java/docs/reference/google-cloud-service-control/1.30.0/com.google.api.servicecontrol.v1.LogEntry.PayloadCase)`

### getProtoPayload()

```
public abstract Any getProtoPayload()
```

The log entry payload, represented as a protocol buffer that is expressed as a JSON object. The only accepted type currently is AuditLog.

`.google.protobuf.Any proto_payload = 2;`

**Returns**

**Type**

**Description**

`[Any](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Any.html)`

The protoPayload.

### getProtoPayloadOrBuilder()

```
public abstract AnyOrBuilder getProtoPayloadOrBuilder()
```

The log entry payload, represented as a protocol buffer that is expressed as a JSON object. The only accepted type currently is AuditLog.

`.google.protobuf.Any proto_payload = 2;`

**Returns**

**Type**

**Description**

`[AnyOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AnyOrBuilder.html)`

### getSeverity()

```
public abstract LogSeverity getSeverity()
```

The severity of the log entry. The default value is `LogSeverity.DEFAULT`.

`.google.logging.type.LogSeverity severity = 12;`

**Returns**

**Type**

**Description**

`com.google.logging.type.LogSeverity`

The severity.

### getSeverityValue()

```
public abstract int getSeverityValue()
```

The severity of the log entry. The default value is `LogSeverity.DEFAULT`.

`.google.logging.type.LogSeverity severity = 12;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for severity.

### getSourceLocation()

```
public abstract LogEntrySourceLocation getSourceLocation()
```

Optional. Source code location information associated with the log entry, if any.

`.google.api.servicecontrol.v1.LogEntrySourceLocation source_location = 17;`

**Returns**

**Type**

**Description**

`[LogEntrySourceLocation](/java/docs/reference/google-cloud-service-control/1.30.0/com.google.api.servicecontrol.v1.LogEntrySourceLocation)`

The sourceLocation.

### getSourceLocationOrBuilder()

```
public abstract LogEntrySourceLocationOrBuilder getSourceLocationOrBuilder()
```

Optional. Source code location information associated with the log entry, if any.

`.google.api.servicecontrol.v1.LogEntrySourceLocation source_location = 17;`

**Returns**

**Type**

**Description**

`[LogEntrySourceLocationOrBuilder](/java/docs/reference/google-cloud-service-control/1.30.0/com.google.api.servicecontrol.v1.LogEntrySourceLocationOrBuilder)`

### getStructPayload()

```
public abstract Struct getStructPayload()
```

The log entry payload, represented as a structure that is expressed as a JSON object.

`.google.protobuf.Struct struct_payload = 6;`

**Returns**

**Type**

**Description**

`[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)`

The structPayload.

### getStructPayloadOrBuilder()

```
public abstract StructOrBuilder getStructPayloadOrBuilder()
```

The log entry payload, represented as a structure that is expressed as a JSON object.

`.google.protobuf.Struct struct_payload = 6;`

**Returns**

**Type**

**Description**

`[StructOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.StructOrBuilder.html)`

### getTextPayload()

```
public abstract String getTextPayload()
```

The log entry payload, represented as a Unicode string (UTF-8).

`string text_payload = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The textPayload.

### getTextPayloadBytes()

```
public abstract ByteString getTextPayloadBytes()
```

The log entry payload, represented as a Unicode string (UTF-8).

`string text_payload = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for textPayload.

### getTimestamp()

```
public abstract Timestamp getTimestamp()
```

The time the event described by the log entry occurred. If omitted, defaults to operation start time.

`.google.protobuf.Timestamp timestamp = 11;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The timestamp.

### getTimestampOrBuilder()

```
public abstract TimestampOrBuilder getTimestampOrBuilder()
```

The time the event described by the log entry occurred. If omitted, defaults to operation start time.

`.google.protobuf.Timestamp timestamp = 11;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getTrace()

```
public abstract String getTrace()
```

Optional. Resource name of the trace associated with the log entry, if any. If this field contains a relative resource name, you can assume the name is relative to `//tracing.googleapis.com`. Example: `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`

`string trace = 15;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The trace.

### getTraceBytes()

```
public abstract ByteString getTraceBytes()
```

Optional. Resource name of the trace associated with the log entry, if any. If this field contains a relative resource name, you can assume the name is relative to `//tracing.googleapis.com`. Example: `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`

`string trace = 15;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for trace.

### hasHttpRequest()

```
public abstract boolean hasHttpRequest()
```

Optional. Information about the HTTP request associated with this log entry, if applicable.

`.google.api.servicecontrol.v1.HttpRequest http_request = 14;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the httpRequest field is set.

### hasOperation()

```
public abstract boolean hasOperation()
```

Optional. Information about an operation associated with the log entry, if applicable.

`.google.api.servicecontrol.v1.LogEntryOperation operation = 16;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the operation field is set.

### hasProtoPayload()

```
public abstract boolean hasProtoPayload()
```

The log entry payload, represented as a protocol buffer that is expressed as a JSON object. The only accepted type currently is AuditLog.

`.google.protobuf.Any proto_payload = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the protoPayload field is set.

### hasSourceLocation()

```
public abstract boolean hasSourceLocation()
```

Optional. Source code location information associated with the log entry, if any.

`.google.api.servicecontrol.v1.LogEntrySourceLocation source_location = 17;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the sourceLocation field is set.

### hasStructPayload()

```
public abstract boolean hasStructPayload()
```

The log entry payload, represented as a structure that is expressed as a JSON object.

`.google.protobuf.Struct struct_payload = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the structPayload field is set.

### hasTextPayload()

```
public abstract boolean hasTextPayload()
```

The log entry payload, represented as a Unicode string (UTF-8).

`string text_payload = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the textPayload field is set.

### hasTimestamp()

```
public abstract boolean hasTimestamp()
```

The time the event described by the log entry occurred. If omitted, defaults to operation start time.

`.google.protobuf.Timestamp timestamp = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timestamp field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
