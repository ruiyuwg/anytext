-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class BatchTranslateDocumentRequest.Builder (2.35.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.5 2.2.0 2.1.13

```
public static final class BatchTranslateDocumentRequest.Builder extends GeneratedMessageV3.Builder<BatchTranslateDocumentRequest.Builder> implements BatchTranslateDocumentRequestOrBuilder
```

The BatchTranslateDocument request.

Protobuf type `google.cloud.translation.v3beta1.BatchTranslateDocumentRequest`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> BatchTranslateDocumentRequest.Builder

## Implements

[BatchTranslateDocumentRequestOrBuilder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequestOrBuilder)

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

### addAllInputConfigs(Iterable<? extends BatchDocumentInputConfig> values)

```
public BatchTranslateDocumentRequest.Builder addAllInputConfigs(Iterable<? extends BatchDocumentInputConfig> values)
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.translate.v3beta1.BatchDocumentInputConfig>`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### addAllTargetLanguageCodes(Iterable<String> values)

```
public BatchTranslateDocumentRequest.Builder addAllTargetLanguageCodes(Iterable<String> values)
```

Required. The BCP-47 language code to use for translation of the input document. Specify up to 10 language codes here.

`repeated string target_language_codes = 3 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The targetLanguageCodes to add.

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### addInputConfigs(BatchDocumentInputConfig value)

```
public BatchTranslateDocumentRequest.Builder addInputConfigs(BatchDocumentInputConfig value)
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[BatchDocumentInputConfig](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentInputConfig)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### addInputConfigs(BatchDocumentInputConfig.Builder builderForValue)

```
public BatchTranslateDocumentRequest.Builder addInputConfigs(BatchDocumentInputConfig.Builder builderForValue)
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[BatchDocumentInputConfig.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentInputConfig.Builder)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### addInputConfigs(int index, BatchDocumentInputConfig value)

```
public BatchTranslateDocumentRequest.Builder addInputConfigs(int index, BatchDocumentInputConfig value)
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[BatchDocumentInputConfig](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentInputConfig)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### addInputConfigs(int index, BatchDocumentInputConfig.Builder builderForValue)

```
public BatchTranslateDocumentRequest.Builder addInputConfigs(int index, BatchDocumentInputConfig.Builder builderForValue)
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[BatchDocumentInputConfig.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentInputConfig.Builder)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### addInputConfigsBuilder()

```
public BatchDocumentInputConfig.Builder addInputConfigsBuilder()
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[BatchDocumentInputConfig.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentInputConfig.Builder)`

### addInputConfigsBuilder(int index)

```
public BatchDocumentInputConfig.Builder addInputConfigsBuilder(int index)
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[BatchDocumentInputConfig.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentInputConfig.Builder)`

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public BatchTranslateDocumentRequest.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### addTargetLanguageCodes(String value)

```
public BatchTranslateDocumentRequest.Builder addTargetLanguageCodes(String value)
```

Required. The BCP-47 language code to use for translation of the input document. Specify up to 10 language codes here.

`repeated string target_language_codes = 3 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The targetLanguageCodes to add.

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### addTargetLanguageCodesBytes(ByteString value)

```
public BatchTranslateDocumentRequest.Builder addTargetLanguageCodesBytes(ByteString value)
```

Required. The BCP-47 language code to use for translation of the input document. Specify up to 10 language codes here.

`repeated string target_language_codes = 3 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the targetLanguageCodes to add.

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### build()

```
public BatchTranslateDocumentRequest build()
```

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest)`

### buildPartial()

```
public BatchTranslateDocumentRequest buildPartial()
```

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest)`

### clear()

```
public BatchTranslateDocumentRequest.Builder clear()
```

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearCustomizedAttribution()

```
public BatchTranslateDocumentRequest.Builder clearCustomizedAttribution()
```

Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in [https://cloud.google.com/translate/attribution#attribution\_and\_logos](https://cloud.google.com/translate/attribution#attribution_and_logos)

`string customized_attribution = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### clearEnableRotationCorrection()

