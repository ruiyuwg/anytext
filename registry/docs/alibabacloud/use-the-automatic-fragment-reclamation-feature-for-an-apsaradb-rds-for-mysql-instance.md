When you delete or update data in a table, individual tablespace fragments that cannot be reused to store new data are generated. These fragments shatter the storage space of the table on the disk into discontinuous segments and degrade the efficiency and performance of the disk. Database Autonomy Service (DAS) provides the automatic fragment reclamation feature for ApsaraDB RDS for MySQL. After you enable the feature for your ApsaraDB RDS for MySQL instance, the primary RDS instance automatically executes the OPTIMIZE TABLE or ALTER TABLE statement within the maintenance window of the instance to reclaim tablespace fragments.

## Prerequisites

-   Your RDS instance runs RDS High-availability Edition, RDS Enterprise Edition, or RDS Cluster Edition.
    
-   Your RDS instance has been created for more than 14 days.
    
-   Your RDS instance has at least four CPU cores.
    
-   The physical tables on your RDS instance use the InnoDB engine.
    

## Background information

Tablespace fragments are generated due to the following reasons:

-   Records are deleted, and the original tablespace cannot be reused.
    
-   Records are updated, and the original tablespace cannot be reused. In most cases, records are updated for variable-length fields.
    
-   Inserted records cause page splits and decrease the fill rate of pages.
    

## Pre-optimization checks

DAS runs the Optimize Table or Alter Table command on the primary instance to reclaim tablespace fragments. Before an **Automatic Fragment Recycling** operation, DAS automatically performs the following checks on the database to minimize the impact on database performance and space. The **Automatic Fragment Recycling** operation starts only after all checks are passed.

-   If any of the following checks fail, the **Automatic Fragment Recycling** operation on the corresponding table stops immediately.
    
    -   The available space of the instance is at least three times the physical space of the table to be reclaimed.
        
        **Note**
        
        For example, to reclaim fragments for Table\_1, which occupies 30 GB of physical space, the database must have at least 90 GB of free space.
        
    -   The table has no full-text index (FULLTEXT).
        
-   If a check fails, DAS waits 1 to 5 minutes and then reruns it. If the checks do not pass within the maintenance window, DAS retries them during the next maintenance window. After the checks pass, DAS performs **Automatic Fragment Recycling**.
    
    -   No backup jobs are running on the instance.
        
    -   No schema evolution operations are in progress.
        
    -   DAS checks the CPU utilization of the instance and estimates the time required for **Automatic Fragment Recycling**. It verifies that the CPU utilization was below 70% during the same time period on the previous day and the previous week, and that the CPU utilization is below 80% immediately before the operation.
        
        **Note**
        
        For example, if a table occupies 90 GB of physical space and the fragment reclamation is expected to take 30 minutes and is scheduled to start at 03:00 on December 10, the following conditions must be met:
        
        -   The CPU utilization from 03:00 to 03:30 on December 9, 2020, must be less than 70%.
            
        -   The CPU utilization from 03:00 to 03:30 on December 3, 2020, must be less than 70%.
            
        -   The CPU utilization at 03:00 on December 10, 2020, must be less than 80%.
            
        
    -   No SQL statements that take more than 3 seconds to execute are running on the target table.
        
    -   No pending transactions exist. A pending transaction is a transaction that holds a lock but is not committed for more than 15 seconds.
        
    -   The number of active sessions on the instance is less than 64.
        

**Note**

If the checks fail, you cannot use the **Automatic Fragment Recycling** feature. You can reclaim tablespace fragments by manually running the OPTIMIZE TABLE command. For more information, see [Use the OPTIMIZE TABLE command to release the tablespace of a MySQL instance](/help/en/rds/support/how-do-i-use-the-optimize-table-statement-to-release-the-tablespace-of-an-apsaradb-rds-for-mysql-instance#task-2258268).

## **Activate DAS O&M service**

Before using automatic fragment reclamation, activate the O&M service of DAS first. If the O&M service has already been activated, skip the following steps.

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Instances**.
    
3.  On the **Instances** page, click **Activate** in the **O&M Service** column corresponding to the instance.
    
4.  In the panel that appears, select a value for **Service Duration** and then click **Activate**.
    

## Configure automatic fragment reclamation

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, choose **Autonomy Services** > **Diagnostics**. On the page that appears, click the **Autonomy Center** tab and then click **Autonomy Service Settings**.
    
3.  On the **Autonomous Function Settings** tab of the **Autonomous Function Management** panel, enable the autonomy service. On the **Optimization and Throttling** tab, select **Automatic Fragment Recycling**.
    
4.  Configure the following parameters and click **OK**.
    
    **Important**
    
    When the storage usage of a table in the database instance reaches the specified thresholds, DAS automatically reclaims the tablespace fragments during the specified **maintenance window** for the database instance.
    
    **Parameter**
    
    **Description**
    
    **Tablespace**
    
    The threshold of storage usage for a physical table. Unit: GB. Valid values: 5 to 100. Default value: 10.
    
    If you set this parameter to a large value, the reclamation process may require a long period of time to complete. We recommend that you specify a value based on your business requirements.
    
    **Note**
    
    If the storage usage of all tables on the RDS instance is less than 5 GB or greater than 100 GB, DAS does not reclaim the tablespace fragments.
    
    **Fragmentation Percentage**
    
    The percentage of the storage usage of tablespace fragments to the total storage usage of a physical table. Valid values: 10 to 99. Default value: 20.
    
    If you set this parameter to a large value, automatic fragment reclamation is performed less frequently. We recommend that you specify a value based on your business requirements.
    
    **Note**
    
    If the fragmentation rate of all tables on the RDS instance is less than 10%, DAS does not reclaim the tablespace fragments.
    
    **Note**
    
    For example, if the value of the **Tablespace >** parameter is 5 GB and the value of the **Fragmentation Rate >** parameter is 10%, automatic fragment reclamation is triggered for all tables whose tablespace ranges from 5 GB to 100 GB and whose fragmentation rate is greater than or equal to 10%.
    
5.  Optional. In the **Select Alert Template** step, configure an alert template and subscribe to alert notifications. This helps you understand the status of an **automatic fragment reclamation task** at the earliest opportunity.
    
    The system recommends an alert template and adds alert rules for the required autonomy events in the alert template. You can configure the alert template as prompted.
    
    **Note**
    
    -   If you have configured an alert template for your RDS instance, you must add alert rules for the required autonomy events to the alert template as prompted.
        
    -   If you have not configured an alert template for your RDS instance but you want to configure one, you can configure the alert template by following the instructions provided in [Configure alert templates](/help/en/das/user-guide/configure-alert-templates) and [Configure alert rules](/help/en/das/user-guide/configure-alert-rules).
        
    
    1.  In the **Select Alert Contact Group** step, select a contact group.
        
        -   Click **Add Contact** to add an alert contact.
            
        -   Click **Create Contact Group** to create an alert contact group.
            
        -   Find the alert contact that you want to manage and click **Edit** or **Remove** in the **Actions** column to modify or delete information about the alert contact.
            
        
        For more information, see [Manage alert contacts](/help/en/das/user-guide/manage-alert-contacts).
        
    2.  In the **Associate with Resources** step, confirm the associated resources.
        
    3.  Click **Submit Configuration**. In the dialog box that appears, confirm the configuration.
