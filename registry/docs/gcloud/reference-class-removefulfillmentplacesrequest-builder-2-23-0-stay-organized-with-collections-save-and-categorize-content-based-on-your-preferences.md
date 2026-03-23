-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class RemoveFulfillmentPlacesRequest.Builder (2.23.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public static final class RemoveFulfillmentPlacesRequest.Builder extends GeneratedMessageV3.Builder<RemoveFulfillmentPlacesRequest.Builder> implements RemoveFulfillmentPlacesRequestOrBuilder
```

Request message for ProductService.RemoveFulfillmentPlaces method.

Protobuf type `google.cloud.retail.v2.RemoveFulfillmentPlacesRequest`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> RemoveFulfillmentPlacesRequest.Builder

## Implements

[RemoveFulfillmentPlacesRequestOrBuilder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequestOrBuilder)

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

`[Descriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.Descriptor.html)`

## Methods

### addAllPlaceIds(Iterable<String> values)

```
public RemoveFulfillmentPlacesRequest.Builder addAllPlaceIds(Iterable<String> values)
```

Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type.

At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string place_ids = 3 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The placeIds to add.

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

This builder for chaining.

### addPlaceIds(String value)

```
public RemoveFulfillmentPlacesRequest.Builder addPlaceIds(String value)
```

Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type.

At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string place_ids = 3 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The placeIds to add.

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

This builder for chaining.

### addPlaceIdsBytes(ByteString value)

```
public RemoveFulfillmentPlacesRequest.Builder addPlaceIdsBytes(ByteString value)
```

Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type.

At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string place_ids = 3 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the placeIds to add.

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

This builder for chaining.

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public RemoveFulfillmentPlacesRequest.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public RemoveFulfillmentPlacesRequest build()
```

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest)`

### buildPartial()

```
public RemoveFulfillmentPlacesRequest buildPartial()
```

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest)`

### clear()

```
public RemoveFulfillmentPlacesRequest.Builder clear()
```

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearAllowMissing()

```
public RemoveFulfillmentPlacesRequest.Builder clearAllowMissing()
```

If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT\_FOUND error is returned if the Product is not found.

`bool allow_missing = 5;`

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public RemoveFulfillmentPlacesRequest.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public RemoveFulfillmentPlacesRequest.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearPlaceIds()

```
public RemoveFulfillmentPlacesRequest.Builder clearPlaceIds()
```

Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type.

At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string place_ids = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

This builder for chaining.

### clearProduct()

```
public RemoveFulfillmentPlacesRequest.Builder clearProduct()
```

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

`string product = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

This builder for chaining.

### clearRemoveTime()

```
public RemoveFulfillmentPlacesRequest.Builder clearRemoveTime()
```

The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.

`.google.protobuf.Timestamp remove_time = 4;`

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

### clearType()

```
public RemoveFulfillmentPlacesRequest.Builder clearType()
```

Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types.

Supported values:

-   "pickup-in-store"
-   "ship-to-store"
-   "same-day-delivery"
-   "next-day-delivery"
-   "custom-type-1"
-   "custom-type-2"
-   "custom-type-3"
-   "custom-type-4"
-   "custom-type-5"
    
    If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.
    
    This field directly corresponds to Product.fulfillment\_info.type.
    

`string type = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

This builder for chaining.

### clone()

```
public RemoveFulfillmentPlacesRequest.Builder clone()
```

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getAllowMissing()

```
public boolean getAllowMissing()
```

If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT\_FOUND error is returned if the Product is not found.

`bool allow_missing = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The allowMissing.

### getDefaultInstanceForType()

```
public RemoveFulfillmentPlacesRequest getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest)`

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

### getPlaceIds(int index)

```
public String getPlaceIds(int index)
```

Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type.

At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string place_ids = 3 [(.google.api.field_behavior) = REQUIRED];`

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

The placeIds at the given index.

### getPlaceIdsBytes(int index)

```
public ByteString getPlaceIdsBytes(int index)
```

Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type.

At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string place_ids = 3 [(.google.api.field_behavior) = REQUIRED];`

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

The bytes of the placeIds at the given index.

### getPlaceIdsCount()

```
public int getPlaceIdsCount()
```

Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type.

At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string place_ids = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of placeIds.

### getPlaceIdsList()

```
public ProtocolStringList getPlaceIdsList()
```

Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type.

At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string place_ids = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)`

A list containing the placeIds.

### getProduct()

```
public String getProduct()
```

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

`string product = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The product.

### getProductBytes()

```
public ByteString getProductBytes()
```

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

`string product = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for product.

### getRemoveTime()

```
public Timestamp getRemoveTime()
```

The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.

