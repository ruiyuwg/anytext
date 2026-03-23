-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ServingConfig.Builder (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public static final class ServingConfig.Builder extends GeneratedMessageV3.Builder<ServingConfig.Builder> implements ServingConfigOrBuilder
```

Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions). The ServingConfig is passed in the search and predict request and together with the Catalog.default\_branch, generates results.

Protobuf type `google.cloud.retail.v2alpha.ServingConfig`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> ServingConfig.Builder

## Implements

[ServingConfigOrBuilder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfigOrBuilder)

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

[GeneratedMessageV3.Builder.newBuilderForField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_newBuilderForField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessageV3.Builder.onBuilt()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_onBuilt__)

[GeneratedMessageV3.Builder.onChanged()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_onChanged__)

[GeneratedMessageV3.Builder.setField(Descriptors.FieldDescriptor,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

[GeneratedMessageV3.Builder.setRepeatedField(Descriptors.FieldDescriptor,int,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

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

[Descriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.Descriptor.html)

## Methods

### addAllBoostControlIds(Iterable<String> values)

```
public ServingConfig.Builder addAllBoostControlIds(Iterable<String> values)
```

Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost\_control\_ids and \[SearchRequest.boost\_spec\] are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string boost_control_ids = 7;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The boostControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addAllDoNotAssociateControlIds(Iterable<String> values)

```
public ServingConfig.Builder addAllDoNotAssociateControlIds(Iterable<String> values)
```

Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string do_not_associate_control_ids = 13;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The doNotAssociateControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addAllFacetControlIds(Iterable<String> values)

```
public ServingConfig.Builder addAllFacetControlIds(Iterable<String> values)
```

Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string facet_control_ids = 5;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The facetControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addAllFilterControlIds(Iterable<String> values)

```
public ServingConfig.Builder addAllFilterControlIds(Iterable<String> values)
```

Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string filter_control_ids = 9;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The filterControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addAllIgnoreControlIds(Iterable<String> values)

```
public ServingConfig.Builder addAllIgnoreControlIds(Iterable<String> values)
```

Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string ignore_control_ids = 15;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The ignoreControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addAllOnewaySynonymsControlIds(Iterable<String> values)

```
public ServingConfig.Builder addAllOnewaySynonymsControlIds(Iterable<String> values)
```

Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string oneway_synonyms_control_ids = 12;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The onewaySynonymsControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addAllRedirectControlIds(Iterable<String> values)

```
public ServingConfig.Builder addAllRedirectControlIds(Iterable<String> values)
```

Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string redirect_control_ids = 10;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The redirectControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addAllReplacementControlIds(Iterable<String> values)

```
public ServingConfig.Builder addAllReplacementControlIds(Iterable<String> values)
```

Condition replacement specifications.

-   Applied according to the order in the list.
-   A previously replaced term can not be re-replaced.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string replacement_control_ids = 14;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The replacementControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addAllSolutionTypes(Iterable<? extends SolutionType> values)

```
public ServingConfig.Builder addAllSolutionTypes(Iterable<? extends SolutionType> values)
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.retail.v2alpha.SolutionType>`  

The solutionTypes to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addAllSolutionTypesValue(Iterable<Integer> values)

```
public ServingConfig.Builder addAllSolutionTypesValue(Iterable<Integer> values)
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)>`  

The enum numeric values on the wire for solutionTypes to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addAllTwowaySynonymsControlIds(Iterable<String> values)

```
public ServingConfig.Builder addAllTwowaySynonymsControlIds(Iterable<String> values)
```

Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string twoway_synonyms_control_ids = 18;`

**Parameter**

**Name**

**Description**

values

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

The twowaySynonymsControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addBoostControlIds(String value)

```
public ServingConfig.Builder addBoostControlIds(String value)
```

Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost\_control\_ids and \[SearchRequest.boost\_spec\] are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string boost_control_ids = 7;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The boostControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addBoostControlIdsBytes(ByteString value)

```
public ServingConfig.Builder addBoostControlIdsBytes(ByteString value)
```

Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost\_control\_ids and \[SearchRequest.boost\_spec\] are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string boost_control_ids = 7;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the boostControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addDoNotAssociateControlIds(String value)

```
public ServingConfig.Builder addDoNotAssociateControlIds(String value)
```

Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string do_not_associate_control_ids = 13;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The doNotAssociateControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addDoNotAssociateControlIdsBytes(ByteString value)

