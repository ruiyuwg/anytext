-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Span.Builder (2.12.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.7 2.2.0 2.1.13

```
public static final class Span.Builder extends GeneratedMessageV3.Builder<Span.Builder> implements SpanOrBuilder
```

A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous. There might be gaps or overlaps between spans in a trace.

Protobuf type `google.devtools.cloudtrace.v2.Span`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> Span.Builder

## Implements

[SpanOrBuilder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.SpanOrBuilder)

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
public Span.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public Span build()
```

**Returns**

**Type**

**Description**

`[Span](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span)`

### buildPartial()

```
public Span buildPartial()
```

**Returns**

**Type**

**Description**

`[Span](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span)`

### clear()

```
public Span.Builder clear()
```

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearAttributes()

```
public Span.Builder clearAttributes()
```

A set of attributes on the span. You can have up to 32 attributes per span.

`.google.devtools.cloudtrace.v2.Span.Attributes attributes = 7;`

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### clearChildSpanCount()

```
public Span.Builder clearChildSpanCount()
```

Optional. The number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.

`.google.protobuf.Int32Value child_span_count = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### clearDisplayName()

```
public Span.Builder clearDisplayName()
```

Required. A description of the span's operation (up to 128 bytes). Cloud Trace displays the description in the Cloud console. For example, the display name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name within an application and at the same call point. This makes it easier to correlate spans in different traces.

`.google.devtools.cloudtrace.v2.TruncatableString display_name = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### clearEndTime()

```
public Span.Builder clearEndTime()
```

Required. The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.

`.google.protobuf.Timestamp end_time = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### clearField(Descriptors.FieldDescriptor field)

```
public Span.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearLinks()

```
public Span.Builder clearLinks()
```

Links associated with the span. You can have up to 128 links per Span.

`.google.devtools.cloudtrace.v2.Span.Links links = 10;`

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### clearName()

```
public Span.Builder clearName()
```

Required. The resource name of the span in the following format:

-   `projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/[SPAN_ID]` `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. It should not be zero. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. It should not be zero. .

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public Span.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearParentSpanId()

```
public Span.Builder clearParentSpanId()
```

The `[SPAN_ID]` of this span's parent span. If this is a root span, then this field must be empty.

`string parent_span_id = 3;`

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

This builder for chaining.

### clearSameProcessAsParentSpan()

```
public Span.Builder clearSameProcessAsParentSpan()
```

Optional. Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Trace is unable to take advantage of this helpful information.

`.google.protobuf.BoolValue same_process_as_parent_span = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### clearSpanId()

```
public Span.Builder clearSpanId()
```

Required. The `[SPAN_ID]` portion of the span's resource name.

`string span_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

This builder for chaining.

### clearSpanKind()

```
public Span.Builder clearSpanKind()
```

Optional. Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify an RPC call.

`.google.devtools.cloudtrace.v2.Span.SpanKind span_kind = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

This builder for chaining.

### clearStackTrace()

```
public Span.Builder clearStackTrace()
```

Stack trace captured at the start of the span.

`.google.devtools.cloudtrace.v2.StackTrace stack_trace = 8;`

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### clearStartTime()

```
public Span.Builder clearStartTime()
```

Required. The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.

`.google.protobuf.Timestamp start_time = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### clearStatus()

```
public Span.Builder clearStatus()
```

Optional. The final status for this span.

`.google.rpc.Status status = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### clearTimeEvents()

```
public Span.Builder clearTimeEvents()
```

A set of time events. You can have up to 32 annotations and 128 message events per span.

`.google.devtools.cloudtrace.v2.Span.TimeEvents time_events = 9;`

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### clone()

```
public Span.Builder clone()
```

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getAttributes()

```
public Span.Attributes getAttributes()
```

A set of attributes on the span. You can have up to 32 attributes per span.

`.google.devtools.cloudtrace.v2.Span.Attributes attributes = 7;`

**Returns**

**Type**

**Description**

`[Span.Attributes](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Attributes)`

The attributes.

### getAttributesBuilder()

```
public Span.Attributes.Builder getAttributesBuilder()
```

A set of attributes on the span. You can have up to 32 attributes per span.

`.google.devtools.cloudtrace.v2.Span.Attributes attributes = 7;`

**Returns**

**Type**

**Description**

`[Span.Attributes.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Attributes.Builder)`

### getAttributesOrBuilder()

```
public Span.AttributesOrBuilder getAttributesOrBuilder()
```

A set of attributes on the span. You can have up to 32 attributes per span.

`.google.devtools.cloudtrace.v2.Span.Attributes attributes = 7;`

**Returns**

**Type**

**Description**

`[Span.AttributesOrBuilder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.AttributesOrBuilder)`

### getChildSpanCount()

```
public Int32Value getChildSpanCount()
```

Optional. The number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.

`.google.protobuf.Int32Value child_span_count = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Int32Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Int32Value.html)`

The childSpanCount.

### getChildSpanCountBuilder()

```
public Int32Value.Builder getChildSpanCountBuilder()
```

Optional. The number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.

`.google.protobuf.Int32Value child_span_count = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Int32Value.Builder.html)`

### getChildSpanCountOrBuilder()

```
public Int32ValueOrBuilder getChildSpanCountOrBuilder()
```

Optional. The number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.

`.google.protobuf.Int32Value child_span_count = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Int32ValueOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Int32ValueOrBuilder.html)`

### getDefaultInstanceForType()

```
public Span getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[Span](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span)`

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

### getDisplayName()

```
public TruncatableString getDisplayName()
```

Required. A description of the span's operation (up to 128 bytes). Cloud Trace displays the description in the Cloud console. For example, the display name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name within an application and at the same call point. This makes it easier to correlate spans in different traces.

`.google.devtools.cloudtrace.v2.TruncatableString display_name = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[TruncatableString](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.TruncatableString)`

The displayName.

### getDisplayNameBuilder()

```
public TruncatableString.Builder getDisplayNameBuilder()
```

Required. A description of the span's operation (up to 128 bytes). Cloud Trace displays the description in the Cloud console. For example, the display name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name within an application and at the same call point. This makes it easier to correlate spans in different traces.

`.google.devtools.cloudtrace.v2.TruncatableString display_name = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[TruncatableString.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.TruncatableString.Builder)`

### getDisplayNameOrBuilder()

```
public TruncatableStringOrBuilder getDisplayNameOrBuilder()
```

Required. A description of the span's operation (up to 128 bytes). Cloud Trace displays the description in the Cloud console. For example, the display name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name within an application and at the same call point. This makes it easier to correlate spans in different traces.

`.google.devtools.cloudtrace.v2.TruncatableString display_name = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[TruncatableStringOrBuilder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.TruncatableStringOrBuilder)`

### getEndTime()

```
public Timestamp getEndTime()
```

Required. The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.

`.google.protobuf.Timestamp end_time = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The endTime.

