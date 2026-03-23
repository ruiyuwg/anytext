-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CertificateAuthority.CertificateAuthorityPolicy (2.25.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.4 2.4.0 2.3.0 2.2.5

```
public static final class CertificateAuthority.CertificateAuthorityPolicy extends GeneratedMessageV3 implements CertificateAuthority.CertificateAuthorityPolicyOrBuilder
```

The issuing policy for a CertificateAuthority. Certificates will not be successfully issued from this CertificateAuthority if they violate the policy.

Protobuf type `google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html) \> [AbstractMessage](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html) \> [GeneratedMessageV3](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.html) \> CertificateAuthority.CertificateAuthorityPolicy

## Implements

[CertificateAuthority.CertificateAuthorityPolicyOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicyOrBuilder)

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

### ALLOWED\_COMMON\_NAMES\_FIELD\_NUMBER

```
public static final int ALLOWED_COMMON_NAMES_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### ALLOWED\_CONFIG\_LIST\_FIELD\_NUMBER

```
public static final int ALLOWED_CONFIG_LIST_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### ALLOWED\_ISSUANCE\_MODES\_FIELD\_NUMBER

```
public static final int ALLOWED_ISSUANCE_MODES_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### ALLOWED\_LOCATIONS\_AND\_ORGANIZATIONS\_FIELD\_NUMBER

```
public static final int ALLOWED_LOCATIONS_AND_ORGANIZATIONS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### ALLOWED\_SANS\_FIELD\_NUMBER

```
public static final int ALLOWED_SANS_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### MAXIMUM\_LIFETIME\_FIELD\_NUMBER

```
public static final int MAXIMUM_LIFETIME_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### OVERWRITE\_CONFIG\_VALUES\_FIELD\_NUMBER

```
public static final int OVERWRITE_CONFIG_VALUES_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

## Static Methods

### getDefaultInstance()

```
public static CertificateAuthority.CertificateAuthorityPolicy getDefaultInstance()
```

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)`

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
public static CertificateAuthority.CertificateAuthorityPolicy.Builder newBuilder()
```

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy.Builder](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.Builder)`

### newBuilder(CertificateAuthority.CertificateAuthorityPolicy prototype)

```
public static CertificateAuthority.CertificateAuthorityPolicy.Builder newBuilder(CertificateAuthority.CertificateAuthorityPolicy prototype)
```

**Parameter**

**Name**

**Description**

`prototype`

`[CertificateAuthority.CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)`  

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy.Builder](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.Builder)`

### parseDelimitedFrom(InputStream input)