```
public ServingConfig.Builder addDoNotAssociateControlIdsBytes(ByteString value)
```

Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string do_not_associate_control_ids = 13;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the doNotAssociateControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addFacetControlIds(String value)

```
public ServingConfig.Builder addFacetControlIds(String value)
```

Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string facet_control_ids = 5;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The facetControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addFacetControlIdsBytes(ByteString value)

```
public ServingConfig.Builder addFacetControlIdsBytes(ByteString value)
```

Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string facet_control_ids = 5;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the facetControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addFilterControlIds(String value)

```
public ServingConfig.Builder addFilterControlIds(String value)
```

Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string filter_control_ids = 9;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The filterControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addFilterControlIdsBytes(ByteString value)

```
public ServingConfig.Builder addFilterControlIdsBytes(ByteString value)
```

Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string filter_control_ids = 9;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the filterControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addIgnoreControlIds(String value)

```
public ServingConfig.Builder addIgnoreControlIds(String value)
```

Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string ignore_control_ids = 15;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The ignoreControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addIgnoreControlIdsBytes(ByteString value)

```
public ServingConfig.Builder addIgnoreControlIdsBytes(ByteString value)
```

Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string ignore_control_ids = 15;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the ignoreControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addOnewaySynonymsControlIds(String value)

```
public ServingConfig.Builder addOnewaySynonymsControlIds(String value)
```

Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string oneway_synonyms_control_ids = 12;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The onewaySynonymsControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addOnewaySynonymsControlIdsBytes(ByteString value)

```
public ServingConfig.Builder addOnewaySynonymsControlIdsBytes(ByteString value)
```

Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string oneway_synonyms_control_ids = 12;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the onewaySynonymsControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addRedirectControlIds(String value)

```
public ServingConfig.Builder addRedirectControlIds(String value)
```

Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string redirect_control_ids = 10;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The redirectControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addRedirectControlIdsBytes(ByteString value)

```
public ServingConfig.Builder addRedirectControlIdsBytes(ByteString value)
```

Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string redirect_control_ids = 10;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the redirectControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public ServingConfig.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
```

**Parameters**

**Name**

**Description**

field

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

value

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### addReplacementControlIds(String value)

```
public ServingConfig.Builder addReplacementControlIds(String value)
```

Condition replacement specifications.

-   Applied according to the order in the list.
-   A previously replaced term can not be re-replaced.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string replacement_control_ids = 14;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The replacementControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addReplacementControlIdsBytes(ByteString value)

```
public ServingConfig.Builder addReplacementControlIdsBytes(ByteString value)
```

Condition replacement specifications.

-   Applied according to the order in the list.
-   A previously replaced term can not be re-replaced.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string replacement_control_ids = 14;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the replacementControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addSolutionTypes(SolutionType value)

```
public ServingConfig.Builder addSolutionTypes(SolutionType value)
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

value

`[SolutionType](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SolutionType)`  

The solutionTypes to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addSolutionTypesValue(int value)

```
public ServingConfig.Builder addSolutionTypesValue(int value)
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

value

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enum numeric value on the wire for solutionTypes to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addTwowaySynonymsControlIds(String value)

```
public ServingConfig.Builder addTwowaySynonymsControlIds(String value)
```

Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string twoway_synonyms_control_ids = 18;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The twowaySynonymsControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### addTwowaySynonymsControlIdsBytes(ByteString value)

```
public ServingConfig.Builder addTwowaySynonymsControlIdsBytes(ByteString value)
```

Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string twoway_synonyms_control_ids = 18;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes of the twowaySynonymsControlIds to add.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### build()

```
public ServingConfig build()
```

**Returns**

**Type**

**Description**

[ServingConfig](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig)

### buildPartial()

```
public ServingConfig buildPartial()
```

**Returns**

**Type**

**Description**

[ServingConfig](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig)

### clear()

```
public ServingConfig.Builder clear()
```

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearBoostControlIds()

```
public ServingConfig.Builder clearBoostControlIds()
```

Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost\_control\_ids and \[SearchRequest.boost\_spec\] are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string boost_control_ids = 7;`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### clearDisplayName()

```
public ServingConfig.Builder clearDisplayName()
```

Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

