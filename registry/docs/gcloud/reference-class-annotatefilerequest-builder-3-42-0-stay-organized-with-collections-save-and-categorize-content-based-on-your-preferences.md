-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class AnnotateFileRequest.Builder (3.42.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.3 2.1.4 2.0.29

```
public static final class AnnotateFileRequest.Builder extends GeneratedMessageV3.Builder<AnnotateFileRequest.Builder> implements AnnotateFileRequestOrBuilder
```

A request to annotate one single file, e.g. a PDF, TIFF or GIF file.

Protobuf type `google.cloud.vision.v1p4beta1.AnnotateFileRequest`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> AnnotateFileRequest.Builder

## Implements

[AnnotateFileRequestOrBuilder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequestOrBuilder)

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

### addAllFeatures(Iterable<? extends Feature> values)

```
public AnnotateFileRequest.Builder addAllFeatures(Iterable<? extends Feature> values)
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.vision.v1p4beta1.Feature>`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### addAllPages(Iterable<? extends Integer> values)

```
public AnnotateFileRequest.Builder addAllPages(Iterable<? extends Integer> values)
```

Pages of the file to perform image annotation.

Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative.

Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page.

If the file is GIF instead of PDF or TIFF, page refers to GIF frames.

If this field is empty, by default the service performs image annotation for the first 5 pages of the file.

`repeated int32 pages = 4;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends java.lang.Integer>`  

The pages to add.

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

This builder for chaining.

### addFeatures(Feature value)

```
public AnnotateFileRequest.Builder addFeatures(Feature value)
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Parameter**

**Name**

**Description**

`value`

`[Feature](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.Feature)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### addFeatures(Feature.Builder builderForValue)

```
public AnnotateFileRequest.Builder addFeatures(Feature.Builder builderForValue)
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Feature.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.Feature.Builder)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### addFeatures(int index, Feature value)

```
public AnnotateFileRequest.Builder addFeatures(int index, Feature value)
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Feature](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.Feature)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### addFeatures(int index, Feature.Builder builderForValue)

```
public AnnotateFileRequest.Builder addFeatures(int index, Feature.Builder builderForValue)
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Feature.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.Feature.Builder)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### addFeaturesBuilder()

```
public Feature.Builder addFeaturesBuilder()
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Returns**

**Type**

**Description**

`[Feature.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.Feature.Builder)`

### addFeaturesBuilder(int index)

```
public Feature.Builder addFeaturesBuilder(int index)
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Feature.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.Feature.Builder)`

### addPages(int value)

```
public AnnotateFileRequest.Builder addPages(int value)
```

Pages of the file to perform image annotation.

Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative.

Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page.

If the file is GIF instead of PDF or TIFF, page refers to GIF frames.

If this field is empty, by default the service performs image annotation for the first 5 pages of the file.

`repeated int32 pages = 4;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The pages to add.

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

This builder for chaining.

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public AnnotateFileRequest.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public AnnotateFileRequest build()
```

**Returns**

**Type**

**Description**

`[AnnotateFileRequest](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest)`

### buildPartial()

```
public AnnotateFileRequest buildPartial()
```

**Returns**

**Type**

**Description**

`[AnnotateFileRequest](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest)`

### clear()

```
public AnnotateFileRequest.Builder clear()
```

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearFeatures()

```
public AnnotateFileRequest.Builder clearFeatures()
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### clearField(Descriptors.FieldDescriptor field)

```
public AnnotateFileRequest.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearImageContext()

```
public AnnotateFileRequest.Builder clearImageContext()
```

Additional context that may accompany the image(s) in the file.

`.google.cloud.vision.v1p4beta1.ImageContext image_context = 3;`

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### clearInputConfig()

```
public AnnotateFileRequest.Builder clearInputConfig()
```

Required. Information about the input file.

`.google.cloud.vision.v1p4beta1.InputConfig input_config = 1;`

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public AnnotateFileRequest.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearPages()

```
public AnnotateFileRequest.Builder clearPages()
```

Pages of the file to perform image annotation.

Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative.

Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page.

