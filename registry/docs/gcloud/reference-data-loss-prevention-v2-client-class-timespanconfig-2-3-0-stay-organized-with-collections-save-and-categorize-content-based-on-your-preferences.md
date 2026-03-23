-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Data Loss Prevention V2 Client - Class TimespanConfig (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

2.9.2 (latest) 2.9.1 2.8.1 2.7.0 2.6.1 2.4.1 2.3.0 2.2.3 2.1.0 2.0.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.1 1.14.0 1.13.2 1.12.0 1.11.0 1.10.2 1.9.0 1.8.6

Reference documentation and code samples for the Data Loss Prevention V2 Client class TimespanConfig.

Configuration of the timespan of the items to include in scanning.

Currently only supported when inspecting Cloud Storage and BigQuery.

Generated from protobuf message `google.privacy.dlp.v2.StorageConfig.TimespanConfig`

## Namespace

Google \\ Cloud \\ Dlp \\ V2 \\ StorageConfig

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ start_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Exclude files, tables, or rows older than this value. If not set, no lower time limit is applied.

`↳ end_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Exclude files, tables, or rows newer than this value. If not set, no upper time limit is applied.

`↳ timestamp_field`

`[Google\Cloud\Dlp\V2\FieldId](/php/docs/reference/cloud-dlp/2.3.0/V2.FieldId)`  

Specification of the field containing the timestamp of scanned items. Used for data sources like Datastore and BigQuery. **For BigQuery** If this value is not specified and the table was modified between the given start and end times, the entire table will be scanned. If this value is specified, then rows are filtered based on the given start and end times. Rows with a `NULL` value in the provided BigQuery column are skipped. Valid data types of the provided BigQuery column are: `INTEGER`, `DATE`, `TIMESTAMP`, and `DATETIME`. If your BigQuery table is [partitioned at ingestion time](https://cloud.google.com/bigquery/docs/partitioned-tables#ingestion_time), you can use any of the following pseudo-columns as your timestamp field. When used with Cloud DLP, these pseudo-column names are case sensitive. - `_PARTITIONTIME` - `_PARTITIONDATE` - `_PARTITION_LOAD_TIME` **For Datastore** If this value is specified, then entities are filtered based on the given start and end times. If an entity does not contain the provided timestamp property or contains empty or invalid values, then it is included. Valid data types of the provided timestamp property are: `TIMESTAMP`. See the [known issue](https://cloud.google.com/sensitive-data-protection/docs/known-issues#bq-timespan) related to this operation.

`↳ enable_auto_population_of_timespan_config`

`bool`  

When the job is started by a JobTrigger we will automatically figure out a valid start\_time to avoid scanning files that have not been modified since the last time the JobTrigger executed. This will be based on the time of the execution of the last run of the JobTrigger or the timespan end\_time used in the last run of the JobTrigger. **For BigQuery** Inspect jobs triggered by automatic population will scan data that is at least three hours old when the job starts. This is because streaming buffer rows are not read during inspection and reading up to the current timestamp will result in skipped rows. See the [known issue](https://cloud.google.com/sensitive-data-protection/docs/known-issues#recently-streamed-data) related to this operation.

### getStartTime

Exclude files, tables, or rows older than this value.

If not set, no lower time limit is applied.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasStartTime

### clearStartTime

### setStartTime

Exclude files, tables, or rows older than this value.

If not set, no lower time limit is applied.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getEndTime

Exclude files, tables, or rows newer than this value.

If not set, no upper time limit is applied.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasEndTime

### clearEndTime

### setEndTime

Exclude files, tables, or rows newer than this value.

If not set, no upper time limit is applied.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getTimestampField

Specification of the field containing the timestamp of scanned items.

Used for data sources like Datastore and BigQuery. **For BigQuery** If this value is not specified and the table was modified between the given start and end times, the entire table will be scanned. If this value is specified, then rows are filtered based on the given start and end times. Rows with a `NULL` value in the provided BigQuery column are skipped. Valid data types of the provided BigQuery column are: `INTEGER`, `DATE`, `TIMESTAMP`, and `DATETIME`. If your BigQuery table is [partitioned at ingestion time](https://cloud.google.com/bigquery/docs/partitioned-tables#ingestion_time), you can use any of the following pseudo-columns as your timestamp field. When used with Cloud DLP, these pseudo-column names are case sensitive.

-   `_PARTITIONTIME`
-   `_PARTITIONDATE`
-   `_PARTITION_LOAD_TIME` **For Datastore** If this value is specified, then entities are filtered based on the given start and end times. If an entity does not contain the provided timestamp property or contains empty or invalid values, then it is included. Valid data types of the provided timestamp property are: `TIMESTAMP`. See the [known issue](https://cloud.google.com/sensitive-data-protection/docs/known-issues#bq-timespan) related to this operation.

**Returns**

**Type**

**Description**

`[Google\Cloud\Dlp\V2\FieldId](/php/docs/reference/cloud-dlp/2.3.0/V2.FieldId)|null`

### hasTimestampField

### clearTimestampField

### setTimestampField

Specification of the field containing the timestamp of scanned items.

Used for data sources like Datastore and BigQuery. **For BigQuery** If this value is not specified and the table was modified between the given start and end times, the entire table will be scanned. If this value is specified, then rows are filtered based on the given start and end times. Rows with a `NULL` value in the provided BigQuery column are skipped. Valid data types of the provided BigQuery column are: `INTEGER`, `DATE`, `TIMESTAMP`, and `DATETIME`. If your BigQuery table is [partitioned at ingestion time](https://cloud.google.com/bigquery/docs/partitioned-tables#ingestion_time), you can use any of the following pseudo-columns as your timestamp field. When used with Cloud DLP, these pseudo-column names are case sensitive.

-   `_PARTITIONTIME`
-   `_PARTITIONDATE`
-   `_PARTITION_LOAD_TIME` **For Datastore** If this value is specified, then entities are filtered based on the given start and end times. If an entity does not contain the provided timestamp property or contains empty or invalid values, then it is included. Valid data types of the provided timestamp property are: `TIMESTAMP`. See the [known issue](https://cloud.google.com/sensitive-data-protection/docs/known-issues#bq-timespan) related to this operation.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Dlp\V2\FieldId](/php/docs/reference/cloud-dlp/2.3.0/V2.FieldId)`  

**Returns**

**Type**

**Description**

`$this`

### getEnableAutoPopulationOfTimespanConfig

When the job is started by a JobTrigger we will automatically figure out a valid start\_time to avoid scanning files that have not been modified since the last time the JobTrigger executed. This will be based on the time of the execution of the last run of the JobTrigger or the timespan end\_time used in the last run of the JobTrigger.

**For BigQuery** Inspect jobs triggered by automatic population will scan data that is at least three hours old when the job starts. This is because streaming buffer rows are not read during inspection and reading up to the current timestamp will result in skipped rows. See the [known issue](https://cloud.google.com/sensitive-data-protection/docs/known-issues#recently-streamed-data) related to this operation.

**Returns**

**Type**

**Description**

`bool`

### setEnableAutoPopulationOfTimespanConfig

When the job is started by a JobTrigger we will automatically figure out a valid start\_time to avoid scanning files that have not been modified since the last time the JobTrigger executed. This will be based on the time of the execution of the last run of the JobTrigger or the timespan end\_time used in the last run of the JobTrigger.

**For BigQuery** Inspect jobs triggered by automatic population will scan data that is at least three hours old when the job starts. This is because streaming buffer rows are not read during inspection and reading up to the current timestamp will result in skipped rows. See the [known issue](https://cloud.google.com/sensitive-data-protection/docs/known-issues#recently-streamed-data) related to this operation.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
