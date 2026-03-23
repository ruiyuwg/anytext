-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Block.Builder (3.7.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public static final class Block.Builder extends GeneratedMessageV3.Builder<Block.Builder> implements BlockOrBuilder
```

Logical element on the page.

Protobuf type `google.cloud.vision.v1p4beta1.Block`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> Block.Builder

## Implements

[BlockOrBuilder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.BlockOrBuilder)

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

### addAllParagraphs(Iterable<? extends Paragraph> values)

```
public Block.Builder addAllParagraphs(Iterable<? extends Paragraph> values)
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.vision.v1p4beta1.Paragraph>`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### addParagraphs(Paragraph value)

```
public Block.Builder addParagraphs(Paragraph value)
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Parameter**

**Name**

**Description**

`value`

`[Paragraph](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Paragraph)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### addParagraphs(Paragraph.Builder builderForValue)

```
public Block.Builder addParagraphs(Paragraph.Builder builderForValue)
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Paragraph.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Paragraph.Builder)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### addParagraphs(int index, Paragraph value)

```
public Block.Builder addParagraphs(int index, Paragraph value)
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Paragraph](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Paragraph)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### addParagraphs(int index, Paragraph.Builder builderForValue)

```
public Block.Builder addParagraphs(int index, Paragraph.Builder builderForValue)
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Paragraph.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Paragraph.Builder)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### addParagraphsBuilder()

```
public Paragraph.Builder addParagraphsBuilder()
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Returns**

**Type**

**Description**

`[Paragraph.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Paragraph.Builder)`

### addParagraphsBuilder(int index)

```
public Paragraph.Builder addParagraphsBuilder(int index)
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Paragraph.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Paragraph.Builder)`

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public Block.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public Block build()
```

**Returns**

**Type**

**Description**

`[Block](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block)`

### buildPartial()

```
public Block buildPartial()
```

**Returns**

**Type**

**Description**

`[Block](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block)`

### clear()

```
public Block.Builder clear()
```

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearBlockType()

```
public Block.Builder clearBlockType()
```

Detected block type (text, image etc) for this block.

`.google.cloud.vision.v1p4beta1.Block.BlockType block_type = 4;`

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

This builder for chaining.

### clearBoundingBox()

```
public Block.Builder clearBoundingBox()
```

The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example:

-   when the text is horizontal it might look like: 0----1 | | 3----2
-   when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).

`.google.cloud.vision.v1p4beta1.BoundingPoly bounding_box = 2;`

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### clearConfidence()

```
public Block.Builder clearConfidence()
```

Confidence of the OCR results on the block. Range \[0, 1\].

`float confidence = 5;`

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public Block.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public Block.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearParagraphs()

```
public Block.Builder clearParagraphs()
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### clearProperty()

```
public Block.Builder clearProperty()
```

Additional information detected for the block.

`.google.cloud.vision.v1p4beta1.TextAnnotation.TextProperty property = 1;`

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### clone()

```
public Block.Builder clone()
```

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getBlockType()

```
public Block.BlockType getBlockType()
```

Detected block type (text, image etc) for this block.

`.google.cloud.vision.v1p4beta1.Block.BlockType block_type = 4;`

**Returns**

**Type**

**Description**

`[Block.BlockType](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.BlockType)`

The blockType.

### getBlockTypeValue()

```
public int getBlockTypeValue()
```

Detected block type (text, image etc) for this block.

`.google.cloud.vision.v1p4beta1.Block.BlockType block_type = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for blockType.

### getBoundingBox()

```
public BoundingPoly getBoundingBox()
```

The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example:

-   when the text is horizontal it might look like: 0----1 | | 3----2
-   when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).

`.google.cloud.vision.v1p4beta1.BoundingPoly bounding_box = 2;`

**Returns**

**Type**

**Description**

`[BoundingPoly](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.BoundingPoly)`

The boundingBox.

### getBoundingBoxBuilder()

```
public BoundingPoly.Builder getBoundingBoxBuilder()
```