### getEndTimeBuilder()

```
public Timestamp.Builder getEndTimeBuilder()
```

Required. The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.

`.google.protobuf.Timestamp end_time = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getEndTimeOrBuilder()

```
public TimestampOrBuilder getEndTimeOrBuilder()
```

Required. The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.

`.google.protobuf.Timestamp end_time = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getLinks()

```
public Span.Links getLinks()
```

Links associated with the span. You can have up to 128 links per Span.

`.google.devtools.cloudtrace.v2.Span.Links links = 10;`

**Returns**

**Type**

**Description**

`[Span.Links](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Links)`

The links.

### getLinksBuilder()

```
public Span.Links.Builder getLinksBuilder()
```

Links associated with the span. You can have up to 128 links per Span.

`.google.devtools.cloudtrace.v2.Span.Links links = 10;`

**Returns**

**Type**

**Description**

`[Span.Links.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Links.Builder)`

### getLinksOrBuilder()

```
public Span.LinksOrBuilder getLinksOrBuilder()
```

Links associated with the span. You can have up to 128 links per Span.

`.google.devtools.cloudtrace.v2.Span.Links links = 10;`

**Returns**

**Type**

**Description**

`[Span.LinksOrBuilder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.LinksOrBuilder)`

### getName()

```
public String getName()
```

