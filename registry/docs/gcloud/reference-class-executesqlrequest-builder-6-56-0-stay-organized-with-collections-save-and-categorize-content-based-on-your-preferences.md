-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ExecuteSqlRequest.Builder (6.56.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public static final class ExecuteSqlRequest.Builder extends GeneratedMessageV3.Builder<ExecuteSqlRequest.Builder> implements ExecuteSqlRequestOrBuilder
```

The request for ExecuteSql and ExecuteStreamingSql.

Protobuf type `google.spanner.v1.ExecuteSqlRequest`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> ExecuteSqlRequest.Builder

## Implements

[ExecuteSqlRequestOrBuilder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequestOrBuilder)

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
public ExecuteSqlRequest.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public ExecuteSqlRequest build()
```

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest)`

### buildPartial()

```
public ExecuteSqlRequest buildPartial()
```

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest)`

### clear()

```
public ExecuteSqlRequest.Builder clear()
```

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearDataBoostEnabled()

```
public ExecuteSqlRequest.Builder clearDataBoostEnabled()
```

If this is for a partitioned query and this field is set to `true`, the request is executed with Spanner Data Boost independent compute resources.

If the field is set to `true` but the request does not set `partition_token`, the API returns an `INVALID_ARGUMENT` error.

`bool data_boost_enabled = 16;`

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### clearDirectedReadOptions()

```
public ExecuteSqlRequest.Builder clearDirectedReadOptions()
```

Directed read options for this request.

`.google.spanner.v1.DirectedReadOptions directed_read_options = 15;`

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### clearField(Descriptors.FieldDescriptor field)

```
public ExecuteSqlRequest.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public ExecuteSqlRequest.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearParamTypes()

```
public ExecuteSqlRequest.Builder clearParamTypes()
```

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### clearParams()

```
public ExecuteSqlRequest.Builder clearParams()
```

Parameter names and values that bind to placeholders in the SQL string.

A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names must conform to the naming requirements of identifiers as specified at [https://cloud.google.com/spanner/docs/lexical#identifiers](https://cloud.google.com/spanner/docs/lexical#identifiers).

Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example:

`"WHERE id > @msg_id AND id < @msg_id + 100"`

It is an error to execute a SQL statement with unbound parameters.

`.google.protobuf.Struct params = 4;`

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### clearPartitionToken()

```
public ExecuteSqlRequest.Builder clearPartitionToken()
```

If present, results will be restricted to the specified partition previously created using PartitionQuery(). There must be an exact match for the values of fields common to this message and the PartitionQueryRequest message used to create this partition\_token.

`bytes partition_token = 8;`

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### clearQueryMode()

```
public ExecuteSqlRequest.Builder clearQueryMode()
```

Used to control the amount of debugging information returned in ResultSetStats. If partition\_token is set, query\_mode can only be set to QueryMode.NORMAL.

`.google.spanner.v1.ExecuteSqlRequest.QueryMode query_mode = 7;`

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### clearQueryOptions()

```
public ExecuteSqlRequest.Builder clearQueryOptions()
```

Query optimizer configuration to use for the given query.

`.google.spanner.v1.ExecuteSqlRequest.QueryOptions query_options = 10;`

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### clearRequestOptions()

```
public ExecuteSqlRequest.Builder clearRequestOptions()
```

Common options for this request.

`.google.spanner.v1.RequestOptions request_options = 11;`

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### clearResumeToken()

```
public ExecuteSqlRequest.Builder clearResumeToken()
```

If this request is resuming a previously interrupted SQL statement execution, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new SQL statement execution to resume where the last one left off. The rest of the request parameters must exactly match the request that yielded this token.

`bytes resume_token = 6;`

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### clearSeqno()

```
public ExecuteSqlRequest.Builder clearSeqno()
```

A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed.

The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution.

Required for DML statements. Ignored for queries.

`int64 seqno = 9;`

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### clearSession()

```
public ExecuteSqlRequest.Builder clearSession()
```

Required. The session in which the SQL query should be performed.

`string session = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### clearSql()

```
public ExecuteSqlRequest.Builder clearSql()
```

Required. The SQL string.

