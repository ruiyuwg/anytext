-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ShipmentRoute.Visit.Builder (1.56.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.14 0.1.2

```
public static final class ShipmentRoute.Visit.Builder extends GeneratedMessageV3.Builder<ShipmentRoute.Visit.Builder> implements ShipmentRoute.VisitOrBuilder
```

A visit performed during a route. This visit corresponds to a pickup or a delivery of a `Shipment`.

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.Visit`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> ShipmentRoute.Visit.Builder

## Implements

[ShipmentRoute.VisitOrBuilder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.VisitOrBuilder)

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

### addAllArrivalLoads(Iterable<? extends CapacityQuantity> values) (deprecated)

```
public ShipmentRoute.Visit.Builder addAllArrivalLoads(Iterable<? extends CapacityQuantity> values)
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.optimization.v1.CapacityQuantity>`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### addAllDemands(Iterable<? extends CapacityQuantity> values) (deprecated)

```
public ShipmentRoute.Visit.Builder addAllDemands(Iterable<? extends CapacityQuantity> values)
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.optimization.v1.CapacityQuantity>`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### addArrivalLoads(CapacityQuantity value) (deprecated)

```
public ShipmentRoute.Visit.Builder addArrivalLoads(CapacityQuantity value)
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

`value`

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### addArrivalLoads(CapacityQuantity.Builder builderForValue) (deprecated)

```
public ShipmentRoute.Visit.Builder addArrivalLoads(CapacityQuantity.Builder builderForValue)
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### addArrivalLoads(int index, CapacityQuantity value) (deprecated)

```
public ShipmentRoute.Visit.Builder addArrivalLoads(int index, CapacityQuantity value)
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### addArrivalLoads(int index, CapacityQuantity.Builder builderForValue) (deprecated)

```
public ShipmentRoute.Visit.Builder addArrivalLoads(int index, CapacityQuantity.Builder builderForValue)
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### addArrivalLoadsBuilder() (deprecated)

```
public CapacityQuantity.Builder addArrivalLoadsBuilder()
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`

### addArrivalLoadsBuilder(int index) (deprecated)

```
public CapacityQuantity.Builder addArrivalLoadsBuilder(int index)
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`

### addDemands(CapacityQuantity value) (deprecated)

```
public ShipmentRoute.Visit.Builder addDemands(CapacityQuantity value)
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Parameter**

**Name**

**Description**

`value`

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### addDemands(CapacityQuantity.Builder builderForValue) (deprecated)

```
public ShipmentRoute.Visit.Builder addDemands(CapacityQuantity.Builder builderForValue)
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### addDemands(int index, CapacityQuantity value) (deprecated)

```
public ShipmentRoute.Visit.Builder addDemands(int index, CapacityQuantity value)
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### addDemands(int index, CapacityQuantity.Builder builderForValue) (deprecated)

```
public ShipmentRoute.Visit.Builder addDemands(int index, CapacityQuantity.Builder builderForValue)
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### addDemandsBuilder() (deprecated)

```
public CapacityQuantity.Builder addDemandsBuilder()
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Returns**

**Type**

**Description**

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`

### addDemandsBuilder(int index) (deprecated)

```
public CapacityQuantity.Builder addDemandsBuilder(int index)
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public ShipmentRoute.Visit.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public ShipmentRoute.Visit build()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

### buildPartial()

```
public ShipmentRoute.Visit buildPartial()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

### clear()

```
public ShipmentRoute.Visit.Builder clear()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearArrivalLoads() (deprecated)

```
public ShipmentRoute.Visit.Builder clearArrivalLoads()
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### clearDelayBeforeStart() (deprecated)

```
public ShipmentRoute.Visit.Builder clearDelayBeforeStart()
```

Deprecated: Use ShipmentRoute.Transition.delay\_duration instead. Delay occurring before the visit starts.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_start = 10 [deprecated = true];`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### clearDemands() (deprecated)

```
public ShipmentRoute.Visit.Builder clearDemands()
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### clearDetour()

```
public ShipmentRoute.Visit.Builder clearDetour()
```

Extra detour time due to the shipments visited on the route before the visit and to the potential waiting time induced by time windows. If the visit is a delivery, the detour is computed from the corresponding pickup visit and is equal to: \` `` `start_time(delivery) - start_time(pickup)` ``

`` `-   (duration(pickup) + travel duration from the pickup location to the delivery location).` ``

`Otherwise, it is computed from the vehicle` start\_location `and is equal to:` `` `start_time - vehicle_start_time - travel duration from the vehicle's` start_location `to the visit.` `` \`

`.google.protobuf.Duration detour = 6;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### clearField(Descriptors.FieldDescriptor field)

```
public ShipmentRoute.Visit.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearIsPickup()

```
public ShipmentRoute.Visit.Builder clearIsPickup()
```

If true the visit corresponds to a pickup of a `Shipment`. Otherwise, it corresponds to a delivery.

`bool is_pickup = 2;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

This builder for chaining.

### clearLoadDemands()

```
public ShipmentRoute.Visit.Builder clearLoadDemands()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public ShipmentRoute.Visit.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearShipmentIndex()

```
public ShipmentRoute.Visit.Builder clearShipmentIndex()
```

Index of the `shipments` field in the source ShipmentModel.

`int32 shipment_index = 1;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

This builder for chaining.

### clearShipmentLabel()

```
public ShipmentRoute.Visit.Builder clearShipmentLabel()
```

Copy of the corresponding `Shipment.label`, if specified in the `Shipment`.

`string shipment_label = 7;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

This builder for chaining.

### clearStartTime()

```
public ShipmentRoute.Visit.Builder clearStartTime()
```

Time at which the visit starts. Note that the vehicle may arrive earlier than this at the visit location. Times are consistent with the `ShipmentModel`.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### clearVisitLabel()

```
public ShipmentRoute.Visit.Builder clearVisitLabel()
```

Copy of the corresponding VisitRequest.label, if specified in the `VisitRequest`.

`string visit_label = 8;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

This builder for chaining.

### clearVisitRequestIndex()

```
public ShipmentRoute.Visit.Builder clearVisitRequestIndex()
```

Index of `VisitRequest` in either the pickup or delivery field of the `Shipment` (see `is_pickup`).

`int32 visit_request_index = 3;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

This builder for chaining.

### clone()

```
public ShipmentRoute.Visit.Builder clone()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### containsLoadDemands(String key)

```
public boolean containsLoadDemands(String key)
```

Total visit load demand as the sum of the shipment and the visit request `load_demands`. The values are negative if the visit is a delivery. Demands are reported for the same types as the Transition.loads (see this field).

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 11;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getArrivalLoads(int index) (deprecated)

```
public CapacityQuantity getArrivalLoads(int index)
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity)`

### getArrivalLoadsBuilder(int index) (deprecated)

```
public CapacityQuantity.Builder getArrivalLoadsBuilder(int index)
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`

### getArrivalLoadsBuilderList() (deprecated)

```
public List<CapacityQuantity.Builder> getArrivalLoadsBuilderList()
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)>`

### getArrivalLoadsCount() (deprecated)

```
public int getArrivalLoadsCount()
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getArrivalLoadsList() (deprecated)

