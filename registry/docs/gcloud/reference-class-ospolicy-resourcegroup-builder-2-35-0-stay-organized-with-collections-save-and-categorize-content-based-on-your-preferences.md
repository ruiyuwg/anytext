-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class OSPolicy.ResourceGroup.Builder (2.35.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.6 2.4.3 2.3.2

```
public static final class OSPolicy.ResourceGroup.Builder extends GeneratedMessageV3.Builder<OSPolicy.ResourceGroup.Builder> implements OSPolicy.ResourceGroupOrBuilder
```

Resource groups provide a mechanism to group OS policy resources.

Resource groups enable OS policy authors to create a single OS policy to be applied to VMs running different operating Systems.

When the OS policy is applied to a target VM, the appropriate resource group within the OS policy is selected based on the `OSFilter` specified within the resource group.

Protobuf type `google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> OSPolicy.ResourceGroup.Builder

## Implements

[OSPolicy.ResourceGroupOrBuilder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroupOrBuilder)

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

### addAllInventoryFilters(Iterable<? extends OSPolicy.InventoryFilter> values)

```
public OSPolicy.ResourceGroup.Builder addAllInventoryFilters(Iterable<? extends OSPolicy.InventoryFilter> values)
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter>`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### addAllResources(Iterable<? extends OSPolicy.Resource> values)

```
public OSPolicy.ResourceGroup.Builder addAllResources(Iterable<? extends OSPolicy.Resource> values)
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.osconfig.v1alpha.OSPolicy.Resource>`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### addInventoryFilters(OSPolicy.InventoryFilter value)

```
public OSPolicy.ResourceGroup.Builder addInventoryFilters(OSPolicy.InventoryFilter value)
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Parameter**

**Name**

**Description**

`value`

`[OSPolicy.InventoryFilter](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### addInventoryFilters(OSPolicy.InventoryFilter.Builder builderForValue)

```
public OSPolicy.ResourceGroup.Builder addInventoryFilters(OSPolicy.InventoryFilter.Builder builderForValue)
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[OSPolicy.InventoryFilter.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter.Builder)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### addInventoryFilters(int index, OSPolicy.InventoryFilter value)

```
public OSPolicy.ResourceGroup.Builder addInventoryFilters(int index, OSPolicy.InventoryFilter value)
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[OSPolicy.InventoryFilter](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### addInventoryFilters(int index, OSPolicy.InventoryFilter.Builder builderForValue)

```
public OSPolicy.ResourceGroup.Builder addInventoryFilters(int index, OSPolicy.InventoryFilter.Builder builderForValue)
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[OSPolicy.InventoryFilter.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter.Builder)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### addInventoryFiltersBuilder()

```
public OSPolicy.InventoryFilter.Builder addInventoryFiltersBuilder()
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Returns**

**Type**

**Description**

`[OSPolicy.InventoryFilter.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter.Builder)`

### addInventoryFiltersBuilder(int index)

```
public OSPolicy.InventoryFilter.Builder addInventoryFiltersBuilder(int index)
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[OSPolicy.InventoryFilter.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter.Builder)`

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public OSPolicy.ResourceGroup.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### addResources(OSPolicy.Resource value)

```
public OSPolicy.ResourceGroup.Builder addResources(OSPolicy.Resource value)
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[OSPolicy.Resource](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.Resource)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### addResources(OSPolicy.Resource.Builder builderForValue)

```
public OSPolicy.ResourceGroup.Builder addResources(OSPolicy.Resource.Builder builderForValue)
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[OSPolicy.Resource.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.Resource.Builder)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### addResources(int index, OSPolicy.Resource value)

```
public OSPolicy.ResourceGroup.Builder addResources(int index, OSPolicy.Resource value)
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[OSPolicy.Resource](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.Resource)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### addResources(int index, OSPolicy.Resource.Builder builderForValue)

```
public OSPolicy.ResourceGroup.Builder addResources(int index, OSPolicy.Resource.Builder builderForValue)
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[OSPolicy.Resource.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.Resource.Builder)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### addResourcesBuilder()

```
public OSPolicy.Resource.Builder addResourcesBuilder()
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.Resource.Builder)`

### addResourcesBuilder(int index)

```
public OSPolicy.Resource.Builder addResourcesBuilder(int index)
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.Resource.Builder)`

### build()

```
public OSPolicy.ResourceGroup build()
```

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup)`

### buildPartial()

