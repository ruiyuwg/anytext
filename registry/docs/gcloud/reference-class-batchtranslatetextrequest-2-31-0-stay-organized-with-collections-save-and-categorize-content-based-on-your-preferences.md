-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class BatchTranslateTextRequest (2.31.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.5 2.2.0 2.1.13

```
public final class BatchTranslateTextRequest extends GeneratedMessageV3 implements BatchTranslateTextRequestOrBuilder
```

The batch translation request.

Protobuf type `google.cloud.translation.v3.BatchTranslateTextRequest`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html) \> [AbstractMessage](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html) \> [GeneratedMessageV3](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html) \> BatchTranslateTextRequest

## Implements

[BatchTranslateTextRequestOrBuilder](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequestOrBuilder)

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

### GLOSSARIES\_FIELD\_NUMBER

```
public static final int GLOSSARIES_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### INPUT\_CONFIGS\_FIELD\_NUMBER

```
public static final int INPUT_CONFIGS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### LABELS\_FIELD\_NUMBER

```
public static final int LABELS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### MODELS\_FIELD\_NUMBER

```
public static final int MODELS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### OUTPUT\_CONFIG\_FIELD\_NUMBER

```
public static final int OUTPUT_CONFIG_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### PARENT\_FIELD\_NUMBER

```
public static final int PARENT_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### SOURCE\_LANGUAGE\_CODE\_FIELD\_NUMBER

```
public static final int SOURCE_LANGUAGE_CODE_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### TARGET\_LANGUAGE\_CODES\_FIELD\_NUMBER

```
public static final int TARGET_LANGUAGE_CODES_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

## Static Methods

### getDefaultInstance()

```
public static BatchTranslateTextRequest getDefaultInstance()
```

**Returns**

**Type**

**Description**

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)`

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
public static BatchTranslateTextRequest.Builder newBuilder()
```

**Returns**

**Type**

**Description**

`[BatchTranslateTextRequest.Builder](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest.Builder)`

### newBuilder(BatchTranslateTextRequest prototype)

```
public static BatchTranslateTextRequest.Builder newBuilder(BatchTranslateTextRequest prototype)
```

**Parameter**

**Name**

**Description**

`prototype`

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)`  

**Returns**

**Type**

**Description**

`[BatchTranslateTextRequest.Builder](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest.Builder)`

### parseDelimitedFrom(InputStream input)

```
public static BatchTranslateTextRequest parseDelimitedFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static BatchTranslateTextRequest parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(byte\[\] data)

```
public static BatchTranslateTextRequest parseFrom(byte[] data)
```

**Parameter**

**Name**

**Description**

`data`

`byte[]`  

**Returns**

**Type**

**Description**

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(byte\[\] data, ExtensionRegistryLite extensionRegistry)

```
public static BatchTranslateTextRequest parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
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

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data)

```
public static BatchTranslateTextRequest parseFrom(ByteString data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)

```
public static BatchTranslateTextRequest parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
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

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(CodedInputStream input)

```
public static BatchTranslateTextRequest parseFrom(CodedInputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public static BatchTranslateTextRequest parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input)

```
public static BatchTranslateTextRequest parseFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static BatchTranslateTextRequest parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(ByteBuffer data)

```
public static BatchTranslateTextRequest parseFrom(ByteBuffer data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteBuffer](https://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)

```
public static BatchTranslateTextRequest parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
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

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parser()

```
public static Parser<BatchTranslateTextRequest> parser()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)>`

## Methods

### containsGlossaries(String key)

```
public boolean containsGlossaries(String key)
```

Optional. Glossaries to be applied for translation. It's keyed by target language code.

`map<string, .google.cloud.translation.v3.TranslateTextGlossaryConfig> glossaries = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### containsLabels(String key)

```
public boolean containsLabels(String key)
```

Optional. The labels with user-defined metadata for the request.

Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.

See [https://cloud.google.com/translate/docs/advanced/labels](https://cloud.google.com/translate/docs/advanced/labels) for more information.

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### containsModels(String key)

```
public boolean containsModels(String key)
```

Optional. The models to use for translation. Map's key is target language code. Map's value is model name. Value can be a built-in general model, or an AutoML Translation model.

The value format depends on model type:

-   AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
    
-   General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
    

If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.

`map<string, string> models = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

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

### getDefaultInstanceForType()

```
public BatchTranslateTextRequest getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)`

### getGlossaries() (deprecated)

```
public Map<String,TranslateTextGlossaryConfig> getGlossaries()
```

Use [#getGlossariesMap()](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest#com_google_cloud_translate_v3_BatchTranslateTextRequest_getGlossariesMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[TranslateTextGlossaryConfig](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.TranslateTextGlossaryConfig)>`

