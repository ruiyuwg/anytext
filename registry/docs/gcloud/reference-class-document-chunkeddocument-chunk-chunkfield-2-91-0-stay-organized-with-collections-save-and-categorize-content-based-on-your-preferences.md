-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Document.ChunkedDocument.Chunk.ChunkField (2.91.0) Stay organized with collections Save and categorize content based on your preferences.

2.91.0 (latest) 2.89.0 2.87.0 2.86.0 2.85.0 2.84.0 2.82.0 2.80.0 2.79.0 2.78.0 2.77.0 2.76.0 2.74.0 2.72.0 2.71.0 2.68.0 2.67.0 2.66.0 2.64.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.53.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.5 2.6.2 2.5.1 2.4.3 2.3.1 2.2.1 2.1.9

```
public static final class Document.ChunkedDocument.Chunk.ChunkField extends GeneratedMessage implements Document.ChunkedDocument.Chunk.ChunkFieldOrBuilder
```

The chunk field in the chunk. A chunk field could be one of the various types (for example, image, table) supported.

Protobuf type `google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html) \> [AbstractMessage](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html) \> [GeneratedMessage](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html) \> Document.ChunkedDocument.Chunk.ChunkField

## Implements

[Document.ChunkedDocument.Chunk.ChunkFieldOrBuilder](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkFieldOrBuilder)

## Inherited Members

[AbstractMessage.equals(Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_equals_java_lang_Object_)

[AbstractMessage.findInitializationErrors()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_findInitializationErrors__)

[AbstractMessage.getInitializationErrorString()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_getInitializationErrorString__)

[AbstractMessage.hashCode()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_hashCode__)

[AbstractMessage.hashFields(int,Map<Descriptors.FieldDescriptor,Object>)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_hashFields_int_java_util_Map_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object__)

[AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_newBuilderForType_com_google_protobuf_AbstractMessage_BuilderParent_)

[AbstractMessage.toString()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_toString__)

[AbstractMessageLite.<T>addAll(Iterable<T>,List<? super T>)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html#com_google_protobuf_AbstractMessageLite__T_addAll_java_lang_Iterable_T__java_util_List___super_T__)

[AbstractMessageLite.checkByteStringIsUtf8(ByteString)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html#com_google_protobuf_AbstractMessageLite_checkByteStringIsUtf8_com_google_protobuf_ByteString_)

[AbstractMessageLite.toByteArray()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html#com_google_protobuf_AbstractMessageLite_toByteArray__)

[AbstractMessageLite.toByteString()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html#com_google_protobuf_AbstractMessageLite_toByteString__)

[AbstractMessageLite.writeDelimitedTo(OutputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html#com_google_protobuf_AbstractMessageLite_writeDelimitedTo_java_io_OutputStream_)

[AbstractMessageLite.writeTo(OutputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.html#com_google_protobuf_AbstractMessageLite_writeTo_java_io_OutputStream_)

com.google.protobuf.GeneratedMessage.<ContainingT,T>newFileScopedGeneratedExtension(java.lang.Class<?>,com.google.protobuf.Message)

com.google.protobuf.GeneratedMessage.<ContainingT,T>newMessageScopedGeneratedExtension(com.google.protobuf.Message,int,java.lang.Class<?>,com.google.protobuf.Message)

com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT)

com.google.protobuf.GeneratedMessage.<ListT>makeMutableCopy(ListT,int)

[GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage__M_parseDelimitedWithIOException_com_google_protobuf_Parser_M__java_io_InputStream_)

[GeneratedMessage.<M>parseDelimitedWithIOException(Parser<M>,InputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage__M_parseDelimitedWithIOException_com_google_protobuf_Parser_M__java_io_InputStream_com_google_protobuf_ExtensionRegistryLite_)

[GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage__M_parseWithIOException_com_google_protobuf_Parser_M__com_google_protobuf_CodedInputStream_)

[GeneratedMessage.<M>parseWithIOException(Parser<M>,CodedInputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage__M_parseWithIOException_com_google_protobuf_Parser_M__com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

[GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage__M_parseWithIOException_com_google_protobuf_Parser_M__java_io_InputStream_)

[GeneratedMessage.<M>parseWithIOException(Parser<M>,InputStream,ExtensionRegistryLite)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage__M_parseWithIOException_com_google_protobuf_Parser_M__java_io_InputStream_com_google_protobuf_ExtensionRegistryLite_)

com.google.protobuf.GeneratedMessage.<T>emptyList(java.lang.Class<T>)

com.google.protobuf.GeneratedMessage.<V>serializeBooleanMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Boolean,V>,com.google.protobuf.MapEntry<java.lang.Boolean,V>,int)

com.google.protobuf.GeneratedMessage.<V>serializeIntegerMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Integer,V>,com.google.protobuf.MapEntry<java.lang.Integer,V>,int)

com.google.protobuf.GeneratedMessage.<V>serializeLongMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.Long,V>,com.google.protobuf.MapEntry<java.lang.Long,V>,int)

com.google.protobuf.GeneratedMessage.<V>serializeStringMapTo(com.google.protobuf.CodedOutputStream,com.google.protobuf.MapField<java.lang.String,V>,com.google.protobuf.MapEntry<java.lang.String,V>,int)

com.google.protobuf.GeneratedMessage.canUseUnsafe()

[GeneratedMessage.computeStringSize(int,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_computeStringSize_int_java_lang_Object_)

[GeneratedMessage.computeStringSizeNoTag(Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_computeStringSizeNoTag_java_lang_Object_)

com.google.protobuf.GeneratedMessage.emptyBooleanList()

com.google.protobuf.GeneratedMessage.emptyDoubleList()

com.google.protobuf.GeneratedMessage.emptyFloatList()

com.google.protobuf.GeneratedMessage.emptyIntList()

com.google.protobuf.GeneratedMessage.emptyLongList()

[GeneratedMessage.getAllFields()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_getAllFields__)

[GeneratedMessage.getDescriptorForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_getDescriptorForType__)

[GeneratedMessage.getField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_getField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessage.getOneofFieldDescriptor(Descriptors.OneofDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_getOneofFieldDescriptor_com_google_protobuf_Descriptors_OneofDescriptor_)

[GeneratedMessage.getParserForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_getParserForType__)

[GeneratedMessage.getRepeatedField(Descriptors.FieldDescriptor,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_getRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_)

[GeneratedMessage.getRepeatedFieldCount(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_getRepeatedFieldCount_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessage.getSerializedSize()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_getSerializedSize__)

[GeneratedMessage.getUnknownFields()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_getUnknownFields__)

[GeneratedMessage.hasField(Descriptors.FieldDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_hasField_com_google_protobuf_Descriptors_FieldDescriptor_)

[GeneratedMessage.hasOneof(Descriptors.OneofDescriptor)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_hasOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

[GeneratedMessage.internalGetFieldAccessorTable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_internalGetFieldAccessorTable__)

[GeneratedMessage.internalGetMapField(int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_internalGetMapField_int_)

com.google.protobuf.GeneratedMessage.internalGetMapFieldReflection(int)

[GeneratedMessage.isInitialized()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_isInitialized__)

com.google.protobuf.GeneratedMessage.isStringEmpty(java.lang.Object)

[GeneratedMessage.makeExtensionsImmutable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_makeExtensionsImmutable__)

com.google.protobuf.GeneratedMessage.mergeFromAndMakeImmutableInternal(com.google.protobuf.CodedInputStream,com.google.protobuf.ExtensionRegistryLite)

com.google.protobuf.GeneratedMessage.newInstance(com.google.protobuf.GeneratedMessage.UnusedPrivateParameter)

[GeneratedMessage.parseUnknownField(CodedInputStream,UnknownFieldSet.Builder,ExtensionRegistryLite,int)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_parseUnknownField_com_google_protobuf_CodedInputStream_com_google_protobuf_UnknownFieldSet_Builder_com_google_protobuf_ExtensionRegistryLite_int_)

com.google.protobuf.GeneratedMessage.parseUnknownFieldProto3(com.google.protobuf.CodedInputStream,com.google.protobuf.UnknownFieldSet.Builder,com.google.protobuf.ExtensionRegistryLite,int)

[GeneratedMessage.writeReplace()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_writeReplace__)

[GeneratedMessage.writeString(CodedOutputStream,int,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_writeString_com_google_protobuf_CodedOutputStream_int_java_lang_Object_)

[GeneratedMessage.writeStringNoTag(CodedOutputStream,Object)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_writeStringNoTag_com_google_protobuf_CodedOutputStream_java_lang_Object_)

[GeneratedMessage.writeTo(CodedOutputStream)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_writeTo_com_google_protobuf_CodedOutputStream_)

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Fields

### IMAGE\_CHUNK\_FIELD\_FIELD\_NUMBER

```
public static final int IMAGE_CHUNK_FIELD_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### TABLE\_CHUNK\_FIELD\_FIELD\_NUMBER

