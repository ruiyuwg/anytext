-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TimeSeriesQuery.Builder (2.46.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.6 2.4.0 2.3.0 2.2.6

```
public static final class TimeSeriesQuery.Builder extends GeneratedMessageV3.Builder<TimeSeriesQuery.Builder> implements TimeSeriesQueryOrBuilder
```

TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API.

Protobuf type `google.monitoring.dashboard.v1.TimeSeriesQuery`

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [AbstractMessageLite.Builder<MessageType,BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessageLite.Builder.html) \> [AbstractMessage.Builder<BuilderType>](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html) \> [GeneratedMessageV3.Builder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html) \> TimeSeriesQuery.Builder

## Implements

[TimeSeriesQueryOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQueryOrBuilder)

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
public TimeSeriesQuery.Builder addRepeatedField(Descriptors.FieldDescriptor field, Object value)
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

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.addRepeatedField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_addRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### build()

```
public TimeSeriesQuery build()
```

**Returns**

**Type**

**Description**

`[TimeSeriesQuery](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery)`

### buildPartial()

```
public TimeSeriesQuery buildPartial()
```

**Returns**

**Type**

**Description**

`[TimeSeriesQuery](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery)`

### clear()

```
public TimeSeriesQuery.Builder clear()
```

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clear()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clear__)

### clearField(Descriptors.FieldDescriptor field)

```
public TimeSeriesQuery.Builder clearField(Descriptors.FieldDescriptor field)
```

**Parameter**

**Name**

**Description**

`field`

`[FieldDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.FieldDescriptor.html)`  

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearField(Descriptors.FieldDescriptor field)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearField_com_google_protobuf_Descriptors_FieldDescriptor_)

### clearOneof(Descriptors.OneofDescriptor oneof)

```
public TimeSeriesQuery.Builder clearOneof(Descriptors.OneofDescriptor oneof)
```

**Parameter**

**Name**

**Description**

`oneof`

`[OneofDescriptor](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Descriptors.OneofDescriptor.html)`  

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clearOneof(Descriptors.OneofDescriptor oneof)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clearOneof_com_google_protobuf_Descriptors_OneofDescriptor_)

### clearOutputFullDuration()

```
public TimeSeriesQuery.Builder clearOutputFullDuration()
```

Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value.

\*Note: This could override the configured alignment period except for the cases where a series of data points are expected, like

-   XyChart
-   Scorecard's spark chart

`bool output_full_duration = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

This builder for chaining.

### clearPrometheusQuery()

```
public TimeSeriesQuery.Builder clearPrometheusQuery()
```

A query used to fetch time series with PromQL.

`string prometheus_query = 6;`

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

This builder for chaining.

### clearSource()

```
public TimeSeriesQuery.Builder clearSource()
```

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

### clearTimeSeriesFilter()

```
public TimeSeriesQuery.Builder clearTimeSeriesFilter()
```

Filter parameters to fetch time series.

`.google.monitoring.dashboard.v1.TimeSeriesFilter time_series_filter = 1;`

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

### clearTimeSeriesFilterRatio()

```
public TimeSeriesQuery.Builder clearTimeSeriesFilterRatio()
```

Parameters to fetch a ratio between two time series filters.

`.google.monitoring.dashboard.v1.TimeSeriesFilterRatio time_series_filter_ratio = 2;`

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

### clearTimeSeriesQueryLanguage()

```
public TimeSeriesQuery.Builder clearTimeSeriesQueryLanguage()
```

A query used to fetch time series with MQL.

`string time_series_query_language = 3;`

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

This builder for chaining.

### clearUnitOverride()

```
public TimeSeriesQuery.Builder clearUnitOverride()
```

The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`.

`string unit_override = 5;`

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

This builder for chaining.

### clone()

```
public TimeSeriesQuery.Builder clone()
```

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.clone()](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_clone__)

### getDefaultInstanceForType()

```
public TimeSeriesQuery getDefaultInstanceForType()
```

**Returns**

**Type**

**Description**

`[TimeSeriesQuery](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery)`

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

### getOutputFullDuration()

```
public boolean getOutputFullDuration()
```

Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value.

