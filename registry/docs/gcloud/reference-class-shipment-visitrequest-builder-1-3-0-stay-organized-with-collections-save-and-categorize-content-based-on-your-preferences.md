-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Shipment.VisitRequest.Builder (1.3.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.14 0.1.2

```
public static final class Shipment.VisitRequest.Builder extends GeneratedMessageV3.Builder<Shipment.VisitRequest.Builder> implements Shipment.VisitRequestOrBuilder
```

Request for a visit which can be done by a vehicle: it has a geo-location (or two, see below), opening and closing times represented by time windows, and a service duration time (time spent by the vehicle once it has arrived to pickup or drop off goods).

Protobuf type `google.cloud.optimization.v1.Shipment.VisitRequest`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> Shipment.VisitRequest.Builder

## Implements

[Shipment.VisitRequestOrBuilder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequestOrBuilder)

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

### addAllDemands(Iterable<? extends CapacityQuantity> values)

```
public Shipment.VisitRequest.Builder addAllDemands(Iterable<? extends CapacityQuantity> values)
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.optimization.v1.CapacityQuantity>`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### addAllTags(Iterable<String> values)

```
public Shipment.VisitRequest.Builder addAllTags(Iterable<String> values)
```

Specifies tags attached to the visit request. Empty or duplicate strings are not allowed.

`repeated string tags = 5;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The tags to add.

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

This builder for chaining.

### addAllTimeWindows(Iterable<? extends TimeWindow> values)

```
public Shipment.VisitRequest.Builder addAllTimeWindows(Iterable<? extends TimeWindow> values)
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.optimization.v1.TimeWindow>`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### addAllVisitTypes(Iterable<String> values)

```
public Shipment.VisitRequest.Builder addAllVisitTypes(Iterable<String> values)
```

Specifies the types of the visit. This may be used to allocate additional time required for a vehicle to complete this visit (see Vehicle.extra\_visit\_duration\_for\_visit\_type). A type can only appear once.

`repeated string visit_types = 10;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The visitTypes to add.

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

This builder for chaining.

### addDemands(CapacityQuantity value)

```
public Shipment.VisitRequest.Builder addDemands(CapacityQuantity value)
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

value

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.CapacityQuantity)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### addDemands(CapacityQuantity.Builder builderForValue)

```
public Shipment.VisitRequest.Builder addDemands(CapacityQuantity.Builder builderForValue)
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

builderForValue

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### addDemands(int index, CapacityQuantity value)

```
public Shipment.VisitRequest.Builder addDemands(int index, CapacityQuantity value)
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.CapacityQuantity)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### addDemands(int index, CapacityQuantity.Builder builderForValue)

```
public Shipment.VisitRequest.Builder addDemands(int index, CapacityQuantity.Builder builderForValue)
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

builderForValue

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### addDemandsBuilder()

```
public CapacityQuantity.Builder addDemandsBuilder()
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)

### addDemandsBuilder(int index)

```
public CapacityQuantity.Builder addDemandsBuilder(int index)
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public Shipment.VisitRequest.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### addTags(String value)

```
public Shipment.VisitRequest.Builder addTags(String value)
```

Specifies tags attached to the visit request. Empty or duplicate strings are not allowed.

`repeated string tags = 5;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The tags to add.

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

This builder for chaining.

### addTagsBytes(ByteString value)

```
public Shipment.VisitRequest.Builder addTagsBytes(ByteString value)
```

Specifies tags attached to the visit request. Empty or duplicate strings are not allowed.

`repeated string tags = 5;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the tags to add.

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

This builder for chaining.

### addTimeWindows(TimeWindow value)

```
public Shipment.VisitRequest.Builder addTimeWindows(TimeWindow value)
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Parameter**

**Name**

**Description**

value

`[TimeWindow](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.TimeWindow)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### addTimeWindows(TimeWindow.Builder builderForValue)

```
public Shipment.VisitRequest.Builder addTimeWindows(TimeWindow.Builder builderForValue)
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Parameter**

**Name**

**Description**

builderForValue

`[TimeWindow.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.TimeWindow.Builder)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### addTimeWindows(int index, TimeWindow value)

```
public Shipment.VisitRequest.Builder addTimeWindows(int index, TimeWindow value)
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[TimeWindow](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.TimeWindow)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### addTimeWindows(int index, TimeWindow.Builder builderForValue)

```
public Shipment.VisitRequest.Builder addTimeWindows(int index, TimeWindow.Builder builderForValue)
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

builderForValue

`[TimeWindow.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.TimeWindow.Builder)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### addTimeWindowsBuilder()

```
public TimeWindow.Builder addTimeWindowsBuilder()
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Returns**

**Type**

**Description**

[TimeWindow.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.TimeWindow.Builder)

### addTimeWindowsBuilder(int index)

```
public TimeWindow.Builder addTimeWindowsBuilder(int index)
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[TimeWindow.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.TimeWindow.Builder)

### addVisitTypes(String value)

```
public Shipment.VisitRequest.Builder addVisitTypes(String value)
```

Specifies the types of the visit. This may be used to allocate additional time required for a vehicle to complete this visit (see Vehicle.extra\_visit\_duration\_for\_visit\_type). A type can only appear once.

`repeated string visit_types = 10;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The visitTypes to add.

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

This builder for chaining.

### addVisitTypesBytes(ByteString value)

```
public Shipment.VisitRequest.Builder addVisitTypesBytes(ByteString value)
```

Specifies the types of the visit. This may be used to allocate additional time required for a vehicle to complete this visit (see Vehicle.extra\_visit\_duration\_for\_visit\_type). A type can only appear once.

`repeated string visit_types = 10;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the visitTypes to add.

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

This builder for chaining.

### build()

```
public Shipment.VisitRequest build()
```

**Returns**

**Type**

**Description**

[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)

### buildPartial()

```
public Shipment.VisitRequest buildPartial()
```

**Returns**

**Type**

**Description**

[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)

### clear()

```
public Shipment.VisitRequest.Builder clear()
```

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearArrivalLocation()

```
public Shipment.VisitRequest.Builder clearArrivalLocation()
```

The geo-location where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_location` must not be specified.

`.google.type.LatLng arrival_location = 1;`

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### clearArrivalWaypoint()

```
public Shipment.VisitRequest.Builder clearArrivalWaypoint()
```

The waypoint where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint arrival_waypoint = 2;`

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### clearCost()

```
public Shipment.VisitRequest.Builder clearCost()
```

Cost to service this visit request on a vehicle route. This can be used to pay different costs for each alternative pickup or delivery of a shipment. This cost must be in the same unit as `Shipment.penalty_cost` and must not be negative.

`double cost = 8;`

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

This builder for chaining.

### clearDemands()

```
public Shipment.VisitRequest.Builder clearDemands()
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### clearDepartureLocation()

```
public Shipment.VisitRequest.Builder clearDepartureLocation()
```

The geo-location where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_location`. If the shipment model has duration distance matrices, `departure_location` must not be specified.

`.google.type.LatLng departure_location = 3;`

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### clearDepartureWaypoint()

```
public Shipment.VisitRequest.Builder clearDepartureWaypoint()
```

The waypoint where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_waypoint`. If the shipment model has duration distance matrices, `departure_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint departure_waypoint = 4;`

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### clearDuration()

```
public Shipment.VisitRequest.Builder clearDuration()
```

Duration of the visit, i.e. time spent by the vehicle between arrival and departure (to be added to the possible waiting time; see `time_windows`).

`.google.protobuf.Duration duration = 7;`

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### clearField(Descriptors.FieldDescriptor field)

```
public Shipment.VisitRequest.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

field

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearLabel()

```
public Shipment.VisitRequest.Builder clearLabel()
```

Specifies a label for this `VisitRequest`. This label is reported in the response as `visit_label` in the corresponding ShipmentRoute.Visit.

`string label = 11;`

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

This builder for chaining.

### clearLoadDemands()

```
public Shipment.VisitRequest.Builder clearLoadDemands()
```

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public Shipment.VisitRequest.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

oneof

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearTags()

```
public Shipment.VisitRequest.Builder clearTags()
```

Specifies tags attached to the visit request. Empty or duplicate strings are not allowed.

`repeated string tags = 5;`

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

This builder for chaining.

### clearTimeWindows()

```
public Shipment.VisitRequest.Builder clearTimeWindows()
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### clearVisitTypes()

```
public Shipment.VisitRequest.Builder clearVisitTypes()
```

Specifies the types of the visit. This may be used to allocate additional time required for a vehicle to complete this visit (see Vehicle.extra\_visit\_duration\_for\_visit\_type). A type can only appear once.

`repeated string visit_types = 10;`

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

This builder for chaining.

### clone()

```
public Shipment.VisitRequest.Builder clone()
```

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### containsLoadDemands(String key)

```
public boolean containsLoadDemands(String key)
```

Load demands of this visit request. This is just like Shipment.load\_demands field, except that it only applies to this VisitRequest instead of the whole Shipment. The demands listed here are added to the demands listed in Shipment.load\_demands.

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 12;`

**Parameter**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getArrivalLocation()

```
public LatLng getArrivalLocation()
```

The geo-location where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_location` must not be specified.

`.google.type.LatLng arrival_location = 1;`

**Returns**

**Type**

**Description**

com.google.type.LatLng

The arrivalLocation.

### getArrivalLocationBuilder()

```
public LatLng.Builder getArrivalLocationBuilder()
```

The geo-location where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_location` must not be specified.

`.google.type.LatLng arrival_location = 1;`

**Returns**

**Type**

**Description**

com.google.type.LatLng.Builder

### getArrivalLocationOrBuilder()

```
public LatLngOrBuilder getArrivalLocationOrBuilder()
```

The geo-location where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_location` must not be specified.

`.google.type.LatLng arrival_location = 1;`

**Returns**

**Type**

**Description**

com.google.type.LatLngOrBuilder

### getArrivalWaypoint()

```
public Waypoint getArrivalWaypoint()
```

The waypoint where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint arrival_waypoint = 2;`

**Returns**

**Type**

**Description**

[Waypoint](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Waypoint)

The arrivalWaypoint.

### getArrivalWaypointBuilder()

```
public Waypoint.Builder getArrivalWaypointBuilder()
```

The waypoint where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint arrival_waypoint = 2;`

**Returns**

**Type**

**Description**

[Waypoint.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Waypoint.Builder)

### getArrivalWaypointOrBuilder()

```
public WaypointOrBuilder getArrivalWaypointOrBuilder()
```

The waypoint where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint arrival_waypoint = 2;`

**Returns**

**Type**

**Description**

[WaypointOrBuilder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.WaypointOrBuilder)

### getCost()

```
public double getCost()
```

Cost to service this visit request on a vehicle route. This can be used to pay different costs for each alternative pickup or delivery of a shipment. This cost must be in the same unit as `Shipment.penalty_cost` and must not be negative.

`double cost = 8;`

**Returns**

**Type**

**Description**

[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The cost.

### getDefaultInstanceForType()

```
public Shipment.VisitRequest getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)

