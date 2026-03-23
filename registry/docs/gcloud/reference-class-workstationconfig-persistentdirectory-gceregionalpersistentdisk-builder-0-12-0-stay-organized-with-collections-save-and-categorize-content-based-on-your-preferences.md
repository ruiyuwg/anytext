-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder (0.12.0) Stay organized with collections Save and categorize content based on your preferences.

0.75.0 (latest) 0.73.0 0.71.0 0.70.0 0.68.0 0.66.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.58.0 0.56.0 0.55.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static final class WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder extends GeneratedMessageV3.Builder<WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder> implements WorkstationConfig.PersistentDirectory.GceRegionalPersistentDiskOrBuilder
```

A PersistentDirectory backed by a Compute Engine regional persistent disk. The persistent\_directories field is repeated, but it may contain only one entry. It creates a [persistent disk](https://cloud.google.com/compute/docs/disks/persistent-disks) that mounts to the workstation VM at `/home` when the session starts and detaches when the session ends. If this field is empty, workstations created with this configuration do not have a persistent home directory.

Protobuf type `google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder

## Implements

[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDiskOrBuilder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDiskOrBuilder)

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
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk build()
```

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk)`

### buildPartial()

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk buildPartial()
```

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk)`

### clear()

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder clear()
```

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearDiskType()

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder clearDiskType()
```

Optional. The [type of the persistent disk](https://cloud.google.com/compute/docs/disks#disk-types) for the home directory. Defaults to `"pd-standard"`.

`string disk_type = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearFsType()

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder clearFsType()
```

Optional. Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if source\_snapshot is set. Defaults to `"ext4"`.

`string fs_type = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearReclaimPolicy()

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder clearReclaimPolicy()
```

Optional. Whether the persistent disk should be deleted when the workstation is deleted. Valid values are `DELETE` and `RETAIN`. Defaults to `DELETE`.

`.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy reclaim_policy = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

This builder for chaining.

### clearSizeGb()

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder clearSizeGb()
```

Optional. The GB capacity of a persistent home directory for each workstation created with this configuration. Must be empty if source\_snapshot is set.

Valid values are `10`, `50`, `100`, `200`, `500`, or `1000`. Defaults to `200`. If less than `200` GB, the disk\_type must be `"pd-balanced"` or `"pd-ssd"`.

`int32 size_gb = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

This builder for chaining.

### clearSourceSnapshot()

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder clearSourceSnapshot()
```

Optional. Name of the snapshot to use as the source for the disk. If set, size\_gb and fs\_type must be empty.

`string source_snapshot = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

This builder for chaining.

### clone()

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder clone()
```

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getDefaultInstanceForType()

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk)`

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

### getDiskType()

```
public String getDiskType()
```

Optional. The [type of the persistent disk](https://cloud.google.com/compute/docs/disks#disk-types) for the home directory. Defaults to `"pd-standard"`.

`string disk_type = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The diskType.

### getDiskTypeBytes()

```
public ByteString getDiskTypeBytes()
```

