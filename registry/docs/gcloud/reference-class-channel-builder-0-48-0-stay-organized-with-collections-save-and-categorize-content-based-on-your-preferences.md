-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Channel.Builder (0.48.0) Stay organized with collections Save and categorize content based on your preferences.

0.89.0 (latest) 0.87.0 0.85.0 0.84.0 0.82.0 0.80.0 0.78.0 0.77.0 0.76.0 0.75.0 0.74.0 0.72.0 0.70.0 0.69.0 0.66.0 0.65.0 0.64.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.8 0.3.0

```
public static final class Channel.Builder extends GeneratedMessageV3.Builder<Channel.Builder> implements ChannelOrBuilder
```

Channel resource represents the processor that does a user-defined "streaming" operation, which includes getting an input stream through an input, transcoding it to multiple renditions, and publishing output live streams in certain formats (for example, HLS or DASH) to the specified location.

Protobuf type `google.cloud.video.livestream.v1.Channel`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> Channel.Builder

## Implements

[ChannelOrBuilder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.ChannelOrBuilder)

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

### addAllElementaryStreams(Iterable<? extends ElementaryStream> values)

```
public Channel.Builder addAllElementaryStreams(Iterable<? extends ElementaryStream> values)
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.video.livestream.v1.ElementaryStream>`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addAllEncryptions(Iterable<? extends Encryption> values)

```
public Channel.Builder addAllEncryptions(Iterable<? extends Encryption> values)
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.video.livestream.v1.Encryption>`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addAllInputAttachments(Iterable<? extends InputAttachment> values)

```
public Channel.Builder addAllInputAttachments(Iterable<? extends InputAttachment> values)
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.video.livestream.v1.InputAttachment>`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addAllManifests(Iterable<? extends Manifest> values)

```
public Channel.Builder addAllManifests(Iterable<? extends Manifest> values)
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.video.livestream.v1.Manifest>`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addAllMuxStreams(Iterable<? extends MuxStream> values)

```
public Channel.Builder addAllMuxStreams(Iterable<? extends MuxStream> values)
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.video.livestream.v1.MuxStream>`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addAllSpriteSheets(Iterable<? extends SpriteSheet> values)

```
public Channel.Builder addAllSpriteSheets(Iterable<? extends SpriteSheet> values)
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.video.livestream.v1.SpriteSheet>`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addElementaryStreams(ElementaryStream value)

```
public Channel.Builder addElementaryStreams(ElementaryStream value)
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Parameter**

**Name**

**Description**

`value`

`[ElementaryStream](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.ElementaryStream)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addElementaryStreams(ElementaryStream.Builder builderForValue)

```
public Channel.Builder addElementaryStreams(ElementaryStream.Builder builderForValue)
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[ElementaryStream.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.ElementaryStream.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addElementaryStreams(int index, ElementaryStream value)

```
public Channel.Builder addElementaryStreams(int index, ElementaryStream value)
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[ElementaryStream](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.ElementaryStream)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addElementaryStreams(int index, ElementaryStream.Builder builderForValue)

```
public Channel.Builder addElementaryStreams(int index, ElementaryStream.Builder builderForValue)
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[ElementaryStream.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.ElementaryStream.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addElementaryStreamsBuilder()

```
public ElementaryStream.Builder addElementaryStreamsBuilder()
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Returns**

**Type**

**Description**

`[ElementaryStream.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.ElementaryStream.Builder)`

### addElementaryStreamsBuilder(int index)

```
public ElementaryStream.Builder addElementaryStreamsBuilder(int index)
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ElementaryStream.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.ElementaryStream.Builder)`

### addEncryptions(Encryption value)

```
public Channel.Builder addEncryptions(Encryption value)
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Parameter**

**Name**

**Description**

`value`

`[Encryption](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Encryption)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addEncryptions(Encryption.Builder builderForValue)

```
public Channel.Builder addEncryptions(Encryption.Builder builderForValue)
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Encryption.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Encryption.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addEncryptions(int index, Encryption value)

```
public Channel.Builder addEncryptions(int index, Encryption value)
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Encryption](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Encryption)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addEncryptions(int index, Encryption.Builder builderForValue)

```
public Channel.Builder addEncryptions(int index, Encryption.Builder builderForValue)
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Encryption.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Encryption.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addEncryptionsBuilder()

```
public Encryption.Builder addEncryptionsBuilder()
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Returns**

**Type**

**Description**

`[Encryption.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Encryption.Builder)`

### addEncryptionsBuilder(int index)

```
public Encryption.Builder addEncryptionsBuilder(int index)
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Encryption.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Encryption.Builder)`

### addInputAttachments(InputAttachment value)

```
public Channel.Builder addInputAttachments(InputAttachment value)
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Parameter**

**Name**

**Description**

`value`

`[InputAttachment](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputAttachment)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addInputAttachments(InputAttachment.Builder builderForValue)