```
public static final int TABLE_CHUNK_FIELD_FIELD_NUMBER
```

**Field Value**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

## Static Methods

### getDefaultInstance()

```
public static Document.ChunkedDocument.Chunk.ChunkField getDefaultInstance()
```

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)`

### getDescriptor()

```
public static final Descriptors.Descriptor getDescriptor()
```

**Returns**

**Type**

**Description**

`[Descriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.Descriptor.html)`

### newBuilder()

```
public static Document.ChunkedDocument.Chunk.ChunkField.Builder newBuilder()
```

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField.Builder](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField.Builder)`

### newBuilder(Document.ChunkedDocument.Chunk.ChunkField prototype)

```
public static Document.ChunkedDocument.Chunk.ChunkField.Builder newBuilder(Document.ChunkedDocument.Chunk.ChunkField prototype)
```

**Parameter**

**Name**

**Description**

`prototype`

`[Document.ChunkedDocument.Chunk.ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)`  

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField.Builder](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField.Builder)`

### parseDelimitedFrom(InputStream input)

```
public static Document.ChunkedDocument.Chunk.ChunkField parseDelimitedFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static Document.ChunkedDocument.Chunk.ChunkField parseDelimitedFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

`extensionRegistry`

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(byte\[\] data)

```
public static Document.ChunkedDocument.Chunk.ChunkField parseFrom(byte[] data)
```

