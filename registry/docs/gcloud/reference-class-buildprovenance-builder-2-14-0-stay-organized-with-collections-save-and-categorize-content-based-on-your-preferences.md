-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class BuildProvenance.Builder (2.14.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.5 2.3.1 2.2.3 2.1.3

```
public static final class BuildProvenance.Builder extends GeneratedMessageV3.Builder<BuildProvenance.Builder> implements BuildProvenanceOrBuilder
```

Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.

Protobuf type `grafeas.v1.BuildProvenance`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> BuildProvenance.Builder

## Implements

[BuildProvenanceOrBuilder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenanceOrBuilder)

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

### addAllBuiltArtifacts(Iterable<? extends Artifact> values)

```
public BuildProvenance.Builder addAllBuiltArtifacts(Iterable<? extends Artifact> values)
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends io.grafeas.v1.Artifact>`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### addAllCommands(Iterable<? extends Command> values)

```
public BuildProvenance.Builder addAllCommands(Iterable<? extends Command> values)
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends io.grafeas.v1.Command>`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### addBuiltArtifacts(int index, Artifact value)

```
public BuildProvenance.Builder addBuiltArtifacts(int index, Artifact value)
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Artifact](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Artifact)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### addBuiltArtifacts(int index, Artifact.Builder builderForValue)

```
public BuildProvenance.Builder addBuiltArtifacts(int index, Artifact.Builder builderForValue)
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Artifact.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Artifact.Builder)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### addBuiltArtifacts(Artifact value)

```
public BuildProvenance.Builder addBuiltArtifacts(Artifact value)
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Parameter**

**Name**

**Description**

`value`

`[Artifact](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Artifact)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### addBuiltArtifacts(Artifact.Builder builderForValue)

```
public BuildProvenance.Builder addBuiltArtifacts(Artifact.Builder builderForValue)
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Artifact.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Artifact.Builder)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### addBuiltArtifactsBuilder()

```
public Artifact.Builder addBuiltArtifactsBuilder()
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Returns**

**Type**

**Description**

`[Artifact.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Artifact.Builder)`

### addBuiltArtifactsBuilder(int index)

```
public Artifact.Builder addBuiltArtifactsBuilder(int index)
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Artifact.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Artifact.Builder)`

### addCommands(int index, Command value)

```
public BuildProvenance.Builder addCommands(int index, Command value)
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Command](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Command)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### addCommands(int index, Command.Builder builderForValue)

```
public BuildProvenance.Builder addCommands(int index, Command.Builder builderForValue)
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Command.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Command.Builder)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### addCommands(Command value)

```
public BuildProvenance.Builder addCommands(Command value)
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Parameter**

**Name**

**Description**

`value`

`[Command](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Command)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### addCommands(Command.Builder builderForValue)

```
public BuildProvenance.Builder addCommands(Command.Builder builderForValue)
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Command.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Command.Builder)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### addCommandsBuilder()

```
public Command.Builder addCommandsBuilder()
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Returns**

**Type**

**Description**

`[Command.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Command.Builder)`

### addCommandsBuilder(int index)

```
public Command.Builder addCommandsBuilder(int index)
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Command.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Command.Builder)`

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public BuildProvenance.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public BuildProvenance build()
```

**Returns**

**Type**

**Description**

`[BuildProvenance](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance)`

### buildPartial()

```
public BuildProvenance buildPartial()
```

**Returns**

**Type**

**Description**

`[BuildProvenance](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance)`

### clear()

```
public BuildProvenance.Builder clear()
```

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearBuildOptions()

```
public BuildProvenance.Builder clearBuildOptions()
```

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### clearBuilderVersion()

```
public BuildProvenance.Builder clearBuilderVersion()
```

Version string of the builder at the time this build was executed.

`string builder_version = 13;`

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### clearBuiltArtifacts()

```
public BuildProvenance.Builder clearBuiltArtifacts()
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### clearCommands()