The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example:

-   when the text is horizontal it might look like: 0----1 | | 3----2
-   when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).

`.google.cloud.vision.v1p4beta1.BoundingPoly bounding_box = 2;`

**Returns**

**Type**

**Description**

`[BoundingPoly.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.BoundingPoly.Builder)`

### getBoundingBoxOrBuilder()

```
public BoundingPolyOrBuilder getBoundingBoxOrBuilder()
```

The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example:

-   when the text is horizontal it might look like: 0----1 | | 3----2
-   when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).

`.google.cloud.vision.v1p4beta1.BoundingPoly bounding_box = 2;`

**Returns**

**Type**

**Description**

`[BoundingPolyOrBuilder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.BoundingPolyOrBuilder)`

### getConfidence()

```
public float getConfidence()
```

Confidence of the OCR results on the block. Range \[0, 1\].

`float confidence = 5;`

**Returns**

**Type**

**Description**

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The confidence.

### getDefaultInstanceForType()

```
public Block getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[Block](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block)`

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

### getParagraphs(int index)

```
public Paragraph getParagraphs(int index)
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Paragraph](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Paragraph)`

### getParagraphsBuilder(int index)

```
public Paragraph.Builder getParagraphsBuilder(int index)
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Paragraph.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Paragraph.Builder)`

### getParagraphsBuilderList()

```
public List<Paragraph.Builder> getParagraphsBuilderList()
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Paragraph.Builder)>`

### getParagraphsCount()

```
public int getParagraphsCount()
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getParagraphsList()

```
public List<Paragraph> getParagraphsList()
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Paragraph](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Paragraph)>`

### getParagraphsOrBuilder(int index)

```
public ParagraphOrBuilder getParagraphsOrBuilder(int index)
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ParagraphOrBuilder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.ParagraphOrBuilder)`

### getParagraphsOrBuilderList()

```
public List<? extends ParagraphOrBuilder> getParagraphsOrBuilderList()
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p4beta1.ParagraphOrBuilder>`

### getProperty()

```
public TextAnnotation.TextProperty getProperty()
```

Additional information detected for the block.

`.google.cloud.vision.v1p4beta1.TextAnnotation.TextProperty property = 1;`

**Returns**

**Type**

**Description**

`[TextAnnotation.TextProperty](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.TextAnnotation.TextProperty)`

The property.

### getPropertyBuilder()

```
public TextAnnotation.TextProperty.Builder getPropertyBuilder()
```

Additional information detected for the block.

`.google.cloud.vision.v1p4beta1.TextAnnotation.TextProperty property = 1;`

**Returns**

**Type**

**Description**

`[TextAnnotation.TextProperty.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.TextAnnotation.TextProperty.Builder)`

### getPropertyOrBuilder()

```
public TextAnnotation.TextPropertyOrBuilder getPropertyOrBuilder()
```

Additional information detected for the block.

`.google.cloud.vision.v1p4beta1.TextAnnotation.TextProperty property = 1;`

**Returns**

**Type**

**Description**

`[TextAnnotation.TextPropertyOrBuilder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.TextAnnotation.TextPropertyOrBuilder)`

### hasBoundingBox()

```
public boolean hasBoundingBox()
```

The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example:

-   when the text is horizontal it might look like: 0----1 | | 3----2
-   when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).

`.google.cloud.vision.v1p4beta1.BoundingPoly bounding_box = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the boundingBox field is set.

### hasProperty()

```
public boolean hasProperty()
```

Additional information detected for the block.

`.google.cloud.vision.v1p4beta1.TextAnnotation.TextProperty property = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the property field is set.

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

### mergeBoundingBox(BoundingPoly value)

```
public Block.Builder mergeBoundingBox(BoundingPoly value)
```

The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example:

-   when the text is horizontal it might look like: 0----1 | | 3----2
-   when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).

`.google.cloud.vision.v1p4beta1.BoundingPoly bounding_box = 2;`

**Parameter**

**Name**

**Description**

`value`

`[BoundingPoly](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.BoundingPoly)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### mergeFrom(Block other)