**Parameter**

**Name**

**Description**

`data`

`byte[]`  

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(byte\[\] data, ExtensionRegistryLite extensionRegistry)

```
public static Document.ChunkedDocument.Chunk.ChunkField parseFrom(byte[] data, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

`data`

`byte[]`  

`extensionRegistry`

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data)

```
public static Document.ChunkedDocument.Chunk.ChunkField parseFrom(ByteString data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)

```
public static Document.ChunkedDocument.Chunk.ChunkField parseFrom(ByteString data, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

`data`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

`extensionRegistry`

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(CodedInputStream input)

```
public static Document.ChunkedDocument.Chunk.ChunkField parseFrom(CodedInputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[CodedInputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedInputStream.html)`  

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public static Document.ChunkedDocument.Chunk.ChunkField parseFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[Document.ChunkedDocument.Chunk.ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input)

```
public static Document.ChunkedDocument.Chunk.ChunkField parseFrom(InputStream input)
```

**Parameter**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)

```
public static Document.ChunkedDocument.Chunk.ChunkField parseFrom(InputStream input, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

`input`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

`extensionRegistry`

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### parseFrom(ByteBuffer data)

```
public static Document.ChunkedDocument.Chunk.ChunkField parseFrom(ByteBuffer data)
```

**Parameter**

**Name**

**Description**

`data`

`[ByteBuffer](https://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html)`  

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)

```
public static Document.ChunkedDocument.Chunk.ChunkField parseFrom(ByteBuffer data, ExtensionRegistryLite extensionRegistry)
```

**Parameters**

**Name**

**Description**

`data`

`[ByteBuffer](https://docs.oracle.com/javase/8/docs/api/java/nio/ByteBuffer.html)`  

`extensionRegistry`

`[ExtensionRegistryLite](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ExtensionRegistryLite.html)`  

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)`

**Exceptions**

**Type**

**Description**

`[InvalidProtocolBufferException](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.InvalidProtocolBufferException.html)`

### parser()

```
public static Parser<Document.ChunkedDocument.Chunk.ChunkField> parser()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)>`

## Methods

### equals(Object obj)

```
public boolean equals(Object obj)
```

**Parameter**

**Name**

**Description**

`obj`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[AbstractMessage.equals(Object other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_equals_java_lang_Object_)

### getDefaultInstanceForType()

```
public Document.ChunkedDocument.Chunk.ChunkField getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)`

### getFieldTypeCase()

```
public Document.ChunkedDocument.Chunk.ChunkField.FieldTypeCase getFieldTypeCase()
```

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField.FieldTypeCase](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField.FieldTypeCase)`