```
public BatchTranslateDocumentRequest.Builder clearEnableRotationCorrection()
```

Optional. If true, enable auto rotation correction in DVS.

`bool enable_rotation_correction = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### clearEnableShadowRemovalNativePdf()

```
public BatchTranslateDocumentRequest.Builder clearEnableShadowRemovalNativePdf()
```

Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is\_translate\_native\_pdf\_only: false && pdf\_native\_only: false

`bool enable_shadow_removal_native_pdf = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public BatchTranslateDocumentRequest.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearFormatConversions()

```
public BatchTranslateDocumentRequest.Builder clearFormatConversions()
```

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### clearGlossaries()

```
public BatchTranslateDocumentRequest.Builder clearGlossaries()
```

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### clearInputConfigs()

```
public BatchTranslateDocumentRequest.Builder clearInputConfigs()
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### clearModels()

```
public BatchTranslateDocumentRequest.Builder clearModels()
```

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public BatchTranslateDocumentRequest.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearOutputConfig()

```
public BatchTranslateDocumentRequest.Builder clearOutputConfig()
```

Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.

`.google.cloud.translation.v3beta1.BatchDocumentOutputConfig output_config = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### clearParent()

```
public BatchTranslateDocumentRequest.Builder clearParent()
```

Required. Location to make a regional call.

Format: `projects/{project-number-or-id}/locations/{location-id}`.

The `global` location is not supported for batch translation.

Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID\_ARGUMENT (400) error is returned.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### clearSourceLanguageCode()

```
public BatchTranslateDocumentRequest.Builder clearSourceLanguageCode()
```

Required. The BCP-47 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages).

`string source_language_code = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### clearTargetLanguageCodes()

```
public BatchTranslateDocumentRequest.Builder clearTargetLanguageCodes()
```

Required. The BCP-47 language code to use for translation of the input document. Specify up to 10 language codes here.

`repeated string target_language_codes = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### clone()

```
public BatchTranslateDocumentRequest.Builder clone()
```

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### containsFormatConversions(String key)

```
public boolean containsFormatConversions(String key)
```

Optional. File format conversion map to be applied to all input files. Map's key is the original mime\_type. Map's value is the target mime\_type of translated documents.

Supported file format conversion includes:

-   `application/pdf` to `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
    
    If nothing specified, output files will be in the same format as the original file.
    

`map<string, string> format_conversions = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### containsGlossaries(String key)

```
public boolean containsGlossaries(String key)
```

Optional. Glossaries to be applied. It's keyed by target language code.

`map<string, .google.cloud.translation.v3beta1.TranslateTextGlossaryConfig> glossaries = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### containsModels(String key)

```
public boolean containsModels(String key)
```

Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model.

The value format depends on model type:

-   AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
    
-   General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
    

If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.

`map<string, string> models = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getCustomizedAttribution()