```
public OSPolicy.ResourceGroup buildPartial()
```

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup)`

### clear()

```
public OSPolicy.ResourceGroup.Builder clear()
```

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearField(Descriptors.FieldDescriptor field)

```
public OSPolicy.ResourceGroup.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearInventoryFilters()

```
public OSPolicy.ResourceGroup.Builder clearInventoryFilters()
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public OSPolicy.ResourceGroup.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearOsFilter() (deprecated)

```
public OSPolicy.ResourceGroup.Builder clearOsFilter()
```

Deprecated. Use the `inventory_filters` field instead. Used to specify the OS filter for a resource group

`.google.cloud.osconfig.v1alpha.OSPolicy.OSFilter os_filter = 1 [deprecated = true];`

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### clearResources()

```
public OSPolicy.ResourceGroup.Builder clearResources()
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### clone()

```
public OSPolicy.ResourceGroup.Builder clone()
```

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getDefaultInstanceForType()

```
public OSPolicy.ResourceGroup getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup)`

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

### getInventoryFilters(int index)

```
public OSPolicy.InventoryFilter getInventoryFilters(int index)
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[OSPolicy.InventoryFilter](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter)`

### getInventoryFiltersBuilder(int index)

```
public OSPolicy.InventoryFilter.Builder getInventoryFiltersBuilder(int index)
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[OSPolicy.InventoryFilter.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter.Builder)`

### getInventoryFiltersBuilderList()

```
public List<OSPolicy.InventoryFilter.Builder> getInventoryFiltersBuilderList()
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter.Builder)>`

### getInventoryFiltersCount()

```
public int getInventoryFiltersCount()
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getInventoryFiltersList()

```
public List<OSPolicy.InventoryFilter> getInventoryFiltersList()
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[InventoryFilter](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter)>`

### getInventoryFiltersOrBuilder(int index)

```
public OSPolicy.InventoryFilterOrBuilder getInventoryFiltersOrBuilder(int index)
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[OSPolicy.InventoryFilterOrBuilder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilterOrBuilder)`

### getInventoryFiltersOrBuilderList()

```
public List<? extends OSPolicy.InventoryFilterOrBuilder> getInventoryFiltersOrBuilderList()
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilterOrBuilder>`

### getOsFilter() (deprecated)

```
public OSPolicy.OSFilter getOsFilter()
```

**Deprecated.** _google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.os\_filter is deprecated. See google/cloud/osconfig/v1alpha/os\_policy.proto;l=511_

Deprecated. Use the `inventory_filters` field instead. Used to specify the OS filter for a resource group

`.google.cloud.osconfig.v1alpha.OSPolicy.OSFilter os_filter = 1 [deprecated = true];`

**Returns**

**Type**

**Description**

`[OSPolicy.OSFilter](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.OSFilter)`

The osFilter.

### getOsFilterBuilder() (deprecated)

```
public OSPolicy.OSFilter.Builder getOsFilterBuilder()
```

Deprecated. Use the `inventory_filters` field instead. Used to specify the OS filter for a resource group

`.google.cloud.osconfig.v1alpha.OSPolicy.OSFilter os_filter = 1 [deprecated = true];`

**Returns**

**Type**

**Description**

`[OSPolicy.OSFilter.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.OSFilter.Builder)`

### getOsFilterOrBuilder() (deprecated)

```
public OSPolicy.OSFilterOrBuilder getOsFilterOrBuilder()
```

Deprecated. Use the `inventory_filters` field instead. Used to specify the OS filter for a resource group

`.google.cloud.osconfig.v1alpha.OSPolicy.OSFilter os_filter = 1 [deprecated = true];`

**Returns**

**Type**

**Description**

`[OSPolicy.OSFilterOrBuilder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.OSFilterOrBuilder)`

### getResources(int index)

```
public OSPolicy.Resource getResources(int index)
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[OSPolicy.Resource](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.Resource)`

### getResourcesBuilder(int index)

```
public OSPolicy.Resource.Builder getResourcesBuilder(int index)
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.Resource.Builder)`

### getResourcesBuilderList()

```
public List<OSPolicy.Resource.Builder> getResourcesBuilderList()
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.Resource.Builder)>`

### getResourcesCount()

```
public int getResourcesCount()
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getResourcesList()

```
public List<OSPolicy.Resource> getResourcesList()
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Resource](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.Resource)>`

### getResourcesOrBuilder(int index)