### getGlossariesCount()

```
public int getGlossariesCount()
```

Optional. Glossaries to be applied for translation. It's keyed by target language code.

`map<string, .google.cloud.translation.v3.TranslateTextGlossaryConfig> glossaries = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getGlossariesMap()

```
public Map<String,TranslateTextGlossaryConfig> getGlossariesMap()
```

Optional. Glossaries to be applied for translation. It's keyed by target language code.

`map<string, .google.cloud.translation.v3.TranslateTextGlossaryConfig> glossaries = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[TranslateTextGlossaryConfig](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.TranslateTextGlossaryConfig)>`

### getGlossariesOrDefault(String key, TranslateTextGlossaryConfig defaultValue)

```
public TranslateTextGlossaryConfig getGlossariesOrDefault(String key, TranslateTextGlossaryConfig defaultValue)
```

Optional. Glossaries to be applied for translation. It's keyed by target language code.

`map<string, .google.cloud.translation.v3.TranslateTextGlossaryConfig> glossaries = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[TranslateTextGlossaryConfig](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.TranslateTextGlossaryConfig)`  

**Returns**

**Type**

**Description**

`[TranslateTextGlossaryConfig](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.TranslateTextGlossaryConfig)`

### getGlossariesOrThrow(String key)

```
public TranslateTextGlossaryConfig getGlossariesOrThrow(String key)
```

Optional. Glossaries to be applied for translation. It's keyed by target language code.

`map<string, .google.cloud.translation.v3.TranslateTextGlossaryConfig> glossaries = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[TranslateTextGlossaryConfig](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.TranslateTextGlossaryConfig)`

### getInputConfigs(int index)

```
public InputConfig getInputConfigs(int index)
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3.InputConfig input_configs = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[InputConfig](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.InputConfig)`

### getInputConfigsCount()

```
public int getInputConfigsCount()
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3.InputConfig input_configs = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getInputConfigsList()

```
public List<InputConfig> getInputConfigsList()
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3.InputConfig input_configs = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[InputConfig](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.InputConfig)>`

### getInputConfigsOrBuilder(int index)

```
public InputConfigOrBuilder getInputConfigsOrBuilder(int index)
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3.InputConfig input_configs = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[InputConfigOrBuilder](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.InputConfigOrBuilder)`

### getInputConfigsOrBuilderList()

```
public List<? extends InputConfigOrBuilder> getInputConfigsOrBuilderList()
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3.InputConfig input_configs = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.translate.v3.InputConfigOrBuilder>`

### getLabels() (deprecated)

```
public Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest#com_google_cloud_translate_v3_BatchTranslateTextRequest_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public int getLabelsCount()
```

Optional. The labels with user-defined metadata for the request.

Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.

