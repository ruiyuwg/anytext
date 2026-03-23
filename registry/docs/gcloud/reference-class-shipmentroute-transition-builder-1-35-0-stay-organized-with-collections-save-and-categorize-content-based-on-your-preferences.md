-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ShipmentRoute.Transition.Builder (1.35.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.14 0.1.2

```
public static final class ShipmentRoute.Transition.Builder extends GeneratedMessageV3.Builder<ShipmentRoute.Transition.Builder> implements ShipmentRoute.TransitionOrBuilder
```

Transition between two events on the route. See the description of ShipmentRoute.

If the vehicle does not have a `start_location` and/or `end_location`, the corresponding travel metrics are 0.

Protobuf type `google.cloud.optimization.v1.ShipmentRoute.Transition`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> ShipmentRoute.Transition.Builder

## Implements

[ShipmentRoute.TransitionOrBuilder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.TransitionOrBuilder)

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

### addAllLoads(Iterable<? extends CapacityQuantity> values) (deprecated)

```
public ShipmentRoute.Transition.Builder addAllLoads(Iterable<? extends CapacityQuantity> values)
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.optimization.v1.CapacityQuantity>`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### addLoads(CapacityQuantity value) (deprecated)

```
public ShipmentRoute.Transition.Builder addLoads(CapacityQuantity value)
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Parameter**

**Name**

**Description**

`value`

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.CapacityQuantity)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### addLoads(CapacityQuantity.Builder builderForValue) (deprecated)

```
public ShipmentRoute.Transition.Builder addLoads(CapacityQuantity.Builder builderForValue)
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### addLoads(int index, CapacityQuantity value) (deprecated)

```
public ShipmentRoute.Transition.Builder addLoads(int index, CapacityQuantity value)
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.CapacityQuantity)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### addLoads(int index, CapacityQuantity.Builder builderForValue) (deprecated)

```
public ShipmentRoute.Transition.Builder addLoads(int index, CapacityQuantity.Builder builderForValue)
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### addLoadsBuilder() (deprecated)

```
public CapacityQuantity.Builder addLoadsBuilder()
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Returns**

**Type**

**Description**

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`

### addLoadsBuilder(int index) (deprecated)

```
public CapacityQuantity.Builder addLoadsBuilder(int index)
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public ShipmentRoute.Transition.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public ShipmentRoute.Transition build()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition)`

### buildPartial()

```
public ShipmentRoute.Transition buildPartial()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition)`

### clear()

```
public ShipmentRoute.Transition.Builder clear()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearBreakDuration()

```
public ShipmentRoute.Transition.Builder clearBreakDuration()
```

Sum of the duration of the breaks occurring during this transition, if any. Details about each break's start time and duration are stored in ShipmentRoute.breaks.

`.google.protobuf.Duration break_duration = 5;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### clearDelayDuration()

```
public ShipmentRoute.Transition.Builder clearDelayDuration()
```

Sum of the delay durations applied to this transition. If any, the delay starts exactly `delay_duration` seconds before the next event (visit or vehicle end). See TransitionAttributes.delay.

`.google.protobuf.Duration delay_duration = 4;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### clearField(Descriptors.FieldDescriptor field)

```
public ShipmentRoute.Transition.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearLoads() (deprecated)

```
public ShipmentRoute.Transition.Builder clearLoads()
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public ShipmentRoute.Transition.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearRoutePolyline()

```
public ShipmentRoute.Transition.Builder clearRoutePolyline()
```

The encoded polyline representation of the route followed during the transition. This field is only populated if \[populate\_transition\_polylines\] \[google.cloud.optimization.v1.OptimizeToursRequest.populate\_transition\_polylines\] is set to true.

`.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline route_polyline = 9;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### clearStartTime()

```
public ShipmentRoute.Transition.Builder clearStartTime()
```

Start time of this transition.

`.google.protobuf.Timestamp start_time = 8;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### clearTotalDuration()

```
public ShipmentRoute.Transition.Builder clearTotalDuration()
```

Total duration of the transition, provided for convenience. It is equal to:

-   next visit `start_time` (or `vehicle_end_time` if this is the last transition) - this transition's `start_time`;
-   if `ShipmentRoute.has_traffic_infeasibilities` is false, the following additionally holds: `total_duration = travel_duration + delay_duration`
-   break\_duration + wait\_duration.

`.google.protobuf.Duration total_duration = 7;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### clearTrafficInfoUnavailable()

```
public ShipmentRoute.Transition.Builder clearTrafficInfoUnavailable()
```

When traffic is requested via \[OptimizeToursRequest.consider\_road\_traffic\] \[google.cloud.optimization.v1.OptimizeToursRequest.consider\_road\_traffic\], and the traffic info couldn't be retrieved for a `Transition`, this boolean is set to true. This may be temporary (rare hiccup in the realtime traffic servers) or permanent (no data for this location).

`bool traffic_info_unavailable = 3;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

This builder for chaining.

### clearTravelDistanceMeters()

```
public ShipmentRoute.Transition.Builder clearTravelDistanceMeters()
```

Distance traveled during the transition.

`double travel_distance_meters = 2;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

This builder for chaining.

### clearTravelDuration()

```
public ShipmentRoute.Transition.Builder clearTravelDuration()
```

Travel duration during this transition.

`.google.protobuf.Duration travel_duration = 1;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### clearVehicleLoads()

```
public ShipmentRoute.Transition.Builder clearVehicleLoads()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### clearWaitDuration()

```
public ShipmentRoute.Transition.Builder clearWaitDuration()
```

Time spent waiting during this transition. Wait duration corresponds to idle time and does not include break time. Also note that this wait time may be split into several non-contiguous intervals.

`.google.protobuf.Duration wait_duration = 6;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### clone()

```
public ShipmentRoute.Transition.Builder clone()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### containsVehicleLoads(String key)

```
public boolean containsVehicleLoads(String key)
```

Vehicle loads during this transition, for each type that either appears in this vehicle's Vehicle.load\_limits, or that have non-zero Shipment.load\_demands on some shipment performed on this route.

The loads during the first transition are the starting loads of the vehicle route. Then, after each visit, the visit's `load_demands` are either added or subtracted to get the next transition's loads, depending on whether the visit was a pickup or a delivery.

`map<string, .google.cloud.optimization.v1.ShipmentRoute.VehicleLoad> vehicle_loads = 11;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getBreakDuration()

```
public Duration getBreakDuration()
```

Sum of the duration of the breaks occurring during this transition, if any. Details about each break's start time and duration are stored in ShipmentRoute.breaks.

`.google.protobuf.Duration break_duration = 5;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The breakDuration.

### getBreakDurationBuilder()

```
public Duration.Builder getBreakDurationBuilder()
```

Sum of the duration of the breaks occurring during this transition, if any. Details about each break's start time and duration are stored in ShipmentRoute.breaks.

`.google.protobuf.Duration break_duration = 5;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`

### getBreakDurationOrBuilder()

```
public DurationOrBuilder getBreakDurationOrBuilder()
```

Sum of the duration of the breaks occurring during this transition, if any. Details about each break's start time and duration are stored in ShipmentRoute.breaks.

`.google.protobuf.Duration break_duration = 5;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getDefaultInstanceForType()

```
public ShipmentRoute.Transition getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition)`

### getDelayDuration()

```
public Duration getDelayDuration()
```

Sum of the delay durations applied to this transition. If any, the delay starts exactly `delay_duration` seconds before the next event (visit or vehicle end). See TransitionAttributes.delay.

`.google.protobuf.Duration delay_duration = 4;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The delayDuration.

