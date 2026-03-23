ApsaraDB RDS for SQL Server lets you modify parameter configurations in the console or using an API. This helps you customize instance parameters to meet your business needs. You can also query the history of parameter modifications.

## Prerequisites

The ApsaraDB RDS for SQL Server instance must meet the following requirements:

-   Instance type: General-purpose or Dedicated. [Shared](/help/en/rds/product-overview/instance-families) instance types are not supported.
    
-   Billing method: Subscription or pay-as-you-go. [Serverless ApsaraDB RDS for SQL Server instances](/help/en/rds/apsaradb-rds-for-sql-server/serverless/) are not supported.
    

**Note**

For unsupported instances, you can [set instance parameters using SQL commands](/help/en/rds/apsaradb-rds-for-sql-server/execute-sql-statements-to-configure-instance-parameters).

## Usage notes

-   To ensure instance stability, you can modify only the parameters that are displayed in the console. Parameters that are not displayed in the console cannot be modified.
    
-   Parameter modifications typically take effect within 10 seconds. For specific effective times, see the [parameter details table](#11409b760414d). You do not need to restart the instance after you modify any of the supported parameters in the console.
    
-   If a primary instance of the Cluster Edition has read-only instances, parameter changes on the primary instance are not automatically synchronized to its read-only instances. You must configure the parameters for each read-only instance separately.
    
-   If you modify a Trace Flag (TF) parameter and then manually restart the instance, the system automatically applies the new TF value after the restart. However, the change takes effect after a buffer delay of about 10 minutes.
    

## **View parameter values**

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Parameters**. You can view the configuration of each parameter in the parameter list.
    

## Modify parameter values

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Parameters**.
    
3.  On the **Modifiable Parameters** tab, find the parameter that you want to modify and click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7852126271/p712277.png) icon in the **Running Value** column.
    
4.  Enter the target value and click **OK**.
    
5.  Click **Apply Changes**. In the dialog box that appears, click **OK**.
    
    **Important**
    
    You must click the **Apply Changes**. button. Otherwise, the modification does not take effect.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7852126271/p840394.png)
    

## Query parameter modification history

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Parameters**.
    
3.  Click the **Edit History** tab, select a time range, and then click **OK**.
    

## **Appendix: Modifiable parameters**

**Note**

