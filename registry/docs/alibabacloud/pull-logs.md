Queries logs based on a specified cursor. You can run the pull\_logs command to iteratively query logs and return results. This command is suitable for scenarios in which you want to query a large number of logs.

## Request syntax

```
aliyunlog log pull_logs --project_name=<value> --logstore_name=<value> --shard_id=<value> --cursor=<value> [--count=<value>] [--end_cursor=<value>] [--compress=<value>] [--access-id=<value>] [--access-key=<value>] [--sts-token=<value>] [--region-endpoint=<value>] [--client-name=<value>] [--jmes-filter=<value>] [--format-output=<value>] [--decode-output=<value>]
```

## Request parameters

The following table describes the required and specific parameters of this command.

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

\--cursor

String

Yes

MTYxNDc1MDAyNzM3MzIwNTcxNA==

The start cursor from which the system starts to read logs.

\--count

Integer

No

2

The number of logs that you want to read.

\--end\_cursor

String

No

MTYxNDc1MDAyNzM3MzIwNTcxNg==

The end cursor at which the system stops reading logs.

\--compress

Boolean

No

true

Specifies whether to compress the returned logs. Valid values:

-   true (default)
    
-   false
    

For information about the global parameters of Simple Log Service command-line interface (CLI), see [Global parameters](/help/en/sls/developer-reference/global-parameters#concept-2083388).

## Examples

-   Sample requests
    
    Use the default account to query two logs from the specified cursor. Sample command:
    
    ```
    aliyunlog log pull_logs --project_name="aliyun-test-project" --logstore_name="logstroe-a" --shard_id=0 --cursor="MTYxNDc1MDAyNzM3MzIwNTcxNA==" --count="2"
    ```
    
-   Sample responses
    
    ```
    {
      "count": 2,
      "logs": [
        {
          "__source__": "203.0.113.10",
          "__tag__:__hostname__": "iZ3s******Z",
          "__tag__:__pack_id__": "81C4812927C6B529-15DA",
          "__tag__:__receive_time__": "1619597641",
          "__time__": 1619597638,
          "__topic__": "",
          "activity_id": "",
          "computer_name": "iZ3stckpfjj7wvZ",
          "event_id": "7036",
          "kernel_time": "0",
          "keywords": "[Classic]",
          "level": "Information",
          "log_name": "System",
          "message": "The Network Setup Service service entered the stopped state.",
          "message_error": "[]",
          "opcode": "",
          "process_id": "544",
          "processor_id": "0",
          "processor_time": "0",
          "provider_guid": "{555908d1-a6d7-4695-8e1e-26931d2012f4}",
          "record_number": "8623",
          "related_activity_id": "",
          "session_id": "0",
          "source_name": "Service Control Manager",
          "task": "",
          "thread_id": "3176",
          "type": "wineventlog",
          "user_data": "{\"xml_name\":\"\"}",
          "user_time": "0",
          "version": "0"
        },
        {
          "__source__": "203.0.113.10",
          "__tag__:__hostname__": "iZ3******vZ",
          "__tag__:__pack_id__": "81C4812927C6B529-15DB",
          "__tag__:__receive_time__": "1619598347",
          "__time__": 1619598344,
          "__topic__": "",
          "activity_id": "",
          "computer_name": "iZ3stckpfjj7wvZ",
          "event_id": "7036",
          "kernel_time": "0",
          "keywords": "[Classic]",
          "level": "Information",
          "log_name": "System",
          "message": "The Windows Update service entered the running state.",
          "message_error": "[]",
          "opcode": "",
          "process_id": "544",
          "processor_id": "0",
          "processor_time": "0",
          "provider_guid": "{555908d1-a6d7-4695-8e1e-26931d2012f4}",
          "record_number": "8624",
          "related_activity_id": "",
          "session_id": "0",
          "source_name": "Service Control Manager",
          "task": "",
          "thread_id": "6868",
          "type": "wineventlog",
          "user_data": "{\"xml_name\":\"\"}",
          "user_time": "0",
          "version": "0"
        }
      ],
      "next_cursor": "MTYxNDc1MDAyNzM3MzIwNTcxNg=="
    }
    ```
    

## Error codes

If an error message is returned, fix the error based on the error codes of the related API operation.

**HttpStatusCode**

**ErrorCode**

**ErrorMessage**

**Description**

404

LogStoreNotExist

Logstore does not exist.

The specified Logstore does not exist.

400

ParameterInvalid

Invalid cursor.

The specified cursors are invalid.

400

ParameterInvalid

ParameterCount should be in \[0-1000\].

The value of the count parameter is invalid. The valid values of the count parameter are within the range of 0 to 1000.

400

ShardNotExist

Shard does not exist.

The specified shard does not exist.

400

InternalServerError

Specified Server Error Message.

An internal server error occurred.

For more information, see [Common error codes](/help/en/sls/developer-reference/error-codes).
