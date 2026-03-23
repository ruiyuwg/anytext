-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ListGroupsRequest.Builder (3.40.0) Stay organized with collections Save and categorize content based on your preferences.

3.88.0 (latest) 3.86.0 3.84.0 3.83.0 3.81.0 3.79.0 3.77.0 3.76.0 3.75.0 3.74.0 3.73.0 3.71.0 3.69.0 3.68.0 3.65.0 3.64.0 3.63.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.6 3.3.6 3.2.10

```
public static final class ListGroupsRequest.Builder extends GeneratedMessageV3.Builder<ListGroupsRequest.Builder> implements ListGroupsRequestOrBuilder
```

The `ListGroup` request.

Protobuf type `google.monitoring.v3.ListGroupsRequest`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> ListGroupsRequest.Builder

## Implements

[ListGroupsRequestOrBuilder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequestOrBuilder)

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
public ListGroupsRequest.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public ListGroupsRequest build()
```

**Returns**

**Type**

**Description**

`[ListGroupsRequest](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest)`

### buildPartial()

```
public ListGroupsRequest buildPartial()
```

**Returns**

**Type**

**Description**

`[ListGroupsRequest](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest)`

### clear()

```
public ListGroupsRequest.Builder clear()
```

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearAncestorsOfGroup()

```
public ListGroupsRequest.Builder clearAncestorsOfGroup()
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns groups that are ancestors of the specified group. The groups are returned in order, starting with the immediate parent and ending with the most distant ancestor. If the specified group has no immediate parent, the results are empty.

`string ancestors_of_group = 3 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### clearChildrenOfGroup()

```
public ListGroupsRequest.Builder clearChildrenOfGroup()
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns groups whose `parent_name` field contains the group name. If no groups have this parent, the results are empty.

`string children_of_group = 2 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### clearDescendantsOfGroup()

```
public ListGroupsRequest.Builder clearDescendantsOfGroup()
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns the descendants of the specified group. This is a superset of the results returned by the `children_of_group` filter, and includes children-of-children, and so forth.

`string descendants_of_group = 4 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public ListGroupsRequest.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearFilter()

```
public ListGroupsRequest.Builder clearFilter()
```

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

### clearName()

```
public ListGroupsRequest.Builder clearName()
```

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose groups are to be listed. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]
```

`string name = 7 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public ListGroupsRequest.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearPageSize()

```
public ListGroupsRequest.Builder clearPageSize()
```

A positive number that is the maximum number of results to return.

`int32 page_size = 5;`

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### clearPageToken()

```
public ListGroupsRequest.Builder clearPageToken()
```

If this field is not empty then it must contain the `next_page_token` value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.

`string page_token = 6;`

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### clone()

```
public ListGroupsRequest.Builder clone()
```

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getAncestorsOfGroup()

```
public String getAncestorsOfGroup()
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns groups that are ancestors of the specified group. The groups are returned in order, starting with the immediate parent and ending with the most distant ancestor. If the specified group has no immediate parent, the results are empty.

`string ancestors_of_group = 3 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The ancestorsOfGroup.

### getAncestorsOfGroupBytes()

```
public ByteString getAncestorsOfGroupBytes()
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns groups that are ancestors of the specified group. The groups are returned in order, starting with the immediate parent and ending with the most distant ancestor. If the specified group has no immediate parent, the results are empty.

`string ancestors_of_group = 3 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for ancestorsOfGroup.

### getChildrenOfGroup()

```
public String getChildrenOfGroup()
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns groups whose `parent_name` field contains the group name. If no groups have this parent, the results are empty.

`string children_of_group = 2 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The childrenOfGroup.

### getChildrenOfGroupBytes()

```
public ByteString getChildrenOfGroupBytes()
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns groups whose `parent_name` field contains the group name. If no groups have this parent, the results are empty.

`string children_of_group = 2 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for childrenOfGroup.

### getDefaultInstanceForType()

```
public ListGroupsRequest getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[ListGroupsRequest](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest)`

### getDescendantsOfGroup()

```
public String getDescendantsOfGroup()
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns the descendants of the specified group. This is a superset of the results returned by the `children_of_group` filter, and includes children-of-children, and so forth.

`string descendants_of_group = 4 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The descendantsOfGroup.

### getDescendantsOfGroupBytes()

```
public ByteString getDescendantsOfGroupBytes()
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns the descendants of the specified group. This is a superset of the results returned by the `children_of_group` filter, and includes children-of-children, and so forth.

`string descendants_of_group = 4 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for descendantsOfGroup.

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

### getFilterCase()

```
public ListGroupsRequest.FilterCase getFilterCase()
```

**Returns**

**Type**

**Description**

`[ListGroupsRequest.FilterCase](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.FilterCase)`

### getName()

```
public String getName()
```

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose groups are to be listed. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]
```

`string name = 7 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public ByteString getNameBytes()
```

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose groups are to be listed. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]
```

`string name = 7 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getPageSize()

