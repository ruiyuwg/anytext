When you delete or update data in a database, the data stored on disks can become discontinuous. This results in space fragments, which waste disk space and degrade database performance. Database Autonomy Service (DAS) supports automatic fragment reclamation for MySQL tables that meet specified thresholds, such as tablespace size and fragmentation rate. The reclamation is performed during the maintenance window of the instance. DAS also checks the instance workload to minimize the impact on your services.

## Prerequisites

-   Alibaba Cloud Managed Services is enabled for the instance.
    
-   The instance is one of the following types:
    
    -   RDS for MySQL High-availability Edition, RDS Enterprise Edition, or Cluster Edition.
        
    -   MyBase for MySQL High-availability Edition.
        
-   The instance has been running for 14 days or more.
    
-   The instance has at least four CPU cores.
    

## Background information

Tablespace fragments are typically created for the following reasons:

-   Records are deleted, and the original space cannot be reused.
    
-   Records are updated, and the original space cannot be reused. This usually occurs in variable-length fields.
    
-   Record insertions cause page splits, which reduces the fill factor of pages.
    

## **Limits**

-   Automatic fragment reclamation is supported only for tables that use the InnoDB storage engine.
    
    **Note**
    
    You can run the `SHOW TABLE STATUS` or `SHOW TABLE STATUS LIKE 'table_name';` statement to check the storage engine of a table. The storage engine is specified in the **Engine** field of the output.
    
-   Automatic fragment reclamation is supported only for tables with a tablespace size in the range of 5 GB to 100 GB.
    
    **Note**
    
    If the tablespace is smaller than 5 GB or larger than 100 GB, automatic fragment reclamation is not performed for the table.
    

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

## Enable automatic fragment reclamation

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Intelligent O&M Center** > **Instance Monitoring**.
    
3.  On the page that appears, find the database instance that you want to manage and click the instance ID. The instance details page appears.
    
4.  On the instance details page, click **Autonomy Center** in the left-side navigation pane.
    
5.  On the **Autonomy Center** tab, click **Autonomy Service Settings** in the upper-right corner.
    
6.  On the **Autonomous Function Management** > **Autonomous Function Settings** tab, turn on the autonomous feature switch.
    
7.  On the **Optimization and Throttling** tab, select **Automatic Fragment Recycling** and configure the following parameters.
    
    **Important**
    
    When the storage usage of the database instance meets the specified thresholds, DAS automatically reclaims space fragments during the instance's **Maintenance Window**.
    
    **Parameter**
    
    **Description**
    
    **Tablespace**
    
    The minimum tablespace size of a single physical table that triggers automatic fragment reclamation. The value must be in the range of 5 GB to 100 GB. The default value is 10 GB.
    
    If a single tablespace is too large, the reclamation may take a long time. Select a value as needed.
    
    **Note**
    
    If the tablespace of all tables in the database instance is smaller than 5 GB or larger than 100 GB, the system does not perform space fragment reclamation.
    
    **Fragmentation Rate**
    
    The fragmentation rate of a single physical table that triggers automatic fragment reclamation. The value must be in the range of 10% to 99%. The default value is 20%.
    
    A high fragmentation rate reduces the frequency of space optimization. Select a value as needed.
    
    **Note**
    
    If the fragmentation rate of all tables in the database instance is lower than 10%, the system does not perform space fragment reclamation.
    
    **Note**
    
    For example, if you set **Tablespace** to 5 GB and **Fragmentation Rate** to 10%, automatic fragment reclamation is triggered for all tables with a tablespace size from 5 GB to 100 GB and a fragmentation rate of at least 10%.
    
8.  Click **OK**.
    
9.  **Optional:** Click **Event Subscription Settings** to configure event notifications for automatic fragment reclamation. For more information, see [Enable the event subscription feature](/help/en/das/user-guide/enable-event-subscription).
    
10.  Configure an **Alert Template** to subscribe to alerts about the automatic fragment reclamation status of your database instance.
     
     The system recommends an alert template and adds alert rules for the corresponding autonomy events. You can follow the prompts to complete the configuration.
     
     **Note**
     
     -   If you have already configured an alert template for the instance, add alert rules for the corresponding autonomy events to the template as prompted.
         
     -   To configure an alert template and alert rules yourself, see [Configure an alert template](/help/en/das/user-guide/configure-alert-templates) and [Configure an alert rule](/help/en/das/user-guide/configure-alert-rules).
         
     
11.  You can select an **Alert Contact Group** to receive notifications.
     
     -   Click **Add Contact** to create an alert contact.
         
     -   Click **Create Contact Group** to create an alert contact group.
         
     -   Find the contact and click **Edit** to modify it or **Remove** to delete it.
         
     
     For more information, see [Manage alert contacts](/help/en/das/user-guide/manage-alert-contacts).
     
12.  Click **Submit Configuration** and confirm the alert configuration in the dialog box.
     

## **References**

If the storage space of your database instance is insufficient, you can perform the following operations:

-   Use [Storage Analysis](/help/en/das/user-guide/storage-analysis-4) to view the storage usage of the database instance and identify storage issues.
    
-   Enable [Automatic Space Expansion](/help/en/das/user-guide/automatic-space-expansion). If the storage space of the database instance becomes insufficient, the storage space is automatically expanded to ensure service stability.
    

## Related APIs

**API**

**Description**

[UpdateAutoResourceOptimizeRulesAsync](/help/en/das/developer-reference/api-das-2020-01-16-updateautoresourceoptimizerulesasync)

Asynchronously configures the parameters of the automatic fragment reclamation feature for specified database instances in batches.

[GetAutoResourceOptimizeRules](/help/en/das/developer-reference/api-das-2020-01-16-getautoresourceoptimizerules)

Queries the automatic fragment reclamation rules of a specified database instance.

[DisableAutoResourceOptimizeRules](/help/en/das/developer-reference/api-das-2020-01-16-disableautoresourceoptimizerules)

Disables the automatic fragment reclamation feature for specified database instances in batches.