```
public Block.Builder mergeFrom(Block other)
```

**Parameter**

**Name**

**Description**

`other`

`[Block](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public Block.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public Block.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeProperty(TextAnnotation.TextProperty value)

```
public Block.Builder mergeProperty(TextAnnotation.TextProperty value)
```

Additional information detected for the block.

`.google.cloud.vision.v1p4beta1.TextAnnotation.TextProperty property = 1;`

**Parameter**

**Name**

**Description**

`value`

`[TextAnnotation.TextProperty](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.TextAnnotation.TextProperty)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final Block.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### removeParagraphs(int index)

```
public Block.Builder removeParagraphs(int index)
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### setBlockType(Block.BlockType value)

```
public Block.Builder setBlockType(Block.BlockType value)
```

Detected block type (text, image etc) for this block.

`.google.cloud.vision.v1p4beta1.Block.BlockType block_type = 4;`

**Parameter**

**Name**

**Description**

`value`

`[Block.BlockType](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.BlockType)`  

The blockType to set.

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

This builder for chaining.

### setBlockTypeValue(int value)

```
public Block.Builder setBlockTypeValue(int value)
```

Detected block type (text, image etc) for this block.

`.google.cloud.vision.v1p4beta1.Block.BlockType block_type = 4;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enum numeric value on the wire for blockType to set.

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

This builder for chaining.

### setBoundingBox(BoundingPoly value)

```
public Block.Builder setBoundingBox(BoundingPoly value)
```

The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example:

-   when the text is horizontal it might look like: 0----1 | | 3----2
-   when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).

`.google.cloud.vision.v1p4beta1.BoundingPoly bounding_box = 2;`

**Parameter**

**Name**

**Description**

`value`

`[BoundingPoly](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.BoundingPoly)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### setBoundingBox(BoundingPoly.Builder builderForValue)

```
public Block.Builder setBoundingBox(BoundingPoly.Builder builderForValue)
```

The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example:

-   when the text is horizontal it might look like: 0----1 | | 3----2
-   when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).

`.google.cloud.vision.v1p4beta1.BoundingPoly bounding_box = 2;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[BoundingPoly.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.BoundingPoly.Builder)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### setConfidence(float value)

```
public Block.Builder setConfidence(float value)
```

Confidence of the OCR results on the block. Range \[0, 1\].

`float confidence = 5;`

**Parameter**

**Name**

**Description**

`value`

`[float](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The confidence to set.

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public Block.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setParagraphs(int index, Paragraph value)

```
public Block.Builder setParagraphs(int index, Paragraph value)
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Paragraph](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Paragraph)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### setParagraphs(int index, Paragraph.Builder builderForValue)

```
public Block.Builder setParagraphs(int index, Paragraph.Builder builderForValue)
```

List of paragraphs in this block (if this blocks is of type text).

`repeated .google.cloud.vision.v1p4beta1.Paragraph paragraphs = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Paragraph.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Paragraph.Builder)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### setProperty(TextAnnotation.TextProperty value)

```
public Block.Builder setProperty(TextAnnotation.TextProperty value)
```

Additional information detected for the block.

`.google.cloud.vision.v1p4beta1.TextAnnotation.TextProperty property = 1;`

**Parameter**

**Name**

**Description**

`value`

`[TextAnnotation.TextProperty](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.TextAnnotation.TextProperty)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### setProperty(TextAnnotation.TextProperty.Builder builderForValue)

```
public Block.Builder setProperty(TextAnnotation.TextProperty.Builder builderForValue)
```

Additional information detected for the block.

`.google.cloud.vision.v1p4beta1.TextAnnotation.TextProperty property = 1;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[TextAnnotation.TextProperty.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.TextAnnotation.TextProperty.Builder)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public Block.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final Block.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[Block.Builder](/java/docs/reference/google-cloud-vision/3.7.0/com.google.cloud.vision.v1p4beta1.Block.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