```
public BuildProvenance.Builder clearCommands()
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### clearCreateTime()

```
public BuildProvenance.Builder clearCreateTime()
```

Time at which the build was created.

`.google.protobuf.Timestamp create_time = 5;`

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### clearCreator()

```
public BuildProvenance.Builder clearCreator()
```

E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time.

`string creator = 8;`

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### clearEndTime()

```
public BuildProvenance.Builder clearEndTime()
```

Time at which execution of the build was finished.

`.google.protobuf.Timestamp end_time = 7;`

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### clearField(Descriptors.FieldDescriptor field)

```
public BuildProvenance.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearId()

```
public BuildProvenance.Builder clearId()
```

Required. Unique identifier of the build.

`string id = 1;`

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### clearLogsUri()

```
public BuildProvenance.Builder clearLogsUri()
```

URI where any logs for this provenance were written.

`string logs_uri = 9;`

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public BuildProvenance.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearProjectId()

```
public BuildProvenance.Builder clearProjectId()
```

ID of the project.

`string project_id = 2;`

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### clearSourceProvenance()

```
public BuildProvenance.Builder clearSourceProvenance()
```

Details of the Source input to the build.

`.grafeas.v1.Source source_provenance = 10;`

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### clearStartTime()

```
public BuildProvenance.Builder clearStartTime()
```

Time at which execution of the build was started.

`.google.protobuf.Timestamp start_time = 6;`

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### clearTriggerId()

```
public BuildProvenance.Builder clearTriggerId()
```

Trigger identifier if the build was triggered automatically; empty if not.

`string trigger_id = 11;`

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### clone()

```
public BuildProvenance.Builder clone()
```

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### containsBuildOptions(String key)

```
public boolean containsBuildOptions(String key)
```

Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.

`map<string, string> build_options = 12;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getBuildOptions()

```
public Map<String,String> getBuildOptions()
```

Use [#getBuildOptionsMap()](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder#io_grafeas_v1_BuildProvenance_Builder_getBuildOptionsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getBuildOptionsCount()

```
public int getBuildOptionsCount()
```

Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.

`map<string, string> build_options = 12;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getBuildOptionsMap()

```
public Map<String,String> getBuildOptionsMap()
```

Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.

`map<string, string> build_options = 12;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getBuildOptionsOrDefault(String key, String defaultValue)

```
public String getBuildOptionsOrDefault(String key, String defaultValue)
```

Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.

`map<string, string> build_options = 12;`

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

### getBuildOptionsOrThrow(String key)

```
public String getBuildOptionsOrThrow(String key)
```

Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.

`map<string, string> build_options = 12;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getBuilderVersion()

```
public String getBuilderVersion()
```

Version string of the builder at the time this build was executed.

`string builder_version = 13;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The builderVersion.

### getBuilderVersionBytes()

```
public ByteString getBuilderVersionBytes()
```

Version string of the builder at the time this build was executed.

`string builder_version = 13;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for builderVersion.

### getBuiltArtifacts(int index)

```
public Artifact getBuiltArtifacts(int index)
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Artifact](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Artifact)`

### getBuiltArtifactsBuilder(int index)

```
public Artifact.Builder getBuiltArtifactsBuilder(int index)
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Artifact.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Artifact.Builder)`

### getBuiltArtifactsBuilderList()

```
public List<Artifact.Builder> getBuiltArtifactsBuilderList()
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Artifact.Builder)>`

### getBuiltArtifactsCount()

```
public int getBuiltArtifactsCount()
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getBuiltArtifactsList()

```
public List<Artifact> getBuiltArtifactsList()
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Artifact](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Artifact)>`

### getBuiltArtifactsOrBuilder(int index)

```
public ArtifactOrBuilder getBuiltArtifactsOrBuilder(int index)
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ArtifactOrBuilder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.ArtifactOrBuilder)`

### getBuiltArtifactsOrBuilderList()

```
public List<? extends ArtifactOrBuilder> getBuiltArtifactsOrBuilderList()
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends io.grafeas.v1.ArtifactOrBuilder>`

### getCommands(int index)

```
public Command getCommands(int index)
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Command](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Command)`

### getCommandsBuilder(int index)

```
public Command.Builder getCommandsBuilder(int index)
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Command.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Command.Builder)`

### getCommandsBuilderList()

```
public List<Command.Builder> getCommandsBuilderList()
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Command.Builder)>`

### getCommandsCount()

```
public int getCommandsCount()
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getCommandsList()

