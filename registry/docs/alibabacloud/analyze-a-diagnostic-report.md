Diagnostic reports help you evaluate the operational conditions of an instance and identify anomalies on the instance based on statistics such as performance level, skewed request distribution, and slow logs.

## Prerequisites

[Perform diagnostics on an instance](/help/en/redis/user-guide/create-a-diagnostic-report/#concept-2045851)

## Components of a diagnostic report

-   [Basic instance information](#section-fzm-pvc-bmv): displays basic information of an instance such as the instance ID, instance type, engine version, and the zone in which the instance is deployed.
    
-   [Summary](#section-kcx-0yp-itg): displays the score of the instance health status and describes the reasons why points are deducted.
    
-   [Performance level](#section-moj-hw2-pht): displays the statistics and states of key performance metrics related to the instance.
    
-   [TOP 10 nodes that receive the greatest number of slow queries](#section-hu2-uke-1om): displays the top 10 data nodes that receive the greatest number of slow queries and provides information about the slow queries.
    

## Basic instance information

This section displays the instance ID, instance type, engine version, and the region in which the instance is deployed.

Figure 1. Basic instance information![Basic instance information](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8267558161/p244227.png)

## Summary

This section displays the diagnostic results and the score of the instance health status. The highest score is 100. If your instance achieves a score lower than 100, you can check the diagnostic items and details.

Figure 2. Summary![Summary](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8267558161/p244228.png)

## Performance level

This section displays the statistics and states of key performance metrics related to the instance. You must pay attention to performance metrics that are in the **Hazard** state.

**Note**

If your instance runs in a cluster architecture or a read/write splitting architecture, you must check whether the performance metrics are skewed and check for skewed data nodes. For more information about the cluster and read/write splitting architecture, see [Cluster master-replica instances](/help/en/redis/product-overview/cluster-master-replica-instances#concept-tds-4mm-tdb) and [Read/write splitting instances](/help/en/redis/product-overview/read-or-write-splitting-instances-1#concept-zm4-3mh-tdb). In addition, we recommend that you focus on the data nodes with higher loads based on the curve charts of each performance metric in the **Top 5 Nodes** section.

Figure 3. Performance level![Performance level](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8267558161/p244658.png)

**Performance metric**

**Threshold**

**Impact**

**Possible cause and troubleshooting method**

**CPU Utilization**

60%

When an instance has high CPU utilization, the throughput of the instance and the response time to clients are affected. In some cases, the clients may be unable to respond.

Possible causes:

-   The instance runs commands that require high time complexity.
    
-   Hotkeys exist.
    
-   Connections are frequently established.
    

For more information about how to troubleshoot these issues, see [Troubleshoot high CPU utilization on an instance](/help/en/redis/user-guide/troubleshoot-high-cpu-utilization-on-an-apsaradb-for-redis-instance#concept-2023919).

**Memory Usage**

80%

When the memory usage of an instance continuously increases, response time increases, queries per second (QPS) becomes unstable, and keys may be frequently evicted. This affects your business.

Possible causes:

-   The memory is exhausted.
    
-   A great number of large keys exist.
    

For more information about how to troubleshoot these issues, see [Troubleshoot high memory usage on an instance](/help/en/redis/user-guide/troubleshoot-the-high-memory-usage-of-an-apsaradb-for-redis-instance#task-2025905).

**Connections Usage** of data nodes

80%

When the number of connections to a data node reaches the upper limit, connection requests may time out or fail.

**Note**

-   This metric is collected when clients connect to a cluster instance in direct connection mode. For more information about the direct connection mode, see [Enable the direct connection mode](/help/en/redis/user-guide/enable-the-direct-connection-mode#task-2362225).
    
-   This metric is not collected when clients connect to a cluster instance or read/write splitting instance by using proxy nodes. In this case, you must monitor the number of connections on the proxy nodes. For more information, see [View performance monitoring data](/help/en/redis/user-guide/view-monitoring-data#task-645669).
    

Possible causes:

-   User traffic spikes.
    
-   Idle connections are not released for an extended period of time.
    

For more information about how to troubleshoot these issues, see [Instance sessions](/help/en/redis/user-guide/instance-sessions#task-2490861).

**Inbound Traffic**

80%

When the inbound or outbound traffic exceeds the maximum bandwidth provided by the instance type, the performance of clients is affected.

Possible causes:

-   Workloads spike.
    
-   Large keys are frequently read or written.
    

For more information about troubleshoot these issues, see [Troubleshoot high traffic usage on an instance](/help/en/redis/user-guide/troubleshoot-high-traffic-usage-on-an-apsaradb-for-redis-instance#task-2025791).

**Outbound Traffic**

80%

If your instance runs in the [cluster architecture](/help/en/redis/product-overview/cluster-master-replica-instances#concept-tds-4mm-tdb) or [read/write splitting architecture](/help/en/redis/product-overview/read-or-write-splitting-instances-1#concept-zm4-3mh-tdb), the system measures the overall access performance of the instance based on the preceding performance metrics and displays the result in the diagnostic report. The following table describes the criteria used to determine skewed requests, possible causes of skewed requests, and troubleshooting methods.

**Note**

If the diagnostic report indicates that the instance has skewed requests for a specific performance metric, you must check the nodes to which the skewed requests are directed.

**Criteria**

**Possible cause**

**Troubleshooting method**

The following conditions are met:

-   Peak values of performance metrics for all data nodes of an instance are greater than the following thresholds:
    
    -   CPU utilization: 10%.
        
    -   Memory usage: 20%.
        
    -   Inbound and outbound traffic: 5 Mbit/s.
        
    -   Connection usage: 5%.
        
-   The balance score is greater than 1.3, which is calculated by using the following formula: max{average performance values of all data nodes}/median performance value of all data nodes.
    
    For example, an instance contains four data nodes and the average CPU utilization of the four nodes is 10%, 30%, 50%, and 60%. Then, the median value is 40% and the result is 1.5 from 60%/40%. The calculated value 1.5 is greater than 1.3. Therefore, the system considers the CPU utilization of the instance skewed.
    

-   A data node has excessive large keys.
    
-   A data node has hotkeys.
    
-   The hash tags are improperly configured.
    
    **Note**
    
    If keys are configured with the same hash tag, the keys are stored on the same data node. If a large number of keys are configured with the same hash tag, the node is overwhelmed by these keys.
    

-   [Use the offline key analysis feature](/help/en/redis/user-guide/offline-key-analysis#concept-ufz-byl-jgb)
    
-   [Use the top key statistics feature](/help/en/redis/user-guide/use-the-real-time-key-statistics-feature#task-2096542)
    

## TOP 10 nodes that receive the greatest number of slow queries

This section displays the top 10 data nodes that receive the greatest number of slow queries and statistics about the slow queries. The statistics include the following slow logs:

-   The slow logs of data nodes that are stored in the system audit logs. These slow logs are retained only for four days.
    
-   The slow logs that are stored on the data node. Only the most recent 1,024 log entries are retained. You can use [redis-cli](/help/en/redis/user-guide/use-redis-cli-to-connect-to-an-apsaradb-for-redis-instance#concept-tzm-xdd-5db) to connect to the instance and run the SLOWLOG GET command to view these slow logs.
    

Figure 4. Slow query analysis![Slow query analysis](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8267558161/p244659.png)

You can analyze the slow queries and determine whether improper commands exist. This way, you can find the solutions to different issues.

**Cause**

**Solution**

Commands that have a time complexity of O(N) or consume a large amount of CPU resources, such as keys \*.

Evaluate and disable commands that cause a high risk and consume a large amount of CPU resources, such as FLUSHALL, KEYS, and HGETALL. For more information, see [Disable high-risk commands](/help/en/redis/user-guide/disable-high-risk-commands#task-uzq-tgk-5gb).

Large keys that are frequently read from and written to the data nodes.

Analyze and evaluate the large keys. For more information, see [Use the offline key analysis feature](/help/en/redis/user-guide/offline-key-analysis#concept-ufz-byl-jgb). Then, split these large keys based on your business requirements.