### getDemands(int index)

```
public CapacityQuantity getDemands(int index)
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.CapacityQuantity)

### getDemandsBuilder(int index)

```
public CapacityQuantity.Builder getDemandsBuilder(int index)
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)

### getDemandsBuilderList()

```
public List<CapacityQuantity.Builder> getDemandsBuilderList()
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)\>

### getDemandsCount()

```
public int getDemandsCount()
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getDemandsList()

```
public List<CapacityQuantity> getDemandsList()
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.CapacityQuantity)\>

### getDemandsOrBuilder(int index)

```
public CapacityQuantityOrBuilder getDemandsOrBuilder(int index)
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[CapacityQuantityOrBuilder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.CapacityQuantityOrBuilder)

### getDemandsOrBuilderList()

```
public List<? extends CapacityQuantityOrBuilder> getDemandsOrBuilderList()
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.CapacityQuantityOrBuilder\>

### getDepartureLocation()

```
public LatLng getDepartureLocation()
```

The geo-location where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_location`. If the shipment model has duration distance matrices, `departure_location` must not be specified.

`.google.type.LatLng departure_location = 3;`

**Returns**

**Type**

**Description**

com.google.type.LatLng

The departureLocation.

### getDepartureLocationBuilder()

```
public LatLng.Builder getDepartureLocationBuilder()
```

