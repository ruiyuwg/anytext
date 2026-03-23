If you plan to change the version of an ApsaraDB for ClickHouse Community-compatible Edition cluster, you can use the instance migration feature in the ApsaraDB for ClickHouse console to migrate data. This feature supports full and incremental data migration, ensuring data integrity.

## Prerequisites

-   Both the source and destination clusters must meet these requirements:
    
    -   Both clusters must be Community-compatible Edition clusters.
        
        **Note**
        
        To migrate a Community-compatible Edition cluster to an Enterprise Edition cluster, or vice versa, see [Migrate a ClickHouse Community-compatible Edition cluster to an Enterprise Edition cluster](/help/en/clickhouse/support/faq#0b5739b8c4dnw).
        
    -   All are running.
        
    -   Both must have a database account and password.
        
    -   The hot and cold tiered storage states are consistent between the two.
        
    -   Both must use the same VPC and be in the same region. You must add each other's IP addresses to their whitelists. If these conditions are not met, you must first resolve the network issues. For more information, see [How to resolve network connectivity issues between a destination cluster and a data source](/help/en/clickhouse/support/faq#1d435ce7c6g6e).
        
        **Note**
        
        You can run `SELECT * FROM system.clusters;` to view the IP address of an ApsaraDB for ClickHouse instance. For more information about configuring a whitelist, see [Set a whitelist](/help/en/clickhouse/configure-the-whitelist#task-2173712).
        
    
-   The destination cluster must also meet these requirements:
    
    -   The version must be **later than or the same as** the source cluster version. For the latest version, see [Community-compatible Edition](/help/en/clickhouse/product-overview/release-notes).
        
    -   The unused disk storage space (excluding cold storage) must be **at least** 1.2 × the used disk storage space (excluding cold storage) of the source cluster.
        
-   Each local table in the source cluster must have a unique distributed table.
    

## Usage notes

-   Migration speed: The migration speed for a single node in the destination cluster typically exceeds 20 MB/s. If the write speed for a single node in the source cluster also exceeds 20 MB/s, you must assess whether the destination cluster's migration speed can keep up with the source cluster's write speed. If it cannot, the migration might never complete.
    
-   During migration, the destination cluster pauses merge operations, but the source cluster does not.
    

Migration content:

-   You can migrate clusters, databases, tables, data dictionaries, materialized views, user permissions, and cluster configurations.
    
    -   Only data dictionaries created using SQL can be migrated. Data dictionaries created using XML are not supported.
        
        To check, you can run the following command: `SELECT * FROM system.dictionaries WHERE (database = '') OR isNull(database);`. If the command returns a result, data dictionaries created using XML exist.
        
    -   If a data dictionary accesses an external service, you must ensure the service is available and its whitelist allows access from the cluster. If a data dictionary uses an internal table from the current ClickHouse instance as its data source and the `HOST` parameter is set to an IP address, access might fail after migration because the IP address changes. In this case, you must confirm the new `HOST` IP address for the ClickHouse instance and manually recreate the data dictionary.
        
-   Kafka and RabbitMQ engine tables are not supported for migration.
    

**Important**

To ensure Kafka and RabbitMQ data is not split, you must clear the Kafka and RabbitMQ engine tables from the source cluster. Then, you can create them in the destination cluster or use different consumer groups.

Only the table schemas of non-MergeTree tables, such as external tables and Log tables, can be migrated.

**Note**

If the source cluster contains non-MergeTree tables, these tables in the destination cluster will only have their schemas after migration, without any business data. To migrate the business data, you can use the `remote` function. For more information, see [Use the remote function to migrate data](/help/en/clickhouse/user-guide/migrate-table-data-from-a-self-managed-clickhouse-cluster-to-an-apsaradb-for-clickhouse-cluster#bf70ef4085f09).

-   Data volume:
    
    -   Cold data: Cold data migrates slowly. You must clear the cold data in the source cluster to ensure its total size does not exceed 1 TB. Otherwise, the migration might fail due to a long duration.
        
    -   Hot data: If hot data exceeds 10 TB, the migration task has a high failure rate. You must not use this method for migration.
        
-   If your data does not meet the preceding conditions, you must perform a [manual migration](/help/en/clickhouse/user-guide/migrate-table-data-from-a-self-managed-clickhouse-cluster-to-an-apsaradb-for-clickhouse-cluster#1fc4ab3b8c8gk).
    

## Impacts on clusters

-   Source cluster: During data migration, you can read from and write to tables in the source cluster. However, you cannot perform Data Definition Language (DDL) operations, such as adding, deleting, or modifying the metadata of databases and tables.
    
    **Important**
    
    -   To ensure the migration task completes, the source cluster automatically pauses data writes within the preset write-stop time window when the estimated remaining migration time in the console is 10 minutes or less.
        
    -   The source cluster automatically resumes data writes when either all data is migrated within the preset time window, or the time window ends before the migration is complete.
        
    
-   Destination cluster: After migration, the destination cluster performs frequent merge operations for a period. This increases I/O usage and can cause higher latency for service requests. You must plan ahead for the potential impact of this increased latency. You can calculate the duration of the merge operations yourself. For information about calculating the duration, see [Calculate the merge duration after migration](/help/en/clickhouse/user-guide/migrate-table-data-from-a-self-managed-clickhouse-cluster-to-an-apsaradb-for-clickhouse-cluster#d82cf49170zd4).
    

## Procedure

**Important**

You must perform the following steps on the destination cluster, not the source cluster.

### Step 1: Create a migration task

1.  You can log on to the [ApsaraDB for ClickHouse console](https://clickhouse.console.alibabacloud.com).
    
2.  On the **Clusters** page, select the **Clusters of Community-compatible Edition** tab, and then click the ID of the destination cluster.
    
3.  In the navigation pane on the left, click **Data Migration and Synchronization** > **Migration from ClickHouse**.
    
4.  Click **Create Migration Task**.
    
    1.  You can configure the source and destination instances.
        
        You can configure the following information, and then click **Test Connectivity and Proceed**.
        
        **Note**
        
        After the connection test succeeds, you can continue to the next step. If the test fails, you must reconfigure the source and destination instances as prompted.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7781603471/p920133.png)
        
    2.  You must confirm the migration content.
        
        You must carefully read the information about the migration content on the page, and then click **Next: Pre-detect and Start Synchronization**.
        
    3.  The system performs a precheck and starts the task.
        
        The system performs an **Instance Status Detection**, **Storage Space Detection**, and **Local Table and Distributed Table Detection** on the source and destination instances.
        
        -   Detection successful:
            
            1.  You must carefully read the information on the page about the impact on the instances during migration.
                
            2.  You must set the **Time of Stopping Data Writing**.
                
                **Note**
                
                -   The source cluster must stop writes during the last 10 minutes of the migration to ensure data consistency.
                    
                -   To ensure a high success rate for the migration, you must set the write-stop time to at least 30 minutes.
                    
                -   A migration task must end within five days of its creation. Therefore, the end date for **Time of Stopping Data Writing** must be no later than `current date + 5 days`.
                    
                -   To reduce the impact on your business, you can set the write-stop time window to your off-peak hours.
                    
                
            3.  You can click **Completed** .
                
                **Note**
                
                When you click Completed, the task is created and started.
                
        -   If the check fails, you must follow the prompts to resolve the issues and then retry the data migration. The check items and requirements are as follows.
            
            **Check item**
            
            **Detection Requirements**
            
            **Instance Status Detection**
            
            When the migration starts, no management tasks, such as scale-out or configuration changes, can be running on the source or destination clusters. If a management task is running, you cannot start the migration task.
            
            **Storage Space Detection**
            
            Before migration, check the storage space. The storage space of the destination cluster must be at least 1.2 times the storage space of the source cluster.
            
            **Local Table and Distributed Table Detection**
            
            If a local table in the source cluster does not have a distributed table, or if its distributed table is not unique, the check fails. Delete the extra distributed tables or create a unique distributed table.
            

### Step 2: Assess whether the migration can be completed

If the write speed of the source cluster is **less than** 20 MB/s, you can skip this step.

If the source cluster's write speed is **greater than** 20 MB/s, the destination cluster's single-node write speed is also theoretically greater than 20 MB/s. To ensure the destination cluster's write speed can keep up with the source cluster's write speed and complete the migration, you must check the destination cluster's actual write speed to assess migration feasibility. You can perform the following steps:

1.  You can check the destination cluster's Disk throughput to determine its actual write speed. For more information about how to view the Disk throughput, see [View monitoring metrics](/help/en/clickhouse/user-guide/view-cluster-monitoring-information).
    
2.  You must compare the write speeds of the destination and source clusters.
    
    1.  If the destination cluster's write speed is **greater than** the source cluster's write speed, the migration has a **high** success rate. You can then proceed to **Step 3** .
        
    2.  If the write speed of the destination cluster is **lower than** that of the source cluster, the migration may **fail** . We recommend that you [cancel the migration task](/help/en/clickhouse/user-guide/migrate-table-data-from-a-self-managed-clickhouse-cluster-to-an-apsaradb-for-clickhouse-cluster#8f5e00b1695dj) or perform a [manual migration](/help/en/clickhouse/user-guide/migrate-table-data-from-a-self-managed-clickhouse-cluster-to-an-apsaradb-for-clickhouse-cluster#1fc4ab3b8c8gk).
        

### Step 3: View the migration task

1.  On the **Clusters** page, select the **Clusters of Community-compatible Edition** tab, and then click the ID of the destination cluster.
    
2.  In the navigation pane on the left, click **Data Migration and Synchronization** > **Migration from ClickHouse**.
    
    On the instance migration list page, you can view the migration task's **Migration Status**, **Running Information**, and **Data Write-Stop Window**.
    
    **Note**
    
    When the estimated remaining time in the **Running Information** column is 10 minutes or less and the migration status is **Migrating** , the source cluster write-stop is triggered to ensure data consistency. The rules are as follows:
    
    -   If the trigger time is **within** the preset write-stop time window for the source cluster, the source cluster stops writes.
        
    -   If the trigger time **is not within** the predefined write-stop time window of the source cluster and is **less than or equal to** `the task creation date + 5 days`, you must modify the write-stop time window to continue the migration task.
        
    -   If the trigger time **is not within** the predefined write-stop time window of the source cluster and **is greater than** `the task creation date + 5 days`, the migration fails. You must cancel the migration task, clear the migrated data in the destination cluster, and recreate the migration task.
        
    

### Step 4: (Optional) Cancel the migration task

1.  On the **Clusters** page, go to **Clusters of Community-compatible Edition** and click the ID of the target cluster.
    
2.  In the navigation pane on the left, click **Data Migration and Synchronization** > **Migration from ClickHouse**.
    
3.  In the **Actions** column of the target migration task, you can click **Cancel Migration**.
    
4.  In the **Cancel Migration** dialog box, you can click **OK** .
    
    **Note**
    
    -   After you cancel the migration, the task list does not update immediately. You can refresh the page periodically to check the task status.
        
    -   After the task is canceled, its **Migration Status** changes to **Completed** .
        
    -   Before you start a new migration, you must clear the migrated data from the destination cluster to avoid data duplication.
        
    

### Step 5: (Optional) Modify the write-stop time window

1.  On the **Clusters** page, select the **Clusters of Community-compatible Edition** tab, and then click the ID of the destination cluster.
    
2.  In the navigation pane on the left, click **Data Migration and Synchronization** > **Migration from ClickHouse**.
    
3.  In the **Actions** column of the target migration task, you can click **Modify Data Write-Stop Time Window**.
    
4.  In the **Modify Data Write-Stop Time Window** dialog box, you can select a **Time of Stopping Data Writing**.
    
    **Note**
    
    The rules for setting the **Time of Stopping Data Writing** are the same as those used when creating a migration task.
    
5.  You can click **OK** .
    

## References

To migrate data from a self-managed ClickHouse cluster to ApsaraDB for ClickHouse, see [Migrate data from a self-managed ClickHouse cluster to an ApsaraDB for ClickHouse Community-compatible Edition cluster](/help/en/clickhouse/user-guide/migrate-table-data-from-a-self-managed-clickhouse-cluster-to-an-apsaradb-for-clickhouse-cluster#concept-2060280).
