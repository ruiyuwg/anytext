-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class MethodSettings.LongRunning.Builder (2.66.0) Stay organized with collections Save and categorize content based on your preferences.

2.66.0 (latest) 2.65.1 2.64.1 2.63.2 2.62.0 2.61.3 2.60.0 2.59.2 2.58.0 2.57.0 2.56.0 2.54.1 2.53.0 2.52.0 2.51.0 2.50.1 2.49.0 2.48.0 2.46.0 2.45.1 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.1 2.38.0 2.37.1 2.36.0 2.34.0 2.33.0 2.32.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.1 2.22.1 2.21.1 2.15.0 2.14.3 2.13.0 2.12.0 2.11.0 2.10.0 2.9.6 2.8.4 2.7.4

```
public static final class MethodSettings.LongRunning.Builder extends GeneratedMessage.Builder<MethodSettings.LongRunning.Builder> implements MethodSettings.LongRunningOrBuilder
```

Describes settings to use when generating API methods that use the long-running operation pattern. All default values below are from those used in the client library generators (e.g. [Java](https://github.com/googleapis/gapic-generator-java/blob/04c2faa191a9b5a10b92392fe8482279c4404803/src/main/java/com/google/api/generator/gapic/composer/common/RetrySettingsComposer.java)).

Protobuf type `google.api.MethodSettings.LongRunning`

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessage.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html) \> MethodSettings.LongRunning.Builder

## Implements

[MethodSettings.LongRunningOrBuilder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunningOrBuilder)

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

[GeneratedMessage.Builder.addRepeatedField(Descriptors.FieldDescriptor,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

[GeneratedMessage.Builder.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_clear__)

[GeneratedMessage.Builder.clearField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessage.Builder.clearOneof(Descriptors.OneofDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

[GeneratedMessage.Builder.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_clone__)

[GeneratedMessage.Builder.getAllFields()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_getAllFields__)

[GeneratedMessage.Builder.getDescriptorForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_getDescriptorForType__)

[GeneratedMessage.Builder.getField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_getField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessage.Builder.getFieldBuilder(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_getFieldBuilder_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessage.Builder.getOneofFieldDescriptor(Descriptors.OneofDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_getOneofFieldDescriptor_com_google_protobuf_Descriptors_OneofDescriptor_)

[GeneratedMessage.Builder.getParentForChildren()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_getParentForChildren__)

[GeneratedMessage.Builder.getRepeatedField(Descriptors.FieldDescriptor,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_getRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_)

[GeneratedMessage.Builder.getRepeatedFieldBuilder(Descriptors.FieldDescriptor,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_getRepeatedFieldBuilder_com_google_protobuf_Descriptors_FieldDescriptor_int_)

[GeneratedMessage.Builder.getRepeatedFieldCount(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_getRepeatedFieldCount_com_google_protobuf_Descriptors_FieldDescriptor_)

com.google.protobuf.GeneratedMessage.Builder.getUnknownFieldSetBuilder()

[GeneratedMessage.Builder.getUnknownFields()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_getUnknownFields__)

[GeneratedMessage.Builder.hasField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_hasField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessage.Builder.hasOneof(Descriptors.OneofDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_hasOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

[GeneratedMessage.Builder.internalGetFieldAccessorTable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_internalGetFieldAccessorTable__)

[GeneratedMessage.Builder.internalGetMapField(int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_internalGetMapField_int_)

com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int)

[GeneratedMessage.Builder.internalGetMutableMapField(int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_internalGetMutableMapField_int_)

com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int)

[GeneratedMessage.Builder.isClean()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_isClean__)

[GeneratedMessage.Builder.isInitialized()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_isInitialized__)

[GeneratedMessage.Builder.markClean()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_markClean__)

[GeneratedMessage.Builder.mergeUnknownFields(UnknownFieldSet)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

com.google.protobuf.GeneratedMessage.Builder.mergeUnknownLengthDelimitedField(int,com.google.protobuf.ByteString)

com.google.protobuf.GeneratedMessage.Builder.mergeUnknownVarintField(int,int)

[GeneratedMessage.Builder.newBuilderForField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_newBuilderForField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessage.Builder.onBuilt()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_onBuilt__)

[GeneratedMessage.Builder.onChanged()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_onChanged__)

com.google.protobuf.GeneratedMessage.Builder.parseUnknownField(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite,int)

[GeneratedMessage.Builder.setField(Descriptors.FieldDescriptor,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

[GeneratedMessage.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldSetBuilder(com.google.protobuf.UnknownFieldSet.Builder)

[GeneratedMessage.Builder.setUnknownFields(UnknownFieldSet)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

com.google.protobuf.GeneratedMessage.Builder.setUnknownFieldsProto3(com.google.protobuf.UnknownFieldSet)

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

### build()

```
public MethodSettings.LongRunning build()
```

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning)`

### buildPartial()

```
public MethodSettings.LongRunning buildPartial()
```

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning)`

### clear()

```
public MethodSettings.LongRunning.Builder clear()
```

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

**Overrides**

[GeneratedMessage.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_clear__)

### clearInitialPollDelay()

```
public MethodSettings.LongRunning.Builder clearInitialPollDelay()
```

Initial delay after which the first poll request will be made. Default value: 5 seconds.

`.google.protobuf.Duration initial_poll_delay = 1;`

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

### clearMaxPollDelay()

```
public MethodSettings.LongRunning.Builder clearMaxPollDelay()
```

Maximum time between two subsequent poll requests. Default value: 45 seconds.

`.google.protobuf.Duration max_poll_delay = 3;`

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

### clearPollDelayMultiplier()

```
public MethodSettings.LongRunning.Builder clearPollDelayMultiplier()
```

Multiplier to gradually increase delay between subsequent polls until it reaches max\_poll\_delay. Default value: 1.5.

`float poll_delay_multiplier = 2;`

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

This builder for chaining.

### clearTotalPollTimeout()

```
public MethodSettings.LongRunning.Builder clearTotalPollTimeout()
```

Total polling timeout. Default value: 5 minutes.

`.google.protobuf.Duration total_poll_timeout = 4;`

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

### getDefaultInstanceForType()

```
public MethodSettings.LongRunning getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning)`

### getDescriptorForType()

```
public Descriptors.Descriptor getDescriptorForType()
```

**Returns**

**Type**

**Description**

`[Descriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.Descriptor.html)`

**Overrides**

[GeneratedMessage.Builder<BuilderType>.getDescriptorForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_getDescriptorForType__)

### getInitialPollDelay()

```
public Duration getInitialPollDelay()
```

Initial delay after which the first poll request will be made. Default value: 5 seconds.

`.google.protobuf.Duration initial_poll_delay = 1;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The initialPollDelay.

### getInitialPollDelayBuilder()

```
public Duration.Builder getInitialPollDelayBuilder()
```

Initial delay after which the first poll request will be made. Default value: 5 seconds.

`.google.protobuf.Duration initial_poll_delay = 1;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`

### getInitialPollDelayOrBuilder()

```
public DurationOrBuilder getInitialPollDelayOrBuilder()
```

Initial delay after which the first poll request will be made. Default value: 5 seconds.

`.google.protobuf.Duration initial_poll_delay = 1;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getMaxPollDelay()

```
public Duration getMaxPollDelay()
```

Maximum time between two subsequent poll requests. Default value: 45 seconds.

`.google.protobuf.Duration max_poll_delay = 3;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The maxPollDelay.

### getMaxPollDelayBuilder()

```
public Duration.Builder getMaxPollDelayBuilder()
```

Maximum time between two subsequent poll requests. Default value: 45 seconds.

`.google.protobuf.Duration max_poll_delay = 3;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`

### getMaxPollDelayOrBuilder()

```
public DurationOrBuilder getMaxPollDelayOrBuilder()
```

Maximum time between two subsequent poll requests. Default value: 45 seconds.

`.google.protobuf.Duration max_poll_delay = 3;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getPollDelayMultiplier()

```
public float getPollDelayMultiplier()
```

Multiplier to gradually increase delay between subsequent polls until it reaches max\_poll\_delay. Default value: 1.5.

`float poll_delay_multiplier = 2;`

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The pollDelayMultiplier.

### getTotalPollTimeout()

```
public Duration getTotalPollTimeout()
```

Total polling timeout. Default value: 5 minutes.

`.google.protobuf.Duration total_poll_timeout = 4;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The totalPollTimeout.

### getTotalPollTimeoutBuilder()

```
public Duration.Builder getTotalPollTimeoutBuilder()
```

Total polling timeout. Default value: 5 minutes.

`.google.protobuf.Duration total_poll_timeout = 4;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`

### getTotalPollTimeoutOrBuilder()

```
public DurationOrBuilder getTotalPollTimeoutOrBuilder()
```

Total polling timeout. Default value: 5 minutes.

`.google.protobuf.Duration total_poll_timeout = 4;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### hasInitialPollDelay()

```
public boolean hasInitialPollDelay()
```

Initial delay after which the first poll request will be made. Default value: 5 seconds.

`.google.protobuf.Duration initial_poll_delay = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the initialPollDelay field is set.

### hasMaxPollDelay()

```
public boolean hasMaxPollDelay()
```

Maximum time between two subsequent poll requests. Default value: 45 seconds.

`.google.protobuf.Duration max_poll_delay = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the maxPollDelay field is set.

### hasTotalPollTimeout()

```
public boolean hasTotalPollTimeout()
```

Total polling timeout. Default value: 5 minutes.

`.google.protobuf.Duration total_poll_timeout = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the totalPollTimeout field is set.

### internalGetFieldAccessorTable()

```
protected GeneratedMessage.FieldAccessorTable internalGetFieldAccessorTable()
```

**Returns**

**Type**

**Description**

`[FieldAccessorTable](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.FieldAccessorTable.html)`

**Overrides**

[GeneratedMessage.Builder<BuilderType>.internalGetFieldAccessorTable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_internalGetFieldAccessorTable__)

### isInitialized()

```
public final boolean isInitialized()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[GeneratedMessage.Builder<BuilderType>.isInitialized()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.Builder.html#com_google_protobuf_GeneratedMessage_Builder_isInitialized__)

### mergeFrom(MethodSettings.LongRunning other)

```
public MethodSettings.LongRunning.Builder mergeFrom(MethodSettings.LongRunning other)
```

**Parameter**

**Name**

**Description**

`other`

`[MethodSettings.LongRunning](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning)`  

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public MethodSettings.LongRunning.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public MethodSettings.LongRunning.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeInitialPollDelay(Duration value)

```
public MethodSettings.LongRunning.Builder mergeInitialPollDelay(Duration value)
```

Initial delay after which the first poll request will be made. Default value: 5 seconds.

`.google.protobuf.Duration initial_poll_delay = 1;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

### mergeMaxPollDelay(Duration value)

```
public MethodSettings.LongRunning.Builder mergeMaxPollDelay(Duration value)
```

Maximum time between two subsequent poll requests. Default value: 45 seconds.

`.google.protobuf.Duration max_poll_delay = 3;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

### mergeTotalPollTimeout(Duration value)

```
public MethodSettings.LongRunning.Builder mergeTotalPollTimeout(Duration value)
```

Total polling timeout. Default value: 5 minutes.

`.google.protobuf.Duration total_poll_timeout = 4;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

### setInitialPollDelay(Duration value)

```
public MethodSettings.LongRunning.Builder setInitialPollDelay(Duration value)
```

Initial delay after which the first poll request will be made. Default value: 5 seconds.

`.google.protobuf.Duration initial_poll_delay = 1;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

### setInitialPollDelay(Duration.Builder builderForValue)

```
public MethodSettings.LongRunning.Builder setInitialPollDelay(Duration.Builder builderForValue)
```

Initial delay after which the first poll request will be made. Default value: 5 seconds.

`.google.protobuf.Duration initial_poll_delay = 1;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`  

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

### setMaxPollDelay(Duration value)

```
public MethodSettings.LongRunning.Builder setMaxPollDelay(Duration value)
```

Maximum time between two subsequent poll requests. Default value: 45 seconds.

`.google.protobuf.Duration max_poll_delay = 3;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

### setMaxPollDelay(Duration.Builder builderForValue)

```
public MethodSettings.LongRunning.Builder setMaxPollDelay(Duration.Builder builderForValue)
```

Maximum time between two subsequent poll requests. Default value: 45 seconds.

`.google.protobuf.Duration max_poll_delay = 3;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`  

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

### setPollDelayMultiplier(float value)

```
public MethodSettings.LongRunning.Builder setPollDelayMultiplier(float value)
```

Multiplier to gradually increase delay between subsequent polls until it reaches max\_poll\_delay. Default value: 1.5.

`float poll_delay_multiplier = 2;`

**Parameter**

**Name**

**Description**

`value`

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The pollDelayMultiplier to set.

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

This builder for chaining.

### setTotalPollTimeout(Duration value)

```
public MethodSettings.LongRunning.Builder setTotalPollTimeout(Duration value)
```

Total polling timeout. Default value: 5 minutes.

`.google.protobuf.Duration total_poll_timeout = 4;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

### setTotalPollTimeout(Duration.Builder builderForValue)

```
public MethodSettings.LongRunning.Builder setTotalPollTimeout(Duration.Builder builderForValue)
```

Total polling timeout. Default value: 5 minutes.

`.google.protobuf.Duration total_poll_timeout = 4;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`  

**Returns**

**Type**

**Description**

`[MethodSettings.LongRunning.Builder](/java/docs/reference/proto-google-common-protos/latest/com.google.api.MethodSettings.LongRunning.Builder)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-11 UTC.
