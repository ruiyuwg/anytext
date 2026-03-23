You can use existing ApsaraDB RDS for MySQL instances or new RDS instances to quickly create a Global Active Database (GAD) instance group to meet cross-region disaster recovery (DR) requirements or to process multi-node read and write requests. This topic describes how to create and delete a GAD instance group.

## **Limits**

When you create a GAD instance group, **you must use an existing RDS instance that meets the following requirements as the primary instance of the GAD instance group**. If no RDS instance meets these requirements, you must create an RDS instance before creating a GAD instance group. For more information, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-an-apsaradb-rds-for-mysql-instance-1).

-   **Billing method:** The RDS instance uses the subscription or pay-as-you-go billing method.
    
-   **RDS edition:** The RDS instance runs RDS High-availability Edition or RDS Cluster Edition.
    
-   **Database engine and engine version:** The RDS instance runs MySQL 5.7 or MySQL 8.0.
    
-   **Instance type:** The RDS instance uses an instance type that provides specifications higher than 2 cores and 4 GB.
    
-   **Storage capacity:** The storage capacity of the RDS instance is greater than 50 GB.
    
-   **Regional Limitations:**
    
    The primary and secondary instances must be deployed in different regions. Currently, the active geo-redundancy and DR features support the same regions, as listed below:
    
    -   **Mainland China:** China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Shenzhen), China (Guangzhou), China (Hohhot), China (Ulanqab), China (Heyuan), China (Chengdu)
        
    -   **China (Hong Kong)**
        
    -   **Regions outside China:** Thailand (Bangkok), South Korea (Seoul), Philippines (Manila), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London)
        
    

**Note**

If this is the first time you use GAD, you must [authorize DTS to access cloud resources](/help/en/rds/apsaradb-rds-for-mysql/authorize-dts-to-access-cloud-resources) before you can create an instance group.

## **Usage notes**

-   **An RDS instance can be added to only one GAD instance group as the primary or secondary instance**.
    
-   A GAD instance group can contain only one primary instance and up to four secondary instances.
    

## **Billing rules**

