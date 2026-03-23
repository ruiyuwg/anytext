Queries a cursor based on a specified point in time.

## Request syntax

```
aliyunlog log get_cursor --project_name=<value> --logstore_name=<value> --shard_id=<value> --start_time=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the get\_cursor command.

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

\--start\_time

String

Yes

begin

The time when the query starts. Valid values:

-   A UNIX timestamp: The query starts from the specified point in time.
    
-   begin: The query starts from the first log.
    
-   end: The query starts from the last log.
    

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to query the start cursor of a shard whose ID is 0 in a Logstore named logstore-a. Run the following command:
    
    ```
    aliyunlog log get_cursor --project_name="aliyun-test-project" --logstore_name="logstore-a" --shard_id=0 --start_time="begin"
    ```
    
-   Sample responses
    
    ```
    {"cursor": "MTYxNDc1MDAyNzM3MzIwNTcxNA=="}
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-getcursor#api-detail-45).

## API reference

[GetCursor](/help/en/sls/developer-reference/api-sls-2020-12-30-getcursor)