`.google.protobuf.Timestamp remove_time = 4;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The removeTime.

### getRemoveTimeBuilder()

```
public Timestamp.Builder getRemoveTimeBuilder()
```

The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.

`.google.protobuf.Timestamp remove_time = 4;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getRemoveTimeOrBuilder()

```
public TimestampOrBuilder getRemoveTimeOrBuilder()
```

The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.

`.google.protobuf.Timestamp remove_time = 4;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getType()

```
public String getType()
```

Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types.

Supported values:

-   "pickup-in-store"
-   "ship-to-store"
-   "same-day-delivery"
-   "next-day-delivery"
-   "custom-type-1"
-   "custom-type-2"
-   "custom-type-3"
-   "custom-type-4"
-   "custom-type-5"
    
    If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.
    
    This field directly corresponds to Product.fulfillment\_info.type.
    

`string type = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The type.

### getTypeBytes()

```
public ByteString getTypeBytes()
```

Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types.

Supported values:

-   "pickup-in-store"
-   "ship-to-store"
-   "same-day-delivery"
-   "next-day-delivery"
-   "custom-type-1"
-   "custom-type-2"
-   "custom-type-3"
-   "custom-type-4"
-   "custom-type-5"
    
    If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.
    
    This field directly corresponds to Product.fulfillment\_info.type.
    

`string type = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for type.

### hasRemoveTime()

```
public boolean hasRemoveTime()
```

The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.

`.google.protobuf.Timestamp remove_time = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the removeTime field is set.

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

### mergeFrom(RemoveFulfillmentPlacesRequest other)

```
public RemoveFulfillmentPlacesRequest.Builder mergeFrom(RemoveFulfillmentPlacesRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[RemoveFulfillmentPlacesRequest](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest)`  

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public RemoveFulfillmentPlacesRequest.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public RemoveFulfillmentPlacesRequest.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeRemoveTime(Timestamp value)

```
public RemoveFulfillmentPlacesRequest.Builder mergeRemoveTime(Timestamp value)
```

The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.

`.google.protobuf.Timestamp remove_time = 4;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final RemoveFulfillmentPlacesRequest.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setAllowMissing(boolean value)

```
public RemoveFulfillmentPlacesRequest.Builder setAllowMissing(boolean value)
```

If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT\_FOUND error is returned if the Product is not found.

`bool allow_missing = 5;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The allowMissing to set.

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public RemoveFulfillmentPlacesRequest.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setPlaceIds(int index, String value)

```
public RemoveFulfillmentPlacesRequest.Builder setPlaceIds(int index, String value)
```

Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type.

At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string place_ids = 3 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The placeIds to set.

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

This builder for chaining.

### setProduct(String value)

```
public RemoveFulfillmentPlacesRequest.Builder setProduct(String value)
```

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

`string product = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The product to set.

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

This builder for chaining.

### setProductBytes(ByteString value)

```
public RemoveFulfillmentPlacesRequest.Builder setProductBytes(ByteString value)
```

Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.

If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION\_DENIED error is returned.

`string product = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for product to set.

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

This builder for chaining.

### setRemoveTime(Timestamp value)

```
public RemoveFulfillmentPlacesRequest.Builder setRemoveTime(Timestamp value)
```

The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.

`.google.protobuf.Timestamp remove_time = 4;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

### setRemoveTime(Timestamp.Builder builderForValue)

```
public RemoveFulfillmentPlacesRequest.Builder setRemoveTime(Timestamp.Builder builderForValue)
```

The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.

`.google.protobuf.Timestamp remove_time = 4;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public RemoveFulfillmentPlacesRequest.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setType(String value)

```
public RemoveFulfillmentPlacesRequest.Builder setType(String value)
```

Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types.

Supported values:

-   "pickup-in-store"
-   "ship-to-store"
-   "same-day-delivery"
-   "next-day-delivery"
-   "custom-type-1"
-   "custom-type-2"
-   "custom-type-3"
-   "custom-type-4"
-   "custom-type-5"
    
    If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.
    
    This field directly corresponds to Product.fulfillment\_info.type.
    

`string type = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The type to set.

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

This builder for chaining.

### setTypeBytes(ByteString value)

```
public RemoveFulfillmentPlacesRequest.Builder setTypeBytes(ByteString value)
```

Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types.

Supported values:

-   "pickup-in-store"
-   "ship-to-store"
-   "same-day-delivery"
-   "next-day-delivery"
-   "custom-type-1"
-   "custom-type-2"
-   "custom-type-3"
-   "custom-type-4"
-   "custom-type-5"
    
    If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.
    
    This field directly corresponds to Product.fulfillment\_info.type.
    

`string type = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for type to set.

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

This builder for chaining.

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final RemoveFulfillmentPlacesRequest.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[RemoveFulfillmentPlacesRequest.Builder](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.RemoveFulfillmentPlacesRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
