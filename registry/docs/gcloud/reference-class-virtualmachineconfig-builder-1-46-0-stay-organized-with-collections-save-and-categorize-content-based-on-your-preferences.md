-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class VirtualMachineConfig.Builder (1.46.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.3 1.0.6 0.6.2

```
public static final class VirtualMachineConfig.Builder extends GeneratedMessageV3.Builder<VirtualMachineConfig.Builder> implements VirtualMachineConfigOrBuilder
```

The config settings for virtual machine.

Protobuf type `google.cloud.notebooks.v1.VirtualMachineConfig`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> VirtualMachineConfig.Builder

## Implements

[VirtualMachineConfigOrBuilder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfigOrBuilder)

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

### addAllContainerImages(Iterable<? extends ContainerImage> values)

```
public VirtualMachineConfig.Builder addAllContainerImages(Iterable<? extends ContainerImage> values)
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.notebooks.v1.ContainerImage>`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### addAllTags(Iterable<String> values)

```
public VirtualMachineConfig.Builder addAllTags(Iterable<String> values)
```

Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

`repeated string tags = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The tags to add.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### addContainerImages(ContainerImage value)

```
public VirtualMachineConfig.Builder addContainerImages(ContainerImage value)
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[ContainerImage](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.ContainerImage)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### addContainerImages(ContainerImage.Builder builderForValue)

```
public VirtualMachineConfig.Builder addContainerImages(ContainerImage.Builder builderForValue)
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[ContainerImage.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.ContainerImage.Builder)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### addContainerImages(int index, ContainerImage value)

```
public VirtualMachineConfig.Builder addContainerImages(int index, ContainerImage value)
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[ContainerImage](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.ContainerImage)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### addContainerImages(int index, ContainerImage.Builder builderForValue)

```
public VirtualMachineConfig.Builder addContainerImages(int index, ContainerImage.Builder builderForValue)
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[ContainerImage.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.ContainerImage.Builder)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### addContainerImagesBuilder()

```
public ContainerImage.Builder addContainerImagesBuilder()
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ContainerImage.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.ContainerImage.Builder)`

### addContainerImagesBuilder(int index)

```
public ContainerImage.Builder addContainerImagesBuilder(int index)
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ContainerImage.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.ContainerImage.Builder)`

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public VirtualMachineConfig.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### addTags(String value)

```
public VirtualMachineConfig.Builder addTags(String value)
```

Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

`repeated string tags = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The tags to add.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### addTagsBytes(ByteString value)

```
public VirtualMachineConfig.Builder addTagsBytes(ByteString value)
```

Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

`repeated string tags = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the tags to add.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### build()

```
public VirtualMachineConfig build()
```

**Returns**

**Type**

**Description**

`[VirtualMachineConfig](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig)`

### buildPartial()

```
public VirtualMachineConfig buildPartial()
```

**Returns**

**Type**

**Description**

`[VirtualMachineConfig](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig)`

### clear()

```
public VirtualMachineConfig.Builder clear()
```

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearAcceleratorConfig()

```
public VirtualMachineConfig.Builder clearAcceleratorConfig()
```

Optional. The Compute Engine accelerator configuration for this runtime.

`.google.cloud.notebooks.v1.RuntimeAcceleratorConfig accelerator_config = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### clearBootImage()

```
public VirtualMachineConfig.Builder clearBootImage()
```

Optional. Boot image metadata used for runtime upgradeability.

`.google.cloud.notebooks.v1.VirtualMachineConfig.BootImage boot_image = 19 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### clearContainerImages()

```
public VirtualMachineConfig.Builder clearContainerImages()
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### clearDataDisk()

```
public VirtualMachineConfig.Builder clearDataDisk()
```

Required. Data disk option configuration settings.

`.google.cloud.notebooks.v1.LocalDisk data_disk = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### clearEncryptionConfig()

```
public VirtualMachineConfig.Builder clearEncryptionConfig()
```

Optional. Encryption settings for virtual machine data disk.

`.google.cloud.notebooks.v1.EncryptionConfig encryption_config = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### clearField(Descriptors.FieldDescriptor field)

```
public VirtualMachineConfig.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearGuestAttributes()

```
public VirtualMachineConfig.Builder clearGuestAttributes()
```

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### clearInternalIpOnly()

```
public VirtualMachineConfig.Builder clearInternalIpOnly()
```

Optional. If true, runtime will only have internal IP addresses. By default, runtimes are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each vm. This `internal_ip_only` restriction can only be enabled for subnetwork enabled networks, and all dependencies must be configured to be accessible without external IP addresses.

`bool internal_ip_only = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### clearLabels()

```
public VirtualMachineConfig.Builder clearLabels()
```

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### clearMachineType()

```
public VirtualMachineConfig.Builder clearMachineType()
```

Required. The Compute Engine machine type used for runtimes. Short name is valid. Examples:

-   `n1-standard-2`
-   `e2-standard-8`

