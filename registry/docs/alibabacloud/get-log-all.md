Queries logs. This command is suitable for scenarios in which you need to query a large number of logs.

## Request syntax

```
aliyunlog log get_log_all --project=<value> --logstore=<value> --from_time=<value> --to_time=<value> [--topic=<value>] [--query=<value>] [--reverse=<value>] [--offset=<value>] [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
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

The name of the Logstore.

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

The topic of the logs. For more information, see [Topic](/help/en/sls/topic#concept-ukf-1rn-vdb).

\--query

String

No

`level:Information|select event_id as Key1,COUNT(*) as Key2 group by Key1`

The query statement. For more information, see [Log search overview](/help/en/sls/log-search-overview#concept-wjl-x3q-zdb) and [Log analysis overview](/help/en/sls/log-analysis-overview#concept-nyf-cjq-zdb).

**Note**

If you specify an analytic statement in the value of the query parameter, you must set the line and offset parameters to 0 and use the LIMIT clause to perform a paged query. An analytic statement is an SQL statement. For more information, see [Paginate analysis results](/help/en/sls/paged-query#section-srx-m4v-1fb).

\--reverse

Boolean

No

true

Specifies whether to return logs in reverse chronological order by log timestamp. The log timestamps are accurate to minutes.

-   true: Logs are returned in reverse chronological order by log timestamp. The latest log is returned first.
    
-   false: Logs are returned in chronological order by log timestamp. This is the default value.
    

\--offset

Integer

No

0

The row from which the query starts. Default value: 0.

For more information about the global parameters of this command, see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to query the event logs whose request method is POST. Command example:
    
    ```
    aliyunlog log get_log_all --project="aliyun-test-project" --logstore="logstore-a" --from_time="2021-05-28 15:33:00+8:00" --to_time="2021-05-28 15:40:00+8:00"  --query="request_method:POST|select status,COUNT(*) as pv group by status" --format-output=json
    ```
    
-   Sample responses
    
    ```
    {
      "data": [],
      "meta": {
        "aggQuery": "select status,COUNT(*) as pv group by status",
        "columnTypes": [
          "long",
          "long"
        ],
        "count": 0,
        "cpuCores": 11,
        "cpuSec": 0.019,
        "elapsedMillisecond": 21,
        "hasSQL": true,
        "insertedSQL": "1,29, from \"logstore-a\" ",
        "isAccurate": true,
        "keys": [
          "status",
          "pv"
        ],
        "limited": 100,
        "powerSql": false,
        "processedBytes": 0,
        "processedRows": 0,
        "progress": "Complete",
        "telementryType": "logging",
        "telemetryType": "logging",
        "terms": [
          {
            "key": "",
            "term": "request_method\uff1apost"
          }
        ],
        "whereQuery": "request_method\uff1aPOST"
      }
    }
    ```
    
-   Download example
    
    Use the get\_log\_all command to download logs to your computer. Command example:
    
    ```
    aliyunlog log get_log_all --project="aliyun-test-project" --logstore="logstore-a" --from_time="2022-12-29 15:54:31" --to_time="2022-12-29 16:09:31" --query="status:200|select request_method as method,COUNT(*) as pv group by method order by pv" --format-output=json >>download_data.txt
    ```
    
-   Download description
    
    After the command is run, the download\_data.txt file is generated in the root directory where the command is run. You can view the downloaded logs in the file.
    
    ```
    {
      "data": [],
      "meta": {
        "aggQuery": "select status,COUNT(*) as pv group by status",
        "columnTypes": [
          "long",
          "long"
        ],
        "count": 0,
        "cpuSec": 0.019,
        "elapsedMillisecond": 0,
        "hasSQL": true,
        "insertedSQL": "1,29, from \"gs-api\" ",
        "isAccurate": true,
        "keys": [
          "status",
          "pv"
        ],
        "limited": 100,
        "processedBytes": 0,
        "processedRows": 0,
        "progress": "Complete",
        "telementryType": "logging",
        "telemetryType": "logging",
        "terms": [
          {
            "key": "",
            "term": "request_method\uff1apost"
          }
        ],
        "whereQuery": "request_method\uff1aPOST"
      }
    }
    ```
    

## Related commands

**Command**

**Description**

[get\_logs](/help/en/sls/developer-reference/get-logs#task-2083775)

Queries logs in exact match mode by using a JSON configuration file.

[get\_log](/help/en/sls/developer-reference/get-log#task-2083776)

Queries a specified number of logs.