`string display_name = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### clearDiversityLevel()

```
public ServingConfig.Builder clearDiversityLevel()
```

How much diversity to use in recommendation model results e.g. 'medium-diversity' or 'high-diversity'. Currently supported values:

-   'no-diversity'
-   'low-diversity'
-   'medium-diversity'
-   'high-diversity'
-   'auto-diversity' If not specified, we choose default based on recommendation model type. Default value: 'no-diversity'. Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string diversity_level = 8;`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### clearDoNotAssociateControlIds()

```
public ServingConfig.Builder clearDoNotAssociateControlIds()
```

Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string do_not_associate_control_ids = 13;`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### clearDynamicFacetSpec()

```
public ServingConfig.Builder clearDynamicFacetSpec()
```

The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 6;`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

### clearEnableCategoryFilterLevel()

```
public ServingConfig.Builder clearEnableCategoryFilterLevel()
```

Whether to add additional category filters on the 'similar-items' model. If not specified, we enable it by default. Allowed values are:

-   'no-category-match': No additional filtering of original results from the model and the customer's filters.
-   'relaxed-category-match': Only keep results with categories that match at least one item categories in the PredictRequests's context item.
    -   If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string enable_category_filter_level = 16;`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### clearFacetControlIds()

```
public ServingConfig.Builder clearFacetControlIds()
```

Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string facet_control_ids = 5;`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public ServingConfig.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

field

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearFilterControlIds()

```
public ServingConfig.Builder clearFilterControlIds()
```

Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string filter_control_ids = 9;`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### clearIgnoreControlIds()

```
public ServingConfig.Builder clearIgnoreControlIds()
```

Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string ignore_control_ids = 15;`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### clearModelId()

```
public ServingConfig.Builder clearModelId()
```

The id of the model to use at serving time. Currently only RecommendationModels are supported: [https://cloud.google.com/retail/recommendations-ai/docs/create-models](https://cloud.google.com/retail/recommendations-ai/docs/create-models) Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string model_id = 3;`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### clearName()

```
public ServingConfig.Builder clearName()
```

Immutable. Fully qualified name projects/\*/locations/global/catalogs/\*/servingConfig/\*

`string name = 1 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public ServingConfig.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

oneof

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearOnewaySynonymsControlIds()

```
public ServingConfig.Builder clearOnewaySynonymsControlIds()
```

Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string oneway_synonyms_control_ids = 12;`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### clearPriceRerankingLevel()

```
public ServingConfig.Builder clearPriceRerankingLevel()
```

How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are:

-   'no-price-reranking'
-   'low-price-raranking'
-   'medium-price-reranking'
-   'high-price-reranking' If not specified, we choose default based on model type. Default value: 'no-price-reranking'. Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string price_reranking_level = 4;`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### clearRedirectControlIds()

```
public ServingConfig.Builder clearRedirectControlIds()
```

Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string redirect_control_ids = 10;`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### clearReplacementControlIds()

```
public ServingConfig.Builder clearReplacementControlIds()
```

Condition replacement specifications.

-   Applied according to the order in the list.
-   A previously replaced term can not be re-replaced.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string replacement_control_ids = 14;`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### clearSolutionTypes()

```
public ServingConfig.Builder clearSolutionTypes()
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### clearTwowaySynonymsControlIds()

```
public ServingConfig.Builder clearTwowaySynonymsControlIds()
```

Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string twoway_synonyms_control_ids = 18;`

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### clone()

```
public ServingConfig.Builder clone()
```

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getBoostControlIds(int index)

```
public String getBoostControlIds(int index)
```

Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost\_control\_ids and \[SearchRequest.boost\_spec\] are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string boost_control_ids = 7;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The boostControlIds at the given index.

### getBoostControlIdsBytes(int index)

```
public ByteString getBoostControlIdsBytes(int index)
```

Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost\_control\_ids and \[SearchRequest.boost\_spec\] are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string boost_control_ids = 7;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the boostControlIds at the given index.

### getBoostControlIdsCount()

```
public int getBoostControlIdsCount()
```

Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost\_control\_ids and \[SearchRequest.boost\_spec\] are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string boost_control_ids = 7;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of boostControlIds.

### getBoostControlIdsList()

```
public ProtocolStringList getBoostControlIdsList()
```

Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost\_control\_ids and \[SearchRequest.boost\_spec\] are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string boost_control_ids = 7;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the boostControlIds.

### getDefaultInstanceForType()

```
public ServingConfig getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

[ServingConfig](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig)

### getDescriptorForType()

```
public Descriptors.Descriptor getDescriptorForType()
```

**Returns**

**Type**

**Description**

[Descriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.Descriptor.html)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.getDescriptorForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_getDescriptorForType__)

