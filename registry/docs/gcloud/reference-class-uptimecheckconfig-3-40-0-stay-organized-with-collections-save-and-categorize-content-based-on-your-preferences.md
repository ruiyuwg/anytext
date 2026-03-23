-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class UptimeCheckConfig (3.40.0) Stay organized with collections Save and categorize content based on your preferences.

3.88.0 (latest) 3.86.0 3.84.0 3.83.0 3.81.0 3.79.0 3.77.0 3.76.0 3.75.0 3.74.0 3.73.0 3.71.0 3.69.0 3.68.0 3.65.0 3.64.0 3.63.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.6 3.3.6 3.2.10

```
public final class UptimeCheckConfig extends GeneratedMessageV3 implements UptimeCheckConfigOrBuilder
```

This message configures which resources and services to monitor for availability.

Protobuf type `google.monitoring.v3.UptimeCheckConfig`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html) \> [AbstractMessage](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html) \> [GeneratedMessageV3](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html) \> UptimeCheckConfig

## Implements

[UptimeCheckConfigOrBuilder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfigOrBuilder)

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

### CHECKER\_TYPE\_FIELD\_NUMBER

```
public static final int CHECKER_TYPE_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### CONTENT\_MATCHERS\_FIELD\_NUMBER

```
public static final int CONTENT_MATCHERS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### DISPLAY\_NAME\_FIELD\_NUMBER

```
public static final int DISPLAY_NAME_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### HTTP\_CHECK\_FIELD\_NUMBER

```
public static final int HTTP_CHECK_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### INTERNAL\_CHECKERS\_FIELD\_NUMBER

```
public static final int INTERNAL_CHECKERS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### IS\_INTERNAL\_FIELD\_NUMBER

```
public static final int IS_INTERNAL_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### MONITORED\_RESOURCE\_FIELD\_NUMBER

```
public static final int MONITORED_RESOURCE_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### NAME\_FIELD\_NUMBER

```
public static final int NAME_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### PERIOD\_FIELD\_NUMBER

```
public static final int PERIOD_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### RESOURCE\_GROUP\_FIELD\_NUMBER

```
public static final int RESOURCE_GROUP_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### SELECTED\_REGIONS\_FIELD\_NUMBER

```
public static final int SELECTED_REGIONS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### TCP\_CHECK\_FIELD\_NUMBER

```
public static final int TCP_CHECK_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### TIMEOUT\_FIELD\_NUMBER

```
public static final int TIMEOUT_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### USER\_LABELS\_FIELD\_NUMBER

```
public static final int USER_LABELS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

## Static Methods

### getDefaultInstance()

```
public static UptimeCheckConfig getDefaultInstance()
```

**Returns**

**Type**

**Description**

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)`

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
public static UptimeCheckConfig.Builder newBuilder()
```

**Returns**

**Type**

**Description**

`[UptimeCheckConfig.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.Builder)`

### newBuilder(UptimeCheckConfig prototype)

```
public static UptimeCheckConfig.Builder newBuilder(UptimeCheckConfig prototype)
```

**Parameter**

**Name**

**Description**

`prototype`

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)`  

**Returns**

**Type**

**Description**

`[UptimeCheckConfig.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.Builder)`

### parseDelimitedFrom(InputStream input)

```
public static UptimeCheckConfig parseDelimitedFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static UptimeCheckConfig parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(byte\[\] data)

```
public static UptimeCheckConfig parseFrom(byte[] data)
```

**Parameter**

**Name**

**Description**

`data`

`byte[]`  

**Returns**

**Type**

**Description**

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(byte\[\] data, ExtensionRegistryLite extensionRegistry)

```
public static UptimeCheckConfig parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
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

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data)

```
public static UptimeCheckConfig parseFrom(ByteString data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

**Returns**

**Type**

**Description**

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)

```
public static UptimeCheckConfig parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
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

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(CodedInputStream input)

```
public static UptimeCheckConfig parseFrom(CodedInputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

**Returns**

**Type**

**Description**

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public static UptimeCheckConfig parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input)

```
public static UptimeCheckConfig parseFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static UptimeCheckConfig parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(ByteBuffer data)

```
public static UptimeCheckConfig parseFrom(ByteBuffer data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteBuffer](https://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html)`  

**Returns**

**Type**

**Description**

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)

