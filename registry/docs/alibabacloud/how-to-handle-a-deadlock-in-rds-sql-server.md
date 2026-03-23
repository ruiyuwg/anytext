## Problem description

When an application frequently reads data from or writes data to a table or resource on an ApsaraDB RDS for SQL Server instance, a deadlock may occur. When a deadlock occurs, the RDS instance terminates one of the transactions and sends an error message similar to the following message to the client that initiated the transaction:

```
Error Message: Msg 1205, Level 13, State 47, Line 1Transaction (Process ID 53) was deadlocked on lock resources with another process and has been chosen as the deadlock victim. Rerun the transaction.
```

## Solution

1.  Connect to the RDS instance from the client. For more information, see [Connect to an ApsaraDB RDS for SQL Server instance](/help/en/rds/connect-to-sql-server-instance).
    
2.  Monitor related views.
    
    1.  Execute the following SQL statement to monitor the `SYS.SYSPROCESSES` view at regular intervals:
        
        ```
        WHILE 1 = 1
        BEGIN
        SELECT * FROM SYS.SYSPROCESSES WHERE BLOCKED <> 0;
        WAITFOR DELAY '[$Time]';
        END;
        ```
        
        **Note**
        
        `[$Time]` specifies the monitoring interval. In this example, `00:00:01` is used.
        
        The following figure shows a sample output.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1932343271/p817159.png)
        
        **Note**
        
        In the output, the `blocked` column indicates the ID of the session that blocks the current session, and the `waitresource` column indicates the resource for which the blocked session waits. In this example, session 53 and session 56 mutually block each other, which causes a deadlock. spid indicates the session ID.
        
    2.  Execute the following SQL statement to monitor the `sys.dm_tran_locks` and `sys.dm_os_waiting_tasks` views at regular intervals:
        
        ```
        while 1=1
            Begin
            SELECT
            db.name DBName,
            tl.request_session_id,
            wt.blocking_session_id,
            OBJECT_NAME(p.OBJECT_ID) BlockedObjectName,
            tl.resource_type,
            h1.TEXT AS RequestingText,
            h2.TEXT AS BlockingText,
            tl.request_mode
            FROM sys.dm_tran_locks AS tl
            INNER JOIN sys.databases db ON db.database_id = tl.resource_database_id
            INNER JOIN sys.dm_os_waiting_tasks AS wt ON tl.lock_owner_address = wt.resource_address
            INNER JOIN sys.partitions AS p ON p.hobt_id = tl.resource_associated_entity_id
            INNER JOIN sys.dm_exec_connections ec1 ON ec1.session_id = tl.request_session_id
            INNER JOIN sys.dm_exec_connections ec2 ON ec2.session_id = wt.blocking_session_id
            CROSS APPLY sys.dm_exec_sql_text(ec1.most_recent_sql_handle) AS h1
            CROSS APPLY sys.dm_exec_sql_text(ec2.most_recent_sql_handle) AS h2
            waitfor delay '[$Time]'
            End
        ```
        
        The following figure shows a sample output.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1932343271/p817164.png)
        
        The following table describes the response parameters.
        
        **Parameter**
        
        **Description**
        
        `DBName`
        
        The name of the database that the blocked session attempts to access.
        
        `request_session_id`
        
        The ID of the session in the current request. The session is the blocked session.
        
        `blocking_session_id`
        
        The ID of the blocking session.
        
        `BlockedObjectName`
        
        The object that is managed by the blocked session.
        
        `resource_type`
        
        The type of the resource for which the session waits.
        
        `RequestingText`
        
        The statement that is executed in the session. The statement is the blocked statement.
        
        `BlockingText`
        
        The statement that is executed in the blocking session.
        
        `request_mode`
        
        The lock mode that is requested by the session.
        
    3.  If your RDS instance runs SQL Server 2012, you can also use SQL Server Profiler to monitor deadlocks and generate deadlock graphs.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1932343271/p817170.png)
        
        The following figure shows a deadlock graph.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1932343271/p817171.png)
        

## **Optimization suggestions**

You can perform the following steps for optimization.

-   Terminate the blocking sessions to resolve the blocking issue.
    
-   Check whether transactions that are not committed for an extended period of time exist. If the transactions exist, commit the transactions at the earliest opportunity.
    
-   If queries are blocked due to shared locks and your application allows dirty reads, use the `WITH (NOLOCK)` query hint. For example, you can execute the `SELECT * FROM table WITH (NOLOCK);` statement for the query. This way, the query does not apply for locks to prevent deadlock issues.
    
-   Check the application logic to access a resource in sequence.
    

## **References**

You can view the deadlocks of an RDS instance in the ApsaraDB RDS console. For more information, see [View deadlock statistics](/help/en/rds/apsaradb-rds-for-sql-server/deadlock).
