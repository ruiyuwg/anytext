-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TlsRoute.Builder (0.12.0) Stay organized with collections Save and categorize content based on your preferences.

0.43.0 (latest) 0.41.0 0.39.0 0.38.0 0.36.0 0.34.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.26.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static final class TlsRoute.Builder extends GeneratedMessageV3.Builder<TlsRoute.Builder> implements TlsRouteOrBuilder
```

TlsRoute defines how traffic should be routed based on SNI and other matching L3 attributes.

Protobuf type `google.cloud.networkservices.v1.TlsRoute`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> TlsRoute.Builder

## Implements

[TlsRouteOrBuilder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRouteOrBuilder)

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

com.google.protobuf.GeneratedMessageV3.Builder.internalGetMapFieldReflection(int)

[GeneratedMessageV3.Builder.internalGetMutableMapField(int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetMutableMapField_int_)

com.google.protobuf.GeneratedMessageV3.Builder.internalGetMutableMapFieldReflection(int)

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

### addAllGateways(Iterable<String> values)

```
public TlsRoute.Builder addAllGateways(Iterable<String> values)
```

Optional. Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: `projects/*/locations/global/gateways/<gateway_name>`

`repeated string gateways = 7 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The gateways to add.

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### addAllMeshes(Iterable<String> values)

```
public TlsRoute.Builder addAllMeshes(Iterable<String> values)
```

Optional. Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: `projects/*/locations/global/meshes/<mesh_name>`

The attached Mesh should be of a type SIDECAR

`repeated string meshes = 6 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The meshes to add.

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### addAllRules(Iterable<? extends TlsRoute.RouteRule> values)

```
public TlsRoute.Builder addAllRules(Iterable<? extends TlsRoute.RouteRule> values)
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.networkservices.v1.TlsRoute.RouteRule>`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### addGateways(String value)

```
public TlsRoute.Builder addGateways(String value)
```

Optional. Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: `projects/*/locations/global/gateways/<gateway_name>`

`repeated string gateways = 7 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The gateways to add.

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### addGatewaysBytes(ByteString value)

```
public TlsRoute.Builder addGatewaysBytes(ByteString value)
```

Optional. Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: `projects/*/locations/global/gateways/<gateway_name>`

`repeated string gateways = 7 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the gateways to add.

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### addMeshes(String value)

```
public TlsRoute.Builder addMeshes(String value)
```

Optional. Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: `projects/*/locations/global/meshes/<mesh_name>`

The attached Mesh should be of a type SIDECAR

`repeated string meshes = 6 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The meshes to add.

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### addMeshesBytes(ByteString value)

```
public TlsRoute.Builder addMeshesBytes(ByteString value)
```

Optional. Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: `projects/*/locations/global/meshes/<mesh_name>`

The attached Mesh should be of a type SIDECAR

`repeated string meshes = 6 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the meshes to add.

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public TlsRoute.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### addRules(TlsRoute.RouteRule value)

```
public TlsRoute.Builder addRules(TlsRoute.RouteRule value)
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[TlsRoute.RouteRule](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.RouteRule)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### addRules(TlsRoute.RouteRule.Builder builderForValue)

```
public TlsRoute.Builder addRules(TlsRoute.RouteRule.Builder builderForValue)
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[TlsRoute.RouteRule.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.RouteRule.Builder)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### addRules(int index, TlsRoute.RouteRule value)

```
public TlsRoute.Builder addRules(int index, TlsRoute.RouteRule value)
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[TlsRoute.RouteRule](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.RouteRule)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### addRules(int index, TlsRoute.RouteRule.Builder builderForValue)

```
public TlsRoute.Builder addRules(int index, TlsRoute.RouteRule.Builder builderForValue)
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[TlsRoute.RouteRule.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.RouteRule.Builder)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### addRulesBuilder()

```
public TlsRoute.RouteRule.Builder addRulesBuilder()
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[TlsRoute.RouteRule.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.RouteRule.Builder)`

### addRulesBuilder(int index)

```
public TlsRoute.RouteRule.Builder addRulesBuilder(int index)
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TlsRoute.RouteRule.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.RouteRule.Builder)`

### build()

```
public TlsRoute build()
```

**Returns**

**Type**

**Description**

`[TlsRoute](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute)`

### buildPartial()

```
public TlsRoute buildPartial()
```

**Returns**

**Type**

**Description**

`[TlsRoute](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute)`

### clear()

```
public TlsRoute.Builder clear()
```

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearCreateTime()

```
public TlsRoute.Builder clearCreateTime()
```

Output only. The timestamp when the resource was created.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### clearDescription()

```
public TlsRoute.Builder clearDescription()
```

Optional. A free-text description of the resource. Max length 1024 characters.

`string description = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public TlsRoute.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearGateways()

```
public TlsRoute.Builder clearGateways()
```

