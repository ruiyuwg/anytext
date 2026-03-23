-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HttpRoute.RouteMatch.Builder (0.1.0) Stay organized with collections Save and categorize content based on your preferences.

0.43.0 (latest) 0.41.0 0.39.0 0.38.0 0.36.0 0.34.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.26.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static final class HttpRoute.RouteMatch.Builder extends GeneratedMessageV3.Builder<HttpRoute.RouteMatch.Builder> implements HttpRoute.RouteMatchOrBuilder
```

RouteMatch defines specifications used to match requests. If multiple match types are set, this RouteMatch will match if ALL type of matches are matched.

Protobuf type `google.cloud.networkservices.v1.HttpRoute.RouteMatch`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> HttpRoute.RouteMatch.Builder

## Implements

[HttpRoute.RouteMatchOrBuilder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatchOrBuilder)

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

### addAllHeaders(Iterable<? extends HttpRoute.HeaderMatch> values)

```
public HttpRoute.RouteMatch.Builder addAllHeaders(Iterable<? extends HttpRoute.HeaderMatch> values)
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.networkservices.v1.HttpRoute.HeaderMatch>`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### addAllQueryParameters(Iterable<? extends HttpRoute.QueryParameterMatch> values)

```
public HttpRoute.RouteMatch.Builder addAllQueryParameters(Iterable<? extends HttpRoute.QueryParameterMatch> values)
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch>`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### addHeaders(HttpRoute.HeaderMatch value)

```
public HttpRoute.RouteMatch.Builder addHeaders(HttpRoute.HeaderMatch value)
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Parameter**

**Name**

**Description**

`value`

`[HttpRoute.HeaderMatch](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderMatch)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### addHeaders(HttpRoute.HeaderMatch.Builder builderForValue)

```
public HttpRoute.RouteMatch.Builder addHeaders(HttpRoute.HeaderMatch.Builder builderForValue)
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[HttpRoute.HeaderMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderMatch.Builder)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### addHeaders(int index, HttpRoute.HeaderMatch value)

```
public HttpRoute.RouteMatch.Builder addHeaders(int index, HttpRoute.HeaderMatch value)
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[HttpRoute.HeaderMatch](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderMatch)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### addHeaders(int index, HttpRoute.HeaderMatch.Builder builderForValue)

```
public HttpRoute.RouteMatch.Builder addHeaders(int index, HttpRoute.HeaderMatch.Builder builderForValue)
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[HttpRoute.HeaderMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderMatch.Builder)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### addHeadersBuilder()

```
public HttpRoute.HeaderMatch.Builder addHeadersBuilder()
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Returns**

**Type**

**Description**

`[HttpRoute.HeaderMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderMatch.Builder)`

### addHeadersBuilder(int index)

```
public HttpRoute.HeaderMatch.Builder addHeadersBuilder(int index)
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.HeaderMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderMatch.Builder)`

### addQueryParameters(HttpRoute.QueryParameterMatch value)

```
public HttpRoute.RouteMatch.Builder addQueryParameters(HttpRoute.QueryParameterMatch value)
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Parameter**

**Name**

**Description**

`value`

`[HttpRoute.QueryParameterMatch](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### addQueryParameters(HttpRoute.QueryParameterMatch.Builder builderForValue)

```
public HttpRoute.RouteMatch.Builder addQueryParameters(HttpRoute.QueryParameterMatch.Builder builderForValue)
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[HttpRoute.QueryParameterMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch.Builder)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### addQueryParameters(int index, HttpRoute.QueryParameterMatch value)

```
public HttpRoute.RouteMatch.Builder addQueryParameters(int index, HttpRoute.QueryParameterMatch value)
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[HttpRoute.QueryParameterMatch](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### addQueryParameters(int index, HttpRoute.QueryParameterMatch.Builder builderForValue)

```
public HttpRoute.RouteMatch.Builder addQueryParameters(int index, HttpRoute.QueryParameterMatch.Builder builderForValue)
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[HttpRoute.QueryParameterMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch.Builder)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### addQueryParametersBuilder()