Required. The resource name of the span in the following format:

-   `projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/[SPAN_ID]` `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. It should not be zero. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. It should not be zero. .

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public ByteString getNameBytes()
```

Required. The resource name of the span in the following format:

-   `projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/[SPAN_ID]` `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. It should not be zero. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. It should not be zero. .

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getParentSpanId()

```
public String getParentSpanId()
```

The `[SPAN_ID]` of this span's parent span. If this is a root span, then this field must be empty.

`string parent_span_id = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parentSpanId.

### getParentSpanIdBytes()

```
public ByteString getParentSpanIdBytes()
```

The `[SPAN_ID]` of this span's parent span. If this is a root span, then this field must be empty.

`string parent_span_id = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parentSpanId.

### getSameProcessAsParentSpan()

```
public BoolValue getSameProcessAsParentSpan()
```

Optional. Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Trace is unable to take advantage of this helpful information.

`.google.protobuf.BoolValue same_process_as_parent_span = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[BoolValue](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.BoolValue.html)`

The sameProcessAsParentSpan.

### getSameProcessAsParentSpanBuilder()

```
public BoolValue.Builder getSameProcessAsParentSpanBuilder()
```

Optional. Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Trace is unable to take advantage of this helpful information.

`.google.protobuf.BoolValue same_process_as_parent_span = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.BoolValue.Builder.html)`

### getSameProcessAsParentSpanOrBuilder()

```
public BoolValueOrBuilder getSameProcessAsParentSpanOrBuilder()
```

Optional. Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Trace is unable to take advantage of this helpful information.

`.google.protobuf.BoolValue same_process_as_parent_span = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[BoolValueOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.BoolValueOrBuilder.html)`

### getSpanId()

```
public String getSpanId()
```

Required. The `[SPAN_ID]` portion of the span's resource name.

`string span_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The spanId.

### getSpanIdBytes()

```
public ByteString getSpanIdBytes()
```

Required. The `[SPAN_ID]` portion of the span's resource name.

`string span_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for spanId.

### getSpanKind()

```
public Span.SpanKind getSpanKind()
```

Optional. Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify an RPC call.

`.google.devtools.cloudtrace.v2.Span.SpanKind span_kind = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Span.SpanKind](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.SpanKind)`

The spanKind.

### getSpanKindValue()

```
public int getSpanKindValue()
```

Optional. Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify an RPC call.

`.google.devtools.cloudtrace.v2.Span.SpanKind span_kind = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for spanKind.

### getStackTrace()

```
public StackTrace getStackTrace()
```

Stack trace captured at the start of the span.

`.google.devtools.cloudtrace.v2.StackTrace stack_trace = 8;`

**Returns**

**Type**

**Description**

`[StackTrace](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.StackTrace)`

The stackTrace.

### getStackTraceBuilder()

```
public StackTrace.Builder getStackTraceBuilder()
```

Stack trace captured at the start of the span.

`.google.devtools.cloudtrace.v2.StackTrace stack_trace = 8;`

**Returns**

**Type**

**Description**

`[StackTrace.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.StackTrace.Builder)`

### getStackTraceOrBuilder()

```
public StackTraceOrBuilder getStackTraceOrBuilder()
```

Stack trace captured at the start of the span.

`.google.devtools.cloudtrace.v2.StackTrace stack_trace = 8;`

**Returns**

**Type**

**Description**

`[StackTraceOrBuilder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.StackTraceOrBuilder)`

### getStartTime()

```
public Timestamp getStartTime()
```

