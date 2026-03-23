-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class RewriteObjectRequest.Builder (2.39.0) Stay organized with collections Save and categorize content based on your preferences.

2.64.0 (latest) 2.63.0 2.62.1 2.60.0 2.59.0 2.58.1 2.57.0 2.56.0 2.55.0 2.54.0 2.53.3 2.52.3 2.50.0 2.49.0 2.48.2 2.47.0 2.46.0 2.45.0 2.44.1 2.43.2 2.42.0 2.41.0 2.40.1 2.39.0 2.38.0 2.37.0 2.36.1 2.34.0 2.33.0 2.32.1 2.30.1 2.29.1 2.28.0 2.27.1 2.24.0 2.23.0 2.22.6 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.0 2.15.1 2.14.0 2.13.1 2.12.0 2.11.3 2.10.0 2.9.3 2.8.1 2.7.1 2.6.1 2.5.1 2.4.5 2.3.0 2.2.3 2.1.10

```
public static final class RewriteObjectRequest.Builder extends GeneratedMessageV3.Builder<RewriteObjectRequest.Builder> implements RewriteObjectRequestOrBuilder
```

Request message for RewriteObject. If the source object is encrypted using a Customer-Supplied Encryption Key the key information must be provided in the copy\_source\_encryption\_algorithm, copy\_source\_encryption\_key\_bytes, and copy\_source\_encryption\_key\_sha256\_bytes fields. If the destination object should be encrypted the keying information should be provided in the encryption\_algorithm, encryption\_key\_bytes, and encryption\_key\_sha256\_bytes fields of the common\_object\_request\_params.customer\_encryption field.

Protobuf type `google.storage.v2.RewriteObjectRequest`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> RewriteObjectRequest.Builder

## Implements

[RewriteObjectRequestOrBuilder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequestOrBuilder)

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

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public RewriteObjectRequest.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public RewriteObjectRequest build()
```

**Returns**

**Type**

**Description**

`[RewriteObjectRequest](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest)`

### buildPartial()

```
public RewriteObjectRequest buildPartial()
```

**Returns**

**Type**

**Description**

`[RewriteObjectRequest](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest)`

### clear()

```
public RewriteObjectRequest.Builder clear()
```

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearCommonObjectRequestParams()

```
public RewriteObjectRequest.Builder clearCommonObjectRequestParams()
```

A set of parameters common to Storage API requests concerning an object.

`.google.storage.v2.CommonObjectRequestParams common_object_request_params = 19;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

### clearCopySourceEncryptionAlgorithm()

```
public RewriteObjectRequest.Builder clearCopySourceEncryptionAlgorithm()
```

The algorithm used to encrypt the source object, if any. Used if the source object was encrypted with a Customer-Supplied Encryption Key.

`string copy_source_encryption_algorithm = 16;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearCopySourceEncryptionKeyBytes()

```
public RewriteObjectRequest.Builder clearCopySourceEncryptionKeyBytes()
```

The raw bytes (not base64-encoded) AES-256 encryption key used to encrypt the source object, if it was encrypted with a Customer-Supplied Encryption Key.

`bytes copy_source_encryption_key_bytes = 21;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearCopySourceEncryptionKeySha256Bytes()

```
public RewriteObjectRequest.Builder clearCopySourceEncryptionKeySha256Bytes()
```

The raw bytes (not base64-encoded) SHA256 hash of the encryption key used to encrypt the source object, if it was encrypted with a Customer-Supplied Encryption Key.

`bytes copy_source_encryption_key_sha256_bytes = 22;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearDestination()

```
public RewriteObjectRequest.Builder clearDestination()
```

Properties of the destination, post-rewrite object. The `name`, `bucket` and `kms_key` fields must not be populated (these values are specified in the `destination_name`, `destination_bucket`, and `destination_kms_key` fields). If `destination` is present it will be used to construct the destination object's metadata; otherwise the destination object's metadata will be copied from the source object.

`.google.storage.v2.Object destination = 1;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

### clearDestinationBucket()

```
public RewriteObjectRequest.Builder clearDestinationBucket()
```

Required. Immutable. The name of the bucket containing the destination object.

`string destination_bucket = 25 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearDestinationKmsKey()

```
public RewriteObjectRequest.Builder clearDestinationKmsKey()
```

The name of the Cloud KMS key that will be used to encrypt the destination object. The Cloud KMS key must be located in same location as the object. If the parameter is not specified, the request uses the destination bucket's default encryption key, if any, or else the Google-managed encryption key.

`string destination_kms_key = 27 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearDestinationName()

```
public RewriteObjectRequest.Builder clearDestinationName()
```

