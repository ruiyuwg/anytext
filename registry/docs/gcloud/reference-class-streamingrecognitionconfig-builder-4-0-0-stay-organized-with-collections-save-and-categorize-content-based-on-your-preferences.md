-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class StreamingRecognitionConfig.Builder (4.0.0) Stay organized with collections Save and categorize content based on your preferences.

4.82.0 (latest) 4.80.0 4.78.0 4.77.0 4.75.0 4.73.0 4.71.0 4.70.0 4.69.0 4.68.0 4.67.0 4.65.0 4.63.0 4.62.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.7.0 4.6.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.0 3.0.0 2.6.1 2.5.9 2.4.0 2.3.0 2.2.15

```
public static final class StreamingRecognitionConfig.Builder extends GeneratedMessageV3.Builder<StreamingRecognitionConfig.Builder> implements StreamingRecognitionConfigOrBuilder
```

Provides configuration information for the StreamingRecognize request.

Protobuf type `google.cloud.speech.v2.StreamingRecognitionConfig`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> StreamingRecognitionConfig.Builder

## Implements

[StreamingRecognitionConfigOrBuilder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfigOrBuilder)

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

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public StreamingRecognitionConfig.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public StreamingRecognitionConfig build()
```

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig)

### buildPartial()

```
public StreamingRecognitionConfig buildPartial()
```

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig)

### clear()

```
public StreamingRecognitionConfig.Builder clear()
```

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearConfig()

```
public StreamingRecognitionConfig.Builder clearConfig()
```

Required. Features and audio metadata to use for the Automatic Speech Recognition. This field in combination with the config\_mask field can be used to override parts of the default\_recognition\_config of the Recognizer resource.

`.google.cloud.speech.v2.RecognitionConfig config = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

### clearConfigMask()

```
public StreamingRecognitionConfig.Builder clearConfigMask()
```

The list of fields in config that override the values in the default\_recognition\_config of the recognizer during this recognition request. If no mask is provided, all non-default valued fields in config override the values in the recognizer for this recognition request. If a mask is provided, only the fields listed in the mask override the config in the recognizer for this recognition request. If a wildcard (`*`) is provided, config completely overrides and replaces the config in the recognizer for this recognition request.

`.google.protobuf.FieldMask config_mask = 3;`

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

### clearField(Descriptors.FieldDescriptor field)

```
public StreamingRecognitionConfig.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

field

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public StreamingRecognitionConfig.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

oneof

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearStreamingFeatures()

```
public StreamingRecognitionConfig.Builder clearStreamingFeatures()
```

Speech recognition features to enable specific to streaming audio recognition requests.

`.google.cloud.speech.v2.StreamingRecognitionFeatures streaming_features = 2;`

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

### clone()

```
public StreamingRecognitionConfig.Builder clone()
```

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getConfig()

```
public RecognitionConfig getConfig()
```

Required. Features and audio metadata to use for the Automatic Speech Recognition. This field in combination with the config\_mask field can be used to override parts of the default\_recognition\_config of the Recognizer resource.

`.google.cloud.speech.v2.RecognitionConfig config = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[RecognitionConfig](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.RecognitionConfig)

The config.

### getConfigBuilder()

```
public RecognitionConfig.Builder getConfigBuilder()
```

Required. Features and audio metadata to use for the Automatic Speech Recognition. This field in combination with the config\_mask field can be used to override parts of the default\_recognition\_config of the Recognizer resource.

`.google.cloud.speech.v2.RecognitionConfig config = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[RecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.RecognitionConfig.Builder)

### getConfigMask()

```
public FieldMask getConfigMask()
```

The list of fields in config that override the values in the default\_recognition\_config of the recognizer during this recognition request. If no mask is provided, all non-default valued fields in config override the values in the recognizer for this recognition request. If a mask is provided, only the fields listed in the mask override the config in the recognizer for this recognition request. If a wildcard (`*`) is provided, config completely overrides and replaces the config in the recognizer for this recognition request.

`.google.protobuf.FieldMask config_mask = 3;`

**Returns**

**Type**

**Description**

[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)

The configMask.

### getConfigMaskBuilder()

```
public FieldMask.Builder getConfigMaskBuilder()
```

The list of fields in config that override the values in the default\_recognition\_config of the recognizer during this recognition request. If no mask is provided, all non-default valued fields in config override the values in the recognizer for this recognition request. If a mask is provided, only the fields listed in the mask override the config in the recognizer for this recognition request. If a wildcard (`*`) is provided, config completely overrides and replaces the config in the recognizer for this recognition request.

`.google.protobuf.FieldMask config_mask = 3;`

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.Builder.html)

### getConfigMaskOrBuilder()

```
public FieldMaskOrBuilder getConfigMaskOrBuilder()
```

The list of fields in config that override the values in the default\_recognition\_config of the recognizer during this recognition request. If no mask is provided, all non-default valued fields in config override the values in the recognizer for this recognition request. If a mask is provided, only the fields listed in the mask override the config in the recognizer for this recognition request. If a wildcard (`*`) is provided, config completely overrides and replaces the config in the recognizer for this recognition request.

`.google.protobuf.FieldMask config_mask = 3;`

**Returns**

**Type**

**Description**

[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)

### getConfigOrBuilder()

```
public RecognitionConfigOrBuilder getConfigOrBuilder()
```

Required. Features and audio metadata to use for the Automatic Speech Recognition. This field in combination with the config\_mask field can be used to override parts of the default\_recognition\_config of the Recognizer resource.

`.google.cloud.speech.v2.RecognitionConfig config = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[RecognitionConfigOrBuilder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.RecognitionConfigOrBuilder)

