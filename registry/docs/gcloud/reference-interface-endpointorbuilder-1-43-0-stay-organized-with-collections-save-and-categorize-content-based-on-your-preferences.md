-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface EndpointOrBuilder (1.43.0) Stay organized with collections Save and categorize content based on your preferences.

1.86.0 (latest) 1.84.0 1.82.0 1.81.0 1.80.0 1.79.0 1.77.0 1.75.0 1.74.0 1.73.0 1.72.0 1.71.0 1.69.0 1.67.0 1.66.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.7 1.1.1 1.0.4

```
public interface EndpointOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

The labels of the endpoint.

`map<string, string> labels = 4;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Output only. The create time timestamp.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. The create time timestamp.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDescription()

```
public abstract String getDescription()
```

User-provided description of the endpoint

`string description = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public abstract ByteString getDescriptionBytes()
```

User-provided description of the endpoint

`string description = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getEndpointForwardingRule()

```
public abstract String getEndpointForwardingRule()
```

Output only. The fully qualified URL of the endpoint's ILB Forwarding Rule.

`string endpoint_forwarding_rule = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The endpointForwardingRule.

### getEndpointForwardingRuleBytes()

```
public abstract ByteString getEndpointForwardingRuleBytes()
```

Output only. The fully qualified URL of the endpoint's ILB Forwarding Rule.

`string endpoint_forwarding_rule = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for endpointForwardingRule.

### getEndpointIp()

```
public abstract String getEndpointIp()
```

Output only. The IP address of the IDS Endpoint's ILB.

`string endpoint_ip = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The endpointIp.

### getEndpointIpBytes()

```
public abstract ByteString getEndpointIpBytes()
```

Output only. The IP address of the IDS Endpoint's ILB.

`string endpoint_ip = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for endpointIp.

### getLabels() (deprecated)

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-ids/1.43.0/com.google.cloud.ids.v1.EndpointOrBuilder#com_google_cloud_ids_v1_EndpointOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

The labels of the endpoint.

`map<string, string> labels = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

The labels of the endpoint.

`map<string, string> labels = 4;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

The labels of the endpoint.

`map<string, string> labels = 4;`

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

The labels of the endpoint.

`map<string, string> labels = 4;`

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

Output only. The name of the endpoint.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Output only. The name of the endpoint.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getNetwork()

```
public abstract String getNetwork()
```

Required. The fully qualified URL of the network to which the IDS Endpoint is attached.

`string network = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The network.

### getNetworkBytes()

```
public abstract ByteString getNetworkBytes()
```

Required. The fully qualified URL of the network to which the IDS Endpoint is attached.

`string network = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for network.

### getSeverity()

```
public abstract Endpoint.Severity getSeverity()
```

Required. Lowest threat severity that this endpoint will alert on.

`.google.cloud.ids.v1.Endpoint.Severity severity = 9 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Endpoint.Severity](/java/docs/reference/google-cloud-ids/1.43.0/com.google.cloud.ids.v1.Endpoint.Severity)`

The severity.

### getSeverityValue()

```
public abstract int getSeverityValue()
```

Required. Lowest threat severity that this endpoint will alert on.

`.google.cloud.ids.v1.Endpoint.Severity severity = 9 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for severity.

### getState()

```
public abstract Endpoint.State getState()
```

Output only. Current state of the endpoint.

`.google.cloud.ids.v1.Endpoint.State state = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Endpoint.State](/java/docs/reference/google-cloud-ids/1.43.0/com.google.cloud.ids.v1.Endpoint.State)`

The state.

### getStateValue()

```
public abstract int getStateValue()
```

Output only. Current state of the endpoint.

`.google.cloud.ids.v1.Endpoint.State state = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### getTrafficLogs()

```
public abstract boolean getTrafficLogs()
```

Whether the endpoint should report traffic logs in addition to threat logs.

`bool traffic_logs = 13;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The trafficLogs.

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Output only. The update time timestamp.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. The update time timestamp.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. The create time timestamp.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Output only. The update time timestamp.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
