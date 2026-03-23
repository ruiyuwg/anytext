-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ConnectivityTestOrBuilder (1.23.0) Stay organized with collections Save and categorize content based on your preferences.

1.88.0 (latest) 1.86.0 1.84.0 1.83.0 1.81.0 1.79.0 1.77.0 1.76.0 1.75.0 1.74.0 1.73.0 1.71.0 1.69.0 1.68.0 1.65.0 1.64.0 1.63.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.1.10

```
public interface ConnectivityTestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

Resource labels to represent user-provided metadata.

`map<string, string> labels = 8;`

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

Output only. The time the test was created.

`.google.protobuf.Timestamp create_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. The time the test was created.

`.google.protobuf.Timestamp create_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDescription()

```
public abstract String getDescription()
```

The user-supplied description of the Connectivity Test. Maximum of 512 characters.

`string description = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public abstract ByteString getDescriptionBytes()
```

The user-supplied description of the Connectivity Test. Maximum of 512 characters.

`string description = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getDestination()

```
public abstract Endpoint getDestination()
```

Required. Destination specification of the Connectivity Test.

You can use a combination of destination IP address, Compute Engine VM instance, or VPC network to uniquely identify the destination location.

Even if the destination IP address is not unique, the source IP location is unique. Usually, the analysis can infer the destination endpoint from route information.

If the destination you specify is a VM instance and the instance has multiple network interfaces, then you must also specify either a destination IP address or VPC network to identify the destination interface.

A reachability analysis proceeds even if the destination location is ambiguous. However, the result can include endpoints that you don't intend to test.

`.google.cloud.networkmanagement.v1.Endpoint destination = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Endpoint](/java/docs/reference/google-cloud-network-management/1.23.0/com.google.cloud.networkmanagement.v1.Endpoint)`

The destination.

### getDestinationOrBuilder()

```
public abstract EndpointOrBuilder getDestinationOrBuilder()
```

Required. Destination specification of the Connectivity Test.

You can use a combination of destination IP address, Compute Engine VM instance, or VPC network to uniquely identify the destination location.

Even if the destination IP address is not unique, the source IP location is unique. Usually, the analysis can infer the destination endpoint from route information.

If the destination you specify is a VM instance and the instance has multiple network interfaces, then you must also specify either a destination IP address or VPC network to identify the destination interface.

A reachability analysis proceeds even if the destination location is ambiguous. However, the result can include endpoints that you don't intend to test.

`.google.cloud.networkmanagement.v1.Endpoint destination = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[EndpointOrBuilder](/java/docs/reference/google-cloud-network-management/1.23.0/com.google.cloud.networkmanagement.v1.EndpointOrBuilder)`

### getDisplayName()

```
public abstract String getDisplayName()
```

Output only. The display name of a Connectivity Test.

`string display_name = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The displayName.

### getDisplayNameBytes()

```
public abstract ByteString getDisplayNameBytes()
```

Output only. The display name of a Connectivity Test.

`string display_name = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for displayName.

### getLabels()

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-network-management/1.23.0/com.google.cloud.networkmanagement.v1.ConnectivityTestOrBuilder#com_google_cloud_networkmanagement_v1_ConnectivityTestOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

Resource labels to represent user-provided metadata.

`map<string, string> labels = 8;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

Resource labels to represent user-provided metadata.

`map<string, string> labels = 8;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

Resource labels to represent user-provided metadata.

`map<string, string> labels = 8;`

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

Resource labels to represent user-provided metadata.

`map<string, string> labels = 8;`

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

Required. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}`

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

Required. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}`

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getProtocol()

```
public abstract String getProtocol()
```

IP Protocol of the test. When not provided, "TCP" is assumed.

`string protocol = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The protocol.

### getProtocolBytes()

```
public abstract ByteString getProtocolBytes()
```

IP Protocol of the test. When not provided, "TCP" is assumed.

`string protocol = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for protocol.

### getReachabilityDetails()

```
public abstract ReachabilityDetails getReachabilityDetails()
```

Output only. The reachability details of this test from the latest run. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test.

`.google.cloud.networkmanagement.v1.ReachabilityDetails reachability_details = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ReachabilityDetails](/java/docs/reference/google-cloud-network-management/1.23.0/com.google.cloud.networkmanagement.v1.ReachabilityDetails)`

The reachabilityDetails.

### getReachabilityDetailsOrBuilder()

```
public abstract ReachabilityDetailsOrBuilder getReachabilityDetailsOrBuilder()
```

Output only. The reachability details of this test from the latest run. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test.

`.google.cloud.networkmanagement.v1.ReachabilityDetails reachability_details = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ReachabilityDetailsOrBuilder](/java/docs/reference/google-cloud-network-management/1.23.0/com.google.cloud.networkmanagement.v1.ReachabilityDetailsOrBuilder)`

### getRelatedProjects(int index)

