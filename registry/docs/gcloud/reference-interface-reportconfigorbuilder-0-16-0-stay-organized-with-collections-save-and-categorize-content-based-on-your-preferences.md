-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ReportConfigOrBuilder (0.16.0) Stay organized with collections Save and categorize content based on your preferences.

0.72.0 (latest) 0.70.0 0.68.0 0.67.0 0.65.0 0.63.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.55.0 0.53.0 0.52.0 0.49.0 0.48.0 0.47.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface ReportConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

Labels as key value pairs

`map<string, string> labels = 10;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Output only. \[Output only\] Create time stamp

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. \[Output only\] Create time stamp

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getCsvOptions()

```
public abstract CSVOptions getCsvOptions()
```

Options for CSV formatted reports.

`.google.cloud.storageinsights.v1.CSVOptions csv_options = 6;`

**Returns**

**Type**

**Description**

`[CSVOptions](/java/docs/reference/google-cloud-storageinsights/0.16.0/com.google.cloud.storageinsights.v1.CSVOptions)`

The csvOptions.

### getCsvOptionsOrBuilder()

```
public abstract CSVOptionsOrBuilder getCsvOptionsOrBuilder()
```

Options for CSV formatted reports.

`.google.cloud.storageinsights.v1.CSVOptions csv_options = 6;`

**Returns**

**Type**

**Description**

`[CSVOptionsOrBuilder](/java/docs/reference/google-cloud-storageinsights/0.16.0/com.google.cloud.storageinsights.v1.CSVOptionsOrBuilder)`

### getDisplayName()

```
public abstract String getDisplayName()
```

User provided display name which can be empty and limited to 256 characters that is editable.

`string display_name = 11;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The displayName.

### getDisplayNameBytes()

```
public abstract ByteString getDisplayNameBytes()
```

User provided display name which can be empty and limited to 256 characters that is editable.

`string display_name = 11;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for displayName.

### getFrequencyOptions()

```
public abstract FrequencyOptions getFrequencyOptions()
```

The frequency of report generation.

`.google.cloud.storageinsights.v1.FrequencyOptions frequency_options = 5;`

**Returns**

**Type**

**Description**

`[FrequencyOptions](/java/docs/reference/google-cloud-storageinsights/0.16.0/com.google.cloud.storageinsights.v1.FrequencyOptions)`

The frequencyOptions.

### getFrequencyOptionsOrBuilder()

```
public abstract FrequencyOptionsOrBuilder getFrequencyOptionsOrBuilder()
```

The frequency of report generation.

`.google.cloud.storageinsights.v1.FrequencyOptions frequency_options = 5;`

**Returns**

**Type**

**Description**

`[FrequencyOptionsOrBuilder](/java/docs/reference/google-cloud-storageinsights/0.16.0/com.google.cloud.storageinsights.v1.FrequencyOptionsOrBuilder)`

### getLabels() (deprecated)

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-storageinsights/0.16.0/com.google.cloud.storageinsights.v1.ReportConfigOrBuilder#com_google_cloud_storageinsights_v1_ReportConfigOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

Labels as key value pairs

`map<string, string> labels = 10;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

Labels as key value pairs

`map<string, string> labels = 10;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

Labels as key value pairs

`map<string, string> labels = 10;`

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
public abstract String getLabelsOrThrow(String key)
```

Labels as key value pairs

`map<string, string> labels = 10;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getName()

```
public abstract String getName()
```

name of resource. It will be of form projects/<project>/locations/<location>/reportConfigs/<report-config-id>.

`string name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

name of resource. It will be of form projects/<project>/locations/<location>/reportConfigs/<report-config-id>.

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getObjectMetadataReportOptions()

```
public abstract ObjectMetadataReportOptions getObjectMetadataReportOptions()
```

Report for exporting object metadata.

`.google.cloud.storageinsights.v1.ObjectMetadataReportOptions object_metadata_report_options = 8;`

**Returns**

**Type**

**Description**

`[ObjectMetadataReportOptions](/java/docs/reference/google-cloud-storageinsights/0.16.0/com.google.cloud.storageinsights.v1.ObjectMetadataReportOptions)`

The objectMetadataReportOptions.

### getObjectMetadataReportOptionsOrBuilder()

```
public abstract ObjectMetadataReportOptionsOrBuilder getObjectMetadataReportOptionsOrBuilder()
```

Report for exporting object metadata.

`.google.cloud.storageinsights.v1.ObjectMetadataReportOptions object_metadata_report_options = 8;`

**Returns**

**Type**

**Description**

`[ObjectMetadataReportOptionsOrBuilder](/java/docs/reference/google-cloud-storageinsights/0.16.0/com.google.cloud.storageinsights.v1.ObjectMetadataReportOptionsOrBuilder)`

### getParquetOptions()

```
public abstract ParquetOptions getParquetOptions()
```

Options for Parquet formatted reports.

`.google.cloud.storageinsights.v1.ParquetOptions parquet_options = 7;`

**Returns**

**Type**

**Description**

`[ParquetOptions](/java/docs/reference/google-cloud-storageinsights/0.16.0/com.google.cloud.storageinsights.v1.ParquetOptions)`

The parquetOptions.

### getParquetOptionsOrBuilder()

```
public abstract ParquetOptionsOrBuilder getParquetOptionsOrBuilder()
```

Options for Parquet formatted reports.

`.google.cloud.storageinsights.v1.ParquetOptions parquet_options = 7;`

**Returns**

**Type**

**Description**

`[ParquetOptionsOrBuilder](/java/docs/reference/google-cloud-storageinsights/0.16.0/com.google.cloud.storageinsights.v1.ParquetOptionsOrBuilder)`

### getReportFormatCase()

```
public abstract ReportConfig.ReportFormatCase getReportFormatCase()
```

**Returns**

**Type**

**Description**

`[ReportConfig.ReportFormatCase](/java/docs/reference/google-cloud-storageinsights/0.16.0/com.google.cloud.storageinsights.v1.ReportConfig.ReportFormatCase)`

### getReportKindCase()

```
public abstract ReportConfig.ReportKindCase getReportKindCase()
```

**Returns**

**Type**

**Description**

`[ReportConfig.ReportKindCase](/java/docs/reference/google-cloud-storageinsights/0.16.0/com.google.cloud.storageinsights.v1.ReportConfig.ReportKindCase)`

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Output only. \[Output only\] Update time stamp

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. \[Output only\] Update time stamp

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. \[Output only\] Create time stamp

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasCsvOptions()

```
public abstract boolean hasCsvOptions()
```

Options for CSV formatted reports.

`.google.cloud.storageinsights.v1.CSVOptions csv_options = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the csvOptions field is set.

### hasFrequencyOptions()

```
public abstract boolean hasFrequencyOptions()
```

The frequency of report generation.

`.google.cloud.storageinsights.v1.FrequencyOptions frequency_options = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the frequencyOptions field is set.

### hasObjectMetadataReportOptions()

```
public abstract boolean hasObjectMetadataReportOptions()
```

Report for exporting object metadata.

`.google.cloud.storageinsights.v1.ObjectMetadataReportOptions object_metadata_report_options = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the objectMetadataReportOptions field is set.

### hasParquetOptions()

```
public abstract boolean hasParquetOptions()
```

Options for Parquet formatted reports.

`.google.cloud.storageinsights.v1.ParquetOptions parquet_options = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the parquetOptions field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Output only. \[Output only\] Update time stamp

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
