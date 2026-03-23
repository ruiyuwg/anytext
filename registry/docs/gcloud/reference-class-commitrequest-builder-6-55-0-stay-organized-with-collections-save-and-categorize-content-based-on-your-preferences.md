-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CommitRequest.Builder (6.55.0) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public static final class CommitRequest.Builder extends GeneratedMessageV3.Builder<CommitRequest.Builder> implements CommitRequestOrBuilder
```

The request for Commit.

Protobuf type `google.spanner.v1.CommitRequest`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> CommitRequest.Builder

## Implements

[CommitRequestOrBuilder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequestOrBuilder)

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

### addAllMutations(Iterable<? extends Mutation> values)

```
public CommitRequest.Builder addAllMutations(Iterable<? extends Mutation> values)
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.spanner.v1.Mutation>`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### addMutations(Mutation value)

```
public CommitRequest.Builder addMutations(Mutation value)
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Parameter**

**Name**

**Description**

`value`

`[Mutation](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.Mutation)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### addMutations(Mutation.Builder builderForValue)

```
public CommitRequest.Builder addMutations(Mutation.Builder builderForValue)
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Mutation.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.Mutation.Builder)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### addMutations(int index, Mutation value)

```
public CommitRequest.Builder addMutations(int index, Mutation value)
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Mutation](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.Mutation)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### addMutations(int index, Mutation.Builder builderForValue)

```
public CommitRequest.Builder addMutations(int index, Mutation.Builder builderForValue)
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Mutation.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.Mutation.Builder)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### addMutationsBuilder()

```
public Mutation.Builder addMutationsBuilder()
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Returns**

**Type**

**Description**

`[Mutation.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.Mutation.Builder)`

### addMutationsBuilder(int index)

```
public Mutation.Builder addMutationsBuilder(int index)
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Mutation.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.Mutation.Builder)`

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public CommitRequest.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public CommitRequest build()
```

**Returns**

**Type**

**Description**

`[CommitRequest](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest)`

### buildPartial()

```
public CommitRequest buildPartial()
```

**Returns**

**Type**

**Description**

`[CommitRequest](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest)`

### clear()

```
public CommitRequest.Builder clear()
```

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearField(Descriptors.FieldDescriptor field)

```
public CommitRequest.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearMutations()

```
public CommitRequest.Builder clearMutations()
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public CommitRequest.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearRequestOptions()

```
public CommitRequest.Builder clearRequestOptions()
```

Common options for this request.

`.google.spanner.v1.RequestOptions request_options = 6;`

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### clearReturnCommitStats()

```
public CommitRequest.Builder clearReturnCommitStats()
```

If `true`, then statistics related to the transaction will be included in the CommitResponse. Default value is `false`.

`bool return_commit_stats = 5;`

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

This builder for chaining.

### clearSession()

```
public CommitRequest.Builder clearSession()
```

Required. The session in which the transaction to be committed is running.

`string session = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

This builder for chaining.

### clearSingleUseTransaction()

```
public CommitRequest.Builder clearSingleUseTransaction()
```

Execute mutations in a temporary transaction. Note that unlike commit of a previously-started transaction, commit with a temporary transaction is non-idempotent. That is, if the `CommitRequest` is sent to Cloud Spanner more than once (for instance, due to retries in the application, or in the transport library), it is possible that the mutations are executed more than once. If this is undesirable, use BeginTransaction and Commit instead.

`.google.spanner.v1.TransactionOptions single_use_transaction = 3;`

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### clearTransaction()

```
public CommitRequest.Builder clearTransaction()
```

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### clearTransactionId()

```
public CommitRequest.Builder clearTransactionId()
```

Commit a previously-started transaction.

`bytes transaction_id = 2;`

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

This builder for chaining.

### clone()

```
public CommitRequest.Builder clone()
```

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getDefaultInstanceForType()

```
public CommitRequest getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[CommitRequest](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest)`

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

### getMutations(int index)

```
public Mutation getMutations(int index)
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Mutation](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.Mutation)`

### getMutationsBuilder(int index)

```
public Mutation.Builder getMutationsBuilder(int index)
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Mutation.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.Mutation.Builder)`

### getMutationsBuilderList()

```
public List<Mutation.Builder> getMutationsBuilderList()
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.Mutation.Builder)>`

### getMutationsCount()

```
public int getMutationsCount()
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getMutationsList()

```
public List<Mutation> getMutationsList()
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Mutation](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.Mutation)>`

### getMutationsOrBuilder(int index)

```
public MutationOrBuilder getMutationsOrBuilder(int index)
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[MutationOrBuilder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.MutationOrBuilder)`

### getMutationsOrBuilderList()

