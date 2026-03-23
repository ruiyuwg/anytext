-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class BigQuerySource.Builder (2.58.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public static final class BigQuerySource.Builder extends GeneratedMessageV3.Builder<BigQuerySource.Builder> implements BigQuerySourceOrBuilder
```

BigQuery source import data from.

Protobuf type `google.cloud.retail.v2beta.BigQuerySource`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> BigQuerySource.Builder

## Implements

[BigQuerySourceOrBuilder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySourceOrBuilder)

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
public BigQuerySource.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public BigQuerySource build()
```

**Returns**

**Type**

**Description**

`[BigQuerySource](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource)`

### buildPartial()

```
public BigQuerySource buildPartial()
```

**Returns**

**Type**

**Description**

`[BigQuerySource](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource)`

### clear()

```
public BigQuerySource.Builder clear()
```

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearDataSchema()

```
public BigQuerySource.Builder clearDataSchema()
```

The schema to use when parsing the data from the source.

Supported values for product imports:

-   `product` (default): One JSON Product per line. Each product must have a valid Product.id.
-   `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc).
    
    Supported values for user events imports:
    
-   `user_event` (default): One JSON UserEvent per line.
    
-   `user_event_ga360`: The schema is available here: [https://support.google.com/analytics/answer/3437719](https://support.google.com/analytics/answer/3437719).
-   `user_event_ga4`: The schema is available here: [https://support.google.com/analytics/answer/7029846](https://support.google.com/analytics/answer/7029846).
    
    Supported values for autocomplete imports:
    
-   `suggestions` (default): One JSON completion suggestion per line.
    
-   `denylist`: One JSON deny suggestion per line.
-   `allowlist`: One JSON allow suggestion per line.

`string data_schema = 4;`

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

This builder for chaining.

### clearDatasetId()

```
public BigQuerySource.Builder clearDatasetId()
```

Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters.

`string dataset_id = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public BigQuerySource.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearGcsStagingDir()

```
public BigQuerySource.Builder clearGcsStagingDir()
```

Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.

`string gcs_staging_dir = 3;`

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public BigQuerySource.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearPartition()

```
public BigQuerySource.Builder clearPartition()
```

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

### clearPartitionDate()

```
public BigQuerySource.Builder clearPartitionDate()
```

BigQuery time partitioned table's \_PARTITIONDATE in YYYY-MM-DD format.

Only supported in ImportProductsRequest.

`.google.type.Date partition_date = 6;`

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

### clearProjectId()

```
public BigQuerySource.Builder clearProjectId()
```

The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.

`string project_id = 5;`

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

This builder for chaining.

### clearTableId()

```
public BigQuerySource.Builder clearTableId()
```

Required. The BigQuery table to copy the data from with a length limit of 1,024 characters.

`string table_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

This builder for chaining.

### clone()

```
public BigQuerySource.Builder clone()
```

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getDataSchema()

```
public String getDataSchema()
```

The schema to use when parsing the data from the source.

Supported values for product imports:

-   `product` (default): One JSON Product per line. Each product must have a valid Product.id.
-   `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc).
    
    Supported values for user events imports:
    
-   `user_event` (default): One JSON UserEvent per line.
    
