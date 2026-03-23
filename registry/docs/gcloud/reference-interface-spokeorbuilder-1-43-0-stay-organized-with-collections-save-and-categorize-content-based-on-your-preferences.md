-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SpokeOrBuilder (1.43.0) Stay organized with collections Save and categorize content based on your preferences.

1.86.0 (latest) 1.84.0 1.82.0 1.81.0 1.79.0 1.77.0 1.75.0 1.74.0 1.73.0 1.72.0 1.71.0 1.69.0 1.67.0 1.66.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.9 1.1.1 1.0.0 0.5.0

```
public interface SpokeOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

User-defined labels.

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

The time when the Spoke was created.

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

The time when the Spoke was created.

`.google.protobuf.Timestamp create_time = 2;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDescription()

```
public abstract String getDescription()
```

Short description of the spoke resource

`string description = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public abstract ByteString getDescriptionBytes()
```

Short description of the spoke resource

`string description = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getHub()

```
public abstract String getHub()
```

The resource URL of the hub resource that the spoke is attached to

`string hub = 6 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The hub.

### getHubBytes()

```
public abstract ByteString getHubBytes()
```

The resource URL of the hub resource that the spoke is attached to

`string hub = 6 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for hub.

### getLabels() (deprecated)

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-networkconnectivity/1.43.0/com.google.cloud.networkconnectivity.v1alpha1.SpokeOrBuilder#com_google_cloud_networkconnectivity_v1alpha1_SpokeOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

User-defined labels.

`map<string, string> labels = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

User-defined labels.