```
public String getCustomizedAttribution()
```

Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in [https://cloud.google.com/translate/attribution#attribution\_and\_logos](https://cloud.google.com/translate/attribution#attribution_and_logos)

`string customized_attribution = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The customizedAttribution.

### getCustomizedAttributionBytes()

```
public ByteString getCustomizedAttributionBytes()
```

Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in [https://cloud.google.com/translate/attribution#attribution\_and\_logos](https://cloud.google.com/translate/attribution#attribution_and_logos)

`string customized_attribution = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for customizedAttribution.

### getDefaultInstanceForType()

```
public BatchTranslateDocumentRequest getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest)`

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

### getEnableRotationCorrection()

```
public boolean getEnableRotationCorrection()
```

Optional. If true, enable auto rotation correction in DVS.

`bool enable_rotation_correction = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enableRotationCorrection.

### getEnableShadowRemovalNativePdf()

```
public boolean getEnableShadowRemovalNativePdf()
```

Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is\_translate\_native\_pdf\_only: false && pdf\_native\_only: false

`bool enable_shadow_removal_native_pdf = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enableShadowRemovalNativePdf.

### getFormatConversions() (deprecated)

```
public Map<String,String> getFormatConversions()
```

Use [#getFormatConversionsMap()](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder#com_google_cloud_translate_v3beta1_BatchTranslateDocumentRequest_Builder_getFormatConversionsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getFormatConversionsCount()

```
public int getFormatConversionsCount()
```

Optional. File format conversion map to be applied to all input files. Map's key is the original mime\_type. Map's value is the target mime\_type of translated documents.

Supported file format conversion includes:

-   `application/pdf` to `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
    
    If nothing specified, output files will be in the same format as the original file.
    

`map<string, string> format_conversions = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getFormatConversionsMap()

```
public Map<String,String> getFormatConversionsMap()
```

Optional. File format conversion map to be applied to all input files. Map's key is the original mime\_type. Map's value is the target mime\_type of translated documents.

Supported file format conversion includes:

-   `application/pdf` to `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
    
    If nothing specified, output files will be in the same format as the original file.
    

`map<string, string> format_conversions = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getFormatConversionsOrDefault(String key, String defaultValue)

```
public String getFormatConversionsOrDefault(String key, String defaultValue)
```

Optional. File format conversion map to be applied to all input files. Map's key is the original mime\_type. Map's value is the target mime\_type of translated documents.

Supported file format conversion includes:

-   `application/pdf` to `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
    
    If nothing specified, output files will be in the same format as the original file.
    

`map<string, string> format_conversions = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getFormatConversionsOrThrow(String key)

```
public String getFormatConversionsOrThrow(String key)
```

Optional. File format conversion map to be applied to all input files. Map's key is the original mime\_type. Map's value is the target mime\_type of translated documents.

Supported file format conversion includes:

-   `application/pdf` to `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
    
    If nothing specified, output files will be in the same format as the original file.
    

`map<string, string> format_conversions = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getGlossaries() (deprecated)

```
public Map<String,TranslateTextGlossaryConfig> getGlossaries()
```

Use [#getGlossariesMap()](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder#com_google_cloud_translate_v3beta1_BatchTranslateDocumentRequest_Builder_getGlossariesMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[TranslateTextGlossaryConfig](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.TranslateTextGlossaryConfig)>`

### getGlossariesCount()

```
public int getGlossariesCount()
```

Optional. Glossaries to be applied. It's keyed by target language code.

`map<string, .google.cloud.translation.v3beta1.TranslateTextGlossaryConfig> glossaries = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getGlossariesMap()

```
public Map<String,TranslateTextGlossaryConfig> getGlossariesMap()
```

Optional. Glossaries to be applied. It's keyed by target language code.

`map<string, .google.cloud.translation.v3beta1.TranslateTextGlossaryConfig> glossaries = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[TranslateTextGlossaryConfig](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.TranslateTextGlossaryConfig)>`

### getGlossariesOrDefault(String key, TranslateTextGlossaryConfig defaultValue)

```
public TranslateTextGlossaryConfig getGlossariesOrDefault(String key, TranslateTextGlossaryConfig defaultValue)
```

Optional. Glossaries to be applied. It's keyed by target language code.

`map<string, .google.cloud.translation.v3beta1.TranslateTextGlossaryConfig> glossaries = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[TranslateTextGlossaryConfig](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.TranslateTextGlossaryConfig)`  

**Returns**

**Type**

**Description**

`[TranslateTextGlossaryConfig](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.TranslateTextGlossaryConfig)`

### getGlossariesOrThrow(String key)

```
public TranslateTextGlossaryConfig getGlossariesOrThrow(String key)
```

Optional. Glossaries to be applied. It's keyed by target language code.

`map<string, .google.cloud.translation.v3beta1.TranslateTextGlossaryConfig> glossaries = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[TranslateTextGlossaryConfig](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.TranslateTextGlossaryConfig)`

### getInputConfigs(int index)

```
public BatchDocumentInputConfig getInputConfigs(int index)
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[BatchDocumentInputConfig](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentInputConfig)`

### getInputConfigsBuilder(int index)

```
public BatchDocumentInputConfig.Builder getInputConfigsBuilder(int index)
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[BatchDocumentInputConfig.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentInputConfig.Builder)`

### getInputConfigsBuilderList()

```
public List<BatchDocumentInputConfig.Builder> getInputConfigsBuilderList()
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentInputConfig.Builder)>`

### getInputConfigsCount()

```
public int getInputConfigsCount()
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getInputConfigsList()

```
public List<BatchDocumentInputConfig> getInputConfigsList()
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[BatchDocumentInputConfig](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentInputConfig)>`

### getInputConfigsOrBuilder(int index)

```
public BatchDocumentInputConfigOrBuilder getInputConfigsOrBuilder(int index)
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[BatchDocumentInputConfigOrBuilder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentInputConfigOrBuilder)`

### getInputConfigsOrBuilderList()

```
public List<? extends BatchDocumentInputConfigOrBuilder> getInputConfigsOrBuilderList()
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.translate.v3beta1.BatchDocumentInputConfigOrBuilder>`

### getModels() (deprecated)

```
public Map<String,String> getModels()
```

Use [#getModelsMap()](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder#com_google_cloud_translate_v3beta1_BatchTranslateDocumentRequest_Builder_getModelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getModelsCount()

```
public int getModelsCount()
```

Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model.

The value format depends on model type:

-   AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
    
-   General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
    

If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.

`map<string, string> models = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getModelsMap()

```
public Map<String,String> getModelsMap()
```

Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model.

The value format depends on model type:

-   AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
    
-   General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
    

If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.

`map<string, string> models = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getModelsOrDefault(String key, String defaultValue)

```
public String getModelsOrDefault(String key, String defaultValue)
```

Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model.

The value format depends on model type:

-   AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
    
-   General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
    

If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.

`map<string, string> models = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getModelsOrThrow(String key)

```
public String getModelsOrThrow(String key)
```

Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model.

The value format depends on model type:

-   AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
    
-   General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
    

If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.

`map<string, string> models = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getMutableFormatConversions() (deprecated)

```
public Map<String,String> getMutableFormatConversions()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getMutableGlossaries() (deprecated)

```
public Map<String,TranslateTextGlossaryConfig> getMutableGlossaries()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[TranslateTextGlossaryConfig](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.TranslateTextGlossaryConfig)>`

### getMutableModels() (deprecated)

```
public Map<String,String> getMutableModels()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getOutputConfig()

```
public BatchDocumentOutputConfig getOutputConfig()
```

Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.

`.google.cloud.translation.v3beta1.BatchDocumentOutputConfig output_config = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[BatchDocumentOutputConfig](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentOutputConfig)`

The outputConfig.

### getOutputConfigBuilder()

```
public BatchDocumentOutputConfig.Builder getOutputConfigBuilder()
```

Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.

`.google.cloud.translation.v3beta1.BatchDocumentOutputConfig output_config = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[BatchDocumentOutputConfig.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentOutputConfig.Builder)`

### getOutputConfigOrBuilder()

```
public BatchDocumentOutputConfigOrBuilder getOutputConfigOrBuilder()
```

Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.

`.google.cloud.translation.v3beta1.BatchDocumentOutputConfig output_config = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[BatchDocumentOutputConfigOrBuilder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentOutputConfigOrBuilder)`

### getParent()

```
public String getParent()
```

Required. Location to make a regional call.

Format: `projects/{project-number-or-id}/locations/{location-id}`.

The `global` location is not supported for batch translation.

Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID\_ARGUMENT (400) error is returned.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parent.

### getParentBytes()

```
public ByteString getParentBytes()
```

Required. Location to make a regional call.

Format: `projects/{project-number-or-id}/locations/{location-id}`.

The `global` location is not supported for batch translation.

Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID\_ARGUMENT (400) error is returned.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### getSourceLanguageCode()

```
public String getSourceLanguageCode()
```

Required. The BCP-47 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages).

`string source_language_code = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The sourceLanguageCode.

### getSourceLanguageCodeBytes()

```
public ByteString getSourceLanguageCodeBytes()
```

Required. The BCP-47 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages).

`string source_language_code = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for sourceLanguageCode.

### getTargetLanguageCodes(int index)

```
public String getTargetLanguageCodes(int index)
```

Required. The BCP-47 language code to use for translation of the input document. Specify up to 10 language codes here.

`repeated string target_language_codes = 3 [(.google.api.field_behavior) = REQUIRED];`

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

The targetLanguageCodes at the given index.

### getTargetLanguageCodesBytes(int index)

```
public ByteString getTargetLanguageCodesBytes(int index)
```

Required. The BCP-47 language code to use for translation of the input document. Specify up to 10 language codes here.

`repeated string target_language_codes = 3 [(.google.api.field_behavior) = REQUIRED];`

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

The bytes of the targetLanguageCodes at the given index.

### getTargetLanguageCodesCount()

```
public int getTargetLanguageCodesCount()
```

Required. The BCP-47 language code to use for translation of the input document. Specify up to 10 language codes here.

`repeated string target_language_codes = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of targetLanguageCodes.

### getTargetLanguageCodesList()

```
public ProtocolStringList getTargetLanguageCodesList()
```

Required. The BCP-47 language code to use for translation of the input document. Specify up to 10 language codes here.

`repeated string target_language_codes = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)`

A list containing the targetLanguageCodes.

### hasOutputConfig()

```
public boolean hasOutputConfig()
```

Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.

`.google.cloud.translation.v3beta1.BatchDocumentOutputConfig output_config = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the outputConfig field is set.

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

### mergeFrom(BatchTranslateDocumentRequest other)

```
public BatchTranslateDocumentRequest.Builder mergeFrom(BatchTranslateDocumentRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[BatchTranslateDocumentRequest](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public BatchTranslateDocumentRequest.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public BatchTranslateDocumentRequest.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeOutputConfig(BatchDocumentOutputConfig value)

```
public BatchTranslateDocumentRequest.Builder mergeOutputConfig(BatchDocumentOutputConfig value)
```

Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.

`.google.cloud.translation.v3beta1.BatchDocumentOutputConfig output_config = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[BatchDocumentOutputConfig](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentOutputConfig)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final BatchTranslateDocumentRequest.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### putAllFormatConversions(Map<String,String> values)

```
public BatchTranslateDocumentRequest.Builder putAllFormatConversions(Map<String,String> values)
```

Optional. File format conversion map to be applied to all input files. Map's key is the original mime\_type. Map's value is the target mime\_type of translated documents.

Supported file format conversion includes:

-   `application/pdf` to `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
    
    If nothing specified, output files will be in the same format as the original file.
    

`map<string, string> format_conversions = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`values`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### putAllGlossaries(Map<String,TranslateTextGlossaryConfig> values)

```
public BatchTranslateDocumentRequest.Builder putAllGlossaries(Map<String,TranslateTextGlossaryConfig> values)
```

Optional. Glossaries to be applied. It's keyed by target language code.

`map<string, .google.cloud.translation.v3beta1.TranslateTextGlossaryConfig> glossaries = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`values`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[TranslateTextGlossaryConfig](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.TranslateTextGlossaryConfig)>`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### putAllModels(Map<String,String> values)

```
public BatchTranslateDocumentRequest.Builder putAllModels(Map<String,String> values)
```

Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model.

The value format depends on model type:

-   AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
    
-   General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
    

If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.

`map<string, string> models = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`values`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### putFormatConversions(String key, String value)

```
public BatchTranslateDocumentRequest.Builder putFormatConversions(String key, String value)
```

Optional. File format conversion map to be applied to all input files. Map's key is the original mime\_type. Map's value is the target mime\_type of translated documents.

Supported file format conversion includes:

-   `application/pdf` to `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
    
    If nothing specified, output files will be in the same format as the original file.
    

`map<string, string> format_conversions = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### putGlossaries(String key, TranslateTextGlossaryConfig value)

```
public BatchTranslateDocumentRequest.Builder putGlossaries(String key, TranslateTextGlossaryConfig value)
```

Optional. Glossaries to be applied. It's keyed by target language code.

`map<string, .google.cloud.translation.v3beta1.TranslateTextGlossaryConfig> glossaries = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`value`

`[TranslateTextGlossaryConfig](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.TranslateTextGlossaryConfig)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### putGlossariesBuilderIfAbsent(String key)

```
public TranslateTextGlossaryConfig.Builder putGlossariesBuilderIfAbsent(String key)
```

Optional. Glossaries to be applied. It's keyed by target language code.

`map<string, .google.cloud.translation.v3beta1.TranslateTextGlossaryConfig> glossaries = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[TranslateTextGlossaryConfig.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.TranslateTextGlossaryConfig.Builder)`

### putModels(String key, String value)

```
public BatchTranslateDocumentRequest.Builder putModels(String key, String value)
```

Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model.

The value format depends on model type:

-   AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
    
-   General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
    

If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.

`map<string, string> models = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### removeFormatConversions(String key)

```
public BatchTranslateDocumentRequest.Builder removeFormatConversions(String key)
```

Optional. File format conversion map to be applied to all input files. Map's key is the original mime\_type. Map's value is the target mime\_type of translated documents.

Supported file format conversion includes:

-   `application/pdf` to `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
    
    If nothing specified, output files will be in the same format as the original file.
    

`map<string, string> format_conversions = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### removeGlossaries(String key)

```
public BatchTranslateDocumentRequest.Builder removeGlossaries(String key)
```

Optional. Glossaries to be applied. It's keyed by target language code.

`map<string, .google.cloud.translation.v3beta1.TranslateTextGlossaryConfig> glossaries = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### removeInputConfigs(int index)

```
public BatchTranslateDocumentRequest.Builder removeInputConfigs(int index)
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### removeModels(String key)

```
public BatchTranslateDocumentRequest.Builder removeModels(String key)
```

Optional. The models to use for translation. Map's key is target language code. Map's value is the model name. Value can be a built-in general model, or an AutoML Translation model.

The value format depends on model type:

-   AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
    
-   General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
    

If the map is empty or a specific model is not requested for a language pair, then default google model (nmt) is used.

`map<string, string> models = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### setCustomizedAttribution(String value)

```
public BatchTranslateDocumentRequest.Builder setCustomizedAttribution(String value)
```

Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in [https://cloud.google.com/translate/attribution#attribution\_and\_logos](https://cloud.google.com/translate/attribution#attribution_and_logos)

`string customized_attribution = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The customizedAttribution to set.

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### setCustomizedAttributionBytes(ByteString value)

```
public BatchTranslateDocumentRequest.Builder setCustomizedAttributionBytes(ByteString value)
```

Optional. This flag is to support user customized attribution. If not provided, the default is `Machine Translated by Google`. Customized attribution should follow rules in [https://cloud.google.com/translate/attribution#attribution\_and\_logos](https://cloud.google.com/translate/attribution#attribution_and_logos)

`string customized_attribution = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for customizedAttribution to set.

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### setEnableRotationCorrection(boolean value)

```
public BatchTranslateDocumentRequest.Builder setEnableRotationCorrection(boolean value)
```

Optional. If true, enable auto rotation correction in DVS.

`bool enable_rotation_correction = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enableRotationCorrection to set.

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### setEnableShadowRemovalNativePdf(boolean value)

```
public BatchTranslateDocumentRequest.Builder setEnableShadowRemovalNativePdf(boolean value)
```

Optional. If true, use the text removal server to remove the shadow text on background image for native pdf translation. Shadow removal feature can only be enabled when is\_translate\_native\_pdf\_only: false && pdf\_native\_only: false

`bool enable_shadow_removal_native_pdf = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enableShadowRemovalNativePdf to set.

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public BatchTranslateDocumentRequest.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setInputConfigs(int index, BatchDocumentInputConfig value)

```
public BatchTranslateDocumentRequest.Builder setInputConfigs(int index, BatchDocumentInputConfig value)
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[BatchDocumentInputConfig](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentInputConfig)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### setInputConfigs(int index, BatchDocumentInputConfig.Builder builderForValue)

```
public BatchTranslateDocumentRequest.Builder setInputConfigs(int index, BatchDocumentInputConfig.Builder builderForValue)
```

Required. Input configurations. The total number of files matched should be <= 100. The total content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.

`repeated .google.cloud.translation.v3beta1.BatchDocumentInputConfig input_configs = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[BatchDocumentInputConfig.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentInputConfig.Builder)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### setOutputConfig(BatchDocumentOutputConfig value)

```
public BatchTranslateDocumentRequest.Builder setOutputConfig(BatchDocumentOutputConfig value)
```

Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.

`.google.cloud.translation.v3beta1.BatchDocumentOutputConfig output_config = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[BatchDocumentOutputConfig](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentOutputConfig)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### setOutputConfig(BatchDocumentOutputConfig.Builder builderForValue)

```
public BatchTranslateDocumentRequest.Builder setOutputConfig(BatchDocumentOutputConfig.Builder builderForValue)
```

Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't generate output for duplicate inputs.

`.google.cloud.translation.v3beta1.BatchDocumentOutputConfig output_config = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[BatchDocumentOutputConfig.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchDocumentOutputConfig.Builder)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

### setParent(String value)

```
public BatchTranslateDocumentRequest.Builder setParent(String value)
```

Required. Location to make a regional call.

Format: `projects/{project-number-or-id}/locations/{location-id}`.

The `global` location is not supported for batch translation.

Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID\_ARGUMENT (400) error is returned.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The parent to set.

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### setParentBytes(ByteString value)

```
public BatchTranslateDocumentRequest.Builder setParentBytes(ByteString value)
```

Required. Location to make a regional call.

Format: `projects/{project-number-or-id}/locations/{location-id}`.

The `global` location is not supported for batch translation.

Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID\_ARGUMENT (400) error is returned.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for parent to set.

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public BatchTranslateDocumentRequest.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setSourceLanguageCode(String value)

```
public BatchTranslateDocumentRequest.Builder setSourceLanguageCode(String value)
```

Required. The BCP-47 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages).

`string source_language_code = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The sourceLanguageCode to set.

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### setSourceLanguageCodeBytes(ByteString value)

```
public BatchTranslateDocumentRequest.Builder setSourceLanguageCodeBytes(ByteString value)
```

Required. The BCP-47 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported language codes are listed in [Language Support](https://cloud.google.com/translate/docs/languages).

`string source_language_code = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for sourceLanguageCode to set.

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### setTargetLanguageCodes(int index, String value)

```
public BatchTranslateDocumentRequest.Builder setTargetLanguageCodes(int index, String value)
```

Required. The BCP-47 language code to use for translation of the input document. Specify up to 10 language codes here.

`repeated string target_language_codes = 3 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The targetLanguageCodes to set.

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

This builder for chaining.

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final BatchTranslateDocumentRequest.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[BatchTranslateDocumentRequest.Builder](/java/docs/reference/google-cloud-translate/2.35.0/com.google.cloud.translate.v3beta1.BatchTranslateDocumentRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