```
public List<CapacityQuantity> getArrivalLoadsList()
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity)>`

### getArrivalLoadsOrBuilder(int index) (deprecated)

```
public CapacityQuantityOrBuilder getArrivalLoadsOrBuilder(int index)
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantityOrBuilder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantityOrBuilder)`

### getArrivalLoadsOrBuilderList() (deprecated)

```
public List<? extends CapacityQuantityOrBuilder> getArrivalLoadsOrBuilderList()
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.CapacityQuantityOrBuilder>`

### getDefaultInstanceForType()

```
public ShipmentRoute.Visit getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`

### getDelayBeforeStart() (deprecated)

```
public ShipmentRoute.Delay getDelayBeforeStart()
```

**Deprecated.** _google.cloud.optimization.v1.ShipmentRoute.Visit.delay\_before\_start is deprecated. See google/cloud/optimization/v1/fleet\_routing.proto;l=1965_

Deprecated: Use ShipmentRoute.Transition.delay\_duration instead. Delay occurring before the visit starts.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_start = 10 [deprecated = true];`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Delay](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Delay)`

The delayBeforeStart.

### getDelayBeforeStartBuilder() (deprecated)

```
public ShipmentRoute.Delay.Builder getDelayBeforeStartBuilder()
```

Deprecated: Use ShipmentRoute.Transition.delay\_duration instead. Delay occurring before the visit starts.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_start = 10 [deprecated = true];`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Delay.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Delay.Builder)`