```
public static UptimeCheckConfig parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
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

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parser()

```
public static Parser<UptimeCheckConfig> parser()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)>`

## Methods

### containsUserLabels(String key)

```
public boolean containsUserLabels(String key)
```

User-supplied key/value data to be used for organizing and identifying the `UptimeCheckConfig` objects.

The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

`map<string, string> user_labels = 20;`

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

### getCheckRequestTypeCase()

```
public UptimeCheckConfig.CheckRequestTypeCase getCheckRequestTypeCase()
```

**Returns**

**Type**

**Description**

`[UptimeCheckConfig.CheckRequestTypeCase](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.CheckRequestTypeCase)`

### getCheckerType()

```
public UptimeCheckConfig.CheckerType getCheckerType()
```

The type of checkers to use to execute the Uptime check.

`.google.monitoring.v3.UptimeCheckConfig.CheckerType checker_type = 17;`

**Returns**

**Type**

**Description**

`[UptimeCheckConfig.CheckerType](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.CheckerType)`

The checkerType.

### getCheckerTypeValue()

```
public int getCheckerTypeValue()
```

The type of checkers to use to execute the Uptime check.

`.google.monitoring.v3.UptimeCheckConfig.CheckerType checker_type = 17;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for checkerType.

### getContentMatchers(int index)

```
public UptimeCheckConfig.ContentMatcher getContentMatchers(int index)
```

The content that is expected to appear in the data returned by the target server against which the check is run. Currently, only the first entry in the `content_matchers` list is supported, and additional entries will be ignored. This field is optional and should only be specified if a content match is required as part of the/ Uptime check.

`repeated .google.monitoring.v3.UptimeCheckConfig.ContentMatcher content_matchers = 9;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[UptimeCheckConfig.ContentMatcher](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.ContentMatcher)`

### getContentMatchersCount()

```
public int getContentMatchersCount()
```

The content that is expected to appear in the data returned by the target server against which the check is run. Currently, only the first entry in the `content_matchers` list is supported, and additional entries will be ignored. This field is optional and should only be specified if a content match is required as part of the/ Uptime check.

`repeated .google.monitoring.v3.UptimeCheckConfig.ContentMatcher content_matchers = 9;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getContentMatchersList()

```
public List<UptimeCheckConfig.ContentMatcher> getContentMatchersList()
```

The content that is expected to appear in the data returned by the target server against which the check is run. Currently, only the first entry in the `content_matchers` list is supported, and additional entries will be ignored. This field is optional and should only be specified if a content match is required as part of the/ Uptime check.

`repeated .google.monitoring.v3.UptimeCheckConfig.ContentMatcher content_matchers = 9;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ContentMatcher](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.ContentMatcher)>`

### getContentMatchersOrBuilder(int index)

```
public UptimeCheckConfig.ContentMatcherOrBuilder getContentMatchersOrBuilder(int index)
```

The content that is expected to appear in the data returned by the target server against which the check is run. Currently, only the first entry in the `content_matchers` list is supported, and additional entries will be ignored. This field is optional and should only be specified if a content match is required as part of the/ Uptime check.

`repeated .google.monitoring.v3.UptimeCheckConfig.ContentMatcher content_matchers = 9;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[UptimeCheckConfig.ContentMatcherOrBuilder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.ContentMatcherOrBuilder)`

### getContentMatchersOrBuilderList()

```
public List<? extends UptimeCheckConfig.ContentMatcherOrBuilder> getContentMatchersOrBuilderList()
```

The content that is expected to appear in the data returned by the target server against which the check is run. Currently, only the first entry in the `content_matchers` list is supported, and additional entries will be ignored. This field is optional and should only be specified if a content match is required as part of the/ Uptime check.

`repeated .google.monitoring.v3.UptimeCheckConfig.ContentMatcher content_matchers = 9;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.monitoring.v3.UptimeCheckConfig.ContentMatcherOrBuilder>`

### getDefaultInstanceForType()

```
public UptimeCheckConfig getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)`

### getDisplayName()

```
public String getDisplayName()
```

A human-friendly name for the Uptime check configuration. The display name should be unique within a Cloud Monitoring Workspace in order to make it easier to identify; however, uniqueness is not enforced. Required.

`string display_name = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The displayName.

### getDisplayNameBytes()

```
public ByteString getDisplayNameBytes()
```

A human-friendly name for the Uptime check configuration. The display name should be unique within a Cloud Monitoring Workspace in order to make it easier to identify; however, uniqueness is not enforced. Required.

