-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class InjectedSolutionConstraint.ConstraintRelaxation.Builder (1.37.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.14 0.1.2

```
public static final class InjectedSolutionConstraint.ConstraintRelaxation.Builder extends GeneratedMessageV3.Builder<InjectedSolutionConstraint.ConstraintRelaxation.Builder> implements InjectedSolutionConstraint.ConstraintRelaxationOrBuilder
```

For a group of vehicles, specifies at what threshold(s) constraints on visits will be relaxed and to which level. Shipments listed in the `skipped_shipment` field are constrained to be skipped; i.e., they cannot be performed.

Protobuf type `google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> InjectedSolutionConstraint.ConstraintRelaxation.Builder

## Implements

[InjectedSolutionConstraint.ConstraintRelaxationOrBuilder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxationOrBuilder)

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

### addAllRelaxations(Iterable<? extends InjectedSolutionConstraint.ConstraintRelaxation.Relaxation> values)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder addAllRelaxations(Iterable<? extends InjectedSolutionConstraint.ConstraintRelaxation.Relaxation> values)
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation>`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

### addAllVehicleIndices(Iterable<? extends Integer> values)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder addAllVehicleIndices(Iterable<? extends Integer> values)
```

Specifies the vehicle indices to which the visit constraint `relaxations` apply. If empty, this is considered the default and the `relaxations` apply to all vehicles that are not specified in other `constraint_relaxations`. There can be at most one default, i.e., at most one constraint relaxation field is allowed empty `vehicle_indices`. A vehicle index can only be listed once, even within several `constraint_relaxations`.

A vehicle index is mapped the same as ShipmentRoute.vehicle\_index, if `interpret_injected_solutions_using_labels` is true (see `fields` comment).

`repeated int32 vehicle_indices = 2;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends java.lang.Integer>`  

The vehicleIndices to add.

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

This builder for chaining.

### addRelaxations(InjectedSolutionConstraint.ConstraintRelaxation.Relaxation value)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder addRelaxations(InjectedSolutionConstraint.ConstraintRelaxation.Relaxation value)
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Parameter**

**Name**

**Description**

`value`

`[InjectedSolutionConstraint.ConstraintRelaxation.Relaxation](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

### addRelaxations(InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder builderForValue)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder addRelaxations(InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder builderForValue)
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

### addRelaxations(int index, InjectedSolutionConstraint.ConstraintRelaxation.Relaxation value)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder addRelaxations(int index, InjectedSolutionConstraint.ConstraintRelaxation.Relaxation value)
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[InjectedSolutionConstraint.ConstraintRelaxation.Relaxation](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

### addRelaxations(int index, InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder builderForValue)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder addRelaxations(int index, InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder builderForValue)
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

### addRelaxationsBuilder()

```
public InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder addRelaxationsBuilder()
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder)`

### addRelaxationsBuilder(int index)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder addRelaxationsBuilder(int index)
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder)`

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### addVehicleIndices(int value)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder addVehicleIndices(int value)
```

Specifies the vehicle indices to which the visit constraint `relaxations` apply. If empty, this is considered the default and the `relaxations` apply to all vehicles that are not specified in other `constraint_relaxations`. There can be at most one default, i.e., at most one constraint relaxation field is allowed empty `vehicle_indices`. A vehicle index can only be listed once, even within several `constraint_relaxations`.

A vehicle index is mapped the same as ShipmentRoute.vehicle\_index, if `interpret_injected_solutions_using_labels` is true (see `fields` comment).

`repeated int32 vehicle_indices = 2;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The vehicleIndices to add.

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

This builder for chaining.

### build()

```
public InjectedSolutionConstraint.ConstraintRelaxation build()
```

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation)`

### buildPartial()

```
public InjectedSolutionConstraint.ConstraintRelaxation buildPartial()
```

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation)`

### clear()

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder clear()
```

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearField(Descriptors.FieldDescriptor field)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearRelaxations()

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder clearRelaxations()
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

### clearVehicleIndices()

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder clearVehicleIndices()
```

Specifies the vehicle indices to which the visit constraint `relaxations` apply. If empty, this is considered the default and the `relaxations` apply to all vehicles that are not specified in other `constraint_relaxations`. There can be at most one default, i.e., at most one constraint relaxation field is allowed empty `vehicle_indices`. A vehicle index can only be listed once, even within several `constraint_relaxations`.

A vehicle index is mapped the same as ShipmentRoute.vehicle\_index, if `interpret_injected_solutions_using_labels` is true (see `fields` comment).

`repeated int32 vehicle_indices = 2;`

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

This builder for chaining.

### clone()

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder clone()
```

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getDefaultInstanceForType()

```
public InjectedSolutionConstraint.ConstraintRelaxation getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation)`

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

### getRelaxations(int index)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Relaxation getRelaxations(int index)
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Relaxation](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation)`

### getRelaxationsBuilder(int index)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder getRelaxationsBuilder(int index)
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder)`

