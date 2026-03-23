-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Endpoint.Builder (1.22.0) Stay organized with collections Save and categorize content based on your preferences.

1.88.0 (latest) 1.86.0 1.84.0 1.83.0 1.81.0 1.79.0 1.77.0 1.76.0 1.75.0 1.74.0 1.73.0 1.71.0 1.69.0 1.68.0 1.65.0 1.64.0 1.63.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.1.10

```
public static final class Endpoint.Builder extends GeneratedMessageV3.Builder<Endpoint.Builder> implements EndpointOrBuilder
```

Source or destination of the Connectivity Test.

Protobuf type `google.cloud.networkmanagement.v1.Endpoint`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> Endpoint.Builder

## Implements

[EndpointOrBuilder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.EndpointOrBuilder)

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
public Endpoint.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public Endpoint build()
```

**Returns**

**Type**

**Description**

`[Endpoint](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint)`

### buildPartial()

```
public Endpoint buildPartial()
```

**Returns**

**Type**

**Description**

`[Endpoint](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint)`

### clear()

```
public Endpoint.Builder clear()
```

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearCloudSqlInstance()

```
public Endpoint.Builder clearCloudSqlInstance()
```

A [Cloud SQL](https://cloud.google.com/sql) instance URI.

`string cloud_sql_instance = 8;`

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public Endpoint.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearForwardingRule()

```
public Endpoint.Builder clearForwardingRule()
```

A forwarding rule and its corresponding IP address represent the frontend configuration of a Google Cloud load balancer. Forwarding rules are also used for protocol forwarding, Private Service Connect and other network services to provide forwarding information in the control plane. Format: projects/{project}/global/forwardingRules/{id} or projects/{project}/regions/{region}/forwardingRules/{id}

`string forwarding_rule = 13;`

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### clearGkeMasterCluster()

```
public Endpoint.Builder clearGkeMasterCluster()
```

A cluster URI for [Google Kubernetes Engine master](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture).

`string gke_master_cluster = 7;`

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### clearInstance()

```
public Endpoint.Builder clearInstance()
```

A Compute Engine instance URI.

`string instance = 3;`

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### clearIpAddress()

```
public Endpoint.Builder clearIpAddress()
```

The IP address of the endpoint, which can be an external or internal IP. An IPv6 address is only allowed when the test's destination is a [global load balancer VIP](/load-balancing/docs/load-balancing-overview).

`string ip_address = 1;`

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### clearNetwork()

```
public Endpoint.Builder clearNetwork()
```

A Compute Engine network URI.

`string network = 4;`

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### clearNetworkType()

```
public Endpoint.Builder clearNetworkType()
```

Type of the network where the endpoint is located. Applicable only to source endpoint, as destination network type can be inferred from the source.

`.google.cloud.networkmanagement.v1.Endpoint.NetworkType network_type = 5;`

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public Endpoint.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearPort()

```
public Endpoint.Builder clearPort()
```

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

`int32 port = 2;`

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### clearProjectId()

```
public Endpoint.Builder clearProjectId()
```

Project ID where the endpoint is located. The Project ID can be derived from the URI if you provide a VM instance or network URI. The following are two cases where you must provide the project ID:

1.  Only the IP address is specified, and the IP address is within a Google Cloud project.
2.  When you are using Shared VPC and the IP address that you provide is from the service project. In this case, the network that the IP address resides in is defined in the host project.

`string project_id = 6;`

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### clone()

```
public Endpoint.Builder clone()
```

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getCloudSqlInstance()

```
public String getCloudSqlInstance()
```

A [Cloud SQL](https://cloud.google.com/sql) instance URI.

`string cloud_sql_instance = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The cloudSqlInstance.

### getCloudSqlInstanceBytes()

```
public ByteString getCloudSqlInstanceBytes()
```