`string machine_type = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### clearMetadata()

```
public VirtualMachineConfig.Builder clearMetadata()
```

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### clearNetwork()

```
public VirtualMachineConfig.Builder clearNetwork()
```

Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork. If neither `network` nor `subnet` is specified, the "default" network of the project is used, if it exists.

A full URL or partial URI. Examples:

-   `https://www.googleapis.com/compute/v1/projects/[project_id]/global/networks/default`
-   `projects/[project_id]/global/networks/default`
    
    Runtimes are managed resources inside Google Infrastructure. Runtimes support the following network configurations:
    
-   Google Managed Network (Network & subnet are empty)
    
-   Consumer Project VPC (network & subnet are required). Requires configuring Private Service Access.
-   Shared VPC (network & subnet are required). Requires configuring Private Service Access.

`string network = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### clearNicType()

```
public VirtualMachineConfig.Builder clearNicType()
```

Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet.

`.google.cloud.notebooks.v1.VirtualMachineConfig.NicType nic_type = 17 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public VirtualMachineConfig.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearReservedIpRange()

```
public VirtualMachineConfig.Builder clearReservedIpRange()
```

Optional. Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range _name_ if it's assigned.

Example: managed-notebooks-range-c

 ```
 PEERING_RANGE_NAME_3=managed-notebooks-range-c
 gcloud compute addresses create $PEERING_RANGE_NAME_3 &#92;
   --global &#92;
   --prefix-length=24 &#92;
   --description="Google Cloud Managed Notebooks Range 24 c" &#92;
   --network=$NETWORK &#92;
   --addresses=192.168.0.0 &#92;
   --purpose=VPC_PEERING
```

Field value will be: `managed-notebooks-range-c`

`string reserved_ip_range = 18 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### clearShieldedInstanceConfig()

```
public VirtualMachineConfig.Builder clearShieldedInstanceConfig()
```

Optional. Shielded VM Instance configuration settings.

`.google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig shielded_instance_config = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### clearSubnet()

```
public VirtualMachineConfig.Builder clearSubnet()
```

Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network.

A full URL or partial URI are valid. Examples:

-   `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0`
-   `projects/[project_id]/regions/us-east1/subnetworks/sub0`

`string subnet = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### clearTags()

```
public VirtualMachineConfig.Builder clearTags()
```

Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

`repeated string tags = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### clearZone()

```
public VirtualMachineConfig.Builder clearZone()
```

Output only. The zone where the virtual machine is located. If using regional request, the notebooks service will pick a location in the corresponding runtime region. On a get request, zone will always be present. Example:

-   `us-central1-b`

`string zone = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### clone()

```
public VirtualMachineConfig.Builder clone()
```

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### containsGuestAttributes(String key)

```
public boolean containsGuestAttributes(String key)
```

Output only. The Compute Engine guest attributes. (see [Project and instance guest attributes](https://cloud.google.com/compute/docs/storing-retrieving-metadata#guest_attributes)).

`map<string, string> guest_attributes = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### containsLabels(String key)

```
public boolean containsLabels(String key)
```

Optional. The labels to associate with this runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.

`map<string, string> labels = 16 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### containsMetadata(String key)

```
public boolean containsMetadata(String key)
```

Optional. The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).

`map<string, string> metadata = 15 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAcceleratorConfig()

```
public RuntimeAcceleratorConfig getAcceleratorConfig()
```

Optional. The Compute Engine accelerator configuration for this runtime.

`.google.cloud.notebooks.v1.RuntimeAcceleratorConfig accelerator_config = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[RuntimeAcceleratorConfig](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.RuntimeAcceleratorConfig)`

The acceleratorConfig.

### getAcceleratorConfigBuilder()

```
public RuntimeAcceleratorConfig.Builder getAcceleratorConfigBuilder()
```

Optional. The Compute Engine accelerator configuration for this runtime.

`.google.cloud.notebooks.v1.RuntimeAcceleratorConfig accelerator_config = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[RuntimeAcceleratorConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.RuntimeAcceleratorConfig.Builder)`

### getAcceleratorConfigOrBuilder()

```
public RuntimeAcceleratorConfigOrBuilder getAcceleratorConfigOrBuilder()
```

Optional. The Compute Engine accelerator configuration for this runtime.

`.google.cloud.notebooks.v1.RuntimeAcceleratorConfig accelerator_config = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[RuntimeAcceleratorConfigOrBuilder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.RuntimeAcceleratorConfigOrBuilder)`

### getBootImage()

```
public VirtualMachineConfig.BootImage getBootImage()
```

Optional. Boot image metadata used for runtime upgradeability.

`.google.cloud.notebooks.v1.VirtualMachineConfig.BootImage boot_image = 19 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.BootImage](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.BootImage)`

The bootImage.

### getBootImageBuilder()

```
public VirtualMachineConfig.BootImage.Builder getBootImageBuilder()
```

Optional. Boot image metadata used for runtime upgradeability.

`.google.cloud.notebooks.v1.VirtualMachineConfig.BootImage boot_image = 19 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.BootImage.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.BootImage.Builder)`

