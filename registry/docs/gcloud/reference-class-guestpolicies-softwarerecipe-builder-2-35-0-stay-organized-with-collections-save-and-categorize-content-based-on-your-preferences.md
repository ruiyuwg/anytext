-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GuestPolicies.SoftwareRecipe.Builder (2.35.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.6 2.4.3 2.3.2

```
public static final class GuestPolicies.SoftwareRecipe.Builder extends GeneratedMessageV3.Builder<GuestPolicies.SoftwareRecipe.Builder> implements GuestPolicies.SoftwareRecipeOrBuilder
```

A software recipe is a set of instructions for installing and configuring a piece of software. It consists of a set of artifacts that are downloaded, and a set of steps that install, configure, and/or update the software.

Recipes support installing and updating software from artifacts in the following formats: Zip archive, Tar archive, Windows MSI, Debian package, and RPM package.

Additionally, recipes support executing a script (either defined in a file or directly in this api) in bash, sh, cmd, and powershell.

Updating a software recipe

If a recipe is assigned to an instance and there is a recipe with the same name but a lower version already installed and the assigned state of the recipe is `UPDATED`, then the recipe is updated to the new version.

Script Working Directories

Each script or execution step is run in its own temporary directory which is deleted after completing the step.

Protobuf type `google.cloud.osconfig.v1beta.SoftwareRecipe`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> GuestPolicies.SoftwareRecipe.Builder

## Implements

[GuestPolicies.SoftwareRecipeOrBuilder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipeOrBuilder)

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

### addAllArtifacts(Iterable<? extends GuestPolicies.SoftwareRecipe.Artifact> values)

```
public GuestPolicies.SoftwareRecipe.Builder addAllArtifacts(Iterable<? extends GuestPolicies.SoftwareRecipe.Artifact> values)
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Artifact>`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### addAllInstallSteps(Iterable<? extends GuestPolicies.SoftwareRecipe.Step> values)

```
public GuestPolicies.SoftwareRecipe.Builder addAllInstallSteps(Iterable<? extends GuestPolicies.SoftwareRecipe.Step> values)
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step>`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### addAllUpdateSteps(Iterable<? extends GuestPolicies.SoftwareRecipe.Step> values)

```
public GuestPolicies.SoftwareRecipe.Builder addAllUpdateSteps(Iterable<? extends GuestPolicies.SoftwareRecipe.Step> values)
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step>`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### addArtifacts(GuestPolicies.SoftwareRecipe.Artifact value)

```
public GuestPolicies.SoftwareRecipe.Builder addArtifacts(GuestPolicies.SoftwareRecipe.Artifact value)
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Parameter**

**Name**

**Description**

`value`

`[GuestPolicies.SoftwareRecipe.Artifact](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Artifact)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### addArtifacts(GuestPolicies.SoftwareRecipe.Artifact.Builder builderForValue)

```
public GuestPolicies.SoftwareRecipe.Builder addArtifacts(GuestPolicies.SoftwareRecipe.Artifact.Builder builderForValue)
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[GuestPolicies.SoftwareRecipe.Artifact.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Artifact.Builder)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### addArtifacts(int index, GuestPolicies.SoftwareRecipe.Artifact value)

```
public GuestPolicies.SoftwareRecipe.Builder addArtifacts(int index, GuestPolicies.SoftwareRecipe.Artifact value)
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[GuestPolicies.SoftwareRecipe.Artifact](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Artifact)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### addArtifacts(int index, GuestPolicies.SoftwareRecipe.Artifact.Builder builderForValue)

```
public GuestPolicies.SoftwareRecipe.Builder addArtifacts(int index, GuestPolicies.SoftwareRecipe.Artifact.Builder builderForValue)
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[GuestPolicies.SoftwareRecipe.Artifact.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Artifact.Builder)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### addArtifactsBuilder()

```
public GuestPolicies.SoftwareRecipe.Artifact.Builder addArtifactsBuilder()
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Artifact.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Artifact.Builder)`

### addArtifactsBuilder(int index)

```
public GuestPolicies.SoftwareRecipe.Artifact.Builder addArtifactsBuilder(int index)
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Artifact.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Artifact.Builder)`

### addInstallSteps(GuestPolicies.SoftwareRecipe.Step value)

```
public GuestPolicies.SoftwareRecipe.Builder addInstallSteps(GuestPolicies.SoftwareRecipe.Step value)
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Parameter**

