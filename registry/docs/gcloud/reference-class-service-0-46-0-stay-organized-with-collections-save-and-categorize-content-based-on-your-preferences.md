-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Service (0.46.0) Stay organized with collections Save and categorize content based on your preferences.

0.87.0 (latest) 0.85.0 0.83.0 0.82.0 0.80.0 0.78.0 0.76.0 0.75.0 0.74.0 0.73.0 0.72.0 0.70.0 0.68.0 0.67.0 0.64.0 0.63.0 0.62.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.5 0.2.1 0.1.2

```
public final class Service extends GeneratedMessageV3 implements ServiceOrBuilder
```

Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.

Protobuf type `google.cloud.run.v2.Service`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html) \> [AbstractMessage](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html) \> [GeneratedMessageV3](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html) \> Service

## Implements

[ServiceOrBuilder](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.ServiceOrBuilder)

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

### ANNOTATIONS\_FIELD\_NUMBER

```
public static final int ANNOTATIONS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### BINARY\_AUTHORIZATION\_FIELD\_NUMBER

```
public static final int BINARY_AUTHORIZATION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### CLIENT\_FIELD\_NUMBER

```
public static final int CLIENT_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### CLIENT\_VERSION\_FIELD\_NUMBER

```
public static final int CLIENT_VERSION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### CONDITIONS\_FIELD\_NUMBER

```
public static final int CONDITIONS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### CREATE\_TIME\_FIELD\_NUMBER

```
public static final int CREATE_TIME_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### CREATOR\_FIELD\_NUMBER

```
public static final int CREATOR_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### CUSTOM\_AUDIENCES\_FIELD\_NUMBER

```
public static final int CUSTOM_AUDIENCES_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### DEFAULT\_URI\_DISABLED\_FIELD\_NUMBER

```
public static final int DEFAULT_URI_DISABLED_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### DELETE\_TIME\_FIELD\_NUMBER

```
public static final int DELETE_TIME_FIELD_NUMBER
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

### ETAG\_FIELD\_NUMBER

```
public static final int ETAG_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### EXPIRE\_TIME\_FIELD\_NUMBER

```
public static final int EXPIRE_TIME_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### GENERATION\_FIELD\_NUMBER

```
public static final int GENERATION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### INGRESS\_FIELD\_NUMBER

```
public static final int INGRESS_FIELD_NUMBER
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

### LAST\_MODIFIER\_FIELD\_NUMBER

```
public static final int LAST_MODIFIER_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### LATEST\_CREATED\_REVISION\_FIELD\_NUMBER

```
public static final int LATEST_CREATED_REVISION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### LATEST\_READY\_REVISION\_FIELD\_NUMBER

```
public static final int LATEST_READY_REVISION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### LAUNCH\_STAGE\_FIELD\_NUMBER

```
public static final int LAUNCH_STAGE_FIELD_NUMBER
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

### OBSERVED\_GENERATION\_FIELD\_NUMBER

```
public static final int OBSERVED_GENERATION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### RECONCILING\_FIELD\_NUMBER

```
public static final int RECONCILING_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### SATISFIES\_PZS\_FIELD\_NUMBER

```
public static final int SATISFIES_PZS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### SCALING\_FIELD\_NUMBER

```
public static final int SCALING_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### TEMPLATE\_FIELD\_NUMBER

```
public static final int TEMPLATE_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### TERMINAL\_CONDITION\_FIELD\_NUMBER

```
public static final int TERMINAL_CONDITION_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### TRAFFIC\_FIELD\_NUMBER

```
public static final int TRAFFIC_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### TRAFFIC\_STATUSES\_FIELD\_NUMBER

```
public static final int TRAFFIC_STATUSES_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### UID\_FIELD\_NUMBER

```
public static final int UID_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### UPDATE\_TIME\_FIELD\_NUMBER

```
public static final int UPDATE_TIME_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### URI\_FIELD\_NUMBER

```
public static final int URI_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

## Static Methods

### getDefaultInstance()

```
public static Service getDefaultInstance()
```

**Returns**

**Type**

**Description**

`[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)`

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
public static Service.Builder newBuilder()
```

**Returns**

**Type**

**Description**

`[Service.Builder](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service.Builder)`

### newBuilder(Service prototype)

```
public static Service.Builder newBuilder(Service prototype)
```

