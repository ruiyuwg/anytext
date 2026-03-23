-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SearchRequest.Builder (2.10.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public static final class SearchRequest.Builder extends GeneratedMessageV3.Builder<SearchRequest.Builder> implements SearchRequestOrBuilder
```

Request message for SearchService.Search method.

Protobuf type `google.cloud.retail.v2beta.SearchRequest`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> SearchRequest.Builder

## Implements

[SearchRequestOrBuilder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequestOrBuilder)

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

[GeneratedMessageV3.Builder.internalGetMutableMapField(int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetMutableMapField_int_)

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

[Descriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.Descriptor.html)

## Methods

### addAllFacetSpecs(Iterable<? extends SearchRequest.FacetSpec> values)

```
public SearchRequest.Builder addAllFacetSpecs(Iterable<? extends SearchRequest.FacetSpec> values)
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.retail.v2beta.SearchRequest.FacetSpec>`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### addAllPageCategories(Iterable<String> values)

```
public SearchRequest.Builder addAllPageCategories(Iterable<String> values)
```

The categories associated with a category page. Required for category navigation queries to achieve good search quality. The format should be the same as UserEvent.page\_categories; To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : \["Sales > 2017 Black Friday Deals"\].

`repeated string page_categories = 23;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The pageCategories to add.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### addAllVariantRollupKeys(Iterable<String> values)

```
public SearchRequest.Builder addAllVariantRollupKeys(Iterable<String> values)
```

The keys to fetch and rollup the matching variant Products attributes, FulfillmentInfo or LocalInventorys attributes. The attributes from all the matching variant Products or LocalInventorys are merged and de-duplicated. Notice that rollup attributes will lead to extra query latency. Maximum number of keys is 30. For FulfillmentInfo, a fulfillment type and a fulfillment ID must be provided in the format of "fulfillmentType.fulfillmentId". E.g., in "pickupInStore.store123", "pickupInStore" is fulfillment type and "store123" is the store ID. Supported keys are:

-   colorFamilies
-   price
-   originalPrice
-   discount
-   variantId
-   inventory(place\_id,price)
-   inventory(place\_id,original\_price)
-   inventory(place\_id,attributes.key), where key is any key in the Product.local\_inventories.attributes map.
-   attributes.key, where key is any key in the Product.attributes map.
-   pickupInStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "pickup-in-store".
-   shipToStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "ship-to-store".
-   sameDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "same-day-delivery".
-   nextDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "next-day-delivery".
-   customFulfillment1.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-1".
-   customFulfillment2.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-2".
-   customFulfillment3.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-3".
-   customFulfillment4.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-4".
-   customFulfillment5.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-5". If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.

`repeated string variant_rollup_keys = 17;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The variantRollupKeys to add.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### addFacetSpecs(SearchRequest.FacetSpec value)

```
public SearchRequest.Builder addFacetSpecs(SearchRequest.FacetSpec value)
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Parameter**

**Name**

**Description**

value

`[SearchRequest.FacetSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.FacetSpec)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### addFacetSpecs(SearchRequest.FacetSpec.Builder builderForValue)

```
public SearchRequest.Builder addFacetSpecs(SearchRequest.FacetSpec.Builder builderForValue)
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Parameter**

**Name**

**Description**

builderForValue

`[SearchRequest.FacetSpec.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.FacetSpec.Builder)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### addFacetSpecs(int index, SearchRequest.FacetSpec value)

```
public SearchRequest.Builder addFacetSpecs(int index, SearchRequest.FacetSpec value)
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[SearchRequest.FacetSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.FacetSpec)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### addFacetSpecs(int index, SearchRequest.FacetSpec.Builder builderForValue)

```
public SearchRequest.Builder addFacetSpecs(int index, SearchRequest.FacetSpec.Builder builderForValue)
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

builderForValue

`[SearchRequest.FacetSpec.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.FacetSpec.Builder)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### addFacetSpecsBuilder()

```
public SearchRequest.FacetSpec.Builder addFacetSpecsBuilder()
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Returns**

**Type**

**Description**

[SearchRequest.FacetSpec.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.FacetSpec.Builder)

### addFacetSpecsBuilder(int index)

```
public SearchRequest.FacetSpec.Builder addFacetSpecsBuilder(int index)
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.FacetSpec.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.FacetSpec.Builder)

### addPageCategories(String value)

```
public SearchRequest.Builder addPageCategories(String value)
```

The categories associated with a category page. Required for category navigation queries to achieve good search quality. The format should be the same as UserEvent.page\_categories; To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : \["Sales > 2017 Black Friday Deals"\].

`repeated string page_categories = 23;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The pageCategories to add.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### addPageCategoriesBytes(ByteString value)

```
public SearchRequest.Builder addPageCategoriesBytes(ByteString value)
```

The categories associated with a category page. Required for category navigation queries to achieve good search quality. The format should be the same as UserEvent.page\_categories; To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : \["Sales > 2017 Black Friday Deals"\].

`repeated string page_categories = 23;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the pageCategories to add.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public SearchRequest.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
```

**Parameters**

**Name**

**Description**

field

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

value

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### addVariantRollupKeys(String value)

```
public SearchRequest.Builder addVariantRollupKeys(String value)
```

The keys to fetch and rollup the matching variant Products attributes, FulfillmentInfo or LocalInventorys attributes. The attributes from all the matching variant Products or LocalInventorys are merged and de-duplicated. Notice that rollup attributes will lead to extra query latency. Maximum number of keys is 30. For FulfillmentInfo, a fulfillment type and a fulfillment ID must be provided in the format of "fulfillmentType.fulfillmentId". E.g., in "pickupInStore.store123", "pickupInStore" is fulfillment type and "store123" is the store ID. Supported keys are:

-   colorFamilies
-   price
-   originalPrice
-   discount
-   variantId
-   inventory(place\_id,price)
-   inventory(place\_id,original\_price)
-   inventory(place\_id,attributes.key), where key is any key in the Product.local\_inventories.attributes map.
-   attributes.key, where key is any key in the Product.attributes map.
-   pickupInStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "pickup-in-store".
-   shipToStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "ship-to-store".
-   sameDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "same-day-delivery".
-   nextDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "next-day-delivery".
-   customFulfillment1.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-1".
-   customFulfillment2.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-2".
-   customFulfillment3.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-3".
-   customFulfillment4.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-4".
-   customFulfillment5.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-5". If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.

`repeated string variant_rollup_keys = 17;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The variantRollupKeys to add.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### addVariantRollupKeysBytes(ByteString value)

```
public SearchRequest.Builder addVariantRollupKeysBytes(ByteString value)
```

The keys to fetch and rollup the matching variant Products attributes, FulfillmentInfo or LocalInventorys attributes. The attributes from all the matching variant Products or LocalInventorys are merged and de-duplicated. Notice that rollup attributes will lead to extra query latency. Maximum number of keys is 30. For FulfillmentInfo, a fulfillment type and a fulfillment ID must be provided in the format of "fulfillmentType.fulfillmentId". E.g., in "pickupInStore.store123", "pickupInStore" is fulfillment type and "store123" is the store ID. Supported keys are:

-   colorFamilies
-   price
-   originalPrice
-   discount
-   variantId
-   inventory(place\_id,price)
-   inventory(place\_id,original\_price)
-   inventory(place\_id,attributes.key), where key is any key in the Product.local\_inventories.attributes map.
-   attributes.key, where key is any key in the Product.attributes map.
-   pickupInStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "pickup-in-store".
-   shipToStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "ship-to-store".
-   sameDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "same-day-delivery".
-   nextDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "next-day-delivery".
-   customFulfillment1.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-1".
-   customFulfillment2.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-2".
-   customFulfillment3.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-3".
-   customFulfillment4.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-4".
-   customFulfillment5.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-5". If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.