**Name**

**Description**

`value`

`[GuestPolicies.SoftwareRecipe.Step](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### addInstallSteps(GuestPolicies.SoftwareRecipe.Step.Builder builderForValue)

```
public GuestPolicies.SoftwareRecipe.Builder addInstallSteps(GuestPolicies.SoftwareRecipe.Step.Builder builderForValue)
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[GuestPolicies.SoftwareRecipe.Step.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step.Builder)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### addInstallSteps(int index, GuestPolicies.SoftwareRecipe.Step value)

```
public GuestPolicies.SoftwareRecipe.Builder addInstallSteps(int index, GuestPolicies.SoftwareRecipe.Step value)
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[GuestPolicies.SoftwareRecipe.Step](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### addInstallSteps(int index, GuestPolicies.SoftwareRecipe.Step.Builder builderForValue)

```
public GuestPolicies.SoftwareRecipe.Builder addInstallSteps(int index, GuestPolicies.SoftwareRecipe.Step.Builder builderForValue)
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[GuestPolicies.SoftwareRecipe.Step.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step.Builder)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### addInstallStepsBuilder()

```
public GuestPolicies.SoftwareRecipe.Step.Builder addInstallStepsBuilder()
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Step.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step.Builder)`

### addInstallStepsBuilder(int index)

```
public GuestPolicies.SoftwareRecipe.Step.Builder addInstallStepsBuilder(int index)
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Step.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step.Builder)`

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public GuestPolicies.SoftwareRecipe.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### addUpdateSteps(GuestPolicies.SoftwareRecipe.Step value)

```
public GuestPolicies.SoftwareRecipe.Builder addUpdateSteps(GuestPolicies.SoftwareRecipe.Step value)
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Parameter**

**Name**

**Description**

`value`

`[GuestPolicies.SoftwareRecipe.Step](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### addUpdateSteps(GuestPolicies.SoftwareRecipe.Step.Builder builderForValue)

```
public GuestPolicies.SoftwareRecipe.Builder addUpdateSteps(GuestPolicies.SoftwareRecipe.Step.Builder builderForValue)
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[GuestPolicies.SoftwareRecipe.Step.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step.Builder)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### addUpdateSteps(int index, GuestPolicies.SoftwareRecipe.Step value)

```
public GuestPolicies.SoftwareRecipe.Builder addUpdateSteps(int index, GuestPolicies.SoftwareRecipe.Step value)
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[GuestPolicies.SoftwareRecipe.Step](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### addUpdateSteps(int index, GuestPolicies.SoftwareRecipe.Step.Builder builderForValue)

```
public GuestPolicies.SoftwareRecipe.Builder addUpdateSteps(int index, GuestPolicies.SoftwareRecipe.Step.Builder builderForValue)
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[GuestPolicies.SoftwareRecipe.Step.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step.Builder)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### addUpdateStepsBuilder()

```
public GuestPolicies.SoftwareRecipe.Step.Builder addUpdateStepsBuilder()
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Step.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step.Builder)`

### addUpdateStepsBuilder(int index)

```
public GuestPolicies.SoftwareRecipe.Step.Builder addUpdateStepsBuilder(int index)
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Step.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step.Builder)`

### build()

```
public GuestPolicies.SoftwareRecipe build()
```

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe)`

### buildPartial()

```
public GuestPolicies.SoftwareRecipe buildPartial()
```

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe)`

### clear()

```
public GuestPolicies.SoftwareRecipe.Builder clear()
```

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearArtifacts()

```
public GuestPolicies.SoftwareRecipe.Builder clearArtifacts()
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### clearDesiredState()

```
public GuestPolicies.SoftwareRecipe.Builder clearDesiredState()
```

Default is INSTALLED. The desired state the agent should maintain for this recipe.

INSTALLED: The software recipe is installed on the instance but won't be updated to new versions. UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version, if a higher version of the recipe is assigned to this instance. REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected.