```
public Channel.Builder addInputAttachments(InputAttachment.Builder builderForValue)
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[InputAttachment.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputAttachment.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addInputAttachments(int index, InputAttachment value)

```
public Channel.Builder addInputAttachments(int index, InputAttachment value)
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[InputAttachment](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputAttachment)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addInputAttachments(int index, InputAttachment.Builder builderForValue)

```
public Channel.Builder addInputAttachments(int index, InputAttachment.Builder builderForValue)
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[InputAttachment.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputAttachment.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addInputAttachmentsBuilder()

```
public InputAttachment.Builder addInputAttachmentsBuilder()
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Returns**

**Type**

**Description**

`[InputAttachment.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputAttachment.Builder)`

### addInputAttachmentsBuilder(int index)

```
public InputAttachment.Builder addInputAttachmentsBuilder(int index)
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[InputAttachment.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputAttachment.Builder)`

### addManifests(Manifest value)

```
public Channel.Builder addManifests(Manifest value)
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Parameter**

**Name**

**Description**

`value`

`[Manifest](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Manifest)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addManifests(Manifest.Builder builderForValue)

```
public Channel.Builder addManifests(Manifest.Builder builderForValue)
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Manifest.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Manifest.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addManifests(int index, Manifest value)

```
public Channel.Builder addManifests(int index, Manifest value)
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Manifest](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Manifest)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addManifests(int index, Manifest.Builder builderForValue)

```
public Channel.Builder addManifests(int index, Manifest.Builder builderForValue)
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Manifest.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Manifest.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addManifestsBuilder()

```
public Manifest.Builder addManifestsBuilder()
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Returns**

**Type**

**Description**

`[Manifest.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Manifest.Builder)`

### addManifestsBuilder(int index)

```
public Manifest.Builder addManifestsBuilder(int index)
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Manifest.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Manifest.Builder)`

### addMuxStreams(MuxStream value)

```
public Channel.Builder addMuxStreams(MuxStream value)
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Parameter**

**Name**

**Description**

`value`

`[MuxStream](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.MuxStream)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addMuxStreams(MuxStream.Builder builderForValue)

```
public Channel.Builder addMuxStreams(MuxStream.Builder builderForValue)
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[MuxStream.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.MuxStream.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addMuxStreams(int index, MuxStream value)

```
public Channel.Builder addMuxStreams(int index, MuxStream value)
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[MuxStream](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.MuxStream)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addMuxStreams(int index, MuxStream.Builder builderForValue)

```
public Channel.Builder addMuxStreams(int index, MuxStream.Builder builderForValue)
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[MuxStream.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.MuxStream.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addMuxStreamsBuilder()

```
public MuxStream.Builder addMuxStreamsBuilder()
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Returns**

**Type**

**Description**

`[MuxStream.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.MuxStream.Builder)`

### addMuxStreamsBuilder(int index)

```
public MuxStream.Builder addMuxStreamsBuilder(int index)
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[MuxStream.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.MuxStream.Builder)`

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public Channel.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### addSpriteSheets(SpriteSheet value)

```
public Channel.Builder addSpriteSheets(SpriteSheet value)
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Parameter**

**Name**

**Description**

`value`

`[SpriteSheet](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.SpriteSheet)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addSpriteSheets(SpriteSheet.Builder builderForValue)

```
public Channel.Builder addSpriteSheets(SpriteSheet.Builder builderForValue)
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[SpriteSheet.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.SpriteSheet.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addSpriteSheets(int index, SpriteSheet value)

```
public Channel.Builder addSpriteSheets(int index, SpriteSheet value)
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[SpriteSheet](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.SpriteSheet)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addSpriteSheets(int index, SpriteSheet.Builder builderForValue)

```
public Channel.Builder addSpriteSheets(int index, SpriteSheet.Builder builderForValue)
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[SpriteSheet.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.SpriteSheet.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### addSpriteSheetsBuilder()

```
public SpriteSheet.Builder addSpriteSheetsBuilder()
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Returns**

**Type**

**Description**

`[SpriteSheet.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.SpriteSheet.Builder)`

### addSpriteSheetsBuilder(int index)

```
public SpriteSheet.Builder addSpriteSheetsBuilder(int index)
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SpriteSheet.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.SpriteSheet.Builder)`

### build()

```
public Channel build()
```

**Returns**

**Type**

**Description**

`[Channel](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel)`

### buildPartial()

```
public Channel buildPartial()
```

**Returns**

**Type**

**Description**

`[Channel](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel)`

### clear()

```
public Channel.Builder clear()
```

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearActiveInput()

```
public Channel.Builder clearActiveInput()
```

Output only. The InputAttachment.key that serves as the current input source. The first input in the input\_attachments is the initial input source.

