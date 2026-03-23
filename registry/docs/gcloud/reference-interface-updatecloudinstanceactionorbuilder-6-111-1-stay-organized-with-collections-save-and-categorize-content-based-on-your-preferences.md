-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface UpdateCloudInstanceActionOrBuilder (6.111.1) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public interface UpdateCloudInstanceActionOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

labels.

`map<string, string> labels = 6;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAutoscalingConfig()

```
public abstract AutoscalingConfig getAutoscalingConfig()
```

The autoscaling config for this instance. If non-empty, this instance is using autoscaling (processing\_units and node\_count should be set to 0 if used).

`optional .google.spanner.admin.instance.v1.AutoscalingConfig autoscaling_config = 7;`

**Returns**

**Type**

**Description**

`[AutoscalingConfig](/java/docs/reference/google-cloud-spanner/latest/com.google.spanner.admin.instance.v1.AutoscalingConfig)`

The autoscalingConfig.

### getAutoscalingConfigOrBuilder()

```
public abstract AutoscalingConfigOrBuilder getAutoscalingConfigOrBuilder()
```

The autoscaling config for this instance. If non-empty, this instance is using autoscaling (processing\_units and node\_count should be set to 0 if used).

`optional .google.spanner.admin.instance.v1.AutoscalingConfig autoscaling_config = 7;`

**Returns**

**Type**

**Description**

`[AutoscalingConfigOrBuilder](/java/docs/reference/google-cloud-spanner/latest/com.google.spanner.admin.instance.v1.AutoscalingConfigOrBuilder)`

### getDisplayName()

```
public abstract String getDisplayName()
```

The descriptive name for this instance as it appears in UIs. Must be unique per project and between 4 and 30 characters in length.

`optional string display_name = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The displayName.

### getDisplayNameBytes()

```
public abstract ByteString getDisplayNameBytes()
```

The descriptive name for this instance as it appears in UIs. Must be unique per project and between 4 and 30 characters in length.

`optional string display_name = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for displayName.

### getInstanceId()

```
public abstract String getInstanceId()
```

Cloud instance ID (not path), e.g. "test-instance".

`string instance_id = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The instanceId.

### getInstanceIdBytes()

```
public abstract ByteString getInstanceIdBytes()
```

Cloud instance ID (not path), e.g. "test-instance".

`string instance_id = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for instanceId.

### getLabels() (deprecated)

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-spanner/latest/com.google.spanner.executor.v1.UpdateCloudInstanceActionOrBuilder#com_google_spanner_executor_v1_UpdateCloudInstanceActionOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

labels.

`map<string, string> labels = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

labels.

`map<string, string> labels = 6;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

labels.

`map<string, string> labels = 6;`

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

labels.

`map<string, string> labels = 6;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getNodeCount()

```
public abstract int getNodeCount()
```

The number of nodes allocated to this instance. At most one of either node\_count or processing\_units should be present in the message.

`optional int32 node_count = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The nodeCount.

### getProcessingUnits()

```
public abstract int getProcessingUnits()
```

The number of processing units allocated to this instance. At most one of processing\_units or node\_count should be present in the message.

`optional int32 processing_units = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The processingUnits.

### getProjectId()

```
public abstract String getProjectId()
```

Cloud project ID, e.g. "spanner-cloud-systest".

`string project_id = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The projectId.

### getProjectIdBytes()

```
public abstract ByteString getProjectIdBytes()
```

Cloud project ID, e.g. "spanner-cloud-systest".

`string project_id = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for projectId.

### hasAutoscalingConfig()

```
public abstract boolean hasAutoscalingConfig()
```

The autoscaling config for this instance. If non-empty, this instance is using autoscaling (processing\_units and node\_count should be set to 0 if used).

`optional .google.spanner.admin.instance.v1.AutoscalingConfig autoscaling_config = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the autoscalingConfig field is set.

### hasDisplayName()

```
public abstract boolean hasDisplayName()
```

The descriptive name for this instance as it appears in UIs. Must be unique per project and between 4 and 30 characters in length.

`optional string display_name = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the displayName field is set.

### hasNodeCount()

```
public abstract boolean hasNodeCount()
```

The number of nodes allocated to this instance. At most one of either node\_count or processing\_units should be present in the message.

`optional int32 node_count = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the nodeCount field is set.

### hasProcessingUnits()

```
public abstract boolean hasProcessingUnits()
```

The number of processing units allocated to this instance. At most one of processing\_units or node\_count should be present in the message.

`optional int32 processing_units = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the processingUnits field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