### getDisplayName()

```
public String getDisplayName()
```

Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

`string display_name = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The displayName.

### getDisplayNameBytes()

```
public ByteString getDisplayNameBytes()
```

Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

`string display_name = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for displayName.

### getDiversityLevel()

```
public String getDiversityLevel()
```

How much diversity to use in recommendation model results e.g. 'medium-diversity' or 'high-diversity'. Currently supported values:

-   'no-diversity'
-   'low-diversity'
-   'medium-diversity'
-   'high-diversity'
-   'auto-diversity' If not specified, we choose default based on recommendation model type. Default value: 'no-diversity'. Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string diversity_level = 8;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The diversityLevel.

### getDiversityLevelBytes()

```
public ByteString getDiversityLevelBytes()
```

How much diversity to use in recommendation model results e.g. 'medium-diversity' or 'high-diversity'. Currently supported values:

-   'no-diversity'
-   'low-diversity'
-   'medium-diversity'
-   'high-diversity'
-   'auto-diversity' If not specified, we choose default based on recommendation model type. Default value: 'no-diversity'. Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string diversity_level = 8;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for diversityLevel.

### getDoNotAssociateControlIds(int index)

```
public String getDoNotAssociateControlIds(int index)
```

Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string do_not_associate_control_ids = 13;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The doNotAssociateControlIds at the given index.

### getDoNotAssociateControlIdsBytes(int index)

```
public ByteString getDoNotAssociateControlIdsBytes(int index)
```

Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string do_not_associate_control_ids = 13;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the doNotAssociateControlIds at the given index.

### getDoNotAssociateControlIdsCount()

```
public int getDoNotAssociateControlIdsCount()
```

Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string do_not_associate_control_ids = 13;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of doNotAssociateControlIds.

### getDoNotAssociateControlIdsList()

```
public ProtocolStringList getDoNotAssociateControlIdsList()
```

Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string do_not_associate_control_ids = 13;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the doNotAssociateControlIds.

### getDynamicFacetSpec()

```
public SearchRequest.DynamicFacetSpec getDynamicFacetSpec()
```

The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 6;`

**Returns**

**Type**

**Description**

[SearchRequest.DynamicFacetSpec](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec)

The dynamicFacetSpec.

### getDynamicFacetSpecBuilder()

```
public SearchRequest.DynamicFacetSpec.Builder getDynamicFacetSpecBuilder()
```

The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 6;`

**Returns**

**Type**

**Description**

[SearchRequest.DynamicFacetSpec.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec.Builder)

### getDynamicFacetSpecOrBuilder()

```
public SearchRequest.DynamicFacetSpecOrBuilder getDynamicFacetSpecOrBuilder()
```

