-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class BatchUpdateJobsRequest.Builder (2.50.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.6 2.2.9

```
public static final class BatchUpdateJobsRequest.Builder extends GeneratedMessageV3.Builder<BatchUpdateJobsRequest.Builder> implements BatchUpdateJobsRequestOrBuilder
```

Request to update a batch of jobs.

Protobuf type `google.cloud.talent.v4.BatchUpdateJobsRequest`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> BatchUpdateJobsRequest.Builder

## Implements

[BatchUpdateJobsRequestOrBuilder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequestOrBuilder)

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

### addAllJobs(Iterable<? extends Job> values)

```
public BatchUpdateJobsRequest.Builder addAllJobs(Iterable<? extends Job> values)
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.talent.v4.Job>`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

### addJobs(Job value)

```
public BatchUpdateJobsRequest.Builder addJobs(Job value)
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[Job](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.Job)`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

### addJobs(Job.Builder builderForValue)

```
public BatchUpdateJobsRequest.Builder addJobs(Job.Builder builderForValue)
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Job.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.Job.Builder)`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

### addJobs(int index, Job value)

```
public BatchUpdateJobsRequest.Builder addJobs(int index, Job value)
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Job](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.Job)`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

### addJobs(int index, Job.Builder builderForValue)

```
public BatchUpdateJobsRequest.Builder addJobs(int index, Job.Builder builderForValue)
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Job.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.Job.Builder)`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

### addJobsBuilder()

```
public Job.Builder addJobsBuilder()
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Job.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.Job.Builder)`

### addJobsBuilder(int index)

```
public Job.Builder addJobsBuilder(int index)
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Job.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.Job.Builder)`

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public BatchUpdateJobsRequest.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public BatchUpdateJobsRequest build()
```

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest)`

### buildPartial()

```
public BatchUpdateJobsRequest buildPartial()
```

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest)`

### clear()

```
public BatchUpdateJobsRequest.Builder clear()
```

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearField(Descriptors.FieldDescriptor field)

```
public BatchUpdateJobsRequest.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearJobs()

```
public BatchUpdateJobsRequest.Builder clearJobs()
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public BatchUpdateJobsRequest.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearParent()

```
public BatchUpdateJobsRequest.Builder clearParent()
```

Required. The resource name of the tenant under which the job is created.

The format is "projects/{project\_id}/tenants/{tenant\_id}". For example, "projects/foo/tenants/bar".

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

This builder for chaining.

### clearUpdateMask()

```
public BatchUpdateJobsRequest.Builder clearUpdateMask()
```

Strongly recommended for the best service experience. Be aware that it will also increase latency when checking the status of a batch operation.

If update\_mask is provided, only the specified fields in Job are updated. Otherwise all the fields are updated.

A field mask to restrict the fields that are updated. Only top level fields of Job are supported.

If update\_mask is provided, The Job inside [JobResult](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4beta1.JobOperationResult.JobResult) will only contains fields that is updated, plus the Id of the Job. Otherwise, Job will include all fields, which can yield a very large response.

`.google.protobuf.FieldMask update_mask = 3;`

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

### clone()

```
public BatchUpdateJobsRequest.Builder clone()
```

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getDefaultInstanceForType()

```
public BatchUpdateJobsRequest getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest)`

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

### getJobs(int index)

```
public Job getJobs(int index)
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Job](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.Job)`

### getJobsBuilder(int index)

```
public Job.Builder getJobsBuilder(int index)
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Job.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.Job.Builder)`

### getJobsBuilderList()

```
public List<Job.Builder> getJobsBuilderList()
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.Job.Builder)>`

### getJobsCount()

```
public int getJobsCount()
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getJobsList()

```
public List<Job> getJobsList()
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Job](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.Job)>`

### getJobsOrBuilder(int index)

```
public JobOrBuilder getJobsOrBuilder(int index)
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[JobOrBuilder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.JobOrBuilder)`

### getJobsOrBuilderList()

```
public List<? extends JobOrBuilder> getJobsOrBuilderList()
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.talent.v4.JobOrBuilder>`

### getParent()

```
public String getParent()
```

Required. The resource name of the tenant under which the job is created.

The format is "projects/{project\_id}/tenants/{tenant\_id}". For example, "projects/foo/tenants/bar".

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

Required. The resource name of the tenant under which the job is created.

The format is "projects/{project\_id}/tenants/{tenant\_id}". For example, "projects/foo/tenants/bar".

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### getUpdateMask()

```
public FieldMask getUpdateMask()
```

Strongly recommended for the best service experience. Be aware that it will also increase latency when checking the status of a batch operation.

If update\_mask is provided, only the specified fields in Job are updated. Otherwise all the fields are updated.

A field mask to restrict the fields that are updated. Only top level fields of Job are supported.

If update\_mask is provided, The Job inside [JobResult](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4beta1.JobOperationResult.JobResult) will only contains fields that is updated, plus the Id of the Job. Otherwise, Job will include all fields, which can yield a very large response.

`.google.protobuf.FieldMask update_mask = 3;`

