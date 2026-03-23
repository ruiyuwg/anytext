-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ObjectMetadataReportOptionsOrBuilder (0.13.0) Stay organized with collections Save and categorize content based on your preferences.

0.72.0 (latest) 0.70.0 0.68.0 0.67.0 0.65.0 0.63.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.55.0 0.53.0 0.52.0 0.49.0 0.48.0 0.47.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface ObjectMetadataReportOptionsOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDestinationOptionsCase()

```
public abstract ObjectMetadataReportOptions.DestinationOptionsCase getDestinationOptionsCase()
```

**Returns**

**Type**

**Description**

`[ObjectMetadataReportOptions.DestinationOptionsCase](/java/docs/reference/google-cloud-storageinsights/0.13.0/com.google.cloud.storageinsights.v1.ObjectMetadataReportOptions.DestinationOptionsCase)`

### getFilterCase()

```
public abstract ObjectMetadataReportOptions.FilterCase getFilterCase()
```

**Returns**

**Type**

**Description**

`[ObjectMetadataReportOptions.FilterCase](/java/docs/reference/google-cloud-storageinsights/0.13.0/com.google.cloud.storageinsights.v1.ObjectMetadataReportOptions.FilterCase)`

### getMetadataFields(int index)

```
public abstract String getMetadataFields(int index)
```

Metadata fields to be included in the report.

`repeated string metadata_fields = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The metadataFields at the given index.

### getMetadataFieldsBytes(int index)

```
public abstract ByteString getMetadataFieldsBytes(int index)
```

Metadata fields to be included in the report.

`repeated string metadata_fields = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the metadataFields at the given index.

### getMetadataFieldsCount()

```
public abstract int getMetadataFieldsCount()
```

Metadata fields to be included in the report.

`repeated string metadata_fields = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of metadataFields.

### getMetadataFieldsList()

```
public abstract List<String> getMetadataFieldsList()
```

Metadata fields to be included in the report.

`repeated string metadata_fields = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the metadataFields.

### getStorageDestinationOptions()

```
public abstract CloudStorageDestinationOptions getStorageDestinationOptions()
```

Cloud Storage as the storage system.

`.google.cloud.storageinsights.v1.CloudStorageDestinationOptions storage_destination_options = 3;`

**Returns**

**Type**

**Description**

`[CloudStorageDestinationOptions](/java/docs/reference/google-cloud-storageinsights/0.13.0/com.google.cloud.storageinsights.v1.CloudStorageDestinationOptions)`

The storageDestinationOptions.

### getStorageDestinationOptionsOrBuilder()

```
public abstract CloudStorageDestinationOptionsOrBuilder getStorageDestinationOptionsOrBuilder()
```

Cloud Storage as the storage system.

`.google.cloud.storageinsights.v1.CloudStorageDestinationOptions storage_destination_options = 3;`

**Returns**

**Type**

**Description**

`[CloudStorageDestinationOptionsOrBuilder](/java/docs/reference/google-cloud-storageinsights/0.13.0/com.google.cloud.storageinsights.v1.CloudStorageDestinationOptionsOrBuilder)`

### getStorageFilters()

```
public abstract CloudStorageFilters getStorageFilters()
```

Cloud Storage as the storage system.

`.google.cloud.storageinsights.v1.CloudStorageFilters storage_filters = 2;`

**Returns**

**Type**

**Description**

`[CloudStorageFilters](/java/docs/reference/google-cloud-storageinsights/0.13.0/com.google.cloud.storageinsights.v1.CloudStorageFilters)`

The storageFilters.

### getStorageFiltersOrBuilder()

```
public abstract CloudStorageFiltersOrBuilder getStorageFiltersOrBuilder()
```

Cloud Storage as the storage system.

`.google.cloud.storageinsights.v1.CloudStorageFilters storage_filters = 2;`

**Returns**

**Type**

**Description**

`[CloudStorageFiltersOrBuilder](/java/docs/reference/google-cloud-storageinsights/0.13.0/com.google.cloud.storageinsights.v1.CloudStorageFiltersOrBuilder)`

### hasStorageDestinationOptions()

```
public abstract boolean hasStorageDestinationOptions()
```

Cloud Storage as the storage system.

`.google.cloud.storageinsights.v1.CloudStorageDestinationOptions storage_destination_options = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the storageDestinationOptions field is set.

### hasStorageFilters()

```
public abstract boolean hasStorageFilters()
```

Cloud Storage as the storage system.

`.google.cloud.storageinsights.v1.CloudStorageFilters storage_filters = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the storageFilters field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
