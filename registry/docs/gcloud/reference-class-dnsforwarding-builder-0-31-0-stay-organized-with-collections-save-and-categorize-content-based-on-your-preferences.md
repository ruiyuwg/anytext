-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class DnsForwarding.Builder (0.31.0) Stay organized with collections Save and categorize content based on your preferences.

0.81.0 (latest) 0.79.0 0.77.0 0.76.0 0.74.0 0.72.0 0.70.0 0.69.0 0.68.0 0.67.0 0.66.0 0.64.0 0.62.0 0.61.0 0.58.0 0.57.0 0.56.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.3.0 0.2.0 0.1.0

```
public static final class DnsForwarding.Builder extends GeneratedMessageV3.Builder<DnsForwarding.Builder> implements DnsForwardingOrBuilder
```

DNS forwarding config. This config defines a list of domain to name server mappings, and is attached to the private cloud for custom domain resolution.

Protobuf type `google.cloud.vmwareengine.v1.DnsForwarding`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> DnsForwarding.Builder

## Implements

[DnsForwardingOrBuilder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwardingOrBuilder)

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

### addAllForwardingRules(Iterable<? extends DnsForwarding.ForwardingRule> values)

```
public DnsForwarding.Builder addAllForwardingRules(Iterable<? extends DnsForwarding.ForwardingRule> values)
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule>`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### addForwardingRules(DnsForwarding.ForwardingRule value)

```
public DnsForwarding.Builder addForwardingRules(DnsForwarding.ForwardingRule value)
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[DnsForwarding.ForwardingRule](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### addForwardingRules(DnsForwarding.ForwardingRule.Builder builderForValue)

```
public DnsForwarding.Builder addForwardingRules(DnsForwarding.ForwardingRule.Builder builderForValue)
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[DnsForwarding.ForwardingRule.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule.Builder)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### addForwardingRules(int index, DnsForwarding.ForwardingRule value)

```
public DnsForwarding.Builder addForwardingRules(int index, DnsForwarding.ForwardingRule value)
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[DnsForwarding.ForwardingRule](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### addForwardingRules(int index, DnsForwarding.ForwardingRule.Builder builderForValue)

```
public DnsForwarding.Builder addForwardingRules(int index, DnsForwarding.ForwardingRule.Builder builderForValue)
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[DnsForwarding.ForwardingRule.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule.Builder)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### addForwardingRulesBuilder()

```
public DnsForwarding.ForwardingRule.Builder addForwardingRulesBuilder()
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[DnsForwarding.ForwardingRule.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule.Builder)`

### addForwardingRulesBuilder(int index)

```
public DnsForwarding.ForwardingRule.Builder addForwardingRulesBuilder(int index)
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.ForwardingRule.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule.Builder)`

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public DnsForwarding.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public DnsForwarding build()
```

**Returns**

**Type**

**Description**

`[DnsForwarding](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding)`

### buildPartial()

```
public DnsForwarding buildPartial()
```

**Returns**

**Type**

**Description**

`[DnsForwarding](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding)`

### clear()

```
public DnsForwarding.Builder clear()
```

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearCreateTime()

```
public DnsForwarding.Builder clearCreateTime()
```

Output only. Creation time of this resource.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### clearField(Descriptors.FieldDescriptor field)

```
public DnsForwarding.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearForwardingRules()

```
public DnsForwarding.Builder clearForwardingRules()
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### clearName()

```
public DnsForwarding.Builder clearName()
```

Output only. The resource name of this DNS profile. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/dnsForwarding`

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public DnsForwarding.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearUpdateTime()

```
public DnsForwarding.Builder clearUpdateTime()
```

Output only. Last update time of this resource.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### clone()

```
public DnsForwarding.Builder clone()
```

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getCreateTime()

```
public Timestamp getCreateTime()
```

Output only. Creation time of this resource.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeBuilder()

```
public Timestamp.Builder getCreateTimeBuilder()
```

Output only. Creation time of this resource.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getCreateTimeOrBuilder()

