-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HttpTarget.Builder (2.32.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.13 2.2.0 2.1.23

```
public static final class HttpTarget.Builder extends GeneratedMessageV3.Builder<HttpTarget.Builder> implements HttpTargetOrBuilder
```

Http target. The job will be pushed to the job handler by means of an HTTP request via an http\_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range \[200 - 299\]. A failure to receive a response constitutes a failed execution. For a redirected request, the response returned by the redirected request is considered.

Protobuf type `google.cloud.scheduler.v1beta1.HttpTarget`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> HttpTarget.Builder

## Implements

[HttpTargetOrBuilder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTargetOrBuilder)

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
public HttpTarget.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public HttpTarget build()
```

**Returns**

**Type**

**Description**

`[HttpTarget](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget)`

### buildPartial()

```
public HttpTarget buildPartial()
```

**Returns**

**Type**

**Description**

`[HttpTarget](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget)`

### clear()

```
public HttpTarget.Builder clear()
```

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearAuthorizationHeader()

```
public HttpTarget.Builder clearAuthorizationHeader()
```

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

### clearBody()

```
public HttpTarget.Builder clearBody()
```

HTTP request body. A request body is allowed only if the HTTP method is POST, PUT, or PATCH. It is an error to set body on a job with an incompatible HttpMethod.

`bytes body = 4;`

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public HttpTarget.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearHeaders()

```
public HttpTarget.Builder clearHeaders()
```

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

### clearHttpMethod()

```
public HttpTarget.Builder clearHttpMethod()
```

Which HTTP method to use for the request.

`.google.cloud.scheduler.v1beta1.HttpMethod http_method = 2;`

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

This builder for chaining.

### clearOauthToken()

```
public HttpTarget.Builder clearOauthToken()
```

If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization should generally only be used when calling Google APIs hosted on \*.googleapis.com.

`.google.cloud.scheduler.v1beta1.OAuthToken oauth_token = 5;`

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

### clearOidcToken()

```
public HttpTarget.Builder clearOidcToken()
```

If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.

`.google.cloud.scheduler.v1beta1.OidcToken oidc_token = 6;`

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public HttpTarget.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearUri()

```
public HttpTarget.Builder clearUri()
```

Required. The full URI path that the request will be sent to. This string must begin with either "http://" or "https://". Some examples of valid values for uri are: `[http://acme.com](http://acme.com)` and `[https://acme.com/sales:8080](https://acme.com/sales:8080)`. Cloud Scheduler will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding.

`string uri = 1;`

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

This builder for chaining.

### clone()

```
public HttpTarget.Builder clone()
```

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### containsHeaders(String key)

```
public boolean containsHeaders(String key)
```

The user can specify HTTP request headers to send with the job's HTTP request. This map contains the header field names and values. Repeated headers are not supported, but a header value can contain commas. These headers represent a subset of the headers that will accompany the job's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is below:

-   Host: This will be computed by Cloud Scheduler and derived from uri.
-   `Content-Length`: This will be computed by Cloud Scheduler.
-   `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`.
-   `X-Google-*`: Google internal use only.
-   `X-AppEngine-*`: Google internal use only.
-   `X-CloudScheduler`: This header will be set to true.
-   `X-CloudScheduler-JobName`: This header will contain the job name.
-   `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339.
    
    The total size of headers must be less than 80KB.
    

`map<string, string> headers = 3;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAuthorizationHeaderCase()

```
public HttpTarget.AuthorizationHeaderCase getAuthorizationHeaderCase()
```

**Returns**

**Type**

**Description**

`[HttpTarget.AuthorizationHeaderCase](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.AuthorizationHeaderCase)`

### getBody()

```
public ByteString getBody()
```

HTTP request body. A request body is allowed only if the HTTP method is POST, PUT, or PATCH. It is an error to set body on a job with an incompatible HttpMethod.

`bytes body = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The body.

### getDefaultInstanceForType()

```
public HttpTarget getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[HttpTarget](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget)`

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

### getHeaders() (deprecated)

```
public Map<String,String> getHeaders()
```

Use [#getHeadersMap()](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder#com_google_cloud_scheduler_v1beta1_HttpTarget_Builder_getHeadersMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getHeadersCount()

```
public int getHeadersCount()
```

The user can specify HTTP request headers to send with the job's HTTP request. This map contains the header field names and values. Repeated headers are not supported, but a header value can contain commas. These headers represent a subset of the headers that will accompany the job's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is below:

-   Host: This will be computed by Cloud Scheduler and derived from uri.
-   `Content-Length`: This will be computed by Cloud Scheduler.
-   `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`.
-   `X-Google-*`: Google internal use only.
-   `X-AppEngine-*`: Google internal use only.
-   `X-CloudScheduler`: This header will be set to true.
-   `X-CloudScheduler-JobName`: This header will contain the job name.
-   `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339.
    
    The total size of headers must be less than 80KB.
    

`map<string, string> headers = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getHeadersMap()

```
public Map<String,String> getHeadersMap()
```

The user can specify HTTP request headers to send with the job's HTTP request. This map contains the header field names and values. Repeated headers are not supported, but a header value can contain commas. These headers represent a subset of the headers that will accompany the job's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is below:

-   Host: This will be computed by Cloud Scheduler and derived from uri.
-   `Content-Length`: This will be computed by Cloud Scheduler.
-   `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`.
-   `X-Google-*`: Google internal use only.
-   `X-AppEngine-*`: Google internal use only.
-   `X-CloudScheduler`: This header will be set to true.
-   `X-CloudScheduler-JobName`: This header will contain the job name.
-   `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339.
    
    The total size of headers must be less than 80KB.
    

`map<string, string> headers = 3;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getHeadersOrDefault(String key, String defaultValue)

```
public String getHeadersOrDefault(String key, String defaultValue)
```

The user can specify HTTP request headers to send with the job's HTTP request. This map contains the header field names and values. Repeated headers are not supported, but a header value can contain commas. These headers represent a subset of the headers that will accompany the job's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is below:

-   Host: This will be computed by Cloud Scheduler and derived from uri.
-   `Content-Length`: This will be computed by Cloud Scheduler.
-   `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`.
-   `X-Google-*`: Google internal use only.
-   `X-AppEngine-*`: Google internal use only.
-   `X-CloudScheduler`: This header will be set to true.
-   `X-CloudScheduler-JobName`: This header will contain the job name.
-   `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339.
    
    The total size of headers must be less than 80KB.
    

`map<string, string> headers = 3;`

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

### getHeadersOrThrow(String key)

```
public String getHeadersOrThrow(String key)
```

The user can specify HTTP request headers to send with the job's HTTP request. This map contains the header field names and values. Repeated headers are not supported, but a header value can contain commas. These headers represent a subset of the headers that will accompany the job's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is below:

-   Host: This will be computed by Cloud Scheduler and derived from uri.
-   `Content-Length`: This will be computed by Cloud Scheduler.
-   `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`.
-   `X-Google-*`: Google internal use only.
-   `X-AppEngine-*`: Google internal use only.
-   `X-CloudScheduler`: This header will be set to true.
-   `X-CloudScheduler-JobName`: This header will contain the job name.
-   `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339.
    
    The total size of headers must be less than 80KB.
    

`map<string, string> headers = 3;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getHttpMethod()

```
public HttpMethod getHttpMethod()
```

Which HTTP method to use for the request.

`.google.cloud.scheduler.v1beta1.HttpMethod http_method = 2;`

**Returns**

**Type**

**Description**

`[HttpMethod](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpMethod)`

The httpMethod.

### getHttpMethodValue()

```
public int getHttpMethodValue()
```

Which HTTP method to use for the request.

`.google.cloud.scheduler.v1beta1.HttpMethod http_method = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for httpMethod.

### getMutableHeaders() (deprecated)

```
public Map<String,String> getMutableHeaders()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getOauthToken()

```
public OAuthToken getOauthToken()
```

If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization should generally only be used when calling Google APIs hosted on \*.googleapis.com.

`.google.cloud.scheduler.v1beta1.OAuthToken oauth_token = 5;`

**Returns**

**Type**

**Description**

`[OAuthToken](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.OAuthToken)`

The oauthToken.

### getOauthTokenBuilder()

```
public OAuthToken.Builder getOauthTokenBuilder()
```

If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization should generally only be used when calling Google APIs hosted on \*.googleapis.com.

`.google.cloud.scheduler.v1beta1.OAuthToken oauth_token = 5;`

**Returns**

**Type**

**Description**

`[OAuthToken.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.OAuthToken.Builder)`

### getOauthTokenOrBuilder()

```
public OAuthTokenOrBuilder getOauthTokenOrBuilder()
```

If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization should generally only be used when calling Google APIs hosted on \*.googleapis.com.

`.google.cloud.scheduler.v1beta1.OAuthToken oauth_token = 5;`

**Returns**

**Type**

**Description**

`[OAuthTokenOrBuilder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.OAuthTokenOrBuilder)`

### getOidcToken()

```
public OidcToken getOidcToken()
```

If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.

`.google.cloud.scheduler.v1beta1.OidcToken oidc_token = 6;`

**Returns**

**Type**

**Description**

`[OidcToken](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.OidcToken)`

The oidcToken.

### getOidcTokenBuilder()

```
public OidcToken.Builder getOidcTokenBuilder()
```

If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.

`.google.cloud.scheduler.v1beta1.OidcToken oidc_token = 6;`

**Returns**

**Type**

**Description**

`[OidcToken.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.OidcToken.Builder)`

### getOidcTokenOrBuilder()

```
public OidcTokenOrBuilder getOidcTokenOrBuilder()
```

If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.

`.google.cloud.scheduler.v1beta1.OidcToken oidc_token = 6;`

**Returns**

**Type**

**Description**

`[OidcTokenOrBuilder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.OidcTokenOrBuilder)`

### getUri()

```
public String getUri()
```

Required. The full URI path that the request will be sent to. This string must begin with either "http://" or "https://". Some examples of valid values for uri are: `[http://acme.com](http://acme.com)` and `[https://acme.com/sales:8080](https://acme.com/sales:8080)`. Cloud Scheduler will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding.

`string uri = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The uri.

### getUriBytes()

```
public ByteString getUriBytes()
```

Required. The full URI path that the request will be sent to. This string must begin with either "http://" or "https://". Some examples of valid values for uri are: `[http://acme.com](http://acme.com)` and `[https://acme.com/sales:8080](https://acme.com/sales:8080)`. Cloud Scheduler will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding.

`string uri = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for uri.

### hasOauthToken()

```
public boolean hasOauthToken()
```

If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization should generally only be used when calling Google APIs hosted on \*.googleapis.com.

`.google.cloud.scheduler.v1beta1.OAuthToken oauth_token = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the oauthToken field is set.

### hasOidcToken()

```
public boolean hasOidcToken()
```

If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.

`.google.cloud.scheduler.v1beta1.OidcToken oidc_token = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the oidcToken field is set.

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

### internalGetMapField(int number)

```
protected MapField internalGetMapField(int number)
```

**Parameter**

**Name**

**Description**

`number`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[MapField](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MapField.html)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.internalGetMapField(int fieldNumber)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetMapField_int_)

### internalGetMutableMapField(int number)

```
protected MapField internalGetMutableMapField(int number)
```

**Parameter**

**Name**

**Description**

`number`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[MapField](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MapField.html)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.internalGetMutableMapField(int fieldNumber)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_internalGetMutableMapField_int_)

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

### mergeFrom(HttpTarget other)

```
public HttpTarget.Builder mergeFrom(HttpTarget other)
```

**Parameter**

**Name**

**Description**

`other`

`[HttpTarget](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget)`  

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public HttpTarget.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public HttpTarget.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeOauthToken(OAuthToken value)

```
public HttpTarget.Builder mergeOauthToken(OAuthToken value)
```

If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization should generally only be used when calling Google APIs hosted on \*.googleapis.com.

`.google.cloud.scheduler.v1beta1.OAuthToken oauth_token = 5;`

**Parameter**

**Name**

**Description**

`value`

`[OAuthToken](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.OAuthToken)`  

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

### mergeOidcToken(OidcToken value)

```
public HttpTarget.Builder mergeOidcToken(OidcToken value)
```

If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.

`.google.cloud.scheduler.v1beta1.OidcToken oidc_token = 6;`

**Parameter**

**Name**

**Description**

`value`

`[OidcToken](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.OidcToken)`  

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final HttpTarget.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### putAllHeaders(Map<String,String> values)

```
public HttpTarget.Builder putAllHeaders(Map<String,String> values)
```

The user can specify HTTP request headers to send with the job's HTTP request. This map contains the header field names and values. Repeated headers are not supported, but a header value can contain commas. These headers represent a subset of the headers that will accompany the job's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is below:

-   Host: This will be computed by Cloud Scheduler and derived from uri.
-   `Content-Length`: This will be computed by Cloud Scheduler.
-   `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`.
-   `X-Google-*`: Google internal use only.
-   `X-AppEngine-*`: Google internal use only.
-   `X-CloudScheduler`: This header will be set to true.
-   `X-CloudScheduler-JobName`: This header will contain the job name.
-   `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339.
    
    The total size of headers must be less than 80KB.
    

`map<string, string> headers = 3;`

**Parameter**

**Name**

**Description**

`values`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

### putHeaders(String key, String value)

```
public HttpTarget.Builder putHeaders(String key, String value)
```

The user can specify HTTP request headers to send with the job's HTTP request. This map contains the header field names and values. Repeated headers are not supported, but a header value can contain commas. These headers represent a subset of the headers that will accompany the job's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is below:

-   Host: This will be computed by Cloud Scheduler and derived from uri.
-   `Content-Length`: This will be computed by Cloud Scheduler.
-   `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`.
-   `X-Google-*`: Google internal use only.
-   `X-AppEngine-*`: Google internal use only.
-   `X-CloudScheduler`: This header will be set to true.
-   `X-CloudScheduler-JobName`: This header will contain the job name.
-   `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339.
    
    The total size of headers must be less than 80KB.
    

`map<string, string> headers = 3;`

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

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

### removeHeaders(String key)

```
public HttpTarget.Builder removeHeaders(String key)
```

The user can specify HTTP request headers to send with the job's HTTP request. This map contains the header field names and values. Repeated headers are not supported, but a header value can contain commas. These headers represent a subset of the headers that will accompany the job's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is below:

-   Host: This will be computed by Cloud Scheduler and derived from uri.
-   `Content-Length`: This will be computed by Cloud Scheduler.
-   `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`.
-   `X-Google-*`: Google internal use only.
-   `X-AppEngine-*`: Google internal use only.
-   `X-CloudScheduler`: This header will be set to true.
-   `X-CloudScheduler-JobName`: This header will contain the job name.
-   `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339.
    
    The total size of headers must be less than 80KB.
    

`map<string, string> headers = 3;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

### setBody(ByteString value)

```
public HttpTarget.Builder setBody(ByteString value)
```

HTTP request body. A request body is allowed only if the HTTP method is POST, PUT, or PATCH. It is an error to set body on a job with an incompatible HttpMethod.

`bytes body = 4;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The body to set.

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public HttpTarget.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setHttpMethod(HttpMethod value)

```
public HttpTarget.Builder setHttpMethod(HttpMethod value)
```

Which HTTP method to use for the request.

`.google.cloud.scheduler.v1beta1.HttpMethod http_method = 2;`

**Parameter**

**Name**

**Description**

`value`

`[HttpMethod](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpMethod)`  

The httpMethod to set.

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

This builder for chaining.

### setHttpMethodValue(int value)

```
public HttpTarget.Builder setHttpMethodValue(int value)
```

Which HTTP method to use for the request.

`.google.cloud.scheduler.v1beta1.HttpMethod http_method = 2;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enum numeric value on the wire for httpMethod to set.

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

This builder for chaining.

### setOauthToken(OAuthToken value)

```
public HttpTarget.Builder setOauthToken(OAuthToken value)
```

If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization should generally only be used when calling Google APIs hosted on \*.googleapis.com.

`.google.cloud.scheduler.v1beta1.OAuthToken oauth_token = 5;`

**Parameter**

**Name**

**Description**

`value`

`[OAuthToken](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.OAuthToken)`  

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

### setOauthToken(OAuthToken.Builder builderForValue)

```
public HttpTarget.Builder setOauthToken(OAuthToken.Builder builderForValue)
```

If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization should generally only be used when calling Google APIs hosted on \*.googleapis.com.

`.google.cloud.scheduler.v1beta1.OAuthToken oauth_token = 5;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[OAuthToken.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.OAuthToken.Builder)`  

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

### setOidcToken(OidcToken value)

```
public HttpTarget.Builder setOidcToken(OidcToken value)
```

If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.

`.google.cloud.scheduler.v1beta1.OidcToken oidc_token = 6;`

**Parameter**

**Name**

**Description**

`value`

`[OidcToken](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.OidcToken)`  

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

### setOidcToken(OidcToken.Builder builderForValue)

```
public HttpTarget.Builder setOidcToken(OidcToken.Builder builderForValue)
```

If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request.

This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.

`.google.cloud.scheduler.v1beta1.OidcToken oidc_token = 6;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[OidcToken.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.OidcToken.Builder)`  

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public HttpTarget.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final HttpTarget.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setUri(String value)

```
public HttpTarget.Builder setUri(String value)
```

Required. The full URI path that the request will be sent to. This string must begin with either "http://" or "https://". Some examples of valid values for uri are: `[http://acme.com](http://acme.com)` and `[https://acme.com/sales:8080](https://acme.com/sales:8080)`. Cloud Scheduler will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding.

`string uri = 1;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The uri to set.

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

This builder for chaining.

### setUriBytes(ByteString value)

```
public HttpTarget.Builder setUriBytes(ByteString value)
```

Required. The full URI path that the request will be sent to. This string must begin with either "http://" or "https://". Some examples of valid values for uri are: `[http://acme.com](http://acme.com)` and `[https://acme.com/sales:8080](https://acme.com/sales:8080)`. Cloud Scheduler will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding.

`string uri = 1;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for uri to set.

**Returns**

**Type**

**Description**

`[HttpTarget.Builder](/java/docs/reference/google-cloud-scheduler/2.32.0/com.google.cloud.scheduler.v1beta1.HttpTarget.Builder)`

This builder for chaining.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