```
public abstract String getRelatedProjects(int index)
```

Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.

`repeated string related_projects = 6;`

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

The relatedProjects at the given index.

### getRelatedProjectsBytes(int index)

```
public abstract ByteString getRelatedProjectsBytes(int index)
```

Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.

`repeated string related_projects = 6;`

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

The bytes of the relatedProjects at the given index.

### getRelatedProjectsCount()

```
public abstract int getRelatedProjectsCount()
```

Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.

`repeated string related_projects = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of relatedProjects.

### getRelatedProjectsList()

```
public abstract List<String> getRelatedProjectsList()
```

Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.

`repeated string related_projects = 6;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the relatedProjects.

### getSource()

```
public abstract Endpoint getSource()
```

Required. Source specification of the Connectivity Test.

You can use a combination of source IP address, virtual machine (VM) instance, or Compute Engine network to uniquely identify the source location.

Examples: If the source IP address is an internal IP address within a Google Cloud Virtual Private Cloud (VPC) network, then you must also specify the VPC network. Otherwise, specify the VM instance, which already contains its internal IP address and VPC network information.

If the source of the test is within an on-premises network, then you must provide the destination VPC network.

If the source endpoint is a Compute Engine VM instance with multiple network interfaces, the instance itself is not sufficient to identify the endpoint. So, you must also specify the source IP address or VPC network.

A reachability analysis proceeds even if the source location is ambiguous. However, the test result may include endpoints that you don't intend to test.

`.google.cloud.networkmanagement.v1.Endpoint source = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Endpoint](/java/docs/reference/google-cloud-network-management/1.23.0/com.google.cloud.networkmanagement.v1.Endpoint)`

The source.

### getSourceOrBuilder()

```
public abstract EndpointOrBuilder getSourceOrBuilder()
```

Required. Source specification of the Connectivity Test.

You can use a combination of source IP address, virtual machine (VM) instance, or Compute Engine network to uniquely identify the source location.

Examples: If the source IP address is an internal IP address within a Google Cloud Virtual Private Cloud (VPC) network, then you must also specify the VPC network. Otherwise, specify the VM instance, which already contains its internal IP address and VPC network information.

If the source of the test is within an on-premises network, then you must provide the destination VPC network.

If the source endpoint is a Compute Engine VM instance with multiple network interfaces, the instance itself is not sufficient to identify the endpoint. So, you must also specify the source IP address or VPC network.

A reachability analysis proceeds even if the source location is ambiguous. However, the test result may include endpoints that you don't intend to test.

`.google.cloud.networkmanagement.v1.Endpoint source = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[EndpointOrBuilder](/java/docs/reference/google-cloud-network-management/1.23.0/com.google.cloud.networkmanagement.v1.EndpointOrBuilder)`

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Output only. The time the test's configuration was updated.

`.google.protobuf.Timestamp update_time = 11 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. The time the test's configuration was updated.

`.google.protobuf.Timestamp update_time = 11 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. The time the test was created.

`.google.protobuf.Timestamp create_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasDestination()

```
public abstract boolean hasDestination()
```

Required. Destination specification of the Connectivity Test.

You can use a combination of destination IP address, Compute Engine VM instance, or VPC network to uniquely identify the destination location.

Even if the destination IP address is not unique, the source IP location is unique. Usually, the analysis can infer the destination endpoint from route information.

If the destination you specify is a VM instance and the instance has multiple network interfaces, then you must also specify either a destination IP address or VPC network to identify the destination interface.

A reachability analysis proceeds even if the destination location is ambiguous. However, the result can include endpoints that you don't intend to test.

`.google.cloud.networkmanagement.v1.Endpoint destination = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the destination field is set.

### hasReachabilityDetails()

```
public abstract boolean hasReachabilityDetails()
```

Output only. The reachability details of this test from the latest run. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test.

`.google.cloud.networkmanagement.v1.ReachabilityDetails reachability_details = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the reachabilityDetails field is set.

### hasSource()

```
public abstract boolean hasSource()
```

Required. Source specification of the Connectivity Test.

You can use a combination of source IP address, virtual machine (VM) instance, or Compute Engine network to uniquely identify the source location.

Examples: If the source IP address is an internal IP address within a Google Cloud Virtual Private Cloud (VPC) network, then you must also specify the VPC network. Otherwise, specify the VM instance, which already contains its internal IP address and VPC network information.

If the source of the test is within an on-premises network, then you must provide the destination VPC network.

If the source endpoint is a Compute Engine VM instance with multiple network interfaces, the instance itself is not sufficient to identify the endpoint. So, you must also specify the source IP address or VPC network.

A reachability analysis proceeds even if the source location is ambiguous. However, the test result may include endpoints that you don't intend to test.

`.google.cloud.networkmanagement.v1.Endpoint source = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the source field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Output only. The time the test's configuration was updated.

`.google.protobuf.Timestamp update_time = 11 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
