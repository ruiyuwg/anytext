Create a Scheduled SQL job to process data from a source Logstore and store the results in a destination Logstore.

**Important**

The Scheduled SQL feature is in public preview and is free of charge. After the public preview ends, you will be charged for the computing resources consumed by Dedicated SQL. For more information about billing, see Billable items for the pay-by-feature billing model.

## Prerequisites

-   A source SLS project and standard Logstore with log collection and indexes configured. For more information, see [Manage a project](/help/en/sls/manage-a-project/), [Create a standard logstore](/help/en/sls/manage-a-logstore), [Data collection overview](/help/en/sls/data-collection-overview), and [Create indexes](/help/en/sls/create-indexes).
    
-   A destination SLS project and standard Logstore with indexing enabled in the Alibaba Cloud account where the results are stored.
    

## Procedure

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com) with an Alibaba Cloud account or a RAM user that has permissions to create Scheduled SQL jobs.
    
2.  In the **Projects** section, click the project that contains the source Logstore.
    
3.  In the left-side navigation pane, click **Log Storage**. In the **Logstores** list, click the source Logstore.
    
4.  Enter a query statement and click **Last 15 Minutes** to set the time range.
    
    > This step previews the data for the Scheduled SQL job. Verify that the query statement is correct and that the results contain data.
    
5.  On the **Graph** tab, click **Save as Scheduled SQL Job**.
    
6.  Create the Scheduled SQL job.
    
    1.  In the **Compute Settings** section, configure the following parameters.
        
        **Parameter**
        
        **Description**
        
        **Job Name**
        
        Unique name for the Scheduled SQL job. Keep the default name.
        
        **Display Name**
        
        Display name for the job. The name must be 4 to 100 characters in length.
        
        **Write Mode**
        
        Select **Import Data from Logstore to Logstore**.
        
        **SQL Code**
        
        Displays the query statement from Step 4. To use a different query, enter the statement, select a time range, and click **Preview** to verify the results. Simple Log Service executes this statement to analyze data when the job runs.
        
    2.  Configure the **Target** parameters. The settings differ based on whether the source and destination Logstores belong to the same Alibaba Cloud account.
        
        **Same-account target settings**
        
        **Parameter**
        
        **Description**
        
        **Destination Region**
        
        Select the region of the destination project.
        
        **Destination Project**
        
        Select the destination project from the drop-down list.
        
        **Target Store**
        
        Select the destination Logstore from the drop-down list.
        
        **Write Authorization**
        
        Select **Default Role** or **Custom Role**. **Default Role**: Grants permissions to run SQL analysis in the source Logstore or Metricstore and write results to the destination Logstore or Metricstore. For more information, see [Use the default role to create a Scheduled SQL job](/help/en/sls/use-the-default-role-to-create-a-scheduled-sql-task). **Custom Role**: Uses a custom role and policy for fine-grained permission management. For more information, see [Grant the RAM role the permissions to write data to a destination logstore](/help/en/sls/use-a-custom-role-to-create-a-scheduled-sql-task).
        
        **Cross-account target settings**
        
        **Parameter**
        
        **Description**
        
        **Destination Region**
        
        Select **Other Regions** and accept the **Compliance Warranty On Cross-border Data Transfer**.
        
        **Destination Project**
        
        Enter the name of the destination project. Example: `test-project`.
        
        **Target Store**
        
        Enter the name of the destination Logstore. Example: `test-logstore`.
        
        **Write Authorization**
        
        Select **Custom Role**. For more information, see [Grant the RAM role the permissions to write data to a destination logstore](/help/en/sls/use-a-custom-role-to-create-a-scheduled-sql-task).
        
        **SQL Execution Authorization**
        
        Select **Default Role** or **Custom Role**. **Default Role**: Grants permissions to run SQL analysis in the source Logstore or Metricstore and write results to the destination Logstore or Metricstore. For more information, see [Use the default role to create a Scheduled SQL job](/help/en/sls/use-the-default-role-to-create-a-scheduled-sql-task). **Custom Role**: Uses a custom role and policy for fine-grained permission management. For more information, see [Grant a custom RAM role the permissions to analyze logs in a source logstore](/help/en/sls/use-a-custom-role-to-create-a-scheduled-sql-task).
        
        After you configure all settings in the **Compute Settings** section, click **Next**.
        
    3.  In the **Scheduling Settings** section, configure the following parameters, and then click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Scheduling Interval**
        
        Frequency at which the job runs. Each run creates an instance. **Fixed Interval**: Schedules the job at a fixed interval. **Cron**: Schedules the job using a cron expression with minute-level precision and a 24-hour clock. Example: `0 0/1 * * *` runs the job every hour starting at 00:00. Time zone configuration is only available in **Cron** mode. For supported time zones, see [Time zones](/help/en/sls/time-zones-2).
        
        **Scheduling Time Range**
        
        Time range during which the job is scheduled. **From Specific Time**: Sets the start time for the first instance. **Specific Time Range**: Sets a start and end time. The job runs only within this range. No new instances are created outside the specified range. The scheduling time range refers to `__time__`. For more information, see [Reserved fields](/help/en/sls/reserved-fields).
        
        **SQL Time Window**
        
        Time window for the logs analyzed during each run. Works with the scheduling interval. The window cannot exceed five times the **Scheduling Interval** and cannot exceed one day. For syntax details, see [Time expression syntax](/help/en/sls/time-expression-syntax). Example: If **Scheduling Interval** is Fixed Interval 10 Minutes, **Start At** is `2021-04-01 00:00:00`, **Delay Task** is 30 Seconds, and **SQL Time Window** is `[@m-10m,@m)`, the first instance runs at 00:00:30 and analyzes logs from `[23:50:00, 00:00:00)`. For more information, see [Scheduling and execution scenarios](/help/en/sls/how-scheduled-sql-works). The SQL time window refers to `__time__`. For more information, see [Reserved fields](/help/en/sls/reserved-fields). If `__time__` is not defined in the SQL code, the `__time__` value for logs written to the destination Logstore defaults to the start time of the scheduling window.
        
        **SQL Timeout**
        
        Threshold for automatic retries when SQL analysis fails. If the retry duration exceeds the maximum time or the retry count exceeds the maximum, the instance status changes to FAILED. To retry a failed instance manually, see [Retry a Scheduled SQL job instance](/help/en/sls/manage-a-scheduled-sql-job).
        
        **Delay Task**
        
        Delay in seconds (0 to 120) before execution begins after the scheduled time. Use this parameter to ensure data integrity when there is a delay writing data to the Logstore.
        
7.  After the job is created, choose **Job Management** > **Scheduled SQL** to view it. For more information, see [Manage Scheduled SQL jobs](/help/en/sls/manage-a-scheduled-sql-job).
    

## SDK example

[Create a Scheduled SQL job](/help/en/sls/developer-reference/use-log-service-sdk-for-java-to-create-a-scheduled-sql-task)