A [Cloud SQL](https://cloud.google.com/sql) instance URI.

`string cloud_sql_instance = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for cloudSqlInstance.

### getDefaultInstanceForType()

```
public Endpoint getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[Endpoint](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint)`

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

### getForwardingRule()

```
public String getForwardingRule()
```

A forwarding rule and its corresponding IP address represent the frontend configuration of a Google Cloud load balancer. Forwarding rules are also used for protocol forwarding, Private Service Connect and other network services to provide forwarding information in the control plane. Format: projects/{project}/global/forwardingRules/{id} or projects/{project}/regions/{region}/forwardingRules/{id}

`string forwarding_rule = 13;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The forwardingRule.

### getForwardingRuleBytes()

```
public ByteString getForwardingRuleBytes()
```

A forwarding rule and its corresponding IP address represent the frontend configuration of a Google Cloud load balancer. Forwarding rules are also used for protocol forwarding, Private Service Connect and other network services to provide forwarding information in the control plane. Format: projects/{project}/global/forwardingRules/{id} or projects/{project}/regions/{region}/forwardingRules/{id}

`string forwarding_rule = 13;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for forwardingRule.

### getGkeMasterCluster()

```
public String getGkeMasterCluster()
```

A cluster URI for [Google Kubernetes Engine master](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture).

`string gke_master_cluster = 7;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The gkeMasterCluster.

### getGkeMasterClusterBytes()

```
public ByteString getGkeMasterClusterBytes()
```

A cluster URI for [Google Kubernetes Engine master](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture).

`string gke_master_cluster = 7;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for gkeMasterCluster.

### getInstance()

```
public String getInstance()
```

A Compute Engine instance URI.

`string instance = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The instance.

### getInstanceBytes()

```
public ByteString getInstanceBytes()
```

A Compute Engine instance URI.

`string instance = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for instance.

### getIpAddress()

```
public String getIpAddress()
```

The IP address of the endpoint, which can be an external or internal IP. An IPv6 address is only allowed when the test's destination is a [global load balancer VIP](/load-balancing/docs/load-balancing-overview).

`string ip_address = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The ipAddress.

### getIpAddressBytes()

```
public ByteString getIpAddressBytes()
```

The IP address of the endpoint, which can be an external or internal IP. An IPv6 address is only allowed when the test's destination is a [global load balancer VIP](/load-balancing/docs/load-balancing-overview).

`string ip_address = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for ipAddress.

### getNetwork()

```
public String getNetwork()
```

A Compute Engine network URI.

`string network = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The network.

### getNetworkBytes()

```
public ByteString getNetworkBytes()
```

A Compute Engine network URI.

`string network = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for network.

### getNetworkType()

```
public Endpoint.NetworkType getNetworkType()
```

Type of the network where the endpoint is located. Applicable only to source endpoint, as destination network type can be inferred from the source.

`.google.cloud.networkmanagement.v1.Endpoint.NetworkType network_type = 5;`

**Returns**

**Type**

**Description**

`[Endpoint.NetworkType](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.NetworkType)`

The networkType.

### getNetworkTypeValue()

```
public int getNetworkTypeValue()
```

Type of the network where the endpoint is located. Applicable only to source endpoint, as destination network type can be inferred from the source.

`.google.cloud.networkmanagement.v1.Endpoint.NetworkType network_type = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for networkType.

### getPort()

```
public int getPort()
```

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

`int32 port = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The port.

### getProjectId()

```
public String getProjectId()
```

Project ID where the endpoint is located. The Project ID can be derived from the URI if you provide a VM instance or network URI. The following are two cases where you must provide the project ID:

1.  Only the IP address is specified, and the IP address is within a Google Cloud project.
2.  When you are using Shared VPC and the IP address that you provide is from the service project. In this case, the network that the IP address resides in is defined in the host project.

`string project_id = 6;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The projectId.

### getProjectIdBytes()

```
public ByteString getProjectIdBytes()
```

Project ID where the endpoint is located. The Project ID can be derived from the URI if you provide a VM instance or network URI. The following are two cases where you must provide the project ID:

1.  Only the IP address is specified, and the IP address is within a Google Cloud project.
2.  When you are using Shared VPC and the IP address that you provide is from the service project. In this case, the network that the IP address resides in is defined in the host project.

`string project_id = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for projectId.

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

### mergeFrom(Endpoint other)

```
public Endpoint.Builder mergeFrom(Endpoint other)
```

**Parameter**

**Name**

**Description**

`other`

`[Endpoint](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint)`  

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public Endpoint.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public Endpoint.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final Endpoint.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setCloudSqlInstance(String value)

```
public Endpoint.Builder setCloudSqlInstance(String value)
```

A [Cloud SQL](https://cloud.google.com/sql) instance URI.

`string cloud_sql_instance = 8;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The cloudSqlInstance to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setCloudSqlInstanceBytes(ByteString value)

```
public Endpoint.Builder setCloudSqlInstanceBytes(ByteString value)
```

A [Cloud SQL](https://cloud.google.com/sql) instance URI.

`string cloud_sql_instance = 8;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for cloudSqlInstance to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public Endpoint.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setForwardingRule(String value)

```
public Endpoint.Builder setForwardingRule(String value)
```

A forwarding rule and its corresponding IP address represent the frontend configuration of a Google Cloud load balancer. Forwarding rules are also used for protocol forwarding, Private Service Connect and other network services to provide forwarding information in the control plane. Format: projects/{project}/global/forwardingRules/{id} or projects/{project}/regions/{region}/forwardingRules/{id}

`string forwarding_rule = 13;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The forwardingRule to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setForwardingRuleBytes(ByteString value)

```
public Endpoint.Builder setForwardingRuleBytes(ByteString value)
```

A forwarding rule and its corresponding IP address represent the frontend configuration of a Google Cloud load balancer. Forwarding rules are also used for protocol forwarding, Private Service Connect and other network services to provide forwarding information in the control plane. Format: projects/{project}/global/forwardingRules/{id} or projects/{project}/regions/{region}/forwardingRules/{id}

`string forwarding_rule = 13;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for forwardingRule to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setGkeMasterCluster(String value)

```
public Endpoint.Builder setGkeMasterCluster(String value)
```

A cluster URI for [Google Kubernetes Engine master](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture).

`string gke_master_cluster = 7;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The gkeMasterCluster to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setGkeMasterClusterBytes(ByteString value)

```
public Endpoint.Builder setGkeMasterClusterBytes(ByteString value)
```

A cluster URI for [Google Kubernetes Engine master](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture).

`string gke_master_cluster = 7;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for gkeMasterCluster to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setInstance(String value)

```
public Endpoint.Builder setInstance(String value)
```

A Compute Engine instance URI.

`string instance = 3;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The instance to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setInstanceBytes(ByteString value)

```
public Endpoint.Builder setInstanceBytes(ByteString value)
```

A Compute Engine instance URI.

`string instance = 3;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for instance to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setIpAddress(String value)

```
public Endpoint.Builder setIpAddress(String value)
```

The IP address of the endpoint, which can be an external or internal IP. An IPv6 address is only allowed when the test's destination is a [global load balancer VIP](/load-balancing/docs/load-balancing-overview).

`string ip_address = 1;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The ipAddress to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setIpAddressBytes(ByteString value)

```
public Endpoint.Builder setIpAddressBytes(ByteString value)
```

The IP address of the endpoint, which can be an external or internal IP. An IPv6 address is only allowed when the test's destination is a [global load balancer VIP](/load-balancing/docs/load-balancing-overview).

`string ip_address = 1;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for ipAddress to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setNetwork(String value)

```
public Endpoint.Builder setNetwork(String value)
```

A Compute Engine network URI.

`string network = 4;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The network to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setNetworkBytes(ByteString value)

```
public Endpoint.Builder setNetworkBytes(ByteString value)
```

A Compute Engine network URI.

`string network = 4;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for network to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setNetworkType(Endpoint.NetworkType value)

```
public Endpoint.Builder setNetworkType(Endpoint.NetworkType value)
```

Type of the network where the endpoint is located. Applicable only to source endpoint, as destination network type can be inferred from the source.

`.google.cloud.networkmanagement.v1.Endpoint.NetworkType network_type = 5;`

**Parameter**

**Name**

**Description**

`value`

`[Endpoint.NetworkType](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.NetworkType)`  

The networkType to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setNetworkTypeValue(int value)

```
public Endpoint.Builder setNetworkTypeValue(int value)
```

Type of the network where the endpoint is located. Applicable only to source endpoint, as destination network type can be inferred from the source.

`.google.cloud.networkmanagement.v1.Endpoint.NetworkType network_type = 5;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enum numeric value on the wire for networkType to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setPort(int value)

```
public Endpoint.Builder setPort(int value)
```

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

`int32 port = 2;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The port to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setProjectId(String value)

```
public Endpoint.Builder setProjectId(String value)
```

Project ID where the endpoint is located. The Project ID can be derived from the URI if you provide a VM instance or network URI. The following are two cases where you must provide the project ID:

1.  Only the IP address is specified, and the IP address is within a Google Cloud project.
2.  When you are using Shared VPC and the IP address that you provide is from the service project. In this case, the network that the IP address resides in is defined in the host project.

`string project_id = 6;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The projectId to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setProjectIdBytes(ByteString value)

```
public Endpoint.Builder setProjectIdBytes(ByteString value)
```

Project ID where the endpoint is located. The Project ID can be derived from the URI if you provide a VM instance or network URI. The following are two cases where you must provide the project ID:

1.  Only the IP address is specified, and the IP address is within a Google Cloud project.
2.  When you are using Shared VPC and the IP address that you provide is from the service project. In this case, the network that the IP address resides in is defined in the host project.

`string project_id = 6;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for projectId to set.

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public Endpoint.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final Endpoint.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Endpoint.Builder](/java/docs/reference/google-cloud-network-management/1.22.0/com.google.cloud.networkmanagement.v1.Endpoint.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
