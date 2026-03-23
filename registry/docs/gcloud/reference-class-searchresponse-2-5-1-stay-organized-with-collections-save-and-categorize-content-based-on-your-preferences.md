-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SearchResponse (2.5.1) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public final class SearchResponse extends GeneratedMessageV3 implements SearchResponseOrBuilder
```

Response message for SearchService.Search method.

Protobuf type `google.cloud.retail.v2alpha.SearchResponse`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html) \> [AbstractMessage](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html) \> [GeneratedMessageV3](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html) \> SearchResponse

## Implements

[SearchResponseOrBuilder](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponseOrBuilder)

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

[GeneratedMessageV3.<M>parseDelimitedWithIOException(Parser<M>,InputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3__M_parseDelimitedWithIOException_com_google_protobuf_Parser_M__java_io_InputStream_)

[GeneratedMessageV3.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3__M_parseDelimitedWithIOException_com_google_protobuf_Parser_M__java_io_InputStream_com_google_protobuf_ExtensionRegistryLite_)

[GeneratedMessageV3.<M>parseWithIOException(Parser<M>,CodedInputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3__M_parseWithIOException_com_google_protobuf_Parser_M__com_google_protobuf_CodedInputStream_)

[GeneratedMessageV3.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3__M_parseWithIOException_com_google_protobuf_Parser_M__com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

[GeneratedMessageV3.<M>parseWithIOException(Parser<M>,InputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3__M_parseWithIOException_com_google_protobuf_Parser_M__java_io_InputStream_)

[GeneratedMessageV3.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3__M_parseWithIOException_com_google_protobuf_Parser_M__java_io_InputStream_com_google_protobuf_ExtensionRegistryLite_)

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

### APPLIED\_CONTROLS\_FIELD\_NUMBER

```
public static final int APPLIED_CONTROLS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### ATTRIBUTION\_TOKEN\_FIELD\_NUMBER

```
public static final int ATTRIBUTION_TOKEN_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### CORRECTED\_QUERY\_FIELD\_NUMBER

```
public static final int CORRECTED_QUERY_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### FACETS\_FIELD\_NUMBER

```
public static final int FACETS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### INVALID\_CONDITION\_BOOST\_SPECS\_FIELD\_NUMBER

```
public static final int INVALID_CONDITION_BOOST_SPECS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### NEXT\_PAGE\_TOKEN\_FIELD\_NUMBER

```
public static final int NEXT_PAGE_TOKEN_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### QUERY\_EXPANSION\_INFO\_FIELD\_NUMBER

```
public static final int QUERY_EXPANSION_INFO_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### REDIRECT\_URI\_FIELD\_NUMBER

```
public static final int REDIRECT_URI_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### RESULTS\_FIELD\_NUMBER

```
public static final int RESULTS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### TOTAL\_SIZE\_FIELD\_NUMBER

```
public static final int TOTAL_SIZE_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

## Static Methods

### getDefaultInstance()

```
public static SearchResponse getDefaultInstance()
```

**Returns**

**Type**

**Description**

[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)

### getDescriptor()

```
public static final Descriptors.Descriptor getDescriptor()
```

**Returns**

**Type**

**Description**

[Descriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.Descriptor.html)

### newBuilder()

```
public static SearchResponse.Builder newBuilder()
```

**Returns**

**Type**

**Description**

[SearchResponse.Builder](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse.Builder)

### newBuilder(SearchResponse prototype)

```
public static SearchResponse.Builder newBuilder(SearchResponse prototype)
```

**Parameter**

**Name**

**Description**

prototype

`[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)`  

**Returns**

**Type**

**Description**

[SearchResponse.Builder](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse.Builder)

### parseDelimitedFrom(InputStream input)

```
public static SearchResponse parseDelimitedFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

input

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static SearchResponse parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

input

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

extensionRegistry

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseFrom(byte\[\] data)

```
public static SearchResponse parseFrom(byte[] data)
```

**Parameter**

**Name**

**Description**

data

`byte[]`  

**Returns**

**Type**

**Description**

