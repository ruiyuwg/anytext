This topic describes how to view the blocking statistics of an ApsaraDB RDS for SQL Server instance. You can identify and resolve the blocking problems of the RDS instance based on the blocking statistics.

## Prerequisites

-   The RDS instance uses cloud disks.
    
-   Your RDS instance does not run SQL Server 2008 R2 with cloud disks.
    
-   Your RDS instance resides in one of the following regions: China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, and UAE (Dubai).
    

## Background information

When a session is modifying a specific resource, SQL Server locks the resource to prevent access and modifications from other concurrent sessions. This enables SQL Server to ensure data consistency. In most cases, SQL Server holds the lock for a short period of time. After the session finishes modifying the resource, SQL Server immediately releases the resource and grants approval for the next session to access the resource. However, the resource can stay locked for a long period of time due to slow SQL statements or other exceptions in the session. This significantly reduces the performance of the RDS instance.

To help you resolve the preceding blocking problem, ApsaraDB RDS provides blocking statistics in the ApsaraDB RDS console. The blocking statistics include the ID of the blocking session, the time at which the blocking problem occurred, and the SQL statement that caused the blocking problem.

## Sampling

In most cases, if a session causes a blocking problem that lasts approximately 2 seconds, the performance of the RDS instance does not significantly decrease. However, if multiple consecutive sessions cause blocking problems that each last approximately 2 seconds, the performance of the RDS instance significantly decreases.

The system samples blocking problems once every 10 seconds. At each point in time when the system samples blocking statistics, the sessions that require more than 2 seconds to execute an SQL statement and block other sessions are recorded.

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, choose **Autonomy Services** **>** **Lock Optimization**.
    
3.  On the page that appears, click the **Blocking** tab to query the blocking statistics about the RDS instance.
    

## Overview of the Blocking tab

-   Number of blocking sessions
    
    This section displays the number of blocking sessions over recent time ranges.
    
-   Blocking Trend
    
    This section displays the trend of blocking durations over a specific time range.
    
    Move the pointer over a specific point in time to query the details about the blocking problem that occurred at that point in time. The details include the following information:
    
    -   The time at which the blocking problem occurred.
        
    -   The number of blocked sessions. This number is indicated by the **Processes\_blocked** parameter.
        
    -   The number of transactions that are not committed. This number is indicated by the **Uncommited\_tran** parameter.
        
        **Note**
        
        The lock that causes the blocking problem cannot be released because transactions are not committed.
        
    -   The hash value of the executed SQL statement and the length of time during which the SQL statement is blocked.
        
    
    ![阻塞趋势](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4070668261/p263911.png)
    
-   Blocking Source Details
    
    This section displays the details about each blocking session. The details include the following information:
    
    -   **Spid**: the ID of the session.
        
    -   **QueryHash**: the hash value of the requested statement in the session. The hash value of the same type of SQL statement is the same.
        
    -   **Wait Type**: the reason why the session blocks another session that is in the waiting state. For more information about wait types, see [sys.dm\_os\_wait\_stats (Transact-SQL)](https://docs.microsoft.com/en-us/sql/relational-databases/system-dynamic-management-views/sys-dm-os-wait-stats-transact-sql?view=sql-server-ver15).
        
    -   **Execution Duration (ms)**: the length of time that is required by the session to execute the requested SQL statement. Unit: milliseconds.
        
    -   **SQL**: the SQL statement that causes the blocking problem.
        
        **Note**
        
        You can move the pointer over an SQL statement. Then, you can click the ![复制](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4563958261/p263897.png) icon that appears to the right of the SQL statement to copy the SQL statement.
        
    -   **Time**: the time at which the blocking problem occurred.
        
    -   **Database Name**: the name of the database in which the blocking problem occurred.
        
    
    You can click anywhere in a blocking record to view the diagram of the blocking problem.
    
-   Blocking Diagram
    
    This section displays the ID of the blocking session, the ID of the blocked session, the type of lock, and the blocking duration. In the following example, the blocking session is marked in red, and the blocked session is marked in blue. For more information about lock types, see [Transaction locking and row versioning guide](https://docs.microsoft.com/en-us/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide?view=sql-server-ver15#lock_modes).
    
    ![阻塞关系图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4563958261/p263932.png)
    
    You can move the pointer over the ID of a session to view the details about the blocking problem in the session. The details include the following information:
    
    -   **SPID**: the ID of the blocking session.
        
    -   **BlockedBySpid**: the ID of the blocked session.
        
    -   **WaitType**: the type of the wait in the session.
        
    -   **WaitTimeMs**: the duration of blocking in the session. Unit: milliseconds.
        
    -   **CMD**: the type of the SQL statement that is executed in the session.
        
    -   **CPU**: the length of time during which CPU resources are used by the session. Unit: milliseconds.
        
    -   **DBName**: the name of the database on which the session runs.
        
    -   **ClientAppName**: the name of the client from which the session is initiated.
        
    -   **HostName**: the hostname of the client from which the session is initiated.
        
    -   **LoginId**: the username that is used to log on to the session.
        
    -   **PhysicalIO**: the I/O resources that are consumed by the session to execute the requested SQL statement. Each physical I/O equals to 8 KB.
        
    -   **QueryHash**: the hash value of the requested statement in the session. The hash value of the same type of SQL statement is the same.
        
    -   **StartTime**: the time at which the system started to execute the batch of SQL statements that contain the requested SQL statement in the session. Each batch can contain multiple SQL statements and share resources such as the values of variables.
        
    -   **Status**: the status of the RDS instance.
        
    -   **SQL**: If you click the ID of the blocking session or blocked session, the details about the requested SQL statement in the session are displayed in the **Blocking Diagram** section.
        
    
-   SQL details
    
    In the blocking diagram, click the ID of the blocking session or blocked session to view the details about the requested SQL statement in the session. You can also **copy** and further analyze the statement.
