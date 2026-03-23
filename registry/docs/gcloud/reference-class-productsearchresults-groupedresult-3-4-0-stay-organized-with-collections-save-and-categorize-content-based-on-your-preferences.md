-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ProductSearchResults.GroupedResult (3.4.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public static final class ProductSearchResults.GroupedResult extends GeneratedMessageV3 implements ProductSearchResults.GroupedResultOrBuilder
```

Information about the products similar to a single product in a query image.

Protobuf type `google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html) \> [AbstractMessage](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html) \> [GeneratedMessageV3](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html) \> ProductSearchResults.GroupedResult

## Implements

[ProductSearchResults.GroupedResultOrBuilder](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResultOrBuilder)

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

### BOUNDING\_POLY\_FIELD\_NUMBER

```
public static final int BOUNDING_POLY_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### OBJECT\_ANNOTATIONS\_FIELD\_NUMBER

```
public static final int OBJECT_ANNOTATIONS_FIELD_NUMBER
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

## Static Methods

### getDefaultInstance()

```
public static ProductSearchResults.GroupedResult getDefaultInstance()
```

**Returns**

**Type**

**Description**

[ProductSearchResults.GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)

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
public static ProductSearchResults.GroupedResult.Builder newBuilder()
```

**Returns**

**Type**

**Description**

[ProductSearchResults.GroupedResult.Builder](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult.Builder)

### newBuilder(ProductSearchResults.GroupedResult prototype)

```
public static ProductSearchResults.GroupedResult.Builder newBuilder(ProductSearchResults.GroupedResult prototype)
```

**Parameter**

**Name**

**Description**

prototype

`[ProductSearchResults.GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)`  

**Returns**

**Type**

**Description**

[ProductSearchResults.GroupedResult.Builder](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult.Builder)

### parseDelimitedFrom(InputStream input)

```
public static ProductSearchResults.GroupedResult parseDelimitedFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

input

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