### getDelayBeforeStartOrBuilder() (deprecated)

```
public ShipmentRoute.DelayOrBuilder getDelayBeforeStartOrBuilder()
```

Deprecated: Use ShipmentRoute.Transition.delay\_duration instead. Delay occurring before the visit starts.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_start = 10 [deprecated = true];`

**Returns**

**Type**

**Description**

`[ShipmentRoute.DelayOrBuilder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.DelayOrBuilder)`

### getDemands(int index) (deprecated)

```
public CapacityQuantity getDemands(int index)
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity)`

### getDemandsBuilder(int index) (deprecated)

```
public CapacityQuantity.Builder getDemandsBuilder(int index)
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`

### getDemandsBuilderList() (deprecated)

```
public List<CapacityQuantity.Builder> getDemandsBuilderList()
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)>`

### getDemandsCount() (deprecated)

```
public int getDemandsCount()
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getDemandsList() (deprecated)

```
public List<CapacityQuantity> getDemandsList()
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity)>`

### getDemandsOrBuilder(int index) (deprecated)

```
public CapacityQuantityOrBuilder getDemandsOrBuilder(int index)
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantityOrBuilder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantityOrBuilder)`

### getDemandsOrBuilderList() (deprecated)

```
public List<? extends CapacityQuantityOrBuilder> getDemandsOrBuilderList()
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.CapacityQuantityOrBuilder>`

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

### getDetour()

```
public Duration getDetour()
```

Extra detour time due to the shipments visited on the route before the visit and to the potential waiting time induced by time windows. If the visit is a delivery, the detour is computed from the corresponding pickup visit and is equal to: \` `` `start_time(delivery) - start_time(pickup)` ``

`` `-   (duration(pickup) + travel duration from the pickup location to the delivery location).` ``

`Otherwise, it is computed from the vehicle` start\_location `and is equal to:` `` `start_time - vehicle_start_time - travel duration from the vehicle's` start_location `to the visit.` `` \`

`.google.protobuf.Duration detour = 6;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The detour.

### getDetourBuilder()

```
public Duration.Builder getDetourBuilder()
```

Extra detour time due to the shipments visited on the route before the visit and to the potential waiting time induced by time windows. If the visit is a delivery, the detour is computed from the corresponding pickup visit and is equal to: \` `` `start_time(delivery) - start_time(pickup)` ``

`` `-   (duration(pickup) + travel duration from the pickup location to the delivery location).` ``

`Otherwise, it is computed from the vehicle` start\_location `and is equal to:` `` `start_time - vehicle_start_time - travel duration from the vehicle's` start_location `to the visit.` `` \`

`.google.protobuf.Duration detour = 6;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`

### getDetourOrBuilder()

```
public DurationOrBuilder getDetourOrBuilder()
```

Extra detour time due to the shipments visited on the route before the visit and to the potential waiting time induced by time windows. If the visit is a delivery, the detour is computed from the corresponding pickup visit and is equal to: \` `` `start_time(delivery) - start_time(pickup)` ``

`` `-   (duration(pickup) + travel duration from the pickup location to the delivery location).` ``

`Otherwise, it is computed from the vehicle` start\_location `and is equal to:` `` `start_time - vehicle_start_time - travel duration from the vehicle's` start_location `to the visit.` `` \`