### getDelayDurationBuilder()

```
public Duration.Builder getDelayDurationBuilder()
```

Sum of the delay durations applied to this transition. If any, the delay starts exactly `delay_duration` seconds before the next event (visit or vehicle end). See TransitionAttributes.delay.

`.google.protobuf.Duration delay_duration = 4;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`

### getDelayDurationOrBuilder()

```
public DurationOrBuilder getDelayDurationOrBuilder()
```

Sum of the delay durations applied to this transition. If any, the delay starts exactly `delay_duration` seconds before the next event (visit or vehicle end). See TransitionAttributes.delay.

`.google.protobuf.Duration delay_duration = 4;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

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

### getLoads(int index) (deprecated)

```
public CapacityQuantity getLoads(int index)
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.CapacityQuantity)`

### getLoadsBuilder(int index) (deprecated)

```
public CapacityQuantity.Builder getLoadsBuilder(int index)
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`

### getLoadsBuilderList() (deprecated)

```
public List<CapacityQuantity.Builder> getLoadsBuilderList()
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)>`

### getLoadsCount() (deprecated)

```
public int getLoadsCount()
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLoadsList() (deprecated)

```
public List<CapacityQuantity> getLoadsList()
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.CapacityQuantity)>`

### getLoadsOrBuilder(int index) (deprecated)

