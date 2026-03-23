-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SimpleExportPolicyRule.Builder (0.16.0) Stay organized with collections Save and categorize content based on your preferences.

0.66.0 (latest) 0.64.0 0.62.0 0.61.0 0.59.0 0.57.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.49.0 0.47.0 0.46.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.3.0 0.2.0 0.1.0

```
public static final class SimpleExportPolicyRule.Builder extends GeneratedMessageV3.Builder<SimpleExportPolicyRule.Builder> implements SimpleExportPolicyRuleOrBuilder
```

An export policy rule describing various export options.

Protobuf type `google.cloud.netapp.v1.SimpleExportPolicyRule`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> SimpleExportPolicyRule.Builder

## Implements

[SimpleExportPolicyRuleOrBuilder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRuleOrBuilder)

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
public SimpleExportPolicyRule.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public SimpleExportPolicyRule build()
```

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule)`

### buildPartial()

```
public SimpleExportPolicyRule buildPartial()
```

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule)`

### clear()

```
public SimpleExportPolicyRule.Builder clear()
```

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearAccessType()

```
public SimpleExportPolicyRule.Builder clearAccessType()
```

Access type (ReadWrite, ReadOnly, None)

`optional .google.cloud.netapp.v1.AccessType access_type = 3;`

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### clearAllowedClients()

```
public SimpleExportPolicyRule.Builder clearAllowedClients()
```

Comma separated list of allowed clients IP addresses

`optional string allowed_clients = 1;`

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public SimpleExportPolicyRule.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearHasRootAccess()

```
public SimpleExportPolicyRule.Builder clearHasRootAccess()
```

Whether Unix root access will be granted.

`optional string has_root_access = 2;`

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### clearKerberos5IReadOnly()

```
public SimpleExportPolicyRule.Builder clearKerberos5IReadOnly()
```

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode.

`optional bool kerberos_5i_read_only = 8;`

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### clearKerberos5IReadWrite()

```
public SimpleExportPolicyRule.Builder clearKerberos5IReadWrite()
```

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value be ignored if this is enabled.

`optional bool kerberos_5i_read_write = 9;`

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### clearKerberos5PReadOnly()

```
public SimpleExportPolicyRule.Builder clearKerberos5PReadOnly()
```

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode.

`optional bool kerberos_5p_read_only = 10;`

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### clearKerberos5PReadWrite()

```
public SimpleExportPolicyRule.Builder clearKerberos5PReadWrite()
```

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value be ignored if this is enabled.

`optional bool kerberos_5p_read_write = 11;`

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### clearKerberos5ReadOnly()

```
public SimpleExportPolicyRule.Builder clearKerberos5ReadOnly()
```

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode.

`optional bool kerberos_5_read_only = 6;`

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### clearKerberos5ReadWrite()

```
public SimpleExportPolicyRule.Builder clearKerberos5ReadWrite()
```

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value be ignored if this is enabled.

`optional bool kerberos_5_read_write = 7;`

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### clearNfsv3()

```
public SimpleExportPolicyRule.Builder clearNfsv3()
```

NFS V3 protocol.

`optional bool nfsv3 = 4;`

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### clearNfsv4()

```
public SimpleExportPolicyRule.Builder clearNfsv4()
```

NFS V4 protocol.

`optional bool nfsv4 = 5;`

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public SimpleExportPolicyRule.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clone()

```
public SimpleExportPolicyRule.Builder clone()
```

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getAccessType()

```
public AccessType getAccessType()
```

Access type (ReadWrite, ReadOnly, None)

`optional .google.cloud.netapp.v1.AccessType access_type = 3;`

**Returns**

**Type**

**Description**

`[AccessType](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.AccessType)`

The accessType.

### getAccessTypeValue()

```
public int getAccessTypeValue()
```

Access type (ReadWrite, ReadOnly, None)

`optional .google.cloud.netapp.v1.AccessType access_type = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for accessType.

### getAllowedClients()

```
public String getAllowedClients()
```

Comma separated list of allowed clients IP addresses

`optional string allowed_clients = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The allowedClients.

### getAllowedClientsBytes()

```
public ByteString getAllowedClientsBytes()
```

Comma separated list of allowed clients IP addresses

`optional string allowed_clients = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for allowedClients.