`string display_name = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for displayName.

### getHttpCheck()

```
public UptimeCheckConfig.HttpCheck getHttpCheck()
```

Contains information needed to make an HTTP or HTTPS check.

`.google.monitoring.v3.UptimeCheckConfig.HttpCheck http_check = 5;`

**Returns**

**Type**

**Description**

`[UptimeCheckConfig.HttpCheck](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.HttpCheck)`

The httpCheck.

### getHttpCheckOrBuilder()

```
public UptimeCheckConfig.HttpCheckOrBuilder getHttpCheckOrBuilder()
```

Contains information needed to make an HTTP or HTTPS check.

`.google.monitoring.v3.UptimeCheckConfig.HttpCheck http_check = 5;`

**Returns**

**Type**

**Description**

`[UptimeCheckConfig.HttpCheckOrBuilder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.HttpCheckOrBuilder)`

### getInternalCheckers(int index) (deprecated)

```
public InternalChecker getInternalCheckers(int index)
```

The internal checkers that this check will egress from. If `is_internal` is `true` and this list is empty, the check will egress from all the InternalCheckers configured for the project that owns this `UptimeCheckConfig`.

`repeated .google.monitoring.v3.InternalChecker internal_checkers = 14 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[InternalChecker](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.InternalChecker)`

### getInternalCheckersCount() (deprecated)

```
public int getInternalCheckersCount()
```

The internal checkers that this check will egress from. If `is_internal` is `true` and this list is empty, the check will egress from all the InternalCheckers configured for the project that owns this `UptimeCheckConfig`.

`repeated .google.monitoring.v3.InternalChecker internal_checkers = 14 [deprecated = true];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getInternalCheckersList() (deprecated)

```
public List<InternalChecker> getInternalCheckersList()
```

The internal checkers that this check will egress from. If `is_internal` is `true` and this list is empty, the check will egress from all the InternalCheckers configured for the project that owns this `UptimeCheckConfig`.

`repeated .google.monitoring.v3.InternalChecker internal_checkers = 14 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[InternalChecker](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.InternalChecker)>`

### getInternalCheckersOrBuilder(int index) (deprecated)

```
public InternalCheckerOrBuilder getInternalCheckersOrBuilder(int index)
```

The internal checkers that this check will egress from. If `is_internal` is `true` and this list is empty, the check will egress from all the InternalCheckers configured for the project that owns this `UptimeCheckConfig`.

`repeated .google.monitoring.v3.InternalChecker internal_checkers = 14 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[InternalCheckerOrBuilder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.InternalCheckerOrBuilder)`

### getInternalCheckersOrBuilderList() (deprecated)

```
public List<? extends InternalCheckerOrBuilder> getInternalCheckersOrBuilderList()
```

The internal checkers that this check will egress from. If `is_internal` is `true` and this list is empty, the check will egress from all the InternalCheckers configured for the project that owns this `UptimeCheckConfig`.

`repeated .google.monitoring.v3.InternalChecker internal_checkers = 14 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.monitoring.v3.InternalCheckerOrBuilder>`

### getIsInternal() (deprecated)

```
public boolean getIsInternal()
```

**Deprecated.** _google.monitoring.v3.UptimeCheckConfig.is\_internal is deprecated. See google/monitoring/v3/uptime.proto;l=478_

If this is `true`, then checks are made only from the 'internal\_checkers'. If it is `false`, then checks are made only from the 'selected\_regions'. It is an error to provide 'selected\_regions' when is\_internal is `true`, or to provide 'internal\_checkers' when is\_internal is `false`.

`bool is_internal = 15 [deprecated = true];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The isInternal.

### getMonitoredResource()

```
public MonitoredResource getMonitoredResource()
```

The [monitored resource](https://cloud.google.com/monitoring/api/resources) associated with the configuration. The following monitored resource types are valid for this field: `uptime_url`, `gce_instance`, `gae_app`, `aws_ec2_instance`, `aws_elb_load_balancer` `k8s_service` `servicedirectory_service` `cloud_run_revision`

`.google.api.MonitoredResource monitored_resource = 3;`

**Returns**

**Type**

**Description**

`com.google.api.MonitoredResource`

The monitoredResource.

### getMonitoredResourceOrBuilder()

```
public MonitoredResourceOrBuilder getMonitoredResourceOrBuilder()
```

The [monitored resource](https://cloud.google.com/monitoring/api/resources) associated with the configuration. The following monitored resource types are valid for this field: `uptime_url`, `gce_instance`, `gae_app`, `aws_ec2_instance`, `aws_elb_load_balancer` `k8s_service` `servicedirectory_service` `cloud_run_revision`

`.google.api.MonitoredResource monitored_resource = 3;`

**Returns**

**Type**

**Description**

`com.google.api.MonitoredResourceOrBuilder`

### getName()

```
public String getName()
```

A unique resource name for this Uptime check configuration. The format is:

  ```
  projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID]