For more information about the parameters, see [the Microsoft documentation](https://learn.microsoft.com/zh-cn/sql/database-engine/configure-windows/server-configuration-options-sql-server?view=sql-server-2017).

### **Server configuration parameters**

**Parameter name**

**Description**

**Default value**

**Value range**

`Ad Hoc Distributed Queries`

Enables ad hoc distributed queries.

0

\[0-1\]

`Database Mail XPs`

Enables Database Mail.

0

\[0-1\]

`blocked process threshold (s)`

Specifies the threshold, in seconds (s), at which blocked process reports are generated.

0

\[0-86400\]

`clr enabled`

Specifies whether SQL Server can run user assemblies.

0

\[0-1\]

`clr strict security`

Controls the `SAFE`, `EXTERNAL ACCESS`, and `UNSAFE` permissions in SQL Server.

0

\[0-1\]

`cost threshold for parallelism`

Configures the cost threshold for parallelism.

5

\[0-32767\]

`default full-text language`

Specifies the default language for full-text indexes.

1033

\[0-6000\]

`default language`

Configures the default language. It specifies the default language for all newly created logon accounts.

0

\[0-33\]

`filestream access level`

Changes the FILESTREAM access level for this SQL Server instance.

0

\[0-2\]

`max degree of parallelism`

Configures the maximum degree of parallelism.

2

\[0-64\]

`remote query timeout (s)`

The duration, in seconds (s), that a remote operation can take before SQL Server times out.

600

\[0-2147183647\]

`remote login timeout (s)`

Specifies the number of seconds to wait before returning from a failed attempt to log on to a remote server.

10

\[0-2147183647\]

`query wait (s)`

Configures the query wait time.

30

\[-1-38400\]

`optimize for ad hoc workloads`

Configures optimization for ad hoc workloads.

0

\[0-1\]

`nested triggers`

Configures nested triggers.

1

\[0-1\]

`max worker threads`

Configures the maximum number of worker threads.

0

\[128-65535\]

`max text repl size (B)`

Configures the maximum text replication size.

65536

\[0-2147483647\]

`remote proc trans`

A Microsoft Distributed Transaction Coordinator (MS DTC) transaction that helps protect server-to-server procedure operations.

0

\[0-1\]

`query governor cost limit`

The cost limit. It specifies an upper limit on the estimated cost allowed for a given query to run.

0

\[0-2147483647\]

`recovery interval (min)`

The recovery interval, in minutes. It defines an upper limit on the time required to recover a database.

0

\[0-30\]

`min memory per query (KB)`

The minimum memory per query. It specifies the minimum amount of memory, in KB, that is allocated for the execution of a query.

1024

\[512-2147483647\]

`in-doubt xact resolution`

Controls the default transaction outcome for transactions that the Microsoft Distributed Transaction Coordinator (MS DTC) cannot resolve.

0

\[0-2\]

`rds_slow_log_threshold`

Specifies the threshold for capturing slow SQL statements on the instance, in milliseconds (ms). SQL statements that exceed this threshold are recorded as slow query logs. The change takes effect in about 5 minutes. You do not need to restart the instance.

**Important**

Set a reasonable threshold. We recommend a value of 1000 ms or greater. A value that is too low can cause many SQL statements to be captured, which hinders log filtering and affects instance performance. Balance your monitoring needs with the system load.

0

\[0-60000\]

`rds_capture_sql_param`

Controls whether to display the full details of SQL parameters in the [Audit Log](/help/en/rds/apsaradb-rds-for-sql-server/use-the-sql-explorer-and-audit-feature-on-an-apsaradb-rds-for-sql-server-instance) and [Slow Log Details](/help/en/rds/apsaradb-rds-for-sql-server/use-the-slow-query-analysis-feature-for-an-apsaradb-rds-for-mysql-instance-1). Set the value to 1 to enable this feature. The default value is 0 (disabled). The change takes effect in about 5 minutes. You do not need to restart the instance.

**Example: Effects and impacts of enabling the feature**

**Before enabling**

**After enabling**

**Impacts after enabling**

Only the SQL statement template is recorded. The specific parameter values passed during execution are missing.

The full details of the SQL statement are displayed.

Features such as [SQL Explorer](/help/en/rds/apsaradb-rds-for-sql-server/use-the-sql-explorer-and-audit-feature-on-an-apsaradb-rds-for-sql-server-instance) and [Slow Log Statistics](/help/en/rds/apsaradb-rds-for-sql-server/use-the-slow-query-analysis-feature-for-an-apsaradb-rds-for-mysql-instance-1) cannot perform aggregation statistics on similar SQL statements.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0741077571/p1005244.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0741077571/p1005245.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0741077571/p1005246.png)

**Important**

Before you enable this feature, make sure that your environment is secure and controllable. Fully assess the convenience for troubleshooting and the impact on the system.

-   **Feature impact**: After this feature is enabled, the log format changes. This prevents DAS features such as [SQL Explorer](/help/en/rds/apsaradb-rds-for-sql-server/use-the-sql-explorer-and-audit-feature-on-an-apsaradb-rds-for-sql-server-instance) and [Slow Log Statistics](/help/en/rds/apsaradb-rds-for-sql-server/use-the-slow-query-analysis-feature-for-an-apsaradb-rds-for-mysql-instance-1) from performing aggregation statistics on similar SQL statements.
    
-   **Security risk**: Recording actual parameters in plaintext may expose sensitive information, such as passwords.
    

0

\[0-1\]

### **Trace flags**

**Parameter name**

**Description**

**Default value**

**Value range**

1204

Returns the resources and types of locks participating in a deadlock and the currently affected command.

0

\[0-1\]

1211

Disables lock escalation that occurs due to out-of-memory conditions or the number of locks. This prevents the SQL Server Database Engine from escalating row or page locks to table locks.

0

\[0-1\]

1222

Returns the resources and types of locks participating in a deadlock and the currently affected command, in an XML format that does not conform to any XSD schema.

