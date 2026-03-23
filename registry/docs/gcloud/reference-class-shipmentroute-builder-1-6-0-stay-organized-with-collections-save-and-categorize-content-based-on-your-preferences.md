-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ShipmentRoute.Builder (1.6.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.14 0.1.2

```
public static final class ShipmentRoute.Builder extends GeneratedMessageV3.Builder<ShipmentRoute.Builder> implements ShipmentRouteOrBuilder
```

A vehicle's route can be decomposed, along the time axis, like this (we assume there are n visits): \` `` `| | | | | T[2], | | | | Transition | Visit #0 | | | V[2], | | | | #0 | aka | T[1] | V[1] | ... | V[n-1] | T[n] | | aka T[0] | V[0] | | | V[n-2],| | | | | | | | T[n-1] | | | ^ ^ ^ ^ ^ ^ ^ ^ vehicle V[0].start V[0].end V[1]. V[1]. V[n]. V[n]. vehicle start (arrival) (departure) start end start end end` `` `Note that we make a difference between:`

`-   "punctual events", such as the vehicle start and end and each visit's start and end (aka arrival and departure). They happen at a given second. -   "time intervals", such as the visits themselves, and the transition between visits. Though time intervals can sometimes have zero duration, i.e. start and end at the same second, they often have a positive duration. Invariants: -   If there are n visits, there are n+1 transitions. -   A visit is always surrounded by a transition before it (same index) and a transition after it (index + 1). -   The vehicle start is always followed by transition #0. -   The vehicle end is always preceded by transition #n. Zooming in, here is what happens during a`

Transition `and a` Visit`:` `` `---+-------------------------------------+-----------------------------+--> | TRANSITION[i] | VISIT[i] | | | | | * TRAVEL: the vehicle moves from | PERFORM the visit: | | VISIT[i-1].departure_location to | | | VISIT[i].arrival_location, which | * Spend some time: | | takes a given travel duration | the "visit duration". | | and distance | | | | * Load or unload | | * BREAKS: the driver may have | some quantities from the | | breaks (e.g. lunch break). | vehicle: the "demand". | | | | | * WAIT: the driver/vehicle does | | | nothing. This can happen for | | | many reasons, for example when | | | the vehicle reaches the next | | | event's destination before the | | | start of its time window | | | | | | * DELAY: _right before_ the next | | | arrival. E.g. the vehicle and/or | | | driver spends time unloading. | | | | | ---+-------------------------------------+-----------------------------+--> ^ ^ ^ V[i-1].end V[i].start V[i].end` `` `Lastly, here is how the TRAVEL, BREAKS, DELAY and WAIT can be arranged during a transition.-   They don't overlap. -   The DELAY is unique and _must_ be a contiguous period of time right before the next visit (or vehicle end). Thus, it suffice to know the delay duration to know its start and end time. -   The BREAKS are contiguous, non-overlapping periods of time. The response specifies the start time and duration of each break. -   TRAVEL and WAIT are "preemptable": they can be interrupted several times during this transition. Clients can assume that travel happens "as soon as possible" and that "wait" fills the remaining time. A (complex) example:``` `TRANSITION[i] --++-----+-----------------------------------------------------------++--> || | | | | | | || || T | B | T | | B | | D || || r | r | r | W | r | W | e || || a | e | a | a | e | a | l || || v | a | v | i | a | i | a || || e | k | e | t | k | t | y || || l | | l | | | | || || | | | | | | || --++-----------------------------------------------------------------++-->` `` \`

Protobuf type `google.cloud.optimization.v1.ShipmentRoute`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> ShipmentRoute.Builder

## Implements

[ShipmentRouteOrBuilder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRouteOrBuilder)

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

### addAllBreaks(Iterable<? extends ShipmentRoute.Break> values)

```
public ShipmentRoute.Builder addAllBreaks(Iterable<? extends ShipmentRoute.Break> values)
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.optimization.v1.ShipmentRoute.Break>`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addAllEndLoads(Iterable<? extends CapacityQuantity> values)

```
public ShipmentRoute.Builder addAllEndLoads(Iterable<? extends CapacityQuantity> values)
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.optimization.v1.CapacityQuantity>`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addAllTransitions(Iterable<? extends ShipmentRoute.Transition> values)

```
public ShipmentRoute.Builder addAllTransitions(Iterable<? extends ShipmentRoute.Transition> values)
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.optimization.v1.ShipmentRoute.Transition>`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addAllTravelSteps(Iterable<? extends ShipmentRoute.TravelStep> values)

```
public ShipmentRoute.Builder addAllTravelSteps(Iterable<? extends ShipmentRoute.TravelStep> values)
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.optimization.v1.ShipmentRoute.TravelStep>`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addAllVisits(Iterable<? extends ShipmentRoute.Visit> values)

```
public ShipmentRoute.Builder addAllVisits(Iterable<? extends ShipmentRoute.Visit> values)
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.optimization.v1.ShipmentRoute.Visit>`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addBreaks(ShipmentRoute.Break value)

```
public ShipmentRoute.Builder addBreaks(ShipmentRoute.Break value)
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Parameter**

**Name**

**Description**

value

`[ShipmentRoute.Break](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Break)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addBreaks(ShipmentRoute.Break.Builder builderForValue)

```
public ShipmentRoute.Builder addBreaks(ShipmentRoute.Break.Builder builderForValue)
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Parameter**

**Name**

**Description**

builderForValue

`[ShipmentRoute.Break.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Break.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addBreaks(int index, ShipmentRoute.Break value)

```
public ShipmentRoute.Builder addBreaks(int index, ShipmentRoute.Break value)
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[ShipmentRoute.Break](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Break)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addBreaks(int index, ShipmentRoute.Break.Builder builderForValue)

```
public ShipmentRoute.Builder addBreaks(int index, ShipmentRoute.Break.Builder builderForValue)
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

builderForValue

`[ShipmentRoute.Break.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Break.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addBreaksBuilder()

```
public ShipmentRoute.Break.Builder addBreaksBuilder()
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Returns**

**Type**

**Description**

[ShipmentRoute.Break.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Break.Builder)

### addBreaksBuilder(int index)

```
public ShipmentRoute.Break.Builder addBreaksBuilder(int index)
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Break.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Break.Builder)

### addEndLoads(CapacityQuantity value)

```
public ShipmentRoute.Builder addEndLoads(CapacityQuantity value)
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Parameter**

**Name**

**Description**

value

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.CapacityQuantity)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addEndLoads(CapacityQuantity.Builder builderForValue)

```
public ShipmentRoute.Builder addEndLoads(CapacityQuantity.Builder builderForValue)
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Parameter**

**Name**

**Description**

builderForValue

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addEndLoads(int index, CapacityQuantity value)

```
public ShipmentRoute.Builder addEndLoads(int index, CapacityQuantity value)
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.CapacityQuantity)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addEndLoads(int index, CapacityQuantity.Builder builderForValue)

```
public ShipmentRoute.Builder addEndLoads(int index, CapacityQuantity.Builder builderForValue)
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

builderForValue

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addEndLoadsBuilder()

```
public CapacityQuantity.Builder addEndLoadsBuilder()
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Returns**

**Type**

**Description**

[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)

### addEndLoadsBuilder(int index)

```
public CapacityQuantity.Builder addEndLoadsBuilder(int index)
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public ShipmentRoute.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### addTransitions(ShipmentRoute.Transition value)

```
public ShipmentRoute.Builder addTransitions(ShipmentRoute.Transition value)
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Parameter**

**Name**

**Description**

value

`[ShipmentRoute.Transition](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addTransitions(ShipmentRoute.Transition.Builder builderForValue)

```
public ShipmentRoute.Builder addTransitions(ShipmentRoute.Transition.Builder builderForValue)
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Parameter**

**Name**

**Description**

builderForValue

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addTransitions(int index, ShipmentRoute.Transition value)

```
public ShipmentRoute.Builder addTransitions(int index, ShipmentRoute.Transition value)
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[ShipmentRoute.Transition](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addTransitions(int index, ShipmentRoute.Transition.Builder builderForValue)

```
public ShipmentRoute.Builder addTransitions(int index, ShipmentRoute.Transition.Builder builderForValue)
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

builderForValue

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addTransitionsBuilder()

```
public ShipmentRoute.Transition.Builder addTransitionsBuilder()
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Returns**

**Type**

**Description**

[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)

### addTransitionsBuilder(int index)

```
public ShipmentRoute.Transition.Builder addTransitionsBuilder(int index)
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)

### addTravelSteps(ShipmentRoute.TravelStep value)

```
public ShipmentRoute.Builder addTravelSteps(ShipmentRoute.TravelStep value)
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Parameter**

**Name**

**Description**

value

`[ShipmentRoute.TravelStep](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.TravelStep)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addTravelSteps(ShipmentRoute.TravelStep.Builder builderForValue)

```
public ShipmentRoute.Builder addTravelSteps(ShipmentRoute.TravelStep.Builder builderForValue)
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Parameter**

**Name**

**Description**

builderForValue

`[ShipmentRoute.TravelStep.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.TravelStep.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addTravelSteps(int index, ShipmentRoute.TravelStep value)

```
public ShipmentRoute.Builder addTravelSteps(int index, ShipmentRoute.TravelStep value)
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[ShipmentRoute.TravelStep](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.TravelStep)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addTravelSteps(int index, ShipmentRoute.TravelStep.Builder builderForValue)

```
public ShipmentRoute.Builder addTravelSteps(int index, ShipmentRoute.TravelStep.Builder builderForValue)
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

builderForValue

`[ShipmentRoute.TravelStep.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.TravelStep.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addTravelStepsBuilder()

```
public ShipmentRoute.TravelStep.Builder addTravelStepsBuilder()
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Returns**

**Type**

**Description**

[ShipmentRoute.TravelStep.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.TravelStep.Builder)

### addTravelStepsBuilder(int index)

```
public ShipmentRoute.TravelStep.Builder addTravelStepsBuilder(int index)
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.TravelStep.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.TravelStep.Builder)

### addVisits(ShipmentRoute.Visit value)

```
public ShipmentRoute.Builder addVisits(ShipmentRoute.Visit value)
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Parameter**

**Name**

**Description**

value

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addVisits(ShipmentRoute.Visit.Builder builderForValue)

```
public ShipmentRoute.Builder addVisits(ShipmentRoute.Visit.Builder builderForValue)
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Parameter**

**Name**

**Description**

builderForValue

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addVisits(int index, ShipmentRoute.Visit value)

```
public ShipmentRoute.Builder addVisits(int index, ShipmentRoute.Visit value)
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addVisits(int index, ShipmentRoute.Visit.Builder builderForValue)

```
public ShipmentRoute.Builder addVisits(int index, ShipmentRoute.Visit.Builder builderForValue)
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

builderForValue

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### addVisitsBuilder()

```
public ShipmentRoute.Visit.Builder addVisitsBuilder()
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Returns**

**Type**

**Description**

[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)

### addVisitsBuilder(int index)

```
public ShipmentRoute.Visit.Builder addVisitsBuilder(int index)
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)

### build()

```
public ShipmentRoute build()
```

**Returns**

**Type**

**Description**

[ShipmentRoute](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute)

### buildPartial()

```
public ShipmentRoute buildPartial()
```

**Returns**

**Type**

**Description**

[ShipmentRoute](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute)

### clear()

```
public ShipmentRoute.Builder clear()
```

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearBreaks()

```
public ShipmentRoute.Builder clearBreaks()
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### clearDelayBeforeVehicleEnd()

```
public ShipmentRoute.Builder clearDelayBeforeVehicleEnd()
```

Deprecated: Use \[ShipmentRoute.Transition.delay\_duration\]\[\] instead. Delay occurring before the vehicle end. See TransitionAttributes.delay.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_vehicle_end = 16 [deprecated = true];`

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### clearEndLoads()

```
public ShipmentRoute.Builder clearEndLoads()
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### clearField(Descriptors.FieldDescriptor field)

```
public ShipmentRoute.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

field

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearHasTrafficInfeasibilities()

```
public ShipmentRoute.Builder clearHasTrafficInfeasibilities()
```

When OptimizeToursRequest.consider\_road\_traffic, is set to true, this field indicates that inconsistencies in route timings are predicted using traffic-based travel duration estimates. There may be insufficient time to complete traffic-adjusted travel, delays, and breaks between visits, before the first visit, or after the last visit, while still satisfying the visit and vehicle time windows. For example, `<code><code> start_time(previous_visit) + duration(previous_visit) + travel_duration(previous_visit, next_visit) &gt; start_time(next_visit) </code></code><code> Arrival at next_visit will likely happen later than its current time window due the increased estimate of travel time </code>travel_duration(previous_visit, next_visit)` due to traffic. Also, a break may be forced to overlap with a visit due to an increase in travel time estimates and visit or break time window restrictions.

`bool has_traffic_infeasibilities = 9;`

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

This builder for chaining.

### clearMetrics()

```
public ShipmentRoute.Builder clearMetrics()
```

Duration, distance and load metrics for this route. The fields of AggregatedMetrics are summed over all ShipmentRoute.transitions or ShipmentRoute.visits, depending on the context.

`.google.cloud.optimization.v1.AggregatedMetrics metrics = 12;`

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public ShipmentRoute.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

oneof

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearRouteCosts()

```
public ShipmentRoute.Builder clearRouteCosts()
```

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### clearRoutePolyline()

```
public ShipmentRoute.Builder clearRoutePolyline()
```

The encoded polyline representation of the route. This field is only populated if OptimizeToursRequest.populate\_polylines is set to true.

`.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline route_polyline = 10;`

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### clearRouteTotalCost()

```
public ShipmentRoute.Builder clearRouteTotalCost()
```

Total cost of the route. The sum of all costs in the cost map.

`double route_total_cost = 18;`

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

This builder for chaining.

### clearTransitions()

```
public ShipmentRoute.Builder clearTransitions()
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### clearTravelSteps()

```
public ShipmentRoute.Builder clearTravelSteps()
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### clearVehicleDetour()

```
public ShipmentRoute.Builder clearVehicleDetour()
```

Deprecated: No longer used. This field will only be populated at the ShipmentRoute.Visit level. Extra detour time due to the shipments visited on the route. It is equal to `vehicle_end_time` - `vehicle_start_time` - travel duration from the vehicle's start\_location to its `end_location`.

`.google.protobuf.Duration vehicle_detour = 15 [deprecated = true];`

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### clearVehicleEndTime()

```
public ShipmentRoute.Builder clearVehicleEndTime()
```

Time at which the vehicle finishes its route.

`.google.protobuf.Timestamp vehicle_end_time = 6;`

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### clearVehicleIndex()

```
public ShipmentRoute.Builder clearVehicleIndex()
```

Vehicle performing the route, identified by its index in the source `ShipmentModel`.

`int32 vehicle_index = 1;`

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

This builder for chaining.

### clearVehicleLabel()

```
public ShipmentRoute.Builder clearVehicleLabel()
```

Label of the vehicle performing this route, equal to `ShipmentModel.vehicles(vehicle_index).label`, if specified.

`string vehicle_label = 2;`

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

This builder for chaining.

### clearVehicleStartTime()

```
public ShipmentRoute.Builder clearVehicleStartTime()
```

Time at which the vehicle starts its route.

`.google.protobuf.Timestamp vehicle_start_time = 5;`

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### clearVisits()

```
public ShipmentRoute.Builder clearVisits()
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### clone()

```
public ShipmentRoute.Builder clone()
```

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### containsRouteCosts(String key)

```
public boolean containsRouteCosts(String key)
```

Cost of the route, broken down by cost-related request fields. The keys are proto paths, relative to the input OptimizeToursRequest, e.g. "model.shipments.pickups.cost", and the values are the total cost generated by the corresponding cost field, aggregated over the whole route. In other words, costs\["model.shipments.pickups.cost"\] is the sum of all pickup costs over the route. All costs defined in the model are reported in detail here with the exception of costs related to TransitionAttributes that are only reported in an aggregated way as of 2022/01.

`map<string, double> route_costs = 17;`

**Parameter**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getBreaks(int index)

```
public ShipmentRoute.Break getBreaks(int index)
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Break](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Break)

### getBreaksBuilder(int index)

```
public ShipmentRoute.Break.Builder getBreaksBuilder(int index)
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Break.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Break.Builder)

### getBreaksBuilderList()

```
public List<ShipmentRoute.Break.Builder> getBreaksBuilderList()
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Break.Builder)\>

