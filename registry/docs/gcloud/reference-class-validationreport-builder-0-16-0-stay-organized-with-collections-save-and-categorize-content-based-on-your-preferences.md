-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ValidationReport.Builder (0.16.0) Stay organized with collections Save and categorize content based on your preferences.

0.69.0 (latest) 0.67.0 0.65.0 0.64.0 0.62.0 0.60.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.50.0 0.49.0 0.46.0 0.45.0 0.44.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static final class ValidationReport.Builder extends GeneratedMessageV3.Builder<ValidationReport.Builder> implements ValidationReportOrBuilder
```

A resource that aggregates errors across import job files.

Protobuf type `google.cloud.migrationcenter.v1.ValidationReport`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> ValidationReport.Builder

## Implements

[ValidationReportOrBuilder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReportOrBuilder)

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

### addAllFileValidations(Iterable<? extends FileValidationReport> values)

```
public ValidationReport.Builder addAllFileValidations(Iterable<? extends FileValidationReport> values)
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.migrationcenter.v1.FileValidationReport>`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### addAllJobErrors(Iterable<? extends ImportError> values)

```
public ValidationReport.Builder addAllJobErrors(Iterable<? extends ImportError> values)
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Parameter**

**Name**

**Description**

`values`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<? extends com.google.cloud.migrationcenter.v1.ImportError>`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### addFileValidations(FileValidationReport value)

```
public ValidationReport.Builder addFileValidations(FileValidationReport value)
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Parameter**

**Name**

**Description**

`value`

`[FileValidationReport](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.FileValidationReport)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### addFileValidations(FileValidationReport.Builder builderForValue)

```
public ValidationReport.Builder addFileValidations(FileValidationReport.Builder builderForValue)
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[FileValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.FileValidationReport.Builder)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### addFileValidations(int index, FileValidationReport value)

```
public ValidationReport.Builder addFileValidations(int index, FileValidationReport value)
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[FileValidationReport](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.FileValidationReport)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### addFileValidations(int index, FileValidationReport.Builder builderForValue)

```
public ValidationReport.Builder addFileValidations(int index, FileValidationReport.Builder builderForValue)
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[FileValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.FileValidationReport.Builder)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### addFileValidationsBuilder()

```
public FileValidationReport.Builder addFileValidationsBuilder()
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Returns**

**Type**

**Description**

`[FileValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.FileValidationReport.Builder)`

### addFileValidationsBuilder(int index)

```
public FileValidationReport.Builder addFileValidationsBuilder(int index)
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[FileValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.FileValidationReport.Builder)`

### addJobErrors(ImportError value)

```
public ValidationReport.Builder addJobErrors(ImportError value)
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Parameter**

**Name**

**Description**

`value`

`[ImportError](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ImportError)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### addJobErrors(ImportError.Builder builderForValue)

```
public ValidationReport.Builder addJobErrors(ImportError.Builder builderForValue)
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[ImportError.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ImportError.Builder)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### addJobErrors(int index, ImportError value)

```
public ValidationReport.Builder addJobErrors(int index, ImportError value)
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[ImportError](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ImportError)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### addJobErrors(int index, ImportError.Builder builderForValue)

```
public ValidationReport.Builder addJobErrors(int index, ImportError.Builder builderForValue)
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[ImportError.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ImportError.Builder)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### addJobErrorsBuilder()

```
public ImportError.Builder addJobErrorsBuilder()
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Returns**

**Type**

**Description**

`[ImportError.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ImportError.Builder)`

### addJobErrorsBuilder(int index)

```
public ImportError.Builder addJobErrorsBuilder(int index)
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ImportError.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ImportError.Builder)`

### addRepeatedField(Descriptors.FieldDescriptor field, Object value)

```
public ValidationReport.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public ValidationReport build()
```

**Returns**

**Type**

**Description**

`[ValidationReport](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport)`

### buildPartial()

```
public ValidationReport buildPartial()
```

**Returns**

**Type**

**Description**

`[ValidationReport](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport)`

### clear()

```
public ValidationReport.Builder clear()
```

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearField(Descriptors.FieldDescriptor field)

```
public ValidationReport.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearFileValidations()