`.google.protobuf.Duration detour = 6;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getIsPickup()

```
public boolean getIsPickup()
```

If true the visit corresponds to a pickup of a `Shipment`. Otherwise, it corresponds to a delivery.

`bool is_pickup = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The isPickup.

### getLoadDemands() (deprecated)

```
public Map<String,Shipment.Load> getLoadDemands()
```

Use [#getLoadDemandsMap()](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder#com_google_cloud_optimization_v1_ShipmentRoute_Visit_Builder_getLoadDemandsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Load](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.Shipment.Load)>`

### getLoadDemandsCount()

```
public int getLoadDemandsCount()
```

Total visit load demand as the sum of the shipment and the visit request `load_demands`. The values are negative if the visit is a delivery. Demands are reported for the same types as the Transition.loads (see this field).

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 11;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLoadDemandsMap()

```
public Map<String,Shipment.Load> getLoadDemandsMap()
```

Total visit load demand as the sum of the shipment and the visit request `load_demands`. The values are negative if the visit is a delivery. Demands are reported for the same types as the Transition.loads (see this field).

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 11;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Load](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.Shipment.Load)>`

### getLoadDemandsOrDefault(String key, Shipment.Load defaultValue)

```
public Shipment.Load getLoadDemandsOrDefault(String key, Shipment.Load defaultValue)
```

Total visit load demand as the sum of the shipment and the visit request `load_demands`. The values are negative if the visit is a delivery. Demands are reported for the same types as the Transition.loads (see this field).

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 11;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[Shipment.Load](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.Shipment.Load)`  

**Returns**

**Type**

**Description**

`[Shipment.Load](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.Shipment.Load)`

### getLoadDemandsOrThrow(String key)

```
public Shipment.Load getLoadDemandsOrThrow(String key)
```

Total visit load demand as the sum of the shipment and the visit request `load_demands`. The values are negative if the visit is a delivery. Demands are reported for the same types as the Transition.loads (see this field).

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 11;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Shipment.Load](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.Shipment.Load)`

### getMutableLoadDemands() (deprecated)

```
public Map<String,Shipment.Load> getMutableLoadDemands()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Load](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.Shipment.Load)>`

### getShipmentIndex()

```
public int getShipmentIndex()
```

Index of the `shipments` field in the source ShipmentModel.

`int32 shipment_index = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The shipmentIndex.

### getShipmentLabel()

```
public String getShipmentLabel()
```

Copy of the corresponding `Shipment.label`, if specified in the `Shipment`.

`string shipment_label = 7;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The shipmentLabel.

### getShipmentLabelBytes()

```
public ByteString getShipmentLabelBytes()
```

Copy of the corresponding `Shipment.label`, if specified in the `Shipment`.

`string shipment_label = 7;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for shipmentLabel.

### getStartTime()

```
public Timestamp getStartTime()
```

Time at which the visit starts. Note that the vehicle may arrive earlier than this at the visit location. Times are consistent with the `ShipmentModel`.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The startTime.

### getStartTimeBuilder()

```
public Timestamp.Builder getStartTimeBuilder()
```

Time at which the visit starts. Note that the vehicle may arrive earlier than this at the visit location. Times are consistent with the `ShipmentModel`.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getStartTimeOrBuilder()

```
public TimestampOrBuilder getStartTimeOrBuilder()
```

Time at which the visit starts. Note that the vehicle may arrive earlier than this at the visit location. Times are consistent with the `ShipmentModel`.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getVisitLabel()

```
public String getVisitLabel()
```

Copy of the corresponding VisitRequest.label, if specified in the `VisitRequest`.

