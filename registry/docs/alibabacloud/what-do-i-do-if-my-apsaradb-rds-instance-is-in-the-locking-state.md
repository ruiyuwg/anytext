## Problem description

-   On the **Basic Information** page of the RDS instance, the value of Status for the RDS instance is **Locking**.
    
-   When an instance is **Locked**, you cannot **INSERT** or **UPDATE** data.
    
    **Note**
    
    -   If your RDS instance runs MySQL 5.6, MySQL 5.7, or MySQL 8.0 and uses the minor engine version of 20190815 or later, the RDS instance may encounter the following types of locks:
        
        -   LOCK\_WRITE\_GROWTH: prohibits the increase in disk usage. If the storage capacity of your primary RDS instance is exhausted, this type of lock is triggered to disable operations that may cause an increase in disk usage. If you execute the DELETE statement to delete data, many binary log files are generated, which increases disk usage. We recommend that you execute the DROP or TRUNCATE statement to delete data.
            
        -   LOCK\_READ: prohibits read operations. If the storage capacity of the read-only RDS instance is exhausted, this type of lock is triggered to disable data queries and write operations.
            
        -   LOCK\_WRITE: prohibits write operations. This type of lock may be triggered by instance expiration, host expiration for an ApsaraDB MyBase cluster, or instance migration. In addition to the limits of LOCK\_WRITE\_GROWTH, this type of lock also disables write operations of additional data, such as DROP and TRUNCATE operations.
            
        
        If the RDS instance is locked and you execute some SQL statements on the RDS instance, the `ERROR 1290 (HY000): The MySQL server is running with the LOCK_WRITE_GROWTH option so it cannot execute this statement` error message is displayed.
        
    -   If your RDS instance runs MySQL 5.1 or MySQL 5.5 and uses any minor engine version, you cannot perform operations on the RDS instance regardless of the causes for the lock. This also applies to RDS instances that run MySQL 5.6, MySQL 5.7, or MySQL 8.0 and use a minor engine version earlier than 20190815.
        
    

## Common causes

-   Cause 1: The storage capacity of your RDS instance is exhausted.
    
-   Cause 2: Your Alibaba Cloud account has overdue payments, or your RDS instance expires.
    

## Handling a full instance storage space

You can go to the **Basic Information** page of the RDS instance to check whether the storage of your RDS instance is exhausted.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6582194471/p944077.png)

**Methods:**

