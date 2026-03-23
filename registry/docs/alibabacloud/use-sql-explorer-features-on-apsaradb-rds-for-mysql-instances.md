**We recommend that you enable** the SQL Explorer and Audit feature in scenarios such as security compliance audit, performance analysis, and troubleshooting. After you enable the feature, **the system automatically records the SQL changes in database kernels and information about the SQL changes**, including the accounts that are used to execute the SQL statements, IP addresses, and execution details. This provides reliable data support for you to query SQL change records and perform analysis and audit operations. Enabling and using the feature has the minimal impact on instance performance.

## Prerequisites

-   [Database Autonomy Service (DAS) Enterprise Edition is enabled](/help/en/das/user-guide/purchase-das-professional-edition#multiTask962) by using your Alibaba Cloud account.
    
-   The instance for which you want to enable SQL Explorer and Audit is located in a [region supported by the DAS Enterprise Edtion](/help/en/das/product-overview/editions#55233541b9ljq). In the ApsaraDB RDS console, you can enable only the SQL Explorer and Audit feature provided by the latest version of DAS Enterprise Edition supported in the current region.
    
-   If you use the credentials of a RAM user to use the **SQL statement search** feature, make sure that the **AliyunRDSReadOnlyWithSQLLogArchiveAccess** policy is attached to the RAM user. For more information about how to grant permissions to a RAM user, see [Use RAM to manage ApsaraDB RDS permissions](/help/en/ram/use-cases/use-ram-to-manage-apsaradb-rds-permissions#task-zqh-gqx-ydb).
    
    You can also create a custom policy to grant the RAM user the permissions to use the search feature, including the log export feature. For more information, see [Use custom policies to grant a RAM user the permissions to use the search and export features in the SQL Explorer and Audit module](/help/en/das/support/what-do-i-do-if-i-do-not-have-permissions-to-access-das-as-a-ram-user#section-qrb-5ul-2ht) .
    

**Important**

The SQL Explorer and Audit feature records information about all Data Query Language (DQL), DML, and DDL statements that are executed. The system obtains the information from database kernels, which consumes a small number of CPU resources.

## **Feature description**

The SQL Explorer and Audit feature provides the following capabilities:

-   [Search (audit)](/help/en/das/user-guide/search#task-2025136): This feature is used to query and export information about the SQL statements that are executed. The information includes the database, status, and execution time.
    
-   [SQL Explorer](/help/en/das/user-guide/sql-explorer#task-2043361): diagnoses the health status of SQL statements, troubleshoots performance issues, and analyzes business traffic.
    
-   [Security audit](/help/en/das/user-guide/security-audit#multiTask888): identifies risks such as high-risk SQL statements, SQL injection attacks, and new access sources.
    
-   [Traffic playback and stress testing](/help/en/das/traffic-playback-and-stress-testing#task-2108380): checks whether your RDS instance needs to be scaled out to handle traffic spikes.
    
-   SQL analysis: analyzes SQL statements that are executed within a specified period of time to identify abnormal SQL statements and locates performance issues.
    

The SQL Explorer and Audit feature is suitable for the following scenarios:

-   Your RDS instance is used for sectors that require high data security, such as finance, security, stocks, public service, and insurance sectors.
    
-   You want to analyze the status of your RDS instance to troubleshoot issues in scenarios, such as issue troubleshooting, check on the performance of SQL statements, and abnormal session identification.
    
-   In extreme cases, if data loss or corruption occurs, you can use the SQL statements recorded by the SQL Explorer and Audit feature to analyze and troubleshoot issues and restore data.
    

## **Supported regions**

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, Japan (Tokyo), Malaysia (Kuala Lumpur), Indonesia (Jakarta), US (Silicon Valley), UK (London), US (Virginia), and Germany (Frankfurt)

## Billing rules

-   **If the SQL Explorer feature is enabled for your RDS instance before the SQL Explorer feature is upgraded to the SQL Explorer and Audit feature**, the fee is included in the bills of ApsaraDB RDS. The pricing of the feature varies based on the instance region. Bills are generated on an hourly basis.
    
    -   USD 0.0015 per GB-hour: China (Hong Kong), US (Silicon Valley), and US (Virginia)
        
    -   USD 0.0018 per GB-hour: Singapore, Japan (Tokyo), Germany (Frankfurt), UAE (Dubai), Malaysia (Kuala Lumpur), Indonesia (Jakarta), and UK (London)
        
    -   USD 0.0012 per GB-hour: China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Heyuan), China (Guangzhou), and China (Chengdu).
        
    
    **Note**
    
    You can perform the following operations to upgrade the SQL Explorer feature to the SQL Explorer and Audit feature: Log on to the ApsaraDB RDS console, go to the **SQL Explorer** tab, and then click **One click upgrade** in the dialog box that appears. After the upgrade is complete, the fee is included in the bills of Database Autonomy Service (DAS).
    
-   **If the SQL Explorer and Audit feature is enabled for your RDS instance after the SQL Explorer feature is upgraded to the SQL Explorer and Audit feature**, the fee is included in the bills of DAS. You can use the SQL Explorer and Audit feature only after you activate DAS Enterprise Edition. The supported regions and billing rules vary based on the version of DAS Enterprise Edition. For more information, see [DAS editions and supported features](/help/en/das/product-overview/editions#55233541b9ljq) and [Billing](/help/en/das/product-overview/billing-overview/).
    
    **Note**
    
    In the ApsaraDB RDS console, you can enable only the SQL Explorer and Audit feature provided by the most recent version of DAS Enterprise Edition that is supported in the current region.
    

## **Usage notes**

-   **Online query**
    
    -   **Time range:** The time range for an online query spans up to 24 hours. You can query data of any 24-hour period within the data storage duration of SQL Explorer. If the time range for an online query exceeds 24 hours, the query may time out. If you want to query the execution records of SQL statements over a time range that exceeds 24 hours, you can use Simple Log Service to access logs that are generated by the SQL Explorer feature. For more information, see [Collect RDS SQL audit logs](/help/en/sls/collect-rds-sql-audit-logs#task-265065).
        
    -   **Query method:** You can specify a combination of conditions for an online query. Fuzzy match is not supported for online queries. Each keyword for an online query must contain at least four characters.
        
-   **SQL Explorer and Audit**
    
    -   **Maximum length of an SQL statement:** An SQL statement that is recorded by using the SQL Explorer and Audit feature can be up to `8,192 bytes` in length. The maximum length is specified by the `loose_rds_audit_max_sql_size` for MySQL 5.6 and MySQL 5.7 or `loose_rds_audit_log_event_buffer_size` parameter for MySQL 8.0. **The minimum value among the three parameter values is used**. A prefix is added to the SQL statement during data collection and processing. As a result, the maximum length of the SQL statement is slightly less than 8,192 bytes or the value that you specified.
        
    -   **Audit log query:** The feature allows you to query SQL statements that are executed on your RDS instance by thread ID and transaction ID. If you want to query SQL statements that are executed on your RDS instance by transaction ID, you must set the `loose_rds_audit_log_version` parameter to `MYSQL_V3` and make sure that the minor engine version meets the requirements. If your RDS instance runs MySQL 8.0, the RDS instance must run a minor engine version of 20210930 or later. If your RDS instance runs MySQL 5.7, the RDS instance must run a minor engine version of 20210630 or later. For more information, see [Parameters supported by ApsaraDB RDS instances that run MySQL 8.0](/help/en/rds/apsaradb-rds-for-mysql/parameters-for-apsaradb-rds-instances-that-run-mysql-8-0#283d00b546cxu) and [Upgrade the minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance).
        
    -   **SQL Explorer Trial Edition:** If you use SQL Explorer Trial Edition, you cannot call the DescribeSQLLogRecords and DescribeSQLLogFiles operations to query audit logs. For more information, see [DescribeSQLLogRecords](/help/en/rds/api-query-logs-generated-by-sql-explorer#doc-api-Rds-DescribeSQLLogRecords) and [DescribeSQLLogFiles](/help/en/rds/api-query-audit-log-files-generated-by-sql-explorer-and-audit#doc-api-Rds-DescribeSQLLogFiles).
        
    -   **Lock wait time:** The lock wait time is recorded in the SQL Explorer log but not recorded in the slow query log.
        
    -   If you use the Prepare method, the **SQL Explorer** feature records two SQL statements. One statement contains a question mark (?) and another statement contains a specific value.
        
-   If you use the database proxy endpoint to connect to your RDS instance and the transaction-level connection pool feature is enabled for the database proxy, the connection may be reused. As a result, the IP address and port of the client may be different from the IP address and port that are returned by the `SHOW PROCESSLIST` statement or are displayed on the SQL Explorer tab. For more information, see [What are database proxies?](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#concept-2020985)
    
-   If an SQL statement is executed on your RDS instance that is attached to a PolarDB-X 1.0 instance, multiple logs are generated by the SQL Explorer and Audit feature for the RDS instance due to the horizontal sharding of databases and tables.
    

## Enable the SQL Explorer and Audit feature

**Note**

-   If you enable the audit log collection feature for your RDS instance in the CloudLens for RDS application of Simple Log Service, the SQL Explorer and Audit feature is automatically enabled for the RDS instance. For more information, see [CloudLens for RDS](/help/en/sls/cloudlens-for-rds).
    
-   If the SQL Explorer and Audit feature is disabled for your RDS instance and you want to view SQL execution records, you can view the binary logs of the RDS instance. However, in binary logs, you can query only the SQL statements that are executed to add, delete, and modify data within the backup retention period. The information about source IP addresses and accounts cannot be queried. For more information, see [Manage binary log files](/help/en/rds/apsaradb-rds-for-mysql/view-and-delete-the-binary-log-files-of-an-apsaradb-rds-for-mysql-instance#section-yl4-r0d-s46).
    

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the page that appears, choose **Autonomy Services** > **SQL Explorer and Audit**.
    
3.  Click **Enable DAS Enterprise Edition V3**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4742859371/p910467.png)
    
4.  Select the sub-features that you want to enable and click **Submit**.
    

## Modify the storage duration of data generated by the SQL Explorer and Audit feature

**Warning**

After you reduce the storage duration of the data that is generated by the SQL Explorer and Audit feature, DAS immediately deletes the SQL audit logs that are retained for a longer period of time than the storage duration. We recommend that you export and save SQL audit logs to your computer and then reduce the storage duration of the data that is generated by the SQL Explorer and Audit feature.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the page that appears, choose **Autonomy Services** > **SQL Explorer and Audit**.
    
3.  Click **Service Settings**.
    
4.  In the **Service Settings** panel, modify the storage duration of logs generated by the SQL Explorer and Audit feature and click **Submit**.
    

## Disable the SQL Explorer and Audit feature

**Warning**

After you disable the SQL Explorer and Audit feature, all SQL audit logs are deleted. We recommend that you export and save the logs. If you enable the SQL Explorer and Audit feature again, logs that are generated by the SQL Explorer and Audit feature are recorded from the point in time at which the SQL Explorer and Audit feature is enabled again.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the page that appears, choose **Autonomy Services** > **SQL Explorer and Audit**.
    
3.  In the **Logs** section of the **Search** tab, click **Export**.
    
    **Note**
    
    You can export up to 10 million data records within seven days at a time.
    
    You can configure the **Export Time Range** parameter to export logs generated in a large time range.
    
4.  In the dialog box that appears, configure the Exported Fields and Export Time Range parameters, and click **OK**.
    
5.  After the logs are exported, download the log file and save it to your computer.
    
6.  Click **Service Settings**. In the dialog box that appears, disable the SQL Explorer and Audit feature.
    
    If you have activated DAS Enterprise V3, **clear** all features of the SQL Explorer and Audit module. Click **Submit**.
    
    **Note**
    
    The storage space that is occupied by the data generated by the SQL Explorer and Audit module is released one hour after the SQL Explorer and Audit module is disabled.
    

## Migrate data between different versions of DAS Enterprise Edition

**Warning**

Data migration cannot be terminated or rolled back. Read the migration instructions carefully before you migrate data.

If your RDS instance supports DAS Enterprise Edition V3, you can migrate data from DAS Enterprise Edition V1 or DAS Enterprise Edition V2 to DAS Enterprise Edition V3 to reduce costs. For more information, see [How do I migrate data between versions of DAS Enterprise Edition?](/help/en/das/user-guide/faq#9fd034d40f87x).

Compared with DAS Enterprise Edition V1, the underlying storage architecture of DAS Enterprise Edition V2 is changed. The hybrid storage of hot and cold data is used to increase performance at lower costs. DAS Enterprise Edition V3 uses the hybrid storage of hot and cold data and subdivides the billable items by feature to achieve more flexible billing.

## **FAQ**

Q: What does the `logout!` statement in the **Full Request Statistics** section on the **SQL Explorer** tab indicate?

A: The `logout!` statement indicates a disconnection. The execution duration of the `logout!` statement is the difference between the last interaction time and the time when the disconnection occurs. During the time difference, the connection remains idle. The **1158** code displayed in the **Status** column indicates network disconnection that may be caused by the following reasons:

-   The client connection times out.
    
-   The server is disconnected.
    
-   The connection to the server is reset if the duration of the connection exceeds the value specified by the interactive\_timeout or wait\_timeout parameter.
    

Q: Why does a percent sign (**%**) appear in the **Access Source** column on the **Source Statistics** tab of the **SQL Explorer** tab?

A: When you use a stored procedure, a percent sign (%) may be displayed in the Access Source column on the Source Statistics tab of the SQL Explorer tab. You can perform the following operations to reproduce this situation.

**Note**

In this example, the database instance is an ApsaraDB RDS for MySQL instance, the test account is test\_user, and the test database is testdb.

1.  In the ApsaraDB RDS console, create a database and a standard account and grant permissions on the database to the standard account. For more information, see [Create accounts and databases](/help/en/rds/create-databases-and-accounts-for-an-apsaradb-rds-for-mysql-instance#concept-jyq-tc5-q2b).
    
2.  Use the test\_user account to connect to the database instance by using the CLI. For more information, see [Use a database client or the CLI to connect to an ApsaraDB RDS for MySQL instance](/help/en/rds/use-a-database-client-or-the-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance-2#concept-pdr-k2f-vdb).
    
3.  Switch to the testdb database and execute the following statements to create a stored procedure:
    
    ```
    -- Switch to the testdb database.
    USE testdb;
    
    -- Create a stored procedure.
    DELIMITER $$
    DROP PROCEDURE IF EXISTS `das` $$
    CREATE DEFINER=`test_user`@`%` PROCEDURE `das`()
    BEGIN
    SELECT * FROM information_schema.processlist WHERE Id = CONNECTION_ID();
    END $$
    DELIMITER;
    ```
    
4.  Use a privileged account to connect to the database instance. For more information, see [Use a database client or the CLI to connect to an ApsaraDB RDS for MySQL instance](/help/en/rds/use-a-database-client-or-the-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance-2#concept-pdr-k2f-vdb).
    
5.  Call the stored procedure that you created.
    
    ```
    -- Switch to the testdb database.
    USE testdb;
    
    -- Call the stored procedure.
    CALL das();
    
    +--------+-----------+--------+--------+---------+------+-----------+-------------------------------------------------------------------------+
    | ID     | USER      | HOST   | DB     | COMMAND | TIME | STATE     | INFO                                                                    |
    +--------+-----------+--------+--------+---------+------+-----------+-------------------------------------------------------------------------+
    | 487818 | test_user | %:2065 | testdb | Query   |    0 | executing | SELECT * FROM information_schema.processlist WHERE Id = CONNECTION_ID() |
    +--------+-----------+--------+--------+---------+------+-----------+-------------------------------------------------------------------------+
    ```
    

After I execute some SQL statements on my RDS instance, data is returned but the Logs section on the Search tab on the SQL Explorer and Audit page displays zero scanned rows. Why?

The `fast query cache` feature is enabled for the RDS instance. In the Logs section, the number of scanned rows for an SQL statement is the number of rows that are scanned on the InnoDB storage engine. After the `fast query cache` feature is enabled, MySQL caches the query results. If the same query request is sent and hits the query cache, the system directly returns the cached query result instead of sending the query request to the InnoDB storage engine. Therefore, after you execute some SQL statements, data is returned but the Logs section displays zero scanned rows. For more information, see [Fast query cache](/help/en/rds/apsaradb-rds-for-mysql/fast-query-cache).

What are the differences between SQL Explore logs and binary logs?

Both SQL Explore logs and binary logs contain information about the incremental changes made to your RDS instance. The two types of logs differ in the following aspects:

-   SQL Explorer logs are suitable for scenarios in which you want to obtain all incremental data in a database. If your RDS instance is heavily loaded, a small number of records are lost. As a result, the incremental data that is obtained from SQL Explorer logs may be inaccurate. SQL Explorer logs include information about all DQL, DML, and DDL operations that are executed. The system obtains the information that consumes a small amount of CPU resources from database kernels.
    
-   Binary logs are suitable for scenarios in which you want to obtain accurate incremental data within a short period of time. However, binary logs are not generated in real time. Binary logs record all add, delete, and modify operations that are performed and the incremental data that can be used to restore data. Binary log files are temporarily stored on your RDS instance. The system periodically transfers the binary log files to which data is written to an Object Storage Service (OSS) bucket. Binary log files can be stored for seven days in the OSS bucket. Binary log files to which data is being written cannot be transferred to an OSS bucket. Therefore, after you use the Upload Binlogs feature to upload binary logs files to an OSS bucket, some binary log files fail to be uploaded to the OSS bucket. For more information, see [How do I remotely obtain and parse the binary log file of an ApsaraDB RDS for MySQL instance?](/help/en/rds/apsaradb-rds-for-mysql/apsaradb-rds-for-mysql-remotely-obtains-and-parses-binlog-logs)
    

Why does the entry point to SQL Explore disappear in the ApsaraDB RDS console?

The SQL Explorer and Audit feature is updated. The entry point changes to **SQL Explorer and Audit**.

Can I enable the SQL Explorer feature?

No, you can enable only the [latest version of the SQL Explorer and Audit feature](/help/en/das/product-overview/editions) for your RDS instance.

Are the original SQL audit records retained in the system after I export them?

Yes, SQL audit records are retained in the system after they are exported.
