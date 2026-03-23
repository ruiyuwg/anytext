Creates a consumer group for a specified Logstore.

## Request syntax

```
aliyunlog log create_consumer_group --project=<value> --logstore=<value> --consumer_group=<value> --timeout=<value> [--in_order=<value>] [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the create\_consumer\_group command.

**Parameter**

**Type**

**Required**

**Example**

**Description**

\--project

String

Yes

aliyun-test-project

The name of the project.

\--logstore

String

Yes

logstore-a

The name of the Logstore.

\--consumer\_group

String

Yes

consumer-group-1

The name of the consumer group. The name must be unique in a project.

\--timeout

Integer

Yes

300

The timeout period. Unit: seconds.

The consumer sends heartbeats to Log Service at a regular interval to establish a connection. If Log Service does not receive the heartbeats sent by the consumer within the timeout period, Log Service releases the resources that are occupied by the consumer.

\--in\_order

Boolean

No

true

Specifies whether to consume data in sequence from a shard. Valid values:

-   true: The data in a shard is consumed in sequence. If the shard is split, the data in the original shard is consumed first. Then, the data in the new shards is consumed at the same time.
    
-   false (default value): The data in a shard is randomly consumed.
    

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Use the default account to create a consumer group for a Logstore named logstore-a. Sample requests:
    
    ```
    aliyunlog log create_consumer_group --project="aliyun-test-project" --logstore="logstore-a" --consumer_group="consumer-group-1" --timeout="300" --in_order=true
    ```
    
-   Query the consumer group created. Sample requests:
    
    ```
    aliyunlog log list_consumer_group --project="aliyun-test-project" --logstore="logstore-a"
    ```
    
    Sample responses:
    
    ```
    [
      {
        "name": "consumer-group-1",
        "order": true,
        "timeout": 300
      }
    ]
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-createconsumergroup#api-detail-45).

## API reference

[CreateConsumerGroup](/help/en/sls/developer-reference/api-sls-2020-12-30-createconsumergroup)