Required. Immutable. The name of the destination object. See the [Naming Guidelines](https://cloud.google.com/storage/docs/objects#naming). Example: `test.txt` The `name` field by itself does not uniquely identify a Cloud Storage object. A Cloud Storage object is uniquely identified by the tuple of (bucket, object, generation).

`string destination_name = 24 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearDestinationPredefinedAcl()

```
public RewriteObjectRequest.Builder clearDestinationPredefinedAcl()
```

Apply a predefined set of access controls to the destination object. Valid values are "authenticatedRead", "bucketOwnerFullControl", "bucketOwnerRead", "private", "projectPrivate", or "publicRead".

`string destination_predefined_acl = 28;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public RewriteObjectRequest.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearIfGenerationMatch()

```
public RewriteObjectRequest.Builder clearIfGenerationMatch()
```

Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.

`optional int64 if_generation_match = 7;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearIfGenerationNotMatch()

```
public RewriteObjectRequest.Builder clearIfGenerationNotMatch()
```

Makes the operation conditional on whether the object's live generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.

`optional int64 if_generation_not_match = 8;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearIfMetagenerationMatch()

```
public RewriteObjectRequest.Builder clearIfMetagenerationMatch()
```

Makes the operation conditional on whether the destination object's current metageneration matches the given value.

`optional int64 if_metageneration_match = 9;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearIfMetagenerationNotMatch()

```
public RewriteObjectRequest.Builder clearIfMetagenerationNotMatch()
```

Makes the operation conditional on whether the destination object's current metageneration does not match the given value.

`optional int64 if_metageneration_not_match = 10;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearIfSourceGenerationMatch()

```
public RewriteObjectRequest.Builder clearIfSourceGenerationMatch()
```

Makes the operation conditional on whether the source object's live generation matches the given value.

`optional int64 if_source_generation_match = 11;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearIfSourceGenerationNotMatch()

```
public RewriteObjectRequest.Builder clearIfSourceGenerationNotMatch()
```

Makes the operation conditional on whether the source object's live generation does not match the given value.

`optional int64 if_source_generation_not_match = 12;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearIfSourceMetagenerationMatch()

```
public RewriteObjectRequest.Builder clearIfSourceMetagenerationMatch()
```

Makes the operation conditional on whether the source object's current metageneration matches the given value.

`optional int64 if_source_metageneration_match = 13;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearIfSourceMetagenerationNotMatch()

```
public RewriteObjectRequest.Builder clearIfSourceMetagenerationNotMatch()
```

Makes the operation conditional on whether the source object's current metageneration does not match the given value.

`optional int64 if_source_metageneration_not_match = 14;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearMaxBytesRewrittenPerCall()

```
public RewriteObjectRequest.Builder clearMaxBytesRewrittenPerCall()
```

The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the `rewriteToken` is invalid.

`int64 max_bytes_rewritten_per_call = 15;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearObjectChecksums()

```
public RewriteObjectRequest.Builder clearObjectChecksums()
```

The checksums of the complete object. This will be used to validate the destination object after rewriting.

`.google.storage.v2.ObjectChecksums object_checksums = 29;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public RewriteObjectRequest.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearRewriteToken()

```
public RewriteObjectRequest.Builder clearRewriteToken()
```

Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.

`string rewrite_token = 5;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearSourceBucket()

```
public RewriteObjectRequest.Builder clearSourceBucket()
```

Required. Name of the bucket in which to find the source object.

`string source_bucket = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearSourceGeneration()

```
public RewriteObjectRequest.Builder clearSourceGeneration()
```

If present, selects a specific revision of the source object (as opposed to the latest version, the default).

`int64 source_generation = 4;`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clearSourceObject()

```
public RewriteObjectRequest.Builder clearSourceObject()
```

Required. Name of the source object.

`string source_object = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### clone()

```
public RewriteObjectRequest.Builder clone()
```

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getCommonObjectRequestParams()

```
public CommonObjectRequestParams getCommonObjectRequestParams()
```

A set of parameters common to Storage API requests concerning an object.

`.google.storage.v2.CommonObjectRequestParams common_object_request_params = 19;`

**Returns**

**Type**

**Description**

`[CommonObjectRequestParams](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.CommonObjectRequestParams)`

The commonObjectRequestParams.

### getCommonObjectRequestParamsBuilder()

```
public CommonObjectRequestParams.Builder getCommonObjectRequestParamsBuilder()
```

A set of parameters common to Storage API requests concerning an object.

`.google.storage.v2.CommonObjectRequestParams common_object_request_params = 19;`

**Returns**

**Type**

**Description**

`[CommonObjectRequestParams.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.CommonObjectRequestParams.Builder)`

### getCommonObjectRequestParamsOrBuilder()

```
public CommonObjectRequestParamsOrBuilder getCommonObjectRequestParamsOrBuilder()
```

A set of parameters common to Storage API requests concerning an object.

`.google.storage.v2.CommonObjectRequestParams common_object_request_params = 19;`

**Returns**

**Type**

**Description**

`[CommonObjectRequestParamsOrBuilder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.CommonObjectRequestParamsOrBuilder)`

### getCopySourceEncryptionAlgorithm()

```
public String getCopySourceEncryptionAlgorithm()
```

The algorithm used to encrypt the source object, if any. Used if the source object was encrypted with a Customer-Supplied Encryption Key.

`string copy_source_encryption_algorithm = 16;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The copySourceEncryptionAlgorithm.

### getCopySourceEncryptionAlgorithmBytes()

```
public ByteString getCopySourceEncryptionAlgorithmBytes()
```

The algorithm used to encrypt the source object, if any. Used if the source object was encrypted with a Customer-Supplied Encryption Key.

`string copy_source_encryption_algorithm = 16;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for copySourceEncryptionAlgorithm.

### getCopySourceEncryptionKeyBytes()

```
public ByteString getCopySourceEncryptionKeyBytes()
```

The raw bytes (not base64-encoded) AES-256 encryption key used to encrypt the source object, if it was encrypted with a Customer-Supplied Encryption Key.

`bytes copy_source_encryption_key_bytes = 21;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The copySourceEncryptionKeyBytes.

### getCopySourceEncryptionKeySha256Bytes()

```
public ByteString getCopySourceEncryptionKeySha256Bytes()
```

The raw bytes (not base64-encoded) SHA256 hash of the encryption key used to encrypt the source object, if it was encrypted with a Customer-Supplied Encryption Key.

`bytes copy_source_encryption_key_sha256_bytes = 22;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The copySourceEncryptionKeySha256Bytes.

### getDefaultInstanceForType()

```
public RewriteObjectRequest getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[RewriteObjectRequest](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest)`

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

### getDestination()

```
public Object getDestination()
```

Properties of the destination, post-rewrite object. The `name`, `bucket` and `kms_key` fields must not be populated (these values are specified in the `destination_name`, `destination_bucket`, and `destination_kms_key` fields). If `destination` is present it will be used to construct the destination object's metadata; otherwise the destination object's metadata will be copied from the source object.

`.google.storage.v2.Object destination = 1;`

**Returns**

**Type**

**Description**

`[Object](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.Object)`

The destination.

### getDestinationBucket()

```
public String getDestinationBucket()
```

Required. Immutable. The name of the bucket containing the destination object.

`string destination_bucket = 25 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The destinationBucket.

### getDestinationBucketBytes()

```
public ByteString getDestinationBucketBytes()
```

Required. Immutable. The name of the bucket containing the destination object.

`string destination_bucket = 25 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for destinationBucket.

### getDestinationBuilder()

```
public Object.Builder getDestinationBuilder()
```

Properties of the destination, post-rewrite object. The `name`, `bucket` and `kms_key` fields must not be populated (these values are specified in the `destination_name`, `destination_bucket`, and `destination_kms_key` fields). If `destination` is present it will be used to construct the destination object's metadata; otherwise the destination object's metadata will be copied from the source object.

`.google.storage.v2.Object destination = 1;`

**Returns**

**Type**

**Description**

`[Object.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.Object.Builder)`

### getDestinationKmsKey()

```
public String getDestinationKmsKey()
```

The name of the Cloud KMS key that will be used to encrypt the destination object. The Cloud KMS key must be located in same location as the object. If the parameter is not specified, the request uses the destination bucket's default encryption key, if any, or else the Google-managed encryption key.

`string destination_kms_key = 27 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The destinationKmsKey.

### getDestinationKmsKeyBytes()

```
public ByteString getDestinationKmsKeyBytes()
```

The name of the Cloud KMS key that will be used to encrypt the destination object. The Cloud KMS key must be located in same location as the object. If the parameter is not specified, the request uses the destination bucket's default encryption key, if any, or else the Google-managed encryption key.

`string destination_kms_key = 27 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for destinationKmsKey.

### getDestinationName()

```
public String getDestinationName()
```

Required. Immutable. The name of the destination object. See the [Naming Guidelines](https://cloud.google.com/storage/docs/objects#naming). Example: `test.txt` The `name` field by itself does not uniquely identify a Cloud Storage object. A Cloud Storage object is uniquely identified by the tuple of (bucket, object, generation).

`string destination_name = 24 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The destinationName.

### getDestinationNameBytes()

```
public ByteString getDestinationNameBytes()
```

Required. Immutable. The name of the destination object. See the [Naming Guidelines](https://cloud.google.com/storage/docs/objects#naming). Example: `test.txt` The `name` field by itself does not uniquely identify a Cloud Storage object. A Cloud Storage object is uniquely identified by the tuple of (bucket, object, generation).

`string destination_name = 24 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for destinationName.

### getDestinationOrBuilder()

```
public ObjectOrBuilder getDestinationOrBuilder()
```

Properties of the destination, post-rewrite object. The `name`, `bucket` and `kms_key` fields must not be populated (these values are specified in the `destination_name`, `destination_bucket`, and `destination_kms_key` fields). If `destination` is present it will be used to construct the destination object's metadata; otherwise the destination object's metadata will be copied from the source object.

`.google.storage.v2.Object destination = 1;`

**Returns**

**Type**

**Description**

`[ObjectOrBuilder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.ObjectOrBuilder)`

### getDestinationPredefinedAcl()

```
public String getDestinationPredefinedAcl()
```

Apply a predefined set of access controls to the destination object. Valid values are "authenticatedRead", "bucketOwnerFullControl", "bucketOwnerRead", "private", "projectPrivate", or "publicRead".

`string destination_predefined_acl = 28;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The destinationPredefinedAcl.

### getDestinationPredefinedAclBytes()

```
public ByteString getDestinationPredefinedAclBytes()
```

Apply a predefined set of access controls to the destination object. Valid values are "authenticatedRead", "bucketOwnerFullControl", "bucketOwnerRead", "private", "projectPrivate", or "publicRead".

`string destination_predefined_acl = 28;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for destinationPredefinedAcl.

### getIfGenerationMatch()

```
public long getIfGenerationMatch()
```

Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.

`optional int64 if_generation_match = 7;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The ifGenerationMatch.

### getIfGenerationNotMatch()

```
public long getIfGenerationNotMatch()
```

Makes the operation conditional on whether the object's live generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.

`optional int64 if_generation_not_match = 8;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The ifGenerationNotMatch.

### getIfMetagenerationMatch()

```
public long getIfMetagenerationMatch()
```

Makes the operation conditional on whether the destination object's current metageneration matches the given value.

`optional int64 if_metageneration_match = 9;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The ifMetagenerationMatch.

### getIfMetagenerationNotMatch()

```
public long getIfMetagenerationNotMatch()
```

Makes the operation conditional on whether the destination object's current metageneration does not match the given value.

`optional int64 if_metageneration_not_match = 10;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The ifMetagenerationNotMatch.

### getIfSourceGenerationMatch()

```
public long getIfSourceGenerationMatch()
```

Makes the operation conditional on whether the source object's live generation matches the given value.

`optional int64 if_source_generation_match = 11;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The ifSourceGenerationMatch.

### getIfSourceGenerationNotMatch()

```
public long getIfSourceGenerationNotMatch()
```

Makes the operation conditional on whether the source object's live generation does not match the given value.

`optional int64 if_source_generation_not_match = 12;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The ifSourceGenerationNotMatch.

### getIfSourceMetagenerationMatch()

```
public long getIfSourceMetagenerationMatch()
```

Makes the operation conditional on whether the source object's current metageneration matches the given value.

`optional int64 if_source_metageneration_match = 13;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The ifSourceMetagenerationMatch.

### getIfSourceMetagenerationNotMatch()

```
public long getIfSourceMetagenerationNotMatch()
```

Makes the operation conditional on whether the source object's current metageneration does not match the given value.

`optional int64 if_source_metageneration_not_match = 14;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The ifSourceMetagenerationNotMatch.

### getMaxBytesRewrittenPerCall()

```
public long getMaxBytesRewrittenPerCall()
```

The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the `rewriteToken` is invalid.

`int64 max_bytes_rewritten_per_call = 15;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The maxBytesRewrittenPerCall.

### getObjectChecksums()

```
public ObjectChecksums getObjectChecksums()
```

The checksums of the complete object. This will be used to validate the destination object after rewriting.

`.google.storage.v2.ObjectChecksums object_checksums = 29;`

**Returns**

**Type**

**Description**

`[ObjectChecksums](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.ObjectChecksums)`

The objectChecksums.

### getObjectChecksumsBuilder()

```
public ObjectChecksums.Builder getObjectChecksumsBuilder()
```

The checksums of the complete object. This will be used to validate the destination object after rewriting.

`.google.storage.v2.ObjectChecksums object_checksums = 29;`

**Returns**

**Type**

**Description**

`[ObjectChecksums.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.ObjectChecksums.Builder)`

### getObjectChecksumsOrBuilder()

```
public ObjectChecksumsOrBuilder getObjectChecksumsOrBuilder()
```

The checksums of the complete object. This will be used to validate the destination object after rewriting.

`.google.storage.v2.ObjectChecksums object_checksums = 29;`

**Returns**

**Type**

**Description**

`[ObjectChecksumsOrBuilder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.ObjectChecksumsOrBuilder)`

### getRewriteToken()

```
public String getRewriteToken()
```

Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.

`string rewrite_token = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The rewriteToken.

### getRewriteTokenBytes()

```
public ByteString getRewriteTokenBytes()
```

Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.

`string rewrite_token = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for rewriteToken.

### getSourceBucket()

```
public String getSourceBucket()
```

Required. Name of the bucket in which to find the source object.

`string source_bucket = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The sourceBucket.

### getSourceBucketBytes()

```
public ByteString getSourceBucketBytes()
```

Required. Name of the bucket in which to find the source object.

`string source_bucket = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for sourceBucket.

### getSourceGeneration()

```
public long getSourceGeneration()
```

If present, selects a specific revision of the source object (as opposed to the latest version, the default).

`int64 source_generation = 4;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The sourceGeneration.

### getSourceObject()

```
public String getSourceObject()
```

Required. Name of the source object.

`string source_object = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The sourceObject.

### getSourceObjectBytes()

```
public ByteString getSourceObjectBytes()
```

Required. Name of the source object.

`string source_object = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for sourceObject.

### hasCommonObjectRequestParams()

```
public boolean hasCommonObjectRequestParams()
```

A set of parameters common to Storage API requests concerning an object.

`.google.storage.v2.CommonObjectRequestParams common_object_request_params = 19;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the commonObjectRequestParams field is set.

### hasDestination()

```
public boolean hasDestination()
```

Properties of the destination, post-rewrite object. The `name`, `bucket` and `kms_key` fields must not be populated (these values are specified in the `destination_name`, `destination_bucket`, and `destination_kms_key` fields). If `destination` is present it will be used to construct the destination object's metadata; otherwise the destination object's metadata will be copied from the source object.

`.google.storage.v2.Object destination = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the destination field is set.

### hasIfGenerationMatch()

```
public boolean hasIfGenerationMatch()
```

Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.

`optional int64 if_generation_match = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the ifGenerationMatch field is set.

### hasIfGenerationNotMatch()

```
public boolean hasIfGenerationNotMatch()
```

Makes the operation conditional on whether the object's live generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.

`optional int64 if_generation_not_match = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the ifGenerationNotMatch field is set.

### hasIfMetagenerationMatch()

```
public boolean hasIfMetagenerationMatch()
```

Makes the operation conditional on whether the destination object's current metageneration matches the given value.

`optional int64 if_metageneration_match = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the ifMetagenerationMatch field is set.

### hasIfMetagenerationNotMatch()

```
public boolean hasIfMetagenerationNotMatch()
```

Makes the operation conditional on whether the destination object's current metageneration does not match the given value.

`optional int64 if_metageneration_not_match = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the ifMetagenerationNotMatch field is set.

### hasIfSourceGenerationMatch()

```
public boolean hasIfSourceGenerationMatch()
```

Makes the operation conditional on whether the source object's live generation matches the given value.

`optional int64 if_source_generation_match = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the ifSourceGenerationMatch field is set.

### hasIfSourceGenerationNotMatch()

```
public boolean hasIfSourceGenerationNotMatch()
```

Makes the operation conditional on whether the source object's live generation does not match the given value.

`optional int64 if_source_generation_not_match = 12;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the ifSourceGenerationNotMatch field is set.

### hasIfSourceMetagenerationMatch()

```
public boolean hasIfSourceMetagenerationMatch()
```

Makes the operation conditional on whether the source object's current metageneration matches the given value.

`optional int64 if_source_metageneration_match = 13;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the ifSourceMetagenerationMatch field is set.

### hasIfSourceMetagenerationNotMatch()

```
public boolean hasIfSourceMetagenerationNotMatch()
```

Makes the operation conditional on whether the source object's current metageneration does not match the given value.

`optional int64 if_source_metageneration_not_match = 14;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the ifSourceMetagenerationNotMatch field is set.

### hasObjectChecksums()

```
public boolean hasObjectChecksums()
```

The checksums of the complete object. This will be used to validate the destination object after rewriting.

`.google.storage.v2.ObjectChecksums object_checksums = 29;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the objectChecksums field is set.

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

### mergeCommonObjectRequestParams(CommonObjectRequestParams value)

```
public RewriteObjectRequest.Builder mergeCommonObjectRequestParams(CommonObjectRequestParams value)
```

A set of parameters common to Storage API requests concerning an object.

`.google.storage.v2.CommonObjectRequestParams common_object_request_params = 19;`

**Parameter**

**Name**

**Description**

`value`

`[CommonObjectRequestParams](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.CommonObjectRequestParams)`  

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

### mergeDestination(Object value)

```
public RewriteObjectRequest.Builder mergeDestination(Object value)
```

Properties of the destination, post-rewrite object. The `name`, `bucket` and `kms_key` fields must not be populated (these values are specified in the `destination_name`, `destination_bucket`, and `destination_kms_key` fields). If `destination` is present it will be used to construct the destination object's metadata; otherwise the destination object's metadata will be copied from the source object.

`.google.storage.v2.Object destination = 1;`

**Parameter**

**Name**

**Description**

`value`

`[Object](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.Object)`  

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public RewriteObjectRequest.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public RewriteObjectRequest.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeFrom(RewriteObjectRequest other)

```
public RewriteObjectRequest.Builder mergeFrom(RewriteObjectRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[RewriteObjectRequest](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest)`  

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

### mergeObjectChecksums(ObjectChecksums value)

```
public RewriteObjectRequest.Builder mergeObjectChecksums(ObjectChecksums value)
```

The checksums of the complete object. This will be used to validate the destination object after rewriting.

`.google.storage.v2.ObjectChecksums object_checksums = 29;`

**Parameter**

**Name**

**Description**

`value`

`[ObjectChecksums](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.ObjectChecksums)`  

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final RewriteObjectRequest.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setCommonObjectRequestParams(CommonObjectRequestParams value)

```
public RewriteObjectRequest.Builder setCommonObjectRequestParams(CommonObjectRequestParams value)
```

A set of parameters common to Storage API requests concerning an object.

`.google.storage.v2.CommonObjectRequestParams common_object_request_params = 19;`

**Parameter**

**Name**

**Description**

`value`

`[CommonObjectRequestParams](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.CommonObjectRequestParams)`  

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

### setCommonObjectRequestParams(CommonObjectRequestParams.Builder builderForValue)

```
public RewriteObjectRequest.Builder setCommonObjectRequestParams(CommonObjectRequestParams.Builder builderForValue)
```

A set of parameters common to Storage API requests concerning an object.

`.google.storage.v2.CommonObjectRequestParams common_object_request_params = 19;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[CommonObjectRequestParams.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.CommonObjectRequestParams.Builder)`  

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

### setCopySourceEncryptionAlgorithm(String value)

```
public RewriteObjectRequest.Builder setCopySourceEncryptionAlgorithm(String value)
```

The algorithm used to encrypt the source object, if any. Used if the source object was encrypted with a Customer-Supplied Encryption Key.

`string copy_source_encryption_algorithm = 16;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The copySourceEncryptionAlgorithm to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setCopySourceEncryptionAlgorithmBytes(ByteString value)

```
public RewriteObjectRequest.Builder setCopySourceEncryptionAlgorithmBytes(ByteString value)
```

The algorithm used to encrypt the source object, if any. Used if the source object was encrypted with a Customer-Supplied Encryption Key.

`string copy_source_encryption_algorithm = 16;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for copySourceEncryptionAlgorithm to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setCopySourceEncryptionKeyBytes(ByteString value)

```
public RewriteObjectRequest.Builder setCopySourceEncryptionKeyBytes(ByteString value)
```

The raw bytes (not base64-encoded) AES-256 encryption key used to encrypt the source object, if it was encrypted with a Customer-Supplied Encryption Key.

`bytes copy_source_encryption_key_bytes = 21;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The copySourceEncryptionKeyBytes to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setCopySourceEncryptionKeySha256Bytes(ByteString value)

```
public RewriteObjectRequest.Builder setCopySourceEncryptionKeySha256Bytes(ByteString value)
```

The raw bytes (not base64-encoded) SHA256 hash of the encryption key used to encrypt the source object, if it was encrypted with a Customer-Supplied Encryption Key.

`bytes copy_source_encryption_key_sha256_bytes = 22;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The copySourceEncryptionKeySha256Bytes to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setDestination(Object value)

```
public RewriteObjectRequest.Builder setDestination(Object value)
```

Properties of the destination, post-rewrite object. The `name`, `bucket` and `kms_key` fields must not be populated (these values are specified in the `destination_name`, `destination_bucket`, and `destination_kms_key` fields). If `destination` is present it will be used to construct the destination object's metadata; otherwise the destination object's metadata will be copied from the source object.

`.google.storage.v2.Object destination = 1;`

**Parameter**

**Name**

**Description**

`value`

`[Object](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.Object)`  

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

### setDestination(Object.Builder builderForValue)

```
public RewriteObjectRequest.Builder setDestination(Object.Builder builderForValue)
```

Properties of the destination, post-rewrite object. The `name`, `bucket` and `kms_key` fields must not be populated (these values are specified in the `destination_name`, `destination_bucket`, and `destination_kms_key` fields). If `destination` is present it will be used to construct the destination object's metadata; otherwise the destination object's metadata will be copied from the source object.

`.google.storage.v2.Object destination = 1;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Object.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.Object.Builder)`  

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

### setDestinationBucket(String value)

```
public RewriteObjectRequest.Builder setDestinationBucket(String value)
```

Required. Immutable. The name of the bucket containing the destination object.

`string destination_bucket = 25 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The destinationBucket to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setDestinationBucketBytes(ByteString value)

```
public RewriteObjectRequest.Builder setDestinationBucketBytes(ByteString value)
```

Required. Immutable. The name of the bucket containing the destination object.

`string destination_bucket = 25 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for destinationBucket to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setDestinationKmsKey(String value)

```
public RewriteObjectRequest.Builder setDestinationKmsKey(String value)
```

The name of the Cloud KMS key that will be used to encrypt the destination object. The Cloud KMS key must be located in same location as the object. If the parameter is not specified, the request uses the destination bucket's default encryption key, if any, or else the Google-managed encryption key.

`string destination_kms_key = 27 [(.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The destinationKmsKey to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setDestinationKmsKeyBytes(ByteString value)

```
public RewriteObjectRequest.Builder setDestinationKmsKeyBytes(ByteString value)
```

The name of the Cloud KMS key that will be used to encrypt the destination object. The Cloud KMS key must be located in same location as the object. If the parameter is not specified, the request uses the destination bucket's default encryption key, if any, or else the Google-managed encryption key.

`string destination_kms_key = 27 [(.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for destinationKmsKey to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setDestinationName(String value)

```
public RewriteObjectRequest.Builder setDestinationName(String value)
```

Required. Immutable. The name of the destination object. See the [Naming Guidelines](https://cloud.google.com/storage/docs/objects#naming). Example: `test.txt` The `name` field by itself does not uniquely identify a Cloud Storage object. A Cloud Storage object is uniquely identified by the tuple of (bucket, object, generation).

`string destination_name = 24 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The destinationName to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setDestinationNameBytes(ByteString value)

```
public RewriteObjectRequest.Builder setDestinationNameBytes(ByteString value)
```

Required. Immutable. The name of the destination object. See the [Naming Guidelines](https://cloud.google.com/storage/docs/objects#naming). Example: `test.txt` The `name` field by itself does not uniquely identify a Cloud Storage object. A Cloud Storage object is uniquely identified by the tuple of (bucket, object, generation).

`string destination_name = 24 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for destinationName to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setDestinationPredefinedAcl(String value)

```
public RewriteObjectRequest.Builder setDestinationPredefinedAcl(String value)
```

Apply a predefined set of access controls to the destination object. Valid values are "authenticatedRead", "bucketOwnerFullControl", "bucketOwnerRead", "private", "projectPrivate", or "publicRead".

`string destination_predefined_acl = 28;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The destinationPredefinedAcl to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setDestinationPredefinedAclBytes(ByteString value)

```
public RewriteObjectRequest.Builder setDestinationPredefinedAclBytes(ByteString value)
```

Apply a predefined set of access controls to the destination object. Valid values are "authenticatedRead", "bucketOwnerFullControl", "bucketOwnerRead", "private", "projectPrivate", or "publicRead".

`string destination_predefined_acl = 28;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for destinationPredefinedAcl to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public RewriteObjectRequest.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setIfGenerationMatch(long value)

```
public RewriteObjectRequest.Builder setIfGenerationMatch(long value)
```

Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.

`optional int64 if_generation_match = 7;`

**Parameter**

**Name**

**Description**

`value`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The ifGenerationMatch to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setIfGenerationNotMatch(long value)

```
public RewriteObjectRequest.Builder setIfGenerationNotMatch(long value)
```

Makes the operation conditional on whether the object's live generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.

`optional int64 if_generation_not_match = 8;`

**Parameter**

**Name**

**Description**

`value`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The ifGenerationNotMatch to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setIfMetagenerationMatch(long value)

```
public RewriteObjectRequest.Builder setIfMetagenerationMatch(long value)
```

Makes the operation conditional on whether the destination object's current metageneration matches the given value.

`optional int64 if_metageneration_match = 9;`

**Parameter**

**Name**

**Description**

`value`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The ifMetagenerationMatch to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setIfMetagenerationNotMatch(long value)

```
public RewriteObjectRequest.Builder setIfMetagenerationNotMatch(long value)
```

Makes the operation conditional on whether the destination object's current metageneration does not match the given value.

`optional int64 if_metageneration_not_match = 10;`

**Parameter**

**Name**

**Description**

`value`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The ifMetagenerationNotMatch to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setIfSourceGenerationMatch(long value)

```
public RewriteObjectRequest.Builder setIfSourceGenerationMatch(long value)
```

Makes the operation conditional on whether the source object's live generation matches the given value.

`optional int64 if_source_generation_match = 11;`

**Parameter**

**Name**

**Description**

`value`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The ifSourceGenerationMatch to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setIfSourceGenerationNotMatch(long value)

```
public RewriteObjectRequest.Builder setIfSourceGenerationNotMatch(long value)
```

Makes the operation conditional on whether the source object's live generation does not match the given value.

`optional int64 if_source_generation_not_match = 12;`

**Parameter**

**Name**

**Description**

`value`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The ifSourceGenerationNotMatch to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setIfSourceMetagenerationMatch(long value)

```
public RewriteObjectRequest.Builder setIfSourceMetagenerationMatch(long value)
```

Makes the operation conditional on whether the source object's current metageneration matches the given value.

`optional int64 if_source_metageneration_match = 13;`

**Parameter**

**Name**

**Description**

`value`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The ifSourceMetagenerationMatch to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setIfSourceMetagenerationNotMatch(long value)

```
public RewriteObjectRequest.Builder setIfSourceMetagenerationNotMatch(long value)
```

Makes the operation conditional on whether the source object's current metageneration does not match the given value.

`optional int64 if_source_metageneration_not_match = 14;`

**Parameter**

**Name**

**Description**

`value`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The ifSourceMetagenerationNotMatch to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setMaxBytesRewrittenPerCall(long value)

```
public RewriteObjectRequest.Builder setMaxBytesRewrittenPerCall(long value)
```

The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the `rewriteToken` is invalid.

`int64 max_bytes_rewritten_per_call = 15;`

**Parameter**

**Name**

**Description**

`value`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The maxBytesRewrittenPerCall to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setObjectChecksums(ObjectChecksums value)

```
public RewriteObjectRequest.Builder setObjectChecksums(ObjectChecksums value)
```

The checksums of the complete object. This will be used to validate the destination object after rewriting.

`.google.storage.v2.ObjectChecksums object_checksums = 29;`

**Parameter**

**Name**

**Description**

`value`

`[ObjectChecksums](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.ObjectChecksums)`  

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

### setObjectChecksums(ObjectChecksums.Builder builderForValue)

```
public RewriteObjectRequest.Builder setObjectChecksums(ObjectChecksums.Builder builderForValue)
```

The checksums of the complete object. This will be used to validate the destination object after rewriting.

`.google.storage.v2.ObjectChecksums object_checksums = 29;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[ObjectChecksums.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.ObjectChecksums.Builder)`  

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public RewriteObjectRequest.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setRewriteToken(String value)

```
public RewriteObjectRequest.Builder setRewriteToken(String value)
```

Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.

`string rewrite_token = 5;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The rewriteToken to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setRewriteTokenBytes(ByteString value)

```
public RewriteObjectRequest.Builder setRewriteTokenBytes(ByteString value)
```

Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.

`string rewrite_token = 5;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for rewriteToken to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setSourceBucket(String value)

```
public RewriteObjectRequest.Builder setSourceBucket(String value)
```

Required. Name of the bucket in which to find the source object.

`string source_bucket = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The sourceBucket to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setSourceBucketBytes(ByteString value)

```
public RewriteObjectRequest.Builder setSourceBucketBytes(ByteString value)
```

Required. Name of the bucket in which to find the source object.

`string source_bucket = 2 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for sourceBucket to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setSourceGeneration(long value)

```
public RewriteObjectRequest.Builder setSourceGeneration(long value)
```

If present, selects a specific revision of the source object (as opposed to the latest version, the default).

`int64 source_generation = 4;`

**Parameter**

**Name**

**Description**

`value`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The sourceGeneration to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setSourceObject(String value)

```
public RewriteObjectRequest.Builder setSourceObject(String value)
```

Required. Name of the source object.

`string source_object = 3 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The sourceObject to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setSourceObjectBytes(ByteString value)

```
public RewriteObjectRequest.Builder setSourceObjectBytes(ByteString value)
```

Required. Name of the source object.

`string source_object = 3 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for sourceObject to set.

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

This builder for chaining.

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final RewriteObjectRequest.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[RewriteObjectRequest.Builder](/java/docs/reference/google-cloud-storage/2.39.0/com.google.storage.v2.RewriteObjectRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
