-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class RecognitionOutputConfig.Builder (4.37.0) Stay organized with collections Save and categorize content based on your preferences.

4.82.0 (latest) 4.80.0 4.78.0 4.77.0 4.75.0 4.73.0 4.71.0 4.70.0 4.69.0 4.68.0 4.67.0 4.65.0 4.63.0 4.62.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.7.0 4.6.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.0 3.0.0 2.6.1 2.5.9 2.4.0 2.3.0 2.2.15

```
public static final class RecognitionOutputConfig.Builder extends GeneratedMessageV3.Builder<RecognitionOutputConfig.Builder> implements RecognitionOutputConfigOrBuilder
```

Configuration options for the output(s) of recognition.

Protobuf type `google.cloud.speech.v2.RecognitionOutputConfig`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> RecognitionOutputConfig.Builder

## Implements

[RecognitionOutputConfigOrBuilder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfigOrBuilder)

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
public RecognitionOutputConfig.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public RecognitionOutputConfig build()
```

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig)`

### buildPartial()

```
public RecognitionOutputConfig buildPartial()
```

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig)`

### clear()

```
public RecognitionOutputConfig.Builder clear()
```

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearField(Descriptors.FieldDescriptor field)

```
public RecognitionOutputConfig.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearGcsOutputConfig()

```
public RecognitionOutputConfig.Builder clearGcsOutputConfig()
```

If this message is populated, recognition results are written to the provided Google Cloud Storage URI.

`.google.cloud.speech.v2.GcsOutputConfig gcs_output_config = 1;`

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

### clearInlineResponseConfig()

```
public RecognitionOutputConfig.Builder clearInlineResponseConfig()
```

If this message is populated, recognition results are provided in the BatchRecognizeResponse message of the Operation when completed. This is only supported when calling BatchRecognize with just one audio file.

`.google.cloud.speech.v2.InlineOutputConfig inline_response_config = 2;`

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public RecognitionOutputConfig.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearOutput()

```
public RecognitionOutputConfig.Builder clearOutput()
```

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

### clearOutputFormatConfig()

```
public RecognitionOutputConfig.Builder clearOutputFormatConfig()
```

Optional. Configuration for the format of the results stored to `output`. If unspecified transcripts will be written in the `NATIVE` format only.

`.google.cloud.speech.v2.OutputFormatConfig output_format_config = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

### clone()

```
public RecognitionOutputConfig.Builder clone()
```

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getDefaultInstanceForType()

```
public RecognitionOutputConfig getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig)`

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

### getGcsOutputConfig()

```
public GcsOutputConfig getGcsOutputConfig()
```

If this message is populated, recognition results are written to the provided Google Cloud Storage URI.

`.google.cloud.speech.v2.GcsOutputConfig gcs_output_config = 1;`

**Returns**

**Type**

**Description**

`[GcsOutputConfig](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.GcsOutputConfig)`

The gcsOutputConfig.

### getGcsOutputConfigBuilder()

```
public GcsOutputConfig.Builder getGcsOutputConfigBuilder()
```

If this message is populated, recognition results are written to the provided Google Cloud Storage URI.

`.google.cloud.speech.v2.GcsOutputConfig gcs_output_config = 1;`

**Returns**

**Type**

**Description**

`[GcsOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.GcsOutputConfig.Builder)`

### getGcsOutputConfigOrBuilder()

```
public GcsOutputConfigOrBuilder getGcsOutputConfigOrBuilder()
```

If this message is populated, recognition results are written to the provided Google Cloud Storage URI.

`.google.cloud.speech.v2.GcsOutputConfig gcs_output_config = 1;`

**Returns**

**Type**

**Description**

`[GcsOutputConfigOrBuilder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.GcsOutputConfigOrBuilder)`

### getInlineResponseConfig()

```
public InlineOutputConfig getInlineResponseConfig()
```

If this message is populated, recognition results are provided in the BatchRecognizeResponse message of the Operation when completed. This is only supported when calling BatchRecognize with just one audio file.

`.google.cloud.speech.v2.InlineOutputConfig inline_response_config = 2;`

**Returns**

**Type**

**Description**

`[InlineOutputConfig](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.InlineOutputConfig)`

The inlineResponseConfig.

### getInlineResponseConfigBuilder()

```
public InlineOutputConfig.Builder getInlineResponseConfigBuilder()
```

If this message is populated, recognition results are provided in the BatchRecognizeResponse message of the Operation when completed. This is only supported when calling BatchRecognize with just one audio file.

`.google.cloud.speech.v2.InlineOutputConfig inline_response_config = 2;`

**Returns**

**Type**

**Description**

`[InlineOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.InlineOutputConfig.Builder)`

### getInlineResponseConfigOrBuilder()

```
public InlineOutputConfigOrBuilder getInlineResponseConfigOrBuilder()
```

If this message is populated, recognition results are provided in the BatchRecognizeResponse message of the Operation when completed. This is only supported when calling BatchRecognize with just one audio file.

`.google.cloud.speech.v2.InlineOutputConfig inline_response_config = 2;`

**Returns**

**Type**

**Description**

`[InlineOutputConfigOrBuilder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.InlineOutputConfigOrBuilder)`

### getOutputCase()

```
public RecognitionOutputConfig.OutputCase getOutputCase()
```

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.OutputCase](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.OutputCase)`

