Tair (Redis OSS-compatible) integrates the diagnostic report feature of Database Autonomy Service (DAS). This feature allows you to create a diagnostic report to evaluate the status of an instance within a specific period of time. Diagnostic reports collect metrics such as the performance level, skewed request distribution, and slow query logs to help you identify exceptions in the instance.

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane, choose **CloudDBA** > **Diagnostic Reports**.
3.  Click **Create Reports**.
4.  In the dialog box that appears, specify a time range for which you want to create a diagnostic report and click **OK**.
    
    **Note** The time range cannot exceed one day. If you specify a shorter time range for diagnostics, more detailed statistics are collected in the diagnostic report.
    
5.  Refresh the Diagnostic Report page to view the progress of the diagnostics task. After the diagnostic report is created, click **View Report** in the **Actions** column.
    
    **Note** For more information about how to interpret a diagnostic report, see [Analyze a diagnostic report](/help/en/redis/user-guide/analyze-a-diagnostic-report#concept-2045852).