The geo-location where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_location`. If the shipment model has duration distance matrices, `departure_location` must not be specified.

`.google.type.LatLng departure_location = 3;`

**Returns**

**Type**

**Description**

com.google.type.LatLng.Builder

### getDepartureLocationOrBuilder()

```
public LatLngOrBuilder getDepartureLocationOrBuilder()
```

The geo-location where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_location`. If the shipment model has duration distance matrices, `departure_location` must not be specified.

`.google.type.LatLng departure_location = 3;`

**Returns**

**Type**

**Description**

com.google.type.LatLngOrBuilder

### getDepartureWaypoint()

```
public Waypoint getDepartureWaypoint()
```

The waypoint where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_waypoint`. If the shipment model has duration distance matrices, `departure_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint departure_waypoint = 4;`

**Returns**

**Type**

**Description**

[Waypoint](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Waypoint)

The departureWaypoint.

### getDepartureWaypointBuilder()

```
public Waypoint.Builder getDepartureWaypointBuilder()
```

The waypoint where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_waypoint`. If the shipment model has duration distance matrices, `departure_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint departure_waypoint = 4;`

**Returns**

**Type**

**Description**

[Waypoint.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Waypoint.Builder)

### getDepartureWaypointOrBuilder()

```
public WaypointOrBuilder getDepartureWaypointOrBuilder()
```

