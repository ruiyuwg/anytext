-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Operation.Builder (2.47.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.7 2.4.1 2.3.0 2.2.0 2.1.5

```
public static final class Operation.Builder extends GeneratedMessageV3.Builder<Operation.Builder> implements OperationOrBuilder
```

Contains an operation for a resource loosely based on the JSON-PATCH format with support for:

-   Custom filters for describing partial array patch.
-   Extended path values for describing nested arrays.
-   Custom fields for describing the resource for which the operation is being described.
-   Allows extension to custom operations not natively supported by RFC6902. See [https://tools.ietf.org/html/rfc6902](https://tools.ietf.org/html/rfc6902) for details on the original RFC.

Protobuf type `google.cloud.recommender.v1beta1.Operation`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> Operation.Builder

## Implements

[OperationOrBuilder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.OperationOrBuilder)

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
public Operation.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public Operation build()
```

**Returns**

**Type**

**Description**

`[Operation](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation)`

### buildPartial()

```
public Operation buildPartial()
```

**Returns**

**Type**

**Description**

`[Operation](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation)`

### clear()

```
public Operation.Builder clear()
```

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearAction()

```
public Operation.Builder clearAction()
```

Type of this operation. Contains one of 'add', 'remove', 'replace', 'move', 'copy', 'test' and 'custom' operations. This field is case-insensitive and always populated.

`string action = 1;`

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public Operation.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public Operation.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearPath()

```
public Operation.Builder clearPath()
```

Path to the target field being operated on. If the operation is at the resource level, then path should be "/". This field is always populated.

`string path = 4;`

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### clearPathFilters()

```
public Operation.Builder clearPathFilters()
```

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### clearPathValue()

```
public Operation.Builder clearPathValue()
```

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### clearPathValueMatchers()

```
public Operation.Builder clearPathValueMatchers()
```

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### clearResource()

```
public Operation.Builder clearResource()
```

Contains the fully qualified resource name. This field is always populated. ex: //cloudresourcemanager.googleapis.com/projects/foo.

`string resource = 3;`

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### clearResourceType()

```
public Operation.Builder clearResourceType()
```

Type of GCP resource being modified/tested. This field is always populated. Example: cloudresourcemanager.googleapis.com/Project, compute.googleapis.com/Instance

`string resource_type = 2;`

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### clearSourcePath()

```
public Operation.Builder clearSourcePath()
```

Can be set with action 'copy' or 'move' to indicate the source field within resource or source\_resource, ignored if provided for other operation types.

`string source_path = 6;`

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### clearSourceResource()

```
public Operation.Builder clearSourceResource()
```

Can be set with action 'copy' to copy resource configuration across different resources of the same type. Example: A resource clone can be done via action = 'copy', path = "/", from = "/", source\_resource = <source> and resource\_name = <target>. This field is empty for all other values of `action`.

`string source_resource = 5;`

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### clearValue()

```
public Operation.Builder clearValue()
```

Value for the `path` field. Will be set for actions:'add'/'replace'. Maybe set for action: 'test'. Either this or `value_matcher` will be set for 'test' operation. An exact match must be performed.

`.google.protobuf.Value value = 7;`

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### clearValueMatcher()

```
public Operation.Builder clearValueMatcher()
```

Can be set for action 'test' for advanced matching for the value of 'path' field. Either this or `value` will be set for 'test' operation.

`.google.cloud.recommender.v1beta1.ValueMatcher value_matcher = 10;`

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### clone()

```
public Operation.Builder clone()
```

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### containsPathFilters(String key)

```
public boolean containsPathFilters(String key)
```

Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path\_value\_matchers.

-   Example: \` `` `{ "/versions/*/name" : "it-123" "/versions/*/targetSize/percent": 20 }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/condition" : null }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/members/*" : ["x@example.com", "y@example.com"] }` `` \` When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.protobuf.Value> path_filters = 8;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### containsPathValueMatchers(String key)

```
public boolean containsPathValueMatchers(String key)
```

Similar to path\_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path\_filters. When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.cloud.recommender.v1beta1.ValueMatcher> path_value_matchers = 11;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAction()

```
public String getAction()
```

Type of this operation. Contains one of 'add', 'remove', 'replace', 'move', 'copy', 'test' and 'custom' operations. This field is case-insensitive and always populated.

`string action = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The action.

### getActionBytes()

```
public ByteString getActionBytes()
```

Type of this operation. Contains one of 'add', 'remove', 'replace', 'move', 'copy', 'test' and 'custom' operations. This field is case-insensitive and always populated.

`string action = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for action.

### getDefaultInstanceForType()

```
public Operation getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[Operation](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation)`

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

### getMutablePathFilters() (deprecated)

```
public Map<String,Value> getMutablePathFilters()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)>`

### getMutablePathValueMatchers() (deprecated)

```
public Map<String,ValueMatcher> getMutablePathValueMatchers()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.ValueMatcher)>`

### getPath()

```
public String getPath()
```

Path to the target field being operated on. If the operation is at the resource level, then path should be "/". This field is always populated.

`string path = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The path.

