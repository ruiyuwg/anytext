-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class PredictRequest.Builder (0.43.0) Stay organized with collections Save and categorize content based on your preferences.

0.94.0 (latest) 0.92.0 0.90.0 0.89.0 0.87.0 0.85.0 0.83.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.71.0 0.70.0 0.69.0 0.67.0 0.66.0 0.65.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.4 0.8.10

```
public static final class PredictRequest.Builder extends GeneratedMessageV3.Builder<PredictRequest.Builder> implements PredictRequestOrBuilder
```

Request message for Predict method.

Protobuf type `google.cloud.recommendationengine.v1beta1.PredictRequest`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> PredictRequest.Builder

## Implements

[PredictRequestOrBuilder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequestOrBuilder)

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
public PredictRequest.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public PredictRequest build()
```

**Returns**

**Type**

**Description**

`[PredictRequest](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest)`

### buildPartial()

```
public PredictRequest buildPartial()
```

**Returns**

**Type**

**Description**

`[PredictRequest](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest)`

### clear()

```
public PredictRequest.Builder clear()
```

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearDryRun()

```
public PredictRequest.Builder clearDryRun()
```

Optional. Use dryRun mode for this prediction query. If set to true, a dummy model will be used that returns arbitrary catalog items. Note that the dryRun mode should only be used for testing the API, or if the model is not ready.

`bool dry_run = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public PredictRequest.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearFilter()

```
public PredictRequest.Builder clearFilter()
```

Optional. Filter for restricting prediction results. Accepts values for tags and the `filterOutOfStockItems` flag.

-   Tag expressions. Restricts predictions to items that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1 KiB.
    
-   filterOutOfStockItems. Restricts predictions to items that do not have a stockState value of OUT\_OF\_STOCK.
    
    Examples:
    
-   tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional")
    
-   filterOutOfStockItems tag=(-"promotional")
-   filterOutOfStockItems