### getOutputFormatConfig()

```
public OutputFormatConfig getOutputFormatConfig()
```

Optional. Configuration for the format of the results stored to `output`. If unspecified transcripts will be written in the `NATIVE` format only.

`.google.cloud.speech.v2.OutputFormatConfig output_format_config = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[OutputFormatConfig](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.OutputFormatConfig)`

The outputFormatConfig.

### getOutputFormatConfigBuilder()

```
public OutputFormatConfig.Builder getOutputFormatConfigBuilder()
```

Optional. Configuration for the format of the results stored to `output`. If unspecified transcripts will be written in the `NATIVE` format only.

`.google.cloud.speech.v2.OutputFormatConfig output_format_config = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[OutputFormatConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.OutputFormatConfig.Builder)`

### getOutputFormatConfigOrBuilder()

```
public OutputFormatConfigOrBuilder getOutputFormatConfigOrBuilder()
```

Optional. Configuration for the format of the results stored to `output`. If unspecified transcripts will be written in the `NATIVE` format only.

`.google.cloud.speech.v2.OutputFormatConfig output_format_config = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[OutputFormatConfigOrBuilder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.OutputFormatConfigOrBuilder)`

### hasGcsOutputConfig()

```
public boolean hasGcsOutputConfig()
```

If this message is populated, recognition results are written to the provided Google Cloud Storage URI.

`.google.cloud.speech.v2.GcsOutputConfig gcs_output_config = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the gcsOutputConfig field is set.

### hasInlineResponseConfig()

```
public boolean hasInlineResponseConfig()
```

If this message is populated, recognition results are provided in the BatchRecognizeResponse message of the Operation when completed. This is only supported when calling BatchRecognize with just one audio file.

`.google.cloud.speech.v2.InlineOutputConfig inline_response_config = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the inlineResponseConfig field is set.

### hasOutputFormatConfig()

```
public boolean hasOutputFormatConfig()
```

Optional. Configuration for the format of the results stored to `output`. If unspecified transcripts will be written in the `NATIVE` format only.

