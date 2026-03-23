Data Management (DMS) allows you to change schemas without locking tables. This prevents your business from being blocked by table locks and reduces the latency caused by the online DDL feature of MySQL during primary-secondary replication. The feature creates one or more temporary tables that use the new schema, replicates full data and incremental binary log data to the temporary tables, and then stores the temporary tables as permanent tables.

## Prerequisites

-   The database instance is managed in Stable Change or Security Collaboration mode in DMS. For more information, see [Control modes](/help/en/dms/product-overview/control-modes).
    
-   The lock-free schema change feature is enabled for your database instance. For more information, see [Enable the lock-free schema change feature](/help/en/dms/enable-the-lock-free-schema-change-feature#task-2058290).
    
    **Note**
    
    In the following example, this feature is enabled for an ApsaraDB RDS for MySQL instance in a simulated development environment.
    

## Procedure

In the following example, the data type of the `long_text_a` column in the `big_table` table is changed from `varchar(1024)` to `text`.

1.  Submit a ticket as a regular user.
    
    1.  Log on to [the DMS console V5.0](https://dms.alibabacloud.com/new) as a regular user.
        
    2.  In the top navigation bar, choose **Database Development** > **Data Change** > **Lockless Change**.
        
        **Note**
        
        If you are using the DMS console in simple mode, move the pointer over the ![2022-10-21_15-25-22.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7680319861/p692773.png) icon in the upper-left corner of the console and choose **All functions** > **Database Development** > **Data Change**\> **Lockless Change**.
        
    3.  Set the parameters that are described in the following table and click **Submit**.
        
        **Parameter**
        
        **Description**
        
        **Database**
        
        Required. The database in which you want to change data. In this example, the `poc_dev` database in Secure Collaboration mode is selected.
        
        **Reason Category**
        
        Required. The reason for the data change. This helps you find the ticket in subsequent operations.
        
        **Business Background**
        
        Required. The purpose or objective of the data change. This reduces unnecessary communication.
        
        **Execution Method**
        
        Required. The method in which you want the ticket to be submitted for execution. Select **Last Auditor Execute**.
        
        **Affected Rows**
        
        Required. The estimated number of data rows that will be affected by the data deletion operation. To obtain the actual number of affected rows, you can use the `COUNT` function in SQL statements and execute the SQL statements on the **SQLConsole** tab.
        
        **SQL Statements for Change**
        
        Required. The SQL statement that you want to execute to change data. In this example, the following `ALTER` statement is executed:
        
        ```
        ALTER TABLE `big_table`
          MODIFY COLUMN `long_text_a` text NULL AFTER `name`;
        ```
        
        **Note**
        
        This statement changes the data type of the `long_text_a` column from `varchar(1024)` to `text`.
        
        **SQL Statements for Rollback**
        
        Optional. The SQL statement that you can execute to roll back the data change.
        
        **Change Stakeholder**
        
        Optional. The stakeholders involved in the data change. All specified stakeholders can view ticket details and assist in the approval process. The users that are not specified are not allowed to view the ticket details (except for DMS administrators and DBAs).
        
    4.  On the **Ticket Details** page, confirm the ticket details.
        
        **Note**
        
        You can view the ticket details on the **Ticket Details** page. DMS prechecks the SQL statement that you want to execute. The precheck items include the syntax of the SQL statement, whether the type of the SQL statement matches the type that you configured in the security rules, the permissions of the user who submitted the ticket, and the estimated number of rows to be scanned.
        
    5.  After the ticket details are confirmed and the precheck is complete, click **Submit for Approval**. In the message that appears, click **OK**.
        
        **Important**
        
        You can modify the ticket details only before you submit the ticket for approval.
        
    
2.  Approve the ticket as a DMS administrator.
    
    1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new) as a DMS administrator.
        
    2.  On the Home page of the DMS console, click **Pending Tickets** in the **My Tickets** section.
        
    3.  On the **My Tickets** page, find the ticket that you want to handle and click the ticket number in the **Ticket Number** column.
        
    4.  In the **Ticket Details** panel, confirm the data change information in the ticket and click **Approve**.
        
    5.  In the dialog box that appears, enter comments and click **Submit**.
        
    
3.  Execute the ticket as a regular user.
    
    1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new) as a regular user.
        
    2.  In the **Execute** section in the Ticket Details panel, click **Execute Change**. In the dialog box that appears, set the parameters that are described in the following table and click **Confirm Execution**.
        
        **Parameter**
        
        **Description**
        
        **Execute strategy**
        
        Specifies whether to execute the task immediately or at a scheduled time. Valid values:
        
        -   **Running immediately**: DMS runs the task immediately after you submit the task.
            
        -   **Schedule**: DMS runs the task at the scheduled time that you specify.
            
        
        Default value: **Running immediately**.
        
        **Transaction Control**
        
        Specifies whether to enable transaction control. Valid values:
        
        -   on: If an SQL statement fails to be executed, all the executed DML statements in the same transaction are rolled back. DDL statements cannot be rolled back.
            
        -   off: One SQL statement is executed at a time. If an SQL statement fails to be executed, the transaction is stopped. The other executed SQL statements in the same transaction are not rolled back.
            
        
        Default value: off.
        
        **Data Backup**
        
        Specifies whether to back up data. Valid values:
        
        -   on: DMS generates `INSERT` scripts to back up the data that will be affected when `UPDATE` or `DELETE` statements are executed.
            
        -   off: No backup scripts are generated for the preceding data.
            
        
        Default value: on.
        
        **Note**
        
        After you click **Confirm Execution**, DMS starts to run the task.
        
    

## View the task progress and verify the schema

1.  Move the pointer over the name of the database to be changed in the **Basic Information** section as a DMS administrator. In the menu that appears, click **Query**.
    
    You are automatically redirected to the page of SQL Console.
    
2.  On the SQL Console tab, enter an SQL query statement in the SQL editor. Then, click **Execute** in the upper part of the SQL editor.
    
    For example, you can enter the following SQL statement to query the tables of the current database.
    
    ```
    SHOW TABLES;
    ```
    
    **Note**
    
    When DMS changes the schema of a table without locking tables, two temporary tables are generated.
    
3.  In the top navigation bar, choose **O&M** > **Task**.
    
    **Note**
    
    If you use the DMS console in simple mode, move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner and choose **All functions** > **O&M** > **Task**.
    
4.  Click the task number of the task that you want to manage. The **Execution details** dialog box appears.
    
5.  Click **Progress** in the **Operation** column.
    
6.  In the Lock-Free structure change message, view the progress information of the task.
    
7.  After the task is complete, verify the schema.
    
    The schema of the `big_table` table is changed, and the temporary tables are deleted.