```
public HttpRoute.QueryParameterMatch.Builder addQueryParametersBuilder()
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Returns**

**Type**

**Description**

`[HttpRoute.QueryParameterMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch.Builder)`

### addQueryParametersBuilder(int index)

```
public HttpRoute.QueryParameterMatch.Builder addQueryParametersBuilder(int index)
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.QueryParameterMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch.Builder)`

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public HttpRoute.RouteMatch.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public HttpRoute.RouteMatch build()
```

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch)`

### buildPartial()

```
public HttpRoute.RouteMatch buildPartial()
```

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch)`

### clear()

```
public HttpRoute.RouteMatch.Builder clear()
```

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearField(Descriptors.FieldDescriptor field)

```
public HttpRoute.RouteMatch.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearFullPathMatch()

```
public HttpRoute.RouteMatch.Builder clearFullPathMatch()
```

The HTTP request path value should exactly match this value.

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string full_path_match = 1;`

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

This builder for chaining.

### clearHeaders()

```
public HttpRoute.RouteMatch.Builder clearHeaders()
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### clearIgnoreCase()

```
public HttpRoute.RouteMatch.Builder clearIgnoreCase()
```

Specifies if prefix\_match and full\_path\_match matches are case sensitive. The default value is false.

`bool ignore_case = 4;`

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public HttpRoute.RouteMatch.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearPathMatch()

```
public HttpRoute.RouteMatch.Builder clearPathMatch()
```

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### clearPrefixMatch()

```
public HttpRoute.RouteMatch.Builder clearPrefixMatch()
```

The HTTP request path value must begin with specified prefix\_match. prefix\_match must begin with a /.

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string prefix_match = 2;`

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

This builder for chaining.

### clearQueryParameters()

```
public HttpRoute.RouteMatch.Builder clearQueryParameters()
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### clearRegexMatch()

```
public HttpRoute.RouteMatch.Builder clearRegexMatch()
```

The HTTP request path value must satisfy the regular expression specified by regex\_match after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see [https://github.com/google/re2/wiki/Syntax](https://github.com/google/re2/wiki/Syntax)

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string regex_match = 3;`

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

This builder for chaining.

### clone()

```
public HttpRoute.RouteMatch.Builder clone()
```

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getDefaultInstanceForType()

```
public HttpRoute.RouteMatch getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch)`

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

### getFullPathMatch()

```
public String getFullPathMatch()
```

The HTTP request path value should exactly match this value.

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string full_path_match = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The fullPathMatch.

### getFullPathMatchBytes()

```
public ByteString getFullPathMatchBytes()
```

The HTTP request path value should exactly match this value.

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string full_path_match = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for fullPathMatch.

### getHeaders(int index)

```
public HttpRoute.HeaderMatch getHeaders(int index)
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.HeaderMatch](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderMatch)`

### getHeadersBuilder(int index)

```
public HttpRoute.HeaderMatch.Builder getHeadersBuilder(int index)
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.HeaderMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderMatch.Builder)`

### getHeadersBuilderList()

```
public List<HttpRoute.HeaderMatch.Builder> getHeadersBuilderList()
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderMatch.Builder)>`

### getHeadersCount()

```
public int getHeadersCount()
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getHeadersList()

```
public List<HttpRoute.HeaderMatch> getHeadersList()
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[HeaderMatch](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderMatch)>`

### getHeadersOrBuilder(int index)

```
public HttpRoute.HeaderMatchOrBuilder getHeadersOrBuilder(int index)
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.HeaderMatchOrBuilder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderMatchOrBuilder)`

### getHeadersOrBuilderList()

```
public List<? extends HttpRoute.HeaderMatchOrBuilder> getHeadersOrBuilderList()
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.networkservices.v1.HttpRoute.HeaderMatchOrBuilder>`

### getIgnoreCase()

```
public boolean getIgnoreCase()
```

Specifies if prefix\_match and full\_path\_match matches are case sensitive. The default value is false.

`bool ignore_case = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The ignoreCase.

