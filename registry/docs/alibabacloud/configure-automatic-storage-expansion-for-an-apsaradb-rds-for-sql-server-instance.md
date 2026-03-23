Database Autonomy Service (DAS) provides the automatic storage expansion feature for ApsaraDB RDS for SQL Server. This feature allows you to monitor the storage usage of your ApsaraDB RDS for SQL Server instance and automatically expands the storage capacity of the RDS instance when the storage capacity is insufficient. This feature helps ensure the stability of your workloads.

## **Prerequisites**

-   Your RDS instance uses cloud disks and runs RDS High-availability Edition or RDS Cluster Edition.
    
    **Note**
    
    -   You cannot separately configure automatic storage expansion for read-only RDS instances.
        
    -   For more information about how to use the automatic storage expansion feature for RDS instances that run different database engines, see the following topics:
        
        -   ApsaraDB RDS for MySQL instances: [Use the automatic storage expansion feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-automatic-storage-expansion-feature-for-an-apsaradb-rds-for-mysql-instance)
            
        -   ApsaraDB RDS for PostgreSQL instances: [Use the automatic storage expansion feature](/help/en/rds/apsaradb-rds-for-postgresql/use-the-automatic-storage-expansion-feature-for-an-apsaradb-rds-for-postgresql-instance)
            
    
-   The balance of your Alibaba Cloud account is sufficient to pay for the resources that are required to expand storage space.
    
-   The service-linked role for DAS is created. For more information, see [AliyunServiceRoleForDAS role](/help/en/das/user-guide/aliyunservicerolefordas-role#task-1930737).
    
    **Note**
    
    If the service-linked role for DAS is not created, the system automatically creates the role before the system expands storage space.
    

## Background information

For more information, see [Auto Scaling](/help/en/das/product-overview/auto-scaling-1#concept-1955467).

## Usage notes

-   If your database instances include read-only instances, DAS automatically checks the storage space of each read-only instance when automatic space expansion is triggered for the primary instance. If the storage space of a read-only instance is smaller than that of the primary instance after storage space expansion, DAS first expands the storage space of the read-only instance. When the storage space of all read-only instances meets the requirement, DAS automatically expands the storage space of the primary instance.
    
-   The automatic space expansion feature cannot be used for specific ApsaraDB RDS for SQL Server instances due to the limits of Windows drivers. In this case, we recommend that you update the minor engine version of these database instances. For more information, see [Update the minor engine version](/help/en/rds/apsaradb-rds-for-sql-server/update-the-minor-engine-version-of-an-apsaradb-rds-for-sql-server-instance#task-2075103).
    

## Billing

The billing rules for automatic space expansion are the same as those for manual space expansion of ApsaraDB RDS instances. For more information, see [Specification changes](/help/en/rds/product-overview/specification-changes).

## Procedure

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Intelligent O&M Center** > **Instance Monitoring**.
    
3.  On the page that appears, find the database instance that you want to manage and click the instance ID. The instance details page appears.
    
4.  In the left-side navigation pane of the page that appears, click **Autonomy Center**.
    
5.  In the upper-right corner of the **Autonomy Center** tab, click **Autonomy Service Settings**.
    
6.  On the **Autonomous Function Settings** tab of the **Autonomous Function Management** panel, enable the automatic storage expansion feature.
    
7.  On the **Optimization and Throttling** tab, select **Automatic Space Expansion** and configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Available Storage Space ≤**
    
    The threshold for triggering automatic storage expansion.
    
    When the remaining storage of the instance is less than or equal to the value of this parameter, the system automatically expands the storage capacity based on the larger value between the following items:
    
    -   5 GB.
        
        **Note**
        
        If the storage capacity of the RDS instance is less than 50 GB and the percentage of the available storage is less than 10% of the storage capacity, the step size for storage capacity expansion is adjusted to 10 GB.
        
    -   15% of the current storage capacity of the RDS instance. The result is the nearest integer that is a multiple of 5.
        
    
    For example, if the total storage capacity is 100 GB, the storage capacity is expanded by 15 GB when the threshold is reached. After the expansion, the total storage capacity is 115 GB.
    
    **Maximum Storage of Automatic Expansion**
    
    The maximum **storage capacity of the RDS instance** after the storage capacity expansion. The value of this parameter must be greater than or equal to the current storage capacity of the RDS instance.
    
    **Note**
    
    The minimum interval between two consecutive storage capacity expansion events is 10 minutes.
    
8.  Click **OK**.
    
9.  Optional. In the Alert Configuration section, configure an **alert template** and subscribe to alert notifications. This helps you understand the status of an **automatic storage expansion task** at the earliest opportunity.
    
    The system recommends an alert template and adds alert rules for the required autonomy events in the alert template. You can configure the alert template as prompted.
    
    **Note**
    
    -   If you have configured an alert template for your RDS instance, you must add alert rules for the required autonomy events to the alert template as prompted.
        
    -   If you have not configured an alert template for your RDS instance but you want to configure one, you can configure the alert template by following the instructions provided in [Configure alert templates](/help/en/das/user-guide/configure-alert-templates) and [Configure alert rules](/help/en/das/user-guide/configure-alert-rules).
        
    
    1.  In the Select Alert Contact Group step, select an **alert contact group**.
        
        -   Click **Add Contact** to add an alert contact.
            
        -   Click **Create Contact Group** to create an alert contact group.
            
        -   Find the alert contact that you want to manage and click **Edit** or **Remove** in the Actions column to modify or delete information about the alert contact.
            
        
        For more information, see [Manage alert contacts](/help/en/das/user-guide/manage-alert-contacts).
        
    2.  In the Associate with Resources step, confirm the **associated resources**.
        
    3.  Click **Submit Configuration**. In the dialog box that appears, confirm the configuration.
        

## View the results of automatic space expansion

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Intelligent O&M Center** > **Instance Monitoring**.
    
3.  On the page that appears, find the database instance that you want to manage and click the instance ID. The instance details page appears.
    
4.  In the left-side navigation pane, click **Autonomy Center**.
    
5.  On the **Autonomy Center** page, select a time range to view the **Auto-Scaling Events** that occurred within the selected time range.
    
6.  Click **Details** to view the details of automatic space expansion.![弹性伸缩事件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5343134861/p610553.png)
