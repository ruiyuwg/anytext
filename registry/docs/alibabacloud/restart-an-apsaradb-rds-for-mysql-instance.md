You can manually restart an instance if its connections are full or it has performance issues.

## Prerequisites

The instance is in the **Running** state.

## Impacts

-   Restarting the instance causes a connection interruption that lasts for approximately 30 seconds. Ensure that your service has an automatic reconnection mechanism. Before the restart, stop all write operations and plan accordingly. Proceed with caution.
    
    **Warning**
    
    Because RDS Basic series instances have only one database node and no secondary node for hot backup, the instance is unavailable for an extended period if the node goes down unexpectedly or during tasks such as instance restarts, configuration changes, or version upgrades. If your business requires high database availability, do not use Basic series instances. Instead, choose another series, such as the high-availability series. Some Basic series instances also support [an upgrade to the high-availability series](/help/en/rds/apsaradb-rds-for-mysql/rds-basic-edition#section-5sr-8hd-e8j).
    
-   If the primary instance has read-only instances, restarting the primary instance does not restart the read-only instances. The replication relationship is automatically restored after the restart.
    

## Restart an instance in the console

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the upper-right corner of the page, click **Restart Instance**.
    
3.  In the confirmation dialog box, click **OK**.
    
    **Warning**
    
    After you click **Restart Instance**, the instance status changes to **Restarting**. This action interrupts connections to the instance, so plan accordingly.
    

## FAQ

-   Q: Are there other situations that require a manual restart, besides an excessive number of connections or performance issues?
    
    A: Yes. You can manually restart an instance if a crash prevents temporary files from being deleted. You can also perform a manual restart to recover from other issues that occur at runtime.
    
-   Q: For a high-availability series instance, does restarting the primary instance cause a primary/secondary switchover?
    
    A: It depends. A primary/secondary switchover may occur. After the restart, the zones of the primary and secondary databases are swapped.
    
-   Q: Do the instance endpoint and virtual IP address change after a restart?
    
    A: No, it will not.
    
-   Q: What factors affect the restart duration, and how can I reduce it?
    
    A: The restart duration depends on factors such as the number of databases and tables, active connections, and service traffic. To reduce the restart time, avoid creating unnecessary databases or tables. Before the restart, reduce active connections and service traffic. Reconnect your service after the restart is complete.
    

## Related API operations

**API**

**Description**

[Restart an instance](/help/en/rds/api-restart-an-apsaradb-for-rds-instance#doc-api-Rds-RestartDBInstance)

Restarts an RDS instance.
