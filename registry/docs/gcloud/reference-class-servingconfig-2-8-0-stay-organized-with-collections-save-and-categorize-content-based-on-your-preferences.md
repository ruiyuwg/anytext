-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ServingConfig (2.8.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public final class ServingConfig extends GeneratedMessageV3 implements ServingConfigOrBuilder
```

Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions). The ServingConfig is passed in the search and predict request and together with the Catalog.default\_branch, generates results.

Protobuf type `google.cloud.retail.v2alpha.ServingConfig`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html) \> [AbstractMessage](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html) \> [GeneratedMessageV3](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html) \> ServingConfig

## Implements

[ServingConfigOrBuilder](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfigOrBuilder)

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

### BOOST\_CONTROL\_IDS\_FIELD\_NUMBER

```
public static final int BOOST_CONTROL_IDS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### DISPLAY\_NAME\_FIELD\_NUMBER

```
public static final int DISPLAY_NAME_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### DIVERSITY\_LEVEL\_FIELD\_NUMBER

```
public static final int DIVERSITY_LEVEL_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### DO\_NOT\_ASSOCIATE\_CONTROL\_IDS\_FIELD\_NUMBER

```
public static final int DO_NOT_ASSOCIATE_CONTROL_IDS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### DYNAMIC\_FACET\_SPEC\_FIELD\_NUMBER

```
public static final int DYNAMIC_FACET_SPEC_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### ENABLE\_CATEGORY\_FILTER\_LEVEL\_FIELD\_NUMBER

```
public static final int ENABLE_CATEGORY_FILTER_LEVEL_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### FACET\_CONTROL\_IDS\_FIELD\_NUMBER

```
public static final int FACET_CONTROL_IDS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### FILTER\_CONTROL\_IDS\_FIELD\_NUMBER

```
public static final int FILTER_CONTROL_IDS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### IGNORE\_CONTROL\_IDS\_FIELD\_NUMBER

```
public static final int IGNORE_CONTROL_IDS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### MODEL\_ID\_FIELD\_NUMBER

```
public static final int MODEL_ID_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### NAME\_FIELD\_NUMBER

```
public static final int NAME_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### ONEWAY\_SYNONYMS\_CONTROL\_IDS\_FIELD\_NUMBER

```
public static final int ONEWAY_SYNONYMS_CONTROL_IDS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### PRICE\_RERANKING\_LEVEL\_FIELD\_NUMBER

```
public static final int PRICE_RERANKING_LEVEL_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### REDIRECT\_CONTROL\_IDS\_FIELD\_NUMBER

```
public static final int REDIRECT_CONTROL_IDS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### REPLACEMENT\_CONTROL\_IDS\_FIELD\_NUMBER

```
public static final int REPLACEMENT_CONTROL_IDS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### SOLUTION\_TYPES\_FIELD\_NUMBER

```
public static final int SOLUTION_TYPES_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### TWOWAY\_SYNONYMS\_CONTROL\_IDS\_FIELD\_NUMBER

```
public static final int TWOWAY_SYNONYMS_CONTROL_IDS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

## Static Methods

### getDefaultInstance()

```
public static ServingConfig getDefaultInstance()
```

**Returns**

**Type**

**Description**

[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)

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
public static ServingConfig.Builder newBuilder()
```

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

### newBuilder(ServingConfig prototype)

```
public static ServingConfig.Builder newBuilder(ServingConfig prototype)
```

**Parameter**

**Name**

**Description**

prototype

`[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)`  

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

### parseDelimitedFrom(InputStream input)

```
public static ServingConfig parseDelimitedFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

input

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static ServingConfig parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseFrom(byte\[\] data)

```
public static ServingConfig parseFrom(byte[] data)
```

**Parameter**

**Name**

**Description**

data

`byte[]`  

**Returns**

**Type**

**Description**

[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parseFrom(byte\[\] data, ExtensionRegistryLite extensionRegistry)

```
public static ServingConfig parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
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

[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parseFrom(ByteString data)

```
public static ServingConfig parseFrom(ByteString data)
```

**Parameter**

**Name**

**Description**

data

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

**Returns**

**Type**

**Description**

[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)

```
public static ServingConfig parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
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

[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parseFrom(CodedInputStream input)

```
public static ServingConfig parseFrom(CodedInputStream input)
```

**Parameter**

**Name**

**Description**

input

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

**Returns**

**Type**

**Description**

[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public static ServingConfig parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseFrom(InputStream input)

```
public static ServingConfig parseFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

input

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static ServingConfig parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseFrom(ByteBuffer data)

```
public static ServingConfig parseFrom(ByteBuffer data)
```

**Parameter**

**Name**

**Description**

data

`[ByteBuffer](https://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html)`  

**Returns**

**Type**

**Description**

[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)

```
public static ServingConfig parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
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

[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parser()

```
public static Parser<ServingConfig> parser()
```

**Returns**

**Type**

**Description**

[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)\>

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

### getBoostControlIds(int index)

```
public String getBoostControlIds(int index)
```

Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost\_control\_ids and SearchRequest.boost\_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string boost_control_ids = 7;`

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

The boostControlIds at the given index.

### getBoostControlIdsBytes(int index)

```
public ByteString getBoostControlIdsBytes(int index)
```

Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost\_control\_ids and SearchRequest.boost\_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string boost_control_ids = 7;`

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

The bytes of the boostControlIds at the given index.

### getBoostControlIdsCount()

```
public int getBoostControlIdsCount()
```

Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost\_control\_ids and SearchRequest.boost\_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string boost_control_ids = 7;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of boostControlIds.

### getBoostControlIdsList()

```
public ProtocolStringList getBoostControlIdsList()
```

Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost\_control\_ids and SearchRequest.boost\_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string boost_control_ids = 7;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the boostControlIds.

### getDefaultInstanceForType()

```
public ServingConfig getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)

### getDisplayName()

```
public String getDisplayName()
```

Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

`string display_name = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The displayName.

### getDisplayNameBytes()

```
public ByteString getDisplayNameBytes()
```

Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

`string display_name = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for displayName.

### getDiversityLevel()

```
public String getDiversityLevel()
```

How much diversity to use in recommendation model results e.g. 'medium-diversity' or 'high-diversity'. Currently supported values:

-   'no-diversity'
-   'low-diversity'
-   'medium-diversity'
-   'high-diversity'
-   'auto-diversity' If not specified, we choose default based on recommendation model type. Default value: 'no-diversity'. Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string diversity_level = 8;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The diversityLevel.

### getDiversityLevelBytes()

```
public ByteString getDiversityLevelBytes()
```

How much diversity to use in recommendation model results e.g. 'medium-diversity' or 'high-diversity'. Currently supported values:

-   'no-diversity'
-   'low-diversity'
-   'medium-diversity'
-   'high-diversity'
-   'auto-diversity' If not specified, we choose default based on recommendation model type. Default value: 'no-diversity'. Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string diversity_level = 8;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for diversityLevel.

### getDoNotAssociateControlIds(int index)

```
public String getDoNotAssociateControlIds(int index)
```

Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string do_not_associate_control_ids = 13;`

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

The doNotAssociateControlIds at the given index.

### getDoNotAssociateControlIdsBytes(int index)

```
public ByteString getDoNotAssociateControlIdsBytes(int index)
```

Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string do_not_associate_control_ids = 13;`

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

The bytes of the doNotAssociateControlIds at the given index.

### getDoNotAssociateControlIdsCount()

```
public int getDoNotAssociateControlIdsCount()
```

Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string do_not_associate_control_ids = 13;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of doNotAssociateControlIds.

### getDoNotAssociateControlIdsList()

```
public ProtocolStringList getDoNotAssociateControlIdsList()
```

Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string do_not_associate_control_ids = 13;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the doNotAssociateControlIds.

### getDynamicFacetSpec()

```
public SearchRequest.DynamicFacetSpec getDynamicFacetSpec()
```

The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 6;`

**Returns**

**Type**

**Description**

[SearchRequest.DynamicFacetSpec](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec)

The dynamicFacetSpec.

### getDynamicFacetSpecOrBuilder()

```
public SearchRequest.DynamicFacetSpecOrBuilder getDynamicFacetSpecOrBuilder()
```

The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 6;`

**Returns**

**Type**

**Description**

[SearchRequest.DynamicFacetSpecOrBuilder](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpecOrBuilder)

### getEnableCategoryFilterLevel()

```
public String getEnableCategoryFilterLevel()
```

Whether to add additional category filters on the 'similar-items' model. If not specified, we enable it by default. Allowed values are:

-   'no-category-match': No additional filtering of original results from the model and the customer's filters.
-   'relaxed-category-match': Only keep results with categories that match at least one item categories in the PredictRequests's context item.
    -   If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string enable_category_filter_level = 16;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The enableCategoryFilterLevel.

### getEnableCategoryFilterLevelBytes()

```
public ByteString getEnableCategoryFilterLevelBytes()
```

Whether to add additional category filters on the 'similar-items' model. If not specified, we enable it by default. Allowed values are:

-   'no-category-match': No additional filtering of original results from the model and the customer's filters.
-   'relaxed-category-match': Only keep results with categories that match at least one item categories in the PredictRequests's context item.
    -   If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string enable_category_filter_level = 16;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for enableCategoryFilterLevel.

### getFacetControlIds(int index)

```
public String getFacetControlIds(int index)
```

Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string facet_control_ids = 5;`

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

The facetControlIds at the given index.

### getFacetControlIdsBytes(int index)

```
public ByteString getFacetControlIdsBytes(int index)
```

Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string facet_control_ids = 5;`

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

The bytes of the facetControlIds at the given index.

### getFacetControlIdsCount()

```
public int getFacetControlIdsCount()
```

Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string facet_control_ids = 5;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of facetControlIds.

### getFacetControlIdsList()

```
public ProtocolStringList getFacetControlIdsList()
```

Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string facet_control_ids = 5;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the facetControlIds.

### getFilterControlIds(int index)

```
public String getFilterControlIds(int index)
```

Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string filter_control_ids = 9;`

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

The filterControlIds at the given index.

### getFilterControlIdsBytes(int index)

```
public ByteString getFilterControlIdsBytes(int index)
```

Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string filter_control_ids = 9;`

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

The bytes of the filterControlIds at the given index.

### getFilterControlIdsCount()

```
public int getFilterControlIdsCount()
```

Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string filter_control_ids = 9;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of filterControlIds.

### getFilterControlIdsList()

```
public ProtocolStringList getFilterControlIdsList()
```

Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string filter_control_ids = 9;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the filterControlIds.

### getIgnoreControlIds(int index)

```
public String getIgnoreControlIds(int index)
```

Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string ignore_control_ids = 15;`

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

The ignoreControlIds at the given index.

### getIgnoreControlIdsBytes(int index)

```
public ByteString getIgnoreControlIdsBytes(int index)
```

Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string ignore_control_ids = 15;`

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

The bytes of the ignoreControlIds at the given index.

### getIgnoreControlIdsCount()

```
public int getIgnoreControlIdsCount()
```

Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string ignore_control_ids = 15;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of ignoreControlIds.

### getIgnoreControlIdsList()

```
public ProtocolStringList getIgnoreControlIdsList()
```

Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string ignore_control_ids = 15;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the ignoreControlIds.

### getModelId()

```
public String getModelId()
```

The id of the model to use at serving time. Currently only RecommendationModels are supported: [https://cloud.google.com/retail/recommendations-ai/docs/create-models](https://cloud.google.com/retail/recommendations-ai/docs/create-models) Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string model_id = 3;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The modelId.

### getModelIdBytes()

```
public ByteString getModelIdBytes()
```

The id of the model to use at serving time. Currently only RecommendationModels are supported: [https://cloud.google.com/retail/recommendations-ai/docs/create-models](https://cloud.google.com/retail/recommendations-ai/docs/create-models) Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string model_id = 3;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for modelId.

### getName()

```
public String getName()
```

Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/servingConfig/*`

`string name = 1 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The name.

### getNameBytes()

```
public ByteString getNameBytes()
```

Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/servingConfig/*`

`string name = 1 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for name.

### getOnewaySynonymsControlIds(int index)

```
public String getOnewaySynonymsControlIds(int index)
```

Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string oneway_synonyms_control_ids = 12;`

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

The onewaySynonymsControlIds at the given index.

### getOnewaySynonymsControlIdsBytes(int index)

```
public ByteString getOnewaySynonymsControlIdsBytes(int index)
```

Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string oneway_synonyms_control_ids = 12;`

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

The bytes of the onewaySynonymsControlIds at the given index.

### getOnewaySynonymsControlIdsCount()

```
public int getOnewaySynonymsControlIdsCount()
```

Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string oneway_synonyms_control_ids = 12;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of onewaySynonymsControlIds.

### getOnewaySynonymsControlIdsList()

```
public ProtocolStringList getOnewaySynonymsControlIdsList()
```

Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string oneway_synonyms_control_ids = 12;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the onewaySynonymsControlIds.

### getParserForType()

```
public Parser<ServingConfig> getParserForType()
```

**Returns**

**Type**

**Description**

[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[ServingConfig](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig)\>

**Overrides**

[GeneratedMessageV3.getParserForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getParserForType__)

### getPriceRerankingLevel()

```
public String getPriceRerankingLevel()
```

How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are:

-   'no-price-reranking'
-   'low-price-raranking'
-   'medium-price-reranking'
-   'high-price-reranking' If not specified, we choose default based on model type. Default value: 'no-price-reranking'. Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string price_reranking_level = 4;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The priceRerankingLevel.

### getPriceRerankingLevelBytes()

```
public ByteString getPriceRerankingLevelBytes()
```

How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are:

-   'no-price-reranking'
-   'low-price-raranking'
-   'medium-price-reranking'
-   'high-price-reranking' If not specified, we choose default based on model type. Default value: 'no-price-reranking'. Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string price_reranking_level = 4;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for priceRerankingLevel.

### getRedirectControlIds(int index)

```
public String getRedirectControlIds(int index)
```

Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string redirect_control_ids = 10;`

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

The redirectControlIds at the given index.

### getRedirectControlIdsBytes(int index)

```
public ByteString getRedirectControlIdsBytes(int index)
```

Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string redirect_control_ids = 10;`

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

The bytes of the redirectControlIds at the given index.

### getRedirectControlIdsCount()

```
public int getRedirectControlIdsCount()
```

Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string redirect_control_ids = 10;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of redirectControlIds.

### getRedirectControlIdsList()

```
public ProtocolStringList getRedirectControlIdsList()
```

Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string redirect_control_ids = 10;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the redirectControlIds.

### getReplacementControlIds(int index)

```
public String getReplacementControlIds(int index)
```

Condition replacement specifications.

-   Applied according to the order in the list.
-   A previously replaced term can not be re-replaced.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string replacement_control_ids = 14;`

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

The replacementControlIds at the given index.

### getReplacementControlIdsBytes(int index)

```
public ByteString getReplacementControlIdsBytes(int index)
```

Condition replacement specifications.

-   Applied according to the order in the list.
-   A previously replaced term can not be re-replaced.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string replacement_control_ids = 14;`

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

The bytes of the replacementControlIds at the given index.

### getReplacementControlIdsCount()

```
public int getReplacementControlIdsCount()
```

Condition replacement specifications.

-   Applied according to the order in the list.
-   A previously replaced term can not be re-replaced.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string replacement_control_ids = 14;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of replacementControlIds.

### getReplacementControlIdsList()

```
public ProtocolStringList getReplacementControlIdsList()
```

Condition replacement specifications.

-   Applied according to the order in the list.
-   A previously replaced term can not be re-replaced.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string replacement_control_ids = 14;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the replacementControlIds.

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

### getSolutionTypes(int index)

```
public SolutionType getSolutionTypes(int index)
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[SolutionType](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.SolutionType)

The solutionTypes at the given index.

### getSolutionTypesCount()

```
public int getSolutionTypesCount()
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of solutionTypes.

### getSolutionTypesList()

```
public List<SolutionType> getSolutionTypesList()
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SolutionType](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.SolutionType)\>

A list containing the solutionTypes.

### getSolutionTypesValue(int index)

```
public int getSolutionTypesValue(int index)
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The enum numeric value on the wire of solutionTypes at the given index.

### getSolutionTypesValueList()

```
public List<Integer> getSolutionTypesValueList()
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)\>

A list containing the enum numeric values on the wire for solutionTypes.

### getTwowaySynonymsControlIds(int index)

```
public String getTwowaySynonymsControlIds(int index)
```

Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string twoway_synonyms_control_ids = 18;`

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

The twowaySynonymsControlIds at the given index.

### getTwowaySynonymsControlIdsBytes(int index)

```
public ByteString getTwowaySynonymsControlIdsBytes(int index)
```

Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string twoway_synonyms_control_ids = 18;`

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

The bytes of the twowaySynonymsControlIds at the given index.

### getTwowaySynonymsControlIdsCount()

```
public int getTwowaySynonymsControlIdsCount()
```

Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string twoway_synonyms_control_ids = 18;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of twowaySynonymsControlIds.

### getTwowaySynonymsControlIdsList()

```
public ProtocolStringList getTwowaySynonymsControlIdsList()
```

Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string twoway_synonyms_control_ids = 18;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the twowaySynonymsControlIds.

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

### hasDynamicFacetSpec()

```
public boolean hasDynamicFacetSpec()
```

The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 6;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the dynamicFacetSpec field is set.

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
public ServingConfig.Builder newBuilderForType()
```

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

### newBuilderForType(GeneratedMessageV3.BuilderParent parent)

```
protected ServingConfig.Builder newBuilderForType(GeneratedMessageV3.BuilderParent parent)
```

**Parameter**

**Name**

**Description**

parent

`[BuilderParent](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.BuilderParent.html)`  

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

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
public ServingConfig.Builder toBuilder()
```

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.8.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

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
