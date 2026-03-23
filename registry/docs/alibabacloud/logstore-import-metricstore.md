Simple Log Service provides the Scheduled SQL feature. You can use the feature to analyze data at a scheduled time and aggregate data for storage. You can also use the feature to project and filter data. The Scheduled SQL feature can process data in a source logstore and store the processed data to a destination metricstore.

## Prerequisites

-   Data is collected to a source logstore. For more information, see [Data collection overview](/help/en/sls/data-collection-overview#concept-ikm-ql5-vdb).
    
-   Indexes are configured for the source logstore. For more information, see [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb).
    
-   A destination metricstore is created. For more information, see [Create a logstore](/help/en/sls/manage-a-logstore#section-v52-2jx-ndb).
    

**Important**

The logstores that are described in this topic are Standard logstores. For more information, see [Manage a logstore](/help/en/sls/manage-a-logstore#concept-xkb-zh5-vdb).

## Procedure

**Important**

The Scheduled SQL feature is in public preview. If you enable the feature, you are charged only for the computing resources that are consumed by Dedicated SQL. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the project that you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  On the **Log Storage** > **Logstores** tab, click the logstore that you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0151802371/p768903.png)
    
4.  Enter a query statement in the search box and click **Last 15 Minutes** to specify a query time range.
    
    For more information, see [Step 1: Create indexes](/help/en/sls/quick-guide-to-query-and-analysis#section-6xm-oul-cib).
    
    **Note**
    
    This step allows you to preview data before you create a Scheduled SQL job. You can check whether the query statement that you entered is valid and whether the query results contain data.
    
5.  On the **Graph** tab, click **Save as Scheduled SQL Job**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2461029171/p724389.png)
    
6.  Create a Scheduled SQL job.
    
    1.  In the **Compute Settings** step, configure the parameters and click **Next**.
        
        **Parameter**
        
        **Description**
        
        **Job Name**
        
        The name of the Scheduled SQL job.
        
        **Display Name**
        
        The display name of the Scheduled SQL job.
        
        **Task Description**
        
        The description of the Scheduled SQL job.
        
        **Resource Pool**
        
        The resource pool that is used for data analysis. Simple Log Service provides an enhanced type of resource pool.
        
        The enhanced type of resource pool reuses the computing capability of Dedicated SQL. The enhanced type of resource pool can meet concurrent analysis requirements and isolate resources between Scheduled SQL and your SQL analysis operations in the console. You are charged for the enhanced type of resource pool based on the CPU time that is consumed by your SQL analysis operations. For more information, see [Enable Dedicated SQL](/help/en/sls/dedicated-sql/#task-2081182).
        
        **Write Mode**
        
        Select **Import Data from Logstore to Metricstore**. The Scheduled SQL feature processes data in the source logstore and writes the processed data to the destination metricstore.
        
        **SQL Code**
        
        The query statement. By default, the system displays the statement that you entered in Step [4](#step-3a6-xes-4mu). The preview operation provided for this parameter has the same effect as the preview operation in Step [4](#step-3a6-xes-4mu). You can click Preview to check whether the query statement is valid and whether the query results contain data.
        
        When the Scheduled SQL job runs, Simple Log Service executes this query statement to analyze data.
        
        **SQL Settings**
        
        **Metric Column**
        
        The metric columns. Simple Log Service aggregates data based on the query statement that you entered. You can select one or more columns of the numeric data type in the query results for this parameter. For more information, see [Metric](/help/en/sls/metric#concept-2539048).
        
        **Labels**
        
        The label data. Simple Log Service aggregates data based on the query statement that you entered. You can select one or more columns in the query results for this parameter. For more information, see [Metric](/help/en/sls/metric#concept-2539048).
        
        **Rehash**
        
        The switch for hashing. If you turn on **Rehash**, you can configure the **Hash Column** parameter to write data that has the same value in a column to the same shard. This improves data locality and query efficiency.
        
        Valid values of the **Hash Column** parameter vary based on the query results. You can select one or more columns in the query results as hash columns. For example, if you set **Hash Column** to status, data that has the same value in the status column is written to the same shard.
        
        **Time Column**
        
        -   If you select the time column whose values are UNIX timestamps in the query results for this parameter, the system uses the values of the time column to indicate the time of metrics. Example: `atime:1627025331`.
            
        -   If you set the value to **Null**, the system uses the start time of the query statement to indicate the time of metrics.
            
        
        For more information, see [Metric](/help/en/sls/metric#concept-2539048).
        
        **Additional Labels**
        
        The static labels that are used to identify the attributes of a metric. Each label is in the key-value pair format.
        
        For example, you can set label\_key to app and label\_value to ingress-nginx.
        
        **Source Project/Logstore**
        
        The project and logstore to which the source data belongs.
        
        **Target**
        
        **Destination Region**
        
        The region where the destination project resides.
        
        **Destination Project**
        
        The name of the destination project, which stores the results of the query statement.
        
        **Target Store**
        
        The name of the destination metricstore, which stores the results of the query statement.
        
        **Write Authorization**
        
        The method that is used to authorize the Scheduled SQL job to write data to the destination metricstore. Valid values:
        
        -   **Default Role**: The Scheduled SQL job assumes the AliyunLogETLRole system role to write the analysis results to the destination metricstore.
            
        -   **Custom Role**: The Scheduled SQL job assumes a custom role to write the analysis results to the destination metricstore. You must grant the custom role the permissions to write data to the destination metricstore. Then, enter the Alibaba Cloud Resource Name (ARN) of the custom role in the **Role ARN** field. For more information, see [Grant the RAM role the permissions to write data to a destination logstore](/help/en/sls/use-a-custom-role-to-create-a-scheduled-sql-task#section-y0g-xgw-dqb).
            
        
        **SQL Execution Authorization**
        
        The method that is used to authorize the Scheduled SQL job to read data from the source logstore and analyze the data by using query statements in the current project. Valid values:
        
        -   **Default Role**: The Scheduled SQL job assumes the AliyunLogETLRole system role to perform the required operations.
            
        -   **Custom Role**: The Scheduled SQL job assumes a custom role to perform the required operations.
            
            You must grant the custom role the required permissions. Then, enter the ARN of the custom role in the **Role ARN** field. For more information, see [Step 1: Grant the RAM role the permissions to analyze log data in a source](/help/en/sls/use-a-custom-role-to-create-a-scheduled-sql-task#section-7yt-07b-st7) logstore.
            
        
    2.  In the **Scheduling Settings** step, configure the following parameters and click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Specify Scheduling Interval**
        
        The frequency at which the Scheduled SQL job is scheduled. An instance is generated each time the Scheduled SQL job is scheduled. This parameter determines the scheduled time for each instance. Valid values:
        
        -   **Hourly**: The scheduled SQL task is scheduled every hour.
            
        -   **Daily**: The scheduled SQL task is scheduled at a fixed time every day.
            
        -   **Weekly**: The scheduled SQL task is scheduled at a fixed time on a fixed day of each week.
            
        -   **Fixed Interval**: The scheduled SQL task is scheduled at a fixed interval.
            
        -   **Cron**: The scheduled SQL task is scheduled at an interval that is specified by using a cron expression.
            
            If you use a cron expression, the specified interval is accurate to minutes based on the 24-hour clock. For example, the expression 0 0/1 \* \* \* indicates that the scheduled SQL task is scheduled every hour from 00:00.
            
            If you need to specify the time zone, select **Cron**. For a list of common time zones, see [Time zones](/help/en/sls/time-zones-2#concept-2071766).
            
        
        **Scheduling Time Range**
        
        The time range during which the Scheduled SQL job is scheduled. Valid values:
        
        -   **Start at a specified time**: specifies the time when the scheduled SQL task is first scheduled.
            
        -   **Within Specific Period**: specifies the time range within which the scheduled SQL task is scheduled.
            
        
        **Note**
        
        -   If you specify the time range, the instances of the Scheduled SQL job can run only within the time range. After the end time, the Scheduled SQL job no longer generates instances.
            
        -   Scheduling Time Range is the `__time__` field. For more information, see [Reserved fields](/help/en/sls/reserved-fields#concept-adr-ktr-gfb).
            
        
        **SQL Time Window**
        
        The time window of logs that are analyzed when the Scheduled SQL job runs. This parameter must be configured together with the Scheduling Time Range parameter. The duration specified by this parameter can be up to five times the duration specified by **Specify Scheduling Interval**. The start time and end time of the SQL time window must be within 24 hours. For more information, see [Time expression syntax](/help/en/sls/time-expression-syntax#concept-2067490).
        
        For example, **Specify Scheduling Interval** is set to **Fixed Interval 10 Minutes**, **Start Time** is set to **2021-04-01 00:00:00**, **Delay Task** is set to **30 Seconds**, and **SQL Time Window** is set to **\[@m-10m,@m)**. In this example, the first instance of the Scheduled SQL job is generated at 00:00:30 to analyze the logs that fall in the time range \[23:50:00 to 00:00:00). For more information, see [Scheduling and running scenarios](/help/en/sls/how-scheduled-sql-works#section-lm0-vii-6uw).
        
        **Note**
        
        -   SQL Time Window is the `__time__` field. For more information, see [Reserved fields](/help/en/sls/reserved-fields#concept-adr-ktr-gfb).
            
        -   If `__time__` is not defined in the SQL code, the log time `__time__` written to the target metricstore defaults to the start time of the scheduled SQL job.
            
        
        **SQL Timeout**
        
        The threshold of automatic retries if the SQL analysis operation fails. If an instance is retried for a period that exceeds the maximum time that you specify or the number of retries for an instance exceeds the upper limit that you specify, the instance stops retrying and enters the FAILED state. You can manually retry the instance based on the failure cause. For more information, see [Retry a scheduled SQL instance](/help/en/sls/manage-a-scheduled-sql-job#section-h6h-b64-y3y).
        
        **Delay Task**
        
        The number of seconds for which the instance is delayed from the scheduled time. Valid values: 0 to 120. Unit: seconds.
        
        If latency exists when data is written to the destination metricstore, you can use this parameter to ensure data integrity.
        
        After the Scheduled SQL job is created, you can view the SQL execution result in the destination metricstore.
        

## Sample SDKs

[Use Log Service SDK for Java to create a Scheduled SQL task](/help/en/sls/developer-reference/use-log-service-sdk-for-java-to-create-a-scheduled-sql-task#task-2218965)
