Splits a shard of a specified Logstore.

## Request syntax

```
aliyunlog log split_shard --project_name=<value> --logstore_name=<value> --shardId=<value> --split_hash=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the split\_shard command.

**Parameter**

**Type**

**Required**

**Example**

**Description**

\--project\_name

String

Yes

aliyun-test-project

The name of the project.

\--logstore\_name

String

Yes

logstore-b

The name of the Logstore.

\--shardId

Integer

Yes

0

The ID of the shard.

\--split\_hash

String

Yes

40000000000000000000000000000000

The position where the shard is split.

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Split a shard of a Logstore named logstore-b. logstore-b belongs to the default account.
    
    ```
    aliyunlog log split_shard --project_name="aliyun-test-project" --logstore_name="logstore-b" --shardId=0 --split_hash=40000000000000000000000000000000
    ```
    
-   Sample responses
    
    ```
    [{
        "createTime": 1614750027,
        "exclusiveEndKey": "80000000000000000000000000000000",
        "inclusiveBeginKey": "00000000000000000000000000000000",
        "shardID": 0,
        "status": "readonly"
    }, {
        "createTime": 1622087815,
        "exclusiveEndKey": "40000000000000000000000000000000",
        "inclusiveBeginKey": "00000000000000000000000000000000",
        "shardID": 2,
        "status": "readwrite"
    }, {
        "createTime": 1622087815,
        "exclusiveEndKey": "80000000000000000000000000000000",
        "inclusiveBeginKey": "40000000000000000000000000000000",
        "shardID": 3,
        "status": "readwrite"
    }]
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-splitshard#api-detail-45).

## API reference

[SplitShard](/help/en/sls/developer-reference/api-sls-2020-12-30-splitshard)