Required. The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.

`.google.protobuf.Timestamp start_time = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The startTime.

### getStartTimeBuilder()

```
public Timestamp.Builder getStartTimeBuilder()
```

Required. The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.

`.google.protobuf.Timestamp start_time = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getStartTimeOrBuilder()

```
public TimestampOrBuilder getStartTimeOrBuilder()
```

Required. The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.

`.google.protobuf.Timestamp start_time = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getStatus()

```
public Status getStatus()
```

Optional. The final status for this span.

`.google.rpc.Status status = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`com.google.rpc.Status`

The status.

### getStatusBuilder()

```
public Status.Builder getStatusBuilder()
```

Optional. The final status for this span.

`.google.rpc.Status status = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`com.google.rpc.Status.Builder`

### getStatusOrBuilder()

```
public StatusOrBuilder getStatusOrBuilder()
```

Optional. The final status for this span.

`.google.rpc.Status status = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`com.google.rpc.StatusOrBuilder`

### getTimeEvents()

```
public Span.TimeEvents getTimeEvents()
```

A set of time events. You can have up to 32 annotations and 128 message events per span.

`.google.devtools.cloudtrace.v2.Span.TimeEvents time_events = 9;`

**Returns**

**Type**

**Description**

`[Span.TimeEvents](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.TimeEvents)`

The timeEvents.

### getTimeEventsBuilder()

```
public Span.TimeEvents.Builder getTimeEventsBuilder()
```

A set of time events. You can have up to 32 annotations and 128 message events per span.

`.google.devtools.cloudtrace.v2.Span.TimeEvents time_events = 9;`

**Returns**

**Type**

**Description**

`[Span.TimeEvents.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.TimeEvents.Builder)`

### getTimeEventsOrBuilder()

```
public Span.TimeEventsOrBuilder getTimeEventsOrBuilder()
```

A set of time events. You can have up to 32 annotations and 128 message events per span.

`.google.devtools.cloudtrace.v2.Span.TimeEvents time_events = 9;`

**Returns**

**Type**

**Description**

`[Span.TimeEventsOrBuilder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.TimeEventsOrBuilder)`

### hasAttributes()

```
public boolean hasAttributes()
```

A set of attributes on the span. You can have up to 32 attributes per span.

`.google.devtools.cloudtrace.v2.Span.Attributes attributes = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the attributes field is set.

### hasChildSpanCount()

```
public boolean hasChildSpanCount()
```

Optional. The number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.

`.google.protobuf.Int32Value child_span_count = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the childSpanCount field is set.

### hasDisplayName()

```
public boolean hasDisplayName()
```

Required. A description of the span's operation (up to 128 bytes). Cloud Trace displays the description in the Cloud console. For example, the display name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name within an application and at the same call point. This makes it easier to correlate spans in different traces.

`.google.devtools.cloudtrace.v2.TruncatableString display_name = 4 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the displayName field is set.

### hasEndTime()

```
public boolean hasEndTime()
```

Required. The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.

`.google.protobuf.Timestamp end_time = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the endTime field is set.

### hasLinks()

```
public boolean hasLinks()
```

Links associated with the span. You can have up to 128 links per Span.

`.google.devtools.cloudtrace.v2.Span.Links links = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the links field is set.

### hasSameProcessAsParentSpan()

```
public boolean hasSameProcessAsParentSpan()
```

Optional. Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Trace is unable to take advantage of this helpful information.

`.google.protobuf.BoolValue same_process_as_parent_span = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the sameProcessAsParentSpan field is set.

### hasStackTrace()

```
public boolean hasStackTrace()
```

Stack trace captured at the start of the span.

`.google.devtools.cloudtrace.v2.StackTrace stack_trace = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the stackTrace field is set.

### hasStartTime()

```
public boolean hasStartTime()
```

Required. The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.

`.google.protobuf.Timestamp start_time = 5 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

### hasStatus()

```
public boolean hasStatus()
```