`string sql = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### clearTransaction()

```
public ExecuteSqlRequest.Builder clearTransaction()
```

The transaction to use.

For queries, if none is provided, the default is a temporary read-only transaction with strong concurrency.

Standard DML statements require a read-write transaction. To protect against replays, single-use transactions are not supported. The caller must either supply an existing transaction ID or begin a new transaction.

Partitioned DML requires an existing Partitioned DML transaction ID.

`.google.spanner.v1.TransactionSelector transaction = 2;`

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### clone()

```
public ExecuteSqlRequest.Builder clone()
```

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### containsParamTypes(String key)

```
public boolean containsParamTypes(String key)
```

It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings.

In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.

`map<string, .google.spanner.v1.Type> param_types = 5;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getDataBoostEnabled()

```
public boolean getDataBoostEnabled()
```

If this is for a partitioned query and this field is set to `true`, the request is executed with Spanner Data Boost independent compute resources.

If the field is set to `true` but the request does not set `partition_token`, the API returns an `INVALID_ARGUMENT` error.

`bool data_boost_enabled = 16;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The dataBoostEnabled.

### getDefaultInstanceForType()

```
public ExecuteSqlRequest getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest)`

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

### getDirectedReadOptions()

```
public DirectedReadOptions getDirectedReadOptions()
```

Directed read options for this request.

`.google.spanner.v1.DirectedReadOptions directed_read_options = 15;`

**Returns**

**Type**

**Description**

`[DirectedReadOptions](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.DirectedReadOptions)`

The directedReadOptions.

### getDirectedReadOptionsBuilder()

```
public DirectedReadOptions.Builder getDirectedReadOptionsBuilder()
```

Directed read options for this request.

`.google.spanner.v1.DirectedReadOptions directed_read_options = 15;`

**Returns**

**Type**

**Description**

`[DirectedReadOptions.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.DirectedReadOptions.Builder)`

### getDirectedReadOptionsOrBuilder()

```
public DirectedReadOptionsOrBuilder getDirectedReadOptionsOrBuilder()
```

Directed read options for this request.

`.google.spanner.v1.DirectedReadOptions directed_read_options = 15;`

**Returns**

**Type**

**Description**

`[DirectedReadOptionsOrBuilder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.DirectedReadOptionsOrBuilder)`

### getMutableParamTypes()

```
public Map<String,Type> getMutableParamTypes()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Type](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.Type)>`

### getParamTypes()

```
public Map<String,Type> getParamTypes()
```

Use [#getParamTypesMap()](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder#com_google_spanner_v1_ExecuteSqlRequest_Builder_getParamTypesMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Type](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.Type)>`

### getParamTypesCount()

```
public int getParamTypesCount()
```

It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings.

In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.

