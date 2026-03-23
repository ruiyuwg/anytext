Queries all consumer groups in a specified Logstore.

## Request syntax

```
aliyunlog log list_consumer_group --project=<value> --logstore=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the list\_consumer\_group command.

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

For information about the global parameters of the Simple Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Query all consumer groups in a Logstore named logstore-a.
    
    ```
    aliyunlog log list_consumer_group --project="aliyun-test-project" --logstore="logstore-a"
    ```
    
-   Sample responses
    
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

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-listconsumergroup#api-detail-45).

## API reference

[ListConsumerGroup](/help/en/sls/developer-reference/api-sls-2020-12-30-listconsumergroup)
