Deletes a specified Logstore.

## Request syntax

```
aliyunlog log delete_logstore --project_name=<value> --logstore_name=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the delete\_logstore command.

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

The name of the destination Logstore.

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to delete a Logstore named logstore-a.
    
    ```
    aliyunlog log delete_logstore --project_name="aliyun-test-project" --logstore_name="logstore-a"
    ```
    
-   Sample responses
    
    After you run the command, no responses are returned.
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-deletelogstore#api-detail-45).

## API reference

[DeleteLogStore](/help/en/sls/developer-reference/api-sls-2020-12-30-deletelogstore)
