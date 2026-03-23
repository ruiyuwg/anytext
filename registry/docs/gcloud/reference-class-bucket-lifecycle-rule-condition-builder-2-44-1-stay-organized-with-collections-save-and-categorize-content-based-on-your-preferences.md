-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Bucket.Lifecycle.Rule.Condition.Builder (2.44.1) Stay organized with collections Save and categorize content based on your preferences.

2.64.0 (latest) 2.63.0 2.62.1 2.60.0 2.59.0 2.58.1 2.57.0 2.56.0 2.55.0 2.54.0 2.53.3 2.52.3 2.50.0 2.49.0 2.48.2 2.47.0 2.46.0 2.45.0 2.44.1 2.43.2 2.42.0 2.41.0 2.40.1 2.39.0 2.38.0 2.37.0 2.36.1 2.34.0 2.33.0 2.32.1 2.30.1 2.29.1 2.28.0 2.27.1 2.24.0 2.23.0 2.22.6 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.0 2.15.1 2.14.0 2.13.1 2.12.0 2.11.3 2.10.0 2.9.3 2.8.1 2.7.1 2.6.1 2.5.1 2.4.5 2.3.0 2.2.3 2.1.10

```
public static final class Bucket.Lifecycle.Rule.Condition.Builder extends GeneratedMessageV3.Builder<Bucket.Lifecycle.Rule.Condition.Builder> implements Bucket.Lifecycle.Rule.ConditionOrBuilder
```

A condition of an object which triggers some action.

Protobuf type `google.storage.v2.Bucket.Lifecycle.Rule.Condition`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> Bucket.Lifecycle.Rule.Condition.Builder

## Implements

[Bucket.Lifecycle.Rule.ConditionOrBuilder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.ConditionOrBuilder)

## Inherited Members

[AbstractMessage.Builder.findInitializationErrors()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_findInitializationErrors__)

[AbstractMessage.Builder.getInitializationErrorString()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_getInitializationErrorString__)