`repeated string variant_rollup_keys = 17;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the variantRollupKeys to add.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### build()

```
public SearchRequest build()
```

**Returns**

**Type**

**Description**

[SearchRequest](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest)

### buildPartial()

```
public SearchRequest buildPartial()
```

**Returns**

**Type**

**Description**

[SearchRequest](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest)

### clear()

```
public SearchRequest.Builder clear()
```

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearBoostSpec()

```
public SearchRequest.Builder clearBoostSpec()
```

Boost specification to boost certain products. See more details at this [user guide](https://cloud.google.com/retail/docs/boosting). Notice that if both ServingConfig.boost\_control\_ids and SearchRequest.boost\_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions.

`.google.cloud.retail.v2beta.SearchRequest.BoostSpec boost_spec = 13;`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### clearBranch()

```
public SearchRequest.Builder clearBranch()
```

The branch resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/0`. Use "default\_branch" as the branch ID or leave this field empty, to search products under the default branch.

`string branch = 2 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### clearCanonicalFilter()

```
public SearchRequest.Builder clearCanonicalFilter()
```

The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. For example, if a query does not have enough results, an expanded query with SearchRequest.canonical\_filter will be returned as a supplement of the original query. This field is strongly recommended to achieve high search quality. See SearchRequest.filter for more details about filter syntax.

`string canonical_filter = 28;`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### clearDynamicFacetSpec()

```
public SearchRequest.Builder clearDynamicFacetSpec()
```

Deprecated. Refer to [https://cloud.google.com/retail/docs/configs#dynamic](https://cloud.google.com/retail/docs/configs#dynamic) to enable dynamic facets. Do not set this field. The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated.

`.google.cloud.retail.v2beta.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 21 [deprecated = true];`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### clearFacetSpecs()

```
public SearchRequest.Builder clearFacetSpecs()
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### clearField(Descriptors.FieldDescriptor field)

```
public SearchRequest.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

field

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearFilter()

```
public SearchRequest.Builder clearFilter()
```

The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. Filter expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#filter). If this field is unrecognizable, an INVALID\_ARGUMENT is returned.

`string filter = 10;`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### clearLabels()

```
public SearchRequest.Builder clearLabels()
```

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### clearOffset()

```
public SearchRequest.Builder clearOffset()
```

A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Products deemed by the API as relevant) in search results. This field is only considered if page\_token is unset. If this field is negative, an INVALID\_ARGUMENT is returned.

`int32 offset = 9;`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public SearchRequest.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

oneof

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearOrderBy()

```
public SearchRequest.Builder clearOrderBy()
```

The order in which products are returned. Products can be ordered by a field in an Product object. Leave it unset if ordered by relevance. OrderBy expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#order). If this field is unrecognizable, an INVALID\_ARGUMENT is returned.

`string order_by = 11;`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### clearPageCategories()

```
public SearchRequest.Builder clearPageCategories()
```

The categories associated with a category page. Required for category navigation queries to achieve good search quality. The format should be the same as UserEvent.page\_categories; To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : \["Sales > 2017 Black Friday Deals"\].

`repeated string page_categories = 23;`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### clearPageSize()

```
public SearchRequest.Builder clearPageSize()
```

Maximum number of Products to return. If unspecified, defaults to a reasonable value. The maximum allowed value is 120. Values above 120 will be coerced to 120. If this field is negative, an INVALID\_ARGUMENT is returned.

`int32 page_size = 7;`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### clearPageToken()

```
public SearchRequest.Builder clearPageToken()
```

A page token SearchResponse.next\_page\_token, received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an INVALID\_ARGUMENT error is returned.

`string page_token = 8;`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### clearPersonalizationSpec()

```
public SearchRequest.Builder clearPersonalizationSpec()
```

The specification for personalization. Notice that if both ServingConfig.personalization\_spec and SearchRequest.personalization\_spec are set. SearchRequest.personalization\_spec will override ServingConfig.personalization\_spec.

`.google.cloud.retail.v2beta.SearchRequest.PersonalizationSpec personalization_spec = 32;`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### clearPlacement()

```
public SearchRequest.Builder clearPlacement()
```

Required. The resource name of the Retail Search serving config, such as `projects/*/locations/global/catalogs/default_catalog/servingConfigs/default_serving_config` or the name of the legacy placement resource, such as `projects/*/locations/global/catalogs/default_catalog/placements/default_search`. This field is used to identify the serving config name and the set of models that will be used to make the search.

`string placement = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### clearQuery()

```
public SearchRequest.Builder clearQuery()
```

Raw search query. If this field is empty, the request is considered a category browsing request and returned results are based on filter and page\_categories.

`string query = 3;`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### clearQueryExpansionSpec()

```
public SearchRequest.Builder clearQueryExpansionSpec()
```

The query expansion specification that specifies the conditions under which query expansion will occur. See more details at this [user guide](https://cloud.google.com/retail/docs/result-size#query_expansion).

`.google.cloud.retail.v2beta.SearchRequest.QueryExpansionSpec query_expansion_spec = 14;`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### clearSearchMode()

```
public SearchRequest.Builder clearSearchMode()
```

The search mode of the search request. If not specified, a single search request triggers both product search and faceted search.

`.google.cloud.retail.v2beta.SearchRequest.SearchMode search_mode = 31;`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### clearSpellCorrectionSpec()

```
public SearchRequest.Builder clearSpellCorrectionSpec()
```

The spell correction specification that specifies the mode under which spell correction will take effect.

`optional .google.cloud.retail.v2beta.SearchRequest.SpellCorrectionSpec spell_correction_spec = 35;`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### clearUserInfo()

```
public SearchRequest.Builder clearUserInfo()
```

User information.

`.google.cloud.retail.v2beta.UserInfo user_info = 5;`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### clearVariantRollupKeys()

```
public SearchRequest.Builder clearVariantRollupKeys()
```

The keys to fetch and rollup the matching variant Products attributes, FulfillmentInfo or LocalInventorys attributes. The attributes from all the matching variant Products or LocalInventorys are merged and de-duplicated. Notice that rollup attributes will lead to extra query latency. Maximum number of keys is 30. For FulfillmentInfo, a fulfillment type and a fulfillment ID must be provided in the format of "fulfillmentType.fulfillmentId". E.g., in "pickupInStore.store123", "pickupInStore" is fulfillment type and "store123" is the store ID. Supported keys are:

-   colorFamilies
-   price
-   originalPrice
-   discount
-   variantId
-   inventory(place\_id,price)
-   inventory(place\_id,original\_price)
-   inventory(place\_id,attributes.key), where key is any key in the Product.local\_inventories.attributes map.
-   attributes.key, where key is any key in the Product.attributes map.
-   pickupInStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "pickup-in-store".
-   shipToStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "ship-to-store".
-   sameDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "same-day-delivery".
-   nextDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "next-day-delivery".
-   customFulfillment1.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-1".
-   customFulfillment2.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-2".
-   customFulfillment3.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-3".
-   customFulfillment4.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-4".
-   customFulfillment5.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-5". If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.

`repeated string variant_rollup_keys = 17;`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### clearVisitorId()

```
public SearchRequest.Builder clearVisitorId()
```

Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This should be the same identifier as UserEvent.visitor\_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

`string visitor_id = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### clone()

```
public SearchRequest.Builder clone()
```

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### containsLabels(String key)

```
public boolean containsLabels(String key)
```

The labels applied to a resource must meet the following requirements:

-   Each resource can have multiple labels, up to a maximum of 64.
-   Each label must be a key-value pair.
-   Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters.
-   Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed.
-   The key portion of a label must be unique. However, you can use the same key with multiple resources.
-   Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.

`map<string, string> labels = 34;`

**Parameter**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getBoostSpec()

```
public SearchRequest.BoostSpec getBoostSpec()
```

Boost specification to boost certain products. See more details at this [user guide](https://cloud.google.com/retail/docs/boosting). Notice that if both ServingConfig.boost\_control\_ids and SearchRequest.boost\_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions.

`.google.cloud.retail.v2beta.SearchRequest.BoostSpec boost_spec = 13;`

**Returns**

**Type**

**Description**

[SearchRequest.BoostSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.BoostSpec)

The boostSpec.

### getBoostSpecBuilder()

```
public SearchRequest.BoostSpec.Builder getBoostSpecBuilder()
```

Boost specification to boost certain products. See more details at this [user guide](https://cloud.google.com/retail/docs/boosting). Notice that if both ServingConfig.boost\_control\_ids and SearchRequest.boost\_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions.

`.google.cloud.retail.v2beta.SearchRequest.BoostSpec boost_spec = 13;`

**Returns**

**Type**

**Description**

[SearchRequest.BoostSpec.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.BoostSpec.Builder)

### getBoostSpecOrBuilder()

```
public SearchRequest.BoostSpecOrBuilder getBoostSpecOrBuilder()
```

Boost specification to boost certain products. See more details at this [user guide](https://cloud.google.com/retail/docs/boosting). Notice that if both ServingConfig.boost\_control\_ids and SearchRequest.boost\_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions.

`.google.cloud.retail.v2beta.SearchRequest.BoostSpec boost_spec = 13;`

**Returns**

**Type**

**Description**

[SearchRequest.BoostSpecOrBuilder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.BoostSpecOrBuilder)

### getBranch()

```
public String getBranch()
```

The branch resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/0`. Use "default\_branch" as the branch ID or leave this field empty, to search products under the default branch.

`string branch = 2 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The branch.

### getBranchBytes()

```
public ByteString getBranchBytes()
```

The branch resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/0`. Use "default\_branch" as the branch ID or leave this field empty, to search products under the default branch.

`string branch = 2 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for branch.

### getCanonicalFilter()

```
public String getCanonicalFilter()
```

The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. For example, if a query does not have enough results, an expanded query with SearchRequest.canonical\_filter will be returned as a supplement of the original query. This field is strongly recommended to achieve high search quality. See SearchRequest.filter for more details about filter syntax.

`string canonical_filter = 28;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The canonicalFilter.

### getCanonicalFilterBytes()

```
public ByteString getCanonicalFilterBytes()
```

The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. For example, if a query does not have enough results, an expanded query with SearchRequest.canonical\_filter will be returned as a supplement of the original query. This field is strongly recommended to achieve high search quality. See SearchRequest.filter for more details about filter syntax.

`string canonical_filter = 28;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for canonicalFilter.

### getDefaultInstanceForType()

```
public SearchRequest getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

[SearchRequest](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest)

### getDescriptorForType()

```
public Descriptors.Descriptor getDescriptorForType()
```

**Returns**

**Type**

**Description**

[Descriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.Descriptor.html)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.getDescriptorForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getDescriptorForType__)