The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 6;`

**Returns**

**Type**

**Description**

[SearchRequest.DynamicFacetSpecOrBuilder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpecOrBuilder)

### getEnableCategoryFilterLevel()

```
public String getEnableCategoryFilterLevel()
```

Whether to add additional category filters on the 'similar-items' model. If not specified, we enable it by default. Allowed values are:

-   'no-category-match': No additional filtering of original results from the model and the customer's filters.
-   'relaxed-category-match': Only keep results with categories that match at least one item categories in the PredictRequests's context item.
    -   If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string enable_category_filter_level = 16;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The enableCategoryFilterLevel.

### getEnableCategoryFilterLevelBytes()

```
public ByteString getEnableCategoryFilterLevelBytes()
```

Whether to add additional category filters on the 'similar-items' model. If not specified, we enable it by default. Allowed values are:

-   'no-category-match': No additional filtering of original results from the model and the customer's filters.
-   'relaxed-category-match': Only keep results with categories that match at least one item categories in the PredictRequests's context item.
    -   If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string enable_category_filter_level = 16;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for enableCategoryFilterLevel.

### getFacetControlIds(int index)

```
public String getFacetControlIds(int index)
```

Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string facet_control_ids = 5;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The facetControlIds at the given index.

### getFacetControlIdsBytes(int index)

```
public ByteString getFacetControlIdsBytes(int index)
```

Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string facet_control_ids = 5;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the facetControlIds at the given index.

### getFacetControlIdsCount()

```
public int getFacetControlIdsCount()
```

Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string facet_control_ids = 5;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of facetControlIds.

### getFacetControlIdsList()

```
public ProtocolStringList getFacetControlIdsList()
```

Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string facet_control_ids = 5;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the facetControlIds.

### getFilterControlIds(int index)

```
public String getFilterControlIds(int index)
```

Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string filter_control_ids = 9;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The filterControlIds at the given index.

### getFilterControlIdsBytes(int index)

```
public ByteString getFilterControlIdsBytes(int index)
```

Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string filter_control_ids = 9;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the filterControlIds at the given index.

### getFilterControlIdsCount()

```
public int getFilterControlIdsCount()
```

Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string filter_control_ids = 9;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of filterControlIds.

### getFilterControlIdsList()

```
public ProtocolStringList getFilterControlIdsList()
```

Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string filter_control_ids = 9;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the filterControlIds.

### getIgnoreControlIds(int index)

```
public String getIgnoreControlIds(int index)
```

Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string ignore_control_ids = 15;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The ignoreControlIds at the given index.

### getIgnoreControlIdsBytes(int index)

```
public ByteString getIgnoreControlIdsBytes(int index)
```

Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string ignore_control_ids = 15;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the ignoreControlIds at the given index.

### getIgnoreControlIdsCount()

```
public int getIgnoreControlIdsCount()
```

Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string ignore_control_ids = 15;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of ignoreControlIds.

### getIgnoreControlIdsList()

```
public ProtocolStringList getIgnoreControlIdsList()
```

Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string ignore_control_ids = 15;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the ignoreControlIds.

### getModelId()

```
public String getModelId()
```

The id of the model to use at serving time. Currently only RecommendationModels are supported: [https://cloud.google.com/retail/recommendations-ai/docs/create-models](https://cloud.google.com/retail/recommendations-ai/docs/create-models) Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string model_id = 3;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The modelId.

### getModelIdBytes()

```
public ByteString getModelIdBytes()
```

The id of the model to use at serving time. Currently only RecommendationModels are supported: [https://cloud.google.com/retail/recommendations-ai/docs/create-models](https://cloud.google.com/retail/recommendations-ai/docs/create-models) Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string model_id = 3;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for modelId.

### getName()

```
public String getName()
```

Immutable. Fully qualified name projects/\*/locations/global/catalogs/\*/servingConfig/\*

`string name = 1 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The name.

### getNameBytes()

```
public ByteString getNameBytes()
```

Immutable. Fully qualified name projects/\*/locations/global/catalogs/\*/servingConfig/\*

`string name = 1 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for name.

### getOnewaySynonymsControlIds(int index)

```
public String getOnewaySynonymsControlIds(int index)
```

Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string oneway_synonyms_control_ids = 12;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The onewaySynonymsControlIds at the given index.

### getOnewaySynonymsControlIdsBytes(int index)

```
public ByteString getOnewaySynonymsControlIdsBytes(int index)
```

Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string oneway_synonyms_control_ids = 12;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the onewaySynonymsControlIds at the given index.

### getOnewaySynonymsControlIdsCount()

```
public int getOnewaySynonymsControlIdsCount()
```

Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string oneway_synonyms_control_ids = 12;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of onewaySynonymsControlIds.

### getOnewaySynonymsControlIdsList()

```
public ProtocolStringList getOnewaySynonymsControlIdsList()
```

Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string oneway_synonyms_control_ids = 12;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the onewaySynonymsControlIds.

### getPriceRerankingLevel()

```
public String getPriceRerankingLevel()
```

How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are:

-   'no-price-reranking'
-   'low-price-raranking'
-   'medium-price-reranking'
-   'high-price-reranking' If not specified, we choose default based on model type. Default value: 'no-price-reranking'. Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string price_reranking_level = 4;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The priceRerankingLevel.

### getPriceRerankingLevelBytes()

```
public ByteString getPriceRerankingLevelBytes()
```

How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are:

-   'no-price-reranking'
-   'low-price-raranking'
-   'medium-price-reranking'
-   'high-price-reranking' If not specified, we choose default based on model type. Default value: 'no-price-reranking'. Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string price_reranking_level = 4;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for priceRerankingLevel.

### getRedirectControlIds(int index)

```
public String getRedirectControlIds(int index)
```

Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string redirect_control_ids = 10;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The redirectControlIds at the given index.

### getRedirectControlIdsBytes(int index)

```
public ByteString getRedirectControlIdsBytes(int index)
```

Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string redirect_control_ids = 10;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the redirectControlIds at the given index.

### getRedirectControlIdsCount()

```
public int getRedirectControlIdsCount()
```

Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string redirect_control_ids = 10;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of redirectControlIds.

### getRedirectControlIdsList()

```
public ProtocolStringList getRedirectControlIdsList()
```

Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string redirect_control_ids = 10;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the redirectControlIds.

### getReplacementControlIds(int index)

```
public String getReplacementControlIds(int index)
```

Condition replacement specifications.

-   Applied according to the order in the list.
-   A previously replaced term can not be re-replaced.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string replacement_control_ids = 14;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The replacementControlIds at the given index.

### getReplacementControlIdsBytes(int index)

```
public ByteString getReplacementControlIdsBytes(int index)
```

Condition replacement specifications.

-   Applied according to the order in the list.
-   A previously replaced term can not be re-replaced.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string replacement_control_ids = 14;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the replacementControlIds at the given index.

### getReplacementControlIdsCount()

```
public int getReplacementControlIdsCount()
```

Condition replacement specifications.

-   Applied according to the order in the list.
-   A previously replaced term can not be re-replaced.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string replacement_control_ids = 14;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of replacementControlIds.

### getReplacementControlIdsList()

```
public ProtocolStringList getReplacementControlIdsList()
```

Condition replacement specifications.

-   Applied according to the order in the list.
-   A previously replaced term can not be re-replaced.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string replacement_control_ids = 14;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the replacementControlIds.

### getSolutionTypes(int index)

```
public SolutionType getSolutionTypes(int index)
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[SolutionType](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SolutionType)