0

\[0-1\]

1224

Controls lock escalation behavior. When this flag is enabled, SQL Server limits lock escalation based on the number of locks. This helps avoid widespread blocking issues in high-concurrency scenarios. Unlike trace flag 1211, which completely disables lock escalation, trace flag 1224 is more flexible because it limits lock escalation only when potential blocking is detected. This flag is primarily used in high-concurrency environments to prevent performance bottlenecks caused by unnecessary table-level locks.

0

\[0-1\]

2528

Disables parallel object checking for `DBCC CHECKDB`, `DBCC CHECKFILEGROUP`, and `DBCC CHECKTABLE`.

**Note**

This parameter can be modified only for versions earlier than SQL Server 2014.

0

\[0-1\]

3205

Disables hardware compression for tape drives.

0

\[0-1\]

3226

Suppresses backup log entries.

0

\[0-1\]

4199

Enables query optimizer (QO) hotfixes released in SQL Server cumulative updates and service packs.

**Note**

This parameter can be modified only for versions earlier than SQL Server 2016.

0

\[0-1\]

4616

Makes server-level metadata visible to application roles.

0

\[0-1\]

6527

Disables memory dump generation for the first out-of-memory exception in CLR integration.

0

\[0-1\]

692

Disables fast inserts when data is bulk loaded into a heap or clustered index.

**Note**

This parameter can be modified only for versions earlier than SQL Server 2016.

0

\[0-1\]

1117

When a file in a filegroup meets the autogrow threshold, all files in the filegroup grow.

**Note**

This parameter can be modified only for versions earlier than SQL Server 2016.

0

\[0-1\]

1118

Forces page allocations on uniform extents instead of mixed extents to reduce contention on the SGAM page.

**Note**

This parameter can be modified only for versions earlier than SQL Server 2016.

0

\[0-1\]

1262

Optimizes parallel processing for partitioned tables, especially in high-throughput scenarios. When processing large-scale partitioned tables, trace flag 1262 can help reduce performance bottlenecks caused by imbalanced load distribution or partition-level parallel processing. This flag is particularly useful for queries that require parallel access to large amounts of data.

0

\[0-1\]

2335

Ensures that the memory configured for SQL Server remains available for the data cache, query execution, and other consumers.

0

\[0-1\]

2371

Changes the fixed update statistics threshold to a linear update statistics threshold.

**Note**

This parameter can be modified only for versions earlier than SQL Server 2016.

0

\[0-1\]

2430

Enables alternate lock class cleanup.

0

\[0-1\]

3604

Sends diagnostic output to the client. This flag is typically enabled when using DBCC commands, such as DBCC PAGE. It lets you view information such as page structures and metadata to help with in-depth performance troubleshooting, such as checking for lock contention or other resource contention issues. This flag is often used for database performance diagnostics or data structure analysis.

0

\[0-1\]

6498

Manages memory usage for the compilation of incoming queries to prevent compilation waits for concurrent large queries.

**Note**

This parameter can be modified only for versions earlier than SQL Server 2014.

0

\[0-1\]

8048

Converts NUMA-partitioned memory objects to CPU-partitioned memory objects.

**Note**

This parameter can be modified only for versions earlier than SQL Server 2014.

0

\[0-1\]

## **FAQ**

Do parameter changes take effect immediately? Is a restart required?

Changes typically take effect within 10 seconds. For the specific effective time of each parameter, see the [parameter details table](#11409b760414d). You do not need to restart the instance after you modify any of the supported parameters in the console.

Why are the parameter changes not taking effect?

Make sure that you click **Submit Parameters** after you set the parameter value. The modification task is executed only after you click this button.

## **Related operations**

-   To query the current parameter configuration of an instance using an API, see [DescribeParameters](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-describeparameters-sqlserver).
    
-   To modify the parameters of an RDS instance using an API, see [ModifyParameter](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-modifyparameter-sqlserver).
    
-   To set instance parameters using SQL commands, see [Set instance parameters using SQL commands](/help/en/rds/apsaradb-rds-for-sql-server/execute-sql-statements-to-configure-instance-parameters).