The waypoint where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_waypoint`. If the shipment model has duration distance matrices, `departure_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint departure_waypoint = 4;`

**Returns**

**Type**

**Description**

[WaypointOrBuilder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.WaypointOrBuilder)

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

### getDuration()

```
public Duration getDuration()
```

Duration of the visit, i.e. time spent by the vehicle between arrival and departure (to be added to the possible waiting time; see `time_windows`).

`.google.protobuf.Duration duration = 7;`

**Returns**

**Type**

**Description**

[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)

The duration.

### getDurationBuilder()

```
public Duration.Builder getDurationBuilder()
```

Duration of the visit, i.e. time spent by the vehicle between arrival and departure (to be added to the possible waiting time; see `time_windows`).

`.google.protobuf.Duration duration = 7;`

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)

### getDurationOrBuilder()

```
public DurationOrBuilder getDurationOrBuilder()
```

Duration of the visit, i.e. time spent by the vehicle between arrival and departure (to be added to the possible waiting time; see `time_windows`).

`.google.protobuf.Duration duration = 7;`

**Returns**

**Type**

**Description**

[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)

### getLabel()

```
public String getLabel()
```

Specifies a label for this `VisitRequest`. This label is reported in the response as `visit_label` in the corresponding ShipmentRoute.Visit.

`string label = 11;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

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

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for label.

### getLoadDemands()

```
public Map<String,Shipment.Load> getLoadDemands()
```

Use [#getLoadDemandsMap()](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder#com_google_cloud_optimization_v1_Shipment_VisitRequest_Builder_getLoadDemandsMap__) instead.

**Returns**

**Type**

**Description**

[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Load](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.Load)\>

### getLoadDemandsCount()

```
public int getLoadDemandsCount()
```

Load demands of this visit request. This is just like Shipment.load\_demands field, except that it only applies to this VisitRequest instead of the whole Shipment. The demands listed here are added to the demands listed in Shipment.load\_demands.

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 12;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getLoadDemandsMap()

```
public Map<String,Shipment.Load> getLoadDemandsMap()
```

Load demands of this visit request. This is just like Shipment.load\_demands field, except that it only applies to this VisitRequest instead of the whole Shipment. The demands listed here are added to the demands listed in Shipment.load\_demands.

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 12;`

**Returns**

**Type**

**Description**

[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Load](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.Load)\>

### getLoadDemandsOrDefault(String key, Shipment.Load defaultValue)

```
public Shipment.Load getLoadDemandsOrDefault(String key, Shipment.Load defaultValue)
```

Load demands of this visit request. This is just like Shipment.load\_demands field, except that it only applies to this VisitRequest instead of the whole Shipment. The demands listed here are added to the demands listed in Shipment.load\_demands.

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 12;`

**Parameters**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

defaultValue

`[Shipment.Load](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.Load)`  

**Returns**

**Type**

**Description**

[Shipment.Load](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.Load)

### getLoadDemandsOrThrow(String key)

```
public Shipment.Load getLoadDemandsOrThrow(String key)
```

Load demands of this visit request. This is just like Shipment.load\_demands field, except that it only applies to this VisitRequest instead of the whole Shipment. The demands listed here are added to the demands listed in Shipment.load\_demands.

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 12;`

**Parameter**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[Shipment.Load](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.Load)

### getMutableLoadDemands()

```
public Map<String,Shipment.Load> getMutableLoadDemands()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Load](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.Load)\>

