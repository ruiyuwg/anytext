The Normal Data Modify feature of Data Management (DMS) allows you to directly or periodically execute SQL statements, such as INSERT, UPDATE, DELETE, and TRUNCATE, to change data in databases. This topic describes how to submit a Normal Data Modify ticket.

## **Operation overview**

1.  Configure and submit a Normal Data Modify ticket.
    
    Select the database or instance that you want to manage. Then, enter the SQL statement for data change or upload the file that contains the SQL statement.
    
2.  Run a precheck.
    
    DMS checks whether the SQL statement that you submit matches the supported type of the Normal Data Modify feature and whether you have the required permissions to execute the SQL statement.
    
3.  Examine and approve the ticket.
    
    DMS checks whether the SQL statement that you want to execute affects the performance of the database and whether you have the required permissions to execute the SQL statement.
    
4.  Change data.
    
    Execute the submitted SQL statement for data change. If an error occurs during a data change or your business requires reverting the data change made by the SQL statement, DMS allows you to create a rollback ticket to restore the original data after the change is complete.
    

## Prerequisites

The database instance you use is managed in Stable Change or Security Collaboration mode in DMS. For more information, see [Control modes](/help/en/dms/product-overview/control-modes).

## Usage notes

-   After you submit a data change ticket for approval, you can close the ticket regardless of whether the ticket is approved or rejected. This prevents the task associated with the ticket from being executed after the ticket is approved.
    