```
public List<Command> getCommandsList()
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Command](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Command)>`

### getCommandsOrBuilder(int index)

```
public CommandOrBuilder getCommandsOrBuilder(int index)
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[CommandOrBuilder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.CommandOrBuilder)`

### getCommandsOrBuilderList()

```
public List<? extends CommandOrBuilder> getCommandsOrBuilderList()
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends io.grafeas.v1.CommandOrBuilder>`

### getCreateTime()

```
public Timestamp getCreateTime()
```

Time at which the build was created.

`.google.protobuf.Timestamp create_time = 5;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeBuilder()

```
public Timestamp.Builder getCreateTimeBuilder()
```

Time at which the build was created.

`.google.protobuf.Timestamp create_time = 5;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getCreateTimeOrBuilder()

```
public TimestampOrBuilder getCreateTimeOrBuilder()
```

Time at which the build was created.

`.google.protobuf.Timestamp create_time = 5;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getCreator()

```
public String getCreator()
```

E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time.

`string creator = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The creator.

### getCreatorBytes()

```
public ByteString getCreatorBytes()
```

E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time.

`string creator = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for creator.

### getDefaultInstanceForType()

```
public BuildProvenance getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[BuildProvenance](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance)`

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

### getEndTime()

```
public Timestamp getEndTime()
```

Time at which execution of the build was finished.

`.google.protobuf.Timestamp end_time = 7;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The endTime.

### getEndTimeBuilder()

```
public Timestamp.Builder getEndTimeBuilder()
```

Time at which execution of the build was finished.

`.google.protobuf.Timestamp end_time = 7;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getEndTimeOrBuilder()

```
public TimestampOrBuilder getEndTimeOrBuilder()
```

Time at which execution of the build was finished.

`.google.protobuf.Timestamp end_time = 7;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getId()

```
public String getId()
```

Required. Unique identifier of the build.

`string id = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The id.

### getIdBytes()

```
public ByteString getIdBytes()
```

Required. Unique identifier of the build.

`string id = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for id.

### getLogsUri()

```
public String getLogsUri()
```

URI where any logs for this provenance were written.

`string logs_uri = 9;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The logsUri.

### getLogsUriBytes()

```
public ByteString getLogsUriBytes()
```

URI where any logs for this provenance were written.

`string logs_uri = 9;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for logsUri.

### getMutableBuildOptions()

```
public Map<String,String> getMutableBuildOptions()
```

Use alternate mutation accessors instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getProjectId()

```
public String getProjectId()
```

ID of the project.

`string project_id = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The projectId.

### getProjectIdBytes()

```
public ByteString getProjectIdBytes()
```

ID of the project.

`string project_id = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for projectId.

### getSourceProvenance()

```
public Source getSourceProvenance()
```

Details of the Source input to the build.

`.grafeas.v1.Source source_provenance = 10;`

**Returns**

**Type**

**Description**

`[Source](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Source)`

The sourceProvenance.

### getSourceProvenanceBuilder()

```
public Source.Builder getSourceProvenanceBuilder()
```

Details of the Source input to the build.

`.grafeas.v1.Source source_provenance = 10;`

**Returns**

**Type**

**Description**

`[Source.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Source.Builder)`

### getSourceProvenanceOrBuilder()

```
public SourceOrBuilder getSourceProvenanceOrBuilder()
```

Details of the Source input to the build.

`.grafeas.v1.Source source_provenance = 10;`

**Returns**

**Type**

**Description**

`[SourceOrBuilder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.SourceOrBuilder)`

### getStartTime()

```
public Timestamp getStartTime()
```

Time at which execution of the build was started.

`.google.protobuf.Timestamp start_time = 6;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The startTime.

### getStartTimeBuilder()

```
public Timestamp.Builder getStartTimeBuilder()
```

Time at which execution of the build was started.

`.google.protobuf.Timestamp start_time = 6;`

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`

### getStartTimeOrBuilder()

```
public TimestampOrBuilder getStartTimeOrBuilder()
```

Time at which execution of the build was started.

`.google.protobuf.Timestamp start_time = 6;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getTriggerId()

```
public String getTriggerId()
```

Trigger identifier if the build was triggered automatically; empty if not.

`string trigger_id = 11;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The triggerId.