### getPathBytes()

```
public ByteString getPathBytes()
```

Path to the target field being operated on. If the operation is at the resource level, then path should be "/". This field is always populated.

`string path = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for path.

### getPathFilters() (deprecated)

```
public Map<String,Value> getPathFilters()
```

Use [#getPathFiltersMap()](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder#com_google_cloud_recommender_v1beta1_Operation_Builder_getPathFiltersMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)>`

### getPathFiltersCount()

```
public int getPathFiltersCount()
```

Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path\_value\_matchers.

-   Example: \` `` `{ "/versions/*/name" : "it-123" "/versions/*/targetSize/percent": 20 }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/condition" : null }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/members/*" : ["x@example.com", "y@example.com"] }` `` \` When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.protobuf.Value> path_filters = 8;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getPathFiltersMap()

```
public Map<String,Value> getPathFiltersMap()
```

Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path\_value\_matchers.

-   Example: \` `` `{ "/versions/*/name" : "it-123" "/versions/*/targetSize/percent": 20 }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/condition" : null }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/members/*" : ["x@example.com", "y@example.com"] }` `` \` When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.protobuf.Value> path_filters = 8;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)>`

### getPathFiltersOrDefault(String key, Value defaultValue)

```
public Value getPathFiltersOrDefault(String key, Value defaultValue)
```

Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path\_value\_matchers.

-   Example: \` `` `{ "/versions/*/name" : "it-123" "/versions/*/targetSize/percent": 20 }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/condition" : null }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/members/*" : ["x@example.com", "y@example.com"] }` `` \` When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.protobuf.Value> path_filters = 8;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)`  

**Returns**

**Type**

**Description**

`[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)`

### getPathFiltersOrThrow(String key)

```
public Value getPathFiltersOrThrow(String key)
```

Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path\_value\_matchers.

-   Example: \` `` `{ "/versions/*/name" : "it-123" "/versions/*/targetSize/percent": 20 }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/condition" : null }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/members/*" : ["x@example.com", "y@example.com"] }` `` \` When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.protobuf.Value> path_filters = 8;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)`

### getPathValueCase()

```
public Operation.PathValueCase getPathValueCase()
```

**Returns**

**Type**

**Description**

`[Operation.PathValueCase](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.PathValueCase)`

### getPathValueMatchers() (deprecated)

```
public Map<String,ValueMatcher> getPathValueMatchers()
```