### getBootImageOrBuilder()

```
public VirtualMachineConfig.BootImageOrBuilder getBootImageOrBuilder()
```

Optional. Boot image metadata used for runtime upgradeability.

`.google.cloud.notebooks.v1.VirtualMachineConfig.BootImage boot_image = 19 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.BootImageOrBuilder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.BootImageOrBuilder)`

### getContainerImages(int index)

```
public ContainerImage getContainerImages(int index)
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ContainerImage](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.ContainerImage)`

### getContainerImagesBuilder(int index)

```
public ContainerImage.Builder getContainerImagesBuilder(int index)
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ContainerImage.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.ContainerImage.Builder)`

### getContainerImagesBuilderList()

```
public List<ContainerImage.Builder> getContainerImagesBuilderList()
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.ContainerImage.Builder)>`

### getContainerImagesCount()

```
public int getContainerImagesCount()
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getContainerImagesList()

```
public List<ContainerImage> getContainerImagesList()
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ContainerImage](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.ContainerImage)>`

### getContainerImagesOrBuilder(int index)

```
public ContainerImageOrBuilder getContainerImagesOrBuilder(int index)
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ContainerImageOrBuilder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.ContainerImageOrBuilder)`

### getContainerImagesOrBuilderList()

```
public List<? extends ContainerImageOrBuilder> getContainerImagesOrBuilderList()
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.notebooks.v1.ContainerImageOrBuilder>`

### getDataDisk()

```
public LocalDisk getDataDisk()
```

Required. Data disk option configuration settings.

`.google.cloud.notebooks.v1.LocalDisk data_disk = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[LocalDisk](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.LocalDisk)`

The dataDisk.

### getDataDiskBuilder()

```
public LocalDisk.Builder getDataDiskBuilder()
```

Required. Data disk option configuration settings.

`.google.cloud.notebooks.v1.LocalDisk data_disk = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[LocalDisk.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.LocalDisk.Builder)`

### getDataDiskOrBuilder()

```
public LocalDiskOrBuilder getDataDiskOrBuilder()
```

Required. Data disk option configuration settings.

`.google.cloud.notebooks.v1.LocalDisk data_disk = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[LocalDiskOrBuilder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.LocalDiskOrBuilder)`

### getDefaultInstanceForType()

```
public VirtualMachineConfig getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[VirtualMachineConfig](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig)`

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

### getEncryptionConfig()

```
public EncryptionConfig getEncryptionConfig()
```

Optional. Encryption settings for virtual machine data disk.

`.google.cloud.notebooks.v1.EncryptionConfig encryption_config = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[EncryptionConfig](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.EncryptionConfig)`

The encryptionConfig.

### getEncryptionConfigBuilder()

```
public EncryptionConfig.Builder getEncryptionConfigBuilder()
```

Optional. Encryption settings for virtual machine data disk.

`.google.cloud.notebooks.v1.EncryptionConfig encryption_config = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[EncryptionConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.EncryptionConfig.Builder)`

### getEncryptionConfigOrBuilder()

```
public EncryptionConfigOrBuilder getEncryptionConfigOrBuilder()
```

Optional. Encryption settings for virtual machine data disk.

`.google.cloud.notebooks.v1.EncryptionConfig encryption_config = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[EncryptionConfigOrBuilder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.EncryptionConfigOrBuilder)`

### getGuestAttributes() (deprecated)

```
public Map<String,String> getGuestAttributes()
```

Use [#getGuestAttributesMap()](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder#com_google_cloud_notebooks_v1_VirtualMachineConfig_Builder_getGuestAttributesMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getGuestAttributesCount()

```
public int getGuestAttributesCount()
```

Output only. The Compute Engine guest attributes. (see [Project and instance guest attributes](https://cloud.google.com/compute/docs/storing-retrieving-metadata#guest_attributes)).

`map<string, string> guest_attributes = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getGuestAttributesMap()

```
public Map<String,String> getGuestAttributesMap()
```

