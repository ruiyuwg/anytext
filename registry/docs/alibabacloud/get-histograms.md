Queries the distribution of logs that meet the specified search conditions in a specified Logstore. The response includes the number of logs that are generated within a specified time range.

## Command syntax

```
aliyunlog log get_histograms --request=<value> [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Command parameters

The following table describes the required and unique parameters of this command.

**Parameter**

**Type**

**Required**

**Example**

**Description**

\--request

JSON Object

Yes

file://./gethistograms.json

The path to the configuration file. The configuration file contains the parameters that are used to query logs.

For more information about the global parameters of this command, see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Sample command

In this example, a sample raw log is provided and the gethistograms.json file is written to query the distribution of logs in which the value of the request\_method field is PUT and the value of the status filed is 200 within a specified interval.

1.  The following code shows a sample raw log:
    
    ```
    body_bytes_sent:1750
    host:www.example.com
    http_referer:www.example.com
    http_user_agent:Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; it-it) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27
    http_x_forwarded_for:203.0.103.10
    remote_addr:203.0.103.10
    remote_user:p288
    request_length:13741
    request_method:GET
    request_time:71
    request_uri:/request/path-1/file-1
    status:200
    time_local:11/Aug/2021:06:52:27
    upstream_response_time:0.66
    ```
    
2.  Create a file named gethistograms.json to query the distribution of logs in which the value of the request\_method field is PUT and the value of the status filed is 200 within the previous 15 minutes. The following example shows the content of the file:
    
    ```
    {
    "topic": "",
    "logstore": "logstore-a",
    "project": "aliyun-test-project",
    "toTime": "2023-03-03 14:30:41",
    "query": "request_method:PUT and status:200",
    "fromTime": "2023-03-03 14:15:41"
    }
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    topic
    
    The topic of the log.
    
    logstore
    
    The name of the Logstore.
    
    project
    
    The name of the project.
    
    toTime
    
    The end of the time range to query. Example: 2023-03-03 14:30:41.
    
    query
    
    The search statement. Only `search statements` are supported. `Analytic statements` are not supported. For more information, see [Search syntax](/help/en/sls/query-syntax/#concept-tnd-1jq-zdb).
    
    fromTime
    
    The beginning of the time range to query. Example: 2023-03-03 14:15:41.
    
3.  Run the following command:
    
    ```
    aliyunlog log get_histograms --request="file://./gethistograms.json" --format-output=json
    ```
    
    The following response shows the distribution of logs that meet the specified conditions within the previous 15 minutes:
    
    ```
    [
      {
        "count": 18,
        "from": 1677824141,
        "progress": "Complete",
        "to": 1677824160
      },
      {
        "count": 37,
        "from": 1677824160,
        "progress": "Complete",
        "to": 1677824190
      },
     ......
      {
        "count": 30,
        "from": 1677825000,
        "progress": "Complete",
        "to": 1677825030
      },
      {
        "count": 0,
        "from": 1677825030,
        "progress": "Complete",
        "to": 1677825041
      }
    ]
    ```
    

## References

-   The Simple Log Service documentation provides examples on how to call the GetHistograms operation by using Simple Log Service SDK for Java. For more information, see [Use GetHistograms to query the distribution of logs](/help/en/sls/developer-reference/use-gethistograms-to-query-the-distribution-of-logs#task-2266178).
    
-   If the response that is returned by Log Service contains error information after you call an API operation, the call fails. You can handle errors based on the error codes that are returned when API calls fail. For more information, see [Error codes](/help/en/sls/developer-reference/error-codes#reference-ypb-rtq-12b).
-   Alibaba Cloud OpenAPI Explorer provides debugging capabilities, SDKs, examples, and related documents. You can use OpenAPI Explorer to debug Log Service API operations without the need to manually encapsulate or sign requests. For more information, visit [OpenAPI Portal](https://next.api.alibabacloud.com/api/Sls/2020-12-30/CreateProject?lang=JAVA&sdkStyle=dara&params=%7B%7D).
-   For more information about the API operation, see [GetHistograms](/help/en/sls/developer-reference/api-sls-2020-12-30-gethistograms).