Use [#getPathValueMatchersMap()](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder#com_google_cloud_recommender_v1beta1_Operation_Builder_getPathValueMatchersMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.ValueMatcher)>`

### getPathValueMatchersCount()

```
public int getPathValueMatchersCount()
```

Similar to path\_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path\_filters. When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.cloud.recommender.v1beta1.ValueMatcher> path_value_matchers = 11;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getPathValueMatchersMap()

```
public Map<String,ValueMatcher> getPathValueMatchersMap()
```

Similar to path\_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path\_filters. When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.cloud.recommender.v1beta1.ValueMatcher> path_value_matchers = 11;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.ValueMatcher)>`

### getPathValueMatchersOrDefault(String key, ValueMatcher defaultValue)

```
public ValueMatcher getPathValueMatchersOrDefault(String key, ValueMatcher defaultValue)
```

Similar to path\_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path\_filters. When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.cloud.recommender.v1beta1.ValueMatcher> path_value_matchers = 11;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.ValueMatcher)`  

**Returns**

**Type**

**Description**

`[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.ValueMatcher)`

### getPathValueMatchersOrThrow(String key)

```
public ValueMatcher getPathValueMatchersOrThrow(String key)
```

Similar to path\_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path\_filters. When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.cloud.recommender.v1beta1.ValueMatcher> path_value_matchers = 11;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.ValueMatcher)`

### getResource()

```
public String getResource()
```

Contains the fully qualified resource name. This field is always populated. ex: //cloudresourcemanager.googleapis.com/projects/foo.

`string resource = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The resource.

### getResourceBytes()

```
public ByteString getResourceBytes()
```

Contains the fully qualified resource name. This field is always populated. ex: //cloudresourcemanager.googleapis.com/projects/foo.

`string resource = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for resource.

### getResourceType()

```
public String getResourceType()
```

Type of GCP resource being modified/tested. This field is always populated. Example: cloudresourcemanager.googleapis.com/Project, compute.googleapis.com/Instance

`string resource_type = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The resourceType.

### getResourceTypeBytes()

```
public ByteString getResourceTypeBytes()
```

Type of GCP resource being modified/tested. This field is always populated. Example: cloudresourcemanager.googleapis.com/Project, compute.googleapis.com/Instance

`string resource_type = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for resourceType.

### getSourcePath()

```
public String getSourcePath()
```

Can be set with action 'copy' or 'move' to indicate the source field within resource or source\_resource, ignored if provided for other operation types.

`string source_path = 6;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The sourcePath.

### getSourcePathBytes()

```
public ByteString getSourcePathBytes()
```

Can be set with action 'copy' or 'move' to indicate the source field within resource or source\_resource, ignored if provided for other operation types.

`string source_path = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for sourcePath.

### getSourceResource()

```
public String getSourceResource()
```

Can be set with action 'copy' to copy resource configuration across different resources of the same type. Example: A resource clone can be done via action = 'copy', path = "/", from = "/", source\_resource = <source> and resource\_name = <target>. This field is empty for all other values of `action`.

`string source_resource = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The sourceResource.

### getSourceResourceBytes()

```
public ByteString getSourceResourceBytes()
```

Can be set with action 'copy' to copy resource configuration across different resources of the same type. Example: A resource clone can be done via action = 'copy', path = "/", from = "/", source\_resource = <source> and resource\_name = <target>. This field is empty for all other values of `action`.