**Parameter**

**Name**

**Description**

`prototype`

`[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)`  

**Returns**

**Type**

**Description**

`[Service.Builder](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service.Builder)`

### parseDelimitedFrom(InputStream input)

```
public static Service parseDelimitedFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static Service parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(byte\[\] data)

```
public static Service parseFrom(byte[] data)
```

**Parameter**

**Name**

**Description**

`data`

`byte[]`  

**Returns**

**Type**

**Description**

`[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(byte\[\] data, ExtensionRegistryLite extensionRegistry)

```
public static Service parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
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

`[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data)

```
public static Service parseFrom(ByteString data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

**Returns**

**Type**

**Description**

`[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)

```
public static Service parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
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

`[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(CodedInputStream input)

```
public static Service parseFrom(CodedInputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

**Returns**

**Type**

**Description**

`[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public static Service parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input)

```
public static Service parseFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static Service parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(ByteBuffer data)

```
public static Service parseFrom(ByteBuffer data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteBuffer](https://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html)`  

**Returns**

**Type**

**Description**

`[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)

```
public static Service parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
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

`[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parser()

```
public static Parser<Service> parser()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)>`

## Methods

### containsAnnotations(String key)

```
public boolean containsAnnotations(String key)
```

Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.

<p>Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 Service.

<p>This field follows Kubernetes annotations' namespacing, limits, and rules.

`map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];`

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

Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit [https://cloud.google.com/resource-manager/docs/creating-managing-labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels) or [https://cloud.google.com/run/docs/configuring/labels](https://cloud.google.com/run/docs/configuring/labels).

<p>Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Service.

`map<string, string> labels = 5 [(.google.api.field_behavior) = OPTIONAL];`

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

### getAnnotations() (deprecated)

```
public Map<String,String> getAnnotations()
```

Use [#getAnnotationsMap()](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service#com_google_cloud_run_v2_Service_getAnnotationsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getAnnotationsCount()

```
public int getAnnotationsCount()
```

Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.

<p>Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 Service.

<p>This field follows Kubernetes annotations' namespacing, limits, and rules.

`map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAnnotationsMap()

```
public Map<String,String> getAnnotationsMap()
```

Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.

<p>Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 Service.

<p>This field follows Kubernetes annotations' namespacing, limits, and rules.

`map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getAnnotationsOrDefault(String key, String defaultValue)

```
public String getAnnotationsOrDefault(String key, String defaultValue)
```

Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.

<p>Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 Service.

<p>This field follows Kubernetes annotations' namespacing, limits, and rules.

`map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];`

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

### getAnnotationsOrThrow(String key)

```
public String getAnnotationsOrThrow(String key)
```

Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.

<p>Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 Service.

<p>This field follows Kubernetes annotations' namespacing, limits, and rules.

`map<string, string> annotations = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getBinaryAuthorization()

```
public BinaryAuthorization getBinaryAuthorization()
```

Settings for the Binary Authorization feature.

`.google.cloud.run.v2.BinaryAuthorization binary_authorization = 17;`

**Returns**

**Type**

**Description**

`[BinaryAuthorization](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.BinaryAuthorization)`

The binaryAuthorization.

### getBinaryAuthorizationOrBuilder()

```
public BinaryAuthorizationOrBuilder getBinaryAuthorizationOrBuilder()
```

Settings for the Binary Authorization feature.

`.google.cloud.run.v2.BinaryAuthorization binary_authorization = 17;`

**Returns**

**Type**

**Description**

`[BinaryAuthorizationOrBuilder](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.BinaryAuthorizationOrBuilder)`

### getClient()

```
public String getClient()
```

Arbitrary identifier for the API client.

`string client = 13;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The client.

### getClientBytes()

```
public ByteString getClientBytes()
```

Arbitrary identifier for the API client.

`string client = 13;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for client.

### getClientVersion()

```
public String getClientVersion()
```

Arbitrary version identifier for the API client.

`string client_version = 14;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The clientVersion.

### getClientVersionBytes()

```
public ByteString getClientVersionBytes()
```

Arbitrary version identifier for the API client.

`string client_version = 14;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for clientVersion.

### getConditions(int index)

```
public Condition getConditions(int index)
```

Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Service does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`repeated .google.cloud.run.v2.Condition conditions = 32 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Condition](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Condition)`

### getConditionsCount()

