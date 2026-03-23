If you specify an entire database as the object to be synchronized and the database contains a trigger that updates a table, data inconsistency may occur between the source and destination databases. This topic describes how to configure a data synchronization task for a source database that contains a trigger. This method maintains data consistency and integrity between the source and destination databases.

## Background information

If the source database of the synchronization or migration task contains a trigger and meets the following conditions, synchronize or migrate the trigger based on the references to ensure data consistency between the source and destination databases. This topic describes how to configure a data synchronization or migration task for other databases that contain triggers.

**Source database**

**Destination database**

**Description**

**References**

Unlimited

PostgreSQL, PolarDB for PostgreSQL or PolarDB for PostgreSQL (Compatible with Oracle)

-   If the destination database account used by the Data Transmission Service (DTS) instance has sufficient permissions, such as a privileged account or a super-privileged account, DTS automatically disables the trigger at the session level after the trigger is synchronized or migrated to the destination database.
    
-   If the destination database account used by the DTS instance does not have the required permissions, make sure that the value of the `session_replication_role` parameter of the destination database is set to `replica` during the data synchronization or migration task.
    

-   [Overview of data synchronization scenarios](/help/en/dts/user-guide/data-synchronization-scenarios)
    
-   [Overview of data migration scenarios](/help/en/dts/user-guide/overview-of-data-migration-scenarios)
    

MySQL, PolarDB for MySQL, or ApsaraDB RDS for MariaDB

MySQL, PolarDB for MySQL, or ApsaraDB RDS for MariaDB

You can manually configure a trigger synchronization or migration task.

