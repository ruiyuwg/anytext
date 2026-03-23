-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Step (1.44.0) Stay organized with collections Save and categorize content based on your preferences.

1.88.0 (latest) 1.86.0 1.84.0 1.83.0 1.81.0 1.79.0 1.77.0 1.76.0 1.75.0 1.74.0 1.73.0 1.71.0 1.69.0 1.68.0 1.65.0 1.64.0 1.63.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.1.10

```
public final class Step extends GeneratedMessageV3 implements StepOrBuilder
```

A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.

Protobuf type `google.cloud.networkmanagement.v1beta1.Step`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html) \> [AbstractMessage](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html) \> [GeneratedMessageV3](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html) \> Step

## Implements

[StepOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.StepOrBuilder)

## Inherited Members

[AbstractMessage.equals(Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_equals_java_lang_Object_)

[AbstractMessage.findInitializationErrors()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_findInitializationErrors__)

[AbstractMessage.getInitializationErrorString()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_getInitializationErrorString__)

[AbstractMessage.hashBoolean(boolean)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_hashBoolean_boolean_)

[AbstractMessage.hashCode()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_hashCode__)

[AbstractMessage.hashEnum(Internal.EnumLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_hashEnum_com_google_protobuf_Internal_EnumLite_)

[AbstractMessage.hashEnumList(List<? extends Internal.EnumLite>)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_hashEnumList_java_util_List___extends_com_google_protobuf_Internal_EnumLite__)

[AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_hashFields_int_java_util_Map_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object__)

[AbstractMessage.hashLong(long)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_hashLong_long_)

[AbstractMessage.toString()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_toString__)

[AbstractMessageLite.<T>addAll(Iterable<T>,Collection<? super T>)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html#com_google_protobuf_AbstractMessageLite__T_addAll_java_lang_Iterable_T__java_util_Collection___super_T__)

[AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html#com_google_protobuf_AbstractMessageLite__T_addAll_java_lang_Iterable_T__java_util_List___super_T__)

[AbstractMessageLite.checkByteStringIsUtf8(ByteString)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html#com_google_protobuf_AbstractMessageLite_checkByteStringIsUtf8_com_google_protobuf_ByteString_)

[AbstractMessageLite.toByteArray()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html#com_google_protobuf_AbstractMessageLite_toByteArray__)

[AbstractMessageLite.toByteString()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html#com_google_protobuf_AbstractMessageLite_toByteString__)

[AbstractMessageLite.writeDelimitedTo(OutputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html#com_google_protobuf_AbstractMessageLite_writeDelimitedTo_java_io_OutputStream_)

[AbstractMessageLite.writeTo(OutputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html#com_google_protobuf_AbstractMessageLite_writeTo_java_io_OutputStream_)

com.google.protobuf.GeneratedMessageV3.<ListT>makeMutableCopy(ListT)

com.google.protobuf.GeneratedMessageV3.<ListT>makeMutableCopy(ListT,int)

[GeneratedMessageV3.<M>parseDelimitedWithIOException(Parser<M>,InputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3__M_parseDelimitedWithIOException_com_google_protobuf_Parser_M__java_io_InputStream_)

[GeneratedMessageV3.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3__M_parseDelimitedWithIOException_com_google_protobuf_Parser_M__java_io_InputStream_com_google_protobuf_ExtensionRegistryLite_)

[GeneratedMessageV3.<M>parseWithIOException(Parser<M>,CodedInputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3__M_parseWithIOException_com_google_protobuf_Parser_M__com_google_protobuf_CodedInputStream_)

[GeneratedMessageV3.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3__M_parseWithIOException_com_google_protobuf_Parser_M__com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

[GeneratedMessageV3.<M>parseWithIOException(Parser<M>,InputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3__M_parseWithIOException_com_google_protobuf_Parser_M__java_io_InputStream_)

[GeneratedMessageV3.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3__M_parseWithIOException_com_google_protobuf_Parser_M__java_io_InputStream_com_google_protobuf_ExtensionRegistryLite_)

com.google.protobuf.GeneratedMessageV3.<T>emptyList(java.lang.Class<T>)

[GeneratedMessageV3.<V>serializeBooleanMapTo(CodedOutputStream,MapField<Boolean,V>,MapEntry<Boolean,V>,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3__V_serializeBooleanMapTo_com_google_protobuf_CodedOutputStream_com_google_protobuf_MapField_java_lang_Boolean_V__com_google_protobuf_MapEntry_java_lang_Boolean_V__int_)

[GeneratedMessageV3.<V>serializeIntegerMapTo(CodedOutputStream,MapField<Integer,V>,MapEntry<Integer,V>,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3__V_serializeIntegerMapTo_com_google_protobuf_CodedOutputStream_com_google_protobuf_MapField_java_lang_Integer_V__com_google_protobuf_MapEntry_java_lang_Integer_V__int_)

[GeneratedMessageV3.<V>serializeLongMapTo(CodedOutputStream,MapField<Long,V>,MapEntry<Long,V>,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3__V_serializeLongMapTo_com_google_protobuf_CodedOutputStream_com_google_protobuf_MapField_java_lang_Long_V__com_google_protobuf_MapEntry_java_lang_Long_V__int_)

[GeneratedMessageV3.<V>serializeStringMapTo(CodedOutputStream,MapField<String,V>,MapEntry<String,V>,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3__V_serializeStringMapTo_com_google_protobuf_CodedOutputStream_com_google_protobuf_MapField_java_lang_String_V__com_google_protobuf_MapEntry_java_lang_String_V__int_)

[GeneratedMessageV3.canUseUnsafe()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_canUseUnsafe__)

[GeneratedMessageV3.computeStringSize(int,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_computeStringSize_int_java_lang_Object_)

[GeneratedMessageV3.computeStringSizeNoTag(Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_computeStringSizeNoTag_java_lang_Object_)

[GeneratedMessageV3.emptyBooleanList()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_emptyBooleanList__)

[GeneratedMessageV3.emptyDoubleList()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_emptyDoubleList__)

[GeneratedMessageV3.emptyFloatList()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_emptyFloatList__)

[GeneratedMessageV3.emptyIntList()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_emptyIntList__)

[GeneratedMessageV3.emptyLongList()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_emptyLongList__)

[GeneratedMessageV3.getAllFields()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getAllFields__)

[GeneratedMessageV3.getDescriptorForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getDescriptorForType__)

[GeneratedMessageV3.getField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.getOneofFieldDescriptor(Descriptors.OneofDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getOneofFieldDescriptor_com_google_protobuf_Descriptors_OneofDescriptor_)

[GeneratedMessageV3.getParserForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getParserForType__)

[GeneratedMessageV3.getRepeatedField(Descriptors.FieldDescriptor,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_)

[GeneratedMessageV3.getRepeatedFieldCount(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getRepeatedFieldCount_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.getSerializedSize()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getSerializedSize__)

[GeneratedMessageV3.getUnknownFields()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getUnknownFields__)

[GeneratedMessageV3.hasField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_hasField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.hasOneof(Descriptors.OneofDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_hasOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

[GeneratedMessageV3.internalGetFieldAccessorTable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_internalGetFieldAccessorTable__)

[GeneratedMessageV3.internalGetMapField(int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_internalGetMapField_int_)

com.google.protobuf.GeneratedMessageV3.internalGetMapFieldReflection(int)

[GeneratedMessageV3.isInitialized()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_isInitialized__)

[GeneratedMessageV3.isStringEmpty(Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_isStringEmpty_java_lang_Object_)

[GeneratedMessageV3.makeExtensionsImmutable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_makeExtensionsImmutable__)

[GeneratedMessageV3.mergeFromAndMakeImmutableInternal(CodedInputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_mergeFromAndMakeImmutableInternal_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

[GeneratedMessageV3.mutableCopy(Internal.BooleanList)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_mutableCopy_com_google_protobuf_Internal_BooleanList_)

[GeneratedMessageV3.mutableCopy(Internal.DoubleList)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_mutableCopy_com_google_protobuf_Internal_DoubleList_)

[GeneratedMessageV3.mutableCopy(Internal.FloatList)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_mutableCopy_com_google_protobuf_Internal_FloatList_)

[GeneratedMessageV3.mutableCopy(Internal.IntList)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_mutableCopy_com_google_protobuf_Internal_IntList_)

[GeneratedMessageV3.mutableCopy(Internal.LongList)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_mutableCopy_com_google_protobuf_Internal_LongList_)

[GeneratedMessageV3.newBooleanList()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_newBooleanList__)

[GeneratedMessageV3.newBuilderForType(AbstractMessage.BuilderParent)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_newBuilderForType_com_google_protobuf_AbstractMessage_BuilderParent_)

[GeneratedMessageV3.newBuilderForType(GeneratedMessageV3.BuilderParent)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_newBuilderForType_com_google_protobuf_GeneratedMessageV3_BuilderParent_)

[GeneratedMessageV3.newDoubleList()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_newDoubleList__)

[GeneratedMessageV3.newFloatList()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_newFloatList__)

[GeneratedMessageV3.newInstance(GeneratedMessageV3.UnusedPrivateParameter)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_newInstance_com_google_protobuf_GeneratedMessageV3_UnusedPrivateParameter_)

[GeneratedMessageV3.newIntList()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_newIntList__)

[GeneratedMessageV3.newLongList()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_newLongList__)

[GeneratedMessageV3.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_parseUnknownField_com_google_protobuf_CodedInputStream_com_google_protobuf_UnknownFieldSet_Builder_com_google_protobuf_ExtensionRegistryLite_int_)

[GeneratedMessageV3.parseUnknownFieldProto3(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_parseUnknownFieldProto3_com_google_protobuf_CodedInputStream_com_google_protobuf_UnknownFieldSet_Builder_com_google_protobuf_ExtensionRegistryLite_int_)

[GeneratedMessageV3.writeReplace()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_writeReplace__)

[GeneratedMessageV3.writeString(CodedOutputStream,int,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_writeString_com_google_protobuf_CodedOutputStream_int_java_lang_Object_)

[GeneratedMessageV3.writeStringNoTag(CodedOutputStream,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_writeStringNoTag_com_google_protobuf_CodedOutputStream_java_lang_Object_)

[GeneratedMessageV3.writeTo(CodedOutputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_writeTo_com_google_protobuf_CodedOutputStream_)

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Fields

### ABORT\_FIELD\_NUMBER

```
public static final int ABORT_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### APP\_ENGINE\_VERSION\_FIELD\_NUMBER

```
public static final int APP_ENGINE_VERSION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### CAUSES\_DROP\_FIELD\_NUMBER

```
public static final int CAUSES_DROP_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### CLOUD\_FUNCTION\_FIELD\_NUMBER

```
public static final int CLOUD_FUNCTION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### CLOUD\_RUN\_REVISION\_FIELD\_NUMBER

```
public static final int CLOUD_RUN_REVISION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### CLOUD\_SQL\_INSTANCE\_FIELD\_NUMBER

```
public static final int CLOUD_SQL_INSTANCE_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### DELIVER\_FIELD\_NUMBER

```
public static final int DELIVER_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### DESCRIPTION\_FIELD\_NUMBER

```
public static final int DESCRIPTION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### DROP\_FIELD\_NUMBER

```
public static final int DROP_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### ENDPOINT\_FIELD\_NUMBER

```
public static final int ENDPOINT_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### FIREWALL\_FIELD\_NUMBER

```
public static final int FIREWALL_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### FORWARDING\_RULE\_FIELD\_NUMBER

```
public static final int FORWARDING_RULE_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### FORWARD\_FIELD\_NUMBER

```
public static final int FORWARD_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### GKE\_MASTER\_FIELD\_NUMBER

```
public static final int GKE_MASTER_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### GOOGLE\_SERVICE\_FIELD\_NUMBER

```
public static final int GOOGLE_SERVICE_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### INSTANCE\_FIELD\_NUMBER

```
public static final int INSTANCE_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### LOAD\_BALANCER\_BACKEND\_INFO\_FIELD\_NUMBER

```
public static final int LOAD_BALANCER_BACKEND_INFO_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### LOAD\_BALANCER\_FIELD\_NUMBER

```
public static final int LOAD_BALANCER_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### NAT\_FIELD\_NUMBER

```
public static final int NAT_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### NETWORK\_FIELD\_NUMBER

```
public static final int NETWORK_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### PROJECT\_ID\_FIELD\_NUMBER

```
public static final int PROJECT_ID_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### PROXY\_CONNECTION\_FIELD\_NUMBER

```
public static final int PROXY_CONNECTION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### ROUTE\_FIELD\_NUMBER

```
public static final int ROUTE_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### STATE\_FIELD\_NUMBER

```
public static final int STATE_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### STORAGE\_BUCKET\_FIELD\_NUMBER

```
public static final int STORAGE_BUCKET_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### VPC\_CONNECTOR\_FIELD\_NUMBER

```
public static final int VPC_CONNECTOR_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### VPN\_GATEWAY\_FIELD\_NUMBER

```
public static final int VPN_GATEWAY_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### VPN\_TUNNEL\_FIELD\_NUMBER

```
public static final int VPN_TUNNEL_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

## Static Methods

### getDefaultInstance()

```
public static Step getDefaultInstance()
```

**Returns**

**Type**

**Description**

`[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)`

### getDescriptor()

```
public static final Descriptors.Descriptor getDescriptor()
```

**Returns**

**Type**

**Description**

`[Descriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.Descriptor.html)`

### newBuilder()

```
public static Step.Builder newBuilder()
```

**Returns**

**Type**

**Description**

`[Step.Builder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step.Builder)`

### newBuilder(Step prototype)

```
public static Step.Builder newBuilder(Step prototype)
```

**Parameter**

**Name**

**Description**

`prototype`

`[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)`  

**Returns**

**Type**

**Description**

`[Step.Builder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step.Builder)`

### parseDelimitedFrom(InputStream input)

```
public static Step parseDelimitedFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static Step parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

`extensionRegistry`

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

`[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(byte\[\] data)

```
public static Step parseFrom(byte[] data)
```

**Parameter**

**Name**

**Description**

`data`

`byte[]`  

**Returns**

**Type**

**Description**

`[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(byte\[\] data, ExtensionRegistryLite extensionRegistry)

```
public static Step parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

`data`

`byte[]`  

`extensionRegistry`

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

`[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data)

```
public static Step parseFrom(ByteString data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

**Returns**

**Type**

**Description**

`[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)

```
public static Step parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

`data`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

`extensionRegistry`

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

`[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(CodedInputStream input)

```
public static Step parseFrom(CodedInputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

**Returns**

**Type**

**Description**

`[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public static Step parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input)

```
public static Step parseFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static Step parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

`extensionRegistry`

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

`[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(ByteBuffer data)

```
public static Step parseFrom(ByteBuffer data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteBuffer](https://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html)`  

**Returns**

**Type**

**Description**

`[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)

```
public static Step parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

`data`

`[ByteBuffer](https://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html)`  

`extensionRegistry`

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

`[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parser()

```
public static Parser<Step> parser()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)>`

## Methods

### equals(Object obj)

```
public boolean equals(Object obj)
```

**Parameter**

**Name**

**Description**

`obj`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[AbstractMessage.equals(Object other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_equals_java_lang_Object_)

### getAbort()

```
public AbortInfo getAbort()
```

Display information of the final state "abort" and reason.

`.google.cloud.networkmanagement.v1beta1.AbortInfo abort = 14;`

**Returns**

**Type**

**Description**

`[AbortInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.AbortInfo)`

The abort.

### getAbortOrBuilder()

```
public AbortInfoOrBuilder getAbortOrBuilder()
```

Display information of the final state "abort" and reason.

`.google.cloud.networkmanagement.v1beta1.AbortInfo abort = 14;`

**Returns**

**Type**

**Description**

`[AbortInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.AbortInfoOrBuilder)`

### getAppEngineVersion()

```
public AppEngineVersionInfo getAppEngineVersion()
```

Display information of an App Engine service version.

`.google.cloud.networkmanagement.v1beta1.AppEngineVersionInfo app_engine_version = 22;`

**Returns**

**Type**

**Description**

`[AppEngineVersionInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.AppEngineVersionInfo)`

The appEngineVersion.

### getAppEngineVersionOrBuilder()

```
public AppEngineVersionInfoOrBuilder getAppEngineVersionOrBuilder()
```

Display information of an App Engine service version.

`.google.cloud.networkmanagement.v1beta1.AppEngineVersionInfo app_engine_version = 22;`

**Returns**

**Type**

**Description**

`[AppEngineVersionInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.AppEngineVersionInfoOrBuilder)`

### getCausesDrop()

```
public boolean getCausesDrop()
```

This is a step that leads to the final state Drop.

`bool causes_drop = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The causesDrop.

### getCloudFunction()

```
public CloudFunctionInfo getCloudFunction()
```

Display information of a Cloud Function.

`.google.cloud.networkmanagement.v1beta1.CloudFunctionInfo cloud_function = 20;`

**Returns**

**Type**

**Description**

`[CloudFunctionInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.CloudFunctionInfo)`

The cloudFunction.

### getCloudFunctionOrBuilder()

```
public CloudFunctionInfoOrBuilder getCloudFunctionOrBuilder()
```

Display information of a Cloud Function.

`.google.cloud.networkmanagement.v1beta1.CloudFunctionInfo cloud_function = 20;`

**Returns**

**Type**

**Description**

`[CloudFunctionInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.CloudFunctionInfoOrBuilder)`

### getCloudRunRevision()

```
public CloudRunRevisionInfo getCloudRunRevision()
```

Display information of a Cloud Run revision.

`.google.cloud.networkmanagement.v1beta1.CloudRunRevisionInfo cloud_run_revision = 23;`

**Returns**

**Type**

**Description**

`[CloudRunRevisionInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.CloudRunRevisionInfo)`

The cloudRunRevision.

### getCloudRunRevisionOrBuilder()

```
public CloudRunRevisionInfoOrBuilder getCloudRunRevisionOrBuilder()
```

Display information of a Cloud Run revision.

`.google.cloud.networkmanagement.v1beta1.CloudRunRevisionInfo cloud_run_revision = 23;`

**Returns**

**Type**

**Description**

`[CloudRunRevisionInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.CloudRunRevisionInfoOrBuilder)`

### getCloudSqlInstance()

```
public CloudSQLInstanceInfo getCloudSqlInstance()
```

Display information of a Cloud SQL instance.

`.google.cloud.networkmanagement.v1beta1.CloudSQLInstanceInfo cloud_sql_instance = 19;`

**Returns**

**Type**

**Description**

`[CloudSQLInstanceInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.CloudSQLInstanceInfo)`

The cloudSqlInstance.

### getCloudSqlInstanceOrBuilder()

```
public CloudSQLInstanceInfoOrBuilder getCloudSqlInstanceOrBuilder()
```

Display information of a Cloud SQL instance.

`.google.cloud.networkmanagement.v1beta1.CloudSQLInstanceInfo cloud_sql_instance = 19;`

**Returns**

**Type**

**Description**

`[CloudSQLInstanceInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.CloudSQLInstanceInfoOrBuilder)`

### getDefaultInstanceForType()

```
public Step getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)`

### getDeliver()

```
public DeliverInfo getDeliver()
```

Display information of the final state "deliver" and reason.

`.google.cloud.networkmanagement.v1beta1.DeliverInfo deliver = 12;`

**Returns**

**Type**

**Description**

`[DeliverInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.DeliverInfo)`

The deliver.

### getDeliverOrBuilder()

```
public DeliverInfoOrBuilder getDeliverOrBuilder()
```

Display information of the final state "deliver" and reason.

`.google.cloud.networkmanagement.v1beta1.DeliverInfo deliver = 12;`

**Returns**

**Type**

**Description**

`[DeliverInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.DeliverInfoOrBuilder)`

### getDescription()

```
public String getDescription()
```

A description of the step. Usually this is a summary of the state.

`string description = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public ByteString getDescriptionBytes()
```

A description of the step. Usually this is a summary of the state.

`string description = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getDrop()

```
public DropInfo getDrop()
```

Display information of the final state "drop" and reason.

`.google.cloud.networkmanagement.v1beta1.DropInfo drop = 15;`

**Returns**

**Type**

**Description**

`[DropInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.DropInfo)`

The drop.

### getDropOrBuilder()

```
public DropInfoOrBuilder getDropOrBuilder()
```

Display information of the final state "drop" and reason.

`.google.cloud.networkmanagement.v1beta1.DropInfo drop = 15;`

**Returns**

**Type**

**Description**

`[DropInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.DropInfoOrBuilder)`

### getEndpoint()

```
public EndpointInfo getEndpoint()
```

Display information of the source and destination under analysis. The endpoint information in an intermediate state may differ with the initial input, as it might be modified by state like NAT, or Connection Proxy.

`.google.cloud.networkmanagement.v1beta1.EndpointInfo endpoint = 8;`

**Returns**

**Type**

**Description**

`[EndpointInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.EndpointInfo)`

The endpoint.

### getEndpointOrBuilder()

```
public EndpointInfoOrBuilder getEndpointOrBuilder()
```

Display information of the source and destination under analysis. The endpoint information in an intermediate state may differ with the initial input, as it might be modified by state like NAT, or Connection Proxy.

`.google.cloud.networkmanagement.v1beta1.EndpointInfo endpoint = 8;`

**Returns**

**Type**

**Description**

`[EndpointInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.EndpointInfoOrBuilder)`

### getFirewall()

```
public FirewallInfo getFirewall()
```

Display information of a Compute Engine firewall rule.

`.google.cloud.networkmanagement.v1beta1.FirewallInfo firewall = 6;`

**Returns**

**Type**

**Description**

`[FirewallInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.FirewallInfo)`

The firewall.

### getFirewallOrBuilder()

```
public FirewallInfoOrBuilder getFirewallOrBuilder()
```

Display information of a Compute Engine firewall rule.

`.google.cloud.networkmanagement.v1beta1.FirewallInfo firewall = 6;`

**Returns**

**Type**

**Description**

`[FirewallInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.FirewallInfoOrBuilder)`

### getForward()

```
public ForwardInfo getForward()
```

Display information of the final state "forward" and reason.

`.google.cloud.networkmanagement.v1beta1.ForwardInfo forward = 13;`

**Returns**

**Type**

**Description**

`[ForwardInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.ForwardInfo)`

The forward.

### getForwardOrBuilder()

```
public ForwardInfoOrBuilder getForwardOrBuilder()
```

Display information of the final state "forward" and reason.

`.google.cloud.networkmanagement.v1beta1.ForwardInfo forward = 13;`

**Returns**

**Type**

**Description**

`[ForwardInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.ForwardInfoOrBuilder)`

### getForwardingRule()

```
public ForwardingRuleInfo getForwardingRule()
```

Display information of a Compute Engine forwarding rule.

`.google.cloud.networkmanagement.v1beta1.ForwardingRuleInfo forwarding_rule = 9;`

**Returns**

**Type**

**Description**

`[ForwardingRuleInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.ForwardingRuleInfo)`

The forwardingRule.

### getForwardingRuleOrBuilder()

```
public ForwardingRuleInfoOrBuilder getForwardingRuleOrBuilder()
```

Display information of a Compute Engine forwarding rule.

`.google.cloud.networkmanagement.v1beta1.ForwardingRuleInfo forwarding_rule = 9;`

**Returns**

**Type**

**Description**

`[ForwardingRuleInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.ForwardingRuleInfoOrBuilder)`

### getGkeMaster()

```
public GKEMasterInfo getGkeMaster()
```

Display information of a Google Kubernetes Engine cluster master.

`.google.cloud.networkmanagement.v1beta1.GKEMasterInfo gke_master = 18;`

**Returns**

**Type**

**Description**

`[GKEMasterInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.GKEMasterInfo)`

The gkeMaster.

### getGkeMasterOrBuilder()

```
public GKEMasterInfoOrBuilder getGkeMasterOrBuilder()
```

Display information of a Google Kubernetes Engine cluster master.

`.google.cloud.networkmanagement.v1beta1.GKEMasterInfo gke_master = 18;`

**Returns**

**Type**

**Description**

`[GKEMasterInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.GKEMasterInfoOrBuilder)`

### getGoogleService()

```
public GoogleServiceInfo getGoogleService()
```

Display information of a Google service

`.google.cloud.networkmanagement.v1beta1.GoogleServiceInfo google_service = 24;`

**Returns**

**Type**

**Description**

`[GoogleServiceInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.GoogleServiceInfo)`

The googleService.

### getGoogleServiceOrBuilder()

```
public GoogleServiceInfoOrBuilder getGoogleServiceOrBuilder()
```

Display information of a Google service

`.google.cloud.networkmanagement.v1beta1.GoogleServiceInfo google_service = 24;`

**Returns**

**Type**

**Description**

`[GoogleServiceInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.GoogleServiceInfoOrBuilder)`

### getInstance()

```
public InstanceInfo getInstance()
```

Display information of a Compute Engine instance.

`.google.cloud.networkmanagement.v1beta1.InstanceInfo instance = 5;`

**Returns**

**Type**

**Description**

`[InstanceInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.InstanceInfo)`

The instance.

### getInstanceOrBuilder()

```
public InstanceInfoOrBuilder getInstanceOrBuilder()
```

Display information of a Compute Engine instance.

`.google.cloud.networkmanagement.v1beta1.InstanceInfo instance = 5;`

**Returns**

**Type**

**Description**

`[InstanceInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.InstanceInfoOrBuilder)`

### getLoadBalancer() (deprecated)

```
public LoadBalancerInfo getLoadBalancer()
```

**Deprecated.** _google.cloud.networkmanagement.v1beta1.Step.load\_balancer is deprecated. See google/cloud/networkmanagement/v1beta1/trace.proto;l=245_

Display information of the load balancers. Deprecated in favor of the `load_balancer_backend_info` field, not used in new tests.

`.google.cloud.networkmanagement.v1beta1.LoadBalancerInfo load_balancer = 16 [deprecated = true];`

**Returns**

**Type**

**Description**

`[LoadBalancerInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.LoadBalancerInfo)`

The loadBalancer.

### getLoadBalancerBackendInfo()

```
public LoadBalancerBackendInfo getLoadBalancerBackendInfo()
```

Display information of a specific load balancer backend.

`.google.cloud.networkmanagement.v1beta1.LoadBalancerBackendInfo load_balancer_backend_info = 27;`

**Returns**

**Type**

**Description**

`[LoadBalancerBackendInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.LoadBalancerBackendInfo)`

The loadBalancerBackendInfo.

### getLoadBalancerBackendInfoOrBuilder()

```
public LoadBalancerBackendInfoOrBuilder getLoadBalancerBackendInfoOrBuilder()
```

Display information of a specific load balancer backend.

`.google.cloud.networkmanagement.v1beta1.LoadBalancerBackendInfo load_balancer_backend_info = 27;`

**Returns**

**Type**

**Description**

`[LoadBalancerBackendInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.LoadBalancerBackendInfoOrBuilder)`

### getLoadBalancerOrBuilder() (deprecated)

```
public LoadBalancerInfoOrBuilder getLoadBalancerOrBuilder()
```

Display information of the load balancers. Deprecated in favor of the `load_balancer_backend_info` field, not used in new tests.

`.google.cloud.networkmanagement.v1beta1.LoadBalancerInfo load_balancer = 16 [deprecated = true];`

**Returns**

**Type**

**Description**

`[LoadBalancerInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.LoadBalancerInfoOrBuilder)`

### getNat()

```
public NatInfo getNat()
```

Display information of a NAT.

`.google.cloud.networkmanagement.v1beta1.NatInfo nat = 25;`

**Returns**

**Type**

**Description**

`[NatInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.NatInfo)`

The nat.

### getNatOrBuilder()

```
public NatInfoOrBuilder getNatOrBuilder()
```

Display information of a NAT.

`.google.cloud.networkmanagement.v1beta1.NatInfo nat = 25;`

**Returns**

**Type**

**Description**

`[NatInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.NatInfoOrBuilder)`

### getNetwork()

```
public NetworkInfo getNetwork()
```

Display information of a Google Cloud network.

`.google.cloud.networkmanagement.v1beta1.NetworkInfo network = 17;`

**Returns**

**Type**

**Description**

`[NetworkInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.NetworkInfo)`

The network.

### getNetworkOrBuilder()

```
public NetworkInfoOrBuilder getNetworkOrBuilder()
```

Display information of a Google Cloud network.

`.google.cloud.networkmanagement.v1beta1.NetworkInfo network = 17;`

**Returns**

**Type**

**Description**

`[NetworkInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.NetworkInfoOrBuilder)`

### getParserForType()

```
public Parser<Step> getParserForType()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[Step](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step)>`

**Overrides**

[GeneratedMessageV3.getParserForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getParserForType__)

### getProjectId()

```
public String getProjectId()
```

Project ID that contains the configuration this step is validating.

`string project_id = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The projectId.

### getProjectIdBytes()

```
public ByteString getProjectIdBytes()
```

Project ID that contains the configuration this step is validating.

`string project_id = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for projectId.

### getProxyConnection()

```
public ProxyConnectionInfo getProxyConnection()
```

Display information of a ProxyConnection.

`.google.cloud.networkmanagement.v1beta1.ProxyConnectionInfo proxy_connection = 26;`

**Returns**

**Type**

**Description**

`[ProxyConnectionInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.ProxyConnectionInfo)`

The proxyConnection.

### getProxyConnectionOrBuilder()

```
public ProxyConnectionInfoOrBuilder getProxyConnectionOrBuilder()
```

Display information of a ProxyConnection.

`.google.cloud.networkmanagement.v1beta1.ProxyConnectionInfo proxy_connection = 26;`

**Returns**

**Type**

**Description**

`[ProxyConnectionInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.ProxyConnectionInfoOrBuilder)`

### getRoute()

```
public RouteInfo getRoute()
```

Display information of a Compute Engine route.

`.google.cloud.networkmanagement.v1beta1.RouteInfo route = 7;`

**Returns**

**Type**

**Description**

`[RouteInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.RouteInfo)`

The route.

### getRouteOrBuilder()

```
public RouteInfoOrBuilder getRouteOrBuilder()
```

Display information of a Compute Engine route.

`.google.cloud.networkmanagement.v1beta1.RouteInfo route = 7;`

**Returns**

**Type**

**Description**

`[RouteInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.RouteInfoOrBuilder)`

### getSerializedSize()

```
public int getSerializedSize()
```

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[GeneratedMessageV3.getSerializedSize()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getSerializedSize__)

### getState()

```
public Step.State getState()
```

Each step is in one of the pre-defined states.

`.google.cloud.networkmanagement.v1beta1.Step.State state = 2;`

**Returns**

**Type**

**Description**

`[Step.State](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step.State)`

The state.

### getStateValue()

```
public int getStateValue()
```

Each step is in one of the pre-defined states.

`.google.cloud.networkmanagement.v1beta1.Step.State state = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### getStepInfoCase()

```
public Step.StepInfoCase getStepInfoCase()
```

**Returns**

**Type**

**Description**

`[Step.StepInfoCase](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step.StepInfoCase)`

### getStorageBucket()

```
public StorageBucketInfo getStorageBucket()
```

Display information of a Storage Bucket. Used only for return traces.

`.google.cloud.networkmanagement.v1beta1.StorageBucketInfo storage_bucket = 28;`

**Returns**

**Type**

**Description**

`[StorageBucketInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.StorageBucketInfo)`

The storageBucket.

### getStorageBucketOrBuilder()

```
public StorageBucketInfoOrBuilder getStorageBucketOrBuilder()
```

Display information of a Storage Bucket. Used only for return traces.

`.google.cloud.networkmanagement.v1beta1.StorageBucketInfo storage_bucket = 28;`

**Returns**

**Type**

**Description**

`[StorageBucketInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.StorageBucketInfoOrBuilder)`

### getVpcConnector()

```
public VpcConnectorInfo getVpcConnector()
```

Display information of a VPC connector.

`.google.cloud.networkmanagement.v1beta1.VpcConnectorInfo vpc_connector = 21;`

**Returns**

**Type**

**Description**

`[VpcConnectorInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.VpcConnectorInfo)`

The vpcConnector.

### getVpcConnectorOrBuilder()

```
public VpcConnectorInfoOrBuilder getVpcConnectorOrBuilder()
```

Display information of a VPC connector.

`.google.cloud.networkmanagement.v1beta1.VpcConnectorInfo vpc_connector = 21;`

**Returns**

**Type**

**Description**

`[VpcConnectorInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.VpcConnectorInfoOrBuilder)`

### getVpnGateway()

```
public VpnGatewayInfo getVpnGateway()
```

Display information of a Compute Engine VPN gateway.

`.google.cloud.networkmanagement.v1beta1.VpnGatewayInfo vpn_gateway = 10;`

**Returns**

**Type**

**Description**

`[VpnGatewayInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.VpnGatewayInfo)`

The vpnGateway.

### getVpnGatewayOrBuilder()

```
public VpnGatewayInfoOrBuilder getVpnGatewayOrBuilder()
```

Display information of a Compute Engine VPN gateway.

`.google.cloud.networkmanagement.v1beta1.VpnGatewayInfo vpn_gateway = 10;`

**Returns**

**Type**

**Description**

`[VpnGatewayInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.VpnGatewayInfoOrBuilder)`

### getVpnTunnel()

```
public VpnTunnelInfo getVpnTunnel()
```

Display information of a Compute Engine VPN tunnel.

`.google.cloud.networkmanagement.v1beta1.VpnTunnelInfo vpn_tunnel = 11;`

**Returns**

**Type**

**Description**

`[VpnTunnelInfo](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.VpnTunnelInfo)`

The vpnTunnel.

### getVpnTunnelOrBuilder()

```
public VpnTunnelInfoOrBuilder getVpnTunnelOrBuilder()
```

Display information of a Compute Engine VPN tunnel.

`.google.cloud.networkmanagement.v1beta1.VpnTunnelInfo vpn_tunnel = 11;`

**Returns**

**Type**

**Description**

`[VpnTunnelInfoOrBuilder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.VpnTunnelInfoOrBuilder)`

### hasAbort()

```
public boolean hasAbort()
```

Display information of the final state "abort" and reason.

`.google.cloud.networkmanagement.v1beta1.AbortInfo abort = 14;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the abort field is set.

### hasAppEngineVersion()

```
public boolean hasAppEngineVersion()
```

Display information of an App Engine service version.

`.google.cloud.networkmanagement.v1beta1.AppEngineVersionInfo app_engine_version = 22;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the appEngineVersion field is set.

### hasCloudFunction()

```
public boolean hasCloudFunction()
```

Display information of a Cloud Function.

`.google.cloud.networkmanagement.v1beta1.CloudFunctionInfo cloud_function = 20;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the cloudFunction field is set.

### hasCloudRunRevision()

```
public boolean hasCloudRunRevision()
```

Display information of a Cloud Run revision.

`.google.cloud.networkmanagement.v1beta1.CloudRunRevisionInfo cloud_run_revision = 23;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the cloudRunRevision field is set.

### hasCloudSqlInstance()

```
public boolean hasCloudSqlInstance()
```

Display information of a Cloud SQL instance.

`.google.cloud.networkmanagement.v1beta1.CloudSQLInstanceInfo cloud_sql_instance = 19;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the cloudSqlInstance field is set.

### hasDeliver()

```
public boolean hasDeliver()
```

Display information of the final state "deliver" and reason.

`.google.cloud.networkmanagement.v1beta1.DeliverInfo deliver = 12;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the deliver field is set.

### hasDrop()

```
public boolean hasDrop()
```

Display information of the final state "drop" and reason.

`.google.cloud.networkmanagement.v1beta1.DropInfo drop = 15;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the drop field is set.

### hasEndpoint()

```
public boolean hasEndpoint()
```

Display information of the source and destination under analysis. The endpoint information in an intermediate state may differ with the initial input, as it might be modified by state like NAT, or Connection Proxy.

`.google.cloud.networkmanagement.v1beta1.EndpointInfo endpoint = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the endpoint field is set.

### hasFirewall()

```
public boolean hasFirewall()
```

Display information of a Compute Engine firewall rule.

`.google.cloud.networkmanagement.v1beta1.FirewallInfo firewall = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the firewall field is set.

### hasForward()

```
public boolean hasForward()
```

Display information of the final state "forward" and reason.

`.google.cloud.networkmanagement.v1beta1.ForwardInfo forward = 13;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the forward field is set.

### hasForwardingRule()

```
public boolean hasForwardingRule()
```

Display information of a Compute Engine forwarding rule.

`.google.cloud.networkmanagement.v1beta1.ForwardingRuleInfo forwarding_rule = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the forwardingRule field is set.

### hasGkeMaster()

```
public boolean hasGkeMaster()
```

Display information of a Google Kubernetes Engine cluster master.

`.google.cloud.networkmanagement.v1beta1.GKEMasterInfo gke_master = 18;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the gkeMaster field is set.

### hasGoogleService()

```
public boolean hasGoogleService()
```

Display information of a Google service

`.google.cloud.networkmanagement.v1beta1.GoogleServiceInfo google_service = 24;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the googleService field is set.

### hasInstance()

```
public boolean hasInstance()
```

Display information of a Compute Engine instance.

`.google.cloud.networkmanagement.v1beta1.InstanceInfo instance = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the instance field is set.

### hasLoadBalancer() (deprecated)

```
public boolean hasLoadBalancer()
```

**Deprecated.** _google.cloud.networkmanagement.v1beta1.Step.load\_balancer is deprecated. See google/cloud/networkmanagement/v1beta1/trace.proto;l=245_

Display information of the load balancers. Deprecated in favor of the `load_balancer_backend_info` field, not used in new tests.

`.google.cloud.networkmanagement.v1beta1.LoadBalancerInfo load_balancer = 16 [deprecated = true];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the loadBalancer field is set.

### hasLoadBalancerBackendInfo()

```
public boolean hasLoadBalancerBackendInfo()
```

Display information of a specific load balancer backend.

`.google.cloud.networkmanagement.v1beta1.LoadBalancerBackendInfo load_balancer_backend_info = 27;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the loadBalancerBackendInfo field is set.

### hasNat()

```
public boolean hasNat()
```

Display information of a NAT.

`.google.cloud.networkmanagement.v1beta1.NatInfo nat = 25;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the nat field is set.

### hasNetwork()

```
public boolean hasNetwork()
```

Display information of a Google Cloud network.

`.google.cloud.networkmanagement.v1beta1.NetworkInfo network = 17;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the network field is set.

### hasProxyConnection()

```
public boolean hasProxyConnection()
```

Display information of a ProxyConnection.

`.google.cloud.networkmanagement.v1beta1.ProxyConnectionInfo proxy_connection = 26;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the proxyConnection field is set.

### hasRoute()

```
public boolean hasRoute()
```

Display information of a Compute Engine route.

`.google.cloud.networkmanagement.v1beta1.RouteInfo route = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the route field is set.

### hasStorageBucket()

```
public boolean hasStorageBucket()
```

Display information of a Storage Bucket. Used only for return traces.

`.google.cloud.networkmanagement.v1beta1.StorageBucketInfo storage_bucket = 28;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the storageBucket field is set.

### hasVpcConnector()

```
public boolean hasVpcConnector()
```

Display information of a VPC connector.

`.google.cloud.networkmanagement.v1beta1.VpcConnectorInfo vpc_connector = 21;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the vpcConnector field is set.

### hasVpnGateway()

```
public boolean hasVpnGateway()
```

Display information of a Compute Engine VPN gateway.

`.google.cloud.networkmanagement.v1beta1.VpnGatewayInfo vpn_gateway = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the vpnGateway field is set.

### hasVpnTunnel()

```
public boolean hasVpnTunnel()
```

Display information of a Compute Engine VPN tunnel.

`.google.cloud.networkmanagement.v1beta1.VpnTunnelInfo vpn_tunnel = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the vpnTunnel field is set.

### hashCode()

```
public int hashCode()
```

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[AbstractMessage.hashCode()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_hashCode__)

### internalGetFieldAccessorTable()

```
protected GeneratedMessageV3.FieldAccessorTable internalGetFieldAccessorTable()
```

**Returns**

**Type**

**Description**

`[FieldAccessorTable](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.FieldAccessorTable.html)`

**Overrides**

[GeneratedMessageV3.internalGetFieldAccessorTable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_internalGetFieldAccessorTable__)

### isInitialized()

```
public final boolean isInitialized()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[GeneratedMessageV3.isInitialized()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_isInitialized__)

### newBuilderForType()

```
public Step.Builder newBuilderForType()
```

**Returns**

**Type**

**Description**

`[Step.Builder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step.Builder)`

### newBuilderForType(GeneratedMessageV3.BuilderParent parent)

```
protected Step.Builder newBuilderForType(GeneratedMessageV3.BuilderParent parent)
```

**Parameter**

**Name**

**Description**

`parent`

`[BuilderParent](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.BuilderParent.html)`  

**Returns**

**Type**

**Description**

`[Step.Builder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step.Builder)`

**Overrides**

[GeneratedMessageV3.newBuilderForType(GeneratedMessageV3.BuilderParent parent)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_newBuilderForType_com_google_protobuf_GeneratedMessageV3_BuilderParent_)

### newInstance(GeneratedMessageV3.UnusedPrivateParameter unused)

```
protected Object newInstance(GeneratedMessageV3.UnusedPrivateParameter unused)
```

**Parameter**

**Name**

**Description**

`unused`

`[UnusedPrivateParameter](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.UnusedPrivateParameter.html)`  

**Returns**

**Type**

**Description**

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`

**Overrides**

[GeneratedMessageV3.newInstance(GeneratedMessageV3.UnusedPrivateParameter unused)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_newInstance_com_google_protobuf_GeneratedMessageV3_UnusedPrivateParameter_)

### toBuilder()

```
public Step.Builder toBuilder()
```

**Returns**

**Type**

**Description**

`[Step.Builder](/java/docs/reference/google-cloud-network-management/1.44.0/com.google.cloud.networkmanagement.v1beta1.Step.Builder)`

### writeTo(CodedOutputStream output)

```
public void writeTo(CodedOutputStream output)
```

**Parameter**

**Name**

**Description**

`output`

`[CodedOutputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedOutputStream.html)`  

**Overrides**

[GeneratedMessageV3.writeTo(CodedOutputStream output)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_writeTo_com_google_protobuf_CodedOutputStream_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
