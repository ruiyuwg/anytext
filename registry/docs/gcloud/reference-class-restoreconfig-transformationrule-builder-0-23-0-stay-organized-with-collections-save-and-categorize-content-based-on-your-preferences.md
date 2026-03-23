-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class RestoreConfig.TransformationRule.Builder (0.23.0) Stay organized with collections Save and categorize content based on your preferences.

0.86.0 (latest) 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.69.0 0.67.0 0.66.0 0.63.0 0.62.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.6 0.1.0

```
public static final class RestoreConfig.TransformationRule.Builder extends GeneratedMessageV3.Builder<RestoreConfig.TransformationRule.Builder> implements RestoreConfig.TransformationRuleOrBuilder
```

A transformation rule to be applied against Kubernetes resources as they are selected for restoration from a Backup. A rule contains both filtering logic (which resources are subject to transform) and transformation logic.

Protobuf type `google.cloud.gkebackup.v1.RestoreConfig.TransformationRule`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> RestoreConfig.TransformationRule.Builder

## Implements

[RestoreConfig.TransformationRuleOrBuilder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleOrBuilder)

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

### addAllFieldActions(Iterable<? extends RestoreConfig.TransformationRuleAction> values)

```
public RestoreConfig.TransformationRule.Builder addAllFieldActions(Iterable<? extends RestoreConfig.TransformationRuleAction> values)
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction>`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

### addFieldActions(RestoreConfig.TransformationRuleAction value)

```
public RestoreConfig.TransformationRule.Builder addFieldActions(RestoreConfig.TransformationRuleAction value)
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[RestoreConfig.TransformationRuleAction](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

### addFieldActions(RestoreConfig.TransformationRuleAction.Builder builderForValue)

```
public RestoreConfig.TransformationRule.Builder addFieldActions(RestoreConfig.TransformationRuleAction.Builder builderForValue)
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[RestoreConfig.TransformationRuleAction.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction.Builder)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

### addFieldActions(int index, RestoreConfig.TransformationRuleAction value)

```
public RestoreConfig.TransformationRule.Builder addFieldActions(int index, RestoreConfig.TransformationRuleAction value)
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[RestoreConfig.TransformationRuleAction](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

### addFieldActions(int index, RestoreConfig.TransformationRuleAction.Builder builderForValue)

```
public RestoreConfig.TransformationRule.Builder addFieldActions(int index, RestoreConfig.TransformationRuleAction.Builder builderForValue)
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[RestoreConfig.TransformationRuleAction.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction.Builder)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

### addFieldActionsBuilder()

```
public RestoreConfig.TransformationRuleAction.Builder addFieldActionsBuilder()
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRuleAction.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction.Builder)`

### addFieldActionsBuilder(int index)

```
public RestoreConfig.TransformationRuleAction.Builder addFieldActionsBuilder(int index)
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRuleAction.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction.Builder)`

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public RestoreConfig.TransformationRule.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public RestoreConfig.TransformationRule build()
```

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule)`

### buildPartial()

```
public RestoreConfig.TransformationRule buildPartial()
```

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule)`

### clear()

```
public RestoreConfig.TransformationRule.Builder clear()
```

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearDescription()

```
public RestoreConfig.TransformationRule.Builder clearDescription()
```

The description is a user specified string description of the transformation rule.

`string description = 3;`

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public RestoreConfig.TransformationRule.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearFieldActions()

```
public RestoreConfig.TransformationRule.Builder clearFieldActions()
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public RestoreConfig.TransformationRule.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearResourceFilter()

```
public RestoreConfig.TransformationRule.Builder clearResourceFilter()
```

This field is used to specify a set of fields that should be used to determine which resources in backup should be acted upon by the supplied transformation rule actions, and this will ensure that only specific resources are affected by transformation rule actions.

`.google.cloud.gkebackup.v1.RestoreConfig.ResourceFilter resource_filter = 2;`

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

### clone()

```
public RestoreConfig.TransformationRule.Builder clone()
```

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getDefaultInstanceForType()

```
public RestoreConfig.TransformationRule getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule)`

### getDescription()

```
public String getDescription()
```

The description is a user specified string description of the transformation rule.

`string description = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public ByteString getDescriptionBytes()
```

The description is a user specified string description of the transformation rule.

`string description = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

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

### getFieldActions(int index)

```
public RestoreConfig.TransformationRuleAction getFieldActions(int index)
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRuleAction](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction)`

### getFieldActionsBuilder(int index)

```
public RestoreConfig.TransformationRuleAction.Builder getFieldActionsBuilder(int index)
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRuleAction.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction.Builder)`

### getFieldActionsBuilderList()

```
public List<RestoreConfig.TransformationRuleAction.Builder> getFieldActionsBuilderList()
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction.Builder)>`

### getFieldActionsCount()

```
public int getFieldActionsCount()
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getFieldActionsList()

```
public List<RestoreConfig.TransformationRuleAction> getFieldActionsList()
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[TransformationRuleAction](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction)>`

### getFieldActionsOrBuilder(int index)

```
public RestoreConfig.TransformationRuleActionOrBuilder getFieldActionsOrBuilder(int index)
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRuleActionOrBuilder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleActionOrBuilder)`

### getFieldActionsOrBuilderList()

```
public List<? extends RestoreConfig.TransformationRuleActionOrBuilder> getFieldActionsOrBuilderList()
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleActionOrBuilder>`

### getResourceFilter()

```
public RestoreConfig.ResourceFilter getResourceFilter()
```

