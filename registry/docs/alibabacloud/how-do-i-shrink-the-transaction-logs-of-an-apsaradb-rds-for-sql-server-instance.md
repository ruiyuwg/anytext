This topic provides solutions for shrinking transaction logs in cases of both sufficient and insufficient log space for ApsaraDB RDS for SQL Server.

**Note**

Note:

-   Before performing high-risk operations such as modifying the configurations or data of an instance, we recommend that you check the disaster recovery and fault tolerance capabilities of the instance to ensure data security.
    
-   Before modifying the configurations or data of an instance, such as an ECS instance or an RDS instance, we recommend that you create snapshots or enable the backup feature for the instance. For example, you can enable the log backup feature for an RDS instance.
    
-   If you have granted permissions to users or submitted sensitive information such as logon usernames and passwords in Alibaba Cloud Management Console, we recommend that you modify the information in a timely manner.
    

## **Sufficient log space**

If the log space is sufficient, you can manage it through the RDS console by using the backup and shrink transaction log feature. The system will automatically optimize the transaction log file size by **executing log backup and log shrink** operations.

**Important**

-   When performing the shrink transaction logs operation, the system will automatically execute a log backup to archive the transaction logs, increasing the likelihood of successful local log cleanup.
    
-   Before performing the shrink transaction logs operation, **please check the log reuse wait status of the database**.
    
    -   When the **status is NOTHING, you can attempt to shrink**, but the shrink size depends on the reusable VLF size at the end of the transaction log. If active transactions prevent the end VLF status from being set to reusable, you may need to perform another [log backup](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance) and wait for the current active transactions to complete before rechecking the reuse wait status until the status is NOTHING.
        
    -   When the **status is LOG\_BACKUP, the shrink may not succeed due to active transactions**, and the shrink operation may need to be executed multiple times to succeed.
        
    
    You can go to the **Database Management** > **View Details** page to [check the log file reuse status (log\_reuse\_wait\_desc)](/help/en/rds/apsaradb-rds-for-sql-server/database-advanced-feature-management#8d1b2ea01e3fo).
    

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  Click **Backup And Shrink Transaction Logs**, and then click **OK**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1089915961/p714663.png)
    
4.  After the shrink is complete, you can go to the RDS instance product page **Monitoring And Alerts** page to check the latest log space status.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8097265371/p892496.png)
    

## **Insufficient log space**

If your database server prompts "Transaction log is full", the transaction logs cannot be shrunk in the console. In this case, you must execute SQL statements to perform the shrinking operation. Shrinking transaction logs requires some log space, so when the log is full, you can only truncate the log chain by command to shrink.

### **Prerequisites**

-   The following operations are only **applicable in emergency situations**. Generally, we recommend that you first [expand the disk](/help/en/rds/apsaradb-rds-for-sql-server/change-the-specifications-of-an-apsaradb-rds-for-sql-server-instance).
    
-   In principle, it is not recommended to change the database recovery model to SIMPLE mode, as this will affect the RDS backup chain and cause all restore jobs after the current point in time to fail.
    
-   For high availability (HA) edition instances, you must first disable the mirroring before changing the database recovery model.
    

**Warning**

Disabling and restoring mirroring, along with changing the database recovery model, are high-risk operations. If you need to perform them in an emergency, **you acknowledge and accept the above risks**, so please consider carefully.

### **Procedure**

## Basic Edition instances

```
-- Set the database recovery model to SIMPLE, which will break the database log chain
ALTER DATABASE [DatabaseName] SET RECOVERY SIMPLE;
```

## High availability edition instances

For high availability edition instances, database mirroring is involved, so directly executing the `ALTER DATABASE` operation is prohibited. Please follow the procedure below:

```
-- First, disable the mirroring
ALTER DATABASE [DatabaseName] SET PARTNER OFF;
GO
-- Set the database recovery model to SIMPLE, which will break the database log chain
ALTER DATABASE [DatabaseName] SET RECOVERY SIMPLE;

-- The mirroring will automatically restore later, no manual setup is required
```

The system will reset the recovery model to FULL. It will not actually change the database recovery model to SIMPLE, but the database log chain will break, and the following error will be returned. **This error does not affect the log chain break effect and can be ignored**.

```
Msg 50000, Level 16, State 1, Procedure ******, Line 46
Login User [Test11] can't change database [TestDb] recovery model.
Msg 3609, Level 16, State 2, Line 2
The transaction ended in the trigger. The batch has been aborted.
```

### **Common errors**

-   Q: After executing `ALTER DATABASE [TestDb] SET RECOVERY SIMPLE`, a similar error occurs. How can I resolve it?
    
    ```
    Msg 1468, Level 16, State 2, Line 1
    The operation cannot be performed on database "zhttestdb" because it is involved in a database mirroring session or an availability group. Some operations are not allowed on a database that is participating in a database mirroring session or in an availability group.
    Msg 5069, Level 16, State 1, Line 1
    ALTER DATABASE statement failed.
    ```
    
-   A: For **high availability edition** RDS SQL Server instances, database mirroring is involved, so the `ALTER` recovery model operation is prohibited. Please follow the [procedure](#677e1e676ajk5) to handle it.
    

## **References**

-   For information on how to expand storage space, see [Change Configuration](/help/en/rds/apsaradb-rds-for-sql-server/change-the-specifications-of-an-apsaradb-rds-for-sql-server-instance).
    
-   For information on how to manage databases using SQL commands, see [Manage Databases with SQL Commands](/help/en/rds/apsaradb-rds-for-sql-server/create-and-manage-databases-on-an-apsaradb-rds-for-sql-server-instance-by-using-sql-statements).
    
-   For information on how to check space usage and troubleshoot space issues, see [RDS SQL Server Insufficient Space Issues](/help/en/rds/apsaradb-rds-for-sql-server/troubleshoot-insufficient-storage-space-issues-on-an-apsaradb-rds-for-sql-server-instance).
    
-   For information on how to resolve the issue of database disk space being full, see [SQL Server Disk Space Full](/help/en/rds/apsaradb-rds-for-sql-server/disk-space-is-full).