### getDynamicFacetSpec() (deprecated)

```
public SearchRequest.DynamicFacetSpec getDynamicFacetSpec()
```

**Deprecated.** _google.cloud.retail.v2beta.SearchRequest.dynamic\_facet\_spec is deprecated. See google/cloud/retail/v2beta/search\_service.proto;l=586_

Deprecated. Refer to [https://cloud.google.com/retail/docs/configs#dynamic](https://cloud.google.com/retail/docs/configs#dynamic) to enable dynamic facets. Do not set this field. The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated.

`.google.cloud.retail.v2beta.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 21 [deprecated = true];`

**Returns**

**Type**

**Description**

[SearchRequest.DynamicFacetSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.DynamicFacetSpec)

The dynamicFacetSpec.

### getDynamicFacetSpecBuilder()

```
public SearchRequest.DynamicFacetSpec.Builder getDynamicFacetSpecBuilder()
```

Deprecated. Refer to [https://cloud.google.com/retail/docs/configs#dynamic](https://cloud.google.com/retail/docs/configs#dynamic) to enable dynamic facets. Do not set this field. The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated.

`.google.cloud.retail.v2beta.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 21 [deprecated = true];`

**Returns**

**Type**

**Description**

[SearchRequest.DynamicFacetSpec.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.DynamicFacetSpec.Builder)

### getDynamicFacetSpecOrBuilder()

```
public SearchRequest.DynamicFacetSpecOrBuilder getDynamicFacetSpecOrBuilder()
```

Deprecated. Refer to [https://cloud.google.com/retail/docs/configs#dynamic](https://cloud.google.com/retail/docs/configs#dynamic) to enable dynamic facets. Do not set this field. The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated.

`.google.cloud.retail.v2beta.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 21 [deprecated = true];`

**Returns**

**Type**

**Description**

[SearchRequest.DynamicFacetSpecOrBuilder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.DynamicFacetSpecOrBuilder)

### getFacetSpecs(int index)

```
public SearchRequest.FacetSpec getFacetSpecs(int index)
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.FacetSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.FacetSpec)

### getFacetSpecsBuilder(int index)

```
public SearchRequest.FacetSpec.Builder getFacetSpecsBuilder(int index)
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.FacetSpec.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.FacetSpec.Builder)

### getFacetSpecsBuilderList()

```
public List<SearchRequest.FacetSpec.Builder> getFacetSpecsBuilderList()
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.FacetSpec.Builder)\>

### getFacetSpecsCount()

```
public int getFacetSpecsCount()
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getFacetSpecsList()

```
public List<SearchRequest.FacetSpec> getFacetSpecsList()
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[FacetSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.FacetSpec)\>

### getFacetSpecsOrBuilder(int index)

```
public SearchRequest.FacetSpecOrBuilder getFacetSpecsOrBuilder(int index)
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.FacetSpecOrBuilder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.FacetSpecOrBuilder)

### getFacetSpecsOrBuilderList()

```
public List<? extends SearchRequest.FacetSpecOrBuilder> getFacetSpecsOrBuilderList()
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.retail.v2beta.SearchRequest.FacetSpecOrBuilder\>

### getFilter()

```
public String getFilter()
```

The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. Filter expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#filter). If this field is unrecognizable, an INVALID\_ARGUMENT is returned.

`string filter = 10;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The filter.

### getFilterBytes()

```
public ByteString getFilterBytes()
```

The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. Filter expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#filter). If this field is unrecognizable, an INVALID\_ARGUMENT is returned.

`string filter = 10;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for filter.

### getLabels()

```
public Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder#com_google_cloud_retail_v2beta_SearchRequest_Builder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

### getLabelsCount()

```
public int getLabelsCount()
```

The labels applied to a resource must meet the following requirements:

-   Each resource can have multiple labels, up to a maximum of 64.
-   Each label must be a key-value pair.
-   Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters.
-   Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed.
-   The key portion of a label must be unique. However, you can use the same key with multiple resources.
-   Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.

`map<string, string> labels = 34;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getLabelsMap()

```
public Map<String,String> getLabelsMap()
```

The labels applied to a resource must meet the following requirements:

-   Each resource can have multiple labels, up to a maximum of 64.
-   Each label must be a key-value pair.
-   Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters.
-   Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed.
-   The key portion of a label must be unique. However, you can use the same key with multiple resources.
-   Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.

`map<string, string> labels = 34;`

**Returns**

**Type**

**Description**

[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

### getLabelsOrDefault(String key, String defaultValue)

```
public String getLabelsOrDefault(String key, String defaultValue)
```

The labels applied to a resource must meet the following requirements:

-   Each resource can have multiple labels, up to a maximum of 64.
-   Each label must be a key-value pair.
-   Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters.
-   Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed.
-   The key portion of a label must be unique. However, you can use the same key with multiple resources.
-   Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.

`map<string, string> labels = 34;`

**Parameters**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

defaultValue

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### getLabelsOrThrow(String key)

```
public String getLabelsOrThrow(String key)
```

The labels applied to a resource must meet the following requirements:

-   Each resource can have multiple labels, up to a maximum of 64.
-   Each label must be a key-value pair.
-   Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters.
-   Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed.
-   The key portion of a label must be unique. However, you can use the same key with multiple resources.
-   Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.

`map<string, string> labels = 34;`

**Parameter**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### getMutableLabels()

```
public Map<String,String> getMutableLabels()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

### getOffset()

```
public int getOffset()
```

A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Products deemed by the API as relevant) in search results. This field is only considered if page\_token is unset. If this field is negative, an INVALID\_ARGUMENT is returned.