This field is used to specify a set of fields that should be used to determine which resources in backup should be acted upon by the supplied transformation rule actions, and this will ensure that only specific resources are affected by transformation rule actions.

`.google.cloud.gkebackup.v1.RestoreConfig.ResourceFilter resource_filter = 2;`

**Returns**

**Type**

**Description**

`[RestoreConfig.ResourceFilter](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.ResourceFilter)`

The resourceFilter.

### getResourceFilterBuilder()

```
public RestoreConfig.ResourceFilter.Builder getResourceFilterBuilder()
```

This field is used to specify a set of fields that should be used to determine which resources in backup should be acted upon by the supplied transformation rule actions, and this will ensure that only specific resources are affected by transformation rule actions.

`.google.cloud.gkebackup.v1.RestoreConfig.ResourceFilter resource_filter = 2;`

**Returns**

**Type**

**Description**

`[RestoreConfig.ResourceFilter.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.ResourceFilter.Builder)`

### getResourceFilterOrBuilder()

```
public RestoreConfig.ResourceFilterOrBuilder getResourceFilterOrBuilder()
```

This field is used to specify a set of fields that should be used to determine which resources in backup should be acted upon by the supplied transformation rule actions, and this will ensure that only specific resources are affected by transformation rule actions.

`.google.cloud.gkebackup.v1.RestoreConfig.ResourceFilter resource_filter = 2;`

**Returns**

**Type**

**Description**

`[RestoreConfig.ResourceFilterOrBuilder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.ResourceFilterOrBuilder)`

### hasResourceFilter()

```
public boolean hasResourceFilter()
```

This field is used to specify a set of fields that should be used to determine which resources in backup should be acted upon by the supplied transformation rule actions, and this will ensure that only specific resources are affected by transformation rule actions.

`.google.cloud.gkebackup.v1.RestoreConfig.ResourceFilter resource_filter = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the resourceFilter field is set.

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

### mergeFrom(RestoreConfig.TransformationRule other)

```
public RestoreConfig.TransformationRule.Builder mergeFrom(RestoreConfig.TransformationRule other)
```

**Parameter**

**Name**

**Description**

`other`

`[RestoreConfig.TransformationRule](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public RestoreConfig.TransformationRule.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public RestoreConfig.TransformationRule.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeResourceFilter(RestoreConfig.ResourceFilter value)

```
public RestoreConfig.TransformationRule.Builder mergeResourceFilter(RestoreConfig.ResourceFilter value)
```

This field is used to specify a set of fields that should be used to determine which resources in backup should be acted upon by the supplied transformation rule actions, and this will ensure that only specific resources are affected by transformation rule actions.

`.google.cloud.gkebackup.v1.RestoreConfig.ResourceFilter resource_filter = 2;`

**Parameter**

**Name**

**Description**

`value`

`[RestoreConfig.ResourceFilter](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.ResourceFilter)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final RestoreConfig.TransformationRule.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### removeFieldActions(int index)

```
public RestoreConfig.TransformationRule.Builder removeFieldActions(int index)
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

### setDescription(String value)

```
public RestoreConfig.TransformationRule.Builder setDescription(String value)
```

The description is a user specified string description of the transformation rule.

`string description = 3;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The description to set.

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

This builder for chaining.

### setDescriptionBytes(ByteString value)

```
public RestoreConfig.TransformationRule.Builder setDescriptionBytes(ByteString value)
```

The description is a user specified string description of the transformation rule.

`string description = 3;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for description to set.

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public RestoreConfig.TransformationRule.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setFieldActions(int index, RestoreConfig.TransformationRuleAction value)

```
public RestoreConfig.TransformationRule.Builder setFieldActions(int index, RestoreConfig.TransformationRuleAction value)
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[RestoreConfig.TransformationRuleAction](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

### setFieldActions(int index, RestoreConfig.TransformationRuleAction.Builder builderForValue)

```
public RestoreConfig.TransformationRule.Builder setFieldActions(int index, RestoreConfig.TransformationRuleAction.Builder builderForValue)
```

Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation.

`repeated .google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction field_actions = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[RestoreConfig.TransformationRuleAction.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction.Builder)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public RestoreConfig.TransformationRule.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setResourceFilter(RestoreConfig.ResourceFilter value)

```
public RestoreConfig.TransformationRule.Builder setResourceFilter(RestoreConfig.ResourceFilter value)
```

This field is used to specify a set of fields that should be used to determine which resources in backup should be acted upon by the supplied transformation rule actions, and this will ensure that only specific resources are affected by transformation rule actions.

`.google.cloud.gkebackup.v1.RestoreConfig.ResourceFilter resource_filter = 2;`

**Parameter**

**Name**

**Description**

`value`

`[RestoreConfig.ResourceFilter](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.ResourceFilter)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

### setResourceFilter(RestoreConfig.ResourceFilter.Builder builderForValue)

```
public RestoreConfig.TransformationRule.Builder setResourceFilter(RestoreConfig.ResourceFilter.Builder builderForValue)
```

This field is used to specify a set of fields that should be used to determine which resources in backup should be acted upon by the supplied transformation rule actions, and this will ensure that only specific resources are affected by transformation rule actions.

`.google.cloud.gkebackup.v1.RestoreConfig.ResourceFilter resource_filter = 2;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[RestoreConfig.ResourceFilter.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.ResourceFilter.Builder)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final RestoreConfig.TransformationRule.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[RestoreConfig.TransformationRule.Builder](/java/docs/reference/google-cloud-gke-backup/0.23.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