`map<string, string> labels = 4;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

User-defined labels.

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

User-defined labels.

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

### getLinkedInterconnectAttachments(int index)

```
public abstract String getLinkedInterconnectAttachments(int index)
```

The URIs of linked interconnect attachment resources

`repeated string linked_interconnect_attachments = 13 [(.google.api.resource_reference) = { ... }`

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

The linkedInterconnectAttachments at the given index.

### getLinkedInterconnectAttachmentsBytes(int index)

```
public abstract ByteString getLinkedInterconnectAttachmentsBytes(int index)
```

The URIs of linked interconnect attachment resources

`repeated string linked_interconnect_attachments = 13 [(.google.api.resource_reference) = { ... }`

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

The bytes of the linkedInterconnectAttachments at the given index.

### getLinkedInterconnectAttachmentsCount()

```
public abstract int getLinkedInterconnectAttachmentsCount()
```

The URIs of linked interconnect attachment resources

`repeated string linked_interconnect_attachments = 13 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of linkedInterconnectAttachments.

### getLinkedInterconnectAttachmentsList()

```
public abstract List<String> getLinkedInterconnectAttachmentsList()
```

The URIs of linked interconnect attachment resources

`repeated string linked_interconnect_attachments = 13 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the linkedInterconnectAttachments.

### getLinkedRouterApplianceInstances(int index)

```
public abstract RouterApplianceInstance getLinkedRouterApplianceInstances(int index)
```

The URIs of linked Router appliance resources

`repeated .google.cloud.networkconnectivity.v1alpha1.RouterApplianceInstance linked_router_appliance_instances = 14;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[RouterApplianceInstance](/java/docs/reference/google-cloud-networkconnectivity/1.43.0/com.google.cloud.networkconnectivity.v1alpha1.RouterApplianceInstance)`

### getLinkedRouterApplianceInstancesCount()

```
public abstract int getLinkedRouterApplianceInstancesCount()
```

The URIs of linked Router appliance resources

`repeated .google.cloud.networkconnectivity.v1alpha1.RouterApplianceInstance linked_router_appliance_instances = 14;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLinkedRouterApplianceInstancesList()

```
public abstract List<RouterApplianceInstance> getLinkedRouterApplianceInstancesList()
```

The URIs of linked Router appliance resources

`repeated .google.cloud.networkconnectivity.v1alpha1.RouterApplianceInstance linked_router_appliance_instances = 14;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[RouterApplianceInstance](/java/docs/reference/google-cloud-networkconnectivity/1.43.0/com.google.cloud.networkconnectivity.v1alpha1.RouterApplianceInstance)>`

### getLinkedRouterApplianceInstancesOrBuilder(int index)

```
public abstract RouterApplianceInstanceOrBuilder getLinkedRouterApplianceInstancesOrBuilder(int index)
```

The URIs of linked Router appliance resources

`repeated .google.cloud.networkconnectivity.v1alpha1.RouterApplianceInstance linked_router_appliance_instances = 14;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[RouterApplianceInstanceOrBuilder](/java/docs/reference/google-cloud-networkconnectivity/1.43.0/com.google.cloud.networkconnectivity.v1alpha1.RouterApplianceInstanceOrBuilder)`

### getLinkedRouterApplianceInstancesOrBuilderList()

```
public abstract List<? extends RouterApplianceInstanceOrBuilder> getLinkedRouterApplianceInstancesOrBuilderList()
```

The URIs of linked Router appliance resources

`repeated .google.cloud.networkconnectivity.v1alpha1.RouterApplianceInstance linked_router_appliance_instances = 14;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.networkconnectivity.v1alpha1.RouterApplianceInstanceOrBuilder>`

### getLinkedVpnTunnels(int index)

```
public abstract String getLinkedVpnTunnels(int index)
```

The URIs of linked VPN tunnel resources

`repeated string linked_vpn_tunnels = 12 [(.google.api.resource_reference) = { ... }`

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

The linkedVpnTunnels at the given index.

### getLinkedVpnTunnelsBytes(int index)

```
public abstract ByteString getLinkedVpnTunnelsBytes(int index)
```

The URIs of linked VPN tunnel resources

`repeated string linked_vpn_tunnels = 12 [(.google.api.resource_reference) = { ... }`

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

The bytes of the linkedVpnTunnels at the given index.

### getLinkedVpnTunnelsCount()

```
public abstract int getLinkedVpnTunnelsCount()
```

The URIs of linked VPN tunnel resources

`repeated string linked_vpn_tunnels = 12 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of linkedVpnTunnels.

### getLinkedVpnTunnelsList()

```
public abstract List<String> getLinkedVpnTunnelsList()
```

The URIs of linked VPN tunnel resources

`repeated string linked_vpn_tunnels = 12 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the linkedVpnTunnels.

### getName()

```
public abstract String getName()
```

Immutable. The name of a Spoke resource.

`string name = 1 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Immutable. The name of a Spoke resource.

`string name = 1 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getState()

```
public abstract State getState()
```

Output only. The current lifecycle state of this Hub.

`.google.cloud.networkconnectivity.v1alpha1.State state = 15 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[State](/java/docs/reference/google-cloud-networkconnectivity/1.43.0/com.google.cloud.networkconnectivity.v1alpha1.State)`

The state.

### getStateValue()

```
public abstract int getStateValue()
```

Output only. The current lifecycle state of this Hub.

`.google.cloud.networkconnectivity.v1alpha1.State state = 15 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### getUniqueId()

```
public abstract String getUniqueId()
```

Output only. Google-generated UUID for this resource. This is unique across all Spoke resources. If a Spoke resource is deleted and another with the same name is created, it gets a different unique\_id.

`string unique_id = 11 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The uniqueId.

### getUniqueIdBytes()

```
public abstract ByteString getUniqueIdBytes()
```

Output only. Google-generated UUID for this resource. This is unique across all Spoke resources. If a Spoke resource is deleted and another with the same name is created, it gets a different unique\_id.

`string unique_id = 11 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for uniqueId.

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

The time when the Spoke was updated.

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

The time when the Spoke was updated.

`.google.protobuf.Timestamp update_time = 3;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

The time when the Spoke was created.

`.google.protobuf.Timestamp create_time = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

The time when the Spoke was updated.

`.google.protobuf.Timestamp update_time = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