If the file is GIF instead of PDF or TIFF, page refers to GIF frames.

If this field is empty, by default the service performs image annotation for the first 5 pages of the file.

`repeated int32 pages = 4;`

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

This builder for chaining.

### clone()

```
public AnnotateFileRequest.Builder clone()
```

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getDefaultInstanceForType()

```
public AnnotateFileRequest getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[AnnotateFileRequest](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest)`

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

### getFeatures(int index)

```
public Feature getFeatures(int index)
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Feature](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.Feature)`

### getFeaturesBuilder(int index)

```
public Feature.Builder getFeaturesBuilder(int index)
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Feature.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.Feature.Builder)`

### getFeaturesBuilderList()

```
public List<Feature.Builder> getFeaturesBuilderList()
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.Feature.Builder)>`

### getFeaturesCount()

```
public int getFeaturesCount()
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getFeaturesList()

```
public List<Feature> getFeaturesList()
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Feature](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.Feature)>`

### getFeaturesOrBuilder(int index)

```
public FeatureOrBuilder getFeaturesOrBuilder(int index)
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[FeatureOrBuilder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.FeatureOrBuilder)`

### getFeaturesOrBuilderList()

```
public List<? extends FeatureOrBuilder> getFeaturesOrBuilderList()
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.vision.v1p4beta1.FeatureOrBuilder>`

### getImageContext()

```
public ImageContext getImageContext()
```

Additional context that may accompany the image(s) in the file.

`.google.cloud.vision.v1p4beta1.ImageContext image_context = 3;`

**Returns**

**Type**

**Description**

`[ImageContext](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.ImageContext)`

The imageContext.

### getImageContextBuilder()

```
public ImageContext.Builder getImageContextBuilder()
```

Additional context that may accompany the image(s) in the file.

`.google.cloud.vision.v1p4beta1.ImageContext image_context = 3;`

**Returns**

**Type**

**Description**

`[ImageContext.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.ImageContext.Builder)`

### getImageContextOrBuilder()

```
public ImageContextOrBuilder getImageContextOrBuilder()
```

Additional context that may accompany the image(s) in the file.

`.google.cloud.vision.v1p4beta1.ImageContext image_context = 3;`

**Returns**

**Type**

**Description**

`[ImageContextOrBuilder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.ImageContextOrBuilder)`

### getInputConfig()

```
public InputConfig getInputConfig()
```

Required. Information about the input file.

`.google.cloud.vision.v1p4beta1.InputConfig input_config = 1;`

**Returns**

**Type**

**Description**

`[InputConfig](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.InputConfig)`

The inputConfig.

### getInputConfigBuilder()

```
public InputConfig.Builder getInputConfigBuilder()
```

Required. Information about the input file.

`.google.cloud.vision.v1p4beta1.InputConfig input_config = 1;`

**Returns**

**Type**

**Description**

`[InputConfig.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.InputConfig.Builder)`

### getInputConfigOrBuilder()

```
public InputConfigOrBuilder getInputConfigOrBuilder()
```

Required. Information about the input file.

`.google.cloud.vision.v1p4beta1.InputConfig input_config = 1;`

**Returns**

**Type**

**Description**

`[InputConfigOrBuilder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.InputConfigOrBuilder)`

### getPages(int index)

```
public int getPages(int index)
```

Pages of the file to perform image annotation.

Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative.

Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page.

If the file is GIF instead of PDF or TIFF, page refers to GIF frames.

If this field is empty, by default the service performs image annotation for the first 5 pages of the file.

`repeated int32 pages = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The pages at the given index.

### getPagesCount()

```
public int getPagesCount()
```

Pages of the file to perform image annotation.

Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative.

Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page.

If the file is GIF instead of PDF or TIFF, page refers to GIF frames.

If this field is empty, by default the service performs image annotation for the first 5 pages of the file.

