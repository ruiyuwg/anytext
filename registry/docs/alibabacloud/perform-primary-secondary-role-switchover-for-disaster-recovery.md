If all nodes of the primary instance in a Global Active Database (GAD) instance group for ApsaraDB RDS for MySQL are unavailable, you can perform a switchover by promoting a secondary instance in the GAD instance group to be the primary instance with a few clicks. Before the switchover, **the secondary instance can process only read requests**. After the switchover, **the new primary instance** can process read and write requests. This helps restore the workloads of your applications. This feature is suitable for scenarios such as disaster recovery (DR) drills and geo-disaster recovery switchovers.

## **Prerequisites**

-   The GAD instance group is in the **Running** state.
    
-   The GAD instance group is a **DR** instance group. For more information about the differences between a DR instance group and an active geo-redundancy instance group, see [DR and active geo-redundancy](/help/en/rds/apsaradb-rds-for-mysql/what-is-a-global-active-database/#f0a674fd94i9l).
    

## **Usage notes**

-   If you forcefully perform a primary/secondary switchover on a GAD instance group, data loss may occur. Proceed with caution. When you perform a primary/secondary switchover on a GAD instance group, transient connections may occur. We recommend that you perform the primary/secondary switchover during off-peak hours and ensure that your application is configured to automatically reconnect to the GAD instance group.
    
-   A Data Transmission Service (DTS) data synchronization task that is created for the primary and secondary instances implements one-way data synchronization. After a forceful primary/secondary switchover on a GAD instance group is complete, **the original primary instance and the rest of the secondary instances in the GAD instance group are removed from the GAD instance group**. In this case, the DTS data synchronization task is interrupted. Proceed with caution.
    
    **The instances removed from the GAD instance group become independent ApsaraDB RDS for MySQL instances. The independent RDS instances are not released,** and the instance data and the DTS data synchronization accounts remain unchanged. You can still find the RDS instances on the [Instances](https://rds.console.alibabacloud.com/rdsList/cn-hangzhou) page.
    
    **Note**
    
    After the primary/secondary switchover on a GAD instance group is complete, you can [re-add the removed ApsaraDB RDS for MySQL instances as secondary instances to the GAD instance group](/help/en/rds/apsaradb-rds-for-mysql/add-or-remove-a-secondary-role).
    

## **Procedure**

1.  Go to the [Global Active Instances](https://rds.console.alibabacloud.com/globalDataBase/cn-hangzhou) page.
    
2.  Find the GAD instance group that you want to manage and click the instance group ID.
    
3.  In the **List of RDS instances** section, find the required instance and click **Switch To Primary Instance** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5057522571/p842669.png)
    
4.  On the page that appears, read the impacts of a primary/secondary switchover and click **Switch**.
    

## **Related operations**

After the primary/secondary switchover on a GAD instance group is complete, evaluate your business requirements and determine whether to change **the endpoint in your application** to [the endpoint of the new primary instance](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance) to connect to the new primary instance.
