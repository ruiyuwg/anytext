-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class NetworkPolicy.Builder (0.9.0) Stay organized with collections Save and categorize content based on your preferences.

0.81.0 (latest) 0.79.0 0.77.0 0.76.0 0.74.0 0.72.0 0.70.0 0.69.0 0.68.0 0.67.0 0.66.0 0.64.0 0.62.0 0.61.0 0.58.0 0.57.0 0.56.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.3.0 0.2.0 0.1.0

```
public static final class NetworkPolicy.Builder extends GeneratedMessageV3.Builder<NetworkPolicy.Builder> implements NetworkPolicyOrBuilder
```

Represents a network policy resource. Network policies are regional resources. You can use a network policy to enable or disable internet access and external IP access. Network policies are associated with a VMware Engine network, which might span across regions. For a given region, a network policy applies to all private clouds in the VMware Engine network associated with the policy.

Protobuf type `google.cloud.vmwareengine.v1.NetworkPolicy`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> NetworkPolicy.Builder

## Implements

[NetworkPolicyOrBuilder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicyOrBuilder)

## Inherited Members

[AbstractMessage.Builder.findInitializationErrors()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_findInitializationErrors__)

[AbstractMessage.Builder.getInitializationErrorString()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_getInitializationErrorString__)

[AbstractMessage.Builder.internalMergeFrom(AbstractMessageLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_internalMergeFrom_com_google_protobuf_AbstractMessageLite_)

[AbstractMessage.Builder.mergeFrom(byte\[\])](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_byte___)

[AbstractMessage.Builder.mergeFrom(byte\[\],ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_byte___com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessage.Builder.mergeFrom(byte\[\],int,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_byte___int_int_)

[AbstractMessage.Builder.mergeFrom(byte\[\],int,int,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_byte___int_int_com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessage.Builder.mergeFrom(ByteString)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_ByteString_)

[AbstractMessage.Builder.mergeFrom(ByteString,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_ByteString_com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessage.Builder.mergeFrom(CodedInputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_)

[AbstractMessage.Builder.mergeFrom(CodedInputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessage.Builder.mergeFrom(Message)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

[AbstractMessage.Builder.mergeFrom(InputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_java_io_InputStream_)

[AbstractMessage.Builder.mergeFrom(InputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_java_io_InputStream_com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessage.Builder.newUninitializedMessageException(Message)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_newUninitializedMessageException_com_google_protobuf_Message_)

[AbstractMessage.Builder.toString()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_toString__)

[AbstractMessageLite.Builder.<T>addAll(Iterable<T>,Collection<? super T>)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder__T_addAll_java_lang_Iterable_T__java_util_Collection___super_T__)

[AbstractMessageLite.Builder.<T>addAll(Iterable<T>,List<? super T>)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder__T_addAll_java_lang_Iterable_T__java_util_List___super_T__)

[AbstractMessageLite.Builder.internalMergeFrom(MessageType)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder_internalMergeFrom_MessageType_)

[AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder_mergeDelimitedFrom_java_io_InputStream_)

[AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder_mergeDelimitedFrom_java_io_InputStream_com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessageLite.Builder.mergeFrom(MessageLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder_mergeFrom_com_google_protobuf_MessageLite_)

[AbstractMessageLite.Builder.newUninitializedMessageException(MessageLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder_newUninitializedMessageException_com_google_protobuf_MessageLite_)

[GeneratedMessageV3.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

[GeneratedMessageV3.Builder.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

[GeneratedMessageV3.Builder.clearField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.clearOneof(Descriptors.OneofDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

[GeneratedMessageV3.Builder.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

[GeneratedMessageV3.Builder.getAllFields()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getAllFields__)

[GeneratedMessageV3.Builder.getDescriptorForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getDescriptorForType__)

[GeneratedMessageV3.Builder.getField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.getFieldBuilder(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getFieldBuilder_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getOneofFieldDescriptor_com_google_protobuf_Descriptors_OneofDescriptor_)

[GeneratedMessageV3.Builder.getParentForChildren()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getParentForChildren__)

[GeneratedMessageV3.Builder.getRepeatedField(Descriptors.FieldDescriptor,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_)

[GeneratedMessageV3.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getRepeatedFieldBuilder_com_google_protobuf_Descriptors_FieldDescriptor_int_)

[GeneratedMessageV3.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getRepeatedFieldCount_com_google_protobuf_Descriptors_FieldDescriptor_)

com.google.protobuf.GeneratedMessageV3.Builder.getUnknownFieldSetBuilder()

[GeneratedMessageV3.Builder.getUnknownFields()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getUnknownFields__)

[GeneratedMessageV3.Builder.hasField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_hasField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.hasOneof(Descriptors.OneofDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_hasOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

[GeneratedMessageV3.Builder.internalGetFieldAccessorTable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetFieldAccessorTable__)

[GeneratedMessageV3.Builder.internalGetMapField(int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetMapField_int_)

[GeneratedMessageV3.Builder.internalGetMutableMapField(int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetMutableMapField_int_)

[GeneratedMessageV3.Builder.isClean()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_isClean__)

[GeneratedMessageV3.Builder.isInitialized()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_isInitialized__)

[GeneratedMessageV3.Builder.markClean()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_markClean__)

[GeneratedMessageV3.Builder.mergeUnknownFields(UnknownFieldSet)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

com.google.protobuf.GeneratedMessageV3.Builder.mergeUnknownLengthDelimitedField(int,com.google.protobuf.ByteString)

com.google.protobuf.GeneratedMessageV3.Builder.mergeUnknownVarintField(int,int)

[GeneratedMessageV3.Builder.newBuilderForField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_newBuilderForField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.onBuilt()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_onBuilt__)

[GeneratedMessageV3.Builder.onChanged()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_onChanged__)

com.google.protobuf.GeneratedMessageV3.Builder.parseUnknownField(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite,int)

[GeneratedMessageV3.Builder.setField(Descriptors.FieldDescriptor,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

[GeneratedMessageV3.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

com.google.protobuf.GeneratedMessageV3.Builder.setUnknownFieldSetBuilder(com.google.protobuf.UnknownFieldSet.Builder)

[GeneratedMessageV3.Builder.setUnknownFields(UnknownFieldSet)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

[GeneratedMessageV3.Builder.setUnknownFieldsProto3(UnknownFieldSet)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFieldsProto3_com_google_protobuf_UnknownFieldSet_)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Methods

### getDescriptor()

```
public static final Descriptors.Descriptor getDescriptor()
```

**Returns**

**Type**

**Description**

`[Descriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.Descriptor.html)`

## Methods

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public NetworkPolicy.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
```

**Parameters**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

`value`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public NetworkPolicy build()
```

**Returns**

**Type**

**Description**

`[NetworkPolicy](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy)`

### buildPartial()

```
public NetworkPolicy buildPartial()
```

**Returns**

**Type**

**Description**

`[NetworkPolicy](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy)`

### clear()

```
public NetworkPolicy.Builder clear()
```

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearCreateTime()

```
public NetworkPolicy.Builder clearCreateTime()
```

Output only. Creation time of this resource.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### clearDescription()

```
public NetworkPolicy.Builder clearDescription()
```

Optional. User-provided description for this network policy.

`string description = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### clearEdgeServicesCidr()

```
public NetworkPolicy.Builder clearEdgeServicesCidr()
```

Required. IP address range in CIDR notation used to create internet access and external IP access. An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.

`string edge_services_cidr = 9 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### clearExternalIp()

```
public NetworkPolicy.Builder clearExternalIp()
```

Network service that allows External IP addresses to be assigned to VMware workloads. This service can only be enabled when `internet_access` is also enabled.

`.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService external_ip = 7;`

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### clearField(Descriptors.FieldDescriptor field)

```
public NetworkPolicy.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearInternetAccess()

```
public NetworkPolicy.Builder clearInternetAccess()
```

Network service that allows VMware workloads to access the internet.

`.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService internet_access = 6;`

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### clearName()

```
public NetworkPolicy.Builder clearName()
```

Output only. The resource name of this network policy. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1/networkPolicies/my-network-policy`

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public NetworkPolicy.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearUid()

```
public NetworkPolicy.Builder clearUid()
```

Output only. System-generated unique identifier for the resource.

`string uid = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### clearUpdateTime()

```
public NetworkPolicy.Builder clearUpdateTime()
```

Output only. Last update time of this resource.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### clearVmwareEngineNetwork()

```
public NetworkPolicy.Builder clearVmwareEngineNetwork()
```

Optional. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` where `{project}` can either be a project number or a project ID.

`string vmware_engine_network = 12 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### clearVmwareEngineNetworkCanonical()

```
public NetworkPolicy.Builder clearVmwareEngineNetworkCanonical()
```

Output only. The canonical name of the VMware Engine network in the form: `projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}`

`string vmware_engine_network_canonical = 14 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### clone()

```
public NetworkPolicy.Builder clone()
```

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getCreateTime()

```
public Timestamp getCreateTime()
```

Output only. Creation time of this resource.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeBuilder()

```
public Timestamp.Builder getCreateTimeBuilder()
```

Output only. Creation time of this resource.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getCreateTimeOrBuilder()

```
public TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. Creation time of this resource.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDefaultInstanceForType()

```
public NetworkPolicy getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[NetworkPolicy](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy)`

### getDescription()

```
public String getDescription()
```

Optional. User-provided description for this network policy.

`string description = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public ByteString getDescriptionBytes()
```

Optional. User-provided description for this network policy.

`string description = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getDescriptorForType()

```
public Descriptors.Descriptor getDescriptorForType()
```

**Returns**

**Type**

**Description**

`[Descriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.Descriptor.html)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.getDescriptorForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getDescriptorForType__)

### getEdgeServicesCidr()

```
public String getEdgeServicesCidr()
```

Required. IP address range in CIDR notation used to create internet access and external IP access. An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.

`string edge_services_cidr = 9 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The edgeServicesCidr.

### getEdgeServicesCidrBytes()

```
public ByteString getEdgeServicesCidrBytes()
```

Required. IP address range in CIDR notation used to create internet access and external IP access. An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.

`string edge_services_cidr = 9 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for edgeServicesCidr.

### getExternalIp()

```
public NetworkPolicy.NetworkService getExternalIp()
```

Network service that allows External IP addresses to be assigned to VMware workloads. This service can only be enabled when `internet_access` is also enabled.

`.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService external_ip = 7;`

**Returns**

**Type**

**Description**

`[NetworkPolicy.NetworkService](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService)`

The externalIp.

### getExternalIpBuilder()

```
public NetworkPolicy.NetworkService.Builder getExternalIpBuilder()
```

Network service that allows External IP addresses to be assigned to VMware workloads. This service can only be enabled when `internet_access` is also enabled.

`.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService external_ip = 7;`

**Returns**

**Type**

**Description**

`[NetworkPolicy.NetworkService.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService.Builder)`

### getExternalIpOrBuilder()

```
public NetworkPolicy.NetworkServiceOrBuilder getExternalIpOrBuilder()
```

Network service that allows External IP addresses to be assigned to VMware workloads. This service can only be enabled when `internet_access` is also enabled.

`.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService external_ip = 7;`

**Returns**

**Type**

**Description**

`[NetworkPolicy.NetworkServiceOrBuilder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkServiceOrBuilder)`

### getInternetAccess()

```
public NetworkPolicy.NetworkService getInternetAccess()
```

Network service that allows VMware workloads to access the internet.

`.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService internet_access = 6;`

**Returns**

**Type**

**Description**

`[NetworkPolicy.NetworkService](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService)`

The internetAccess.

### getInternetAccessBuilder()

```
public NetworkPolicy.NetworkService.Builder getInternetAccessBuilder()
```

Network service that allows VMware workloads to access the internet.

`.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService internet_access = 6;`

**Returns**

**Type**

**Description**

`[NetworkPolicy.NetworkService.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService.Builder)`

### getInternetAccessOrBuilder()

```
public NetworkPolicy.NetworkServiceOrBuilder getInternetAccessOrBuilder()
```

Network service that allows VMware workloads to access the internet.

`.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService internet_access = 6;`

**Returns**

**Type**

**Description**

`[NetworkPolicy.NetworkServiceOrBuilder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkServiceOrBuilder)`

### getName()

```
public String getName()
```

Output only. The resource name of this network policy. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1/networkPolicies/my-network-policy`

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public ByteString getNameBytes()
```

Output only. The resource name of this network policy. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1/networkPolicies/my-network-policy`

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getUid()

```
public String getUid()
```

Output only. System-generated unique identifier for the resource.

`string uid = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The uid.

### getUidBytes()

```
public ByteString getUidBytes()
```

Output only. System-generated unique identifier for the resource.

`string uid = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for uid.

### getUpdateTime()

```
public Timestamp getUpdateTime()
```

Output only. Last update time of this resource.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeBuilder()

```
public Timestamp.Builder getUpdateTimeBuilder()
```

Output only. Last update time of this resource.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getUpdateTimeOrBuilder()

```
public TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. Last update time of this resource.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getVmwareEngineNetwork()

```
public String getVmwareEngineNetwork()
```

Optional. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` where `{project}` can either be a project number or a project ID.

`string vmware_engine_network = 12 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The vmwareEngineNetwork.

### getVmwareEngineNetworkBytes()

```
public ByteString getVmwareEngineNetworkBytes()
```

Optional. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` where `{project}` can either be a project number or a project ID.

`string vmware_engine_network = 12 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for vmwareEngineNetwork.

### getVmwareEngineNetworkCanonical()

```
public String getVmwareEngineNetworkCanonical()
```

Output only. The canonical name of the VMware Engine network in the form: `projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}`

`string vmware_engine_network_canonical = 14 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The vmwareEngineNetworkCanonical.

### getVmwareEngineNetworkCanonicalBytes()

```
public ByteString getVmwareEngineNetworkCanonicalBytes()
```

Output only. The canonical name of the VMware Engine network in the form: `projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}`

`string vmware_engine_network_canonical = 14 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for vmwareEngineNetworkCanonical.

### hasCreateTime()

```
public boolean hasCreateTime()
```

Output only. Creation time of this resource.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasExternalIp()

```
public boolean hasExternalIp()
```

Network service that allows External IP addresses to be assigned to VMware workloads. This service can only be enabled when `internet_access` is also enabled.

`.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService external_ip = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the externalIp field is set.

### hasInternetAccess()

```
public boolean hasInternetAccess()
```

Network service that allows VMware workloads to access the internet.

`.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService internet_access = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the internetAccess field is set.

### hasUpdateTime()

```
public boolean hasUpdateTime()
```

Output only. Last update time of this resource.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

### internalGetFieldAccessorTable()

```
protected GeneratedMessageV3.FieldAccessorTable internalGetFieldAccessorTable()
```

**Returns**

**Type**

**Description**

`[FieldAccessorTable](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.FieldAccessorTable.html)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.internalGetFieldAccessorTable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetFieldAccessorTable__)

### isInitialized()

```
public final boolean isInitialized()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.isInitialized()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_isInitialized__)

### mergeCreateTime(Timestamp value)

```
public NetworkPolicy.Builder mergeCreateTime(Timestamp value)
```

Output only. Creation time of this resource.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### mergeExternalIp(NetworkPolicy.NetworkService value)

```
public NetworkPolicy.Builder mergeExternalIp(NetworkPolicy.NetworkService value)
```

Network service that allows External IP addresses to be assigned to VMware workloads. This service can only be enabled when `internet_access` is also enabled.

`.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService external_ip = 7;`

**Parameter**

**Name**

**Description**

`value`

`[NetworkPolicy.NetworkService](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### mergeFrom(NetworkPolicy other)

```
public NetworkPolicy.Builder mergeFrom(NetworkPolicy other)
```

**Parameter**

**Name**

**Description**

`other`

`[NetworkPolicy](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public NetworkPolicy.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

`input`

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

`extensionRegistry`

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public NetworkPolicy.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeInternetAccess(NetworkPolicy.NetworkService value)

```
public NetworkPolicy.Builder mergeInternetAccess(NetworkPolicy.NetworkService value)
```

Network service that allows VMware workloads to access the internet.

`.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService internet_access = 6;`

**Parameter**

**Name**

**Description**

`value`

`[NetworkPolicy.NetworkService](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final NetworkPolicy.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### mergeUpdateTime(Timestamp value)

```
public NetworkPolicy.Builder mergeUpdateTime(Timestamp value)
```

Output only. Last update time of this resource.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### setCreateTime(Timestamp value)

```
public NetworkPolicy.Builder setCreateTime(Timestamp value)
```

Output only. Creation time of this resource.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### setCreateTime(Timestamp.Builder builderForValue)

```
public NetworkPolicy.Builder setCreateTime(Timestamp.Builder builderForValue)
```

Output only. Creation time of this resource.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### setDescription(String value)

```
public NetworkPolicy.Builder setDescription(String value)
```

Optional. User-provided description for this network policy.

`string description = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The description to set.

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### setDescriptionBytes(ByteString value)

```
public NetworkPolicy.Builder setDescriptionBytes(ByteString value)
```

Optional. User-provided description for this network policy.

`string description = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for description to set.

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### setEdgeServicesCidr(String value)

```
public NetworkPolicy.Builder setEdgeServicesCidr(String value)
```

Required. IP address range in CIDR notation used to create internet access and external IP access. An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.

`string edge_services_cidr = 9 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The edgeServicesCidr to set.

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### setEdgeServicesCidrBytes(ByteString value)

```
public NetworkPolicy.Builder setEdgeServicesCidrBytes(ByteString value)
```

Required. IP address range in CIDR notation used to create internet access and external IP access. An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.

`string edge_services_cidr = 9 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for edgeServicesCidr to set.

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### setExternalIp(NetworkPolicy.NetworkService value)

```
public NetworkPolicy.Builder setExternalIp(NetworkPolicy.NetworkService value)
```

Network service that allows External IP addresses to be assigned to VMware workloads. This service can only be enabled when `internet_access` is also enabled.

`.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService external_ip = 7;`

**Parameter**

**Name**

**Description**

`value`

`[NetworkPolicy.NetworkService](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### setExternalIp(NetworkPolicy.NetworkService.Builder builderForValue)

```
public NetworkPolicy.Builder setExternalIp(NetworkPolicy.NetworkService.Builder builderForValue)
```

Network service that allows External IP addresses to be assigned to VMware workloads. This service can only be enabled when `internet_access` is also enabled.

`.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService external_ip = 7;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[NetworkPolicy.NetworkService.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService.Builder)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public NetworkPolicy.Builder setField(Descriptors.FieldDescriptor field, Object value)
```

**Parameters**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

`value`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setInternetAccess(NetworkPolicy.NetworkService value)

```
public NetworkPolicy.Builder setInternetAccess(NetworkPolicy.NetworkService value)
```

Network service that allows VMware workloads to access the internet.

`.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService internet_access = 6;`

**Parameter**

**Name**

**Description**

`value`

`[NetworkPolicy.NetworkService](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### setInternetAccess(NetworkPolicy.NetworkService.Builder builderForValue)

```
public NetworkPolicy.Builder setInternetAccess(NetworkPolicy.NetworkService.Builder builderForValue)
```

Network service that allows VMware workloads to access the internet.

`.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService internet_access = 6;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[NetworkPolicy.NetworkService.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService.Builder)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### setName(String value)

```
public NetworkPolicy.Builder setName(String value)
```

Output only. The resource name of this network policy. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1/networkPolicies/my-network-policy`

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The name to set.

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### setNameBytes(ByteString value)

```
public NetworkPolicy.Builder setNameBytes(ByteString value)
```

Output only. The resource name of this network policy. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1/networkPolicies/my-network-policy`

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for name to set.

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public NetworkPolicy.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
```

**Parameters**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUid(String value)

```
public NetworkPolicy.Builder setUid(String value)
```

Output only. System-generated unique identifier for the resource.

`string uid = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The uid to set.

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### setUidBytes(ByteString value)

```
public NetworkPolicy.Builder setUidBytes(ByteString value)
```

Output only. System-generated unique identifier for the resource.

`string uid = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for uid to set.

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final NetworkPolicy.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setUpdateTime(Timestamp value)

```
public NetworkPolicy.Builder setUpdateTime(Timestamp value)
```

Output only. Last update time of this resource.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### setUpdateTime(Timestamp.Builder builderForValue)

```
public NetworkPolicy.Builder setUpdateTime(Timestamp.Builder builderForValue)
```

Output only. Last update time of this resource.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

### setVmwareEngineNetwork(String value)

```
public NetworkPolicy.Builder setVmwareEngineNetwork(String value)
```

Optional. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` where `{project}` can either be a project number or a project ID.

`string vmware_engine_network = 12 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The vmwareEngineNetwork to set.

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### setVmwareEngineNetworkBytes(ByteString value)

```
public NetworkPolicy.Builder setVmwareEngineNetworkBytes(ByteString value)
```

Optional. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` where `{project}` can either be a project number or a project ID.

`string vmware_engine_network = 12 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for vmwareEngineNetwork to set.

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### setVmwareEngineNetworkCanonical(String value)

```
public NetworkPolicy.Builder setVmwareEngineNetworkCanonical(String value)
```

Output only. The canonical name of the VMware Engine network in the form: `projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}`

`string vmware_engine_network_canonical = 14 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The vmwareEngineNetworkCanonical to set.

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

### setVmwareEngineNetworkCanonicalBytes(ByteString value)

```
public NetworkPolicy.Builder setVmwareEngineNetworkCanonicalBytes(ByteString value)
```

Output only. The canonical name of the VMware Engine network in the form: `projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}`

`string vmware_engine_network_canonical = 14 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for vmwareEngineNetworkCanonical to set.

**Returns**

**Type**

**Description**

`[NetworkPolicy.Builder](/java/docs/reference/google-cloud-vmwareengine/0.9.0/com.google.cloud.vmwareengine.v1.NetworkPolicy.Builder)`

This builder for chaining.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