[Synchronize or migrate triggers from the source database](/help/en/dts/user-guide/synchronize-or-migrate-triggers-from-the-source-database#task-2288139)

SQL Server

SQL Server

## Synchronization or migration process

1.  Create a **migration task** to migrate data from the source database to the destination database.
    
    For more information, see [Overview of data migration scenarios](/help/en/dts/user-guide/overview-of-data-migration-scenarios).
    
    **Important**
    
    -   Select only **Schema Migration** for the **Migration Types** parameter.
        
    -   Set the **Source Objects** parameter to a database or a schema.
        
    
2.  Log on to the destination database and delete the trigger that is migrated from the source database.
    
3.  Creates a synchronization or migration task to synchronize or migrate data from the source database to the destination database.
    
    For more information, see [Overview of data synchronization scenarios](/help/en/dts/user-guide/data-synchronization-scenarios) and [Overview of data migration scenarios](/help/en/dts/user-guide/overview-of-data-migration-scenarios).
    
    **Important**
    
    -   Data synchronization: By default, **Incremental Data Synchronization** is selected for the **Synchronization Types** parameter. You also need to select **Full Data Synchronization**. Do not select **Schema Synchronization**.
        
    -   Data migration: Select **Full Data Migration** and **Incremental Data Migration** for the **Migration Types** parameter. Do not select **Schema Migration**.
        
    
4.  Optional. Terminate or release the task after data synchronization or migration is complete.
    
    For more information, see [Terminate a DTS instance](/help/en/dts/user-guide/stop-a-dts-instance) and [Release DTS instances](/help/en/dts/user-guide/release-dts-instances-1).
    
    **Note**
    
    After the task is terminated or released, you can manually add triggers to the destination database based on your business requirements.
    

## Example

**Note**

The following example shows how to migrate data from a self-managed MySQL database to an ApsaraDB RDS for MySQL instance.

### **Data preparation**

Two tables (parent and child) are created in the MySQL database named triggertestdata. The parent table contains a trigger. If a data entry is inserted into the parent table, the trigger inserts the data entry into the child table.

**Note**

The following table describes the statements of the tables and trigger.

**Object type**

**Name**

**Statement**

Table

parent

```
CREATE TABLE `parent` (
  `user_vs_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`user_vs_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2001 DEFAULT CHARSET=utf8
```

Table

child

```
CREATE TABLE `child` (
  `sys_child_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_vs_id` int(11) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`sys_child_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2001 DEFAULT CHARSET=utf8
```

Trigger

data\_check

```
CREATE TRIGGER data_check
AFTER INSERT ON parent
FOR EACH ROW
insert into child(user_vs_id, name) values(new.user_vs_id, new.name) ;
```

In this case, if an INSERT operation is performed on the parent table during data synchronization, the data in the source child table is inconsistent with the data in the destination child table. To solve this issue, you must delete the trigger in the destination database.

### **Procedure**

1.  Create a data migration task to migrate the schema of the source database to the destination database.
    
    1.  Go to the Data Migration page.
        
        1.  Log on to the [Data Management (DMS) console](https://dms.alibabacloud.com).
            
        2.  In the top navigation bar, move the pointer over **DTS**.
            
        3.  Choose **DTS (DTS)** > **Data Migration**.
            
        
        **Note**
        
        -   The actual operations may vary based on the mode and layout of the DMS console. For more information, see [Simple mode](/help/en/dms/simple-mode#concept-2103267) and [Customize the layout and style of the DMS console](/help/en/dms/configure-the-dms-console-based-on-your-business-requirements#task-2134256).
            
        -   You can also go to the [Data Migration page of the new DTS console](https://dts.alibabacloud.com/migrate/cn-hangzhou?resourceGroupId=).
            
        
    2.  From the drop-down list on the right side of **Data Migration Tasks**, select the region in which your data migration instance resides.
        
        **Note**
        
        If you use the new DTS console, you must select the region in which the data migration instance resides in the upper-left corner.
        
    3.  Click **Create Task** to go to the task configuration page.
        
    4.  Configure the parameters in the **Source Database** and **Destination Database** sections, and click **Test Connectivity and Proceed**.
        
        For more information, see [Migrate data from a self-managed MySQL database to an ApsaraDB RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-a-self-managed-mysql-database-to-an-apsaradb-rds-for-mysql-instance-1).
        
    5.  Set the **Migration Types** parameter to **Schema Migration**, and select a database or a schema.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8497165271/p813706.png)
        
    6.  Configure the other parameters based on your business requirements.
        
    
2.  During schema migration, DTS also migrates triggers to the destination database. After the migration task completes, you need to log on to the destination database and run the following command to delete the migrated triggers:
    
    ```
    drop trigger <Trigger name>;
    ```
    
    Sample command:
    
    ```
    drop trigger data_check;
    ```
    
3.  Create a data synchronization task to synchronize data from the source database to the destination database.
    
    1.  In the left-side navigation pane, click **Data Synchronization**.
        
    2.  Configure the parameters in the **Source Database** and **Destination Database** sections, and click **Test Connectivity and Proceed**.
        
        For more information, see [Synchronize data from a self-managed MySQL database to an ApsaraDB RDS for MySQL instance](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-mysql-database-to-an-apsaradb-rds-for-mysql-instance).
        
        **Note**
        
        The configurations of the source and destination databases must be the same as those in [Step 1](#feea16974egkm).
        
    3.  Select **Full Data Synchronization** for the **Synchronization Types** parameter.
        
        **Note**
        
        -   The object to be synchronized must be the same as the object migrated in [Step 1](#1c3f1af7ech7h).
            
        -   By default, **Incremental Data Synchronization** is selected for the **Synchronization Types** parameter. Do not select **Schema Synchronization**.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8497165271/p813707.png)
        
    4.  Configure the other parameters based on your business requirements.
        
    

### **Test data consistency**

1.  Log on to the source database and insert a data entry into the parent table.
    
    ```
    insert into parent values(1,'testname');
    ```
    
    After a data entry is inserted, the trigger inserts the data entry into the source child table.
    
2.  Log on to the source and destination databases. Query the data of the source child table and the destination child table. Check whether the data is consistent between the two tables.
    
    -   Query results of the source child table
        
        ```
        +--------------+------------+----------+
        | sys_child_id | user_vs_id | name     |
        +--------------+------------+----------+
        |         2001 |          1 | testname |
        +--------------+------------+----------+
        ```
        
    -   Query results of the destination child table
        
        ```
        +--------------+------------+----------+
        | sys_child_id | user_vs_id | name     |
        +--------------+------------+----------+
        |         2001 |          1 | testname |
        +--------------+------------+----------+
        ```
        
    
    The results show that the data in the source child table is consistent with the data in the destination child table.
    

### **What to do next**

1.  After data synchronization is complete, terminate the data synchronization task created in [Step 3](#step-r8z-hjw-c6p).
    
    For more information, see [Terminate a DTS instance](/help/en/dts/user-guide/stop-a-dts-instance).
    
2.  Optional. View the statements for creating the trigger.
    
    1.  Find the data migration task created in [Step 1](#step-pgj-fpq-umm).
        
    2.  Click the ID of the task that you want to manage.
        
    3.  On the **Task Management** page, click **Schema Migration2**.
        
    4.  On the **Task Details** tab, click **View Statements**.
        
    
3.  Log on to the destination database and add a trigger.