```
public static CertificateAuthority.CertificateAuthorityPolicy parseDelimitedFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static CertificateAuthority.CertificateAuthorityPolicy parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

`[CertificateAuthority.CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(byte\[\] data)

```
public static CertificateAuthority.CertificateAuthorityPolicy parseFrom(byte[] data)
```

**Parameter**

**Name**

**Description**

`data`

`byte[]`  

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(byte\[\] data, ExtensionRegistryLite extensionRegistry)

```
public static CertificateAuthority.CertificateAuthorityPolicy parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
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

`[CertificateAuthority.CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data)

```
public static CertificateAuthority.CertificateAuthorityPolicy parseFrom(ByteString data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)

```
public static CertificateAuthority.CertificateAuthorityPolicy parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
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

`[CertificateAuthority.CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(CodedInputStream input)

```
public static CertificateAuthority.CertificateAuthorityPolicy parseFrom(CodedInputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public static CertificateAuthority.CertificateAuthorityPolicy parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[CertificateAuthority.CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input)

```
public static CertificateAuthority.CertificateAuthorityPolicy parseFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static CertificateAuthority.CertificateAuthorityPolicy parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
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

`[CertificateAuthority.CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(ByteBuffer data)

```
public static CertificateAuthority.CertificateAuthorityPolicy parseFrom(ByteBuffer data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteBuffer](https://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html)`  

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)

```
public static CertificateAuthority.CertificateAuthorityPolicy parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
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

`[CertificateAuthority.CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parser()

```
public static Parser<CertificateAuthority.CertificateAuthorityPolicy> parser()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)>`

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

### getAllowedCommonNames(int index)

```
public String getAllowedCommonNames(int index)
```

Optional. If any value is specified here, then all Certificates issued by the CertificateAuthority must match at least one listed value. If no value is specified, all values will be allowed for this fied. Glob patterns are also supported.

`repeated string allowed_common_names = 4 [(.google.api.field_behavior) = OPTIONAL];`

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

The allowedCommonNames at the given index.

### getAllowedCommonNamesBytes(int index)

```
public ByteString getAllowedCommonNamesBytes(int index)
```

Optional. If any value is specified here, then all Certificates issued by the CertificateAuthority must match at least one listed value. If no value is specified, all values will be allowed for this fied. Glob patterns are also supported.

`repeated string allowed_common_names = 4 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the allowedCommonNames at the given index.

### getAllowedCommonNamesCount()

```
public int getAllowedCommonNamesCount()
```

Optional. If any value is specified here, then all Certificates issued by the CertificateAuthority must match at least one listed value. If no value is specified, all values will be allowed for this fied. Glob patterns are also supported.

`repeated string allowed_common_names = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of allowedCommonNames.

### getAllowedCommonNamesList()

```
public ProtocolStringList getAllowedCommonNamesList()
```

Optional. If any value is specified here, then all Certificates issued by the CertificateAuthority must match at least one listed value. If no value is specified, all values will be allowed for this fied. Glob patterns are also supported.

`repeated string allowed_common_names = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)`

A list containing the allowedCommonNames.

### getAllowedConfigList()

```
public CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList getAllowedConfigList()
```

Optional. All Certificates issued by the CertificateAuthority must match at least one listed ReusableConfigWrapper in the list.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList allowed_config_list = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList)`

The allowedConfigList.

### getAllowedConfigListOrBuilder()

```
public CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigListOrBuilder getAllowedConfigListOrBuilder()
```

Optional. All Certificates issued by the CertificateAuthority must match at least one listed ReusableConfigWrapper in the list.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList allowed_config_list = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigListOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigListOrBuilder)`

### getAllowedIssuanceModes()

```
public CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes getAllowedIssuanceModes()
```

Optional. If specified, then only methods allowed in the IssuanceModes may be used to issue Certificates.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes allowed_issuance_modes = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes)`

The allowedIssuanceModes.

### getAllowedIssuanceModesOrBuilder()

```
public CertificateAuthority.CertificateAuthorityPolicy.IssuanceModesOrBuilder getAllowedIssuanceModesOrBuilder()
```

Optional. If specified, then only methods allowed in the IssuanceModes may be used to issue Certificates.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes allowed_issuance_modes = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy.IssuanceModesOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModesOrBuilder)`

### getAllowedLocationsAndOrganizations(int index)

```
public Subject getAllowedLocationsAndOrganizations(int index)
```

Optional. If any Subject is specified here, then all Certificates issued by the CertificateAuthority must match at least one listed Subject. If a Subject has an empty field, any value will be allowed for that field.

`repeated .google.cloud.security.privateca.v1beta1.Subject allowed_locations_and_organizations = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Subject](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.Subject)`

### getAllowedLocationsAndOrganizationsCount()

```
public int getAllowedLocationsAndOrganizationsCount()
```

Optional. If any Subject is specified here, then all Certificates issued by the CertificateAuthority must match at least one listed Subject. If a Subject has an empty field, any value will be allowed for that field.

`repeated .google.cloud.security.privateca.v1beta1.Subject allowed_locations_and_organizations = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAllowedLocationsAndOrganizationsList()

```
public List<Subject> getAllowedLocationsAndOrganizationsList()
```

Optional. If any Subject is specified here, then all Certificates issued by the CertificateAuthority must match at least one listed Subject. If a Subject has an empty field, any value will be allowed for that field.

`repeated .google.cloud.security.privateca.v1beta1.Subject allowed_locations_and_organizations = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Subject](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.Subject)>`

### getAllowedLocationsAndOrganizationsOrBuilder(int index)

```
public SubjectOrBuilder getAllowedLocationsAndOrganizationsOrBuilder(int index)
```

Optional. If any Subject is specified here, then all Certificates issued by the CertificateAuthority must match at least one listed Subject. If a Subject has an empty field, any value will be allowed for that field.

`repeated .google.cloud.security.privateca.v1beta1.Subject allowed_locations_and_organizations = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SubjectOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.SubjectOrBuilder)`

### getAllowedLocationsAndOrganizationsOrBuilderList()

```
public List<? extends SubjectOrBuilder> getAllowedLocationsAndOrganizationsOrBuilderList()
```

Optional. If any Subject is specified here, then all Certificates issued by the CertificateAuthority must match at least one listed Subject. If a Subject has an empty field, any value will be allowed for that field.

`repeated .google.cloud.security.privateca.v1beta1.Subject allowed_locations_and_organizations = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.security.privateca.v1beta1.SubjectOrBuilder>`

### getAllowedSans()

```
public CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames getAllowedSans()
```

Optional. If a AllowedSubjectAltNames is specified here, then all Certificates issued by the CertificateAuthority must match AllowedSubjectAltNames. If no value or an empty value is specified, any value will be allowed for the SubjectAltNames field.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames allowed_sans = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames)`

The allowedSans.

### getAllowedSansOrBuilder()

```
public CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNamesOrBuilder getAllowedSansOrBuilder()
```