\*Note: This could override the configured alignment period except for the cases where a series of data points are expected, like

-   XyChart
-   Scorecard's spark chart

`bool output_full_duration = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The outputFullDuration.

### getPrometheusQuery()

```
public String getPrometheusQuery()
```

A query used to fetch time series with PromQL.

`string prometheus_query = 6;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The prometheusQuery.

### getPrometheusQueryBytes()

```
public ByteString getPrometheusQueryBytes()
```

A query used to fetch time series with PromQL.

`string prometheus_query = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for prometheusQuery.

### getSourceCase()

```
public TimeSeriesQuery.SourceCase getSourceCase()
```

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.SourceCase](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.SourceCase)`

### getTimeSeriesFilter()

```
public TimeSeriesFilter getTimeSeriesFilter()
```

Filter parameters to fetch time series.

`.google.monitoring.dashboard.v1.TimeSeriesFilter time_series_filter = 1;`

**Returns**

**Type**

**Description**

`[TimeSeriesFilter](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesFilter)`

The timeSeriesFilter.

### getTimeSeriesFilterBuilder()

```
public TimeSeriesFilter.Builder getTimeSeriesFilterBuilder()
```

Filter parameters to fetch time series.

`.google.monitoring.dashboard.v1.TimeSeriesFilter time_series_filter = 1;`

**Returns**

**Type**

**Description**

`[TimeSeriesFilter.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesFilter.Builder)`

### getTimeSeriesFilterOrBuilder()

```
public TimeSeriesFilterOrBuilder getTimeSeriesFilterOrBuilder()
```

Filter parameters to fetch time series.

`.google.monitoring.dashboard.v1.TimeSeriesFilter time_series_filter = 1;`

**Returns**

**Type**

**Description**

`[TimeSeriesFilterOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesFilterOrBuilder)`

### getTimeSeriesFilterRatio()

```
public TimeSeriesFilterRatio getTimeSeriesFilterRatio()
```

Parameters to fetch a ratio between two time series filters.

`.google.monitoring.dashboard.v1.TimeSeriesFilterRatio time_series_filter_ratio = 2;`

**Returns**

**Type**

**Description**

`[TimeSeriesFilterRatio](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesFilterRatio)`

The timeSeriesFilterRatio.

### getTimeSeriesFilterRatioBuilder()

```
public TimeSeriesFilterRatio.Builder getTimeSeriesFilterRatioBuilder()
```

Parameters to fetch a ratio between two time series filters.

`.google.monitoring.dashboard.v1.TimeSeriesFilterRatio time_series_filter_ratio = 2;`

**Returns**

**Type**

**Description**

`[TimeSeriesFilterRatio.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesFilterRatio.Builder)`

### getTimeSeriesFilterRatioOrBuilder()

```
public TimeSeriesFilterRatioOrBuilder getTimeSeriesFilterRatioOrBuilder()
```

Parameters to fetch a ratio between two time series filters.

`.google.monitoring.dashboard.v1.TimeSeriesFilterRatio time_series_filter_ratio = 2;`

**Returns**

**Type**

**Description**

`[TimeSeriesFilterRatioOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesFilterRatioOrBuilder)`

### getTimeSeriesQueryLanguage()

```
public String getTimeSeriesQueryLanguage()
```

A query used to fetch time series with MQL.

`string time_series_query_language = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The timeSeriesQueryLanguage.

### getTimeSeriesQueryLanguageBytes()

```
public ByteString getTimeSeriesQueryLanguageBytes()
```

A query used to fetch time series with MQL.

`string time_series_query_language = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for timeSeriesQueryLanguage.

### getUnitOverride()

```
public String getUnitOverride()
```

The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`.

`string unit_override = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The unitOverride.

### getUnitOverrideBytes()

```
public ByteString getUnitOverrideBytes()
```

The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`.

`string unit_override = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for unitOverride.

### hasPrometheusQuery()

```
public boolean hasPrometheusQuery()
```

A query used to fetch time series with PromQL.

