Queries the end cursor of a shard whose ID is specified in a Logstore.

## Request syntax

```
aliyunlog log get_end_cursor --project_name=<value> --logstore_name=<value> --shard_id=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the get\_begin\_cursor command.

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

logstroe-a

The name of the Logstore.

\--shard\_id

String

Yes

0

The ID of the shard.

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to query the end cursor of a shard whose ID is 0 in a Logstore named logstore-a. Run the following command:
    
    ```
    aliyunlog log get_end_cursor --project_name="aliyun-test-project" --logstore_name="logstore-a" --shard_id=0
    ```
    
-   Sample responses
    
    ```
    {"cursor": "MTYxNDc1MDAyNzM3MzIwNzE1Ng=="}
    ```
