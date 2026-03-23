If you want to analyze the performance of your Tair (Redis OSS-compatible) instance, identify slow query commands, or pinpoint potential performance bottlenecks, you can examine the slow query logs. Slow query logs help you uncover clues for resolving performance issues and optimizing queries. Slow query logs record commands whose execution time exceeds the threshold specified by **slowlog-log-slower-than**. By default, this threshold is set to 20 milliseconds. You can customize this value to suit your specific needs.

## **Overview**

Slow query logs record requests that take longer than a specified threshold to execute. Slow query logs can be generated for both data nodes and proxy nodes.

**Note**

The methods provided in this topic to query slow query logs are not supported for Redis Open-Source Edition 2.8 instances. You can choose **CloudDBA** > **Slow Queries** in the console to view slow query logs of such instances. Slow query logs of Redis Open-Source Edition 2.8 instances do not include information such as client IP addresses.

## Slow query logs of data nodes

-   The command execution duration collected in slow query logs that are generated on a data node includes only the amount of time required to actually run a command on the data node. The amount of time required for the data node to communicate with a proxy node or client and the execution latency of the command in the single-threaded queue are not included.
    
-   Slow query logs of data nodes are retained for 72 hours. The number of slow query logs that can be stored is unlimited.
    
-   In most cases, few slow query logs are generated on data nodes due to high instance performance.
    

#### **Parameters**

**Parameter**

**Description**

slowlog-log-slower-than

The threshold of the command execution duration for slow query logs of data nodes. If a command runs for a period of time that exceeds this threshold, the command is recorded in a slow query log. Default value: 20000. Unit: microseconds. 20000 microseconds is equal to 20 milliseconds.

**Note**

In most cases, the actual latency is higher than the specified value of this parameter because this value does not include the amount of time required to transmit and process data among clients, proxy nodes, and data nodes.

slowlog-max-len

The maximum number of slow query log entries that can be stored. Default value: 1024.

For more information, see [Configure instance parameters](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/#concept-q1w-kxn-tdb).

## Slow query logs of proxy nodes

-   The command execution duration collected in slow query logs of proxy nodes starts from the time when a proxy node sends a request to a data node and ends at the time when the proxy node receives the response from the data node. This includes the command execution duration on the data node, the duration of data transmission over the network, and the queuing latency of the command.
    
-   Slow query logs of proxy nodes are retained for 72 hours. The number of slow query logs that can be stored is unlimited.
    
-   In most cases, the latency value recorded in a slow query log of proxy nodes is closer to the actual latency of the application. Therefore, we recommend that you check this type of slow query log when you troubleshoot timeout issues.
    

**Note**

Standard instances do not involve slow query logs of proxy nodes.

#### **Parameters**

**Parameter**

**Description**

rt\_threshold\_ms

The threshold of the command execution duration for slow query logs of proxy nodes. Default value: 500. Unit: milliseconds. We recommend that you set the threshold to a value close to the client timeout period, which is anywhere from 200 milliseconds to 500 milliseconds.

For more information, see [Configure instance parameters](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/#concept-q1w-kxn-tdb).

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane, choose **Logs** > **Slow Logs**.
    
3.  On the **Slow Logs** page, filter slow query logs by time range or keyword. For cluster and read/write splitting instances, you can also filter slow query logs by node type and node ID.
    
    **Note**
    
    By default, the **Host Address** parameter for cluster and read/write splitting instances displays the IP addresses of proxy nodes. To obtain the IP address of a specific client, set the ptod\_enabled parameter to `1` in the **Parameter Settings** section. For more information, see [Configure instance parameters](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/#concept-q1w-kxn-tdb).
    

## Irrelevant slow SQL statements

**Note**

Specific slow SQL statements are not related to the actual execution rate of your requests but related to the engine logic of an instance. You can ignore the following slow SQL statements.

**Slow SQL statement**

**Description**

latency:eventloop

Tair (Redis OSS-compatible) uses the event-driven mode during runtime. An event loop consists of reading, parsing, and running commands and returning outputs. The execution duration of a `latency:eventloop` statement indicates the overall amount of time required for an event loop.

latency:pipeline

Tair (Redis OSS-compatible) allows the client to work in pipeline mode. In this mode, the client sends commands and receives outputs in batches. After all commands are executed, outputs are returned. If your instance uses the cluster architecture, proxy nodes use the pipeline mode to send requests in batches to the backend data nodes. The execution duration of a `latency:pipeline` statement indicates the overall amount of time required to handle all requests from the client in pipeline mode.

latency:fork

The execution duration of a `latency:fork` statement indicates the amount of time required to fork a child process. The larger the amount of data, the longer the time required.

## Related API operations

**API operation**

**Description**

[DescribeSlowLogRecords](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeslowlogrecords-redis#main-107864)

Queries the slow query logs of an instance that are generated during a specified period of time.

## References

[Use slow query logs to troubleshoot timeout issues](/help/en/redis/user-guide/use-slow-logs-to-troubleshoot-timeout-issues#task-1948179)