### getDefaultInstanceForType()

```
public SimpleExportPolicyRule getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule)`

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

### getHasRootAccess()

```
public String getHasRootAccess()
```

Whether Unix root access will be granted.

`optional string has_root_access = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The hasRootAccess.

### getHasRootAccessBytes()

```
public ByteString getHasRootAccessBytes()
```

Whether Unix root access will be granted.

`optional string has_root_access = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for hasRootAccess.

### getKerberos5IReadOnly()

```
public boolean getKerberos5IReadOnly()
```

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode.

`optional bool kerberos_5i_read_only = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The kerberos5iReadOnly.

### getKerberos5IReadWrite()

```
public boolean getKerberos5IReadWrite()
```

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value be ignored if this is enabled.

`optional bool kerberos_5i_read_write = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The kerberos5iReadWrite.

### getKerberos5PReadOnly()

```
public boolean getKerberos5PReadOnly()
```

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode.

`optional bool kerberos_5p_read_only = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The kerberos5pReadOnly.

### getKerberos5PReadWrite()

```
public boolean getKerberos5PReadWrite()
```

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value be ignored if this is enabled.

`optional bool kerberos_5p_read_write = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The kerberos5pReadWrite.

### getKerberos5ReadOnly()

```
public boolean getKerberos5ReadOnly()
```

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode.

`optional bool kerberos_5_read_only = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The kerberos5ReadOnly.

### getKerberos5ReadWrite()

```
public boolean getKerberos5ReadWrite()
```

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value be ignored if this is enabled.

`optional bool kerberos_5_read_write = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The kerberos5ReadWrite.

### getNfsv3()

```
public boolean getNfsv3()
```

NFS V3 protocol.

`optional bool nfsv3 = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The nfsv3.

### getNfsv4()

```
public boolean getNfsv4()
```

NFS V4 protocol.

`optional bool nfsv4 = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The nfsv4.

### hasAccessType()

```
public boolean hasAccessType()
```

Access type (ReadWrite, ReadOnly, None)

`optional .google.cloud.netapp.v1.AccessType access_type = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the accessType field is set.

### hasAllowedClients()

```
public boolean hasAllowedClients()
```

Comma separated list of allowed clients IP addresses

`optional string allowed_clients = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the allowedClients field is set.

### hasHasRootAccess()

```
public boolean hasHasRootAccess()
```

Whether Unix root access will be granted.

`optional string has_root_access = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the hasRootAccess field is set.

### hasKerberos5IReadOnly()

```
public boolean hasKerberos5IReadOnly()
```

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode.

`optional bool kerberos_5i_read_only = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the kerberos5iReadOnly field is set.

### hasKerberos5IReadWrite()

```
public boolean hasKerberos5IReadWrite()
```

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value be ignored if this is enabled.

`optional bool kerberos_5i_read_write = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the kerberos5iReadWrite field is set.

### hasKerberos5PReadOnly()

```
public boolean hasKerberos5PReadOnly()
```

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode.

`optional bool kerberos_5p_read_only = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the kerberos5pReadOnly field is set.

### hasKerberos5PReadWrite()

```
public boolean hasKerberos5PReadWrite()
```

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value be ignored if this is enabled.

`optional bool kerberos_5p_read_write = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the kerberos5pReadWrite field is set.

### hasKerberos5ReadOnly()

```
public boolean hasKerberos5ReadOnly()
```

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode.

`optional bool kerberos_5_read_only = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the kerberos5ReadOnly field is set.

### hasKerberos5ReadWrite()

```
public boolean hasKerberos5ReadWrite()
```

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value be ignored if this is enabled.

`optional bool kerberos_5_read_write = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the kerberos5ReadWrite field is set.

### hasNfsv3()

```
public boolean hasNfsv3()
```

NFS V3 protocol.

`optional bool nfsv3 = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the nfsv3 field is set.

### hasNfsv4()

```
public boolean hasNfsv4()
```

NFS V4 protocol.