`string visit_label = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The visitLabel.

### getVisitLabelBytes()

```
public ByteString getVisitLabelBytes()
```

Copy of the corresponding VisitRequest.label, if specified in the `VisitRequest`.

`string visit_label = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for visitLabel.

### getVisitRequestIndex()

```
public int getVisitRequestIndex()
```

Index of `VisitRequest` in either the pickup or delivery field of the `Shipment` (see `is_pickup`).

`int32 visit_request_index = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The visitRequestIndex.

### hasDelayBeforeStart() (deprecated)

```
public boolean hasDelayBeforeStart()
```

**Deprecated.** _google.cloud.optimization.v1.ShipmentRoute.Visit.delay\_before\_start is deprecated. See google/cloud/optimization/v1/fleet\_routing.proto;l=1965_

Deprecated: Use ShipmentRoute.Transition.delay\_duration instead. Delay occurring before the visit starts.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_start = 10 [deprecated = true];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the delayBeforeStart field is set.

### hasDetour()

```
public boolean hasDetour()
```

Extra detour time due to the shipments visited on the route before the visit and to the potential waiting time induced by time windows. If the visit is a delivery, the detour is computed from the corresponding pickup visit and is equal to: \` `` `start_time(delivery) - start_time(pickup)` ``

`` `-   (duration(pickup) + travel duration from the pickup location to the delivery location).` ``

`Otherwise, it is computed from the vehicle` start\_location `and is equal to:` `` `start_time - vehicle_start_time - travel duration from the vehicle's` start_location `to the visit.` `` \`

`.google.protobuf.Duration detour = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the detour field is set.

### hasStartTime()

```
public boolean hasStartTime()
```

Time at which the visit starts. Note that the vehicle may arrive earlier than this at the visit location. Times are consistent with the `ShipmentModel`.

`.google.protobuf.Timestamp start_time = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

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

### mergeDelayBeforeStart(ShipmentRoute.Delay value) (deprecated)

```
public ShipmentRoute.Visit.Builder mergeDelayBeforeStart(ShipmentRoute.Delay value)
```

Deprecated: Use ShipmentRoute.Transition.delay\_duration instead. Delay occurring before the visit starts.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_start = 10 [deprecated = true];`

**Parameter**

**Name**

**Description**

`value`

`[ShipmentRoute.Delay](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Delay)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### mergeDetour(Duration value)

```
public ShipmentRoute.Visit.Builder mergeDetour(Duration value)
```

Extra detour time due to the shipments visited on the route before the visit and to the potential waiting time induced by time windows. If the visit is a delivery, the detour is computed from the corresponding pickup visit and is equal to: \` `` `start_time(delivery) - start_time(pickup)` ``

`` `-   (duration(pickup) + travel duration from the pickup location to the delivery location).` ``

`Otherwise, it is computed from the vehicle` start\_location `and is equal to:` `` `start_time - vehicle_start_time - travel duration from the vehicle's` start_location `to the visit.` `` \`

`.google.protobuf.Duration detour = 6;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### mergeFrom(ShipmentRoute.Visit other)

```
public ShipmentRoute.Visit.Builder mergeFrom(ShipmentRoute.Visit other)
```

**Parameter**

**Name**

**Description**

`other`

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public ShipmentRoute.Visit.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public ShipmentRoute.Visit.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeStartTime(Timestamp value)

```
public ShipmentRoute.Visit.Builder mergeStartTime(Timestamp value)
```

Time at which the visit starts. Note that the vehicle may arrive earlier than this at the visit location. Times are consistent with the `ShipmentModel`.

`.google.protobuf.Timestamp start_time = 4;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final ShipmentRoute.Visit.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### putAllLoadDemands(Map<String,Shipment.Load> values)

```
public ShipmentRoute.Visit.Builder putAllLoadDemands(Map<String,Shipment.Load> values)
```