`string source_resource = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for sourceResource.

### getValue()

```
public Value getValue()
```

Value for the `path` field. Will be set for actions:'add'/'replace'. Maybe set for action: 'test'. Either this or `value_matcher` will be set for 'test' operation. An exact match must be performed.

`.google.protobuf.Value value = 7;`

**Returns**

**Type**

**Description**

`[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)`

The value.

### getValueBuilder()

```
public Value.Builder getValueBuilder()
```

Value for the `path` field. Will be set for actions:'add'/'replace'. Maybe set for action: 'test'. Either this or `value_matcher` will be set for 'test' operation. An exact match must be performed.

`.google.protobuf.Value value = 7;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.Builder.html)`

### getValueMatcher()

```
public ValueMatcher getValueMatcher()
```

Can be set for action 'test' for advanced matching for the value of 'path' field. Either this or `value` will be set for 'test' operation.

`.google.cloud.recommender.v1beta1.ValueMatcher value_matcher = 10;`

**Returns**

**Type**

**Description**

`[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.ValueMatcher)`

The valueMatcher.

### getValueMatcherBuilder()

```
public ValueMatcher.Builder getValueMatcherBuilder()
```

Can be set for action 'test' for advanced matching for the value of 'path' field. Either this or `value` will be set for 'test' operation.

`.google.cloud.recommender.v1beta1.ValueMatcher value_matcher = 10;`

**Returns**

**Type**

**Description**

`[ValueMatcher.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.ValueMatcher.Builder)`

### getValueMatcherOrBuilder()

```
public ValueMatcherOrBuilder getValueMatcherOrBuilder()
```

Can be set for action 'test' for advanced matching for the value of 'path' field. Either this or `value` will be set for 'test' operation.

`.google.cloud.recommender.v1beta1.ValueMatcher value_matcher = 10;`

**Returns**

**Type**

**Description**

`[ValueMatcherOrBuilder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.ValueMatcherOrBuilder)`

### getValueOrBuilder()

```
public ValueOrBuilder getValueOrBuilder()
```

Value for the `path` field. Will be set for actions:'add'/'replace'. Maybe set for action: 'test'. Either this or `value_matcher` will be set for 'test' operation. An exact match must be performed.

`.google.protobuf.Value value = 7;`

**Returns**

**Type**

**Description**

`[ValueOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ValueOrBuilder.html)`

### hasValue()

```
public boolean hasValue()
```

Value for the `path` field. Will be set for actions:'add'/'replace'. Maybe set for action: 'test'. Either this or `value_matcher` will be set for 'test' operation. An exact match must be performed.

`.google.protobuf.Value value = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the value field is set.

### hasValueMatcher()

```
public boolean hasValueMatcher()
```

Can be set for action 'test' for advanced matching for the value of 'path' field. Either this or `value` will be set for 'test' operation.

`.google.cloud.recommender.v1beta1.ValueMatcher value_matcher = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the valueMatcher field is set.

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

### internalGetMapFieldReflection(int number)

```
protected MapFieldReflectionAccessor internalGetMapFieldReflection(int number)
```

**Parameter**

**Name**

**Description**

`number`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`com.google.protobuf.MapFieldReflectionAccessor`

**Overrides**

com.google.protobuf.GeneratedMessageV3.Builder.internalGetMapFieldReflection(int)

### internalGetMutableMapFieldReflection(int number)

```
protected MapFieldReflectionAccessor internalGetMutableMapFieldReflection(int number)
```

**Parameter**

**Name**

**Description**

`number`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`com.google.protobuf.MapFieldReflectionAccessor`

**Overrides**

com.google.protobuf.GeneratedMessageV3.Builder.internalGetMutableMapFieldReflection(int)

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

### mergeFrom(Operation other)

```
public Operation.Builder mergeFrom(Operation other)
```

**Parameter**

**Name**

**Description**

`other`

`[Operation](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public Operation.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public Operation.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final Operation.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### mergeValue(Value value)

```
public Operation.Builder mergeValue(Value value)
```

Value for the `path` field. Will be set for actions:'add'/'replace'. Maybe set for action: 'test'. Either this or `value_matcher` will be set for 'test' operation. An exact match must be performed.

`.google.protobuf.Value value = 7;`

**Parameter**

**Name**

**Description**

`value`

`[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### mergeValueMatcher(ValueMatcher value)

```
public Operation.Builder mergeValueMatcher(ValueMatcher value)
```

Can be set for action 'test' for advanced matching for the value of 'path' field. Either this or `value` will be set for 'test' operation.

`.google.cloud.recommender.v1beta1.ValueMatcher value_matcher = 10;`

**Parameter**

**Name**

**Description**

`value`

`[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.ValueMatcher)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### putAllPathFilters(Map<String,Value> values)

```
public Operation.Builder putAllPathFilters(Map<String,Value> values)
```

Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path\_value\_matchers.

-   Example: \` `` `{ "/versions/*/name" : "it-123" "/versions/*/targetSize/percent": 20 }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/condition" : null }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/members/*" : ["x@example.com", "y@example.com"] }` `` \` When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.protobuf.Value> path_filters = 8;`