### getPathMatchCase()

```
public HttpRoute.RouteMatch.PathMatchCase getPathMatchCase()
```

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.PathMatchCase](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.PathMatchCase)`

### getPrefixMatch()

```
public String getPrefixMatch()
```

The HTTP request path value must begin with specified prefix\_match. prefix\_match must begin with a /.

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string prefix_match = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The prefixMatch.

### getPrefixMatchBytes()

```
public ByteString getPrefixMatchBytes()
```

The HTTP request path value must begin with specified prefix\_match. prefix\_match must begin with a /.

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string prefix_match = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for prefixMatch.

### getQueryParameters(int index)

```
public HttpRoute.QueryParameterMatch getQueryParameters(int index)
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.QueryParameterMatch](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch)`

### getQueryParametersBuilder(int index)

```
public HttpRoute.QueryParameterMatch.Builder getQueryParametersBuilder(int index)
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.QueryParameterMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch.Builder)`

### getQueryParametersBuilderList()

```
public List<HttpRoute.QueryParameterMatch.Builder> getQueryParametersBuilderList()
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch.Builder)>`

### getQueryParametersCount()

```
public int getQueryParametersCount()
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getQueryParametersList()

```
public List<HttpRoute.QueryParameterMatch> getQueryParametersList()
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[QueryParameterMatch](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch)>`

### getQueryParametersOrBuilder(int index)

```
public HttpRoute.QueryParameterMatchOrBuilder getQueryParametersOrBuilder(int index)
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.QueryParameterMatchOrBuilder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.QueryParameterMatchOrBuilder)`

### getQueryParametersOrBuilderList()

```
public List<? extends HttpRoute.QueryParameterMatchOrBuilder> getQueryParametersOrBuilderList()
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.networkservices.v1.HttpRoute.QueryParameterMatchOrBuilder>`

### getRegexMatch()

```
public String getRegexMatch()
```