See [https://cloud.google.com/translate/docs/advanced/labels](https://cloud.google.com/translate/docs/advanced/labels) for more information.

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public Map<String,String> getLabelsMap()
```

Optional. The labels with user-defined metadata for the request.

Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.

See [https://cloud.google.com/translate/docs/advanced/labels](https://cloud.google.com/translate/docs/advanced/labels) for more information.

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public String getLabelsOrDefault(String key, String defaultValue)
```

Optional. The labels with user-defined metadata for the request.

Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.

See [https://cloud.google.com/translate/docs/advanced/labels](https://cloud.google.com/translate/docs/advanced/labels) for more information.

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getLabelsOrThrow(String key)

```
public String getLabelsOrThrow(String key)
```

Optional. The labels with user-defined metadata for the request.

Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.

See [https://cloud.google.com/translate/docs/advanced/labels](https://cloud.google.com/translate/docs/advanced/labels) for more information.

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getModels() (deprecated)

```
public Map<String,String> getModels()
```

Use [#getModelsMap()](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest#com_google_cloud_translate_v3_BatchTranslateTextRequest_getModelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getModelsCount()

```
public int getModelsCount()
```

Optional. The models to use for translation. Map's key is target language code. Map's value is model name. Value can be a built-in general model, or an AutoML Translation model.

The value format depends on model type:

-   AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
    
-   General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
    

If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.

`map<string, string> models = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getModelsMap()

```
public Map<String,String> getModelsMap()
```

Optional. The models to use for translation. Map's key is target language code. Map's value is model name. Value can be a built-in general model, or an AutoML Translation model.

The value format depends on model type:

-   AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
    
-   General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
    

If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.

`map<string, string> models = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getModelsOrDefault(String key, String defaultValue)

```
public String getModelsOrDefault(String key, String defaultValue)
```

Optional. The models to use for translation. Map's key is target language code. Map's value is model name. Value can be a built-in general model, or an AutoML Translation model.

The value format depends on model type:

-   AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
    
-   General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
    

If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.

`map<string, string> models = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getModelsOrThrow(String key)

```
public String getModelsOrThrow(String key)
```

Optional. The models to use for translation. Map's key is target language code. Map's value is model name. Value can be a built-in general model, or an AutoML Translation model.

The value format depends on model type:

-   AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
    
-   General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
    

If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.

`map<string, string> models = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getOutputConfig()

```
public OutputConfig getOutputConfig()
```

Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.

`.google.cloud.translation.v3.OutputConfig output_config = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[OutputConfig](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.OutputConfig)`

The outputConfig.

### getOutputConfigOrBuilder()

```
public OutputConfigOrBuilder getOutputConfigOrBuilder()
```

Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.

`.google.cloud.translation.v3.OutputConfig output_config = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[OutputConfigOrBuilder](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.OutputConfigOrBuilder)`

### getParent()

```
public String getParent()
```

Required. Location to make a call. Must refer to a caller's project.

Format: `projects/{project-number-or-id}/locations/{location-id}`.

The `global` location is not supported for batch translation.

Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID\_ARGUMENT (400) error is returned.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parent.

### getParentBytes()

```
public ByteString getParentBytes()
```

Required. Location to make a call. Must refer to a caller's project.

Format: `projects/{project-number-or-id}/locations/{location-id}`.

The `global` location is not supported for batch translation.

Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID\_ARGUMENT (400) error is returned.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### getParserForType()

```
public Parser<BatchTranslateTextRequest> getParserForType()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[BatchTranslateTextRequest](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest)>`

**Overrides**

[GeneratedMessageV3.getParserForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getParserForType__)

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

### getSourceLanguageCode()

```
public String getSourceLanguageCode()
```

Required. Source language code.

`string source_language_code = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The sourceLanguageCode.

### getSourceLanguageCodeBytes()

```
public ByteString getSourceLanguageCodeBytes()
```

Required. Source language code.

`string source_language_code = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for sourceLanguageCode.

### getTargetLanguageCodes(int index)

```
public String getTargetLanguageCodes(int index)
```

Required. Specify up to 10 language codes here.

`repeated string target_language_codes = 3 [(.google.api.field_behavior) = REQUIRED];`

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

The targetLanguageCodes at the given index.

### getTargetLanguageCodesBytes(int index)

```
public ByteString getTargetLanguageCodesBytes(int index)
```

Required. Specify up to 10 language codes here.

`repeated string target_language_codes = 3 [(.google.api.field_behavior) = REQUIRED];`

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

The bytes of the targetLanguageCodes at the given index.

### getTargetLanguageCodesCount()

```
public int getTargetLanguageCodesCount()
```

Required. Specify up to 10 language codes here.

`repeated string target_language_codes = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of targetLanguageCodes.

### getTargetLanguageCodesList()

```
public ProtocolStringList getTargetLanguageCodesList()
```

Required. Specify up to 10 language codes here.

`repeated string target_language_codes = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)`

A list containing the targetLanguageCodes.

### hasOutputConfig()

```
public boolean hasOutputConfig()
```

Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.

`.google.cloud.translation.v3.OutputConfig output_config = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the outputConfig field is set.

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

[GeneratedMessageV3.internalGetMapField(int fieldNumber)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_internalGetMapField_int_)

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
public BatchTranslateTextRequest.Builder newBuilderForType()
```

**Returns**

**Type**

**Description**

`[BatchTranslateTextRequest.Builder](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest.Builder)`

### newBuilderForType(GeneratedMessageV3.BuilderParent parent)

```
protected BatchTranslateTextRequest.Builder newBuilderForType(GeneratedMessageV3.BuilderParent parent)
```

**Parameter**

**Name**

**Description**

`parent`

`[BuilderParent](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.BuilderParent.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateTextRequest.Builder](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest.Builder)`

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
public BatchTranslateTextRequest.Builder toBuilder()
```

**Returns**

**Type**

**Description**

`[BatchTranslateTextRequest.Builder](/java/docs/reference/google-cloud-translate/2.31.0/com.google.cloud.translate.v3.BatchTranslateTextRequest.Builder)`

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