`string prometheus_query = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the prometheusQuery field is set.

### hasTimeSeriesFilter()

```
public boolean hasTimeSeriesFilter()
```

Filter parameters to fetch time series.

`.google.monitoring.dashboard.v1.TimeSeriesFilter time_series_filter = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timeSeriesFilter field is set.

### hasTimeSeriesFilterRatio()

```
public boolean hasTimeSeriesFilterRatio()
```

Parameters to fetch a ratio between two time series filters.

`.google.monitoring.dashboard.v1.TimeSeriesFilterRatio time_series_filter_ratio = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timeSeriesFilterRatio field is set.

### hasTimeSeriesQueryLanguage()

```
public boolean hasTimeSeriesQueryLanguage()
```

A query used to fetch time series with MQL.

`string time_series_query_language = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timeSeriesQueryLanguage field is set.

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

### mergeFrom(TimeSeriesQuery other)

```
public TimeSeriesQuery.Builder mergeFrom(TimeSeriesQuery other)
```

**Parameter**

**Name**

**Description**

`other`

`[TimeSeriesQuery](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery)`  

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

### mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)

```
public TimeSeriesQuery.Builder mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)
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

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(CodedInputStream input, ExtensionRegistryLite extensionRegistry)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_CodedInputStream_com_google_protobuf_ExtensionRegistryLite_)

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### mergeFrom(Message other)

```
public TimeSeriesQuery.Builder mergeFrom(Message other)
```

**Parameter**

**Name**

**Description**

`other`

`[Message](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Message.html)`  

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

**Overrides**

[AbstractMessage.Builder<BuilderType>.mergeFrom(Message other)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.AbstractMessage.Builder.html#com_google_protobuf_AbstractMessage_Builder_mergeFrom_com_google_protobuf_Message_)

### mergeTimeSeriesFilter(TimeSeriesFilter value)

```
public TimeSeriesQuery.Builder mergeTimeSeriesFilter(TimeSeriesFilter value)
```

Filter parameters to fetch time series.

`.google.monitoring.dashboard.v1.TimeSeriesFilter time_series_filter = 1;`

**Parameter**

**Name**

**Description**

`value`

`[TimeSeriesFilter](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesFilter)`  

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

### mergeTimeSeriesFilterRatio(TimeSeriesFilterRatio value)

```
public TimeSeriesQuery.Builder mergeTimeSeriesFilterRatio(TimeSeriesFilterRatio value)
```

Parameters to fetch a ratio between two time series filters.

`.google.monitoring.dashboard.v1.TimeSeriesFilterRatio time_series_filter_ratio = 2;`

**Parameter**

**Name**

**Description**

`value`

`[TimeSeriesFilterRatio](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesFilterRatio)`  

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

### mergeUnknownFields(UnknownFieldSet unknownFields)

```
public final TimeSeriesQuery.Builder mergeUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.mergeUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_mergeUnknownFields_com_google_protobuf_UnknownFieldSet_)

### setField(Descriptors.FieldDescriptor field, Object value)

```
public TimeSeriesQuery.Builder setField(Descriptors.FieldDescriptor field, Object value)
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

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setField(Descriptors.FieldDescriptor field, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setField_com_google_protobuf_Descriptors_FieldDescriptor_java_lang_Object_)

### setOutputFullDuration(boolean value)

```
public TimeSeriesQuery.Builder setOutputFullDuration(boolean value)
```

Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value.

\*Note: This could override the configured alignment period except for the cases where a series of data points are expected, like

-   XyChart
-   Scorecard's spark chart

`bool output_full_duration = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`value`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The outputFullDuration to set.

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

This builder for chaining.

### setPrometheusQuery(String value)

```
public TimeSeriesQuery.Builder setPrometheusQuery(String value)
```

A query used to fetch time series with PromQL.

`string prometheus_query = 6;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The prometheusQuery to set.

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

This builder for chaining.

### setPrometheusQueryBytes(ByteString value)

```
public TimeSeriesQuery.Builder setPrometheusQueryBytes(ByteString value)
```

A query used to fetch time series with PromQL.

`string prometheus_query = 6;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for prometheusQuery to set.

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

This builder for chaining.

### setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)