`string filter = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

This builder for chaining.

### clearLabels()

```
public PredictRequest.Builder clearLabels()
```

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

### clearName()

```
public PredictRequest.Builder clearName()
```

Required. Full resource name of the format: `{name=projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/*}` The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction.

We currently support three placements with the following IDs by default:

-   `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` events, on product detail pages, or on the shopping cart page.
    
-   `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you.
    
-   `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this.
    
-   `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed.
    
    The full list of available placements can be seen at [https://console.cloud.google.com/recommendation/datafeeds/default\_catalog/dashboard](https://console.cloud.google.com/recommendation/datafeeds/default_catalog/dashboard)
    

`string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public PredictRequest.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearPageSize()

```
public PredictRequest.Builder clearPageSize()
```

Optional. Maximum number of results to return per page. Set this property to the number of prediction results required. If zero, the service will choose a reasonable default.

`int32 page_size = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

This builder for chaining.

### clearPageToken()

```
public PredictRequest.Builder clearPageToken()
```

Optional. The previous PredictResponse.next\_page\_token.

`string page_token = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

This builder for chaining.

### clearParams()

```
public PredictRequest.Builder clearParams()
```

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

### clearUserEvent()

```
public PredictRequest.Builder clearUserEvent()
```

Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging.

`.google.cloud.recommendationengine.v1beta1.UserEvent user_event = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

### clone()

```
public PredictRequest.Builder clone()
```

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### containsLabels(String key)

```
public boolean containsLabels(String key)
```

Optional. The labels for the predict request.

-   Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   No more than 64 labels can be associated with a given request.
    
    See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels.
    

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### containsParams(String key)

```
public boolean containsParams(String key)
```

Optional. Additional domain specific parameters for the predictions.

Allowed values:

-   `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response.
-   `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history.

`map<string, .google.protobuf.Value> params = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getDefaultInstanceForType()

```
public PredictRequest getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[PredictRequest](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest)`

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

### getDryRun()

```
public boolean getDryRun()
```

Optional. Use dryRun mode for this prediction query. If set to true, a dummy model will be used that returns arbitrary catalog items. Note that the dryRun mode should only be used for testing the API, or if the model is not ready.

`bool dry_run = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The dryRun.

### getFilter()

```
public String getFilter()
```

Optional. Filter for restricting prediction results. Accepts values for tags and the `filterOutOfStockItems` flag.

-   Tag expressions. Restricts predictions to items that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1 KiB.
    
-   filterOutOfStockItems. Restricts predictions to items that do not have a stockState value of OUT\_OF\_STOCK.
    
    Examples:
    
-   tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional")
    
-   filterOutOfStockItems tag=(-"promotional")
-   filterOutOfStockItems

`string filter = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The filter.

### getFilterBytes()

```
public ByteString getFilterBytes()
```

Optional. Filter for restricting prediction results. Accepts values for tags and the `filterOutOfStockItems` flag.

-   Tag expressions. Restricts predictions to items that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1 KiB.
    
-   filterOutOfStockItems. Restricts predictions to items that do not have a stockState value of OUT\_OF\_STOCK.
    
    Examples:
    
-   tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional")
    
-   filterOutOfStockItems tag=(-"promotional")
-   filterOutOfStockItems

`string filter = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for filter.

### getLabels() (deprecated)

```
public Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder#com_google_cloud_recommendationengine_v1beta1_PredictRequest_Builder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public int getLabelsCount()
```

Optional. The labels for the predict request.

-   Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   No more than 64 labels can be associated with a given request.
    
    See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels.
    

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public Map<String,String> getLabelsMap()
```

Optional. The labels for the predict request.

-   Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   No more than 64 labels can be associated with a given request.
    
    See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels.
    

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public String getLabelsOrDefault(String key, String defaultValue)
```

Optional. The labels for the predict request.

-   Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   No more than 64 labels can be associated with a given request.
    
    See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels.
    

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

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

Optional. The labels for the predict request.

-   Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   No more than 64 labels can be associated with a given request.
    
    See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels.
    

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getMutableLabels() (deprecated)

```
public Map<String,String> getMutableLabels()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getMutableParams() (deprecated)

```
public Map<String,Value> getMutableParams()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)>`

### getName()

```
public String getName()
```

Required. Full resource name of the format: `{name=projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/*}` The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction.

We currently support three placements with the following IDs by default:

-   `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` events, on product detail pages, or on the shopping cart page.
    
-   `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you.
    
-   `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this.
    
-   `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed.
    
    The full list of available placements can be seen at [https://console.cloud.google.com/recommendation/datafeeds/default\_catalog/dashboard](https://console.cloud.google.com/recommendation/datafeeds/default_catalog/dashboard)
    

`string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public ByteString getNameBytes()
```

Required. Full resource name of the format: `{name=projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/*}` The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction.

We currently support three placements with the following IDs by default:

-   `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` events, on product detail pages, or on the shopping cart page.
    
-   `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you.
    
-   `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this.
    
-   `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed.
    
    The full list of available placements can be seen at [https://console.cloud.google.com/recommendation/datafeeds/default\_catalog/dashboard](https://console.cloud.google.com/recommendation/datafeeds/default_catalog/dashboard)
    

`string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getPageSize()

```
public int getPageSize()
```

Optional. Maximum number of results to return per page. Set this property to the number of prediction results required. If zero, the service will choose a reasonable default.

`int32 page_size = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The pageSize.

### getPageToken()

```
public String getPageToken()
```

Optional. The previous PredictResponse.next\_page\_token.

`string page_token = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The pageToken.

### getPageTokenBytes()

```
public ByteString getPageTokenBytes()
```

Optional. The previous PredictResponse.next\_page\_token.

`string page_token = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for pageToken.

### getParams() (deprecated)

```
public Map<String,Value> getParams()
```

Use [#getParamsMap()](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder#com_google_cloud_recommendationengine_v1beta1_PredictRequest_Builder_getParamsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)>`

### getParamsCount()

```
public int getParamsCount()
```

Optional. Additional domain specific parameters for the predictions.

Allowed values:

-   `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response.
-   `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history.

`map<string, .google.protobuf.Value> params = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getParamsMap()

```
public Map<String,Value> getParamsMap()
```

Optional. Additional domain specific parameters for the predictions.

Allowed values:

-   `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response.
-   `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history.

`map<string, .google.protobuf.Value> params = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)>`

### getParamsOrDefault(String key, Value defaultValue)

```
public Value getParamsOrDefault(String key, Value defaultValue)
```

Optional. Additional domain specific parameters for the predictions.

Allowed values:

-   `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response.
-   `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history.

`map<string, .google.protobuf.Value> params = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)`  

**Returns**

**Type**

**Description**

`[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)`

### getParamsOrThrow(String key)

```
public Value getParamsOrThrow(String key)
```

Optional. Additional domain specific parameters for the predictions.

Allowed values:

-   `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response.
-   `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history.

`map<string, .google.protobuf.Value> params = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)`

### getUserEvent()

```
public UserEvent getUserEvent()
```

Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging.

`.google.cloud.recommendationengine.v1beta1.UserEvent user_event = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[UserEvent](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.UserEvent)`

The userEvent.

### getUserEventBuilder()

```
public UserEvent.Builder getUserEventBuilder()
```

Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging.

`.google.cloud.recommendationengine.v1beta1.UserEvent user_event = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[UserEvent.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.UserEvent.Builder)`

### getUserEventOrBuilder()

```
public UserEventOrBuilder getUserEventOrBuilder()
```

Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging.

`.google.cloud.recommendationengine.v1beta1.UserEvent user_event = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[UserEventOrBuilder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.UserEventOrBuilder)`

### hasUserEvent()

```
public boolean hasUserEvent()
```

Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging.

`.google.cloud.recommendationengine.v1beta1.UserEvent user_event = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the userEvent field is set.

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

com.google.protobuf.GeneratedMessageV3.Builder.internalGetMapFieldReflection(int)

### internalGetMutableMapFieldReflection(int number)

```
protected MapFieldReflectionAccessor internalGetMutableMapFieldReflection(int number)
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

com.google.protobuf.GeneratedMessageV3.Builder.internalGetMutableMapFieldReflection(int)

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

### mergeFrom(PredictRequest other)

```
public PredictRequest.Builder mergeFrom(PredictRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[PredictRequest](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest)`  

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public PredictRequest.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public PredictRequest.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final PredictRequest.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### mergeUserEvent(UserEvent value)

```
public PredictRequest.Builder mergeUserEvent(UserEvent value)
```

Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging.

`.google.cloud.recommendationengine.v1beta1.UserEvent user_event = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[UserEvent](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.UserEvent)`  

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

### putAllLabels(Map<String,String> values)

```
public PredictRequest.Builder putAllLabels(Map<String,String> values)
```

Optional. The labels for the predict request.

-   Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   No more than 64 labels can be associated with a given request.
    
    See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels.
    

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`values`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

### putAllParams(Map<String,Value> values)

```
public PredictRequest.Builder putAllParams(Map<String,Value> values)
```

Optional. Additional domain specific parameters for the predictions.

Allowed values:

-   `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response.
-   `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history.

`map<string, .google.protobuf.Value> params = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`values`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)>`  

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

### putLabels(String key, String value)

```
public PredictRequest.Builder putLabels(String key, String value)
```

Optional. The labels for the predict request.

-   Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   No more than 64 labels can be associated with a given request.
    
    See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels.
    

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

### putParams(String key, Value value)

```
public PredictRequest.Builder putParams(String key, Value value)
```

Optional. Additional domain specific parameters for the predictions.

Allowed values:

-   `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response.
-   `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history.

`map<string, .google.protobuf.Value> params = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`value`

`[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)`  

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

### putParamsBuilderIfAbsent(String key)

```
public Value.Builder putParamsBuilderIfAbsent(String key)
```

Optional. Additional domain specific parameters for the predictions.

Allowed values:

-   `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response.
-   `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history.

`map<string, .google.protobuf.Value> params = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.Builder.html)`

### removeLabels(String key)

```
public PredictRequest.Builder removeLabels(String key)
```

Optional. The labels for the predict request.

-   Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   No more than 64 labels can be associated with a given request.
    
    See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels.
    

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

### removeParams(String key)

```
public PredictRequest.Builder removeParams(String key)
```

Optional. Additional domain specific parameters for the predictions.

Allowed values:

-   `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response.
-   `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history.

`map<string, .google.protobuf.Value> params = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

### setDryRun(boolean value)

```
public PredictRequest.Builder setDryRun(boolean value)
```

Optional. Use dryRun mode for this prediction query. If set to true, a dummy model will be used that returns arbitrary catalog items. Note that the dryRun mode should only be used for testing the API, or if the model is not ready.

`bool dry_run = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The dryRun to set.

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public PredictRequest.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setFilter(String value)

```
public PredictRequest.Builder setFilter(String value)
```

Optional. Filter for restricting prediction results. Accepts values for tags and the `filterOutOfStockItems` flag.

-   Tag expressions. Restricts predictions to items that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1 KiB.
    
-   filterOutOfStockItems. Restricts predictions to items that do not have a stockState value of OUT\_OF\_STOCK.
    
    Examples:
    
-   tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional")
    
-   filterOutOfStockItems tag=(-"promotional")
-   filterOutOfStockItems

`string filter = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The filter to set.

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

This builder for chaining.

### setFilterBytes(ByteString value)

```
public PredictRequest.Builder setFilterBytes(ByteString value)
```

Optional. Filter for restricting prediction results. Accepts values for tags and the `filterOutOfStockItems` flag.

-   Tag expressions. Restricts predictions to items that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1 KiB.
    
-   filterOutOfStockItems. Restricts predictions to items that do not have a stockState value of OUT\_OF\_STOCK.
    
    Examples:
    
-   tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional")
    
-   filterOutOfStockItems tag=(-"promotional")
-   filterOutOfStockItems

`string filter = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for filter to set.

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

This builder for chaining.

### setName(String value)

```
public PredictRequest.Builder setName(String value)
```

Required. Full resource name of the format: `{name=projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/*}` The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction.

We currently support three placements with the following IDs by default:

-   `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` events, on product detail pages, or on the shopping cart page.
    
-   `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you.
    
-   `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this.
    
-   `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed.
    
    The full list of available placements can be seen at [https://console.cloud.google.com/recommendation/datafeeds/default\_catalog/dashboard](https://console.cloud.google.com/recommendation/datafeeds/default_catalog/dashboard)
    

`string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The name to set.

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

This builder for chaining.

### setNameBytes(ByteString value)

```
public PredictRequest.Builder setNameBytes(ByteString value)
```

Required. Full resource name of the format: `{name=projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/*}` The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction.

We currently support three placements with the following IDs by default:

-   `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` events, on product detail pages, or on the shopping cart page.
    
-   `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you.
    
-   `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this.
    
-   `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed.
    
    The full list of available placements can be seen at [https://console.cloud.google.com/recommendation/datafeeds/default\_catalog/dashboard](https://console.cloud.google.com/recommendation/datafeeds/default_catalog/dashboard)
    

`string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for name to set.

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

This builder for chaining.

### setPageSize(int value)

```
public PredictRequest.Builder setPageSize(int value)
```

Optional. Maximum number of results to return per page. Set this property to the number of prediction results required. If zero, the service will choose a reasonable default.

`int32 page_size = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The pageSize to set.

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

This builder for chaining.

### setPageToken(String value)

```
public PredictRequest.Builder setPageToken(String value)
```

Optional. The previous PredictResponse.next\_page\_token.

`string page_token = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The pageToken to set.

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

This builder for chaining.

### setPageTokenBytes(ByteString value)

```
public PredictRequest.Builder setPageTokenBytes(ByteString value)
```

Optional. The previous PredictResponse.next\_page\_token.

`string page_token = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for pageToken to set.

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public PredictRequest.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final PredictRequest.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setUserEvent(UserEvent value)

```
public PredictRequest.Builder setUserEvent(UserEvent value)
```

Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging.

`.google.cloud.recommendationengine.v1beta1.UserEvent user_event = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[UserEvent](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.UserEvent)`  

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

### setUserEvent(UserEvent.Builder builderForValue)

```
public PredictRequest.Builder setUserEvent(UserEvent.Builder builderForValue)
```

Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging.

`.google.cloud.recommendationengine.v1beta1.UserEvent user_event = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[UserEvent.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.UserEvent.Builder)`  

**Returns**

**Type**

**Description**

`[PredictRequest.Builder](/java/docs/reference/google-cloud-recommendations-ai/0.43.0/com.google.cloud.recommendationengine.v1beta1.PredictRequest.Builder)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