`optional bool nfsv4 = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the nfsv4 field is set.

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

### mergeFrom(SimpleExportPolicyRule other)

```
public SimpleExportPolicyRule.Builder mergeFrom(SimpleExportPolicyRule other)
```

**Parameter**

**Name**

**Description**

`other`

`[SimpleExportPolicyRule](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule)`  

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public SimpleExportPolicyRule.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public SimpleExportPolicyRule.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final SimpleExportPolicyRule.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setAccessType(AccessType value)

```
public SimpleExportPolicyRule.Builder setAccessType(AccessType value)
```

Access type (ReadWrite, ReadOnly, None)

`optional .google.cloud.netapp.v1.AccessType access_type = 3;`

**Parameter**

**Name**

**Description**

`value`

`[AccessType](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.AccessType)`  

The accessType to set.

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### setAccessTypeValue(int value)

```
public SimpleExportPolicyRule.Builder setAccessTypeValue(int value)
```

Access type (ReadWrite, ReadOnly, None)

`optional .google.cloud.netapp.v1.AccessType access_type = 3;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enum numeric value on the wire for accessType to set.

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### setAllowedClients(String value)

```
public SimpleExportPolicyRule.Builder setAllowedClients(String value)
```

Comma separated list of allowed clients IP addresses

`optional string allowed_clients = 1;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The allowedClients to set.

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### setAllowedClientsBytes(ByteString value)

```
public SimpleExportPolicyRule.Builder setAllowedClientsBytes(ByteString value)
```

Comma separated list of allowed clients IP addresses

`optional string allowed_clients = 1;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for allowedClients to set.

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public SimpleExportPolicyRule.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setHasRootAccess(String value)

```
public SimpleExportPolicyRule.Builder setHasRootAccess(String value)
```

Whether Unix root access will be granted.

`optional string has_root_access = 2;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The hasRootAccess to set.

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### setHasRootAccessBytes(ByteString value)

```
public SimpleExportPolicyRule.Builder setHasRootAccessBytes(ByteString value)
```

Whether Unix root access will be granted.

`optional string has_root_access = 2;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for hasRootAccess to set.

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### setKerberos5IReadOnly(boolean value)

```
public SimpleExportPolicyRule.Builder setKerberos5IReadOnly(boolean value)
```

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode.

`optional bool kerberos_5i_read_only = 8;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The kerberos5iReadOnly to set.

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### setKerberos5IReadWrite(boolean value)

```
public SimpleExportPolicyRule.Builder setKerberos5IReadWrite(boolean value)
```

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value be ignored if this is enabled.

`optional bool kerberos_5i_read_write = 9;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The kerberos5iReadWrite to set.

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### setKerberos5PReadOnly(boolean value)

```
public SimpleExportPolicyRule.Builder setKerberos5PReadOnly(boolean value)
```

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode.

`optional bool kerberos_5p_read_only = 10;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The kerberos5pReadOnly to set.

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### setKerberos5PReadWrite(boolean value)

```
public SimpleExportPolicyRule.Builder setKerberos5PReadWrite(boolean value)
```

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value be ignored if this is enabled.

`optional bool kerberos_5p_read_write = 11;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The kerberos5pReadWrite to set.

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### setKerberos5ReadOnly(boolean value)

```
public SimpleExportPolicyRule.Builder setKerberos5ReadOnly(boolean value)
```

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode.

`optional bool kerberos_5_read_only = 6;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The kerberos5ReadOnly to set.

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### setKerberos5ReadWrite(boolean value)

```
public SimpleExportPolicyRule.Builder setKerberos5ReadWrite(boolean value)
```

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value be ignored if this is enabled.

`optional bool kerberos_5_read_write = 7;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The kerberos5ReadWrite to set.

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### setNfsv3(boolean value)

```
public SimpleExportPolicyRule.Builder setNfsv3(boolean value)
```

NFS V3 protocol.

`optional bool nfsv3 = 4;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The nfsv3 to set.

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### setNfsv4(boolean value)

```
public SimpleExportPolicyRule.Builder setNfsv4(boolean value)
```

NFS V4 protocol.

`optional bool nfsv4 = 5;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The nfsv4 to set.

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public SimpleExportPolicyRule.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final SimpleExportPolicyRule.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[SimpleExportPolicyRule.Builder](/java/docs/reference/google-cloud-netapp/0.16.0/com.google.cloud.netapp.v1.SimpleExportPolicyRule.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