`.google.cloud.osconfig.v1beta.DesiredState desired_state = 6;`

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

This builder for chaining.

### clearField(Descriptors.FieldDescriptor field)

```
public GuestPolicies.SoftwareRecipe.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearInstallSteps()

```
public GuestPolicies.SoftwareRecipe.Builder clearInstallSteps()
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### clearName()

```
public GuestPolicies.SoftwareRecipe.Builder clearName()
```

Required. Unique identifier for the recipe. Only one recipe with a given name is installed on an instance.

Names are also used to identify resources which helps to determine whether guest policies have conflicts. This means that requests to create multiple recipes with the same name and version are rejected since they could potentially have conflicting assignments.

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

This builder for chaining.

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public GuestPolicies.SoftwareRecipe.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearUpdateSteps()

```
public GuestPolicies.SoftwareRecipe.Builder clearUpdateSteps()
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### clearVersion()

```
public GuestPolicies.SoftwareRecipe.Builder clearVersion()
```

The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78).

`string version = 2;`

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

This builder for chaining.

### clone()

```
public GuestPolicies.SoftwareRecipe.Builder clone()
```

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getArtifacts(int index)

```
public GuestPolicies.SoftwareRecipe.Artifact getArtifacts(int index)
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Artifact](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Artifact)`

### getArtifactsBuilder(int index)

```
public GuestPolicies.SoftwareRecipe.Artifact.Builder getArtifactsBuilder(int index)
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Artifact.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Artifact.Builder)`

### getArtifactsBuilderList()

```
public List<GuestPolicies.SoftwareRecipe.Artifact.Builder> getArtifactsBuilderList()
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Artifact.Builder)>`

### getArtifactsCount()

```
public int getArtifactsCount()
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getArtifactsList()

```
public List<GuestPolicies.SoftwareRecipe.Artifact> getArtifactsList()
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Artifact](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Artifact)>`

### getArtifactsOrBuilder(int index)

```
public GuestPolicies.SoftwareRecipe.ArtifactOrBuilder getArtifactsOrBuilder(int index)
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.ArtifactOrBuilder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.ArtifactOrBuilder)`

### getArtifactsOrBuilderList()

```
public List<? extends GuestPolicies.SoftwareRecipe.ArtifactOrBuilder> getArtifactsOrBuilderList()
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.ArtifactOrBuilder>`

### getDefaultInstanceForType()

```
public GuestPolicies.SoftwareRecipe getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe)`

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

### getDesiredState()

```
public GuestPolicies.DesiredState getDesiredState()
```

Default is INSTALLED. The desired state the agent should maintain for this recipe.

INSTALLED: The software recipe is installed on the instance but won't be updated to new versions. UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version, if a higher version of the recipe is assigned to this instance. REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected.

`.google.cloud.osconfig.v1beta.DesiredState desired_state = 6;`

**Returns**

**Type**

**Description**

`[GuestPolicies.DesiredState](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.DesiredState)`

The desiredState.

### getDesiredStateValue()

```
public int getDesiredStateValue()
```

Default is INSTALLED. The desired state the agent should maintain for this recipe.

INSTALLED: The software recipe is installed on the instance but won't be updated to new versions. UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version, if a higher version of the recipe is assigned to this instance. REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected.

`.google.cloud.osconfig.v1beta.DesiredState desired_state = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for desiredState.

### getInstallSteps(int index)

```
public GuestPolicies.SoftwareRecipe.Step getInstallSteps(int index)
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Step](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step)`

### getInstallStepsBuilder(int index)

```
public GuestPolicies.SoftwareRecipe.Step.Builder getInstallStepsBuilder(int index)
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Step.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step.Builder)`

### getInstallStepsBuilderList()

```
public List<GuestPolicies.SoftwareRecipe.Step.Builder> getInstallStepsBuilderList()
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step.Builder)>`

### getInstallStepsCount()

```
public int getInstallStepsCount()
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getInstallStepsList()

```
public List<GuestPolicies.SoftwareRecipe.Step> getInstallStepsList()
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Step](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step)>`

### getInstallStepsOrBuilder(int index)