### getRelaxationsBuilderList()

```
public List<InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder> getRelaxationsBuilderList()
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder)>`

### getRelaxationsCount()

```
public int getRelaxationsCount()
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getRelaxationsList()

```
public List<InjectedSolutionConstraint.ConstraintRelaxation.Relaxation> getRelaxationsList()
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Relaxation](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation)>`

### getRelaxationsOrBuilder(int index)

```
public InjectedSolutionConstraint.ConstraintRelaxation.RelaxationOrBuilder getRelaxationsOrBuilder(int index)
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.RelaxationOrBuilder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.RelaxationOrBuilder)`

### getRelaxationsOrBuilderList()

```
public List<? extends InjectedSolutionConstraint.ConstraintRelaxation.RelaxationOrBuilder> getRelaxationsOrBuilderList()
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.RelaxationOrBuilder>`

### getVehicleIndices(int index)

```
public int getVehicleIndices(int index)
```

Specifies the vehicle indices to which the visit constraint `relaxations` apply. If empty, this is considered the default and the `relaxations` apply to all vehicles that are not specified in other `constraint_relaxations`. There can be at most one default, i.e., at most one constraint relaxation field is allowed empty `vehicle_indices`. A vehicle index can only be listed once, even within several `constraint_relaxations`.

A vehicle index is mapped the same as ShipmentRoute.vehicle\_index, if `interpret_injected_solutions_using_labels` is true (see `fields` comment).

`repeated int32 vehicle_indices = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The vehicleIndices at the given index.

### getVehicleIndicesCount()

```
public int getVehicleIndicesCount()
```

Specifies the vehicle indices to which the visit constraint `relaxations` apply. If empty, this is considered the default and the `relaxations` apply to all vehicles that are not specified in other `constraint_relaxations`. There can be at most one default, i.e., at most one constraint relaxation field is allowed empty `vehicle_indices`. A vehicle index can only be listed once, even within several `constraint_relaxations`.

A vehicle index is mapped the same as ShipmentRoute.vehicle\_index, if `interpret_injected_solutions_using_labels` is true (see `fields` comment).

`repeated int32 vehicle_indices = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of vehicleIndices.

### getVehicleIndicesList()

```
public List<Integer> getVehicleIndicesList()
```

Specifies the vehicle indices to which the visit constraint `relaxations` apply. If empty, this is considered the default and the `relaxations` apply to all vehicles that are not specified in other `constraint_relaxations`. There can be at most one default, i.e., at most one constraint relaxation field is allowed empty `vehicle_indices`. A vehicle index can only be listed once, even within several `constraint_relaxations`.

A vehicle index is mapped the same as ShipmentRoute.vehicle\_index, if `interpret_injected_solutions_using_labels` is true (see `fields` comment).

`repeated int32 vehicle_indices = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)>`

A list containing the vehicleIndices.

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

### mergeFrom(InjectedSolutionConstraint.ConstraintRelaxation other)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder mergeFrom(InjectedSolutionConstraint.ConstraintRelaxation other)
```

**Parameter**

**Name**

**Description**

`other`

`[InjectedSolutionConstraint.ConstraintRelaxation](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final InjectedSolutionConstraint.ConstraintRelaxation.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### removeRelaxations(int index)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder removeRelaxations(int index)
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setRelaxations(int index, InjectedSolutionConstraint.ConstraintRelaxation.Relaxation value)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder setRelaxations(int index, InjectedSolutionConstraint.ConstraintRelaxation.Relaxation value)
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[InjectedSolutionConstraint.ConstraintRelaxation.Relaxation](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

### setRelaxations(int index, InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder builderForValue)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder setRelaxations(int index, InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder builderForValue)
```

All the visit constraint relaxations that will apply to visits on routes with vehicles in `vehicle_indices`.

`repeated .google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation relaxations = 1;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Builder)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final InjectedSolutionConstraint.ConstraintRelaxation.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setVehicleIndices(int index, int value)

```
public InjectedSolutionConstraint.ConstraintRelaxation.Builder setVehicleIndices(int index, int value)
```

Specifies the vehicle indices to which the visit constraint `relaxations` apply. If empty, this is considered the default and the `relaxations` apply to all vehicles that are not specified in other `constraint_relaxations`. There can be at most one default, i.e., at most one constraint relaxation field is allowed empty `vehicle_indices`. A vehicle index can only be listed once, even within several `constraint_relaxations`.

A vehicle index is mapped the same as ShipmentRoute.vehicle\_index, if `interpret_injected_solutions_using_labels` is true (see `fields` comment).

`repeated int32 vehicle_indices = 2;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The vehicleIndices to set.

**Returns**

**Type**

**Description**

`[InjectedSolutionConstraint.ConstraintRelaxation.Builder](/java/docs/reference/google-cloud-optimization/1.37.0/com.google.cloud.optimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Builder)`

This builder for chaining.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