```
public int getPageSize()
```

A positive number that is the maximum number of results to return.

`int32 page_size = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The pageSize.

### getPageToken()

```
public String getPageToken()
```

If this field is not empty then it must contain the `next_page_token` value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.

`string page_token = 6;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The pageToken.

### getPageTokenBytes()

```
public ByteString getPageTokenBytes()
```

If this field is not empty then it must contain the `next_page_token` value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.

`string page_token = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for pageToken.

### hasAncestorsOfGroup()

```
public boolean hasAncestorsOfGroup()
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns groups that are ancestors of the specified group. The groups are returned in order, starting with the immediate parent and ending with the most distant ancestor. If the specified group has no immediate parent, the results are empty.

`string ancestors_of_group = 3 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the ancestorsOfGroup field is set.

### hasChildrenOfGroup()

```
public boolean hasChildrenOfGroup()
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns groups whose `parent_name` field contains the group name. If no groups have this parent, the results are empty.

`string children_of_group = 2 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the childrenOfGroup field is set.

### hasDescendantsOfGroup()

```
public boolean hasDescendantsOfGroup()
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns the descendants of the specified group. This is a superset of the results returned by the `children_of_group` filter, and includes children-of-children, and so forth.

`string descendants_of_group = 4 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the descendantsOfGroup field is set.

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

### mergeFrom(ListGroupsRequest other)

```
public ListGroupsRequest.Builder mergeFrom(ListGroupsRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListGroupsRequest](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest)`  

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public ListGroupsRequest.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public ListGroupsRequest.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final ListGroupsRequest.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setAncestorsOfGroup(String value)

```
public ListGroupsRequest.Builder setAncestorsOfGroup(String value)
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns groups that are ancestors of the specified group. The groups are returned in order, starting with the immediate parent and ending with the most distant ancestor. If the specified group has no immediate parent, the results are empty.

`string ancestors_of_group = 3 [(.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The ancestorsOfGroup to set.

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### setAncestorsOfGroupBytes(ByteString value)

```
public ListGroupsRequest.Builder setAncestorsOfGroupBytes(ByteString value)
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns groups that are ancestors of the specified group. The groups are returned in order, starting with the immediate parent and ending with the most distant ancestor. If the specified group has no immediate parent, the results are empty.

`string ancestors_of_group = 3 [(.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for ancestorsOfGroup to set.

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### setChildrenOfGroup(String value)

```
public ListGroupsRequest.Builder setChildrenOfGroup(String value)
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns groups whose `parent_name` field contains the group name. If no groups have this parent, the results are empty.

`string children_of_group = 2 [(.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The childrenOfGroup to set.

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### setChildrenOfGroupBytes(ByteString value)

```
public ListGroupsRequest.Builder setChildrenOfGroupBytes(ByteString value)
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns groups whose `parent_name` field contains the group name. If no groups have this parent, the results are empty.

`string children_of_group = 2 [(.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for childrenOfGroup to set.

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### setDescendantsOfGroup(String value)

```
public ListGroupsRequest.Builder setDescendantsOfGroup(String value)
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns the descendants of the specified group. This is a superset of the results returned by the `children_of_group` filter, and includes children-of-children, and so forth.

`string descendants_of_group = 4 [(.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The descendantsOfGroup to set.

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### setDescendantsOfGroupBytes(ByteString value)

```
public ListGroupsRequest.Builder setDescendantsOfGroupBytes(ByteString value)
```

A group name. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]
```

Returns the descendants of the specified group. This is a superset of the results returned by the `children_of_group` filter, and includes children-of-children, and so forth.

`string descendants_of_group = 4 [(.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for descendantsOfGroup to set.

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public ListGroupsRequest.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setName(String value)

```
public ListGroupsRequest.Builder setName(String value)
```

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose groups are to be listed. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]
```

`string name = 7 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The name to set.

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### setNameBytes(ByteString value)

```
public ListGroupsRequest.Builder setNameBytes(ByteString value)
```

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) whose groups are to be listed. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]
```

`string name = 7 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for name to set.

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### setPageSize(int value)

```
public ListGroupsRequest.Builder setPageSize(int value)
```

A positive number that is the maximum number of results to return.

`int32 page_size = 5;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The pageSize to set.

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### setPageToken(String value)

```
public ListGroupsRequest.Builder setPageToken(String value)
```

If this field is not empty then it must contain the `next_page_token` value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.

`string page_token = 6;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The pageToken to set.

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### setPageTokenBytes(ByteString value)

```
public ListGroupsRequest.Builder setPageTokenBytes(ByteString value)
```

If this field is not empty then it must contain the `next_page_token` value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.

`string page_token = 6;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for pageToken to set.

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public ListGroupsRequest.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final ListGroupsRequest.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[ListGroupsRequest.Builder](/java/docs/reference/google-cloud-monitoring/3.40.0/com.google.monitoring.v3.ListGroupsRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