```
public TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. Creation time of this resource.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDefaultInstanceForType()

```
public DnsForwarding getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[DnsForwarding](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding)`

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

### getForwardingRules(int index)

```
public DnsForwarding.ForwardingRule getForwardingRules(int index)
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.ForwardingRule](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule)`

### getForwardingRulesBuilder(int index)

```
public DnsForwarding.ForwardingRule.Builder getForwardingRulesBuilder(int index)
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.ForwardingRule.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule.Builder)`

### getForwardingRulesBuilderList()

```
public List<DnsForwarding.ForwardingRule.Builder> getForwardingRulesBuilderList()
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule.Builder)>`

### getForwardingRulesCount()

```
public int getForwardingRulesCount()
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getForwardingRulesList()

```
public List<DnsForwarding.ForwardingRule> getForwardingRulesList()
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ForwardingRule](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule)>`

### getForwardingRulesOrBuilder(int index)

```
public DnsForwarding.ForwardingRuleOrBuilder getForwardingRulesOrBuilder(int index)
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.ForwardingRuleOrBuilder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRuleOrBuilder)`

### getForwardingRulesOrBuilderList()

```
public List<? extends DnsForwarding.ForwardingRuleOrBuilder> getForwardingRulesOrBuilderList()
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRuleOrBuilder>`

### getName()

```
public String getName()
```

Output only. The resource name of this DNS profile. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/dnsForwarding`

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public ByteString getNameBytes()
```

Output only. The resource name of this DNS profile. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/dnsForwarding`

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getUpdateTime()

```
public Timestamp getUpdateTime()
```

Output only. Last update time of this resource.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeBuilder()

```
public Timestamp.Builder getUpdateTimeBuilder()
```

Output only. Last update time of this resource.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getUpdateTimeOrBuilder()

```
public TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. Last update time of this resource.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasCreateTime()

```
public boolean hasCreateTime()
```

Output only. Creation time of this resource.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasUpdateTime()

```
public boolean hasUpdateTime()
```

Output only. Last update time of this resource.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

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

### mergeCreateTime(Timestamp value)

```
public DnsForwarding.Builder mergeCreateTime(Timestamp value)
```

Output only. Creation time of this resource.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### mergeFrom(DnsForwarding other)

```
public DnsForwarding.Builder mergeFrom(DnsForwarding other)
```

**Parameter**

**Name**

**Description**

`other`

`[DnsForwarding](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public DnsForwarding.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public DnsForwarding.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final DnsForwarding.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### mergeUpdateTime(Timestamp value)

```
public DnsForwarding.Builder mergeUpdateTime(Timestamp value)
```

Output only. Last update time of this resource.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### removeForwardingRules(int index)

```
public DnsForwarding.Builder removeForwardingRules(int index)
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### setCreateTime(Timestamp value)

```
public DnsForwarding.Builder setCreateTime(Timestamp value)
```

Output only. Creation time of this resource.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### setCreateTime(Timestamp.Builder builderForValue)

```
public DnsForwarding.Builder setCreateTime(Timestamp.Builder builderForValue)
```

Output only. Creation time of this resource.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public DnsForwarding.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setForwardingRules(int index, DnsForwarding.ForwardingRule value)

```
public DnsForwarding.Builder setForwardingRules(int index, DnsForwarding.ForwardingRule value)
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[DnsForwarding.ForwardingRule](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### setForwardingRules(int index, DnsForwarding.ForwardingRule.Builder builderForValue)

```
public DnsForwarding.Builder setForwardingRules(int index, DnsForwarding.ForwardingRule.Builder builderForValue)
```

Required. List of domain mappings to configure

`repeated .google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule forwarding_rules = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[DnsForwarding.ForwardingRule.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.ForwardingRule.Builder)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### setName(String value)

```
public DnsForwarding.Builder setName(String value)
```

Output only. The resource name of this DNS profile. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/dnsForwarding`

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The name to set.

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

This builder for chaining.

### setNameBytes(ByteString value)

```
public DnsForwarding.Builder setNameBytes(ByteString value)
```

Output only. The resource name of this DNS profile. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/dnsForwarding`

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for name to set.

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public DnsForwarding.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final DnsForwarding.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setUpdateTime(Timestamp value)

```
public DnsForwarding.Builder setUpdateTime(Timestamp value)
```

Output only. Last update time of this resource.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

### setUpdateTime(Timestamp.Builder builderForValue)

```
public DnsForwarding.Builder setUpdateTime(Timestamp.Builder builderForValue)
```

Output only. Last update time of this resource.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[DnsForwarding.Builder](/java/docs/reference/google-cloud-vmwareengine/0.31.0/com.google.cloud.vmwareengine.v1.DnsForwarding.Builder)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