```

`[PROJECT_ID_OR_NUMBER]` is the Workspace host project associated with the Uptime check.

This field should be omitted when creating the Uptime check configuration; on create, the resource name is assigned by the server and included in the response.

`string name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public ByteString getNameBytes()
```

A unique resource name for this Uptime check configuration. The format is:

  ```
  projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID]
```

`[PROJECT_ID_OR_NUMBER]` is the Workspace host project associated with the Uptime check.

This field should be omitted when creating the Uptime check configuration; on create, the resource name is assigned by the server and included in the response.

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getParserForType()

```
public Parser<UptimeCheckConfig> getParserForType()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig)>`

**Overrides**

[GeneratedMessageV3.getParserForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getParserForType__)

### getPeriod()

```
public Duration getPeriod()
```

How often, in seconds, the Uptime check is performed. Currently, the only supported values are `60s` (1 minute), `300s` (5 minutes), `600s` (10 minutes), and `900s` (15 minutes). Optional, defaults to `60s`.

`.google.protobuf.Duration period = 7;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The period.

### getPeriodOrBuilder()

```
public DurationOrBuilder getPeriodOrBuilder()
```

How often, in seconds, the Uptime check is performed. Currently, the only supported values are `60s` (1 minute), `300s` (5 minutes), `600s` (10 minutes), and `900s` (15 minutes). Optional, defaults to `60s`.

`.google.protobuf.Duration period = 7;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getResourceCase()

```
public UptimeCheckConfig.ResourceCase getResourceCase()
```

**Returns**

**Type**

**Description**

`[UptimeCheckConfig.ResourceCase](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.ResourceCase)`

### getResourceGroup()

```
public UptimeCheckConfig.ResourceGroup getResourceGroup()
```

The group resource associated with the configuration.

`.google.monitoring.v3.UptimeCheckConfig.ResourceGroup resource_group = 4;`

**Returns**

**Type**

**Description**

`[UptimeCheckConfig.ResourceGroup](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.ResourceGroup)`

The resourceGroup.

### getResourceGroupOrBuilder()

```
public UptimeCheckConfig.ResourceGroupOrBuilder getResourceGroupOrBuilder()
```

The group resource associated with the configuration.

`.google.monitoring.v3.UptimeCheckConfig.ResourceGroup resource_group = 4;`

**Returns**

**Type**

**Description**

`[UptimeCheckConfig.ResourceGroupOrBuilder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.ResourceGroupOrBuilder)`

### getSelectedRegions(int index)

```
public UptimeCheckRegion getSelectedRegions(int index)
```

The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions must be provided to include a minimum of 3 locations. Not specifying this field will result in Uptime checks running from all available regions.

`repeated .google.monitoring.v3.UptimeCheckRegion selected_regions = 10;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[UptimeCheckRegion](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckRegion)`

The selectedRegions at the given index.

### getSelectedRegionsCount()

```
public int getSelectedRegionsCount()
```

The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions must be provided to include a minimum of 3 locations. Not specifying this field will result in Uptime checks running from all available regions.

`repeated .google.monitoring.v3.UptimeCheckRegion selected_regions = 10;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of selectedRegions.

### getSelectedRegionsList()

```
public List<UptimeCheckRegion> getSelectedRegionsList()
```

The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions must be provided to include a minimum of 3 locations. Not specifying this field will result in Uptime checks running from all available regions.

`repeated .google.monitoring.v3.UptimeCheckRegion selected_regions = 10;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[UptimeCheckRegion](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckRegion)>`

A list containing the selectedRegions.

### getSelectedRegionsValue(int index)

```
public int getSelectedRegionsValue(int index)
```

The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions must be provided to include a minimum of 3 locations. Not specifying this field will result in Uptime checks running from all available regions.