Optional. Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: `projects/*/locations/global/gateways/<gateway_name>`

`repeated string gateways = 7 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### clearMeshes()

```
public TlsRoute.Builder clearMeshes()
```

Optional. Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: `projects/*/locations/global/meshes/<mesh_name>`

The attached Mesh should be of a type SIDECAR

`repeated string meshes = 6 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### clearName()

```
public TlsRoute.Builder clearName()
```

Required. Name of the TlsRoute resource. It matches pattern `projects/*/locations/global/tlsRoutes/tls_route_name>`.

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public TlsRoute.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearRules()

```
public TlsRoute.Builder clearRules()
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### clearSelfLink()

```
public TlsRoute.Builder clearSelfLink()
```

Output only. Server-defined URL of this resource

`string self_link = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### clearUpdateTime()

```
public TlsRoute.Builder clearUpdateTime()
```

Output only. The timestamp when the resource was updated.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### clone()

```
public TlsRoute.Builder clone()
```

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getCreateTime()

```
public Timestamp getCreateTime()
```

Output only. The timestamp when the resource was created.

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

Output only. The timestamp when the resource was created.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getCreateTimeOrBuilder()

```
public TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. The timestamp when the resource was created.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDefaultInstanceForType()

```
public TlsRoute getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[TlsRoute](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute)`

### getDescription()

```
public String getDescription()
```

Optional. A free-text description of the resource. Max length 1024 characters.

`string description = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public ByteString getDescriptionBytes()
```

Optional. A free-text description of the resource. Max length 1024 characters.

`string description = 4 [(.google.api.field_behavior) = OPTIONAL];`

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

### getGateways(int index)

```
public String getGateways(int index)
```

Optional. Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: `projects/*/locations/global/gateways/<gateway_name>`

`repeated string gateways = 7 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

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

The gateways at the given index.

### getGatewaysBytes(int index)

```
public ByteString getGatewaysBytes(int index)
```

Optional. Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: `projects/*/locations/global/gateways/<gateway_name>`

`repeated string gateways = 7 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

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

The bytes of the gateways at the given index.

### getGatewaysCount()

```
public int getGatewaysCount()
```

Optional. Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: `projects/*/locations/global/gateways/<gateway_name>`

`repeated string gateways = 7 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of gateways.

### getGatewaysList()

```
public ProtocolStringList getGatewaysList()
```

Optional. Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: `projects/*/locations/global/gateways/<gateway_name>`

`repeated string gateways = 7 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)`

A list containing the gateways.

### getMeshes(int index)

```
public String getMeshes(int index)
```

Optional. Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: `projects/*/locations/global/meshes/<mesh_name>`

The attached Mesh should be of a type SIDECAR

`repeated string meshes = 6 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

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

The meshes at the given index.

### getMeshesBytes(int index)

```
public ByteString getMeshesBytes(int index)
```

Optional. Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: `projects/*/locations/global/meshes/<mesh_name>`

The attached Mesh should be of a type SIDECAR

`repeated string meshes = 6 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

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

The bytes of the meshes at the given index.

### getMeshesCount()

```
public int getMeshesCount()
```

Optional. Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: `projects/*/locations/global/meshes/<mesh_name>`

The attached Mesh should be of a type SIDECAR

`repeated string meshes = 6 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of meshes.

### getMeshesList()

```
public ProtocolStringList getMeshesList()
```

Optional. Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: `projects/*/locations/global/meshes/<mesh_name>`

The attached Mesh should be of a type SIDECAR

`repeated string meshes = 6 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)`

A list containing the meshes.

### getName()

```
public String getName()
```