```
public CapacityQuantityOrBuilder getLoadsOrBuilder(int index)
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CapacityQuantityOrBuilder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.CapacityQuantityOrBuilder)`

### getLoadsOrBuilderList() (deprecated)

```
public List<? extends CapacityQuantityOrBuilder> getLoadsOrBuilderList()
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.CapacityQuantityOrBuilder>`

### getMutableVehicleLoads() (deprecated)

```
public Map<String,ShipmentRoute.VehicleLoad> getMutableVehicleLoads()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[VehicleLoad](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.VehicleLoad)>`

### getRoutePolyline()

```
public ShipmentRoute.EncodedPolyline getRoutePolyline()
```

The encoded polyline representation of the route followed during the transition. This field is only populated if \[populate\_transition\_polylines\] \[google.cloud.optimization.v1.OptimizeToursRequest.populate\_transition\_polylines\] is set to true.

`.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline route_polyline = 9;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.EncodedPolyline](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline)`

The routePolyline.

### getRoutePolylineBuilder()

```
public ShipmentRoute.EncodedPolyline.Builder getRoutePolylineBuilder()
```

The encoded polyline representation of the route followed during the transition. This field is only populated if \[populate\_transition\_polylines\] \[google.cloud.optimization.v1.OptimizeToursRequest.populate\_transition\_polylines\] is set to true.

`.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline route_polyline = 9;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.EncodedPolyline.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline.Builder)`

### getRoutePolylineOrBuilder()

```
public ShipmentRoute.EncodedPolylineOrBuilder getRoutePolylineOrBuilder()
```

The encoded polyline representation of the route followed during the transition. This field is only populated if \[populate\_transition\_polylines\] \[google.cloud.optimization.v1.OptimizeToursRequest.populate\_transition\_polylines\] is set to true.

`.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline route_polyline = 9;`

**Returns**

**Type**

**Description**

`[ShipmentRoute.EncodedPolylineOrBuilder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.EncodedPolylineOrBuilder)`

### getStartTime()

```
public Timestamp getStartTime()
```

Start time of this transition.

`.google.protobuf.Timestamp start_time = 8;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The startTime.

### getStartTimeBuilder()

```
public Timestamp.Builder getStartTimeBuilder()
```

Start time of this transition.

`.google.protobuf.Timestamp start_time = 8;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getStartTimeOrBuilder()

```
public TimestampOrBuilder getStartTimeOrBuilder()
```

Start time of this transition.

`.google.protobuf.Timestamp start_time = 8;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getTotalDuration()

```
public Duration getTotalDuration()
```

Total duration of the transition, provided for convenience. It is equal to:

-   next visit `start_time` (or `vehicle_end_time` if this is the last transition) - this transition's `start_time`;
-   if `ShipmentRoute.has_traffic_infeasibilities` is false, the following additionally holds: `total_duration = travel_duration + delay_duration`
-   break\_duration + wait\_duration.

`.google.protobuf.Duration total_duration = 7;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The totalDuration.

### getTotalDurationBuilder()

```
public Duration.Builder getTotalDurationBuilder()
```

Total duration of the transition, provided for convenience. It is equal to:

-   next visit `start_time` (or `vehicle_end_time` if this is the last transition) - this transition's `start_time`;
-   if `ShipmentRoute.has_traffic_infeasibilities` is false, the following additionally holds: `total_duration = travel_duration + delay_duration`
-   break\_duration + wait\_duration.

`.google.protobuf.Duration total_duration = 7;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`