```
public ValidationReport.Builder clearFileValidations()
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### clearJobErrors()

```
public ValidationReport.Builder clearJobErrors()
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public ValidationReport.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clone()

```
public ValidationReport.Builder clone()
```

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getDefaultInstanceForType()

```
public ValidationReport getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[ValidationReport](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport)`

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

### getFileValidations(int index)

```
public FileValidationReport getFileValidations(int index)
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[FileValidationReport](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.FileValidationReport)`

### getFileValidationsBuilder(int index)

```
public FileValidationReport.Builder getFileValidationsBuilder(int index)
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[FileValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.FileValidationReport.Builder)`

### getFileValidationsBuilderList()

```
public List<FileValidationReport.Builder> getFileValidationsBuilderList()
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.FileValidationReport.Builder)>`

### getFileValidationsCount()

```
public int getFileValidationsCount()
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getFileValidationsList()

```
public List<FileValidationReport> getFileValidationsList()
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[FileValidationReport](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.FileValidationReport)>`

### getFileValidationsOrBuilder(int index)

```
public FileValidationReportOrBuilder getFileValidationsOrBuilder(int index)
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[FileValidationReportOrBuilder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.FileValidationReportOrBuilder)`

### getFileValidationsOrBuilderList()

```
public List<? extends FileValidationReportOrBuilder> getFileValidationsOrBuilderList()
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.migrationcenter.v1.FileValidationReportOrBuilder>`

### getJobErrors(int index)

```
public ImportError getJobErrors(int index)
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ImportError](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ImportError)`

### getJobErrorsBuilder(int index)

```
public ImportError.Builder getJobErrorsBuilder(int index)
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ImportError.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ImportError.Builder)`

### getJobErrorsBuilderList()

```
public List<ImportError.Builder> getJobErrorsBuilderList()
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ImportError.Builder)>`

### getJobErrorsCount()

```
public int getJobErrorsCount()
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getJobErrorsList()

```
public List<ImportError> getJobErrorsList()
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ImportError](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ImportError)>`

### getJobErrorsOrBuilder(int index)

```
public ImportErrorOrBuilder getJobErrorsOrBuilder(int index)
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ImportErrorOrBuilder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ImportErrorOrBuilder)`

### getJobErrorsOrBuilderList()

```
public List<? extends ImportErrorOrBuilder> getJobErrorsOrBuilderList()
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.migrationcenter.v1.ImportErrorOrBuilder>`

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

### mergeFrom(ValidationReport other)

```
public ValidationReport.Builder mergeFrom(ValidationReport other)
```

**Parameter**

**Name**

**Description**

`other`

`[ValidationReport](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public ValidationReport.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public ValidationReport.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final ValidationReport.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### removeFileValidations(int index)

```
public ValidationReport.Builder removeFileValidations(int index)
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### removeJobErrors(int index)

```
public ValidationReport.Builder removeJobErrors(int index)
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### setField(Descriptors.FieldDescriptor field, Object value)

```
public ValidationReport.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setFileValidations(int index, FileValidationReport value)

```
public ValidationReport.Builder setFileValidations(int index, FileValidationReport value)
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[FileValidationReport](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.FileValidationReport)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### setFileValidations(int index, FileValidationReport.Builder builderForValue)

```
public ValidationReport.Builder setFileValidations(int index, FileValidationReport.Builder builderForValue)
```

List of errors found in files.

`repeated .google.cloud.migrationcenter.v1.FileValidationReport file_validations = 1;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[FileValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.FileValidationReport.Builder)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### setJobErrors(int index, ImportError value)

```
public ValidationReport.Builder setJobErrors(int index, ImportError value)
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`value`

`[ImportError](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ImportError)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### setJobErrors(int index, ImportError.Builder builderForValue)

```
public ValidationReport.Builder setJobErrors(int index, ImportError.Builder builderForValue)
```

List of job level errors.

`repeated .google.cloud.migrationcenter.v1.ImportError job_errors = 2;`

**Parameters**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`builderForValue`

`[ImportError.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ImportError.Builder)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public ValidationReport.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final ValidationReport.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[ValidationReport.Builder](/java/docs/reference/google-cloud-migrationcenter/0.16.0/com.google.cloud.migrationcenter.v1.ValidationReport.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