### getTriggerIdBytes()

```
public ByteString getTriggerIdBytes()
```

Trigger identifier if the build was triggered automatically; empty if not.

`string trigger_id = 11;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for triggerId.

### hasCreateTime()

```
public boolean hasCreateTime()
```

Time at which the build was created.

`.google.protobuf.Timestamp create_time = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasEndTime()

```
public boolean hasEndTime()
```

Time at which execution of the build was finished.

`.google.protobuf.Timestamp end_time = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the endTime field is set.

### hasSourceProvenance()

```
public boolean hasSourceProvenance()
```

Details of the Source input to the build.

`.grafeas.v1.Source source_provenance = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the sourceProvenance field is set.

### hasStartTime()

```
public boolean hasStartTime()
```

Time at which execution of the build was started.

`.google.protobuf.Timestamp start_time = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the startTime field is set.

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

### mergeCreateTime(Timestamp value)

```
public BuildProvenance.Builder mergeCreateTime(Timestamp value)
```

Time at which the build was created.

`.google.protobuf.Timestamp create_time = 5;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### mergeEndTime(Timestamp value)

```
public BuildProvenance.Builder mergeEndTime(Timestamp value)
```

Time at which execution of the build was finished.

`.google.protobuf.Timestamp end_time = 7;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public BuildProvenance.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public BuildProvenance.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeFrom(BuildProvenance other)

```
public BuildProvenance.Builder mergeFrom(BuildProvenance other)
```

**Parameter**

**Name**

**Description**

`other`

`[BuildProvenance](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### mergeSourceProvenance(Source value)

```
public BuildProvenance.Builder mergeSourceProvenance(Source value)
```

Details of the Source input to the build.

`.grafeas.v1.Source source_provenance = 10;`

**Parameter**

**Name**

**Description**

`value`

`[Source](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Source)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### mergeStartTime(Timestamp value)

```
public BuildProvenance.Builder mergeStartTime(Timestamp value)
```

Time at which execution of the build was started.

`.google.protobuf.Timestamp start_time = 6;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final BuildProvenance.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### putAllBuildOptions(Map<String,String> values)

```
public BuildProvenance.Builder putAllBuildOptions(Map<String,String> values)
```

Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.

`map<string, string> build_options = 12;`

**Parameter**

**Name**

**Description**

`values`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### putBuildOptions(String key, String value)

```
public BuildProvenance.Builder putBuildOptions(String key, String value)
```

Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.

`map<string, string> build_options = 12;`

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

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### removeBuildOptions(String key)

```
public BuildProvenance.Builder removeBuildOptions(String key)
```

Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.

`map<string, string> build_options = 12;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### removeBuiltArtifacts(int index)

```
public BuildProvenance.Builder removeBuiltArtifacts(int index)
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### removeCommands(int index)

```
public BuildProvenance.Builder removeCommands(int index)
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### setBuilderVersion(String value)

```
public BuildProvenance.Builder setBuilderVersion(String value)
```

Version string of the builder at the time this build was executed.

`string builder_version = 13;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The builderVersion to set.

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### setBuilderVersionBytes(ByteString value)

```
public BuildProvenance.Builder setBuilderVersionBytes(ByteString value)
```

Version string of the builder at the time this build was executed.

`string builder_version = 13;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for builderVersion to set.

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### setBuiltArtifacts(int index, Artifact value)

```
public BuildProvenance.Builder setBuiltArtifacts(int index, Artifact value)
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Artifact](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Artifact)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### setBuiltArtifacts(int index, Artifact.Builder builderForValue)

```
public BuildProvenance.Builder setBuiltArtifacts(int index, Artifact.Builder builderForValue)
```

Output of the build.

`repeated .grafeas.v1.Artifact built_artifacts = 4;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Artifact.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Artifact.Builder)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### setCommands(int index, Command value)

```
public BuildProvenance.Builder setCommands(int index, Command value)
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[Command](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Command)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### setCommands(int index, Command.Builder builderForValue)

```
public BuildProvenance.Builder setCommands(int index, Command.Builder builderForValue)
```