Required. Name of the TlsRoute resource. It matches pattern `projects/*/locations/global/tlsRoutes/tls_route_name>`.

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public ByteString getNameBytes()
```

Required. Name of the TlsRoute resource. It matches pattern `projects/*/locations/global/tlsRoutes/tls_route_name>`.

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getRules(int index)

```
public TlsRoute.RouteRule getRules(int index)
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TlsRoute.RouteRule](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.RouteRule)`

### getRulesBuilder(int index)

```
public TlsRoute.RouteRule.Builder getRulesBuilder(int index)
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TlsRoute.RouteRule.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.RouteRule.Builder)`

### getRulesBuilderList()

```
public List<TlsRoute.RouteRule.Builder> getRulesBuilderList()
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.RouteRule.Builder)>`

### getRulesCount()

```
public int getRulesCount()
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getRulesList()

```
public List<TlsRoute.RouteRule> getRulesList()
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[RouteRule](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.RouteRule)>`

### getRulesOrBuilder(int index)

```
public TlsRoute.RouteRuleOrBuilder getRulesOrBuilder(int index)
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TlsRoute.RouteRuleOrBuilder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.RouteRuleOrBuilder)`

### getRulesOrBuilderList()

```
public List<? extends TlsRoute.RouteRuleOrBuilder> getRulesOrBuilderList()
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.networkservices.v1.TlsRoute.RouteRuleOrBuilder>`

### getSelfLink()

```
public String getSelfLink()
```

Output only. Server-defined URL of this resource

`string self_link = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The selfLink.

### getSelfLinkBytes()

```
public ByteString getSelfLinkBytes()
```

Output only. Server-defined URL of this resource

`string self_link = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for selfLink.

### getUpdateTime()

```
public Timestamp getUpdateTime()
```

Output only. The timestamp when the resource was updated.

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

Output only. The timestamp when the resource was updated.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getUpdateTimeOrBuilder()

```
public TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. The timestamp when the resource was updated.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasCreateTime()

```
public boolean hasCreateTime()
```

Output only. The timestamp when the resource was created.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasUpdateTime()

```
public boolean hasUpdateTime()
```

Output only. The timestamp when the resource was updated.

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
public TlsRoute.Builder mergeCreateTime(Timestamp value)
```

Output only. The timestamp when the resource was created.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### mergeFrom(TlsRoute other)

```
public TlsRoute.Builder mergeFrom(TlsRoute other)
```

**Parameter**

**Name**

**Description**

`other`

`[TlsRoute](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public TlsRoute.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public TlsRoute.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final TlsRoute.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### mergeUpdateTime(Timestamp value)

```
public TlsRoute.Builder mergeUpdateTime(Timestamp value)
```

Output only. The timestamp when the resource was updated.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### removeRules(int index)

```
public TlsRoute.Builder removeRules(int index)
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### setCreateTime(Timestamp value)

```
public TlsRoute.Builder setCreateTime(Timestamp value)
```

Output only. The timestamp when the resource was created.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### setCreateTime(Timestamp.Builder builderForValue)

```
public TlsRoute.Builder setCreateTime(Timestamp.Builder builderForValue)
```

Output only. The timestamp when the resource was created.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### setDescription(String value)

```
public TlsRoute.Builder setDescription(String value)
```

Optional. A free-text description of the resource. Max length 1024 characters.

`string description = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The description to set.

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### setDescriptionBytes(ByteString value)

```
public TlsRoute.Builder setDescriptionBytes(ByteString value)
```

Optional. A free-text description of the resource. Max length 1024 characters.

`string description = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for description to set.

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public TlsRoute.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setGateways(int index, String value)

```
public TlsRoute.Builder setGateways(int index, String value)
```

Optional. Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: `projects/*/locations/global/gateways/<gateway_name>`

`repeated string gateways = 7 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The gateways to set.

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### setMeshes(int index, String value)

```
public TlsRoute.Builder setMeshes(int index, String value)
```

Optional. Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: `projects/*/locations/global/meshes/<mesh_name>`

The attached Mesh should be of a type SIDECAR

`repeated string meshes = 6 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The meshes to set.

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### setName(String value)

```
public TlsRoute.Builder setName(String value)
```

Required. Name of the TlsRoute resource. It matches pattern `projects/*/locations/global/tlsRoutes/tls_route_name>`.

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The name to set.

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### setNameBytes(ByteString value)

```
public TlsRoute.Builder setNameBytes(ByteString value)
```

Required. Name of the TlsRoute resource. It matches pattern `projects/*/locations/global/tlsRoutes/tls_route_name>`.

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for name to set.

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public TlsRoute.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setRules(int index, TlsRoute.RouteRule value)

```
public TlsRoute.Builder setRules(int index, TlsRoute.RouteRule value)
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[TlsRoute.RouteRule](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.RouteRule)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### setRules(int index, TlsRoute.RouteRule.Builder builderForValue)

```
public TlsRoute.Builder setRules(int index, TlsRoute.RouteRule.Builder builderForValue)
```

Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.

`repeated .google.cloud.networkservices.v1.TlsRoute.RouteRule rules = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[TlsRoute.RouteRule.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.RouteRule.Builder)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### setSelfLink(String value)

```
public TlsRoute.Builder setSelfLink(String value)
```

Output only. Server-defined URL of this resource

`string self_link = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The selfLink to set.

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### setSelfLinkBytes(ByteString value)

```
public TlsRoute.Builder setSelfLinkBytes(ByteString value)
```

Output only. Server-defined URL of this resource

`string self_link = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for selfLink to set.

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

This builder for chaining.

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final TlsRoute.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setUpdateTime(Timestamp value)

```
public TlsRoute.Builder setUpdateTime(Timestamp value)
```

Output only. The timestamp when the resource was updated.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

### setUpdateTime(Timestamp.Builder builderForValue)

```
public TlsRoute.Builder setUpdateTime(Timestamp.Builder builderForValue)
```

Output only. The timestamp when the resource was updated.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[TlsRoute.Builder](/java/docs/reference/google-cloud-networkservices/0.12.0/com.google.cloud.networkservices.v1.TlsRoute.Builder)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