### getImageChunkField()

```
public Document.ChunkedDocument.Chunk.ImageChunkField getImageChunkField()
```

The image chunk field in the chunk.

`.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ImageChunkField image_chunk_field = 1;`

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ImageChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ImageChunkField)`

The imageChunkField.

### getImageChunkFieldOrBuilder()

```
public Document.ChunkedDocument.Chunk.ImageChunkFieldOrBuilder getImageChunkFieldOrBuilder()
```

The image chunk field in the chunk.

`.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ImageChunkField image_chunk_field = 1;`

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ImageChunkFieldOrBuilder](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ImageChunkFieldOrBuilder)`

### getParserForType()

```
public Parser<Document.ChunkedDocument.Chunk.ChunkField> getParserForType()
```

**Returns**

**Type**

**Description**

`[Parser](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Parser.html)<[ChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField)>`

**Overrides**

[GeneratedMessage.getParserForType()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_getParserForType__)

### getSerializedSize()

```
public int getSerializedSize()
```

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[GeneratedMessage.getSerializedSize()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_getSerializedSize__)

### getTableChunkField()

```
public Document.ChunkedDocument.Chunk.TableChunkField getTableChunkField()
```

The table chunk field in the chunk.

`.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.TableChunkField table_chunk_field = 2;`

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.TableChunkField](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.TableChunkField)`

The tableChunkField.

### getTableChunkFieldOrBuilder()

```
public Document.ChunkedDocument.Chunk.TableChunkFieldOrBuilder getTableChunkFieldOrBuilder()
```

The table chunk field in the chunk.

`.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.TableChunkField table_chunk_field = 2;`

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.TableChunkFieldOrBuilder](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.TableChunkFieldOrBuilder)`

### hasImageChunkField()

```
public boolean hasImageChunkField()
```

The image chunk field in the chunk.

`.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ImageChunkField image_chunk_field = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the imageChunkField field is set.

### hasTableChunkField()

```
public boolean hasTableChunkField()
```

The table chunk field in the chunk.

`.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.TableChunkField table_chunk_field = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the tableChunkField field is set.

### hashCode()

```
public int hashCode()
```

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[AbstractMessage.hashCode()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_hashCode__)

### internalGetFieldAccessorTable()

```
protected GeneratedMessage.FieldAccessorTable internalGetFieldAccessorTable()
```

**Returns**

**Type**

**Description**

`[FieldAccessorTable](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.FieldAccessorTable.html)`

**Overrides**

[GeneratedMessage.internalGetFieldAccessorTable()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_internalGetFieldAccessorTable__)

### isInitialized()

```
public final boolean isInitialized()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[GeneratedMessage.isInitialized()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_isInitialized__)

### newBuilderForType()

```
public Document.ChunkedDocument.Chunk.ChunkField.Builder newBuilderForType()
```

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField.Builder](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField.Builder)`

### newBuilderForType(AbstractMessage.BuilderParent parent)

```
protected Document.ChunkedDocument.Chunk.ChunkField.Builder newBuilderForType(AbstractMessage.BuilderParent parent)
```

**Parameter**

**Name**

**Description**

`parent`

`[BuilderParent](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.BuilderParent.html)`  

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField.Builder](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField.Builder)`

**Overrides**

[AbstractMessage.newBuilderForType(AbstractMessage.BuilderParent parent)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.html#com_google_protobuf_AbstractMessage_newBuilderForType_com_google_protobuf_AbstractMessage_BuilderParent_)

### toBuilder()

```
public Document.ChunkedDocument.Chunk.ChunkField.Builder toBuilder()
```

**Returns**

**Type**

**Description**

`[Document.ChunkedDocument.Chunk.ChunkField.Builder](/java/docs/reference/google-cloud-document-ai/latest/com.google.cloud.documentai.v1beta3.Document.ChunkedDocument.Chunk.ChunkField.Builder)`

### writeTo(CodedOutputStream output)

```
public void writeTo(CodedOutputStream output)
```

**Parameter**

**Name**

**Description**

`output`

`[CodedOutputStream](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.CodedOutputStream.html)`  

**Overrides**

[GeneratedMessage.writeTo(CodedOutputStream output)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessage.html#com_google_protobuf_GeneratedMessage_writeTo_com_google_protobuf_CodedOutputStream_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