Optional. The final status for this span.

`.google.rpc.Status status = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the status field is set.

### hasTimeEvents()

```
public boolean hasTimeEvents()
```

A set of time events. You can have up to 32 annotations and 128 message events per span.

`.google.devtools.cloudtrace.v2.Span.TimeEvents time_events = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timeEvents field is set.

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

### mergeAttributes(Span.Attributes value)

```
public Span.Builder mergeAttributes(Span.Attributes value)
```

A set of attributes on the span. You can have up to 32 attributes per span.

`.google.devtools.cloudtrace.v2.Span.Attributes attributes = 7;`

**Parameter**

**Name**

**Description**

`value`

`[Span.Attributes](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Attributes)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### mergeChildSpanCount(Int32Value value)

```
public Span.Builder mergeChildSpanCount(Int32Value value)
```

Optional. The number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.

`.google.protobuf.Int32Value child_span_count = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[Int32Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Int32Value.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### mergeDisplayName(TruncatableString value)

```
public Span.Builder mergeDisplayName(TruncatableString value)
```

Required. A description of the span's operation (up to 128 bytes). Cloud Trace displays the description in the Cloud console. For example, the display name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name within an application and at the same call point. This makes it easier to correlate spans in different traces.

`.google.devtools.cloudtrace.v2.TruncatableString display_name = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[TruncatableString](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.TruncatableString)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### mergeEndTime(Timestamp value)

```
public Span.Builder mergeEndTime(Timestamp value)
```

Required. The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.

`.google.protobuf.Timestamp end_time = 6 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### mergeFrom(Span other)

```
public Span.Builder mergeFrom(Span other)
```

**Parameter**

**Name**

**Description**

`other`

`[Span](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public Span.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public Span.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeLinks(Span.Links value)

```
public Span.Builder mergeLinks(Span.Links value)
```

Links associated with the span. You can have up to 128 links per Span.

`.google.devtools.cloudtrace.v2.Span.Links links = 10;`

**Parameter**

**Name**

**Description**

`value`

`[Span.Links](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Links)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### mergeSameProcessAsParentSpan(BoolValue value)

```
public Span.Builder mergeSameProcessAsParentSpan(BoolValue value)
```

Optional. Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Trace is unable to take advantage of this helpful information.

`.google.protobuf.BoolValue same_process_as_parent_span = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[BoolValue](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.BoolValue.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### mergeStackTrace(StackTrace value)

```
public Span.Builder mergeStackTrace(StackTrace value)
```

Stack trace captured at the start of the span.

`.google.devtools.cloudtrace.v2.StackTrace stack_trace = 8;`

**Parameter**

**Name**

**Description**

`value`

`[StackTrace](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.StackTrace)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### mergeStartTime(Timestamp value)

```
public Span.Builder mergeStartTime(Timestamp value)
```

Required. The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.

`.google.protobuf.Timestamp start_time = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### mergeStatus(Status value)

```
public Span.Builder mergeStatus(Status value)
```

Optional. The final status for this span.

`.google.rpc.Status status = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`com.google.rpc.Status`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### mergeTimeEvents(Span.TimeEvents value)

```
public Span.Builder mergeTimeEvents(Span.TimeEvents value)
```

A set of time events. You can have up to 32 annotations and 128 message events per span.

`.google.devtools.cloudtrace.v2.Span.TimeEvents time_events = 9;`

**Parameter**

**Name**

**Description**

`value`

`[Span.TimeEvents](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.TimeEvents)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final Span.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setAttributes(Span.Attributes value)

```
public Span.Builder setAttributes(Span.Attributes value)
```

A set of attributes on the span. You can have up to 32 attributes per span.

`.google.devtools.cloudtrace.v2.Span.Attributes attributes = 7;`

**Parameter**

**Name**

**Description**

`value`

`[Span.Attributes](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Attributes)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setAttributes(Span.Attributes.Builder builderForValue)

```
public Span.Builder setAttributes(Span.Attributes.Builder builderForValue)
```

A set of attributes on the span. You can have up to 32 attributes per span.

`.google.devtools.cloudtrace.v2.Span.Attributes attributes = 7;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Span.Attributes.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Attributes.Builder)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setChildSpanCount(Int32Value value)

```
public Span.Builder setChildSpanCount(Int32Value value)
```

Optional. The number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.

`.google.protobuf.Int32Value child_span_count = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[Int32Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Int32Value.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setChildSpanCount(Int32Value.Builder builderForValue)

```
public Span.Builder setChildSpanCount(Int32Value.Builder builderForValue)
```

Optional. The number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.

`.google.protobuf.Int32Value child_span_count = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Int32Value.Builder.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setDisplayName(TruncatableString value)

```
public Span.Builder setDisplayName(TruncatableString value)
```

Required. A description of the span's operation (up to 128 bytes). Cloud Trace displays the description in the Cloud console. For example, the display name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name within an application and at the same call point. This makes it easier to correlate spans in different traces.

`.google.devtools.cloudtrace.v2.TruncatableString display_name = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[TruncatableString](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.TruncatableString)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setDisplayName(TruncatableString.Builder builderForValue)

```
public Span.Builder setDisplayName(TruncatableString.Builder builderForValue)
```

Required. A description of the span's operation (up to 128 bytes). Cloud Trace displays the description in the Cloud console. For example, the display name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name within an application and at the same call point. This makes it easier to correlate spans in different traces.

`.google.devtools.cloudtrace.v2.TruncatableString display_name = 4 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[TruncatableString.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.TruncatableString.Builder)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setEndTime(Timestamp value)

```
public Span.Builder setEndTime(Timestamp value)
```

Required. The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.

`.google.protobuf.Timestamp end_time = 6 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setEndTime(Timestamp.Builder builderForValue)

```
public Span.Builder setEndTime(Timestamp.Builder builderForValue)
```

Required. The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.

`.google.protobuf.Timestamp end_time = 6 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public Span.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setLinks(Span.Links value)

```
public Span.Builder setLinks(Span.Links value)
```

Links associated with the span. You can have up to 128 links per Span.

`.google.devtools.cloudtrace.v2.Span.Links links = 10;`

**Parameter**

**Name**

**Description**

`value`

`[Span.Links](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Links)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setLinks(Span.Links.Builder builderForValue)

```
public Span.Builder setLinks(Span.Links.Builder builderForValue)
```

Links associated with the span. You can have up to 128 links per Span.

`.google.devtools.cloudtrace.v2.Span.Links links = 10;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Span.Links.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Links.Builder)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setName(String value)

```
public Span.Builder setName(String value)
```

Required. The resource name of the span in the following format:

-   `projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/[SPAN_ID]` `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. It should not be zero. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. It should not be zero. .

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The name to set.

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

This builder for chaining.

### setNameBytes(ByteString value)

```
public Span.Builder setNameBytes(ByteString value)
```

Required. The resource name of the span in the following format:

-   `projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/[SPAN_ID]` `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. It should not be zero. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. It should not be zero. .

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for name to set.

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

This builder for chaining.

### setParentSpanId(String value)

```
public Span.Builder setParentSpanId(String value)
```

The `[SPAN_ID]` of this span's parent span. If this is a root span, then this field must be empty.

`string parent_span_id = 3;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The parentSpanId to set.

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

This builder for chaining.

### setParentSpanIdBytes(ByteString value)

```
public Span.Builder setParentSpanIdBytes(ByteString value)
```

The `[SPAN_ID]` of this span's parent span. If this is a root span, then this field must be empty.

`string parent_span_id = 3;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for parentSpanId to set.

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public Span.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setSameProcessAsParentSpan(BoolValue value)

```
public Span.Builder setSameProcessAsParentSpan(BoolValue value)
```

Optional. Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Trace is unable to take advantage of this helpful information.

`.google.protobuf.BoolValue same_process_as_parent_span = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[BoolValue](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.BoolValue.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setSameProcessAsParentSpan(BoolValue.Builder builderForValue)

```
public Span.Builder setSameProcessAsParentSpan(BoolValue.Builder builderForValue)
```

Optional. Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Trace is unable to take advantage of this helpful information.

`.google.protobuf.BoolValue same_process_as_parent_span = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.BoolValue.Builder.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setSpanId(String value)

```
public Span.Builder setSpanId(String value)
```

Required. The `[SPAN_ID]` portion of the span's resource name.

`string span_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The spanId to set.

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

This builder for chaining.

### setSpanIdBytes(ByteString value)

```
public Span.Builder setSpanIdBytes(ByteString value)
```

Required. The `[SPAN_ID]` portion of the span's resource name.

`string span_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for spanId to set.

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

This builder for chaining.

### setSpanKind(Span.SpanKind value)

```
public Span.Builder setSpanKind(Span.SpanKind value)
```

Optional. Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify an RPC call.

`.google.devtools.cloudtrace.v2.Span.SpanKind span_kind = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[Span.SpanKind](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.SpanKind)`  

The spanKind to set.

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

This builder for chaining.

### setSpanKindValue(int value)

```
public Span.Builder setSpanKindValue(int value)
```

Optional. Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify an RPC call.

`.google.devtools.cloudtrace.v2.Span.SpanKind span_kind = 14 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enum numeric value on the wire for spanKind to set.

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

This builder for chaining.

### setStackTrace(StackTrace value)

```
public Span.Builder setStackTrace(StackTrace value)
```

Stack trace captured at the start of the span.

`.google.devtools.cloudtrace.v2.StackTrace stack_trace = 8;`

**Parameter**

**Name**

**Description**

`value`

`[StackTrace](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.StackTrace)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setStackTrace(StackTrace.Builder builderForValue)

```
public Span.Builder setStackTrace(StackTrace.Builder builderForValue)
```

Stack trace captured at the start of the span.

`.google.devtools.cloudtrace.v2.StackTrace stack_trace = 8;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[StackTrace.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.StackTrace.Builder)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setStartTime(Timestamp value)

```
public Span.Builder setStartTime(Timestamp value)
```

Required. The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.

`.google.protobuf.Timestamp start_time = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setStartTime(Timestamp.Builder builderForValue)

```
public Span.Builder setStartTime(Timestamp.Builder builderForValue)
```

Required. The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.

`.google.protobuf.Timestamp start_time = 5 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setStatus(Status value)

```
public Span.Builder setStatus(Status value)
```

Optional. The final status for this span.

`.google.rpc.Status status = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`com.google.rpc.Status`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setStatus(Status.Builder builderForValue)

```
public Span.Builder setStatus(Status.Builder builderForValue)
```

Optional. The final status for this span.

`.google.rpc.Status status = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`builderForValue`

`com.google.rpc.Status.Builder`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setTimeEvents(Span.TimeEvents value)

```
public Span.Builder setTimeEvents(Span.TimeEvents value)
```

A set of time events. You can have up to 32 annotations and 128 message events per span.

`.google.devtools.cloudtrace.v2.Span.TimeEvents time_events = 9;`

**Parameter**

**Name**

**Description**

`value`

`[Span.TimeEvents](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.TimeEvents)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setTimeEvents(Span.TimeEvents.Builder builderForValue)

```
public Span.Builder setTimeEvents(Span.TimeEvents.Builder builderForValue)
```

A set of time events. You can have up to 32 annotations and 128 message events per span.

`.google.devtools.cloudtrace.v2.Span.TimeEvents time_events = 9;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Span.TimeEvents.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.TimeEvents.Builder)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final Span.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Span.Builder](/java/docs/reference/google-cloud-trace/2.12.0/com.google.devtools.cloudtrace.v2.Span.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