The solutionTypes at the given index.

### getSolutionTypesCount()

```
public int getSolutionTypesCount()
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of solutionTypes.

### getSolutionTypesList()

```
public List<SolutionType> getSolutionTypesList()
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SolutionType](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SolutionType)\>

A list containing the solutionTypes.

### getSolutionTypesValue(int index)

```
public int getSolutionTypesValue(int index)
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The enum numeric value on the wire of solutionTypes at the given index.

### getSolutionTypesValueList()

```
public List<Integer> getSolutionTypesValueList()
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)\>

A list containing the enum numeric values on the wire for solutionTypes.

### getTwowaySynonymsControlIds(int index)

```
public String getTwowaySynonymsControlIds(int index)
```

Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string twoway_synonyms_control_ids = 18;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The twowaySynonymsControlIds at the given index.

### getTwowaySynonymsControlIdsBytes(int index)

```
public ByteString getTwowaySynonymsControlIdsBytes(int index)
```

Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string twoway_synonyms_control_ids = 18;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes of the twowaySynonymsControlIds at the given index.

### getTwowaySynonymsControlIdsCount()

```
public int getTwowaySynonymsControlIdsCount()
```

Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string twoway_synonyms_control_ids = 18;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The count of twowaySynonymsControlIds.

### getTwowaySynonymsControlIdsList()

```
public ProtocolStringList getTwowaySynonymsControlIdsList()
```

Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string twoway_synonyms_control_ids = 18;`

**Returns**

**Type**

**Description**

[ProtocolStringList](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolStringList.html)

A list containing the twowaySynonymsControlIds.

### hasDynamicFacetSpec()

```
public boolean hasDynamicFacetSpec()
```

The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 6;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the dynamicFacetSpec field is set.

### internalGetFieldAccessorTable()

```
protected GeneratedMessageV3.FieldAccessorTable internalGetFieldAccessorTable()
```

**Returns**

**Type**

**Description**

[FieldAccessorTable](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.FieldAccessorTable.html)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.internalGetFieldAccessorTable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetFieldAccessorTable__)

### isInitialized()

```
public final boolean isInitialized()
```

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.isInitialized()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_isInitialized__)

### mergeDynamicFacetSpec(SearchRequest.DynamicFacetSpec value)

```
public ServingConfig.Builder mergeDynamicFacetSpec(SearchRequest.DynamicFacetSpec value)
```

The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 6;`

**Parameter**

**Name**

**Description**

value

`[SearchRequest.DynamicFacetSpec](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec)`  

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

### mergeFrom(ServingConfig other)

```
public ServingConfig.Builder mergeFrom(ServingConfig other)
```

**Parameter**

**Name**

**Description**

other

