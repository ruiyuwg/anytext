Queries all Logtail configurations.

## Request syntax

```
aliyunlog log list_logtail_config --project_name=<value> [--offset=<value>] [--size=<value>] [--logstore=<value>] [--config=<value>] [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the list\_logtail\_config command.

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

\--offset

Integer

No

0

The start position of entries to return. Default value: 0.

\--size

Integer

No

10

The maximum number of entries to return on each page. Maximum value: 500.

\--logstore

String

No

logstore-a

The name of the Logstore.

\--config

String

No

config\_name

The name of the Logtail configuration.

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to query all Logtail configurations of a Logstore named logstore-a.
    
    ```
    aliyunlog log list_logtail_config --project_name="aliyun-test-project" --logstore="logstore-a"
    ```
    
-   Sample responses
    
    ```
    {
      "configs": [
        "windows_event_log"
      ],
      "count": 1,
      "total": 1
    }
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-listconfig#api-detail-45).

## API reference

[ListConfig](/help/en/sls/developer-reference/api-sls-2020-12-30-listconfig)
