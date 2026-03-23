Modifies the information of a specified consumer group.

## Request syntax

```
aliyunlog log update_consumer_group --project=<value> --logstore=<value> --consumer_group=<value> [--timeout=<value>] [--in_order=<value>] [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>
```

## Request parameters

The following table describes the required and specific parameters of the update\_consumer\_group command.

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

The name of the consumer group.

\--timeout

Integer

No

360

The timeout period. Unit: seconds.

The consumer sends heartbeats to Log Service at a regular interval to establish a connection. If Log Service does not receive the heartbeats sent by the consumer within the timeout period, Log Service releases the resources that are occupied by the consumer.

\--in\_order

Boolean

No

true

Specifies whether to consume data in sequence from a shard. Valid values:

-   true: The data in a shard is consumed in sequence. If the shard is split, the data in the original shard is consumed first. Then, the data in the new shards is consumed at the same time.
    
-   false: The data in a shard is randomly consumed.
    

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to modify the timeout period of a consumer group named consumer-group-1.
    
    ```
    aliyunlog log update_consumer_group --project="aliyun-test-project" --logstore="logstore-a" --consumer_group="consumer-group-1" --timeout="360" --in_order=true
    ```
    
-   Sample responses
    
    After you run the command, no responses are returned. You can run the following command to query consumer groups.
    
    ```
    aliyunlog log list_consumer_group --project="aliyun-test-project" --logstore="logstore-a"
    ```
    
    Responses:
    
    ```
    [
      {
        "name": "consumer-group-1",
        "order": true,
        "timeout": 360
      }
    ]
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-updateconsumergroup#api-detail-45).

## API reference

[UpdateConsumerGroup](/help/en/sls/developer-reference/api-sls-2020-12-30-updateconsumergroup)