### getBreaksCount()

```
public int getBreaksCount()
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getBreaksList()

```
public List<ShipmentRoute.Break> getBreaksList()
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Break](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Break)\>

### getBreaksOrBuilder(int index)

```
public ShipmentRoute.BreakOrBuilder getBreaksOrBuilder(int index)
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.BreakOrBuilder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.BreakOrBuilder)

### getBreaksOrBuilderList()

```
public List<? extends ShipmentRoute.BreakOrBuilder> getBreaksOrBuilderList()
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.ShipmentRoute.BreakOrBuilder\>

### getDefaultInstanceForType()

```
public ShipmentRoute getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

[ShipmentRoute](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute)

### getDelayBeforeVehicleEnd() (deprecated)

```
public ShipmentRoute.Delay getDelayBeforeVehicleEnd()
```

**Deprecated.** _google.cloud.optimization.v1.ShipmentRoute.delay\_before\_vehicle\_end is deprecated. See google/cloud/optimization/v1/fleet\_routing.proto;l=2140_

Deprecated: Use \[ShipmentRoute.Transition.delay\_duration\]\[\] instead. Delay occurring before the vehicle end. See TransitionAttributes.delay.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_vehicle_end = 16 [deprecated = true];`

**Returns**

**Type**

**Description**

[ShipmentRoute.Delay](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Delay)

