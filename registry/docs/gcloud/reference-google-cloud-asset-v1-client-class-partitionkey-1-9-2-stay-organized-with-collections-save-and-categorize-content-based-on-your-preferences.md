-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Asset V1 Client - Class PartitionKey (1.9.2) Stay organized with collections Save and categorize content based on your preferences.

2.3.3 (latest) 2.3.2 2.2.3 2.1.3 2.0.1 1.16.4 1.14.1 1.13.2 1.12.2 1.11.3 1.10.2 1.9.2

Reference documentation and code samples for the Google Cloud Asset V1 Client class PartitionKey.

This enum is used to determine the partition key column when exporting assets to BigQuery partitioned table(s). Note that, if the partition key is a timestamp column, the actual partition is based on its date value (expressed in UTC. see details in [https://cloud.google.com/bigquery/docs/partitioned-tables#date\_timestamp\_partitioned\_tables](https://cloud.google.com/bigquery/docs/partitioned-tables#date_timestamp_partitioned_tables)).

Protobuf type `google.cloud.asset.v1.PartitionSpec.PartitionKey`

## Methods

### name

**Parameter**

**Name**

**Description**

`value`

`mixed`  

### value

**Parameter**

**Name**

**Description**

`name`

`mixed`  

## Constants

### PARTITION\_KEY\_UNSPECIFIED

```
Value: 0
```

Unspecified partition key. If used, it means using non-partitioned table.

Generated from protobuf enum `PARTITION_KEY_UNSPECIFIED = 0;`

### READ\_TIME

```
Value: 1
```

The time when the snapshot is taken. If specified as partition key, the result table(s) is partitoned by the additional timestamp column, readTime. If \[read\_time\] in ExportAssetsRequest is specified, the readTime column's value will be the same as it. Otherwise, its value will be the current time that is used to take the snapshot.

Generated from protobuf enum `READ_TIME = 1;`

### REQUEST\_TIME

```
Value: 2
```

The time when the request is received and started to be processed. If specified as partition key, the result table(s) is partitoned by the requestTime column, an additional timestamp column representing when the request was received.

Generated from protobuf enum `REQUEST_TIME = 2;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