Output only. The Compute Engine guest attributes. (see [Project and instance guest attributes](https://cloud.google.com/compute/docs/storing-retrieving-metadata#guest_attributes)).

`map<string, string> guest_attributes = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getGuestAttributesOrDefault(String key, String defaultValue)

```
public String getGuestAttributesOrDefault(String key, String defaultValue)
```

Output only. The Compute Engine guest attributes. (see [Project and instance guest attributes](https://cloud.google.com/compute/docs/storing-retrieving-metadata#guest_attributes)).

`map<string, string> guest_attributes = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];`

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

### getGuestAttributesOrThrow(String key)

```
public String getGuestAttributesOrThrow(String key)
```

Output only. The Compute Engine guest attributes. (see [Project and instance guest attributes](https://cloud.google.com/compute/docs/storing-retrieving-metadata#guest_attributes)).

`map<string, string> guest_attributes = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getInternalIpOnly()

```
public boolean getInternalIpOnly()
```

Optional. If true, runtime will only have internal IP addresses. By default, runtimes are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each vm. This `internal_ip_only` restriction can only be enabled for subnetwork enabled networks, and all dependencies must be configured to be accessible without external IP addresses.

`bool internal_ip_only = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The internalIpOnly.

### getLabels() (deprecated)

```
public Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder#com_google_cloud_notebooks_v1_VirtualMachineConfig_Builder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public int getLabelsCount()
```

Optional. The labels to associate with this runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.

`map<string, string> labels = 16 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public Map<String,String> getLabelsMap()
```

Optional. The labels to associate with this runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.

`map<string, string> labels = 16 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public String getLabelsOrDefault(String key, String defaultValue)
```

Optional. The labels to associate with this runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.

`map<string, string> labels = 16 [(.google.api.field_behavior) = OPTIONAL];`

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

### getLabelsOrThrow(String key)

```
public String getLabelsOrThrow(String key)
```

Optional. The labels to associate with this runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.

`map<string, string> labels = 16 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getMachineType()

```
public String getMachineType()
```

Required. The Compute Engine machine type used for runtimes. Short name is valid. Examples:

-   `n1-standard-2`
-   `e2-standard-8`

`string machine_type = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The machineType.

### getMachineTypeBytes()

```
public ByteString getMachineTypeBytes()
```

Required. The Compute Engine machine type used for runtimes. Short name is valid. Examples:

-   `n1-standard-2`
-   `e2-standard-8`

`string machine_type = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for machineType.

### getMetadata() (deprecated)

```
public Map<String,String> getMetadata()
```

Use [#getMetadataMap()](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder#com_google_cloud_notebooks_v1_VirtualMachineConfig_Builder_getMetadataMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getMetadataCount()

```
public int getMetadataCount()
```

Optional. The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).

`map<string, string> metadata = 15 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getMetadataMap()

```
public Map<String,String> getMetadataMap()
```

Optional. The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).

`map<string, string> metadata = 15 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getMetadataOrDefault(String key, String defaultValue)

```
public String getMetadataOrDefault(String key, String defaultValue)
```

Optional. The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).

`map<string, string> metadata = 15 [(.google.api.field_behavior) = OPTIONAL];`

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

### getMetadataOrThrow(String key)

```
public String getMetadataOrThrow(String key)
```

Optional. The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).

`map<string, string> metadata = 15 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getMutableGuestAttributes() (deprecated)

```
public Map<String,String> getMutableGuestAttributes()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getMutableLabels() (deprecated)

```
public Map<String,String> getMutableLabels()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getMutableMetadata() (deprecated)

```
public Map<String,String> getMutableMetadata()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getNetwork()

```
public String getNetwork()
```

Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork. If neither `network` nor `subnet` is specified, the "default" network of the project is used, if it exists.

A full URL or partial URI. Examples:

-   `https://www.googleapis.com/compute/v1/projects/[project_id]/global/networks/default`
-   `projects/[project_id]/global/networks/default`
    
    Runtimes are managed resources inside Google Infrastructure. Runtimes support the following network configurations:
    
-   Google Managed Network (Network & subnet are empty)
    
-   Consumer Project VPC (network & subnet are required). Requires configuring Private Service Access.
-   Shared VPC (network & subnet are required). Requires configuring Private Service Access.

`string network = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The network.

### getNetworkBytes()

```
public ByteString getNetworkBytes()
```

Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork. If neither `network` nor `subnet` is specified, the "default" network of the project is used, if it exists.

A full URL or partial URI. Examples:

-   `https://www.googleapis.com/compute/v1/projects/[project_id]/global/networks/default`
-   `projects/[project_id]/global/networks/default`
    
    Runtimes are managed resources inside Google Infrastructure. Runtimes support the following network configurations:
    
-   Google Managed Network (Network & subnet are empty)
    
-   Consumer Project VPC (network & subnet are required). Requires configuring Private Service Access.
-   Shared VPC (network & subnet are required). Requires configuring Private Service Access.

`string network = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for network.

### getNicType()

```
public VirtualMachineConfig.NicType getNicType()
```

Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet.

`.google.cloud.notebooks.v1.VirtualMachineConfig.NicType nic_type = 17 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.NicType](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.NicType)`

The nicType.

### getNicTypeValue()

```
public int getNicTypeValue()
```

Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet.

`.google.cloud.notebooks.v1.VirtualMachineConfig.NicType nic_type = 17 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for nicType.

### getReservedIpRange()

```
public String getReservedIpRange()
```

Optional. Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range _name_ if it's assigned.

Example: managed-notebooks-range-c

 ```
 PEERING_RANGE_NAME_3=managed-notebooks-range-c
 gcloud compute addresses create $PEERING_RANGE_NAME_3 &#92;
   --global &#92;
   --prefix-length=24 &#92;
   --description="Google Cloud Managed Notebooks Range 24 c" &#92;
   --network=$NETWORK &#92;
   --addresses=192.168.0.0 &#92;
   --purpose=VPC_PEERING
```

Field value will be: `managed-notebooks-range-c`