The delayBeforeVehicleEnd.

### getDelayBeforeVehicleEndBuilder()

```
public ShipmentRoute.Delay.Builder getDelayBeforeVehicleEndBuilder()
```

Deprecated: Use \[ShipmentRoute.Transition.delay\_duration\]\[\] instead. Delay occurring before the vehicle end. See TransitionAttributes.delay.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_vehicle_end = 16 [deprecated = true];`

**Returns**

**Type**

**Description**

[ShipmentRoute.Delay.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Delay.Builder)

### getDelayBeforeVehicleEndOrBuilder()

```
public ShipmentRoute.DelayOrBuilder getDelayBeforeVehicleEndOrBuilder()
```

Deprecated: Use \[ShipmentRoute.Transition.delay\_duration\]\[\] instead. Delay occurring before the vehicle end. See TransitionAttributes.delay.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_vehicle_end = 16 [deprecated = true];`

**Returns**

**Type**

**Description**

[ShipmentRoute.DelayOrBuilder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.DelayOrBuilder)

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

### getEndLoads(int index)

```
public CapacityQuantity getEndLoads(int index)
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.CapacityQuantity)

### getEndLoadsBuilder(int index)

```
public CapacityQuantity.Builder getEndLoadsBuilder(int index)
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)

### getEndLoadsBuilderList()

```
public List<CapacityQuantity.Builder> getEndLoadsBuilderList()
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)\>

### getEndLoadsCount()

```
public int getEndLoadsCount()
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getEndLoadsList()

```
public List<CapacityQuantity> getEndLoadsList()
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.CapacityQuantity)\>

### getEndLoadsOrBuilder(int index)

```
public CapacityQuantityOrBuilder getEndLoadsOrBuilder(int index)
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[CapacityQuantityOrBuilder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.CapacityQuantityOrBuilder)

### getEndLoadsOrBuilderList()

