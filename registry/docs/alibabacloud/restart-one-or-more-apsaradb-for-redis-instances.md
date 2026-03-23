If the number of connections to an instance exceeds the upper limit or if an access exception occurs, you can restart the Tair (Redis OSS-compatible) instance.

## **Impacts and precautions**

-   **Data loss** may occur during an instance restart.
    
-   During the restart process, the instance may experience **transient connections**. Before you restart the instance, assess the potential impact on your business and make sure that necessary preparations are in place. In addition, **make sure that your applications can reconnect to the instance**.
    

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides.
    
2.  In the **Actions** column for the target instance, click **Restart**.
    
3.  In the panel that opens, set the **Restart Mode**.
    
    -   **Restart Now**: The instance is restarted immediately.
        
    -   **Restart Within Maintenance Window**: The instance restarts during the configured maintenance window. For more information, see [Set a maintenance window](/help/en/redis/user-guide/set-a-maintenance-window#concept-sjv-kpl-vdb).
        
    
4.  Read the risk notice, select the confirmation checkbox, and click **OK**.
    
    For security purposes, complete secondary authentication, such as Multi-Factor Authentication (MFA), as prompted. After you pass the authentication, you do not need to authenticate again for 15 minutes.
    

## FAQ

### **After I restart an instance, the instance remains in the Restarting state. Why?**

After you restart a Redis Open-Source Edition or Tair (Enterprise Edition) instance, the instance state **immediately** changes to **Restarting**.

If you select **Restart Within Maintenance Window** when you restart the instance, the instance performs a master-replica switchover or shard failover within the **Maintenance Window**. Before the maintenance window begins, the instance can provide services normally.

### **How long does it take to restart an instance?**

It usually takes no more than 10 minutes to restart an instance.

### **Does an instance restart lead to data loss?**

The primary objective of restarting an instance is to quickly restore service availability.

-   Restarting a high-availability master-replica instance generally does not result in data loss. However, if the synchronization between the master and replica nodes is delayed due to reasons such as heavy read/write operations before the instance is restarted, the data that has not been synchronized to the replica node may be lost.
    
-   If you restart a standalone instance, data loss may occur. Exercise caution when you restart the instance. If your business requires high data reliability, we recommend that you upgrade the standalone instance to a high-availability master-replica instance.