Commands requested by the build.

`repeated .grafeas.v1.Command commands = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[Command.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Command.Builder)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### setCreateTime(Timestamp value)

```
public BuildProvenance.Builder setCreateTime(Timestamp value)
```

Time at which the build was created.

`.google.protobuf.Timestamp create_time = 5;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### setCreateTime(Timestamp.Builder builderForValue)

```
public BuildProvenance.Builder setCreateTime(Timestamp.Builder builderForValue)
```

Time at which the build was created.

`.google.protobuf.Timestamp create_time = 5;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### setCreator(String value)

```
public BuildProvenance.Builder setCreator(String value)
```

E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time.

`string creator = 8;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The creator to set.

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### setCreatorBytes(ByteString value)

```
public BuildProvenance.Builder setCreatorBytes(ByteString value)
```

E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time.

`string creator = 8;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for creator to set.

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### setEndTime(Timestamp value)

```
public BuildProvenance.Builder setEndTime(Timestamp value)
```

Time at which execution of the build was finished.

`.google.protobuf.Timestamp end_time = 7;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### setEndTime(Timestamp.Builder builderForValue)

```
public BuildProvenance.Builder setEndTime(Timestamp.Builder builderForValue)
```

Time at which execution of the build was finished.

`.google.protobuf.Timestamp end_time = 7;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public BuildProvenance.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setId(String value)

```
public BuildProvenance.Builder setId(String value)
```

Required. Unique identifier of the build.

`string id = 1;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The id to set.

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### setIdBytes(ByteString value)

```
public BuildProvenance.Builder setIdBytes(ByteString value)
```

Required. Unique identifier of the build.

`string id = 1;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for id to set.

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### setLogsUri(String value)

```
public BuildProvenance.Builder setLogsUri(String value)
```

URI where any logs for this provenance were written.

`string logs_uri = 9;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The logsUri to set.

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### setLogsUriBytes(ByteString value)

```
public BuildProvenance.Builder setLogsUriBytes(ByteString value)
```

URI where any logs for this provenance were written.

`string logs_uri = 9;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for logsUri to set.

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### setProjectId(String value)

```
public BuildProvenance.Builder setProjectId(String value)
```

ID of the project.

`string project_id = 2;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The projectId to set.

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### setProjectIdBytes(ByteString value)

```
public BuildProvenance.Builder setProjectIdBytes(ByteString value)
```

ID of the project.

`string project_id = 2;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for projectId to set.

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public BuildProvenance.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setSourceProvenance(Source value)

```
public BuildProvenance.Builder setSourceProvenance(Source value)
```

Details of the Source input to the build.

`.grafeas.v1.Source source_provenance = 10;`

**Parameter**

**Name**

**Description**

`value`

`[Source](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Source)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### setSourceProvenance(Source.Builder builderForValue)

```
public BuildProvenance.Builder setSourceProvenance(Source.Builder builderForValue)
```

Details of the Source input to the build.

`.grafeas.v1.Source source_provenance = 10;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Source.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.Source.Builder)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### setStartTime(Timestamp value)

```
public BuildProvenance.Builder setStartTime(Timestamp value)
```

Time at which execution of the build was started.

`.google.protobuf.Timestamp start_time = 6;`

**Parameter**

**Name**

**Description**

`value`

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### setStartTime(Timestamp.Builder builderForValue)

```
public BuildProvenance.Builder setStartTime(Timestamp.Builder builderForValue)
```

Time at which execution of the build was started.

`.google.protobuf.Timestamp start_time = 6;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.Builder.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

### setTriggerId(String value)

```
public BuildProvenance.Builder setTriggerId(String value)
```

Trigger identifier if the build was triggered automatically; empty if not.

`string trigger_id = 11;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The triggerId to set.

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### setTriggerIdBytes(ByteString value)

```
public BuildProvenance.Builder setTriggerIdBytes(ByteString value)
```

Trigger identifier if the build was triggered automatically; empty if not.

`string trigger_id = 11;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for triggerId to set.

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

This builder for chaining.

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final BuildProvenance.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[BuildProvenance.Builder](/java/docs/reference/grafeas/2.14.0/io.grafeas.v1.BuildProvenance.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
