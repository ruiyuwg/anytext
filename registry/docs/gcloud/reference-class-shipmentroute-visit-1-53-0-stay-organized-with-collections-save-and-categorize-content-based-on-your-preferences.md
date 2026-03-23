-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ShipmentRoute.Visit (1.53.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.14 0.1.2

```
public static final class ShipmentRoute.Visit extends GeneratedMessageV3 implements ShipmentRoute.VisitOrBuilder
```

A visit performed during a route. This visit corresponds to a pickup or a delivery of a `Shipment`.

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.Visit`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html) \> [AbstractMessage](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html) \> [GeneratedMessageV3](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html) \> ShipmentRoute.Visit

## Implements

[ShipmentRoute.VisitOrBuilder](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.VisitOrBuilder)

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

### ARRIVAL\_LOADS\_FIELD\_NUMBER

```
public static final int ARRIVAL_LOADS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### DELAY\_BEFORE\_START\_FIELD\_NUMBER

```
public static final int DELAY_BEFORE_START_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### DEMANDS\_FIELD\_NUMBER

```
public static final int DEMANDS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### DETOUR\_FIELD\_NUMBER

```
public static final int DETOUR_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### IS\_PICKUP\_FIELD\_NUMBER

```
public static final int IS_PICKUP_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### LOAD\_DEMANDS\_FIELD\_NUMBER

```
public static final int LOAD_DEMANDS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### SHIPMENT\_INDEX\_FIELD\_NUMBER

```
public static final int SHIPMENT_INDEX_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### SHIPMENT\_LABEL\_FIELD\_NUMBER

```
public static final int SHIPMENT_LABEL_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### START\_TIME\_FIELD\_NUMBER

```
public static final int START_TIME_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### VISIT\_LABEL\_FIELD\_NUMBER

```
public static final int VISIT_LABEL_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### VISIT\_REQUEST\_INDEX\_FIELD\_NUMBER

```
public static final int VISIT_REQUEST_INDEX_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

## Static Methods

### getDefaultInstance()

```
public static ShipmentRoute.Visit getDefaultInstance()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

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
public static ShipmentRoute.Visit.Builder newBuilder()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### newBuilder(ShipmentRoute.Visit prototype)

```
public static ShipmentRoute.Visit.Builder newBuilder(ShipmentRoute.Visit prototype)
```

**Parameter**

**Name**

**Description**

`prototype`

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### parseDelimitedFrom(InputStream input)

```
public static ShipmentRoute.Visit parseDelimitedFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static ShipmentRoute.Visit parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(byte\[\] data)

```
public static ShipmentRoute.Visit parseFrom(byte[] data)
```

**Parameter**

**Name**

**Description**

`data`

`byte[]`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(byte\[\] data, ExtensionRegistryLite extensionRegistry)

```
public static ShipmentRoute.Visit parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
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

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data)

```
public static ShipmentRoute.Visit parseFrom(ByteString data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)

```
public static ShipmentRoute.Visit parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
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

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(CodedInputStream input)

```
public static ShipmentRoute.Visit parseFrom(CodedInputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public static ShipmentRoute.Visit parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input)

```
public static ShipmentRoute.Visit parseFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static ShipmentRoute.Visit parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(ByteBuffer data)

```
public static ShipmentRoute.Visit parseFrom(ByteBuffer data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteBuffer](https://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)

```
public static ShipmentRoute.Visit parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
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

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parser()

```
public static Parser<ShipmentRoute.Visit> parser()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)>`

## Methods

### containsLoadDemands(String key)

```
public boolean containsLoadDemands(String key)
```

Total visit load demand as the sum of the shipment and the visit request `load_demands`. The values are negative if the visit is a delivery. Demands are reported for the same types as the Transition.loads (see this field).

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 11;`

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

### getArrivalLoads(int index) (deprecated)

```
public CapacityQuantity getArrivalLoads(int index)
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.CapacityQuantity)`

### getArrivalLoadsCount() (deprecated)

```
public int getArrivalLoadsCount()
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getArrivalLoadsList() (deprecated)

```
public List<CapacityQuantity> getArrivalLoadsList()
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.CapacityQuantity)>`

### getArrivalLoadsOrBuilder(int index) (deprecated)

```
public CapacityQuantityOrBuilder getArrivalLoadsOrBuilder(int index)
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantityOrBuilder](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.CapacityQuantityOrBuilder)`

### getArrivalLoadsOrBuilderList() (deprecated)

```
public List<? extends CapacityQuantityOrBuilder> getArrivalLoadsOrBuilderList()
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.CapacityQuantityOrBuilder>`

### getDefaultInstanceForType()

```
public ShipmentRoute.Visit getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

