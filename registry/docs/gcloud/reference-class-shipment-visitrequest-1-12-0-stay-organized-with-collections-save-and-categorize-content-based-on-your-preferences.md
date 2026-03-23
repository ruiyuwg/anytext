-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Shipment.VisitRequest (1.12.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.14 0.1.2

```
public static final class Shipment.VisitRequest extends GeneratedMessageV3 implements Shipment.VisitRequestOrBuilder
```

Request for a visit which can be done by a vehicle: it has a geo-location (or two, see below), opening and closing times represented by time windows, and a service duration time (time spent by the vehicle once it has arrived to pickup or drop off goods).

Protobuf type `google.cloud.optimization.v1.Shipment.VisitRequest`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html) \> [AbstractMessage](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html) \> [GeneratedMessageV3](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html) \> Shipment.VisitRequest

## Implements

[Shipment.VisitRequestOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequestOrBuilder)

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

### ARRIVAL\_LOCATION\_FIELD\_NUMBER

```
public static final int ARRIVAL_LOCATION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### ARRIVAL\_WAYPOINT\_FIELD\_NUMBER

```
public static final int ARRIVAL_WAYPOINT_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### COST\_FIELD\_NUMBER

```
public static final int COST_FIELD_NUMBER
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

### DEPARTURE\_LOCATION\_FIELD\_NUMBER

```
public static final int DEPARTURE_LOCATION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### DEPARTURE\_WAYPOINT\_FIELD\_NUMBER

```
public static final int DEPARTURE_WAYPOINT_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### DURATION\_FIELD\_NUMBER

```
public static final int DURATION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### LABEL\_FIELD\_NUMBER

```
public static final int LABEL_FIELD_NUMBER
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

### TAGS\_FIELD\_NUMBER

```
public static final int TAGS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### TIME\_WINDOWS\_FIELD\_NUMBER

```
public static final int TIME_WINDOWS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### VISIT\_TYPES\_FIELD\_NUMBER

```
public static final int VISIT_TYPES_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

## Static Methods

### getDefaultInstance()

```
public static Shipment.VisitRequest getDefaultInstance()
```

**Returns**

**Type**

**Description**

`[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)`

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
public static Shipment.VisitRequest.Builder newBuilder()
```

**Returns**

**Type**

**Description**

`[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)`

### newBuilder(Shipment.VisitRequest prototype)

```
public static Shipment.VisitRequest.Builder newBuilder(Shipment.VisitRequest prototype)
```

**Parameter**

**Name**

**Description**

`prototype`

`[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)`  

**Returns**

**Type**

**Description**

`[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)`

### parseDelimitedFrom(InputStream input)

```
public static Shipment.VisitRequest parseDelimitedFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static Shipment.VisitRequest parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(byte\[\] data)

```
public static Shipment.VisitRequest parseFrom(byte[] data)
```

**Parameter**

**Name**

**Description**

`data`

`byte[]`  

**Returns**

**Type**

**Description**

`[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(byte\[\] data, ExtensionRegistryLite extensionRegistry)

```
public static Shipment.VisitRequest parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
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