### getTotalDurationOrBuilder()

```
public DurationOrBuilder getTotalDurationOrBuilder()
```

Total duration of the transition, provided for convenience. It is equal to:

-   next visit `start_time` (or `vehicle_end_time` if this is the last transition) - this transition's `start_time`;
-   if `ShipmentRoute.has_traffic_infeasibilities` is false, the following additionally holds: `total_duration = travel_duration + delay_duration`
-   break\_duration + wait\_duration.

`.google.protobuf.Duration total_duration = 7;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getTrafficInfoUnavailable()

```
public boolean getTrafficInfoUnavailable()
```

When traffic is requested via \[OptimizeToursRequest.consider\_road\_traffic\] \[google.cloud.optimization.v1.OptimizeToursRequest.consider\_road\_traffic\], and the traffic info couldn't be retrieved for a `Transition`, this boolean is set to true. This may be temporary (rare hiccup in the realtime traffic servers) or permanent (no data for this location).

`bool traffic_info_unavailable = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The trafficInfoUnavailable.

### getTravelDistanceMeters()

```
public double getTravelDistanceMeters()
```

Distance traveled during the transition.

`double travel_distance_meters = 2;`

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The travelDistanceMeters.

### getTravelDuration()

```
public Duration getTravelDuration()
```

Travel duration during this transition.

`.google.protobuf.Duration travel_duration = 1;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The travelDuration.

### getTravelDurationBuilder()

```
public Duration.Builder getTravelDurationBuilder()
```

Travel duration during this transition.

`.google.protobuf.Duration travel_duration = 1;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`

### getTravelDurationOrBuilder()

```
public DurationOrBuilder getTravelDurationOrBuilder()
```

Travel duration during this transition.

`.google.protobuf.Duration travel_duration = 1;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getVehicleLoads() (deprecated)

```
public Map<String,ShipmentRoute.VehicleLoad> getVehicleLoads()
```

Use [#getVehicleLoadsMap()](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder#com_google_cloud_optimization_v1_ShipmentRoute_Transition_Builder_getVehicleLoadsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[VehicleLoad](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.VehicleLoad)>`

### getVehicleLoadsCount()

```
public int getVehicleLoadsCount()
```

Vehicle loads during this transition, for each type that either appears in this vehicle's Vehicle.load\_limits, or that have non-zero Shipment.load\_demands on some shipment performed on this route.

The loads during the first transition are the starting loads of the vehicle route. Then, after each visit, the visit's `load_demands` are either added or subtracted to get the next transition's loads, depending on whether the visit was a pickup or a delivery.

`map<string, .google.cloud.optimization.v1.ShipmentRoute.VehicleLoad> vehicle_loads = 11;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getVehicleLoadsMap()

```
public Map<String,ShipmentRoute.VehicleLoad> getVehicleLoadsMap()
```

Vehicle loads during this transition, for each type that either appears in this vehicle's Vehicle.load\_limits, or that have non-zero Shipment.load\_demands on some shipment performed on this route.

The loads during the first transition are the starting loads of the vehicle route. Then, after each visit, the visit's `load_demands` are either added or subtracted to get the next transition's loads, depending on whether the visit was a pickup or a delivery.

`map<string, .google.cloud.optimization.v1.ShipmentRoute.VehicleLoad> vehicle_loads = 11;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[VehicleLoad](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.VehicleLoad)>`

### getVehicleLoadsOrDefault(String key, ShipmentRoute.VehicleLoad defaultValue)

```
public ShipmentRoute.VehicleLoad getVehicleLoadsOrDefault(String key, ShipmentRoute.VehicleLoad defaultValue)
```

Vehicle loads during this transition, for each type that either appears in this vehicle's Vehicle.load\_limits, or that have non-zero Shipment.load\_demands on some shipment performed on this route.

The loads during the first transition are the starting loads of the vehicle route. Then, after each visit, the visit's `load_demands` are either added or subtracted to get the next transition's loads, depending on whether the visit was a pickup or a delivery.

`map<string, .google.cloud.optimization.v1.ShipmentRoute.VehicleLoad> vehicle_loads = 11;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[ShipmentRoute.VehicleLoad](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.VehicleLoad)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.VehicleLoad](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.VehicleLoad)`

### getVehicleLoadsOrThrow(String key)

```
public ShipmentRoute.VehicleLoad getVehicleLoadsOrThrow(String key)
```

Vehicle loads during this transition, for each type that either appears in this vehicle's Vehicle.load\_limits, or that have non-zero Shipment.load\_demands on some shipment performed on this route.

The loads during the first transition are the starting loads of the vehicle route. Then, after each visit, the visit's `load_demands` are either added or subtracted to get the next transition's loads, depending on whether the visit was a pickup or a delivery.

`map<string, .google.cloud.optimization.v1.ShipmentRoute.VehicleLoad> vehicle_loads = 11;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.VehicleLoad](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.VehicleLoad)`

### getWaitDuration()

```
public Duration getWaitDuration()
```

Time spent waiting during this transition. Wait duration corresponds to idle time and does not include break time. Also note that this wait time may be split into several non-contiguous intervals.

`.google.protobuf.Duration wait_duration = 6;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The waitDuration.

