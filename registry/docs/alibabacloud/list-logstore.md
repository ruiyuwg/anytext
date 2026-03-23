Queries all Logstores in a specified project.

## Request syntax

```
aliyunlog log list_logstore --project_name=<value> [--logstore_name_pattern=<value>] [--offset=<value>] [--size=<value>] [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the list\_logstore command.

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

\--logstore\_name\_pattern

String

No

ali-test-logstore

The name of the Logstore. Fuzzy matches are supported. For example, if you enter logstore, all Logstores whose names contain logstore are returned.

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

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Query all Logstores in a specified project that belongs to the default account.
    
    ```
    aliyunlog log list_logstore --project_name="aliyun-test-project"
    ```
    
-   Sample responses
    
    ```
    {
      "count": 8,
      "logstores": [
        "internal-alert-history",
        "internal-etl-log",
        "logstore-a",
        "metricstore-dsw",
        "metricstore-dsw2",
        "metricstore-dsw3",
        "moni-nginx",
        "python-api-logstore2"
      ],
      "total": 8
    }
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-listlogstores#api-detail-45).

## API reference

[ListLogStores](/help/en/sls/developer-reference/api-sls-2020-12-30-listlogstores)