`repeated int32 pages = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of pages.

### getPagesList()

```
public List<Integer> getPagesList()
```

Pages of the file to perform image annotation.

Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative.

Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page.

If the file is GIF instead of PDF or TIFF, page refers to GIF frames.

If this field is empty, by default the service performs image annotation for the first 5 pages of the file.

`repeated int32 pages = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)>`

A list containing the pages.

### hasImageContext()

```
public boolean hasImageContext()
```

Additional context that may accompany the image(s) in the file.

`.google.cloud.vision.v1p4beta1.ImageContext image_context = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the imageContext field is set.

### hasInputConfig()

```
public boolean hasInputConfig()
```

Required. Information about the input file.

`.google.cloud.vision.v1p4beta1.InputConfig input_config = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the inputConfig field is set.

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

### mergeFrom(AnnotateFileRequest other)

```
public AnnotateFileRequest.Builder mergeFrom(AnnotateFileRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[AnnotateFileRequest](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public AnnotateFileRequest.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public AnnotateFileRequest.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeImageContext(ImageContext value)

```
public AnnotateFileRequest.Builder mergeImageContext(ImageContext value)
```

Additional context that may accompany the image(s) in the file.

`.google.cloud.vision.v1p4beta1.ImageContext image_context = 3;`

**Parameter**

**Name**

**Description**

`value`

`[ImageContext](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.ImageContext)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### mergeInputConfig(InputConfig value)

```
public AnnotateFileRequest.Builder mergeInputConfig(InputConfig value)
```

Required. Information about the input file.

`.google.cloud.vision.v1p4beta1.InputConfig input_config = 1;`

**Parameter**

**Name**

**Description**

`value`

`[InputConfig](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.InputConfig)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final AnnotateFileRequest.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### removeFeatures(int index)

```
public AnnotateFileRequest.Builder removeFeatures(int index)
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### setFeatures(int index, Feature value)

```
public AnnotateFileRequest.Builder setFeatures(int index, Feature value)
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Feature](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.Feature)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### setFeatures(int index, Feature.Builder builderForValue)

```
public AnnotateFileRequest.Builder setFeatures(int index, Feature.Builder builderForValue)
```

Required. Requested features.

`repeated .google.cloud.vision.v1p4beta1.Feature features = 2;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Feature.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.Feature.Builder)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public AnnotateFileRequest.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setImageContext(ImageContext value)

```
public AnnotateFileRequest.Builder setImageContext(ImageContext value)
```

Additional context that may accompany the image(s) in the file.

`.google.cloud.vision.v1p4beta1.ImageContext image_context = 3;`

**Parameter**

**Name**

**Description**

`value`

`[ImageContext](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.ImageContext)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### setImageContext(ImageContext.Builder builderForValue)

```
public AnnotateFileRequest.Builder setImageContext(ImageContext.Builder builderForValue)
```

Additional context that may accompany the image(s) in the file.

`.google.cloud.vision.v1p4beta1.ImageContext image_context = 3;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[ImageContext.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.ImageContext.Builder)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### setInputConfig(InputConfig value)

```
public AnnotateFileRequest.Builder setInputConfig(InputConfig value)
```

Required. Information about the input file.

`.google.cloud.vision.v1p4beta1.InputConfig input_config = 1;`

**Parameter**

**Name**

**Description**

`value`

`[InputConfig](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.InputConfig)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### setInputConfig(InputConfig.Builder builderForValue)

```
public AnnotateFileRequest.Builder setInputConfig(InputConfig.Builder builderForValue)
```

Required. Information about the input file.

`.google.cloud.vision.v1p4beta1.InputConfig input_config = 1;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[InputConfig.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.InputConfig.Builder)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

### setPages(int index, int value)

```
public AnnotateFileRequest.Builder setPages(int index, int value)
```

Pages of the file to perform image annotation.

Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative.

Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page.

If the file is GIF instead of PDF or TIFF, page refers to GIF frames.

If this field is empty, by default the service performs image annotation for the first 5 pages of the file.

`repeated int32 pages = 4;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index to set the value at.

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The pages to set.

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public AnnotateFileRequest.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final AnnotateFileRequest.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[AnnotateFileRequest.Builder](/java/docs/reference/google-cloud-vision/3.42.0/com.google.cloud.vision.v1p4beta1.AnnotateFileRequest.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
