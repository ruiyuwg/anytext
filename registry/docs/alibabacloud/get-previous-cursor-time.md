Queries the server time of the previous cursor based on a cursor.

## Request syntax

```
aliyunlog log get_previous_cursor_time --project_name=<value> --logstore_name=<value> --shard_id=<value> --cursor=<value> [--normalize=<value>] [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the get\_previous\_cursor\_time command.

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

\--cursor

String

Yes

MTYxNDc1MDAyNzM3MzIwNTcxNA==

The cursor that is used to query a timestamp.

\--normalize

Boolean

No

false

Specifies whether to replace the specified cursor with the nearest cursor if no data is collected at the specified cursor.

-   true: The specified cursor is replaced by the nearest cursor.
-   false: The specified cursor is not replaced by the nearest cursor.

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Query the server time of the previous cursor based on a specified cursor. Run the following command:
    
    ```
    aliyunlog log get_previous_cursor_time --project_name="aliyun-test-project" --logstore_name="logstore-a" --shard_id=1 --cursor="MTYxNDc1MDAyNzM3MzI1ODg3MQ=="
    ```
    
-   Sample responses
    
    ```
    {"cursor_time": 1620037252}
    ```