Total visit load demand as the sum of the shipment and the visit request `load_demands`. The values are negative if the visit is a delivery. Demands are reported for the same types as the Transition.loads (see this field).

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 11;`

**Parameter**

**Name**

**Description**

`values`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Load](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.Shipment.Load)>`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### putLoadDemands(String key, Shipment.Load value)

```
public ShipmentRoute.Visit.Builder putLoadDemands(String key, Shipment.Load value)
```

Total visit load demand as the sum of the shipment and the visit request `load_demands`. The values are negative if the visit is a delivery. Demands are reported for the same types as the Transition.loads (see this field).

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 11;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`value`

`[Shipment.Load](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.Shipment.Load)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### putLoadDemandsBuilderIfAbsent(String key)

```
public Shipment.Load.Builder putLoadDemandsBuilderIfAbsent(String key)
```

Total visit load demand as the sum of the shipment and the visit request `load_demands`. The values are negative if the visit is a delivery. Demands are reported for the same types as the Transition.loads (see this field).

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 11;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Shipment.Load.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.Shipment.Load.Builder)`

### removeArrivalLoads(int index) (deprecated)

```
public ShipmentRoute.Visit.Builder removeArrivalLoads(int index)
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### removeDemands(int index) (deprecated)

```
public ShipmentRoute.Visit.Builder removeDemands(int index)
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### removeLoadDemands(String key)

```
public ShipmentRoute.Visit.Builder removeLoadDemands(String key)
```

Total visit load demand as the sum of the shipment and the visit request `load_demands`. The values are negative if the visit is a delivery. Demands are reported for the same types as the Transition.loads (see this field).

`map<string, .google.cloud.optimization.v1.Shipment.Load> load_demands = 11;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### setArrivalLoads(int index, CapacityQuantity value) (deprecated)

```
public ShipmentRoute.Visit.Builder setArrivalLoads(int index, CapacityQuantity value)
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### setArrivalLoads(int index, CapacityQuantity.Builder builderForValue) (deprecated)

```
public ShipmentRoute.Visit.Builder setArrivalLoads(int index, CapacityQuantity.Builder builderForValue)
```

Deprecated: Use Transition.vehicle\_loads instead. Vehicle loads upon arrival at the visit location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or `demands`.

Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity arrival_loads = 9 [deprecated = true];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### setDelayBeforeStart(ShipmentRoute.Delay value) (deprecated)

```
public ShipmentRoute.Visit.Builder setDelayBeforeStart(ShipmentRoute.Delay value)
```

Deprecated: Use ShipmentRoute.Transition.delay\_duration instead. Delay occurring before the visit starts.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_start = 10 [deprecated = true];`

**Parameter**

**Name**

**Description**

`value`

`[ShipmentRoute.Delay](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Delay)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### setDelayBeforeStart(ShipmentRoute.Delay.Builder builderForValue) (deprecated)

```
public ShipmentRoute.Visit.Builder setDelayBeforeStart(ShipmentRoute.Delay.Builder builderForValue)
```

Deprecated: Use ShipmentRoute.Transition.delay\_duration instead. Delay occurring before the visit starts.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_start = 10 [deprecated = true];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[ShipmentRoute.Delay.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Delay.Builder)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### setDemands(int index, CapacityQuantity value) (deprecated)

```
public ShipmentRoute.Visit.Builder setDemands(int index, CapacityQuantity value)
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### setDemands(int index, CapacityQuantity.Builder builderForValue) (deprecated)

```
public ShipmentRoute.Visit.Builder setDemands(int index, CapacityQuantity.Builder builderForValue)
```

Deprecated: Use Visit.load\_demands instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity demands = 5 [deprecated = true];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### setDetour(Duration value)

```
public ShipmentRoute.Visit.Builder setDetour(Duration value)
```

Extra detour time due to the shipments visited on the route before the visit and to the potential waiting time induced by time windows. If the visit is a delivery, the detour is computed from the corresponding pickup visit and is equal to: \` `` `start_time(delivery) - start_time(pickup)` ``

`` `-   (duration(pickup) + travel duration from the pickup location to the delivery location).` ``

`Otherwise, it is computed from the vehicle` start\_location `and is equal to:` `` `start_time - vehicle_start_time - travel duration from the vehicle's` start_location `to the visit.` `` \`