```
public int getConditionsCount()
```

Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Service does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`repeated .google.cloud.run.v2.Condition conditions = 32 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getConditionsList()

```
public List<Condition> getConditionsList()
```

Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Service does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`repeated .google.cloud.run.v2.Condition conditions = 32 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Condition](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Condition)>`

### getConditionsOrBuilder(int index)

```
public ConditionOrBuilder getConditionsOrBuilder(int index)
```

Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Service does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`repeated .google.cloud.run.v2.Condition conditions = 32 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ConditionOrBuilder](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.ConditionOrBuilder)`

### getConditionsOrBuilderList()

```
public List<? extends ConditionOrBuilder> getConditionsOrBuilderList()
```

Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Service does not reach its Serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`repeated .google.cloud.run.v2.Condition conditions = 32 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.run.v2.ConditionOrBuilder>`

### getCreateTime()

```
public Timestamp getCreateTime()
```

Output only. The creation time.

`.google.protobuf.Timestamp create_time = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. The creation time.

`.google.protobuf.Timestamp create_time = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getCreator()

```
public String getCreator()
```

Output only. Email address of the authenticated creator.

`string creator = 11 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The creator.

### getCreatorBytes()

```
public ByteString getCreatorBytes()
```

Output only. Email address of the authenticated creator.

`string creator = 11 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for creator.

### getCustomAudiences(int index)

```
public String getCustomAudiences(int index)
```

One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests. For more information, see [https://cloud.google.com/run/docs/configuring/custom-audiences](https://cloud.google.com/run/docs/configuring/custom-audiences).

`repeated string custom_audiences = 37;`

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

The customAudiences at the given index.

### getCustomAudiencesBytes(int index)

```
public ByteString getCustomAudiencesBytes(int index)
```

One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests. For more information, see [https://cloud.google.com/run/docs/configuring/custom-audiences](https://cloud.google.com/run/docs/configuring/custom-audiences).

`repeated string custom_audiences = 37;`

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

The bytes of the customAudiences at the given index.

### getCustomAudiencesCount()

```
public int getCustomAudiencesCount()
```

One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests. For more information, see [https://cloud.google.com/run/docs/configuring/custom-audiences](https://cloud.google.com/run/docs/configuring/custom-audiences).

`repeated string custom_audiences = 37;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of customAudiences.

### getCustomAudiencesList()

```
public ProtocolStringList getCustomAudiencesList()
```