`int32 offset = 9;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The offset.

### getOrderBy()

```
public String getOrderBy()
```

The order in which products are returned. Products can be ordered by a field in an Product object. Leave it unset if ordered by relevance. OrderBy expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#order). If this field is unrecognizable, an INVALID\_ARGUMENT is returned.

`string order_by = 11;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The orderBy.

### getOrderByBytes()

```
public ByteString getOrderByBytes()
```

The order in which products are returned. Products can be ordered by a field in an Product object. Leave it unset if ordered by relevance. OrderBy expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#order). If this field is unrecognizable, an INVALID\_ARGUMENT is returned.

`string order_by = 11;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for orderBy.

### getPageCategories(int index)

```
public String getPageCategories(int index)
```

The categories associated with a category page. Required for category navigation queries to achieve good search quality. The format should be the same as UserEvent.page\_categories; To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : \["Sales > 2017 Black Friday Deals"\].

`repeated string page_categories = 23;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The pageCategories at the given index.

### getPageCategoriesBytes(int index)

```
public ByteString getPageCategoriesBytes(int index)
```

The categories associated with a category page. Required for category navigation queries to achieve good search quality. The format should be the same as UserEvent.page\_categories; To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : \["Sales > 2017 Black Friday Deals"\].

`repeated string page_categories = 23;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the pageCategories at the given index.

### getPageCategoriesCount()

```
public int getPageCategoriesCount()
```

The categories associated with a category page. Required for category navigation queries to achieve good search quality. The format should be the same as UserEvent.page\_categories; To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : \["Sales > 2017 Black Friday Deals"\].

`repeated string page_categories = 23;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of pageCategories.

### getPageCategoriesList()

```
public ProtocolStringList getPageCategoriesList()
```

The categories associated with a category page. Required for category navigation queries to achieve good search quality. The format should be the same as UserEvent.page\_categories; To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : \["Sales > 2017 Black Friday Deals"\].

`repeated string page_categories = 23;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the pageCategories.

### getPageSize()

```
public int getPageSize()
```

Maximum number of Products to return. If unspecified, defaults to a reasonable value. The maximum allowed value is 120. Values above 120 will be coerced to 120. If this field is negative, an INVALID\_ARGUMENT is returned.

`int32 page_size = 7;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The pageSize.

### getPageToken()

```
public String getPageToken()
```

A page token SearchResponse.next\_page\_token, received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an INVALID\_ARGUMENT error is returned.

`string page_token = 8;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The pageToken.

### getPageTokenBytes()

```
public ByteString getPageTokenBytes()
```

A page token SearchResponse.next\_page\_token, received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an INVALID\_ARGUMENT error is returned.

`string page_token = 8;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for pageToken.

### getPersonalizationSpec()

```
public SearchRequest.PersonalizationSpec getPersonalizationSpec()
```

The specification for personalization. Notice that if both ServingConfig.personalization\_spec and SearchRequest.personalization\_spec are set. SearchRequest.personalization\_spec will override ServingConfig.personalization\_spec.

`.google.cloud.retail.v2beta.SearchRequest.PersonalizationSpec personalization_spec = 32;`

**Returns**

**Type**

**Description**

[SearchRequest.PersonalizationSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.PersonalizationSpec)

The personalizationSpec.

### getPersonalizationSpecBuilder()

```
public SearchRequest.PersonalizationSpec.Builder getPersonalizationSpecBuilder()
```

The specification for personalization. Notice that if both ServingConfig.personalization\_spec and SearchRequest.personalization\_spec are set. SearchRequest.personalization\_spec will override ServingConfig.personalization\_spec.

`.google.cloud.retail.v2beta.SearchRequest.PersonalizationSpec personalization_spec = 32;`

**Returns**

**Type**

**Description**

[SearchRequest.PersonalizationSpec.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.PersonalizationSpec.Builder)

### getPersonalizationSpecOrBuilder()

```
public SearchRequest.PersonalizationSpecOrBuilder getPersonalizationSpecOrBuilder()
```

The specification for personalization. Notice that if both ServingConfig.personalization\_spec and SearchRequest.personalization\_spec are set. SearchRequest.personalization\_spec will override ServingConfig.personalization\_spec.

`.google.cloud.retail.v2beta.SearchRequest.PersonalizationSpec personalization_spec = 32;`

**Returns**

**Type**

**Description**

[SearchRequest.PersonalizationSpecOrBuilder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.PersonalizationSpecOrBuilder)

### getPlacement()

```
public String getPlacement()
```

Required. The resource name of the Retail Search serving config, such as `projects/*/locations/global/catalogs/default_catalog/servingConfigs/default_serving_config` or the name of the legacy placement resource, such as `projects/*/locations/global/catalogs/default_catalog/placements/default_search`. This field is used to identify the serving config name and the set of models that will be used to make the search.

`string placement = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The placement.

### getPlacementBytes()

```
public ByteString getPlacementBytes()
```

Required. The resource name of the Retail Search serving config, such as `projects/*/locations/global/catalogs/default_catalog/servingConfigs/default_serving_config` or the name of the legacy placement resource, such as `projects/*/locations/global/catalogs/default_catalog/placements/default_search`. This field is used to identify the serving config name and the set of models that will be used to make the search.

`string placement = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for placement.

### getQuery()

```
public String getQuery()
```

Raw search query. If this field is empty, the request is considered a category browsing request and returned results are based on filter and page\_categories.

`string query = 3;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The query.

### getQueryBytes()

```
public ByteString getQueryBytes()
```

Raw search query. If this field is empty, the request is considered a category browsing request and returned results are based on filter and page\_categories.

`string query = 3;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for query.

### getQueryExpansionSpec()

```
public SearchRequest.QueryExpansionSpec getQueryExpansionSpec()
```