`string active_input = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

This builder for chaining.

### clearCreateTime()

```
public Channel.Builder clearCreateTime()
```

Output only. The creation time.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### clearElementaryStreams()

```
public Channel.Builder clearElementaryStreams()
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### clearEncryptions()

```
public Channel.Builder clearEncryptions()
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### clearField(Descriptors.FieldDescriptor field)

```
public Channel.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearInputAttachments()

```
public Channel.Builder clearInputAttachments()
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### clearInputConfig()

```
public Channel.Builder clearInputConfig()
```

The configuration for input sources defined in input\_attachments.

`.google.cloud.video.livestream.v1.InputConfig input_config = 25;`

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### clearLabels()

```
public Channel.Builder clearLabels()
```

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### clearLogConfig()

```
public Channel.Builder clearLogConfig()
```

Configuration of platform logs for this channel.

`.google.cloud.video.livestream.v1.LogConfig log_config = 19;`

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### clearManifests()

```
public Channel.Builder clearManifests()
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### clearMuxStreams()

```
public Channel.Builder clearMuxStreams()
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### clearName()

```
public Channel.Builder clearName()
```

The resource name of the channel, in the form of: `projects/{project}/locations/{location}/channels/{channelId}`.

`string name = 1;`

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public Channel.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearOutput()

```
public Channel.Builder clearOutput()
```

Required. Information about the output (that is, the Cloud Storage bucket to store the generated live stream).

`.google.cloud.video.livestream.v1.Channel.Output output = 9 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### clearSpriteSheets()

```
public Channel.Builder clearSpriteSheets()
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### clearStreamingError()

```
public Channel.Builder clearStreamingError()
```

Output only. A description of the reason for the streaming error. This property is always present when streaming\_state is STREAMING\_ERROR.

`.google.rpc.Status streaming_error = 18 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### clearStreamingState()

```
public Channel.Builder clearStreamingState()
```

Output only. State of the streaming operation.

`.google.cloud.video.livestream.v1.Channel.StreamingState streaming_state = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

This builder for chaining.

### clearTimecodeConfig()

```
public Channel.Builder clearTimecodeConfig()
```

Configuration of timecode for this channel.

`.google.cloud.video.livestream.v1.TimecodeConfig timecode_config = 21;`

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### clearUpdateTime()

```
public Channel.Builder clearUpdateTime()
```

Output only. The update time.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### clone()

```
public Channel.Builder clone()
```

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### containsLabels(String key)

```
public boolean containsLabels(String key)
```

User-defined key/value metadata.

`map<string, string> labels = 4;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getActiveInput()

```
public String getActiveInput()
```

Output only. The InputAttachment.key that serves as the current input source. The first input in the input\_attachments is the initial input source.

`string active_input = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The activeInput.

### getActiveInputBytes()

```
public ByteString getActiveInputBytes()
```

Output only. The InputAttachment.key that serves as the current input source. The first input in the input\_attachments is the initial input source.

`string active_input = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for activeInput.

### getCreateTime()

```
public Timestamp getCreateTime()
```

Output only. The creation time.

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

Output only. The creation time.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getCreateTimeOrBuilder()

```
public TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. The creation time.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDefaultInstanceForType()

```
public Channel getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[Channel](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel)`

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

### getElementaryStreams(int index)

```
public ElementaryStream getElementaryStreams(int index)
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ElementaryStream](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.ElementaryStream)`

### getElementaryStreamsBuilder(int index)

```
public ElementaryStream.Builder getElementaryStreamsBuilder(int index)
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ElementaryStream.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.ElementaryStream.Builder)`

### getElementaryStreamsBuilderList()

```
public List<ElementaryStream.Builder> getElementaryStreamsBuilderList()
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.ElementaryStream.Builder)>`

### getElementaryStreamsCount()

```
public int getElementaryStreamsCount()
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getElementaryStreamsList()

```
public List<ElementaryStream> getElementaryStreamsList()
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ElementaryStream](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.ElementaryStream)>`

### getElementaryStreamsOrBuilder(int index)

```
public ElementaryStreamOrBuilder getElementaryStreamsOrBuilder(int index)
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ElementaryStreamOrBuilder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.ElementaryStreamOrBuilder)`

### getElementaryStreamsOrBuilderList()

```
public List<? extends ElementaryStreamOrBuilder> getElementaryStreamsOrBuilderList()
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.video.livestream.v1.ElementaryStreamOrBuilder>`

### getEncryptions(int index)

```
public Encryption getEncryptions(int index)
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Encryption](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Encryption)`

### getEncryptionsBuilder(int index)

```
public Encryption.Builder getEncryptionsBuilder(int index)
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Encryption.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Encryption.Builder)`

### getEncryptionsBuilderList()

```
public List<Encryption.Builder> getEncryptionsBuilderList()
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Encryption.Builder)>`

### getEncryptionsCount()