One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests. For more information, see [https://cloud.google.com/run/docs/configuring/custom-audiences](https://cloud.google.com/run/docs/configuring/custom-audiences).

`repeated string custom_audiences = 37;`

**Returns**

**Type**

**Description**

`[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)`

A list containing the customAudiences.

### getDefaultInstanceForType()

```
public Service getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)`

### getDefaultUriDisabled()

```
public boolean getDefaultUriDisabled()
```

Optional. Disables public resolution of the default URI of this service.

`bool default_uri_disabled = 22 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The defaultUriDisabled.

### getDeleteTime()

```
public Timestamp getDeleteTime()
```

Output only. The deletion time.

`.google.protobuf.Timestamp delete_time = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The deleteTime.

### getDeleteTimeOrBuilder()

```
public TimestampOrBuilder getDeleteTimeOrBuilder()
```

Output only. The deletion time.

`.google.protobuf.Timestamp delete_time = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDescription()

```
public String getDescription()
```

User-provided description of the Service. This field currently has a 512-character limit.

`string description = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public ByteString getDescriptionBytes()
```

User-provided description of the Service. This field currently has a 512-character limit.

`string description = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getEtag()

```
public String getEtag()
```

Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.

`string etag = 99 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The etag.

### getEtagBytes()

```
public ByteString getEtagBytes()
```

Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.

`string etag = 99 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for etag.

### getExpireTime()

```
public Timestamp getExpireTime()
```

Output only. For a deleted resource, the time after which it will be permamently deleted.

`.google.protobuf.Timestamp expire_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The expireTime.

### getExpireTimeOrBuilder()

```
public TimestampOrBuilder getExpireTimeOrBuilder()
```

Output only. For a deleted resource, the time after which it will be permamently deleted.

`.google.protobuf.Timestamp expire_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getGeneration()

```
public long getGeneration()
```

Output only. A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.

`int64 generation = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The generation.

### getIngress()

```
public IngressTraffic getIngress()
```

Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS\_TRAFFIC\_UNSPECIFIED if no revision is active.

`.google.cloud.run.v2.IngressTraffic ingress = 15;`

**Returns**

**Type**

**Description**

`[IngressTraffic](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.IngressTraffic)`

The ingress.

### getIngressValue()

```
public int getIngressValue()
```

Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS\_TRAFFIC\_UNSPECIFIED if no revision is active.

`.google.cloud.run.v2.IngressTraffic ingress = 15;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for ingress.

### getLabels() (deprecated)

```
public Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service#com_google_cloud_run_v2_Service_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public int getLabelsCount()
```

Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit [https://cloud.google.com/resource-manager/docs/creating-managing-labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels) or [https://cloud.google.com/run/docs/configuring/labels](https://cloud.google.com/run/docs/configuring/labels).

<p>Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Service.

`map<string, string> labels = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public Map<String,String> getLabelsMap()
```

Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit [https://cloud.google.com/resource-manager/docs/creating-managing-labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels) or [https://cloud.google.com/run/docs/configuring/labels](https://cloud.google.com/run/docs/configuring/labels).

<p>Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Service.

`map<string, string> labels = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public String getLabelsOrDefault(String key, String defaultValue)
```

Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit [https://cloud.google.com/resource-manager/docs/creating-managing-labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels) or [https://cloud.google.com/run/docs/configuring/labels](https://cloud.google.com/run/docs/configuring/labels).

<p>Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Service.

`map<string, string> labels = 5 [(.google.api.field_behavior) = OPTIONAL];`

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

Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit [https://cloud.google.com/resource-manager/docs/creating-managing-labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels) or [https://cloud.google.com/run/docs/configuring/labels](https://cloud.google.com/run/docs/configuring/labels).

<p>Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Service.

`map<string, string> labels = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getLastModifier()

```
public String getLastModifier()
```

Output only. Email address of the last authenticated modifier.

`string last_modifier = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The lastModifier.

### getLastModifierBytes()

```
public ByteString getLastModifierBytes()
```

Output only. Email address of the last authenticated modifier.

`string last_modifier = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for lastModifier.

### getLatestCreatedRevision()

```
public String getLatestCreatedRevision()
```

Output only. Name of the last created revision. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`string latest_created_revision = 34 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The latestCreatedRevision.

### getLatestCreatedRevisionBytes()

```
public ByteString getLatestCreatedRevisionBytes()
```

Output only. Name of the last created revision. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`string latest_created_revision = 34 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for latestCreatedRevision.

### getLatestReadyRevision()

```
public String getLatestReadyRevision()
```

Output only. Name of the latest revision that is serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`string latest_ready_revision = 33 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The latestReadyRevision.

### getLatestReadyRevisionBytes()

```
public ByteString getLatestReadyRevisionBytes()
```

Output only. Name of the latest revision that is serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`string latest_ready_revision = 33 [(.google.api.field_behavior) = OUTPUT_ONLY, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for latestReadyRevision.

### getLaunchStage()

```
public LaunchStage getLaunchStage()
```

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. <p> For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.

`.google.api.LaunchStage launch_stage = 16;`

**Returns**

**Type**

**Description**

`com.google.api.LaunchStage`

The launchStage.

### getLaunchStageValue()

```
public int getLaunchStageValue()
```

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports `ALPHA`, `BETA`, and `GA`. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. <p> For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.

`.google.api.LaunchStage launch_stage = 16;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for launchStage.

### getName()

```
public String getName()
```

The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service\_id.

Format: projects/{project}/locations/{location}/services/{service\_id}

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

The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service\_id.

Format: projects/{project}/locations/{location}/services/{service\_id}

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getObservedGeneration()

```
public long getObservedGeneration()
```

Output only. The generation of this Service currently serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a `string` instead of an `integer`.

`int64 observed_generation = 30 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The observedGeneration.

### getParserForType()

```
public Parser<Service> getParserForType()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[Service](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service)>`

**Overrides**

[GeneratedMessageV3.getParserForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html#com_google_protobuf_GeneratedMessageV3_getParserForType__)

### getReconciling()

```
public boolean getReconciling()
```

Output only. Returns true if the Service is currently being acted upon by the system to bring it into the desired state.

When a new Service is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Service to the desired serving state. This process is called reconciliation. While reconciliation is in process, `observed_generation`, `latest_ready_revison`, `traffic_statuses`, and `uri` will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the Service, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`.

If reconciliation succeeded, the following fields will match: `traffic` and `traffic_statuses`, `observed_generation` and `generation`, `latest_ready_revision` and `latest_created_revision`.

If reconciliation failed, `traffic_statuses`, `observed_generation`, and `latest_ready_revision` will have the state of the last serving revision, or empty for newly created Services. Additional information on the failure can be found in `terminal_condition` and `conditions`.

`bool reconciling = 98 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The reconciling.

### getSatisfiesPzs()

```
public boolean getSatisfiesPzs()
```

Output only. Reserved for future use.

`bool satisfies_pzs = 38 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The satisfiesPzs.

### getScaling()

```
public ServiceScaling getScaling()
```

Optional. Specifies service-level scaling settings

`.google.cloud.run.v2.ServiceScaling scaling = 20 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ServiceScaling](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.ServiceScaling)`

The scaling.

### getScalingOrBuilder()

```
public ServiceScalingOrBuilder getScalingOrBuilder()
```

Optional. Specifies service-level scaling settings

`.google.cloud.run.v2.ServiceScaling scaling = 20 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ServiceScalingOrBuilder](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.ServiceScalingOrBuilder)`

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

### getTemplate()

```
public RevisionTemplate getTemplate()
```

Required. The template used to create revisions for this Service.

`.google.cloud.run.v2.RevisionTemplate template = 18 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[RevisionTemplate](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.RevisionTemplate)`

The template.

### getTemplateOrBuilder()

```
public RevisionTemplateOrBuilder getTemplateOrBuilder()
```

Required. The template used to create revisions for this Service.

`.google.cloud.run.v2.RevisionTemplate template = 18 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[RevisionTemplateOrBuilder](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.RevisionTemplateOrBuilder)`

### getTerminalCondition()

```
public Condition getTerminalCondition()
```

Output only. The Condition of this Service, containing its readiness status, and detailed error information in case it did not reach a serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`.google.cloud.run.v2.Condition terminal_condition = 31 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Condition](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Condition)`

The terminalCondition.

### getTerminalConditionOrBuilder()

```
public ConditionOrBuilder getTerminalConditionOrBuilder()
```

Output only. The Condition of this Service, containing its readiness status, and detailed error information in case it did not reach a serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`.google.cloud.run.v2.Condition terminal_condition = 31 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ConditionOrBuilder](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.ConditionOrBuilder)`

### getTraffic(int index)

```
public TrafficTarget getTraffic(int index)
```

Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100% traffic to the latest `Ready` Revision.

`repeated .google.cloud.run.v2.TrafficTarget traffic = 19;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TrafficTarget](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.TrafficTarget)`

### getTrafficCount()

```
public int getTrafficCount()
```

Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100% traffic to the latest `Ready` Revision.

`repeated .google.cloud.run.v2.TrafficTarget traffic = 19;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getTrafficList()

```
public List<TrafficTarget> getTrafficList()
```

Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100% traffic to the latest `Ready` Revision.

`repeated .google.cloud.run.v2.TrafficTarget traffic = 19;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[TrafficTarget](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.TrafficTarget)>`

### getTrafficOrBuilder(int index)

```
public TrafficTargetOrBuilder getTrafficOrBuilder(int index)
```

Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100% traffic to the latest `Ready` Revision.

`repeated .google.cloud.run.v2.TrafficTarget traffic = 19;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TrafficTargetOrBuilder](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.TrafficTargetOrBuilder)`

### getTrafficOrBuilderList()

```
public List<? extends TrafficTargetOrBuilder> getTrafficOrBuilderList()
```

Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100% traffic to the latest `Ready` Revision.

`repeated .google.cloud.run.v2.TrafficTarget traffic = 19;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.run.v2.TrafficTargetOrBuilder>`

### getTrafficStatuses(int index)

```
public TrafficTargetStatus getTrafficStatuses(int index)
```

Output only. Detailed status information for corresponding traffic targets. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`repeated .google.cloud.run.v2.TrafficTargetStatus traffic_statuses = 35 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TrafficTargetStatus](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.TrafficTargetStatus)`

### getTrafficStatusesCount()

```
public int getTrafficStatusesCount()
```

Output only. Detailed status information for corresponding traffic targets. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`repeated .google.cloud.run.v2.TrafficTargetStatus traffic_statuses = 35 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getTrafficStatusesList()

```
public List<TrafficTargetStatus> getTrafficStatusesList()
```

Output only. Detailed status information for corresponding traffic targets. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`repeated .google.cloud.run.v2.TrafficTargetStatus traffic_statuses = 35 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[TrafficTargetStatus](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.TrafficTargetStatus)>`

### getTrafficStatusesOrBuilder(int index)

```
public TrafficTargetStatusOrBuilder getTrafficStatusesOrBuilder(int index)
```

Output only. Detailed status information for corresponding traffic targets. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`repeated .google.cloud.run.v2.TrafficTargetStatus traffic_statuses = 35 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TrafficTargetStatusOrBuilder](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.TrafficTargetStatusOrBuilder)`

### getTrafficStatusesOrBuilderList()

```
public List<? extends TrafficTargetStatusOrBuilder> getTrafficStatusesOrBuilderList()
```

Output only. Detailed status information for corresponding traffic targets. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`repeated .google.cloud.run.v2.TrafficTargetStatus traffic_statuses = 35 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.run.v2.TrafficTargetStatusOrBuilder>`

### getUid()

```
public String getUid()
```

Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.

`string uid = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The uid.

### getUidBytes()

```
public ByteString getUidBytes()
```

Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.

`string uid = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for uid.

### getUpdateTime()

```
public Timestamp getUpdateTime()
```

Output only. The last-modified time.

`.google.protobuf.Timestamp update_time = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. The last-modified time.

`.google.protobuf.Timestamp update_time = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getUri()

```
public String getUri()
```

Output only. The main URI in which this Service is serving traffic.

`string uri = 36 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The uri.

### getUriBytes()

```
public ByteString getUriBytes()
```

Output only. The main URI in which this Service is serving traffic.

`string uri = 36 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for uri.

### hasBinaryAuthorization()

```
public boolean hasBinaryAuthorization()
```

Settings for the Binary Authorization feature.

`.google.cloud.run.v2.BinaryAuthorization binary_authorization = 17;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the binaryAuthorization field is set.

### hasCreateTime()

```
public boolean hasCreateTime()
```

Output only. The creation time.

`.google.protobuf.Timestamp create_time = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasDeleteTime()

```
public boolean hasDeleteTime()
```

Output only. The deletion time.

`.google.protobuf.Timestamp delete_time = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the deleteTime field is set.

### hasExpireTime()

```
public boolean hasExpireTime()
```

Output only. For a deleted resource, the time after which it will be permamently deleted.

`.google.protobuf.Timestamp expire_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the expireTime field is set.

### hasScaling()

```
public boolean hasScaling()
```

Optional. Specifies service-level scaling settings

`.google.cloud.run.v2.ServiceScaling scaling = 20 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the scaling field is set.

### hasTemplate()

```
public boolean hasTemplate()
```

Required. The template used to create revisions for this Service.

`.google.cloud.run.v2.RevisionTemplate template = 18 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the template field is set.

### hasTerminalCondition()

```
public boolean hasTerminalCondition()
```

Output only. The Condition of this Service, containing its readiness status, and detailed error information in case it did not reach a serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.

`.google.cloud.run.v2.Condition terminal_condition = 31 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the terminalCondition field is set.

### hasUpdateTime()

```
public boolean hasUpdateTime()
```

Output only. The last-modified time.

`.google.protobuf.Timestamp update_time = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

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
public Service.Builder newBuilderForType()
```

**Returns**

**Type**

**Description**

`[Service.Builder](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service.Builder)`

### newBuilderForType(GeneratedMessageV3.BuilderParent parent)

```
protected Service.Builder newBuilderForType(GeneratedMessageV3.BuilderParent parent)
```

**Parameter**

**Name**

**Description**

`parent`

`[BuilderParent](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.BuilderParent.html)`  

**Returns**

**Type**

**Description**

`[Service.Builder](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service.Builder)`

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
public Service.Builder toBuilder()
```

**Returns**

**Type**

**Description**

`[Service.Builder](/java/docs/reference/google-cloud-run/0.46.0/com.google.cloud.run.v2.Service.Builder)`

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