```
public List<? extends CapacityQuantityOrBuilder> getEndLoadsOrBuilderList()
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.CapacityQuantityOrBuilder\>

### getHasTrafficInfeasibilities()

```
public boolean getHasTrafficInfeasibilities()
```

When OptimizeToursRequest.consider\_road\_traffic, is set to true, this field indicates that inconsistencies in route timings are predicted using traffic-based travel duration estimates. There may be insufficient time to complete traffic-adjusted travel, delays, and breaks between visits, before the first visit, or after the last visit, while still satisfying the visit and vehicle time windows. For example, `<code><code> start_time(previous_visit) + duration(previous_visit) + travel_duration(previous_visit, next_visit) &gt; start_time(next_visit) </code></code><code> Arrival at next_visit will likely happen later than its current time window due the increased estimate of travel time </code>travel_duration(previous_visit, next_visit)` due to traffic. Also, a break may be forced to overlap with a visit due to an increase in travel time estimates and visit or break time window restrictions.

`bool has_traffic_infeasibilities = 9;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The hasTrafficInfeasibilities.

### getMetrics()

```
public AggregatedMetrics getMetrics()
```

Duration, distance and load metrics for this route. The fields of AggregatedMetrics are summed over all ShipmentRoute.transitions or ShipmentRoute.visits, depending on the context.

`.google.cloud.optimization.v1.AggregatedMetrics metrics = 12;`

**Returns**

**Type**

**Description**

[AggregatedMetrics](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.AggregatedMetrics)

The metrics.

### getMetricsBuilder()

```
public AggregatedMetrics.Builder getMetricsBuilder()
```

Duration, distance and load metrics for this route. The fields of AggregatedMetrics are summed over all ShipmentRoute.transitions or ShipmentRoute.visits, depending on the context.

`.google.cloud.optimization.v1.AggregatedMetrics metrics = 12;`

**Returns**

**Type**

**Description**

[AggregatedMetrics.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.AggregatedMetrics.Builder)

### getMetricsOrBuilder()

```
public AggregatedMetricsOrBuilder getMetricsOrBuilder()
```

Duration, distance and load metrics for this route. The fields of AggregatedMetrics are summed over all ShipmentRoute.transitions or ShipmentRoute.visits, depending on the context.

`.google.cloud.optimization.v1.AggregatedMetrics metrics = 12;`

**Returns**

**Type**

**Description**

[AggregatedMetricsOrBuilder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.AggregatedMetricsOrBuilder)

### getMutableRouteCosts()

```
public Map<String,Double> getMutableRouteCosts()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Double](https://docs.oracle.com/javase/8/docs/api/java/lang/Double.html)\>

### getRouteCosts()

```
public Map<String,Double> getRouteCosts()
```

Use [#getRouteCostsMap()](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder#com_google_cloud_optimization_v1_ShipmentRoute_Builder_getRouteCostsMap__) instead.

**Returns**

**Type**

**Description**

[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Double](https://docs.oracle.com/javase/8/docs/api/java/lang/Double.html)\>

### getRouteCostsCount()

```
public int getRouteCostsCount()
```

Cost of the route, broken down by cost-related request fields. The keys are proto paths, relative to the input OptimizeToursRequest, e.g. "model.shipments.pickups.cost", and the values are the total cost generated by the corresponding cost field, aggregated over the whole route. In other words, costs\["model.shipments.pickups.cost"\] is the sum of all pickup costs over the route. All costs defined in the model are reported in detail here with the exception of costs related to TransitionAttributes that are only reported in an aggregated way as of 2022/01.

`map<string, double> route_costs = 17;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getRouteCostsMap()

```
public Map<String,Double> getRouteCostsMap()
```

Cost of the route, broken down by cost-related request fields. The keys are proto paths, relative to the input OptimizeToursRequest, e.g. "model.shipments.pickups.cost", and the values are the total cost generated by the corresponding cost field, aggregated over the whole route. In other words, costs\["model.shipments.pickups.cost"\] is the sum of all pickup costs over the route. All costs defined in the model are reported in detail here with the exception of costs related to TransitionAttributes that are only reported in an aggregated way as of 2022/01.

`map<string, double> route_costs = 17;`

**Returns**

**Type**

**Description**

[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Double](https://docs.oracle.com/javase/8/docs/api/java/lang/Double.html)\>

### getRouteCostsOrDefault(String key, double defaultValue)

```
public double getRouteCostsOrDefault(String key, double defaultValue)
```

Cost of the route, broken down by cost-related request fields. The keys are proto paths, relative to the input OptimizeToursRequest, e.g. "model.shipments.pickups.cost", and the values are the total cost generated by the corresponding cost field, aggregated over the whole route. In other words, costs\["model.shipments.pickups.cost"\] is the sum of all pickup costs over the route. All costs defined in the model are reported in detail here with the exception of costs related to TransitionAttributes that are only reported in an aggregated way as of 2022/01.

`map<string, double> route_costs = 17;`

**Parameters**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

defaultValue

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getRouteCostsOrThrow(String key)

```
public double getRouteCostsOrThrow(String key)
```

Cost of the route, broken down by cost-related request fields. The keys are proto paths, relative to the input OptimizeToursRequest, e.g. "model.shipments.pickups.cost", and the values are the total cost generated by the corresponding cost field, aggregated over the whole route. In other words, costs\["model.shipments.pickups.cost"\] is the sum of all pickup costs over the route. All costs defined in the model are reported in detail here with the exception of costs related to TransitionAttributes that are only reported in an aggregated way as of 2022/01.

`map<string, double> route_costs = 17;`

**Parameter**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getRoutePolyline()

```
public ShipmentRoute.EncodedPolyline getRoutePolyline()
```

The encoded polyline representation of the route. This field is only populated if OptimizeToursRequest.populate\_polylines is set to true.

`.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline route_polyline = 10;`

**Returns**

**Type**

**Description**

[ShipmentRoute.EncodedPolyline](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline)

The routePolyline.

### getRoutePolylineBuilder()

```
public ShipmentRoute.EncodedPolyline.Builder getRoutePolylineBuilder()
```

The encoded polyline representation of the route. This field is only populated if OptimizeToursRequest.populate\_polylines is set to true.

`.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline route_polyline = 10;`

**Returns**

**Type**

**Description**

[ShipmentRoute.EncodedPolyline.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline.Builder)

### getRoutePolylineOrBuilder()

```
public ShipmentRoute.EncodedPolylineOrBuilder getRoutePolylineOrBuilder()
```

The encoded polyline representation of the route. This field is only populated if OptimizeToursRequest.populate\_polylines is set to true.

`.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline route_polyline = 10;`

**Returns**

**Type**

**Description**

[ShipmentRoute.EncodedPolylineOrBuilder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.EncodedPolylineOrBuilder)

### getRouteTotalCost()

```
public double getRouteTotalCost()
```

Total cost of the route. The sum of all costs in the cost map.

`double route_total_cost = 18;`

**Returns**

**Type**

**Description**

[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The routeTotalCost.

### getTransitions(int index)

```
public ShipmentRoute.Transition getTransitions(int index)
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Transition](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition)

### getTransitionsBuilder(int index)

```
public ShipmentRoute.Transition.Builder getTransitionsBuilder(int index)
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)

### getTransitionsBuilderList()

```
public List<ShipmentRoute.Transition.Builder> getTransitionsBuilderList()
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)\>

### getTransitionsCount()

```
public int getTransitionsCount()
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getTransitionsList()

```
public List<ShipmentRoute.Transition> getTransitionsList()
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Transition](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition)\>

### getTransitionsOrBuilder(int index)

```
public ShipmentRoute.TransitionOrBuilder getTransitionsOrBuilder(int index)
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.TransitionOrBuilder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.TransitionOrBuilder)