### getWaitDurationBuilder()

```
public Duration.Builder getWaitDurationBuilder()
```

Time spent waiting during this transition. Wait duration corresponds to idle time and does not include break time. Also note that this wait time may be split into several non-contiguous intervals.

`.google.protobuf.Duration wait_duration = 6;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`

### getWaitDurationOrBuilder()

```
public DurationOrBuilder getWaitDurationOrBuilder()
```

Time spent waiting during this transition. Wait duration corresponds to idle time and does not include break time. Also note that this wait time may be split into several non-contiguous intervals.

`.google.protobuf.Duration wait_duration = 6;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### hasBreakDuration()

```
public boolean hasBreakDuration()
```

Sum of the duration of the breaks occurring during this transition, if any. Details about each break's start time and duration are stored in ShipmentRoute.breaks.

`.google.protobuf.Duration break_duration = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the breakDuration field is set.

### hasDelayDuration()

```
public boolean hasDelayDuration()
```

Sum of the delay durations applied to this transition. If any, the delay starts exactly `delay_duration` seconds before the next event (visit or vehicle end). See TransitionAttributes.delay.

`.google.protobuf.Duration delay_duration = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the delayDuration field is set.

### hasRoutePolyline()

```
public boolean hasRoutePolyline()
```

The encoded polyline representation of the route followed during the transition. This field is only populated if \[populate\_transition\_polylines\] \[google.cloud.optimization.v1.OptimizeToursRequest.populate\_transition\_polylines\] is set to true.

`.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline route_polyline = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the routePolyline field is set.

### hasStartTime()

```
public boolean hasStartTime()
```

Start time of this transition.

`.google.protobuf.Timestamp start_time = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

### hasTotalDuration()

```
public boolean hasTotalDuration()
```

Total duration of the transition, provided for convenience. It is equal to:

-   next visit `start_time` (or `vehicle_end_time` if this is the last transition) - this transition's `start_time`;
-   if `ShipmentRoute.has_traffic_infeasibilities` is false, the following additionally holds: `total_duration = travel_duration + delay_duration`
-   break\_duration + wait\_duration.

`.google.protobuf.Duration total_duration = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the totalDuration field is set.

### hasTravelDuration()

```
public boolean hasTravelDuration()
```

Travel duration during this transition.

`.google.protobuf.Duration travel_duration = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the travelDuration field is set.

### hasWaitDuration()

```
public boolean hasWaitDuration()
```

Time spent waiting during this transition. Wait duration corresponds to idle time and does not include break time. Also note that this wait time may be split into several non-contiguous intervals.

`.google.protobuf.Duration wait_duration = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the waitDuration field is set.

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

### mergeBreakDuration(Duration value)

```
public ShipmentRoute.Transition.Builder mergeBreakDuration(Duration value)
```

Sum of the duration of the breaks occurring during this transition, if any. Details about each break's start time and duration are stored in ShipmentRoute.breaks.

