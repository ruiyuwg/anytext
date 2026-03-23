-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class QueuedResource.Builder (2.35.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.2.6

```
public static final class QueuedResource.Builder extends GeneratedMessageV3.Builder<QueuedResource.Builder> implements QueuedResourceOrBuilder
```

A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.

Protobuf type `google.cloud.tpu.v2alpha1.QueuedResource`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> QueuedResource.Builder

## Implements

[QueuedResourceOrBuilder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResourceOrBuilder)

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

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public QueuedResource.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public QueuedResource build()
```

**Returns**

**Type**

**Description**

`[QueuedResource](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource)`

### buildPartial()

```
public QueuedResource buildPartial()
```

**Returns**

**Type**

**Description**

`[QueuedResource](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource)`

### clear()

```
public QueuedResource.Builder clear()
```

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearBestEffort()

```
public QueuedResource.Builder clearBestEffort()
```

The BestEffort tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort best_effort = 3;`

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### clearField(Descriptors.FieldDescriptor field)

```
public QueuedResource.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearGuaranteed()

```
public QueuedResource.Builder clearGuaranteed()
```

The Guaranteed tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed guaranteed = 4;`

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### clearName()

```
public QueuedResource.Builder clearName()
```

Output only. Immutable. The name of the QueuedResource.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public QueuedResource.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearQueueingPolicy()

```
public QueuedResource.Builder clearQueueingPolicy()
```

The queueing policy of the QueuedRequest.

`.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy queueing_policy = 5;`

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### clearReservationName()

```
public QueuedResource.Builder clearReservationName()
```

Name of the reservation in which the resource should be provisioned. Format: projects/{project}/locations/{zone}/reservations/{reservation}

`string reservation_name = 8;`

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

This builder for chaining.

### clearResource()

```
public QueuedResource.Builder clearResource()
```

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### clearSpot()

```
public QueuedResource.Builder clearSpot()
```

Optional. The Spot tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Spot spot = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### clearState()

```
public QueuedResource.Builder clearState()
```

Output only. State of the QueuedResource request.

`.google.cloud.tpu.v2alpha1.QueuedResourceState state = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### clearTier()

```
public QueuedResource.Builder clearTier()
```

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### clearTpu()

```
public QueuedResource.Builder clearTpu()
```

Defines a TPU resource.

`.google.cloud.tpu.v2alpha1.QueuedResource.Tpu tpu = 2;`

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### clone()

```
public QueuedResource.Builder clone()
```

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getBestEffort()

```
public QueuedResource.BestEffort getBestEffort()
```

The BestEffort tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort best_effort = 3;`

**Returns**

**Type**

**Description**

`[QueuedResource.BestEffort](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort)`

The bestEffort.

### getBestEffortBuilder()

```
public QueuedResource.BestEffort.Builder getBestEffortBuilder()
```

The BestEffort tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort best_effort = 3;`

**Returns**

**Type**

**Description**

`[QueuedResource.BestEffort.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort.Builder)`

### getBestEffortOrBuilder()

```
public QueuedResource.BestEffortOrBuilder getBestEffortOrBuilder()
```

The BestEffort tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort best_effort = 3;`

**Returns**

**Type**

**Description**

`[QueuedResource.BestEffortOrBuilder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.BestEffortOrBuilder)`

### getDefaultInstanceForType()

```
public QueuedResource getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[QueuedResource](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource)`

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

### getGuaranteed()

```
public QueuedResource.Guaranteed getGuaranteed()
```

The Guaranteed tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed guaranteed = 4;`

**Returns**

**Type**

**Description**

`[QueuedResource.Guaranteed](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed)`

The guaranteed.

### getGuaranteedBuilder()

```
public QueuedResource.Guaranteed.Builder getGuaranteedBuilder()
```

The Guaranteed tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed guaranteed = 4;`

**Returns**

**Type**

**Description**

`[QueuedResource.Guaranteed.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed.Builder)`

### getGuaranteedOrBuilder()

```
public QueuedResource.GuaranteedOrBuilder getGuaranteedOrBuilder()
```

The Guaranteed tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed guaranteed = 4;`

**Returns**

**Type**

**Description**

`[QueuedResource.GuaranteedOrBuilder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.GuaranteedOrBuilder)`

### getName()

```
public String getName()
```

Output only. Immutable. The name of the QueuedResource.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public ByteString getNameBytes()
```

Output only. Immutable. The name of the QueuedResource.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getQueueingPolicy()

```
public QueuedResource.QueueingPolicy getQueueingPolicy()
```

The queueing policy of the QueuedRequest.

`.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy queueing_policy = 5;`

**Returns**

**Type**

**Description**

`[QueuedResource.QueueingPolicy](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy)`

The queueingPolicy.

### getQueueingPolicyBuilder()

```
public QueuedResource.QueueingPolicy.Builder getQueueingPolicyBuilder()
```

The queueing policy of the QueuedRequest.

`.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy queueing_policy = 5;`

**Returns**

**Type**

**Description**

`[QueuedResource.QueueingPolicy.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy.Builder)`

### getQueueingPolicyOrBuilder()

```
public QueuedResource.QueueingPolicyOrBuilder getQueueingPolicyOrBuilder()
```

The queueing policy of the QueuedRequest.

`.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy queueing_policy = 5;`

**Returns**

**Type**

**Description**

`[QueuedResource.QueueingPolicyOrBuilder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicyOrBuilder)`

### getReservationName()

```
public String getReservationName()
```

Name of the reservation in which the resource should be provisioned. Format: projects/{project}/locations/{zone}/reservations/{reservation}

`string reservation_name = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The reservationName.

### getReservationNameBytes()

```
public ByteString getReservationNameBytes()
```

Name of the reservation in which the resource should be provisioned. Format: projects/{project}/locations/{zone}/reservations/{reservation}

`string reservation_name = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for reservationName.

### getResourceCase()

```
public QueuedResource.ResourceCase getResourceCase()
```

**Returns**

**Type**

**Description**

`[QueuedResource.ResourceCase](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.ResourceCase)`

### getSpot()

```
public QueuedResource.Spot getSpot()
```

Optional. The Spot tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Spot spot = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[QueuedResource.Spot](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Spot)`

The spot.

### getSpotBuilder()

```
public QueuedResource.Spot.Builder getSpotBuilder()
```

Optional. The Spot tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Spot spot = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[QueuedResource.Spot.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Spot.Builder)`

### getSpotOrBuilder()

```
public QueuedResource.SpotOrBuilder getSpotOrBuilder()
```

Optional. The Spot tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Spot spot = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[QueuedResource.SpotOrBuilder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.SpotOrBuilder)`

### getState()

```
public QueuedResourceState getState()
```

Output only. State of the QueuedResource request.

`.google.cloud.tpu.v2alpha1.QueuedResourceState state = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[QueuedResourceState](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResourceState)`

The state.

### getStateBuilder()

```
public QueuedResourceState.Builder getStateBuilder()
```

Output only. State of the QueuedResource request.

`.google.cloud.tpu.v2alpha1.QueuedResourceState state = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[QueuedResourceState.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResourceState.Builder)`

### getStateOrBuilder()

```
public QueuedResourceStateOrBuilder getStateOrBuilder()
```

Output only. State of the QueuedResource request.

`.google.cloud.tpu.v2alpha1.QueuedResourceState state = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[QueuedResourceStateOrBuilder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResourceStateOrBuilder)`

### getTierCase()

```
public QueuedResource.TierCase getTierCase()
```

**Returns**

**Type**

**Description**

`[QueuedResource.TierCase](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.TierCase)`

### getTpu()

```
public QueuedResource.Tpu getTpu()
```

Defines a TPU resource.

`.google.cloud.tpu.v2alpha1.QueuedResource.Tpu tpu = 2;`

**Returns**

**Type**

**Description**

`[QueuedResource.Tpu](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Tpu)`

The tpu.

### getTpuBuilder()

```
public QueuedResource.Tpu.Builder getTpuBuilder()
```

Defines a TPU resource.

`.google.cloud.tpu.v2alpha1.QueuedResource.Tpu tpu = 2;`

**Returns**

**Type**

**Description**

`[QueuedResource.Tpu.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Tpu.Builder)`

### getTpuOrBuilder()

```
public QueuedResource.TpuOrBuilder getTpuOrBuilder()
```

Defines a TPU resource.

`.google.cloud.tpu.v2alpha1.QueuedResource.Tpu tpu = 2;`

**Returns**

**Type**

**Description**

`[QueuedResource.TpuOrBuilder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.TpuOrBuilder)`

### hasBestEffort()

```
public boolean hasBestEffort()
```

The BestEffort tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort best_effort = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the bestEffort field is set.

### hasGuaranteed()

```
public boolean hasGuaranteed()
```

The Guaranteed tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed guaranteed = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the guaranteed field is set.

### hasQueueingPolicy()

```
public boolean hasQueueingPolicy()
```

The queueing policy of the QueuedRequest.

`.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy queueing_policy = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the queueingPolicy field is set.

### hasSpot()

```
public boolean hasSpot()
```

Optional. The Spot tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Spot spot = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the spot field is set.

### hasState()

```
public boolean hasState()
```

Output only. State of the QueuedResource request.

`.google.cloud.tpu.v2alpha1.QueuedResourceState state = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the state field is set.

### hasTpu()

```
public boolean hasTpu()
```

Defines a TPU resource.

`.google.cloud.tpu.v2alpha1.QueuedResource.Tpu tpu = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the tpu field is set.

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

### mergeBestEffort(QueuedResource.BestEffort value)

```
public QueuedResource.Builder mergeBestEffort(QueuedResource.BestEffort value)
```

The BestEffort tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort best_effort = 3;`

**Parameter**

**Name**

**Description**

`value`

`[QueuedResource.BestEffort](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### mergeFrom(QueuedResource other)

```
public QueuedResource.Builder mergeFrom(QueuedResource other)
```

**Parameter**

**Name**

**Description**

`other`

`[QueuedResource](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public QueuedResource.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public QueuedResource.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeGuaranteed(QueuedResource.Guaranteed value)

```
public QueuedResource.Builder mergeGuaranteed(QueuedResource.Guaranteed value)
```

The Guaranteed tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed guaranteed = 4;`

**Parameter**

**Name**

**Description**

`value`

`[QueuedResource.Guaranteed](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### mergeQueueingPolicy(QueuedResource.QueueingPolicy value)

```
public QueuedResource.Builder mergeQueueingPolicy(QueuedResource.QueueingPolicy value)
```

The queueing policy of the QueuedRequest.

`.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy queueing_policy = 5;`

**Parameter**

**Name**

**Description**

`value`

`[QueuedResource.QueueingPolicy](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### mergeSpot(QueuedResource.Spot value)

```
public QueuedResource.Builder mergeSpot(QueuedResource.Spot value)
```

Optional. The Spot tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Spot spot = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[QueuedResource.Spot](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Spot)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### mergeState(QueuedResourceState value)

```
public QueuedResource.Builder mergeState(QueuedResourceState value)
```

Output only. State of the QueuedResource request.

`.google.cloud.tpu.v2alpha1.QueuedResourceState state = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[QueuedResourceState](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResourceState)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### mergeTpu(QueuedResource.Tpu value)

```
public QueuedResource.Builder mergeTpu(QueuedResource.Tpu value)
```

Defines a TPU resource.

`.google.cloud.tpu.v2alpha1.QueuedResource.Tpu tpu = 2;`

**Parameter**

**Name**

**Description**

`value`

`[QueuedResource.Tpu](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Tpu)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final QueuedResource.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setBestEffort(QueuedResource.BestEffort value)

```
public QueuedResource.Builder setBestEffort(QueuedResource.BestEffort value)
```

The BestEffort tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort best_effort = 3;`

**Parameter**

**Name**

**Description**

`value`

`[QueuedResource.BestEffort](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### setBestEffort(QueuedResource.BestEffort.Builder builderForValue)

```
public QueuedResource.Builder setBestEffort(QueuedResource.BestEffort.Builder builderForValue)
```

The BestEffort tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort best_effort = 3;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[QueuedResource.BestEffort.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.BestEffort.Builder)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public QueuedResource.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setGuaranteed(QueuedResource.Guaranteed value)

```
public QueuedResource.Builder setGuaranteed(QueuedResource.Guaranteed value)
```

The Guaranteed tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed guaranteed = 4;`

**Parameter**

**Name**

**Description**

`value`

`[QueuedResource.Guaranteed](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### setGuaranteed(QueuedResource.Guaranteed.Builder builderForValue)

```
public QueuedResource.Builder setGuaranteed(QueuedResource.Guaranteed.Builder builderForValue)
```

The Guaranteed tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed guaranteed = 4;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[QueuedResource.Guaranteed.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed.Builder)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### setName(String value)

```
public QueuedResource.Builder setName(String value)
```

Output only. Immutable. The name of the QueuedResource.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The name to set.

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

This builder for chaining.

### setNameBytes(ByteString value)

```
public QueuedResource.Builder setNameBytes(ByteString value)
```

Output only. Immutable. The name of the QueuedResource.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for name to set.

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

This builder for chaining.

### setQueueingPolicy(QueuedResource.QueueingPolicy value)

```
public QueuedResource.Builder setQueueingPolicy(QueuedResource.QueueingPolicy value)
```

The queueing policy of the QueuedRequest.

`.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy queueing_policy = 5;`

**Parameter**

**Name**

**Description**

`value`

`[QueuedResource.QueueingPolicy](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### setQueueingPolicy(QueuedResource.QueueingPolicy.Builder builderForValue)

```
public QueuedResource.Builder setQueueingPolicy(QueuedResource.QueueingPolicy.Builder builderForValue)
```

The queueing policy of the QueuedRequest.

`.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy queueing_policy = 5;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[QueuedResource.QueueingPolicy.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy.Builder)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public QueuedResource.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setReservationName(String value)

```
public QueuedResource.Builder setReservationName(String value)
```

Name of the reservation in which the resource should be provisioned. Format: projects/{project}/locations/{zone}/reservations/{reservation}

`string reservation_name = 8;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The reservationName to set.

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

This builder for chaining.

### setReservationNameBytes(ByteString value)

```
public QueuedResource.Builder setReservationNameBytes(ByteString value)
```

Name of the reservation in which the resource should be provisioned. Format: projects/{project}/locations/{zone}/reservations/{reservation}

`string reservation_name = 8;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for reservationName to set.

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

This builder for chaining.

### setSpot(QueuedResource.Spot value)

```
public QueuedResource.Builder setSpot(QueuedResource.Spot value)
```

Optional. The Spot tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Spot spot = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[QueuedResource.Spot](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Spot)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### setSpot(QueuedResource.Spot.Builder builderForValue)

```
public QueuedResource.Builder setSpot(QueuedResource.Spot.Builder builderForValue)
```

Optional. The Spot tier.

`.google.cloud.tpu.v2alpha1.QueuedResource.Spot spot = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[QueuedResource.Spot.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Spot.Builder)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### setState(QueuedResourceState value)

```
public QueuedResource.Builder setState(QueuedResourceState value)
```

Output only. State of the QueuedResource request.

`.google.cloud.tpu.v2alpha1.QueuedResourceState state = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[QueuedResourceState](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResourceState)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### setState(QueuedResourceState.Builder builderForValue)

```
public QueuedResource.Builder setState(QueuedResourceState.Builder builderForValue)
```

Output only. State of the QueuedResource request.

`.google.cloud.tpu.v2alpha1.QueuedResourceState state = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[QueuedResourceState.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResourceState.Builder)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### setTpu(QueuedResource.Tpu value)

```
public QueuedResource.Builder setTpu(QueuedResource.Tpu value)
```

Defines a TPU resource.

`.google.cloud.tpu.v2alpha1.QueuedResource.Tpu tpu = 2;`

**Parameter**

**Name**

**Description**

`value`

`[QueuedResource.Tpu](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Tpu)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### setTpu(QueuedResource.Tpu.Builder builderForValue)

```
public QueuedResource.Builder setTpu(QueuedResource.Tpu.Builder builderForValue)
```

Defines a TPU resource.

`.google.cloud.tpu.v2alpha1.QueuedResource.Tpu tpu = 2;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[QueuedResource.Tpu.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Tpu.Builder)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final QueuedResource.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[QueuedResource.Builder](/java/docs/reference/google-cloud-tpu/2.35.0/com.google.cloud.tpu.v2alpha1.QueuedResource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