### getTransitionsOrBuilderList()

```
public List<? extends ShipmentRoute.TransitionOrBuilder> getTransitionsOrBuilderList()
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.ShipmentRoute.TransitionOrBuilder\>

### getTravelSteps(int index)

```
public ShipmentRoute.TravelStep getTravelSteps(int index)
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.TravelStep](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.TravelStep)

### getTravelStepsBuilder(int index)

```
public ShipmentRoute.TravelStep.Builder getTravelStepsBuilder(int index)
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.TravelStep.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.TravelStep.Builder)

### getTravelStepsBuilderList()

```
public List<ShipmentRoute.TravelStep.Builder> getTravelStepsBuilderList()
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.TravelStep.Builder)\>

### getTravelStepsCount()

```
public int getTravelStepsCount()
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getTravelStepsList()

```
public List<ShipmentRoute.TravelStep> getTravelStepsList()
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[TravelStep](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.TravelStep)\>

### getTravelStepsOrBuilder(int index)

```
public ShipmentRoute.TravelStepOrBuilder getTravelStepsOrBuilder(int index)
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.TravelStepOrBuilder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.TravelStepOrBuilder)

### getTravelStepsOrBuilderList()

```
public List<? extends ShipmentRoute.TravelStepOrBuilder> getTravelStepsOrBuilderList()
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.ShipmentRoute.TravelStepOrBuilder\>

### getVehicleDetour() (deprecated)

```
public Duration getVehicleDetour()
```

**Deprecated.** _google.cloud.optimization.v1.ShipmentRoute.vehicle\_detour is deprecated. See google/cloud/optimization/v1/fleet\_routing.proto;l=2135_

Deprecated: No longer used. This field will only be populated at the ShipmentRoute.Visit level. Extra detour time due to the shipments visited on the route. It is equal to `vehicle_end_time` - `vehicle_start_time` - travel duration from the vehicle's start\_location to its `end_location`.

`.google.protobuf.Duration vehicle_detour = 15 [deprecated = true];`

**Returns**

**Type**

**Description**

[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)

The vehicleDetour.

### getVehicleDetourBuilder()

```
public Duration.Builder getVehicleDetourBuilder()
```

Deprecated: No longer used. This field will only be populated at the ShipmentRoute.Visit level. Extra detour time due to the shipments visited on the route. It is equal to `vehicle_end_time` - `vehicle_start_time` - travel duration from the vehicle's start\_location to its `end_location`.

`.google.protobuf.Duration vehicle_detour = 15 [deprecated = true];`

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)

### getVehicleDetourOrBuilder()

```
public DurationOrBuilder getVehicleDetourOrBuilder()
```

Deprecated: No longer used. This field will only be populated at the ShipmentRoute.Visit level. Extra detour time due to the shipments visited on the route. It is equal to `vehicle_end_time` - `vehicle_start_time` - travel duration from the vehicle's start\_location to its `end_location`.

`.google.protobuf.Duration vehicle_detour = 15 [deprecated = true];`

**Returns**

**Type**

**Description**

[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)

### getVehicleEndTime()

```
public Timestamp getVehicleEndTime()
```

Time at which the vehicle finishes its route.

`.google.protobuf.Timestamp vehicle_end_time = 6;`

**Returns**

**Type**

**Description**

[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)

The vehicleEndTime.

### getVehicleEndTimeBuilder()

```
public Timestamp.Builder getVehicleEndTimeBuilder()
```

Time at which the vehicle finishes its route.

`.google.protobuf.Timestamp vehicle_end_time = 6;`

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)

### getVehicleEndTimeOrBuilder()

```
public TimestampOrBuilder getVehicleEndTimeOrBuilder()
```

Time at which the vehicle finishes its route.

`.google.protobuf.Timestamp vehicle_end_time = 6;`

**Returns**

**Type**

**Description**

[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)

### getVehicleIndex()

```
public int getVehicleIndex()
```

Vehicle performing the route, identified by its index in the source `ShipmentModel`.

`int32 vehicle_index = 1;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The vehicleIndex.

### getVehicleLabel()

```
public String getVehicleLabel()
```

Label of the vehicle performing this route, equal to `ShipmentModel.vehicles(vehicle_index).label`, if specified.

`string vehicle_label = 2;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The vehicleLabel.

### getVehicleLabelBytes()

```
public ByteString getVehicleLabelBytes()
```

Label of the vehicle performing this route, equal to `ShipmentModel.vehicles(vehicle_index).label`, if specified.

`string vehicle_label = 2;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for vehicleLabel.

### getVehicleStartTime()

```
public Timestamp getVehicleStartTime()
```

Time at which the vehicle starts its route.

`.google.protobuf.Timestamp vehicle_start_time = 5;`

**Returns**

**Type**

**Description**

[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)

The vehicleStartTime.

### getVehicleStartTimeBuilder()

```
public Timestamp.Builder getVehicleStartTimeBuilder()
```

Time at which the vehicle starts its route.

`.google.protobuf.Timestamp vehicle_start_time = 5;`

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)

### getVehicleStartTimeOrBuilder()

```
public TimestampOrBuilder getVehicleStartTimeOrBuilder()
```

Time at which the vehicle starts its route.

`.google.protobuf.Timestamp vehicle_start_time = 5;`

**Returns**

**Type**

**Description**

[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)

### getVisits(int index)

```
public ShipmentRoute.Visit getVisits(int index)
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)

### getVisitsBuilder(int index)

```
public ShipmentRoute.Visit.Builder getVisitsBuilder(int index)
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)

### getVisitsBuilderList()

```
public List<ShipmentRoute.Visit.Builder> getVisitsBuilderList()
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)\>

### getVisitsCount()

