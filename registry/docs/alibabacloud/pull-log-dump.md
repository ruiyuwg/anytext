Downloads a large amount of log data to local files at the same time.

## Request syntax

```
aliyunlog log pull_log_dump --project_name=<value> --logstore_name=<value> --from_time=<value> --to_time=<value> --file_path=<value> [--batch_size=<value>] [--compress=<value>] [--encodings=<value>] [--shard_list=<value>] [--no_escape=<value>] [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of the pull\_log\_dump command.

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

The name of the Logstore.

\--from\_time

String

Yes

2021-06-01 18:00:00+8:00

The start time of the time range that is specified in the request. The start time can be a UNIX timestamp. The start time can also be a value in the `"%Y-%m-%d %H:%M:%S<time_zone>"` format, for example, `“2018-01-02 12:12:10+8:00”`.

\--to\_time

String

Yes

2021-06-01 18:25:00+8:00

The end time of the time range that is specified in the request. The end time can be a UNIX timestamp. The end time can also be a value in the `"%Y-%m-%d %H:%M:%S<time_zone>"` format, for example, `“2018-01-02 12:12:10+8:00”`.

\--file\_path

String

Yes

/home/dump\_{}.json

The path in which log data is stored. For example, if you set the parameter to /home/dump\_{}.json path, `{}` is replaced by the ID of a shard in the command output.

\--batch\_size

String

No

1000

The number of logs that are returned for each query.

\--compress

Boolean

No

true

Specifies whether to compress the returned log data.

-   true: The returned log data is compressed. This is the default value.
-   false: The returned log data is not compressed.

For information about the global parameters of the Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to query log data that is generated within a specified time range and store the data to the /home directory. Run the following command:
    
    ```
    aliyunlog log pull_log_dump --project_name="aliyun-test-project" --logstore_name="logstore-a" --from_time="2021-06-01 18:00:00+8:00" --to_time="2021-06-01 18:25:00+8:00" --file_path="/home/dump_{}.json" --batch_size=1000 --compress=true
    ```
    
-   Sample responses
    
    ```
    {
      "files": {
        "/home/dump_1.json": 1,
        "/home/dump_4.json": 1
      },
      "total_count": 2
    }                  
    ```
