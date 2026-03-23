Modifies the checkpoint of a shard from which a consumer group consumes data.

## Request syntax

```
aliyunlog log update_check_point --project=<value> --logstore=<value> --consumer_group=<value> --shard=<value> --check_point=<value> [--consumer=<value>] [--force_success=<value>] [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the update\_check\_point command.

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

\--shard

Integer

Yes

1

The ID of the shard.

\--check\_point

String

Yes

MTUyNDE1NTM3OTM3MzkwODQ5Ng==

The value of the checkpoint.

\--consumer

String

No

consumer\_1

The consumer.

\--force\_success

Boolean

No

true

Specifies whether to enable forcible updates.

-   True: enables forcible updates.
    
-   False: disables forcible updates.
    

For information about the global parameters of the Simple Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Modify the checkpoint of a shard from which a specified consumer group consumes data. Sample requests:
    
    ```
    aliyunlog log update_check_point --project="aliyun-test-project" --logstore="logstore-a" --consumer_group="consumer-group-1" --shard=1 --check_point="MTUyNDE1NTM3OTM3MzkwODQ5Ng==" --consumer="consumer_1" --force_success=true
    ```
    
    After you run the command, no responses are returned.
    
-   Modify the timeout of the consumer group `consumer-group-1` using the default account. Sample requests:
    
    ```
    aliyunlog log update_consumer_group --project="aliyun-test-project" --logstore="logstore-a" --consumer_group="consumer-group-1" --timeout="360" --in_order=true
    ```
    
    After you run the command, no responses are returned. You can run the following command to query consumer groups.
    
    ```
    aliyunlog log  get_check_point --project="aliyun-test-project" --logstore="logstore-a" --shard=3
    ```
    
    Responses:
    
    ```
    [
      {
        "checkpoint": "MTUyNDE1NTM3OTM3MzkwODQ5Ng==",
        "consumer": "",
        "shard": 3,
        "updateTime": 1719544024896258
      }
    ]
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes of UpdateCheckPoint](/help/en/sls/updatecheckpoint#section-gjd-q7c-ruc).

## API reference

[UpdateCheckPoint](/help/en/sls/updatecheckpoint#reference-wzw-ngh-f2b)