Optional. The [type of the persistent disk](https://cloud.google.com/compute/docs/disks#disk-types) for the home directory. Defaults to `"pd-standard"`.

`string disk_type = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for diskType.

### getFsType()

```
public String getFsType()
```

Optional. Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if source\_snapshot is set. Defaults to `"ext4"`.

`string fs_type = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The fsType.

### getFsTypeBytes()

```
public ByteString getFsTypeBytes()
```

Optional. Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if source\_snapshot is set. Defaults to `"ext4"`.

`string fs_type = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for fsType.

### getReclaimPolicy()

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy getReclaimPolicy()
```

Optional. Whether the persistent disk should be deleted when the workstation is deleted. Valid values are `DELETE` and `RETAIN`. Defaults to `DELETE`.

`.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy reclaim_policy = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy)`

The reclaimPolicy.

### getReclaimPolicyValue()

```
public int getReclaimPolicyValue()
```

Optional. Whether the persistent disk should be deleted when the workstation is deleted. Valid values are `DELETE` and `RETAIN`. Defaults to `DELETE`.

`.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy reclaim_policy = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for reclaimPolicy.

### getSizeGb()

```
public int getSizeGb()
```

Optional. The GB capacity of a persistent home directory for each workstation created with this configuration. Must be empty if source\_snapshot is set.

Valid values are `10`, `50`, `100`, `200`, `500`, or `1000`. Defaults to `200`. If less than `200` GB, the disk\_type must be `"pd-balanced"` or `"pd-ssd"`.

`int32 size_gb = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The sizeGb.

### getSourceSnapshot()

```
public String getSourceSnapshot()
```

Optional. Name of the snapshot to use as the source for the disk. If set, size\_gb and fs\_type must be empty.

`string source_snapshot = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The sourceSnapshot.

### getSourceSnapshotBytes()

```
public ByteString getSourceSnapshotBytes()
```

Optional. Name of the snapshot to use as the source for the disk. If set, size\_gb and fs\_type must be empty.

`string source_snapshot = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for sourceSnapshot.

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

### mergeFrom(WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk other)

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder mergeFrom(WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk other)
```

**Parameter**

**Name**

**Description**

`other`

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk)`  

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setDiskType(String value)

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder setDiskType(String value)
```

Optional. The [type of the persistent disk](https://cloud.google.com/compute/docs/disks#disk-types) for the home directory. Defaults to `"pd-standard"`.

`string disk_type = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The diskType to set.

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

This builder for chaining.

### setDiskTypeBytes(ByteString value)

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder setDiskTypeBytes(ByteString value)
```

Optional. The [type of the persistent disk](https://cloud.google.com/compute/docs/disks#disk-types) for the home directory. Defaults to `"pd-standard"`.

`string disk_type = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for diskType to set.

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setFsType(String value)

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder setFsType(String value)
```

Optional. Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if source\_snapshot is set. Defaults to `"ext4"`.

`string fs_type = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The fsType to set.

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

This builder for chaining.

### setFsTypeBytes(ByteString value)

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder setFsTypeBytes(ByteString value)
```

Optional. Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if source\_snapshot is set. Defaults to `"ext4"`.

`string fs_type = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for fsType to set.

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

This builder for chaining.

### setReclaimPolicy(WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy value)

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder setReclaimPolicy(WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy value)
```

Optional. Whether the persistent disk should be deleted when the workstation is deleted. Valid values are `DELETE` and `RETAIN`. Defaults to `DELETE`.

`.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy reclaim_policy = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy)`  

The reclaimPolicy to set.

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

This builder for chaining.

### setReclaimPolicyValue(int value)

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder setReclaimPolicyValue(int value)
```

Optional. Whether the persistent disk should be deleted when the workstation is deleted. Valid values are `DELETE` and `RETAIN`. Defaults to `DELETE`.

`.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy reclaim_policy = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enum numeric value on the wire for reclaimPolicy to set.

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setSizeGb(int value)

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder setSizeGb(int value)
```

Optional. The GB capacity of a persistent home directory for each workstation created with this configuration. Must be empty if source\_snapshot is set.

Valid values are `10`, `50`, `100`, `200`, `500`, or `1000`. Defaults to `200`. If less than `200` GB, the disk\_type must be `"pd-balanced"` or `"pd-ssd"`.

`int32 size_gb = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The sizeGb to set.

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

This builder for chaining.

### setSourceSnapshot(String value)

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder setSourceSnapshot(String value)
```

Optional. Name of the snapshot to use as the source for the disk. If set, size\_gb and fs\_type must be empty.

`string source_snapshot = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The sourceSnapshot to set.

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

This builder for chaining.

### setSourceSnapshotBytes(ByteString value)

```
public WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder setSourceSnapshotBytes(ByteString value)
```

Optional. Name of the snapshot to use as the source for the disk. If set, size\_gb and fs\_type must be empty.

`string source_snapshot = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for sourceSnapshot to set.

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

This builder for chaining.

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder](/java/docs/reference/google-cloud-workstations/0.12.0/com.google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