### getDefaultInstanceForType()

```
public StreamingRecognitionConfig getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig)

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

### getStreamingFeatures()

```
public StreamingRecognitionFeatures getStreamingFeatures()
```

Speech recognition features to enable specific to streaming audio recognition requests.

`.google.cloud.speech.v2.StreamingRecognitionFeatures streaming_features = 2;`

**Returns**

**Type**

**Description**

[StreamingRecognitionFeatures](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionFeatures)

The streamingFeatures.

### getStreamingFeaturesBuilder()

```
public StreamingRecognitionFeatures.Builder getStreamingFeaturesBuilder()
```

Speech recognition features to enable specific to streaming audio recognition requests.

`.google.cloud.speech.v2.StreamingRecognitionFeatures streaming_features = 2;`

**Returns**

**Type**

**Description**

[StreamingRecognitionFeatures.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionFeatures.Builder)

### getStreamingFeaturesOrBuilder()

```
public StreamingRecognitionFeaturesOrBuilder getStreamingFeaturesOrBuilder()
```

Speech recognition features to enable specific to streaming audio recognition requests.

`.google.cloud.speech.v2.StreamingRecognitionFeatures streaming_features = 2;`

**Returns**

**Type**

**Description**

[StreamingRecognitionFeaturesOrBuilder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionFeaturesOrBuilder)

### hasConfig()

```
public boolean hasConfig()
```

Required. Features and audio metadata to use for the Automatic Speech Recognition. This field in combination with the config\_mask field can be used to override parts of the default\_recognition\_config of the Recognizer resource.

`.google.cloud.speech.v2.RecognitionConfig config = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the config field is set.

### hasConfigMask()

```
public boolean hasConfigMask()
```

The list of fields in config that override the values in the default\_recognition\_config of the recognizer during this recognition request. If no mask is provided, all non-default valued fields in config override the values in the recognizer for this recognition request. If a mask is provided, only the fields listed in the mask override the config in the recognizer for this recognition request. If a wildcard (`*`) is provided, config completely overrides and replaces the config in the recognizer for this recognition request.

`.google.protobuf.FieldMask config_mask = 3;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the configMask field is set.

### hasStreamingFeatures()

```
public boolean hasStreamingFeatures()
```

Speech recognition features to enable specific to streaming audio recognition requests.

`.google.cloud.speech.v2.StreamingRecognitionFeatures streaming_features = 2;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the streamingFeatures field is set.

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

### mergeConfig(RecognitionConfig value)

```
public StreamingRecognitionConfig.Builder mergeConfig(RecognitionConfig value)
```

Required. Features and audio metadata to use for the Automatic Speech Recognition. This field in combination with the config\_mask field can be used to override parts of the default\_recognition\_config of the Recognizer resource.

`.google.cloud.speech.v2.RecognitionConfig config = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

value

`[RecognitionConfig](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.RecognitionConfig)`  

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

### mergeConfigMask(FieldMask value)

```
public StreamingRecognitionConfig.Builder mergeConfigMask(FieldMask value)
```

The list of fields in config that override the values in the default\_recognition\_config of the recognizer during this recognition request. If no mask is provided, all non-default valued fields in config override the values in the recognizer for this recognition request. If a mask is provided, only the fields listed in the mask override the config in the recognizer for this recognition request. If a wildcard (`*`) is provided, config completely overrides and replaces the config in the recognizer for this recognition request.

`.google.protobuf.FieldMask config_mask = 3;`

**Parameter**

**Name**

**Description**

value

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

### mergeFrom(StreamingRecognitionConfig other)

```
public StreamingRecognitionConfig.Builder mergeFrom(StreamingRecognitionConfig other)
```

**Parameter**

**Name**

**Description**

other

`[StreamingRecognitionConfig](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig)`  

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public StreamingRecognitionConfig.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### mergeFrom(Message other)

```
public StreamingRecognitionConfig.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