`string reserved_ip_range = 18 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The reservedIpRange.

### getReservedIpRangeBytes()

```
public ByteString getReservedIpRangeBytes()
```

Optional. Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range _name_ if it's assigned.

Example: managed-notebooks-range-c

 ```
 PEERING_RANGE_NAME_3=managed-notebooks-range-c
 gcloud compute addresses create $PEERING_RANGE_NAME_3 &#92;
   --global &#92;
   --prefix-length=24 &#92;
   --description="Google Cloud Managed Notebooks Range 24 c" &#92;
   --network=$NETWORK &#92;
   --addresses=192.168.0.0 &#92;
   --purpose=VPC_PEERING
```

Field value will be: `managed-notebooks-range-c`

`string reserved_ip_range = 18 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for reservedIpRange.

### getShieldedInstanceConfig()

```
public RuntimeShieldedInstanceConfig getShieldedInstanceConfig()
```

Optional. Shielded VM Instance configuration settings.

`.google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig shielded_instance_config = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[RuntimeShieldedInstanceConfig](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig)`

The shieldedInstanceConfig.

### getShieldedInstanceConfigBuilder()

```
public RuntimeShieldedInstanceConfig.Builder getShieldedInstanceConfigBuilder()
```

Optional. Shielded VM Instance configuration settings.

`.google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig shielded_instance_config = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[RuntimeShieldedInstanceConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig.Builder)`

### getShieldedInstanceConfigOrBuilder()

```
public RuntimeShieldedInstanceConfigOrBuilder getShieldedInstanceConfigOrBuilder()
```

Optional. Shielded VM Instance configuration settings.

`.google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig shielded_instance_config = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[RuntimeShieldedInstanceConfigOrBuilder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.RuntimeShieldedInstanceConfigOrBuilder)`

### getSubnet()

```
public String getSubnet()
```

Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network.

A full URL or partial URI are valid. Examples:

-   `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0`
-   `projects/[project_id]/regions/us-east1/subnetworks/sub0`

`string subnet = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The subnet.

### getSubnetBytes()

```
public ByteString getSubnetBytes()
```

Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network.

A full URL or partial URI are valid. Examples:

-   `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0`
-   `projects/[project_id]/regions/us-east1/subnetworks/sub0`

`string subnet = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for subnet.

### getTags(int index)

```
public String getTags(int index)
```

Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

`repeated string tags = 13 [(.google.api.field_behavior) = OPTIONAL];`

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

The tags at the given index.

### getTagsBytes(int index)

```
public ByteString getTagsBytes(int index)
```

Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

`repeated string tags = 13 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the tags at the given index.

### getTagsCount()

```
public int getTagsCount()
```

Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

`repeated string tags = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of tags.

### getTagsList()

```
public ProtocolStringList getTagsList()
```

Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

`repeated string tags = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)`

A list containing the tags.

### getZone()

```
public String getZone()
```

Output only. The zone where the virtual machine is located. If using regional request, the notebooks service will pick a location in the corresponding runtime region. On a get request, zone will always be present. Example:

-   `us-central1-b`

`string zone = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The zone.

### getZoneBytes()

```
public ByteString getZoneBytes()
```

Output only. The zone where the virtual machine is located. If using regional request, the notebooks service will pick a location in the corresponding runtime region. On a get request, zone will always be present. Example:

-   `us-central1-b`

`string zone = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for zone.

### hasAcceleratorConfig()

```
public boolean hasAcceleratorConfig()
```

Optional. The Compute Engine accelerator configuration for this runtime.

`.google.cloud.notebooks.v1.RuntimeAcceleratorConfig accelerator_config = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the acceleratorConfig field is set.

### hasBootImage()

```
public boolean hasBootImage()
```

Optional. Boot image metadata used for runtime upgradeability.

`.google.cloud.notebooks.v1.VirtualMachineConfig.BootImage boot_image = 19 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the bootImage field is set.

### hasDataDisk()

```
public boolean hasDataDisk()
```

Required. Data disk option configuration settings.

`.google.cloud.notebooks.v1.LocalDisk data_disk = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the dataDisk field is set.

### hasEncryptionConfig()

```
public boolean hasEncryptionConfig()
```

Optional. Encryption settings for virtual machine data disk.

`.google.cloud.notebooks.v1.EncryptionConfig encryption_config = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the encryptionConfig field is set.

### hasShieldedInstanceConfig()

```
public boolean hasShieldedInstanceConfig()
```

Optional. Shielded VM Instance configuration settings.

`.google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig shielded_instance_config = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the shieldedInstanceConfig field is set.

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

### mergeAcceleratorConfig(RuntimeAcceleratorConfig value)

```
public VirtualMachineConfig.Builder mergeAcceleratorConfig(RuntimeAcceleratorConfig value)
```

Optional. The Compute Engine accelerator configuration for this runtime.

`.google.cloud.notebooks.v1.RuntimeAcceleratorConfig accelerator_config = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[RuntimeAcceleratorConfig](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.RuntimeAcceleratorConfig)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### mergeBootImage(VirtualMachineConfig.BootImage value)