`[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data)

```
public static Shipment.VisitRequest parseFrom(ByteString data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

**Returns**

**Type**

**Description**

`[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)

```
public static Shipment.VisitRequest parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
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

`[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(CodedInputStream input)

```
public static Shipment.VisitRequest parseFrom(CodedInputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

**Returns**

**Type**

**Description**

`[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public static Shipment.VisitRequest parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input)

```
public static Shipment.VisitRequest parseFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static Shipment.VisitRequest parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(ByteBuffer data)

```
public static Shipment.VisitRequest parseFrom(ByteBuffer data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteBuffer](https://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html)`  

**Returns**

**Type**

**Description**

`[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)

```
public static Shipment.VisitRequest parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
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

`[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parser()

```
public static Parser<Shipment.VisitRequest> parser()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)>`

## Methods

### containsLoadDemands(String key)

```
public boolean containsLoadDemands(String key)
```

Load demands of this visit request. This is just like Shipment.load\_demands field, except that it only applies to this VisitRequest instead of the whole Shipment. The demands listed here are added to the demands listed in Shipment.load\_demands.

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 12;`

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

### getArrivalLocation()

```
public LatLng getArrivalLocation()
```

The geo-location where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_location` must not be specified.

`.google.type.LatLng arrival_location = 1;`

**Returns**

**Type**

**Description**

`com.google.type.LatLng`

The arrivalLocation.

### getArrivalLocationOrBuilder()

```
public LatLngOrBuilder getArrivalLocationOrBuilder()
```

The geo-location where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_location` must not be specified.

`.google.type.LatLng arrival_location = 1;`

**Returns**

**Type**

**Description**

`com.google.type.LatLngOrBuilder`

### getArrivalWaypoint()

```
public Waypoint getArrivalWaypoint()
```

The waypoint where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint arrival_waypoint = 2;`

**Returns**

**Type**

**Description**

`[Waypoint](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Waypoint)`

The arrivalWaypoint.

### getArrivalWaypointOrBuilder()

```
public WaypointOrBuilder getArrivalWaypointOrBuilder()
```

The waypoint where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint arrival_waypoint = 2;`

**Returns**

**Type**

**Description**

`[WaypointOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.WaypointOrBuilder)`

### getCost()

```
public double getCost()
```

Cost to service this visit request on a vehicle route. This can be used to pay different costs for each alternative pickup or delivery of a shipment. This cost must be in the same unit as `Shipment.penalty_cost` and must not be negative.

`double cost = 8;`

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The cost.

### getDefaultInstanceForType()

```
public Shipment.VisitRequest getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)`

### getDemands(int index)

```
public CapacityQuantity getDemands(int index)
```

Deprecated: Use VisitRequest.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.CapacityQuantity)`

### getDemandsCount()

```
public int getDemandsCount()
```

Deprecated: Use VisitRequest.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getDemandsList()

```
public List<CapacityQuantity> getDemandsList()
```

Deprecated: Use VisitRequest.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.CapacityQuantity)>`

### getDemandsOrBuilder(int index)

```
public CapacityQuantityOrBuilder getDemandsOrBuilder(int index)
```

Deprecated: Use VisitRequest.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantityOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.CapacityQuantityOrBuilder)`

### getDemandsOrBuilderList()

```
public List<? extends CapacityQuantityOrBuilder> getDemandsOrBuilderList()
```

Deprecated: Use VisitRequest.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.CapacityQuantityOrBuilder>`

### getDepartureLocation()

```
public LatLng getDepartureLocation()
```

The geo-location where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_location`. If the shipment model has duration distance matrices, `departure_location` must not be specified.

`.google.type.LatLng departure_location = 3;`

**Returns**

**Type**

**Description**

`com.google.type.LatLng`

The departureLocation.

### getDepartureLocationOrBuilder()

```
public LatLngOrBuilder getDepartureLocationOrBuilder()
```

The geo-location where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_location`. If the shipment model has duration distance matrices, `departure_location` must not be specified.

`.google.type.LatLng departure_location = 3;`

**Returns**

**Type**

**Description**

`com.google.type.LatLngOrBuilder`

### getDepartureWaypoint()

```
public Waypoint getDepartureWaypoint()
```

The waypoint where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_waypoint`. If the shipment model has duration distance matrices, `departure_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint departure_waypoint = 4;`

**Returns**

**Type**

**Description**

`[Waypoint](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Waypoint)`

The departureWaypoint.

### getDepartureWaypointOrBuilder()

```
public WaypointOrBuilder getDepartureWaypointOrBuilder()
```

The waypoint where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_waypoint`. If the shipment model has duration distance matrices, `departure_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint departure_waypoint = 4;`

**Returns**

**Type**

**Description**

`[WaypointOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.WaypointOrBuilder)`

