Queries the details of logs that are generated within a specified time range.

## Request syntax

```
aliyunlog log pull_log --project_name=<value> --logstore_name=<value> --shard_id=<value> --from_time=<value> --to_time=<value> [--batch_size=<value>] [--compress=<value>] [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required parameters of this command and parameters that are specific to this command.

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

\--shard\_id

Integer

Yes

0

The ID of the shard.

\--from\_time

String

Yes

2021-06-01 18:15:00+8:00

The beginning of the time range to query. Specify the value as a UNIX timestamp or in the `"%Y-%m-%d %H:%M:%S<time_zone>"` format. Example: `"2018-01-02 12:12:10+8:00"`.

\--to\_time

String

Yes

2021-06-01 18:18:00+8:00

The end of the time range to query. Specify the value as a UNIX timestamp or in the `"%Y-%m-%d %H:%M:%S<time_zone>"` format. Example: `"2018-01-02 12:12:10+8:00"`.

\--batch\_size

String

No

1000

The number of logs that are returned for each query.

\--compress

Boolean

No

true

Specifies whether to compress the returned logs. Valid values:

-   true: compresses the returned logs. This is the default value.
    
-   false: does not compress the returned logs.
    

For more information about the global parameters of this command, see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to query logs that are generated within a specified time range:
    
    ```
    aliyunlog log pull_log --project_name="ali-test-project" --logstore_name="nginx-moni" --shard_id=0 --from_time="2023-03-02 10:05:54" --to_time="2023-03-02 10:20:54" --format-output=json,no_escape
    ```
    
-   Sample responses
    
    ```
    {
      "count": 20,
      "logs": [
        {
          "__source__": "30.15.*.125",
          "__tag__:__client_ip__": "124.89.*.166",
          "__tag__:__receive_time__": "1719382997",
          "__time__": 1719382927,
          "__topic__": "",
          "request_method": "GET",
          "status": "200"
        },
        {
          "__source__": "30.15.*.125",
          "__tag__:__client_ip__": "124.89.*.166",
          "__tag__:__receive_time__": "1719382997",
          "__time__": 1719382927,
          "__topic__": "",
          "request_method": "POST",
          "status": "200"
        }
       ],
      "next_cursor": "MTcxOTIwOTUyMDQ5MjY3ODUxNw=="
    }
    {
      "count": 0,
      "logs": [],
      "next_cursor": "MTcxOTIwOTUyMDQ5MjY3ODUxNw=="
    }
    ```
    

For more information, see [FAQ about using Simple Log Service CLI](/help/en/sls/developer-reference/faq-2#task-2082423).
