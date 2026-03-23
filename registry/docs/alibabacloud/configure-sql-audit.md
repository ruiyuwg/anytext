AnalyticDB for MySQL provides the SQL audit feature to log real-time DML and DDL operations that are executed in databases. You can query database operation information from audit logs.

## Limits

The following operations are not recorded in SQL audit logs:

-   `INSERT INTO VALUES`
    
-   `REPLACE INTO VALUES`
    
-   `UPSERT INTO VALUES`
    

## Enable or disable the SQL audit feature

1.  Log on to the [AnalyticDB for MySQL console](https://ads.console.alibabacloud.com/). In the upper-left corner of the console, select a region. In the left-side navigation pane, click **Clusters**. Find the cluster that you want to manage and click the cluster ID.
    
2.  Go to the **SQL Audit** page.
    
    -   For an AnalyticDB for MySQL Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster: In the left-side navigation pane, choose **Cluster Management** > **SQL Audit**.
        
    -   For an AnalyticDB for MySQL Data Warehouse Edition cluster: In the left-side navigation pane, click **Data Security**. Click the **SQL Audit** tab.
        
3.  Click **Configure SQL Audit**.
    
4.  In the Configure SQL Audit dialog box, select **Yes** and click **OK**.
    
    ![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8380394261/p279164.png)
    
5.  If you no longer need the SQL audit feature, repeat Steps 1 to 3 and then select **No** in the **Configure SQL Audit** dialog box.
    
    **Important**
    
    After you disable the SQL audit feature, SQL audit logs are cleared. You must [query and export SQL audit logs](#section-qvu-taw-qch) before you disable the SQL audit feature. When you re-enable the SQL audit feature, audit logs that are generated from the time when the SQL audit feature was last enabled are available for queries.
    

## Query and export SQL audit logs

On the **SQL Audit** tab, you can query SQL audit logs within a specific period of time by using the **Operation Type** or **Execution Status** parameter.

**Note**

-   You can query only SQL audit logs that were generated within the last 30 days.
    
-   The time range for a single query must be within 24 hours. If you want to save SQL audit logs to your on-premises device, click **Export Current Page**.
    

## **FAQ**

Q: The INSERT OVERWRITE statement involves two SQL audit logs, and one of the logs contains an IP address other than the client IP address. Why?

A: The INSERT OVERWRITE statement is executed in AnalyticDB for MySQL in an asynchronous manner. The AnalyticDB for MySQL access node allocates query jobs to different storage nodes and returns the final result to the client. In this case, the SQL audit logs contain the IP address of the client that submits a request and the IP address of the AnalyticDB for MySQL access node.

## Related operations

**Edition**

**Operation**

Enterprise Edition, Basic Edition, and Data Lakehouse Edition

[ModifyAuditLogConfig](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/api-adb-2021-12-01-modifyauditlogconfig#main-107864)

[DescribeAuditLogRecords](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/api-adb-2021-12-01-describeauditlogrecords#main-107864)

Data Warehouse Edition

[DescribeAuditLogConfig](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/api-adb-2019-03-15-describeauditlogconfig#main-107864)

[ModifyAuditLogConfig](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/api-adb-2019-03-15-modifyauditlogconfig#main-107864)

[DescribeAuditLogRecords](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/api-adb-2019-03-15-describeauditlogrecords#main-107864)