### getTags(int index)

```
public String getTags(int index)
```

Specifies tags attached to the visit request. Empty or duplicate strings are not allowed.

`repeated string tags = 5;`

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

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

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

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

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

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

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

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[TimeWindow](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.TimeWindow)

### getTimeWindowsBuilder(int index)

```
public TimeWindow.Builder getTimeWindowsBuilder(int index)
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[TimeWindow.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.TimeWindow.Builder)

### getTimeWindowsBuilderList()

```
public List<TimeWindow.Builder> getTimeWindowsBuilderList()
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.TimeWindow.Builder)\>

### getTimeWindowsCount()

```
public int getTimeWindowsCount()
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getTimeWindowsList()

```
public List<TimeWindow> getTimeWindowsList()
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[TimeWindow](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.TimeWindow)\>

### getTimeWindowsOrBuilder(int index)

```
public TimeWindowOrBuilder getTimeWindowsOrBuilder(int index)
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[TimeWindowOrBuilder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.TimeWindowOrBuilder)

### getTimeWindowsOrBuilderList()

```
public List<? extends TimeWindowOrBuilder> getTimeWindowsOrBuilderList()
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.TimeWindowOrBuilder\>

### getVisitTypes(int index)

```
public String getVisitTypes(int index)
```

Specifies the types of the visit. This may be used to allocate additional time required for a vehicle to complete this visit (see Vehicle.extra\_visit\_duration\_for\_visit\_type). A type can only appear once.

`repeated string visit_types = 10;`

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

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

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

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

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

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

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

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

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

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

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

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

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

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

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

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the duration field is set.

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

### mergeArrivalLocation(LatLng value)

```
public Shipment.VisitRequest.Builder mergeArrivalLocation(LatLng value)
```

The geo-location where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_location` must not be specified.

`.google.type.LatLng arrival_location = 1;`

**Parameter**

**Name**

**Description**

value

`com.google.type.LatLng`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### mergeArrivalWaypoint(Waypoint value)

```
public Shipment.VisitRequest.Builder mergeArrivalWaypoint(Waypoint value)
```

The waypoint where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint arrival_waypoint = 2;`

**Parameter**

**Name**

**Description**

value

`[Waypoint](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Waypoint)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### mergeDepartureLocation(LatLng value)

```
public Shipment.VisitRequest.Builder mergeDepartureLocation(LatLng value)
```

The geo-location where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_location`. If the shipment model has duration distance matrices, `departure_location` must not be specified.

`.google.type.LatLng departure_location = 3;`

**Parameter**

**Name**

**Description**

value

`com.google.type.LatLng`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### mergeDepartureWaypoint(Waypoint value)

```
public Shipment.VisitRequest.Builder mergeDepartureWaypoint(Waypoint value)
```

The waypoint where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_waypoint`. If the shipment model has duration distance matrices, `departure_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint departure_waypoint = 4;`

**Parameter**

**Name**

**Description**

value

`[Waypoint](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Waypoint)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### mergeDuration(Duration value)

```
public Shipment.VisitRequest.Builder mergeDuration(Duration value)
```

Duration of the visit, i.e. time spent by the vehicle between arrival and departure (to be added to the possible waiting time; see `time_windows`).

`.google.protobuf.Duration duration = 7;`

**Parameter**

**Name**

**Description**

value

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### mergeFrom(Shipment.VisitRequest other)

```
public Shipment.VisitRequest.Builder mergeFrom(Shipment.VisitRequest other)
```

**Parameter**

**Name**

**Description**

other

`[Shipment.VisitRequest](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public Shipment.VisitRequest.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### mergeFrom(Message other)

```
public Shipment.VisitRequest.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

other

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final Shipment.VisitRequest.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

unknownFields

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### putAllLoadDemands(Map<String,Shipment.Load> values)

```
public Shipment.VisitRequest.Builder putAllLoadDemands(Map<String,Shipment.Load> values)
```

Load demands of this visit request. This is just like Shipment.load\_demands field, except that it only applies to this VisitRequest instead of the whole Shipment. The demands listed here are added to the demands listed in Shipment.load\_demands.

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 12;`

**Parameter**

**Name**

**Description**

values

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Load](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.Load)>`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### putLoadDemands(String key, Shipment.Load value)