```
public VirtualMachineConfig.Builder mergeBootImage(VirtualMachineConfig.BootImage value)
```

Optional. Boot image metadata used for runtime upgradeability.

`.google.cloud.notebooks.v1.VirtualMachineConfig.BootImage boot_image = 19 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[VirtualMachineConfig.BootImage](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.BootImage)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### mergeDataDisk(LocalDisk value)

```
public VirtualMachineConfig.Builder mergeDataDisk(LocalDisk value)
```

Required. Data disk option configuration settings.

`.google.cloud.notebooks.v1.LocalDisk data_disk = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[LocalDisk](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.LocalDisk)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### mergeEncryptionConfig(EncryptionConfig value)

```
public VirtualMachineConfig.Builder mergeEncryptionConfig(EncryptionConfig value)
```

Optional. Encryption settings for virtual machine data disk.

`.google.cloud.notebooks.v1.EncryptionConfig encryption_config = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[EncryptionConfig](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.EncryptionConfig)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### mergeFrom(VirtualMachineConfig other)

```
public VirtualMachineConfig.Builder mergeFrom(VirtualMachineConfig other)
```

**Parameter**

**Name**

**Description**

`other`

`[VirtualMachineConfig](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public VirtualMachineConfig.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public VirtualMachineConfig.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeShieldedInstanceConfig(RuntimeShieldedInstanceConfig value)

```
public VirtualMachineConfig.Builder mergeShieldedInstanceConfig(RuntimeShieldedInstanceConfig value)
```

Optional. Shielded VM Instance configuration settings.

`.google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig shielded_instance_config = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[RuntimeShieldedInstanceConfig](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final VirtualMachineConfig.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### putAllGuestAttributes(Map<String,String> values)

```
public VirtualMachineConfig.Builder putAllGuestAttributes(Map<String,String> values)
```

Output only. The Compute Engine guest attributes. (see [Project and instance guest attributes](https://cloud.google.com/compute/docs/storing-retrieving-metadata#guest_attributes)).

`map<string, string> guest_attributes = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`values`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### putAllLabels(Map<String,String> values)

```
public VirtualMachineConfig.Builder putAllLabels(Map<String,String> values)
```

Optional. The labels to associate with this runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.

`map<string, string> labels = 16 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`values`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### putAllMetadata(Map<String,String> values)

```
public VirtualMachineConfig.Builder putAllMetadata(Map<String,String> values)
```

Optional. The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).

`map<string, string> metadata = 15 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`values`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### putGuestAttributes(String key, String value)

```
public VirtualMachineConfig.Builder putGuestAttributes(String key, String value)
```

Output only. The Compute Engine guest attributes. (see [Project and instance guest attributes](https://cloud.google.com/compute/docs/storing-retrieving-metadata#guest_attributes)).

`map<string, string> guest_attributes = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];`

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

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### putLabels(String key, String value)

```
public VirtualMachineConfig.Builder putLabels(String key, String value)
```

Optional. The labels to associate with this runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.

`map<string, string> labels = 16 [(.google.api.field_behavior) = OPTIONAL];`

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

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### putMetadata(String key, String value)

```
public VirtualMachineConfig.Builder putMetadata(String key, String value)
```

Optional. The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).

`map<string, string> metadata = 15 [(.google.api.field_behavior) = OPTIONAL];`

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

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### removeContainerImages(int index)

```
public VirtualMachineConfig.Builder removeContainerImages(int index)
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### removeGuestAttributes(String key)

```
public VirtualMachineConfig.Builder removeGuestAttributes(String key)
```

Output only. The Compute Engine guest attributes. (see [Project and instance guest attributes](https://cloud.google.com/compute/docs/storing-retrieving-metadata#guest_attributes)).

`map<string, string> guest_attributes = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### removeLabels(String key)

```
public VirtualMachineConfig.Builder removeLabels(String key)
```

Optional. The labels to associate with this runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.

`map<string, string> labels = 16 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### removeMetadata(String key)

```
public VirtualMachineConfig.Builder removeMetadata(String key)
```

Optional. The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).

`map<string, string> metadata = 15 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### setAcceleratorConfig(RuntimeAcceleratorConfig value)

```
public VirtualMachineConfig.Builder setAcceleratorConfig(RuntimeAcceleratorConfig value)
```

Optional. The Compute Engine accelerator configuration for this runtime.

`.google.cloud.notebooks.v1.RuntimeAcceleratorConfig accelerator_config = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[RuntimeAcceleratorConfig](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.RuntimeAcceleratorConfig)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### setAcceleratorConfig(RuntimeAcceleratorConfig.Builder builderForValue)

```
public VirtualMachineConfig.Builder setAcceleratorConfig(RuntimeAcceleratorConfig.Builder builderForValue)
```

Optional. The Compute Engine accelerator configuration for this runtime.

`.google.cloud.notebooks.v1.RuntimeAcceleratorConfig accelerator_config = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[RuntimeAcceleratorConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.RuntimeAcceleratorConfig.Builder)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### setBootImage(VirtualMachineConfig.BootImage value)

```
public VirtualMachineConfig.Builder setBootImage(VirtualMachineConfig.BootImage value)
```

Optional. Boot image metadata used for runtime upgradeability.

`.google.cloud.notebooks.v1.VirtualMachineConfig.BootImage boot_image = 19 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[VirtualMachineConfig.BootImage](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.BootImage)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### setBootImage(VirtualMachineConfig.BootImage.Builder builderForValue)

```
public VirtualMachineConfig.Builder setBootImage(VirtualMachineConfig.BootImage.Builder builderForValue)
```

Optional. Boot image metadata used for runtime upgradeability.

`.google.cloud.notebooks.v1.VirtualMachineConfig.BootImage boot_image = 19 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[VirtualMachineConfig.BootImage.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.BootImage.Builder)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### setContainerImages(int index, ContainerImage value)

```
public VirtualMachineConfig.Builder setContainerImages(int index, ContainerImage value)
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[ContainerImage](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.ContainerImage)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### setContainerImages(int index, ContainerImage.Builder builderForValue)

```
public VirtualMachineConfig.Builder setContainerImages(int index, ContainerImage.Builder builderForValue)
```

Optional. Use a list of container images to use as Kernels in the notebook instance.

`repeated .google.cloud.notebooks.v1.ContainerImage container_images = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[ContainerImage.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.ContainerImage.Builder)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### setDataDisk(LocalDisk value)

```
public VirtualMachineConfig.Builder setDataDisk(LocalDisk value)
```

Required. Data disk option configuration settings.

`.google.cloud.notebooks.v1.LocalDisk data_disk = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[LocalDisk](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.LocalDisk)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### setDataDisk(LocalDisk.Builder builderForValue)

```
public VirtualMachineConfig.Builder setDataDisk(LocalDisk.Builder builderForValue)
```

Required. Data disk option configuration settings.

`.google.cloud.notebooks.v1.LocalDisk data_disk = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[LocalDisk.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.LocalDisk.Builder)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### setEncryptionConfig(EncryptionConfig value)

```
public VirtualMachineConfig.Builder setEncryptionConfig(EncryptionConfig value)
```

Optional. Encryption settings for virtual machine data disk.

`.google.cloud.notebooks.v1.EncryptionConfig encryption_config = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[EncryptionConfig](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.EncryptionConfig)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### setEncryptionConfig(EncryptionConfig.Builder builderForValue)

```
public VirtualMachineConfig.Builder setEncryptionConfig(EncryptionConfig.Builder builderForValue)
```

Optional. Encryption settings for virtual machine data disk.

`.google.cloud.notebooks.v1.EncryptionConfig encryption_config = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[EncryptionConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.EncryptionConfig.Builder)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public VirtualMachineConfig.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setInternalIpOnly(boolean value)

```
public VirtualMachineConfig.Builder setInternalIpOnly(boolean value)
```

Optional. If true, runtime will only have internal IP addresses. By default, runtimes are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each vm. This `internal_ip_only` restriction can only be enabled for subnetwork enabled networks, and all dependencies must be configured to be accessible without external IP addresses.

`bool internal_ip_only = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The internalIpOnly to set.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### setMachineType(String value)

```
public VirtualMachineConfig.Builder setMachineType(String value)
```

Required. The Compute Engine machine type used for runtimes. Short name is valid. Examples:

-   `n1-standard-2`
-   `e2-standard-8`

`string machine_type = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The machineType to set.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### setMachineTypeBytes(ByteString value)

```
public VirtualMachineConfig.Builder setMachineTypeBytes(ByteString value)
```

Required. The Compute Engine machine type used for runtimes. Short name is valid. Examples:

-   `n1-standard-2`
-   `e2-standard-8`

`string machine_type = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for machineType to set.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### setNetwork(String value)

```
public VirtualMachineConfig.Builder setNetwork(String value)
```

Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork. If neither `network` nor `subnet` is specified, the "default" network of the project is used, if it exists.

A full URL or partial URI. Examples:

-   `https://www.googleapis.com/compute/v1/projects/[project_id]/global/networks/default`
-   `projects/[project_id]/global/networks/default`
    
    Runtimes are managed resources inside Google Infrastructure. Runtimes support the following network configurations:
    
-   Google Managed Network (Network & subnet are empty)
    
-   Consumer Project VPC (network & subnet are required). Requires configuring Private Service Access.
-   Shared VPC (network & subnet are required). Requires configuring Private Service Access.

`string network = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The network to set.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### setNetworkBytes(ByteString value)

```
public VirtualMachineConfig.Builder setNetworkBytes(ByteString value)
```

Optional. The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork. If neither `network` nor `subnet` is specified, the "default" network of the project is used, if it exists.

A full URL or partial URI. Examples:

-   `https://www.googleapis.com/compute/v1/projects/[project_id]/global/networks/default`
-   `projects/[project_id]/global/networks/default`
    
    Runtimes are managed resources inside Google Infrastructure. Runtimes support the following network configurations:
    
-   Google Managed Network (Network & subnet are empty)
    
-   Consumer Project VPC (network & subnet are required). Requires configuring Private Service Access.
-   Shared VPC (network & subnet are required). Requires configuring Private Service Access.

`string network = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for network to set.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### setNicType(VirtualMachineConfig.NicType value)

```
public VirtualMachineConfig.Builder setNicType(VirtualMachineConfig.NicType value)
```

Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet.

`.google.cloud.notebooks.v1.VirtualMachineConfig.NicType nic_type = 17 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[VirtualMachineConfig.NicType](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.NicType)`  

The nicType to set.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### setNicTypeValue(int value)

```
public VirtualMachineConfig.Builder setNicTypeValue(int value)
```

Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet.

`.google.cloud.notebooks.v1.VirtualMachineConfig.NicType nic_type = 17 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enum numeric value on the wire for nicType to set.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public VirtualMachineConfig.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setReservedIpRange(String value)

```
public VirtualMachineConfig.Builder setReservedIpRange(String value)
```

Optional. Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range _name_ if it's assigned.

Example: managed-notebooks-range-c

 ```
 PEERING_RANGE_NAME_3=managed-notebooks-range-c
 gcloud compute addresses create $PEERING_RANGE_NAME_3 &#92;
   --global &#92;
   --prefix-length=24 &#92;
   --description="Google Cloud Managed Notebooks Range 24 c" &#92;
   --network=$NETWORK &#92;
   --addresses=192.168.0.0 &#92;
   --purpose=VPC_PEERING
```

Field value will be: `managed-notebooks-range-c`

`string reserved_ip_range = 18 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The reservedIpRange to set.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### setReservedIpRangeBytes(ByteString value)

```
public VirtualMachineConfig.Builder setReservedIpRangeBytes(ByteString value)
```

Optional. Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range _name_ if it's assigned.

Example: managed-notebooks-range-c

 ```
 PEERING_RANGE_NAME_3=managed-notebooks-range-c
 gcloud compute addresses create $PEERING_RANGE_NAME_3 &#92;
   --global &#92;
   --prefix-length=24 &#92;
   --description="Google Cloud Managed Notebooks Range 24 c" &#92;
   --network=$NETWORK &#92;
   --addresses=192.168.0.0 &#92;
   --purpose=VPC_PEERING
```

Field value will be: `managed-notebooks-range-c`

`string reserved_ip_range = 18 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for reservedIpRange to set.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### setShieldedInstanceConfig(RuntimeShieldedInstanceConfig value)

```
public VirtualMachineConfig.Builder setShieldedInstanceConfig(RuntimeShieldedInstanceConfig value)
```

Optional. Shielded VM Instance configuration settings.

`.google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig shielded_instance_config = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[RuntimeShieldedInstanceConfig](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### setShieldedInstanceConfig(RuntimeShieldedInstanceConfig.Builder builderForValue)

```
public VirtualMachineConfig.Builder setShieldedInstanceConfig(RuntimeShieldedInstanceConfig.Builder builderForValue)
```

Optional. Shielded VM Instance configuration settings.

`.google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig shielded_instance_config = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[RuntimeShieldedInstanceConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig.Builder)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

### setSubnet(String value)

```
public VirtualMachineConfig.Builder setSubnet(String value)
```

Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network.

A full URL or partial URI are valid. Examples:

-   `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0`
-   `projects/[project_id]/regions/us-east1/subnetworks/sub0`

`string subnet = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The subnet to set.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### setSubnetBytes(ByteString value)

```
public VirtualMachineConfig.Builder setSubnetBytes(ByteString value)
```

Optional. The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network.

A full URL or partial URI are valid. Examples:

-   `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/subnetworks/sub0`
-   `projects/[project_id]/regions/us-east1/subnetworks/sub0`

`string subnet = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for subnet to set.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### setTags(int index, String value)

```
public VirtualMachineConfig.Builder setTags(int index, String value)
```

Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

`repeated string tags = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The tags to set.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final VirtualMachineConfig.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setZone(String value)

```
public VirtualMachineConfig.Builder setZone(String value)
```

Output only. The zone where the virtual machine is located. If using regional request, the notebooks service will pick a location in the corresponding runtime region. On a get request, zone will always be present. Example:

-   `us-central1-b`

`string zone = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The zone to set.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

### setZoneBytes(ByteString value)

```
public VirtualMachineConfig.Builder setZoneBytes(ByteString value)
```

Output only. The zone where the virtual machine is located. If using regional request, the notebooks service will pick a location in the corresponding runtime region. On a get request, zone will always be present. Example:

-   `us-central1-b`

`string zone = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for zone to set.

**Returns**

**Type**

**Description**

`[VirtualMachineConfig.Builder](/java/docs/reference/google-cloud-notebooks/1.46.0/com.google.cloud.notebooks.v1.VirtualMachineConfig.Builder)`

This builder for chaining.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
