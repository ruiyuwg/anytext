Queries logs. This command is suitable for scenarios in which you need to query a specified number of logs.

## Request syntax

```
aliyunlog log get_log --project=<value> --logstore=<value> --from_time=<value> --to_time=<value> [--topic=<value>] [--query=<value>] [--reverse=<value>] [--offset=<value>] [--size=<value>] [--power_sql=<value>] [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>] [--profile=<value>]
```

## Request parameters

The following table describes the required and unique parameters of this command.

**Parameter**

**Type**

**Required**

**Example**

**Description**

\--project

String

Yes

aliyun-test-project

The name of the project.

\--logstore

String

Yes

logstore-a

The name of the logstore.

\--from\_time

String

Yes

2021-05-28 15:33:00+8:00

The beginning of the time range to query. Specify the value as a UNIX timestamp or in the `"%Y-%m-%d %H:%M:%S<time_zone>"` format. Example: `“2018-01-02 12:12:10+8:00“`.

\--to\_time

String

Yes

2021-05-28 15:40:00+8:00

The end of the time range to query. Specify the value as a UNIX timestamp or in the `"%Y-%m-%d %H:%M:%S<time_zone>"` format. Example: `“2018-01-02 12:12:10+8:00“`.

\--topic

String

No

""

The topic of the logs to query. The default value is double quotation marks (""). For more information, see [Topic](/help/en/sls/topic#concept-ukf-1rn-vdb).

\--query

String

No

`level:Information|select event_id as Key1,COUNT(*) as Key2 group by Key1`

The search statement or query statement. For more information, see [Overview of log query and analysis](/help/en/sls/log-analysis-overview#concept-nyf-cjq-zdb).

If you add `set session parallel_sql=true;` to the analytic statement in the value of the query parameter, the Dedicated SQL feature is used. For example, you can set the value to `* | set session parallel_sql=true; select count(*) as pv`.

**Note**

If you specify an analytic statement in the value of the query parameter, you must set the line and offset parameters to 0 and use the LIMIT clause to perform a paged query. An analytic statement is an SQL statement. For more information, see [Paginate analysis results](/help/en/sls/paged-query#section-srx-m4v-1fb).

\--reverse

Boolean

No

true

Specifies whether to return logs in descending order of log timestamp. The log timestamps are accurate to minutes.

-   true: Logs are returned in descending order of log timestamp.
    
-   false: Logs are returned in ascending order of log timestamp. This is the default value.
    

**Important**

-   The reverse parameter only takes effect when the query parameter is set to a search statement. The reverse parameter specifies the order in which returned logs are sorted.
    
-   If the query parameter is set to a query statement, the reverse parameter is invalid. The order in which returned logs are sorted is specified by the ORDER BY clause in the analytic statement. If you use the default keyword asc in the ORDER BY clause, the logs are sorted in ascending order. If you use the desc keyword in the ORDER BY clause, the logs are sorted in descending order.
    

\--offset

Integer

No

0

The row from which the query starts. This parameter only takes effect when the query parameter is set to a search statement. Default value: 0.

\--size

Integer

No

10

The maximum number of logs to return. This parameter only takes effect when the query parameter is set to a search statement. Minimum value: 0. Maximum value: 100. Default value: 100.

\--power\_sql

Boolean

No

false

Specifies whether to use the Dedicated SQL feature. For more information, see [Enable Dedicated SQL](/help/en/sls/dedicated-sql/#task-2081182).

-   true: The Dedicated SQL feature is used.
    
-   false: The Standard SQL feature is used. This is the default value.
    

You can use the powerSql or query parameter to specify whether to use the Dedicated SQL feature.

For more information about the global parameters of this command, see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to query 20 event logs whose request method is POST. Command example:
    
    ```
    aliyunlog log get_log --project="aliyun-test-project" --logstore="logstore-a" --from_time="2021-05-28 15:33:00+8:00" --to_time="2021-05-28 15:40:00+8:00" --query="request_method:POST | select status,COUNT(*) as pv group by status order by pv desc limit 20" --format-output=json
    ```
    
-   Sample responses
    
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
        "cpuSec": 0.025,
        "elapsedMillisecond": 0,
        "hasSQL": true,
        "insertedSQL": "1,29, from \"gs-api\" ",
        "isAccurate": true,
        "keys": [
          "status",
          "pv"
        ],
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
    

## Related commands

**Command**

**Description**

[get\_logs](/help/en/sls/developer-reference/get-logs#task-2083775)

Queries logs in exact match mode by using a JSON configuration file.

[get\_log\_all](/help/en/sls/developer-reference/get-log-all#task-2083776)

Queries a large number of logs.