[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parseFrom(byte\[\] data, ExtensionRegistryLite extensionRegistry)

```
public static SearchResponse parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

data

`byte[]`  

extensionRegistry

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parseFrom(ByteString data)

```
public static SearchResponse parseFrom(ByteString data)
```

**Parameter**

**Name**

**Description**

data

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

**Returns**

**Type**

**Description**

[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)

```
public static SearchResponse parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

data

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

extensionRegistry

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parseFrom(CodedInputStream input)

```
public static SearchResponse parseFrom(CodedInputStream input)
```

**Parameter**

**Name**

**Description**

input

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

**Returns**

**Type**

**Description**

[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public static SearchResponse parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

input

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

extensionRegistry

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseFrom(InputStream input)

```
public static SearchResponse parseFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

input

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static SearchResponse parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

input

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

extensionRegistry

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseFrom(ByteBuffer data)

```
public static SearchResponse parseFrom(ByteBuffer data)
```

**Parameter**

**Name**

**Description**

data

`[ByteBuffer](https://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html)`  

**Returns**

**Type**

**Description**

[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)

```
public static SearchResponse parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

data

`[ByteBuffer](https://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html)`  

extensionRegistry

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parser()

```
public static Parser<SearchResponse> parser()
```

**Returns**

**Type**

**Description**

[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)\>

## Methods

### equals(Object obj)

```
public boolean equals(Object obj)
```

**Parameter**

**Name**

**Description**

obj

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Overrides**

[AbstractMessage.equals(Object other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_equals_java_lang_Object_)

### getAppliedControls(int index)

```
public String getAppliedControls(int index)
```

The fully qualified resource name of applied [controls](https://cloud.google.com/retail/docs/serving-control-rules).

`repeated string applied_controls = 12;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The appliedControls at the given index.

### getAppliedControlsBytes(int index)

```
public ByteString getAppliedControlsBytes(int index)
```

The fully qualified resource name of applied [controls](https://cloud.google.com/retail/docs/serving-control-rules).

`repeated string applied_controls = 12;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the appliedControls at the given index.

### getAppliedControlsCount()

```
public int getAppliedControlsCount()
```

The fully qualified resource name of applied [controls](https://cloud.google.com/retail/docs/serving-control-rules).

`repeated string applied_controls = 12;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of appliedControls.

### getAppliedControlsList()

```
public ProtocolStringList getAppliedControlsList()
```

The fully qualified resource name of applied [controls](https://cloud.google.com/retail/docs/serving-control-rules).

`repeated string applied_controls = 12;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the appliedControls.

### getAttributionToken()

```
public String getAttributionToken()
```

A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance.

`string attribution_token = 5;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The attributionToken.

### getAttributionTokenBytes()

```
public ByteString getAttributionTokenBytes()
```

A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance.

`string attribution_token = 5;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for attributionToken.

### getCorrectedQuery()

```
public String getCorrectedQuery()
```

Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected\_query. Otherwise the original query is used for search.

`string corrected_query = 4;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The correctedQuery.

### getCorrectedQueryBytes()

```
public ByteString getCorrectedQueryBytes()
```

Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected\_query. Otherwise the original query is used for search.

`string corrected_query = 4;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for correctedQuery.

### getDefaultInstanceForType()

```
public SearchResponse getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)

### getFacets(int index)

```
public SearchResponse.Facet getFacets(int index)
```

Results of facets requested by user.

`repeated .google.cloud.retail.v2alpha.SearchResponse.Facet facets = 2;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[SearchResponse.Facet](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse.Facet)

### getFacetsCount()

```
public int getFacetsCount()
```

Results of facets requested by user.

`repeated .google.cloud.retail.v2alpha.SearchResponse.Facet facets = 2;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getFacetsList()

```
public List<SearchResponse.Facet> getFacetsList()
```

Results of facets requested by user.

`repeated .google.cloud.retail.v2alpha.SearchResponse.Facet facets = 2;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Facet](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse.Facet)\>

### getFacetsOrBuilder(int index)

```
public SearchResponse.FacetOrBuilder getFacetsOrBuilder(int index)
```

Results of facets requested by user.

`repeated .google.cloud.retail.v2alpha.SearchResponse.Facet facets = 2;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[SearchResponse.FacetOrBuilder](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse.FacetOrBuilder)

### getFacetsOrBuilderList()

```
public List<? extends SearchResponse.FacetOrBuilder> getFacetsOrBuilderList()
```

Results of facets requested by user.

`repeated .google.cloud.retail.v2alpha.SearchResponse.Facet facets = 2;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.retail.v2alpha.SearchResponse.FacetOrBuilder\>

### getInvalidConditionBoostSpecs(int index)

```
public SearchRequest.BoostSpec.ConditionBoostSpec getInvalidConditionBoostSpecs(int index)
```

The invalid SearchRequest.BoostSpec.condition\_boost\_specs that are not applied during serving.

`repeated .google.cloud.retail.v2alpha.SearchRequest.BoostSpec.ConditionBoostSpec invalid_condition_boost_specs = 14;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.BoostSpec.ConditionBoostSpec](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchRequest.BoostSpec.ConditionBoostSpec)

### getInvalidConditionBoostSpecsCount()

```
public int getInvalidConditionBoostSpecsCount()
```

The invalid SearchRequest.BoostSpec.condition\_boost\_specs that are not applied during serving.

`repeated .google.cloud.retail.v2alpha.SearchRequest.BoostSpec.ConditionBoostSpec invalid_condition_boost_specs = 14;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getInvalidConditionBoostSpecsList()

```
public List<SearchRequest.BoostSpec.ConditionBoostSpec> getInvalidConditionBoostSpecsList()
```

The invalid SearchRequest.BoostSpec.condition\_boost\_specs that are not applied during serving.

`repeated .google.cloud.retail.v2alpha.SearchRequest.BoostSpec.ConditionBoostSpec invalid_condition_boost_specs = 14;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ConditionBoostSpec](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchRequest.BoostSpec.ConditionBoostSpec)\>

### getInvalidConditionBoostSpecsOrBuilder(int index)

```
public SearchRequest.BoostSpec.ConditionBoostSpecOrBuilder getInvalidConditionBoostSpecsOrBuilder(int index)
```

The invalid SearchRequest.BoostSpec.condition\_boost\_specs that are not applied during serving.

`repeated .google.cloud.retail.v2alpha.SearchRequest.BoostSpec.ConditionBoostSpec invalid_condition_boost_specs = 14;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.BoostSpec.ConditionBoostSpecOrBuilder](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchRequest.BoostSpec.ConditionBoostSpecOrBuilder)

### getInvalidConditionBoostSpecsOrBuilderList()

```
public List<? extends SearchRequest.BoostSpec.ConditionBoostSpecOrBuilder> getInvalidConditionBoostSpecsOrBuilderList()
```

The invalid SearchRequest.BoostSpec.condition\_boost\_specs that are not applied during serving.

`repeated .google.cloud.retail.v2alpha.SearchRequest.BoostSpec.ConditionBoostSpec invalid_condition_boost_specs = 14;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.retail.v2alpha.SearchRequest.BoostSpec.ConditionBoostSpecOrBuilder\>

### getNextPageToken()

```
public String getNextPageToken()
```

A token that can be sent as SearchRequest.page\_token to retrieve the next page. If this field is omitted, there are no subsequent pages.

`string next_page_token = 6;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The nextPageToken.

### getNextPageTokenBytes()

```
public ByteString getNextPageTokenBytes()
```

A token that can be sent as SearchRequest.page\_token to retrieve the next page. If this field is omitted, there are no subsequent pages.

`string next_page_token = 6;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for nextPageToken.

### getParserForType()

```
public Parser<SearchResponse> getParserForType()
```

**Returns**

**Type**

**Description**

[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[SearchResponse](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse)\>

**Overrides**

[GeneratedMessageV3.getParserForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getParserForType__)

### getQueryExpansionInfo()

```
public SearchResponse.QueryExpansionInfo getQueryExpansionInfo()
```

Query expansion information for the returned results.

`.google.cloud.retail.v2alpha.SearchResponse.QueryExpansionInfo query_expansion_info = 7;`

**Returns**

**Type**

**Description**

[SearchResponse.QueryExpansionInfo](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse.QueryExpansionInfo)

The queryExpansionInfo.

### getQueryExpansionInfoOrBuilder()

```
public SearchResponse.QueryExpansionInfoOrBuilder getQueryExpansionInfoOrBuilder()
```

Query expansion information for the returned results.

`.google.cloud.retail.v2alpha.SearchResponse.QueryExpansionInfo query_expansion_info = 7;`

**Returns**

**Type**

**Description**

[SearchResponse.QueryExpansionInfoOrBuilder](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse.QueryExpansionInfoOrBuilder)

### getRedirectUri()

```
public String getRedirectUri()
```

The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect\_uri and attribution\_token are set in the response.

`string redirect_uri = 10;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The redirectUri.

### getRedirectUriBytes()

```
public ByteString getRedirectUriBytes()
```

The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect\_uri and attribution\_token are set in the response.

`string redirect_uri = 10;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for redirectUri.

### getResults(int index)

```
public SearchResponse.SearchResult getResults(int index)
```

A list of matched items. The order represents the ranking.

`repeated .google.cloud.retail.v2alpha.SearchResponse.SearchResult results = 1;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[SearchResponse.SearchResult](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse.SearchResult)

### getResultsCount()

```
public int getResultsCount()
```

A list of matched items. The order represents the ranking.

`repeated .google.cloud.retail.v2alpha.SearchResponse.SearchResult results = 1;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getResultsList()

```
public List<SearchResponse.SearchResult> getResultsList()
```

A list of matched items. The order represents the ranking.

`repeated .google.cloud.retail.v2alpha.SearchResponse.SearchResult results = 1;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SearchResult](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse.SearchResult)\>

### getResultsOrBuilder(int index)

```
public SearchResponse.SearchResultOrBuilder getResultsOrBuilder(int index)
```

A list of matched items. The order represents the ranking.

`repeated .google.cloud.retail.v2alpha.SearchResponse.SearchResult results = 1;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[SearchResponse.SearchResultOrBuilder](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse.SearchResultOrBuilder)

### getResultsOrBuilderList()

```
public List<? extends SearchResponse.SearchResultOrBuilder> getResultsOrBuilderList()
```

A list of matched items. The order represents the ranking.

`repeated .google.cloud.retail.v2alpha.SearchResponse.SearchResult results = 1;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.retail.v2alpha.SearchResponse.SearchResultOrBuilder\>

### getSerializedSize()

```
public int getSerializedSize()
```

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Overrides**

[GeneratedMessageV3.getSerializedSize()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getSerializedSize__)

### getTotalSize()

```
public int getTotalSize()
```

The estimated total count of matched items irrespective of pagination. The count of results returned by pagination may be less than the total\_size that matches.

`int32 total_size = 3;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The totalSize.

### getUnknownFields()

```
public final UnknownFieldSet getUnknownFields()
```

**Returns**

**Type**

**Description**

[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)

**Overrides**

[GeneratedMessageV3.getUnknownFields()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getUnknownFields__)

### hasQueryExpansionInfo()

```
public boolean hasQueryExpansionInfo()
```

Query expansion information for the returned results.

`.google.cloud.retail.v2alpha.SearchResponse.QueryExpansionInfo query_expansion_info = 7;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the queryExpansionInfo field is set.

### hashCode()

```
public int hashCode()
```

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Overrides**

[AbstractMessage.hashCode()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_hashCode__)

### internalGetFieldAccessorTable()

```
protected GeneratedMessageV3.FieldAccessorTable internalGetFieldAccessorTable()
```

**Returns**

**Type**

**Description**

[FieldAccessorTable](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.FieldAccessorTable.html)

**Overrides**

[GeneratedMessageV3.internalGetFieldAccessorTable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_internalGetFieldAccessorTable__)

### isInitialized()

```
public final boolean isInitialized()
```

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Overrides**

[GeneratedMessageV3.isInitialized()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_isInitialized__)

### newBuilderForType()

```
public SearchResponse.Builder newBuilderForType()
```

**Returns**

**Type**

**Description**

[SearchResponse.Builder](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse.Builder)

### newBuilderForType(GeneratedMessageV3.BuilderParent parent)

```
protected SearchResponse.Builder newBuilderForType(GeneratedMessageV3.BuilderParent parent)
```

**Parameter**

**Name**

**Description**

parent

`[BuilderParent](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.BuilderParent.html)`  

**Returns**

**Type**

**Description**

[SearchResponse.Builder](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse.Builder)

**Overrides**

[GeneratedMessageV3.newBuilderForType(GeneratedMessageV3.BuilderParent parent)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_newBuilderForType_com_google_protobuf_GeneratedMessageV3_BuilderParent_)

### newInstance(GeneratedMessageV3.UnusedPrivateParameter unused)

```
protected Object newInstance(GeneratedMessageV3.UnusedPrivateParameter unused)
```

**Parameter**

**Name**

**Description**

unused

`[UnusedPrivateParameter](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.UnusedPrivateParameter.html)`  

**Returns**

**Type**

**Description**

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)

**Overrides**

[GeneratedMessageV3.newInstance(GeneratedMessageV3.UnusedPrivateParameter unused)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_newInstance_com_google_protobuf_GeneratedMessageV3_UnusedPrivateParameter_)

### toBuilder()

```
public SearchResponse.Builder toBuilder()
```

**Returns**

**Type**

**Description**

[SearchResponse.Builder](/java/docs/reference/google-cloud-retail/2.5.1/com.google.cloud.retail.v2alpha.SearchResponse.Builder)

### writeTo(CodedOutputStream output)

```
public void writeTo(CodedOutputStream output)
```

**Parameter**

**Name**

**Description**

output

`[CodedOutputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedOutputStream.html)`  

**Overrides**

[GeneratedMessageV3.writeTo(CodedOutputStream output)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_writeTo_com_google_protobuf_CodedOutputStream_)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