```
public GuestPolicies.SoftwareRecipe.StepOrBuilder getInstallStepsOrBuilder(int index)
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.StepOrBuilder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.StepOrBuilder)`

### getInstallStepsOrBuilderList()

```
public List<? extends GuestPolicies.SoftwareRecipe.StepOrBuilder> getInstallStepsOrBuilderList()
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.StepOrBuilder>`

### getName()

```
public String getName()
```

Required. Unique identifier for the recipe. Only one recipe with a given name is installed on an instance.

Names are also used to identify resources which helps to determine whether guest policies have conflicts. This means that requests to create multiple recipes with the same name and version are rejected since they could potentially have conflicting assignments.

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

Required. Unique identifier for the recipe. Only one recipe with a given name is installed on an instance.

Names are also used to identify resources which helps to determine whether guest policies have conflicts. This means that requests to create multiple recipes with the same name and version are rejected since they could potentially have conflicting assignments.

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getUpdateSteps(int index)

```
public GuestPolicies.SoftwareRecipe.Step getUpdateSteps(int index)
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Step](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step)`

### getUpdateStepsBuilder(int index)

```
public GuestPolicies.SoftwareRecipe.Step.Builder getUpdateStepsBuilder(int index)
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Step.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step.Builder)`

### getUpdateStepsBuilderList()

```
public List<GuestPolicies.SoftwareRecipe.Step.Builder> getUpdateStepsBuilderList()
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step.Builder)>`

### getUpdateStepsCount()

```
public int getUpdateStepsCount()
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getUpdateStepsList()

```
public List<GuestPolicies.SoftwareRecipe.Step> getUpdateStepsList()
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Step](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step)>`

### getUpdateStepsOrBuilder(int index)

```
public GuestPolicies.SoftwareRecipe.StepOrBuilder getUpdateStepsOrBuilder(int index)
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.StepOrBuilder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.StepOrBuilder)`

### getUpdateStepsOrBuilderList()

```
public List<? extends GuestPolicies.SoftwareRecipe.StepOrBuilder> getUpdateStepsOrBuilderList()
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.StepOrBuilder>`

### getVersion()

```
public String getVersion()
```

The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78).

`string version = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The version.

### getVersionBytes()

```
public ByteString getVersionBytes()
```

The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78).