`map<string, .google.spanner.v1.Type> param_types = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getParamTypesMap()

```
public Map<String,Type> getParamTypesMap()
```

It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings.

In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.

`map<string, .google.spanner.v1.Type> param_types = 5;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Type](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.Type)>`

### getParamTypesOrDefault(String key, Type defaultValue)

```
public Type getParamTypesOrDefault(String key, Type defaultValue)
```

It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings.

In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.

`map<string, .google.spanner.v1.Type> param_types = 5;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[Type](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.Type)`  

**Returns**

**Type**

**Description**

`[Type](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.Type)`

### getParamTypesOrThrow(String key)

```
public Type getParamTypesOrThrow(String key)
```

It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings.

In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.

`map<string, .google.spanner.v1.Type> param_types = 5;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Type](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.Type)`

### getParams()

```
public Struct getParams()
```

Parameter names and values that bind to placeholders in the SQL string.

A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names must conform to the naming requirements of identifiers as specified at [https://cloud.google.com/spanner/docs/lexical#identifiers](https://cloud.google.com/spanner/docs/lexical#identifiers).

Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example:

`"WHERE id > @msg_id AND id < @msg_id + 100"`

It is an error to execute a SQL statement with unbound parameters.

`.google.protobuf.Struct params = 4;`

**Returns**

**Type**

**Description**

`[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)`

The params.

### getParamsBuilder()

```
public Struct.Builder getParamsBuilder()
```

Parameter names and values that bind to placeholders in the SQL string.

A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names must conform to the naming requirements of identifiers as specified at [https://cloud.google.com/spanner/docs/lexical#identifiers](https://cloud.google.com/spanner/docs/lexical#identifiers).

Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example:

`"WHERE id > @msg_id AND id < @msg_id + 100"`

It is an error to execute a SQL statement with unbound parameters.

`.google.protobuf.Struct params = 4;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.Builder.html)`

### getParamsOrBuilder()

```
public StructOrBuilder getParamsOrBuilder()
```

Parameter names and values that bind to placeholders in the SQL string.

A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names must conform to the naming requirements of identifiers as specified at [https://cloud.google.com/spanner/docs/lexical#identifiers](https://cloud.google.com/spanner/docs/lexical#identifiers).

Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example:

`"WHERE id > @msg_id AND id < @msg_id + 100"`

It is an error to execute a SQL statement with unbound parameters.

`.google.protobuf.Struct params = 4;`

**Returns**

**Type**

**Description**

`[StructOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.StructOrBuilder.html)`

### getPartitionToken()

```
public ByteString getPartitionToken()
```

If present, results will be restricted to the specified partition previously created using PartitionQuery(). There must be an exact match for the values of fields common to this message and the PartitionQueryRequest message used to create this partition\_token.

`bytes partition_token = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The partitionToken.

### getQueryMode()

```
public ExecuteSqlRequest.QueryMode getQueryMode()
```

Used to control the amount of debugging information returned in ResultSetStats. If partition\_token is set, query\_mode can only be set to QueryMode.NORMAL.

`.google.spanner.v1.ExecuteSqlRequest.QueryMode query_mode = 7;`

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.QueryMode](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.QueryMode)`

The queryMode.

### getQueryModeValue()

```
public int getQueryModeValue()
```

Used to control the amount of debugging information returned in ResultSetStats. If partition\_token is set, query\_mode can only be set to QueryMode.NORMAL.

`.google.spanner.v1.ExecuteSqlRequest.QueryMode query_mode = 7;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for queryMode.

### getQueryOptions()

```
public ExecuteSqlRequest.QueryOptions getQueryOptions()
```

Query optimizer configuration to use for the given query.

`.google.spanner.v1.ExecuteSqlRequest.QueryOptions query_options = 10;`

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.QueryOptions](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.QueryOptions)`

The queryOptions.

### getQueryOptionsBuilder()

```
public ExecuteSqlRequest.QueryOptions.Builder getQueryOptionsBuilder()
```

Query optimizer configuration to use for the given query.

`.google.spanner.v1.ExecuteSqlRequest.QueryOptions query_options = 10;`

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.QueryOptions.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.QueryOptions.Builder)`

### getQueryOptionsOrBuilder()

```
public ExecuteSqlRequest.QueryOptionsOrBuilder getQueryOptionsOrBuilder()
```

Query optimizer configuration to use for the given query.

`.google.spanner.v1.ExecuteSqlRequest.QueryOptions query_options = 10;`

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.QueryOptionsOrBuilder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.QueryOptionsOrBuilder)`

### getRequestOptions()

```
public RequestOptions getRequestOptions()
```

Common options for this request.

`.google.spanner.v1.RequestOptions request_options = 11;`

**Returns**

**Type**

**Description**

`[RequestOptions](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.RequestOptions)`

The requestOptions.

### getRequestOptionsBuilder()

```
public RequestOptions.Builder getRequestOptionsBuilder()
```

Common options for this request.

`.google.spanner.v1.RequestOptions request_options = 11;`

**Returns**

**Type**

**Description**

`[RequestOptions.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.RequestOptions.Builder)`

### getRequestOptionsOrBuilder()

```
public RequestOptionsOrBuilder getRequestOptionsOrBuilder()
```

Common options for this request.

`.google.spanner.v1.RequestOptions request_options = 11;`

**Returns**

**Type**

**Description**

`[RequestOptionsOrBuilder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.RequestOptionsOrBuilder)`

### getResumeToken()

```
public ByteString getResumeToken()
```

If this request is resuming a previously interrupted SQL statement execution, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new SQL statement execution to resume where the last one left off. The rest of the request parameters must exactly match the request that yielded this token.

`bytes resume_token = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The resumeToken.

