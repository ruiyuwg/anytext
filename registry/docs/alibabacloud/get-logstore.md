Queries the information about a specified Logstore.

## Request syntax

```
aliyunlog log get_logstore --project_name=<value> --logstore_name=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the get\_logstore command.

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

moni-nginx

The name of the destination Logstore.

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to query the information about a Logstore named moni-nginx.
    
    ```
    aliyunlog log get_logstore --project_name="aliyun-test-project" --logstore_name="moni-nginx"
    ```
    
-   Sample responses
    
    ```
    {
      "appendMeta": true,
      "archiveSeconds": 0,
      "autoSplit": true,
      "createTime": 1619493098,
      "enable_tracking": false,
      "lastModifyTime": 1620814389,
      "logstoreName": "moni-nginx",
      "maxSplitShard": 64,
      "resourceQuota": {
        "storage": {
          "preserved": -1,
          "used": 0
        }
      },
      "shardCount": 2,
      "telemetryType": "",
      "ttl": 30
    }
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation. For more information, see [Error codes](/help/en/sls/developer-reference/api-sls-2020-12-30-getlogstore#api-detail-45).

## API reference

[GetLogStore](/help/en/sls/developer-reference/api-sls-2020-12-30-getlogstore)
