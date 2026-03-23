-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface OperationMetadataOrBuilder (1.41.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.3 1.0.6 0.6.2

```
public interface OperationMetadataOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getApiVersion()

```
public abstract String getApiVersion()
```

API version used to start the operation.

`string api_version = 7;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The apiVersion.

### getApiVersionBytes()

```
public abstract ByteString getApiVersionBytes()
```

API version used to start the operation.

`string api_version = 7;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for apiVersion.

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

The time the operation was created.

`.google.protobuf.Timestamp create_time = 1;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

The time the operation was created.

`.google.protobuf.Timestamp create_time = 1;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getEndTime()

```
public abstract Timestamp getEndTime()
```

The time the operation finished running.

`.google.protobuf.Timestamp end_time = 2;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The endTime.

### getEndTimeOrBuilder()

```
public abstract TimestampOrBuilder getEndTimeOrBuilder()
```

The time the operation finished running.

`.google.protobuf.Timestamp end_time = 2;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getEndpoint()

```
public abstract String getEndpoint()
```

API endpoint name of this operation.

`string endpoint = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The endpoint.

### getEndpointBytes()

```
public abstract ByteString getEndpointBytes()
```

API endpoint name of this operation.

`string endpoint = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for endpoint.

### getRequestedCancellation()

```
public abstract boolean getRequestedCancellation()
```

Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have \[Operation.error\]\[\] value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

`bool requested_cancellation = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The requestedCancellation.

### getStatusMessage()

```
public abstract String getStatusMessage()
```

Human-readable status of the operation, if any.

`string status_message = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The statusMessage.

### getStatusMessageBytes()

```
public abstract ByteString getStatusMessageBytes()
```

Human-readable status of the operation, if any.

`string status_message = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for statusMessage.

### getTarget()

```
public abstract String getTarget()
```

Server-defined resource path for the target of the operation.

`string target = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The target.

### getTargetBytes()

```
public abstract ByteString getTargetBytes()
```

Server-defined resource path for the target of the operation.

`string target = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for target.

### getVerb()

```
public abstract String getVerb()
```

Name of the verb executed by the operation.

`string verb = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The verb.

### getVerbBytes()

```
public abstract ByteString getVerbBytes()
```

Name of the verb executed by the operation.

`string verb = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for verb.

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

The time the operation was created.

`.google.protobuf.Timestamp create_time = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasEndTime()

```
public abstract boolean hasEndTime()
```

The time the operation finished running.

`.google.protobuf.Timestamp end_time = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the endTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
