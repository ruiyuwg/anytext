-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Operation (2.24.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.7 2.4.1 2.3.0 2.2.0 2.1.5

```
public final class Operation extends GeneratedMessageV3 implements OperationOrBuilder
```

Contains an operation for a resource loosely based on the JSON-PATCH format with support for:

-   Custom filters for describing partial array patch.
-   Extended path values for describing nested arrays.
-   Custom fields for describing the resource for which the operation is being described.
-   Allows extension to custom operations not natively supported by RFC6902. See [https://tools.ietf.org/html/rfc6902](https://tools.ietf.org/html/rfc6902) for details on the original RFC.

Protobuf type `google.cloud.recommender.v1.Operation`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html) \> [AbstractMessage](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html) \> [GeneratedMessageV3](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html) \> Operation

## Implements

[OperationOrBuilder](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.OperationOrBuilder)

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

### ACTION\_FIELD\_NUMBER

```
public static final int ACTION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### PATH\_FIELD\_NUMBER

```
public static final int PATH_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### PATH\_FILTERS\_FIELD\_NUMBER

```
public static final int PATH_FILTERS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### PATH\_VALUE\_MATCHERS\_FIELD\_NUMBER

```
public static final int PATH_VALUE_MATCHERS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### RESOURCE\_FIELD\_NUMBER

```
public static final int RESOURCE_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### RESOURCE\_TYPE\_FIELD\_NUMBER

```
public static final int RESOURCE_TYPE_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### SOURCE\_PATH\_FIELD\_NUMBER

```
public static final int SOURCE_PATH_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### SOURCE\_RESOURCE\_FIELD\_NUMBER

```
public static final int SOURCE_RESOURCE_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### VALUE\_FIELD\_NUMBER

```
public static final int VALUE_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### VALUE\_MATCHER\_FIELD\_NUMBER

```
public static final int VALUE_MATCHER_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

## Static Methods

### getDefaultInstance()

```
public static Operation getDefaultInstance()
```

**Returns**

**Type**

**Description**

`[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)`

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
public static Operation.Builder newBuilder()
```

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation.Builder)`

### newBuilder(Operation prototype)

```
public static Operation.Builder newBuilder(Operation prototype)
```

**Parameter**

**Name**

**Description**

`prototype`

`[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation.Builder)`

### parseDelimitedFrom(InputStream input)

```
public static Operation parseDelimitedFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static Operation parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(byte\[\] data)

```
public static Operation parseFrom(byte[] data)
```

**Parameter**

**Name**

**Description**

`data`

`byte[]`  

**Returns**

**Type**

**Description**

`[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(byte\[\] data, ExtensionRegistryLite extensionRegistry)

```
public static Operation parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
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

`[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data)

```
public static Operation parseFrom(ByteString data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

**Returns**

**Type**

**Description**

`[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)

```
public static Operation parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
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

`[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(CodedInputStream input)

```
public static Operation parseFrom(CodedInputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

**Returns**

**Type**

**Description**

`[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public static Operation parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input)

```
public static Operation parseFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static Operation parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(ByteBuffer data)

```
public static Operation parseFrom(ByteBuffer data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteBuffer](https://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html)`  

**Returns**

**Type**

**Description**

`[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)

```
public static Operation parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
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

`[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parser()

```
public static Parser<Operation> parser()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)>`

## Methods

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

`map<string, .google.cloud.recommender.v1.ValueMatcher> path_value_matchers = 11;`

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

### getAction()

```
public String getAction()
```

Type of this operation. Contains one of 'add', 'remove', 'replace', 'move', 'copy', 'test' and custom operations. This field is case-insensitive and always populated.

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

Type of this operation. Contains one of 'add', 'remove', 'replace', 'move', 'copy', 'test' and custom operations. This field is case-insensitive and always populated.

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

`[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)`

### getParserForType()

```
public Parser<Operation> getParserForType()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[Operation](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation)>`

**Overrides**

[GeneratedMessageV3.getParserForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getParserForType__)

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

### getPathFilters()

```
public Map<String,Value> getPathFilters()
```

Use [#getPathFiltersMap()](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation#com_google_cloud_recommender_v1_Operation_getPathFiltersMap__) instead.

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

`[Operation.PathValueCase](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation.PathValueCase)`

### getPathValueMatchers()

```
public Map<String,ValueMatcher> getPathValueMatchers()
```

Use [#getPathValueMatchersMap()](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation#com_google_cloud_recommender_v1_Operation_getPathValueMatchersMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.ValueMatcher)>`

### getPathValueMatchersCount()

```
public int getPathValueMatchersCount()
```

Similar to path\_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path\_filters. When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.cloud.recommender.v1.ValueMatcher> path_value_matchers = 11;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getPathValueMatchersMap()

```
public Map<String,ValueMatcher> getPathValueMatchersMap()
```

Similar to path\_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path\_filters. When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.cloud.recommender.v1.ValueMatcher> path_value_matchers = 11;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.ValueMatcher)>`

### getPathValueMatchersOrDefault(String key, ValueMatcher defaultValue)

```
public ValueMatcher getPathValueMatchersOrDefault(String key, ValueMatcher defaultValue)
```

Similar to path\_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path\_filters. When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.cloud.recommender.v1.ValueMatcher> path_value_matchers = 11;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.ValueMatcher)`  

**Returns**

**Type**

**Description**

`[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.ValueMatcher)`

### getPathValueMatchersOrThrow(String key)

```
public ValueMatcher getPathValueMatchersOrThrow(String key)
```

Similar to path\_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path\_filters. When both path\_filters and path\_value\_matchers are set, an implicit AND must be performed.

`map<string, .google.cloud.recommender.v1.ValueMatcher> path_value_matchers = 11;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.ValueMatcher)`

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

### getValueMatcher()

```
public ValueMatcher getValueMatcher()
```

Can be set for action 'test' for advanced matching for the value of 'path' field. Either this or `value` will be set for 'test' operation.

`.google.cloud.recommender.v1.ValueMatcher value_matcher = 10;`

**Returns**

**Type**

**Description**

`[ValueMatcher](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.ValueMatcher)`

The valueMatcher.

### getValueMatcherOrBuilder()

```
public ValueMatcherOrBuilder getValueMatcherOrBuilder()
```

Can be set for action 'test' for advanced matching for the value of 'path' field. Either this or `value` will be set for 'test' operation.

`.google.cloud.recommender.v1.ValueMatcher value_matcher = 10;`

**Returns**

**Type**

**Description**

`[ValueMatcherOrBuilder](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.ValueMatcherOrBuilder)`

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

`.google.cloud.recommender.v1.ValueMatcher value_matcher = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the valueMatcher field is set.

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
public Operation.Builder newBuilderForType()
```

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation.Builder)`

### newBuilderForType(GeneratedMessageV3.BuilderParent parent)

```
protected Operation.Builder newBuilderForType(GeneratedMessageV3.BuilderParent parent)
```

**Parameter**

**Name**

**Description**

`parent`

`[BuilderParent](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.BuilderParent.html)`  

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation.Builder)`

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
public Operation.Builder toBuilder()
```

**Returns**

**Type**

**Description**

`[Operation.Builder](/java/docs/reference/google-cloud-recommender/2.24.0/com.google.cloud.recommender.v1.Operation.Builder)`

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