### getSeqno()

```
public long getSeqno()
```

A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed.

The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution.

Required for DML statements. Ignored for queries.

`int64 seqno = 9;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The seqno.

### getSession()

```
public String getSession()
```

Required. The session in which the SQL query should be performed.

`string session = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The session.

### getSessionBytes()

```
public ByteString getSessionBytes()
```

Required. The session in which the SQL query should be performed.

`string session = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for session.

### getSql()

```
public String getSql()
```

Required. The SQL string.

`string sql = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The sql.

### getSqlBytes()

```
public ByteString getSqlBytes()
```

Required. The SQL string.

`string sql = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for sql.

### getTransaction()

```
public TransactionSelector getTransaction()
```

The transaction to use.

For queries, if none is provided, the default is a temporary read-only transaction with strong concurrency.

Standard DML statements require a read-write transaction. To protect against replays, single-use transactions are not supported. The caller must either supply an existing transaction ID or begin a new transaction.

Partitioned DML requires an existing Partitioned DML transaction ID.

`.google.spanner.v1.TransactionSelector transaction = 2;`

**Returns**

**Type**

**Description**

`[TransactionSelector](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.TransactionSelector)`

The transaction.

### getTransactionBuilder()

```
public TransactionSelector.Builder getTransactionBuilder()
```

The transaction to use.

For queries, if none is provided, the default is a temporary read-only transaction with strong concurrency.

Standard DML statements require a read-write transaction. To protect against replays, single-use transactions are not supported. The caller must either supply an existing transaction ID or begin a new transaction.

Partitioned DML requires an existing Partitioned DML transaction ID.

`.google.spanner.v1.TransactionSelector transaction = 2;`

**Returns**

**Type**

**Description**

`[TransactionSelector.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.TransactionSelector.Builder)`

### getTransactionOrBuilder()

```
public TransactionSelectorOrBuilder getTransactionOrBuilder()
```

The transaction to use.

For queries, if none is provided, the default is a temporary read-only transaction with strong concurrency.

Standard DML statements require a read-write transaction. To protect against replays, single-use transactions are not supported. The caller must either supply an existing transaction ID or begin a new transaction.

Partitioned DML requires an existing Partitioned DML transaction ID.

`.google.spanner.v1.TransactionSelector transaction = 2;`

**Returns**

**Type**

**Description**

`[TransactionSelectorOrBuilder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.TransactionSelectorOrBuilder)`

### hasDirectedReadOptions()

```
public boolean hasDirectedReadOptions()
```

Directed read options for this request.

`.google.spanner.v1.DirectedReadOptions directed_read_options = 15;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the directedReadOptions field is set.

### hasParams()

```
public boolean hasParams()
```

Parameter names and values that bind to placeholders in the SQL string.

A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names must conform to the naming requirements of identifiers as specified at [https://cloud.google.com/spanner/docs/lexical#identifiers](https://cloud.google.com/spanner/docs/lexical#identifiers).

Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example:

`"WHERE id > @msg_id AND id < @msg_id + 100"`

It is an error to execute a SQL statement with unbound parameters.

`.google.protobuf.Struct params = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the params field is set.

### hasQueryOptions()

```
public boolean hasQueryOptions()
```

Query optimizer configuration to use for the given query.

`.google.spanner.v1.ExecuteSqlRequest.QueryOptions query_options = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the queryOptions field is set.

### hasRequestOptions()

```
public boolean hasRequestOptions()
```

Common options for this request.

`.google.spanner.v1.RequestOptions request_options = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the requestOptions field is set.

### hasTransaction()

```
public boolean hasTransaction()
```

The transaction to use.

For queries, if none is provided, the default is a temporary read-only transaction with strong concurrency.

Standard DML statements require a read-write transaction. To protect against replays, single-use transactions are not supported. The caller must either supply an existing transaction ID or begin a new transaction.

Partitioned DML requires an existing Partitioned DML transaction ID.

`.google.spanner.v1.TransactionSelector transaction = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the transaction field is set.

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

### internalGetMapField(int number)

```
protected MapField internalGetMapField(int number)
```

**Parameter**

**Name**

**Description**

`number`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[MapField](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MapField.html)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.internalGetMapField(int fieldNumber)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetMapField_int_)

