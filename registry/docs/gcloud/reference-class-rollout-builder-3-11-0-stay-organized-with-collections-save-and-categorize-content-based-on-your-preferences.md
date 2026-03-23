-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Rollout.Builder (3.11.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.7 3.0.1 2.1.7

```
public static final class Rollout.Builder extends GeneratedMessageV3.Builder<Rollout.Builder> implements RolloutOrBuilder
```

A rollout resource that defines how service configuration versions are pushed to control plane systems. Typically, you create a new version of the service config, and then create a Rollout to push the service config.

Protobuf type `google.api.servicemanagement.v1.Rollout`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> Rollout.Builder

## Implements

[RolloutOrBuilder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.RolloutOrBuilder)

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
public Rollout.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public Rollout build()
```

**Returns**

**Type**

**Description**

`[Rollout](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout)`

### buildPartial()

```
public Rollout buildPartial()
```

**Returns**

**Type**

**Description**

`[Rollout](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout)`

### clear()

```
public Rollout.Builder clear()
```

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearCreateTime()

```
public Rollout.Builder clearCreateTime()
```

Creation time of the rollout. Readonly.

`.google.protobuf.Timestamp create_time = 2;`

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

### clearCreatedBy()

```
public Rollout.Builder clearCreatedBy()
```

The user who created the Rollout. Readonly.

`string created_by = 3;`

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

This builder for chaining.

### clearDeleteServiceStrategy()

```
public Rollout.Builder clearDeleteServiceStrategy()
```

The strategy associated with a rollout to delete a `ManagedService`. Readonly.

`.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy delete_service_strategy = 200;`

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

### clearField(Descriptors.FieldDescriptor field)

```
public Rollout.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public Rollout.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearRolloutId()

```
public Rollout.Builder clearRolloutId()
```

Optional. Unique identifier of this Rollout. Must be no longer than 63 characters and only lower case letters, digits, '.', '\_' and '-' are allowed. If not specified by client, the server will generate one. The generated id will have the form of <date><revision number>, where "date" is the create date in ISO 8601 format. "revision number" is a monotonically increasing positive number that is reset every day for each service. An example of the generated rollout\_id is '2016-02-16r1'

`string rollout_id = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

This builder for chaining.

### clearServiceName()

```
public Rollout.Builder clearServiceName()
```

The name of the service associated with this Rollout.

`string service_name = 8;`

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

This builder for chaining.

### clearStatus()

```
public Rollout.Builder clearStatus()
```

The status of this rollout. Readonly. In case of a failed rollout, the system will automatically rollback to the current Rollout version. Readonly.

`.google.api.servicemanagement.v1.Rollout.RolloutStatus status = 4;`

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

This builder for chaining.

### clearStrategy()

```
public Rollout.Builder clearStrategy()
```

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

### clearTrafficPercentStrategy()

```
public Rollout.Builder clearTrafficPercentStrategy()
```

Google Service Control selects service configurations based on traffic percentage.

`.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy traffic_percent_strategy = 5;`

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

### clone()

```
public Rollout.Builder clone()
```

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getCreateTime()

```
public Timestamp getCreateTime()
```

Creation time of the rollout. Readonly.

`.google.protobuf.Timestamp create_time = 2;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeBuilder()

```
public Timestamp.Builder getCreateTimeBuilder()
```

Creation time of the rollout. Readonly.

`.google.protobuf.Timestamp create_time = 2;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getCreateTimeOrBuilder()

```
public TimestampOrBuilder getCreateTimeOrBuilder()
```

Creation time of the rollout. Readonly.

`.google.protobuf.Timestamp create_time = 2;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getCreatedBy()

```
public String getCreatedBy()
```

The user who created the Rollout. Readonly.

`string created_by = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The createdBy.

### getCreatedByBytes()

```
public ByteString getCreatedByBytes()
```

The user who created the Rollout. Readonly.

`string created_by = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for createdBy.

### getDefaultInstanceForType()

```
public Rollout getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[Rollout](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout)`

### getDeleteServiceStrategy()

```
public Rollout.DeleteServiceStrategy getDeleteServiceStrategy()
```

The strategy associated with a rollout to delete a `ManagedService`. Readonly.

`.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy delete_service_strategy = 200;`

**Returns**

**Type**

**Description**

`[Rollout.DeleteServiceStrategy](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy)`

The deleteServiceStrategy.

### getDeleteServiceStrategyBuilder()

```
public Rollout.DeleteServiceStrategy.Builder getDeleteServiceStrategyBuilder()
```

The strategy associated with a rollout to delete a `ManagedService`. Readonly.

`.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy delete_service_strategy = 200;`

**Returns**

**Type**

**Description**

`[Rollout.DeleteServiceStrategy.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy.Builder)`

### getDeleteServiceStrategyOrBuilder()

```
public Rollout.DeleteServiceStrategyOrBuilder getDeleteServiceStrategyOrBuilder()
```

The strategy associated with a rollout to delete a `ManagedService`. Readonly.

`.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy delete_service_strategy = 200;`

**Returns**

**Type**

**Description**

`[Rollout.DeleteServiceStrategyOrBuilder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategyOrBuilder)`

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

### getRolloutId()

```
public String getRolloutId()
```

Optional. Unique identifier of this Rollout. Must be no longer than 63 characters and only lower case letters, digits, '.', '\_' and '-' are allowed. If not specified by client, the server will generate one. The generated id will have the form of <date><revision number>, where "date" is the create date in ISO 8601 format. "revision number" is a monotonically increasing positive number that is reset every day for each service. An example of the generated rollout\_id is '2016-02-16r1'

`string rollout_id = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The rolloutId.

### getRolloutIdBytes()

```
public ByteString getRolloutIdBytes()
```

Optional. Unique identifier of this Rollout. Must be no longer than 63 characters and only lower case letters, digits, '.', '\_' and '-' are allowed. If not specified by client, the server will generate one. The generated id will have the form of <date><revision number>, where "date" is the create date in ISO 8601 format. "revision number" is a monotonically increasing positive number that is reset every day for each service. An example of the generated rollout\_id is '2016-02-16r1'

`string rollout_id = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for rolloutId.

### getServiceName()

```
public String getServiceName()
```

The name of the service associated with this Rollout.

`string service_name = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The serviceName.

### getServiceNameBytes()

```
public ByteString getServiceNameBytes()
```

The name of the service associated with this Rollout.

`string service_name = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for serviceName.

### getStatus()

```
public Rollout.RolloutStatus getStatus()
```

The status of this rollout. Readonly. In case of a failed rollout, the system will automatically rollback to the current Rollout version. Readonly.

`.google.api.servicemanagement.v1.Rollout.RolloutStatus status = 4;`

**Returns**

**Type**

**Description**

`[Rollout.RolloutStatus](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.RolloutStatus)`

The status.

### getStatusValue()

```
public int getStatusValue()
```

The status of this rollout. Readonly. In case of a failed rollout, the system will automatically rollback to the current Rollout version. Readonly.

`.google.api.servicemanagement.v1.Rollout.RolloutStatus status = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for status.

### getStrategyCase()

```
public Rollout.StrategyCase getStrategyCase()
```

**Returns**

**Type**

**Description**

`[Rollout.StrategyCase](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.StrategyCase)`

### getTrafficPercentStrategy()

```
public Rollout.TrafficPercentStrategy getTrafficPercentStrategy()
```

Google Service Control selects service configurations based on traffic percentage.

`.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy traffic_percent_strategy = 5;`

**Returns**

**Type**

**Description**

`[Rollout.TrafficPercentStrategy](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy)`

The trafficPercentStrategy.

### getTrafficPercentStrategyBuilder()

```
public Rollout.TrafficPercentStrategy.Builder getTrafficPercentStrategyBuilder()
```

Google Service Control selects service configurations based on traffic percentage.

`.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy traffic_percent_strategy = 5;`

**Returns**

**Type**

**Description**

`[Rollout.TrafficPercentStrategy.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy.Builder)`

### getTrafficPercentStrategyOrBuilder()

```
public Rollout.TrafficPercentStrategyOrBuilder getTrafficPercentStrategyOrBuilder()
```

Google Service Control selects service configurations based on traffic percentage.

`.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy traffic_percent_strategy = 5;`

**Returns**

**Type**

**Description**

`[Rollout.TrafficPercentStrategyOrBuilder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategyOrBuilder)`

### hasCreateTime()

```
public boolean hasCreateTime()
```

Creation time of the rollout. Readonly.

`.google.protobuf.Timestamp create_time = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasDeleteServiceStrategy()

```
public boolean hasDeleteServiceStrategy()
```

The strategy associated with a rollout to delete a `ManagedService`. Readonly.

`.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy delete_service_strategy = 200;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the deleteServiceStrategy field is set.

### hasTrafficPercentStrategy()

```
public boolean hasTrafficPercentStrategy()
```

Google Service Control selects service configurations based on traffic percentage.

`.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy traffic_percent_strategy = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the trafficPercentStrategy field is set.

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
public Rollout.Builder mergeCreateTime(Timestamp value)
```

Creation time of the rollout. Readonly.

`.google.protobuf.Timestamp create_time = 2;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

### mergeDeleteServiceStrategy(Rollout.DeleteServiceStrategy value)

```
public Rollout.Builder mergeDeleteServiceStrategy(Rollout.DeleteServiceStrategy value)
```

The strategy associated with a rollout to delete a `ManagedService`. Readonly.

`.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy delete_service_strategy = 200;`

**Parameter**

**Name**

**Description**

`value`

`[Rollout.DeleteServiceStrategy](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy)`  

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

### mergeFrom(Rollout other)

```
public Rollout.Builder mergeFrom(Rollout other)
```

**Parameter**

**Name**

**Description**

`other`

`[Rollout](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout)`  

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public Rollout.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public Rollout.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeTrafficPercentStrategy(Rollout.TrafficPercentStrategy value)

```
public Rollout.Builder mergeTrafficPercentStrategy(Rollout.TrafficPercentStrategy value)
```

Google Service Control selects service configurations based on traffic percentage.

`.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy traffic_percent_strategy = 5;`

**Parameter**

**Name**

**Description**

`value`

`[Rollout.TrafficPercentStrategy](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy)`  

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final Rollout.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setCreateTime(Timestamp value)

```
public Rollout.Builder setCreateTime(Timestamp value)
```

Creation time of the rollout. Readonly.

`.google.protobuf.Timestamp create_time = 2;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

### setCreateTime(Timestamp.Builder builderForValue)

```
public Rollout.Builder setCreateTime(Timestamp.Builder builderForValue)
```

Creation time of the rollout. Readonly.

`.google.protobuf.Timestamp create_time = 2;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

### setCreatedBy(String value)

```
public Rollout.Builder setCreatedBy(String value)
```

The user who created the Rollout. Readonly.

`string created_by = 3;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The createdBy to set.

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

This builder for chaining.

### setCreatedByBytes(ByteString value)

```
public Rollout.Builder setCreatedByBytes(ByteString value)
```

The user who created the Rollout. Readonly.

`string created_by = 3;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for createdBy to set.

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

This builder for chaining.

### setDeleteServiceStrategy(Rollout.DeleteServiceStrategy value)

```
public Rollout.Builder setDeleteServiceStrategy(Rollout.DeleteServiceStrategy value)
```

The strategy associated with a rollout to delete a `ManagedService`. Readonly.

`.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy delete_service_strategy = 200;`

**Parameter**

**Name**

**Description**

`value`

`[Rollout.DeleteServiceStrategy](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy)`  

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

### setDeleteServiceStrategy(Rollout.DeleteServiceStrategy.Builder builderForValue)

```
public Rollout.Builder setDeleteServiceStrategy(Rollout.DeleteServiceStrategy.Builder builderForValue)
```

The strategy associated with a rollout to delete a `ManagedService`. Readonly.

`.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy delete_service_strategy = 200;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Rollout.DeleteServiceStrategy.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.DeleteServiceStrategy.Builder)`  

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public Rollout.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public Rollout.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setRolloutId(String value)

```
public Rollout.Builder setRolloutId(String value)
```

Optional. Unique identifier of this Rollout. Must be no longer than 63 characters and only lower case letters, digits, '.', '\_' and '-' are allowed. If not specified by client, the server will generate one. The generated id will have the form of <date><revision number>, where "date" is the create date in ISO 8601 format. "revision number" is a monotonically increasing positive number that is reset every day for each service. An example of the generated rollout\_id is '2016-02-16r1'

`string rollout_id = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The rolloutId to set.

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

This builder for chaining.

### setRolloutIdBytes(ByteString value)

```
public Rollout.Builder setRolloutIdBytes(ByteString value)
```

Optional. Unique identifier of this Rollout. Must be no longer than 63 characters and only lower case letters, digits, '.', '\_' and '-' are allowed. If not specified by client, the server will generate one. The generated id will have the form of <date><revision number>, where "date" is the create date in ISO 8601 format. "revision number" is a monotonically increasing positive number that is reset every day for each service. An example of the generated rollout\_id is '2016-02-16r1'

`string rollout_id = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for rolloutId to set.

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

This builder for chaining.

### setServiceName(String value)

```
public Rollout.Builder setServiceName(String value)
```

The name of the service associated with this Rollout.

`string service_name = 8;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The serviceName to set.

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

This builder for chaining.

### setServiceNameBytes(ByteString value)

```
public Rollout.Builder setServiceNameBytes(ByteString value)
```

The name of the service associated with this Rollout.

`string service_name = 8;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for serviceName to set.

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

This builder for chaining.

### setStatus(Rollout.RolloutStatus value)

```
public Rollout.Builder setStatus(Rollout.RolloutStatus value)
```

The status of this rollout. Readonly. In case of a failed rollout, the system will automatically rollback to the current Rollout version. Readonly.

`.google.api.servicemanagement.v1.Rollout.RolloutStatus status = 4;`

**Parameter**

**Name**

**Description**

`value`

`[Rollout.RolloutStatus](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.RolloutStatus)`  

The status to set.

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

This builder for chaining.

### setStatusValue(int value)

```
public Rollout.Builder setStatusValue(int value)
```

The status of this rollout. Readonly. In case of a failed rollout, the system will automatically rollback to the current Rollout version. Readonly.

`.google.api.servicemanagement.v1.Rollout.RolloutStatus status = 4;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enum numeric value on the wire for status to set.

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

This builder for chaining.

### setTrafficPercentStrategy(Rollout.TrafficPercentStrategy value)

```
public Rollout.Builder setTrafficPercentStrategy(Rollout.TrafficPercentStrategy value)
```

Google Service Control selects service configurations based on traffic percentage.

`.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy traffic_percent_strategy = 5;`

**Parameter**

**Name**

**Description**

`value`

`[Rollout.TrafficPercentStrategy](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy)`  

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

### setTrafficPercentStrategy(Rollout.TrafficPercentStrategy.Builder builderForValue)

```
public Rollout.Builder setTrafficPercentStrategy(Rollout.TrafficPercentStrategy.Builder builderForValue)
```

Google Service Control selects service configurations based on traffic percentage.

`.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy traffic_percent_strategy = 5;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Rollout.TrafficPercentStrategy.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.TrafficPercentStrategy.Builder)`  

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final Rollout.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Rollout.Builder](/java/docs/reference/google-cloud-service-management/3.11.0/com.google.api.servicemanagement.v1.Rollout.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
