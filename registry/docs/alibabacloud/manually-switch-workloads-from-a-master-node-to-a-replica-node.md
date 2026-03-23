Tair (Redis OSS-compatible) instances support manual master/replica switchovers. A manual switchover swaps the roles of the master and replica nodes, giving you control over the instance in non-fault scenarios. This differs from an automatic system failover, which is triggered only when a node becomes unavailable.

## Scenarios

A manual switchover is useful in the following scenarios:

-   **Disaster recovery drills**: Simulate a node failure during off-peak hours to verify the disaster recovery capabilities and reliability of your application when a database switchover occurs.
    
-   **Optimize access latency**: If your application and the master node are in different zones, perform a switchover to move the master node to the same zone as your application. This nearest access deployment reduces network latency.
    

### Example

In this example, the application's ECS instance is in Zone B, and the Tair instance's master node is in Zone A. The ECS instance must connect to the master node across zones, which increases network latency and can affect instance performance and business operations.

![可用区就近连接示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7933722771/p188916.png)

To optimize the deployment, perform a master/replica switchover to swap the node roles. After the switchover, the node in Zone B becomes the master node. Only the node's role changes; its zone and ID remain the same. This allows the ECS instance and the database instance to connect within the same zone, minimizing network latency.

## Impacts of a switchover

Before you perform a switchover, be aware of the following impacts:

-   The data nodes on which the switchover is performed are disconnected for a few seconds. A switchover has potential data loss risks. For example, the data may become inconsistent between the master and replica nodes due to synchronization latency. To prevent potential data loss risks caused by the switchover and data doublewrite caused by the Domain Name System (DNS) cache, the data nodes remain read-only for up to 30 seconds.
    
-   After an instance enters the **Switching** state, you cannot manage this instance. For example, you cannot modify the instance configurations or migrate the instance to another zone.
    

**Note**

**About seamless switchovers**

If your instance and client meet the following version requirements, you can perform a seamless master/replica switchover. This avoids the impact of transient disconnections and the read-only state on your business:

-   Instance version: 7.0.2.9 or later.
    
-   Client version: Valkey-Java 5.3.0 or later, or Valkey-Go 1.0.67 or later.
    

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Service Availability**.
    
3.  In the **Data Node** area, select the data shard that you want to switch over and click **Failover**.
    
    **Note**
    
    If the instance uses the cluster architecture, you can view the zones of the master and replica nodes for each data shard on this page.
    
4.  In the panel that appears, select an effective time for the switchover.
    
    -   **Apply Immediately**: The system performs the master/replica switchover immediately.
        
    -   **Effective Within Maintenance Window**: The system performs the switchover during the maintenance window that you configured. For more information about how to view and modify the maintenance window, see [Set a maintenance window](/help/en/redis/user-guide/set-a-maintenance-window#concept-sjv-kpl-vdb).
        
    
    **Note**
    
    If you select **Effective Within Maintenance Window**, the system immediately starts preparations, such as requesting resources and synchronizing data. The instance status changes to **Switching**, but this does not affect your services. The actual node role switchover and its associated impacts, such as transient disconnections and the read-only state, occur only when the **Maintenance Window** begins.
    
5.  Click **OK**.
    
    For security purposes, complete secondary authentication, such as Multi-Factor Authentication (MFA), as prompted. After you pass the authentication, you do not need to authenticate again for 15 minutes.
    

## Related API operations

**API operation**

**Description**

[SwitchInstanceHA - Perform an instance HA switchover](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-switchinstanceha-redis#main-107864)

Manually performs a master/replica switchover. This is useful for disaster recovery drills and for enabling nearest access for applications in multi-zone deployments.

## References

Tair (Redis OSS-compatible) also supports automatic failover. The system continuously monitors the health of the nodes. If the master node becomes unavailable, the system automatically triggers a failover to promote the secondary node to the new master node, ensuring high service availability. For more information, see [High availability](/help/en/redis/user-guide/master-replica-switchovers/#concept-2025502).
