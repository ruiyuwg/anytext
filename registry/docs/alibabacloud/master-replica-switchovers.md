When Tair (Redis OSS-compatible) detects that the master node of an instance is unavailable, a master-replica switchover is automatically triggered to promote a replica node to the new master node. This ensures the high availability of the instance. If you receive notifications such as text messages, emails, or internal messages informing you that a master-replica switchover is complete for your instance, you can refer to this topic for information on the possible causes, impacts, and suggestions regarding the switchover.

## Causes

-   Failures in instance hosts
    
    If Alibaba Cloud detects that the underlying host of an instance is experiencing a failure, such as abnormal termination of processes or memory anomalies due to high load on the instance, the system immediately triggers a master-replica switchover. This prompt action ensures that the instance is restored in a timely manner and minimizes the duration of any disruption caused by the failure.
    
    You are notified of such events with internal messages or emails in the following format:
    
    \[Alibaba Cloud\] Dear\*\*\*\*: An anomaly has been detected in your Tair instance r-bp1zxszhcgatnx\*\*\*\* (name: \*\*\*\*). A switchover is triggered to ensure stable operation of the instance. We recommend that you check whether your application is still connected to your instance and configure your application to automatically reconnect to the instance.
    
-   Hidden risks on instance hosts
    
    If Alibaba Cloud detects risks on the underlying host of an instance, such as network jitters or disk anomalies, it indicates a potential for future impact on the normal operation of the instance. In such cases, the system automatically initiates proactive O&M tasks to handle the risks, and triggers a master-replica switchover during the maintenance window to replace the at-risk host nodes.
    
    However, for events requiring urgent risk remediation, the system takes swift actions to resolve the issues and initiate a master-replica switchover. For example, if a critical bug is identified in the Redis community, the relevant instance proactively undergoes a minor version update. You can query the records of such actions in the event history. For more information, see [Query history events](/help/en/redis/user-guide/query-history-events#task-1964286). You can also manage pending master-replica switchover events. For more information, see [View and manage scheduled events](/help/en/redis/user-guide/query-and-manage-pending-events#task-1963135).
    

## Impacts

The instance automatically completes the entire switchover process. After the switchover is complete, the instance runs as expected.

However, during the switchover process, the following situations may occur:

-   The data nodes on which the switchover is performed are disconnected for a few seconds and may remain read-only for up to 30 seconds.
    
-   After the instance enters the **Switching** state, you cannot manage the instance. For example, you cannot modify the instance configurations or migrate the instance to another zone. After the master-replica switchover is complete, the state of the instance changes to **Running**.
    

## Suggestions

-   Make sure that your application is configured to automatically reconnect to the instance or handle exceptions. Otherwise, one of the following error messages may be returned during a switchover: `READONLY You can't write against a read only instance` or `DISABLE You can't write or read against a disable instance`.
    
-   When a master-replica switchover is triggered for an instance, the instance automatically completes the entire switchover process by promoting the replica node to become the new master node and creating another replica node for data synchronization between the master and replica nodes. You do not need to perform any operations during this process.
    
    **Note**
    
    After the master-replica switchover is complete for a dual-zone instance, the master node resides in the secondary zone and the replica node resides in the primary zone. This may cause cross-zone access between the instance and other services. To resolve this issue, you can manually switch zones on the **Service availability** page in the console.
    

## **References**

Tair (Redis OSS-compatible) also allows you to manually trigger a master-replica switchover for disaster recovery drills or nearby connections in multi-zone deployment scenarios. For more information, see [Manually switch workloads from a master node to a replica node](/help/en/redis/user-guide/manually-switch-workloads-from-a-master-node-to-a-replica-node).

## FAQ

-   What is the principle behind the master-replica switchover triggered by an instance failure?
    
    The high availability system relies on its liveness detection mechanism to detect failures. The following table describes the mechanism.
    
    **Major event**
    
    **Description**
    
    Health check
    
    The high availability system checks whether the master and replica nodes are healthy.
    
    Master node failure
    
    1.  When a master node is determined to be unavailable, a replica node acts as the master node. At the same time, the virtual IP address (VIP) of the replica node is used but the endpoint of the instance remains unchanged.
        
    2.  Another replica node is created to ensure data synchronization.
        
    
    Replica node failure
    
    When a replica node is determined to be unavailable, another replica node is automatically created to ensure data synchronization and maintain the data persistence of the master-replica architecture.
    
    **Note**
    
    Specific data that was recently written to a master node may be lost because the synchronization between the master and replica nodes is asynchronously implemented.
    
-   Does a master-replica switchover triggered for a [read/write splitting instance](/help/en/redis/product-overview/read-or-write-splitting-instances-1#concept-zm4-3mh-tdb) affect the use of read replicas in the instance?
    
    During the switchover, the number of available read replicas is reduced by 1. After the switchover is complete, the system returns back to normal.
    
-   Does a master-replica switchover triggered for a specific data shard in an instance affect the instance as a whole if the instance is a [cluster instance](/help/en/redis/product-overview/cluster-master-replica-instances#concept-tds-4mm-tdb)?
    
    The instance as a whole is not affected. Only the data shard is affected.