### getDelayBeforeStart() (deprecated)

```
public ShipmentRoute.Delay getDelayBeforeStart()
```

**Deprecated.** _google.cloud.optimization.v1.ShipmentRoute.Visit.delay\_before\_start is deprecated. See google/cloud/optimization/v1/fleet\_routing.proto;l=1965_

Deprecated: Use ShipmentRoute.Transition.delay\_duration instead. Delay occurring before the visit starts.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_start = 10 [deprecated = true];`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Delay](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Delay)`

The delayBeforeStart.

### getDelayBeforeStartOrBuilder() (deprecated)

```
public ShipmentRoute.DelayOrBuilder getDelayBeforeStartOrBuilder()
```

Deprecated: Use ShipmentRoute.Transition.delay\_duration instead. Delay occurring before the visit starts.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_start = 10 [deprecated = true];`

**Returns**

**Type**

**Description**

`[ShipmentRoute.DelayOrBuilder](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.DelayOrBuilder)`

### getDemands(int index) (deprecated)

```
public CapacityQuantity getDemands(int index)
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.CapacityQuantity)`

### getDemandsCount() (deprecated)

```
public int getDemandsCount()
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getDemandsList() (deprecated)

```
public List<CapacityQuantity> getDemandsList()
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.CapacityQuantity)>`

### getDemandsOrBuilder(int index) (deprecated)

```
public CapacityQuantityOrBuilder getDemandsOrBuilder(int index)
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantityOrBuilder](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.CapacityQuantityOrBuilder)`

### getDemandsOrBuilderList() (deprecated)

```
public List<? extends CapacityQuantityOrBuilder> getDemandsOrBuilderList()
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.CapacityQuantityOrBuilder>`

### getDetour()

```
public Duration getDetour()
```

Extra detour time due to the shipments visited on the route before the visit and to the potential waiting time induced by time windows. If the visit is a delivery, the detour is computed from the corresponding pickup visit and is equal to: \` `` `start_time(delivery) - start_time(pickup)` ``

`` `-   (duration(pickup) + travel duration from the pickup location to the delivery location).` ``

`Otherwise, it is computed from the vehicle` start\_location `and is equal to:` `` `start_time - vehicle_start_time - travel duration from the vehicle's` start_location `to the visit.` `` \`

`.google.protobuf.Duration detour = 6;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The detour.

### getDetourOrBuilder()

```
public DurationOrBuilder getDetourOrBuilder()
```

Extra detour time due to the shipments visited on the route before the visit and to the potential waiting time induced by time windows. If the visit is a delivery, the detour is computed from the corresponding pickup visit and is equal to: \` `` `start_time(delivery) - start_time(pickup)` ``

`` `-   (duration(pickup) + travel duration from the pickup location to the delivery location).` ``

`Otherwise, it is computed from the vehicle` start\_location `and is equal to:` `` `start_time - vehicle_start_time - travel duration from the vehicle's` start_location `to the visit.` `` \`

`.google.protobuf.Duration detour = 6;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getIsPickup()

```
public boolean getIsPickup()
```

If true the visit corresponds to a pickup of a `Shipment`. Otherwise, it corresponds to a delivery.

`bool is_pickup = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The isPickup.

### getLoadDemands() (deprecated)

```
public Map<String,Shipment.Load> getLoadDemands()
```

Use [#getLoadDemandsMap()](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit#com_google_cloud_optimization_v1_ShipmentRoute_Visit_getLoadDemandsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Load](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.Shipment.Load)>`

### getLoadDemandsCount()

```
public int getLoadDemandsCount()
```

Total visit load demand as the sum of the shipment and the visit request `load_demands`. The values are negative if the visit is a delivery. Demands are reported for the same types as the Transition.loads (see this field).

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 11;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLoadDemandsMap()

```
public Map<String,Shipment.Load> getLoadDemandsMap()
```

Total visit load demand as the sum of the shipment and the visit request `load_demands`. The values are negative if the visit is a delivery. Demands are reported for the same types as the Transition.loads (see this field).

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 11;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Load](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.Shipment.Load)>`

### getLoadDemandsOrDefault(String key, Shipment.Load defaultValue)

```
public Shipment.Load getLoadDemandsOrDefault(String key, Shipment.Load defaultValue)
```

Total visit load demand as the sum of the shipment and the visit request `load_demands`. The values are negative if the visit is a delivery. Demands are reported for the same types as the Transition.loads (see this field).

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 11;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[Shipment.Load](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.Shipment.Load)`  