The fees for a GAD instance group include the **fee for the new RDS instance** and the **fee for the DTS data synchronization tasks**. If you use an existing RDS instance to create a GAD instance group, no fees are generated for the existing RDS instance. If you want to use a new RDS instance to create a GAD instance group, fees are generated for the new RDS instance. For more information, see [Billing rules](/help/en/rds/apsaradb-rds-for-mysql/what-is-a-global-active-database/#629b7275445jz).

## **Create a GAD instance group**

1.  On the [Global Active Instances](https://rds.console.alibabacloud.com/globalDataBase/cn-hangzhou?spm=a2c4g.11186623.0.0.415d2aa52dtUMc) page, click **Create Instance Group**.
    
2.  In the **Create Global Active Instance Group** dialog box, configure the following parameters:
    
    **Parameter**
    
    **Description**
    
    **Instance Group Name**
    
    The name of the instance group. We recommend that you specify an informative name.
    
    **Naming conventions:** The name must start with a letter or Chinese character and can contain digits, underscores (\_), and hyphens (-). It must be 2 to 126 characters in length.
    
    **Instance Group Type**
    
    The type of the instance group. You can select a type as needed:
    
    -   **Disaster Recovery**: **This option is suitable for cross-region DR and DR drills**. If you select this option, the instance group consists of one primary instance and multiple secondary instances, supports primary/secondary switchovers, and uses one-way or two-way data synchronization between primary and secondary instances.
        
    -   **LIve More**: **This option is suitable for cross-region multi-node read and write requests**. If you select this option, the instance group consists of one primary instance and multiple secondary instances and uses two-way data synchronization between the primary and secondary instances to meet the requirements for the high concurrency of read and write requests and low access latency.
        
    
    For a detailed description of disaster recovery and multi-active types and their scenarios, see [Global Multi-Active Database](/help/en/rds/apsaradb-rds-for-mysql/what-is-a-global-active-database/).
    
    **Region Of Primary Instance**
    
    The region in which the primary instance resides. If you want to use a different region, change the region in the upper part of the ApsaraDB RDS console.
    
    **Primary Instance**
    
    The RDS instance that you want to use as the primary instance in the specified region.
    
    If no primary instance is available in the current region, click **Create Primary Instance** to go to the ApsaraDB RDS buy page.
    
3.  Click **OK**. You can view the created instance group on the Global Active Instances page. You can [add a secondary instance](/help/en/rds/apsaradb-rds-for-mysql/add-or-remove-a-secondary-role) to the instance group.
    

## **Delete a GAD instance group**

**Important**

-   A GAD instance group can be deleted when the instance group contains only the primary instance.
    
-   **Delete a GAD instance group** and **release or unsubscribe from a primary instance** are two different operations:
    
    -   **Delete a GAD instance group**: Only the GAD instance group is deleted. The instances in the GAD instance group are retained and run as expected. The data of the instances remains unchanged.
        
    -   **Release or unsubscribe from the primary instance**: You must delete the GAD instance group before you can [release or unsubscribe from the primary instance](/help/en/rds/apsaradb-rds-for-mysql/release-or-unsubscribe-from-an-instance). After you release or unsubscribe from the primary instance, the primary instance is moved to the [recycle bin](/help/en/rds/apsaradb-rds-for-mysql/manage-apsaradb-rds-for-mysql-instances-in-the-recycle-bin) and is deleted upon expiration.
        
-   If the primary instance uses the pay-as-you-go billing method and has overdue payments, the primary instance is suspended. If the primary instance uses the subscription billing method and the non-renewal feature is enabled for the primary instance, the primary instance is moved to the recycle bin. In these cases, **all instances in the instance group are removed from the GAD instance group, and the DTS task is released**. If a secondary instance in the instance group can process only read requests, the secondary instance is promoted to process read and write requests after the removal.
    

1.  Go to the [Global Active Instances](https://rds.console.alibabacloud.com/globalDataBase/cn-hangzhou?spm=a2c4g.11186623.0.0.415d2aa52dtUMc) page.
    
2.  Find the instance group that you want to delete and click **Delete** in the **Actions** column.
    
    **Note**
    
    If the **Delete** button is dimmed, the GAD instance group still contains a secondary instance. In this case, you must remove the secondary instance from the instance group.
    
3.  Read the message that appears and click **OK** to delete the instance group.
    

## **FAQ**

Q: Can I select a Serverless instance as the primary instance when creating an instance group?

A: You cannot directly set a Serverless instance as the primary instance when creating an instance group. However, RDS MySQL supports creating a Serverless secondary instance in both Disaster Recovery and Active Redundancy instance groups.

**For Disaster Recovery instance groups**, you can indirectly achieve the goal of using a Serverless instance as the primary instance by following these steps:

1.  [Create a Serverless secondary instance](/help/en/rds/apsaradb-rds-for-mysql/add-or-remove-a-secondary-role).
    
2.  Then use the [primary/secondary switchover feature](/help/en/rds/apsaradb-rds-for-mysql/perform-primary-secondary-role-switchover-for-disaster-recovery) to promote the Serverless secondary instance to be the primary instance of the group.
    

**Important**

[Forced primary/secondary switchover](/help/en/rds/apsaradb-rds-for-mysql/perform-primary-secondary-role-switchover-for-disaster-recovery) carries a risk of data loss. Proceed with caution.

## **References**

-   [Global Active-Active Database](/help/en/rds/apsaradb-rds-for-mysql/what-is-a-global-active-database/)
    
-   [Create or delete a secondary instance](/help/en/rds/apsaradb-rds-for-mysql/add-or-remove-a-secondary-role)
    
-   [View a instance group](/help/en/rds/apsaradb-rds-for-mysql/view-instance-group-information)
    
-   [Perform primary/secondary switchovers for DR](/help/en/rds/apsaradb-rds-for-mysql/perform-primary-secondary-role-switchover-for-disaster-recovery)