`.google.protobuf.Duration detour = 6;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### setDetour(Duration.Builder builderForValue)

```
public ShipmentRoute.Visit.Builder setDetour(Duration.Builder builderForValue)
```

Extra detour time due to the shipments visited on the route before the visit and to the potential waiting time induced by time windows. If the visit is a delivery, the detour is computed from the corresponding pickup visit and is equal to: \` `` `start_time(delivery) - start_time(pickup)` ``

`` `-   (duration(pickup) + travel duration from the pickup location to the delivery location).` ``

`Otherwise, it is computed from the vehicle` start\_location `and is equal to:` `` `start_time - vehicle_start_time - travel duration from the vehicle's` start_location `to the visit.` `` \`

`.google.protobuf.Duration detour = 6;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public ShipmentRoute.Visit.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setIsPickup(boolean value)

```
public ShipmentRoute.Visit.Builder setIsPickup(boolean value)
```

If true the visit corresponds to a pickup of a `Shipment`. Otherwise, it corresponds to a delivery.

`bool is_pickup = 2;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The isPickup to set.

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public ShipmentRoute.Visit.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setShipmentIndex(int value)

```
public ShipmentRoute.Visit.Builder setShipmentIndex(int value)
```

Index of the `shipments` field in the source ShipmentModel.

`int32 shipment_index = 1;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The shipmentIndex to set.

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

This builder for chaining.

### setShipmentLabel(String value)

```
public ShipmentRoute.Visit.Builder setShipmentLabel(String value)
```

Copy of the corresponding `Shipment.label`, if specified in the `Shipment`.

`string shipment_label = 7;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The shipmentLabel to set.

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

This builder for chaining.

### setShipmentLabelBytes(ByteString value)

```
public ShipmentRoute.Visit.Builder setShipmentLabelBytes(ByteString value)
```

Copy of the corresponding `Shipment.label`, if specified in the `Shipment`.

`string shipment_label = 7;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for shipmentLabel to set.

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

This builder for chaining.

### setStartTime(Timestamp value)

```
public ShipmentRoute.Visit.Builder setStartTime(Timestamp value)
```

Time at which the visit starts. Note that the vehicle may arrive earlier than this at the visit location. Times are consistent with the `ShipmentModel`.

`.google.protobuf.Timestamp start_time = 4;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### setStartTime(Timestamp.Builder builderForValue)

```
public ShipmentRoute.Visit.Builder setStartTime(Timestamp.Builder builderForValue)
```

Time at which the visit starts. Note that the vehicle may arrive earlier than this at the visit location. Times are consistent with the `ShipmentModel`.

`.google.protobuf.Timestamp start_time = 4;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final ShipmentRoute.Visit.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setVisitLabel(String value)

```
public ShipmentRoute.Visit.Builder setVisitLabel(String value)
```

Copy of the corresponding VisitRequest.label, if specified in the `VisitRequest`.

`string visit_label = 8;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The visitLabel to set.

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

This builder for chaining.

### setVisitLabelBytes(ByteString value)

```
public ShipmentRoute.Visit.Builder setVisitLabelBytes(ByteString value)
```

Copy of the corresponding VisitRequest.label, if specified in the `VisitRequest`.

`string visit_label = 8;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for visitLabel to set.

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

This builder for chaining.

### setVisitRequestIndex(int value)

```
public ShipmentRoute.Visit.Builder setVisitRequestIndex(int value)
```

Index of `VisitRequest` in either the pickup or delivery field of the `Shipment` (see `is_pickup`).

`int32 visit_request_index = 3;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The visitRequestIndex to set.

**Returns**

**Type**

**Description**

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.56.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`

This builder for chaining.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
