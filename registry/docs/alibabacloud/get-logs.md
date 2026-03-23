Queries logs in a specified logstore within a project. This command is ideal for precise and specific query scenarios. It requires a JSON configuration file for the request, allowing for flexible and detailed query configurations.

## Command syntax

```
aliyunlog log get_logs --request=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Command parameters

The following table describes the required parameters of this command and the parameters that are specific to this command.

**Parameter**

**Type**

**Required**

**Example**

**Description**

\--request

JSON Object

Yes

file://./getlogs.json

The path to the JSON configuration file for the query. You must create this file before running the command and specify the project, logstore, time range, and query statement within it.

For more information about the global parameters of this command, see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Example

This example shows how to query for the top three status codes in a logstore named `logstore-a`.

1.  Create a file named getlogs.json. Content example:
    
    ```
    {
    "topic": "",
    "logstore": "logstore-a",
    "project": "aliyun-test-project",
    "toTime": "2021-05-28 15:33:00",
    "offset": "0",
    "query": "*|select status,COUNT(*) as pv group by status order by pv desc limit 3",
    "line": "2",
    "fromTime": "2021-05-28 15:18:00",
    "reverse": "true"
    }
    ```
    
    For the query parameter, we recommend using a search or analysis statement that runs successfully in the Simple Log Service console. For more information, see [Log search overview](/help/en/sls/log-search-overview#concept-wjl-x3q-zdb) and [Overview of log query and analysis](/help/en/sls/log-analysis-overview#concept-nyf-cjq-zdb).
    
2.  Use the default account to query logs. Command example:
    
    ```
    aliyunlog log get_logs --request="file://./getlogs.json" --format-output=json
    ```
    
    The following result is returned:
    
    ```
    {
      "data": [
        {
          "__source__": "",
          "__time__": "1719382500",
          "pv": "17",
          "status": "200"
        },
        {
          "__source__": "",
          "__time__": "1719382500",
          "pv": "3",
          "status": "500"
        }
      ],
      "meta": {
        "aggQuery": "select status,COUNT(*) as pv group by status order by pv desc limit 20",
        "columnTypes": [
          "long",
          "long"
        ],
        "count": 2,
        "cpuCores": 11,
        "cpuSec": 0.024,
        "elapsedMillisecond": 38,
        "hasSQL": true,
        "insertedSQL": "1,29, from \"logstore-a\" ",
        "isAccurate": true,
        "keys": [
          "status",
          "pv"
        ],
        "powerSql": false,
        "processedBytes": 226,
        "processedRows": 20,
        "progress": "Complete",
        "telementryType": "logging",
        "telemetryType": "logging",
        "terms": [
          {
            "key": "",
            "term": "*"
          }
        ],
        "whereQuery": "*"
      }
    }
    ```
    
    The results show the status codes and their corresponding page view (PV) counts.
    

## References

-   The Simple Log Service CLI provides several commands for querying logs. Select the command that best fits your scenario.
    
    **Command**
    
    **Scenario**
    
    [get\_log](/help/en/sls/developer-reference/get-log#task-2083776)
    
    Queries a specified number of logs.
    
    [get\_log\_all](/help/en/sls/developer-reference/get-log-all#task-2083776)
    
    Queries a large number of logs.
    
-   If an API call fails, the response from Simple Log Service contains error information. You can handle errors using the error codes provided. For more information, see [Error codes](/help/en/sls/developer-reference/error-codes#reference-ypb-rtq-12b).
    
-   Simple Log Service is also compatible with Alibaba Cloud SDKs. For more information, see [Simple Log Service\_SDK Center\_Alibaba Cloud OpenAPI Explorer](https://api.alibabacloud.com/api-tools/sdk/Sls?version=2020-12-30&language=python-tea&tab=primer-doc).
    
-   For more information about the API operation that corresponds to this command, see [GetLogs](/help/en/sls/developer-reference/api-sls-2020-12-30-getlogs).
    
-   Simple Log Service provides examples on how to call the GetLogs API operation by using Simple Log Service SDK for Java and Simple Log Service SDK for Python. For more information, see [Use GetLogs to query logs](/help/en/sls/developer-reference/use-getlogs-to-query-logs#task-2183255) and [Use GetLogs to query logs](/help/en/sls/developer-reference/use-getlogs-to-query-logs-46#task-2183255).