```
public Shipment.VisitRequest.Builder putLoadDemands(String key, Shipment.Load value)
```

Load demands of this visit request. This is just like Shipment.load\_demands field, except that it only applies to this VisitRequest instead of the whole Shipment. The demands listed here are added to the demands listed in Shipment.load\_demands.

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 12;`

**Parameters**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

value

`[Shipment.Load](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.Load)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### removeDemands(int index)

```
public Shipment.VisitRequest.Builder removeDemands(int index)
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### removeLoadDemands(String key)

```
public Shipment.VisitRequest.Builder removeLoadDemands(String key)
```

Load demands of this visit request. This is just like Shipment.load\_demands field, except that it only applies to this VisitRequest instead of the whole Shipment. The demands listed here are added to the demands listed in Shipment.load\_demands.

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 12;`

**Parameter**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### removeTimeWindows(int index)

```
public Shipment.VisitRequest.Builder removeTimeWindows(int index)
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### setArrivalLocation(LatLng value)

```
public Shipment.VisitRequest.Builder setArrivalLocation(LatLng value)
```

The geo-location where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_location` must not be specified.

`.google.type.LatLng arrival_location = 1;`

**Parameter**

**Name**

**Description**

value

`com.google.type.LatLng`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### setArrivalLocation(LatLng.Builder builderForValue)

```
public Shipment.VisitRequest.Builder setArrivalLocation(LatLng.Builder builderForValue)
```

The geo-location where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_location` must not be specified.

`.google.type.LatLng arrival_location = 1;`

**Parameter**

**Name**

**Description**

builderForValue

`com.google.type.LatLng.Builder`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### setArrivalWaypoint(Waypoint value)

```
public Shipment.VisitRequest.Builder setArrivalWaypoint(Waypoint value)
```

The waypoint where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint arrival_waypoint = 2;`

**Parameter**

**Name**

**Description**

value

`[Waypoint](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Waypoint)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### setArrivalWaypoint(Waypoint.Builder builderForValue)

```
public Shipment.VisitRequest.Builder setArrivalWaypoint(Waypoint.Builder builderForValue)
```

The waypoint where the vehicle arrives when performing this `VisitRequest`. If the shipment model has duration distance matrices, `arrival_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint arrival_waypoint = 2;`

**Parameter**

**Name**

**Description**

builderForValue

`[Waypoint.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Waypoint.Builder)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### setCost(double value)

```
public Shipment.VisitRequest.Builder setCost(double value)
```

Cost to service this visit request on a vehicle route. This can be used to pay different costs for each alternative pickup or delivery of a shipment. This cost must be in the same unit as `Shipment.penalty_cost` and must not be negative.

`double cost = 8;`

**Parameter**

**Name**

**Description**

value

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The cost to set.

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

This builder for chaining.

### setDemands(int index, CapacityQuantity value)

```
public Shipment.VisitRequest.Builder setDemands(int index, CapacityQuantity value)
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.CapacityQuantity)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### setDemands(int index, CapacityQuantity.Builder builderForValue)

```
public Shipment.VisitRequest.Builder setDemands(int index, CapacityQuantity.Builder builderForValue)
```

Deprecated: Use \[VisitRequest.load\_demands\]\[\] instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 9 [deprecated = true];`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

builderForValue

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### setDepartureLocation(LatLng value)

```
public Shipment.VisitRequest.Builder setDepartureLocation(LatLng value)
```

The geo-location where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_location`. If the shipment model has duration distance matrices, `departure_location` must not be specified.

`.google.type.LatLng departure_location = 3;`

**Parameter**

**Name**

**Description**

value

`com.google.type.LatLng`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### setDepartureLocation(LatLng.Builder builderForValue)

```
public Shipment.VisitRequest.Builder setDepartureLocation(LatLng.Builder builderForValue)
```

The geo-location where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_location`. If the shipment model has duration distance matrices, `departure_location` must not be specified.

`.google.type.LatLng departure_location = 3;`

**Parameter**

**Name**

**Description**

builderForValue

`com.google.type.LatLng.Builder`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### setDepartureWaypoint(Waypoint value)