### internalGetMutableMapField(int number)

```
protected MapField internalGetMutableMapField(int number)
```

**Parameter**

**Name**

**Description**

`number`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[MapField](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MapField.html)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.internalGetMutableMapField(int fieldNumber)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetMutableMapField_int_)

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

### mergeDirectedReadOptions(DirectedReadOptions value)

```
public ExecuteSqlRequest.Builder mergeDirectedReadOptions(DirectedReadOptions value)
```

Directed read options for this request.

`.google.spanner.v1.DirectedReadOptions directed_read_options = 15;`

**Parameter**

**Name**

**Description**

`value`

`[DirectedReadOptions](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.DirectedReadOptions)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public ExecuteSqlRequest.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public ExecuteSqlRequest.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeFrom(ExecuteSqlRequest other)

```
public ExecuteSqlRequest.Builder mergeFrom(ExecuteSqlRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[ExecuteSqlRequest](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### mergeParams(Struct value)

```
public ExecuteSqlRequest.Builder mergeParams(Struct value)
```

Parameter names and values that bind to placeholders in the SQL string.

A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names must conform to the naming requirements of identifiers as specified at [https://cloud.google.com/spanner/docs/lexical#identifiers](https://cloud.google.com/spanner/docs/lexical#identifiers).

Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example:

`"WHERE id > @msg_id AND id < @msg_id + 100"`

It is an error to execute a SQL statement with unbound parameters.

`.google.protobuf.Struct params = 4;`

**Parameter**

**Name**

**Description**

`value`

`[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### mergeQueryOptions(ExecuteSqlRequest.QueryOptions value)

```
public ExecuteSqlRequest.Builder mergeQueryOptions(ExecuteSqlRequest.QueryOptions value)
```

Query optimizer configuration to use for the given query.

`.google.spanner.v1.ExecuteSqlRequest.QueryOptions query_options = 10;`

**Parameter**

**Name**

**Description**

`value`

`[ExecuteSqlRequest.QueryOptions](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.QueryOptions)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### mergeRequestOptions(RequestOptions value)

```
public ExecuteSqlRequest.Builder mergeRequestOptions(RequestOptions value)
```

Common options for this request.

`.google.spanner.v1.RequestOptions request_options = 11;`

**Parameter**

**Name**

**Description**

`value`

`[RequestOptions](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.RequestOptions)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### mergeTransaction(TransactionSelector value)

```
public ExecuteSqlRequest.Builder mergeTransaction(TransactionSelector value)
```

The transaction to use.

For queries, if none is provided, the default is a temporary read-only transaction with strong concurrency.

Standard DML statements require a read-write transaction. To protect against replays, single-use transactions are not supported. The caller must either supply an existing transaction ID or begin a new transaction.

Partitioned DML requires an existing Partitioned DML transaction ID.

`.google.spanner.v1.TransactionSelector transaction = 2;`

**Parameter**

**Name**

**Description**

`value`

`[TransactionSelector](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.TransactionSelector)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final ExecuteSqlRequest.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### putAllParamTypes(Map<String,Type> values)

```
public ExecuteSqlRequest.Builder putAllParamTypes(Map<String,Type> values)
```

It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings.

In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.

`map<string, .google.spanner.v1.Type> param_types = 5;`

**Parameter**

**Name**

**Description**

`values`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Type](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.Type)>`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### putParamTypes(String key, Type value)

```
public ExecuteSqlRequest.Builder putParamTypes(String key, Type value)
```

It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings.

In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.

`map<string, .google.spanner.v1.Type> param_types = 5;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`value`

`[Type](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.Type)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### removeParamTypes(String key)

```
public ExecuteSqlRequest.Builder removeParamTypes(String key)
```

It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings.

In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.

`map<string, .google.spanner.v1.Type> param_types = 5;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### setDataBoostEnabled(boolean value)

```
public ExecuteSqlRequest.Builder setDataBoostEnabled(boolean value)
```

If this is for a partitioned query and this field is set to `true`, the request is executed with Spanner Data Boost independent compute resources.

If the field is set to `true` but the request does not set `partition_token`, the API returns an `INVALID_ARGUMENT` error.

`bool data_boost_enabled = 16;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The dataBoostEnabled to set.

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### setDirectedReadOptions(DirectedReadOptions value)

```
public ExecuteSqlRequest.Builder setDirectedReadOptions(DirectedReadOptions value)
```

Directed read options for this request.

`.google.spanner.v1.DirectedReadOptions directed_read_options = 15;`

**Parameter**

**Name**

**Description**

`value`

`[DirectedReadOptions](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.DirectedReadOptions)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### setDirectedReadOptions(DirectedReadOptions.Builder builderForValue)

```
public ExecuteSqlRequest.Builder setDirectedReadOptions(DirectedReadOptions.Builder builderForValue)
```

Directed read options for this request.

`.google.spanner.v1.DirectedReadOptions directed_read_options = 15;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[DirectedReadOptions.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.DirectedReadOptions.Builder)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public ExecuteSqlRequest.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setParams(Struct value)

```
public ExecuteSqlRequest.Builder setParams(Struct value)
```

Parameter names and values that bind to placeholders in the SQL string.

A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names must conform to the naming requirements of identifiers as specified at [https://cloud.google.com/spanner/docs/lexical#identifiers](https://cloud.google.com/spanner/docs/lexical#identifiers).

Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example:

`"WHERE id > @msg_id AND id < @msg_id + 100"`

It is an error to execute a SQL statement with unbound parameters.

`.google.protobuf.Struct params = 4;`

**Parameter**

**Name**

**Description**

`value`

`[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### setParams(Struct.Builder builderForValue)

```
public ExecuteSqlRequest.Builder setParams(Struct.Builder builderForValue)
```

Parameter names and values that bind to placeholders in the SQL string.

A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names must conform to the naming requirements of identifiers as specified at [https://cloud.google.com/spanner/docs/lexical#identifiers](https://cloud.google.com/spanner/docs/lexical#identifiers).

Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example:

`"WHERE id > @msg_id AND id < @msg_id + 100"`

It is an error to execute a SQL statement with unbound parameters.

`.google.protobuf.Struct params = 4;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.Builder.html)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### setPartitionToken(ByteString value)

```
public ExecuteSqlRequest.Builder setPartitionToken(ByteString value)
```

If present, results will be restricted to the specified partition previously created using PartitionQuery(). There must be an exact match for the values of fields common to this message and the PartitionQueryRequest message used to create this partition\_token.

`bytes partition_token = 8;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The partitionToken to set.

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### setQueryMode(ExecuteSqlRequest.QueryMode value)

```
public ExecuteSqlRequest.Builder setQueryMode(ExecuteSqlRequest.QueryMode value)
```

Used to control the amount of debugging information returned in ResultSetStats. If partition\_token is set, query\_mode can only be set to QueryMode.NORMAL.

`.google.spanner.v1.ExecuteSqlRequest.QueryMode query_mode = 7;`

**Parameter**

**Name**

**Description**

`value`

`[ExecuteSqlRequest.QueryMode](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.QueryMode)`  

The queryMode to set.

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### setQueryModeValue(int value)

```
public ExecuteSqlRequest.Builder setQueryModeValue(int value)
```

Used to control the amount of debugging information returned in ResultSetStats. If partition\_token is set, query\_mode can only be set to QueryMode.NORMAL.

`.google.spanner.v1.ExecuteSqlRequest.QueryMode query_mode = 7;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enum numeric value on the wire for queryMode to set.

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### setQueryOptions(ExecuteSqlRequest.QueryOptions value)

```
public ExecuteSqlRequest.Builder setQueryOptions(ExecuteSqlRequest.QueryOptions value)
```

Query optimizer configuration to use for the given query.

`.google.spanner.v1.ExecuteSqlRequest.QueryOptions query_options = 10;`

**Parameter**

**Name**

**Description**

`value`

`[ExecuteSqlRequest.QueryOptions](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.QueryOptions)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### setQueryOptions(ExecuteSqlRequest.QueryOptions.Builder builderForValue)

```
public ExecuteSqlRequest.Builder setQueryOptions(ExecuteSqlRequest.QueryOptions.Builder builderForValue)
```

Query optimizer configuration to use for the given query.

`.google.spanner.v1.ExecuteSqlRequest.QueryOptions query_options = 10;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[ExecuteSqlRequest.QueryOptions.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.QueryOptions.Builder)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public ExecuteSqlRequest.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setRequestOptions(RequestOptions value)

```
public ExecuteSqlRequest.Builder setRequestOptions(RequestOptions value)
```

Common options for this request.

`.google.spanner.v1.RequestOptions request_options = 11;`

**Parameter**

**Name**

**Description**

`value`

`[RequestOptions](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.RequestOptions)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### setRequestOptions(RequestOptions.Builder builderForValue)

```
public ExecuteSqlRequest.Builder setRequestOptions(RequestOptions.Builder builderForValue)
```

Common options for this request.

`.google.spanner.v1.RequestOptions request_options = 11;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[RequestOptions.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.RequestOptions.Builder)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### setResumeToken(ByteString value)

```
public ExecuteSqlRequest.Builder setResumeToken(ByteString value)
```

If this request is resuming a previously interrupted SQL statement execution, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new SQL statement execution to resume where the last one left off. The rest of the request parameters must exactly match the request that yielded this token.

`bytes resume_token = 6;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The resumeToken to set.

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### setSeqno(long value)

```
public ExecuteSqlRequest.Builder setSeqno(long value)
```

A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed.

The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution.

Required for DML statements. Ignored for queries.

`int64 seqno = 9;`

**Parameter**

**Name**

**Description**

`value`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The seqno to set.

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### setSession(String value)

```
public ExecuteSqlRequest.Builder setSession(String value)
```

Required. The session in which the SQL query should be performed.

`string session = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The session to set.

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### setSessionBytes(ByteString value)

```
public ExecuteSqlRequest.Builder setSessionBytes(ByteString value)
```

Required. The session in which the SQL query should be performed.

`string session = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for session to set.

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### setSql(String value)

```
public ExecuteSqlRequest.Builder setSql(String value)
```

Required. The SQL string.

`string sql = 3 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The sql to set.

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### setSqlBytes(ByteString value)

```
public ExecuteSqlRequest.Builder setSqlBytes(ByteString value)
```

Required. The SQL string.

`string sql = 3 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for sql to set.

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

This builder for chaining.

### setTransaction(TransactionSelector value)

```
public ExecuteSqlRequest.Builder setTransaction(TransactionSelector value)
```

The transaction to use.

For queries, if none is provided, the default is a temporary read-only transaction with strong concurrency.

Standard DML statements require a read-write transaction. To protect against replays, single-use transactions are not supported. The caller must either supply an existing transaction ID or begin a new transaction.

Partitioned DML requires an existing Partitioned DML transaction ID.

`.google.spanner.v1.TransactionSelector transaction = 2;`

**Parameter**

**Name**

**Description**

`value`

`[TransactionSelector](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.TransactionSelector)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### setTransaction(TransactionSelector.Builder builderForValue)

```
public ExecuteSqlRequest.Builder setTransaction(TransactionSelector.Builder builderForValue)
```

The transaction to use.

For queries, if none is provided, the default is a temporary read-only transaction with strong concurrency.

Standard DML statements require a read-write transaction. To protect against replays, single-use transactions are not supported. The caller must either supply an existing transaction ID or begin a new transaction.

Partitioned DML requires an existing Partitioned DML transaction ID.

`.google.spanner.v1.TransactionSelector transaction = 2;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[TransactionSelector.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.TransactionSelector.Builder)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final ExecuteSqlRequest.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[ExecuteSqlRequest.Builder](/java/docs/reference/google-cloud-spanner/6.56.0/com.google.spanner.v1.ExecuteSqlRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