```
public int getEncryptionsCount()
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getEncryptionsList()

```
public List<Encryption> getEncryptionsList()
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Encryption](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Encryption)>`

### getEncryptionsOrBuilder(int index)

```
public EncryptionOrBuilder getEncryptionsOrBuilder(int index)
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[EncryptionOrBuilder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.EncryptionOrBuilder)`

### getEncryptionsOrBuilderList()

```
public List<? extends EncryptionOrBuilder> getEncryptionsOrBuilderList()
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.video.livestream.v1.EncryptionOrBuilder>`

### getInputAttachments(int index)

```
public InputAttachment getInputAttachments(int index)
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[InputAttachment](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputAttachment)`

### getInputAttachmentsBuilder(int index)

```
public InputAttachment.Builder getInputAttachmentsBuilder(int index)
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[InputAttachment.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputAttachment.Builder)`

### getInputAttachmentsBuilderList()

```
public List<InputAttachment.Builder> getInputAttachmentsBuilderList()
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputAttachment.Builder)>`

### getInputAttachmentsCount()

```
public int getInputAttachmentsCount()
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getInputAttachmentsList()

```
public List<InputAttachment> getInputAttachmentsList()
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[InputAttachment](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputAttachment)>`

### getInputAttachmentsOrBuilder(int index)

```
public InputAttachmentOrBuilder getInputAttachmentsOrBuilder(int index)
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[InputAttachmentOrBuilder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputAttachmentOrBuilder)`

### getInputAttachmentsOrBuilderList()

```
public List<? extends InputAttachmentOrBuilder> getInputAttachmentsOrBuilderList()
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.video.livestream.v1.InputAttachmentOrBuilder>`

### getInputConfig()

```
public InputConfig getInputConfig()
```

The configuration for input sources defined in input\_attachments.

`.google.cloud.video.livestream.v1.InputConfig input_config = 25;`

**Returns**

**Type**

**Description**

`[InputConfig](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputConfig)`

The inputConfig.

### getInputConfigBuilder()

```
public InputConfig.Builder getInputConfigBuilder()
```

The configuration for input sources defined in input\_attachments.

`.google.cloud.video.livestream.v1.InputConfig input_config = 25;`

**Returns**

**Type**

**Description**

`[InputConfig.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputConfig.Builder)`

### getInputConfigOrBuilder()

```
public InputConfigOrBuilder getInputConfigOrBuilder()
```

The configuration for input sources defined in input\_attachments.

`.google.cloud.video.livestream.v1.InputConfig input_config = 25;`

**Returns**

**Type**

**Description**

`[InputConfigOrBuilder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputConfigOrBuilder)`

### getLabels() (deprecated)

```
public Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder#com_google_cloud_video_livestream_v1_Channel_Builder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public int getLabelsCount()
```

User-defined key/value metadata.

`map<string, string> labels = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public Map<String,String> getLabelsMap()
```

User-defined key/value metadata.

`map<string, string> labels = 4;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public String getLabelsOrDefault(String key, String defaultValue)
```

User-defined key/value metadata.

`map<string, string> labels = 4;`

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

User-defined key/value metadata.

`map<string, string> labels = 4;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getLogConfig()

```
public LogConfig getLogConfig()
```

Configuration of platform logs for this channel.

`.google.cloud.video.livestream.v1.LogConfig log_config = 19;`

**Returns**

**Type**

**Description**

`[LogConfig](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.LogConfig)`

The logConfig.

### getLogConfigBuilder()

```
public LogConfig.Builder getLogConfigBuilder()
```

Configuration of platform logs for this channel.

`.google.cloud.video.livestream.v1.LogConfig log_config = 19;`

**Returns**

**Type**

**Description**

`[LogConfig.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.LogConfig.Builder)`

### getLogConfigOrBuilder()

```
public LogConfigOrBuilder getLogConfigOrBuilder()
```

Configuration of platform logs for this channel.

`.google.cloud.video.livestream.v1.LogConfig log_config = 19;`

**Returns**

**Type**

**Description**

`[LogConfigOrBuilder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.LogConfigOrBuilder)`

### getManifests(int index)

```
public Manifest getManifests(int index)
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Manifest](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Manifest)`

### getManifestsBuilder(int index)

```
public Manifest.Builder getManifestsBuilder(int index)
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Manifest.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Manifest.Builder)`

### getManifestsBuilderList()

```
public List<Manifest.Builder> getManifestsBuilderList()
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Manifest.Builder)>`

### getManifestsCount()

```
public int getManifestsCount()
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getManifestsList()

```
public List<Manifest> getManifestsList()
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Manifest](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Manifest)>`

### getManifestsOrBuilder(int index)

```
public ManifestOrBuilder getManifestsOrBuilder(int index)
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ManifestOrBuilder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.ManifestOrBuilder)`

### getManifestsOrBuilderList()

```
public List<? extends ManifestOrBuilder> getManifestsOrBuilderList()
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.video.livestream.v1.ManifestOrBuilder>`

