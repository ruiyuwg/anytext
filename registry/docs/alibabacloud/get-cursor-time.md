Queries the server time based on a cursor.

## Request syntax

```
aliyunlog log get_cursor_time --project_name=<value> --logstore_name=<value> --shard_id=<value> --cursor=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the get\_cursor\_time command.

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

For information about the global parameters of the Simple Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to query the server time based on a cursor. Run the following command:
    
    ```
    aliyunlog log get_cursor_time --project_name="aliyun-test-project" --logstore_name="logstore-a" --shard_id=0 --cursor="MTYxNDc1MDAyNzM3MzIwNTcxNA=="
    ```
    
-   Sample responses
    
    ```
    {"cursor_time": 1620037252}
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-getcursortime#api-detail-45).

## API reference

[GetCursorTime](/help/en/sls/developer-reference/api-sls-2020-12-30-getcursortime)