```
public int getVisitsCount()
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getVisitsList()

```
public List<ShipmentRoute.Visit> getVisitsList()
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Visit](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)\>

### getVisitsOrBuilder(int index)

```
public ShipmentRoute.VisitOrBuilder getVisitsOrBuilder(int index)
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.VisitOrBuilder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.VisitOrBuilder)

### getVisitsOrBuilderList()

```
public List<? extends ShipmentRoute.VisitOrBuilder> getVisitsOrBuilderList()
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.optimization.v1.ShipmentRoute.VisitOrBuilder\>

### hasDelayBeforeVehicleEnd() (deprecated)

```
public boolean hasDelayBeforeVehicleEnd()
```

**Deprecated.** _google.cloud.optimization.v1.ShipmentRoute.delay\_before\_vehicle\_end is deprecated. See google/cloud/optimization/v1/fleet\_routing.proto;l=2140_

Deprecated: Use \[ShipmentRoute.Transition.delay\_duration\]\[\] instead. Delay occurring before the vehicle end. See TransitionAttributes.delay.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_vehicle_end = 16 [deprecated = true];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the delayBeforeVehicleEnd field is set.

### hasMetrics()

```
public boolean hasMetrics()
```

Duration, distance and load metrics for this route. The fields of AggregatedMetrics are summed over all ShipmentRoute.transitions or ShipmentRoute.visits, depending on the context.

`.google.cloud.optimization.v1.AggregatedMetrics metrics = 12;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the metrics field is set.

### hasRoutePolyline()

```
public boolean hasRoutePolyline()
```

The encoded polyline representation of the route. This field is only populated if OptimizeToursRequest.populate\_polylines is set to true.

`.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline route_polyline = 10;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the routePolyline field is set.

### hasVehicleDetour() (deprecated)

```
public boolean hasVehicleDetour()
```

**Deprecated.** _google.cloud.optimization.v1.ShipmentRoute.vehicle\_detour is deprecated. See google/cloud/optimization/v1/fleet\_routing.proto;l=2135_

Deprecated: No longer used. This field will only be populated at the ShipmentRoute.Visit level. Extra detour time due to the shipments visited on the route. It is equal to `vehicle_end_time` - `vehicle_start_time` - travel duration from the vehicle's start\_location to its `end_location`.

`.google.protobuf.Duration vehicle_detour = 15 [deprecated = true];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the vehicleDetour field is set.

### hasVehicleEndTime()

```
public boolean hasVehicleEndTime()
```

Time at which the vehicle finishes its route.

`.google.protobuf.Timestamp vehicle_end_time = 6;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the vehicleEndTime field is set.

### hasVehicleStartTime()

```
public boolean hasVehicleStartTime()
```

Time at which the vehicle starts its route.

`.google.protobuf.Timestamp vehicle_start_time = 5;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the vehicleStartTime field is set.

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

### mergeDelayBeforeVehicleEnd(ShipmentRoute.Delay value)

```
public ShipmentRoute.Builder mergeDelayBeforeVehicleEnd(ShipmentRoute.Delay value)
```

Deprecated: Use \[ShipmentRoute.Transition.delay\_duration\]\[\] instead. Delay occurring before the vehicle end. See TransitionAttributes.delay.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_vehicle_end = 16 [deprecated = true];`

**Parameter**

**Name**

**Description**

value