-   [Release the storage of your RDS instance](#6c7dfd45e66au)
    
-   [Expand the storage capacity of your RDS instance](#bed7e98f4dgsa)
    

### Release the storage of your RDS instance

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Monitoring and Alerts** to view the storage occupied by each type of data.![空间使用量](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0682434471/p569108.png)
    
3.  Delete data to release storage based on the database type.
    
    **Warning**
    
    We recommend that you do not delete data unless necessary. If you want to delete data to release storage, you must back up the data before you delete it to prevent data loss. You can also expand the storage capacity of your RDS instance to unlock the RDS instance.
    
    -   **Temporary files** indicated by the temp\_file\_size standard metric
        
        ApsaraDB RDS for MySQL instances generate temporary tables to perform sorting, grouping, or join operations specified by queries or generate binary log cache files before committing a large transaction. The disk space of your instance may be exhausted by these temporary files.
        
        For more information, see [What do I do if an ApsaraDB RDS for MySQL instance is in the Locked state because its storage capacity is exhausted by temporary files?](/help/en/rds/support/what-do-i-do-if-an-apsaradb-rds-for-mysql-instance-is-in-the-locked-state-because-its-storage-capacity-is-exhausted-by-temporary-files#concept-nqk-bh3-3gb).
        
    -   **Log files** indicated by the binlog\_size and general\_log\_size standard metrics
        
        To monitor the performance and status of a database, the database management system generates various logs, such as query logs, slow query logs, and error logs.
        
        **Database engine**
        
        **Solution**
        
        MySQL
        
        On the **Monitoring and Alerts** page, view the storage usage. Then, delete log files based on the storage usage.
        
        -   [What do I do if the storage capacity of an ApsaraDB RDS for MySQL instance is exhausted by binary log files?](/help/en/rds/apsaradb-rds-for-mysql/what-do-i-do-if-the-storage-capacity-of-an-apsaradb-rds-for-mysql-instance-is-exhausted-by-binary-log-files)
            
        -   [Solution for an instance with full disk space caused by the General log](/help/en/rds/apsaradb-rds-for-mysql/handle-the-issue-that-the-storage-capacity-of-an-apsaradb-rds-for-mysql-instance-is-exhausted-by-the-general-log-file)
            
        
        PostgreSQL
        
        You cannot manually delete the log files of an ApsaraDB RDS for PostgreSQL instance.
        
        You can manually delete inactive replication slots to allow AliPG to automatically delete WAL logs. For more information, see [Use the WAL log management feature for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/use-the-wal-log-management-feature-for-an-apsaradb-rds-for-postgresql-instance#main-2316898).
        
        SQL Server
        
        You cannot manually delete the log files of an ApsaraDB RDS for SQL Server instance. However, you can [shrink transaction logs](/help/en/rds/apsaradb-rds-for-sql-server/troubleshoot-insufficient-storage-space-issues-on-an-apsaradb-rds-for-sql-server-instance#section-osh-aqw-wta) in the ApsaraDB RDS console.
        
    -   **Data files** indicated by the user\_data\_size standard metric
        
        **Database engine**
        
        **Solution**
        
        MySQL
        
        1.  [Use Data Management (DMS) to connect to your RDS instance](/help/en/rds/apsaradb-rds-for-mysql/use-dms-to-log-on-to-an-apsaradb-rds-for-mysql-instance-1#concept-cml-x4v-ydb).
            
        2.  Execute the following statement to view the size of the specified table in the database on your RDS instance and check the historical data or unnecessary data that can be deleted:
            
            ```
            SELECT
                TABLE_NAME,
                concat(round((DATA_LENGTH + INDEX_LENGTH) / 1024 / 1024,2),'MB') AS DATA
            FROM
                information_schema. TABLES
            WHERE
                TABLE_SCHEMA = '<Database name>'
            ORDER BY
                DATA + 0 DESC;
            ```
            
        3.  Execute the `DROP TABLE <Table name>;` statement in the database to delete the data.
            
        4.  Wait approximately 5 minutes for the system to unlock your RDS instance.
            
        
        PostgreSQL
        
        1.  Use DMS to connect to your RDS instance. For more information, see [Use DMS to log on to an ApsaraDB RDS instance](/help/en/rds/apsaradb-rds-for-mysql/use-dms-to-log-on-to-an-apsaradb-rds-for-mysql-instance-1#concept-cml-x4v-ydb).
            
            **Note**
            
            If you cannot connect to your RDS instance, expand the storage capacity of the instance first and then clear the disk space. After the disk space is cleared, reduce the storage capacity as needed. For more information about how to expand and reduce the instance storage capacity, see [Expand the storage capacity of your RDS instance](#p-zxu-fu4-9ww) and [Change instance specifications](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb).
            
        2.  Execute the following statement to view the size of the specified table in the database on your RDS instance and check the historical data or unnecessary data that can be deleted:
            
            ```
            SELECT 
                table_schema || '.' || table_name AS table_full_name,
                pg_total_relation_size('"' || table_schema || '"."' || table_name || '"') AS size
            FROM
                information_schema.tables
            ORDER BY
                pg_total_relation_size('"' || table_schema || '"."' || table_name || '"') 
            DESC;
            ```
            
        3.  Execute the `DROP TABLE <Table name>;` statement in the database to delete the data.
            
        4.  Wait approximately 5 minutes for the system to unlock your RDS instance.
            
        
        SQL Server
        
        Perform the operations provided in [Troubleshoot insufficient storage issues on an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/troubleshoot-insufficient-storage-space-issues-on-an-apsaradb-rds-for-sql-server-instance).
        
    -   **System files** indicated by the undolog\_size standard metric
        
        Causes: When long-running statements are executed to query InnoDB tables and a large amount of table data is modified during the query, the system generates excessive undo logs, which occupies many storage resources. As a result, the storage capacity is exhausted.
        
        Solution: Resolve the issue based on the instructions provided in [Troubleshoot insufficient storage caused by system file accumulation](/help/en/rds/apsaradb-rds-for-mysql/troubleshoot-storage-issues-on-an-apsaradb-rds-for-mysql-instance#c2853fcafalu3).
        
    

### Expand the storage capacity of your RDS instance

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the **Basic Information** page's **Configuration Information** section, click **Change Specifications** to [expand the storage capacity](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb).
    
3.  After completing the payment, you can go to [Task Center](https://rds.console.alibabacloud.com/jobCenter/cn-hangzhou) to view the configuration change progress.
    
    The time required to expand the storage capacity varies based on the storage type of your RDS instance. The following table describes the time required to expand the storage capacity. You can log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/dashboard/cn-hangzhou) and click **Task Center** in the left-side navigation pane to view the progress of storage capacity expansion.
    
    **Storage type**
    
    **Duration**
    
    **Description**
    
    Premium Local SSDs
    
    Vary with scenarios
    
    -   If the storage resources of an RDS instance cannot meet your business requirements, cross-instance data migration may be triggered, and the time required to expand the storage capacity varies based on multiple factors. We recommend that you expand the storage capacity during off-peak hours.
        
    -   A specification change causes a transient connection that lasts approximately 30 seconds. We recommend that you change the specifications of your RDS instance during off-peak hours. In addition, make sure that your application is configured to automatically reconnect to your RDS instance. During the transient connection, you cannot perform most of the operations that are related to databases, accounts, and network settings.
        
    
    Cloud disks
    
    About 5 minutes
    
    -   If your RDS instance runs MySQL or PostgreSQL and uses cloud disks, no transient connections occur when you expand the storage capacity of the RDS instance.
        
    -   If your RDS instance runs SQL Server and uses cloud disks, a transient connection that lasts approximately 30 seconds may occur when you [expand the storage capacity of the RDS instance](/help/en/rds/apsaradb-rds-for-sql-server/change-the-specifications-of-an-apsaradb-rds-for-sql-server-instance). During the transient connection, you cannot perform most of the operations that are related to databases, accounts, and network settings on the RDS instance. We recommend that you expand the storage capacity of your RDS instance during off-peak hours. Alternatively, make sure that your application is configured to automatically reconnect to your RDS instance. **Specific RDS instances support storage capacity expansion without data loss. This does not interrupt your workloads.**
        
    

## Handling an overdue payment or instance expiration

-   Subscription RDS instance: If your RDS instance expires and is not renewed, [renew the instance](/help/en/rds/apsaradb-rds-for-mysql/manually-renew-an-apsaradb-rds-for-mysql-instance#concept-fwh-phj-wdb). Wait approximately 5 minutes. Then, check whether the instance is in the **Running** state.
    
-   Pay-as-you-go RDS instance: If your Alibaba Cloud account has an overdue payment, [top up](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview) your Alibaba Cloud account and wait 5 minutes to check whether the RDS instance is in the **Running** state.
    

## O&M suggestions

We recommend that you perform the following configurations to prevent your RDS instance from being locked:

-   Configure a notification policy for overdue payments and instance expiration.
    
    1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic).
        
    2.  Click the ![通知](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6988065461/p305324.png) icon in the upper-right corner to go to the **Message Center** page.
        
    3.  In the left-side navigation pane, click **Common Settings**.
        
    4.  In the **Common Settings** page's **Notification Type** column, select **Product Overdue Payment, Suspension, And Imminent Release Notifications** and click **Modify**.
        
    5.  In the **Contact** dialog box, **Select** the contacts you want to notify and click **Save** to complete the configuration.
        
-   Configure [alert rules for storage usage](/help/en/rds/apsaradb-rds-for-mysql/configure-an-alert-rule-for-an-apsaradb-rds-for-mysql-instance#concept-ir2-twp-wdb). We recommend that you configure an alert rule based on which an alert is triggered when the storage usage exceeds 90%.
    
-   [Enable the SQL Explorer and Audit feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-sql-explorer-and-audit-feature-on-an-apsaradb-rds-for-mysql-instance#task-2078931). If the storage usage significantly increases, you can query the SQL statements that are executed during the increase based on information on the **Monitoring And Alerts** page and optimize the SQL statements.
    
-   Configure automatic storage expansion. If the storage resources of your RDS instance are insufficient, the system automatically expands the storage capacity of your RDS instance. For more information, see [Configure automatic storage expansion for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-mysql-instance#task-2559889), [Configure automatic storage expansion for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-postgresql-instance#task-2220199), and [Configure automatic storage expansion for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-sqlserver-instance).
    
-   Optimize SQL statements to prevent frequent use of the ORDER BY and GROUP BY clauses in scenarios in which large temporary files are used.
    

## **Why is LOCK\_WRITE\_GROWTH still enabled after I delete a large amount of data from my RDS instance?**

If you execute `DELETE` statement to delete data, the system marks the deleted records or data pages as reusable. In this case, the system does not directly reduce the size of disk files to reclaim tablespaces. If you want to release tablespaces, perform the operations provided in [Use the OPTIMIZE TABLE command to release tablespace for MySQL instances](/help/en/rds/apsaradb-rds-for-mysql/how-do-i-use-the-optimize-table-statement-to-release-the-tablespace-of-an-apsaradb-rds-for-mysql-instance).

## Why is my RDS instance still locked although the instance has sufficient storage resources or is renewed?

A task, such as a configuration change task, on the RDS instance is in progress. After the task is complete, the RDS instance is automatically unlocked. You can click the ![按钮](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2788065461/p408291.png) icon in the upper-right corner of the Basic Information page to go to the **Tasks** page and view the task progress.

## Am I able to upgrade or downgrade the configuration of my RDS instance when the instance is in the Locking state?

If your RDS instance is locked because the storage capacity of the instance is exhausted, you can upgrade or downgrade the configuration of your RDS instance. If your RDS instance is locked due to other reasons such as overdue payments, you must complete the overdue payments and then upgrade or downgrade the configuration of your RDS instance.

## My RDS instance in the Locked state uses a phased-out instance type. How do I unlock the instance by expanding storage capacity?

You need to change the instance type of your RDS instance to an available instance type and then expand the storage capacity of your RDS instance. For more information about the available instance types, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db).

## **Why does the storage usage of an instance in the Locked state keep increasing?**

Data cannot be written to an instance in the Locked state by performing **INSERT** or **UPDATE** operations. However, when query operations are performed on the instance, log files or temporary data may be generated and increase the instance storage usage.
