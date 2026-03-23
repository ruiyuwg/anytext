-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Queue.Builder (2.27.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.12 2.2.0 2.1.11

```
public static final class Queue.Builder extends GeneratedMessageV3.Builder<Queue.Builder> implements QueueOrBuilder
```

A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.

Protobuf type `google.cloud.tasks.v2beta3.Queue`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> Queue.Builder

## Implements

[QueueOrBuilder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.QueueOrBuilder)

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

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public Queue.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public Queue build()
```

**Returns**

**Type**

**Description**

`[Queue](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue)`

### buildPartial()

```
public Queue buildPartial()
```

**Returns**

**Type**

**Description**

`[Queue](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue)`

### clear()

```
public Queue.Builder clear()
```

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearAppEngineHttpQueue()

```
public Queue.Builder clearAppEngineHttpQueue()
```

AppEngineHttpQueue settings apply only to App Engine tasks in this queue. Http tasks are not affected by this proto.

`.google.cloud.tasks.v2beta3.AppEngineHttpQueue app_engine_http_queue = 3;`

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### clearField(Descriptors.FieldDescriptor field)

```
public Queue.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearHttpTarget()

```
public Queue.Builder clearHttpTarget()
```

Modifies HTTP target for HTTP tasks.

`.google.cloud.tasks.v2beta3.HttpTarget http_target = 13;`

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### clearName()

```
public Queue.Builder clearName()
```

Caller-specified and required in CreateQueue, after which it becomes output only.

The queue name.

The queue name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

-   `PROJECT_ID` can contain letters (\[A-Za-z\]), numbers (\[0-9\]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
-   `LOCATION_ID` is the canonical ID for the queue's location. The list of available locations can be obtained by calling ListLocations. For more information, see [https://cloud.google.com/about/locations/](https://cloud.google.com/about/locations/).
-   `QUEUE_ID` can contain letters (\[A-Za-z\]), numbers (\[0-9\]), or hyphens (-). The maximum length is 100 characters.

`string name = 1;`

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public Queue.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearPurgeTime()

```
public Queue.Builder clearPurgeTime()
```

Output only. The last time this queue was purged.

All tasks that were created before this time were purged.

A queue can be purged using PurgeQueue, the [App Engine Task Queue SDK, or the Cloud Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue).

Purge time will be truncated to the nearest microsecond. Purge time will be unset if the queue has never been purged.

`.google.protobuf.Timestamp purge_time = 7;`

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### clearQueueType()

```
public Queue.Builder clearQueueType()
```

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### clearRateLimits()

```
public Queue.Builder clearRateLimits()
```

Rate limits for task dispatches.

rate\_limits and retry\_config are related because they both control task attempts. However they control task attempts in different ways:

-   rate\_limits controls the total rate of dispatches from a queue (i.e. all traffic dispatched from the queue, regardless of whether the dispatch is from a first attempt or a retry).
-   retry\_config controls what happens to particular a task after its first attempt fails. That is, retry\_config controls task retries (the second attempt, third attempt, etc).
    
    The queue's actual dispatch rate is the result of:
    
-   Number of tasks in the queue
    
-   User-specified throttling: rate\_limits, retry\_config, and the queue's state.
-   System throttling due to `429` (Too Many Requests) or `503` (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic spikes.

`.google.cloud.tasks.v2beta3.RateLimits rate_limits = 4;`

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### clearRetryConfig()

```
public Queue.Builder clearRetryConfig()
```

Settings that determine the retry behavior.

-   For tasks created using Cloud Tasks: the queue-level retry settings apply to all tasks in the queue that were created using Cloud Tasks. Retry settings cannot be set on individual tasks.
-   For tasks created using the App Engine SDK: the queue-level retry settings apply to all tasks in the queue which do not have retry settings explicitly set on the task and were created by the App Engine SDK. See [App Engine documentation](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/retrying-tasks).

`.google.cloud.tasks.v2beta3.RetryConfig retry_config = 5;`

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### clearStackdriverLoggingConfig()

```
public Queue.Builder clearStackdriverLoggingConfig()
```

Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/). If this field is unset, then no logs are written.

`.google.cloud.tasks.v2beta3.StackdriverLoggingConfig stackdriver_logging_config = 10;`

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### clearState()

```
public Queue.Builder clearState()
```

Output only. The state of the queue.

`state` can only be changed by called PauseQueue, ResumeQueue, or uploading [queue.yaml/xml](https://cloud.google.com/appengine/docs/python/config/queueref). UpdateQueue cannot be used to change `state`.

`.google.cloud.tasks.v2beta3.Queue.State state = 6;`

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

This builder for chaining.

### clearStats()

```
public Queue.Builder clearStats()
```

Output only. The realtime, informational statistics for a queue. In order to receive the statistics the caller should include this field in the FieldMask.

`.google.cloud.tasks.v2beta3.QueueStats stats = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### clearTaskTtl()

```
public Queue.Builder clearTaskTtl()
```

The maximum amount of time that a task will be retained in this queue.

Queues created by Cloud Tasks have a default `task_ttl` of 31 days. After a task has lived for `task_ttl`, the task will be deleted regardless of whether it was dispatched or not.

The `task_ttl` for queues created via queue.yaml/xml is equal to the maximum duration because there is a [storage quota](https://cloud.google.com/appengine/quotas#Task_Queue) for these queues. To view the maximum valid duration, see the documentation for Duration.

`.google.protobuf.Duration task_ttl = 8;`

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### clearTombstoneTtl()

```
public Queue.Builder clearTombstoneTtl()
```

The task tombstone time to live (TTL).

After a task is deleted or executed, the task's tombstone is retained for the length of time specified by `tombstone_ttl`. The tombstone is used by task de-duplication; another task with the same name can't be created until the tombstone has expired. For more information about task de-duplication, see the documentation for CreateTaskRequest.

Queues created by Cloud Tasks have a default `tombstone_ttl` of 1 hour.

`.google.protobuf.Duration tombstone_ttl = 9;`

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### clearType()

```
public Queue.Builder clearType()
```

Immutable. The type of a queue (push or pull).

`Queue.type` is an immutable property of the queue that is set at the queue creation time. When left unspecified, the default value of `PUSH` is selected.

`.google.cloud.tasks.v2beta3.Queue.Type type = 11 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

This builder for chaining.

### clone()

```
public Queue.Builder clone()
```

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getAppEngineHttpQueue()

```
public AppEngineHttpQueue getAppEngineHttpQueue()
```

AppEngineHttpQueue settings apply only to App Engine tasks in this queue. Http tasks are not affected by this proto.

`.google.cloud.tasks.v2beta3.AppEngineHttpQueue app_engine_http_queue = 3;`

**Returns**

**Type**

**Description**

`[AppEngineHttpQueue](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.AppEngineHttpQueue)`

The appEngineHttpQueue.

### getAppEngineHttpQueueBuilder()

```
public AppEngineHttpQueue.Builder getAppEngineHttpQueueBuilder()
```

AppEngineHttpQueue settings apply only to App Engine tasks in this queue. Http tasks are not affected by this proto.

`.google.cloud.tasks.v2beta3.AppEngineHttpQueue app_engine_http_queue = 3;`

**Returns**

**Type**

**Description**

`[AppEngineHttpQueue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.AppEngineHttpQueue.Builder)`

### getAppEngineHttpQueueOrBuilder()

```
public AppEngineHttpQueueOrBuilder getAppEngineHttpQueueOrBuilder()
```

AppEngineHttpQueue settings apply only to App Engine tasks in this queue. Http tasks are not affected by this proto.

`.google.cloud.tasks.v2beta3.AppEngineHttpQueue app_engine_http_queue = 3;`

**Returns**

**Type**

**Description**

`[AppEngineHttpQueueOrBuilder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.AppEngineHttpQueueOrBuilder)`

### getDefaultInstanceForType()

```
public Queue getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[Queue](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue)`

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

### getHttpTarget()

```
public HttpTarget getHttpTarget()
```

Modifies HTTP target for HTTP tasks.

`.google.cloud.tasks.v2beta3.HttpTarget http_target = 13;`

**Returns**

**Type**

**Description**

`[HttpTarget](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.HttpTarget)`

The httpTarget.

### getHttpTargetBuilder()

```
public HttpTarget.Builder getHttpTargetBuilder()
```

Modifies HTTP target for HTTP tasks.

`.google.cloud.tasks.v2beta3.HttpTarget http_target = 13;`

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.HttpTarget.Builder)`

### getHttpTargetOrBuilder()

```
public HttpTargetOrBuilder getHttpTargetOrBuilder()
```

Modifies HTTP target for HTTP tasks.

`.google.cloud.tasks.v2beta3.HttpTarget http_target = 13;`

**Returns**

**Type**

**Description**

`[HttpTargetOrBuilder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.HttpTargetOrBuilder)`

### getName()

```
public String getName()
```

Caller-specified and required in CreateQueue, after which it becomes output only.

The queue name.

The queue name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

-   `PROJECT_ID` can contain letters (\[A-Za-z\]), numbers (\[0-9\]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
-   `LOCATION_ID` is the canonical ID for the queue's location. The list of available locations can be obtained by calling ListLocations. For more information, see [https://cloud.google.com/about/locations/](https://cloud.google.com/about/locations/).
-   `QUEUE_ID` can contain letters (\[A-Za-z\]), numbers (\[0-9\]), or hyphens (-). The maximum length is 100 characters.

`string name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public ByteString getNameBytes()
```

Caller-specified and required in CreateQueue, after which it becomes output only.

The queue name.

The queue name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

-   `PROJECT_ID` can contain letters (\[A-Za-z\]), numbers (\[0-9\]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
-   `LOCATION_ID` is the canonical ID for the queue's location. The list of available locations can be obtained by calling ListLocations. For more information, see [https://cloud.google.com/about/locations/](https://cloud.google.com/about/locations/).
-   `QUEUE_ID` can contain letters (\[A-Za-z\]), numbers (\[0-9\]), or hyphens (-). The maximum length is 100 characters.

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getPurgeTime()

```
public Timestamp getPurgeTime()
```

Output only. The last time this queue was purged.

All tasks that were created before this time were purged.

A queue can be purged using PurgeQueue, the [App Engine Task Queue SDK, or the Cloud Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue).

Purge time will be truncated to the nearest microsecond. Purge time will be unset if the queue has never been purged.

`.google.protobuf.Timestamp purge_time = 7;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The purgeTime.

### getPurgeTimeBuilder()

```
public Timestamp.Builder getPurgeTimeBuilder()
```

Output only. The last time this queue was purged.

All tasks that were created before this time were purged.

A queue can be purged using PurgeQueue, the [App Engine Task Queue SDK, or the Cloud Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue).

Purge time will be truncated to the nearest microsecond. Purge time will be unset if the queue has never been purged.

`.google.protobuf.Timestamp purge_time = 7;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getPurgeTimeOrBuilder()

```
public TimestampOrBuilder getPurgeTimeOrBuilder()
```

Output only. The last time this queue was purged.

All tasks that were created before this time were purged.

A queue can be purged using PurgeQueue, the [App Engine Task Queue SDK, or the Cloud Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue).

Purge time will be truncated to the nearest microsecond. Purge time will be unset if the queue has never been purged.

`.google.protobuf.Timestamp purge_time = 7;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getQueueTypeCase()

```
public Queue.QueueTypeCase getQueueTypeCase()
```

**Returns**

**Type**

**Description**

`[Queue.QueueTypeCase](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.QueueTypeCase)`

### getRateLimits()

```
public RateLimits getRateLimits()
```

Rate limits for task dispatches.

rate\_limits and retry\_config are related because they both control task attempts. However they control task attempts in different ways:

-   rate\_limits controls the total rate of dispatches from a queue (i.e. all traffic dispatched from the queue, regardless of whether the dispatch is from a first attempt or a retry).
-   retry\_config controls what happens to particular a task after its first attempt fails. That is, retry\_config controls task retries (the second attempt, third attempt, etc).
    
    The queue's actual dispatch rate is the result of:
    
-   Number of tasks in the queue
    
-   User-specified throttling: rate\_limits, retry\_config, and the queue's state.
-   System throttling due to `429` (Too Many Requests) or `503` (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic spikes.

`.google.cloud.tasks.v2beta3.RateLimits rate_limits = 4;`

**Returns**

**Type**

**Description**

`[RateLimits](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.RateLimits)`

The rateLimits.

### getRateLimitsBuilder()

```
public RateLimits.Builder getRateLimitsBuilder()
```

Rate limits for task dispatches.

rate\_limits and retry\_config are related because they both control task attempts. However they control task attempts in different ways:

-   rate\_limits controls the total rate of dispatches from a queue (i.e. all traffic dispatched from the queue, regardless of whether the dispatch is from a first attempt or a retry).
-   retry\_config controls what happens to particular a task after its first attempt fails. That is, retry\_config controls task retries (the second attempt, third attempt, etc).
    
    The queue's actual dispatch rate is the result of:
    
-   Number of tasks in the queue
    
-   User-specified throttling: rate\_limits, retry\_config, and the queue's state.
-   System throttling due to `429` (Too Many Requests) or `503` (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic spikes.

`.google.cloud.tasks.v2beta3.RateLimits rate_limits = 4;`

**Returns**

**Type**

**Description**

`[RateLimits.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.RateLimits.Builder)`

### getRateLimitsOrBuilder()

```
public RateLimitsOrBuilder getRateLimitsOrBuilder()
```

Rate limits for task dispatches.

rate\_limits and retry\_config are related because they both control task attempts. However they control task attempts in different ways:

-   rate\_limits controls the total rate of dispatches from a queue (i.e. all traffic dispatched from the queue, regardless of whether the dispatch is from a first attempt or a retry).
-   retry\_config controls what happens to particular a task after its first attempt fails. That is, retry\_config controls task retries (the second attempt, third attempt, etc).
    
    The queue's actual dispatch rate is the result of:
    
-   Number of tasks in the queue
    
-   User-specified throttling: rate\_limits, retry\_config, and the queue's state.
-   System throttling due to `429` (Too Many Requests) or `503` (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic spikes.

`.google.cloud.tasks.v2beta3.RateLimits rate_limits = 4;`

**Returns**

**Type**

**Description**

`[RateLimitsOrBuilder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.RateLimitsOrBuilder)`

### getRetryConfig()

```
public RetryConfig getRetryConfig()
```

Settings that determine the retry behavior.

-   For tasks created using Cloud Tasks: the queue-level retry settings apply to all tasks in the queue that were created using Cloud Tasks. Retry settings cannot be set on individual tasks.
-   For tasks created using the App Engine SDK: the queue-level retry settings apply to all tasks in the queue which do not have retry settings explicitly set on the task and were created by the App Engine SDK. See [App Engine documentation](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/retrying-tasks).

`.google.cloud.tasks.v2beta3.RetryConfig retry_config = 5;`

**Returns**

**Type**

**Description**

`[RetryConfig](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.RetryConfig)`

The retryConfig.

### getRetryConfigBuilder()

```
public RetryConfig.Builder getRetryConfigBuilder()
```

Settings that determine the retry behavior.

-   For tasks created using Cloud Tasks: the queue-level retry settings apply to all tasks in the queue that were created using Cloud Tasks. Retry settings cannot be set on individual tasks.
-   For tasks created using the App Engine SDK: the queue-level retry settings apply to all tasks in the queue which do not have retry settings explicitly set on the task and were created by the App Engine SDK. See [App Engine documentation](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/retrying-tasks).

`.google.cloud.tasks.v2beta3.RetryConfig retry_config = 5;`

**Returns**

**Type**

**Description**

`[RetryConfig.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.RetryConfig.Builder)`

### getRetryConfigOrBuilder()

```
public RetryConfigOrBuilder getRetryConfigOrBuilder()
```

Settings that determine the retry behavior.

-   For tasks created using Cloud Tasks: the queue-level retry settings apply to all tasks in the queue that were created using Cloud Tasks. Retry settings cannot be set on individual tasks.
-   For tasks created using the App Engine SDK: the queue-level retry settings apply to all tasks in the queue which do not have retry settings explicitly set on the task and were created by the App Engine SDK. See [App Engine documentation](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/retrying-tasks).

`.google.cloud.tasks.v2beta3.RetryConfig retry_config = 5;`

**Returns**

**Type**

**Description**

`[RetryConfigOrBuilder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.RetryConfigOrBuilder)`

### getStackdriverLoggingConfig()

```
public StackdriverLoggingConfig getStackdriverLoggingConfig()
```

Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/). If this field is unset, then no logs are written.

`.google.cloud.tasks.v2beta3.StackdriverLoggingConfig stackdriver_logging_config = 10;`

**Returns**

**Type**

**Description**

`[StackdriverLoggingConfig](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.StackdriverLoggingConfig)`

The stackdriverLoggingConfig.

### getStackdriverLoggingConfigBuilder()

```
public StackdriverLoggingConfig.Builder getStackdriverLoggingConfigBuilder()
```

Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/). If this field is unset, then no logs are written.

`.google.cloud.tasks.v2beta3.StackdriverLoggingConfig stackdriver_logging_config = 10;`

**Returns**

**Type**

**Description**

`[StackdriverLoggingConfig.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.StackdriverLoggingConfig.Builder)`

### getStackdriverLoggingConfigOrBuilder()

```
public StackdriverLoggingConfigOrBuilder getStackdriverLoggingConfigOrBuilder()
```

Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/). If this field is unset, then no logs are written.

`.google.cloud.tasks.v2beta3.StackdriverLoggingConfig stackdriver_logging_config = 10;`

**Returns**

**Type**

**Description**

`[StackdriverLoggingConfigOrBuilder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.StackdriverLoggingConfigOrBuilder)`

### getState()

```
public Queue.State getState()
```

Output only. The state of the queue.

`state` can only be changed by called PauseQueue, ResumeQueue, or uploading [queue.yaml/xml](https://cloud.google.com/appengine/docs/python/config/queueref). UpdateQueue cannot be used to change `state`.

`.google.cloud.tasks.v2beta3.Queue.State state = 6;`

**Returns**

**Type**

**Description**

`[Queue.State](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.State)`

The state.

### getStateValue()

```
public int getStateValue()
```

Output only. The state of the queue.

`state` can only be changed by called PauseQueue, ResumeQueue, or uploading [queue.yaml/xml](https://cloud.google.com/appengine/docs/python/config/queueref). UpdateQueue cannot be used to change `state`.

`.google.cloud.tasks.v2beta3.Queue.State state = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### getStats()

```
public QueueStats getStats()
```

Output only. The realtime, informational statistics for a queue. In order to receive the statistics the caller should include this field in the FieldMask.

`.google.cloud.tasks.v2beta3.QueueStats stats = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[QueueStats](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.QueueStats)`

The stats.

### getStatsBuilder()

```
public QueueStats.Builder getStatsBuilder()
```

Output only. The realtime, informational statistics for a queue. In order to receive the statistics the caller should include this field in the FieldMask.

`.google.cloud.tasks.v2beta3.QueueStats stats = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[QueueStats.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.QueueStats.Builder)`

### getStatsOrBuilder()

```
public QueueStatsOrBuilder getStatsOrBuilder()
```

Output only. The realtime, informational statistics for a queue. In order to receive the statistics the caller should include this field in the FieldMask.

`.google.cloud.tasks.v2beta3.QueueStats stats = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[QueueStatsOrBuilder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.QueueStatsOrBuilder)`

### getTaskTtl()

```
public Duration getTaskTtl()
```

The maximum amount of time that a task will be retained in this queue.

Queues created by Cloud Tasks have a default `task_ttl` of 31 days. After a task has lived for `task_ttl`, the task will be deleted regardless of whether it was dispatched or not.

The `task_ttl` for queues created via queue.yaml/xml is equal to the maximum duration because there is a [storage quota](https://cloud.google.com/appengine/quotas#Task_Queue) for these queues. To view the maximum valid duration, see the documentation for Duration.

`.google.protobuf.Duration task_ttl = 8;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The taskTtl.

### getTaskTtlBuilder()

```
public Duration.Builder getTaskTtlBuilder()
```

The maximum amount of time that a task will be retained in this queue.

Queues created by Cloud Tasks have a default `task_ttl` of 31 days. After a task has lived for `task_ttl`, the task will be deleted regardless of whether it was dispatched or not.

The `task_ttl` for queues created via queue.yaml/xml is equal to the maximum duration because there is a [storage quota](https://cloud.google.com/appengine/quotas#Task_Queue) for these queues. To view the maximum valid duration, see the documentation for Duration.

`.google.protobuf.Duration task_ttl = 8;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`

### getTaskTtlOrBuilder()

```
public DurationOrBuilder getTaskTtlOrBuilder()
```

The maximum amount of time that a task will be retained in this queue.

Queues created by Cloud Tasks have a default `task_ttl` of 31 days. After a task has lived for `task_ttl`, the task will be deleted regardless of whether it was dispatched or not.

The `task_ttl` for queues created via queue.yaml/xml is equal to the maximum duration because there is a [storage quota](https://cloud.google.com/appengine/quotas#Task_Queue) for these queues. To view the maximum valid duration, see the documentation for Duration.

`.google.protobuf.Duration task_ttl = 8;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getTombstoneTtl()

```
public Duration getTombstoneTtl()
```

The task tombstone time to live (TTL).

After a task is deleted or executed, the task's tombstone is retained for the length of time specified by `tombstone_ttl`. The tombstone is used by task de-duplication; another task with the same name can't be created until the tombstone has expired. For more information about task de-duplication, see the documentation for CreateTaskRequest.

Queues created by Cloud Tasks have a default `tombstone_ttl` of 1 hour.

`.google.protobuf.Duration tombstone_ttl = 9;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The tombstoneTtl.

### getTombstoneTtlBuilder()

```
public Duration.Builder getTombstoneTtlBuilder()
```

The task tombstone time to live (TTL).

After a task is deleted or executed, the task's tombstone is retained for the length of time specified by `tombstone_ttl`. The tombstone is used by task de-duplication; another task with the same name can't be created until the tombstone has expired. For more information about task de-duplication, see the documentation for CreateTaskRequest.

Queues created by Cloud Tasks have a default `tombstone_ttl` of 1 hour.

`.google.protobuf.Duration tombstone_ttl = 9;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`

### getTombstoneTtlOrBuilder()

```
public DurationOrBuilder getTombstoneTtlOrBuilder()
```

The task tombstone time to live (TTL).

After a task is deleted or executed, the task's tombstone is retained for the length of time specified by `tombstone_ttl`. The tombstone is used by task de-duplication; another task with the same name can't be created until the tombstone has expired. For more information about task de-duplication, see the documentation for CreateTaskRequest.

Queues created by Cloud Tasks have a default `tombstone_ttl` of 1 hour.

`.google.protobuf.Duration tombstone_ttl = 9;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getType()

```
public Queue.Type getType()
```

Immutable. The type of a queue (push or pull).

`Queue.type` is an immutable property of the queue that is set at the queue creation time. When left unspecified, the default value of `PUSH` is selected.

`.google.cloud.tasks.v2beta3.Queue.Type type = 11 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[Queue.Type](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Type)`

The type.

### getTypeValue()

```
public int getTypeValue()
```

Immutable. The type of a queue (push or pull).

`Queue.type` is an immutable property of the queue that is set at the queue creation time. When left unspecified, the default value of `PUSH` is selected.

`.google.cloud.tasks.v2beta3.Queue.Type type = 11 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for type.

### hasAppEngineHttpQueue()

```
public boolean hasAppEngineHttpQueue()
```

AppEngineHttpQueue settings apply only to App Engine tasks in this queue. Http tasks are not affected by this proto.

`.google.cloud.tasks.v2beta3.AppEngineHttpQueue app_engine_http_queue = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the appEngineHttpQueue field is set.

### hasHttpTarget()

```
public boolean hasHttpTarget()
```

Modifies HTTP target for HTTP tasks.

`.google.cloud.tasks.v2beta3.HttpTarget http_target = 13;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the httpTarget field is set.

### hasPurgeTime()

```
public boolean hasPurgeTime()
```

Output only. The last time this queue was purged.

All tasks that were created before this time were purged.

A queue can be purged using PurgeQueue, the [App Engine Task Queue SDK, or the Cloud Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue).

Purge time will be truncated to the nearest microsecond. Purge time will be unset if the queue has never been purged.

`.google.protobuf.Timestamp purge_time = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the purgeTime field is set.

### hasRateLimits()

```
public boolean hasRateLimits()
```

Rate limits for task dispatches.

rate\_limits and retry\_config are related because they both control task attempts. However they control task attempts in different ways:

-   rate\_limits controls the total rate of dispatches from a queue (i.e. all traffic dispatched from the queue, regardless of whether the dispatch is from a first attempt or a retry).
-   retry\_config controls what happens to particular a task after its first attempt fails. That is, retry\_config controls task retries (the second attempt, third attempt, etc).
    
    The queue's actual dispatch rate is the result of:
    
-   Number of tasks in the queue
    
-   User-specified throttling: rate\_limits, retry\_config, and the queue's state.
-   System throttling due to `429` (Too Many Requests) or `503` (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic spikes.

`.google.cloud.tasks.v2beta3.RateLimits rate_limits = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the rateLimits field is set.

### hasRetryConfig()

```
public boolean hasRetryConfig()
```

Settings that determine the retry behavior.

-   For tasks created using Cloud Tasks: the queue-level retry settings apply to all tasks in the queue that were created using Cloud Tasks. Retry settings cannot be set on individual tasks.
-   For tasks created using the App Engine SDK: the queue-level retry settings apply to all tasks in the queue which do not have retry settings explicitly set on the task and were created by the App Engine SDK. See [App Engine documentation](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/retrying-tasks).

`.google.cloud.tasks.v2beta3.RetryConfig retry_config = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the retryConfig field is set.

### hasStackdriverLoggingConfig()

```
public boolean hasStackdriverLoggingConfig()
```

Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/). If this field is unset, then no logs are written.

`.google.cloud.tasks.v2beta3.StackdriverLoggingConfig stackdriver_logging_config = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the stackdriverLoggingConfig field is set.

### hasStats()

```
public boolean hasStats()
```

Output only. The realtime, informational statistics for a queue. In order to receive the statistics the caller should include this field in the FieldMask.

`.google.cloud.tasks.v2beta3.QueueStats stats = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the stats field is set.

### hasTaskTtl()

```
public boolean hasTaskTtl()
```

The maximum amount of time that a task will be retained in this queue.

Queues created by Cloud Tasks have a default `task_ttl` of 31 days. After a task has lived for `task_ttl`, the task will be deleted regardless of whether it was dispatched or not.

The `task_ttl` for queues created via queue.yaml/xml is equal to the maximum duration because there is a [storage quota](https://cloud.google.com/appengine/quotas#Task_Queue) for these queues. To view the maximum valid duration, see the documentation for Duration.

`.google.protobuf.Duration task_ttl = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the taskTtl field is set.

### hasTombstoneTtl()

```
public boolean hasTombstoneTtl()
```

The task tombstone time to live (TTL).

After a task is deleted or executed, the task's tombstone is retained for the length of time specified by `tombstone_ttl`. The tombstone is used by task de-duplication; another task with the same name can't be created until the tombstone has expired. For more information about task de-duplication, see the documentation for CreateTaskRequest.

Queues created by Cloud Tasks have a default `tombstone_ttl` of 1 hour.

`.google.protobuf.Duration tombstone_ttl = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the tombstoneTtl field is set.

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

### mergeAppEngineHttpQueue(AppEngineHttpQueue value)

```
public Queue.Builder mergeAppEngineHttpQueue(AppEngineHttpQueue value)
```

AppEngineHttpQueue settings apply only to App Engine tasks in this queue. Http tasks are not affected by this proto.

`.google.cloud.tasks.v2beta3.AppEngineHttpQueue app_engine_http_queue = 3;`

**Parameter**

**Name**

**Description**

`value`

`[AppEngineHttpQueue](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.AppEngineHttpQueue)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### mergeFrom(Queue other)

```
public Queue.Builder mergeFrom(Queue other)
```

**Parameter**

**Name**

**Description**

`other`

`[Queue](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public Queue.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public Queue.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeHttpTarget(HttpTarget value)

```
public Queue.Builder mergeHttpTarget(HttpTarget value)
```

Modifies HTTP target for HTTP tasks.

`.google.cloud.tasks.v2beta3.HttpTarget http_target = 13;`

**Parameter**

**Name**

**Description**

`value`

`[HttpTarget](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.HttpTarget)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### mergePurgeTime(Timestamp value)

```
public Queue.Builder mergePurgeTime(Timestamp value)
```

Output only. The last time this queue was purged.

All tasks that were created before this time were purged.

A queue can be purged using PurgeQueue, the [App Engine Task Queue SDK, or the Cloud Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue).

Purge time will be truncated to the nearest microsecond. Purge time will be unset if the queue has never been purged.

`.google.protobuf.Timestamp purge_time = 7;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### mergeRateLimits(RateLimits value)

```
public Queue.Builder mergeRateLimits(RateLimits value)
```

Rate limits for task dispatches.

rate\_limits and retry\_config are related because they both control task attempts. However they control task attempts in different ways:

-   rate\_limits controls the total rate of dispatches from a queue (i.e. all traffic dispatched from the queue, regardless of whether the dispatch is from a first attempt or a retry).
-   retry\_config controls what happens to particular a task after its first attempt fails. That is, retry\_config controls task retries (the second attempt, third attempt, etc).
    
    The queue's actual dispatch rate is the result of:
    
-   Number of tasks in the queue
    
-   User-specified throttling: rate\_limits, retry\_config, and the queue's state.
-   System throttling due to `429` (Too Many Requests) or `503` (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic spikes.

`.google.cloud.tasks.v2beta3.RateLimits rate_limits = 4;`

**Parameter**

**Name**

**Description**

`value`

`[RateLimits](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.RateLimits)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### mergeRetryConfig(RetryConfig value)

```
public Queue.Builder mergeRetryConfig(RetryConfig value)
```

Settings that determine the retry behavior.

-   For tasks created using Cloud Tasks: the queue-level retry settings apply to all tasks in the queue that were created using Cloud Tasks. Retry settings cannot be set on individual tasks.
-   For tasks created using the App Engine SDK: the queue-level retry settings apply to all tasks in the queue which do not have retry settings explicitly set on the task and were created by the App Engine SDK. See [App Engine documentation](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/retrying-tasks).

`.google.cloud.tasks.v2beta3.RetryConfig retry_config = 5;`

**Parameter**

**Name**

**Description**

`value`

`[RetryConfig](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.RetryConfig)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### mergeStackdriverLoggingConfig(StackdriverLoggingConfig value)

```
public Queue.Builder mergeStackdriverLoggingConfig(StackdriverLoggingConfig value)
```

Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/). If this field is unset, then no logs are written.

`.google.cloud.tasks.v2beta3.StackdriverLoggingConfig stackdriver_logging_config = 10;`

**Parameter**

**Name**

**Description**

`value`

`[StackdriverLoggingConfig](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.StackdriverLoggingConfig)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### mergeStats(QueueStats value)

```
public Queue.Builder mergeStats(QueueStats value)
```

Output only. The realtime, informational statistics for a queue. In order to receive the statistics the caller should include this field in the FieldMask.

`.google.cloud.tasks.v2beta3.QueueStats stats = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[QueueStats](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.QueueStats)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### mergeTaskTtl(Duration value)

```
public Queue.Builder mergeTaskTtl(Duration value)
```

The maximum amount of time that a task will be retained in this queue.

Queues created by Cloud Tasks have a default `task_ttl` of 31 days. After a task has lived for `task_ttl`, the task will be deleted regardless of whether it was dispatched or not.

The `task_ttl` for queues created via queue.yaml/xml is equal to the maximum duration because there is a [storage quota](https://cloud.google.com/appengine/quotas#Task_Queue) for these queues. To view the maximum valid duration, see the documentation for Duration.

`.google.protobuf.Duration task_ttl = 8;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### mergeTombstoneTtl(Duration value)

```
public Queue.Builder mergeTombstoneTtl(Duration value)
```

The task tombstone time to live (TTL).

After a task is deleted or executed, the task's tombstone is retained for the length of time specified by `tombstone_ttl`. The tombstone is used by task de-duplication; another task with the same name can't be created until the tombstone has expired. For more information about task de-duplication, see the documentation for CreateTaskRequest.

Queues created by Cloud Tasks have a default `tombstone_ttl` of 1 hour.

`.google.protobuf.Duration tombstone_ttl = 9;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final Queue.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setAppEngineHttpQueue(AppEngineHttpQueue value)

```
public Queue.Builder setAppEngineHttpQueue(AppEngineHttpQueue value)
```

AppEngineHttpQueue settings apply only to App Engine tasks in this queue. Http tasks are not affected by this proto.

`.google.cloud.tasks.v2beta3.AppEngineHttpQueue app_engine_http_queue = 3;`

**Parameter**

**Name**

**Description**

`value`

`[AppEngineHttpQueue](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.AppEngineHttpQueue)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setAppEngineHttpQueue(AppEngineHttpQueue.Builder builderForValue)

```
public Queue.Builder setAppEngineHttpQueue(AppEngineHttpQueue.Builder builderForValue)
```

AppEngineHttpQueue settings apply only to App Engine tasks in this queue. Http tasks are not affected by this proto.

`.google.cloud.tasks.v2beta3.AppEngineHttpQueue app_engine_http_queue = 3;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[AppEngineHttpQueue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.AppEngineHttpQueue.Builder)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public Queue.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setHttpTarget(HttpTarget value)

```
public Queue.Builder setHttpTarget(HttpTarget value)
```

Modifies HTTP target for HTTP tasks.

`.google.cloud.tasks.v2beta3.HttpTarget http_target = 13;`

**Parameter**

**Name**

**Description**

`value`

`[HttpTarget](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.HttpTarget)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setHttpTarget(HttpTarget.Builder builderForValue)

```
public Queue.Builder setHttpTarget(HttpTarget.Builder builderForValue)
```

Modifies HTTP target for HTTP tasks.

`.google.cloud.tasks.v2beta3.HttpTarget http_target = 13;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[HttpTarget.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.HttpTarget.Builder)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setName(String value)

```
public Queue.Builder setName(String value)
```

Caller-specified and required in CreateQueue, after which it becomes output only.

The queue name.

The queue name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

-   `PROJECT_ID` can contain letters (\[A-Za-z\]), numbers (\[0-9\]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
-   `LOCATION_ID` is the canonical ID for the queue's location. The list of available locations can be obtained by calling ListLocations. For more information, see [https://cloud.google.com/about/locations/](https://cloud.google.com/about/locations/).
-   `QUEUE_ID` can contain letters (\[A-Za-z\]), numbers (\[0-9\]), or hyphens (-). The maximum length is 100 characters.

`string name = 1;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The name to set.

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

This builder for chaining.

### setNameBytes(ByteString value)

```
public Queue.Builder setNameBytes(ByteString value)
```

Caller-specified and required in CreateQueue, after which it becomes output only.

The queue name.

The queue name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

-   `PROJECT_ID` can contain letters (\[A-Za-z\]), numbers (\[0-9\]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
-   `LOCATION_ID` is the canonical ID for the queue's location. The list of available locations can be obtained by calling ListLocations. For more information, see [https://cloud.google.com/about/locations/](https://cloud.google.com/about/locations/).
-   `QUEUE_ID` can contain letters (\[A-Za-z\]), numbers (\[0-9\]), or hyphens (-). The maximum length is 100 characters.

`string name = 1;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for name to set.

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

This builder for chaining.

### setPurgeTime(Timestamp value)

```
public Queue.Builder setPurgeTime(Timestamp value)
```

Output only. The last time this queue was purged.

All tasks that were created before this time were purged.

A queue can be purged using PurgeQueue, the [App Engine Task Queue SDK, or the Cloud Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue).

Purge time will be truncated to the nearest microsecond. Purge time will be unset if the queue has never been purged.

`.google.protobuf.Timestamp purge_time = 7;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setPurgeTime(Timestamp.Builder builderForValue)

```
public Queue.Builder setPurgeTime(Timestamp.Builder builderForValue)
```

Output only. The last time this queue was purged.

All tasks that were created before this time were purged.

A queue can be purged using PurgeQueue, the [App Engine Task Queue SDK, or the Cloud Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue).

Purge time will be truncated to the nearest microsecond. Purge time will be unset if the queue has never been purged.

`.google.protobuf.Timestamp purge_time = 7;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setRateLimits(RateLimits value)

```
public Queue.Builder setRateLimits(RateLimits value)
```

Rate limits for task dispatches.

rate\_limits and retry\_config are related because they both control task attempts. However they control task attempts in different ways:

-   rate\_limits controls the total rate of dispatches from a queue (i.e. all traffic dispatched from the queue, regardless of whether the dispatch is from a first attempt or a retry).
-   retry\_config controls what happens to particular a task after its first attempt fails. That is, retry\_config controls task retries (the second attempt, third attempt, etc).
    
    The queue's actual dispatch rate is the result of:
    
-   Number of tasks in the queue
    
-   User-specified throttling: rate\_limits, retry\_config, and the queue's state.
-   System throttling due to `429` (Too Many Requests) or `503` (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic spikes.

`.google.cloud.tasks.v2beta3.RateLimits rate_limits = 4;`

**Parameter**

**Name**

**Description**

`value`

`[RateLimits](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.RateLimits)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setRateLimits(RateLimits.Builder builderForValue)

```
public Queue.Builder setRateLimits(RateLimits.Builder builderForValue)
```

Rate limits for task dispatches.

rate\_limits and retry\_config are related because they both control task attempts. However they control task attempts in different ways:

-   rate\_limits controls the total rate of dispatches from a queue (i.e. all traffic dispatched from the queue, regardless of whether the dispatch is from a first attempt or a retry).
-   retry\_config controls what happens to particular a task after its first attempt fails. That is, retry\_config controls task retries (the second attempt, third attempt, etc).
    
    The queue's actual dispatch rate is the result of:
    
-   Number of tasks in the queue
    
-   User-specified throttling: rate\_limits, retry\_config, and the queue's state.
-   System throttling due to `429` (Too Many Requests) or `503` (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic spikes.

`.google.cloud.tasks.v2beta3.RateLimits rate_limits = 4;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[RateLimits.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.RateLimits.Builder)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public Queue.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setRetryConfig(RetryConfig value)

```
public Queue.Builder setRetryConfig(RetryConfig value)
```

Settings that determine the retry behavior.

-   For tasks created using Cloud Tasks: the queue-level retry settings apply to all tasks in the queue that were created using Cloud Tasks. Retry settings cannot be set on individual tasks.
-   For tasks created using the App Engine SDK: the queue-level retry settings apply to all tasks in the queue which do not have retry settings explicitly set on the task and were created by the App Engine SDK. See [App Engine documentation](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/retrying-tasks).

`.google.cloud.tasks.v2beta3.RetryConfig retry_config = 5;`

**Parameter**

**Name**

**Description**

`value`

`[RetryConfig](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.RetryConfig)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setRetryConfig(RetryConfig.Builder builderForValue)

```
public Queue.Builder setRetryConfig(RetryConfig.Builder builderForValue)
```

Settings that determine the retry behavior.

-   For tasks created using Cloud Tasks: the queue-level retry settings apply to all tasks in the queue that were created using Cloud Tasks. Retry settings cannot be set on individual tasks.
-   For tasks created using the App Engine SDK: the queue-level retry settings apply to all tasks in the queue which do not have retry settings explicitly set on the task and were created by the App Engine SDK. See [App Engine documentation](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/retrying-tasks).

`.google.cloud.tasks.v2beta3.RetryConfig retry_config = 5;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[RetryConfig.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.RetryConfig.Builder)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setStackdriverLoggingConfig(StackdriverLoggingConfig value)

```
public Queue.Builder setStackdriverLoggingConfig(StackdriverLoggingConfig value)
```

Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/). If this field is unset, then no logs are written.

`.google.cloud.tasks.v2beta3.StackdriverLoggingConfig stackdriver_logging_config = 10;`

**Parameter**

**Name**

**Description**

`value`

`[StackdriverLoggingConfig](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.StackdriverLoggingConfig)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setStackdriverLoggingConfig(StackdriverLoggingConfig.Builder builderForValue)

```
public Queue.Builder setStackdriverLoggingConfig(StackdriverLoggingConfig.Builder builderForValue)
```

Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/). If this field is unset, then no logs are written.

`.google.cloud.tasks.v2beta3.StackdriverLoggingConfig stackdriver_logging_config = 10;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[StackdriverLoggingConfig.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.StackdriverLoggingConfig.Builder)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setState(Queue.State value)

```
public Queue.Builder setState(Queue.State value)
```

Output only. The state of the queue.

`state` can only be changed by called PauseQueue, ResumeQueue, or uploading [queue.yaml/xml](https://cloud.google.com/appengine/docs/python/config/queueref). UpdateQueue cannot be used to change `state`.

`.google.cloud.tasks.v2beta3.Queue.State state = 6;`

**Parameter**

**Name**

**Description**

`value`

`[Queue.State](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.State)`  

The state to set.

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

This builder for chaining.

### setStateValue(int value)

```
public Queue.Builder setStateValue(int value)
```

Output only. The state of the queue.

`state` can only be changed by called PauseQueue, ResumeQueue, or uploading [queue.yaml/xml](https://cloud.google.com/appengine/docs/python/config/queueref). UpdateQueue cannot be used to change `state`.

`.google.cloud.tasks.v2beta3.Queue.State state = 6;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enum numeric value on the wire for state to set.

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

This builder for chaining.

### setStats(QueueStats value)

```
public Queue.Builder setStats(QueueStats value)
```

Output only. The realtime, informational statistics for a queue. In order to receive the statistics the caller should include this field in the FieldMask.

`.google.cloud.tasks.v2beta3.QueueStats stats = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[QueueStats](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.QueueStats)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setStats(QueueStats.Builder builderForValue)

```
public Queue.Builder setStats(QueueStats.Builder builderForValue)
```

Output only. The realtime, informational statistics for a queue. In order to receive the statistics the caller should include this field in the FieldMask.

`.google.cloud.tasks.v2beta3.QueueStats stats = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[QueueStats.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.QueueStats.Builder)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setTaskTtl(Duration value)

```
public Queue.Builder setTaskTtl(Duration value)
```

The maximum amount of time that a task will be retained in this queue.

Queues created by Cloud Tasks have a default `task_ttl` of 31 days. After a task has lived for `task_ttl`, the task will be deleted regardless of whether it was dispatched or not.

The `task_ttl` for queues created via queue.yaml/xml is equal to the maximum duration because there is a [storage quota](https://cloud.google.com/appengine/quotas#Task_Queue) for these queues. To view the maximum valid duration, see the documentation for Duration.

`.google.protobuf.Duration task_ttl = 8;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setTaskTtl(Duration.Builder builderForValue)

```
public Queue.Builder setTaskTtl(Duration.Builder builderForValue)
```

The maximum amount of time that a task will be retained in this queue.

Queues created by Cloud Tasks have a default `task_ttl` of 31 days. After a task has lived for `task_ttl`, the task will be deleted regardless of whether it was dispatched or not.

The `task_ttl` for queues created via queue.yaml/xml is equal to the maximum duration because there is a [storage quota](https://cloud.google.com/appengine/quotas#Task_Queue) for these queues. To view the maximum valid duration, see the documentation for Duration.

`.google.protobuf.Duration task_ttl = 8;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setTombstoneTtl(Duration value)

```
public Queue.Builder setTombstoneTtl(Duration value)
```

The task tombstone time to live (TTL).

After a task is deleted or executed, the task's tombstone is retained for the length of time specified by `tombstone_ttl`. The tombstone is used by task de-duplication; another task with the same name can't be created until the tombstone has expired. For more information about task de-duplication, see the documentation for CreateTaskRequest.

Queues created by Cloud Tasks have a default `tombstone_ttl` of 1 hour.

`.google.protobuf.Duration tombstone_ttl = 9;`

**Parameter**

**Name**

**Description**

`value`

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setTombstoneTtl(Duration.Builder builderForValue)

```
public Queue.Builder setTombstoneTtl(Duration.Builder builderForValue)
```

The task tombstone time to live (TTL).

After a task is deleted or executed, the task's tombstone is retained for the length of time specified by `tombstone_ttl`. The tombstone is used by task de-duplication; another task with the same name can't be created until the tombstone has expired. For more information about task de-duplication, see the documentation for CreateTaskRequest.

Queues created by Cloud Tasks have a default `tombstone_ttl` of 1 hour.

`.google.protobuf.Duration tombstone_ttl = 9;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.Builder.html)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

### setType(Queue.Type value)

```
public Queue.Builder setType(Queue.Type value)
```

Immutable. The type of a queue (push or pull).

`Queue.type` is an immutable property of the queue that is set at the queue creation time. When left unspecified, the default value of `PUSH` is selected.

`.google.cloud.tasks.v2beta3.Queue.Type type = 11 [(.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

`value`

`[Queue.Type](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Type)`  

The type to set.

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

This builder for chaining.

### setTypeValue(int value)

```
public Queue.Builder setTypeValue(int value)
```

Immutable. The type of a queue (push or pull).

`Queue.type` is an immutable property of the queue that is set at the queue creation time. When left unspecified, the default value of `PUSH` is selected.

`.google.cloud.tasks.v2beta3.Queue.Type type = 11 [(.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enum numeric value on the wire for type to set.

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

This builder for chaining.

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final Queue.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Queue.Builder](/java/docs/reference/google-cloud-tasks/2.27.0/com.google.cloud.tasks.v2beta3.Queue.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