Optional. If a AllowedSubjectAltNames is specified here, then all Certificates issued by the CertificateAuthority must match AllowedSubjectAltNames. If no value or an empty value is specified, any value will be allowed for the SubjectAltNames field.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames allowed_sans = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNamesOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNamesOrBuilder)`

### getConfigPolicyCase()

```
public CertificateAuthority.CertificateAuthorityPolicy.ConfigPolicyCase getConfigPolicyCase()
```

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy.ConfigPolicyCase](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.ConfigPolicyCase)`

### getDefaultInstanceForType()

```
public CertificateAuthority.CertificateAuthorityPolicy getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)`

### getMaximumLifetime()

```
public Duration getMaximumLifetime()
```

Optional. The maximum lifetime allowed by the CertificateAuthority. Note that if the any part if the issuing chain expires before a Certificate's requested maximum\_lifetime, the effective lifetime will be explicitly truncated.

`.google.protobuf.Duration maximum_lifetime = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The maximumLifetime.

### getMaximumLifetimeOrBuilder()

```
public DurationOrBuilder getMaximumLifetimeOrBuilder()
```

Optional. The maximum lifetime allowed by the CertificateAuthority. Note that if the any part if the issuing chain expires before a Certificate's requested maximum\_lifetime, the effective lifetime will be explicitly truncated.

`.google.protobuf.Duration maximum_lifetime = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getOverwriteConfigValues()

```
public ReusableConfigWrapper getOverwriteConfigValues()
```

Optional. All Certificates issued by the CertificateAuthority will use the provided configuration values, overwriting any requested configuration values.

`.google.cloud.security.privateca.v1beta1.ReusableConfigWrapper overwrite_config_values = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ReusableConfigWrapper](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.ReusableConfigWrapper)`

The overwriteConfigValues.

### getOverwriteConfigValuesOrBuilder()

```
public ReusableConfigWrapperOrBuilder getOverwriteConfigValuesOrBuilder()
```

Optional. All Certificates issued by the CertificateAuthority will use the provided configuration values, overwriting any requested configuration values.

`.google.cloud.security.privateca.v1beta1.ReusableConfigWrapper overwrite_config_values = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ReusableConfigWrapperOrBuilder](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.ReusableConfigWrapperOrBuilder)`

### getParserForType()

```
public Parser<CertificateAuthority.CertificateAuthorityPolicy> getParserForType()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[CertificateAuthorityPolicy](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy)>`

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

### hasAllowedConfigList()

```
public boolean hasAllowedConfigList()
```

Optional. All Certificates issued by the CertificateAuthority must match at least one listed ReusableConfigWrapper in the list.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedConfigList allowed_config_list = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the allowedConfigList field is set.

### hasAllowedIssuanceModes()

```
public boolean hasAllowedIssuanceModes()
```

Optional. If specified, then only methods allowed in the IssuanceModes may be used to issue Certificates.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.IssuanceModes allowed_issuance_modes = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the allowedIssuanceModes field is set.

### hasAllowedSans()

```
public boolean hasAllowedSans()
```

Optional. If a AllowedSubjectAltNames is specified here, then all Certificates issued by the CertificateAuthority must match AllowedSubjectAltNames. If no value or an empty value is specified, any value will be allowed for the SubjectAltNames field.

`.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.AllowedSubjectAltNames allowed_sans = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the allowedSans field is set.

### hasMaximumLifetime()

```
public boolean hasMaximumLifetime()
```

Optional. The maximum lifetime allowed by the CertificateAuthority. Note that if the any part if the issuing chain expires before a Certificate's requested maximum\_lifetime, the effective lifetime will be explicitly truncated.

`.google.protobuf.Duration maximum_lifetime = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the maximumLifetime field is set.

### hasOverwriteConfigValues()

```
public boolean hasOverwriteConfigValues()
```

Optional. All Certificates issued by the CertificateAuthority will use the provided configuration values, overwriting any requested configuration values.

`.google.cloud.security.privateca.v1beta1.ReusableConfigWrapper overwrite_config_values = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the overwriteConfigValues field is set.

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
public CertificateAuthority.CertificateAuthorityPolicy.Builder newBuilderForType()
```

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy.Builder](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.Builder)`

### newBuilderForType(GeneratedMessageV3.BuilderParent parent)

```
protected CertificateAuthority.CertificateAuthorityPolicy.Builder newBuilderForType(GeneratedMessageV3.BuilderParent parent)
```

**Parameter**

**Name**

**Description**

`parent`

`[BuilderParent](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.BuilderParent.html)`  

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy.Builder](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.Builder)`

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
public CertificateAuthority.CertificateAuthorityPolicy.Builder toBuilder()
```

**Returns**

**Type**

**Description**

`[CertificateAuthority.CertificateAuthorityPolicy.Builder](/java/docs/reference/google-cloud-security-private-ca/2.25.0/com.google.cloud.security.privateca.v1beta1.CertificateAuthority.CertificateAuthorityPolicy.Builder)`

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