### getDuration()

```
public Duration getDuration()
```

Duration of the visit, i.e. time spent by the vehicle between arrival and departure (to be added to the possible waiting time; see `time_windows`).

`.google.protobuf.Duration duration = 7;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The duration.

### getDurationOrBuilder()

```
public DurationOrBuilder getDurationOrBuilder()
```

Duration of the visit, i.e. time spent by the vehicle between arrival and departure (to be added to the possible waiting time; see `time_windows`).

`.google.protobuf.Duration duration = 7;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getLabel()

```
public String getLabel()
```

Specifies a label for this `VisitRequest`. This label is reported in the response as `visit_label` in the corresponding ShipmentRoute.Visit.

`string label = 11;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The label.

### getLabelBytes()

```
public ByteString getLabelBytes()
```

Specifies a label for this `VisitRequest`. This label is reported in the response as `visit_label` in the corresponding ShipmentRoute.Visit.

`string label = 11;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for label.

### getLoadDemands()

```
public Map<String,Shipment.Load> getLoadDemands()
```

Use [#getLoadDemandsMap()](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest#com_google_cloud_optimization_v1_Shipment_VisitRequest_getLoadDemandsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Load](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.Load)>`

### getLoadDemandsCount()

```
public int getLoadDemandsCount()
```

Load demands of this visit request. This is just like Shipment.load\_demands field, except that it only applies to this VisitRequest instead of the whole Shipment. The demands listed here are added to the demands listed in Shipment.load\_demands.

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 12;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLoadDemandsMap()

```
public Map<String,Shipment.Load> getLoadDemandsMap()
```

Load demands of this visit request. This is just like Shipment.load\_demands field, except that it only applies to this VisitRequest instead of the whole Shipment. The demands listed here are added to the demands listed in Shipment.load\_demands.

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 12;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Load](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.Load)>`

### getLoadDemandsOrDefault(String key, Shipment.Load defaultValue)

```
public Shipment.Load getLoadDemandsOrDefault(String key, Shipment.Load defaultValue)
```

Load demands of this visit request. This is just like Shipment.load\_demands field, except that it only applies to this VisitRequest instead of the whole Shipment. The demands listed here are added to the demands listed in Shipment.load\_demands.

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 12;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[Shipment.Load](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.Load)`  

**Returns**

**Type**

**Description**

`[Shipment.Load](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.Load)`

### getLoadDemandsOrThrow(String key)

```
public Shipment.Load getLoadDemandsOrThrow(String key)
```

Load demands of this visit request. This is just like Shipment.load\_demands field, except that it only applies to this VisitRequest instead of the whole Shipment. The demands listed here are added to the demands listed in Shipment.load\_demands.

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 12;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Shipment.Load](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.Load)`

### getParserForType()

```
public Parser<Shipment.VisitRequest> getParserForType()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[VisitRequest](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)>`

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

### getTags(int index)

```
public String getTags(int index)
```

Specifies tags attached to the visit request. Empty or duplicate strings are not allowed.

`repeated string tags = 5;`

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

The tags at the given index.

### getTagsBytes(int index)

```
public ByteString getTagsBytes(int index)
```

Specifies tags attached to the visit request. Empty or duplicate strings are not allowed.

`repeated string tags = 5;`

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

The bytes of the tags at the given index.

### getTagsCount()

```
public int getTagsCount()
```

Specifies tags attached to the visit request. Empty or duplicate strings are not allowed.

`repeated string tags = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of tags.

### getTagsList()

```
public ProtocolStringList getTagsList()
```

Specifies tags attached to the visit request. Empty or duplicate strings are not allowed.

`repeated string tags = 5;`

**Returns**

**Type**

**Description**

`[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)`

A list containing the tags.

### getTimeWindows(int index)

```
public TimeWindow getTimeWindows(int index)
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TimeWindow](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.TimeWindow)`

### getTimeWindowsCount()