**Returns**

**Type**

**Description**

`[Shipment.Load](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.Shipment.Load)`

### getLoadDemandsOrThrow(String key)

```
public Shipment.Load getLoadDemandsOrThrow(String key)
```

Total visit load demand as the sum of the shipment and the visit request `load_demands`. The values are negative if the visit is a delivery. Demands are reported for the same types as the Transition.loads (see this field).

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 11;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Shipment.Load](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.Shipment.Load)`

### getParserForType()

```
public Parser<ShipmentRoute.Visit> getParserForType()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[Visit](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)>`

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

### getShipmentIndex()

```
public int getShipmentIndex()
```

Index of the `shipments` field in the source ShipmentModel.

`int32 shipment_index = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The shipmentIndex.

### getShipmentLabel()

```
public String getShipmentLabel()
```

Copy of the corresponding `Shipment.label`, if specified in the `Shipment`.

`string shipment_label = 7;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The shipmentLabel.

### getShipmentLabelBytes()

```
public ByteString getShipmentLabelBytes()
```

Copy of the corresponding `Shipment.label`, if specified in the `Shipment`.

`string shipment_label = 7;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for shipmentLabel.

### getStartTime()

```
public Timestamp getStartTime()
```

Time at which the visit starts. Note that the vehicle may arrive earlier than this at the visit location. Times are consistent with the `ShipmentModel`.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The startTime.

### getStartTimeOrBuilder()

```
public TimestampOrBuilder getStartTimeOrBuilder()
```

Time at which the visit starts. Note that the vehicle may arrive earlier than this at the visit location. Times are consistent with the `ShipmentModel`.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getVisitLabel()

```
public String getVisitLabel()
```

Copy of the corresponding VisitRequest.label, if specified in the `VisitRequest`.

`string visit_label = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The visitLabel.

### getVisitLabelBytes()

```
public ByteString getVisitLabelBytes()
```

Copy of the corresponding VisitRequest.label, if specified in the `VisitRequest`.

`string visit_label = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for visitLabel.

### getVisitRequestIndex()

```
public int getVisitRequestIndex()
```

Index of `VisitRequest` in either the pickup or delivery field of the `Shipment` (see `is_pickup`).

`int32 visit_request_index = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The visitRequestIndex.

### hasDelayBeforeStart() (deprecated)

```
public boolean hasDelayBeforeStart()
```

**Deprecated.** _google.cloud.optimization.v1.ShipmentRoute.Visit.delay\_before\_start is deprecated. See google/cloud/optimization/v1/fleet\_routing.proto;l=1965_

Deprecated: Use ShipmentRoute.Transition.delay\_duration instead. Delay occurring before the visit starts.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_start = 10 [deprecated = true];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the delayBeforeStart field is set.

### hasDetour()

```
public boolean hasDetour()
```

Extra detour time due to the shipments visited on the route before the visit and to the potential waiting time induced by time windows. If the visit is a delivery, the detour is computed from the corresponding pickup visit and is equal to: \` `` `start_time(delivery) - start_time(pickup)` ``

`` `-   (duration(pickup) + travel duration from the pickup location to the delivery location).` ``

`Otherwise, it is computed from the vehicle` start\_location `and is equal to:` `` `start_time - vehicle_start_time - travel duration from the vehicle's` start_location `to the visit.` `` \`

`.google.protobuf.Duration detour = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the detour field is set.

### hasStartTime()

```
public boolean hasStartTime()
```

Time at which the visit starts. Note that the vehicle may arrive earlier than this at the visit location. Times are consistent with the `ShipmentModel`.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

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

### internalGetMapFieldReflection(int number)

```
protected MapFieldReflectionAccessor internalGetMapFieldReflection(int number)
```

**Parameter**

**Name**

**Description**

`number`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`com.google.protobuf.MapFieldReflectionAccessor`

**Overrides**

com.google.protobuf.GeneratedMessageV3.internalGetMapFieldReflection(int)

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
public ShipmentRoute.Visit.Builder newBuilderForType()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### newBuilderForType(GeneratedMessageV3.BuilderParent parent)

```
protected ShipmentRoute.Visit.Builder newBuilderForType(GeneratedMessageV3.BuilderParent parent)
```

**Parameter**

**Name**

**Description**

`parent`

`[BuilderParent](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.BuilderParent.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

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
public ShipmentRoute.Visit.Builder toBuilder()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.53.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

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