[ProductSearchResults.GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static ProductSearchResults.GroupedResult parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

[ProductSearchResults.GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseFrom(byte\[\] data)

```
public static ProductSearchResults.GroupedResult parseFrom(byte[] data)
```

**Parameter**

**Name**

**Description**

data

`byte[]`  

**Returns**

**Type**

**Description**

[ProductSearchResults.GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parseFrom(byte\[\] data, ExtensionRegistryLite extensionRegistry)

```
public static ProductSearchResults.GroupedResult parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
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

[ProductSearchResults.GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parseFrom(ByteString data)

```
public static ProductSearchResults.GroupedResult parseFrom(ByteString data)
```

**Parameter**

**Name**

**Description**

data

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

**Returns**

**Type**

**Description**

[ProductSearchResults.GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)

```
public static ProductSearchResults.GroupedResult parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
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

[ProductSearchResults.GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parseFrom(CodedInputStream input)

```
public static ProductSearchResults.GroupedResult parseFrom(CodedInputStream input)
```

**Parameter**

**Name**

**Description**

input

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

**Returns**

**Type**

**Description**

[ProductSearchResults.GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public static ProductSearchResults.GroupedResult parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

[ProductSearchResults.GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseFrom(InputStream input)

```
public static ProductSearchResults.GroupedResult parseFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

input

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

[ProductSearchResults.GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static ProductSearchResults.GroupedResult parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

[ProductSearchResults.GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### parseFrom(ByteBuffer data)

```
public static ProductSearchResults.GroupedResult parseFrom(ByteBuffer data)
```

**Parameter**

**Name**

**Description**

data

`[ByteBuffer](https://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html)`  

**Returns**

**Type**

**Description**

[ProductSearchResults.GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)

```
public static ProductSearchResults.GroupedResult parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
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

[ProductSearchResults.GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)

**Exceptions**

**Type**

**Description**

[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)

### parser()

```
public static Parser<ProductSearchResults.GroupedResult> parser()
```

**Returns**

**Type**

**Description**

[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)\>

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

### getBoundingPoly()

```
public BoundingPoly getBoundingPoly()
```

The bounding polygon around the product detected in the query image.

`.google.cloud.vision.v1p4beta1.BoundingPoly bounding_poly = 1;`

**Returns**

**Type**

**Description**

[BoundingPoly](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.BoundingPoly)

The boundingPoly.

### getBoundingPolyOrBuilder()

```
public BoundingPolyOrBuilder getBoundingPolyOrBuilder()
```

The bounding polygon around the product detected in the query image.

`.google.cloud.vision.v1p4beta1.BoundingPoly bounding_poly = 1;`

**Returns**

**Type**

**Description**

[BoundingPolyOrBuilder](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.BoundingPolyOrBuilder)

### getDefaultInstanceForType()

```
public ProductSearchResults.GroupedResult getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

[ProductSearchResults.GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)

### getObjectAnnotations(int index)

```
public ProductSearchResults.ObjectAnnotation getObjectAnnotations(int index)
```

List of generic predictions for the object in the bounding box.

`repeated .google.cloud.vision.v1p4beta1.ProductSearchResults.ObjectAnnotation object_annotations = 3;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ProductSearchResults.ObjectAnnotation](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.ObjectAnnotation)

### getObjectAnnotationsCount()

```
public int getObjectAnnotationsCount()
```

List of generic predictions for the object in the bounding box.

`repeated .google.cloud.vision.v1p4beta1.ProductSearchResults.ObjectAnnotation object_annotations = 3;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getObjectAnnotationsList()

```
public List<ProductSearchResults.ObjectAnnotation> getObjectAnnotationsList()
```

List of generic predictions for the object in the bounding box.

`repeated .google.cloud.vision.v1p4beta1.ProductSearchResults.ObjectAnnotation object_annotations = 3;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ObjectAnnotation](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.ObjectAnnotation)\>

### getObjectAnnotationsOrBuilder(int index)

```
public ProductSearchResults.ObjectAnnotationOrBuilder getObjectAnnotationsOrBuilder(int index)
```

List of generic predictions for the object in the bounding box.

`repeated .google.cloud.vision.v1p4beta1.ProductSearchResults.ObjectAnnotation object_annotations = 3;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ProductSearchResults.ObjectAnnotationOrBuilder](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.ObjectAnnotationOrBuilder)

### getObjectAnnotationsOrBuilderList()

```
public List<? extends ProductSearchResults.ObjectAnnotationOrBuilder> getObjectAnnotationsOrBuilderList()
```

List of generic predictions for the object in the bounding box.

`repeated .google.cloud.vision.v1p4beta1.ProductSearchResults.ObjectAnnotation object_annotations = 3;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p4beta1.ProductSearchResults.ObjectAnnotationOrBuilder\>

### getParserForType()

```
public Parser<ProductSearchResults.GroupedResult> getParserForType()
```

**Returns**

**Type**

**Description**

[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[GroupedResult](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult)\>

**Overrides**

[GeneratedMessageV3.getParserForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getParserForType__)

### getResults(int index)

```
public ProductSearchResults.Result getResults(int index)
```

List of results, one for each product match.

`repeated .google.cloud.vision.v1p4beta1.ProductSearchResults.Result results = 2;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ProductSearchResults.Result](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.Result)

### getResultsCount()

```
public int getResultsCount()
```

List of results, one for each product match.

`repeated .google.cloud.vision.v1p4beta1.ProductSearchResults.Result results = 2;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getResultsList()

```
public List<ProductSearchResults.Result> getResultsList()
```

List of results, one for each product match.

`repeated .google.cloud.vision.v1p4beta1.ProductSearchResults.Result results = 2;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Result](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.Result)\>

### getResultsOrBuilder(int index)

```
public ProductSearchResults.ResultOrBuilder getResultsOrBuilder(int index)
```

List of results, one for each product match.

`repeated .google.cloud.vision.v1p4beta1.ProductSearchResults.Result results = 2;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ProductSearchResults.ResultOrBuilder](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.ResultOrBuilder)

### getResultsOrBuilderList()

```
public List<? extends ProductSearchResults.ResultOrBuilder> getResultsOrBuilderList()
```

List of results, one for each product match.

`repeated .google.cloud.vision.v1p4beta1.ProductSearchResults.Result results = 2;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p4beta1.ProductSearchResults.ResultOrBuilder\>

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

### hasBoundingPoly()

```
public boolean hasBoundingPoly()
```

The bounding polygon around the product detected in the query image.

`.google.cloud.vision.v1p4beta1.BoundingPoly bounding_poly = 1;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the boundingPoly field is set.

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
public ProductSearchResults.GroupedResult.Builder newBuilderForType()
```

**Returns**

**Type**

**Description**

[ProductSearchResults.GroupedResult.Builder](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult.Builder)

### newBuilderForType(GeneratedMessageV3.BuilderParent parent)

```
protected ProductSearchResults.GroupedResult.Builder newBuilderForType(GeneratedMessageV3.BuilderParent parent)
```

**Parameter**

**Name**

**Description**

parent

`[BuilderParent](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.BuilderParent.html)`  

**Returns**

**Type**

**Description**

[ProductSearchResults.GroupedResult.Builder](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult.Builder)

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
public ProductSearchResults.GroupedResult.Builder toBuilder()
```

**Returns**

**Type**

**Description**

[ProductSearchResults.GroupedResult.Builder](/java/docs/reference/google-cloud-vision/3.4.0/com.google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult.Builder)

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