`.google.protobuf.Duration break_duration = 5;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### mergeDelayDuration(Duration value)

```
public ShipmentRoute.Transition.Builder mergeDelayDuration(Duration value)
```

Sum of the delay durations applied to this transition. If any, the delay starts exactly `delay_duration` seconds before the next event (visit or vehicle end). See TransitionAttributes.delay.

`.google.protobuf.Duration delay_duration = 4;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### mergeFrom(ShipmentRoute.Transition other)

```
public ShipmentRoute.Transition.Builder mergeFrom(ShipmentRoute.Transition other)
```

**Parameter**

**Name**

**Description**

`other`

`[ShipmentRoute.Transition](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public ShipmentRoute.Transition.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public ShipmentRoute.Transition.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeRoutePolyline(ShipmentRoute.EncodedPolyline value)

```
public ShipmentRoute.Transition.Builder mergeRoutePolyline(ShipmentRoute.EncodedPolyline value)
```

The encoded polyline representation of the route followed during the transition. This field is only populated if \[populate\_transition\_polylines\] \[google.cloud.optimization.v1.OptimizeToursRequest.populate\_transition\_polylines\] is set to true.

`.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline route_polyline = 9;`

**Parameter**

**Name**

**Description**

`value`

`[ShipmentRoute.EncodedPolyline](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### mergeStartTime(Timestamp value)

```
public ShipmentRoute.Transition.Builder mergeStartTime(Timestamp value)
```

Start time of this transition.

`.google.protobuf.Timestamp start_time = 8;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### mergeTotalDuration(Duration value)

```
public ShipmentRoute.Transition.Builder mergeTotalDuration(Duration value)
```

Total duration of the transition, provided for convenience. It is equal to:

-   next visit `start_time` (or `vehicle_end_time` if this is the last transition) - this transition's `start_time`;
-   if `ShipmentRoute.has_traffic_infeasibilities` is false, the following additionally holds: `total_duration = travel_duration + delay_duration`
-   break\_duration + wait\_duration.

`.google.protobuf.Duration total_duration = 7;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### mergeTravelDuration(Duration value)

```
public ShipmentRoute.Transition.Builder mergeTravelDuration(Duration value)
```

Travel duration during this transition.

`.google.protobuf.Duration travel_duration = 1;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final ShipmentRoute.Transition.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### mergeWaitDuration(Duration value)

```
public ShipmentRoute.Transition.Builder mergeWaitDuration(Duration value)
```

Time spent waiting during this transition. Wait duration corresponds to idle time and does not include break time. Also note that this wait time may be split into several non-contiguous intervals.

`.google.protobuf.Duration wait_duration = 6;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### putAllVehicleLoads(Map<String,ShipmentRoute.VehicleLoad> values)

```
public ShipmentRoute.Transition.Builder putAllVehicleLoads(Map<String,ShipmentRoute.VehicleLoad> values)
```

Vehicle loads during this transition, for each type that either appears in this vehicle's Vehicle.load\_limits, or that have non-zero Shipment.load\_demands on some shipment performed on this route.

The loads during the first transition are the starting loads of the vehicle route. Then, after each visit, the visit's `load_demands` are either added or subtracted to get the next transition's loads, depending on whether the visit was a pickup or a delivery.

`map<string, .google.cloud.optimization.v1.ShipmentRoute.VehicleLoad> vehicle_loads = 11;`

**Parameter**

**Name**

**Description**

`values`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[VehicleLoad](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.VehicleLoad)>`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### putVehicleLoads(String key, ShipmentRoute.VehicleLoad value)

```
public ShipmentRoute.Transition.Builder putVehicleLoads(String key, ShipmentRoute.VehicleLoad value)
```

Vehicle loads during this transition, for each type that either appears in this vehicle's Vehicle.load\_limits, or that have non-zero Shipment.load\_demands on some shipment performed on this route.

The loads during the first transition are the starting loads of the vehicle route. Then, after each visit, the visit's `load_demands` are either added or subtracted to get the next transition's loads, depending on whether the visit was a pickup or a delivery.

`map<string, .google.cloud.optimization.v1.ShipmentRoute.VehicleLoad> vehicle_loads = 11;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`value`

`[ShipmentRoute.VehicleLoad](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.VehicleLoad)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### putVehicleLoadsBuilderIfAbsent(String key)

```
public ShipmentRoute.VehicleLoad.Builder putVehicleLoadsBuilderIfAbsent(String key)
```

Vehicle loads during this transition, for each type that either appears in this vehicle's Vehicle.load\_limits, or that have non-zero Shipment.load\_demands on some shipment performed on this route.

The loads during the first transition are the starting loads of the vehicle route. Then, after each visit, the visit's `load_demands` are either added or subtracted to get the next transition's loads, depending on whether the visit was a pickup or a delivery.

`map<string, .google.cloud.optimization.v1.ShipmentRoute.VehicleLoad> vehicle_loads = 11;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.VehicleLoad.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.VehicleLoad.Builder)`

### removeLoads(int index) (deprecated)

```
public ShipmentRoute.Transition.Builder removeLoads(int index)
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### removeVehicleLoads(String key)