other

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeStreamingFeatures(StreamingRecognitionFeatures value)

```
public StreamingRecognitionConfig.Builder mergeStreamingFeatures(StreamingRecognitionFeatures value)
```

Speech recognition features to enable specific to streaming audio recognition requests.

`.google.cloud.speech.v2.StreamingRecognitionFeatures streaming_features = 2;`

**Parameter**

**Name**

**Description**

value

`[StreamingRecognitionFeatures](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionFeatures)`  

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final StreamingRecognitionConfig.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

unknownFields

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setConfig(RecognitionConfig value)

```
public StreamingRecognitionConfig.Builder setConfig(RecognitionConfig value)
```

Required. Features and audio metadata to use for the Automatic Speech Recognition. This field in combination with the config\_mask field can be used to override parts of the default\_recognition\_config of the Recognizer resource.

`.google.cloud.speech.v2.RecognitionConfig config = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

value

`[RecognitionConfig](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.RecognitionConfig)`  

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

### setConfig(RecognitionConfig.Builder builderForValue)

```
public StreamingRecognitionConfig.Builder setConfig(RecognitionConfig.Builder builderForValue)
```

Required. Features and audio metadata to use for the Automatic Speech Recognition. This field in combination with the config\_mask field can be used to override parts of the default\_recognition\_config of the Recognizer resource.

`.google.cloud.speech.v2.RecognitionConfig config = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

builderForValue

`[RecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.RecognitionConfig.Builder)`  

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

### setConfigMask(FieldMask value)

```
public StreamingRecognitionConfig.Builder setConfigMask(FieldMask value)
```

The list of fields in config that override the values in the default\_recognition\_config of the recognizer during this recognition request. If no mask is provided, all non-default valued fields in config override the values in the recognizer for this recognition request. If a mask is provided, only the fields listed in the mask override the config in the recognizer for this recognition request. If a wildcard (`*`) is provided, config completely overrides and replaces the config in the recognizer for this recognition request.

`.google.protobuf.FieldMask config_mask = 3;`

**Parameter**

**Name**

**Description**

value

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

### setConfigMask(FieldMask.Builder builderForValue)

```
public StreamingRecognitionConfig.Builder setConfigMask(FieldMask.Builder builderForValue)
```

The list of fields in config that override the values in the default\_recognition\_config of the recognizer during this recognition request. If no mask is provided, all non-default valued fields in config override the values in the recognizer for this recognition request. If a mask is provided, only the fields listed in the mask override the config in the recognizer for this recognition request. If a wildcard (`*`) is provided, config completely overrides and replaces the config in the recognizer for this recognition request.

`.google.protobuf.FieldMask config_mask = 3;`

**Parameter**

**Name**

**Description**

builderForValue

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.Builder.html)`  

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

### setField(Descriptors.FieldDescriptor field, Object value)

```
public StreamingRecognitionConfig.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public StreamingRecognitionConfig.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setStreamingFeatures(StreamingRecognitionFeatures value)

```
public StreamingRecognitionConfig.Builder setStreamingFeatures(StreamingRecognitionFeatures value)
```

Speech recognition features to enable specific to streaming audio recognition requests.

`.google.cloud.speech.v2.StreamingRecognitionFeatures streaming_features = 2;`

**Parameter**

**Name**

**Description**

value

`[StreamingRecognitionFeatures](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionFeatures)`  

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

### setStreamingFeatures(StreamingRecognitionFeatures.Builder builderForValue)

```
public StreamingRecognitionConfig.Builder setStreamingFeatures(StreamingRecognitionFeatures.Builder builderForValue)
```

Speech recognition features to enable specific to streaming audio recognition requests.

`.google.cloud.speech.v2.StreamingRecognitionFeatures streaming_features = 2;`

**Parameter**

**Name**

**Description**

builderForValue

`[StreamingRecognitionFeatures.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionFeatures.Builder)`  

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final StreamingRecognitionConfig.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

unknownFields

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

[StreamingRecognitionConfig.Builder](/java/docs/reference/google-cloud-speech/4.0.0/com.google.cloud.speech.v2.StreamingRecognitionConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