`.google.cloud.speech.v2.OutputFormatConfig output_format_config = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the outputFormatConfig field is set.

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

### mergeFrom(RecognitionOutputConfig other)

```
public RecognitionOutputConfig.Builder mergeFrom(RecognitionOutputConfig other)
```

**Parameter**

**Name**

**Description**

`other`

`[RecognitionOutputConfig](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig)`  

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public RecognitionOutputConfig.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public RecognitionOutputConfig.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeGcsOutputConfig(GcsOutputConfig value)

```
public RecognitionOutputConfig.Builder mergeGcsOutputConfig(GcsOutputConfig value)
```

If this message is populated, recognition results are written to the provided Google Cloud Storage URI.

`.google.cloud.speech.v2.GcsOutputConfig gcs_output_config = 1;`

**Parameter**

**Name**

**Description**

`value`

`[GcsOutputConfig](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.GcsOutputConfig)`  

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

### mergeInlineResponseConfig(InlineOutputConfig value)

```
public RecognitionOutputConfig.Builder mergeInlineResponseConfig(InlineOutputConfig value)
```

If this message is populated, recognition results are provided in the BatchRecognizeResponse message of the Operation when completed. This is only supported when calling BatchRecognize with just one audio file.

`.google.cloud.speech.v2.InlineOutputConfig inline_response_config = 2;`

**Parameter**

**Name**

**Description**

`value`

`[InlineOutputConfig](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.InlineOutputConfig)`  

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

### mergeOutputFormatConfig(OutputFormatConfig value)

```
public RecognitionOutputConfig.Builder mergeOutputFormatConfig(OutputFormatConfig value)
```

Optional. Configuration for the format of the results stored to `output`. If unspecified transcripts will be written in the `NATIVE` format only.

`.google.cloud.speech.v2.OutputFormatConfig output_format_config = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[OutputFormatConfig](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.OutputFormatConfig)`  

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final RecognitionOutputConfig.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setField(Descriptors.FieldDescriptor field, Object value)

```
public RecognitionOutputConfig.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setGcsOutputConfig(GcsOutputConfig value)

```
public RecognitionOutputConfig.Builder setGcsOutputConfig(GcsOutputConfig value)
```

If this message is populated, recognition results are written to the provided Google Cloud Storage URI.

`.google.cloud.speech.v2.GcsOutputConfig gcs_output_config = 1;`

**Parameter**

**Name**

**Description**

`value`

`[GcsOutputConfig](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.GcsOutputConfig)`  

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

### setGcsOutputConfig(GcsOutputConfig.Builder builderForValue)

```
public RecognitionOutputConfig.Builder setGcsOutputConfig(GcsOutputConfig.Builder builderForValue)
```

If this message is populated, recognition results are written to the provided Google Cloud Storage URI.

`.google.cloud.speech.v2.GcsOutputConfig gcs_output_config = 1;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[GcsOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.GcsOutputConfig.Builder)`  

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

### setInlineResponseConfig(InlineOutputConfig value)

```
public RecognitionOutputConfig.Builder setInlineResponseConfig(InlineOutputConfig value)
```

If this message is populated, recognition results are provided in the BatchRecognizeResponse message of the Operation when completed. This is only supported when calling BatchRecognize with just one audio file.

`.google.cloud.speech.v2.InlineOutputConfig inline_response_config = 2;`

**Parameter**

**Name**

**Description**

`value`

`[InlineOutputConfig](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.InlineOutputConfig)`  

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

### setInlineResponseConfig(InlineOutputConfig.Builder builderForValue)

```
public RecognitionOutputConfig.Builder setInlineResponseConfig(InlineOutputConfig.Builder builderForValue)
```

If this message is populated, recognition results are provided in the BatchRecognizeResponse message of the Operation when completed. This is only supported when calling BatchRecognize with just one audio file.

`.google.cloud.speech.v2.InlineOutputConfig inline_response_config = 2;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[InlineOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.InlineOutputConfig.Builder)`  

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

### setOutputFormatConfig(OutputFormatConfig value)

```
public RecognitionOutputConfig.Builder setOutputFormatConfig(OutputFormatConfig value)
```

Optional. Configuration for the format of the results stored to `output`. If unspecified transcripts will be written in the `NATIVE` format only.

`.google.cloud.speech.v2.OutputFormatConfig output_format_config = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[OutputFormatConfig](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.OutputFormatConfig)`  

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

### setOutputFormatConfig(OutputFormatConfig.Builder builderForValue)

```
public RecognitionOutputConfig.Builder setOutputFormatConfig(OutputFormatConfig.Builder builderForValue)
```

Optional. Configuration for the format of the results stored to `output`. If unspecified transcripts will be written in the `NATIVE` format only.

`.google.cloud.speech.v2.OutputFormatConfig output_format_config = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[OutputFormatConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.OutputFormatConfig.Builder)`  

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public RecognitionOutputConfig.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final RecognitionOutputConfig.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[RecognitionOutputConfig.Builder](/java/docs/reference/google-cloud-speech/4.37.0/com.google.cloud.speech.v2.RecognitionOutputConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