```
public int getTimeWindowsCount()
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getTimeWindowsList()

```
public List<TimeWindow> getTimeWindowsList()
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[TimeWindow](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.TimeWindow)>`

### getTimeWindowsOrBuilder(int index)

```
public TimeWindowOrBuilder getTimeWindowsOrBuilder(int index)
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TimeWindowOrBuilder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.TimeWindowOrBuilder)`

### getTimeWindowsOrBuilderList()

```
public List<? extends TimeWindowOrBuilder> getTimeWindowsOrBuilderList()
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.TimeWindowOrBuilder>`

### getUnknownFields()

```
public final UnknownFieldSet getUnknownFields()
```

**Returns**

**Type**

**Description**

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`

**Overrides**

[GeneratedMessageV3.getUnknownFields()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getUnknownFields__)

### getVisitTypes(int index)

```
public String getVisitTypes(int index)
```

Specifies the types of the visit. This may be used to allocate additional time required for a vehicle to complete this visit (see Vehicle.extra\_visit\_duration\_for\_visit\_type). A type can only appear once.

`repeated string visit_types = 10;`

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

The visitTypes at the given index.

### getVisitTypesBytes(int index)

```
public ByteString getVisitTypesBytes(int index)
```

Specifies the types of the visit. This may be used to allocate additional time required for a vehicle to complete this visit (see Vehicle.extra\_visit\_duration\_for\_visit\_type). A type can only appear once.

`repeated string visit_types = 10;`

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

The bytes of the visitTypes at the given index.

### getVisitTypesCount()

```
public int getVisitTypesCount()
```

Specifies the types of the visit. This may be used to allocate additional time required for a vehicle to complete this visit (see Vehicle.extra\_visit\_duration\_for\_visit\_type). A type can only appear once.

`repeated string visit_types = 10;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of visitTypes.

### getVisitTypesList()

```
public ProtocolStringList getVisitTypesList()
```

Specifies the types of the visit. This may be used to allocate additional time required for a vehicle to complete this visit (see Vehicle.extra\_visit\_duration\_for\_visit\_type). A type can only appear once.

`repeated string visit_types = 10;`

**Returns**

**Type**

**Description**

`[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)`

A list containing the visitTypes.

### hasArrivalLocation()

```
public boolean hasArrivalLocation()
```

The geo-location where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_location` must not be specified.

`.google.type.LatLng arrival_location = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the arrivalLocation field is set.

### hasArrivalWaypoint()

```
public boolean hasArrivalWaypoint()
```

The waypoint where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint arrival_waypoint = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the arrivalWaypoint field is set.

### hasDepartureLocation()

```
public boolean hasDepartureLocation()
```

The geo-location where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_location`. If the shipment model has duration distance matrices, `departure_location` must not be specified.

`.google.type.LatLng departure_location = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the departureLocation field is set.

### hasDepartureWaypoint()

```
public boolean hasDepartureWaypoint()
```

The waypoint where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_waypoint`. If the shipment model has duration distance matrices, `departure_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint departure_waypoint = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the departureWaypoint field is set.

### hasDuration()

```
public boolean hasDuration()
```

Duration of the visit, i.e. time spent by the vehicle between arrival and departure (to be added to the possible waiting time; see `time_windows`).

`.google.protobuf.Duration duration = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the duration field is set.

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
public Shipment.VisitRequest.Builder newBuilderForType()
```

**Returns**

**Type**

**Description**

`[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)`

### newBuilderForType(GeneratedMessageV3.BuilderParent parent)

```
protected Shipment.VisitRequest.Builder newBuilderForType(GeneratedMessageV3.BuilderParent parent)
```

**Parameter**

**Name**

**Description**

`parent`

`[BuilderParent](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.BuilderParent.html)`  

**Returns**

**Type**

**Description**

`[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)`

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
public Shipment.VisitRequest.Builder toBuilder()
```

**Returns**

**Type**

**Description**

`[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.12.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)`

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