The query expansion specification that specifies the conditions under which query expansion will occur. See more details at this [user guide](https://cloud.google.com/retail/docs/result-size#query_expansion).

`.google.cloud.retail.v2beta.SearchRequest.QueryExpansionSpec query_expansion_spec = 14;`

**Returns**

**Type**

**Description**

[SearchRequest.QueryExpansionSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.QueryExpansionSpec)

The queryExpansionSpec.

### getQueryExpansionSpecBuilder()

```
public SearchRequest.QueryExpansionSpec.Builder getQueryExpansionSpecBuilder()
```

The query expansion specification that specifies the conditions under which query expansion will occur. See more details at this [user guide](https://cloud.google.com/retail/docs/result-size#query_expansion).

`.google.cloud.retail.v2beta.SearchRequest.QueryExpansionSpec query_expansion_spec = 14;`

**Returns**

**Type**

**Description**

[SearchRequest.QueryExpansionSpec.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.QueryExpansionSpec.Builder)

### getQueryExpansionSpecOrBuilder()

```
public SearchRequest.QueryExpansionSpecOrBuilder getQueryExpansionSpecOrBuilder()
```

The query expansion specification that specifies the conditions under which query expansion will occur. See more details at this [user guide](https://cloud.google.com/retail/docs/result-size#query_expansion).

`.google.cloud.retail.v2beta.SearchRequest.QueryExpansionSpec query_expansion_spec = 14;`

**Returns**

**Type**

**Description**

[SearchRequest.QueryExpansionSpecOrBuilder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.QueryExpansionSpecOrBuilder)

### getSearchMode()

```
public SearchRequest.SearchMode getSearchMode()
```

The search mode of the search request. If not specified, a single search request triggers both product search and faceted search.

`.google.cloud.retail.v2beta.SearchRequest.SearchMode search_mode = 31;`

**Returns**

**Type**

**Description**

[SearchRequest.SearchMode](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.SearchMode)

The searchMode.

### getSearchModeValue()

```
public int getSearchModeValue()
```

The search mode of the search request. If not specified, a single search request triggers both product search and faceted search.

`.google.cloud.retail.v2beta.SearchRequest.SearchMode search_mode = 31;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The enum numeric value on the wire for searchMode.

### getSpellCorrectionSpec()

```
public SearchRequest.SpellCorrectionSpec getSpellCorrectionSpec()
```

The spell correction specification that specifies the mode under which spell correction will take effect.

`optional .google.cloud.retail.v2beta.SearchRequest.SpellCorrectionSpec spell_correction_spec = 35;`

**Returns**

**Type**

**Description**

[SearchRequest.SpellCorrectionSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.SpellCorrectionSpec)

The spellCorrectionSpec.

### getSpellCorrectionSpecBuilder()

```
public SearchRequest.SpellCorrectionSpec.Builder getSpellCorrectionSpecBuilder()
```

The spell correction specification that specifies the mode under which spell correction will take effect.

`optional .google.cloud.retail.v2beta.SearchRequest.SpellCorrectionSpec spell_correction_spec = 35;`

**Returns**

**Type**

**Description**

[SearchRequest.SpellCorrectionSpec.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.SpellCorrectionSpec.Builder)

### getSpellCorrectionSpecOrBuilder()

```
public SearchRequest.SpellCorrectionSpecOrBuilder getSpellCorrectionSpecOrBuilder()
```

The spell correction specification that specifies the mode under which spell correction will take effect.

`optional .google.cloud.retail.v2beta.SearchRequest.SpellCorrectionSpec spell_correction_spec = 35;`

**Returns**

**Type**

**Description**

[SearchRequest.SpellCorrectionSpecOrBuilder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.SpellCorrectionSpecOrBuilder)

### getUserInfo()

```
public UserInfo getUserInfo()
```

User information.

`.google.cloud.retail.v2beta.UserInfo user_info = 5;`

**Returns**

**Type**

**Description**

[UserInfo](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.UserInfo)

The userInfo.

### getUserInfoBuilder()

```
public UserInfo.Builder getUserInfoBuilder()
```

User information.

`.google.cloud.retail.v2beta.UserInfo user_info = 5;`

**Returns**

**Type**

**Description**

[UserInfo.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.UserInfo.Builder)

### getUserInfoOrBuilder()

```
public UserInfoOrBuilder getUserInfoOrBuilder()
```

User information.

`.google.cloud.retail.v2beta.UserInfo user_info = 5;`

**Returns**

**Type**

**Description**

[UserInfoOrBuilder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.UserInfoOrBuilder)

### getVariantRollupKeys(int index)

```
public String getVariantRollupKeys(int index)
```

The keys to fetch and rollup the matching variant Products attributes, FulfillmentInfo or LocalInventorys attributes. The attributes from all the matching variant Products or LocalInventorys are merged and de-duplicated. Notice that rollup attributes will lead to extra query latency. Maximum number of keys is 30. For FulfillmentInfo, a fulfillment type and a fulfillment ID must be provided in the format of "fulfillmentType.fulfillmentId". E.g., in "pickupInStore.store123", "pickupInStore" is fulfillment type and "store123" is the store ID. Supported keys are:

-   colorFamilies
-   price
-   originalPrice
-   discount
-   variantId
-   inventory(place\_id,price)
-   inventory(place\_id,original\_price)
-   inventory(place\_id,attributes.key), where key is any key in the Product.local\_inventories.attributes map.
-   attributes.key, where key is any key in the Product.attributes map.
-   pickupInStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "pickup-in-store".
-   shipToStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "ship-to-store".
-   sameDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "same-day-delivery".
-   nextDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "next-day-delivery".
-   customFulfillment1.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-1".
-   customFulfillment2.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-2".
-   customFulfillment3.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-3".
-   customFulfillment4.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-4".
-   customFulfillment5.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-5". If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.

`repeated string variant_rollup_keys = 17;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The variantRollupKeys at the given index.

### getVariantRollupKeysBytes(int index)

```
public ByteString getVariantRollupKeysBytes(int index)
```

The keys to fetch and rollup the matching variant Products attributes, FulfillmentInfo or LocalInventorys attributes. The attributes from all the matching variant Products or LocalInventorys are merged and de-duplicated. Notice that rollup attributes will lead to extra query latency. Maximum number of keys is 30. For FulfillmentInfo, a fulfillment type and a fulfillment ID must be provided in the format of "fulfillmentType.fulfillmentId". E.g., in "pickupInStore.store123", "pickupInStore" is fulfillment type and "store123" is the store ID. Supported keys are:

-   colorFamilies
-   price
-   originalPrice
-   discount
-   variantId
-   inventory(place\_id,price)
-   inventory(place\_id,original\_price)
-   inventory(place\_id,attributes.key), where key is any key in the Product.local\_inventories.attributes map.
-   attributes.key, where key is any key in the Product.attributes map.
-   pickupInStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "pickup-in-store".
-   shipToStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "ship-to-store".
-   sameDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "same-day-delivery".
-   nextDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "next-day-delivery".
-   customFulfillment1.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-1".
-   customFulfillment2.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-2".
-   customFulfillment3.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-3".
-   customFulfillment4.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-4".
-   customFulfillment5.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-5". If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.

`repeated string variant_rollup_keys = 17;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the variantRollupKeys at the given index.

### getVariantRollupKeysCount()

```
public int getVariantRollupKeysCount()
```

The keys to fetch and rollup the matching variant Products attributes, FulfillmentInfo or LocalInventorys attributes. The attributes from all the matching variant Products or LocalInventorys are merged and de-duplicated. Notice that rollup attributes will lead to extra query latency. Maximum number of keys is 30. For FulfillmentInfo, a fulfillment type and a fulfillment ID must be provided in the format of "fulfillmentType.fulfillmentId". E.g., in "pickupInStore.store123", "pickupInStore" is fulfillment type and "store123" is the store ID. Supported keys are:

-   colorFamilies
-   price
-   originalPrice
-   discount
-   variantId
-   inventory(place\_id,price)
-   inventory(place\_id,original\_price)
-   inventory(place\_id,attributes.key), where key is any key in the Product.local\_inventories.attributes map.
-   attributes.key, where key is any key in the Product.attributes map.
-   pickupInStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "pickup-in-store".
-   shipToStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "ship-to-store".
-   sameDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "same-day-delivery".
-   nextDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "next-day-delivery".
-   customFulfillment1.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-1".
-   customFulfillment2.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-2".
-   customFulfillment3.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-3".
-   customFulfillment4.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-4".
-   customFulfillment5.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-5". If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.

`repeated string variant_rollup_keys = 17;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of variantRollupKeys.

### getVariantRollupKeysList()

```
public ProtocolStringList getVariantRollupKeysList()
```

The keys to fetch and rollup the matching variant Products attributes, FulfillmentInfo or LocalInventorys attributes. The attributes from all the matching variant Products or LocalInventorys are merged and de-duplicated. Notice that rollup attributes will lead to extra query latency. Maximum number of keys is 30. For FulfillmentInfo, a fulfillment type and a fulfillment ID must be provided in the format of "fulfillmentType.fulfillmentId". E.g., in "pickupInStore.store123", "pickupInStore" is fulfillment type and "store123" is the store ID. Supported keys are:

-   colorFamilies
-   price
-   originalPrice
-   discount
-   variantId
-   inventory(place\_id,price)
-   inventory(place\_id,original\_price)
-   inventory(place\_id,attributes.key), where key is any key in the Product.local\_inventories.attributes map.
-   attributes.key, where key is any key in the Product.attributes map.
-   pickupInStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "pickup-in-store".
-   shipToStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "ship-to-store".
-   sameDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "same-day-delivery".
-   nextDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "next-day-delivery".
-   customFulfillment1.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-1".
-   customFulfillment2.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-2".
-   customFulfillment3.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-3".
-   customFulfillment4.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-4".
-   customFulfillment5.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-5". If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.

`repeated string variant_rollup_keys = 17;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the variantRollupKeys.

### getVisitorId()

```
public String getVisitorId()
```

Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This should be the same identifier as UserEvent.visitor\_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

`string visitor_id = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The visitorId.

### getVisitorIdBytes()

```
public ByteString getVisitorIdBytes()
```

Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This should be the same identifier as UserEvent.visitor\_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

`string visitor_id = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for visitorId.

### hasBoostSpec()

```
public boolean hasBoostSpec()
```

Boost specification to boost certain products. See more details at this [user guide](https://cloud.google.com/retail/docs/boosting). Notice that if both ServingConfig.boost\_control\_ids and SearchRequest.boost\_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions.

`.google.cloud.retail.v2beta.SearchRequest.BoostSpec boost_spec = 13;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the boostSpec field is set.

### hasDynamicFacetSpec() (deprecated)

```
public boolean hasDynamicFacetSpec()
```

**Deprecated.** _google.cloud.retail.v2beta.SearchRequest.dynamic\_facet\_spec is deprecated. See google/cloud/retail/v2beta/search\_service.proto;l=586_

Deprecated. Refer to [https://cloud.google.com/retail/docs/configs#dynamic](https://cloud.google.com/retail/docs/configs#dynamic) to enable dynamic facets. Do not set this field. The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated.

`.google.cloud.retail.v2beta.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 21 [deprecated = true];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the dynamicFacetSpec field is set.

### hasPersonalizationSpec()

```
public boolean hasPersonalizationSpec()
```

The specification for personalization. Notice that if both ServingConfig.personalization\_spec and SearchRequest.personalization\_spec are set. SearchRequest.personalization\_spec will override ServingConfig.personalization\_spec.

`.google.cloud.retail.v2beta.SearchRequest.PersonalizationSpec personalization_spec = 32;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the personalizationSpec field is set.

### hasQueryExpansionSpec()

```
public boolean hasQueryExpansionSpec()
```

The query expansion specification that specifies the conditions under which query expansion will occur. See more details at this [user guide](https://cloud.google.com/retail/docs/result-size#query_expansion).

`.google.cloud.retail.v2beta.SearchRequest.QueryExpansionSpec query_expansion_spec = 14;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the queryExpansionSpec field is set.

### hasSpellCorrectionSpec()

```
public boolean hasSpellCorrectionSpec()
```

The spell correction specification that specifies the mode under which spell correction will take effect.

`optional .google.cloud.retail.v2beta.SearchRequest.SpellCorrectionSpec spell_correction_spec = 35;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the spellCorrectionSpec field is set.

### hasUserInfo()

```
public boolean hasUserInfo()
```

User information.

`.google.cloud.retail.v2beta.UserInfo user_info = 5;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the userInfo field is set.

### internalGetFieldAccessorTable()

```
protected GeneratedMessageV3.FieldAccessorTable internalGetFieldAccessorTable()
```

**Returns**

**Type**

**Description**

[FieldAccessorTable](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.FieldAccessorTable.html)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.internalGetFieldAccessorTable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetFieldAccessorTable__)

### internalGetMapField(int number)

```
protected MapField internalGetMapField(int number)
```

**Parameter**

**Name**

**Description**

number

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[MapField](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MapField.html)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.internalGetMapField(int fieldNumber)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetMapField_int_)

### internalGetMutableMapField(int number)

```
protected MapField internalGetMutableMapField(int number)
```

**Parameter**

**Name**

**Description**

number

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[MapField](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MapField.html)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.internalGetMutableMapField(int fieldNumber)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetMutableMapField_int_)

### isInitialized()

```
public final boolean isInitialized()
```

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.isInitialized()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_isInitialized__)

### mergeBoostSpec(SearchRequest.BoostSpec value)

```
public SearchRequest.Builder mergeBoostSpec(SearchRequest.BoostSpec value)
```

Boost specification to boost certain products. See more details at this [user guide](https://cloud.google.com/retail/docs/boosting). Notice that if both ServingConfig.boost\_control\_ids and SearchRequest.boost\_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions.

`.google.cloud.retail.v2beta.SearchRequest.BoostSpec boost_spec = 13;`

**Parameter**

**Name**

**Description**

value

`[SearchRequest.BoostSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.BoostSpec)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### mergeDynamicFacetSpec(SearchRequest.DynamicFacetSpec value)

```
public SearchRequest.Builder mergeDynamicFacetSpec(SearchRequest.DynamicFacetSpec value)
```

Deprecated. Refer to [https://cloud.google.com/retail/docs/configs#dynamic](https://cloud.google.com/retail/docs/configs#dynamic) to enable dynamic facets. Do not set this field. The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated.

`.google.cloud.retail.v2beta.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 21 [deprecated = true];`

**Parameter**

**Name**

**Description**

value

`[SearchRequest.DynamicFacetSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.DynamicFacetSpec)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### mergeFrom(SearchRequest other)

```
public SearchRequest.Builder mergeFrom(SearchRequest other)
```

**Parameter**

**Name**

**Description**

other

`[SearchRequest](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public SearchRequest.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### mergeFrom(Message other)

```
public SearchRequest.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

other

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergePersonalizationSpec(SearchRequest.PersonalizationSpec value)

```
public SearchRequest.Builder mergePersonalizationSpec(SearchRequest.PersonalizationSpec value)
```

The specification for personalization. Notice that if both ServingConfig.personalization\_spec and SearchRequest.personalization\_spec are set. SearchRequest.personalization\_spec will override ServingConfig.personalization\_spec.

`.google.cloud.retail.v2beta.SearchRequest.PersonalizationSpec personalization_spec = 32;`

**Parameter**

**Name**

**Description**

value

`[SearchRequest.PersonalizationSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.PersonalizationSpec)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### mergeQueryExpansionSpec(SearchRequest.QueryExpansionSpec value)

```
public SearchRequest.Builder mergeQueryExpansionSpec(SearchRequest.QueryExpansionSpec value)
```

The query expansion specification that specifies the conditions under which query expansion will occur. See more details at this [user guide](https://cloud.google.com/retail/docs/result-size#query_expansion).

`.google.cloud.retail.v2beta.SearchRequest.QueryExpansionSpec query_expansion_spec = 14;`

**Parameter**

**Name**

**Description**

value

`[SearchRequest.QueryExpansionSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.QueryExpansionSpec)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### mergeSpellCorrectionSpec(SearchRequest.SpellCorrectionSpec value)

```
public SearchRequest.Builder mergeSpellCorrectionSpec(SearchRequest.SpellCorrectionSpec value)
```

The spell correction specification that specifies the mode under which spell correction will take effect.

`optional .google.cloud.retail.v2beta.SearchRequest.SpellCorrectionSpec spell_correction_spec = 35;`

**Parameter**

**Name**

**Description**

value

`[SearchRequest.SpellCorrectionSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.SpellCorrectionSpec)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final SearchRequest.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

unknownFields

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### mergeUserInfo(UserInfo value)

```
public SearchRequest.Builder mergeUserInfo(UserInfo value)
```

User information.

`.google.cloud.retail.v2beta.UserInfo user_info = 5;`

**Parameter**

**Name**

**Description**

value

`[UserInfo](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.UserInfo)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### putAllLabels(Map<String,String> values)

```
public SearchRequest.Builder putAllLabels(Map<String,String> values)
```

The labels applied to a resource must meet the following requirements:

-   Each resource can have multiple labels, up to a maximum of 64.
-   Each label must be a key-value pair.
-   Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters.
-   Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed.
-   The key portion of a label must be unique. However, you can use the same key with multiple resources.
-   Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.

`map<string, string> labels = 34;`

**Parameter**

**Name**

**Description**

values

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### putLabels(String key, String value)

```
public SearchRequest.Builder putLabels(String key, String value)
```

The labels applied to a resource must meet the following requirements:

-   Each resource can have multiple labels, up to a maximum of 64.
-   Each label must be a key-value pair.
-   Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters.
-   Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed.
-   The key portion of a label must be unique. However, you can use the same key with multiple resources.
-   Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.

`map<string, string> labels = 34;`

**Parameters**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### removeFacetSpecs(int index)

```
public SearchRequest.Builder removeFacetSpecs(int index)
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### removeLabels(String key)

```
public SearchRequest.Builder removeLabels(String key)
```

The labels applied to a resource must meet the following requirements:

-   Each resource can have multiple labels, up to a maximum of 64.
-   Each label must be a key-value pair.
-   Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters.
-   Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed.
-   The key portion of a label must be unique. However, you can use the same key with multiple resources.
-   Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.

`map<string, string> labels = 34;`

**Parameter**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### setBoostSpec(SearchRequest.BoostSpec value)

```
public SearchRequest.Builder setBoostSpec(SearchRequest.BoostSpec value)
```

Boost specification to boost certain products. See more details at this [user guide](https://cloud.google.com/retail/docs/boosting). Notice that if both ServingConfig.boost\_control\_ids and SearchRequest.boost\_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions.

`.google.cloud.retail.v2beta.SearchRequest.BoostSpec boost_spec = 13;`

**Parameter**

**Name**

**Description**

value

`[SearchRequest.BoostSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.BoostSpec)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### setBoostSpec(SearchRequest.BoostSpec.Builder builderForValue)

```
public SearchRequest.Builder setBoostSpec(SearchRequest.BoostSpec.Builder builderForValue)
```

Boost specification to boost certain products. See more details at this [user guide](https://cloud.google.com/retail/docs/boosting). Notice that if both ServingConfig.boost\_control\_ids and SearchRequest.boost\_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions.

`.google.cloud.retail.v2beta.SearchRequest.BoostSpec boost_spec = 13;`

**Parameter**

**Name**

**Description**

builderForValue

`[SearchRequest.BoostSpec.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.BoostSpec.Builder)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### setBranch(String value)

```
public SearchRequest.Builder setBranch(String value)
```

The branch resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/0`. Use "default\_branch" as the branch ID or leave this field empty, to search products under the default branch.

`string branch = 2 [(.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The branch to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setBranchBytes(ByteString value)

```
public SearchRequest.Builder setBranchBytes(ByteString value)
```

The branch resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/0`. Use "default\_branch" as the branch ID or leave this field empty, to search products under the default branch.

`string branch = 2 [(.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for branch to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setCanonicalFilter(String value)

```
public SearchRequest.Builder setCanonicalFilter(String value)
```

The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. For example, if a query does not have enough results, an expanded query with SearchRequest.canonical\_filter will be returned as a supplement of the original query. This field is strongly recommended to achieve high search quality. See SearchRequest.filter for more details about filter syntax.

`string canonical_filter = 28;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The canonicalFilter to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setCanonicalFilterBytes(ByteString value)

```
public SearchRequest.Builder setCanonicalFilterBytes(ByteString value)
```

The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. For example, if a query does not have enough results, an expanded query with SearchRequest.canonical\_filter will be returned as a supplement of the original query. This field is strongly recommended to achieve high search quality. See SearchRequest.filter for more details about filter syntax.

`string canonical_filter = 28;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for canonicalFilter to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setDynamicFacetSpec(SearchRequest.DynamicFacetSpec value)

```
public SearchRequest.Builder setDynamicFacetSpec(SearchRequest.DynamicFacetSpec value)
```

Deprecated. Refer to [https://cloud.google.com/retail/docs/configs#dynamic](https://cloud.google.com/retail/docs/configs#dynamic) to enable dynamic facets. Do not set this field. The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated.

`.google.cloud.retail.v2beta.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 21 [deprecated = true];`

**Parameter**

**Name**

**Description**

value

`[SearchRequest.DynamicFacetSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.DynamicFacetSpec)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### setDynamicFacetSpec(SearchRequest.DynamicFacetSpec.Builder builderForValue)

```
public SearchRequest.Builder setDynamicFacetSpec(SearchRequest.DynamicFacetSpec.Builder builderForValue)
```

Deprecated. Refer to [https://cloud.google.com/retail/docs/configs#dynamic](https://cloud.google.com/retail/docs/configs#dynamic) to enable dynamic facets. Do not set this field. The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated.

`.google.cloud.retail.v2beta.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 21 [deprecated = true];`

**Parameter**

**Name**

**Description**

builderForValue

`[SearchRequest.DynamicFacetSpec.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.DynamicFacetSpec.Builder)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### setFacetSpecs(int index, SearchRequest.FacetSpec value)

```
public SearchRequest.Builder setFacetSpecs(int index, SearchRequest.FacetSpec value)
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[SearchRequest.FacetSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.FacetSpec)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### setFacetSpecs(int index, SearchRequest.FacetSpec.Builder builderForValue)

```
public SearchRequest.Builder setFacetSpecs(int index, SearchRequest.FacetSpec.Builder builderForValue)
```

Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated .google.cloud.retail.v2beta.SearchRequest.FacetSpec facet_specs = 12;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

builderForValue

`[SearchRequest.FacetSpec.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.FacetSpec.Builder)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### setField(Descriptors.FieldDescriptor field, Object value)

```
public SearchRequest.Builder setField(Descriptors.FieldDescriptor field, Object value)
```

**Parameters**

**Name**

**Description**

field

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

value

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setFilter(String value)

```
public SearchRequest.Builder setFilter(String value)
```

The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. Filter expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#filter). If this field is unrecognizable, an INVALID\_ARGUMENT is returned.

`string filter = 10;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The filter to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setFilterBytes(ByteString value)

```
public SearchRequest.Builder setFilterBytes(ByteString value)
```

The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. Filter expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#filter). If this field is unrecognizable, an INVALID\_ARGUMENT is returned.

`string filter = 10;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for filter to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setOffset(int value)

```
public SearchRequest.Builder setOffset(int value)
```

A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Products deemed by the API as relevant) in search results. This field is only considered if page\_token is unset. If this field is negative, an INVALID\_ARGUMENT is returned.

`int32 offset = 9;`

**Parameter**

**Name**

**Description**

value

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The offset to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setOrderBy(String value)

```
public SearchRequest.Builder setOrderBy(String value)
```

The order in which products are returned. Products can be ordered by a field in an Product object. Leave it unset if ordered by relevance. OrderBy expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#order). If this field is unrecognizable, an INVALID\_ARGUMENT is returned.

`string order_by = 11;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The orderBy to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setOrderByBytes(ByteString value)

```
public SearchRequest.Builder setOrderByBytes(ByteString value)
```

The order in which products are returned. Products can be ordered by a field in an Product object. Leave it unset if ordered by relevance. OrderBy expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#order). If this field is unrecognizable, an INVALID\_ARGUMENT is returned.

`string order_by = 11;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for orderBy to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setPageCategories(int index, String value)

```
public SearchRequest.Builder setPageCategories(int index, String value)
```

The categories associated with a category page. Required for category navigation queries to achieve good search quality. The format should be the same as UserEvent.page\_categories; To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : \["Sales > 2017 Black Friday Deals"\].

`repeated string page_categories = 23;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The pageCategories to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setPageSize(int value)

```
public SearchRequest.Builder setPageSize(int value)
```

Maximum number of Products to return. If unspecified, defaults to a reasonable value. The maximum allowed value is 120. Values above 120 will be coerced to 120. If this field is negative, an INVALID\_ARGUMENT is returned.

`int32 page_size = 7;`

**Parameter**

**Name**

**Description**

value

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The pageSize to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setPageToken(String value)

```
public SearchRequest.Builder setPageToken(String value)
```

A page token SearchResponse.next\_page\_token, received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an INVALID\_ARGUMENT error is returned.

`string page_token = 8;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The pageToken to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setPageTokenBytes(ByteString value)

```
public SearchRequest.Builder setPageTokenBytes(ByteString value)
```

A page token SearchResponse.next\_page\_token, received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an INVALID\_ARGUMENT error is returned.

`string page_token = 8;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for pageToken to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setPersonalizationSpec(SearchRequest.PersonalizationSpec value)

```
public SearchRequest.Builder setPersonalizationSpec(SearchRequest.PersonalizationSpec value)
```

The specification for personalization. Notice that if both ServingConfig.personalization\_spec and SearchRequest.personalization\_spec are set. SearchRequest.personalization\_spec will override ServingConfig.personalization\_spec.

`.google.cloud.retail.v2beta.SearchRequest.PersonalizationSpec personalization_spec = 32;`

**Parameter**

**Name**

**Description**

value

`[SearchRequest.PersonalizationSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.PersonalizationSpec)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### setPersonalizationSpec(SearchRequest.PersonalizationSpec.Builder builderForValue)

```
public SearchRequest.Builder setPersonalizationSpec(SearchRequest.PersonalizationSpec.Builder builderForValue)
```

The specification for personalization. Notice that if both ServingConfig.personalization\_spec and SearchRequest.personalization\_spec are set. SearchRequest.personalization\_spec will override ServingConfig.personalization\_spec.

`.google.cloud.retail.v2beta.SearchRequest.PersonalizationSpec personalization_spec = 32;`

**Parameter**

**Name**

**Description**

builderForValue

`[SearchRequest.PersonalizationSpec.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.PersonalizationSpec.Builder)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### setPlacement(String value)

```
public SearchRequest.Builder setPlacement(String value)
```

Required. The resource name of the Retail Search serving config, such as `projects/*/locations/global/catalogs/default_catalog/servingConfigs/default_serving_config` or the name of the legacy placement resource, such as `projects/*/locations/global/catalogs/default_catalog/placements/default_search`. This field is used to identify the serving config name and the set of models that will be used to make the search.

`string placement = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The placement to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setPlacementBytes(ByteString value)

```
public SearchRequest.Builder setPlacementBytes(ByteString value)
```

Required. The resource name of the Retail Search serving config, such as `projects/*/locations/global/catalogs/default_catalog/servingConfigs/default_serving_config` or the name of the legacy placement resource, such as `projects/*/locations/global/catalogs/default_catalog/placements/default_search`. This field is used to identify the serving config name and the set of models that will be used to make the search.

`string placement = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for placement to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setQuery(String value)

```
public SearchRequest.Builder setQuery(String value)
```

Raw search query. If this field is empty, the request is considered a category browsing request and returned results are based on filter and page\_categories.

`string query = 3;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The query to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setQueryBytes(ByteString value)

```
public SearchRequest.Builder setQueryBytes(ByteString value)
```

Raw search query. If this field is empty, the request is considered a category browsing request and returned results are based on filter and page\_categories.

`string query = 3;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for query to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setQueryExpansionSpec(SearchRequest.QueryExpansionSpec value)

```
public SearchRequest.Builder setQueryExpansionSpec(SearchRequest.QueryExpansionSpec value)
```

The query expansion specification that specifies the conditions under which query expansion will occur. See more details at this [user guide](https://cloud.google.com/retail/docs/result-size#query_expansion).

`.google.cloud.retail.v2beta.SearchRequest.QueryExpansionSpec query_expansion_spec = 14;`

**Parameter**

**Name**

**Description**

value

`[SearchRequest.QueryExpansionSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.QueryExpansionSpec)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### setQueryExpansionSpec(SearchRequest.QueryExpansionSpec.Builder builderForValue)

```
public SearchRequest.Builder setQueryExpansionSpec(SearchRequest.QueryExpansionSpec.Builder builderForValue)
```

The query expansion specification that specifies the conditions under which query expansion will occur. See more details at this [user guide](https://cloud.google.com/retail/docs/result-size#query_expansion).

`.google.cloud.retail.v2beta.SearchRequest.QueryExpansionSpec query_expansion_spec = 14;`

**Parameter**

**Name**

**Description**

builderForValue

`[SearchRequest.QueryExpansionSpec.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.QueryExpansionSpec.Builder)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public SearchRequest.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
```

**Parameters**

**Name**

**Description**

field

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setSearchMode(SearchRequest.SearchMode value)

```
public SearchRequest.Builder setSearchMode(SearchRequest.SearchMode value)
```

The search mode of the search request. If not specified, a single search request triggers both product search and faceted search.

`.google.cloud.retail.v2beta.SearchRequest.SearchMode search_mode = 31;`

**Parameter**

**Name**

**Description**

value

`[SearchRequest.SearchMode](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.SearchMode)`  

The searchMode to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setSearchModeValue(int value)

```
public SearchRequest.Builder setSearchModeValue(int value)
```

The search mode of the search request. If not specified, a single search request triggers both product search and faceted search.

`.google.cloud.retail.v2beta.SearchRequest.SearchMode search_mode = 31;`

**Parameter**

**Name**

**Description**

value

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enum numeric value on the wire for searchMode to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setSpellCorrectionSpec(SearchRequest.SpellCorrectionSpec value)

```
public SearchRequest.Builder setSpellCorrectionSpec(SearchRequest.SpellCorrectionSpec value)
```

The spell correction specification that specifies the mode under which spell correction will take effect.

`optional .google.cloud.retail.v2beta.SearchRequest.SpellCorrectionSpec spell_correction_spec = 35;`

**Parameter**

**Name**

**Description**

value

`[SearchRequest.SpellCorrectionSpec](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.SpellCorrectionSpec)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### setSpellCorrectionSpec(SearchRequest.SpellCorrectionSpec.Builder builderForValue)

```
public SearchRequest.Builder setSpellCorrectionSpec(SearchRequest.SpellCorrectionSpec.Builder builderForValue)
```

The spell correction specification that specifies the mode under which spell correction will take effect.

`optional .google.cloud.retail.v2beta.SearchRequest.SpellCorrectionSpec spell_correction_spec = 35;`

**Parameter**

**Name**

**Description**

builderForValue

`[SearchRequest.SpellCorrectionSpec.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.SpellCorrectionSpec.Builder)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final SearchRequest.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

unknownFields

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setUserInfo(UserInfo value)

```
public SearchRequest.Builder setUserInfo(UserInfo value)
```

User information.

`.google.cloud.retail.v2beta.UserInfo user_info = 5;`

**Parameter**

**Name**

**Description**

value

`[UserInfo](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.UserInfo)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### setUserInfo(UserInfo.Builder builderForValue)

```
public SearchRequest.Builder setUserInfo(UserInfo.Builder builderForValue)
```

User information.

`.google.cloud.retail.v2beta.UserInfo user_info = 5;`

**Parameter**

**Name**

**Description**

builderForValue

`[UserInfo.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.UserInfo.Builder)`  

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

### setVariantRollupKeys(int index, String value)

```
public SearchRequest.Builder setVariantRollupKeys(int index, String value)
```

The keys to fetch and rollup the matching variant Products attributes, FulfillmentInfo or LocalInventorys attributes. The attributes from all the matching variant Products or LocalInventorys are merged and de-duplicated. Notice that rollup attributes will lead to extra query latency. Maximum number of keys is 30. For FulfillmentInfo, a fulfillment type and a fulfillment ID must be provided in the format of "fulfillmentType.fulfillmentId". E.g., in "pickupInStore.store123", "pickupInStore" is fulfillment type and "store123" is the store ID. Supported keys are:

-   colorFamilies
-   price
-   originalPrice
-   discount
-   variantId
-   inventory(place\_id,price)
-   inventory(place\_id,original\_price)
-   inventory(place\_id,attributes.key), where key is any key in the Product.local\_inventories.attributes map.
-   attributes.key, where key is any key in the Product.attributes map.
-   pickupInStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "pickup-in-store".
-   shipToStore.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "ship-to-store".
-   sameDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "same-day-delivery".
-   nextDayDelivery.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "next-day-delivery".
-   customFulfillment1.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-1".
-   customFulfillment2.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-2".
-   customFulfillment3.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-3".
-   customFulfillment4.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-4".
-   customFulfillment5.id, where id is any FulfillmentInfo.place\_ids for FulfillmentInfo.type "custom-type-5". If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.

`repeated string variant_rollup_keys = 17;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The variantRollupKeys to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setVisitorId(String value)

```
public SearchRequest.Builder setVisitorId(String value)
```

Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This should be the same identifier as UserEvent.visitor\_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

`string visitor_id = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The visitorId to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

### setVisitorIdBytes(ByteString value)

```
public SearchRequest.Builder setVisitorIdBytes(ByteString value)
```

Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This should be the same identifier as UserEvent.visitor\_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

`string visitor_id = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for visitorId to set.

**Returns**

**Type**

**Description**

[SearchRequest.Builder](/java/docs/reference/google-cloud-retail/2.10.0/com.google.cloud.retail.v2beta.SearchRequest.Builder)

This builder for chaining.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