**Parameter**

**Name**

**Description**

`values`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)>`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### putAllPathValueMatchers(Map<String,ValueMatcher> values)

```
public Operation.Builder putAllPathValueMatchers(Map<String,ValueMatcher> values)
```

Similar to path\_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path\_filters. When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.cloud.recommender.v1beta1.ValueMatcher> path_value_matchers = 11;`

**Parameter**

**Name**

**Description**

`values`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.ValueMatcher)>`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### putPathFilters(String key, Value value)

```
public Operation.Builder putPathFilters(String key, Value value)
```

Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path\_value\_matchers.

-   Example: \` `` `{ "/versions/*/name" : "it-123" "/versions/*/targetSize/percent": 20 }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/condition" : null }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/members/*" : ["x@example.com", "y@example.com"] }` `` \` When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.protobuf.Value> path_filters = 8;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`value`

`[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### putPathFiltersBuilderIfAbsent(String key)

```
public Value.Builder putPathFiltersBuilderIfAbsent(String key)
```

Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path\_value\_matchers.

-   Example: \` `` `{ "/versions/*/name" : "it-123" "/versions/*/targetSize/percent": 20 }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/condition" : null }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/members/*" : ["x@example.com", "y@example.com"] }` `` \` When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.protobuf.Value> path_filters = 8;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.Builder.html)`

### putPathValueMatchers(String key, ValueMatcher value)

```
public Operation.Builder putPathValueMatchers(String key, ValueMatcher value)
```

Similar to path\_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path\_filters. When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.cloud.recommender.v1beta1.ValueMatcher> path_value_matchers = 11;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`value`

`[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.ValueMatcher)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### putPathValueMatchersBuilderIfAbsent(String key)

```
public ValueMatcher.Builder putPathValueMatchersBuilderIfAbsent(String key)
```

Similar to path\_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path\_filters. When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.cloud.recommender.v1beta1.ValueMatcher> path_value_matchers = 11;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[ValueMatcher.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.ValueMatcher.Builder)`

### removePathFilters(String key)

```
public Operation.Builder removePathFilters(String key)
```

Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path\_value\_matchers.

-   Example: \` `` `{ "/versions/*/name" : "it-123" "/versions/*/targetSize/percent": 20 }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/condition" : null }` ``
-   Example: `` `{ "/bindings/*/role": "roles/owner" "/bindings/*/members/*" : ["x@example.com", "y@example.com"] }` `` \` When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.protobuf.Value> path_filters = 8;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### removePathValueMatchers(String key)

```
public Operation.Builder removePathValueMatchers(String key)
```

Similar to path\_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path\_filters. When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.cloud.recommender.v1beta1.ValueMatcher> path_value_matchers = 11;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### setAction(String value)

```
public Operation.Builder setAction(String value)
```

Type of this operation. Contains one of 'add', 'remove', 'replace', 'move', 'copy', 'test' and 'custom' operations. This field is case-insensitive and always populated.

`string action = 1;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The action to set.

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### setActionBytes(ByteString value)

```
public Operation.Builder setActionBytes(ByteString value)
```

Type of this operation. Contains one of 'add', 'remove', 'replace', 'move', 'copy', 'test' and 'custom' operations. This field is case-insensitive and always populated.

`string action = 1;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for action to set.

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public Operation.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setPath(String value)

```
public Operation.Builder setPath(String value)
```

Path to the target field being operated on. If the operation is at the resource level, then path should be "/". This field is always populated.

`string path = 4;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The path to set.

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### setPathBytes(ByteString value)

```
public Operation.Builder setPathBytes(ByteString value)
```

Path to the target field being operated on. If the operation is at the resource level, then path should be "/". This field is always populated.

`string path = 4;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for path to set.

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public Operation.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setResource(String value)

```
public Operation.Builder setResource(String value)
```

Contains the fully qualified resource name. This field is always populated. ex: //cloudresourcemanager.googleapis.com/projects/foo.

`string resource = 3;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The resource to set.

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### setResourceBytes(ByteString value)