```
public OSPolicy.ResourceOrBuilder getResourcesOrBuilder(int index)
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceOrBuilder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceOrBuilder)`

### getResourcesOrBuilderList()

```
public List<? extends OSPolicy.ResourceOrBuilder> getResourcesOrBuilderList()
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceOrBuilder>`

### hasOsFilter() (deprecated)

```
public boolean hasOsFilter()
```

**Deprecated.** _google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.os\_filter is deprecated. See google/cloud/osconfig/v1alpha/os\_policy.proto;l=511_

Deprecated. Use the `inventory_filters` field instead. Used to specify the OS filter for a resource group

`.google.cloud.osconfig.v1alpha.OSPolicy.OSFilter os_filter = 1 [deprecated = true];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the osFilter field is set.

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

### mergeFrom(OSPolicy.ResourceGroup other)

```
public OSPolicy.ResourceGroup.Builder mergeFrom(OSPolicy.ResourceGroup other)
```

**Parameter**

**Name**

**Description**

`other`

`[OSPolicy.ResourceGroup](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public OSPolicy.ResourceGroup.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public OSPolicy.ResourceGroup.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeOsFilter(OSPolicy.OSFilter value) (deprecated)

```
public OSPolicy.ResourceGroup.Builder mergeOsFilter(OSPolicy.OSFilter value)
```

Deprecated. Use the `inventory_filters` field instead. Used to specify the OS filter for a resource group

`.google.cloud.osconfig.v1alpha.OSPolicy.OSFilter os_filter = 1 [deprecated = true];`

**Parameter**

**Name**

**Description**

`value`

`[OSPolicy.OSFilter](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.OSFilter)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final OSPolicy.ResourceGroup.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### removeInventoryFilters(int index)

```
public OSPolicy.ResourceGroup.Builder removeInventoryFilters(int index)
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### removeResources(int index)

```
public OSPolicy.ResourceGroup.Builder removeResources(int index)
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public OSPolicy.ResourceGroup.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setInventoryFilters(int index, OSPolicy.InventoryFilter value)

```
public OSPolicy.ResourceGroup.Builder setInventoryFilters(int index, OSPolicy.InventoryFilter value)
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[OSPolicy.InventoryFilter](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### setInventoryFilters(int index, OSPolicy.InventoryFilter.Builder builderForValue)

```
public OSPolicy.ResourceGroup.Builder setInventoryFilters(int index, OSPolicy.InventoryFilter.Builder builderForValue)
```

List of inventory filters for the resource group.

The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters.

For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory\_filters\[0\].os\_short\_name='rhel' and inventory\_filters\[1\].os\_short\_name='centos'

If the list is empty, this resource group will be applied to the target VM unconditionally.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter inventory_filters = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[OSPolicy.InventoryFilter.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter.Builder)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### setOsFilter(OSPolicy.OSFilter value) (deprecated)

```
public OSPolicy.ResourceGroup.Builder setOsFilter(OSPolicy.OSFilter value)
```

Deprecated. Use the `inventory_filters` field instead. Used to specify the OS filter for a resource group

`.google.cloud.osconfig.v1alpha.OSPolicy.OSFilter os_filter = 1 [deprecated = true];`

**Parameter**

**Name**

**Description**

`value`

`[OSPolicy.OSFilter](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.OSFilter)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### setOsFilter(OSPolicy.OSFilter.Builder builderForValue) (deprecated)

```
public OSPolicy.ResourceGroup.Builder setOsFilter(OSPolicy.OSFilter.Builder builderForValue)
```

Deprecated. Use the `inventory_filters` field instead. Used to specify the OS filter for a resource group

`.google.cloud.osconfig.v1alpha.OSPolicy.OSFilter os_filter = 1 [deprecated = true];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[OSPolicy.OSFilter.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.OSFilter.Builder)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public OSPolicy.ResourceGroup.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setResources(int index, OSPolicy.Resource value)

```
public OSPolicy.ResourceGroup.Builder setResources(int index, OSPolicy.Resource value)
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[OSPolicy.Resource](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.Resource)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### setResources(int index, OSPolicy.Resource.Builder builderForValue)

```
public OSPolicy.ResourceGroup.Builder setResources(int index, OSPolicy.Resource.Builder builderForValue)
```

Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.

`repeated .google.cloud.osconfig.v1alpha.OSPolicy.Resource resources = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[OSPolicy.Resource.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.Resource.Builder)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final OSPolicy.ResourceGroup.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[OSPolicy.ResourceGroup.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
