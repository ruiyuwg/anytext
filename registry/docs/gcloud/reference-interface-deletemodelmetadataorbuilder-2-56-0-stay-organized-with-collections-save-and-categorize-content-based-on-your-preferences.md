-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface DeleteModelMetadataOrBuilder (2.56.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.5 2.2.0 2.1.13

```
public interface DeleteModelMetadataOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

The creation time of the operation.

`.google.protobuf.Timestamp create_time = 2;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

The creation time of the operation.

`.google.protobuf.Timestamp create_time = 2;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getError()

```
public abstract Status getError()
```

Only populated when operation doesn't succeed.

`.google.rpc.Status error = 4;`

**Returns**

**Type**

**Description**

`com.google.rpc.Status`

The error.

### getErrorOrBuilder()

```
public abstract StatusOrBuilder getErrorOrBuilder()
```

Only populated when operation doesn't succeed.

`.google.rpc.Status error = 4;`

**Returns**

**Type**

**Description**

`com.google.rpc.StatusOrBuilder`

### getState()

```
public abstract OperationState getState()
```

The current state of the operation.

`.google.cloud.translation.v3.OperationState state = 1;`

**Returns**

**Type**

**Description**

`[OperationState](/java/docs/reference/google-cloud-translate/2.56.0/com.google.cloud.translate.v3.OperationState)`

The state.

### getStateValue()

```
public abstract int getStateValue()
```

The current state of the operation.

`.google.cloud.translation.v3.OperationState state = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

The last update time of the operation.

`.google.protobuf.Timestamp update_time = 3;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

The last update time of the operation.

`.google.protobuf.Timestamp update_time = 3;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

The creation time of the operation.

`.google.protobuf.Timestamp create_time = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasError()

```
public abstract boolean hasError()
```

Only populated when operation doesn't succeed.

`.google.rpc.Status error = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the error field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

The last update time of the operation.

`.google.protobuf.Timestamp update_time = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