```
public Operation.Builder setResourceBytes(ByteString value)
```

Contains the fully qualified resource name. This field is always populated. ex: //cloudresourcemanager.googleapis.com/projects/foo.

`string resource = 3;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for resource to set.

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### setResourceType(String value)

```
public Operation.Builder setResourceType(String value)
```

Type of GCP resource being modified/tested. This field is always populated. Example: cloudresourcemanager.googleapis.com/Project, compute.googleapis.com/Instance

`string resource_type = 2;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The resourceType to set.

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### setResourceTypeBytes(ByteString value)

```
public Operation.Builder setResourceTypeBytes(ByteString value)
```

Type of GCP resource being modified/tested. This field is always populated. Example: cloudresourcemanager.googleapis.com/Project, compute.googleapis.com/Instance

`string resource_type = 2;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for resourceType to set.

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### setSourcePath(String value)

```
public Operation.Builder setSourcePath(String value)
```

Can be set with action 'copy' or 'move' to indicate the source field within resource or source\_resource, ignored if provided for other operation types.

`string source_path = 6;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The sourcePath to set.

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### setSourcePathBytes(ByteString value)

```
public Operation.Builder setSourcePathBytes(ByteString value)
```

Can be set with action 'copy' or 'move' to indicate the source field within resource or source\_resource, ignored if provided for other operation types.

`string source_path = 6;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for sourcePath to set.

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### setSourceResource(String value)

```
public Operation.Builder setSourceResource(String value)
```

Can be set with action 'copy' to copy resource configuration across different resources of the same type. Example: A resource clone can be done via action = 'copy', path = "/", from = "/", source\_resource = <source> and resource\_name = <target>. This field is empty for all other values of `action`.

`string source_resource = 5;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The sourceResource to set.

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### setSourceResourceBytes(ByteString value)

```
public Operation.Builder setSourceResourceBytes(ByteString value)
```

Can be set with action 'copy' to copy resource configuration across different resources of the same type. Example: A resource clone can be done via action = 'copy', path = "/", from = "/", source\_resource = <source> and resource\_name = <target>. This field is empty for all other values of `action`.

`string source_resource = 5;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for sourceResource to set.

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

This builder for chaining.

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final Operation.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setValue(Value value)

```
public Operation.Builder setValue(Value value)
```

Value for the `path` field. Will be set for actions:'add'/'replace'. Maybe set for action: 'test'. Either this or `value_matcher` will be set for 'test' operation. An exact match must be performed.

`.google.protobuf.Value value = 7;`

**Parameter**

**Name**

**Description**

`value`

`[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### setValue(Value.Builder builderForValue)

```
public Operation.Builder setValue(Value.Builder builderForValue)
```

Value for the `path` field. Will be set for actions:'add'/'replace'. Maybe set for action: 'test'. Either this or `value_matcher` will be set for 'test' operation. An exact match must be performed.

`.google.protobuf.Value value = 7;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.Builder.html)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### setValueMatcher(ValueMatcher value)

```
public Operation.Builder setValueMatcher(ValueMatcher value)
```

Can be set for action 'test' for advanced matching for the value of 'path' field. Either this or `value` will be set for 'test' operation.

`.google.cloud.recommender.v1beta1.ValueMatcher value_matcher = 10;`

**Parameter**

**Name**

**Description**

`value`

`[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.ValueMatcher)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

### setValueMatcher(ValueMatcher.Builder builderForValue)

```
public Operation.Builder setValueMatcher(ValueMatcher.Builder builderForValue)
```

Can be set for action 'test' for advanced matching for the value of 'path' field. Either this or `value` will be set for 'test' operation.

`.google.cloud.recommender.v1beta1.ValueMatcher value_matcher = 10;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[ValueMatcher.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.ValueMatcher.Builder)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.47.0/com.google.cloud.recommender.v1beta1.Operation.Builder)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