-   We recommend that you submit tickets for data changes in the test environment. This ensures that the system checks the number of affected rows and generates a backup file for each data change. This allows you to restore data if the data is not changed as expected.
    
    **Note**
    
    To ensure high R&D efficiency, you can specify that no approval is required for data change tickets in the test environment. For more information, see [SQL Correct](/help/en/dms/sql-correct#multiTask6126).
    
-   If you configure [logical databases](/help/en/dms/product-overview/logical-database-1), [logical tables](/help/en/dms/product-overview/logical-table-1), and [routing algorithms](/help/en/dms/product-overview/routing-algorithm) in DMS, you can submit only one ticket to shard databases and tables. This way, you do not need to submit a ticket for each physical database or table.
    
    -   If you configure a routing algorithm, and a routing field is included in the SQL statement that is used to shard databases and tables, the routing algorithm routes the statement to the corresponding physical table for execution.
        
    -   If you do not configure a routing algorithm, no routing field is included in the SQL statement, or the data type of the routing field does not match the data type that is specified in the routing algorithm, the SQL statement is sequentially executed on each table in each database. This process requires a longer period of time to complete.
        
-   DMS automatically generates the corresponding backup script attachment before the `UPDATE` or `DELETE` statement is executed.
    

## Procedure

### **Step 1: Configure and submit a ticket**

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
2.  Move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner of the DMS console and choose **All Features** > **Database Development** > **Data Change** > **Normal Data Modify**.
    
    **Note**
    
    If you use the DMS console in normal mode, choose **Database Development** > **Data Change** > **Normal Data Modify** in the top navigation bar.
    
3.  In the Apply step of the Data Change Tickets wizard, configure the parameters for submitting a data change ticket. The following table describes some of the parameters.
    
    **Note**
    
    -   In this example, an instance managed in Security Collaboration mode is used. If the instance is managed in Stable Change mode, parameters that can be configured may slightly differ.
        
    -   The data source instance change feature is in canary release.
        
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Change Target**
    
    Yes
    
    Valid values are **Database** and **Data Source Instance**.
    
    **Note**
    
    The data source instance change feature is supported only by ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and AnalyticDB for MySQL clusters.
    
    **Database** or **Instances**
    
    Yes
    
    The database or instance for which you want to submit the ticket. You must select a database or instance on which you have the change permissions.
    
    **Note**
    
    You can select only a single data source instance.
    
    **Reason Category**
    
    Yes
    
    The reason for the data change. This helps you find the ticket in subsequent operations.
    
    **Note**
    
    If you are a DMS administrator, you can modify reason categories on the **Configuration Management** page of the **O&M** module. For more information, see [Configuration management](/help/en/dms/configuration-management#multiTask2952).
    
    **Business Background**
    
    Yes
    
    The purpose or objective of the data change. To accelerate the approval process, enter a detailed description.
    
    **Execution Method**
    
    Yes
    
    The execution method of the ticket. Valid values:
    
    -   Ticket Submitter Executes Upon Approval
        
    -   Automatically Execute Upon Approval
        
    -   Last Approver Executes
        
    
    **Note**
    
    If you are a DMS administrator, you can modify execution methods on the **Configuration Management** page of the **O&M** module. For more information, see [Configuration management](/help/en/dms/configuration-management#multiTask2952).
    
    **Affected Rows**
    
    Yes
    
    The estimated number of data rows that may be affected by the data change.
    
    **SQL Statements for Change**
    
    Yes
    
    The SQL statements that are used for the data change. You can select **Text** or **Attachment**.
    
    **SQL Text**
    
    Yes
    
    This parameter is available only if you set the **SQL Statements for Change** parameter to **Text**. Enter executable SQL statements in the SQL Text field.
    
    **Note**
    
    -   Separate multiple SQL statements with semicolons (;).
        
    -   If you set the Change Target parameter to Data Source Instance, you must add the database name in the `${dbName}.${tableName}` format before all table names in the SQL statement.
        
    -   DMS checks whether the syntax of the SQL statement is valid when you submit the ticket. If the syntax is invalid, you cannot submit the ticket.
        
    
    **Attachment**
    
    Yes
    
    This parameter is available only if you set the **SQL Statements for Change** parameter to **Attachment**. Upload the file that stores the SQL statements used for data change.
    
    **Note**
    
    The file that you want to upload can be a TXT, ZIP, or SQL file. The size of the file cannot exceed 15 MB.
    
    **SQL Statements for Rollback**
    
    No
    
    The SQL statements that are used for rollback. You can select **Text** or **Attachment**.
    
    **Note**
    
    DMS automatically fills in the statements for rollback when creating a rollback ticket only if you have entered the SQL statements for rollback or uploaded the SQL file for rollback. Otherwise, you must manually enter the SQL statements.
    
    **SQL Text**
    
    No
    
    This parameter is available only if you set the **SQL Statements for Rollback** parameter to **Text**. Enter the SQL statements for rollback. The SQL statements that you specify for this parameter are used to roll back the data change.
    
    **Attachment**
    
    No
    
    This parameter is available only if you set the **SQL Statements for Rollback** parameter to **Attachment**. Click **File** to upload the file that contains the SQL statements that you want to use for rollback.
    
    **Note**
    
    The file that you want to upload can be a TXT, ZIP, or SQL file. The size of the file cannot exceed 15 MB.
    
    **Change Stakeholder**
    
    No
    
    The stakeholders involved in the data change. All specified stakeholders can view the ticket details and participate in the approval process. Irrelevant users, except for DMS administrators and database administrators (DBAs), do not have access to the ticket details.
    
    **Attachments**
    
    No
    
    The file used as an attachment of the ticket to provide additional information about the data change.
    
4.  Click **Submit**.
    

### **Step 2: Precheck SQL statements**

After you submit a ticket, the system automatically performs a precheck on the ticket. If the ticket fails the precheck, modify the SQL statements as prompted and submit the ticket again.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5115807371/p889388.png)

### **Step 3:** **Examine and approve the ticket**

After the ticket passes the precheck, click **Submit for Approval**. In the **Prompt** message, click **OK**.

**Note**

By default, data change tickets are approved by DBAs. For more information about how to change the default approval template, see the [Change the default approval template](/help/en/dms/sql-correct#section-3u3-xfn-ke8) section of the "SQL Correct" topic.

### **Step 4: Perform data change**

**Important**

We recommend that you perform data change during off-peak hours.

1.  After the application is approved, click **Execute Change**. In the **Task Settings** dialog box, configure the task execution parameters described in the following table and click **Confirm Execution**.
    
    **Note**
    
    -   This step is automatically skipped if you set the **Execution Method** parameter to **Automatically Execute Upon Approval** in the Apply step.
        
    -   After a suspended task is resumed, the script can be executed from the position at which the script was suspended.
        
    
    **Parameter**
    
    **Description**
    
    **Execution Strategy**
    
    Specifies whether to run the task for the ticket immediately or at a scheduled time. Valid values:
    
    -   **Running immediately**: If you select this option, DMS runs the task immediately after you click **Confirm Execution**.
        
    -   **Schedule**: If you select this option, you must specify a time. After you click Confirm Execution, DMS runs the task at the scheduled time. For example, you can specify to run the task at 00:00:00 on May 22, 2024.
        
    
    **Specify End Time**
    
    Specifies the time when the task ends. The system stops the task at the specified end time regardless of whether the task is complete. This prevents the task from affecting your business during peak hours.
    
    **Note**
    
    The actual task end time may have a deviation of ±1 minute from the specified end time.
    
    **Enable Submit as Single Transaction**
    
    Specifies whether to submit all statements as a single transaction. By default, this switch is turned off. Valid values:
    
    -   on: All SQL statements that are involved in this change are submitted as a transaction. If an SQL statement fails, all executed DML statements in the same transaction are rolled back. DDL statements cannot be rolled back.
        
    -   off: Each SQL statement is submitted as a transaction. If an SQL statement fails, the transaction is stopped, but the executed SQL statements are not rolled back.
        
    
    **Enable Backup**
    
    Specifies whether to back up data. By default, this switch is turned off. After you enable backup, you can use the backup file to restore data. Valid values:
    
    **Note**
    
    -   Data backup is supported only for UPDATE and DELETE statements.
        
    -   You cannot back up data for MongoDB or Redis databases.
        
    
    -   on: DMS generates specific statements to back up the data that is affected when `UPDATE` or `DELETE` statements are executed.
        
        -   If the database is a MySQL or MariaDB database, DMS generates a `REPLACE INTO` statement.
            
            **Note**
            
            The supported MySQL database types include ApsaraDB RDS for MySQL, PolarDB for MySQL, PolarDB-X, and MySQL databases that are not on Alibaba Cloud.
            
        -   If the database is not a MySQL or MariaDB database, DMS generates an `INSERT` statement.
            
    -   off: DMS does not generate statements for data backup.
        
    
    **Primary/Secondary Node Check**
    
    You can enable this feature to continuously maintain data synchronization between primary and secondary instances, providing high availability and quick fault recovery.
    
    **Canary Release Type**
    
    The policy to execute the SQL statements. Valid values:
    
    -   **No Canary Release:** DMS automatically executes all SQL statements in the task.
        
        **Suspend after Executing the First SQL Statement:** After the first SQL statement is executed successfully, DMS automatically pauses SQL execution. If you need to continue, click **Retry**. Then, DMS executes remaining SQL statements immediately without further pauses.
        
        **Suspend after Executing an SQL Statement**: DMS pauses after the execution of each single SQL statement. You need to manually click **Retry** to execute the next SQL statement.
        
    
    **Note**
    
    The execution of SQL tasks is monitored by the checkpoints that are configured in **security rules** to control the SQL execution. Examples of checkpoints include the database lock timeout mechanism before SQL execution, database load check before SQL execution, and sleep policy after SQL execution. To check the checkpoints that are configured in a security rule to control SQL execution, go to the details page of the security rule, and click **SQL execution control** in the left-side pane. For more information about how to modify the default checkpoint settings, see [Configure the control on SQL execution](/help/en/dms/configure-the-control-on-sql-execution#task-2172785).
    
    -   After the task is complete, you can click **Details** in the **Actions** column of the ticket to view the status of the ticket, number of times the task is run, number of affected rows, executed statements, and logs.
        
    -   After the task is complete, you can go to the SQLConsole tab of the database to check whether the data is changed as expected.
        
    
2.  Optional. Create a rollback ticket and restore the original data.
    
    If the data is not changed as expected, you can create a rollback ticket or manually submit a Normal Data Modify ticket to restore the data. The following section describes how to create a rollback ticket:
    
    1.  In the **Execute** section, click **Generate Rollback Ticket** in the Actions column of the database that you want to manage.
        
    2.  Select a source for rollback and click **OK**. The following sources are supported:
        
        -   Rollback text: the rollback text that is pre-filled when you configure ticket information.
            
        -   Rollback attachment: the rollback attachment that is uploaded when you configure ticket information.
            
        -   Backup file: the backup attachment that is generated during ticket execution.
            
            **Note**
            
            To use a backup file to restore data, you must enable the backup feature before you perform the data change.
            
    3.  Optional. Configure the rollback text, rollback attachment, or backup file based on your business requirements.
        
        -   Rollback text: You can modify the SQL statements in the editor.
            
        -   Rollback attachment or backup file: You must download the rollback attachment or backup file to your computer, modify the SQL statements, and then upload the rollback attachment or backup file to the rollback ticket.
            
    4.  Confirm the rollback information and click **Submit**. The follow-up ticket process is the same as the Normal Data Modify ticket process.
        
3.  Download the backup file.
    
    If you want to save the backup file or upload the backup file to DMS after the change, you must download the backup file.
    
    1.  Click Download Backup in the Actions column. A backup file contains the following information:
        
        -   The original SQL statements executed to change data.
            
        -   The SELECT clause in the original SQL statements.
            
        -   The SQL statement that is used for data backup.
            
        
        Example:
        
        ```
        /*
        [Database]:   rds@rm-bp144d5ky4l4rli0417****.mysql.rds.aliyuncs.com:3306[rds mysql]
        */
        
        /*
        [SQL]:
        
        
        UPDATE t_order
        SET product_id = 88
        WHERE id = 10054
        [BACKUP SQL]:    SELECT *
        FROM t_order
        WHERE id = 10054
        */
        REPLACE INTO `t_order`(`id`,`product_id`,`gmt_create`,`gmt_modified`,`customer_id`,`price`,`status`,`province`) VALUES
        (10054,81,'2021-12-14 09:44:44','2021-12-14 09:44:44',71,63.45,'Success','Hangzhou');
                                            
        ```
        
    2.  Extract the SQL statement for data backup from the backup file. After you confirm that the statement is valid, submit a Normal Data Modify ticket to restore the database data based on the actual scenarios.
        
        **Note**
        
        If an improper `UPDATE` statement is executed for the data change and the system generates an `INSERT` statement for data backup, you must manually restore the data.
        
4.  Optional. Verify whether the data is changed as expected.
    
    1.  In the **Basic Information** section of the ticket details panel, move the pointer over the database name and click **Query**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1850907371/p907031.png)
        
    2.  On the SQLConsole tab of the database, check whether the table data meets your expectations.
