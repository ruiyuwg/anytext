-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface BigQuerySourceOrBuilder (2.32.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public interface BigQuerySourceOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDataSchema()

```
public abstract String getDataSchema()
```

The schema to use when parsing the data from the source.

Supported values for product imports:

-   `product` (default): One JSON Product per line. Each product must have a valid Product.id.
-   `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc).
    
    Supported values for user events imports:
    
-   `user_event` (default): One JSON UserEvent per line.
    
-   `user_event_ga360`: The schema is available here: [https://support.google.com/analytics/answer/3437719](https://support.google.com/analytics/answer/3437719).
-   `user_event_ga4`: The schema is available here: [https://support.google.com/analytics/answer/7029846](https://support.google.com/analytics/answer/7029846).
    
    Supported values for autocomplete imports:
    
-   `suggestions` (default): One JSON completion suggestion per line.
    
-   `denylist`: One JSON deny suggestion per line.
-   `allowlist`: One JSON allow suggestion per line.

`string data_schema = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The dataSchema.

### getDataSchemaBytes()

```
public abstract ByteString getDataSchemaBytes()
```

The schema to use when parsing the data from the source.

Supported values for product imports:

-   `product` (default): One JSON Product per line. Each product must have a valid Product.id.
-   `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc).
    
    Supported values for user events imports:
    
-   `user_event` (default): One JSON UserEvent per line.
    
-   `user_event_ga360`: The schema is available here: [https://support.google.com/analytics/answer/3437719](https://support.google.com/analytics/answer/3437719).
-   `user_event_ga4`: The schema is available here: [https://support.google.com/analytics/answer/7029846](https://support.google.com/analytics/answer/7029846).
    
    Supported values for autocomplete imports:
    
-   `suggestions` (default): One JSON completion suggestion per line.
    
-   `denylist`: One JSON deny suggestion per line.
-   `allowlist`: One JSON allow suggestion per line.

`string data_schema = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for dataSchema.

### getDatasetId()

```
public abstract String getDatasetId()
```

Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters.

`string dataset_id = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The datasetId.

### getDatasetIdBytes()

```
public abstract ByteString getDatasetIdBytes()
```

Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters.

`string dataset_id = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for datasetId.

### getGcsStagingDir()

```
public abstract String getGcsStagingDir()
```

Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.

`string gcs_staging_dir = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The gcsStagingDir.

### getGcsStagingDirBytes()

```
public abstract ByteString getGcsStagingDirBytes()
```

Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.

`string gcs_staging_dir = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for gcsStagingDir.

### getPartitionCase()

```
public abstract BigQuerySource.PartitionCase getPartitionCase()
```

**Returns**

**Type**

**Description**

`[BigQuerySource.PartitionCase](/java/docs/reference/google-cloud-retail/2.32.0/com.google.cloud.retail.v2.BigQuerySource.PartitionCase)`

### getPartitionDate()

```
public abstract Date getPartitionDate()
```

BigQuery time partitioned table's \_PARTITIONDATE in YYYY-MM-DD format.

Only supported in ImportProductsRequest.

`.google.type.Date partition_date = 6;`

**Returns**

**Type**

**Description**

`com.google.type.Date`

The partitionDate.

### getPartitionDateOrBuilder()

```
public abstract DateOrBuilder getPartitionDateOrBuilder()
```

BigQuery time partitioned table's \_PARTITIONDATE in YYYY-MM-DD format.

Only supported in ImportProductsRequest.

`.google.type.Date partition_date = 6;`

**Returns**

**Type**

**Description**

`com.google.type.DateOrBuilder`

### getProjectId()

```
public abstract String getProjectId()
```

The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.

`string project_id = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The projectId.

### getProjectIdBytes()

```
public abstract ByteString getProjectIdBytes()
```

The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.

`string project_id = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for projectId.

### getTableId()

```
public abstract String getTableId()
```

Required. The BigQuery table to copy the data from with a length limit of 1,024 characters.

`string table_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The tableId.

### getTableIdBytes()

```
public abstract ByteString getTableIdBytes()
```

Required. The BigQuery table to copy the data from with a length limit of 1,024 characters.

`string table_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for tableId.

### hasPartitionDate()

```
public abstract boolean hasPartitionDate()
```

BigQuery time partitioned table's \_PARTITIONDATE in YYYY-MM-DD format.

Only supported in ImportProductsRequest.

`.google.type.Date partition_date = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the partitionDate field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
