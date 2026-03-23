-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Value.Builder (6.82.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public static final class Value.Builder extends GeneratedMessageV3.Builder<Value.Builder> implements ValueOrBuilder
```

Value represents a single value that can be read or written to/from Spanner.

Protobuf type `google.spanner.executor.v1.Value`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> Value.Builder

## Implements

[ValueOrBuilder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.ValueOrBuilder)

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
public Value.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public Value build()
```

**Returns**

**Type**

**Description**

`[Value](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value)`

### buildPartial()

```
public Value buildPartial()
```

**Returns**

**Type**

**Description**

`[Value](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value)`

### clear()

```
public Value.Builder clear()
```

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearArrayType()

```
public Value.Builder clearArrayType()
```

Type of array element. Only set if value is an array.

`optional .google.spanner.v1.Type array_type = 12;`

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### clearArrayValue()

```
public Value.Builder clearArrayValue()
```

Array type value. The underlying Valuelist should have values that have the same type.

`.google.spanner.executor.v1.ValueList array_value = 11;`

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### clearBoolValue()

```
public Value.Builder clearBoolValue()
```

Bool type value.

`bool bool_value = 3;`

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### clearBytesValue()

```
public Value.Builder clearBytesValue()
```

Bytes type value, stored in CORD. It's also used for PROTO type value.

`bytes bytes_value = 5;`

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### clearDateDaysValue()

```
public Value.Builder clearDateDaysValue()
```

Date type value. Date is specified as a number of days since Unix epoch.

`int32 date_days_value = 9;`

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### clearDoubleValue()

```
public Value.Builder clearDoubleValue()
```

Double type value. It's used for all float point types, like float and double.

`double double_value = 4;`

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public Value.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearIntValue()

```
public Value.Builder clearIntValue()
```

Int type value. It's used for all integer number types, like int32 and int64.

`int64 int_value = 2;`

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### clearIsCommitTimestamp()

```
public Value.Builder clearIsCommitTimestamp()
```

If set, holds the sentinel value for the transaction CommitTimestamp.

`bool is_commit_timestamp = 10;`

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### clearIsNull()

```
public Value.Builder clearIsNull()
```

If is\_null is set, then this value is null.

`bool is_null = 1;`

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public Value.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearStringValue()

```
public Value.Builder clearStringValue()
```

String type value, stored in CORD.

`string string_value = 6;`

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### clearStructValue()

```
public Value.Builder clearStructValue()
```

Struct type value. It contains a ValueList representing the values in this struct.

`.google.spanner.executor.v1.ValueList struct_value = 7;`

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### clearTimestampValue()

```
public Value.Builder clearTimestampValue()
```

Timestamp type value.

`.google.protobuf.Timestamp timestamp_value = 8;`

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### clearValueType()

```
public Value.Builder clearValueType()
```

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### clone()

```
public Value.Builder clone()
```

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getArrayType()

```
public Type getArrayType()
```

Type of array element. Only set if value is an array.

`optional .google.spanner.v1.Type array_type = 12;`

**Returns**

**Type**

**Description**

`[Type](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.v1.Type)`

The arrayType.

### getArrayTypeBuilder()

```
public Type.Builder getArrayTypeBuilder()
```

Type of array element. Only set if value is an array.

`optional .google.spanner.v1.Type array_type = 12;`

**Returns**

**Type**

**Description**

`[Type.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.v1.Type.Builder)`

### getArrayTypeOrBuilder()

```
public TypeOrBuilder getArrayTypeOrBuilder()
```

Type of array element. Only set if value is an array.

`optional .google.spanner.v1.Type array_type = 12;`

**Returns**

**Type**

**Description**

`[TypeOrBuilder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.v1.TypeOrBuilder)`

### getArrayValue()

```
public ValueList getArrayValue()
```

Array type value. The underlying Valuelist should have values that have the same type.

`.google.spanner.executor.v1.ValueList array_value = 11;`

**Returns**

**Type**

**Description**

`[ValueList](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.ValueList)`

The arrayValue.

### getArrayValueBuilder()

```
public ValueList.Builder getArrayValueBuilder()
```

Array type value. The underlying Valuelist should have values that have the same type.

`.google.spanner.executor.v1.ValueList array_value = 11;`

**Returns**

**Type**

**Description**

`[ValueList.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.ValueList.Builder)`

### getArrayValueOrBuilder()

```
public ValueListOrBuilder getArrayValueOrBuilder()
```

Array type value. The underlying Valuelist should have values that have the same type.

`.google.spanner.executor.v1.ValueList array_value = 11;`

**Returns**

**Type**

**Description**

`[ValueListOrBuilder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.ValueListOrBuilder)`

### getBoolValue()

```
public boolean getBoolValue()
```

Bool type value.

`bool bool_value = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The boolValue.

### getBytesValue()

```
public ByteString getBytesValue()
```

Bytes type value, stored in CORD. It's also used for PROTO type value.

`bytes bytes_value = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytesValue.

### getDateDaysValue()

```
public int getDateDaysValue()
```

Date type value. Date is specified as a number of days since Unix epoch.

`int32 date_days_value = 9;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The dateDaysValue.

### getDefaultInstanceForType()

```
public Value getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[Value](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value)`

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

### getDoubleValue()

```
public double getDoubleValue()
```

Double type value. It's used for all float point types, like float and double.

`double double_value = 4;`

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The doubleValue.

### getIntValue()

```
public long getIntValue()
```

Int type value. It's used for all integer number types, like int32 and int64.

`int64 int_value = 2;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The intValue.

### getIsCommitTimestamp()

```
public boolean getIsCommitTimestamp()
```

If set, holds the sentinel value for the transaction CommitTimestamp.

`bool is_commit_timestamp = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The isCommitTimestamp.

### getIsNull()

```
public boolean getIsNull()
```

If is\_null is set, then this value is null.

`bool is_null = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The isNull.

### getStringValue()

```
public String getStringValue()
```

String type value, stored in CORD.

`string string_value = 6;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The stringValue.

### getStringValueBytes()

```
public ByteString getStringValueBytes()
```

String type value, stored in CORD.

`string string_value = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for stringValue.

### getStructValue()

```
public ValueList getStructValue()
```

Struct type value. It contains a ValueList representing the values in this struct.

`.google.spanner.executor.v1.ValueList struct_value = 7;`

**Returns**

**Type**

**Description**

`[ValueList](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.ValueList)`

The structValue.

### getStructValueBuilder()

```
public ValueList.Builder getStructValueBuilder()
```

Struct type value. It contains a ValueList representing the values in this struct.

`.google.spanner.executor.v1.ValueList struct_value = 7;`

**Returns**

**Type**

**Description**

`[ValueList.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.ValueList.Builder)`

### getStructValueOrBuilder()

```
public ValueListOrBuilder getStructValueOrBuilder()
```

Struct type value. It contains a ValueList representing the values in this struct.

`.google.spanner.executor.v1.ValueList struct_value = 7;`

**Returns**

**Type**

**Description**

`[ValueListOrBuilder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.ValueListOrBuilder)`

### getTimestampValue()

```
public Timestamp getTimestampValue()
```

Timestamp type value.

`.google.protobuf.Timestamp timestamp_value = 8;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The timestampValue.

### getTimestampValueBuilder()

```
public Timestamp.Builder getTimestampValueBuilder()
```

Timestamp type value.

`.google.protobuf.Timestamp timestamp_value = 8;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getTimestampValueOrBuilder()

```
public TimestampOrBuilder getTimestampValueOrBuilder()
```

Timestamp type value.

`.google.protobuf.Timestamp timestamp_value = 8;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getValueTypeCase()

```
public Value.ValueTypeCase getValueTypeCase()
```

**Returns**

**Type**

**Description**

`[Value.ValueTypeCase](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.ValueTypeCase)`

### hasArrayType()

```
public boolean hasArrayType()
```

Type of array element. Only set if value is an array.

`optional .google.spanner.v1.Type array_type = 12;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the arrayType field is set.

### hasArrayValue()

```
public boolean hasArrayValue()
```

Array type value. The underlying Valuelist should have values that have the same type.

`.google.spanner.executor.v1.ValueList array_value = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the arrayValue field is set.

### hasBoolValue()

```
public boolean hasBoolValue()
```

Bool type value.

`bool bool_value = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the boolValue field is set.

### hasBytesValue()

```
public boolean hasBytesValue()
```

Bytes type value, stored in CORD. It's also used for PROTO type value.

`bytes bytes_value = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the bytesValue field is set.

### hasDateDaysValue()

```
public boolean hasDateDaysValue()
```

Date type value. Date is specified as a number of days since Unix epoch.

`int32 date_days_value = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the dateDaysValue field is set.

### hasDoubleValue()

```
public boolean hasDoubleValue()
```

Double type value. It's used for all float point types, like float and double.

`double double_value = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the doubleValue field is set.

### hasIntValue()

```
public boolean hasIntValue()
```

Int type value. It's used for all integer number types, like int32 and int64.

`int64 int_value = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the intValue field is set.

### hasIsCommitTimestamp()

```
public boolean hasIsCommitTimestamp()
```

If set, holds the sentinel value for the transaction CommitTimestamp.

`bool is_commit_timestamp = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the isCommitTimestamp field is set.

### hasIsNull()

```
public boolean hasIsNull()
```

If is\_null is set, then this value is null.

`bool is_null = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the isNull field is set.

### hasStringValue()

```
public boolean hasStringValue()
```

String type value, stored in CORD.

`string string_value = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the stringValue field is set.

### hasStructValue()

```
public boolean hasStructValue()
```

Struct type value. It contains a ValueList representing the values in this struct.

`.google.spanner.executor.v1.ValueList struct_value = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the structValue field is set.

### hasTimestampValue()

```
public boolean hasTimestampValue()
```

Timestamp type value.

`.google.protobuf.Timestamp timestamp_value = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timestampValue field is set.

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

### mergeArrayType(Type value)

```
public Value.Builder mergeArrayType(Type value)
```

Type of array element. Only set if value is an array.

`optional .google.spanner.v1.Type array_type = 12;`

**Parameter**

**Name**

**Description**

`value`

`[Type](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.v1.Type)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### mergeArrayValue(ValueList value)

```
public Value.Builder mergeArrayValue(ValueList value)
```

Array type value. The underlying Valuelist should have values that have the same type.

`.google.spanner.executor.v1.ValueList array_value = 11;`

**Parameter**

**Name**

**Description**

`value`

`[ValueList](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.ValueList)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public Value.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public Value.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeFrom(Value other)

```
public Value.Builder mergeFrom(Value other)
```

**Parameter**

**Name**

**Description**

`other`

`[Value](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### mergeStructValue(ValueList value)

```
public Value.Builder mergeStructValue(ValueList value)
```

Struct type value. It contains a ValueList representing the values in this struct.

`.google.spanner.executor.v1.ValueList struct_value = 7;`

**Parameter**

**Name**

**Description**

`value`

`[ValueList](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.ValueList)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### mergeTimestampValue(Timestamp value)

```
public Value.Builder mergeTimestampValue(Timestamp value)
```

Timestamp type value.

`.google.protobuf.Timestamp timestamp_value = 8;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final Value.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setArrayType(Type value)

```
public Value.Builder setArrayType(Type value)
```

Type of array element. Only set if value is an array.

`optional .google.spanner.v1.Type array_type = 12;`

**Parameter**

**Name**

**Description**

`value`

`[Type](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.v1.Type)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### setArrayType(Type.Builder builderForValue)

```
public Value.Builder setArrayType(Type.Builder builderForValue)
```

Type of array element. Only set if value is an array.

`optional .google.spanner.v1.Type array_type = 12;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Type.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.v1.Type.Builder)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### setArrayValue(ValueList value)

```
public Value.Builder setArrayValue(ValueList value)
```

Array type value. The underlying Valuelist should have values that have the same type.

`.google.spanner.executor.v1.ValueList array_value = 11;`

**Parameter**

**Name**

**Description**

`value`

`[ValueList](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.ValueList)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### setArrayValue(ValueList.Builder builderForValue)

```
public Value.Builder setArrayValue(ValueList.Builder builderForValue)
```

Array type value. The underlying Valuelist should have values that have the same type.

`.google.spanner.executor.v1.ValueList array_value = 11;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[ValueList.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.ValueList.Builder)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### setBoolValue(boolean value)

```
public Value.Builder setBoolValue(boolean value)
```

Bool type value.

`bool bool_value = 3;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The boolValue to set.

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### setBytesValue(ByteString value)

```
public Value.Builder setBytesValue(ByteString value)
```

Bytes type value, stored in CORD. It's also used for PROTO type value.

`bytes bytes_value = 5;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytesValue to set.

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### setDateDaysValue(int value)

```
public Value.Builder setDateDaysValue(int value)
```

Date type value. Date is specified as a number of days since Unix epoch.

`int32 date_days_value = 9;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The dateDaysValue to set.

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### setDoubleValue(double value)

```
public Value.Builder setDoubleValue(double value)
```

Double type value. It's used for all float point types, like float and double.

`double double_value = 4;`

**Parameter**

**Name**

**Description**

`value`

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The doubleValue to set.

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public Value.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setIntValue(long value)

```
public Value.Builder setIntValue(long value)
```

Int type value. It's used for all integer number types, like int32 and int64.

`int64 int_value = 2;`

**Parameter**

**Name**

**Description**

`value`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The intValue to set.

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### setIsCommitTimestamp(boolean value)

```
public Value.Builder setIsCommitTimestamp(boolean value)
```

If set, holds the sentinel value for the transaction CommitTimestamp.

`bool is_commit_timestamp = 10;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The isCommitTimestamp to set.

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### setIsNull(boolean value)

```
public Value.Builder setIsNull(boolean value)
```

If is\_null is set, then this value is null.

`bool is_null = 1;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The isNull to set.

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public Value.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setStringValue(String value)

```
public Value.Builder setStringValue(String value)
```

String type value, stored in CORD.

`string string_value = 6;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The stringValue to set.

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### setStringValueBytes(ByteString value)

```
public Value.Builder setStringValueBytes(ByteString value)
```

String type value, stored in CORD.

`string string_value = 6;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for stringValue to set.

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

This builder for chaining.

### setStructValue(ValueList value)

```
public Value.Builder setStructValue(ValueList value)
```

Struct type value. It contains a ValueList representing the values in this struct.

`.google.spanner.executor.v1.ValueList struct_value = 7;`

**Parameter**

**Name**

**Description**

`value`

`[ValueList](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.ValueList)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### setStructValue(ValueList.Builder builderForValue)

```
public Value.Builder setStructValue(ValueList.Builder builderForValue)
```

Struct type value. It contains a ValueList representing the values in this struct.

`.google.spanner.executor.v1.ValueList struct_value = 7;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[ValueList.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.ValueList.Builder)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### setTimestampValue(Timestamp value)

```
public Value.Builder setTimestampValue(Timestamp value)
```

Timestamp type value.

`.google.protobuf.Timestamp timestamp_value = 8;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### setTimestampValue(Timestamp.Builder builderForValue)

```
public Value.Builder setTimestampValue(Timestamp.Builder builderForValue)
```

Timestamp type value.

`.google.protobuf.Timestamp timestamp_value = 8;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final Value.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Value.Builder](/java/docs/reference/google-cloud-spanner/6.82.0/com.google.spanner.executor.v1.Value.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