### getMutableLabels() (deprecated)

```
public Map<String,String> getMutableLabels()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getMuxStreams(int index)

```
public MuxStream getMuxStreams(int index)
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[MuxStream](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.MuxStream)`

### getMuxStreamsBuilder(int index)

```
public MuxStream.Builder getMuxStreamsBuilder(int index)
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[MuxStream.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.MuxStream.Builder)`

### getMuxStreamsBuilderList()

```
public List<MuxStream.Builder> getMuxStreamsBuilderList()
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.MuxStream.Builder)>`

### getMuxStreamsCount()

```
public int getMuxStreamsCount()
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getMuxStreamsList()

```
public List<MuxStream> getMuxStreamsList()
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[MuxStream](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.MuxStream)>`

### getMuxStreamsOrBuilder(int index)

```
public MuxStreamOrBuilder getMuxStreamsOrBuilder(int index)
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[MuxStreamOrBuilder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.MuxStreamOrBuilder)`

### getMuxStreamsOrBuilderList()

```
public List<? extends MuxStreamOrBuilder> getMuxStreamsOrBuilderList()
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.video.livestream.v1.MuxStreamOrBuilder>`

### getName()

```
public String getName()
```

The resource name of the channel, in the form of: `projects/{project}/locations/{location}/channels/{channelId}`.

`string name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public ByteString getNameBytes()
```

The resource name of the channel, in the form of: `projects/{project}/locations/{location}/channels/{channelId}`.

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getOutput()

```
public Channel.Output getOutput()
```

Required. Information about the output (that is, the Cloud Storage bucket to store the generated live stream).

`.google.cloud.video.livestream.v1.Channel.Output output = 9 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Channel.Output](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Output)`

The output.

### getOutputBuilder()

```
public Channel.Output.Builder getOutputBuilder()
```

Required. Information about the output (that is, the Cloud Storage bucket to store the generated live stream).

`.google.cloud.video.livestream.v1.Channel.Output output = 9 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Channel.Output.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Output.Builder)`

### getOutputOrBuilder()

```
public Channel.OutputOrBuilder getOutputOrBuilder()
```

Required. Information about the output (that is, the Cloud Storage bucket to store the generated live stream).

`.google.cloud.video.livestream.v1.Channel.Output output = 9 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Channel.OutputOrBuilder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.OutputOrBuilder)`

### getSpriteSheets(int index)

```
public SpriteSheet getSpriteSheets(int index)
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SpriteSheet](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.SpriteSheet)`

### getSpriteSheetsBuilder(int index)

```
public SpriteSheet.Builder getSpriteSheetsBuilder(int index)
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SpriteSheet.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.SpriteSheet.Builder)`

### getSpriteSheetsBuilderList()

```
public List<SpriteSheet.Builder> getSpriteSheetsBuilderList()
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.SpriteSheet.Builder)>`

### getSpriteSheetsCount()

```
public int getSpriteSheetsCount()
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getSpriteSheetsList()

```
public List<SpriteSheet> getSpriteSheetsList()
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SpriteSheet](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.SpriteSheet)>`

### getSpriteSheetsOrBuilder(int index)

```
public SpriteSheetOrBuilder getSpriteSheetsOrBuilder(int index)
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SpriteSheetOrBuilder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.SpriteSheetOrBuilder)`

### getSpriteSheetsOrBuilderList()

```
public List<? extends SpriteSheetOrBuilder> getSpriteSheetsOrBuilderList()
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.video.livestream.v1.SpriteSheetOrBuilder>`

### getStreamingError()

```
public Status getStreamingError()
```

Output only. A description of the reason for the streaming error. This property is always present when streaming\_state is STREAMING\_ERROR.

`.google.rpc.Status streaming_error = 18 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`com.google.rpc.Status`

The streamingError.

### getStreamingErrorBuilder()

```
public Status.Builder getStreamingErrorBuilder()
```

Output only. A description of the reason for the streaming error. This property is always present when streaming\_state is STREAMING\_ERROR.

`.google.rpc.Status streaming_error = 18 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`com.google.rpc.Status.Builder`

### getStreamingErrorOrBuilder()

```
public StatusOrBuilder getStreamingErrorOrBuilder()
```

Output only. A description of the reason for the streaming error. This property is always present when streaming\_state is STREAMING\_ERROR.

`.google.rpc.Status streaming_error = 18 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`com.google.rpc.StatusOrBuilder`

### getStreamingState()

```
public Channel.StreamingState getStreamingState()
```

Output only. State of the streaming operation.

`.google.cloud.video.livestream.v1.Channel.StreamingState streaming_state = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Channel.StreamingState](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.StreamingState)`

The streamingState.

### getStreamingStateValue()

```
public int getStreamingStateValue()
```

Output only. State of the streaming operation.

