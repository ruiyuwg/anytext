-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class AnnotateImageResponse (3.47.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public final class AnnotateImageResponse extends GeneratedMessageV3 implements AnnotateImageResponseOrBuilder
```

Response to an image annotation request.

Protobuf type `google.cloud.vision.v1p1beta1.AnnotateImageResponse`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html) \> [AbstractMessage](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html) \> [GeneratedMessageV3](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html) \> AnnotateImageResponse

## Implements

[AnnotateImageResponseOrBuilder](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponseOrBuilder)

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

### CROP\_HINTS\_ANNOTATION\_FIELD\_NUMBER

```
public static final int CROP_HINTS_ANNOTATION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### ERROR\_FIELD\_NUMBER

```
public static final int ERROR_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### FACE\_ANNOTATIONS\_FIELD\_NUMBER

```
public static final int FACE_ANNOTATIONS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### FULL\_TEXT\_ANNOTATION\_FIELD\_NUMBER

```
public static final int FULL_TEXT_ANNOTATION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### IMAGE\_PROPERTIES\_ANNOTATION\_FIELD\_NUMBER

```
public static final int IMAGE_PROPERTIES_ANNOTATION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### LABEL\_ANNOTATIONS\_FIELD\_NUMBER

```
public static final int LABEL_ANNOTATIONS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### LANDMARK\_ANNOTATIONS\_FIELD\_NUMBER

```
public static final int LANDMARK_ANNOTATIONS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### LOGO\_ANNOTATIONS\_FIELD\_NUMBER

```
public static final int LOGO_ANNOTATIONS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### SAFE\_SEARCH\_ANNOTATION\_FIELD\_NUMBER

```
public static final int SAFE_SEARCH_ANNOTATION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### TEXT\_ANNOTATIONS\_FIELD\_NUMBER

```
public static final int TEXT_ANNOTATIONS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### WEB\_DETECTION\_FIELD\_NUMBER

```
public static final int WEB_DETECTION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

## Static Methods

### getDefaultInstance()

```
public static AnnotateImageResponse getDefaultInstance()
```

**Returns**

**Type**

**Description**

`[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)`

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
public static AnnotateImageResponse.Builder newBuilder()
```

**Returns**

**Type**

**Description**

`[AnnotateImageResponse.Builder](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse.Builder)`

### newBuilder(AnnotateImageResponse prototype)

```
public static AnnotateImageResponse.Builder newBuilder(AnnotateImageResponse prototype)
```

**Parameter**

**Name**

**Description**

`prototype`

`[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)`  

**Returns**

**Type**

**Description**

`[AnnotateImageResponse.Builder](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse.Builder)`

### parseDelimitedFrom(InputStream input)

```
public static AnnotateImageResponse parseDelimitedFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static AnnotateImageResponse parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

`[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(byte\[\] data)

```
public static AnnotateImageResponse parseFrom(byte[] data)
```

**Parameter**

**Name**

**Description**

`data`

`byte[]`  

**Returns**

**Type**

**Description**

`[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(byte\[\] data, ExtensionRegistryLite extensionRegistry)

```
public static AnnotateImageResponse parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
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

`[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data)

```
public static AnnotateImageResponse parseFrom(ByteString data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

**Returns**

**Type**

**Description**

`[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)

```
public static AnnotateImageResponse parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
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

`[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(CodedInputStream input)

```
public static AnnotateImageResponse parseFrom(CodedInputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

**Returns**

**Type**

**Description**

`[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public static AnnotateImageResponse parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input)

```
public static AnnotateImageResponse parseFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static AnnotateImageResponse parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

`[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(ByteBuffer data)

```
public static AnnotateImageResponse parseFrom(ByteBuffer data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteBuffer](https://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html)`  

**Returns**

**Type**

**Description**

`[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)

```
public static AnnotateImageResponse parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
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

`[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parser()

```
public static Parser<AnnotateImageResponse> parser()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)>`

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

### getCropHintsAnnotation()

```
public CropHintsAnnotation getCropHintsAnnotation()
```

If present, crop hints have completed successfully.

`.google.cloud.vision.v1p1beta1.CropHintsAnnotation crop_hints_annotation = 11;`

**Returns**

**Type**

**Description**

`[CropHintsAnnotation](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.CropHintsAnnotation)`

The cropHintsAnnotation.

### getCropHintsAnnotationOrBuilder()

```
public CropHintsAnnotationOrBuilder getCropHintsAnnotationOrBuilder()
```

If present, crop hints have completed successfully.

`.google.cloud.vision.v1p1beta1.CropHintsAnnotation crop_hints_annotation = 11;`

**Returns**

**Type**

**Description**

`[CropHintsAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.CropHintsAnnotationOrBuilder)`

### getDefaultInstanceForType()

```
public AnnotateImageResponse getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)`

### getError()

```
public Status getError()
```

If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.

`.google.rpc.Status error = 9;`

**Returns**

**Type**

**Description**

`com.google.rpc.Status`

The error.

### getErrorOrBuilder()

```
public StatusOrBuilder getErrorOrBuilder()
```

If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.

`.google.rpc.Status error = 9;`

**Returns**

**Type**

**Description**

`com.google.rpc.StatusOrBuilder`

### getFaceAnnotations(int index)

```
public FaceAnnotation getFaceAnnotations(int index)
```

If present, face detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.FaceAnnotation face_annotations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[FaceAnnotation](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.FaceAnnotation)`

### getFaceAnnotationsCount()

```
public int getFaceAnnotationsCount()
```

If present, face detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.FaceAnnotation face_annotations = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getFaceAnnotationsList()

```
public List<FaceAnnotation> getFaceAnnotationsList()
```

If present, face detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.FaceAnnotation face_annotations = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[FaceAnnotation](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.FaceAnnotation)>`

### getFaceAnnotationsOrBuilder(int index)

```
public FaceAnnotationOrBuilder getFaceAnnotationsOrBuilder(int index)
```

If present, face detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.FaceAnnotation face_annotations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[FaceAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.FaceAnnotationOrBuilder)`

### getFaceAnnotationsOrBuilderList()

```
public List<? extends FaceAnnotationOrBuilder> getFaceAnnotationsOrBuilderList()
```

If present, face detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.FaceAnnotation face_annotations = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p1beta1.FaceAnnotationOrBuilder>`

### getFullTextAnnotation()

```
public TextAnnotation getFullTextAnnotation()
```

If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.

`.google.cloud.vision.v1p1beta1.TextAnnotation full_text_annotation = 12;`

**Returns**

**Type**

**Description**

`[TextAnnotation](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.TextAnnotation)`

The fullTextAnnotation.

### getFullTextAnnotationOrBuilder()

```
public TextAnnotationOrBuilder getFullTextAnnotationOrBuilder()
```

If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.

`.google.cloud.vision.v1p1beta1.TextAnnotation full_text_annotation = 12;`

**Returns**

**Type**

**Description**

`[TextAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.TextAnnotationOrBuilder)`

### getImagePropertiesAnnotation()

```
public ImageProperties getImagePropertiesAnnotation()
```

If present, image properties were extracted successfully.

`.google.cloud.vision.v1p1beta1.ImageProperties image_properties_annotation = 8;`

**Returns**

**Type**

**Description**

`[ImageProperties](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.ImageProperties)`

The imagePropertiesAnnotation.

### getImagePropertiesAnnotationOrBuilder()

```
public ImagePropertiesOrBuilder getImagePropertiesAnnotationOrBuilder()
```

If present, image properties were extracted successfully.

`.google.cloud.vision.v1p1beta1.ImageProperties image_properties_annotation = 8;`

**Returns**

**Type**

**Description**

`[ImagePropertiesOrBuilder](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.ImagePropertiesOrBuilder)`

### getLabelAnnotations(int index)

```
public EntityAnnotation getLabelAnnotations(int index)
```

If present, label detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation label_annotations = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityAnnotation](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.EntityAnnotation)`

### getLabelAnnotationsCount()

```
public int getLabelAnnotationsCount()
```

If present, label detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation label_annotations = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelAnnotationsList()

```
public List<EntityAnnotation> getLabelAnnotationsList()
```

If present, label detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation label_annotations = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[EntityAnnotation](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.EntityAnnotation)>`

### getLabelAnnotationsOrBuilder(int index)

```
public EntityAnnotationOrBuilder getLabelAnnotationsOrBuilder(int index)
```

If present, label detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation label_annotations = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.EntityAnnotationOrBuilder)`

### getLabelAnnotationsOrBuilderList()

```
public List<? extends EntityAnnotationOrBuilder> getLabelAnnotationsOrBuilderList()
```

If present, label detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation label_annotations = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p1beta1.EntityAnnotationOrBuilder>`

### getLandmarkAnnotations(int index)

```
public EntityAnnotation getLandmarkAnnotations(int index)
```

If present, landmark detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation landmark_annotations = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityAnnotation](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.EntityAnnotation)`

### getLandmarkAnnotationsCount()

```
public int getLandmarkAnnotationsCount()
```

If present, landmark detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation landmark_annotations = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLandmarkAnnotationsList()

```
public List<EntityAnnotation> getLandmarkAnnotationsList()
```

If present, landmark detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation landmark_annotations = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[EntityAnnotation](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.EntityAnnotation)>`

### getLandmarkAnnotationsOrBuilder(int index)

```
public EntityAnnotationOrBuilder getLandmarkAnnotationsOrBuilder(int index)
```

If present, landmark detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation landmark_annotations = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.EntityAnnotationOrBuilder)`

### getLandmarkAnnotationsOrBuilderList()

```
public List<? extends EntityAnnotationOrBuilder> getLandmarkAnnotationsOrBuilderList()
```

If present, landmark detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation landmark_annotations = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p1beta1.EntityAnnotationOrBuilder>`

### getLogoAnnotations(int index)

```
public EntityAnnotation getLogoAnnotations(int index)
```

If present, logo detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation logo_annotations = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityAnnotation](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.EntityAnnotation)`

### getLogoAnnotationsCount()

```
public int getLogoAnnotationsCount()
```

If present, logo detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation logo_annotations = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLogoAnnotationsList()

```
public List<EntityAnnotation> getLogoAnnotationsList()
```

If present, logo detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation logo_annotations = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[EntityAnnotation](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.EntityAnnotation)>`

### getLogoAnnotationsOrBuilder(int index)

```
public EntityAnnotationOrBuilder getLogoAnnotationsOrBuilder(int index)
```

If present, logo detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation logo_annotations = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.EntityAnnotationOrBuilder)`

### getLogoAnnotationsOrBuilderList()

```
public List<? extends EntityAnnotationOrBuilder> getLogoAnnotationsOrBuilderList()
```

If present, logo detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation logo_annotations = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p1beta1.EntityAnnotationOrBuilder>`

### getParserForType()

```
public Parser<AnnotateImageResponse> getParserForType()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[AnnotateImageResponse](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse)>`

**Overrides**

[GeneratedMessageV3.getParserForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getParserForType__)

### getSafeSearchAnnotation()

```
public SafeSearchAnnotation getSafeSearchAnnotation()
```

If present, safe-search annotation has completed successfully.

`.google.cloud.vision.v1p1beta1.SafeSearchAnnotation safe_search_annotation = 6;`

**Returns**

**Type**

**Description**

`[SafeSearchAnnotation](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.SafeSearchAnnotation)`

The safeSearchAnnotation.

### getSafeSearchAnnotationOrBuilder()

```
public SafeSearchAnnotationOrBuilder getSafeSearchAnnotationOrBuilder()
```

If present, safe-search annotation has completed successfully.

`.google.cloud.vision.v1p1beta1.SafeSearchAnnotation safe_search_annotation = 6;`

**Returns**

**Type**

**Description**

`[SafeSearchAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.SafeSearchAnnotationOrBuilder)`

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

### getTextAnnotations(int index)

```
public EntityAnnotation getTextAnnotations(int index)
```

If present, text (OCR) detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation text_annotations = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityAnnotation](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.EntityAnnotation)`

### getTextAnnotationsCount()

```
public int getTextAnnotationsCount()
```

If present, text (OCR) detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation text_annotations = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getTextAnnotationsList()

```
public List<EntityAnnotation> getTextAnnotationsList()
```

If present, text (OCR) detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation text_annotations = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[EntityAnnotation](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.EntityAnnotation)>`

### getTextAnnotationsOrBuilder(int index)

```
public EntityAnnotationOrBuilder getTextAnnotationsOrBuilder(int index)
```

If present, text (OCR) detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation text_annotations = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EntityAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.EntityAnnotationOrBuilder)`

### getTextAnnotationsOrBuilderList()

```
public List<? extends EntityAnnotationOrBuilder> getTextAnnotationsOrBuilderList()
```

If present, text (OCR) detection has completed successfully.

`repeated .google.cloud.vision.v1p1beta1.EntityAnnotation text_annotations = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p1beta1.EntityAnnotationOrBuilder>`

### getWebDetection()

```
public WebDetection getWebDetection()
```

If present, web detection has completed successfully.

`.google.cloud.vision.v1p1beta1.WebDetection web_detection = 13;`

**Returns**

**Type**

**Description**

`[WebDetection](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.WebDetection)`

The webDetection.

### getWebDetectionOrBuilder()

```
public WebDetectionOrBuilder getWebDetectionOrBuilder()
```

If present, web detection has completed successfully.

`.google.cloud.vision.v1p1beta1.WebDetection web_detection = 13;`

**Returns**

**Type**

**Description**

`[WebDetectionOrBuilder](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.WebDetectionOrBuilder)`

### hasCropHintsAnnotation()

```
public boolean hasCropHintsAnnotation()
```

If present, crop hints have completed successfully.

`.google.cloud.vision.v1p1beta1.CropHintsAnnotation crop_hints_annotation = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the cropHintsAnnotation field is set.

### hasError()

```
public boolean hasError()
```

If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.

`.google.rpc.Status error = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the error field is set.

### hasFullTextAnnotation()

```
public boolean hasFullTextAnnotation()
```

If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.

`.google.cloud.vision.v1p1beta1.TextAnnotation full_text_annotation = 12;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the fullTextAnnotation field is set.

### hasImagePropertiesAnnotation()

```
public boolean hasImagePropertiesAnnotation()
```

If present, image properties were extracted successfully.

`.google.cloud.vision.v1p1beta1.ImageProperties image_properties_annotation = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the imagePropertiesAnnotation field is set.

### hasSafeSearchAnnotation()

```
public boolean hasSafeSearchAnnotation()
```

If present, safe-search annotation has completed successfully.

`.google.cloud.vision.v1p1beta1.SafeSearchAnnotation safe_search_annotation = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the safeSearchAnnotation field is set.

### hasWebDetection()

```
public boolean hasWebDetection()
```

If present, web detection has completed successfully.

`.google.cloud.vision.v1p1beta1.WebDetection web_detection = 13;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the webDetection field is set.

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
public AnnotateImageResponse.Builder newBuilderForType()
```

**Returns**

**Type**

**Description**

`[AnnotateImageResponse.Builder](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse.Builder)`

### newBuilderForType(GeneratedMessageV3.BuilderParent parent)

```
protected AnnotateImageResponse.Builder newBuilderForType(GeneratedMessageV3.BuilderParent parent)
```

**Parameter**

**Name**

**Description**

`parent`

`[BuilderParent](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.BuilderParent.html)`  

**Returns**

**Type**

**Description**

`[AnnotateImageResponse.Builder](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse.Builder)`

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
public AnnotateImageResponse.Builder toBuilder()
```

**Returns**

**Type**

**Description**

`[AnnotateImageResponse.Builder](/java/docs/reference/google-cloud-vision/3.47.0/com.google.cloud.vision.v1p1beta1.AnnotateImageResponse.Builder)`

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
