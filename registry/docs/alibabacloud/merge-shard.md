Merges two adjacent shards that are in the readwrite state.

## Request syntax

```
aliyunlog log merge_shard --project_name=<value> --logstore_name=<value> --shardId=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the merge\_shard command.

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

logstore-a

The name of the Logstore.

\--shardId

Integer

Yes

2

The ID of the shard.

For information about the global parameters of the Simple Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to merge the shards of a Logstore named logstore-a.
    
    ```
    aliyunlog log merge_shard --project_name="aliyun-test-project" --logstore_name="logstore-a" --shardId=2
    ```
    
-   Sample responses
    
    ```
    [{
        "createTime": 1622095017,
        "exclusiveEndKey": "80000000000000000000000000000000",
        "inclusiveBeginKey": "00000000000000000000000000000000",
        "shardID": 4,
        "status": "readwrite"
    }, {
        "createTime": 1622087815,
        "exclusiveEndKey": "40000000000000000000000000000000",
        "inclusiveBeginKey": "00000000000000000000000000000000",
        "shardID": 2,
        "status": "readonly"
    }, {
        "createTime": 1622087815,
        "exclusiveEndKey": "80000000000000000000000000000000",
        "inclusiveBeginKey": "40000000000000000000000000000000",
        "shardID": 3,
        "status": "readonly"
    }]
    ```