`[ShipmentRoute.Delay](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Delay)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### mergeFrom(ShipmentRoute other)

```
public ShipmentRoute.Builder mergeFrom(ShipmentRoute other)
```

**Parameter**

**Name**

**Description**

other

`[ShipmentRoute](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public ShipmentRoute.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### mergeFrom(Message other)

```
public ShipmentRoute.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

other

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeMetrics(AggregatedMetrics value)

```
public ShipmentRoute.Builder mergeMetrics(AggregatedMetrics value)
```

Duration, distance and load metrics for this route. The fields of AggregatedMetrics are summed over all ShipmentRoute.transitions or ShipmentRoute.visits, depending on the context.

`.google.cloud.optimization.v1.AggregatedMetrics metrics = 12;`

**Parameter**

**Name**

**Description**

value

`[AggregatedMetrics](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.AggregatedMetrics)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### mergeRoutePolyline(ShipmentRoute.EncodedPolyline value)

```
public ShipmentRoute.Builder mergeRoutePolyline(ShipmentRoute.EncodedPolyline value)
```

The encoded polyline representation of the route. This field is only populated if OptimizeToursRequest.populate\_polylines is set to true.

`.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline route_polyline = 10;`

**Parameter**

**Name**

**Description**

value

`[ShipmentRoute.EncodedPolyline](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final ShipmentRoute.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

unknownFields

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### mergeVehicleDetour(Duration value)

```
public ShipmentRoute.Builder mergeVehicleDetour(Duration value)
```

Deprecated: No longer used. This field will only be populated at the ShipmentRoute.Visit level. Extra detour time due to the shipments visited on the route. It is equal to `vehicle_end_time` - `vehicle_start_time` - travel duration from the vehicle's start\_location to its `end_location`.

`.google.protobuf.Duration vehicle_detour = 15 [deprecated = true];`

**Parameter**

**Name**

**Description**

value

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### mergeVehicleEndTime(Timestamp value)

```
public ShipmentRoute.Builder mergeVehicleEndTime(Timestamp value)
```

Time at which the vehicle finishes its route.

`.google.protobuf.Timestamp vehicle_end_time = 6;`

**Parameter**

**Name**

**Description**

value

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### mergeVehicleStartTime(Timestamp value)

```
public ShipmentRoute.Builder mergeVehicleStartTime(Timestamp value)
```

Time at which the vehicle starts its route.

`.google.protobuf.Timestamp vehicle_start_time = 5;`

**Parameter**

**Name**

**Description**

value

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### putAllRouteCosts(Map<String,Double> values)

```
public ShipmentRoute.Builder putAllRouteCosts(Map<String,Double> values)
```

Cost of the route, broken down by cost-related request fields. The keys are proto paths, relative to the input OptimizeToursRequest, e.g. "model.shipments.pickups.cost", and the values are the total cost generated by the corresponding cost field, aggregated over the whole route. In other words, costs\["model.shipments.pickups.cost"\] is the sum of all pickup costs over the route. All costs defined in the model are reported in detail here with the exception of costs related to TransitionAttributes that are only reported in an aggregated way as of 2022/01.

`map<string, double> route_costs = 17;`

**Parameter**

**Name**

**Description**

values

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Double](https://docs.oracle.com/javase/8/docs/api/java/lang/Double.html)>`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### putRouteCosts(String key, double value)

```
public ShipmentRoute.Builder putRouteCosts(String key, double value)
```

Cost of the route, broken down by cost-related request fields. The keys are proto paths, relative to the input OptimizeToursRequest, e.g. "model.shipments.pickups.cost", and the values are the total cost generated by the corresponding cost field, aggregated over the whole route. In other words, costs\["model.shipments.pickups.cost"\] is the sum of all pickup costs over the route. All costs defined in the model are reported in detail here with the exception of costs related to TransitionAttributes that are only reported in an aggregated way as of 2022/01.

`map<string, double> route_costs = 17;`

**Parameters**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

value

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### removeBreaks(int index)

```
public ShipmentRoute.Builder removeBreaks(int index)
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### removeEndLoads(int index)

```
public ShipmentRoute.Builder removeEndLoads(int index)
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### removeRouteCosts(String key)

```
public ShipmentRoute.Builder removeRouteCosts(String key)
```

Cost of the route, broken down by cost-related request fields. The keys are proto paths, relative to the input OptimizeToursRequest, e.g. "model.shipments.pickups.cost", and the values are the total cost generated by the corresponding cost field, aggregated over the whole route. In other words, costs\["model.shipments.pickups.cost"\] is the sum of all pickup costs over the route. All costs defined in the model are reported in detail here with the exception of costs related to TransitionAttributes that are only reported in an aggregated way as of 2022/01.

`map<string, double> route_costs = 17;`

**Parameter**

**Name**

**Description**

key

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### removeTransitions(int index)

```
public ShipmentRoute.Builder removeTransitions(int index)
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### removeTravelSteps(int index)

```
public ShipmentRoute.Builder removeTravelSteps(int index)
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### removeVisits(int index)

```
public ShipmentRoute.Builder removeVisits(int index)
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setBreaks(int index, ShipmentRoute.Break value)

```
public ShipmentRoute.Builder setBreaks(int index, ShipmentRoute.Break value)
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[ShipmentRoute.Break](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Break)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setBreaks(int index, ShipmentRoute.Break.Builder builderForValue)

```
public ShipmentRoute.Builder setBreaks(int index, ShipmentRoute.Break.Builder builderForValue)
```

Breaks scheduled for the vehicle performing this route. The `breaks` sequence represents time intervals, each starting at the corresponding `start_time` and lasting `duration` seconds.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Break breaks = 11;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

builderForValue

`[ShipmentRoute.Break.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Break.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setDelayBeforeVehicleEnd(ShipmentRoute.Delay value)

```
public ShipmentRoute.Builder setDelayBeforeVehicleEnd(ShipmentRoute.Delay value)
```

Deprecated: Use \[ShipmentRoute.Transition.delay\_duration\]\[\] instead. Delay occurring before the vehicle end. See TransitionAttributes.delay.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_vehicle_end = 16 [deprecated = true];`

**Parameter**

**Name**

**Description**

value

`[ShipmentRoute.Delay](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Delay)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setDelayBeforeVehicleEnd(ShipmentRoute.Delay.Builder builderForValue)

```
public ShipmentRoute.Builder setDelayBeforeVehicleEnd(ShipmentRoute.Delay.Builder builderForValue)
```

Deprecated: Use \[ShipmentRoute.Transition.delay\_duration\]\[\] instead. Delay occurring before the vehicle end. See TransitionAttributes.delay.

`.google.cloud.optimization.v1.ShipmentRoute.Delay delay_before_vehicle_end = 16 [deprecated = true];`

**Parameter**

**Name**

**Description**

builderForValue

`[ShipmentRoute.Delay.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Delay.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setEndLoads(int index, CapacityQuantity value)

```
public ShipmentRoute.Builder setEndLoads(int index, CapacityQuantity value)
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[CapacityQuantity](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.CapacityQuantity)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setEndLoads(int index, CapacityQuantity.Builder builderForValue)

```
public ShipmentRoute.Builder setEndLoads(int index, CapacityQuantity.Builder builderForValue)
```

Deprecated: Use \[ShipmentRoute.Transition.loads\]\[\] instead. Vehicle loads upon arrival at its end location, for each type specified in Vehicle.capacities, `start_load_intervals`, `end_load_intervals` or demands. Exception: we omit loads for quantity types unconstrained by intervals and that don't have any non-zero demand on the route.

`repeated .google.cloud.optimization.v1.CapacityQuantity end_loads = 13 [deprecated = true];`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

builderForValue

`[CapacityQuantity.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.CapacityQuantity.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setField(Descriptors.FieldDescriptor field, Object value)

```
public ShipmentRoute.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setHasTrafficInfeasibilities(boolean value)

```
public ShipmentRoute.Builder setHasTrafficInfeasibilities(boolean value)
```

When OptimizeToursRequest.consider\_road\_traffic, is set to true, this field indicates that inconsistencies in route timings are predicted using traffic-based travel duration estimates. There may be insufficient time to complete traffic-adjusted travel, delays, and breaks between visits, before the first visit, or after the last visit, while still satisfying the visit and vehicle time windows. For example, `<code><code> start_time(previous_visit) + duration(previous_visit) + travel_duration(previous_visit, next_visit) &gt; start_time(next_visit) </code></code><code> Arrival at next_visit will likely happen later than its current time window due the increased estimate of travel time </code>travel_duration(previous_visit, next_visit)` due to traffic. Also, a break may be forced to overlap with a visit due to an increase in travel time estimates and visit or break time window restrictions.

`bool has_traffic_infeasibilities = 9;`

**Parameter**

**Name**

**Description**

value

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The hasTrafficInfeasibilities to set.

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

This builder for chaining.

### setMetrics(AggregatedMetrics value)

```
public ShipmentRoute.Builder setMetrics(AggregatedMetrics value)
```

Duration, distance and load metrics for this route. The fields of AggregatedMetrics are summed over all ShipmentRoute.transitions or ShipmentRoute.visits, depending on the context.

`.google.cloud.optimization.v1.AggregatedMetrics metrics = 12;`

**Parameter**

**Name**

**Description**

value

`[AggregatedMetrics](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.AggregatedMetrics)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setMetrics(AggregatedMetrics.Builder builderForValue)

```
public ShipmentRoute.Builder setMetrics(AggregatedMetrics.Builder builderForValue)
```

Duration, distance and load metrics for this route. The fields of AggregatedMetrics are summed over all ShipmentRoute.transitions or ShipmentRoute.visits, depending on the context.

`.google.cloud.optimization.v1.AggregatedMetrics metrics = 12;`

**Parameter**

**Name**

**Description**

builderForValue

`[AggregatedMetrics.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.AggregatedMetrics.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public ShipmentRoute.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setRoutePolyline(ShipmentRoute.EncodedPolyline value)

```
public ShipmentRoute.Builder setRoutePolyline(ShipmentRoute.EncodedPolyline value)
```

The encoded polyline representation of the route. This field is only populated if OptimizeToursRequest.populate\_polylines is set to true.

`.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline route_polyline = 10;`

**Parameter**

**Name**

**Description**

value

`[ShipmentRoute.EncodedPolyline](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setRoutePolyline(ShipmentRoute.EncodedPolyline.Builder builderForValue)

```
public ShipmentRoute.Builder setRoutePolyline(ShipmentRoute.EncodedPolyline.Builder builderForValue)
```

The encoded polyline representation of the route. This field is only populated if OptimizeToursRequest.populate\_polylines is set to true.

`.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline route_polyline = 10;`

**Parameter**

**Name**

**Description**

builderForValue

`[ShipmentRoute.EncodedPolyline.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.EncodedPolyline.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setRouteTotalCost(double value)

```
public ShipmentRoute.Builder setRouteTotalCost(double value)
```

Total cost of the route. The sum of all costs in the cost map.

`double route_total_cost = 18;`

**Parameter**

**Name**

**Description**

value

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The routeTotalCost to set.

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

This builder for chaining.

### setTransitions(int index, ShipmentRoute.Transition value)

```
public ShipmentRoute.Builder setTransitions(int index, ShipmentRoute.Transition value)
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[ShipmentRoute.Transition](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setTransitions(int index, ShipmentRoute.Transition.Builder builderForValue)

```
public ShipmentRoute.Builder setTransitions(int index, ShipmentRoute.Transition.Builder builderForValue)
```

Ordered list of transitions for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Transition transitions = 8;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

builderForValue

`[ShipmentRoute.Transition.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Transition.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setTravelSteps(int index, ShipmentRoute.TravelStep value)

```
public ShipmentRoute.Builder setTravelSteps(int index, ShipmentRoute.TravelStep value)
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[ShipmentRoute.TravelStep](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.TravelStep)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setTravelSteps(int index, ShipmentRoute.TravelStep.Builder builderForValue)

```
public ShipmentRoute.Builder setTravelSteps(int index, ShipmentRoute.TravelStep.Builder builderForValue)
```

Deprecated: Use \[ShipmentRoute.Transition\]\[\] instead. Ordered list of travel steps for the route.

`repeated .google.cloud.optimization.v1.ShipmentRoute.TravelStep travel_steps = 14 [deprecated = true];`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

builderForValue

`[ShipmentRoute.TravelStep.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.TravelStep.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final ShipmentRoute.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

unknownFields

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setVehicleDetour(Duration value)

```
public ShipmentRoute.Builder setVehicleDetour(Duration value)
```

Deprecated: No longer used. This field will only be populated at the ShipmentRoute.Visit level. Extra detour time due to the shipments visited on the route. It is equal to `vehicle_end_time` - `vehicle_start_time` - travel duration from the vehicle's start\_location to its `end_location`.

`.google.protobuf.Duration vehicle_detour = 15 [deprecated = true];`

**Parameter**

**Name**

**Description**

value

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setVehicleDetour(Duration.Builder builderForValue)

```
public ShipmentRoute.Builder setVehicleDetour(Duration.Builder builderForValue)
```

Deprecated: No longer used. This field will only be populated at the ShipmentRoute.Visit level. Extra detour time due to the shipments visited on the route. It is equal to `vehicle_end_time` - `vehicle_start_time` - travel duration from the vehicle's start\_location to its `end_location`.

`.google.protobuf.Duration vehicle_detour = 15 [deprecated = true];`

**Parameter**

**Name**

**Description**

builderForValue

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setVehicleEndTime(Timestamp value)

```
public ShipmentRoute.Builder setVehicleEndTime(Timestamp value)
```

Time at which the vehicle finishes its route.

`.google.protobuf.Timestamp vehicle_end_time = 6;`

**Parameter**

**Name**

**Description**

value

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setVehicleEndTime(Timestamp.Builder builderForValue)

```
public ShipmentRoute.Builder setVehicleEndTime(Timestamp.Builder builderForValue)
```

Time at which the vehicle finishes its route.

`.google.protobuf.Timestamp vehicle_end_time = 6;`

**Parameter**

**Name**

**Description**

builderForValue

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setVehicleIndex(int value)

```
public ShipmentRoute.Builder setVehicleIndex(int value)
```

Vehicle performing the route, identified by its index in the source `ShipmentModel`.

`int32 vehicle_index = 1;`

**Parameter**

**Name**

**Description**

value

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The vehicleIndex to set.

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

This builder for chaining.

### setVehicleLabel(String value)

```
public ShipmentRoute.Builder setVehicleLabel(String value)
```

Label of the vehicle performing this route, equal to `ShipmentModel.vehicles(vehicle_index).label`, if specified.

`string vehicle_label = 2;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The vehicleLabel to set.

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

This builder for chaining.

### setVehicleLabelBytes(ByteString value)

```
public ShipmentRoute.Builder setVehicleLabelBytes(ByteString value)
```

Label of the vehicle performing this route, equal to `ShipmentModel.vehicles(vehicle_index).label`, if specified.

`string vehicle_label = 2;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for vehicleLabel to set.

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

This builder for chaining.

### setVehicleStartTime(Timestamp value)

```
public ShipmentRoute.Builder setVehicleStartTime(Timestamp value)
```

Time at which the vehicle starts its route.

`.google.protobuf.Timestamp vehicle_start_time = 5;`

**Parameter**

**Name**

**Description**

value

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setVehicleStartTime(Timestamp.Builder builderForValue)

```
public ShipmentRoute.Builder setVehicleStartTime(Timestamp.Builder builderForValue)
```

Time at which the vehicle starts its route.

`.google.protobuf.Timestamp vehicle_start_time = 5;`

**Parameter**

**Name**

**Description**

builderForValue

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setVisits(int index, ShipmentRoute.Visit value)

```
public ShipmentRoute.Builder setVisits(int index, ShipmentRoute.Visit value)
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[ShipmentRoute.Visit](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

### setVisits(int index, ShipmentRoute.Visit.Builder builderForValue)

```
public ShipmentRoute.Builder setVisits(int index, ShipmentRoute.Visit.Builder builderForValue)
```

Ordered sequence of visits representing a route. visits\[i\] is the i-th visit in the route. If this field is empty, the vehicle is considered as unused.

`repeated .google.cloud.optimization.v1.ShipmentRoute.Visit visits = 7;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

builderForValue

`[ShipmentRoute.Visit.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Visit.Builder)`  

**Returns**

**Type**

**Description**

[ShipmentRoute.Builder](/java/docs/reference/google-cloud-optimization/1.6.0/com.google.cloud.optimization.v1.ShipmentRoute.Builder)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