`[ServingConfig](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig)`  

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public ServingConfig.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

input

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

extensionRegistry

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### mergeFrom(Message other)

```
public ServingConfig.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

other

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final ServingConfig.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

unknownFields

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setBoostControlIds(int index, String value)

```
public ServingConfig.Builder setBoostControlIds(int index, String value)
```

Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost\_control\_ids and \[SearchRequest.boost\_spec\] are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string boost_control_ids = 7;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The boostControlIds to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setDisplayName(String value)

```
public ServingConfig.Builder setDisplayName(String value)
```

Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

`string display_name = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The displayName to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setDisplayNameBytes(ByteString value)

```
public ServingConfig.Builder setDisplayNameBytes(ByteString value)
```

Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

`string display_name = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for displayName to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setDiversityLevel(String value)

```
public ServingConfig.Builder setDiversityLevel(String value)
```

How much diversity to use in recommendation model results e.g. 'medium-diversity' or 'high-diversity'. Currently supported values:

-   'no-diversity'
-   'low-diversity'
-   'medium-diversity'
-   'high-diversity'
-   'auto-diversity' If not specified, we choose default based on recommendation model type. Default value: 'no-diversity'. Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string diversity_level = 8;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The diversityLevel to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setDiversityLevelBytes(ByteString value)

```
public ServingConfig.Builder setDiversityLevelBytes(ByteString value)
```

How much diversity to use in recommendation model results e.g. 'medium-diversity' or 'high-diversity'. Currently supported values:

-   'no-diversity'
-   'low-diversity'
-   'medium-diversity'
-   'high-diversity'
-   'auto-diversity' If not specified, we choose default based on recommendation model type. Default value: 'no-diversity'. Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string diversity_level = 8;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for diversityLevel to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setDoNotAssociateControlIds(int index, String value)

```
public ServingConfig.Builder setDoNotAssociateControlIds(int index, String value)
```

Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string do_not_associate_control_ids = 13;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The doNotAssociateControlIds to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setDynamicFacetSpec(SearchRequest.DynamicFacetSpec value)

```
public ServingConfig.Builder setDynamicFacetSpec(SearchRequest.DynamicFacetSpec value)
```

The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 6;`

**Parameter**

**Name**

**Description**

value

`[SearchRequest.DynamicFacetSpec](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec)`  

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

### setDynamicFacetSpec(SearchRequest.DynamicFacetSpec.Builder builderForValue)

```
public ServingConfig.Builder setDynamicFacetSpec(SearchRequest.DynamicFacetSpec.Builder builderForValue)
```

The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec dynamic_facet_spec = 6;`

**Parameter**

**Name**

**Description**

builderForValue

`[SearchRequest.DynamicFacetSpec.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SearchRequest.DynamicFacetSpec.Builder)`  

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

### setEnableCategoryFilterLevel(String value)

```
public ServingConfig.Builder setEnableCategoryFilterLevel(String value)
```

Whether to add additional category filters on the 'similar-items' model. If not specified, we enable it by default. Allowed values are:

-   'no-category-match': No additional filtering of original results from the model and the customer's filters.
-   'relaxed-category-match': Only keep results with categories that match at least one item categories in the PredictRequests's context item.
    -   If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string enable_category_filter_level = 16;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The enableCategoryFilterLevel to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setEnableCategoryFilterLevelBytes(ByteString value)

```
public ServingConfig.Builder setEnableCategoryFilterLevelBytes(ByteString value)
```

Whether to add additional category filters on the 'similar-items' model. If not specified, we enable it by default. Allowed values are:

-   'no-category-match': No additional filtering of original results from the model and the customer's filters.
-   'relaxed-category-match': Only keep results with categories that match at least one item categories in the PredictRequests's context item.
    -   If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string enable_category_filter_level = 16;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for enableCategoryFilterLevel to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setFacetControlIds(int index, String value)

```
public ServingConfig.Builder setFacetControlIds(int index, String value)
```

Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID\_ARGUMENT error is returned. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string facet_control_ids = 5;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The facetControlIds to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public ServingConfig.Builder setField(Descriptors.FieldDescriptor field, Object value)
```

**Parameters**

**Name**

**Description**

field

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

value

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setFilterControlIds(int index, String value)

```
public ServingConfig.Builder setFilterControlIds(int index, String value)
```

Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string filter_control_ids = 9;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The filterControlIds to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setIgnoreControlIds(int index, String value)

