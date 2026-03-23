Deletes a specified consumer group.

## Request syntax

```
aliyunlog log delete_consumer_group --project=<value> --logstore=<value> --consumer_group=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the delete\_consumer\_group command.

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

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to delete a consumer group of a Logstore named logstore-a.
    
    ```
    aliyunlog log delete_consumer_group --project="aliyun-test-project" --logstore="logstore-a" --consumer_group="consumer-group-1"
    ```
    
-   Sample responses
    
    After you run the command, no responses are returned. You can run the following command to check whether the consumer group is deleted.
    
    ```
    aliyunlog log list_consumer_group --project="aliyun-test-project" --logstore="logstore-a"
    ```
    
    Responses:
    
    ```
    []
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-deleteconsumergroup#api-detail-45).

## API reference

[DeleteConsumerGroup](/help/en/sls/developer-reference/api-sls-2020-12-30-deleteconsumergroup)