**Returns**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`

The updateMask.

### getUpdateMaskBuilder()

```
public FieldMask.Builder getUpdateMaskBuilder()
```

Strongly recommended for the best service experience. Be aware that it will also increase latency when checking the status of a batch operation.

If update\_mask is provided, only the specified fields in Job are updated. Otherwise all the fields are updated.

A field mask to restrict the fields that are updated. Only top level fields of Job are supported.

If update\_mask is provided, The Job inside [JobResult](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4beta1.JobOperationResult.JobResult) will only contains fields that is updated, plus the Id of the Job. Otherwise, Job will include all fields, which can yield a very large response.

`.google.protobuf.FieldMask update_mask = 3;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.Builder.html)`

### getUpdateMaskOrBuilder()

```
public FieldMaskOrBuilder getUpdateMaskOrBuilder()
```

Strongly recommended for the best service experience. Be aware that it will also increase latency when checking the status of a batch operation.

If update\_mask is provided, only the specified fields in Job are updated. Otherwise all the fields are updated.

A field mask to restrict the fields that are updated. Only top level fields of Job are supported.

If update\_mask is provided, The Job inside [JobResult](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4beta1.JobOperationResult.JobResult) will only contains fields that is updated, plus the Id of the Job. Otherwise, Job will include all fields, which can yield a very large response.

`.google.protobuf.FieldMask update_mask = 3;`

**Returns**

**Type**

**Description**

`[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)`

### hasUpdateMask()

```
public boolean hasUpdateMask()
```

Strongly recommended for the best service experience. Be aware that it will also increase latency when checking the status of a batch operation.

If update\_mask is provided, only the specified fields in Job are updated. Otherwise all the fields are updated.

A field mask to restrict the fields that are updated. Only top level fields of Job are supported.

If update\_mask is provided, The Job inside [JobResult](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4beta1.JobOperationResult.JobResult) will only contains fields that is updated, plus the Id of the Job. Otherwise, Job will include all fields, which can yield a very large response.

`.google.protobuf.FieldMask update_mask = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateMask field is set.

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

### mergeFrom(BatchUpdateJobsRequest other)

```
public BatchUpdateJobsRequest.Builder mergeFrom(BatchUpdateJobsRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[BatchUpdateJobsRequest](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest)`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public BatchUpdateJobsRequest.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public BatchUpdateJobsRequest.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final BatchUpdateJobsRequest.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### mergeUpdateMask(FieldMask value)

```
public BatchUpdateJobsRequest.Builder mergeUpdateMask(FieldMask value)
```

Strongly recommended for the best service experience. Be aware that it will also increase latency when checking the status of a batch operation.

If update\_mask is provided, only the specified fields in Job are updated. Otherwise all the fields are updated.

A field mask to restrict the fields that are updated. Only top level fields of Job are supported.

If update\_mask is provided, The Job inside [JobResult](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4beta1.JobOperationResult.JobResult) will only contains fields that is updated, plus the Id of the Job. Otherwise, Job will include all fields, which can yield a very large response.

`.google.protobuf.FieldMask update_mask = 3;`

**Parameter**

**Name**

**Description**

`value`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

### removeJobs(int index)

```
public BatchUpdateJobsRequest.Builder removeJobs(int index)
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public BatchUpdateJobsRequest.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setJobs(int index, Job value)

```
public BatchUpdateJobsRequest.Builder setJobs(int index, Job value)
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Job](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.Job)`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

### setJobs(int index, Job.Builder builderForValue)

```
public BatchUpdateJobsRequest.Builder setJobs(int index, Job.Builder builderForValue)
```

Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch.

`repeated .google.cloud.talent.v4.Job jobs = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Job.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.Job.Builder)`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

### setParent(String value)

```
public BatchUpdateJobsRequest.Builder setParent(String value)
```

Required. The resource name of the tenant under which the job is created.

The format is "projects/{project\_id}/tenants/{tenant\_id}". For example, "projects/foo/tenants/bar".

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

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

This builder for chaining.

### setParentBytes(ByteString value)

```
public BatchUpdateJobsRequest.Builder setParentBytes(ByteString value)
```

Required. The resource name of the tenant under which the job is created.

The format is "projects/{project\_id}/tenants/{tenant\_id}". For example, "projects/foo/tenants/bar".

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

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public BatchUpdateJobsRequest.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final BatchUpdateJobsRequest.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setUpdateMask(FieldMask value)

```
public BatchUpdateJobsRequest.Builder setUpdateMask(FieldMask value)
```

Strongly recommended for the best service experience. Be aware that it will also increase latency when checking the status of a batch operation.

If update\_mask is provided, only the specified fields in Job are updated. Otherwise all the fields are updated.

A field mask to restrict the fields that are updated. Only top level fields of Job are supported.

If update\_mask is provided, The Job inside [JobResult](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4beta1.JobOperationResult.JobResult) will only contains fields that is updated, plus the Id of the Job. Otherwise, Job will include all fields, which can yield a very large response.

`.google.protobuf.FieldMask update_mask = 3;`

**Parameter**

**Name**

**Description**

`value`

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

### setUpdateMask(FieldMask.Builder builderForValue)

```
public BatchUpdateJobsRequest.Builder setUpdateMask(FieldMask.Builder builderForValue)
```

Strongly recommended for the best service experience. Be aware that it will also increase latency when checking the status of a batch operation.

If update\_mask is provided, only the specified fields in Job are updated. Otherwise all the fields are updated.

A field mask to restrict the fields that are updated. Only top level fields of Job are supported.

If update\_mask is provided, The Job inside [JobResult](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4beta1.JobOperationResult.JobResult) will only contains fields that is updated, plus the Id of the Job. Otherwise, Job will include all fields, which can yield a very large response.

`.google.protobuf.FieldMask update_mask = 3;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.Builder.html)`  

**Returns**

**Type**

**Description**

`[BatchUpdateJobsRequest.Builder](/java/docs/reference/google-cloud-talent/2.50.0/com.google.cloud.talent.v4.BatchUpdateJobsRequest.Builder)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
