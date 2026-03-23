Updates the configuration of a Logstore, including data retention, storage tiers, sharding, and tracking settings.

## Prerequisites

Before you begin, make sure that you have:

-   [Activated](/help/en/sls/faq-3#section-1ne-yts-fl5) Simple Log Service (SLS)
    
-   [Installed](/help/en/sls/developer-reference/install-log-service-cli#task-2082420) and [configured](/help/en/sls/developer-reference/configure-log-service-cli#task-2085812) the SLS CLI
    
-   Created a [project](/help/en/sls/developer-reference/create-project#task-2083422) and a [Logstore](/help/en/sls/developer-reference/create-logstore#task-2083422)
    

## Syntax

```
aliyunlog log update_logstore \
  --project_name=<value> \
  --logstore_name=<value> \
  [--ttl=<value>] \
  [--enable_tracking=<value>] \
  [--shard_count=<value>] \
  [--append_meta=<value>] \
  [--auto_split=<value>] \
  [--max_split_shard=<value>] \
  [--preserve_storage=<value>] \
  [--encrypt_conf=<value>] \
  [--hot_ttl=<value>] \
  [--mode=<value>] \
  [--telemetry_type=<value>] \
  [--infrequent_access_ttl=<value>]
```

For global parameters such as `--access-id`, `--access-key`, `--region-endpoint`, and `--format-output`, see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

`--project_name`

String

Yes

`aliyun-test-project`

The name of the project. Projects isolate resources and control access. For more information, see [Manage projects](/help/en/sls/manage-a-project/#title-ick-61g-1mf).

`--logstore_name`

String

Yes

`logstore-a`

The name of the Logstore. The name is immutable after creation and must be unique within the project. Naming rules: lowercase letters, digits, hyphens (`-`), and underscores (`_`); must start with a lowercase letter and end with a lowercase letter or digit; 3 to 63 characters.

`--ttl`

Integer

No

`30`

Total data retention period in days. Valid values: 1 to 3650. Set to `3650` for permanent storage. When the retention period elapses, SLS deletes the expired data. The value of `--ttl` equals the sum of `--hot_ttl`, `--infrequent_access_ttl`, and the Archive storage retention period.

`--shard_count`

Integer

No

`2`

The number of shards. This parameter is accepted by the CLI but silently ignored. To adjust the number of shards, use [SplitShard](/help/en/sls/developer-reference/api-sls-2020-12-30-splitshard) or [MergeShard](/help/en/sls/developer-reference/api-sls-2020-12-30-mergeshard). For more information, see [Shard range](/help/en/sls/manage-shards#title-fny-biw-060).

`--enable_tracking`

Boolean

No

`true`

Enable (`true`) or disable (`false`) WebTracking.

`--append_meta`

Boolean

No

`false`

Record (`true`) or skip (`false`) the public IP addresses of clients.

`--auto_split`

Boolean

No

`true`

Enable (`true`) or disable (`false`) automatic shard splitting.

`--max_split_shard`

Integer

No

`64`

Maximum number of shards that automatic splitting can create. Valid values: 1 to 256. Required when `--auto_split` is `true`.

`--encrypt_conf`

String

No

\--

Encryption configuration as a JSON string. For the data structure, see [EncryptConf](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-encryptconf).

`--telemetry_type`

String

No

`None`

The type of observable data stored in the Logstore. `None` (default): logs. `Metrics`: time-series data.

`--hot_ttl`

Integer

No

`7`

Retention period for the hot storage tier in days. Minimum: `7`. Maximum: the value of `--ttl`. Set to `-1` to keep all data in hot storage. After this period, data moves to the Infrequent Access (IA) tier. Storage tier transition rules: hot to IA requires at least 7 days in hot storage; IA to Archive requires at least 30 days in IA; hot to Archive (skipping IA) requires at least 30 days in hot storage. For more information, see [Configure intelligent tiered storage](/help/en/sls/data-tiered-storage-overview).

`--mode`

String

No

`standard`

The Logstore type. `standard` (default): Standard Logstore. Supports log analysis, real-time monitoring, and interactive analysis. You can use this type of Logstore to build a comprehensive observability system. `query` (CLI value: `lite`): Query Logstore. Optimized for high-performance queries at roughly half the index traffic cost. Does not support `SELECT` statements. Best for large datasets with long retention periods, or when log analysis is not required. For more information, see [Manage a Logstore](/help/en/sls/manage-a-logstore).

`--infrequent_access_ttl`

Integer

No

`30`

Retention period for the IA tier in days. Data must remain in the IA tier for at least 30 days before it can move to the Archive storage tier. For more information, see [Configure intelligent tiered storage](/help/en/sls/data-tiered-storage-overview).

**Important**

When you lower the `--ttl` value, SLS deletes all newly expired data within 1 hour. For example, changing retention from 5 days to 1 day causes SLS to delete the previous 4 days of log data within 1 hour. The storage usage shown on the Usage Details page of the SLS console updates the next day.

**Important**

The shard count cannot be modified through `update_logstore`. The CLI accepts the `--shard_count` parameter without error, but the value is silently ignored. To adjust the number of shards, use [SplitShard](/help/en/sls/developer-reference/api-sls-2020-12-30-splitshard) or [MergeShard](/help/en/sls/developer-reference/api-sls-2020-12-30-mergeshard).

## Examples

Set the data retention period to 30 days and enable web tracking for the `logstore-a` Logstore in the `aliyun-test-project` project:

```
aliyunlog log update_logstore \
  --project_name="aliyun-test-project" \
  --logstore_name="logstore-a" \
  --ttl=30 \
  --enable_tracking=true
```

A successful command returns no output. Run the following command to verify the update:

```
aliyunlog log get_logstore \
  --project_name="aliyun-test-project" \
  --logstore_name="logstore-a" \
  --format-output=json
```

Check that the `ttl` and `enable_tracking` fields in the JSON output match the values you set.

## References

-   [Error codes](/help/en/sls/developer-reference/error-codes) -- troubleshoot failed API calls
    
-   [UpdateLogStore API](/help/en/sls/developer-reference/api-sls-2020-12-30-updatelogstore) -- the underlying REST API for this command
    
-   [Manage a Logstore by using Java SDK](/help/en/sls/developer-reference/use-log-service-sdk-for-java-to-manage-a-logstore#task-2264635) and [Manage a Logstore by using Python SDK](/help/en/sls/developer-reference/use-log-service-sdk-for-python-to-manage-logstores#task-2278420) -- SDK alternatives
    
-   [Alibaba Cloud OpenAPI Explorer for SLS](https://api.alibabacloud.com/api-tools/sdk/Sls?version=2020-12-30&language=python-tea&tab=primer-doc) -- common SDK integration