```
public List<? extends MutationOrBuilder> getMutationsOrBuilderList()
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.spanner.v1.MutationOrBuilder>`

### getRequestOptions()

```
public RequestOptions getRequestOptions()
```

Common options for this request.

`.google.spanner.v1.RequestOptions request_options = 6;`

**Returns**

**Type**

**Description**

`[RequestOptions](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.RequestOptions)`

The requestOptions.

### getRequestOptionsBuilder()

```
public RequestOptions.Builder getRequestOptionsBuilder()
```

Common options for this request.

`.google.spanner.v1.RequestOptions request_options = 6;`

**Returns**

**Type**

**Description**

`[RequestOptions.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.RequestOptions.Builder)`

### getRequestOptionsOrBuilder()

```
public RequestOptionsOrBuilder getRequestOptionsOrBuilder()
```

Common options for this request.

`.google.spanner.v1.RequestOptions request_options = 6;`

**Returns**

**Type**

**Description**

`[RequestOptionsOrBuilder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.RequestOptionsOrBuilder)`

### getReturnCommitStats()

```
public boolean getReturnCommitStats()
```

If `true`, then statistics related to the transaction will be included in the CommitResponse. Default value is `false`.

`bool return_commit_stats = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The returnCommitStats.

### getSession()

```
public String getSession()
```

Required. The session in which the transaction to be committed is running.

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

Required. The session in which the transaction to be committed is running.

`string session = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for session.

### getSingleUseTransaction()

```
public TransactionOptions getSingleUseTransaction()
```

Execute mutations in a temporary transaction. Note that unlike commit of a previously-started transaction, commit with a temporary transaction is non-idempotent. That is, if the `CommitRequest` is sent to Cloud Spanner more than once (for instance, due to retries in the application, or in the transport library), it is possible that the mutations are executed more than once. If this is undesirable, use BeginTransaction and Commit instead.

`.google.spanner.v1.TransactionOptions single_use_transaction = 3;`

**Returns**

**Type**

**Description**

`[TransactionOptions](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.TransactionOptions)`

The singleUseTransaction.

### getSingleUseTransactionBuilder()

```
public TransactionOptions.Builder getSingleUseTransactionBuilder()
```

Execute mutations in a temporary transaction. Note that unlike commit of a previously-started transaction, commit with a temporary transaction is non-idempotent. That is, if the `CommitRequest` is sent to Cloud Spanner more than once (for instance, due to retries in the application, or in the transport library), it is possible that the mutations are executed more than once. If this is undesirable, use BeginTransaction and Commit instead.

`.google.spanner.v1.TransactionOptions single_use_transaction = 3;`

**Returns**

**Type**

**Description**

`[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.TransactionOptions.Builder)`

### getSingleUseTransactionOrBuilder()

```
public TransactionOptionsOrBuilder getSingleUseTransactionOrBuilder()
```

Execute mutations in a temporary transaction. Note that unlike commit of a previously-started transaction, commit with a temporary transaction is non-idempotent. That is, if the `CommitRequest` is sent to Cloud Spanner more than once (for instance, due to retries in the application, or in the transport library), it is possible that the mutations are executed more than once. If this is undesirable, use BeginTransaction and Commit instead.

`.google.spanner.v1.TransactionOptions single_use_transaction = 3;`

**Returns**

**Type**

**Description**

`[TransactionOptionsOrBuilder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.TransactionOptionsOrBuilder)`

### getTransactionCase()

```
public CommitRequest.TransactionCase getTransactionCase()
```

**Returns**

**Type**

**Description**

`[CommitRequest.TransactionCase](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.TransactionCase)`

### getTransactionId()

```
public ByteString getTransactionId()
```

Commit a previously-started transaction.

`bytes transaction_id = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The transactionId.

### hasRequestOptions()

```
public boolean hasRequestOptions()
```

Common options for this request.

`.google.spanner.v1.RequestOptions request_options = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the requestOptions field is set.

### hasSingleUseTransaction()

```
public boolean hasSingleUseTransaction()
```

Execute mutations in a temporary transaction. Note that unlike commit of a previously-started transaction, commit with a temporary transaction is non-idempotent. That is, if the `CommitRequest` is sent to Cloud Spanner more than once (for instance, due to retries in the application, or in the transport library), it is possible that the mutations are executed more than once. If this is undesirable, use BeginTransaction and Commit instead.

`.google.spanner.v1.TransactionOptions single_use_transaction = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the singleUseTransaction field is set.

### hasTransactionId()

```
public boolean hasTransactionId()
```

Commit a previously-started transaction.

`bytes transaction_id = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the transactionId field is set.

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

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public CommitRequest.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public CommitRequest.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeFrom(CommitRequest other)

