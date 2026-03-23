The DeadLock tab is added to display deadlock information about an ApsaraDB RDS for SQL Server instance. The information includes the start time of a transaction, session ID, details of locked resources, and deadlock types. You can identify and optimize the SQL statements and other exceptions that cause deadlocks based on the information. This topic describes how to view the deadlock statistics of an ApsaraDB RDS for SQL Server instance in the ApsaraDB RDS console.

## Background information

When you run a transaction to modify a specific resource, the resource is locked to prevent modifications from other concurrent transactions. This ensures data consistency.

In most cases, a deadlock occurs when multiple transactions compete for the same resource. In the following example, Transaction A locks Resource A and attempts to modify Resource B, and Transaction B locks Resource B and attempts to modify Resource A. As a result, Transaction A and Transaction B wait for the resources that are occupied by each other, and a deadlock occurs. In this case, the system automatically terminates the session in which SQL statements are executed at low costs, and the task in the session fails. ![死锁](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3504668261/p264570.png)

## Deadlock types

ApsaraDB RDS can analyze the following types of deadlocks:

-   **KeyDeadlock**
    
-   **ObjectDeadLock**
    
-   **RIDDeadlock**
    
-   **PageDeadlock**
    
-   **ComplieDeadlock**
    

For more information about each type of deadlock, see [Lock granularity and hierarchies](https://docs.microsoft.com/en-us/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide?view=sql-server-ver15#lock-granularity-and-hierarchies).

## Lock modes

When a transaction accesses a resource, the [lock mode](https://learn.microsoft.com/zh-cn/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide?view=sql-server-ver15#lock-modes) that is used to lock the resource varies based on the access type. ApsaraDB RDS for SQL Server supports the following lock modes:

-   **Shared (S):** After a transaction acquires a shared lock on a resource, the resource can only be read but cannot be modified until the transaction releases the shared lock.
    
-   **Update (U):** After a transaction acquires an update lock on a resource, the resource cannot be modified by another transaction until the latter transaction acquires an exclusive lock on the resource.
    
-   **Exclusive (X):** After a transaction acquires an exclusive lock on a resource, the resource cannot be accessed by another transaction until the former transaction releases the exclusive lock.
    

## Prerequisites

-   Your RDS instance does not run SQL Server 2008 R2 with cloud disks.
    
-   Your RDS instance resides in one of the following regions: China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, and UAE (Dubai).
    

## View deadlock details

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, choose **Autonomy Services** > **Lock Optimization**.
    

## Introduction to the DeadLock tab

-   ### Numbers of deadlocks
    
    This section displays the number of deadlocks over recent time ranges. You can specify a time range to view the number of deadlocks.
    
    ![死锁数量](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2582668261/p264582.png)
    
-   ### **Deadlock Trend**
    
    This section displays different types of deadlocks that occurred over a specific time range. You can perform the following operations to query the deadlock information:
    
    -   Specify the **start time** and **end time**. Then, click **Search** to view the trend of deadlocks that occurred over the specified time range. **The interval between the start time and end time cannot exceed 30 days.**
        
    -   Click **Last 24 Hours**, **Last 7 Days**, or **Last Month** to view the trend of deadlocks that occurred over the previous 1 day, previous 7 days, or previous 30 days.
        
    -   Move the pointer over a specific point in time to view the types and numbers of deadlocks that occurred at that point in time.
        
    -   In the upper-right corner of the trend chart, click one of the ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2582668261/p264641.png) icons to change the display style of the trend chart and download the trend chart as an image.
        
    
    ![死锁变化趋势](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2582668261/p264588.png)
    
-   ### **Deadlock Details**![死锁详细信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2582668261/p264753.png)
    
    This section displays the details of deadlocks. You can click the ![加号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2582668261/p265007.png) icon to the left of a deadlock record to view the details about the blocking and blocked sessions. The details include the following information:
    
    -   **LastTranStarted**: indicates the time when the transaction was started in the session.
        
    -   **SPID**: indicates the ID of the session.
        
    -   **IsVictim**: indicates whether the session was terminated.
        
        **Note**
        
        SQL Server provides a deadlock monitor thread that periodically checks for deadlocks. If a deadlock is detected, SQL Server evaluates the blocking and blocked sessions and terminates the session in which the transaction can be rolled back at a lower cost than the other session. For example, a deadlock occurs between a session that executes the SELECT statement and a session that executes the UPDATE statement. The SELECT statement can be rolled back at a lower cost than the UPDATE statement. In this case, SQL Server terminates the session that executes the SELECT statement.
        
    -   **LogUsed**: indicates the size of logs that were generated in the session. Unit: bytes.
        
    -   **LockMode**: indicates the [lock mode](#section-7zt-guy-q2d) of the deadlock.
        
    -   **WaitResourceDesc**: indicates the details about the resource for which the transaction is waiting in the session.
        
    -   **ObjectOwned**: indicates the object that is locked in the session.
        
    -   **ObjectRequested**: indicates the object that the transaction requests to lock in the session.
        
    -   **WaitResource**: indicates the name of the resource for which the transaction is waiting in the session.
        
    -   **HostName**: indicates the name of the host on which the transaction in the session is run.
        
    -   **LoginName**: indicates the username of the account that is used to run the transaction in the session.
        
    -   **Status**: indicates the status of the transaction in the session.
        
    -   **ClientApp**: indicates the name of the client that initiates the transaction in the session.
        
    -   **SQLText**: indicates the details about the SQL statement that is executed in the session.
        
        **Note**
        
        You can click the SQL statement to copy and further analyze the SQL statement.
        
    
    You can click a deadlock record to view the diagram of the deadlock in the Deadlock Diagram section.
    
-   ### **Deadlock Diagram**![死锁关系图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3582668261/p264741.png)
    
    This section displays the relationships between the blocking and blocked sessions. This section also displays the details about the locked resources. You can click **Download** to download the XDL file that contains the details about the deadlock. You can open and view this file by using [SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15).
    

## **Deadlock solutions and** optimization suggestions

[What do I do if a deadlock occurs on an ApsaraDB RDS for SQL Server instance?](/help/en/rds/apsaradb-rds-for-sql-server/how-to-handle-a-deadlock-in-rds-sql-server)