```
public Shipment.VisitRequest.Builder setDepartureWaypoint(Waypoint value)
```

The waypoint where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_waypoint`. If the shipment model has duration distance matrices, `departure_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint departure_waypoint = 4;`

**Parameter**

**Name**

**Description**

value

`[Waypoint](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Waypoint)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### setDepartureWaypoint(Waypoint.Builder builderForValue)

```
public Shipment.VisitRequest.Builder setDepartureWaypoint(Waypoint.Builder builderForValue)
```

The waypoint where the vehicle departs after completing this `VisitRequest`. Can be omitted if it is the same as `arrival_waypoint`. If the shipment model has duration distance matrices, `departure_waypoint` must not be specified.

`.google.cloud.optimization.v1.Waypoint departure_waypoint = 4;`

**Parameter**

**Name**

**Description**

builderForValue

`[Waypoint.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Waypoint.Builder)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### setDuration(Duration value)

```
public Shipment.VisitRequest.Builder setDuration(Duration value)
```

Duration of the visit, i.e. time spent by the vehicle between arrival and departure (to be added to the possible waiting time; see `time_windows`).

`.google.protobuf.Duration duration = 7;`

**Parameter**

**Name**

**Description**

value

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### setDuration(Duration.Builder builderForValue)

```
public Shipment.VisitRequest.Builder setDuration(Duration.Builder builderForValue)
```

Duration of the visit, i.e. time spent by the vehicle between arrival and departure (to be added to the possible waiting time; see `time_windows`).

`.google.protobuf.Duration duration = 7;`

**Parameter**

**Name**

**Description**

builderForValue

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### setField(Descriptors.FieldDescriptor field, Object value)

```
public Shipment.VisitRequest.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setLabel(String value)

```
public Shipment.VisitRequest.Builder setLabel(String value)
```

Specifies a label for this `VisitRequest`. This label is reported in the response as `visit_label` in the corresponding ShipmentRoute.Visit.

`string label = 11;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The label to set.

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

This builder for chaining.

### setLabelBytes(ByteString value)

```
public Shipment.VisitRequest.Builder setLabelBytes(ByteString value)
```

Specifies a label for this `VisitRequest`. This label is reported in the response as `visit_label` in the corresponding ShipmentRoute.Visit.

`string label = 11;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for label to set.

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public Shipment.VisitRequest.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setTags(int index, String value)

```
public Shipment.VisitRequest.Builder setTags(int index, String value)
```

Specifies tags attached to the visit request. Empty or duplicate strings are not allowed.

`repeated string tags = 5;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The tags to set.

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

This builder for chaining.

### setTimeWindows(int index, TimeWindow value)

```
public Shipment.VisitRequest.Builder setTimeWindows(int index, TimeWindow value)
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[TimeWindow](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.TimeWindow)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### setTimeWindows(int index, TimeWindow.Builder builderForValue)

```
public Shipment.VisitRequest.Builder setTimeWindows(int index, TimeWindow.Builder builderForValue)
```

Time windows which constrain the arrival time at a visit. Note that a vehicle may depart outside of the arrival time window, i.e. arrival time + duration do not need to be inside a time window. This can result in waiting time if the vehicle arrives before TimeWindow.start\_time. The absence of `TimeWindow` means that the vehicle can perform this visit at any time. Time windows must be disjoint, i.e. no time window must overlap with or be adjacent to another, and they must be in increasing order. `cost_per_hour_after_soft_end_time` and `soft_end_time` can only be set if there is a single time window.

`repeated .google.cloud.optimization.v1.TimeWindow time_windows = 6;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

builderForValue

`[TimeWindow.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.TimeWindow.Builder)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final Shipment.VisitRequest.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

unknownFields

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setVisitTypes(int index, String value)

```
public Shipment.VisitRequest.Builder setVisitTypes(int index, String value)
```

Specifies the types of the visit. This may be used to allocate additional time required for a vehicle to complete this visit (see Vehicle.extra\_visit\_duration\_for\_visit\_type). A type can only appear once.

`repeated string visit_types = 10;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The visitTypes to set.

**Returns**

**Type**

**Description**

[Shipment.VisitRequest.Builder](/java/docs/reference/google-cloud-optimization/1.3.0/com.google.cloud.optimization.v1.Shipment.VisitRequest.Builder)

This builder for chaining.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