```
public CommitRequest.Builder mergeFrom(CommitRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[CommitRequest](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### mergeRequestOptions(RequestOptions value)

```
public CommitRequest.Builder mergeRequestOptions(RequestOptions value)
```

Common options for this request.

`.google.spanner.v1.RequestOptions request_options = 6;`

**Parameter**

**Name**

**Description**

`value`

`[RequestOptions](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.RequestOptions)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### mergeSingleUseTransaction(TransactionOptions value)

```
public CommitRequest.Builder mergeSingleUseTransaction(TransactionOptions value)
```

Execute mutations in a temporary transaction. Note that unlike commit of a previously-started transaction, commit with a temporary transaction is non-idempotent. That is, if the `CommitRequest` is sent to Cloud Spanner more than once (for instance, due to retries in the application, or in the transport library), it is possible that the mutations are executed more than once. If this is undesirable, use BeginTransaction and Commit instead.

`.google.spanner.v1.TransactionOptions single_use_transaction = 3;`

**Parameter**

**Name**

**Description**

`value`

`[TransactionOptions](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.TransactionOptions)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final CommitRequest.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### removeMutations(int index)

```
public CommitRequest.Builder removeMutations(int index)
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public CommitRequest.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setMutations(int index, Mutation value)

```
public CommitRequest.Builder setMutations(int index, Mutation value)
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Mutation](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.Mutation)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### setMutations(int index, Mutation.Builder builderForValue)

```
public CommitRequest.Builder setMutations(int index, Mutation.Builder builderForValue)
```

The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.

`repeated .google.spanner.v1.Mutation mutations = 4;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Mutation.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.Mutation.Builder)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public CommitRequest.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setRequestOptions(RequestOptions value)

```
public CommitRequest.Builder setRequestOptions(RequestOptions value)
```

Common options for this request.

`.google.spanner.v1.RequestOptions request_options = 6;`

**Parameter**

**Name**

**Description**

`value`

`[RequestOptions](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.RequestOptions)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### setRequestOptions(RequestOptions.Builder builderForValue)

```
public CommitRequest.Builder setRequestOptions(RequestOptions.Builder builderForValue)
```

Common options for this request.

`.google.spanner.v1.RequestOptions request_options = 6;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[RequestOptions.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.RequestOptions.Builder)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### setReturnCommitStats(boolean value)

```
public CommitRequest.Builder setReturnCommitStats(boolean value)
```

If `true`, then statistics related to the transaction will be included in the CommitResponse. Default value is `false`.

`bool return_commit_stats = 5;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The returnCommitStats to set.

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

This builder for chaining.

### setSession(String value)

```
public CommitRequest.Builder setSession(String value)
```

Required. The session in which the transaction to be committed is running.

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

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

This builder for chaining.

### setSessionBytes(ByteString value)

```
public CommitRequest.Builder setSessionBytes(ByteString value)
```

Required. The session in which the transaction to be committed is running.

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

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

This builder for chaining.

### setSingleUseTransaction(TransactionOptions value)

```
public CommitRequest.Builder setSingleUseTransaction(TransactionOptions value)
```

Execute mutations in a temporary transaction. Note that unlike commit of a previously-started transaction, commit with a temporary transaction is non-idempotent. That is, if the `CommitRequest` is sent to Cloud Spanner more than once (for instance, due to retries in the application, or in the transport library), it is possible that the mutations are executed more than once. If this is undesirable, use BeginTransaction and Commit instead.

`.google.spanner.v1.TransactionOptions single_use_transaction = 3;`

**Parameter**

**Name**

**Description**

`value`

`[TransactionOptions](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.TransactionOptions)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### setSingleUseTransaction(TransactionOptions.Builder builderForValue)

```
public CommitRequest.Builder setSingleUseTransaction(TransactionOptions.Builder builderForValue)
```

Execute mutations in a temporary transaction. Note that unlike commit of a previously-started transaction, commit with a temporary transaction is non-idempotent. That is, if the `CommitRequest` is sent to Cloud Spanner more than once (for instance, due to retries in the application, or in the transport library), it is possible that the mutations are executed more than once. If this is undesirable, use BeginTransaction and Commit instead.

`.google.spanner.v1.TransactionOptions single_use_transaction = 3;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[TransactionOptions.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.TransactionOptions.Builder)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

### setTransactionId(ByteString value)

```
public CommitRequest.Builder setTransactionId(ByteString value)
```

Commit a previously-started transaction.

`bytes transaction_id = 2;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The transactionId to set.

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

This builder for chaining.

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final CommitRequest.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[CommitRequest.Builder](/java/docs/reference/google-cloud-spanner/6.55.0/com.google.spanner.v1.CommitRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
