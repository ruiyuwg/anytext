Creates a logstore.

## Usage notes

Before you run this Log Service CLI command, make sure that the following conditions are met:

-   Log Service is activated. For more information, see [How do I get started with Simple Log Service?](/help/en/sls/faq-3#section-1ne-yts-fl5)
    
-   Log Service CLI is installed and configured. For more information, see [Install Simple Log Service CLI](/help/en/sls/developer-reference/install-log-service-cli#task-2082420) and [Configure Simple Log Service CLI](/help/en/sls/developer-reference/configure-log-service-cli#task-2085812).
    
-   A project is created in Log Service. For more information, see [create\_project](/help/en/sls/developer-reference/create-project#task-2083422).
    

## Command syntax

```
aliyunlog log create_logstore --project_name=<value> --logstore_name=<value> [--ttl=<value>] [--shard_count=<value>] [--enable_tracking=<value>] [--append_meta=<value>] [--auto_split=<value>] [--max_split_shard=<value>] [--preserve_storage=<value>] [--encrypt_conf=<value>] [--telemetry_type=<value>] [--hot_ttl=<value>] [--mode=<value>] [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>] [--profile=<value>]
```

## Command parameters

The following table describes the required parameters of this command and the parameters that are specific to this command.

**Parameter**

**Type**

**Required**

**Example**

**Description**

\--project\_name

String

Yes

aliyun-test-project

The name of the project. The project in Simple Log Service is used to isolate the resources of different users and control access to specific resources. For more information, see [Manage a project](/help/en/sls/manage-a-project/#title-ick-61g-1mf).

\--logstore\_name

String

Yes

logstore-a

The name of the logstore. The name must be globally unique. You cannot change the name after you create the project.

The name must meet the following requirements:

-   Can contain lowercase letters, digits, hyphens (-), and underscores (\_).
    
-   Must start with a lowercase letter and end with a lowercase letter or a digit.
    
-   Must be 3 to 63 characters in length.
    

\--ttl

Integer

No

30

The data retention period. Unit: days. Valid values: 1 to 3650. If you set this parameter to 3650, data is permanently stored. If the specified retention period elapses, log data is deleted.

The data retention period specified by the **ttl** parameter is the sum of the following time values:

-   The data retention period for the hot storage tier, which is specified by the **hot\_ttl** parameter
    
-   The data retention period for the Infrequent Access (IA) storage tier, which is specified by the **infrequent\_access\_ttl** parameter
    
-   The data retention period for the Archive storage tier
    

\--shard\_count

Integer

No

2

The number of shards. Valid values: 1 to 10. For more information, see [MD5 value range](/help/en/sls/shard#title-fny-biw-060).

\--enable\_tracking

Boolean

No

true

Specifies whether to enable the web tracking feature. Valid values:

-   true
    
-   false (default)
    

\--append\_meta

Boolean

No

false

Specifies whether to record public IP addresses. Valid values:

-   true
    
-   false (default)
    

\--auto\_split

Boolean

No

true

Specifies whether to enable automatic sharding. Valid values:

-   true (default)
    
-   false
    

\--max\_split\_shard

Integer

No

64

The maximum number of shards into which existing shards can be automatically split. Valid values: 1 to 256. If you set \--auto\_split to true, you must specify this parameter.

\--encrypt\_conf

String

No

None

The data structure of the encryption configuration.

For more information, see [EncryptConf](/help/en/sls/developer-reference/api-sls-2020-12-30-struct-encryptconf).

\--telemetry\_type

String

No

None

The type of the observable data. Valid values:

-   None (default): logs
    
-   Metrics: metrics
    

**Important**

This parameter cannot be modified after it is created.

\--hot\_ttl

Integer

No

60

The data retention period for the hot storage tier. Unit: days. The minimum value is 7, and the maximum value cannot exceed the **ttl** parameter. If you set this parameter to -1, all data is stored in the hot storage tier.

After the data retention period that is specified for the hot storage tier elapses, the data is moved to the IA storage tier. For more information about the storage tiers and movements of data between storage tiers, see [Configure intelligent tiered storage](/help/en/sls/data-tiered-storage-overview).

-   Data in the hot storage tier must be stored for at least seven days before the data can be moved to the IA storage tier. Data in the IA storage tier must be stored for at least 30 days before the data can be moved to the Archive storage tier.
    
-   Data in the hot storage tier must be stored for at least 30 days before the data can be moved to the Archive storage tier.
    

\--mode

String

No

standard

The type of the logstore. Simple Log Service provides **Standard** logstores and **Query** logstores. Valid values:

-   standard (default): Standard logstore. This type of logstore supports the log analysis feature and is suitable for scenarios such as real-time monitoring and interactive analysis. You can use this type of logstore to build a comprehensive observability system.
    
-   query: Query logstore. This type of logstore supports high-performance query operations. The index traffic fee of a Query logstore is approximately half that of a **Standard** logstore. Query logstores do not support SELECT statements. Query logstores are suitable for scenarios in which the amount of data is large, the data retention period is long, or log analysis is not required. Data retention periods of weeks or months are considered long.
    

For more information, see [Appendix: logstore comparison by type](/help/en/sls/manage-a-logstore#8a47f43a2a4i4).

For more information about the global parameters of this command, see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Command examples

-   Use the default account to create a logstore named logstore-a.
    
    -   Command
        
        ```
        aliyunlog log create_logstore --project_name="aliyun-test-project" --logstore_name="logstore-a"
        ```
        
    -   Output
        
        If the command is successfully run, no responses are returned. You can run the following command to query the details of the logstore.
        
        ```
        aliyunlog log get_logstore --project_name="aliyun-test-project" --logstore_name="logstore-a" --format-output=json
        ```
        
-   Use the account named test to create a logstore named logstore-b.
    
    -   Command
        
        ```
        aliyunlog log create_logstore --project_name="aliyun-test-project" --logstore_name="logstore-b" --client-name="test"
        ```
        
    -   Output
        
        If the command is successfully run, no responses are returned. You can run the following command to query the details of the logstore:
        
        ```
        aliyunlog log get_logstore --project_name="aliyun-test-project" --logstore_name="logstore-b"  --client-name="test" --format-output=json
        ```
        
        Sample responses:
        
        ```
        {
          "appendMeta": false,
          "archiveSeconds": 0,
          "autoSplit": true,
          "createTime": 1719280391,
          "enable_tracking": false,
          "lastModifyTime": 1719282255,
          "logstoreName": "logstore-b",
          "maxSplitShard": 64,
          "mode": "standard",
          "productType": "",
          "resourceQuota": {
            "storage": {
              "preserved": -1,
              "used": 0
            }
          },
          "shardCount": 5,
          "telemetryType": "",
          "ttl": 30
        }
        ```
        

## References

-   If the response that is returned by Simple Log Service contains error information after you call an API operation, the call fails. You can handle errors based on the error codes that are returned when API calls fail. For more information, see [Error codes](/help/en/sls/developer-reference/error-codes#reference-ypb-rtq-12b).
    
-   Simple Log Service is also compatible with Alibaba Cloud SDKs. For more information, see [Simple Log Service\_SDK Center\_Alibaba Cloud OpenAPI Explorer](https://api.alibabacloud.com/api-tools/sdk/Sls?version=2020-12-30&language=python-tea&tab=primer-doc).
    
-   For more information about the API operation that corresponds to this command, see [CreateLogStore](/help/en/sls/developer-reference/api-sls-2020-12-30-createlogstore).
    
-   Log Service provides the sample code that is used to manage logstores by using Log Service SDK for Java and Log Service SDK for Python. For more information, see [Manage logstores by using Log Service SDK for Java](/help/en/sls/developer-reference/use-log-service-sdk-for-java-to-manage-a-logstore#task-2264635) and [Use Simple Log Service SDK for Python to manage logstores](/help/en/sls/developer-reference/use-log-service-sdk-for-python-to-manage-logstores#task-2278420).
