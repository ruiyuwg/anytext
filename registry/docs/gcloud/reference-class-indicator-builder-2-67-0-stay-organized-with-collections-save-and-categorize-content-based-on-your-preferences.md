-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Indicator.Builder (2.67.0) Stay organized with collections Save and categorize content based on your preferences.

2.95.0 (latest) 2.93.0 2.91.0 2.90.0 2.88.0 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.0 2.66.0 2.65.0 2.64.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.10.0 2.9.0 2.8.0 2.7.1 2.6.0 2.5.6 2.3.2

```
public static final class Indicator.Builder extends GeneratedMessageV3.Builder<Indicator.Builder> implements IndicatorOrBuilder
```

Represents what's commonly known as an _indicator of compromise_ (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).

Protobuf type `google.cloud.securitycenter.v2.Indicator`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> Indicator.Builder

## Implements

[IndicatorOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.IndicatorOrBuilder)

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

### addAllDomains(Iterable<String> values)

```
public Indicator.Builder addAllDomains(Iterable<String> values)
```

List of domains associated to the Finding.

`repeated string domains = 2;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The domains to add.

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

This builder for chaining.

### addAllIpAddresses(Iterable<String> values)

```
public Indicator.Builder addAllIpAddresses(Iterable<String> values)
```

The list of IP addresses that are associated with the finding.

`repeated string ip_addresses = 1;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The ipAddresses to add.

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

This builder for chaining.

### addAllSignatures(Iterable<? extends Indicator.ProcessSignature> values)

```
public Indicator.Builder addAllSignatures(Iterable<? extends Indicator.ProcessSignature> values)
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.securitycenter.v2.Indicator.ProcessSignature>`  

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

### addAllUris(Iterable<String> values)

```
public Indicator.Builder addAllUris(Iterable<String> values)
```

The list of URIs associated to the Findings.

`repeated string uris = 4;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The uris to add.

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

This builder for chaining.

### addDomains(String value)

```
public Indicator.Builder addDomains(String value)
```

List of domains associated to the Finding.

`repeated string domains = 2;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The domains to add.

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

This builder for chaining.

### addDomainsBytes(ByteString value)

```
public Indicator.Builder addDomainsBytes(ByteString value)
```

List of domains associated to the Finding.

`repeated string domains = 2;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the domains to add.

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

This builder for chaining.

### addIpAddresses(String value)

```
public Indicator.Builder addIpAddresses(String value)
```

The list of IP addresses that are associated with the finding.

`repeated string ip_addresses = 1;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The ipAddresses to add.

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

This builder for chaining.

### addIpAddressesBytes(ByteString value)

```
public Indicator.Builder addIpAddressesBytes(ByteString value)
```

The list of IP addresses that are associated with the finding.

`repeated string ip_addresses = 1;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the ipAddresses to add.

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

This builder for chaining.

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public Indicator.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### addSignatures(Indicator.ProcessSignature value)

```
public Indicator.Builder addSignatures(Indicator.ProcessSignature value)
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Parameter**

**Name**

**Description**

`value`

`[Indicator.ProcessSignature](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.ProcessSignature)`  

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

### addSignatures(Indicator.ProcessSignature.Builder builderForValue)

```
public Indicator.Builder addSignatures(Indicator.ProcessSignature.Builder builderForValue)
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Indicator.ProcessSignature.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.ProcessSignature.Builder)`  

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

### addSignatures(int index, Indicator.ProcessSignature value)

```
public Indicator.Builder addSignatures(int index, Indicator.ProcessSignature value)
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Indicator.ProcessSignature](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.ProcessSignature)`  

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

### addSignatures(int index, Indicator.ProcessSignature.Builder builderForValue)

```
public Indicator.Builder addSignatures(int index, Indicator.ProcessSignature.Builder builderForValue)
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Indicator.ProcessSignature.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.ProcessSignature.Builder)`  

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

### addSignaturesBuilder()

```
public Indicator.ProcessSignature.Builder addSignaturesBuilder()
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Returns**

**Type**

**Description**

`[Indicator.ProcessSignature.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.ProcessSignature.Builder)`

### addSignaturesBuilder(int index)

```
public Indicator.ProcessSignature.Builder addSignaturesBuilder(int index)
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Indicator.ProcessSignature.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.ProcessSignature.Builder)`

### addUris(String value)

```
public Indicator.Builder addUris(String value)
```

The list of URIs associated to the Findings.

`repeated string uris = 4;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The uris to add.

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

This builder for chaining.

### addUrisBytes(ByteString value)

```
public Indicator.Builder addUrisBytes(ByteString value)
```

The list of URIs associated to the Findings.

`repeated string uris = 4;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the uris to add.

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

This builder for chaining.

### build()

```
public Indicator build()
```

**Returns**

**Type**

**Description**

`[Indicator](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator)`

### buildPartial()

```
public Indicator buildPartial()
```

**Returns**

**Type**

**Description**

`[Indicator](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator)`

### clear()

```
public Indicator.Builder clear()
```

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearDomains()

```
public Indicator.Builder clearDomains()
```

List of domains associated to the Finding.

`repeated string domains = 2;`

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public Indicator.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearIpAddresses()

```
public Indicator.Builder clearIpAddresses()
```

The list of IP addresses that are associated with the finding.

`repeated string ip_addresses = 1;`

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public Indicator.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearSignatures()

```
public Indicator.Builder clearSignatures()
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

### clearUris()

```
public Indicator.Builder clearUris()
```