[AbstractMessage.Builder.internalMergeFrom(AbstractMessageLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_internalMergeFrom_com_google_protobuf_AbstractMessageLite_)

[AbstractMessage.Builder.mergeFrom(byte\[\])](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_byte___)

[AbstractMessage.Builder.mergeFrom(byte\[\],ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_byte___com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessage.Builder.mergeFrom(byte\[\],int,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_byte___int_int_)

[AbstractMessage.Builder.mergeFrom(byte\[\],int,int,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_byte___int_int_com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessage.Builder.mergeFrom(ByteString)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_ByteString_)

[AbstractMessage.Builder.mergeFrom(ByteString,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_ByteString_com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessage.Builder.mergeFrom(CodedInputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_)

[AbstractMessage.Builder.mergeFrom(CodedInputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessage.Builder.mergeFrom(Message)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

[AbstractMessage.Builder.mergeFrom(InputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_java_io_InputStream_)

[AbstractMessage.Builder.mergeFrom(InputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_java_io_InputStream_com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessage.Builder.newUninitializedMessageException(Message)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_newUninitializedMessageException_com_google_protobuf_Message_)

[AbstractMessage.Builder.toString()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_toString__)

[AbstractMessageLite.Builder.<T>addAll(Iterable<T>,Collection<? super T>)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder__T_addAll_java_lang_Iterable_T__java_util_Collection___super_T__)

[AbstractMessageLite.Builder.<T>addAll(Iterable<T>,List<? super T>)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder__T_addAll_java_lang_Iterable_T__java_util_List___super_T__)

[AbstractMessageLite.Builder.internalMergeFrom(MessageType)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder_internalMergeFrom_MessageType_)

[AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder_mergeDelimitedFrom_java_io_InputStream_)

[AbstractMessageLite.Builder.mergeDelimitedFrom(InputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder_mergeDelimitedFrom_java_io_InputStream_com_google_protobuf_ExtensionRegistryLite_)

[AbstractMessageLite.Builder.mergeFrom(MessageLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder_mergeFrom_com_google_protobuf_MessageLite_)

[AbstractMessageLite.Builder.newUninitializedMessageException(MessageLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html#com_google_protobuf_AbstractMessageLite_Builder_newUninitializedMessageException_com_google_protobuf_MessageLite_)

[GeneratedMessageV3.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

[GeneratedMessageV3.Builder.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

[GeneratedMessageV3.Builder.clearField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.clearOneof(Descriptors.OneofDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

[GeneratedMessageV3.Builder.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

[GeneratedMessageV3.Builder.getAllFields()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getAllFields__)

[GeneratedMessageV3.Builder.getDescriptorForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getDescriptorForType__)

[GeneratedMessageV3.Builder.getField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.getFieldBuilder(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getFieldBuilder_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getOneofFieldDescriptor_com_google_protobuf_Descriptors_OneofDescriptor_)

[GeneratedMessageV3.Builder.getParentForChildren()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getParentForChildren__)

[GeneratedMessageV3.Builder.getRepeatedField(Descriptors.FieldDescriptor,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_)

[GeneratedMessageV3.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getRepeatedFieldBuilder_com_google_protobuf_Descriptors_FieldDescriptor_int_)

[GeneratedMessageV3.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getRepeatedFieldCount_com_google_protobuf_Descriptors_FieldDescriptor_)

com.google.protobuf.GeneratedMessageV3.Builder.getUnknownFieldSetBuilder()

[GeneratedMessageV3.Builder.getUnknownFields()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getUnknownFields__)

[GeneratedMessageV3.Builder.hasField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_hasField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.hasOneof(Descriptors.OneofDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_hasOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

[GeneratedMessageV3.Builder.internalGetFieldAccessorTable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetFieldAccessorTable__)

[GeneratedMessageV3.Builder.internalGetMapField(int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetMapField_int_)

com.google.protobuf.GeneratedMessageV3.Builder.internalGetMapFieldReflection(int)

[GeneratedMessageV3.Builder.internalGetMutableMapField(int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetMutableMapField_int_)

com.google.protobuf.GeneratedMessageV3.Builder.internalGetMutableMapFieldReflection(int)

[GeneratedMessageV3.Builder.isClean()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_isClean__)

[GeneratedMessageV3.Builder.isInitialized()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_isInitialized__)

[GeneratedMessageV3.Builder.markClean()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_markClean__)

[GeneratedMessageV3.Builder.mergeUnknownFields(UnknownFieldSet)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

com.google.protobuf.GeneratedMessageV3.Builder.mergeUnknownLengthDelimitedField(int,com.google.protobuf.ByteString)

com.google.protobuf.GeneratedMessageV3.Builder.mergeUnknownVarintField(int,int)

[GeneratedMessageV3.Builder.newBuilderForField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_newBuilderForField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.onBuilt()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_onBuilt__)

[GeneratedMessageV3.Builder.onChanged()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_onChanged__)

com.google.protobuf.GeneratedMessageV3.Builder.parseUnknownField(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite,int)

[GeneratedMessageV3.Builder.setField(Descriptors.FieldDescriptor,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

[GeneratedMessageV3.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

com.google.protobuf.GeneratedMessageV3.Builder.setUnknownFieldSetBuilder(com.google.protobuf.UnknownFieldSet.Builder)

[GeneratedMessageV3.Builder.setUnknownFields(UnknownFieldSet)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

[GeneratedMessageV3.Builder.setUnknownFieldsProto3(UnknownFieldSet)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFieldsProto3_com_google_protobuf_UnknownFieldSet_)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Methods

### getDescriptor()

```
public static final Descriptors.Descriptor getDescriptor()
```

**Returns**

**Type**

**Description**

`[Descriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.Descriptor.html)`

## Methods

### addAllMatchesPrefix(Iterable<String> values)

```
public Bucket.Lifecycle.Rule.Condition.Builder addAllMatchesPrefix(Iterable<String> values)
```

List of object name prefixes. If any prefix exactly matches the beginning of the object name, the condition evaluates to true.

`repeated string matches_prefix = 11;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The matchesPrefix to add.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### addAllMatchesStorageClass(Iterable<String> values)

```
public Bucket.Lifecycle.Rule.Condition.Builder addAllMatchesStorageClass(Iterable<String> values)
```

Objects having any of the storage classes specified by this condition will be matched. Values include `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `STANDARD`, and `DURABLE_REDUCED_AVAILABILITY`.

`repeated string matches_storage_class = 5;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The matchesStorageClass to add.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### addAllMatchesSuffix(Iterable<String> values)

```
public Bucket.Lifecycle.Rule.Condition.Builder addAllMatchesSuffix(Iterable<String> values)
```

List of object name suffixes. If any suffix exactly matches the end of the object name, the condition evaluates to true.

`repeated string matches_suffix = 12;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The matchesSuffix to add.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### addMatchesPrefix(String value)

```
public Bucket.Lifecycle.Rule.Condition.Builder addMatchesPrefix(String value)
```

List of object name prefixes. If any prefix exactly matches the beginning of the object name, the condition evaluates to true.

`repeated string matches_prefix = 11;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The matchesPrefix to add.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### addMatchesPrefixBytes(ByteString value)

```
public Bucket.Lifecycle.Rule.Condition.Builder addMatchesPrefixBytes(ByteString value)
```

List of object name prefixes. If any prefix exactly matches the beginning of the object name, the condition evaluates to true.

`repeated string matches_prefix = 11;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the matchesPrefix to add.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### addMatchesStorageClass(String value)

```
public Bucket.Lifecycle.Rule.Condition.Builder addMatchesStorageClass(String value)
```

Objects having any of the storage classes specified by this condition will be matched. Values include `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `STANDARD`, and `DURABLE_REDUCED_AVAILABILITY`.

`repeated string matches_storage_class = 5;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The matchesStorageClass to add.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### addMatchesStorageClassBytes(ByteString value)

```
public Bucket.Lifecycle.Rule.Condition.Builder addMatchesStorageClassBytes(ByteString value)
```

Objects having any of the storage classes specified by this condition will be matched. Values include `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `STANDARD`, and `DURABLE_REDUCED_AVAILABILITY`.

`repeated string matches_storage_class = 5;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the matchesStorageClass to add.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### addMatchesSuffix(String value)

```
public Bucket.Lifecycle.Rule.Condition.Builder addMatchesSuffix(String value)
```

List of object name suffixes. If any suffix exactly matches the end of the object name, the condition evaluates to true.

`repeated string matches_suffix = 12;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The matchesSuffix to add.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### addMatchesSuffixBytes(ByteString value)

```
public Bucket.Lifecycle.Rule.Condition.Builder addMatchesSuffixBytes(ByteString value)
```

List of object name suffixes. If any suffix exactly matches the end of the object name, the condition evaluates to true.

`repeated string matches_suffix = 12;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the matchesSuffix to add.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public Bucket.Lifecycle.Rule.Condition.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
```

**Parameters**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

`value`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public Bucket.Lifecycle.Rule.Condition build()
```

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition)`

### buildPartial()

```
public Bucket.Lifecycle.Rule.Condition buildPartial()
```

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition)`

### clear()

```
public Bucket.Lifecycle.Rule.Condition.Builder clear()
```

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearAgeDays()

```
public Bucket.Lifecycle.Rule.Condition.Builder clearAgeDays()
```

Age of an object (in days). This condition is satisfied when an object reaches the specified age. A value of 0 indicates that all objects immediately match this condition.

`optional int32 age_days = 1;`

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### clearCreatedBefore()

```
public Bucket.Lifecycle.Rule.Condition.Builder clearCreatedBefore()
```

This condition is satisfied when an object is created before midnight of the specified date in UTC.

`.google.type.Date created_before = 2;`

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

### clearCustomTimeBefore()

```
public Bucket.Lifecycle.Rule.Condition.Builder clearCustomTimeBefore()
```

An object matches this condition if the custom timestamp set on the object is before the specified date in UTC.

`.google.type.Date custom_time_before = 8;`

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

### clearDaysSinceCustomTime()

```
public Bucket.Lifecycle.Rule.Condition.Builder clearDaysSinceCustomTime()
```

Number of days that have elapsed since the custom timestamp set on an object. The value of the field must be a nonnegative integer.

`optional int32 days_since_custom_time = 7;`

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### clearDaysSinceNoncurrentTime()

```
public Bucket.Lifecycle.Rule.Condition.Builder clearDaysSinceNoncurrentTime()
```

This condition is relevant only for versioned objects. An object version satisfies this condition only if these many days have been passed since it became noncurrent. The value of the field must be a nonnegative integer. If it's zero, the object version will become eligible for Lifecycle action as soon as it becomes noncurrent.

`optional int32 days_since_noncurrent_time = 9;`

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public Bucket.Lifecycle.Rule.Condition.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearIsLive()

```
public Bucket.Lifecycle.Rule.Condition.Builder clearIsLive()
```

Relevant only for versioned objects. If the value is `true`, this condition matches live objects; if the value is `false`, it matches archived objects.

`optional bool is_live = 3;`

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### clearMatchesPrefix()

```
public Bucket.Lifecycle.Rule.Condition.Builder clearMatchesPrefix()
```

List of object name prefixes. If any prefix exactly matches the beginning of the object name, the condition evaluates to true.

`repeated string matches_prefix = 11;`

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### clearMatchesStorageClass()

```
public Bucket.Lifecycle.Rule.Condition.Builder clearMatchesStorageClass()
```

Objects having any of the storage classes specified by this condition will be matched. Values include `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `STANDARD`, and `DURABLE_REDUCED_AVAILABILITY`.

`repeated string matches_storage_class = 5;`

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### clearMatchesSuffix()

```
public Bucket.Lifecycle.Rule.Condition.Builder clearMatchesSuffix()
```

List of object name suffixes. If any suffix exactly matches the end of the object name, the condition evaluates to true.

`repeated string matches_suffix = 12;`

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### clearNoncurrentTimeBefore()

```
public Bucket.Lifecycle.Rule.Condition.Builder clearNoncurrentTimeBefore()
```

This condition is relevant only for versioned objects. An object version satisfies this condition only if it became noncurrent before the specified date in UTC.

`.google.type.Date noncurrent_time_before = 10;`

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

### clearNumNewerVersions()

```
public Bucket.Lifecycle.Rule.Condition.Builder clearNumNewerVersions()
```

Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version) newer than this version of the object.

`optional int32 num_newer_versions = 4;`

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public Bucket.Lifecycle.Rule.Condition.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clone()

```
public Bucket.Lifecycle.Rule.Condition.Builder clone()
```

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getAgeDays()

```
public int getAgeDays()
```

Age of an object (in days). This condition is satisfied when an object reaches the specified age. A value of 0 indicates that all objects immediately match this condition.

`optional int32 age_days = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The ageDays.

### getCreatedBefore()

```
public Date getCreatedBefore()
```

This condition is satisfied when an object is created before midnight of the specified date in UTC.

`.google.type.Date created_before = 2;`

**Returns**

**Type**

**Description**

`com.google.type.Date`

The createdBefore.

### getCreatedBeforeBuilder()

```
public Date.Builder getCreatedBeforeBuilder()
```

This condition is satisfied when an object is created before midnight of the specified date in UTC.

`.google.type.Date created_before = 2;`

**Returns**

**Type**

**Description**

`com.google.type.Date.Builder`

### getCreatedBeforeOrBuilder()

```
public DateOrBuilder getCreatedBeforeOrBuilder()
```

This condition is satisfied when an object is created before midnight of the specified date in UTC.

`.google.type.Date created_before = 2;`

**Returns**

**Type**

**Description**

`com.google.type.DateOrBuilder`

### getCustomTimeBefore()

```
public Date getCustomTimeBefore()
```

An object matches this condition if the custom timestamp set on the object is before the specified date in UTC.

`.google.type.Date custom_time_before = 8;`

**Returns**

**Type**

**Description**

`com.google.type.Date`

The customTimeBefore.

### getCustomTimeBeforeBuilder()

```
public Date.Builder getCustomTimeBeforeBuilder()
```

An object matches this condition if the custom timestamp set on the object is before the specified date in UTC.

`.google.type.Date custom_time_before = 8;`

**Returns**

**Type**

**Description**

`com.google.type.Date.Builder`

### getCustomTimeBeforeOrBuilder()

```
public DateOrBuilder getCustomTimeBeforeOrBuilder()
```

An object matches this condition if the custom timestamp set on the object is before the specified date in UTC.

`.google.type.Date custom_time_before = 8;`

**Returns**

**Type**

**Description**

`com.google.type.DateOrBuilder`

### getDaysSinceCustomTime()

```
public int getDaysSinceCustomTime()
```

Number of days that have elapsed since the custom timestamp set on an object. The value of the field must be a nonnegative integer.

`optional int32 days_since_custom_time = 7;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The daysSinceCustomTime.

### getDaysSinceNoncurrentTime()

```
public int getDaysSinceNoncurrentTime()
```

This condition is relevant only for versioned objects. An object version satisfies this condition only if these many days have been passed since it became noncurrent. The value of the field must be a nonnegative integer. If it's zero, the object version will become eligible for Lifecycle action as soon as it becomes noncurrent.

`optional int32 days_since_noncurrent_time = 9;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The daysSinceNoncurrentTime.

### getDefaultInstanceForType()

```
public Bucket.Lifecycle.Rule.Condition getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition)`

### getDescriptorForType()

```
public Descriptors.Descriptor getDescriptorForType()
```

**Returns**

**Type**

**Description**

`[Descriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.Descriptor.html)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.getDescriptorForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getDescriptorForType__)

### getIsLive()

```
public boolean getIsLive()
```

Relevant only for versioned objects. If the value is `true`, this condition matches live objects; if the value is `false`, it matches archived objects.

`optional bool is_live = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The isLive.

### getMatchesPrefix(int index)

```
public String getMatchesPrefix(int index)
```

List of object name prefixes. If any prefix exactly matches the beginning of the object name, the condition evaluates to true.

`repeated string matches_prefix = 11;`

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

The matchesPrefix at the given index.

### getMatchesPrefixBytes(int index)

```
public ByteString getMatchesPrefixBytes(int index)
```

List of object name prefixes. If any prefix exactly matches the beginning of the object name, the condition evaluates to true.

`repeated string matches_prefix = 11;`

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

The bytes of the matchesPrefix at the given index.

### getMatchesPrefixCount()

```
public int getMatchesPrefixCount()
```

List of object name prefixes. If any prefix exactly matches the beginning of the object name, the condition evaluates to true.

`repeated string matches_prefix = 11;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of matchesPrefix.

### getMatchesPrefixList()

```
public ProtocolStringList getMatchesPrefixList()
```

List of object name prefixes. If any prefix exactly matches the beginning of the object name, the condition evaluates to true.

`repeated string matches_prefix = 11;`

**Returns**

**Type**

**Description**

`[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)`

A list containing the matchesPrefix.

### getMatchesStorageClass(int index)

```
public String getMatchesStorageClass(int index)
```

Objects having any of the storage classes specified by this condition will be matched. Values include `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `STANDARD`, and `DURABLE_REDUCED_AVAILABILITY`.

`repeated string matches_storage_class = 5;`

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

The matchesStorageClass at the given index.

### getMatchesStorageClassBytes(int index)

```
public ByteString getMatchesStorageClassBytes(int index)
```

Objects having any of the storage classes specified by this condition will be matched. Values include `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `STANDARD`, and `DURABLE_REDUCED_AVAILABILITY`.

`repeated string matches_storage_class = 5;`

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

The bytes of the matchesStorageClass at the given index.

### getMatchesStorageClassCount()

```
public int getMatchesStorageClassCount()
```

Objects having any of the storage classes specified by this condition will be matched. Values include `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `STANDARD`, and `DURABLE_REDUCED_AVAILABILITY`.

`repeated string matches_storage_class = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of matchesStorageClass.

### getMatchesStorageClassList()

```
public ProtocolStringList getMatchesStorageClassList()
```

Objects having any of the storage classes specified by this condition will be matched. Values include `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `STANDARD`, and `DURABLE_REDUCED_AVAILABILITY`.

`repeated string matches_storage_class = 5;`

**Returns**

**Type**

**Description**

`[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)`

A list containing the matchesStorageClass.

### getMatchesSuffix(int index)

```
public String getMatchesSuffix(int index)
```

List of object name suffixes. If any suffix exactly matches the end of the object name, the condition evaluates to true.

`repeated string matches_suffix = 12;`

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

The matchesSuffix at the given index.

### getMatchesSuffixBytes(int index)

```
public ByteString getMatchesSuffixBytes(int index)
```

List of object name suffixes. If any suffix exactly matches the end of the object name, the condition evaluates to true.

`repeated string matches_suffix = 12;`

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

The bytes of the matchesSuffix at the given index.

### getMatchesSuffixCount()

```
public int getMatchesSuffixCount()
```

List of object name suffixes. If any suffix exactly matches the end of the object name, the condition evaluates to true.

`repeated string matches_suffix = 12;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of matchesSuffix.

### getMatchesSuffixList()

```
public ProtocolStringList getMatchesSuffixList()
```

List of object name suffixes. If any suffix exactly matches the end of the object name, the condition evaluates to true.

`repeated string matches_suffix = 12;`

**Returns**

**Type**

**Description**

`[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)`

A list containing the matchesSuffix.

### getNoncurrentTimeBefore()

```
public Date getNoncurrentTimeBefore()
```

This condition is relevant only for versioned objects. An object version satisfies this condition only if it became noncurrent before the specified date in UTC.

`.google.type.Date noncurrent_time_before = 10;`

**Returns**

**Type**

**Description**

`com.google.type.Date`

The noncurrentTimeBefore.

### getNoncurrentTimeBeforeBuilder()

```
public Date.Builder getNoncurrentTimeBeforeBuilder()
```

This condition is relevant only for versioned objects. An object version satisfies this condition only if it became noncurrent before the specified date in UTC.

`.google.type.Date noncurrent_time_before = 10;`

**Returns**

**Type**

**Description**

`com.google.type.Date.Builder`

### getNoncurrentTimeBeforeOrBuilder()

```
public DateOrBuilder getNoncurrentTimeBeforeOrBuilder()
```

This condition is relevant only for versioned objects. An object version satisfies this condition only if it became noncurrent before the specified date in UTC.

`.google.type.Date noncurrent_time_before = 10;`

**Returns**

**Type**

**Description**

`com.google.type.DateOrBuilder`

### getNumNewerVersions()

```
public int getNumNewerVersions()
```

Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version) newer than this version of the object.

`optional int32 num_newer_versions = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The numNewerVersions.

### hasAgeDays()

```
public boolean hasAgeDays()
```

Age of an object (in days). This condition is satisfied when an object reaches the specified age. A value of 0 indicates that all objects immediately match this condition.

`optional int32 age_days = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the ageDays field is set.

### hasCreatedBefore()

```
public boolean hasCreatedBefore()
```

This condition is satisfied when an object is created before midnight of the specified date in UTC.

`.google.type.Date created_before = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createdBefore field is set.

### hasCustomTimeBefore()

```
public boolean hasCustomTimeBefore()
```

An object matches this condition if the custom timestamp set on the object is before the specified date in UTC.

`.google.type.Date custom_time_before = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the customTimeBefore field is set.

### hasDaysSinceCustomTime()

```
public boolean hasDaysSinceCustomTime()
```

Number of days that have elapsed since the custom timestamp set on an object. The value of the field must be a nonnegative integer.

`optional int32 days_since_custom_time = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the daysSinceCustomTime field is set.

### hasDaysSinceNoncurrentTime()

```
public boolean hasDaysSinceNoncurrentTime()
```

This condition is relevant only for versioned objects. An object version satisfies this condition only if these many days have been passed since it became noncurrent. The value of the field must be a nonnegative integer. If it's zero, the object version will become eligible for Lifecycle action as soon as it becomes noncurrent.

`optional int32 days_since_noncurrent_time = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the daysSinceNoncurrentTime field is set.

### hasIsLive()

```
public boolean hasIsLive()
```

Relevant only for versioned objects. If the value is `true`, this condition matches live objects; if the value is `false`, it matches archived objects.

`optional bool is_live = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the isLive field is set.

### hasNoncurrentTimeBefore()

```
public boolean hasNoncurrentTimeBefore()
```

This condition is relevant only for versioned objects. An object version satisfies this condition only if it became noncurrent before the specified date in UTC.

`.google.type.Date noncurrent_time_before = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the noncurrentTimeBefore field is set.

### hasNumNewerVersions()

```
public boolean hasNumNewerVersions()
```

Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version) newer than this version of the object.

`optional int32 num_newer_versions = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the numNewerVersions field is set.

### internalGetFieldAccessorTable()

```
protected GeneratedMessageV3.FieldAccessorTable internalGetFieldAccessorTable()
```

**Returns**

**Type**

**Description**

`[FieldAccessorTable](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.FieldAccessorTable.html)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.internalGetFieldAccessorTable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetFieldAccessorTable__)

### isInitialized()

```
public final boolean isInitialized()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.isInitialized()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_isInitialized__)

### mergeCreatedBefore(Date value)

```
public Bucket.Lifecycle.Rule.Condition.Builder mergeCreatedBefore(Date value)
```

This condition is satisfied when an object is created before midnight of the specified date in UTC.

`.google.type.Date created_before = 2;`

**Parameter**

**Name**

**Description**

`value`

`com.google.type.Date`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

### mergeCustomTimeBefore(Date value)

```
public Bucket.Lifecycle.Rule.Condition.Builder mergeCustomTimeBefore(Date value)
```

An object matches this condition if the custom timestamp set on the object is before the specified date in UTC.

`.google.type.Date custom_time_before = 8;`

**Parameter**

**Name**

**Description**

`value`

`com.google.type.Date`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public Bucket.Lifecycle.Rule.Condition.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public Bucket.Lifecycle.Rule.Condition.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeFrom(Bucket.Lifecycle.Rule.Condition other)

```
public Bucket.Lifecycle.Rule.Condition.Builder mergeFrom(Bucket.Lifecycle.Rule.Condition other)
```

**Parameter**

**Name**

**Description**

`other`

`[Bucket.Lifecycle.Rule.Condition](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition)`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

### mergeNoncurrentTimeBefore(Date value)

```
public Bucket.Lifecycle.Rule.Condition.Builder mergeNoncurrentTimeBefore(Date value)
```

This condition is relevant only for versioned objects. An object version satisfies this condition only if it became noncurrent before the specified date in UTC.

`.google.type.Date noncurrent_time_before = 10;`

**Parameter**

**Name**

**Description**

`value`

`com.google.type.Date`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final Bucket.Lifecycle.Rule.Condition.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setAgeDays(int value)

```
public Bucket.Lifecycle.Rule.Condition.Builder setAgeDays(int value)
```

Age of an object (in days). This condition is satisfied when an object reaches the specified age. A value of 0 indicates that all objects immediately match this condition.

`optional int32 age_days = 1;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The ageDays to set.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### setCreatedBefore(Date value)

```
public Bucket.Lifecycle.Rule.Condition.Builder setCreatedBefore(Date value)
```

This condition is satisfied when an object is created before midnight of the specified date in UTC.

`.google.type.Date created_before = 2;`

**Parameter**

**Name**

**Description**

`value`

`com.google.type.Date`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

### setCreatedBefore(Date.Builder builderForValue)

```
public Bucket.Lifecycle.Rule.Condition.Builder setCreatedBefore(Date.Builder builderForValue)
```

This condition is satisfied when an object is created before midnight of the specified date in UTC.

`.google.type.Date created_before = 2;`

**Parameter**

**Name**

**Description**

`builderForValue`

`com.google.type.Date.Builder`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

### setCustomTimeBefore(Date value)

```
public Bucket.Lifecycle.Rule.Condition.Builder setCustomTimeBefore(Date value)
```

An object matches this condition if the custom timestamp set on the object is before the specified date in UTC.

`.google.type.Date custom_time_before = 8;`

**Parameter**

**Name**

**Description**

`value`

`com.google.type.Date`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

### setCustomTimeBefore(Date.Builder builderForValue)

```
public Bucket.Lifecycle.Rule.Condition.Builder setCustomTimeBefore(Date.Builder builderForValue)
```

An object matches this condition if the custom timestamp set on the object is before the specified date in UTC.

`.google.type.Date custom_time_before = 8;`

**Parameter**

**Name**

**Description**

`builderForValue`

`com.google.type.Date.Builder`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

### setDaysSinceCustomTime(int value)

```
public Bucket.Lifecycle.Rule.Condition.Builder setDaysSinceCustomTime(int value)
```

Number of days that have elapsed since the custom timestamp set on an object. The value of the field must be a nonnegative integer.

`optional int32 days_since_custom_time = 7;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The daysSinceCustomTime to set.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### setDaysSinceNoncurrentTime(int value)

```
public Bucket.Lifecycle.Rule.Condition.Builder setDaysSinceNoncurrentTime(int value)
```

This condition is relevant only for versioned objects. An object version satisfies this condition only if these many days have been passed since it became noncurrent. The value of the field must be a nonnegative integer. If it's zero, the object version will become eligible for Lifecycle action as soon as it becomes noncurrent.

`optional int32 days_since_noncurrent_time = 9;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The daysSinceNoncurrentTime to set.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public Bucket.Lifecycle.Rule.Condition.Builder setField(Descriptors.FieldDescriptor field, Object value)
```

**Parameters**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

`value`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setIsLive(boolean value)

```
public Bucket.Lifecycle.Rule.Condition.Builder setIsLive(boolean value)
```

Relevant only for versioned objects. If the value is `true`, this condition matches live objects; if the value is `false`, it matches archived objects.

`optional bool is_live = 3;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The isLive to set.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### setMatchesPrefix(int index, String value)

```
public Bucket.Lifecycle.Rule.Condition.Builder setMatchesPrefix(int index, String value)
```

List of object name prefixes. If any prefix exactly matches the beginning of the object name, the condition evaluates to true.

`repeated string matches_prefix = 11;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The matchesPrefix to set.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### setMatchesStorageClass(int index, String value)

```
public Bucket.Lifecycle.Rule.Condition.Builder setMatchesStorageClass(int index, String value)
```

Objects having any of the storage classes specified by this condition will be matched. Values include `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `STANDARD`, and `DURABLE_REDUCED_AVAILABILITY`.

`repeated string matches_storage_class = 5;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The matchesStorageClass to set.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### setMatchesSuffix(int index, String value)

```
public Bucket.Lifecycle.Rule.Condition.Builder setMatchesSuffix(int index, String value)
```

List of object name suffixes. If any suffix exactly matches the end of the object name, the condition evaluates to true.

`repeated string matches_suffix = 12;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The matchesSuffix to set.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### setNoncurrentTimeBefore(Date value)

```
public Bucket.Lifecycle.Rule.Condition.Builder setNoncurrentTimeBefore(Date value)
```

This condition is relevant only for versioned objects. An object version satisfies this condition only if it became noncurrent before the specified date in UTC.

`.google.type.Date noncurrent_time_before = 10;`

**Parameter**

**Name**

**Description**

`value`

`com.google.type.Date`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

### setNoncurrentTimeBefore(Date.Builder builderForValue)

```
public Bucket.Lifecycle.Rule.Condition.Builder setNoncurrentTimeBefore(Date.Builder builderForValue)
```

This condition is relevant only for versioned objects. An object version satisfies this condition only if it became noncurrent before the specified date in UTC.

`.google.type.Date noncurrent_time_before = 10;`

**Parameter**

**Name**

**Description**

`builderForValue`

`com.google.type.Date.Builder`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

### setNumNewerVersions(int value)

```
public Bucket.Lifecycle.Rule.Condition.Builder setNumNewerVersions(int value)
```

Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version) newer than this version of the object.

`optional int32 num_newer_versions = 4;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The numNewerVersions to set.

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public Bucket.Lifecycle.Rule.Condition.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
```

**Parameters**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final Bucket.Lifecycle.Rule.Condition.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Bucket.Lifecycle.Rule.Condition.Builder](/java/docs/reference/google-cloud-storage/2.44.1/com.google.storage.v2.Bucket.Lifecycle.Rule.Condition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