```
public ShipmentRoute.Transition.Builder removeVehicleLoads(String key)
```

Vehicle loads during this transition, for each type that either appears in this vehicle's Vehicle.load\_limits, or that have non-zero Shipment.load\_demands on some shipment performed on this route.

The loads during the first transition are the starting loads of the vehicle route. Then, after each visit, the visit's `load_demands` are either added or subtracted to get the next transition's loads, depending on whether the visit was a pickup or a delivery.

`map<string, .google.cloud.optimization.v1.ShipmentRoute.VehicleLoad> vehicle_loads = 11;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### setBreakDuration(Duration value)

```
public ShipmentRoute.Transition.Builder setBreakDuration(Duration value)
```

Sum of the duration of the breaks occurring during this transition, if any. Details about each break's start time and duration are stored in ShipmentRoute.breaks.

`.google.protobuf.Duration break_duration = 5;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### setBreakDuration(Duration.Builder builderForValue)

```
public ShipmentRoute.Transition.Builder setBreakDuration(Duration.Builder builderForValue)
```

Sum of the duration of the breaks occurring during this transition, if any. Details about each break's start time and duration are stored in ShipmentRoute.breaks.

`.google.protobuf.Duration break_duration = 5;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### setDelayDuration(Duration value)

```
public ShipmentRoute.Transition.Builder setDelayDuration(Duration value)
```

Sum of the delay durations applied to this transition. If any, the delay starts exactly `delay_duration` seconds before the next event (visit or vehicle end). See TransitionAttributes.delay.

`.google.protobuf.Duration delay_duration = 4;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### setDelayDuration(Duration.Builder builderForValue)

```
public ShipmentRoute.Transition.Builder setDelayDuration(Duration.Builder builderForValue)
```

Sum of the delay durations applied to this transition. If any, the delay starts exactly `delay_duration` seconds before the next event (visit or vehicle end). See TransitionAttributes.delay.

`.google.protobuf.Duration delay_duration = 4;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public ShipmentRoute.Transition.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setLoads(int index, CapacityQuantity value) (deprecated)

```
public ShipmentRoute.Transition.Builder setLoads(int index, CapacityQuantity value)
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.CapacityQuantity)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### setLoads(int index, CapacityQuantity.Builder builderForValue) (deprecated)

```
public ShipmentRoute.Transition.Builder setLoads(int index, CapacityQuantity.Builder builderForValue)
```

Deprecated: Use Transition.vehicle\_loads instead.

