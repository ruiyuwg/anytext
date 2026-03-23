Deletes a Logtail configuration.

## Request syntax

```
aliyunlog log delete_logtail_config --project_name=<value> --config_name=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the delete\_logtail\_config command.

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

\--config\_name

String

Yes

config\_name2

The name of the Logtail configuration.

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to delete a Logtail configuration named config\_name2.
    
    ```
    aliyunlog log delete_logtail_config --project_name="aliyun-test-project" --config_name="config_name2"
    ```
    
-   After you run the command, no responses are returned. To check whether the Logtail configuration is deleted, use the following command example:
    
    ```
    aliyunlog log get_logtail_config --project_name="aliyun-test-project" --config_name="config_name2"
    ```
    
    Sample responses:
    
    ```
    {"errorCode": "ConfigNotExist", "errorMessage": "Config config_name2 not exist", "requestId": "667B894F6CBC124BB772F806"}
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-deleteconfig#api-detail-45).

## API reference

[DeleteConfig](/help/en/sls/developer-reference/api-sls-2020-12-30-deleteconfig)
