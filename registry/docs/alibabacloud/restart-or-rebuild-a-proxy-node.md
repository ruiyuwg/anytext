Tair (Redis OSS-Compatible) cluster and read/write splitting instances route client requests through proxy nodes. If a proxy node experiences uneven connection distribution, high latency, or service disruption, restart or rebuild it to restore normal operation.

## Restart mode comparison

**Mode**

**Effect**

**When to use**

**In-place Restart**

Restarts the proxy process on the existing node

Connection imbalance or minor latency spikes

**Rebuild Proxy**

Replaces the proxy node entirely

In-place restart did not resolve the issue

Start with **In-place Restart**. If the problem persists, use **Rebuild Proxy**.

## Impact

**Warning**

Restarting or rebuilding proxy nodes may cause transient connections. Perform this operation during off-peak hours and make sure your application supports automatic reconnection.

## Prerequisites

The instance must meet one of the following conditions:

-   A [cluster instance](/help/en/redis/product-overview/cluster-master-replica-instances) in proxy mode
    
-   A [read/write splitting instance](/help/en/redis/product-overview/read-or-write-splitting-instances-1)
    

## Restart or rebuild a proxy node

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance resides. Find the instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Service Availability**.
    
3.  In the **Proxy Node** section, select the proxy nodes to restart or rebuild and click **Batch Restart**.
    
4.  In the panel that appears, set **Restart Mode**:
    
    -   **In-place Restart**: Restarts the proxy nodes.
        
    -   **Rebuild Proxy**: Rebuilds the proxy nodes. Select this mode if an in-place restart did not resolve the issue.
        
5.  Click **OK**.
    

## Verify the result

After the operation completes, confirm that the proxy nodes function correctly:

1.  On the **Service Availability** page, verify that the instance status returns to **Running**.
    
2.  Check your application logs to confirm that client connections are re-established.
    
3.  Monitor instance performance metrics to verify that latency and connection usage have improved. For more information, see [View performance monitoring data](/help/en/redis/user-guide/view-monitoring-data).