The HTTP request path value must satisfy the regular expression specified by regex\_match after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see [https://github.com/google/re2/wiki/Syntax](https://github.com/google/re2/wiki/Syntax)

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string regex_match = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The regexMatch.

### getRegexMatchBytes()

```
public ByteString getRegexMatchBytes()
```

The HTTP request path value must satisfy the regular expression specified by regex\_match after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see [https://github.com/google/re2/wiki/Syntax](https://github.com/google/re2/wiki/Syntax)

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string regex_match = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for regexMatch.

### hasFullPathMatch()

```
public boolean hasFullPathMatch()
```

The HTTP request path value should exactly match this value.

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string full_path_match = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the fullPathMatch field is set.

### hasPrefixMatch()

```
public boolean hasPrefixMatch()
```

The HTTP request path value must begin with specified prefix\_match. prefix\_match must begin with a /.

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string prefix_match = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the prefixMatch field is set.

### hasRegexMatch()

```
public boolean hasRegexMatch()
```

The HTTP request path value must satisfy the regular expression specified by regex\_match after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see [https://github.com/google/re2/wiki/Syntax](https://github.com/google/re2/wiki/Syntax)

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string regex_match = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the regexMatch field is set.

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

### mergeFrom(HttpRoute.RouteMatch other)

```
public HttpRoute.RouteMatch.Builder mergeFrom(HttpRoute.RouteMatch other)
```

**Parameter**

**Name**

**Description**

`other`

`[HttpRoute.RouteMatch](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public HttpRoute.RouteMatch.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public HttpRoute.RouteMatch.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final HttpRoute.RouteMatch.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### removeHeaders(int index)

```
public HttpRoute.RouteMatch.Builder removeHeaders(int index)
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### removeQueryParameters(int index)

```
public HttpRoute.RouteMatch.Builder removeQueryParameters(int index)
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public HttpRoute.RouteMatch.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setFullPathMatch(String value)

```
public HttpRoute.RouteMatch.Builder setFullPathMatch(String value)
```

The HTTP request path value should exactly match this value.

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string full_path_match = 1;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The fullPathMatch to set.

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

This builder for chaining.

### setFullPathMatchBytes(ByteString value)

```
public HttpRoute.RouteMatch.Builder setFullPathMatchBytes(ByteString value)
```

The HTTP request path value should exactly match this value.

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string full_path_match = 1;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for fullPathMatch to set.

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

This builder for chaining.

### setHeaders(int index, HttpRoute.HeaderMatch value)

```
public HttpRoute.RouteMatch.Builder setHeaders(int index, HttpRoute.HeaderMatch value)
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[HttpRoute.HeaderMatch](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderMatch)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### setHeaders(int index, HttpRoute.HeaderMatch.Builder builderForValue)

```
public HttpRoute.RouteMatch.Builder setHeaders(int index, HttpRoute.HeaderMatch.Builder builderForValue)
```

Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.HeaderMatch headers = 5;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[HttpRoute.HeaderMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.HeaderMatch.Builder)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### setIgnoreCase(boolean value)

```
public HttpRoute.RouteMatch.Builder setIgnoreCase(boolean value)
```

Specifies if prefix\_match and full\_path\_match matches are case sensitive. The default value is false.

`bool ignore_case = 4;`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The ignoreCase to set.

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

This builder for chaining.

### setPrefixMatch(String value)

```
public HttpRoute.RouteMatch.Builder setPrefixMatch(String value)
```

The HTTP request path value must begin with specified prefix\_match. prefix\_match must begin with a /.

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string prefix_match = 2;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The prefixMatch to set.

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

This builder for chaining.

### setPrefixMatchBytes(ByteString value)

```
public HttpRoute.RouteMatch.Builder setPrefixMatchBytes(ByteString value)
```

The HTTP request path value must begin with specified prefix\_match. prefix\_match must begin with a /.

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string prefix_match = 2;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for prefixMatch to set.

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

This builder for chaining.

### setQueryParameters(int index, HttpRoute.QueryParameterMatch value)

```
public HttpRoute.RouteMatch.Builder setQueryParameters(int index, HttpRoute.QueryParameterMatch value)
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[HttpRoute.QueryParameterMatch](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### setQueryParameters(int index, HttpRoute.QueryParameterMatch.Builder builderForValue)

```
public HttpRoute.RouteMatch.Builder setQueryParameters(int index, HttpRoute.QueryParameterMatch.Builder builderForValue)
```

Specifies a list of query parameters to match against. ALL of the query parameters must be matched.

`repeated .google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch query_parameters = 6;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[HttpRoute.QueryParameterMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.QueryParameterMatch.Builder)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

### setRegexMatch(String value)

```
public HttpRoute.RouteMatch.Builder setRegexMatch(String value)
```

The HTTP request path value must satisfy the regular expression specified by regex\_match after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see [https://github.com/google/re2/wiki/Syntax](https://github.com/google/re2/wiki/Syntax)

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string regex_match = 3;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The regexMatch to set.

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

This builder for chaining.

### setRegexMatchBytes(ByteString value)

```
public HttpRoute.RouteMatch.Builder setRegexMatchBytes(ByteString value)
```

The HTTP request path value must satisfy the regular expression specified by regex\_match after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see [https://github.com/google/re2/wiki/Syntax](https://github.com/google/re2/wiki/Syntax)

Only one of full\_path\_match, prefix\_match, or regex\_match should be used.

`string regex_match = 3;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for regexMatch to set.

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public HttpRoute.RouteMatch.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final HttpRoute.RouteMatch.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[HttpRoute.RouteMatch.Builder](/java/docs/reference/google-cloud-networkservices/0.1.0/com.google.cloud.networkservices.v1.HttpRoute.RouteMatch.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