The list of URIs associated to the Findings.

`repeated string uris = 4;`

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

This builder for chaining.

### clone()

```
public Indicator.Builder clone()
```

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getDefaultInstanceForType()

```
public Indicator getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[Indicator](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator)`

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

### getDomains(int index)

```
public String getDomains(int index)
```

List of domains associated to the Finding.

`repeated string domains = 2;`

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

The domains at the given index.

### getDomainsBytes(int index)

```
public ByteString getDomainsBytes(int index)
```

List of domains associated to the Finding.

`repeated string domains = 2;`

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

The bytes of the domains at the given index.

### getDomainsCount()

```
public int getDomainsCount()
```

List of domains associated to the Finding.

`repeated string domains = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of domains.

### getDomainsList()

```
public ProtocolStringList getDomainsList()
```

List of domains associated to the Finding.

`repeated string domains = 2;`

**Returns**

**Type**

**Description**

`[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)`

A list containing the domains.

### getIpAddresses(int index)

```
public String getIpAddresses(int index)
```

The list of IP addresses that are associated with the finding.

`repeated string ip_addresses = 1;`

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

The ipAddresses at the given index.

### getIpAddressesBytes(int index)

```
public ByteString getIpAddressesBytes(int index)
```

The list of IP addresses that are associated with the finding.

`repeated string ip_addresses = 1;`

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

The bytes of the ipAddresses at the given index.

### getIpAddressesCount()

```
public int getIpAddressesCount()
```

The list of IP addresses that are associated with the finding.

`repeated string ip_addresses = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of ipAddresses.

### getIpAddressesList()

```
public ProtocolStringList getIpAddressesList()
```

The list of IP addresses that are associated with the finding.

`repeated string ip_addresses = 1;`

**Returns**

**Type**

**Description**

`[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)`

A list containing the ipAddresses.

### getSignatures(int index)

```
public Indicator.ProcessSignature getSignatures(int index)
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Indicator.ProcessSignature](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.ProcessSignature)`

### getSignaturesBuilder(int index)

```
public Indicator.ProcessSignature.Builder getSignaturesBuilder(int index)
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Indicator.ProcessSignature.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.ProcessSignature.Builder)`

### getSignaturesBuilderList()

```
public List<Indicator.ProcessSignature.Builder> getSignaturesBuilderList()
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.ProcessSignature.Builder)>`

### getSignaturesCount()

```
public int getSignaturesCount()
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getSignaturesList()

```
public List<Indicator.ProcessSignature> getSignaturesList()
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ProcessSignature](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.ProcessSignature)>`

### getSignaturesOrBuilder(int index)

```
public Indicator.ProcessSignatureOrBuilder getSignaturesOrBuilder(int index)
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Indicator.ProcessSignatureOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.ProcessSignatureOrBuilder)`

### getSignaturesOrBuilderList()

```
public List<? extends Indicator.ProcessSignatureOrBuilder> getSignaturesOrBuilderList()
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.securitycenter.v2.Indicator.ProcessSignatureOrBuilder>`

### getUris(int index)

```
public String getUris(int index)
```

The list of URIs associated to the Findings.

`repeated string uris = 4;`

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

The uris at the given index.

### getUrisBytes(int index)

```
public ByteString getUrisBytes(int index)
```

The list of URIs associated to the Findings.

`repeated string uris = 4;`

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

The bytes of the uris at the given index.

### getUrisCount()

```
public int getUrisCount()
```

The list of URIs associated to the Findings.

`repeated string uris = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of uris.

### getUrisList()

```
public ProtocolStringList getUrisList()
```

The list of URIs associated to the Findings.

`repeated string uris = 4;`

**Returns**

**Type**

**Description**

`[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)`

A list containing the uris.

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

### mergeFrom(Indicator other)

```
public Indicator.Builder mergeFrom(Indicator other)
```

**Parameter**

**Name**

**Description**

`other`

`[Indicator](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator)`  

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public Indicator.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public Indicator.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final Indicator.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### removeSignatures(int index)

```
public Indicator.Builder removeSignatures(int index)
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

### setDomains(int index, String value)

```
public Indicator.Builder setDomains(int index, String value)
```

List of domains associated to the Finding.

`repeated string domains = 2;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The domains to set.

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public Indicator.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setIpAddresses(int index, String value)

```
public Indicator.Builder setIpAddresses(int index, String value)
```

The list of IP addresses that are associated with the finding.

`repeated string ip_addresses = 1;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The ipAddresses to set.

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public Indicator.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setSignatures(int index, Indicator.ProcessSignature value)

```
public Indicator.Builder setSignatures(int index, Indicator.ProcessSignature value)
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Indicator.ProcessSignature](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.ProcessSignature)`  

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

### setSignatures(int index, Indicator.ProcessSignature.Builder builderForValue)

```
public Indicator.Builder setSignatures(int index, Indicator.ProcessSignature.Builder builderForValue)
```

The list of matched signatures indicating that the given process is present in the environment.

`repeated .google.cloud.securitycenter.v2.Indicator.ProcessSignature signatures = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Indicator.ProcessSignature.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.ProcessSignature.Builder)`  

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final Indicator.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setUris(int index, String value)

```
public Indicator.Builder setUris(int index, String value)
```

The list of URIs associated to the Findings.

`repeated string uris = 4;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The uris to set.

**Returns**

**Type**

**Description**

`[Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.67.0/com.google.cloud.securitycenter.v2.Indicator.Builder)`

This builder for chaining.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