-   `user_event_ga360`: The schema is available here: [https://support.google.com/analytics/answer/3437719](https://support.google.com/analytics/answer/3437719).
-   `user_event_ga4`: The schema is available here: [https://support.google.com/analytics/answer/7029846](https://support.google.com/analytics/answer/7029846).
    
    Supported values for autocomplete imports:
    
-   `suggestions` (default): One JSON completion suggestion per line.
    
-   `denylist`: One JSON deny suggestion per line.
-   `allowlist`: One JSON allow suggestion per line.

`string data_schema = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The dataSchema.

### getDataSchemaBytes()

```
public ByteString getDataSchemaBytes()
```

The schema to use when parsing the data from the source.

Supported values for product imports:

-   `product` (default): One JSON Product per line. Each product must have a valid Product.id.
-   `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc).
    
    Supported values for user events imports:
    
-   `user_event` (default): One JSON UserEvent per line.
    
-   `user_event_ga360`: The schema is available here: [https://support.google.com/analytics/answer/3437719](https://support.google.com/analytics/answer/3437719).
-   `user_event_ga4`: The schema is available here: [https://support.google.com/analytics/answer/7029846](https://support.google.com/analytics/answer/7029846).
    
    Supported values for autocomplete imports:
    
-   `suggestions` (default): One JSON completion suggestion per line.
    
-   `denylist`: One JSON deny suggestion per line.
-   `allowlist`: One JSON allow suggestion per line.

`string data_schema = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for dataSchema.

### getDatasetId()

```
public String getDatasetId()
```

Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters.

`string dataset_id = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The datasetId.

### getDatasetIdBytes()

```
public ByteString getDatasetIdBytes()
```

Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters.

`string dataset_id = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for datasetId.

### getDefaultInstanceForType()

```
public BigQuerySource getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[BigQuerySource](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource)`

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

### getGcsStagingDir()

```
public String getGcsStagingDir()
```

Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.

`string gcs_staging_dir = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The gcsStagingDir.

### getGcsStagingDirBytes()

```
public ByteString getGcsStagingDirBytes()
```

Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.

`string gcs_staging_dir = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for gcsStagingDir.

### getPartitionCase()

```
public BigQuerySource.PartitionCase getPartitionCase()
```

**Returns**

**Type**

**Description**

`[BigQuerySource.PartitionCase](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.PartitionCase)`

### getPartitionDate()

```
public Date getPartitionDate()
```

BigQuery time partitioned table's \_PARTITIONDATE in YYYY-MM-DD format.

Only supported in ImportProductsRequest.

`.google.type.Date partition_date = 6;`

**Returns**

**Type**

**Description**

`com.google.type.Date`

The partitionDate.

### getPartitionDateBuilder()

```
public Date.Builder getPartitionDateBuilder()
```

BigQuery time partitioned table's \_PARTITIONDATE in YYYY-MM-DD format.

Only supported in ImportProductsRequest.

`.google.type.Date partition_date = 6;`

**Returns**

**Type**

**Description**

`com.google.type.Date.Builder`

### getPartitionDateOrBuilder()

```
public DateOrBuilder getPartitionDateOrBuilder()
```

BigQuery time partitioned table's \_PARTITIONDATE in YYYY-MM-DD format.

Only supported in ImportProductsRequest.

`.google.type.Date partition_date = 6;`

**Returns**

**Type**

**Description**

`com.google.type.DateOrBuilder`

### getProjectId()

```
public String getProjectId()
```

The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.

`string project_id = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The projectId.

### getProjectIdBytes()

```
public ByteString getProjectIdBytes()
```

The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.

`string project_id = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for projectId.

### getTableId()

```
public String getTableId()
```

Required. The BigQuery table to copy the data from with a length limit of 1,024 characters.

`string table_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The tableId.

### getTableIdBytes()

```
public ByteString getTableIdBytes()
```

Required. The BigQuery table to copy the data from with a length limit of 1,024 characters.

`string table_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for tableId.

### hasPartitionDate()

```
public boolean hasPartitionDate()
```

BigQuery time partitioned table's \_PARTITIONDATE in YYYY-MM-DD format.

Only supported in ImportProductsRequest.

`.google.type.Date partition_date = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the partitionDate field is set.

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

### mergeFrom(BigQuerySource other)

```
public BigQuerySource.Builder mergeFrom(BigQuerySource other)
```

**Parameter**

**Name**

**Description**

`other`

`[BigQuerySource](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource)`  

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public BigQuerySource.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public BigQuerySource.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergePartitionDate(Date value)

```
public BigQuerySource.Builder mergePartitionDate(Date value)
```

BigQuery time partitioned table's \_PARTITIONDATE in YYYY-MM-DD format.

Only supported in ImportProductsRequest.

`.google.type.Date partition_date = 6;`

**Parameter**

**Name**

**Description**

`value`

`com.google.type.Date`  

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final BigQuerySource.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setDataSchema(String value)

```
public BigQuerySource.Builder setDataSchema(String value)
```

The schema to use when parsing the data from the source.

Supported values for product imports:

-   `product` (default): One JSON Product per line. Each product must have a valid Product.id.
-   `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc).
    
    Supported values for user events imports:
    
-   `user_event` (default): One JSON UserEvent per line.
    
-   `user_event_ga360`: The schema is available here: [https://support.google.com/analytics/answer/3437719](https://support.google.com/analytics/answer/3437719).
-   `user_event_ga4`: The schema is available here: [https://support.google.com/analytics/answer/7029846](https://support.google.com/analytics/answer/7029846).
    
    Supported values for autocomplete imports:
    
-   `suggestions` (default): One JSON completion suggestion per line.
    
-   `denylist`: One JSON deny suggestion per line.
-   `allowlist`: One JSON allow suggestion per line.

`string data_schema = 4;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The dataSchema to set.

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

This builder for chaining.

### setDataSchemaBytes(ByteString value)

```
public BigQuerySource.Builder setDataSchemaBytes(ByteString value)
```

The schema to use when parsing the data from the source.

Supported values for product imports:

-   `product` (default): One JSON Product per line. Each product must have a valid Product.id.
-   `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc).
    
    Supported values for user events imports:
    
-   `user_event` (default): One JSON UserEvent per line.
    
-   `user_event_ga360`: The schema is available here: [https://support.google.com/analytics/answer/3437719](https://support.google.com/analytics/answer/3437719).
-   `user_event_ga4`: The schema is available here: [https://support.google.com/analytics/answer/7029846](https://support.google.com/analytics/answer/7029846).
    
    Supported values for autocomplete imports:
    
-   `suggestions` (default): One JSON completion suggestion per line.
    
-   `denylist`: One JSON deny suggestion per line.
-   `allowlist`: One JSON allow suggestion per line.

`string data_schema = 4;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for dataSchema to set.

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

This builder for chaining.

### setDatasetId(String value)

```
public BigQuerySource.Builder setDatasetId(String value)
```

Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters.

`string dataset_id = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The datasetId to set.

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

This builder for chaining.

### setDatasetIdBytes(ByteString value)

```
public BigQuerySource.Builder setDatasetIdBytes(ByteString value)
```

Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters.

`string dataset_id = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for datasetId to set.

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public BigQuerySource.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setGcsStagingDir(String value)

```
public BigQuerySource.Builder setGcsStagingDir(String value)
```

Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.

`string gcs_staging_dir = 3;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The gcsStagingDir to set.

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

This builder for chaining.

### setGcsStagingDirBytes(ByteString value)

```
public BigQuerySource.Builder setGcsStagingDirBytes(ByteString value)
```

Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.

`string gcs_staging_dir = 3;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for gcsStagingDir to set.

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

This builder for chaining.

### setPartitionDate(Date value)

```
public BigQuerySource.Builder setPartitionDate(Date value)
```

BigQuery time partitioned table's \_PARTITIONDATE in YYYY-MM-DD format.

Only supported in ImportProductsRequest.

`.google.type.Date partition_date = 6;`

**Parameter**

**Name**

**Description**

`value`

`com.google.type.Date`  

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

### setPartitionDate(Date.Builder builderForValue)

```
public BigQuerySource.Builder setPartitionDate(Date.Builder builderForValue)
```

BigQuery time partitioned table's \_PARTITIONDATE in YYYY-MM-DD format.

Only supported in ImportProductsRequest.

`.google.type.Date partition_date = 6;`

**Parameter**

**Name**

**Description**

`builderForValue`

`com.google.type.Date.Builder`  

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

### setProjectId(String value)

```
public BigQuerySource.Builder setProjectId(String value)
```

The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.

`string project_id = 5;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The projectId to set.

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

This builder for chaining.

### setProjectIdBytes(ByteString value)

```
public BigQuerySource.Builder setProjectIdBytes(ByteString value)
```

The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.

`string project_id = 5;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for projectId to set.

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public BigQuerySource.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setTableId(String value)

```
public BigQuerySource.Builder setTableId(String value)
```

Required. The BigQuery table to copy the data from with a length limit of 1,024 characters.

`string table_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The tableId to set.

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

This builder for chaining.

### setTableIdBytes(ByteString value)

```
public BigQuerySource.Builder setTableIdBytes(ByteString value)
```

Required. The BigQuery table to copy the data from with a length limit of 1,024 characters.

`string table_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for tableId to set.

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

This builder for chaining.

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final BigQuerySource.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[BigQuerySource.Builder](/java/docs/reference/google-cloud-retail/2.58.0/com.google.cloud.retail.v2beta.BigQuerySource.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