`string version = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for version.

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

### mergeFrom(GuestPolicies.SoftwareRecipe other)

```
public GuestPolicies.SoftwareRecipe.Builder mergeFrom(GuestPolicies.SoftwareRecipe other)
```

**Parameter**

**Name**

**Description**

`other`

`[GuestPolicies.SoftwareRecipe](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public GuestPolicies.SoftwareRecipe.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public GuestPolicies.SoftwareRecipe.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final GuestPolicies.SoftwareRecipe.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### removeArtifacts(int index)

```
public GuestPolicies.SoftwareRecipe.Builder removeArtifacts(int index)
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### removeInstallSteps(int index)

```
public GuestPolicies.SoftwareRecipe.Builder removeInstallSteps(int index)
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### removeUpdateSteps(int index)

```
public GuestPolicies.SoftwareRecipe.Builder removeUpdateSteps(int index)
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### setArtifacts(int index, GuestPolicies.SoftwareRecipe.Artifact value)

```
public GuestPolicies.SoftwareRecipe.Builder setArtifacts(int index, GuestPolicies.SoftwareRecipe.Artifact value)
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[GuestPolicies.SoftwareRecipe.Artifact](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Artifact)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### setArtifacts(int index, GuestPolicies.SoftwareRecipe.Artifact.Builder builderForValue)

```
public GuestPolicies.SoftwareRecipe.Builder setArtifacts(int index, GuestPolicies.SoftwareRecipe.Artifact.Builder builderForValue)
```

Resources available to be used in the steps in the recipe.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Artifact artifacts = 3;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[GuestPolicies.SoftwareRecipe.Artifact.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Artifact.Builder)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### setDesiredState(GuestPolicies.DesiredState value)

```
public GuestPolicies.SoftwareRecipe.Builder setDesiredState(GuestPolicies.DesiredState value)
```

Default is INSTALLED. The desired state the agent should maintain for this recipe.

INSTALLED: The software recipe is installed on the instance but won't be updated to new versions. UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version, if a higher version of the recipe is assigned to this instance. REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected.

`.google.cloud.osconfig.v1beta.DesiredState desired_state = 6;`

**Parameter**

**Name**

**Description**

`value`

`[GuestPolicies.DesiredState](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.DesiredState)`  

The desiredState to set.

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

This builder for chaining.

### setDesiredStateValue(int value)

```
public GuestPolicies.SoftwareRecipe.Builder setDesiredStateValue(int value)
```

Default is INSTALLED. The desired state the agent should maintain for this recipe.

INSTALLED: The software recipe is installed on the instance but won't be updated to new versions. UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version, if a higher version of the recipe is assigned to this instance. REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected.

`.google.cloud.osconfig.v1beta.DesiredState desired_state = 6;`

**Parameter**

**Name**

**Description**

`value`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The enum numeric value on the wire for desiredState to set.

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

This builder for chaining.

### setField(Descriptors.FieldDescriptor field, Object value)

```
public GuestPolicies.SoftwareRecipe.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setInstallSteps(int index, GuestPolicies.SoftwareRecipe.Step value)

```
public GuestPolicies.SoftwareRecipe.Builder setInstallSteps(int index, GuestPolicies.SoftwareRecipe.Step value)
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[GuestPolicies.SoftwareRecipe.Step](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### setInstallSteps(int index, GuestPolicies.SoftwareRecipe.Step.Builder builderForValue)

```
public GuestPolicies.SoftwareRecipe.Builder setInstallSteps(int index, GuestPolicies.SoftwareRecipe.Step.Builder builderForValue)
```

Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step install_steps = 4;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[GuestPolicies.SoftwareRecipe.Step.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step.Builder)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### setName(String value)

```
public GuestPolicies.SoftwareRecipe.Builder setName(String value)
```

Required. Unique identifier for the recipe. Only one recipe with a given name is installed on an instance.

Names are also used to identify resources which helps to determine whether guest policies have conflicts. This means that requests to create multiple recipes with the same name and version are rejected since they could potentially have conflicting assignments.

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

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

This builder for chaining.

### setNameBytes(ByteString value)

```
public GuestPolicies.SoftwareRecipe.Builder setNameBytes(ByteString value)
```

Required. Unique identifier for the recipe. Only one recipe with a given name is installed on an instance.

Names are also used to identify resources which helps to determine whether guest policies have conflicts. This means that requests to create multiple recipes with the same name and version are rejected since they could potentially have conflicting assignments.

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

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public GuestPolicies.SoftwareRecipe.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final GuestPolicies.SoftwareRecipe.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setUpdateSteps(int index, GuestPolicies.SoftwareRecipe.Step value)

```
public GuestPolicies.SoftwareRecipe.Builder setUpdateSteps(int index, GuestPolicies.SoftwareRecipe.Step value)
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[GuestPolicies.SoftwareRecipe.Step](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### setUpdateSteps(int index, GuestPolicies.SoftwareRecipe.Step.Builder builderForValue)

```
public GuestPolicies.SoftwareRecipe.Builder setUpdateSteps(int index, GuestPolicies.SoftwareRecipe.Step.Builder builderForValue)
```

Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.

`repeated .google.cloud.osconfig.v1beta.SoftwareRecipe.Step update_steps = 5;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[GuestPolicies.SoftwareRecipe.Step.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Step.Builder)`  

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

### setVersion(String value)

```
public GuestPolicies.SoftwareRecipe.Builder setVersion(String value)
```

The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78).

`string version = 2;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The version to set.

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

This builder for chaining.

### setVersionBytes(ByteString value)

```
public GuestPolicies.SoftwareRecipe.Builder setVersionBytes(ByteString value)
```

The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78).

`string version = 2;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for version to set.

**Returns**

**Type**

**Description**

`[GuestPolicies.SoftwareRecipe.Builder](/java/docs/reference/google-cloud-os-config/2.35.0/com.google.cloud.osconfig.v1beta.GuestPolicies.SoftwareRecipe.Builder)`

This builder for chaining.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
