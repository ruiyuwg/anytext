Queries the shards of a specified Logstore.

## Request syntax

```
aliyunlog log list_shards --project_name=<value> --logstore_name=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the list\_shards command.

**Parameter**

**Type**

**Required**

**Example**

**Description**

\--project\_name

String

Yes

project-a

The name of the project.

\--logstore\_name

String

Yes

logstore-a

The name of the Logstore.

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Query the shards of a Logstore named logstore-a. logstore-a belongs to the default account.
    
    ```
    aliyunlog log list_shards --project_name="project-a" --logstore_name="logstore-a"
    ```
    
-   Sample responses
    
    ```
    [
      {
        "createTime": 1619493098,
        "exclusiveEndKey": "80000000000000000000000000000000",
        "inclusiveBeginKey": "00000000000000000000000000000000",
        "shardID": 0,
        "status": "readwrite"
      },
      {
        "createTime": 1619493098,
        "exclusiveEndKey": "ffffffffffffffffffffffffffffffff",
        "inclusiveBeginKey": "80000000000000000000000000000000",
        "shardID": 1,
        "status": "readwrite"
      }
    ]
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-listshards#api-detail-45).

## API reference

[ListShards](/help/en/sls/developer-reference/api-sls-2020-12-30-listshards)