`.google.cloud.video.livestream.v1.Channel.StreamingState streaming_state = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for streamingState.

### getTimecodeConfig()

```
public TimecodeConfig getTimecodeConfig()
```

Configuration of timecode for this channel.

`.google.cloud.video.livestream.v1.TimecodeConfig timecode_config = 21;`

**Returns**

**Type**

**Description**

`[TimecodeConfig](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.TimecodeConfig)`

The timecodeConfig.

### getTimecodeConfigBuilder()

```
public TimecodeConfig.Builder getTimecodeConfigBuilder()
```

Configuration of timecode for this channel.

`.google.cloud.video.livestream.v1.TimecodeConfig timecode_config = 21;`

**Returns**

**Type**

**Description**

`[TimecodeConfig.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.TimecodeConfig.Builder)`

### getTimecodeConfigOrBuilder()

```
public TimecodeConfigOrBuilder getTimecodeConfigOrBuilder()
```

Configuration of timecode for this channel.

`.google.cloud.video.livestream.v1.TimecodeConfig timecode_config = 21;`

**Returns**

**Type**

**Description**

`[TimecodeConfigOrBuilder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.TimecodeConfigOrBuilder)`

### getUpdateTime()

```
public Timestamp getUpdateTime()
```

Output only. The update time.

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

Output only. The update time.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getUpdateTimeOrBuilder()

```
public TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. The update time.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasCreateTime()

```
public boolean hasCreateTime()
```

Output only. The creation time.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasInputConfig()

```
public boolean hasInputConfig()
```

The configuration for input sources defined in input\_attachments.

`.google.cloud.video.livestream.v1.InputConfig input_config = 25;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the inputConfig field is set.

### hasLogConfig()

```
public boolean hasLogConfig()
```

Configuration of platform logs for this channel.

`.google.cloud.video.livestream.v1.LogConfig log_config = 19;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the logConfig field is set.

### hasOutput()

```
public boolean hasOutput()
```

Required. Information about the output (that is, the Cloud Storage bucket to store the generated live stream).

`.google.cloud.video.livestream.v1.Channel.Output output = 9 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the output field is set.

### hasStreamingError()

```
public boolean hasStreamingError()
```

Output only. A description of the reason for the streaming error. This property is always present when streaming\_state is STREAMING\_ERROR.

`.google.rpc.Status streaming_error = 18 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the streamingError field is set.

### hasTimecodeConfig()

```
public boolean hasTimecodeConfig()
```

Configuration of timecode for this channel.