```
public ServingConfig.Builder setIgnoreControlIds(int index, String value)
```

Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute.

-   Order does not matter.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string ignore_control_ids = 15;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The ignoreControlIds to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setModelId(String value)

```
public ServingConfig.Builder setModelId(String value)
```

The id of the model to use at serving time. Currently only RecommendationModels are supported: [https://cloud.google.com/retail/recommendations-ai/docs/create-models](https://cloud.google.com/retail/recommendations-ai/docs/create-models) Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string model_id = 3;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The modelId to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setModelIdBytes(ByteString value)

```
public ServingConfig.Builder setModelIdBytes(ByteString value)
```

The id of the model to use at serving time. Currently only RecommendationModels are supported: [https://cloud.google.com/retail/recommendations-ai/docs/create-models](https://cloud.google.com/retail/recommendations-ai/docs/create-models) Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string model_id = 3;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for modelId to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setName(String value)

```
public ServingConfig.Builder setName(String value)
```

Immutable. Fully qualified name projects/\*/locations/global/catalogs/\*/servingConfig/\*

`string name = 1 [(.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The name to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setNameBytes(ByteString value)

```
public ServingConfig.Builder setNameBytes(ByteString value)
```

Immutable. Fully qualified name projects/\*/locations/global/catalogs/\*/servingConfig/\*

`string name = 1 [(.google.api.field_behavior) = IMMUTABLE];`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for name to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setOnewaySynonymsControlIds(int index, String value)

```
public ServingConfig.Builder setOnewaySynonymsControlIds(int index, String value)
```

Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string oneway_synonyms_control_ids = 12;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The onewaySynonymsControlIds to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setPriceRerankingLevel(String value)

```
public ServingConfig.Builder setPriceRerankingLevel(String value)
```

How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are:

-   'no-price-reranking'
-   'low-price-raranking'
-   'medium-price-reranking'
-   'high-price-reranking' If not specified, we choose default based on model type. Default value: 'no-price-reranking'. Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string price_reranking_level = 4;`

**Parameter**

**Name**

**Description**

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The priceRerankingLevel to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setPriceRerankingLevelBytes(ByteString value)

```
public ServingConfig.Builder setPriceRerankingLevelBytes(ByteString value)
```

How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are:

-   'no-price-reranking'
-   'low-price-raranking'
-   'medium-price-reranking'
-   'high-price-reranking' If not specified, we choose default based on model type. Default value: 'no-price-reranking'. Can only be set if solution\_types is SOLUTION\_TYPE\_RECOMMENDATION.

`string price_reranking_level = 4;`

**Parameter**

**Name**

**Description**

value

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for priceRerankingLevel to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setRedirectControlIds(int index, String value)

```
public ServingConfig.Builder setRedirectControlIds(int index, String value)
```

Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string redirect_control_ids = 10;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The redirectControlIds to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public ServingConfig.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
```

**Parameters**

**Name**

**Description**

field

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

value

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setReplacementControlIds(int index, String value)

```
public ServingConfig.Builder setReplacementControlIds(int index, String value)
```

Condition replacement specifications.

-   Applied according to the order in the list.
-   A previously replaced term can not be re-replaced.
-   Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string replacement_control_ids = 14;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The replacementControlIds to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setSolutionTypes(int index, SolutionType value)

```
public ServingConfig.Builder setSolutionTypes(int index, SolutionType value)
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

value

`[SolutionType](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.SolutionType)`  

The solutionTypes to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setSolutionTypesValue(int index, int value)

```
public ServingConfig.Builder setSolutionTypesValue(int index, int value)
```

Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.

`repeated .google.cloud.retail.v2alpha.SolutionType solution_types = 19 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

value

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

The enum numeric value on the wire of solutionTypes at the given index.

### setTwowaySynonymsControlIds(int index, String value)

```
public ServingConfig.Builder setTwowaySynonymsControlIds(int index, String value)
```

Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution\_types is SOLUTION\_TYPE\_SEARCH.

`repeated string twoway_synonyms_control_ids = 18;`

**Parameters**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

value

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The twowaySynonymsControlIds to set.

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

This builder for chaining.

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final ServingConfig.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

unknownFields

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

[ServingConfig.Builder](/java/docs/reference/google-cloud-retail/2.3.0/com.google.cloud.retail.v2alpha.ServingConfig.Builder)

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