```
public TimeSeriesQuery.Builder setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)
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

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setRepeatedField(Descriptors.FieldDescriptor field, int index, Object value)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setRepeatedField_com_google_protobuf_Descriptors_FieldDescriptor_int_java_lang_Object_)

### setTimeSeriesFilter(TimeSeriesFilter value)

```
public TimeSeriesQuery.Builder setTimeSeriesFilter(TimeSeriesFilter value)
```

Filter parameters to fetch time series.

`.google.monitoring.dashboard.v1.TimeSeriesFilter time_series_filter = 1;`

**Parameter**

**Name**

**Description**

`value`

`[TimeSeriesFilter](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesFilter)`  

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

### setTimeSeriesFilter(TimeSeriesFilter.Builder builderForValue)

```
public TimeSeriesQuery.Builder setTimeSeriesFilter(TimeSeriesFilter.Builder builderForValue)
```

Filter parameters to fetch time series.

`.google.monitoring.dashboard.v1.TimeSeriesFilter time_series_filter = 1;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[TimeSeriesFilter.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesFilter.Builder)`  

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

### setTimeSeriesFilterRatio(TimeSeriesFilterRatio value)

```
public TimeSeriesQuery.Builder setTimeSeriesFilterRatio(TimeSeriesFilterRatio value)
```

Parameters to fetch a ratio between two time series filters.

`.google.monitoring.dashboard.v1.TimeSeriesFilterRatio time_series_filter_ratio = 2;`

**Parameter**

**Name**

**Description**

`value`

`[TimeSeriesFilterRatio](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesFilterRatio)`  

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

### setTimeSeriesFilterRatio(TimeSeriesFilterRatio.Builder builderForValue)

```
public TimeSeriesQuery.Builder setTimeSeriesFilterRatio(TimeSeriesFilterRatio.Builder builderForValue)
```

Parameters to fetch a ratio between two time series filters.

`.google.monitoring.dashboard.v1.TimeSeriesFilterRatio time_series_filter_ratio = 2;`

**Parameter**

**Name**

**Description**

`builderForValue`

`[TimeSeriesFilterRatio.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesFilterRatio.Builder)`  

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

### setTimeSeriesQueryLanguage(String value)

```
public TimeSeriesQuery.Builder setTimeSeriesQueryLanguage(String value)
```

A query used to fetch time series with MQL.

`string time_series_query_language = 3;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The timeSeriesQueryLanguage to set.

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

This builder for chaining.

### setTimeSeriesQueryLanguageBytes(ByteString value)

```
public TimeSeriesQuery.Builder setTimeSeriesQueryLanguageBytes(ByteString value)
```

A query used to fetch time series with MQL.

`string time_series_query_language = 3;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for timeSeriesQueryLanguage to set.

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

This builder for chaining.

### setUnitOverride(String value)

```
public TimeSeriesQuery.Builder setUnitOverride(String value)
```

The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`.

`string unit_override = 5;`

**Parameter**

**Name**

**Description**

`value`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

The unitOverride to set.

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

This builder for chaining.

### setUnitOverrideBytes(ByteString value)

```
public TimeSeriesQuery.Builder setUnitOverrideBytes(ByteString value)
```

The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in `MetricDescriptor`.

`string unit_override = 5;`

**Parameter**

**Name**

**Description**

`value`

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`  

The bytes for unitOverride to set.

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

This builder for chaining.

### setUnknownFields(UnknownFieldSet unknownFields)

```
public final TimeSeriesQuery.Builder setUnknownFields(UnknownFieldSet unknownFields)
```

**Parameter**

**Name**

**Description**

`unknownFields`

`[UnknownFieldSet](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.UnknownFieldSet.html)`  

**Returns**

**Type**

**Description**

`[TimeSeriesQuery.Builder](/java/docs/reference/google-cloud-monitoring-dashboard/2.46.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery.Builder)`

**Overrides**

[GeneratedMessageV3.Builder<BuilderType>.setUnknownFields(UnknownFieldSet unknownFields)](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.GeneratedMessageV3.Builder.html#com_google_protobuf_GeneratedMessageV3_Builder_setUnknownFields_com_google_protobuf_UnknownFieldSet_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