`.google.cloud.video.livestream.v1.TimecodeConfig timecode_config = 21;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timecodeConfig field is set.

### hasUpdateTime()

```
public boolean hasUpdateTime()
```

Output only. The update time.

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

### mergeCreateTime(Timestamp value)

```
public Channel.Builder mergeCreateTime(Timestamp value)
```

Output only. The creation time.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### mergeFrom(Channel other)

```
public Channel.Builder mergeFrom(Channel other)
```

**Parameter**

**Name**

**Description**

`other`

`[Channel](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public Channel.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public Channel.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeInputConfig(InputConfig value)

```
public Channel.Builder mergeInputConfig(InputConfig value)
```

The configuration for input sources defined in input\_attachments.

`.google.cloud.video.livestream.v1.InputConfig input_config = 25;`

**Parameter**

**Name**

**Description**

`value`

`[InputConfig](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputConfig)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### mergeLogConfig(LogConfig value)

```
public Channel.Builder mergeLogConfig(LogConfig value)
```

Configuration of platform logs for this channel.

`.google.cloud.video.livestream.v1.LogConfig log_config = 19;`

**Parameter**

**Name**

**Description**

`value`

`[LogConfig](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.LogConfig)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### mergeOutput(Channel.Output value)

```
public Channel.Builder mergeOutput(Channel.Output value)
```

Required. Information about the output (that is, the Cloud Storage bucket to store the generated live stream).

`.google.cloud.video.livestream.v1.Channel.Output output = 9 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[Channel.Output](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Output)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### mergeStreamingError(Status value)

```
public Channel.Builder mergeStreamingError(Status value)
```

Output only. A description of the reason for the streaming error. This property is always present when streaming\_state is STREAMING\_ERROR.

`.google.rpc.Status streaming_error = 18 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`com.google.rpc.Status`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### mergeTimecodeConfig(TimecodeConfig value)

```
public Channel.Builder mergeTimecodeConfig(TimecodeConfig value)
```

Configuration of timecode for this channel.

`.google.cloud.video.livestream.v1.TimecodeConfig timecode_config = 21;`

**Parameter**

**Name**

**Description**

`value`

`[TimecodeConfig](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.TimecodeConfig)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final Channel.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### mergeUpdateTime(Timestamp value)

```
public Channel.Builder mergeUpdateTime(Timestamp value)
```

Output only. The update time.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### putAllLabels(Map<String,String> values)

```
public Channel.Builder putAllLabels(Map<String,String> values)
```

User-defined key/value metadata.

`map<string, string> labels = 4;`

**Parameter**

**Name**

**Description**

`values`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### putLabels(String key, String value)

```
public Channel.Builder putLabels(String key, String value)
```

User-defined key/value metadata.

`map<string, string> labels = 4;`

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

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### removeElementaryStreams(int index)

```
public Channel.Builder removeElementaryStreams(int index)
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### removeEncryptions(int index)

```
public Channel.Builder removeEncryptions(int index)
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### removeInputAttachments(int index)

```
public Channel.Builder removeInputAttachments(int index)
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### removeLabels(String key)

```
public Channel.Builder removeLabels(String key)
```

User-defined key/value metadata.

`map<string, string> labels = 4;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### removeManifests(int index)

```
public Channel.Builder removeManifests(int index)
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### removeMuxStreams(int index)

```
public Channel.Builder removeMuxStreams(int index)
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### removeSpriteSheets(int index)

```
public Channel.Builder removeSpriteSheets(int index)
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setActiveInput(String value)

```
public Channel.Builder setActiveInput(String value)
```

Output only. The InputAttachment.key that serves as the current input source. The first input in the input\_attachments is the initial input source.

`string active_input = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The activeInput to set.

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

This builder for chaining.

### setActiveInputBytes(ByteString value)

```
public Channel.Builder setActiveInputBytes(ByteString value)
```

Output only. The InputAttachment.key that serves as the current input source. The first input in the input\_attachments is the initial input source.

`string active_input = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for activeInput to set.

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

This builder for chaining.

### setCreateTime(Timestamp value)

```
public Channel.Builder setCreateTime(Timestamp value)
```

Output only. The creation time.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setCreateTime(Timestamp.Builder builderForValue)

```
public Channel.Builder setCreateTime(Timestamp.Builder builderForValue)
```

Output only. The creation time.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setElementaryStreams(int index, ElementaryStream value)

```
public Channel.Builder setElementaryStreams(int index, ElementaryStream value)
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[ElementaryStream](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.ElementaryStream)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setElementaryStreams(int index, ElementaryStream.Builder builderForValue)

```
public Channel.Builder setElementaryStreams(int index, ElementaryStream.Builder builderForValue)
```

List of elementary streams.

`repeated .google.cloud.video.livestream.v1.ElementaryStream elementary_streams = 10;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[ElementaryStream.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.ElementaryStream.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setEncryptions(int index, Encryption value)

```
public Channel.Builder setEncryptions(int index, Encryption value)
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Encryption](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Encryption)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setEncryptions(int index, Encryption.Builder builderForValue)

```
public Channel.Builder setEncryptions(int index, Encryption.Builder builderForValue)
```

Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.

`repeated .google.cloud.video.livestream.v1.Encryption encryptions = 24;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Encryption.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Encryption.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public Channel.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setInputAttachments(int index, InputAttachment value)

```
public Channel.Builder setInputAttachments(int index, InputAttachment value)
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[InputAttachment](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputAttachment)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setInputAttachments(int index, InputAttachment.Builder builderForValue)

```
public Channel.Builder setInputAttachments(int index, InputAttachment.Builder builderForValue)
```

A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.

`repeated .google.cloud.video.livestream.v1.InputAttachment input_attachments = 16;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[InputAttachment.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputAttachment.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setInputConfig(InputConfig value)

```
public Channel.Builder setInputConfig(InputConfig value)
```

The configuration for input sources defined in input\_attachments.

`.google.cloud.video.livestream.v1.InputConfig input_config = 25;`

**Parameter**

**Name**

**Description**

`value`

`[InputConfig](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputConfig)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setInputConfig(InputConfig.Builder builderForValue)

```
public Channel.Builder setInputConfig(InputConfig.Builder builderForValue)
```

The configuration for input sources defined in input\_attachments.

`.google.cloud.video.livestream.v1.InputConfig input_config = 25;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[InputConfig.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.InputConfig.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setLogConfig(LogConfig value)

```
public Channel.Builder setLogConfig(LogConfig value)
```

Configuration of platform logs for this channel.

`.google.cloud.video.livestream.v1.LogConfig log_config = 19;`

**Parameter**

**Name**

**Description**

`value`

`[LogConfig](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.LogConfig)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setLogConfig(LogConfig.Builder builderForValue)

```
public Channel.Builder setLogConfig(LogConfig.Builder builderForValue)
```

Configuration of platform logs for this channel.

`.google.cloud.video.livestream.v1.LogConfig log_config = 19;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[LogConfig.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.LogConfig.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setManifests(int index, Manifest value)

```
public Channel.Builder setManifests(int index, Manifest value)
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Manifest](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Manifest)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setManifests(int index, Manifest.Builder builderForValue)

```
public Channel.Builder setManifests(int index, Manifest.Builder builderForValue)
```

List of output manifests.

`repeated .google.cloud.video.livestream.v1.Manifest manifests = 12;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Manifest.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Manifest.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setMuxStreams(int index, MuxStream value)

```
public Channel.Builder setMuxStreams(int index, MuxStream value)
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[MuxStream](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.MuxStream)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setMuxStreams(int index, MuxStream.Builder builderForValue)

```
public Channel.Builder setMuxStreams(int index, MuxStream.Builder builderForValue)
```

List of multiplexing settings for output streams.

`repeated .google.cloud.video.livestream.v1.MuxStream mux_streams = 11;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[MuxStream.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.MuxStream.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setName(String value)

```
public Channel.Builder setName(String value)
```

The resource name of the channel, in the form of: `projects/{project}/locations/{location}/channels/{channelId}`.

`string name = 1;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The name to set.

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

This builder for chaining.

### setNameBytes(ByteString value)

```
public Channel.Builder setNameBytes(ByteString value)
```

The resource name of the channel, in the form of: `projects/{project}/locations/{location}/channels/{channelId}`.

`string name = 1;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for name to set.

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

This builder for chaining.

### setOutput(Channel.Output value)

```
public Channel.Builder setOutput(Channel.Output value)
```

Required. Information about the output (that is, the Cloud Storage bucket to store the generated live stream).

`.google.cloud.video.livestream.v1.Channel.Output output = 9 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`value`

`[Channel.Output](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Output)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setOutput(Channel.Output.Builder builderForValue)

```
public Channel.Builder setOutput(Channel.Output.Builder builderForValue)
```

Required. Information about the output (that is, the Cloud Storage bucket to store the generated live stream).

`.google.cloud.video.livestream.v1.Channel.Output output = 9 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Channel.Output.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Output.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public Channel.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setSpriteSheets(int index, SpriteSheet value)

```
public Channel.Builder setSpriteSheets(int index, SpriteSheet value)
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[SpriteSheet](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.SpriteSheet)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setSpriteSheets(int index, SpriteSheet.Builder builderForValue)

```
public Channel.Builder setSpriteSheets(int index, SpriteSheet.Builder builderForValue)
```

List of output sprite sheets.

`repeated .google.cloud.video.livestream.v1.SpriteSheet sprite_sheets = 13;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[SpriteSheet.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.SpriteSheet.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setStreamingError(Status value)

```
public Channel.Builder setStreamingError(Status value)
```

Output only. A description of the reason for the streaming error. This property is always present when streaming\_state is STREAMING\_ERROR.

`.google.rpc.Status streaming_error = 18 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`com.google.rpc.Status`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setStreamingError(Status.Builder builderForValue)

```
public Channel.Builder setStreamingError(Status.Builder builderForValue)
```

Output only. A description of the reason for the streaming error. This property is always present when streaming\_state is STREAMING\_ERROR.

`.google.rpc.Status streaming_error = 18 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`builderForValue`

`com.google.rpc.Status.Builder`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setStreamingState(Channel.StreamingState value)

```
public Channel.Builder setStreamingState(Channel.StreamingState value)
```

Output only. State of the streaming operation.

`.google.cloud.video.livestream.v1.Channel.StreamingState streaming_state = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Channel.StreamingState](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.StreamingState)`  

The streamingState to set.

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

This builder for chaining.

### setStreamingStateValue(int value)

```
public Channel.Builder setStreamingStateValue(int value)
```

Output only. State of the streaming operation.

`.google.cloud.video.livestream.v1.Channel.StreamingState streaming_state = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enum numeric value on the wire for streamingState to set.

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

This builder for chaining.

### setTimecodeConfig(TimecodeConfig value)

```
public Channel.Builder setTimecodeConfig(TimecodeConfig value)
```

Configuration of timecode for this channel.

`.google.cloud.video.livestream.v1.TimecodeConfig timecode_config = 21;`

**Parameter**

**Name**

**Description**

`value`

`[TimecodeConfig](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.TimecodeConfig)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setTimecodeConfig(TimecodeConfig.Builder builderForValue)

```
public Channel.Builder setTimecodeConfig(TimecodeConfig.Builder builderForValue)
```

Configuration of timecode for this channel.

`.google.cloud.video.livestream.v1.TimecodeConfig timecode_config = 21;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[TimecodeConfig.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.TimecodeConfig.Builder)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final Channel.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setUpdateTime(Timestamp value)

```
public Channel.Builder setUpdateTime(Timestamp value)
```

Output only. The update time.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

### setUpdateTime(Timestamp.Builder builderForValue)

```
public Channel.Builder setUpdateTime(Timestamp.Builder builderForValue)
```

Output only. The update time.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[Channel.Builder](/java/docs/reference/google-cloud-live-stream/0.48.0/com.google.cloud.video.livestream.v1.Channel.Builder)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