`repeated .google.monitoring.v3.UptimeCheckRegion selected_regions = 10;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire of selectedRegions at the given index.

### getSelectedRegionsValueList()

```
public List<Integer> getSelectedRegionsValueList()
```

The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions must be provided to include a minimum of 3 locations. Not specifying this field will result in Uptime checks running from all available regions.

`repeated .google.monitoring.v3.UptimeCheckRegion selected_regions = 10;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)>`

A list containing the enum numeric values on the wire for selectedRegions.

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

### getTcpCheck()

```
public UptimeCheckConfig.TcpCheck getTcpCheck()
```

Contains information needed to make a TCP check.

`.google.monitoring.v3.UptimeCheckConfig.TcpCheck tcp_check = 6;`

**Returns**

**Type**

**Description**

`[UptimeCheckConfig.TcpCheck](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.TcpCheck)`

The tcpCheck.

### getTcpCheckOrBuilder()

```
public UptimeCheckConfig.TcpCheckOrBuilder getTcpCheckOrBuilder()
```

Contains information needed to make a TCP check.

`.google.monitoring.v3.UptimeCheckConfig.TcpCheck tcp_check = 6;`

**Returns**

**Type**

**Description**

`[UptimeCheckConfig.TcpCheckOrBuilder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.TcpCheckOrBuilder)`

### getTimeout()

```
public Duration getTimeout()
```

The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Required.

`.google.protobuf.Duration timeout = 8;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The timeout.

### getTimeoutOrBuilder()

```
public DurationOrBuilder getTimeoutOrBuilder()
```

The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Required.

`.google.protobuf.Duration timeout = 8;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getUserLabels() (deprecated)

```
public Map<String,String> getUserLabels()
```

Use [#getUserLabelsMap()](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig#com_google_monitoring_v3_UptimeCheckConfig_getUserLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getUserLabelsCount()

```
public int getUserLabelsCount()
```

User-supplied key/value data to be used for organizing and identifying the `UptimeCheckConfig` objects.

The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

`map<string, string> user_labels = 20;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getUserLabelsMap()

```
public Map<String,String> getUserLabelsMap()
```

User-supplied key/value data to be used for organizing and identifying the `UptimeCheckConfig` objects.

The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

`map<string, string> user_labels = 20;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getUserLabelsOrDefault(String key, String defaultValue)

```
public String getUserLabelsOrDefault(String key, String defaultValue)
```

User-supplied key/value data to be used for organizing and identifying the `UptimeCheckConfig` objects.

The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

`map<string, string> user_labels = 20;`

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

### getUserLabelsOrThrow(String key)

```
public String getUserLabelsOrThrow(String key)
```

User-supplied key/value data to be used for organizing and identifying the `UptimeCheckConfig` objects.

The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

`map<string, string> user_labels = 20;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### hasHttpCheck()

```
public boolean hasHttpCheck()
```

Contains information needed to make an HTTP or HTTPS check.

`.google.monitoring.v3.UptimeCheckConfig.HttpCheck http_check = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the httpCheck field is set.

### hasMonitoredResource()

```
public boolean hasMonitoredResource()
```

The [monitored resource](https://cloud.google.com/monitoring/api/resources) associated with the configuration. The following monitored resource types are valid for this field: `uptime_url`, `gce_instance`, `gae_app`, `aws_ec2_instance`, `aws_elb_load_balancer` `k8s_service` `servicedirectory_service` `cloud_run_revision`

`.google.api.MonitoredResource monitored_resource = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the monitoredResource field is set.

### hasPeriod()

```
public boolean hasPeriod()
```

How often, in seconds, the Uptime check is performed. Currently, the only supported values are `60s` (1 minute), `300s` (5 minutes), `600s` (10 minutes), and `900s` (15 minutes). Optional, defaults to `60s`.

`.google.protobuf.Duration period = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the period field is set.

### hasResourceGroup()

```
public boolean hasResourceGroup()
```

The group resource associated with the configuration.

`.google.monitoring.v3.UptimeCheckConfig.ResourceGroup resource_group = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the resourceGroup field is set.

### hasTcpCheck()

```
public boolean hasTcpCheck()
```

Contains information needed to make a TCP check.

`.google.monitoring.v3.UptimeCheckConfig.TcpCheck tcp_check = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the tcpCheck field is set.

### hasTimeout()

```
public boolean hasTimeout()
```

The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Required.

`.google.protobuf.Duration timeout = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timeout field is set.

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
public UptimeCheckConfig.Builder newBuilderForType()
```

**Returns**

**Type**

**Description**

`[UptimeCheckConfig.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.Builder)`

### newBuilderForType(GeneratedMessageV3.BuilderParent parent)

```
protected UptimeCheckConfig.Builder newBuilderForType(GeneratedMessageV3.BuilderParent parent)
```

**Parameter**

**Name**

**Description**

`parent`

`[BuilderParent](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.BuilderParent.html)`  

**Returns**

**Type**

**Description**

`[UptimeCheckConfig.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.Builder)`

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
public UptimeCheckConfig.Builder toBuilder()
```

**Returns**

**Type**

**Description**

`[UptimeCheckConfig.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.UptimeCheckConfig.Builder)`

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