`repeated .google.cloud.optimization.v1.CapacityQuantity loads = 10 [deprecated = true];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public ShipmentRoute.Transition.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setRoutePolyline(ShipmentRoute.EncodedPolyline value)

```
public ShipmentRoute.Transition.Builder setRoutePolyline(ShipmentRoute.EncodedPolyline value)
```

The encoded polyline representation of the route followed during the transition. This field is only populated if \[populate\_transition\_polylines\] \[google.cloud.optimization.v1.OptimizeToursRequest.populate\_transition\_polylines\] is set to true.

`.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline route_polyline = 9;`

**Parameter**

**Name**

**Description**

`value`

`[ShipmentRoute.EncodedPolyline](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### setRoutePolyline(ShipmentRoute.EncodedPolyline.Builder builderForValue)

```
public ShipmentRoute.Transition.Builder setRoutePolyline(ShipmentRoute.EncodedPolyline.Builder builderForValue)
```

The encoded polyline representation of the route followed during the transition. This field is only populated if \[populate\_transition\_polylines\] \[google.cloud.optimization.v1.OptimizeToursRequest.populate\_transition\_polylines\] is set to true.

`.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline route_polyline = 9;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[ShipmentRoute.EncodedPolyline.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline.Builder)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### setStartTime(Timestamp value)

```
public ShipmentRoute.Transition.Builder setStartTime(Timestamp value)
```

Start time of this transition.

`.google.protobuf.Timestamp start_time = 8;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### setStartTime(Timestamp.Builder builderForValue)

```
public ShipmentRoute.Transition.Builder setStartTime(Timestamp.Builder builderForValue)
```

Start time of this transition.

`.google.protobuf.Timestamp start_time = 8;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### setTotalDuration(Duration value)

```
public ShipmentRoute.Transition.Builder setTotalDuration(Duration value)
```

Total duration of the transition, provided for convenience. It is equal to:

-   next visit `start_time` (or `vehicle_end_time` if this is the last transition) - this transition's `start_time`;
-   if `ShipmentRoute.has_traffic_infeasibilities` is false, the following additionally holds: `total_duration = travel_duration + delay_duration`
-   break\_duration + wait\_duration.

`.google.protobuf.Duration total_duration = 7;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### setTotalDuration(Duration.Builder builderForValue)

```
public ShipmentRoute.Transition.Builder setTotalDuration(Duration.Builder builderForValue)
```

Total duration of the transition, provided for convenience. It is equal to:

-   next visit `start_time` (or `vehicle_end_time` if this is the last transition) - this transition's `start_time`;
-   if `ShipmentRoute.has_traffic_infeasibilities` is false, the following additionally holds: `total_duration = travel_duration + delay_duration`
-   break\_duration + wait\_duration.

`.google.protobuf.Duration total_duration = 7;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### setTrafficInfoUnavailable(boolean value)

```
public ShipmentRoute.Transition.Builder setTrafficInfoUnavailable(boolean value)
```

When traffic is requested via \[OptimizeToursRequest.consider\_road\_traffic\] \[google.cloud.optimization.v1.OptimizeToursRequest.consider\_road\_traffic\], and the traffic info couldn't be retrieved for a `Transition`, this boolean is set to true. This may be temporary (rare hiccup in the realtime traffic servers) or permanent (no data for this location).

`bool traffic_info_unavailable = 3;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The trafficInfoUnavailable to set.

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

This builder for chaining.

### setTravelDistanceMeters(double value)

```
public ShipmentRoute.Transition.Builder setTravelDistanceMeters(double value)
```

Distance traveled during the transition.

`double travel_distance_meters = 2;`

**Parameter**

**Name**

**Description**

`value`

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The travelDistanceMeters to set.

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

This builder for chaining.

### setTravelDuration(Duration value)

```
public ShipmentRoute.Transition.Builder setTravelDuration(Duration value)
```

Travel duration during this transition.

`.google.protobuf.Duration travel_duration = 1;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### setTravelDuration(Duration.Builder builderForValue)

```
public ShipmentRoute.Transition.Builder setTravelDuration(Duration.Builder builderForValue)
```

Travel duration during this transition.

`.google.protobuf.Duration travel_duration = 1;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final ShipmentRoute.Transition.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setWaitDuration(Duration value)

```
public ShipmentRoute.Transition.Builder setWaitDuration(Duration value)
```

Time spent waiting during this transition. Wait duration corresponds to idle time and does not include break time. Also note that this wait time may be split into several non-contiguous intervals.

`.google.protobuf.Duration wait_duration = 6;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

### setWaitDuration(Duration.Builder builderForValue)

```
public ShipmentRoute.Transition.Builder setWaitDuration(Duration.Builder builderForValue)
```

Time spent waiting during this transition. Wait duration corresponds to idle time and does not include break time. Also note that this wait time may be split into several non-contiguous intervals.

`.google.protobuf.Duration wait_duration = 6;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`  

**Returns**

**Type**

**Description**

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.35.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
